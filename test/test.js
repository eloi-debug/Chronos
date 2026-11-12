const assert=require('assert');const {loadData}=require('./load');
const ctx=loadData({console});
const T=ctx.Timeline,L=ctx.TourLogic,SRC=ctx.SOURCES,TOURS=ctx.TOUR_REGISTRY,SITES=ctx.SITES;
let n=0;const ok=(c,m)=>{assert(c,m);n++;};
// timeline & BCE/CE
ok(T.posToYear(0)===-9600&&T.posToYear(1000)===2026&&T.posToYear(620)===1,'anchors');
for(let p=1;p<=1000;p++)ok(T.posToYear(p)>=T.posToYear(p-1),'monotonic '+p);
for(const y of[-9600,-3000,-508,0,1,65,476,2026])ok(Math.abs(T.posToYear(T.yearToPos(y))-y)<=60,'roundtrip '+y);
ok(T.formatYear(L.kit.B(509))==='509 BCE'&&T.formatYear(L.kit.B(1))==='1 BCE'&&T.formatYear(1)==='1 CE','BCE/CE format');
ok(T.parseYear('509 BCE')===-508&&T.parseYear('1 bc')===0&&T.parseYear('476')===476&&T.parseYear('0')===null&&T.parseYear('x')===null,'parse');
ok(L.kit.B(1)===0&&L.kit.B(2)===-1,'no year zero convention');
// BCE->CE crossing: 1 BCE (0) to 1 CE (1) is one year apart
ok(1-L.kit.B(1)===1,'1 BCE -> 1 CE is 1 year');
ok(T.snapshotFile(T.snapshotFor(L.kit.B(509)))==='world_bc700.geojson','snapshot for 509 BCE');
ok(T.snapshotFile(T.snapshotFor(L.kit.B(27)))==='world_bc100.geojson','snapshot for 27 BCE');
ok(T.snapshotFile(T.snapshotFor(1))==='world_100.geojson'||T.snapshotFile(T.snapshotFor(1))==='world_bc1.geojson','snapshot for 1 CE');
// chapterYear
ok(L.chapterYear({date:{start:-10,end:10}})===0&&L.chapterYear({date:null})===null&&L.chapterYear({year:5,date:{start:1}})===5,'chapterYear');
ok(L.formatDate(T,null)==='No defensible historical date','formatDate null');
// validation of all registered tours
const allErrs=[];TOURS.forEach(t=>allErrs.push(...L.validate(t,SRC)));
assert.deepStrictEqual(allErrs,[],'tour validation errors:\n'+allErrs.join('\n'));n++;
ok(TOURS.length===7,'7 tours registered');
// validator negative tests
const base=()=>JSON.parse(JSON.stringify(TOURS.find(t=>t.id==='rome')));
let t=base();t.chapters[0].sources=['nope'];ok(L.validate(t,SRC).some(e=>/unknown source/.test(e)),'missing source detected');
t=base();t.chapters[0].sources=[];ok(L.validate(t,SRC).some(e=>/no sources/.test(e)),'no sources detected');
t=base();t.chapters[0].date={start:10,end:5};ok(L.validate(t,SRC).some(e=>/start after end/.test(e)),'bad range');
t=base();t.chapters[0].camera={center:[500,0],zoom:3};ok(L.validate(t,SRC).some(e=>/bad camera/.test(e)),'bad camera');
t=base();t.chapters[0].features[0].precision='unmapped';ok(L.validate(t,SRC).some(e=>/unmapped but has geometry/.test(e)),'unmapped w/ geometry');
let m=JSON.parse(JSON.stringify(TOURS.find(t=>t.id==='myths-mysteries')));
m.chapters[2].features[0].precision='exact';ok(L.validate(m,SRC).some(e=>/may not claim exact/.test(e)),'myth exact blocked');
m=JSON.parse(JSON.stringify(TOURS.find(t=>t.id==='myths-mysteries')));delete m.chapters[1].status;ok(L.validate(m,SRC).some(e=>/needs status/.test(e)),'myth status required');
// content shape expectations
const rome=TOURS.find(t=>t.id==='rome'),gr=TOURS.find(t=>t.id==='greek-poleis'),bu=TOURS.find(t=>t.id==='buddhism-spread'),my=TOURS.find(t=>t.id==='myths-mysteries');
ok(rome.chapters.length===7&&gr.chapters.length===7&&bu.chapters.length===7&&my.chapters.length===8,'chapter counts');
ok(my.chapters.some(c=>c.date===null)&&my.chapters.some(c=>c.camera===null),'myth tour has undated and unmapped chapters');
ok(my.chapters.every(c=>!c.features.some(f=>f.kind==='myth'&&f.precision==='exact')),'no exact myth placements');
// geojson conversion
const gj=L.toGeoJSON(my.chapters.find(c=>c.id==='hyperborea-places').features);
ok(gj.features.length===2&&gj.features.every(f=>f.geometry.type==='Polygon'&&f.geometry.coordinates[0].length===49),'unmapped features skipped, circles become polygons');
// every source used is referenced and every source has a URL
Object.values(SRC).forEach(s=>ok(/^https?:\/\//.test(s.url)&&s.title&&s.publisher&&s.type,'source shape '+s.id));
const used=new Set();TOURS.forEach(t=>t.chapters.forEach(c=>{(c.sources||[]).forEach(s=>used.add(s));(c.alternatives||[]).forEach(a=>(a.sources||[]).forEach(s=>used.add(s)));}));
const unused=Object.keys(SRC).filter(s=>!used.has(s));
ok(unused.length===0,'unused sources: '+unused.join(','));
// sites
ok(SITES.length===44&&SITES.every(s=>s.start<=s.end&&Math.abs(s.lat)<=90&&Math.abs(s.lon)<=180),'sites');
// autoplay timing bounds
TOURS.forEach(t=>t.chapters.forEach(c=>ok(L.autoplayMs(c)>=10000&&L.autoplayMs(c)<=45000,'autoplay bounds')));
console.log('UNIT/DATA TESTS PASSED ('+n+' assertions). Tours:',TOURS.map(t=>t.id+':'+t.chapters.length).join(', '));
