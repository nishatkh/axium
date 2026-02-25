import{c as st,s as at,d as rt,e as lt,j as n,m as o,f as J,a as A,A as ct,h as mt}from"./index-D9fbQM-Y.js";import{S as pt}from"./search-CmtBUHvp.js";import{C as dt}from"./check-ZG8Th-Qj.js";import{C as ht}from"./copy-DZAc_0Jv.js";import"./createLucideIcon-KExIQmmt.js";function ut(e){e.values.forEach(a=>a.stop())}function un(e,a){[...a].reverse().forEach(s=>{const r=e.getVariant(s);r&&at(e,r),e.variantChildren&&e.variantChildren.forEach(t=>{un(t,a)})})}function ft(e,a){if(Array.isArray(a))return un(e,a);if(typeof a=="string")return un(e,[a]);at(e,a)}function gt(){const e=new Set,a={subscribe(i){return e.add(i),()=>void e.delete(i)},start(i,s){const r=[];return e.forEach(t=>{r.push(st(t,i,{transitionOverride:s}))}),Promise.all(r)},set(i){return e.forEach(s=>{ft(s,i)})},stop(){e.forEach(i=>{ut(i)})},mount(){return()=>{a.stop()}}};return a}function vt(){const e=rt(gt);return lt(e.mount,[]),e}const l=vt,xt={normal:{y:0,transition:{type:"spring",stiffness:300}},animate:{y:[0,4,0],transition:{duration:.6,ease:"easeInOut",repeat:1/0,repeatDelay:1}}},yt=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("path",{d:"M3.5 13h6"}),n.jsx("path",{d:"m2 16 4.5-9 4.5 9"}),n.jsxs(o.g,{variants:xt,animate:t,initial:"normal",children:[n.jsx("path",{d:"M18 7v9"}),n.jsx("path",{d:"m14 12 4 4 4-4"})]})]})})},wt=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:yt},Symbol.toStringTag,{value:"Module"})),_t={normal:{y:0,transition:{type:"spring",stiffness:300}},animate:{y:[0,-4,0],transition:{duration:.6,ease:"easeInOut",repeat:1/0,repeatDelay:1}}},kt=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("path",{d:"M3.5 13h6"}),n.jsx("path",{d:"m2 16 4.5-9 4.5 9"}),n.jsxs(o.g,{variants:_t,animate:t,initial:"normal",children:[n.jsx("path",{d:"M18 16V7"}),n.jsx("path",{d:"m14 11 4-4 4 4"})]})]})})},jt=Object.freeze(Object.defineProperty({__proto__:null,AArrowUp:kt},Symbol.toStringTag,{value:"Module"})),bt={normal:{scale:1},animate:{scale:[1,1.2,1],transition:{duration:.8,ease:"easeInOut",repeat:1/0,repeatDelay:1}}},Mt={normal:{scale:1},animate:{scale:[1,.8,1],transition:{duration:.8,ease:"easeInOut",repeat:1/0,repeatDelay:1}}},Vt=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsxs(o.g,{variants:bt,animate:t,initial:"normal",children:[n.jsx("path",{d:"M21 14h-5"}),n.jsx("path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16"})]}),n.jsxs(o.g,{variants:Mt,animate:t,initial:"normal",children:[n.jsx("path",{d:"M4.5 13h6"}),n.jsx("path",{d:"m3 16 4.5-9 4.5 9"})]})]})})},Lt=Object.freeze(Object.defineProperty({__proto__:null,ALargeSmall:Vt},Symbol.toStringTag,{value:"Module"})),St={normal:{pathLength:1,pathOffset:0,opacity:1},animate:{pathLength:[0,1],pathOffset:[1,0],opacity:[.3,1],transition:{duration:1.5,ease:"easeInOut",repeat:1/0,repeatDelay:.5}}},Ct=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="white",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:n.jsx(o.path,{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",variants:St,animate:t,initial:"normal"})})})},At=Object.freeze(Object.defineProperty({__proto__:null,Activity:Ct},Symbol.toStringTag,{value:"Module"})),vn={normal:{pathLength:1,opacity:1,strokeWidth:2},animate:{pathLength:[0,1],opacity:1,strokeWidth:2,transition:{duration:.8,ease:"easeInOut",pathLength:{duration:.8}}}},Wt=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),n.jsx("path",{d:"M6 8h12"}),n.jsxs("g",{children:[n.jsx(o.path,{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12",variants:vn,animate:t,initial:"normal",custom:1}),n.jsx(o.path,{d:"M6.6 15.6A2 2 0 1 0 10 17v-5",variants:vn,animate:t,initial:"normal",custom:2})]})]})})},Ot=Object.freeze(Object.defineProperty({__proto__:null,AirVent:Wt},Symbol.toStringTag,{value:"Module"})),It={normal:{opacity:1},animate:{opacity:[1,.5,1],transition:{duration:1,ease:"easeInOut",repeat:0}}},Pt={normal:{y:0,opacity:1},animate:{y:[-2,0],opacity:[.5,1],transition:{duration:.5,ease:"easeOut",repeat:0}}},Et=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",variants:It,animate:t,initial:"normal"}),n.jsx(o.path,{d:"m12 15 5 6H7Z",variants:Pt,animate:t,initial:"normal"})]})})},Gt=Object.freeze(Object.defineProperty({__proto__:null,Airplay:Et},Symbol.toStringTag,{value:"Module"})),Bt={normal:{rotate:0,originX:"50%",originY:"50%"},animate:{rotate:360,transition:{duration:2,ease:"linear",repeat:1/0}}},Tt={normal:{rotate:0},animate:{rotate:[-10,10,-10],transition:{duration:.5,repeat:1/0,repeatType:"reverse"}}},Ht=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("circle",{cx:"12",cy:"13",r:"8"}),n.jsx(o.path,{d:"M12 9v4l2 2",variants:Bt,animate:t,initial:"normal"}),n.jsxs(o.g,{variants:Tt,animate:t,initial:"normal",children:[n.jsx("path",{d:"M5 3 2 6"}),n.jsx("path",{d:"m22 6-3-3"}),n.jsx("path",{d:"M6.38 18.7 4 21"}),n.jsx("path",{d:"M17.64 18.67 20 21"})]})]})})},zt=Object.freeze(Object.defineProperty({__proto__:null,AlarmClock:Ht},Symbol.toStringTag,{value:"Module"})),Dt={normal:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1,transition:{duration:.5,ease:"easeInOut",repeat:1/0,repeatDelay:1}}},Rt={normal:{rotate:0},animate:{rotate:[-10,10,-10],transition:{duration:.5,repeat:1/0,repeatType:"reverse"}}},$t=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("circle",{cx:"12",cy:"13",r:"8"}),n.jsxs(o.g,{variants:Rt,animate:t,initial:"normal",children:[n.jsx("path",{d:"M5 3 2 6"}),n.jsx("path",{d:"m22 6-3-3"}),n.jsx("path",{d:"M6.38 18.7 4 21"}),n.jsx("path",{d:"M17.64 18.67 20 21"})]}),n.jsx(o.path,{d:"m9 13 2 2 4-4",variants:Dt,animate:t,initial:"normal"})]})})},Yt=Object.freeze(Object.defineProperty({__proto__:null,AlarmClockCheck:$t},Symbol.toStringTag,{value:"Module"})),Xt={normal:{y:0,opacity:1},animate:{y:[-2,0],opacity:[.5,1],transition:{duration:1.2,ease:"easeInOut",repeat:1/0,repeatType:"reverse"}}},Ut={normal:{scale:1},animate:{scale:[1,1.02,1],transition:{duration:1,ease:"easeInOut",repeat:1/0}}},Nt=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsxs(o.g,{variants:Xt,animate:t,initial:"normal",children:[n.jsx("path",{d:"M11 21c0-2.5 2-2.5 2-5"}),n.jsx("path",{d:"M16 21c0-2.5 2-2.5 2-5"}),n.jsx("path",{d:"M6 21c0-2.5 2-2.5 2-5"})]}),n.jsxs(o.g,{variants:Ut,animate:t,initial:"normal",children:[n.jsx("path",{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"}),n.jsx("path",{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"})]})]})})},Ft=Object.freeze(Object.defineProperty({__proto__:null,AlarmSmoke:Nt},Symbol.toStringTag,{value:"Module"})),Zt={normal:{scaleY:1,originY:0},animate:{scaleY:[1.2,.8,1],transition:{duration:.6,times:[.4,.7,1],type:"spring",stiffness:300,damping:10}}},qt=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),n.jsx(o.path,{d:"M11 3 L11 11 L14 8 L17 11 L17 3",variants:Zt,animate:t,initial:"normal"})]})})},Kt=Object.freeze(Object.defineProperty({__proto__:null,Album:qt},Symbol.toStringTag,{value:"Module"})),Q={normal:{pathLength:1,opacity:1},animate:{pathLength:[0,1],opacity:[.3,1],transition:{duration:.8,ease:"easeInOut",repeat:1/0,repeatDelay:.5}}},Jt=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M17 12H7",variants:Q,animate:t,initial:"normal",custom:0}),n.jsx(o.path,{d:"M19 18H5",variants:Q,animate:t,initial:"normal",custom:1}),n.jsx(o.path,{d:"M21 6H3",variants:Q,animate:t,initial:"normal",custom:2})]})})},Qt=Object.freeze(Object.defineProperty({__proto__:null,AlignCenter:Jt},Symbol.toStringTag,{value:"Module"})),ne={normal:{scaleX:1,transition:{type:"spring",stiffness:300,damping:20}},animate:{scaleX:[1,1.3,.8,1.1,.9,1],transition:{duration:.8,times:[0,.2,.4,.6,.8,1],type:"spring",stiffness:300,damping:10}}},xn={normal:{x:0,transition:{type:"spring",stiffness:300,damping:20}},animate:{x:[-4,4,-2,2,-1,0],transition:{duration:.8,times:[0,.2,.4,.6,.8,1],type:"spring",stiffness:300,damping:10}}},te=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M2 12h20",variants:ne,animate:t,initial:"normal"}),n.jsxs(o.g,{variants:xn,animate:t,initial:"normal",children:[n.jsx("path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"}),n.jsx("path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"})]}),n.jsxs(o.g,{variants:xn,animate:t,initial:"normal",children:[n.jsx("path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"}),n.jsx("path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"})]})]})})},ee=Object.freeze(Object.defineProperty({__proto__:null,AlignCenterHorizontal:te},Symbol.toStringTag,{value:"Module"})),oe={normal:{scaleY:1},animate:{scaleY:[1,1.1,1],transition:{duration:1,ease:"easeInOut",repeat:1/0}}},yn={normal:{y:0},animate:{y:[-2,2,-2],transition:{duration:2,ease:"easeInOut",repeat:1/0}}},ae=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M12 2v20",variants:oe,animate:t,initial:"normal"}),n.jsxs(o.g,{variants:yn,animate:t,initial:"normal",children:[n.jsx("path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"}),n.jsx("path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"})]}),n.jsxs(o.g,{variants:yn,animate:t,initial:"normal",children:[n.jsx("path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"}),n.jsx("path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"})]})]})})},ie=Object.freeze(Object.defineProperty({__proto__:null,AlignCenterVertical:ae},Symbol.toStringTag,{value:"Module"})),se={normal:{scale:1},animate:{scale:[1,1.2,1],transition:{duration:.8,ease:"easeInOut",repeat:1/0,repeatDelay:1}}},wn={normal:{pathLength:1,opacity:1},animate:{pathLength:[1,.2,1],opacity:[1,.5,1],transition:{duration:1,ease:"easeInOut"}}},re=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M12 22V8",variants:wn,animate:t,initial:"normal"}),n.jsx(o.path,{d:"M5 12H2a10 10 0 0 0 20 0h-3",variants:wn,animate:t,initial:"normal"}),n.jsx(o.circle,{cx:"12",cy:"5",r:"3",variants:se,animate:t,initial:"normal"})]})})},le=Object.freeze(Object.defineProperty({__proto__:null,Anchor:re},Symbol.toStringTag,{value:"Module"})),ce={normal:{scale:1},animate:{scale:[1,1.1,1],transition:{duration:.5,ease:"easeInOut",repeat:1/0,repeatDelay:1}}},me={normal:{pathLength:1,opacity:1},animate:{pathLength:[.3,1],opacity:[.5,1],transition:{duration:.3,ease:"easeInOut"}}},pe={normal:{scale:1},animate:{scale:[1,.8,1],transition:{duration:.2,ease:"easeInOut",repeat:1}}},de=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.circle,{cx:"12",cy:"12",r:"10",variants:ce,animate:t,initial:"normal"}),n.jsx(o.path,{d:"M16 16s-1.5-2-4-2-4 2-4 2",variants:me,animate:t,initial:"normal"}),n.jsxs(o.g,{variants:pe,animate:t,initial:"normal",children:[n.jsx("path",{d:"M7.5 8 10 9"}),n.jsx("path",{d:"m14 9 2.5-1"}),n.jsx("path",{d:"M9 10h.01"}),n.jsx("path",{d:"M15 10h.01"})]})]})})},he=Object.freeze(Object.defineProperty({__proto__:null,Angry:de},Symbol.toStringTag,{value:"Module"})),ue={normal:{scale:1},animate:{scale:[1,1.1,1],transition:{duration:.5,ease:"easeInOut",repeat:1/0,repeatDelay:1}}},fe={normal:{pathLength:1,opacity:1},animate:{pathLength:[.3,1],opacity:[.5,1],transition:{duration:.3,ease:"easeInOut"}}},ge={normal:{scale:1},animate:{scale:[1,.8,1],transition:{duration:.2,ease:"easeInOut",repeat:1}}},ve=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.circle,{cx:"12",cy:"12",r:"10",variants:ue,animate:t,initial:"normal"}),n.jsx(o.path,{d:"M8 15h8",variants:fe,animate:t,initial:"normal"}),n.jsxs(o.g,{variants:ge,animate:t,initial:"normal",children:[n.jsx("path",{d:"M8 9h2"}),n.jsx("path",{d:"M14 9h2"})]})]})})},xe=Object.freeze(Object.defineProperty({__proto__:null,Annoyed:ve},Symbol.toStringTag,{value:"Module"})),k={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{duration:.5,delay:e*.1,ease:"easeInOut"}})},ye=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M2 12 7 2",variants:k,animate:t,custom:0}),n.jsx(o.path,{d:"m7 12 5-10",variants:k,animate:t,custom:1}),n.jsx(o.path,{d:"m12 12 5-10",variants:k,animate:t,custom:2}),n.jsx(o.path,{d:"m17 12 5-10",variants:k,animate:t,custom:3}),n.jsx(o.path,{d:"M4.5 7h15",variants:k,animate:t,custom:4}),n.jsx(o.path,{d:"M12 16v6",variants:k,animate:t,custom:5})]})})},we=Object.freeze(Object.defineProperty({__proto__:null,Antenna:ye},Symbol.toStringTag,{value:"Module"})),_e={normal:{rotate:0,scale:1},animate:{rotate:[0,180,0],scale:[1,1.2,1],transition:{duration:1.5,ease:"easeInOut"}}},ke={normal:{pathLength:1,opacity:1,rotate:0},animate:{pathLength:[1,.8,1],opacity:[1,.8,1],rotate:[0,-180,0],transition:{duration:1.5,ease:"easeInOut"}}},je=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.circle,{cx:"12",cy:"12",r:"10",variants:_e,animate:t,initial:"normal"}),n.jsxs(o.g,{variants:ke,animate:t,initial:"normal",children:[n.jsx("path",{d:"m14.31 8 5.74 9.94"}),n.jsx("path",{d:"M9.69 8h11.48"}),n.jsx("path",{d:"m7.38 12 5.74-9.94"}),n.jsx("path",{d:"M9.69 16 3.95 6.06"}),n.jsx("path",{d:"M14.31 16H2.83"}),n.jsx("path",{d:"m16.62 12-5.74 9.94"})]})]})})},be=Object.freeze(Object.defineProperty({__proto__:null,Aperture:je},Symbol.toStringTag,{value:"Module"})),Me={normal:{opacity:1},animate:{opacity:[1,.8,1],transition:{duration:1,ease:"easeInOut"}}},nn={normal:{scale:1,opacity:1},animate:e=>({scale:[0,1.2,1],opacity:[0,1,1],transition:{duration:.3,delay:e*.15,ease:"easeOut"}})},Ve=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.rect,{width:"20",height:"16",x:"2",y:"4",rx:"2",variants:Me,animate:t,initial:"normal"}),n.jsx(o.path,{d:"M6 8h.01",variants:nn,animate:t,initial:"normal",custom:0}),n.jsx(o.path,{d:"M10 8h.01",variants:nn,animate:t,initial:"normal",custom:1}),n.jsx(o.path,{d:"M14 8h.01",variants:nn,animate:t,initial:"normal",custom:2})]})})},Le=Object.freeze(Object.defineProperty({__proto__:null,AppWindowMac:Ve},Symbol.toStringTag,{value:"Module"})),Se={normal:{y:0,transition:{type:"spring",stiffness:300,damping:25}},animate:{y:-1.5,transition:{type:"spring",stiffness:300,damping:25}}},Ce={normal:{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",transition:{duration:.3,ease:"easeInOut"}},animate:{d:"M4 11v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V11",transition:{duration:.3,ease:"easeInOut"}}},Ae={normal:{y:0,transition:{duration:.3,ease:"easeInOut"}},animate:{y:3,transition:{duration:.3,ease:"easeInOut"}}},We=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.rect,{width:"20",height:"5",x:"2",y:"3",rx:"1",variants:Se,animate:t,initial:"normal"}),n.jsx(o.path,{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",variants:Ce,animate:t,initial:"normal"}),n.jsx(o.path,{d:"M10 12h4",variants:Ae,animate:t,initial:"normal"})]})})},Oe=Object.freeze(Object.defineProperty({__proto__:null,Archive:We},Symbol.toStringTag,{value:"Module"})),Ie={duration:.3,opacity:{delay:.15}},_n={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...Ie,delay:.1*e}})},Pe=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.circle,{cx:"12",cy:"12",r:"4",variants:_n,animate:t,custom:0}),n.jsx(o.path,{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",variants:_n,animate:t,custom:1})]})})},Ee=Object.freeze(Object.defineProperty({__proto__:null,AtSign:Pe},Symbol.toStringTag,{value:"Module"})),Ge={normal:{scale:1},animate:{scale:[1,1.5,1],transition:{duration:1,repeat:1/0,repeatDelay:.5}}},Be={normal:{rotate:0},animate:{rotate:360,transition:{duration:3,ease:"linear",repeat:1/0}}},Te=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.circle,{cx:"12",cy:"12",r:"1",variants:Ge,animate:t,initial:"normal"}),n.jsxs(o.g,{variants:Be,animate:t,initial:"normal",children:[n.jsx("path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"}),n.jsx("path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"})]})]})})},He=Object.freeze(Object.defineProperty({__proto__:null,Atom:Te},Symbol.toStringTag,{value:"Module"})),ze={normal:{scaleY:.5,opacity:.5},animate:{scaleY:[.5,1,.5],opacity:[.5,1,.5],transition:{duration:1,ease:"easeInOut",repeat:1/0}}},De=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:n.jsxs(o.g,{variants:ze,animate:t,initial:"normal",style:{originY:.5},children:[n.jsx(o.path,{d:"M2 10v3",custom:0,transition:{delay:0}}),n.jsx(o.path,{d:"M6 6v11",custom:1,transition:{delay:.1}}),n.jsx(o.path,{d:"M10 3v18",custom:2,transition:{delay:.2}}),n.jsx(o.path,{d:"M14 8v7",custom:3,transition:{delay:.3}}),n.jsx(o.path,{d:"M18 5v13",custom:4,transition:{delay:.4}}),n.jsx(o.path,{d:"M22 10v3",custom:5,transition:{delay:.5}})]})})})},Re=Object.freeze(Object.defineProperty({__proto__:null,AudioLines:De},Symbol.toStringTag,{value:"Module"})),$e={normal:{pathLength:1,opacity:1},animate:{pathLength:[1,.2,1],opacity:[1,.2,1],transition:{duration:1.5,ease:"easeInOut"}}},Ye=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:n.jsx(o.path,{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",variants:$e,animate:t,initial:"normal"})})})},Xe=Object.freeze(Object.defineProperty({__proto__:null,AudioWaveform:Ye},Symbol.toStringTag,{value:"Module"})),Ue={normal:{scale:1},animate:{scale:[1,1.1,1],transition:{duration:.5,ease:"easeInOut"}}},Ne={normal:{pathLength:1,opacity:1,y:0},animate:{pathLength:[1,.8,1],opacity:[1,.8,1],y:[0,-2,0],transition:{duration:.5,ease:"easeInOut",y:{duration:.3,repeat:2,repeatType:"reverse"}}}},Fe=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",variants:Ue,animate:t,initial:"normal"}),n.jsxs(o.g,{variants:Ne,animate:t,initial:"normal",children:[n.jsx("line",{x1:"12",x2:"12",y1:"8",y2:"12"}),n.jsx("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"})]})]})})},Ze=Object.freeze(Object.defineProperty({__proto__:null,BadgeAlert:Fe},Symbol.toStringTag,{value:"Module"})),qe={normal:{scale:1},animate:{scale:[1,1.1,1],transition:{duration:.5,ease:"easeInOut"}}},Ke={normal:{pathLength:1,opacity:1,rotateY:0},animate:{pathLength:[1,.8,1],opacity:[1,.8,1],rotateY:[0,180,360],transition:{duration:.8,ease:"easeInOut"}}},Je=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",variants:qe,animate:t,initial:"normal"}),n.jsx(o.path,{d:"m9 12 2 2 4-4",variants:Ke,animate:t,initial:"normal"})]})})},Qe=Object.freeze(Object.defineProperty({__proto__:null,BadgeCheck:Je},Symbol.toStringTag,{value:"Module"})),no={normal:{scale:1},animate:{scale:[1,1.1,1],transition:{duration:.5,ease:"easeInOut"}}},to={normal:{pathLength:1,opacity:1,rotateY:0},animate:{pathLength:[1,.8,1],opacity:[1,.8,1],rotateY:[0,180,360],transition:{duration:.8,ease:"easeInOut"}}},eo=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",variants:no,animate:t,initial:"normal"}),n.jsxs(o.g,{variants:to,animate:t,initial:"normal",children:[n.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),n.jsx("path",{d:"M12 18V6"})]})]})})},oo=Object.freeze(Object.defineProperty({__proto__:null,BadgeDollarSign:eo},Symbol.toStringTag,{value:"Module"})),tn={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{duration:.3,delay:e*.1}})},ao=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}),n.jsx("line",{x1:"22",x2:"22",y1:"11",y2:"13"}),n.jsx(o.line,{x1:"6",x2:"6",y1:"11",y2:"13",variants:tn,animate:t,initial:"normal",custom:0}),n.jsx(o.line,{x1:"10",x2:"10",y1:"11",y2:"13",variants:tn,animate:t,initial:"normal",custom:1}),n.jsx(o.line,{x1:"14",x2:"14",y1:"11",y2:"13",variants:tn,animate:t,initial:"normal",custom:2})]})})},io=Object.freeze(Object.defineProperty({__proto__:null,BatteryFull:ao},Symbol.toStringTag,{value:"Module"})),kn={normal:{rotate:0},animate:{rotate:[-10,10,-10],transition:{duration:.5,repeat:2,repeatType:"reverse"}}},so={normal:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1,transition:{duration:.3,ease:"easeOut"}}},ro=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M10.268 21a2 2 0 0 0 3.464 0",variants:kn,animate:t,initial:"normal"}),n.jsxs(o.g,{variants:so,animate:t,initial:"normal",children:[n.jsx("path",{d:"M22 8c0-2.3-.8-4.3-2-6"}),n.jsx("path",{d:"M4 2C2.8 3.7 2 5.7 2 8"})]}),n.jsx(o.path,{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",variants:kn,animate:t,initial:"normal"})]})})},lo=Object.freeze(Object.defineProperty({__proto__:null,BellRing:ro},Symbol.toStringTag,{value:"Module"})),jn={normal:{rotate:0},animate:{rotate:360,transition:{duration:2,ease:"linear",repeat:1/0}}},co={normal:{y:0},animate:{y:[-1,1,-1],transition:{duration:.5,repeat:1/0}}},mo=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.circle,{cx:"18.5",cy:"17.5",r:"3.5",variants:jn,animate:t,initial:"normal"}),n.jsx(o.circle,{cx:"5.5",cy:"17.5",r:"3.5",variants:jn,animate:t,initial:"normal"}),n.jsxs(o.g,{variants:co,animate:t,initial:"normal",children:[n.jsx("circle",{cx:"15",cy:"5",r:"1"}),n.jsx("path",{d:"M12 17.5V14l-3-3 4-3 2 3h2"})]})]})})},po=Object.freeze(Object.defineProperty({__proto__:null,Bike:mo},Symbol.toStringTag,{value:"Module"})),bn={normal:{scale:1,opacity:.7},animate:{scale:[1,1.1,1],opacity:[.7,1,.7],transition:{duration:1,ease:"easeInOut",repeat:1/0,repeatType:"reverse"}}},ho=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.circle,{cx:"9",cy:"9",r:"7",variants:bn,animate:t,initial:"normal",custom:0,transition:{delay:0}}),n.jsx(o.circle,{cx:"15",cy:"15",r:"7",variants:bn,animate:t,initial:"normal",custom:1,transition:{delay:.5}})]})})},uo=Object.freeze(Object.defineProperty({__proto__:null,Blend:ho},Symbol.toStringTag,{value:"Module"})),fo={normal:{scale:1,rotate:0},animate:{scale:[1,1.1,1],rotate:[0,5,0],transition:{duration:.5,ease:"easeInOut"}}},go={normal:{pathLength:1,opacity:1},animate:{pathLength:[0,1],opacity:[.3,1],transition:{duration:.8,ease:"easeInOut"}}},vo=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.rect,{width:"7",height:"7",x:"14",y:"3",rx:"1",variants:fo,animate:t,initial:"normal"}),n.jsx(o.path,{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",variants:go,animate:t,initial:"normal"})]})})},xo=Object.freeze(Object.defineProperty({__proto__:null,Blocks:vo},Symbol.toStringTag,{value:"Module"})),Mn={normal:{scale:1,transition:{repeat:0}},animate:{scale:[0,1,.8]}},yo={normal:{opacity:1},animate:{opacity:[1,.8,1],transition:{repeat:1/0}}},wo=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:yo,animate:t,d:"m7 7 10 10-5 5V2l5 5L7 17"}),n.jsx(o.path,{variants:Mn,animate:t,transition:{duration:.6,delay:.2,repeat:1/0},d:"M20.83 14.83a4 4 0 0 0 0-5.66"}),n.jsx(o.path,{variants:Mn,animate:t,transition:{duration:.6,repeat:1/0},d:"M18 12h.01"})]})})},_o=Object.freeze(Object.defineProperty({__proto__:null,BluetoothSearching:wo},Symbol.toStringTag,{value:"Module"})),ko={normal:{pathLength:1,opacity:1},animate:{pathLength:[0,1],opacity:[.3,1],transition:{duration:.8,ease:"easeInOut"}}},jo=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:n.jsx(o.path,{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",variants:ko,animate:t,initial:"normal"})})})},bo=Object.freeze(Object.defineProperty({__proto__:null,Bold:jo},Symbol.toStringTag,{value:"Module"})),Mo={duration:2,ease:"linear",repeat:0},Vo={normal:{rotate:0},animate:{rotate:360}},Lo=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>{t.stop(),t.start("normal")},children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:n.jsxs(o.g,{variants:Vo,animate:t,initial:"normal",transition:Mo,children:[n.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),n.jsx("circle",{cx:"12",cy:"12",r:"4"})]})})})},So=Object.freeze(Object.defineProperty({__proto__:null,Bolt:Lo},Symbol.toStringTag,{value:"Module"})),Co={normal:{scale:1},animate:{scale:[1,1.1,1],transition:{duration:.5,ease:"easeInOut",repeat:2,repeatType:"reverse"}}},Ao={normal:{pathLength:1,opacity:1},animate:{pathLength:1,opacity:[1,.8,1],transition:{duration:.8,ease:"easeInOut",repeat:1}}},Wo=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.circle,{cx:"11",cy:"13",r:"9",variants:Co,animate:t,initial:"normal"}),n.jsxs(o.g,{variants:Ao,animate:t,initial:"normal",children:[n.jsx("path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"}),n.jsx("path",{d:"m22 2-1.5 1.5"})]})]})})},Oo=Object.freeze(Object.defineProperty({__proto__:null,Bomb:Wo},Symbol.toStringTag,{value:"Module"})),Io={normal:{y:0,transition:{type:"spring",stiffness:300,damping:25}},animate:{y:[2,-4,0],transition:{type:"spring",stiffness:500,damping:15,mass:1}}},Po={normal:{opacity:1},animate:{opacity:1}},Eo=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M10 2v8l3-3 3 3V2",variants:Io,animate:t}),n.jsx(o.path,{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",variants:Po,animate:t})]})})},Go=Object.freeze(Object.defineProperty({__proto__:null,BookMarked:Eo},Symbol.toStringTag,{value:"Module"})),Bo={duration:.3,opacity:{delay:.15}},en={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...Bo,delay:.1*e}})},To=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",variants:en,animate:t,custom:0}),n.jsx(o.path,{d:"m3.3 7 8.7 5 8.7-5",variants:en,animate:t,custom:1}),n.jsx(o.path,{d:"M12 22V12",variants:en,animate:t,custom:2})]})})},Ho=Object.freeze(Object.defineProperty({__proto__:null,Box:To},Symbol.toStringTag,{value:"Module"})),d={normal:{pathLength:1,transition:{duration:.3,ease:"easeInOut"}},animate:{pathLength:[0,1],transition:{duration:1,ease:"easeInOut"}}},zo={normal:{offsetDistance:"0%",transition:{duration:.3,ease:"easeInOut"}},animate:{offsetDistance:"100%",transition:{duration:1,ease:"easeInOut"}}},Do=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",variants:d,animate:t}),n.jsx(o.path,{d:"m7 16.5-4.74-2.85",variants:d,animate:t}),n.jsx(o.path,{d:"m7 16.5 5-3",variants:d,animate:t}),n.jsx(o.path,{d:"M7 16.5v5.17",variants:d,animate:t}),n.jsx(o.path,{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",variants:d,animate:t}),n.jsx(o.path,{d:"m17 16.5-5-3",variants:d,animate:t}),n.jsx(o.path,{d:"m17 16.5 4.74-2.85",variants:d,animate:t}),n.jsx(o.path,{d:"M17 16.5v5.17",variants:d,animate:t}),n.jsx(o.path,{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",variants:d,animate:t}),n.jsx(o.path,{d:"M12 8 7.26 5.15",variants:d,animate:t}),n.jsx(o.path,{d:"m12 8 4.74-2.85",variants:d,animate:t}),n.jsx(o.path,{d:"M12 13.5V8",variants:d,animate:t}),n.jsx(o.circle,{cx:"12",cy:"12",r:"1",fill:"currentColor",style:{offsetPath:"path('M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z M12 8 7.26 5.15 M12 8 4.74-2.85 M12 13.5V8 M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z M7 16.5l-4.74-2.85 M7 16.5l5-3 M7 16.5v5.17 M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z')"},variants:zo,animate:t})]})})},Ro=Object.freeze(Object.defineProperty({__proto__:null,Boxes:Do},Symbol.toStringTag,{value:"Module"})),$o={duration:.3,opacity:{delay:.15}},Vn={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...$o,delay:.1*e}})},Yo=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",variants:Vn,animate:t,custom:0}),n.jsx(o.path,{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",variants:Vn,animate:t,custom:1})]})})},Xo=Object.freeze(Object.defineProperty({__proto__:null,Braces:Yo},Symbol.toStringTag,{value:"Module"})),Uo={duration:.3,opacity:{delay:.15}},Ln={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...Uo,delay:.1*e}})},No=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M16 3h3v18h-3",variants:Ln,animate:t,custom:0}),n.jsx(o.path,{d:"M8 21H5V3h3",variants:Ln,animate:t,custom:1})]})})},Fo=Object.freeze(Object.defineProperty({__proto__:null,Brackets:No},Symbol.toStringTag,{value:"Module"})),Sn={normal:{pathLength:1,opacity:1},animate:{pathLength:[0,1],opacity:[.3,1],transition:{duration:.8,ease:"easeInOut"}}},Zo=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.rect,{x:"8",y:"8",width:"8",height:"8",rx:"2",variants:Sn,animate:t,initial:"normal"}),n.jsxs(o.g,{variants:Sn,animate:t,initial:"normal",children:[n.jsx("path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"}),n.jsx("path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"})]})]})})},qo=Object.freeze(Object.defineProperty({__proto__:null,BringToFront:Zo},Symbol.toStringTag,{value:"Module"})),Ko={normal:{pathLength:1},animate:{pathLength:[1,.5,1],transition:{duration:.8,ease:"easeInOut",repeat:1/0,repeatType:"reverse"}}},Jo={normal:{y:0},animate:{y:[-1,1,-1],transition:{duration:1,ease:"easeInOut",repeat:1/0}}},Qo=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsxs(o.g,{variants:Ko,animate:t,initial:"normal",children:[n.jsx("path",{d:"m8 2 1.88 1.88"}),n.jsx("path",{d:"M14.12 3.88 16 2"})]}),n.jsxs(o.g,{variants:Jo,animate:t,initial:"normal",children:[n.jsx("path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}),n.jsx("path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"}),n.jsx("path",{d:"M12 20v-9"}),n.jsx("path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}),n.jsx("path",{d:"M6 13H2"}),n.jsx("path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}),n.jsx("path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}),n.jsx("path",{d:"M22 13h-4"}),n.jsx("path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4"})]})]})})},na=Object.freeze(Object.defineProperty({__proto__:null,Bug:Qo},Symbol.toStringTag,{value:"Module"})),C=.25,h=e=>e===0?.1:e*C+.1,ta=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",animate:t,transition:{duration:C,delay:h(4),opacity:{delay:h(4)}},variants:{normal:{pathLength:1,pathOffset:0,opacity:1,transition:{delay:0}},animate:{pathOffset:[1,0],pathLength:[0,1],opacity:[0,1]}}}),n.jsx(o.path,{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9",animate:t,transition:{duration:C,delay:h(3),opacity:{delay:h(3)}},variants:{normal:{pathLength:1,pathOffset:0,opacity:1,transition:{delay:0}},animate:{pathOffset:[1,0],pathLength:[0,1],opacity:[0,1]}}}),n.jsx(o.path,{d:"M21 21v-2h-4",animate:t,transition:{duration:C,delay:h(2),opacity:{delay:h(2)}},variants:{normal:{pathLength:1,pathOffset:0,opacity:1,transition:{delay:0}},animate:{pathOffset:[1,0],pathLength:[0,1],opacity:[0,1]}}}),n.jsx(o.path,{d:"M3 5h4V3",animate:t,transition:{duration:C,delay:h(1),opacity:{delay:h(1)}},variants:{normal:{pathLength:1,pathOffset:0,opacity:1,transition:{delay:0}},animate:{pathOffset:[1,0],pathLength:[0,1],opacity:[0,1]}}}),n.jsx(o.path,{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3",animate:t,transition:{duration:C,delay:h(0),opacity:{delay:h(0)}},variants:{normal:{pathLength:1,pathOffset:0,opacity:1,transition:{delay:0}},animate:{pathOffset:[1,0],pathLength:[0,1],opacity:[0,1]}}})]})})},ea=Object.freeze(Object.defineProperty({__proto__:null,Cable:ta},Symbol.toStringTag,{value:"Module"})),j={normal:{opacity:1},animate:{opacity:1}},on={normal:e=>({scale:1,y:0,transition:{type:"spring",stiffness:300,damping:25}}),animate:e=>{const a=[{scale:[1,1.2,.9,1.1,1],y:[0,-1,1,-2,0]},{scale:[1,.9,1.1,.8,1],y:[0,1,-1,0,0]},{scale:[1,1.1,.8,1.2,1],y:[0,-2,0,-1,0]}];return{...a[e%a.length],transition:{duration:2,ease:"easeInOut",repeat:1/0,repeatType:"reverse"}}}},oa=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",variants:j,animate:t}),n.jsx(o.path,{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",variants:j,animate:t}),n.jsx(o.path,{d:"M2 21h20",variants:j,animate:t}),n.jsx(o.path,{d:"M7 8v3",variants:j,animate:t}),n.jsx(o.path,{d:"M12 8v3",variants:j,animate:t}),n.jsx(o.path,{d:"M17 8v3",variants:j,animate:t}),n.jsx(o.path,{d:"M7 4h.01",variants:on,animate:t,custom:0,style:{transformOrigin:"center"}}),n.jsx(o.path,{d:"M12 4h.01",variants:on,animate:t,custom:1,style:{transformOrigin:"center"}}),n.jsx(o.path,{d:"M17 4h.01",variants:on,animate:t,custom:2,style:{transformOrigin:"center"}})]})})},aa=Object.freeze(Object.defineProperty({__proto__:null,Cake:oa},Symbol.toStringTag,{value:"Module"})),ia={normal:{opacity:1},animate:{opacity:[1,.8,1],transition:{duration:1,ease:"easeInOut"}}},sa={initial:{opacity:0,scale:.3,y:-10},animate:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:300,damping:20,duration:.4}},exit:{opacity:0,scale:.3,y:10,transition:{duration:.2,ease:"easeIn"}}},ra=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l(),[m,p]=J.useState(1),[c,f]=J.useState(!1);return J.useEffect(()=>{let K;return c&&m<10?K=setInterval(()=>{p(gn=>gn>=10?10:gn+1)},400):c||p(1),()=>{K&&clearInterval(K)}},[c,m]),n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>{f(!0),t.start("animate")},onMouseLeave:()=>{f(!1),t.start("normal")},children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.rect,{x:"3",y:"4",width:"18",height:"18",rx:"2",variants:ia,animate:t,initial:"normal"}),n.jsx("path",{d:"M16 2v4"}),n.jsx("path",{d:"M8 2v4"}),n.jsx("path",{d:"M3 10h18"}),n.jsx(o.text,{x:"11",y:"18",fontSize:"8",textAnchor:"middle",fill:"currentColor",stroke:"none",initial:"initial",animate:"animate",exit:"exit",variants:sa,children:m},m)]})})},la=Object.freeze(Object.defineProperty({__proto__:null,Calendar1:ra},Symbol.toStringTag,{value:"Module"})),Z=.25,b=e=>e===0?.1:e*Z+.1,ca=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}),n.jsx(o.path,{d:"M2 12a9 9 0 0 1 8 8",animate:t,transition:{duration:Z,delay:b(0),opacity:{delay:b(0)}},variants:{normal:{pathLength:1,pathOffset:0,opacity:1,transition:{delay:0}},animate:{pathOffset:[1,0],pathLength:[0,1],opacity:[0,1]}}}),n.jsx(o.path,{d:"M2 16a5 5 0 0 1 4 4",animate:t,transition:{duration:Z,delay:b(1),opacity:{delay:b(1)}},variants:{normal:{pathLength:1,pathOffset:0,opacity:1,transition:{delay:0}},animate:{pathOffset:[1,0],pathLength:[0,1],opacity:[0,1]}}}),n.jsx(o.line,{x1:"2",x2:"2.01",y1:"20",y2:"20",animate:t,transition:{duration:Z,delay:b(2),opacity:{delay:b(2)}},variants:{normal:{pathLength:1,pathOffset:0,opacity:1,transition:{delay:0}},animate:{pathOffset:[1,0],pathLength:[0,1],opacity:[0,1]}}})]})})},ma=Object.freeze(Object.defineProperty({__proto__:null,Cast:ca},Symbol.toStringTag,{value:"Module"})),pa={visible:{opacity:1},hidden:{opacity:1}},an={visible:{pathLength:1,opacity:1},hidden:{pathLength:0,opacity:0}},da=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l(),m=async()=>{await t.start(c=>({pathLength:0,opacity:0,transition:{delay:c*.1,duration:.3}})),await t.start(c=>({pathLength:1,opacity:1,transition:{delay:c*.1,duration:.3}}))},p=()=>{t.start("visible")};return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:m,onMouseLeave:p,children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:an,initial:"visible",animate:t,custom:1,d:"M13 17V9"}),n.jsx(o.path,{variants:an,initial:"visible",animate:t,custom:2,d:"M18 17V5"}),n.jsx(o.path,{variants:pa,d:"M3 3v16a2 2 0 0 0 2 2h16"}),n.jsx(o.path,{variants:an,initial:"visible",animate:t,custom:0,d:"M8 17v-3"})]})})},ha=Object.freeze(Object.defineProperty({__proto__:null,ChartColumn:da},Symbol.toStringTag,{value:"Module"})),Cn={visible:{pathLength:1,opacity:1},hidden:{pathLength:0,opacity:0}},ua=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l(),m=async()=>{await t.start(c=>({pathLength:0,opacity:0,transition:{delay:c*.1,duration:.3}})),await t.start(c=>({pathLength:1,opacity:1,transition:{delay:c*.1,duration:.3}}))},p=()=>{t.start("visible")};return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:m,onMouseLeave:p,children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}),n.jsxs(o.g,{children:[n.jsx(o.rect,{x:"15",y:"5",width:"4",height:"12",rx:"1",variants:Cn,initial:"visible",animate:t,custom:2}),n.jsx(o.rect,{x:"7",y:"8",width:"4",height:"9",rx:"1",variants:Cn,initial:"visible",animate:t,custom:1})]})]})})},fa=Object.freeze(Object.defineProperty({__proto__:null,ChartColumnBig:ua},Symbol.toStringTag,{value:"Module"})),ga={visible:{opacity:1},hidden:{opacity:1}},sn={visible:{pathLength:1,opacity:1},hidden:{pathLength:0,opacity:0}},va=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l(),m=async()=>{await t.start(c=>({pathLength:0,opacity:0,transition:{delay:c*.1,duration:.3}})),await t.start(c=>({pathLength:1,opacity:1,transition:{delay:c*.1,duration:.3}}))},p=()=>{t.start("visible")};return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:m,onMouseLeave:p,children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:sn,initial:"visible",animate:t,custom:3,d:"M10 6h8"}),n.jsx(o.path,{variants:sn,initial:"visible",animate:t,custom:2,d:"M12 16h6"}),n.jsx(o.path,{variants:ga,d:"M3 3v16a2 2 0 0 0 2 2h16"}),n.jsx(o.path,{variants:sn,initial:"visible",animate:t,custom:1,d:"M8 11h7"})]})})},xa=Object.freeze(Object.defineProperty({__proto__:null,ChartGantt:va},Symbol.toStringTag,{value:"Module"})),ya={visible:{opacity:1},hidden:{opacity:1}},wa={visible:{pathLength:1,opacity:1},hidden:{pathLength:0,opacity:0}},_a=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l(),m=async()=>{await t.start(c=>({pathLength:0,opacity:0,transition:{delay:c*.1,duration:.3}})),await t.start(c=>({pathLength:1,opacity:1,transition:{delay:c*.1,duration:.3}}))},p=()=>{t.start("visible")};return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:m,onMouseLeave:p,children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:ya,d:"M3 3v16a2 2 0 0 0 2 2h16"}),n.jsx(o.path,{variants:wa,initial:"visible",animate:t,custom:1,d:"m19 9-5 5-4-4-3 3"})]})})},ka=Object.freeze(Object.defineProperty({__proto__:null,ChartLine:_a},Symbol.toStringTag,{value:"Module"})),M={visible:{pathLength:1,opacity:1},hidden:{pathLength:0,opacity:0}},ja=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l(),m=async()=>{await t.start(c=>({pathLength:0,opacity:0,transition:{delay:c*.1,duration:.3}})),await t.start(c=>({pathLength:1,opacity:1,transition:{delay:c*.1,duration:.3}}))},p=()=>{t.start("visible")};return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:m,onMouseLeave:p,children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:M,initial:"visible",animate:t,custom:5,d:"M12 16v5"}),n.jsx(o.path,{variants:M,initial:"visible",animate:t,custom:4,d:"M16 14v7"}),n.jsx(o.path,{variants:M,initial:"visible",animate:t,custom:3,d:"M20 10v11"}),n.jsx(o.path,{variants:M,initial:"visible",animate:t,custom:2,d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"}),n.jsx(o.path,{variants:M,initial:"visible",animate:t,custom:1,d:"M4 18v3"}),n.jsx(o.path,{variants:M,initial:"visible",animate:t,custom:0,d:"M8 14v7"})]})})},ba=Object.freeze(Object.defineProperty({__proto__:null,ChartNoAxes:ja},Symbol.toStringTag,{value:"Module"})),Ma={normal:{translateX:0,translateY:0},animate:{translateX:1.1,translateY:-1.1}},Va=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",transition:{type:"spring",stiffness:250,damping:15,bounce:.6},variants:Ma,animate:t}),n.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"})]})})},La=Object.freeze(Object.defineProperty({__proto__:null,ChartPie:Va},Symbol.toStringTag,{value:"Module"})),Sa={normal:{pathLength:1,opacity:1,rotateY:0,transition:{duration:.8,ease:"easeInOut"}},animate:{pathLength:[1,.8,1],opacity:[1,.8,1],rotateY:[0,180,360],transition:{duration:.8,ease:"easeInOut"}}},Ca=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l(),m=()=>{t.start("animate")},p=()=>{t.start("normal")};return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:m,onMouseLeave:p,children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:n.jsx(o.path,{d:"M20 6 9 17l-5-5",variants:Sa,initial:"normal",animate:t,style:{transformOrigin:"center"}})})})},Aa=Object.freeze(Object.defineProperty({__proto__:null,Check:Ca},Symbol.toStringTag,{value:"Module"})),An={normal:{pathLength:1,opacity:1},animate:{pathLength:[0,1],opacity:[0,1],transition:{duration:.3,ease:"easeOut"}}},Wa=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l(),m=async()=>{await t.start(c=>({pathLength:0,opacity:0,transition:{delay:c*.1,duration:.1}})),await t.start(c=>({pathLength:1,opacity:1,transition:{delay:c*.1,duration:.3}}))},p=()=>{t.start("normal")};return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:m,onMouseLeave:p,children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M18 6 7 17l-5-5",variants:An,animate:t,initial:"normal",custom:0}),n.jsx(o.path,{d:"m22 10-7.5 7.5L13 16",variants:An,animate:t,initial:"normal",custom:1})]})})},Oa=Object.freeze(Object.defineProperty({__proto__:null,CheckCheck:Wa},Symbol.toStringTag,{value:"Module"})),Ia={normal:{y:0,opacity:1},animate:{y:[4,0],opacity:[.3,1],transition:{duration:.5,ease:"easeOut"}}},Pa=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:n.jsx(o.path,{d:"m6 9 6 6 6-6",variants:Ia,animate:t,initial:"normal"})})})},Ea=Object.freeze(Object.defineProperty({__proto__:null,ChevronDown:Pa},Symbol.toStringTag,{value:"Module"})),Wn={type:"spring",stiffness:250,damping:25},Ga=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",stroke:s,strokeWidth:i,viewBox:"0 0 24 24",fill:"none",width:e,height:a,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:{normal:{translateX:"0%"},animate:{translateX:"2px"}},transition:Wn,animate:t,initial:"normal",d:"m17 18-6-6 6-6"}),n.jsx(o.path,{variants:{normal:{translateX:"0%"},animate:{translateX:"-2px"}},transition:Wn,animate:t,initial:"normal",d:"M7 6v12"})]})})},Ba=Object.freeze(Object.defineProperty({__proto__:null,ChevronFirst:Ga},Symbol.toStringTag,{value:"Module"})),On={type:"spring",stiffness:250,damping:25},Ta=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:{normal:{translateX:"0%"},animate:{translateX:"-2px"}},transition:On,animate:t,initial:"normal",d:"m7 18 6-6-6-6"}),n.jsx(o.path,{variants:{normal:{translateX:"0%"},animate:{translateX:"2px"}},transition:On,animate:t,initial:"normal",d:"M17 6v12"})]})})},Ha=Object.freeze(Object.defineProperty({__proto__:null,ChevronLast:Ta},Symbol.toStringTag,{value:"Module"})),za={normal:{x:0,opacity:1},animate:{x:[-4,0],opacity:[.3,1],transition:{duration:.5,ease:"easeOut"}}},Da=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:n.jsx(o.path,{d:"m15 18-6-6 6-6",variants:za,animate:t,initial:"normal"})})})},Ra=Object.freeze(Object.defineProperty({__proto__:null,ChevronLeft:Da},Symbol.toStringTag,{value:"Module"})),$a={normal:{x:0,opacity:1},animate:{x:[4,0],opacity:[.3,1],transition:{duration:.5,ease:"easeOut"}}},Ya=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:n.jsx(o.path,{d:"m9 18 6-6-6-6",variants:$a,animate:t,initial:"normal"})})})},Xa=Object.freeze(Object.defineProperty({__proto__:null,ChevronRight:Ya},Symbol.toStringTag,{value:"Module"})),Ua={normal:{y:0,opacity:1},animate:{y:[-4,0],opacity:[.3,1],transition:{duration:.5,ease:"easeOut"}}},Na=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:n.jsx(o.path,{d:"m18 15-6-6-6 6",variants:Ua,animate:t,initial:"normal"})})})},Fa=Object.freeze(Object.defineProperty({__proto__:null,ChevronUp:Na},Symbol.toStringTag,{value:"Module"})),In={normal:{y:0,opacity:1},animate:{y:[4,0],opacity:[.3,1],transition:{duration:.5,ease:"easeOut"}}},Za=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"m7 6 5 5 5-5",variants:In,animate:t,initial:"normal",custom:0,transition:{delay:0}}),n.jsx(o.path,{d:"m7 13 5 5 5-5",variants:In,animate:t,initial:"normal",custom:1,transition:{delay:.1}})]})})},qa=Object.freeze(Object.defineProperty({__proto__:null,ChevronsDown:Za},Symbol.toStringTag,{value:"Module"})),Pn={normal:{x:0,opacity:1},animate:{x:[-4,0],opacity:[.3,1],transition:{duration:.5,ease:"easeOut"}}},Ka=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"m11 17-5-5 5-5",variants:Pn,animate:t,initial:"normal",custom:0,transition:{delay:0}}),n.jsx(o.path,{d:"m18 17-5-5 5-5",variants:Pn,animate:t,initial:"normal",custom:1,transition:{delay:.1}})]})})},Ja=Object.freeze(Object.defineProperty({__proto__:null,ChevronsLeft:Ka},Symbol.toStringTag,{value:"Module"})),En={normal:{x:0,opacity:1},animate:{x:[4,0],opacity:[.3,1],transition:{duration:.5,ease:"easeOut"}}},Qa=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"m6 17 5-5-5-5",variants:En,animate:t,initial:"normal",custom:0,transition:{delay:0}}),n.jsx(o.path,{d:"m13 17 5-5-5-5",variants:En,animate:t,initial:"normal",custom:1,transition:{delay:.1}})]})})},ni=Object.freeze(Object.defineProperty({__proto__:null,ChevronsRight:Qa},Symbol.toStringTag,{value:"Module"})),Gn={normal:{y:0,opacity:1},animate:{y:[-4,0],opacity:[.3,1],transition:{duration:.5,ease:"easeOut"}}},ti=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"m17 11-5-5-5 5",variants:Gn,animate:t,initial:"normal",custom:0,transition:{delay:0}}),n.jsx(o.path,{d:"m17 18-5-5-5 5",variants:Gn,animate:t,initial:"normal",custom:1,transition:{delay:.1}})]})})},ei=Object.freeze(Object.defineProperty({__proto__:null,ChevronsUp:ti},Symbol.toStringTag,{value:"Module"})),Bn={type:"spring",stiffness:250,damping:25},oi=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:{normal:{translateY:"0%"},animate:{translateY:"2px"}},transition:Bn,animate:t,initial:"normal",d:"m7 15 5 5 5-5"}),n.jsx(o.path,{variants:{normal:{translateY:"0%"},animate:{translateY:"-2px"}},transition:Bn,animate:t,initial:"normal",d:"m7 9 5-5 5 5"})]})})},ai=Object.freeze(Object.defineProperty({__proto__:null,ChevronsUpDown:oi},Symbol.toStringTag,{value:"Module"})),ii={duration:.3,opacity:{delay:.15}},I={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...ii,delay:.1*e}})},si=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx(o.circle,{cx:"12",cy:"12",r:"4",variants:I,animate:t,custom:0}),n.jsx(o.line,{x1:"21.17",x2:"12",y1:"8",y2:"8",variants:I,animate:t,custom:3}),n.jsx(o.line,{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",variants:I,animate:t,custom:3}),n.jsx(o.line,{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",variants:I,animate:t,custom:3})]})})},ri=Object.freeze(Object.defineProperty({__proto__:null,Chrome:si},Symbol.toStringTag,{value:"Module"})),li={type:"spring",stiffness:250,damping:25},ci=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx(o.path,{variants:{normal:{translateY:"0%"},animate:{translateY:"2px"}},transition:li,animate:t,initial:"normal",d:"m16 10-4 4-4-4"})]})})},mi=Object.freeze(Object.defineProperty({__proto__:null,CircleChevronDown:ci},Symbol.toStringTag,{value:"Module"})),pi={type:"spring",stiffness:250,damping:25},di=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx(o.path,{variants:{normal:{translateX:"0%"},animate:{translateX:"-2px"}},transition:pi,animate:t,initial:"normal",d:"m14 16-4-4 4-4"})]})})},hi=Object.freeze(Object.defineProperty({__proto__:null,CircleChevronLeft:di},Symbol.toStringTag,{value:"Module"})),ui={type:"spring",stiffness:250,damping:25},fi=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx(o.path,{variants:{normal:{translateX:"0%"},animate:{translateX:"2px"}},transition:ui,animate:t,initial:"normal",d:"m10 8 4 4-4 4"})]})})},gi=Object.freeze(Object.defineProperty({__proto__:null,CircleChevronRight:fi},Symbol.toStringTag,{value:"Module"})),vi={type:"spring",stiffness:250,damping:25},xi=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx(o.path,{variants:{normal:{translateY:"0%"},animate:{translateY:"-2px"}},transition:vi,animate:t,initial:"normal",d:"m8 14 4-4 4 4"})]})})},yi=Object.freeze(Object.defineProperty({__proto__:null,CircleChevronUp:xi},Symbol.toStringTag,{value:"Module"})),wi={duration:.3,opacity:{delay:.15}},_i={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...wi,delay:.05*e}})},ki=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:["M10.1 2.182a10 10 0 0 1 3.8 0","M13.9 21.818a10 10 0 0 1-3.8 0","M17.609 3.721a10 10 0 0 1 2.69 2.7","M2.182 13.9a10 10 0 0 1 0-3.8","M20.279 17.609a10 10 0 0 1-2.7 2.69","M21.818 10.1a10 10 0 0 1 0 3.8","M3.721 6.391a10 10 0 0 1 2.7-2.69","M6.391 20.279a10 10 0 0 1-2.69-2.7"].map((m,p)=>n.jsx(o.path,{d:m,variants:_i,animate:t,custom:p},p))})})},ji=Object.freeze(Object.defineProperty({__proto__:null,CircleDashed:ki},Symbol.toStringTag,{value:"Module"})),bi={duration:2,ease:"linear",repeat:1},Mi={normal:{rotate:0},animate:{rotate:360}},Vi=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsxs(o.g,{variants:Mi,animate:t,initial:"normal",transition:bi,children:[n.jsx("path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}),n.jsx("path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"}),n.jsx("path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"}),n.jsx("path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"}),n.jsx("path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"}),n.jsx("path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"}),n.jsx("path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"}),n.jsx("path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"})]}),n.jsx("circle",{cx:"12",cy:"12",r:"1"})]})})},Li=Object.freeze(Object.defineProperty({__proto__:null,CircleDotDashed:Vi},Symbol.toStringTag,{value:"Module"})),Si={type:"spring",stiffness:250,damping:25},Ci=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}),n.jsxs(o.g,{variants:{normal:{translateY:"0%"},animate:{translateY:"-2px"}},transition:Si,animate:t,initial:"normal",children:[n.jsx("path",{d:"m16 12-4-4-4 4"}),n.jsx("path",{d:"M12 16V8"})]}),n.jsx("path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}),n.jsx("path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}),n.jsx("path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}),n.jsx("path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"})]})})},Ai=Object.freeze(Object.defineProperty({__proto__:null,CircleFadingArrowUp:Ci},Symbol.toStringTag,{value:"Module"})),Wi={type:"spring",stiffness:250,damping:25},Oi=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsxs(o.g,{variants:{normal:{translateY:"0%"},animate:{translateY:"-2px"}},transition:Wi,animate:t,initial:"normal",children:[n.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),n.jsx("path",{d:"M12 17h.01"})]})]})})},Ii=Object.freeze(Object.defineProperty({__proto__:null,CircleHelp:Oi},Symbol.toStringTag,{value:"Module"})),Pi={type:"spring",stiffness:400,damping:10,mass:.8},Ei={normal:{rotate:0,originX:0,originY:1,y:0},animate:{rotate:[-45,0],y:[-2,0],transition:Pi}},Gi=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsxs(o.g,{variants:Ei,animate:t,initial:"normal",children:[n.jsx("path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"}),n.jsx("path",{d:"m6.2 5.3 3.1 3.9"}),n.jsx("path",{d:"m12.4 3.4 3.1 4"})]}),n.jsx("path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"})]})})},Bi=Object.freeze(Object.defineProperty({__proto__:null,Clapperboard:Gi},Symbol.toStringTag,{value:"Module"})),Ti={type:"spring",stiffness:250,damping:25},Hi=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}),n.jsx("path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"}),n.jsx("path",{d:"M16 4h2a2 2 0 0 1 2 2v4"}),n.jsx("path",{d:"M21 14H11"}),n.jsx(o.path,{variants:{normal:{translateX:"0%"},animate:{translateX:"-2px"}},transition:Ti,animate:t,initial:"normal",d:"m15 10-4 4 4 4"})]})})},zi=Object.freeze(Object.defineProperty({__proto__:null,ClipboardCopy:Hi},Symbol.toStringTag,{value:"Module"})),Di={normal:{rotate:0,originX:"50%",originY:"50%"},animate:{rotate:360,transition:{duration:2,ease:"linear",repeat:1/0}}},Ri=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx(o.polyline,{points:"12 6 12 12 8 14",variants:Di,animate:t,initial:"normal"})]})})},$i=Object.freeze(Object.defineProperty({__proto__:null,Clock8:Ri},Symbol.toStringTag,{value:"Module"})),Yi=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:{normal:{pathLength:1,opacity:1},animate:{pathLength:1,opacity:1}},animate:t,initial:"normal",d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"}),n.jsxs(o.g,{variants:{normal:{y:0},animate:{y:[0,3,0],transition:{repeat:1/0}}},animate:t,initial:"normal",children:[n.jsx("path",{d:"M12 13v8l-4-4"}),n.jsx("path",{d:"m12 21 4-4"})]})]})})},Xi=Object.freeze(Object.defineProperty({__proto__:null,CloudDownload:Yi},Symbol.toStringTag,{value:"Module"})),Ui={duration:.3,opacity:{delay:.15}},Ni={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...Ui,delay:.1*e}})},V={normal:{y:0,opacity:1},animate:{y:[0,3,0],opacity:[1,.3,1],transition:{repeat:1/0}}},Fi=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:Ni,animate:t,custom:0,d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}),n.jsx(o.path,{variants:V,animate:t,d:"M8 19v1"}),n.jsx(o.path,{variants:V,animate:t,d:"M8 14v1"}),n.jsx(o.path,{variants:V,animate:t,d:"M16 19v1"}),n.jsx(o.path,{variants:V,animate:t,d:"M16 14v1"}),n.jsx(o.path,{variants:V,animate:t,d:"M12 21v1"}),n.jsx(o.path,{variants:V,animate:t,d:"M12 16v1"})]})})},Zi=Object.freeze(Object.defineProperty({__proto__:null,CloudDrizzle:Fi},Symbol.toStringTag,{value:"Module"})),Tn={type:"spring",stiffness:250,damping:25},qi=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.polyline,{variants:{normal:{translateX:"0%"},animate:{translateX:"-2px"}},transition:Tn,animate:t,initial:"normal",points:"8 6 2 12 8 18"}),n.jsx(o.polyline,{variants:{normal:{translateX:"0%"},animate:{translateX:"2px"}},transition:Tn,animate:t,initial:"normal",points:"16 18 22 12 16 6"})]})})},Ki=Object.freeze(Object.defineProperty({__proto__:null,Code:qi},Symbol.toStringTag,{value:"Module"})),Ji={duration:.3,opacity:{delay:.15}},L={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...Ji,delay:.1*e}})},Qi=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:L,animate:t,custom:0,d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),n.jsx(o.polyline,{variants:L,animate:t,custom:1,points:"7.5 4.21 12 6.81 16.5 4.21"}),n.jsx(o.polyline,{variants:L,animate:t,custom:2,points:"7.5 19.79 7.5 14.6 3 12"}),n.jsx(o.polyline,{variants:L,animate:t,custom:3,points:"21 12 16.5 14.6 16.5 19.79"}),n.jsx(o.polyline,{variants:L,animate:t,custom:4,points:"3.27 6.96 12 12.01 20.73 6.96"}),n.jsx(o.line,{variants:L,animate:t,custom:5,x1:"12",x2:"12",y1:"22.08",y2:"12"})]})})},ns=Object.freeze(Object.defineProperty({__proto__:null,Codesandbox:Qi},Symbol.toStringTag,{value:"Module"})),ts={normal:{pathLength:1,opacity:1},animate:{pathLength:[0,1],opacity:[0,1],transition:{duration:.3,ease:"easeInOut"}}},es={normal:{rotate:0},animate:{rotate:360,transition:{duration:2,ease:"easeInOut",repeat:1/0}}},os=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",variants:es,animate:t,style:{transformOrigin:"center"}}),n.jsx(o.circle,{cx:"12",cy:"12",r:"10",variants:ts,animate:t})]})})},as=Object.freeze(Object.defineProperty({__proto__:null,Compass:os},Symbol.toStringTag,{value:"Module"})),Hn={type:"spring",stiffness:160,damping:17,mass:1},is=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.rect,{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",variants:{normal:{translateY:0,translateX:0},animate:{translateY:-3,translateX:-3}},animate:t,transition:Hn}),n.jsx(o.path,{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",variants:{normal:{x:0,y:0},animate:{x:3,y:3}},transition:Hn,animate:t})]})})},ss=Object.freeze(Object.defineProperty({__proto__:null,Copy:is},Symbol.toStringTag,{value:"Module"})),g={duration:.5,ease:"easeInOut",repeat:1},P={normal:{scale:1,rotate:0,opacity:1},animate:{scaleY:[1,1.5,1],opacity:[1,.8,1]}},E={normal:{scale:1,rotate:0,opacity:1},animate:{scaleX:[1,1.5,1],opacity:[1,.8,1]}},rs=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}),n.jsx("rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}),n.jsx(o.path,{d:"M15 2v2",variants:P,transition:g,animate:t}),n.jsx(o.path,{d:"M15 20v2",variants:P,transition:g,animate:t}),n.jsx(o.path,{d:"M2 15h2",variants:E,transition:g,animate:t}),n.jsx(o.path,{d:"M2 9h2",variants:E,transition:g,animate:t}),n.jsx(o.path,{d:"M20 15h2",variants:E,transition:g,animate:t}),n.jsx(o.path,{d:"M20 9h2",variants:E,transition:g,animate:t}),n.jsx(o.path,{d:"M9 2v2",variants:P,transition:g,animate:t}),n.jsx(o.path,{d:"M9 20v2",variants:P,transition:g,animate:t})]})})},ls=Object.freeze(Object.defineProperty({__proto__:null,Cpu:rs},Symbol.toStringTag,{value:"Module"})),zn={type:"spring",stiffness:250,damping:25},cs=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:{normal:{pathLength:1,opacity:1},animate:{pathLength:[0,1],opacity:[0,1]}},transition:{...zn,delay:0},animate:t,initial:"normal",d:"M6 2v14a2 2 0 0 0 2 2h14"}),n.jsx(o.path,{variants:{normal:{pathLength:1,opacity:1},animate:{pathLength:[0,1],opacity:[0,1]}},transition:{...zn,delay:.1},animate:t,initial:"normal",d:"M18 22V8a2 2 0 0 0-2-2H2"})]})})},ms=Object.freeze(Object.defineProperty({__proto__:null,Crop:cs},Symbol.toStringTag,{value:"Module"})),ps={normal:{y:0},animate:{y:-1.1}},G={type:"spring",stiffness:500,damping:30},ds=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsxs(o.g,{variants:ps,animate:t,transition:G,children:[n.jsx("path",{d:"M3 6h18"}),n.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})]}),n.jsx(o.path,{d:"M19 8v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V8",variants:{normal:{d:"M19 8v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V8"},animate:{d:"M19 9v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V9"}},animate:t,transition:G}),n.jsx(o.line,{x1:"10",x2:"10",y1:"11",y2:"17",variants:{normal:{y1:11,y2:17},animate:{y1:11.5,y2:17.5}},animate:t,transition:G}),n.jsx(o.line,{x1:"14",x2:"14",y1:"11",y2:"17",variants:{normal:{y1:11,y2:17},animate:{y1:11.5,y2:17.5}},animate:t,transition:G})]})})},hs=Object.freeze(Object.defineProperty({__proto__:null,Delete:ds},Symbol.toStringTag,{value:"Module"})),us={duration:1,ease:"easeInOut"},fs={normal:{rotate:0,scale:1},animate:{rotate:[0,360],scale:[1,1.1,1],transition:us}},gs=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs(o.svg,{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",variants:fs,animate:t,initial:"normal",children:[n.jsx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),n.jsx("path",{d:"M16 8h.01"}),n.jsx("path",{d:"M16 12h.01"}),n.jsx("path",{d:"M16 16h.01"}),n.jsx("path",{d:"M8 8h.01"}),n.jsx("path",{d:"M8 12h.01"}),n.jsx("path",{d:"M8 16h.01"})]})})},vs=Object.freeze(Object.defineProperty({__proto__:null,Dice6:gs},Symbol.toStringTag,{value:"Module"})),xs={duration:2,ease:"linear",repeat:1},ys={normal:{rotate:0},animate:{rotate:360}},ws=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:n.jsxs(o.g,{variants:ys,animate:t,initial:"normal",transition:xs,children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2"}),n.jsx("circle",{cx:"12",cy:"12",r:"2"}),n.jsx("path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2"})]})})})},_s=Object.freeze(Object.defineProperty({__proto__:null,Disc3:ws},Symbol.toStringTag,{value:"Module"})),ks=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:{normal:{pathLength:1,opacity:1},animate:{pathLength:1,opacity:1}},animate:t,initial:"normal",d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),n.jsxs(o.g,{variants:{normal:{y:0},animate:{y:[0,3,0],transition:{repeat:1/0}}},animate:t,initial:"normal",children:[n.jsx("polyline",{points:"7 10 12 15 17 10"}),n.jsx("line",{x1:"12",x2:"12",y1:"15",y2:"3"})]})]})})},js=Object.freeze(Object.defineProperty({__proto__:null,Download:ks},Symbol.toStringTag,{value:"Module"})),bs={duration:.3,opacity:{delay:.15}},B={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...bs,delay:.1*e}})},Ms=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.circle,{cx:"12",cy:"12",r:"10",variants:B,animate:t,custom:0}),n.jsx(o.path,{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",variants:B,animate:t,custom:1}),n.jsx(o.path,{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",variants:B,animate:t,custom:2}),n.jsx(o.path,{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",variants:B,animate:t,custom:3})]})})},Vs=Object.freeze(Object.defineProperty({__proto__:null,Earth:Ms},Symbol.toStringTag,{value:"Module"})),T={type:"spring",stiffness:250,damping:25},Ls=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",transition:T,variants:{normal:{translateX:"0%",translateY:"0%"},animate:{translateX:"2px",translateY:"2px"}},animate:t}),n.jsx(o.path,{d:"M3 16.2V21m0 0h4.8M3 21l6-6",transition:T,variants:{normal:{translateX:"0%",translateY:"0%"},animate:{translateX:"-2px",translateY:"2px"}},animate:t}),n.jsx(o.path,{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",transition:T,variants:{normal:{translateX:"0%",translateY:"0%"},animate:{translateX:"2px",translateY:"-2px"}},animate:t}),n.jsx(o.path,{d:"M3 7.8V3m0 0h4.8M3 3l6 6",transition:T,variants:{normal:{translateX:"0%",translateY:"0%"},animate:{translateX:"-2px",translateY:"-2px"}},animate:t})]})})},Ss=Object.freeze(Object.defineProperty({__proto__:null,Expand:Ls},Symbol.toStringTag,{value:"Module"})),Cs={duration:2,ease:"linear",repeat:1},As={normal:{rotate:0},animate:{rotate:360}},Ws=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:n.jsxs(o.g,{variants:As,animate:t,initial:"normal",transition:Cs,children:[n.jsx("path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"}),n.jsx("path",{d:"M12 12v.01"})]})})})},Os=Object.freeze(Object.defineProperty({__proto__:null,Fan:Ws},Symbol.toStringTag,{value:"Module"})),Is={duration:.3,opacity:{delay:.15}},W={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...Is,delay:.1*e}})},Ps=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:W,animate:t,custom:0,d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}),n.jsx(o.path,{variants:W,animate:t,custom:1,d:"M14 2v4a2 2 0 0 0 2 2h4"}),n.jsx(o.path,{variants:W,animate:t,custom:2,d:"M8 18v-1"}),n.jsx(o.path,{variants:W,animate:t,custom:3,d:"M12 18v-6"}),n.jsx(o.path,{variants:W,animate:t,custom:4,d:"M16 18v-3"})]})})},Es=Object.freeze(Object.defineProperty({__proto__:null,FileChartColumn:Ps},Symbol.toStringTag,{value:"Module"})),Gs={duration:.3,opacity:{delay:.15}},H={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...Gs,delay:.1*e}})},Bs=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:H,animate:t,custom:0,d:"M14 2v4a2 2 0 0 0 2 2h4"}),n.jsx(o.path,{variants:H,animate:t,custom:1,d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5"}),n.jsx(o.path,{variants:H,animate:t,custom:2,d:"M4.017 11.512a6 6 0 1 0 8.466 8.475"}),n.jsx(o.path,{variants:H,animate:t,custom:3,d:"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"})]})})},Ts=Object.freeze(Object.defineProperty({__proto__:null,FileChartPie:Bs},Symbol.toStringTag,{value:"Module"})),Hs={normal:{x:0,y:0,transition:{type:"spring",stiffness:300,damping:25}},animate:{x:-4,y:4,transition:{type:"spring",stiffness:300,damping:25}}},zs={normal:{x:0,y:0,transition:{type:"spring",stiffness:300,damping:25}},animate:{x:4,y:-4,transition:{type:"spring",stiffness:300,damping:25}}},Ds=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsxs(o.g,{variants:Hs,animate:t,children:[n.jsx("path",{d:"M21 7h-3a2 2 0 0 1-2-2V2"}),n.jsx("path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"})]}),n.jsx("path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"}),n.jsx(o.path,{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11",variants:zs,animate:t})]})})},Rs=Object.freeze(Object.defineProperty({__proto__:null,FileStack:Ds},Symbol.toStringTag,{value:"Module"})),$s={normal:{pathLength:1,opacity:1,pathOffset:0},animate:{opacity:[0,1],pathLength:[0,1],transition:{delay:.1,duration:.4,opacity:{duration:.1,delay:.1}}}},Ys=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:n.jsx(o.path,{variants:$s,initial:"normal",animate:t,fill:"none",d:"M8.9 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})})})},Xs=Object.freeze(Object.defineProperty({__proto__:null,Flame:Ys},Symbol.toStringTag,{value:"Module"})),rn={type:"spring",stiffness:250,damping:25},Us=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:{normal:{translateY:"0%"},animate:{translateY:"-2px"}},transition:rn,animate:t,initial:"normal",d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"}),n.jsx(o.path,{variants:{normal:{translateX:"0%"},animate:{translateX:"-2px"}},transition:rn,animate:t,initial:"normal",d:"m5 22 14-4"}),n.jsx(o.path,{variants:{normal:{translateX:"0%"},animate:{translateX:"2px"}},transition:rn,animate:t,initial:"normal",d:"m5 18 14 4"})]})})},Ns=Object.freeze(Object.defineProperty({__proto__:null,FlameKindling:Us},Symbol.toStringTag,{value:"Module"})),Fs={normal:{x:0,y:0,transition:{type:"spring",stiffness:300,damping:25}},animate:{x:-4,y:2,transition:{type:"spring",stiffness:300,damping:25}}},Zs={normal:{opacity:1,x:0,y:0,transition:{type:"spring",stiffness:300,damping:25}},animate:{opacity:0,x:4,y:-2,transition:{type:"spring",stiffness:300,damping:25,opacity:{duration:.1}}}},qs=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",variants:Fs,animate:t}),n.jsx(o.path,{d:"M2 8v11a2 2 0 0 0 2 2h14",variants:Zs,animate:t})]})})},Ks=Object.freeze(Object.defineProperty({__proto__:null,Folders:qs},Symbol.toStringTag,{value:"Module"})),Js={duration:.3,opacity:{delay:.15}},ln={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...Js,delay:.1*e}})},Qs=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.circle,{cx:"12",cy:"12",r:"10",variants:ln,animate:t,custom:0}),n.jsx(o.path,{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",variants:ln,animate:t,custom:1}),n.jsx(o.path,{d:"M2 12h20",variants:ln,animate:t,custom:2})]})})},nr=Object.freeze(Object.defineProperty({__proto__:null,Globe:Qs},Symbol.toStringTag,{value:"Module"})),it={duration:.3,opacity:{delay:.15}},tr={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...it,delay:.1*e}})},v={normal:{scale:1,opacity:1},animate:e=>({scale:[0,1],opacity:[0,1],transition:{...it,delay:.1*e}})},er=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M22 5V2l-5.89 5.89",variants:tr,animate:t,initial:"normal",custom:0}),n.jsx(o.circle,{cx:"12.35",cy:"11.65",r:"3",variants:v,animate:t,initial:"normal",custom:1}),n.jsx(o.circle,{cx:"13.91",cy:"5.85",r:"3",variants:v,animate:t,initial:"normal",custom:2}),n.jsx(o.circle,{cx:"18.15",cy:"10.09",r:"3",variants:v,animate:t,initial:"normal",custom:3}),n.jsx(o.circle,{cx:"16.6",cy:"15.89",r:"3",variants:v,animate:t,initial:"normal",custom:4}),n.jsx(o.circle,{cx:"10.8",cy:"17.44",r:"3",variants:v,animate:t,initial:"normal",custom:5}),n.jsx(o.circle,{cx:"8.11",cy:"7.4",r:"3",variants:v,animate:t,initial:"normal",custom:6}),n.jsx(o.circle,{cx:"6.56",cy:"13.2",r:"3",variants:v,animate:t,initial:"normal",custom:7}),n.jsx(o.circle,{cx:"5",cy:"19",r:"3",variants:v,animate:t,initial:"normal",custom:8})]})})},or=Object.freeze(Object.defineProperty({__proto__:null,Grape:er},Symbol.toStringTag,{value:"Module"})),ar=[{cx:19,cy:5},{cx:12,cy:5},{cx:19,cy:12},{cx:5,cy:5},{cx:12,cy:12},{cx:19,cy:19},{cx:5,cy:12},{cx:12,cy:19},{cx:5,cy:19}],ir=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const[t,m]=A.useState(!1),p=l();return A.useEffect(()=>{(async()=>{t&&(await p.start(f=>({opacity:.3,transition:{delay:f*.1,duration:.2}})),await p.start(f=>({opacity:1,transition:{delay:f*.1,duration:.2}})))})()},[t,p]),n.jsx(o.div,{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:n.jsx(ct,{children:ar.map((c,f)=>n.jsx(o.circle,{cx:c.cx,cy:c.cy,r:"1",initial:"initial",variants:{initial:{opacity:1}},animate:p,exit:"initial",custom:f},`${c.cx}-${c.cy}`))})})})},sr=Object.freeze(Object.defineProperty({__proto__:null,Grip:ir},Symbol.toStringTag,{value:"Module"})),rr={normal:{scale:1},animate:{scale:[1,1.1,1],transition:{duration:.5,ease:"easeInOut"}}},lr={normal:{y:0},animate:{y:[-2,0],transition:{duration:.3,ease:"easeOut"}}},cr=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsxs(o.g,{variants:rr,animate:t,initial:"normal",children:[n.jsx("path",{d:"M3 7V5c0-1.1.9-2 2-2h2"}),n.jsx("path",{d:"M17 3h2c1.1 0 2 .9 2 2v2"}),n.jsx("path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2"}),n.jsx("path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2"})]}),n.jsxs(o.g,{variants:lr,animate:t,initial:"normal",children:[n.jsx("rect",{width:"7",height:"5",x:"7",y:"7",rx:"1"}),n.jsx("rect",{width:"7",height:"5",x:"10",y:"12",rx:"1"})]})]})})},mr=Object.freeze(Object.defineProperty({__proto__:null,Group:cr},Symbol.toStringTag,{value:"Module"})),pr={type:"spring",stiffness:250,damping:25},dr=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}),n.jsx("path",{d:"M6 18h.01"}),n.jsx("path",{d:"M10 18h.01"}),n.jsxs(o.g,{variants:{normal:{translateY:"0%"},animate:{translateY:"2px"}},transition:pr,animate:t,initial:"normal",children:[n.jsx("path",{d:"M12 2v8"}),n.jsx("path",{d:"m16 6-4 4-4-4"})]})]})})},hr=Object.freeze(Object.defineProperty({__proto__:null,HardDriveDownload:dr},Symbol.toStringTag,{value:"Module"})),ur={duration:.3,opacity:{delay:.15}},z={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...ur,delay:.1*e}})},fr=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",variants:z,animate:t,custom:0}),n.jsx(o.path,{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",variants:z,animate:t,custom:1}),n.jsx(o.path,{d:"m18 15-2-2",variants:z,animate:t,custom:2}),n.jsx(o.path,{d:"m15 18-2-2",variants:z,animate:t,custom:3})]})})},gr=Object.freeze(Object.defineProperty({__proto__:null,HeartHandshake:fr},Symbol.toStringTag,{value:"Module"})),Dn={normal:{y:0,opacity:1,transition:{duration:.2,ease:"easeOut"}},animate:e=>({y:[-1,1,-1],opacity:[.6,1,.6],transition:{duration:2,ease:"easeInOut",delay:e*.2,repeat:1/0,repeatType:"loop"}})},vr={normal:{opacity:1},animate:{opacity:1}},xr=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M11 8c2-3-2-3 0-6",variants:Dn,animate:t,initial:"normal",custom:0}),n.jsx(o.path,{d:"M15.5 8c2-3-2-3 0-6",variants:Dn,animate:t,initial:"normal",custom:1}),n.jsxs(o.g,{variants:vr,animate:t,initial:"normal",children:[n.jsx("path",{d:"M6 10h.01"}),n.jsx("path",{d:"M6 14h.01"}),n.jsx("path",{d:"M10 16v-4"}),n.jsx("path",{d:"M14 16v-4"}),n.jsx("path",{d:"M18 16v-4"}),n.jsx("path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"}),n.jsx("path",{d:"M5 20v2"}),n.jsx("path",{d:"M19 20v2"})]})]})})},yr=Object.freeze(Object.defineProperty({__proto__:null,Heater:xr},Symbol.toStringTag,{value:"Module"})),wr={duration:.3,opacity:{delay:.15}},Rn={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...wr,delay:.1*e}})},_r=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:Rn,animate:t,custom:0,d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"}),n.jsx(o.polyline,{variants:Rn,animate:t,custom:1,points:"16 14 20 18 16 22"})]})})},kr=Object.freeze(Object.defineProperty({__proto__:null,IterationCcw:_r},Symbol.toStringTag,{value:"Module"})),jr={duration:.3,opacity:{delay:.15}},$n={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...jr,delay:.1*e}})},br=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:$n,animate:t,custom:0,d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"}),n.jsx(o.polyline,{variants:$n,animate:t,custom:1,points:"8 22 4 18 8 14"})]})})},Mr=Object.freeze(Object.defineProperty({__proto__:null,IterationCw:br},Symbol.toStringTag,{value:"Module"})),Vr={normal:{y:0,transition:{type:"spring",stiffness:300,damping:25}},animate:{y:8,transition:{type:"spring",stiffness:300,damping:25}}},Yn={normal:{y:0,opacity:1,transition:{type:"spring",stiffness:300,damping:25}},animate:{y:-4,opacity:0,transition:{type:"spring",stiffness:300,damping:25}}},Lr=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",variants:Vr,animate:t}),n.jsx(o.path,{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",variants:Yn,animate:t}),n.jsx(o.path,{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",variants:Yn,animate:t,custom:1})]})})},Sr=Object.freeze(Object.defineProperty({__proto__:null,Layers:Lr},Symbol.toStringTag,{value:"Module"})),D={normal:e=>({x:0,y:0,transition:{type:"spring",stiffness:300,damping:25}}),animate:e=>({...[{x:11,y:0},{x:0,y:11},{x:-11,y:0},{x:0,y:-11}][e],transition:{type:"spring",stiffness:300,damping:25}})},Cr=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.rect,{width:"7",height:"7",x:"3",y:"3",rx:"1",variants:D,animate:t,initial:"normal",custom:0}),n.jsx(o.rect,{width:"7",height:"7",x:"14",y:"3",rx:"1",variants:D,animate:t,initial:"normal",custom:1}),n.jsx(o.rect,{width:"7",height:"7",x:"14",y:"14",rx:"1",variants:D,animate:t,initial:"normal",custom:2}),n.jsx(o.rect,{width:"7",height:"7",x:"3",y:"14",rx:"1",variants:D,animate:t,initial:"normal",custom:3})]})})},Ar=Object.freeze(Object.defineProperty({__proto__:null,LayoutGrid:Cr},Symbol.toStringTag,{value:"Module"})),Xn={type:"spring",stiffness:250,damping:25},Wr=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M9 17H7A5 5 0 0 1 7 7h2",variants:{normal:{x:0},animate:{x:-2}},transition:Xn,animate:t,initial:"normal"}),n.jsx(o.path,{d:"M15 7h2a5 5 0 1 1 0 10h-2",variants:{normal:{x:0},animate:{x:2}},transition:Xn,animate:t,initial:"normal"}),n.jsx("line",{x1:"8",x2:"16",y1:"12",y2:"12"})]})})},Or=Object.freeze(Object.defineProperty({__proto__:null,Link2:Wr},Symbol.toStringTag,{value:"Module"})),Un={normal:{opacity:1},animate:{opacity:1}},Nn={normal:{y:0,transition:{type:"spring",stiffness:400,damping:25}},animate:e=>({y:[-100,10,0],transition:{type:"spring",stiffness:200,damping:12,mass:1.2,delay:e*.15}})},Ir=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.rect,{width:"4",height:"12",x:"2",y:"9",variants:Un,animate:t}),n.jsx(o.circle,{cx:"4",cy:"4",r:"2",variants:Un,animate:t}),n.jsx(o.path,{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7",variants:Nn,animate:t,custom:0}),n.jsx(o.path,{d:"M18 14a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7",variants:Nn,animate:t,custom:1})]})})},Pr=Object.freeze(Object.defineProperty({__proto__:null,Linkedin:Ir},Symbol.toStringTag,{value:"Module"})),Er={duration:2,ease:"linear",repeat:1},Gr={normal:{rotate:0},animate:{rotate:360}},Br=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:n.jsxs(o.g,{variants:Gr,animate:t,initial:"normal",transition:Er,children:[n.jsx("path",{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"}),n.jsx("path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"}),n.jsx("path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"}),n.jsx("circle",{cx:"12",cy:"12",r:"10"})]})})})},Tr=Object.freeze(Object.defineProperty({__proto__:null,LoaderPinwheel:Br},Symbol.toStringTag,{value:"Module"})),Hr={normal:{scale:1,rotate:0,y:0},animate:{scale:[1,1.04,1],rotate:[0,-8,8,-8,0],y:[0,-2,0],transition:{duration:.6,ease:"easeInOut",times:[0,.2,.5,.8,1]}}},zr=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs(o.svg,{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",variants:Hr,animate:t,children:[n.jsx("path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"}),n.jsx("path",{d:"m5 8 4 4"}),n.jsx("path",{d:"m12 15 4 4"})]})})},Dr=Object.freeze(Object.defineProperty({__proto__:null,Magnet:zr},Symbol.toStringTag,{value:"Module"})),Rr={normal:{rotate:0,transition:{type:"spring",stiffness:300,damping:20}},animate:{rotate:[-5,0],transition:{type:"spring",stiffness:300,damping:20}}},$r=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs(o.svg,{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",variants:Rr,animate:t,style:{originX:"50%",originY:"50%"},children:[n.jsx("path",{d:"M8 22h8"}),n.jsx("path",{d:"M12 11v11"}),n.jsx("path",{d:"m19 3-7 8-7-8Z"})]})})},Yr=Object.freeze(Object.defineProperty({__proto__:null,Martini:$r},Symbol.toStringTag,{value:"Module"})),Fn={type:"spring",stiffness:250,damping:25},Xr=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsxs(o.g,{variants:{normal:{x:0,y:0},animate:{x:2,y:-2}},transition:Fn,animate:t,initial:"normal",children:[n.jsx("polyline",{points:"15 3 21 3 21 9"}),n.jsx("line",{x1:"21",x2:"14",y1:"3",y2:"10"})]}),n.jsxs(o.g,{variants:{normal:{x:0,y:0},animate:{x:-2,y:2}},transition:Fn,animate:t,initial:"normal",children:[n.jsx("polyline",{points:"9 21 3 21 3 15"}),n.jsx("line",{x1:"3",x2:"10",y1:"21",y2:"14"})]})]})})},Ur=Object.freeze(Object.defineProperty({__proto__:null,Maximize2:Xr},Symbol.toStringTag,{value:"Module"})),Nr={normal:{x:0,y:0},animate:{x:[0,0,-2,1,-1,.5,-.5,0],y:[0,-2,0,-1,-2,-.5,-1,0],transition:{duration:6,ease:"easeInOut",repeat:1/0,repeatType:"reverse",times:[0,.15,.3,.45,.6,.75,.9,1]}}},Fr=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs(o.svg,{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",variants:Nr,animate:t,children:[n.jsx("path",{d:"M9 18V5l12-2v13"}),n.jsx("circle",{cx:"6",cy:"18",r:"3"}),n.jsx("circle",{cx:"18",cy:"16",r:"3"})]})})},Zr=Object.freeze(Object.defineProperty({__proto__:null,Music:Fr},Symbol.toStringTag,{value:"Module"})),fn=.25,R=e=>e===0?.1:e*fn+.1,qr=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}),n.jsx("rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}),n.jsx("rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}),n.jsx(o.path,{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",animate:t,transition:{duration:fn,delay:R(0),opacity:{delay:R(0)}},variants:{normal:{pathLength:1,pathOffset:0,opacity:1},animate:{pathOffset:[1,0],pathLength:[0,1],opacity:[0,1]}}}),n.jsx(o.path,{d:"M12 12V8",animate:t,transition:{duration:fn,delay:R(1),opacity:{delay:R(1)}},variants:{normal:{pathLength:1,pathOffset:0,opacity:1},animate:{pathOffset:[1,0],pathLength:[0,1],opacity:[0,1]}}})]})})},Kr=Object.freeze(Object.defineProperty({__proto__:null,Network:qr},Symbol.toStringTag,{value:"Module"})),O=.25,x=e=>e===0?.1:e*O+.1,Jr=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",animate:t,transition:{duration:O,delay:x(0),opacity:{delay:x(0)}},variants:{normal:{pathLength:1,pathOffset:0,opacity:1,transition:{delay:0}},animate:{pathOffset:[1,0],pathLength:[0,1],opacity:[0,1]}}}),n.jsx(o.path,{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",animate:t,transition:{duration:O,delay:x(1),opacity:{delay:x(1)}},variants:{normal:{pathLength:1,pathOffset:0,opacity:1,transition:{delay:0}},animate:{pathOffset:[1,0],pathLength:[0,1],opacity:[0,1]}}}),n.jsx(o.path,{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",animate:t,transition:{duration:O,delay:x(2),opacity:{delay:x(2)}},variants:{normal:{pathLength:1,pathOffset:0,opacity:1,transition:{delay:0}},animate:{pathOffset:[1,0],pathLength:[0,1],opacity:[0,1]}}}),n.jsx(o.path,{d:"M16.37 2a20.16 20.16 0 0 1 0 20",animate:t,transition:{duration:O,delay:x(3),opacity:{delay:x(3)}},variants:{normal:{pathLength:1,pathOffset:0,opacity:1,transition:{delay:0}},animate:{pathOffset:[1,0],pathLength:[0,1],opacity:[0,1]}}})]})})},Qr=Object.freeze(Object.defineProperty({__proto__:null,Nfc:Jr},Symbol.toStringTag,{value:"Module"})),nl={normal:{rotate:0,scale:1,transition:{type:"spring",stiffness:300,damping:20}},animate:{rotate:[-2,2,-2],scale:[1,1.05,1],transition:{duration:1.5,ease:"easeInOut",repeat:1/0}}},tl=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs(o.svg,{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",variants:nl,animate:t,style:{originX:"50%",originY:"50%"},children:[n.jsx("path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025"}),n.jsx("path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"}),n.jsx("path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"})]})})},el=Object.freeze(Object.defineProperty({__proto__:null,Origami:tl},Symbol.toStringTag,{value:"Module"})),$={normal:{pathLength:1,transition:{duration:.3,ease:"easeInOut"}},animate:{pathLength:[0,1],transition:{duration:1,ease:"easeInOut"}}},ol={normal:{offsetDistance:"0%",transition:{duration:.3,ease:"easeInOut"}},animate:{offsetDistance:"100%",transition:{duration:1,ease:"easeInOut"}}},al=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M12 22v-9",variants:$,animate:t}),n.jsx(o.path,{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",variants:$,animate:t}),n.jsx(o.path,{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",variants:$,animate:t}),n.jsx(o.path,{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",variants:$,animate:t}),n.jsx(o.circle,{cx:"12",cy:"12",r:"1",fill:"currentColor",style:{offsetPath:"path('M12 22v-9 M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13 M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z')"},variants:ol,animate:t})]})})},il=Object.freeze(Object.defineProperty({__proto__:null,PackageOpen:al},Symbol.toStringTag,{value:"Module"})),sl={normal:{pathLength:1,opacity:1,strokeWidth:2},animate:{pathLength:[0,1],opacity:1,strokeWidth:2,transition:{duration:1,ease:"easeInOut",pathLength:{delay:.2,duration:.8}}}},rl={normal:{pathLength:1,opacity:1,strokeWidth:2},animate:{pathLength:[0,1],opacity:1,strokeWidth:2,transition:{delay:.8,duration:.4,ease:"easeOut"}}},ll=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M13.234 20.252 21 12.3",variants:rl,animate:t,initial:"normal"}),n.jsx(o.path,{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",variants:sl,animate:t,initial:"normal"})]})})},cl=Object.freeze(Object.defineProperty({__proto__:null,Paperclip:ll},Symbol.toStringTag,{value:"Module"})),cn={normal:{opacity:1,pathLength:1,scale:1,translateX:0,translateY:0},animate:{opacity:[0,1],scale:[.3,.8,1,1.1,1],pathLength:[0,.5,1],translateX:[-5,0],translateY:[5,0],transition:{type:"spring",damping:35,duration:.7,stiffness:240,velocity:.3}}},Y={normal:{opacity:1,scale:1,translateX:0,translateY:0},animate:{opacity:[0,1],translateX:[-5,0],translateY:[5,0],scale:[.5,.8,1,1.1,1],transition:{type:"spring",damping:35,duration:.7,stiffness:240}}},Zn={normal:{translateX:0,translateY:0},animate:{translateX:[-1.5,0],translateY:[1.5,0],transition:{type:"spring",damping:35,stiffness:200,velocity:.3,mass:4}}},ml=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M5.8 11.3 2 22l10.7-3.79",variants:Zn,animate:t}),n.jsx(o.path,{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",variants:Zn,animate:t}),n.jsx(o.path,{d:"M4 3h.01",variants:Y,animate:t}),n.jsx(o.path,{d:"M22 8h.01",variants:Y,animate:t}),n.jsx(o.path,{d:"M15 2h.01",variants:Y,animate:t}),n.jsx(o.path,{d:"M22 20h.01",variants:Y,animate:t}),n.jsx(o.path,{d:"m14 10 1.21-1.06c0.16-0.84 0.9-1.44 1.76-1.44h0.38c0.88 0 1.55-0.77 1.45-1.63a2.9 2.9 0 0 1 1.96-3.12L22 2",variants:cn,animate:t}),n.jsx(o.path,{d:"M17 15h0.77c0.71 0 1.32-0.52 1.43-1.22c0.16-0.91 1.12-1.45 1.98-1.11L22 13",variants:cn,animate:t}),n.jsx(o.path,{d:"M9 7V6.23c0-0.71 0.52-1.33 1.22-1.43c0.91-0.16 1.45-1.12 1.11-1.98L11 2",variants:cn,animate:t})]})})},pl=Object.freeze(Object.defineProperty({__proto__:null,PartyPopper:ml},Symbol.toStringTag,{value:"Module"})),dl={normal:{pathLength:1,opacity:1},animate:{pathLength:[0,1],opacity:[0,1],transition:{duration:.3,ease:"easeInOut"}}},qn={normal:e=>({x:e.x,y:e.y,transition:{duration:.6,ease:"easeOut"}}),animate:e=>({x:e.x===6.5?17.5:6.5,y:e.y===6.5?17.5:6.5,transition:{duration:.6,ease:"easeInOut"}})},hl=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.line,{x1:"19",x2:"5",y1:"5",y2:"19",variants:dl,animate:t}),n.jsx(o.circle,{r:"2.5",variants:qn,animate:t,custom:{x:6.5,y:6.5},initial:{x:6.5,y:6.5}}),n.jsx(o.circle,{r:"2.5",variants:qn,animate:t,custom:{x:17.5,y:17.5},initial:{x:17.5,y:17.5}})]})})},ul=Object.freeze(Object.defineProperty({__proto__:null,Percent:hl},Symbol.toStringTag,{value:"Module"})),fl={normal:{x:0,y:0,transition:{type:"spring",stiffness:300,damping:20}},animate:{x:[0,2,0],y:[0,-2,0],transition:{duration:2,ease:"easeInOut",repeat:1/0}}},gl=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsx(o.svg,{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",variants:fl,animate:t,children:n.jsx("path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"})})})},vl=Object.freeze(Object.defineProperty({__proto__:null,Plane:gl},Symbol.toStringTag,{value:"Module"})),Kn={normal:{scale:1,opacity:1},animate:e=>({scale:[1,1.2,1],opacity:[1,.5,1],transition:{duration:1.5,delay:e*.2,repeat:1/0}})},xl={normal:{scale:1},animate:{scale:[1,1.2,1],transition:{duration:.6,repeat:1/0}}},yl=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M16.85 18.58a9 9 0 1 0-9.7 0",variants:Kn,animate:t,custom:0}),n.jsx(o.path,{d:"M8 14a5 5 0 1 1 8 0",variants:Kn,animate:t,custom:1}),n.jsx(o.circle,{cx:"12",cy:"11",r:"1",variants:xl,animate:t}),n.jsx("path",{d:"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"})]})})},wl=Object.freeze(Object.defineProperty({__proto__:null,Podcast:yl},Symbol.toStringTag,{value:"Module"})),_l={normal:{x:0,y:0},animate:{x:[0,0,-3,2,-2,1,-1,0],y:[0,-3,0,-2,-3,-1,-2,0],transition:{duration:6,ease:"easeInOut",repeat:1/0,repeatType:"reverse",times:[0,.15,.3,.45,.6,.75,.9,1]}}},kl={normal:{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"},animate:{d:["M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z","M4.5 16.5c-1.5 1.26-3 5.5-3 5.5s4.74-1 6-2.5c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z","M4.5 16.5c-1.5 1.26-2.2 4.8-2.2 4.8s3.94-0.3 5.2-1.8c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z","M4.5 16.5c-1.5 1.26-2.8 5.2-2.8 5.2s4.54-0.7 5.8-2.2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z","M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"],transition:{duration:2,ease:[.4,0,.2,1],repeat:1/0,times:[0,.2,.5,.8,1]}}},jl=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs(o.svg,{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",variants:_l,animate:t,children:[n.jsx(o.path,{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",variants:kl,animate:t}),n.jsx("path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}),n.jsx("path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}),n.jsx("path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"})]})})},bl=Object.freeze(Object.defineProperty({__proto__:null,Rocket:jl},Symbol.toStringTag,{value:"Module"})),Ml={normal:{translateY:0,transition:{type:"spring",stiffness:200,damping:13}},animate:{translateY:[-4,0],transition:{delay:.1,type:"spring",stiffness:200,damping:13}}},Vl=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("path",{d:"M7 21h10"}),n.jsx("path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}),n.jsxs(o.g,{variants:Ml,animate:t,initial:"normal",children:[n.jsx("path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"}),n.jsx("path",{d:"m13 12 4-4"}),n.jsx("path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"})]})]})})},Ll=Object.freeze(Object.defineProperty({__proto__:null,Salad:Vl},Symbol.toStringTag,{value:"Module"})),Sl={normal:{pathLength:1,opacity:1},animate:{pathLength:[0,1],opacity:[0,1],transition:{duration:.8,ease:"easeInOut"}}},X={normal:{x:0,y:0},animate:e=>({x:e%2===0?[-3,0]:[3,0],y:e<2?[-3,0]:[3,0],transition:{type:"spring",stiffness:100,damping:10,mass:.5}})},Cl=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z",variants:Sl,animate:t}),n.jsx(o.path,{d:"M17 3h2a2 2 0 0 1 2 2v2",variants:X,animate:t,custom:0}),n.jsx(o.path,{d:"M21 17v2a2 2 0 0 1-2 2h-2",variants:X,animate:t,custom:1}),n.jsx(o.path,{d:"M3 7V5a2 2 0 0 1 2-2h2",variants:X,animate:t,custom:2}),n.jsx(o.path,{d:"M7 21H5a2 2 0 0 1-2-2v-2",variants:X,animate:t,custom:3})]})})},Al=Object.freeze(Object.defineProperty({__proto__:null,ScanHeart:Cl},Symbol.toStringTag,{value:"Module"})),U={visible:{opacity:1},hidden:{opacity:1}},mn={visible:{pathLength:1,opacity:1},hidden:{pathLength:0,opacity:0}},Wl=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l(),m=A.useCallback(async()=>{await t.start(c=>({pathLength:0,opacity:0,transition:{delay:c*.1,duration:.3}})),await t.start(c=>({pathLength:1,opacity:1,transition:{delay:c*.1,duration:.3}}))},[t]),p=A.useCallback(()=>{t.start("visible")},[t]);return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:m,onMouseLeave:p,children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{variants:U,d:"M3 7V5a2 2 0 0 1 2-2h2"}),n.jsx(o.path,{variants:U,d:"M17 3h2a2 2 0 0 1 2 2v2"}),n.jsx(o.path,{variants:U,d:"M21 17v2a2 2 0 0 1-2 2h-2"}),n.jsx(o.path,{variants:U,d:"M7 21H5a2 2 0 0 1-2-2v-2"}),n.jsx(o.path,{variants:mn,initial:"visible",animate:t,custom:0,d:"M7 8h8"}),n.jsx(o.path,{variants:mn,initial:"visible",animate:t,custom:1,d:"M7 12h10"}),n.jsx(o.path,{variants:mn,initial:"visible",animate:t,custom:2,d:"M7 16h6"})]})})},Ol=Object.freeze(Object.defineProperty({__proto__:null,ScanText:Wl},Symbol.toStringTag,{value:"Module"})),Il={duration:.3,opacity:{delay:.15}},Pl={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...Il,delay:.1*e}})},El=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:n.jsx(o.path,{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",variants:Pl,animate:t,initial:"normal",custom:0})})})},Gl=Object.freeze(Object.defineProperty({__proto__:null,Shell:El},Symbol.toStringTag,{value:"Module"})),y={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{duration:.5,delay:e*.1,ease:"easeInOut"}})},Bl=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.rect,{width:"3",height:"8",x:"13",y:"2",rx:"1.5",variants:y,animate:t,custom:0}),n.jsx(o.path,{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",variants:y,animate:t,custom:1}),n.jsx(o.rect,{width:"3",height:"8",x:"8",y:"14",rx:"1.5",variants:y,animate:t,custom:2}),n.jsx(o.path,{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",variants:y,animate:t,custom:3}),n.jsx(o.rect,{width:"8",height:"3",x:"14",y:"13",rx:"1.5",variants:y,animate:t,custom:4}),n.jsx(o.path,{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",variants:y,animate:t,custom:5}),n.jsx(o.rect,{width:"8",height:"3",x:"2",y:"8",rx:"1.5",variants:y,animate:t,custom:6}),n.jsx(o.path,{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",variants:y,animate:t,custom:7})]})})},Tl=Object.freeze(Object.defineProperty({__proto__:null,Slack:Bl},Symbol.toStringTag,{value:"Module"})),u={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{duration:.5,delay:e*.1,ease:"easeInOut"}})},Hl=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.line,{x1:"4",x2:"4",y1:"21",y2:"14",variants:u,animate:t,custom:0}),n.jsx(o.line,{x1:"4",x2:"4",y1:"10",y2:"3",variants:u,animate:t,custom:1}),n.jsx(o.line,{x1:"12",x2:"12",y1:"21",y2:"12",variants:u,animate:t,custom:2}),n.jsx(o.line,{x1:"12",x2:"12",y1:"8",y2:"3",variants:u,animate:t,custom:3}),n.jsx(o.line,{x1:"20",x2:"20",y1:"21",y2:"16",variants:u,animate:t,custom:4}),n.jsx(o.line,{x1:"20",x2:"20",y1:"12",y2:"3",variants:u,animate:t,custom:5}),n.jsx(o.line,{x1:"2",x2:"6",y1:"14",y2:"14",variants:u,animate:t,custom:6}),n.jsx(o.line,{x1:"10",x2:"14",y1:"8",y2:"8",variants:u,animate:t,custom:7}),n.jsx(o.line,{x1:"18",x2:"22",y1:"16",y2:"16",variants:u,animate:t,custom:8})]})})},zl=Object.freeze(Object.defineProperty({__proto__:null,SlidersVertical:Hl},Symbol.toStringTag,{value:"Module"})),pn={normal:{opacity:1,scale:1},animate:e=>({opacity:[.3,1,.3],scale:[.8,1,.8],transition:{duration:2,ease:"easeInOut",repeat:1/0,delay:e*.2}})},Dl=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("rect",{width:"7",height:"12",x:"2",y:"6",rx:"1"}),n.jsx(o.path,{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36",variants:pn,animate:t,custom:0}),n.jsx(o.path,{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58",variants:pn,animate:t,custom:1}),n.jsx(o.path,{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",variants:pn,animate:t,custom:2})]})})},Rl=Object.freeze(Object.defineProperty({__proto__:null,SmartphoneNfc:Dl},Symbol.toStringTag,{value:"Module"})),$l={normal:{scale:1},animate:{scale:[1,1.1,1],transition:{duration:2,ease:"easeInOut",repeat:1/0,repeatType:"reverse"}}},Jn={normal:{x:0,y:0,opacity:1},animate:e=>({x:[0,2,-1,1,-2,0][e%6],y:[0,-1,1,-2,1,0][e%6],opacity:[1,.7,1,.5,1],transition:{duration:4,ease:"easeInOut",repeat:1/0,repeatType:"reverse",delay:e*.2}})},Yl=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",variants:$l,animate:t,initial:"normal"}),n.jsxs(o.g,{variants:Jn,animate:t,initial:"normal",custom:0,children:[n.jsx(o.path,{d:"M20 3v4"}),n.jsx(o.path,{d:"M22 5h-4"})]}),n.jsxs(o.g,{variants:Jn,animate:t,initial:"normal",custom:1,children:[n.jsx(o.path,{d:"M4 17v2"}),n.jsx(o.path,{d:"M5 18H3"})]})]})})},Xl=Object.freeze(Object.defineProperty({__proto__:null,Sparkles:Yl},Symbol.toStringTag,{value:"Module"})),S={normal:{opacity:1,scale:1},animate:e=>({opacity:[1,.4,1],scale:[1,.8,1],transition:{duration:1.2,repeat:1/0,repeatDelay:.2,delay:e*.15,ease:"easeInOut"}})},Ul={normal:{rotate:0},animate:{rotate:[0,-2,0],transition:{duration:1.5,repeat:1/0,ease:"easeInOut"}}},Nl=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs(o.svg,{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",variants:Ul,animate:t,children:[n.jsx(o.path,{d:"M3 3h.01",variants:S,animate:t,custom:0}),n.jsx(o.path,{d:"M7 5h.01",variants:S,animate:t,custom:1}),n.jsx(o.path,{d:"M11 7h.01",variants:S,animate:t,custom:2}),n.jsx(o.path,{d:"M3 7h.01",variants:S,animate:t,custom:3}),n.jsx(o.path,{d:"M7 9h.01",variants:S,animate:t,custom:4}),n.jsx(o.path,{d:"M3 11h.01",variants:S,animate:t,custom:5}),n.jsx("rect",{width:"4",height:"4",x:"15",y:"5"}),n.jsx("path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"}),n.jsx("path",{d:"m13 14 8-2"}),n.jsx("path",{d:"m13 19 8-2"})]})})},Fl=Object.freeze(Object.defineProperty({__proto__:null,SprayCan:Nl},Symbol.toStringTag,{value:"Module"})),N={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{duration:1,delay:e*.15,ease:"easeInOut"}})},Zl=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M15.236 22a3 3 0 0 0-2.2-5",variants:N,animate:t,custom:0}),n.jsx(o.path,{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",variants:N,animate:t,custom:1}),n.jsx(o.path,{d:"M18 13h.01",variants:N,animate:t,custom:2}),n.jsx(o.path,{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",variants:N,animate:t,custom:3})]})})},ql=Object.freeze(Object.defineProperty({__proto__:null,Squirrel:Zl},Symbol.toStringTag,{value:"Module"})),Qn={normal:{x:0,opacity:1,transition:{type:"spring",stiffness:300,damping:25}},animate:{x:-8,opacity:0,transition:{type:"spring",stiffness:300,damping:25}}},nt={normal:{x:0,transition:{type:"spring",stiffness:300,damping:25}},animate:{x:4,transition:{type:"spring",stiffness:300,damping:25}}},Kl=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",variants:nt,animate:t}),n.jsx(o.path,{d:"M 7 17h.01",variants:nt,animate:t}),n.jsx(o.path,{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7",variants:Qn,animate:t}),n.jsx(o.path,{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",variants:Qn,animate:t})]})})},Jl=Object.freeze(Object.defineProperty({__proto__:null,SwatchBook:Kl},Symbol.toStringTag,{value:"Module"})),Ql={normal:{rotate:0,transition:{type:"spring",stiffness:300,damping:25}},animate:{rotate:-45,transition:{type:"spring",stiffness:300,damping:25}}},nc={normal:{pathLength:1,pathOffset:0,transition:{duration:.4,ease:"easeInOut"}},animate:{pathLength:1.2,pathOffset:.1,transition:{duration:.4,ease:"easeInOut",delay:.1}}},tc=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs(o.svg,{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",variants:Ql,animate:t,style:{originX:"50%",originY:"50%"},children:[n.jsx("path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"}),n.jsx("path",{d:"M8.5 2h7"}),n.jsx(o.path,{d:"M14.5 16h-5",variants:nc,animate:t,initial:"normal",strokeDasharray:"6 3",style:{originX:"50%",originY:"50%"}})]})})},ec=Object.freeze(Object.defineProperty({__proto__:null,TestTubes:tc},Symbol.toStringTag,{value:"Module"})),oc={duration:.3,opacity:{delay:.15}},ac={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{...oc,delay:.1*e}})},ic={normal:{scale:1,x:0,opacity:1},animate:e=>({scale:[.8,1.1,1],x:[-2,2,0],opacity:1,transition:{type:"spring",stiffness:300,damping:20,delay:.1*e}})},sc=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z",variants:ac,animate:t,custom:0}),n.jsxs(o.g,{variants:ic,animate:t,custom:1,children:[n.jsx("path",{d:"m10 20-1.25-2.5L6 18"}),n.jsx("path",{d:"M10 4 8.75 6.5 6 6"}),n.jsx("path",{d:"M10.585 15H10"}),n.jsx("path",{d:"M2 12h6.5L10 9"}),n.jsx("path",{d:"m4 10 1.5 2L4 14"}),n.jsx("path",{d:"m7 21 3-6-1.5-3"}),n.jsx("path",{d:"m7 3 3 6h2"})]})]})})},rc=Object.freeze(Object.defineProperty({__proto__:null,ThermometerSnowflake:sc},Symbol.toStringTag,{value:"Module"})),lc={normal:{scale:1,rotate:0,y:0},animate:{scale:[1,1.04,1],rotate:[0,-8,8,-8,0],y:[0,-2,0],transition:{duration:.6,ease:"easeInOut",times:[0,.2,.5,.8,1]}}},cc=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs(o.svg,{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",variants:lc,animate:t,children:[n.jsx("path",{d:"M17 14V2"}),n.jsx("path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"})]})})},mc=Object.freeze(Object.defineProperty({__proto__:null,ThumbsDown:cc},Symbol.toStringTag,{value:"Module"})),pc={normal:{scale:1,rotate:0,y:0},animate:{scale:[1,1.04,1],rotate:[0,-8,8,-8,0],y:[0,-2,0],transition:{duration:.6,ease:"easeInOut",times:[0,.2,.5,.8,1]}}},dc=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs(o.svg,{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",variants:pc,animate:t,children:[n.jsx("path",{d:"M7 10v12"}),n.jsx("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"})]})})},hc=Object.freeze(Object.defineProperty({__proto__:null,ThumbsUp:dc},Symbol.toStringTag,{value:"Module"})),uc={normal:{cx:8,transition:{type:"spring",stiffness:500,damping:30}},animate:{cx:16,transition:{type:"spring",stiffness:500,damping:30}}},fc=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}),n.jsx(o.circle,{cy:"12",r:"2",variants:uc,animate:t,initial:"normal"})]})})},gc=Object.freeze(Object.defineProperty({__proto__:null,ToggleLeft:fc},Symbol.toStringTag,{value:"Module"})),vc={normal:{translateX:0,transition:{type:"spring",stiffness:200,damping:13}},animate:{translateX:[-6,0],transition:{delay:.1,type:"spring",stiffness:200,damping:13}}},xc=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"}),n.jsx("path",{d:"M7 16v6"}),n.jsx("path",{d:"M13 19v3"}),n.jsx(o.path,{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",variants:vc,animate:t})]})})},yc=Object.freeze(Object.defineProperty({__proto__:null,Trees:xc},Symbol.toStringTag,{value:"Module"})),q=mt(.25,.1,.25,1),wc={normal:{x:0,y:0,rotate:0,transition:{duration:.6,ease:q}},animate:{x:[0,2.1,0],y:[0,-1.4,0],rotate:[0,12,0],transition:{duration:.6,ease:q}}},_c={normal:{pathLength:1,transition:{duration:.6,ease:q}},animate:{pathLength:[1,.8,1],transition:{duration:.6,ease:q}}},kc=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M3 7v6h6",variants:wc,animate:t}),n.jsx(o.path,{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",variants:_c,animate:t})]})})},jc=Object.freeze(Object.defineProperty({__proto__:null,Undo:kc},Symbol.toStringTag,{value:"Module"})),bc={normal:{x:0,transition:{type:"spring",stiffness:300,damping:25}},animate:{x:-2,transition:{type:"spring",stiffness:300,damping:25}}},Mc={normal:{x:0,y:0,transition:{type:"spring",stiffness:300,damping:25}},animate:{x:2,y:-10,transition:{type:"spring",stiffness:300,damping:25}}},Vc=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.rect,{width:"8",height:"6",x:"5",y:"4",rx:"1",variants:bc,animate:t,initial:"normal"}),n.jsx(o.rect,{width:"8",height:"6",x:"11",y:"14",rx:"1",variants:Mc,animate:t,initial:"normal"})]})})},Lc=Object.freeze(Object.defineProperty({__proto__:null,Ungroup:Vc},Symbol.toStringTag,{value:"Module"})),Sc={normal:{pathLength:1,opacity:1,pathOffset:0},animate:{pathLength:[0,1],opacity:[0,1],pathOffset:[1,0]}},Cc={normal:{pathLength:1,pathOffset:0,scale:1},animate:{pathLength:[0,1],pathOffset:[1,0],scale:[.5,1]}},Ac=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.circle,{cx:"12",cy:"8",r:"5",animate:t,variants:Cc}),n.jsx(o.path,{d:"M20 21a8 8 0 0 0-16 0",variants:Sc,transition:{delay:.2,duration:.4},animate:t})]})})},Wc=Object.freeze(Object.defineProperty({__proto__:null,User:Ac},Symbol.toStringTag,{value:"Module"})),tt={normal:{translateX:0,transition:{type:"spring",stiffness:200,damping:13}},animate:{translateX:[-6,0],transition:{delay:.1,type:"spring",stiffness:200,damping:13}}},Oc=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),n.jsx("circle",{cx:"9",cy:"7",r:"4"}),n.jsx(o.path,{d:"M22 21v-2a4 4 0 0 0-3-3.87",variants:tt,animate:t}),n.jsx(o.path,{d:"M16 3.13a4 4 0 0 1 0 7.75",variants:tt,animate:t})]})})},Ic=Object.freeze(Object.defineProperty({__proto__:null,Users:Oc},Symbol.toStringTag,{value:"Module"})),Pc={normal:{opacity:1},animate:{opacity:1}},w={normal:{opacity:1,scale:1,y:0,transition:{duration:.2,ease:"easeOut"}},animate:e=>({opacity:[1,.5,1],scale:[1,1.05,1],y:[0,-1,0],transition:{duration:1.2,delay:e*.1,ease:"easeInOut"}})},Ec=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"m3 21 9-9",variants:Pc,animate:t,initial:"normal"}),n.jsx(o.path,{d:"M15 4V2",variants:w,animate:t,initial:"normal",custom:0}),n.jsx(o.path,{d:"M15 16v-2",variants:w,animate:t,initial:"normal",custom:1}),n.jsx(o.path,{d:"M8 9h2",variants:w,animate:t,initial:"normal",custom:2}),n.jsx(o.path,{d:"M20 9h2",variants:w,animate:t,initial:"normal",custom:3}),n.jsx(o.path,{d:"M17.8 11.8 19 13",variants:w,animate:t,initial:"normal",custom:4}),n.jsx(o.path,{d:"M15 9h.01",variants:w,animate:t,initial:"normal",custom:5}),n.jsx(o.path,{d:"M17.8 6.2 19 5",variants:w,animate:t,initial:"normal",custom:6}),n.jsx(o.path,{d:"M12.2 6.2 11 5",variants:w,animate:t,initial:"normal",custom:7})]})})},Gc=Object.freeze(Object.defineProperty({__proto__:null,Wand:Ec},Symbol.toStringTag,{value:"Module"})),_={normal:{opacity:1},animate:e=>({opacity:[1,.3,1],transition:{duration:.8,repeat:1/0,repeatDelay:.2,delay:e*.1,ease:"easeInOut"}})},Bc=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx("path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"}),n.jsx(o.path,{d:"m14 7 3 3",variants:_,animate:t,custom:0}),n.jsx(o.path,{d:"M5 6v4",variants:_,animate:t,custom:1}),n.jsx(o.path,{d:"M19 14v4",variants:_,animate:t,custom:2}),n.jsx(o.path,{d:"M10 2v2",variants:_,animate:t,custom:3}),n.jsx(o.path,{d:"M7 8H3",variants:_,animate:t,custom:4}),n.jsx(o.path,{d:"M21 16h-4",variants:_,animate:t,custom:5}),n.jsx(o.path,{d:"M11 3H9",variants:_,animate:t,custom:6})]})})},Tc=Object.freeze(Object.defineProperty({__proto__:null,WandSparkles:Bc},Symbol.toStringTag,{value:"Module"})),dn={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{duration:.8,delay:e*.15,ease:"easeInOut"}})},Hc=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",variants:dn,animate:t,custom:0}),n.jsx(o.path,{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",variants:dn,animate:t,custom:1}),n.jsx(o.path,{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",variants:dn,animate:t,custom:2})]})})},zc=Object.freeze(Object.defineProperty({__proto__:null,Waves:Hc},Symbol.toStringTag,{value:"Module"})),F={normal:{opacity:1,scale:1},animate:e=>({opacity:[.3,1,.3],scale:[.8,1,.8],transition:{duration:2,ease:"easeInOut",repeat:1/0,delay:e*.2}})},Dc=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M12 20h.01",variants:F,animate:t,custom:3}),n.jsx(o.path,{d:"M2 8.82a15 15 0 0 1 20 0",variants:F,animate:t,custom:0}),n.jsx(o.path,{d:"M5 12.859a10 10 0 0 1 14 0",variants:F,animate:t,custom:1}),n.jsx(o.path,{d:"M8.5 16.429a5 5 0 0 1 7 0",variants:F,animate:t,custom:2})]})})},Rc=Object.freeze(Object.defineProperty({__proto__:null,Wifi:Dc},Symbol.toStringTag,{value:"Module"})),hn={normal:{pathLength:1,opacity:1},animate:e=>({pathLength:[0,1],opacity:[0,1],transition:{duration:.8,delay:e*.15,ease:"easeInOut"}})},$c=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",...r,children:[n.jsx(o.path,{d:"M9.8 4.4A2 2 0 1 1 11 8H2",variants:hn,animate:t,custom:0}),n.jsx(o.path,{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",variants:hn,animate:t,custom:1}),n.jsx(o.path,{d:"M12.8 19.6A2 2 0 1 0 14 16H2",variants:hn,animate:t,custom:2})]})})},Yc=Object.freeze(Object.defineProperty({__proto__:null,Wind:$c},Symbol.toStringTag,{value:"Module"})),Xc={normal:{scale:1,rotate:0,y:0},animate:{scale:[1,1.04,1],rotate:[0,-8,8,-8,0],y:[0,-2,0],transition:{duration:.6,ease:"easeInOut",times:[0,.2,.5,.8,1]}}},Uc=({width:e=28,height:a=28,strokeWidth:i=2,stroke:s="#ffffff",...r})=>{const t=l();return n.jsx("div",{style:{cursor:"pointer",userSelect:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:()=>t.start("animate"),onMouseLeave:()=>t.start("normal"),children:n.jsxs(o.svg,{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",variants:Xc,animate:t,children:[n.jsx("path",{d:"M8 22h8"}),n.jsx("path",{d:"M7 10h10"}),n.jsx("path",{d:"M12 15v7"}),n.jsx("path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"})]})})},Nc=Object.freeze(Object.defineProperty({__proto__:null,Wine:Uc},Symbol.toStringTag,{value:"Module"})),Fc=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AArrowDownProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const arrowVariants: Variants = {
  normal: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  animate: {
    y: [0, 4, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const AArrowDown = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AArrowDownProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Letter A paths - static */}
        <path d="M3.5 13h6" />
        <path d="m2 16 4.5-9 4.5 9" />

        {/* Arrow paths - animated */}
        <motion.g variants={arrowVariants} animate={controls} initial="normal">
          <path d="M18 7v9" />
          <path d="m14 12 4 4 4-4" />
        </motion.g>
      </svg>
    </div>
  );
};

export { AArrowDown };
`,Zc=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AArrowUpProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const arrowVariants: Variants = {
  normal: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  animate: {
    y: [0, -4, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const AArrowUp = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AArrowUpProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Letter A paths - static */}
        <path d="M3.5 13h6" />
        <path d="m2 16 4.5-9 4.5 9" />

        {/* Arrow paths - animated */}
        <motion.g variants={arrowVariants} animate={controls} initial="normal">
          <path d="M18 16V7" />
          <path d="m14 11 4-4 4 4" />
        </motion.g>
      </svg>
    </div>
  );
};

export { AArrowUp };
`,qc=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ALargeSmallProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const largeAVariants: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const smallAVariants: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 0.8, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const ALargeSmall = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ALargeSmallProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Large A - animated */}
        <motion.g variants={largeAVariants} animate={controls} initial="normal">
          <path d="M21 14h-5" />
          <path d="M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" />
        </motion.g>

        {/* Small A - animated */}
        <motion.g variants={smallAVariants} animate={controls} initial="normal">
          <path d="M4.5 13h6" />
          <path d="m3 16 4.5-9 4.5 9" />
        </motion.g>
      </svg>
    </div>
  );
};

