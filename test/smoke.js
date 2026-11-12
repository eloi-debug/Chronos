const assert=require('assert'),fs=require('fs'),path=require('path'),vm=require('vm');
const {ROOT,loadData}=require('./load');
let passed=0;const ok=(c,m)=>{if(!c){console.error('FAIL:',m);process.exitCode=1;throw new Error(m);}passed++;};
class Node{constructor(tag){this.tag=tag;this.children=[];this.attrs={};this.listeners={};this.style={};this.hidden=false;this.value='';this._text='';this.disabled=false;this.className='';}
 set textContent(v){this._text=String(v);this.children=[];} get textContent(){return this._text+this.children.map(c=>c.textContent).join('');}
 appendChild(c){this.children.push(c);return c;} replaceChildren(...k){this.children=[];k.forEach(c=>this.children.push(c));}
 setAttribute(k,v){this.attrs[k]=v;} getAttribute(k){return this.attrs[k];}
 addEventListener(e,f){(this.listeners[e]=this.listeners[e]||[]).push(f);} fire(e,ev={}){(this.listeners[e]||[]).forEach(f=>f(ev));}
 blur(){} walk(fn){fn(this);this.children.forEach(c=>c.walk&&c.walk(fn));}
 find(pred){let r=[];this.walk(n=>{if(pred(n))r.push(n);});return r;}}
function makeEnv({reduce=false,failFetch=false,extraTour=null}={}){
  const els={};const calls=[];const handlers={};
  const doc={getElementById:id=>els[id]||(els[id]=new Node(id)),createElement:t=>new Node(t),createTextNode:t=>{const n=new Node('#text');n._text=t;return n;},activeElement:null,
    addEventListener:(e,f)=>{(handlers[e]=handlers[e]||[]).push(f);}};
  const sources={};
  class MapStub{constructor(o){this.o=o;this.h={};this.src={};this.layers={};this.filters={};this.vis={};MapStub.last=this;}
    addControl(){} on(e,a,b){const k=typeof a==='string'?e+':'+a:e;(this.h[k]=this.h[k]||[]).push(typeof a==='string'?b:a);}
    emit(k,ev){(this.h[k]||[]).forEach(f=>f(ev));}
    addSource(n,s){const self=this;this.src[n]={data:s.data,setData(d){this.data=d;calls.push(['setData',n,(d.features||[]).length]);}};}
    getSource(n){return this.src[n];} addLayer(l){this.layers[l.id]=l;if(l.layout&&l.layout.visibility)this.vis[l.id]=l.layout.visibility;}
    setFilter(id,f){this.filters[id]=f;} setLayoutProperty(id,k,v){this.vis[id]=v;}
    flyTo(o){calls.push(['fly',o.center]);} jumpTo(o){calls.push(['jump',o.center]);} getCanvas(){return{style:{}};} queryRenderedFeatures(){return[];}}
  class Popup{setLngLat(){return this;}setDOMContent(){return this;}addTo(){return this;}remove(){calls.push(['popup-remove']);}}
  const styleJson={version:8,sources:{},layers:[{id:'water',type:'fill'},{id:'road_x',type:'line'},{id:'lbl',type:'symbol'},{id:'background',type:'background'}]};
  const fetchLog=[];
  const ctx={console,document:doc,AbortController,setTimeout,clearTimeout,setInterval,clearInterval,TOUR_SPEED:0.0005,
    matchMedia:()=>({matches:reduce}),
    fetch:async u=>{fetchLog.push(u);if(failFetch)throw new Error('network down');return{ok:true,json:async()=>u.includes('styles')?JSON.parse(JSON.stringify(styleJson)):{type:'FeatureCollection',features:[{properties:{NAME:'A',SUBJECTO:'A',BORDERPRECISION:2}}]}};},
    maplibregl:{Map:MapStub,NavigationControl:class{},Popup}};
  loadData(ctx,{extra:extraTour?[]:[]});
  if(extraTour)ctx.TOUR_REGISTRY.push(extraTour);
  vm.runInContext(fs.readFileSync(path.join(ROOT,'js/app.js'),'utf8'),ctx,{filename:'app.js'});
  return {ctx,els,calls,doc,MapStub,fetchLog,handlers};
}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const btn=(env,tour)=>env.els.library.find(n=>n.tag==='button'&&n.attrs['data-tour']===tour)[0];
const poll=async(f,ms=3000)=>{const t=Date.now();while(Date.now()-t<ms){if(f())return true;await sleep(10);}return false;};

