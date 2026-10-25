import{gt as e,t}from"./proxy.C47D9Jou.js";import{n}from"./site.CDbOsPM9.js";var r=e(),i=[.22,1,.36,1];function a({current:e}){return(0,r.jsxs)(`div`,{className:`svc`,children:[n.map((n,a)=>{let o=n.soon?`#contact`:`/${n.slug}/`;return(0,r.jsxs)(t.a,{href:o,className:`svc-tile${a<2?` big`:``}${n.slug===e?` cur`:``}`,initial:{opacity:0,y:26},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:`0px 0px -40px 0px`},transition:{duration:.7,ease:i,delay:a%4*.06},children:[(0,r.jsx)(`img`,{src:n.img,alt:``,loading:`lazy`}),(0,r.jsx)(`span`,{className:`svc-veil`}),(0,r.jsxs)(`span`,{className:`svc-body`,children:[(0,r.jsx)(`span`,{className:`svc-title`,children:n.label}),(0,r.jsx)(`span`,{className:`svc-sub`,children:n.short})]}),(0,r.jsx)(`span`,{className:`svc-arrow`,"aria-hidden":`true`,children:`→`})]},n.slug)}),(0,r.jsx)(`style`,{children:`
        .svc{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:220px;gap:14px}
        .svc-tile{position:relative;display:block;border-radius:22px;overflow:hidden;text-decoration:none;color:#fff;background:var(--navy-deep);isolation:isolate}
        .svc-tile.big{grid-column:span 2;grid-row:span 2}
        .svc-tile img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 1.1s var(--ease),filter .6s}
        .svc-tile:hover img{transform:scale(1.06)}
        .svc-veil{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,18,56,0) 35%,rgba(10,18,56,.88) 100%);transition:opacity .4s}
        .svc-body{position:absolute;left:18px;right:56px;bottom:16px;display:grid;gap:3px}
        .svc-title{font-weight:600;font-size:18px;letter-spacing:-.01em}
        .big .svc-title{font-size:26px}
        .svc-sub{font-size:13px;opacity:.8}
        .svc-arrow{position:absolute;right:16px;bottom:16px;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.14);backdrop-filter:blur(8px);display:grid;place-items:center;font-size:18px;transition:background .3s,transform .4s var(--ease)}
        .svc-tile:hover .svc-arrow{background:var(--cyan);color:var(--navy);transform:rotate(-30deg)}
        .svc-tile.cur{outline:2px solid var(--cyan);outline-offset:2px}
        @media(max-width:1000px){.svc{grid-template-columns:repeat(3,1fr);grid-auto-rows:200px}.svc-tile.big{grid-column:span 2;grid-row:span 1}}
        @media(max-width:640px){.svc{grid-template-columns:repeat(2,1fr);grid-auto-rows:170px;gap:10px}.svc-tile.big{grid-column:span 2}.big .svc-title{font-size:21px}.svc-body{left:14px;bottom:12px;right:48px}}
      `})]})}export{a as default};