export { ALargeSmall };
`,Kc=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ActivityProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const pathVariants: Variants = {
  normal: {
    pathLength: 1,
    pathOffset: 0,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    pathOffset: [1, 0],
    opacity: [0.3, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  },
};

const Activity = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "white",
  ...props
}: ActivityProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
          variants={pathVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { Activity };
`,Jc=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AirVentProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const pathVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
    strokeWidth: 2,
  },
  animate: {
    pathLength: [0, 1],
    opacity: 1,
    strokeWidth: 2,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      pathLength: {
        duration: 0.8,
      },
    },
  },
};

const AirVent = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AirVentProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 8h12" />
        <g>
          <motion.path
            d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"
            variants={pathVariants}
            animate={controls}
            initial="normal"
            custom={1}
          />
          <motion.path
            d="M6.6 15.6A2 2 0 1 0 10 17v-5"
            variants={pathVariants}
            animate={controls}
            initial="normal"
            custom={2}
          />
        </g>
      </svg>
    </div>
  );
};

export { AirVent };
`,Qc=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AirplayProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const screenVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: 0,
    },
  },
};

const triangleVariants: Variants = {
  normal: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: [-2, 0],
    opacity: [0.5, 1],
    transition: {
      duration: 0.5,
      ease: "easeOut",
      repeat: 0,
    },
  },
};

const Airplay = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AirplayProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
          variants={screenVariants}
          animate={controls}
          initial="normal"
        />
        <motion.path
          d="m12 15 5 6H7Z"
          variants={triangleVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { Airplay };
`,nm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AlarmClockProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const clockHandVariants: Variants = {
  normal: {
    rotate: 0,
    originX: "50%",
    originY: "50%",
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const bellVariants: Variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: [-10, 10, -10],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const AlarmClock = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AlarmClockProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="13" r="8" />
        <motion.path
          d="M12 9v4l2 2"
          variants={clockHandVariants}
          animate={controls}
          initial="normal"
        />
        <motion.g variants={bellVariants} animate={controls} initial="normal">
          <path d="M5 3 2 6" />
          <path d="m22 6-3-3" />
          <path d="M6.38 18.7 4 21" />
          <path d="M17.64 18.67 20 21" />
        </motion.g>
      </svg>
    </div>
  );
};