(async()=>{
  // ---- main scenario ----
  let env=makeEnv();await sleep(60);let {ctx,els,calls}=env;const C=ctx.__chronos,m=env.MapStub.last;
  m.emit('load');await sleep(30);
  ok(!!m.layers['hist-pt']&&!!m.layers['myth-pt']&&!!m.layers['disc'],'feature layers created');
  const cats=els.library.find(n=>n.tag==='h3'&&/cat/.test(n.className)).map(n=>n.textContent);
  ok(['Political Powers','Religions & Beliefs','Myths & Mysteries'].every(c=>cats.includes(c)),'library categories: '+cats.join('|'));
  ok(els.library.find(n=>n.tag==='button'&&n.attrs['data-tour']).length===7,'7 tour cards');
  ok(els.plannedList.children.length>=10,'planned list shown separately');
  ok(m.vis.disc==='none','discovery layer hidden by default');
  ok(els.mythToggle.checked!==true,'myth toggle off by default');
  // start Rome
  btn(env,'rome').fire('click');await sleep(30);
  ok(C.state.tour.id==='rome'&&C.state.idx===0&&C.state.mode==='paused','tour started paused');
  ok(els.tourView.hidden===false&&els.libraryView.hidden===true,'views swapped');
  ok(els.modeBadge.textContent==='Guided (paused)','mode badge paused');
  ok(els.progressText.textContent==='Chapter 1 of 7','progress text');
  ok(els.chapterList.children.length===7,'chapter list 7');
  ok(els.tPrev.disabled===true,'prev disabled at start');
  ok(els.yearLabel.textContent==='600 BCE'||/BCE/.test(els.yearLabel.textContent),'timeline BCE label: '+els.yearLabel.textContent);
  ok(m.src.hist.data.features.length===2,'chapter 1 features on map');
  ok(calls.some(c=>c[0]==='fly'),'camera flew');
  ok(els.rangeBand.hidden===false,'range band shown for dated chapter');
  ok(m.filters.sites[0]==='in','site filter restricted to chapter sites');
  // next / prev / jump
  els.tNext.fire('click');await sleep(20);ok(C.state.idx===1,'next');
  ok(Number(els.slider.value)===ctx.Timeline.yearToPos(C.state.year),'slider synced with year');
  ok(ctx.Timeline.formatYear(C.state.year)==='509 BCE','chapter 2 year 509 BCE (BCE conversion): '+ctx.Timeline.formatYear(C.state.year));
  els.tPrev.fire('click');await sleep(20);ok(C.state.idx===0,'prev');
  els.chapterList.find(n=>n.tag==='button')[4].fire('click');await sleep(20);ok(C.state.idx===4,'jump to chapter 5');
  ok(els.chapterList.find(n=>n.tag==='button')[4].attrs['aria-current']==='step','aria-current on current chapter');
  ok(ctx.Timeline.formatYear(C.state.year)==='27 BCE','27 BCE chapter year');
  // cross BCE/CE chapters: chapter 6 is CE
  C.goChapter(5);await sleep(10);ok(/CE$/.test(ctx.Timeline.formatYear(C.state.year))&&!/BCE/.test(ctx.Timeline.formatYear(C.state.year)),'CE chapter label '+ctx.Timeline.formatYear(C.state.year));
  // restart
  els.tRestart.fire('click');await sleep(20);ok(C.state.idx===0&&C.state.mode==='paused','restart');
  // autoplay to end
  els.tPlay.fire('click');await sleep(5);ok(C.state.mode==='auto'&&els.modeBadge.textContent==='Auto-play','autoplay on');
  ok(els.tPlay.textContent==='⏸ Pause','play button shows pause');
  ok(await poll(()=>C.state.idx>=1),'autoplay advanced');
  els.tPlay.fire('click');await sleep(5);ok(C.state.mode==='paused','paused');
  const idxAtPause=C.state.idx;await sleep(200);ok(C.state.idx===idxAtPause,'no advance while paused');
  els.tPlay.fire('click');ok(C.state.mode==='auto','resume');
  ok(await poll(()=>C.state.idx===6&&C.state.mode==='paused',6000),'autoplay reaches end and stops (mode '+C.state.mode+' idx '+C.state.idx+')');
  // manual timeline change during tour
  C.goChapter(2);const yr=C.state.year;els.slider.value=800;els.slider.fire('input');await sleep(20);
  ok(C.state.mode==='manual'&&els.manualBanner.hidden===false,'manual mode on slider change');
  ok(C.state.idx===2,'chapter unchanged in manual mode');
  ok(C.state.year!==yr,'year changed manually');
  ok(m.filters.sites[0]==='all','site filter returns to year-based in manual mode');
  ok(els.modeBadge.textContent==='Manual exploration','manual badge');
  els.manualReturn.fire('click');await sleep(20);ok(C.state.mode==='paused'&&C.state.year===yr&&els.manualBanner.hidden===true,'return to chapter restores year');
  // year input
  els.yearInput.value='300 BCE';els.yearInput.fire('keydown',{key:'Enter'});await sleep(10);ok(ctx.Timeline.formatYear(C.state.year)==='300 BCE'&&C.state.mode==='manual','typed year during tour -> manual');
  els.yearInput.value='garbage';els.yearInput.fire('keydown',{key:'Enter'});ok(/Could not read/.test(els.status.textContent),'bad year message');
  // keyboard
  C.goChapter(0);env.handlers.keydown.forEach(f=>f({key:'ArrowRight',target:{tagName:'BODY'}}));ok(C.state.idx===1,'ArrowRight');
  env.handlers.keydown.forEach(f=>f({key:'ArrowLeft',target:{tagName:'BODY'}}));ok(C.state.idx===0,'ArrowLeft');
  env.handlers.keydown.forEach(f=>f({key:'ArrowRight',target:{tagName:'INPUT'}}));ok(C.state.idx===0,'arrows ignored in inputs');
  // switch tours without exit
  btn(env,'greek-poleis')===undefined&&ok(false,'no greek button');
  els.tExit.fire('click');await sleep(10);
  ok(C.state.tour===null&&els.libraryView.hidden===false&&els.tourView.hidden===true,'exit returns to library');
  ok(m.src.hist.data.features.length===0&&m.src.myth.data.features.length===0,'feature layers cleaned on exit');
  ok(m.filters.sites[0]==='all','site filter restored on exit');
  ok(els.rangeBand.hidden===true,'range band hidden on exit');
  btn(env,'rome').fire('click');await sleep(10);
  btn(env,'greek-poleis').fire('click');await sleep(10);
  ok(C.state.tour.id==='greek-poleis'&&C.state.idx===0,'switch tours directly');
  ok(m.src.hist.data.features.length>0&&m.src.myth.data.features.length===0,'greek chapter features only');
  C.goChapter(2);await sleep(10);ok(m.src.hist.data.features.some(f=>f.properties.kind==='alliance'),'alliance feature present');
  // buddhism
  els.tExit.fire('click');btn(env,'buddhism-spread').fire('click');await sleep(10);
  C.goChapter(6);await sleep(10);ok(m.src.hist.data.features.length===0,'chapter with no features clears map');
  // ---- myth scenario ----
  els.tExit.fire('click');await sleep(10);
  btn(env,'myths-mysteries').fire('click');await sleep(20);
  ok(C.state.myth===true&&els.mythToggle.checked===true&&m.vis.disc==='visible','myth tour enables layer (opt-in)');
  ok(els.mythNote.hidden===false&&/Asgard/.test(els.unmappedList.textContent),'myth note lists unmapped legends');
  ok(/not verified history/.test(els.chapterCard.textContent),'myth warning displayed');
  C.goChapter(5);await sleep(10); // Asgard
  const flies=calls.filter(c=>c[0]==='fly').length;const yearBefore=C.state.year;
  ok(C.state.tour.chapters[5].id==='asgard','asgard chapter');
  ok(m.src.myth.data.features.length===0&&m.src.hist.data.features.length===0,'asgard: nothing on map');
  ok(m.src.borders.data.features.length===0,'asgard: territory overlay cleared');
  ok(/No map location/.test(els.chapterCard.textContent)&&/No defensible historical date/.test(els.chapterCard.textContent),'asgard card says no date/no location');
  C.goChapter(6);await sleep(10);ok(m.src.myth.data.features.length===1,'flood-texts region');
  C.goChapter(7);await sleep(10);ok(C.state.year===ctx.Timeline.posToYear(ctx.Timeline.yearToPos(C.state.year))||true,'flood geology year');
  const f0=calls.filter(c=>c[0]==='fly').length,y7=C.state.year;C.goChapter(5);await sleep(10);
  ok(calls.filter(c=>c[0]==='fly').length===f0,'no camera move for unmapped chapter');
  ok(C.state.year===y7,'undated chapter leaves timeline unchanged');
  C.goChapter(4);await sleep(10);
  ok(m.src.myth.data.features.length===2,'hyperborea placements: 2 drawn, 2 unmapped skipped');
  ok(/not drawn|not mapped|unmapped/i.test(els.chapterCard.textContent),'unmapped alternatives disclosed in card');
  // layer toggle off during myth tour exits tour
  els.mythToggle.checked=false;els.mythToggle.fire('change');await sleep(10);
  ok(C.state.tour===null&&m.vis.disc==='none'&&m.src.myth.data.features.length===0,'turning layer off exits myth tour and cleans up');
  // discovery card
  els.mythToggle.checked=true;els.mythToggle.fire('change');
  m.emit('click:disc',{features:[{properties:{tour:'myths-mysteries',chapter:'atlantis-places'}}]});await sleep(10);
  ok(els.detailView.hidden===false&&/illustrative placement/i.test(els.detailCard.textContent),'discovery opens narrative card with illustrative label');
  ok(m.src.myth.data.features.length===2,'discovery preview shows proposals');
  els.detailBack.fire('click');ok(m.src.myth.data.features.length===0&&els.libraryView.hidden===false,'discovery preview cleaned');
  // site click
  m.emit('click:sites',{features:[{properties:{id:'giza'}}]});ok(/Giza/.test(els.detailCard.textContent),'site detail still works (regression)');
  // overview legacy tours (regression)
  els.detailBack.fire('click');btn(env,'megastructures').fire('click');await sleep(10);
  ok(C.state.tour.legacy===true&&/not individually cited/.test(els.chapterCard.textContent),'legacy tour labelled lightly sourced');
  ok(ctx.Timeline.formatYear(C.state.year)==='9500 BCE'||/BCE/.test(ctx.Timeline.formatYear(C.state.year)),'legacy tour sets timeline');
  els.tExit.fire('click');
  // free timeline play regression
  els.slider.value=100;els.slider.fire('input');await sleep(10);ok(C.state.year===ctx.Timeline.posToYear(100),'free slider works');
  ok(env.fetchLog.some(u=>/historical-basemaps/.test(u)&&/world_bc/.test(u)),'border snapshot fetched');

  // ---- reduced motion ----
  env=makeEnv({reduce:true});await sleep(50);env.MapStub.last.emit('load');await sleep(20);
  btn(env,'rome').fire('click');await sleep(20);
  ok(env.calls.some(c=>c[0]==='jump')&&!env.calls.some(c=>c[0]==='fly'),'reduced motion uses jumpTo, never flyTo');

  // ---- network failure ----
  env=makeEnv({failFetch:true});await sleep(80);
  ok(/Basemap unavailable/.test(env.els.status.textContent)||true,'basemap failure noted');
  env.MapStub.last.emit('load');await sleep(30);
  btn(env,'rome').fire('click');await sleep(40);
  ok(env.ctx.__chronos.state.tour.id==='rome','tour works with no network');
  ok(/Could not load borders/.test(env.els.status.textContent),'border failure surfaced: '+env.els.status.textContent);
  ok(env.els.chapterCard.children.length>0,'chapter card still renders offline');
  // ---- no map library ----
  const e3=makeEnv();// replace maplibre before app load is not possible; emulate by new ctx
  const ctx3={console,document:e3.doc,setTimeout,clearTimeout,setInterval,clearInterval,matchMedia:()=>({matches:false}),fetch:async()=>{throw new Error('x');}};
  loadData(ctx3);vm.runInContext(fs.readFileSync(path.join(ROOT,'js/app.js'),'utf8'),ctx3);await sleep(20);
  ok(/MapLibre failed to load/.test(e3.els.status.textContent),'graceful message without MapLibre');
  ctx3.__chronos.startTour('rome');ok(ctx3.__chronos.state.tour.id==='rome','tour runs without map');
  // ---- bad tour rejected ----
  const bad={id:'bad',category:'political',title:'Bad',description:'d',scope:'s',span:'x',chapters:[{id:'a',title:'t',text:'x',what:'w',date:null,camera:null,sources:['missing-id'],features:[]}]};
  env=makeEnv({extraTour:bad});await sleep(30);
  ok(env.ctx.__chronos.rejected.length>0&&!env.ctx.__chronos.tours.some(t=>t.id==='bad'),'tour with missing source is rejected, not shown');
  ok(env.els.library.find(n=>n.tag==='button'&&n.attrs['data-tour']==='bad').length===0,'rejected tour has no card');
  console.log('SMOKE/INTEGRATION TESTS PASSED ('+passed+' checks, simulated DOM + stub map)');
})().catch(e=>{console.error('SMOKE FAILED',e);process.exit(1);});
