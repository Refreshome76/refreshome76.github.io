import{r as e,t}from"./react.DvXU6kJ2.js";import{gt as n,t as r}from"./proxy.C47D9Jou.js";import{t as i}from"./AnimatePresence.CifrrH0K.js";var a=e(t(),1),o=n(),s=[.22,1,.36,1];function c({steps:e,image:t,images:n,imageAlt:c}){let[l,u]=(0,a.useState)(0),d=(0,a.useRef)([]),f=e.map((e,r)=>n?.[r]??t);return(0,a.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&u(Number(e.target.dataset.i))})},{rootMargin:`-45% 0px -45% 0px`,threshold:0});return d.current.forEach(t=>t&&e.observe(t)),()=>e.disconnect()},[]),(0,o.jsxs)(`div`,{className:`steps-layout`,children:[(0,o.jsx)(`ol`,{className:`steps`,children:e.map((e,t)=>(0,o.jsxs)(`li`,{ref:e=>{d.current[t]=e},"data-i":t,className:`step${l===t?` on`:``}`,children:[(0,o.jsx)(`div`,{className:`num`,children:(0,o.jsx)(`span`,{children:String(t+1).padStart(2,`0`)})}),(0,o.jsxs)(`div`,{className:`step-body`,children:[(0,o.jsx)(`small`,{children:e.kicker}),(0,o.jsx)(`h3`,{children:e.title}),(0,o.jsx)(`p`,{children:e.text})]})]},t))}),(0,o.jsx)(`div`,{className:`steps-visual`,children:(0,o.jsxs)(`div`,{className:`steps-frame`,children:[(0,o.jsx)(i,{initial:!1,children:(0,o.jsx)(r.img,{src:f[l],alt:c,initial:{opacity:0,scale:1.06},animate:{opacity:1,scale:1},exit:{opacity:0},transition:{duration:.7,ease:s}},f[l])}),(0,o.jsxs)(`div`,{className:`steps-badge`,children:[(0,o.jsx)(`b`,{children:String(l+1).padStart(2,`0`)}),(0,o.jsxs)(`span`,{children:[`/ `,String(e.length).padStart(2,`0`)]})]})]})}),(0,o.jsx)(`style`,{children:`
        .steps-layout{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}
        .steps{margin:0;padding:0;list-style:none;display:grid;gap:0}
        .step{display:grid;grid-template-columns:64px 1fr;gap:20px;align-items:start;padding:30px 0;border-top:1px solid var(--line);transition:opacity .4s}
        .step:first-child{border-top:0}
        .step:not(.on){opacity:.45}
        .num span{font-size:14px;font-weight:600;letter-spacing:.08em;color:var(--head);display:inline-grid;place-items:center;width:52px;height:52px;border-radius:50%;border:1px solid var(--line);transition:background .4s,color .4s,border-color .4s}
        .step.on .num span{background:var(--navy);color:#fff;border-color:var(--navy)}
        .step-body{display:grid;gap:6px}
        .step-body small{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);font-weight:600}
        .step-body h3{font-size:24px;font-weight:500;letter-spacing:-.01em}
        .step-body p{color:var(--muted);max-width:52ch;font-size:16px}
        .steps-visual{position:sticky;top:96px}
        .steps-frame{position:relative;border-radius:26px;overflow:hidden;aspect-ratio:4/5;background:var(--navy-deep);box-shadow:var(--shadow-lg)}
        .steps-frame img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
        .steps-badge{position:absolute;left:18px;bottom:18px;background:rgba(10,18,56,.6);backdrop-filter:blur(10px);color:#fff;border-radius:50px;padding:8px 16px;font-size:14px;display:flex;align-items:baseline;gap:4px}
        .steps-badge b{font-size:22px}
        @media(max-width:900px){.steps-layout{grid-template-columns:1fr;gap:28px}.steps-visual{position:static;order:-1}.steps-frame{aspect-ratio:16/10}.step:not(.on){opacity:1}.step{padding:20px 0;grid-template-columns:48px 1fr}.num span{width:40px;height:40px;font-size:12px}}
      `})]})}export{c as default};