export { AlarmClock };
`,tm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AlarmClockCheckProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const checkmarkVariants: Variants = {
  normal: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const bellVariants: Variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: [-10, 10, -10],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const AlarmClockCheck = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AlarmClockCheckProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="13" r="8" />
        <motion.g variants={bellVariants} animate={controls} initial="normal">
          <path d="M5 3 2 6" />
          <path d="m22 6-3-3" />
          <path d="M6.38 18.7 4 21" />
          <path d="M17.64 18.67 20 21" />
        </motion.g>
        <motion.path
          d="m9 13 2 2 4-4"
          variants={checkmarkVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { AlarmClockCheck };
`,em=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AlarmSmokeProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const smokeVariants: Variants = {
  normal: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: [-2, 0],
    opacity: [0.5, 1],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const baseVariants: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const AlarmSmoke = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AlarmSmokeProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.g variants={smokeVariants} animate={controls} initial="normal">
          <path d="M11 21c0-2.5 2-2.5 2-5" />
          <path d="M16 21c0-2.5 2-2.5 2-5" />
          <path d="M6 21c0-2.5 2-2.5 2-5" />
        </motion.g>
        <motion.g variants={baseVariants} animate={controls} initial="normal">
          <path d="m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" />
          <path d="M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" />
        </motion.g>
      </svg>
    </div>
  );
};

