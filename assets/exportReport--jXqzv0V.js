import{C as p}from"./index-CbgzDeOk.js";import{F as d,D as l,S as s}from"./index-UwHrW21g.js";function f(t){return new Promise((o,r)=>{const e=new FileReader;e.onload=()=>o(e.result),e.onerror=()=>r(new Error("تعذر تحويل التقرير إلى ملف.")),e.readAsDataURL(new Blob([t],{type:"text/html;charset=utf-8"}))})}function c(t,o){const r=new Blob([o],{type:"text/html;charset=utf-8"}),e=URL.createObjectURL(r),a=document.createElement("a");a.href=e,a.download=t,document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(e),4e3)}async function m(t,o){if(p.isNativePlatform()){const r=await f(o);await d.writeFile({path:t,data:r,directory:l.Cache});const e=await d.getUri({path:t,directory:l.Cache});try{await s.share({title:t,url:e.uri,dialogTitle:"تصدير التقرير"})}catch{c(t,o)}return}c(t,o)}const i=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function x({title:t,subtitle:o,blocks:r}){return`<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${i(t)}</title>
<style>
  * { box-sizing: border-box; }
  body { margin: 0; padding: 24px; font-family: 'Segoe UI', Tahoma, Arial, sans-serif; color: #0b1c30; background: #f8f9ff; }
  h1 { margin: 0 0 4px; font-size: 22px; color: #005049; }
  .sub { color: #6d7a77; font-size: 13px; margin-bottom: 20px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; margin-bottom: 20px; }
  .kpi { background: #ffffff; border: 1px solid #dce9ff; border-radius: 10px; padding: 12px; }
  .kpi .lbl { font-size: 12px; color: #6d7a77; margin-bottom: 4px; }
  .kpi .val { font-size: 18px; font-weight: 700; color: #0b1c30; }
  table { width: 100%; border-collapse: collapse; background: #ffffff; border: 1px solid #dce9ff; border-radius: 10px; overflow: hidden; margin-bottom: 20px; }
  th { background: #e5eeff; color: #005049; text-align: right; padding: 10px; font-size: 12px; }
  td { padding: 10px; border-top: 1px solid #eff4ff; font-size: 13px; }
  tr:nth-child(even) td { background: #f8fbff; }
  .sec { font-size: 15px; font-weight: 700; margin: 18px 0 8px; color: #004b73; }
  footer { margin-top: 24px; font-size: 11px; color: #8f9098; text-align: center; }
</style>
</head>
<body>
<h1>${i(t)}</h1>
<div class="sub">${i(o)}</div>
${r.join(`
`)}
<footer>تم توليد هذا التقرير محلياً من بيانات الصيدلية على هذا الجهاز.</footer>
</body>
</html>`}function h(t,o){return`<div class="kpi"><div class="lbl">${i(t)}</div><div class="val">${i(o)}</div></div>`}function u(t,o){const r=`<tr>${t.map(a=>`<th>${i(a)}</th>`).join("")}</tr>`,e=o.map(a=>`<tr>${a.map(n=>`<td>${i(n??"—")}</td>`).join("")}</tr>`).join("");return`<table>${r}${e}</table>`}export{m as e,h as k,x as r,u as t};
