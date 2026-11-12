const fs=require('fs'),path=require('path'),vm=require('vm');
const ROOT=path.join(__dirname,'..');
function loadData(ctx,{extra=[]}={}){
  ctx.self=ctx; ctx.window=ctx;
  vm.createContext(ctx);
  const files=['js/timeline.js','js/tourlogic.js','data/sources.js','data/sites.js','data/tours/overview.js','data/tours/rome.js','data/tours/greece.js','data/tours/buddhism.js','data/tours/myths.js','data/planned.js',...extra];
  for(const f of files) vm.runInContext(fs.readFileSync(path.join(ROOT,f),'utf8'),ctx,{filename:f});
  return ctx;
}
module.exports={ROOT,loadData};