export { AlarmSmoke };
`,om=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AlbumProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const bookmarkVariants: Variants = {
  normal: {
    scaleY: 1,
    originY: 0,
  },
  animate: {
    scaleY: [1.2, 0.8, 1],
    transition: {
      duration: 0.6,
      times: [0.4, 0.7, 1],
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

const Album = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AlbumProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <motion.path
          d="M11 3 L11 11 L14 8 L17 11 L17 3"
          variants={bookmarkVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { Album };
`,am=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AlignCenterProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const lineVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0.3, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  },
};

const AlignCenter = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AlignCenterProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M17 12H7"
          variants={lineVariants}
          animate={controls}
          initial="normal"
          custom={0}
        />
        <motion.path
          d="M19 18H5"
          variants={lineVariants}
          animate={controls}
          initial="normal"
          custom={1}
        />
        <motion.path
          d="M21 6H3"
          variants={lineVariants}
          animate={controls}
          initial="normal"
          custom={2}
        />
      </svg>
    </div>
  );
};

export { AlignCenter };
`,im=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AlignCenterHorizontalProps
  extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const lineVariants: Variants = {
  normal: {
    scaleX: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  animate: {
    scaleX: [1, 1.3, 0.8, 1.1, 0.9, 1],
    transition: {
      duration: 0.8,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

const boxVariants: Variants = {
  normal: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  animate: {
    x: [-4, 4, -2, 2, -1, 0],
    transition: {
      duration: 0.8,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

const AlignCenterHorizontal = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AlignCenterHorizontalProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M2 12h20"
          variants={lineVariants}
          animate={controls}
          initial="normal"
        />
        <motion.g variants={boxVariants} animate={controls} initial="normal">
          <path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
          <path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
        </motion.g>
        <motion.g variants={boxVariants} animate={controls} initial="normal">
          <path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
          <path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
        </motion.g>
      </svg>
    </div>
  );
};

export { AlignCenterHorizontal };
`,sm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AlignCenterVerticalProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const lineVariants: Variants = {
  normal: {
    scaleY: 1,
  },
  animate: {
    scaleY: [1, 1.1, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const boxVariants: Variants = {
  normal: {
    y: 0,
  },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const AlignCenterVertical = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AlignCenterVerticalProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M12 2v20"
          variants={lineVariants}
          animate={controls}
          initial="normal"
        />
        <motion.g variants={boxVariants} animate={controls} initial="normal">
          <path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" />
          <path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" />
        </motion.g>
        <motion.g variants={boxVariants} animate={controls} initial="normal">
          <path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" />
          <path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" />
        </motion.g>
      </svg>
    </div>
  );
};

export { AlignCenterVertical };
`,rm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AnchorProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const circleVariants: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const lineVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [1, 0.2, 1],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Anchor = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AnchorProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M12 22V8"
          variants={lineVariants}
          animate={controls}
          initial="normal"
        />
        <motion.path
          d="M5 12H2a10 10 0 0 0 20 0h-3"
          variants={lineVariants}
          animate={controls}
          initial="normal"
        />
        <motion.circle
          cx="12"
          cy="5"
          r="3"
          variants={circleVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { Anchor };
`,lm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AngryProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const circleVariants: Variants = {
  normal: { scale: 1 },
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const mouthVariants: Variants = {
  normal: { pathLength: 1, opacity: 1 },
  animate: {
    pathLength: [0.3, 1],
    opacity: [0.5, 1],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const eyeVariants: Variants = {
  normal: { scale: 1 },
  animate: {
    scale: [1, 0.8, 1],
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      repeat: 1,
    },
  },
};

const Angry = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AngryProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          variants={circleVariants}
          animate={controls}
          initial="normal"
        />
        <motion.path
          d="M16 16s-1.5-2-4-2-4 2-4 2"
          variants={mouthVariants}
          animate={controls}
          initial="normal"
        />
        <motion.g variants={eyeVariants} animate={controls} initial="normal">
          <path d="M7.5 8 10 9" />
          <path d="m14 9 2.5-1" />
          <path d="M9 10h.01" />
          <path d="M15 10h.01" />
        </motion.g>
      </svg>
    </div>
  );
};

export { Angry };
`,cm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AnnoyedProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const circleVariants: Variants = {
  normal: { scale: 1 },
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const mouthVariants: Variants = {
  normal: { pathLength: 1, opacity: 1 },
  animate: {
    pathLength: [0.3, 1],
    opacity: [0.5, 1],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const eyeVariants: Variants = {
  normal: { scale: 1 },
  animate: {
    scale: [1, 0.8, 1],
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      repeat: 1,
    },
  },
};

const Annoyed = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AnnoyedProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          variants={circleVariants}
          animate={controls}
          initial="normal"
        />
        <motion.path
          d="M8 15h8"
          variants={mouthVariants}
          animate={controls}
          initial="normal"
        />
        <motion.g variants={eyeVariants} animate={controls} initial="normal">
          <path d="M8 9h2" />
          <path d="M14 9h2" />
        </motion.g>
      </svg>
    </div>
  );
};

export { Annoyed };
`,mm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AntennaProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const lineVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (i: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
};

const Antenna = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AntennaProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M2 12 7 2"
          variants={lineVariants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="m7 12 5-10"
          variants={lineVariants}
          animate={controls}
          custom={1}
        />
        <motion.path
          d="m12 12 5-10"
          variants={lineVariants}
          animate={controls}
          custom={2}
        />
        <motion.path
          d="m17 12 5-10"
          variants={lineVariants}
          animate={controls}
          custom={3}
        />
        <motion.path
          d="M4.5 7h15"
          variants={lineVariants}
          animate={controls}
          custom={4}
        />
        <motion.path
          d="M12 16v6"
          variants={lineVariants}
          animate={controls}
          custom={5}
        />
      </svg>
    </div>
  );
};

export { Antenna };
`,pm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ApertureProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const circleVariants: Variants = {
  normal: {
    rotate: 0,
    scale: 1,
  },
  animate: {
    rotate: [0, 180, 0],
    scale: [1, 1.2, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const lineVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
    rotate: 0,
  },
  animate: {
    pathLength: [1, 0.8, 1],
    opacity: [1, 0.8, 1],
    rotate: [0, -180, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const Aperture = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ApertureProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          variants={circleVariants}
          animate={controls}
          initial="normal"
        />
        <motion.g variants={lineVariants} animate={controls} initial="normal">
          <path d="m14.31 8 5.74 9.94" />
          <path d="M9.69 8h11.48" />
          <path d="m7.38 12 5.74-9.94" />
          <path d="M9.69 16 3.95 6.06" />
          <path d="M14.31 16H2.83" />
          <path d="m16.62 12-5.74 9.94" />
        </motion.g>
      </svg>
    </div>
  );
};

export { Aperture };
`,dm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AppWindowMacProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const frameVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const dotVariants: Variants = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: (i: number) => ({
    scale: [0, 1.2, 1],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.3,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

const AppWindowMac = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AppWindowMacProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.rect
          width="20"
          height="16"
          x="2"
          y="4"
          rx="2"
          variants={frameVariants}
          animate={controls}
          initial="normal"
        />
        <motion.path
          d="M6 8h.01"
          variants={dotVariants}
          animate={controls}
          initial="normal"
          custom={0}
        />
        <motion.path
          d="M10 8h.01"
          variants={dotVariants}
          animate={controls}
          initial="normal"
          custom={1}
        />
        <motion.path
          d="M14 8h.01"
          variants={dotVariants}
          animate={controls}
          initial="normal"
          custom={2}
        />
      </svg>
    </div>
  );
};

export { AppWindowMac };
`,hm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ArchiveProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const rectVariants: Variants = {
  normal: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  animate: {
    y: -1.5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

const pathVariants: Variants = {
  normal: {
    d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  animate: {
    d: "M4 11v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V11",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const lineVariants: Variants = {
  normal: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  animate: {
    y: 3,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Archive = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ArchiveProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.rect
          width="20"
          height="5"
          x="2"
          y="3"
          rx="1"
          variants={rectVariants}
          animate={controls}
          initial="normal"
        />
        <motion.path
          d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"
          variants={pathVariants}
          animate={controls}
          initial="normal"
        />
        <motion.path
          d="M10 12h4"
          variants={lineVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { Archive };
`,um=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Transition, Variants } from "motion/react";

interface AtSignProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

const AtSign = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AtSignProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.circle
          cx="12"
          cy="12"
          r="4"
          variants={variants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
          variants={variants}
          animate={controls}
          custom={1}
        />
      </svg>
    </div>
  );
};

export { AtSign };
`,fm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AtomProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const centerDotVariants: Variants = {
  normal: { scale: 1 },
  animate: {
    scale: [1, 1.5, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  },
};

const orbitVariants: Variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const Atom = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AtomProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.circle
          cx="12"
          cy="12"
          r="1"
          variants={centerDotVariants}
          animate={controls}
          initial="normal"
        />
        <motion.g variants={orbitVariants} animate={controls} initial="normal">
          <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
          <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
        </motion.g>
      </svg>
    </div>
  );
};

export { Atom };
`,gm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AudioLinesProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const lineVariants: Variants = {
  normal: {
    scaleY: 0.5,
    opacity: 0.5,
  },
  animate: {
    scaleY: [0.5, 1, 0.5],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const AudioLines = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AudioLinesProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.g
          variants={lineVariants}
          animate={controls}
          initial="normal"
          style={{ originY: 0.5 }}
        >
          <motion.path d="M2 10v3" custom={0} transition={{ delay: 0 }} />
          <motion.path d="M6 6v11" custom={1} transition={{ delay: 0.1 }} />
          <motion.path d="M10 3v18" custom={2} transition={{ delay: 0.2 }} />
          <motion.path d="M14 8v7" custom={3} transition={{ delay: 0.3 }} />
          <motion.path d="M18 5v13" custom={4} transition={{ delay: 0.4 }} />
          <motion.path d="M22 10v3" custom={5} transition={{ delay: 0.5 }} />
        </motion.g>
      </svg>
    </div>
  );
};

export { AudioLines };
`,vm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface AudioWaveformProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const waveVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [1, 0.2, 1],
    opacity: [1, 0.2, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const AudioWaveform = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AudioWaveformProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"
          variants={waveVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { AudioWaveform };
`,xm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface BadgeAlertProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const badgeVariants: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const alertVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
    y: 0,
  },
  animate: {
    pathLength: [1, 0.8, 1],
    opacity: [1, 0.8, 1],
    y: [0, -2, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      y: {
        duration: 0.3,
        repeat: 2,
        repeatType: "reverse",
      },
    },
  },
};

const BadgeAlert = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BadgeAlertProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          variants={badgeVariants}
          animate={controls}
          initial="normal"
        />
        <motion.g variants={alertVariants} animate={controls} initial="normal">
          <line x1="12" x2="12" y1="8" y2="12" />
          <line x1="12" x2="12.01" y1="16" y2="16" />
        </motion.g>
      </svg>
    </div>
  );
};

export { BadgeAlert };
`,ym=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface BadgeCheckProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const badgeVariants: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const checkVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
    rotateY: 0,
  },
  animate: {
    pathLength: [1, 0.8, 1],
    opacity: [1, 0.8, 1],
    rotateY: [0, 180, 360],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const BadgeCheck = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BadgeCheckProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          variants={badgeVariants}
          animate={controls}
          initial="normal"
        />
        <motion.path
          d="m9 12 2 2 4-4"
          variants={checkVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { BadgeCheck };
`,wm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface BadgeDollarSignProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const badgeVariants: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const dollarVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
    rotateY: 0,
  },
  animate: {
    pathLength: [1, 0.8, 1],
    opacity: [1, 0.8, 1],
    rotateY: [0, 180, 360],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const BadgeDollarSign = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BadgeDollarSignProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          variants={badgeVariants}
          animate={controls}
          initial="normal"
        />
        <motion.g variants={dollarVariants} animate={controls} initial="normal">
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 18V6" />
        </motion.g>
      </svg>
    </div>
  );
};

export { BadgeDollarSign };
`,_m=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface BatteryFullProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const batteryVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.3,
      delay: custom * 0.1,
    },
  }),
};

const BatteryFull = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BatteryFullProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
        <line x1="22" x2="22" y1="11" y2="13" />
        <motion.line
          x1="6"
          x2="6"
          y1="11"
          y2="13"
          variants={batteryVariants}
          animate={controls}
          initial="normal"
          custom={0}
        />
        <motion.line
          x1="10"
          x2="10"
          y1="11"
          y2="13"
          variants={batteryVariants}
          animate={controls}
          initial="normal"
          custom={1}
        />
        <motion.line
          x1="14"
          x2="14"
          y1="11"
          y2="13"
          variants={batteryVariants}
          animate={controls}
          initial="normal"
          custom={2}
        />
      </svg>
    </div>
  );
};

export { BatteryFull };
`,km=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface BellRingProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const bellVariants: Variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: [-10, 10, -10],
    transition: {
      duration: 0.5,
      repeat: 2,
      repeatType: "reverse",
    },
  },
};

const ringVariants: Variants = {
  normal: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const BellRing = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BellRingProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M10.268 21a2 2 0 0 0 3.464 0"
          variants={bellVariants}
          animate={controls}
          initial="normal"
        />
        <motion.g variants={ringVariants} animate={controls} initial="normal">
          <path d="M22 8c0-2.3-.8-4.3-2-6" />
          <path d="M4 2C2.8 3.7 2 5.7 2 8" />
        </motion.g>
        <motion.path
          d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
          variants={bellVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { BellRing };
`,jm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface BikeProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const wheelVariants: Variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const frameVariants: Variants = {
  normal: { y: 0 },
  animate: {
    y: [-1, 1, -1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
    },
  },
};

const Bike = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BikeProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.circle
          cx="18.5"
          cy="17.5"
          r="3.5"
          variants={wheelVariants}
          animate={controls}
          initial="normal"
        />
        <motion.circle
          cx="5.5"
          cy="17.5"
          r="3.5"
          variants={wheelVariants}
          animate={controls}
          initial="normal"
        />
        <motion.g variants={frameVariants} animate={controls} initial="normal">
          <circle cx="15" cy="5" r="1" />
          <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
        </motion.g>
      </svg>
    </div>
  );
};

export { Bike };
`,bm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface BlendProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const circleVariants: Variants = {
  normal: {
    scale: 1,
    opacity: 0.7,
  },
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Blend = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BlendProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.circle
          cx="9"
          cy="9"
          r="7"
          variants={circleVariants}
          animate={controls}
          initial="normal"
          custom={0}
          transition={{
            delay: 0,
          }}
        />
        <motion.circle
          cx="15"
          cy="15"
          r="7"
          variants={circleVariants}
          animate={controls}
          initial="normal"
          custom={1}
          transition={{
            delay: 0.5,
          }}
        />
      </svg>
    </div>
  );
};

export { Blend };
`,Mm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface BlocksProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const blockVariants: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
  },
  animate: {
    scale: [1, 1.1, 1],
    rotate: [0, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const pathVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0.3, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Blocks = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BlocksProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.rect
          width="7"
          height="7"
          x="14"
          y="3"
          rx="1"
          variants={blockVariants}
          animate={controls}
          initial="normal"
        />
        <motion.path
          d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"
          variants={pathVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { Blocks };
`,Vm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface BluetoothSearchingProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const pathVariants: Variants = {
  normal: {
    scale: 1,
    transition: {
      repeat: 0,
    },
  },
  animate: {
    scale: [0, 1, 0.8],
  },
};

const secondVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [1, 0.8, 1],
    transition: { repeat: Infinity },
  },
};

const BluetoothSearching = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BluetoothSearchingProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={secondVariants}
          animate={controls}
          d="m7 7 10 10-5 5V2l5 5L7 17"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transition={{
            duration: 0.6,
            delay: 0.2,
            repeat: Infinity,
          }}
          d="M20.83 14.83a4 4 0 0 0 0-5.66"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transition={{
            duration: 0.6,
            repeat: Infinity,
          }}
          d="M18 12h.01"
        />
      </svg>
    </div>
  );
};

export { BluetoothSearching };
`,Lm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface BoldProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const pathVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0.3, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Bold = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BoldProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"
          variants={pathVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { Bold };
`,Sm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Transition, Variants } from "motion/react";

interface BoltProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 2,
  ease: "linear",
  repeat: 0,
};

const spinVariants: Variants = {
  normal: { rotate: 0 },
  animate: { rotate: 360 },
};

const Bolt = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BoltProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => {
        controls.stop();
        controls.start("normal");
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.g
          variants={spinVariants}
          animate={controls}
          initial="normal"
          transition={transition}
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <circle cx="12" cy="12" r="4" />
        </motion.g>
      </svg>
    </div>
  );
};

export { Bolt };
`,Cm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface BombProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const bombVariants: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: 2,
      repeatType: "reverse",
    },
  },
};

const sparkVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: 1,
    opacity: [1, 0.8, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: 1,
    },
  },
};

const Bomb = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BombProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.circle
          cx="11"
          cy="13"
          r="9"
          variants={bombVariants}
          animate={controls}
          initial="normal"
        />
        <motion.g variants={sparkVariants} animate={controls} initial="normal">
          <path d="M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" />
          <path d="m22 2-1.5 1.5" />
        </motion.g>
      </svg>
    </div>
  );
};

export { Bomb };
`,Am=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface BookMarkedProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const bookmarkVariants: Variants = {
  normal: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  animate: {
    y: [2, -4, 0],
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
      mass: 1,
    },
  },
};

const staticVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
  },
};

const BookMarked = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BookMarkedProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Bouncing bookmark */}
        <motion.path
          d="M10 2v8l3-3 3 3V2"
          variants={bookmarkVariants}
          animate={controls}
        />
        {/* Static book part */}
        <motion.path
          d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
          variants={staticVariants}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { BookMarked };
`,Wm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Transition, Variants } from "motion/react";

interface BoxProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

const Box = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BoxProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
          variants={variants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="m3.3 7 8.7 5 8.7-5"
          variants={variants}
          animate={controls}
          custom={1}
        />
        <motion.path
          d="M12 22V12"
          variants={variants}
          animate={controls}
          custom={2}
        />
      </svg>
    </div>
  );
};

export { Box };
`,Om=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface BoxesProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const pathVariants: Variants = {
  normal: {
    pathLength: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  animate: {
    pathLength: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const boxVariants: Variants = {
  normal: {
    offsetDistance: "0%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  animate: {
    offsetDistance: "100%",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Boxes = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BoxesProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Bottom left box */}
        <motion.path
          d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
          variants={pathVariants}
          animate={controls}
        />
        <motion.path
          d="m7 16.5-4.74-2.85"
          variants={pathVariants}
          animate={controls}
        />
        <motion.path
          d="m7 16.5 5-3"
          variants={pathVariants}
          animate={controls}
        />
        <motion.path
          d="M7 16.5v5.17"
          variants={pathVariants}
          animate={controls}
        />

        {/* Bottom right box */}
        <motion.path
          d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
          variants={pathVariants}
          animate={controls}
        />
        <motion.path
          d="m17 16.5-5-3"
          variants={pathVariants}
          animate={controls}
        />
        <motion.path
          d="m17 16.5 4.74-2.85"
          variants={pathVariants}
          animate={controls}
        />
        <motion.path
          d="M17 16.5v5.17"
          variants={pathVariants}
          animate={controls}
        />

        {/* Top box */}
        <motion.path
          d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
          variants={pathVariants}
          animate={controls}
        />
        <motion.path
          d="M12 8 7.26 5.15"
          variants={pathVariants}
          animate={controls}
        />
        <motion.path
          d="m12 8 4.74-2.85"
          variants={pathVariants}
          animate={controls}
        />
        <motion.path
          d="M12 13.5V8"
          variants={pathVariants}
          animate={controls}
        />

        {/* Dot that follows the path */}
        <motion.circle
          cx="12"
          cy="12"
          r="1"
          fill="currentColor"
          style={{
            offsetPath:
              "path('M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z M12 8 7.26 5.15 M12 8 4.74-2.85 M12 13.5V8 M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z M7 16.5l-4.74-2.85 M7 16.5l5-3 M7 16.5v5.17 M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z')",
          }}
          variants={boxVariants}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { Boxes };
`,Im=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface BracesProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

const Braces = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BracesProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"
          variants={variants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"
          variants={variants}
          animate={controls}
          custom={1}
        />
      </svg>
    </div>
  );
};

export { Braces };
`,Pm=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface BracketsProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

const Brackets = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BracketsProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M16 3h3v18h-3"
          variants={variants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M8 21H5V3h3"
          variants={variants}
          animate={controls}
          custom={1}
        />
      </svg>
    </div>
  );
};

export { Brackets };
`,Em=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface BringToFrontProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const pathVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0.3, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const BringToFront = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BringToFrontProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.rect
          x="8"
          y="8"
          width="8"
          height="8"
          rx="2"
          variants={pathVariants}
          animate={controls}
          initial="normal"
        />
        <motion.g variants={pathVariants} animate={controls} initial="normal">
          <path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" />
          <path d="M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" />
        </motion.g>
      </svg>
    </div>
  );
};

export { BringToFront };
`,Gm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface BugProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const antennaeVariants: Variants = {
  normal: { pathLength: 1 },
  animate: {
    pathLength: [1, 0.5, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const bodyVariants: Variants = {
  normal: { y: 0 },
  animate: {
    y: [-1, 1, -1],
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Bug = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: BugProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.g
          variants={antennaeVariants}
          animate={controls}
          initial="normal"
        >
          <path d="m8 2 1.88 1.88" />
          <path d="M14.12 3.88 16 2" />
        </motion.g>
        <motion.g variants={bodyVariants} animate={controls} initial="normal">
          <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
          <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
          <path d="M12 20v-9" />
          <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
          <path d="M6 13H2" />
          <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
          <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
          <path d="M22 13h-4" />
          <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
        </motion.g>
      </svg>
    </div>
  );
};

export { Bug };
`,Bm=`"use client";

import { motion, useAnimation } from "motion/react";

interface CableProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const DURATION = 0.25;

const calculateDelay = (i: number) => {
  return i === 0 ? 0.1 : i * DURATION + 0.1;
};

const Cable = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CableProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"
          animate={controls}
          transition={{
            duration: DURATION,
            delay: calculateDelay(4),
            opacity: { delay: calculateDelay(4) },
          }}
          variants={{
            normal: {
              pathLength: 1,
              pathOffset: 0,
              opacity: 1,
              transition: { delay: 0 },
            },
            animate: {
              pathOffset: [1, 0],
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
        />
        <motion.path
          d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"
          animate={controls}
          transition={{
            duration: DURATION,
            delay: calculateDelay(3),
            opacity: { delay: calculateDelay(3) },
          }}
          variants={{
            normal: {
              pathLength: 1,
              pathOffset: 0,
              opacity: 1,
              transition: { delay: 0 },
            },
            animate: {
              pathOffset: [1, 0],
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
        />
        <motion.path
          d="M21 21v-2h-4"
          animate={controls}
          transition={{
            duration: DURATION,
            delay: calculateDelay(2),
            opacity: { delay: calculateDelay(2) },
          }}
          variants={{
            normal: {
              pathLength: 1,
              pathOffset: 0,
              opacity: 1,
              transition: { delay: 0 },
            },
            animate: {
              pathOffset: [1, 0],
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
        />
        <motion.path
          d="M3 5h4V3"
          animate={controls}
          transition={{
            duration: DURATION,
            delay: calculateDelay(1),
            opacity: { delay: calculateDelay(1) },
          }}
          variants={{
            normal: {
              pathLength: 1,
              pathOffset: 0,
              opacity: 1,
              transition: { delay: 0 },
            },
            animate: {
              pathOffset: [1, 0],
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
        />
        <motion.path
          d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"
          animate={controls}
          transition={{
            duration: DURATION,
            delay: calculateDelay(0),
            opacity: { delay: calculateDelay(0) },
          }}
          variants={{
            normal: {
              pathLength: 1,
              pathOffset: 0,
              opacity: 1,
              transition: { delay: 0 },
            },
            animate: {
              pathOffset: [1, 0],
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
        />
      </svg>
    </div>
  );
};

export { Cable };
`,Tm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface CakeProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const staticVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
  },
};

const flameVariants: Variants = {
  normal: (i: number) => ({
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  }),
  animate: (i: number) => {
    const patterns = [
      { scale: [1, 1.2, 0.9, 1.1, 1], y: [0, -1, 1, -2, 0] },
      { scale: [1, 0.9, 1.1, 0.8, 1], y: [0, 1, -1, 0, 0] },
      { scale: [1, 1.1, 0.8, 1.2, 1], y: [0, -2, 0, -1, 0] },
    ];
    return {
      ...patterns[i % patterns.length],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    };
  },
};

const Cake = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CakeProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Static cake parts */}
        <motion.path
          d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"
          variants={staticVariants}
          animate={controls}
        />
        <motion.path
          d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"
          variants={staticVariants}
          animate={controls}
        />
        <motion.path
          d="M2 21h20"
          variants={staticVariants}
          animate={controls}
        />

        {/* Candle sticks */}
        <motion.path d="M7 8v3" variants={staticVariants} animate={controls} />
        <motion.path d="M12 8v3" variants={staticVariants} animate={controls} />
        <motion.path d="M17 8v3" variants={staticVariants} animate={controls} />

        {/* Animated flames */}
        <motion.path
          d="M7 4h.01"
          variants={flameVariants}
          animate={controls}
          custom={0}
          style={{ transformOrigin: "center" }}
        />
        <motion.path
          d="M12 4h.01"
          variants={flameVariants}
          animate={controls}
          custom={1}
          style={{ transformOrigin: "center" }}
        />
        <motion.path
          d="M17 4h.01"
          variants={flameVariants}
          animate={controls}
          custom={2}
          style={{ transformOrigin: "center" }}
        />
      </svg>
    </div>
  );
};

export { Cake };
`,Hm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";
import React from "react";

interface Calendar1Props extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const frameVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const numberVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.3,
    y: -10,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.3,
    y: 10,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const Calendar1 = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: Calendar1Props) => {
  const controls = useAnimation();
  const [currentNumber, setCurrentNumber] = React.useState(1);
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isHovering && currentNumber < 10) {
      interval = setInterval(() => {
        setCurrentNumber((prev) => {
          if (prev >= 10) return 10;
          return prev + 1;
        });
      }, 400);
    } else if (!isHovering) {
      setCurrentNumber(1);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering, currentNumber]);

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => {
        setIsHovering(true);
        controls.start("animate");
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        controls.start("normal");
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.rect
          x="3"
          y="4"
          width="18"
          height="18"
          rx="2"
          variants={frameVariants}
          animate={controls}
          initial="normal"
        />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
        <motion.text
          x="11"
          y="18"
          fontSize="8"
          textAnchor="middle"
          fill="currentColor"
          stroke="none"
          key={currentNumber}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={numberVariants}
        >
          {currentNumber}
        </motion.text>
      </svg>
    </div>
  );
};

export { Calendar1 };
`,zm=`"use client";

import { motion, useAnimation } from "motion/react";

const DURATION = 0.25;

const calculateDelay = (i: number) => {
  return i === 0 ? 0.1 : i * DURATION + 0.1;
};

interface CastProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Cast = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CastProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Static frame */}
        <path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />

        {/* Animated waves */}
        <motion.path
          d="M2 12a9 9 0 0 1 8 8"
          animate={controls}
          transition={{
            duration: DURATION,
            delay: calculateDelay(0),
            opacity: { delay: calculateDelay(0) },
          }}
          variants={{
            normal: {
              pathLength: 1,
              pathOffset: 0,
              opacity: 1,
              transition: { delay: 0 },
            },
            animate: {
              pathOffset: [1, 0],
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
        />
        <motion.path
          d="M2 16a5 5 0 0 1 4 4"
          animate={controls}
          transition={{
            duration: DURATION,
            delay: calculateDelay(1),
            opacity: { delay: calculateDelay(1) },
          }}
          variants={{
            normal: {
              pathLength: 1,
              pathOffset: 0,
              opacity: 1,
              transition: { delay: 0 },
            },
            animate: {
              pathOffset: [1, 0],
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
        />
        <motion.line
          x1="2"
          x2="2.01"
          y1="20"
          y2="20"
          animate={controls}
          transition={{
            duration: DURATION,
            delay: calculateDelay(2),
            opacity: { delay: calculateDelay(2) },
          }}
          variants={{
            normal: {
              pathLength: 1,
              pathOffset: 0,
              opacity: 1,
              transition: { delay: 0 },
            },
            animate: {
              pathOffset: [1, 0],
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
        />
      </svg>
    </div>
  );
};

export { Cast };
`,Dm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ChartColumnProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const frameVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 1 },
};

const lineVariants: Variants = {
  visible: { pathLength: 1, opacity: 1 },
  hidden: { pathLength: 0, opacity: 0 },
};

const ChartColumn = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChartColumnProps) => {
  const controls = useAnimation();

  const handleHoverStart = async () => {
    await controls.start((i) => ({
      pathLength: 0,
      opacity: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }));
    await controls.start((i) => ({
      pathLength: 1,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }));
  };

  const handleHoverEnd = () => {
    controls.start("visible");
  };

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={1}
          d="M13 17V9"
        />
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={2}
          d="M18 17V5"
        />
        <motion.path variants={frameVariants} d="M3 3v16a2 2 0 0 0 2 2h16" />
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={0}
          d="M8 17v-3"
        />
      </svg>
    </div>
  );
};

export { ChartColumn };
`,Rm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ChartColumnBig extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const frameVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 1 },
};

const lineVariants: Variants = {
  visible: { pathLength: 1, opacity: 1 },
  hidden: { pathLength: 0, opacity: 0 },
};

const ChartColumnBig = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChartColumnBig) => {
  const controls = useAnimation();

  const handleHoverStart = async () => {
    await controls.start((i) => ({
      pathLength: 0,
      opacity: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }));
    await controls.start((i) => ({
      pathLength: 1,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }));
  };

  const handleHoverEnd = () => {
    controls.start("visible");
  };

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <motion.g>
          <motion.rect
            x="15"
            y="5"
            width="4"
            height="12"
            rx="1"
            variants={lineVariants}
            initial="visible"
            animate={controls}
            custom={2}
          />
          <motion.rect
            x="7"
            y="8"
            width="4"
            height="9"
            rx="1"
            variants={lineVariants}
            initial="visible"
            animate={controls}
            custom={1}
          />
        </motion.g>
      </svg>
    </div>
  );
};

export { ChartColumnBig };
`,$m=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ChartGanttProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const frameVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 1 },
};

const lineVariants: Variants = {
  visible: { pathLength: 1, opacity: 1 },
  hidden: { pathLength: 0, opacity: 0 },
};

const ChartGantt = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChartGanttProps) => {
  const controls = useAnimation();

  const handleHoverStart = async () => {
    await controls.start((i) => ({
      pathLength: 0,
      opacity: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }));
    await controls.start((i) => ({
      pathLength: 1,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }));
  };

  const handleHoverEnd = () => {
    controls.start("visible");
  };

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={3}
          d="M10 6h8"
        />
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={2}
          d="M12 16h6"
        />
        <motion.path variants={frameVariants} d="M3 3v16a2 2 0 0 0 2 2h16" />
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={1}
          d="M8 11h7"
        />
      </svg>
    </div>
  );
};

export { ChartGantt };
`,Ym=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ChartLineProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const frameVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 1 },
};

const lineVariants: Variants = {
  visible: { pathLength: 1, opacity: 1 },
  hidden: { pathLength: 0, opacity: 0 },
};

const ChartLine = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChartLineProps) => {
  const controls = useAnimation();

  const handleHoverStart = async () => {
    await controls.start((i) => ({
      pathLength: 0,
      opacity: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }));
    await controls.start((i) => ({
      pathLength: 1,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }));
  };

  const handleHoverEnd = () => {
    controls.start("visible");
  };

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path variants={frameVariants} d="M3 3v16a2 2 0 0 0 2 2h16" />
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={1}
          d="m19 9-5 5-4-4-3 3"
        />
      </svg>
    </div>
  );
};

export { ChartLine };
`,Xm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ChartNoAxesProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const frameVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 1 },
};

const lineVariants: Variants = {
  visible: { pathLength: 1, opacity: 1 },
  hidden: { pathLength: 0, opacity: 0 },
};

const ChartNoAxes = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChartNoAxesProps) => {
  const controls = useAnimation();

  const handleHoverStart = async () => {
    await controls.start((i) => ({
      pathLength: 0,
      opacity: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }));
    await controls.start((i) => ({
      pathLength: 1,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }));
  };

  const handleHoverEnd = () => {
    controls.start("visible");
  };

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={5}
          d="M12 16v5"
        />
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={4}
          d="M16 14v7"
        />
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={3}
          d="M20 10v11"
        />
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={2}
          d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"
        />
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={1}
          d="M4 18v3"
        />
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={0}
          d="M8 14v7"
        />
      </svg>
    </div>
  );
};

export { ChartNoAxes };
`,Um=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface ChartPieProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const pathVariants: Variants = {
  normal: { translateX: 0, translateY: 0 },
  animate: { translateX: 1.1, translateY: -1.1 },
};

const ChartPie = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChartPieProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 15,
            bounce: 0.6,
          }}
          variants={pathVariants}
          animate={controls}
        />
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      </svg>
    </div>
  );
};

export { ChartPie };
`,Nm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface CheckProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const checkVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  animate: {
    pathLength: [1, 0.8, 1],
    opacity: [1, 0.8, 1],
    rotateY: [0, 180, 360],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Check = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CheckProps) => {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start("animate");
  };

  const handleHoverEnd = () => {
    controls.start("normal");
  };

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M20 6 9 17l-5-5"
          variants={checkVariants}
          initial="normal"
          animate={controls}
          style={{ transformOrigin: "center" }}
        />
      </svg>
    </div>
  );
};

export { Check };
`,Fm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface CheckCheckProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const checkVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const CheckCheck = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CheckCheckProps) => {
  const controls = useAnimation();

  const handleHoverStart = async () => {
    await controls.start((i) => ({
      pathLength: 0,
      opacity: 0,
      transition: { delay: i * 0.1, duration: 0.1 },
    }));
    await controls.start((i) => ({
      pathLength: 1,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }));
  };

  const handleHoverEnd = () => {
    controls.start("normal");
  };

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M18 6 7 17l-5-5"
          variants={checkVariants}
          animate={controls}
          initial="normal"
          custom={0}
        />
        <motion.path
          d="m22 10-7.5 7.5L13 16"
          variants={checkVariants}
          animate={controls}
          initial="normal"
          custom={1}
        />
      </svg>
    </div>
  );
};

export { CheckCheck };
`,Zm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ChevronDownProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const chevronVariants: Variants = {
  normal: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: [4, 0],
    opacity: [0.3, 1],
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ChevronDown = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChevronDownProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="m6 9 6 6 6-6"
          variants={chevronVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { ChevronDown };
`,qm=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface ChevronFirstProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const ChevronFirst = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChevronFirstProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        stroke={stroke}
        strokeWidth={strokeWidth}
        viewBox="0 0 24 24"
        fill="none"
        width={width}
        height={height}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={{
            normal: { translateX: "0%" },
            animate: { translateX: "2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m17 18-6-6 6-6"
        />
        <motion.path
          variants={{
            normal: { translateX: "0%" },
            animate: { translateX: "-2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="M7 6v12"
        />
      </svg>
    </div>
  );
};

export { ChevronFirst };
`,Km=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface ChevronLastProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const ChevronLast = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChevronLastProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={{
            normal: { translateX: "0%" },
            animate: { translateX: "-2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m7 18 6-6-6-6"
        />
        <motion.path
          variants={{
            normal: { translateX: "0%" },
            animate: { translateX: "2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="M17 6v12"
        />
      </svg>
    </div>
  );
};

export { ChevronLast };
`,Jm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ChevronLeftProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const chevronVariants: Variants = {
  normal: {
    x: 0,
    opacity: 1,
  },
  animate: {
    x: [-4, 0],
    opacity: [0.3, 1],
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ChevronLeft = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChevronLeftProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="m15 18-6-6 6-6"
          variants={chevronVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { ChevronLeft };
`,Qm=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ChevronRightProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const chevronVariants: Variants = {
  normal: {
    x: 0,
    opacity: 1,
  },
  animate: {
    x: [4, 0],
    opacity: [0.3, 1],
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ChevronRight = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChevronRightProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="m9 18 6-6-6-6"
          variants={chevronVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { ChevronRight };
`,n0=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ChevronUpProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const chevronVariants: Variants = {
  normal: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: [-4, 0],
    opacity: [0.3, 1],
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ChevronUp = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChevronUpProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="m18 15-6-6-6 6"
          variants={chevronVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { ChevronUp };
`,t0=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ChevronsDownProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const chevronVariants: Variants = {
  normal: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: [4, 0],
    opacity: [0.3, 1],
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ChevronsDown = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChevronsDownProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="m7 6 5 5 5-5"
          variants={chevronVariants}
          animate={controls}
          initial="normal"
          custom={0}
          transition={{ delay: 0 }}
        />
        <motion.path
          d="m7 13 5 5 5-5"
          variants={chevronVariants}
          animate={controls}
          initial="normal"
          custom={1}
          transition={{ delay: 0.1 }}
        />
      </svg>
    </div>
  );
};

export { ChevronsDown };
`,e0=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ChevronsLeftProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const chevronVariants: Variants = {
  normal: {
    x: 0,
    opacity: 1,
  },
  animate: {
    x: [-4, 0],
    opacity: [0.3, 1],
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ChevronsLeft = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChevronsLeftProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="m11 17-5-5 5-5"
          variants={chevronVariants}
          animate={controls}
          initial="normal"
          custom={0}
          transition={{ delay: 0 }}
        />
        <motion.path
          d="m18 17-5-5 5-5"
          variants={chevronVariants}
          animate={controls}
          initial="normal"
          custom={1}
          transition={{ delay: 0.1 }}
        />
      </svg>
    </div>
  );
};

export { ChevronsLeft };
`,o0=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ChevronsRightProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const chevronVariants: Variants = {
  normal: {
    x: 0,
    opacity: 1,
  },
  animate: {
    x: [4, 0],
    opacity: [0.3, 1],
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ChevronsRight = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChevronsRightProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="m6 17 5-5-5-5"
          variants={chevronVariants}
          animate={controls}
          initial="normal"
          custom={0}
          transition={{ delay: 0 }}
        />
        <motion.path
          d="m13 17 5-5-5-5"
          variants={chevronVariants}
          animate={controls}
          initial="normal"
          custom={1}
          transition={{ delay: 0.1 }}
        />
      </svg>
    </div>
  );
};

export { ChevronsRight };
`,a0=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ChevronsUpProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const chevronVariants: Variants = {
  normal: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: [-4, 0],
    opacity: [0.3, 1],
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ChevronsUp = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChevronsUpProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="m17 11-5-5-5 5"
          variants={chevronVariants}
          animate={controls}
          initial="normal"
          custom={0}
          transition={{ delay: 0 }}
        />
        <motion.path
          d="m17 18-5-5-5 5"
          variants={chevronVariants}
          animate={controls}
          initial="normal"
          custom={1}
          transition={{ delay: 0.1 }}
        />
      </svg>
    </div>
  );
};

export { ChevronsUp };
`,i0=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface ChevronsUpDownProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const ChevronsUpDown = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChevronsUpDownProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={{
            normal: { translateY: "0%" },
            animate: { translateY: "2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m7 15 5 5 5-5"
        />
        <motion.path
          variants={{
            normal: { translateY: "0%" },
            animate: { translateY: "-2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m7 9 5-5 5 5"
        />
      </svg>
    </div>
  );
};

export { ChevronsUpDown };
`,s0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface ChromeProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

const Chrome = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ChromeProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <motion.circle
          cx="12"
          cy="12"
          r="4"
          variants={variants}
          animate={controls}
          custom={0}
        />
        <motion.line
          x1="21.17"
          x2="12"
          y1="8"
          y2="8"
          variants={variants}
          animate={controls}
          custom={3}
        />
        <motion.line
          x1="3.95"
          x2="8.54"
          y1="6.06"
          y2="14"
          variants={variants}
          animate={controls}
          custom={3}
        />
        <motion.line
          x1="10.88"
          x2="15.46"
          y1="21.94"
          y2="14"
          variants={variants}
          animate={controls}
          custom={3}
        />
      </svg>
    </div>
  );
};

export { Chrome };
`,r0=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface CircleChevronDownProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const CircleChevronDown = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CircleChevronDownProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="12" r="10" />
        <motion.path
          variants={{
            normal: { translateY: "0%" },
            animate: { translateY: "2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m16 10-4 4-4-4"
        />
      </svg>
    </div>
  );
};

export { CircleChevronDown };
`,l0=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface CircleChevronLeftProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const CircleChevronLeft = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CircleChevronLeftProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="12" r="10" />
        <motion.path
          variants={{
            normal: { translateX: "0%" },
            animate: { translateX: "-2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m14 16-4-4 4-4"
        />
      </svg>
    </div>
  );
};

export { CircleChevronLeft };
`,c0=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface CircleChevronRightProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const CircleChevronRight = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CircleChevronRightProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="12" r="10" />
        <motion.path
          variants={{
            normal: { translateX: "0%" },
            animate: { translateX: "2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m10 8 4 4-4 4"
        />
      </svg>
    </div>
  );
};

export { CircleChevronRight };
`,m0=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface CircleChevronUpProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const CircleChevronUp = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CircleChevronUpProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="12" r="10" />
        <motion.path
          variants={{
            normal: { translateY: "0%" },
            animate: { translateY: "-2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m8 14 4-4 4 4"
        />
      </svg>
    </div>
  );
};

export { CircleChevronUp };
`,p0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface CircleDashedProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.05 * custom,
    },
  }),
};

const CircleDashed = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CircleDashedProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {[
          "M10.1 2.182a10 10 0 0 1 3.8 0",
          "M13.9 21.818a10 10 0 0 1-3.8 0",
          "M17.609 3.721a10 10 0 0 1 2.69 2.7",
          "M2.182 13.9a10 10 0 0 1 0-3.8",
          "M20.279 17.609a10 10 0 0 1-2.7 2.69",
          "M21.818 10.1a10 10 0 0 1 0 3.8",
          "M3.721 6.391a10 10 0 0 1 2.7-2.69",
          "M6.391 20.279a10 10 0 0 1-2.69-2.7",
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            variants={variants}
            animate={controls}
            custom={i}
          />
        ))}
      </svg>
    </div>
  );
};

export { CircleDashed };
`,d0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface CircleDotDashedProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 2,
  ease: "linear",
  repeat: 1,
};

const spinVariants: Variants = {
  normal: { rotate: 0 },
  animate: { rotate: 360 },
};

const CircleDotDashed = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CircleDotDashedProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.g
          variants={spinVariants}
          animate={controls}
          initial="normal"
          transition={transition}
        >
          <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" />
          <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" />
          <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" />
          <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" />
          <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" />
          <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" />
          <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" />
          <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" />
        </motion.g>
        <circle cx="12" cy="12" r="1" />
      </svg>
    </div>
  );
};

export { CircleDotDashed };
`,h0=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface CircleFadingArrowUpProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const CircleFadingArrowUp = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CircleFadingArrowUpProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M12 2a10 10 0 0 1 7.38 16.75" />
        <motion.g
          variants={{
            normal: { translateY: "0%" },
            animate: { translateY: "-2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
        >
          <path d="m16 12-4-4-4 4" />
          <path d="M12 16V8" />
        </motion.g>
        <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
        <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
        <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
        <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
      </svg>
    </div>
  );
};

export { CircleFadingArrowUp };
`,u0=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface CircleHelpProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const CircleHelp = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CircleHelpProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="12" r="10" />
        <motion.g
          variants={{
            normal: { translateY: "0%" },
            animate: { translateY: "-2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
        >
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </motion.g>
      </svg>
    </div>
  );
};

export { CircleHelp };
`,f0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface ClapperboardProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 10,
  mass: 0.8,
};

const variants: Variants = {
  normal: {
    rotate: 0,
    originX: 0,
    originY: 1,
    y: 0,
  },
  animate: {
    rotate: [-45, 0],
    y: [-2, 0],
    transition,
  },
};

const Clapperboard = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ClapperboardProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.g variants={variants} animate={controls} initial="normal">
          <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
          <path d="m6.2 5.3 3.1 3.9" />
          <path d="m12.4 3.4 3.1 4" />
        </motion.g>
        <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
      </svg>
    </div>
  );
};

export { Clapperboard };
`,g0=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface ClipboardCopyProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const ClipboardCopy = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ClipboardCopyProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
        <path d="M16 4h2a2 2 0 0 1 2 2v4" />
        <path d="M21 14H11" />
        <motion.path
          variants={{
            normal: { translateX: "0%" },
            animate: { translateX: "-2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m15 10-4 4 4 4"
        />
      </svg>
    </div>
  );
};

export { ClipboardCopy };
`,v0=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface Clock8Props extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const clockHandVariants: Variants = {
  normal: {
    rotate: 0,
    originX: "50%",
    originY: "50%",
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const bellVariants: Variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: [-10, 10, -10],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Clock8 = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: Clock8Props) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="12" r="10" />
        <motion.polyline
          points="12 6 12 12 8 14"
          variants={clockHandVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { Clock8 };
`,x0=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface CloudDownloadProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const CloudDownload = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CloudDownloadProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={{
            normal: { pathLength: 1, opacity: 1 },
            animate: { pathLength: 1, opacity: 1 },
          }}
          animate={controls}
          initial="normal"
          d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"
        />
        <motion.g
          variants={{
            normal: { y: 0 },
            animate: { y: [0, 3, 0], transition: { repeat: Infinity } },
          }}
          animate={controls}
          initial="normal"
        >
          <path d="M12 13v8l-4-4" />
          <path d="m12 21 4-4" />
        </motion.g>
      </svg>
    </div>
  );
};

export { CloudDownload };
`,y0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface CloudDrizzleProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

const dropVariants: Variants = {
  normal: { y: 0, opacity: 1 },
  animate: {
    y: [0, 3, 0],
    opacity: [1, 0.3, 1],
    transition: { repeat: Infinity },
  },
};

const CloudDrizzle = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CloudDrizzleProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={variants}
          animate={controls}
          custom={0}
          d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
        />
        <motion.path variants={dropVariants} animate={controls} d="M8 19v1" />
        <motion.path variants={dropVariants} animate={controls} d="M8 14v1" />
        <motion.path variants={dropVariants} animate={controls} d="M16 19v1" />
        <motion.path variants={dropVariants} animate={controls} d="M16 14v1" />
        <motion.path variants={dropVariants} animate={controls} d="M12 21v1" />
        <motion.path variants={dropVariants} animate={controls} d="M12 16v1" />
      </svg>
    </div>
  );
};

export { CloudDrizzle };
`,w0=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface CodeProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const Code = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CodeProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.polyline
          variants={{
            normal: { translateX: "0%" },
            animate: { translateX: "-2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          points="8 6 2 12 8 18"
        />
        <motion.polyline
          variants={{
            normal: { translateX: "0%" },
            animate: { translateX: "2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          points="16 18 22 12 16 6"
        />
      </svg>
    </div>
  );
};

export { Code };
`,_0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface CodesandboxProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

const Codesandbox = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CodesandboxProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={variants}
          animate={controls}
          custom={0}
          d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        />
        <motion.polyline
          variants={variants}
          animate={controls}
          custom={1}
          points="7.5 4.21 12 6.81 16.5 4.21"
        />
        <motion.polyline
          variants={variants}
          animate={controls}
          custom={2}
          points="7.5 19.79 7.5 14.6 3 12"
        />
        <motion.polyline
          variants={variants}
          animate={controls}
          custom={3}
          points="21 12 16.5 14.6 16.5 19.79"
        />
        <motion.polyline
          variants={variants}
          animate={controls}
          custom={4}
          points="3.27 6.96 12 12.01 20.73 6.96"
        />
        <motion.line
          variants={variants}
          animate={controls}
          custom={5}
          x1="12"
          x2="12"
          y1="22.08"
          y2="12"
        />
      </svg>
    </div>
  );
};

export { Codesandbox };
`,k0=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface CompassProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const circleVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const triangleVariants: Variants = {
  normal: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Compass = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CompassProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
          variants={triangleVariants}
          animate={controls}
          style={{ transformOrigin: "center" }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          variants={circleVariants}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { Compass };
`,j0=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface CopyProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 160,
  damping: 17,
  mass: 1,
};

const Copy = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CopyProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.rect
          width="14"
          height="14"
          x="8"
          y="8"
          rx="2"
          ry="2"
          variants={{
            normal: { translateY: 0, translateX: 0 },
            animate: { translateY: -3, translateX: -3 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.path
          d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
          variants={{
            normal: { x: 0, y: 0 },
            animate: { x: 3, y: 3 },
          }}
          transition={defaultTransition}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { Copy };
`,b0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface CpuProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 0.5,
  ease: "easeInOut",
  repeat: 1,
};

const yVariants: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
    opacity: 1,
  },
  animate: {
    scaleY: [1, 1.5, 1],
    opacity: [1, 0.8, 1],
  },
};

const xVariants: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
    opacity: 1,
  },
  animate: {
    scaleX: [1, 1.5, 1],
    opacity: [1, 0.8, 1],
  },
};

const Cpu = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CpuProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <motion.path
          d="M15 2v2"
          variants={yVariants}
          transition={transition}
          animate={controls}
        />
        <motion.path
          d="M15 20v2"
          variants={yVariants}
          transition={transition}
          animate={controls}
        />
        <motion.path
          d="M2 15h2"
          variants={xVariants}
          transition={transition}
          animate={controls}
        />
        <motion.path
          d="M2 9h2"
          variants={xVariants}
          transition={transition}
          animate={controls}
        />
        <motion.path
          d="M20 15h2"
          variants={xVariants}
          transition={transition}
          animate={controls}
        />
        <motion.path
          d="M20 9h2"
          variants={xVariants}
          transition={transition}
          animate={controls}
        />
        <motion.path
          d="M9 2v2"
          variants={yVariants}
          transition={transition}
          animate={controls}
        />
        <motion.path
          d="M9 20v2"
          variants={yVariants}
          transition={transition}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { Cpu };
`,M0=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface CropProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const Crop = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: CropProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={{
            normal: { pathLength: 1, opacity: 1 },
            animate: { pathLength: [0, 1], opacity: [0, 1] },
          }}
          transition={{ ...defaultTransition, delay: 0 }}
          animate={controls}
          initial="normal"
          d="M6 2v14a2 2 0 0 0 2 2h14"
        />
        <motion.path
          variants={{
            normal: { pathLength: 1, opacity: 1 },
            animate: { pathLength: [0, 1], opacity: [0, 1] },
          }}
          transition={{ ...defaultTransition, delay: 0.1 }}
          animate={controls}
          initial="normal"
          d="M18 22V8a2 2 0 0 0-2-2H2"
        />
      </svg>
    </div>
  );
};

export { Crop };
`,V0=`"use client";

import type { Variants, Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface DeleteProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const lidVariants: Variants = {
  normal: { y: 0 },
  animate: { y: -1.1 },
};

const springTransition: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

const Delete = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: DeleteProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.g
          variants={lidVariants}
          animate={controls}
          transition={springTransition}
        >
          <path d="M3 6h18" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </motion.g>
        <motion.path
          d="M19 8v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V8"
          variants={{
            normal: { d: "M19 8v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V8" },
            animate: { d: "M19 9v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V9" },
          }}
          animate={controls}
          transition={springTransition}
        />
        <motion.line
          x1="10"
          x2="10"
          y1="11"
          y2="17"
          variants={{
            normal: { y1: 11, y2: 17 },
            animate: { y1: 11.5, y2: 17.5 },
          }}
          animate={controls}
          transition={springTransition}
        />
        <motion.line
          x1="14"
          x2="14"
          y1="11"
          y2="17"
          variants={{
            normal: { y1: 11, y2: 17 },
            animate: { y1: 11.5, y2: 17.5 },
          }}
          animate={controls}
          transition={springTransition}
        />
      </svg>
    </div>
  );
};

export { Delete };
`,L0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface Dice6Props extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 1,
  ease: "easeInOut",
};

const variants: Variants = {
  normal: {
    rotate: 0,
    scale: 1,
  },
  animate: {
    rotate: [0, 360],
    scale: [1, 1.1, 1],
    transition,
  },
};

const Dice6 = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: Dice6Props) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={variants}
        animate={controls}
        initial="normal"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <path d="M16 8h.01" />
        <path d="M16 12h.01" />
        <path d="M16 16h.01" />
        <path d="M8 8h.01" />
        <path d="M8 12h.01" />
        <path d="M8 16h.01" />
      </motion.svg>
    </div>
  );
};

export { Dice6 };
`,S0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface Disc3Props extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 2,
  ease: "linear",
  repeat: 1,
};

const spinVariants: Variants = {
  normal: { rotate: 0 },
  animate: { rotate: 360 },
};

const Disc3 = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: Disc3Props) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.g
          variants={spinVariants}
          animate={controls}
          initial="normal"
          transition={transition}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
        </motion.g>
      </svg>
    </div>
  );
};

export { Disc3 };
`,C0=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface DownloadProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const Download = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: DownloadProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={{
            normal: { pathLength: 1, opacity: 1 },
            animate: { pathLength: 1, opacity: 1 },
          }}
          animate={controls}
          initial="normal"
          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
        />
        <motion.g
          variants={{
            normal: { y: 0 },
            animate: { y: [0, 3, 0], transition: { repeat: Infinity } },
          }}
          animate={controls}
          initial="normal"
        >
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </motion.g>
      </svg>
    </div>
  );
};

export { Download };
`,A0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface EarthProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

const Earth = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: EarthProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          variants={variants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M21.54 15H17a2 2 0 0 0-2 2v4.54"
          variants={variants}
          animate={controls}
          custom={1}
        />
        <motion.path
          d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"
          variants={variants}
          animate={controls}
          custom={2}
        />
        <motion.path
          d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
          variants={variants}
          animate={controls}
          custom={3}
        />
      </svg>
    </div>
  );
};

export { Earth };
`,W0=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface ExpandProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const Expand = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ExpandProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"
          transition={defaultTransition}
          variants={{
            normal: { translateX: "0%", translateY: "0%" },
            animate: { translateX: "2px", translateY: "2px" },
          }}
          animate={controls}
        />
        <motion.path
          d="M3 16.2V21m0 0h4.8M3 21l6-6"
          transition={defaultTransition}
          variants={{
            normal: { translateX: "0%", translateY: "0%" },
            animate: { translateX: "-2px", translateY: "2px" },
          }}
          animate={controls}
        />
        <motion.path
          d="M21 7.8V3m0 0h-4.8M21 3l-6 6"
          transition={defaultTransition}
          variants={{
            normal: { translateX: "0%", translateY: "0%" },
            animate: { translateX: "2px", translateY: "-2px" },
          }}
          animate={controls}
        />
        <motion.path
          d="M3 7.8V3m0 0h4.8M3 3l6 6"
          transition={defaultTransition}
          variants={{
            normal: { translateX: "0%", translateY: "0%" },
            animate: { translateX: "-2px", translateY: "-2px" },
          }}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { Expand };
`,O0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface FanProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 2,
  ease: "linear",
  repeat: 1,
};

const spinVariants: Variants = {
  normal: { rotate: 0 },
  animate: { rotate: 360 },
};

const Fan = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: FanProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.g
          variants={spinVariants}
          animate={controls}
          initial="normal"
          transition={transition}
        >
          <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
          <path d="M12 12v.01" />
        </motion.g>
      </svg>
    </div>
  );
};

export { Fan };
`,I0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface FileChartColumnProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

const FileChartColumn = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: FileChartColumnProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={variants}
          animate={controls}
          custom={0}
          d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
        />
        <motion.path
          variants={variants}
          animate={controls}
          custom={1}
          d="M14 2v4a2 2 0 0 0 2 2h4"
        />
        <motion.path
          variants={variants}
          animate={controls}
          custom={2}
          d="M8 18v-1"
        />
        <motion.path
          variants={variants}
          animate={controls}
          custom={3}
          d="M12 18v-6"
        />
        <motion.path
          variants={variants}
          animate={controls}
          custom={4}
          d="M16 18v-3"
        />
      </svg>
    </div>
  );
};

export { FileChartColumn };
`,P0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface FileChartPieProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

const FileChartPie = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: FileChartPieProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={variants}
          animate={controls}
          custom={0}
          d="M14 2v4a2 2 0 0 0 2 2h4"
        />
        <motion.path
          variants={variants}
          animate={controls}
          custom={1}
          d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5"
        />
        <motion.path
          variants={variants}
          animate={controls}
          custom={2}
          d="M4.017 11.512a6 6 0 1 0 8.466 8.475"
        />
        <motion.path
          variants={variants}
          animate={controls}
          custom={3}
          d="M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"
        />
      </svg>
    </div>
  );
};

export { FileChartPie };
`,E0=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface FileStackProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const pathVariants: Variants = {
  normal: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  animate: {
    x: -4,
    y: 4,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

const bottomPathVariants: Variants = {
  normal: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  animate: {
    x: 4,
    y: -4,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

const FileStack = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: FileStackProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.g variants={pathVariants} animate={controls}>
          <path d="M21 7h-3a2 2 0 0 1-2-2V2" />
          <path d="M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z" />
        </motion.g>
        <path d="M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" />
        <motion.path
          d="M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"
          variants={bottomPathVariants}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { FileStack };
`,G0=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface FlameProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const pathVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
    pathOffset: 0,
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      delay: 0.1,
      duration: 0.4,
      opacity: { duration: 0.1, delay: 0.1 },
    },
  },
};

const Flame = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: FlameProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={controls}
          fill="none"
          d="M8.9 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
        />
      </svg>
    </div>
  );
};

export { Flame };
`,B0=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface FlameKindlingProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const FlameKindling = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: FlameKindlingProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={{
            normal: { translateY: "0%" },
            animate: { translateY: "-2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"
        />
        <motion.path
          variants={{
            normal: { translateX: "0%" },
            animate: { translateX: "-2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m5 22 14-4"
        />
        <motion.path
          variants={{
            normal: { translateX: "0%" },
            animate: { translateX: "2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m5 18 14 4"
        />
      </svg>
    </div>
  );
};

export { FlameKindling };
`,T0=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface FoldersProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const folderVariants: Variants = {
  normal: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  animate: {
    x: -4,
    y: 2,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

const bottomLineVariants: Variants = {
  normal: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  animate: {
    opacity: 0,
    x: 4,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      opacity: { duration: 0.1 },
    },
  },
};

const Folders = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: FoldersProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Main folder */}
        <motion.path
          d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"
          variants={folderVariants}
          animate={controls}
        />
        {/* Bottom line that fades away */}
        <motion.path
          d="M2 8v11a2 2 0 0 0 2 2h14"
          variants={bottomLineVariants}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { Folders };
`,H0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface GlobeProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const pathVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

const Globe = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: GlobeProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          variants={pathVariants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
          variants={pathVariants}
          animate={controls}
          custom={1}
        />
        <motion.path
          d="M2 12h20"
          variants={pathVariants}
          animate={controls}
          custom={2}
        />
      </svg>
    </div>
  );
};

export { Globe };
`,z0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const stemVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

const grapeVariants: Variants = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

interface GrapeProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Grape = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: GrapeProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M22 5V2l-5.89 5.89"
          variants={stemVariants}
          animate={controls}
          initial="normal"
          custom={0}
        />
        <motion.circle
          cx="12.35"
          cy="11.65"
          r="3"
          variants={grapeVariants}
          animate={controls}
          initial="normal"
          custom={1}
        />
        <motion.circle
          cx="13.91"
          cy="5.85"
          r="3"
          variants={grapeVariants}
          animate={controls}
          initial="normal"
          custom={2}
        />
        <motion.circle
          cx="18.15"
          cy="10.09"
          r="3"
          variants={grapeVariants}
          animate={controls}
          initial="normal"
          custom={3}
        />
        <motion.circle
          cx="16.6"
          cy="15.89"
          r="3"
          variants={grapeVariants}
          animate={controls}
          initial="normal"
          custom={4}
        />
        <motion.circle
          cx="10.8"
          cy="17.44"
          r="3"
          variants={grapeVariants}
          animate={controls}
          initial="normal"
          custom={5}
        />
        <motion.circle
          cx="8.11"
          cy="7.4"
          r="3"
          variants={grapeVariants}
          animate={controls}
          initial="normal"
          custom={6}
        />
        <motion.circle
          cx="6.56"
          cy="13.2"
          r="3"
          variants={grapeVariants}
          animate={controls}
          initial="normal"
          custom={7}
        />
        <motion.circle
          cx="5"
          cy="19"
          r="3"
          variants={grapeVariants}
          animate={controls}
          initial="normal"
          custom={8}
        />
      </svg>
    </div>
  );
};

export { Grape };
`,D0=`"use client";

import { AnimatePresence, motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";

const circles = [
  { cx: 19, cy: 5 }, // Top right
  { cx: 12, cy: 5 }, // Top middle
  { cx: 19, cy: 12 }, // Middle right
  { cx: 5, cy: 5 }, // Top left
  { cx: 12, cy: 12 }, // Center
  { cx: 19, cy: 19 }, // Bottom right
  { cx: 5, cy: 12 }, // Middle left
  { cx: 12, cy: 19 }, // Bottom middle
  { cx: 5, cy: 19 }, // Bottom left
];

interface GripProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Grip = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: GripProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const animateCircles = async () => {
      if (isHovered) {
        await controls.start((i) => ({
          opacity: 0.3,
          transition: {
            delay: i * 0.1,
            duration: 0.2,
          },
        }));
        await controls.start((i) => ({
          opacity: 1,
          transition: {
            delay: i * 0.1,
            duration: 0.2,
          },
        }));
      }
    };

    animateCircles();
  }, [isHovered, controls]);

  return (
    <motion.div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <AnimatePresence>
          {circles.map((circle, index) => (
            <motion.circle
              key={\`\${circle.cx}-\${circle.cy}\`}
              cx={circle.cx}
              cy={circle.cy}
              r="1"
              initial="initial"
              variants={{
                initial: {
                  opacity: 1,
                },
              }}
              animate={controls}
              exit="initial"
              custom={index}
            />
          ))}
        </AnimatePresence>
      </svg>
    </motion.div>
  );
};

export { Grip };
`,R0=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

const frameVariants: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const boxVariants: Variants = {
  normal: {
    y: 0,
  },
  animate: {
    y: [-2, 0],
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

interface GroupProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Group = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: GroupProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.g variants={frameVariants} animate={controls} initial="normal">
          <path d="M3 7V5c0-1.1.9-2 2-2h2" />
          <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
          <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
          <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
        </motion.g>
        <motion.g variants={boxVariants} animate={controls} initial="normal">
          <rect width="7" height="5" x="7" y="7" rx="1" />
          <rect width="7" height="5" x="10" y="12" rx="1" />
        </motion.g>
      </svg>
    </div>
  );
};

export { Group };
`,$0=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

interface HardDriveDownloadProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const HardDriveDownload = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: HardDriveDownloadProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <path d="M6 18h.01" />
        <path d="M10 18h.01" />
        <motion.g
          variants={{
            normal: { translateY: "0%" },
            animate: { translateY: "2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
        >
          <path d="M12 2v8" />
          <path d="m16 6-4 4-4-4" />
        </motion.g>
      </svg>
    </div>
  );
};

export { HardDriveDownload };
`,Y0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

interface HeartHandshakeProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const HeartHandshake = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: HeartHandshakeProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
          variants={variants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"
          variants={variants}
          animate={controls}
          custom={1}
        />
        <motion.path
          d="m18 15-2-2"
          variants={variants}
          animate={controls}
          custom={2}
        />
        <motion.path
          d="m15 18-2-2"
          variants={variants}
          animate={controls}
          custom={3}
        />
      </svg>
    </div>
  );
};

export { HeartHandshake };
`,X0=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const waveVariants: Variants = {
  normal: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  animate: (i: number) => ({
    y: [-1, 1, -1],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: i * 0.2,
      repeat: Infinity,
      repeatType: "loop",
    },
  }),
};

const staticVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
  },
};

interface HeaterProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Heater = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: HeaterProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Heat waves */}
        <motion.path
          d="M11 8c2-3-2-3 0-6"
          variants={waveVariants}
          animate={controls}
          initial="normal"
          custom={0}
        />
        <motion.path
          d="M15.5 8c2-3-2-3 0-6"
          variants={waveVariants}
          animate={controls}
          initial="normal"
          custom={1}
        />

        {/* Static parts */}
        <motion.g variants={staticVariants} animate={controls} initial="normal">
          <path d="M6 10h.01" />
          <path d="M6 14h.01" />
          <path d="M10 16v-4" />
          <path d="M14 16v-4" />
          <path d="M18 16v-4" />
          <path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" />
          <path d="M5 20v2" />
          <path d="M19 20v2" />
        </motion.g>
      </svg>
    </div>
  );
};

export { Heater };
`,U0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

interface IterationCcwProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const IterationCcw = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: IterationCcwProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={variants}
          animate={controls}
          custom={0}
          d="M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"
        />
        <motion.polyline
          variants={variants}
          animate={controls}
          custom={1}
          points="16 14 20 18 16 22"
        />
      </svg>
    </div>
  );
};

export { IterationCcw };
`,N0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

interface IterationCwProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const IterationCw = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: IterationCwProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={variants}
          animate={controls}
          custom={0}
          d="M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"
        />
        <motion.polyline
          variants={variants}
          animate={controls}
          custom={1}
          points="8 22 4 18 8 14"
        />
      </svg>
    </div>
  );
};

export { IterationCw };
`,F0=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const mainLayerVariants: Variants = {
  normal: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  animate: {
    y: 8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

const mergingVariants: Variants = {
  normal: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  animate: {
    y: -4,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

interface LayersProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Layers = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: LayersProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Top layer that moves down */}
        <motion.path
          d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
          variants={mainLayerVariants}
          animate={controls}
        />
        {/* Bottom layers that fade out */}
        <motion.path
          d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
          variants={mergingVariants}
          animate={controls}
        />
        <motion.path
          d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
          variants={mergingVariants}
          animate={controls}
          custom={1}
        />
      </svg>
    </div>
  );
};

export { Layers };
`,Z0=`"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

const boxVariants: Variants = {
  normal: (i: number) => ({
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  }),
  animate: (i: number) => {
    // Calculate new positions for clockwise rotation
    const positions = [
      { x: 11, y: 0 }, // Top left moves right
      { x: 0, y: 11 }, // Top right moves down
      { x: -11, y: 0 }, // Bottom right moves left
      { x: 0, y: -11 }, // Bottom left moves up
    ];
    return {
      ...positions[i],
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    };
  },
};

interface LayoutGridProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const LayoutGrid = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: LayoutGridProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.rect
          width="7"
          height="7"
          x="3"
          y="3"
          rx="1"
          variants={boxVariants}
          animate={controls}
          initial="normal"
          custom={0}
        />
        <motion.rect
          width="7"
          height="7"
          x="14"
          y="3"
          rx="1"
          variants={boxVariants}
          animate={controls}
          initial="normal"
          custom={1}
        />
        <motion.rect
          width="7"
          height="7"
          x="14"
          y="14"
          rx="1"
          variants={boxVariants}
          animate={controls}
          initial="normal"
          custom={2}
        />
        <motion.rect
          width="7"
          height="7"
          x="3"
          y="14"
          rx="1"
          variants={boxVariants}
          animate={controls}
          initial="normal"
          custom={3}
        />
      </svg>
    </div>
  );
};

export { LayoutGrid };
`,q0=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

interface Link2Props extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Link2 = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: Link2Props) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M9 17H7A5 5 0 0 1 7 7h2"
          variants={{
            normal: { x: 0 },
            animate: { x: -2 },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
        />
        <motion.path
          d="M15 7h2a5 5 0 1 1 0 10h-2"
          variants={{
            normal: { x: 0 },
            animate: { x: 2 },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
        />
        <line x1="8" x2="16" y1="12" y2="12" />
      </svg>
    </div>
  );
};

export { Link2 };
`,K0=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const staticVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
  },
};

const dropVariants: Variants = {
  normal: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
  animate: (custom: number) => ({
    y: [-100, 10, 0],
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12,
      mass: 1.2,
      delay: custom * 0.15,
    },
  }),
};

interface LinkedinProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Linkedin = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: LinkedinProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Static dot and line */}
        <motion.rect
          width="4"
          height="12"
          x="2"
          y="9"
          variants={staticVariants}
          animate={controls}
        />
        <motion.circle
          cx="4"
          cy="4"
          r="2"
          variants={staticVariants}
          animate={controls}
        />

        {/* Dropping "i" part */}
        <motion.path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7"
          variants={dropVariants}
          animate={controls}
          custom={0}
        />

        {/* Dropping "n" part */}
        <motion.path
          d="M18 14a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7"
          variants={dropVariants}
          animate={controls}
          custom={1}
        />
      </svg>
    </div>
  );
};

export { Linkedin };
`,J0=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const transition: Transition = {
  duration: 2,
  ease: "linear",
  repeat: 1,
};

const spinVariants: Variants = {
  normal: { rotate: 0 },
  animate: { rotate: 360 },
};

interface LoaderPinwheelProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const LoaderPinwheel = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: LoaderPinwheelProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.g
          variants={spinVariants}
          animate={controls}
          initial="normal"
          transition={transition}
        >
          <path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
          <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
          <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
          <circle cx="12" cy="12" r="10" />
        </motion.g>
      </svg>
    </div>
  );
};

export { LoaderPinwheel };
`,Q0=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const variants: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
    y: 0,
  },
  animate: {
    scale: [1, 1.04, 1],
    rotate: [0, -8, 8, -8, 0],
    y: [0, -2, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  },
};

interface MagnetProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Magnet = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: MagnetProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={variants}
        animate={controls}
      >
        <path d="m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15" />
        <path d="m5 8 4 4" />
        <path d="m12 15 4 4" />
      </motion.svg>
    </div>
  );
};

export { Magnet };
`,np=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const variants: Variants = {
  normal: {
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  animate: {
    rotate: [-5, 0],
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

interface MartiniProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Martini = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: MartiniProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={variants}
        animate={controls}
        style={{ originX: "50%", originY: "50%" }}
      >
        <path d="M8 22h8" />
        <path d="M12 11v11" />
        <path d="m19 3-7 8-7-8Z" />
      </motion.svg>
    </div>
  );
};

export { Martini };
`,tp=`"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

interface Maximize2Props extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Maximize2 = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: Maximize2Props) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.g
          variants={{
            normal: { x: 0, y: 0 },
            animate: { x: 2, y: -2 },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
        >
          <polyline points="15 3 21 3 21 9" />
          <line x1="21" x2="14" y1="3" y2="10" />
        </motion.g>
        <motion.g
          variants={{
            normal: { x: 0, y: 0 },
            animate: { x: -2, y: 2 },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
        >
          <polyline points="9 21 3 21 3 15" />
          <line x1="3" x2="10" y1="21" y2="14" />
        </motion.g>
      </svg>
    </div>
  );
};

export { Maximize2 };
`,ep=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const variants: Variants = {
  normal: {
    x: 0,
    y: 0,
  },
  animate: {
    x: [0, 0, -2, 1, -1, 0.5, -0.5, 0],
    y: [0, -2, 0, -1, -2, -0.5, -1, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    },
  },
};

interface MusicProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Music = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: MusicProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={variants}
        animate={controls}
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </motion.svg>
    </div>
  );
};

export { Music };
`,op=`"use client";

import { motion, useAnimation } from "motion/react";

const DURATION = 0.25;

const calculateDelay = (i: number) => {
  return i === 0 ? 0.1 : i * DURATION + 0.1;
};

interface NetworkProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Network = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: NetworkProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <motion.path
          d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"
          animate={controls}
          transition={{
            duration: DURATION,
            delay: calculateDelay(0),
            opacity: { delay: calculateDelay(0) },
          }}
          variants={{
            normal: {
              pathLength: 1,
              pathOffset: 0,
              opacity: 1,
            },
            animate: {
              pathOffset: [1, 0],
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
        />
        <motion.path
          d="M12 12V8"
          animate={controls}
          transition={{
            duration: DURATION,
            delay: calculateDelay(1),
            opacity: { delay: calculateDelay(1) },
          }}
          variants={{
            normal: {
              pathLength: 1,
              pathOffset: 0,
              opacity: 1,
            },
            animate: {
              pathOffset: [1, 0],
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
        />
      </svg>
    </div>
  );
};

export { Network };
`,ap=`"use client";

import { motion, useAnimation } from "motion/react";

const DURATION = 0.25;

const calculateDelay = (i: number) => {
  return i === 0 ? 0.1 : i * DURATION + 0.1;
};

interface NfcProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Nfc = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: NfcProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M6 8.32a7.43 7.43 0 0 1 0 7.36"
          animate={controls}
          transition={{
            duration: DURATION,
            delay: calculateDelay(0),
            opacity: { delay: calculateDelay(0) },
          }}
          variants={{
            normal: {
              pathLength: 1,
              pathOffset: 0,
              opacity: 1,
              transition: { delay: 0 },
            },
            animate: {
              pathOffset: [1, 0],
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
        />
        <motion.path
          d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58"
          animate={controls}
          transition={{
            duration: DURATION,
            delay: calculateDelay(1),
            opacity: { delay: calculateDelay(1) },
          }}
          variants={{
            normal: {
              pathLength: 1,
              pathOffset: 0,
              opacity: 1,
              transition: { delay: 0 },
            },
            animate: {
              pathOffset: [1, 0],
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
        />
        <motion.path
          d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"
          animate={controls}
          transition={{
            duration: DURATION,
            delay: calculateDelay(2),
            opacity: { delay: calculateDelay(2) },
          }}
          variants={{
            normal: {
              pathLength: 1,
              pathOffset: 0,
              opacity: 1,
              transition: { delay: 0 },
            },
            animate: {
              pathOffset: [1, 0],
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
        />
        <motion.path
          d="M16.37 2a20.16 20.16 0 0 1 0 20"
          animate={controls}
          transition={{
            duration: DURATION,
            delay: calculateDelay(3),
            opacity: { delay: calculateDelay(3) },
          }}
          variants={{
            normal: {
              pathLength: 1,
              pathOffset: 0,
              opacity: 1,
              transition: { delay: 0 },
            },
            animate: {
              pathOffset: [1, 0],
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
        />
      </svg>
    </div>
  );
};

export { Nfc };
`,ip=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const variants: Variants = {
  normal: {
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  animate: {
    rotate: [-2, 2, -2],
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

interface OrigamiProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Origami = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: OrigamiProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={variants}
        animate={controls}
        style={{ originX: "50%", originY: "50%" }}
      >
        <path d="M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025" />
        <path d="m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009" />
        <path d="m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027" />
      </motion.svg>
    </div>
  );
};

export { Origami };
`,sp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const pathVariants: Variants = {
  normal: {
    pathLength: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  animate: {
    pathLength: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const boxVariants: Variants = {
  normal: {
    offsetDistance: "0%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  animate: {
    offsetDistance: "100%",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

interface PackageOpenProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const PackageOpen = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: PackageOpenProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path d="M12 22v-9" variants={pathVariants} animate={controls} />
        <motion.path
          d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"
          variants={pathVariants}
          animate={controls}
        />
        <motion.path
          d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"
          variants={pathVariants}
          animate={controls}
        />
        <motion.path
          d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"
          variants={pathVariants}
          animate={controls}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="1"
          fill="currentColor"
          style={{
            offsetPath:
              "path('M12 22v-9 M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13 M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z')",
          }}
          variants={boxVariants}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { PackageOpen };
`,rp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const pathVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
    strokeWidth: 2,
  },
  animate: {
    pathLength: [0, 1],
    opacity: 1,
    strokeWidth: 2,
    transition: {
      duration: 1,
      ease: "easeInOut",
      pathLength: {
        delay: 0.2,
        duration: 0.8,
      },
    },
  },
};

const extraLineVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
    strokeWidth: 2,
  },
  animate: {
    pathLength: [0, 1],
    opacity: 1,
    strokeWidth: 2,
    transition: {
      delay: 0.8,
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

interface PaperclipProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Paperclip = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: PaperclipProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M13.234 20.252 21 12.3"
          variants={extraLineVariants}
          animate={controls}
          initial="normal"
        />
        <motion.path
          d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"
          variants={pathVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { Paperclip };
`,lp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const linesVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    scale: 1,
    translateX: 0,
    translateY: 0,
  },
  animate: {
    opacity: [0, 1],
    scale: [0.3, 0.8, 1, 1.1, 1],
    pathLength: [0, 0.5, 1],
    translateX: [-5, 0],
    translateY: [5, 0],
    transition: {
      type: "spring",
      damping: 35,
      duration: 0.7,
      stiffness: 240,
      velocity: 0.3,
    },
  },
};

const dotsVariants: Variants = {
  normal: { opacity: 1, scale: 1, translateX: 0, translateY: 0 },
  animate: {
    opacity: [0, 1],
    translateX: [-5, 0],
    translateY: [5, 0],
    scale: [0.5, 0.8, 1, 1.1, 1],
    transition: {
      type: "spring",
      damping: 35,
      duration: 0.7,
      stiffness: 240,
    },
  },
};

const popperVariants: Variants = {
  normal: { translateX: 0, translateY: 0 },
  animate: {
    translateX: [-1.5, 0],
    translateY: [1.5, 0],
    transition: {
      type: "spring",
      damping: 35,
      stiffness: 200,
      velocity: 0.3,
      mass: 4,
    },
  },
};

interface PartyPopperProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const PartyPopper = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: PartyPopperProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M5.8 11.3 2 22l10.7-3.79"
          variants={popperVariants}
          animate={controls}
        />
        <motion.path
          d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
          variants={popperVariants}
          animate={controls}
        />
        <motion.path d="M4 3h.01" variants={dotsVariants} animate={controls} />
        <motion.path d="M22 8h.01" variants={dotsVariants} animate={controls} />
        <motion.path d="M15 2h.01" variants={dotsVariants} animate={controls} />
        <motion.path
          d="M22 20h.01"
          variants={dotsVariants}
          animate={controls}
        />
        <motion.path
          d="m14 10 1.21-1.06c0.16-0.84 0.9-1.44 1.76-1.44h0.38c0.88 0 1.55-0.77 1.45-1.63a2.9 2.9 0 0 1 1.96-3.12L22 2"
          variants={linesVariants}
          animate={controls}
        />
        <motion.path
          d="M17 15h0.77c0.71 0 1.32-0.52 1.43-1.22c0.16-0.91 1.12-1.45 1.98-1.11L22 13"
          variants={linesVariants}
          animate={controls}
        />
        <motion.path
          d="M9 7V6.23c0-0.71 0.52-1.33 1.22-1.43c0.91-0.16 1.45-1.12 1.11-1.98L11 2"
          variants={linesVariants}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { PartyPopper };
`,cp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const lineVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const circleVariants: Variants = {
  normal: (custom: { x: number; y: number }) => ({
    x: custom.x,
    y: custom.y,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  animate: (custom: { x: number; y: number }) => ({
    x: custom.x === 6.5 ? 17.5 : 6.5,
    y: custom.y === 6.5 ? 17.5 : 6.5,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

interface PercentProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Percent = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: PercentProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.line
          x1="19"
          x2="5"
          y1="5"
          y2="19"
          variants={lineVariants}
          animate={controls}
        />
        <motion.circle
          r="2.5"
          variants={circleVariants}
          animate={controls}
          custom={{ x: 6.5, y: 6.5 }}
          initial={{ x: 6.5, y: 6.5 }}
        />
        <motion.circle
          r="2.5"
          variants={circleVariants}
          animate={controls}
          custom={{ x: 17.5, y: 17.5 }}
          initial={{ x: 17.5, y: 17.5 }}
        />
      </svg>
    </div>
  );
};

export { Percent };
`,mp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const variants: Variants = {
  normal: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  animate: {
    x: [0, 2, 0],
    y: [0, -2, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

interface PlaneProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Plane = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: PlaneProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={variants}
        animate={controls}
      >
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </motion.svg>
    </div>
  );
};

export { Plane };
`,pp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const waveVariants: Variants = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    scale: [1, 1.2, 1],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 1.5,
      delay: custom * 0.2,
      repeat: Infinity,
    },
  }),
};

const dotVariant: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
    },
  },
};

interface PodcastProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Podcast = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: PodcastProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M16.85 18.58a9 9 0 1 0-9.7 0"
          variants={waveVariants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M8 14a5 5 0 1 1 8 0"
          variants={waveVariants}
          animate={controls}
          custom={1}
        />
        <motion.circle
          cx="12"
          cy="11"
          r="1"
          variants={dotVariant}
          animate={controls}
        />
        <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" />
      </svg>
    </div>
  );
};

export { Podcast };
`,dp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const variants: Variants = {
  normal: {
    x: 0,
    y: 0,
  },
  animate: {
    x: [0, 0, -3, 2, -2, 1, -1, 0],
    y: [0, -3, 0, -2, -3, -1, -2, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    },
  },
};

const fireVariants: Variants = {
  normal: {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
  },
  animate: {
    d: [
      "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      "M4.5 16.5c-1.5 1.26-3 5.5-3 5.5s4.74-1 6-2.5c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      "M4.5 16.5c-1.5 1.26-2.2 4.8-2.2 4.8s3.94-0.3 5.2-1.8c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      "M4.5 16.5c-1.5 1.26-2.8 5.2-2.8 5.2s4.54-0.7 5.8-2.2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    ],
    transition: {
      duration: 2,
      ease: [0.4, 0, 0.2, 1],
      repeat: Infinity,
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  },
};

interface RocketProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Rocket = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: RocketProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={variants}
        animate={controls}
      >
        <motion.path
          d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
          variants={fireVariants}
          animate={controls}
        />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </motion.svg>
    </div>
  );
};

export { Rocket };
`,hp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const pathVariants: Variants = {
  normal: {
    translateY: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 13,
    },
  },
  animate: {
    translateY: [-4, 0],
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 200,
      damping: 13,
    },
  },
};

interface SaladProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Salad = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: SaladProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Static bowl parts */}
        <path d="M7 21h10" />
        <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />

        {/* Animated salad contents */}
        <motion.g variants={pathVariants} animate={controls} initial="normal">
          <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" />
          <path d="m13 12 4-4" />
          <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
        </motion.g>
      </svg>
    </div>
  );
};

export { Salad };
`,up=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const heartVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const frameVariants: Variants = {
  normal: {
    x: 0,
    y: 0,
  },
  animate: (i: number) => ({
    x: i % 2 === 0 ? [-3, 0] : [3, 0],
    y: i < 2 ? [-3, 0] : [3, 0],
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 0.5,
    },
  }),
};

interface ScanHeartProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const ScanHeart = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ScanHeartProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z"
          variants={heartVariants}
          animate={controls}
        />
        <motion.path
          d="M17 3h2a2 2 0 0 1 2 2v2"
          variants={frameVariants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M21 17v2a2 2 0 0 1-2 2h-2"
          variants={frameVariants}
          animate={controls}
          custom={1}
        />
        <motion.path
          d="M3 7V5a2 2 0 0 1 2-2h2"
          variants={frameVariants}
          animate={controls}
          custom={2}
        />
        <motion.path
          d="M7 21H5a2 2 0 0 1-2-2v-2"
          variants={frameVariants}
          animate={controls}
          custom={3}
        />
      </svg>
    </div>
  );
};

export { ScanHeart };
`,fp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { useCallback } from "react";

const frameVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 1 },
};

const lineVariants: Variants = {
  visible: { pathLength: 1, opacity: 1 },
  hidden: { pathLength: 0, opacity: 0 },
};

interface ScanTextProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const ScanText = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ScanTextProps) => {
  const controls = useAnimation();

  const handleHoverStart = useCallback(async () => {
    await controls.start((i) => ({
      pathLength: 0,
      opacity: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }));
    await controls.start((i) => ({
      pathLength: 1,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }));
  }, [controls]);

  const handleHoverEnd = useCallback(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path variants={frameVariants} d="M3 7V5a2 2 0 0 1 2-2h2" />
        <motion.path variants={frameVariants} d="M17 3h2a2 2 0 0 1 2 2v2" />
        <motion.path variants={frameVariants} d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <motion.path variants={frameVariants} d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={0}
          d="M7 8h8"
        />
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={1}
          d="M7 12h10"
        />
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={2}
          d="M7 16h6"
        />
      </svg>
    </div>
  );
};

export { ScanText };
`,gp=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const pathVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

interface ShellProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Shell = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ShellProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"
          variants={pathVariants}
          animate={controls}
          initial="normal"
          custom={0}
        />
      </svg>
    </div>
  );
};

export { Shell };
`,vp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const pathVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (i: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
};

interface SlackProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Slack = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: SlackProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.rect
          width="3"
          height="8"
          x="13"
          y="2"
          rx="1.5"
          variants={pathVariants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"
          variants={pathVariants}
          animate={controls}
          custom={1}
        />
        <motion.rect
          width="3"
          height="8"
          x="8"
          y="14"
          rx="1.5"
          variants={pathVariants}
          animate={controls}
          custom={2}
        />
        <motion.path
          d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"
          variants={pathVariants}
          animate={controls}
          custom={3}
        />
        <motion.rect
          width="8"
          height="3"
          x="14"
          y="13"
          rx="1.5"
          variants={pathVariants}
          animate={controls}
          custom={4}
        />
        <motion.path
          d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"
          variants={pathVariants}
          animate={controls}
          custom={5}
        />
        <motion.rect
          width="8"
          height="3"
          x="2"
          y="8"
          rx="1.5"
          variants={pathVariants}
          animate={controls}
          custom={6}
        />
        <motion.path
          d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"
          variants={pathVariants}
          animate={controls}
          custom={7}
        />
      </svg>
    </div>
  );
};

export { Slack };
`,xp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const lineVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (i: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
};

interface SlidersVerticalProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const SlidersVertical = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: SlidersVerticalProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.line
          x1="4"
          x2="4"
          y1="21"
          y2="14"
          variants={lineVariants}
          animate={controls}
          custom={0}
        />
        <motion.line
          x1="4"
          x2="4"
          y1="10"
          y2="3"
          variants={lineVariants}
          animate={controls}
          custom={1}
        />
        <motion.line
          x1="12"
          x2="12"
          y1="21"
          y2="12"
          variants={lineVariants}
          animate={controls}
          custom={2}
        />
        <motion.line
          x1="12"
          x2="12"
          y1="8"
          y2="3"
          variants={lineVariants}
          animate={controls}
          custom={3}
        />
        <motion.line
          x1="20"
          x2="20"
          y1="21"
          y2="16"
          variants={lineVariants}
          animate={controls}
          custom={4}
        />
        <motion.line
          x1="20"
          x2="20"
          y1="12"
          y2="3"
          variants={lineVariants}
          animate={controls}
          custom={5}
        />
        <motion.line
          x1="2"
          x2="6"
          y1="14"
          y2="14"
          variants={lineVariants}
          animate={controls}
          custom={6}
        />
        <motion.line
          x1="10"
          x2="14"
          y1="8"
          y2="8"
          variants={lineVariants}
          animate={controls}
          custom={7}
        />
        <motion.line
          x1="18"
          x2="22"
          y1="16"
          y2="16"
          variants={lineVariants}
          animate={controls}
          custom={8}
        />
      </svg>
    </div>
  );
};

export { SlidersVertical };
`,yp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const pathVariants: Variants = {
  normal: {
    opacity: 1,
    scale: 1,
  },
  animate: (i: number) => ({
    opacity: [0.3, 1, 0.3],
    scale: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      delay: i * 0.2,
    },
  }),
};

interface SmartphoneNfcProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const SmartphoneNfc = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: SmartphoneNfcProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect width="7" height="12" x="2" y="6" rx="1" />
        <motion.path
          d="M13 8.32a7.43 7.43 0 0 1 0 7.36"
          variants={pathVariants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58"
          variants={pathVariants}
          animate={controls}
          custom={1}
        />
        <motion.path
          d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"
          variants={pathVariants}
          animate={controls}
          custom={2}
        />
      </svg>
    </div>
  );
};

export { SmartphoneNfc };
`,wp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const starVariants: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const sparkleVariants: Variants = {
  normal: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  animate: (i: number) => ({
    x: [0, 2, -1, 1, -2, 0][i % 6],
    y: [0, -1, 1, -2, 1, 0][i % 6],
    opacity: [1, 0.7, 1, 0.5, 1],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay: i * 0.2,
    },
  }),
};

interface SparklesProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Sparkles = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: SparklesProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
          variants={starVariants}
          animate={controls}
          initial="normal"
        />
        <motion.g
          variants={sparkleVariants}
          animate={controls}
          initial="normal"
          custom={0}
        >
          <motion.path d="M20 3v4" />
          <motion.path d="M22 5h-4" />
        </motion.g>
        <motion.g
          variants={sparkleVariants}
          animate={controls}
          initial="normal"
          custom={1}
        >
          <motion.path d="M4 17v2" />
          <motion.path d="M5 18H3" />
        </motion.g>
      </svg>
    </div>
  );
};

export { Sparkles };
`,_p=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const dotVariants: Variants = {
  normal: {
    opacity: 1,
    scale: 1,
  },
  animate: (i: number) => ({
    opacity: [1, 0.4, 1],
    scale: [1, 0.8, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      repeatDelay: 0.2,
      delay: i * 0.15,
      ease: "easeInOut",
    },
  }),
};

const containerVariants: Variants = {
  normal: {
    rotate: 0,
  },
  animate: {
    rotate: [0, -2, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

interface SprayCanProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const SprayCan = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: SprayCanProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={containerVariants}
        animate={controls}
      >
        <motion.path
          d="M3 3h.01"
          variants={dotVariants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M7 5h.01"
          variants={dotVariants}
          animate={controls}
          custom={1}
        />
        <motion.path
          d="M11 7h.01"
          variants={dotVariants}
          animate={controls}
          custom={2}
        />
        <motion.path
          d="M3 7h.01"
          variants={dotVariants}
          animate={controls}
          custom={3}
        />
        <motion.path
          d="M7 9h.01"
          variants={dotVariants}
          animate={controls}
          custom={4}
        />
        <motion.path
          d="M3 11h.01"
          variants={dotVariants}
          animate={controls}
          custom={5}
        />
        <rect width="4" height="4" x="15" y="5" />
        <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
        <path d="m13 14 8-2" />
        <path d="m13 19 8-2" />
      </motion.svg>
    </div>
  );
};

export { SprayCan };
`,kp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const pathVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (i: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      delay: i * 0.15,
      ease: "easeInOut",
    },
  }),
};

interface SquirrelProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Squirrel = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: SquirrelProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M15.236 22a3 3 0 0 0-2.2-5"
          variants={pathVariants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"
          variants={pathVariants}
          animate={controls}
          custom={1}
        />
        <motion.path
          d="M18 13h.01"
          variants={pathVariants}
          animate={controls}
          custom={2}
        />
        <motion.path
          d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"
          variants={pathVariants}
          animate={controls}
          custom={3}
        />
      </svg>
    </div>
  );
};

export { Squirrel };
`,jp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

interface SwatchBookProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const staticVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
  },
};

const mergingVariants: Variants = {
  normal: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  animate: {
    x: -8,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

const mainSwatchVariants: Variants = {
  normal: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  animate: {
    x: 4,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

const SwatchBook = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: SwatchBookProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Main vertical swatch that stays */}
        <motion.path
          d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"
          variants={mainSwatchVariants}
          animate={controls}
        />
        <motion.path
          d="M 7 17h.01"
          variants={mainSwatchVariants}
          animate={controls}
        />

        {/* Parts that merge into the main swatch */}
        <motion.path
          d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"
          variants={mergingVariants}
          animate={controls}
        />
        <motion.path
          d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"
          variants={mergingVariants}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { SwatchBook };
`,bp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const containerVariants: Variants = {
  normal: {
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  animate: {
    rotate: -45,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

const liquidVariants: Variants = {
  normal: {
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  animate: {
    pathLength: 1.2,
    pathOffset: 0.1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      delay: 0.1,
    },
  },
};

interface TestTubesProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const TestTubes = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: TestTubesProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={containerVariants}
        animate={controls}
        style={{ originX: "50%", originY: "50%" }}
      >
        <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" />
        <path d="M8.5 2h7" />
        <motion.path
          d="M14.5 16h-5"
          variants={liquidVariants}
          animate={controls}
          initial="normal"
          strokeDasharray="6 3"
          style={{ originX: "50%", originY: "50%" }}
        />
      </motion.svg>
    </div>
  );
};

export { TestTubes };
`,Mp=`"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const thermometerVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

const snowflakeVariants: Variants = {
  normal: {
    scale: 1,
    x: 0,
    opacity: 1,
  },
  animate: (custom: number) => ({
    scale: [0.8, 1.1, 1],
    x: [-2, 2, 0],
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: 0.1 * custom,
    },
  }),
};

interface ThermometerSnowflakeProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const ThermometerSnowflake = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ThermometerSnowflakeProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Thermometer */}
        <motion.path
          d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"
          variants={thermometerVariants}
          animate={controls}
          custom={0}
        />

        {/* Snowflake parts with spring animation */}
        <motion.g variants={snowflakeVariants} animate={controls} custom={1}>
          <path d="m10 20-1.25-2.5L6 18" />
          <path d="M10 4 8.75 6.5 6 6" />
          <path d="M10.585 15H10" />
          <path d="M2 12h6.5L10 9" />
          <path d="m4 10 1.5 2L4 14" />
          <path d="m7 21 3-6-1.5-3" />
          <path d="m7 3 3 6h2" />
        </motion.g>
      </svg>
    </div>
  );
};

export { ThermometerSnowflake };
`,Vp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const variants: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
    y: 0,
  },
  animate: {
    scale: [1, 1.04, 1],
    rotate: [0, -8, 8, -8, 0],
    y: [0, -2, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  },
};

interface ThumbsDownProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const ThumbsDown = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ThumbsDownProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={variants}
        animate={controls}
      >
        <path d="M17 14V2" />
        <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
      </motion.svg>
    </div>
  );
};

export { ThumbsDown };
`,Lp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const variants: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
    y: 0,
  },
  animate: {
    scale: [1, 1.04, 1],
    rotate: [0, -8, 8, -8, 0],
    y: [0, -2, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  },
};

interface ThumbsUpProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const ThumbsUp = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ThumbsUpProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={variants}
        animate={controls}
      >
        <path d="M7 10v12" />
        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
      </motion.svg>
    </div>
  );
};

export { ThumbsUp };
`,Sp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const circleVariants: Variants = {
  normal: {
    cx: 8,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
  animate: {
    cx: 16,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};

interface ToggleLeftProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const ToggleLeft = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ToggleLeftProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect width="20" height="12" x="2" y="6" rx="6" ry="6" />
        <motion.circle
          cy="12"
          r="2"
          variants={circleVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { ToggleLeft };
`,Cp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const pathVariants: Variants = {
  normal: {
    translateX: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 13,
    },
  },
  animate: {
    translateX: [-6, 0],
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 200,
      damping: 13,
    },
  },
};

interface TreesProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Trees = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: TreesProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
        <path d="M7 16v6" />
        <path d="M13 19v3" />
        <motion.path
          d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"
          variants={pathVariants}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { Trees };
`,Ap=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation, cubicBezier } from "motion/react";

const customEasing = cubicBezier(0.25, 0.1, 0.25, 1);

const arrowVariants: Variants = {
  normal: {
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: customEasing,
    },
  },
  animate: {
    x: [0, 2.1, 0],
    y: [0, -1.4, 0],
    rotate: [0, 12, 0],
    transition: {
      duration: 0.6,
      ease: customEasing,
    },
  },
};

const pathVariants: Variants = {
  normal: {
    pathLength: 1,
    transition: {
      duration: 0.6,
      ease: customEasing,
    },
  },
  animate: {
    pathLength: [1, 0.8, 1],
    transition: {
      duration: 0.6,
      ease: customEasing,
    },
  },
};

interface UndoProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Undo = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: UndoProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path d="M3 7v6h6" variants={arrowVariants} animate={controls} />
        <motion.path
          d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"
          variants={pathVariants}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { Undo };
`,Wp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const leftBoxVariants: Variants = {
  normal: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  animate: {
    x: -2, // Moved left box more to the left
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

const rightBoxVariants: Variants = {
  normal: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  animate: {
    x: 2, // Moved right box more to the right
    y: -10,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

interface UngroupProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Ungroup = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: UngroupProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.rect
          width="8"
          height="6"
          x="5"
          y="4"
          rx="1"
          variants={leftBoxVariants}
          animate={controls}
          initial="normal"
        />
        <motion.rect
          width="8"
          height="6"
          x="11"
          y="14"
          rx="1"
          variants={rightBoxVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { Ungroup };
`,Op=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const pathVariant: Variants = {
  normal: { pathLength: 1, opacity: 1, pathOffset: 0 },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    pathOffset: [1, 0],
  },
};

const circleVariant: Variants = {
  normal: {
    pathLength: 1,
    pathOffset: 0,
    scale: 1,
  },
  animate: {
    pathLength: [0, 1],
    pathOffset: [1, 0],
    scale: [0.5, 1],
  },
};

interface UserProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const User = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: UserProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.circle
          cx="12"
          cy="8"
          r="5"
          animate={controls}
          variants={circleVariant}
        />
        <motion.path
          d="M20 21a8 8 0 0 0-16 0"
          variants={pathVariant}
          transition={{
            delay: 0.2,
            duration: 0.4,
          }}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { User };
`,Ip=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const pathVariants: Variants = {
  normal: {
    translateX: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 13,
    },
  },
  animate: {
    translateX: [-6, 0],
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 200,
      damping: 13,
    },
  },
};

interface UsersProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Users = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: UsersProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <motion.path
          d="M22 21v-2a4 4 0 0 0-3-3.87"
          variants={pathVariants}
          animate={controls}
        />
        <motion.path
          d="M16 3.13a4 4 0 0 1 0 7.75"
          variants={pathVariants}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { Users };
`,Pp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const wandVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
  },
};

const sparkleVariants: Variants = {
  normal: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  animate: (i: number) => ({
    opacity: [1, 0.5, 1],
    scale: [1, 1.05, 1],
    y: [0, -1, 0],
    transition: {
      duration: 1.2,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
};

interface WandProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Wand = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: WandProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Main wand */}
        <motion.path
          d="m3 21 9-9"
          variants={wandVariants}
          animate={controls}
          initial="normal"
        />
        {/* Floating sparkles */}
        <motion.path
          d="M15 4V2"
          variants={sparkleVariants}
          animate={controls}
          initial="normal"
          custom={0}
        />
        <motion.path
          d="M15 16v-2"
          variants={sparkleVariants}
          animate={controls}
          initial="normal"
          custom={1}
        />
        <motion.path
          d="M8 9h2"
          variants={sparkleVariants}
          animate={controls}
          initial="normal"
          custom={2}
        />
        <motion.path
          d="M20 9h2"
          variants={sparkleVariants}
          animate={controls}
          initial="normal"
          custom={3}
        />
        <motion.path
          d="M17.8 11.8 19 13"
          variants={sparkleVariants}
          animate={controls}
          initial="normal"
          custom={4}
        />
        <motion.path
          d="M15 9h.01"
          variants={sparkleVariants}
          animate={controls}
          initial="normal"
          custom={5}
        />
        <motion.path
          d="M17.8 6.2 19 5"
          variants={sparkleVariants}
          animate={controls}
          initial="normal"
          custom={6}
        />
        <motion.path
          d="M12.2 6.2 11 5"
          variants={sparkleVariants}
          animate={controls}
          initial="normal"
          custom={7}
        />
      </svg>
    </div>
  );
};

export { Wand };
`,Ep=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const sparkleVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: (i: number) => ({
    opacity: [1, 0.3, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatDelay: 0.2,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
};

interface WandSparklesProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const WandSparkles = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: WandSparklesProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
        <motion.path
          d="m14 7 3 3"
          variants={sparkleVariants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M5 6v4"
          variants={sparkleVariants}
          animate={controls}
          custom={1}
        />
        <motion.path
          d="M19 14v4"
          variants={sparkleVariants}
          animate={controls}
          custom={2}
        />
        <motion.path
          d="M10 2v2"
          variants={sparkleVariants}
          animate={controls}
          custom={3}
        />
        <motion.path
          d="M7 8H3"
          variants={sparkleVariants}
          animate={controls}
          custom={4}
        />
        <motion.path
          d="M21 16h-4"
          variants={sparkleVariants}
          animate={controls}
          custom={5}
        />
        <motion.path
          d="M11 3H9"
          variants={sparkleVariants}
          animate={controls}
          custom={6}
        />
      </svg>
    </div>
  );
};

export { WandSparkles };
`,Gp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const pathVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (i: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: "easeInOut",
    },
  }),
};

interface WavesProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Waves = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: WavesProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
          variants={pathVariants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
          variants={pathVariants}
          animate={controls}
          custom={1}
        />
        <motion.path
          d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
          variants={pathVariants}
          animate={controls}
          custom={2}
        />
      </svg>
    </div>
  );
};

export { Waves };
`,Bp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const pathVariants: Variants = {
  normal: {
    opacity: 1,
    scale: 1,
  },
  animate: (i: number) => ({
    opacity: [0.3, 1, 0.3],
    scale: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      delay: i * 0.2,
    },
  }),
};

interface WifiProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Wifi = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: WifiProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M12 20h.01"
          variants={pathVariants}
          animate={controls}
          custom={3}
        />
        <motion.path
          d="M2 8.82a15 15 0 0 1 20 0"
          variants={pathVariants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M5 12.859a10 10 0 0 1 14 0"
          variants={pathVariants}
          animate={controls}
          custom={1}
        />
        <motion.path
          d="M8.5 16.429a5 5 0 0 1 7 0"
          variants={pathVariants}
          animate={controls}
          custom={2}
        />
      </svg>
    </div>
  );
};

export { Wifi };
`,Tp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const pathVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (i: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: "easeInOut",
    },
  }),
};

interface WindProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Wind = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: WindProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M9.8 4.4A2 2 0 1 1 11 8H2"
          variants={pathVariants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M17.5 8a2.5 2.5 0 1 1 2 4H2"
          variants={pathVariants}
          animate={controls}
          custom={1}
        />
        <motion.path
          d="M12.8 19.6A2 2 0 1 0 14 16H2"
          variants={pathVariants}
          animate={controls}
          custom={2}
        />
      </svg>
    </div>
  );
};

export { Wind };
`,Hp=`"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const variants: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
    y: 0,
  },
  animate: {
    scale: [1, 1.04, 1],
    rotate: [0, -8, 8, -8, 0],
    y: [0, -2, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  },
};

interface WineProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Wine = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: WineProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={variants}
        animate={controls}
      >
        <path d="M8 22h8" />
        <path d="M7 10h10" />
        <path d="M12 15v7" />
        <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
      </motion.svg>
    </div>
  );
};

export { Wine };
`,et=Object.assign({"../components/icons/AArrowDown.tsx":wt,"../components/icons/AArrowUp.tsx":jt,"../components/icons/ALargeSmall.tsx":Lt,"../components/icons/Activity.tsx":At,"../components/icons/AirVent.tsx":Ot,"../components/icons/Airplay.tsx":Gt,"../components/icons/AlarmClock.tsx":zt,"../components/icons/AlarmClockCheck.tsx":Yt,"../components/icons/AlarmSmoke.tsx":Ft,"../components/icons/Album.tsx":Kt,"../components/icons/AlignCenter.tsx":Qt,"../components/icons/AlignCenterHorizontal.tsx":ee,"../components/icons/AlignCenterVertical.tsx":ie,"../components/icons/Anchor.tsx":le,"../components/icons/Angry.tsx":he,"../components/icons/Annoyed.tsx":xe,"../components/icons/Antenna.tsx":we,"../components/icons/Aperture.tsx":be,"../components/icons/AppWindowMac.tsx":Le,"../components/icons/Archive.tsx":Oe,"../components/icons/AtSign.tsx":Ee,"../components/icons/Atom.tsx":He,"../components/icons/AudioLines.tsx":Re,"../components/icons/AudioWaveform.tsx":Xe,"../components/icons/BadgeAlert.tsx":Ze,"../components/icons/BadgeCheck.tsx":Qe,"../components/icons/BadgeDollarSign.tsx":oo,"../components/icons/BatteryFull.tsx":io,"../components/icons/BellRing.tsx":lo,"../components/icons/Bike.tsx":po,"../components/icons/Blend.tsx":uo,"../components/icons/Blocks.tsx":xo,"../components/icons/BluetoothSearching.tsx":_o,"../components/icons/Bold.tsx":bo,"../components/icons/Bolt.tsx":So,"../components/icons/Bomb.tsx":Oo,"../components/icons/BookMarked.tsx":Go,"../components/icons/Box.tsx":Ho,"../components/icons/Boxes.tsx":Ro,"../components/icons/Braces.tsx":Xo,"../components/icons/Brackets.tsx":Fo,"../components/icons/BringToFront.tsx":qo,"../components/icons/Bug.tsx":na,"../components/icons/Cable.tsx":ea,"../components/icons/Cake.tsx":aa,"../components/icons/Calendar1.tsx":la,"../components/icons/Cast.tsx":ma,"../components/icons/ChartColumn.tsx":ha,"../components/icons/ChartColumnBig.tsx":fa,"../components/icons/ChartGantt.tsx":xa,"../components/icons/ChartLine.tsx":ka,"../components/icons/ChartNoAxes.tsx":ba,"../components/icons/ChartPie.tsx":La,"../components/icons/Check.tsx":Aa,"../components/icons/CheckCheck.tsx":Oa,"../components/icons/ChevronDown.tsx":Ea,"../components/icons/ChevronFirst.tsx":Ba,"../components/icons/ChevronLast.tsx":Ha,"../components/icons/ChevronLeft.tsx":Ra,"../components/icons/ChevronRight.tsx":Xa,"../components/icons/ChevronUp.tsx":Fa,"../components/icons/ChevronsDown.tsx":qa,"../components/icons/ChevronsLeft.tsx":Ja,"../components/icons/ChevronsRight.tsx":ni,"../components/icons/ChevronsUp.tsx":ei,"../components/icons/ChevronsUpDown.tsx":ai,"../components/icons/Chrome.tsx":ri,"../components/icons/CircleChevronDown.tsx":mi,"../components/icons/CircleChevronLeft.tsx":hi,"../components/icons/CircleChevronRight.tsx":gi,"../components/icons/CircleChevronUp.tsx":yi,"../components/icons/CircleDashed.tsx":ji,"../components/icons/CircleDotDashed.tsx":Li,"../components/icons/CircleFadingArrowUp.tsx":Ai,"../components/icons/CircleHelp.tsx":Ii,"../components/icons/Clapperboard.tsx":Bi,"../components/icons/ClipboardCopy.tsx":zi,"../components/icons/Clock8.tsx":$i,"../components/icons/CloudDownload.tsx":Xi,"../components/icons/CloudDrizzle.tsx":Zi,"../components/icons/Code.tsx":Ki,"../components/icons/Codesandbox.tsx":ns,"../components/icons/Compass.tsx":as,"../components/icons/Copy.tsx":ss,"../components/icons/Cpu.tsx":ls,"../components/icons/Crop.tsx":ms,"../components/icons/Delete.tsx":hs,"../components/icons/Dice6.tsx":vs,"../components/icons/Disc3.tsx":_s,"../components/icons/Download.tsx":js,"../components/icons/Earth.tsx":Vs,"../components/icons/Expand.tsx":Ss,"../components/icons/Fan.tsx":Os,"../components/icons/FileChartColumn.tsx":Es,"../components/icons/FileChartPie.tsx":Ts,"../components/icons/FileStack.tsx":Rs,"../components/icons/Flame.tsx":Xs,"../components/icons/FlameKindling.tsx":Ns,"../components/icons/Folders.tsx":Ks,"../components/icons/Globe.tsx":nr,"../components/icons/Grape.tsx":or,"../components/icons/Grip.tsx":sr,"../components/icons/Group.tsx":mr,"../components/icons/HardDriveDownload.tsx":hr,"../components/icons/HeartHandshake.tsx":gr,"../components/icons/Heater.tsx":yr,"../components/icons/IterationCcw.tsx":kr,"../components/icons/IterationCw.tsx":Mr,"../components/icons/Layers.tsx":Sr,"../components/icons/LayoutGrid.tsx":Ar,"../components/icons/Link2.tsx":Or,"../components/icons/Linkedin.tsx":Pr,"../components/icons/LoaderPinwheel.tsx":Tr,"../components/icons/Magnet.tsx":Dr,"../components/icons/Martini.tsx":Yr,"../components/icons/Maximize2.tsx":Ur,"../components/icons/Music.tsx":Zr,"../components/icons/Network.tsx":Kr,"../components/icons/Nfc.tsx":Qr,"../components/icons/Origami.tsx":el,"../components/icons/PackageOpen.tsx":il,"../components/icons/Paperclip.tsx":cl,"../components/icons/PartyPopper.tsx":pl,"../components/icons/Percent.tsx":ul,"../components/icons/Plane.tsx":vl,"../components/icons/Podcast.tsx":wl,"../components/icons/Rocket.tsx":bl,"../components/icons/Salad.tsx":Ll,"../components/icons/ScanHeart.tsx":Al,"../components/icons/ScanText.tsx":Ol,"../components/icons/Shell.tsx":Gl,"../components/icons/Slack.tsx":Tl,"../components/icons/SlidersVertical.tsx":zl,"../components/icons/SmartphoneNfc.tsx":Rl,"../components/icons/Sparkles.tsx":Xl,"../components/icons/SprayCan.tsx":Fl,"../components/icons/Squirrel.tsx":ql,"../components/icons/SwatchBook.tsx":Jl,"../components/icons/TestTubes.tsx":ec,"../components/icons/ThermometerSnowflake.tsx":rc,"../components/icons/ThumbsDown.tsx":mc,"../components/icons/ThumbsUp.tsx":hc,"../components/icons/ToggleLeft.tsx":gc,"../components/icons/Trees.tsx":yc,"../components/icons/Undo.tsx":jc,"../components/icons/Ungroup.tsx":Lc,"../components/icons/User.tsx":Wc,"../components/icons/Users.tsx":Ic,"../components/icons/Wand.tsx":Gc,"../components/icons/WandSparkles.tsx":Tc,"../components/icons/Waves.tsx":zc,"../components/icons/Wifi.tsx":Rc,"../components/icons/Wind.tsx":Yc,"../components/icons/Wine.tsx":Nc}),zp=Object.assign({"../components/icons/AArrowDown.tsx":Fc,"../components/icons/AArrowUp.tsx":Zc,"../components/icons/ALargeSmall.tsx":qc,"../components/icons/Activity.tsx":Kc,"../components/icons/AirVent.tsx":Jc,"../components/icons/Airplay.tsx":Qc,"../components/icons/AlarmClock.tsx":nm,"../components/icons/AlarmClockCheck.tsx":tm,"../components/icons/AlarmSmoke.tsx":em,"../components/icons/Album.tsx":om,"../components/icons/AlignCenter.tsx":am,"../components/icons/AlignCenterHorizontal.tsx":im,"../components/icons/AlignCenterVertical.tsx":sm,"../components/icons/Anchor.tsx":rm,"../components/icons/Angry.tsx":lm,"../components/icons/Annoyed.tsx":cm,"../components/icons/Antenna.tsx":mm,"../components/icons/Aperture.tsx":pm,"../components/icons/AppWindowMac.tsx":dm,"../components/icons/Archive.tsx":hm,"../components/icons/AtSign.tsx":um,"../components/icons/Atom.tsx":fm,"../components/icons/AudioLines.tsx":gm,"../components/icons/AudioWaveform.tsx":vm,"../components/icons/BadgeAlert.tsx":xm,"../components/icons/BadgeCheck.tsx":ym,"../components/icons/BadgeDollarSign.tsx":wm,"../components/icons/BatteryFull.tsx":_m,"../components/icons/BellRing.tsx":km,"../components/icons/Bike.tsx":jm,"../components/icons/Blend.tsx":bm,"../components/icons/Blocks.tsx":Mm,"../components/icons/BluetoothSearching.tsx":Vm,"../components/icons/Bold.tsx":Lm,"../components/icons/Bolt.tsx":Sm,"../components/icons/Bomb.tsx":Cm,"../components/icons/BookMarked.tsx":Am,"../components/icons/Box.tsx":Wm,"../components/icons/Boxes.tsx":Om,"../components/icons/Braces.tsx":Im,"../components/icons/Brackets.tsx":Pm,"../components/icons/BringToFront.tsx":Em,"../components/icons/Bug.tsx":Gm,"../components/icons/Cable.tsx":Bm,"../components/icons/Cake.tsx":Tm,"../components/icons/Calendar1.tsx":Hm,"../components/icons/Cast.tsx":zm,"../components/icons/ChartColumn.tsx":Dm,"../components/icons/ChartColumnBig.tsx":Rm,"../components/icons/ChartGantt.tsx":$m,"../components/icons/ChartLine.tsx":Ym,"../components/icons/ChartNoAxes.tsx":Xm,"../components/icons/ChartPie.tsx":Um,"../components/icons/Check.tsx":Nm,"../components/icons/CheckCheck.tsx":Fm,"../components/icons/ChevronDown.tsx":Zm,"../components/icons/ChevronFirst.tsx":qm,"../components/icons/ChevronLast.tsx":Km,"../components/icons/ChevronLeft.tsx":Jm,"../components/icons/ChevronRight.tsx":Qm,"../components/icons/ChevronUp.tsx":n0,"../components/icons/ChevronsDown.tsx":t0,"../components/icons/ChevronsLeft.tsx":e0,"../components/icons/ChevronsRight.tsx":o0,"../components/icons/ChevronsUp.tsx":a0,"../components/icons/ChevronsUpDown.tsx":i0,"../components/icons/Chrome.tsx":s0,"../components/icons/CircleChevronDown.tsx":r0,"../components/icons/CircleChevronLeft.tsx":l0,"../components/icons/CircleChevronRight.tsx":c0,"../components/icons/CircleChevronUp.tsx":m0,"../components/icons/CircleDashed.tsx":p0,"../components/icons/CircleDotDashed.tsx":d0,"../components/icons/CircleFadingArrowUp.tsx":h0,"../components/icons/CircleHelp.tsx":u0,"../components/icons/Clapperboard.tsx":f0,"../components/icons/ClipboardCopy.tsx":g0,"../components/icons/Clock8.tsx":v0,"../components/icons/CloudDownload.tsx":x0,"../components/icons/CloudDrizzle.tsx":y0,"../components/icons/Code.tsx":w0,"../components/icons/Codesandbox.tsx":_0,"../components/icons/Compass.tsx":k0,"../components/icons/Copy.tsx":j0,"../components/icons/Cpu.tsx":b0,"../components/icons/Crop.tsx":M0,"../components/icons/Delete.tsx":V0,"../components/icons/Dice6.tsx":L0,"../components/icons/Disc3.tsx":S0,"../components/icons/Download.tsx":C0,"../components/icons/Earth.tsx":A0,"../components/icons/Expand.tsx":W0,"../components/icons/Fan.tsx":O0,"../components/icons/FileChartColumn.tsx":I0,"../components/icons/FileChartPie.tsx":P0,"../components/icons/FileStack.tsx":E0,"../components/icons/Flame.tsx":G0,"../components/icons/FlameKindling.tsx":B0,"../components/icons/Folders.tsx":T0,"../components/icons/Globe.tsx":H0,"../components/icons/Grape.tsx":z0,"../components/icons/Grip.tsx":D0,"../components/icons/Group.tsx":R0,"../components/icons/HardDriveDownload.tsx":$0,"../components/icons/HeartHandshake.tsx":Y0,"../components/icons/Heater.tsx":X0,"../components/icons/IterationCcw.tsx":U0,"../components/icons/IterationCw.tsx":N0,"../components/icons/Layers.tsx":F0,"../components/icons/LayoutGrid.tsx":Z0,"../components/icons/Link2.tsx":q0,"../components/icons/Linkedin.tsx":K0,"../components/icons/LoaderPinwheel.tsx":J0,"../components/icons/Magnet.tsx":Q0,"../components/icons/Martini.tsx":np,"../components/icons/Maximize2.tsx":tp,"../components/icons/Music.tsx":ep,"../components/icons/Network.tsx":op,"../components/icons/Nfc.tsx":ap,"../components/icons/Origami.tsx":ip,"../components/icons/PackageOpen.tsx":sp,"../components/icons/Paperclip.tsx":rp,"../components/icons/PartyPopper.tsx":lp,"../components/icons/Percent.tsx":cp,"../components/icons/Plane.tsx":mp,"../components/icons/Podcast.tsx":pp,"../components/icons/Rocket.tsx":dp,"../components/icons/Salad.tsx":hp,"../components/icons/ScanHeart.tsx":up,"../components/icons/ScanText.tsx":fp,"../components/icons/Shell.tsx":gp,"../components/icons/Slack.tsx":vp,"../components/icons/SlidersVertical.tsx":xp,"../components/icons/SmartphoneNfc.tsx":yp,"../components/icons/Sparkles.tsx":wp,"../components/icons/SprayCan.tsx":_p,"../components/icons/Squirrel.tsx":kp,"../components/icons/SwatchBook.tsx":jp,"../components/icons/TestTubes.tsx":bp,"../components/icons/ThermometerSnowflake.tsx":Mp,"../components/icons/ThumbsDown.tsx":Vp,"../components/icons/ThumbsUp.tsx":Lp,"../components/icons/ToggleLeft.tsx":Sp,"../components/icons/Trees.tsx":Cp,"../components/icons/Undo.tsx":Ap,"../components/icons/Ungroup.tsx":Wp,"../components/icons/User.tsx":Op,"../components/icons/Users.tsx":Ip,"../components/icons/Wand.tsx":Pp,"../components/icons/WandSparkles.tsx":Ep,"../components/icons/Waves.tsx":Gp,"../components/icons/Wifi.tsx":Bp,"../components/icons/Wind.tsx":Tp,"../components/icons/Wine.tsx":Hp}),ot=Object.keys(et).map(e=>{var t;const a=((t=e.split("/").pop())==null?void 0:t.replace(".tsx",""))||"",i=et[e],s=i[a]||i.default||Object.values(i)[0],r=zp[e];return{name:a,Component:s,rawCode:r}}).sort((e,a)=>e.name.localeCompare(a.name));function Up(){const[e,a]=A.useState(null),[i,s]=A.useState(""),r=(m,p)=>{navigator.clipboard.writeText(p),a(m),setTimeout(()=>a(null),2e3)},t=ot.filter(m=>m.name.toLowerCase().includes(i.toLowerCase()));return n.jsxs("div",{className:"icons-page",children:[n.jsx("header",{className:"icons-header fade-up",children:n.jsxs("div",{className:"icons-header__inner",children:[n.jsx("span",{className:"icons-header__badge",children:"Interactive Icons"}),n.jsx("h1",{className:"icons-header__title",children:"Animated SVG Icons"}),n.jsxs("p",{className:"icons-header__desc",children:["A collection of ",ot.length," beautiful, highly-customizable Framer Motion icons. Hover to interact, click to copy the full TypeScript source."]}),n.jsxs("div",{className:"icons-search-wrapper",children:[n.jsx(pt,{className:"icons-search-icon",size:18}),n.jsx("input",{type:"text",placeholder:"Search icons...",className:"icons-search",value:i,onChange:m=>s(m.target.value)})]})]})}),n.jsx("main",{className:"icons-main",children:n.jsxs("div",{className:"icons-grid fade-up fade-up-2",children:[t.map(({name:m,Component:p,rawCode:c})=>n.jsxs("div",{className:"icon-card",children:[n.jsx("div",{className:"icon-card__stage",children:p?n.jsx(p,{width:40,height:40,stroke:"#ffffff"}):n.jsx("div",{})}),n.jsxs("div",{className:"icon-card__footer",children:[n.jsx("span",{className:"icon-card__name",children:m}),n.jsx("button",{className:`icon-card__copy ${e===m?"is-copied":""}`,onClick:()=>r(m,c),title:`Copy ${m} source code`,children:e===m?n.jsx(dt,{size:14}):n.jsx(ht,{size:14})})]})]},m)),t.length===0&&n.jsxs("div",{className:"icons-empty",children:['No icons found matching "',i,'"']})]})})]})}export{Up as default};
