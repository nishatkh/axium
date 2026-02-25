import{a as R,u as F,j as d}from"./index-D9fbQM-Y.js";import{S as G,D as N,E as U}from"./DetailPage-PUk-Ud27.js";import"./ShineButton-D3FiTFtl.js";function W(c,o={}){const T=R.useRef(null);return R.useEffect(()=>{const f=T.current,r=c.current;if(!f||!r)return;const e=f.getContext("2d");if(!e)return;const n=o.gridSize??40,t=o.beamCount??8,P=o.extraBeamCount??3,a=r.getBoundingClientRect(),h=window.devicePixelRatio||1;f.width=a.width*h,f.height=a.height*h,f.style.width=a.width+"px",f.style.height=a.height+"px",e.scale(h,h);const E=Math.floor(a.width/n),g=Math.floor(a.height/n),v=document.createElement("canvas");v.width=f.width,v.height=f.height;const p=v.getContext("2d");p.scale(h,h),p.strokeStyle="#1a1a1a",p.lineWidth=1,p.beginPath();for(let i=0;i<=a.width;i+=n)p.moveTo(i,0),p.lineTo(i,a.height);for(let i=0;i<=a.height;i+=n)p.moveTo(0,i),p.lineTo(a.width,i);p.stroke();const A=[];for(let i=0;i<t;i++)A.push({pos:Math.floor(Math.random()*(Math.random()>.5?E:g))*n,dir:Math.random()>.5?"x":"y",offset:Math.random()*Math.max(a.width,a.height),speed:.8+Math.random()*1.5,thickness:3});for(let i=0;i<P;i++)A.push({pos:Math.floor(Math.random()*(Math.random()>.5?E:g))*n,dir:Math.random()>.5?"x":"y",offset:Math.random()*Math.max(a.width,a.height),speed:.4+Math.random()*.5,thickness:2});let L=0,S=0,B=!1,k=Date.now();const s=i=>{const M=r.getBoundingClientRect();L=i.clientX-M.left,S=i.clientY-M.top,B=!0,k=Date.now()},y=()=>{B=!1};r.addEventListener("mousemove",s),r.addEventListener("mouseleave",y);let w;const u="rgba(0, 180, 255, 0.8)",m=()=>{e.clearRect(0,0,a.width,a.height),e.drawImage(v,0,0,a.width,a.height);const i=Date.now()-k>2e3,M=i?1.15:1;if(A.forEach(l=>{e.strokeStyle=u,e.lineWidth=l.thickness,e.shadowBlur=50,e.shadowColor=u,e.beginPath();const b=n*1.5;if(l.dir==="x"){const x=-b+l.offset%(a.width+b);e.moveTo(x,l.pos),e.lineTo(x+b,l.pos),l.offset+=l.speed*M,l.offset>a.width+b&&(l.offset=0)}else{const x=-b+l.offset%(a.height+b);e.moveTo(l.pos,x),e.lineTo(l.pos,x+b),l.offset+=l.speed*M,l.offset>a.height+b&&(l.offset=0)}e.stroke()}),B&&!i){const l=Math.floor(L/n)*n,b=Math.floor(S/n)*n;e.shadowBlur=150,e.shadowColor=u,e.strokeStyle=u,e.lineWidth=9,e.beginPath(),e.rect(l,b,n,n),e.stroke(),e.lineWidth=4.5,e.shadowBlur=75;for(let x=-1;x<=1;x++)for(let C=-1;C<=1;C++){if(!x&&!C)continue;const _=l+x*n,D=b+C*n;_>=0&&_<a.width&&D>=0&&D<a.height&&(e.beginPath(),e.rect(_,D,n,n),e.stroke())}e.lineWidth=2.25,e.shadowBlur=37;for(let x=-2;x<=2;x++)for(let C=-2;C<=2;C++){if(Math.abs(x)<=1&&Math.abs(C)<=1)continue;const _=l+x*n,D=b+C*n;_>=0&&_<a.width&&D>=0&&D<a.height&&(e.beginPath(),e.rect(_,D,n,n),e.stroke())}}e.shadowBlur=0,w=requestAnimationFrame(m)};return m(),()=>{cancelAnimationFrame(w),r.removeEventListener("mousemove",s),r.removeEventListener("mouseleave",y)}},[c,o.gridSize,o.beamCount,o.extraBeamCount]),T}function j(c,o,T=!1){const f=R.useRef(null),r=R.useRef({x:0,y:0});return R.useEffect(()=>{const e=f.current,n=c.current;if(!e||!n)return;const t=e.getContext("webgl");if(!t)return;const P="attribute vec4 a_position; void main() { gl_Position = a_position; }";function a(u,m){const i=t.createShader(u);return i?(t.shaderSource(i,m),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)?i:(console.error(t.getShaderInfoLog(i)),t.deleteShader(i),null)):null}const h=a(t.VERTEX_SHADER,P),E=a(t.FRAGMENT_SHADER,o.fragmentShader);if(!h||!E)return;const g=t.createProgram();if(t.attachShader(g,h),t.attachShader(g,E),t.linkProgram(g),!t.getProgramParameter(g,t.LINK_STATUS))return;t.useProgram(g);const v=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,v),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const p=t.getAttribLocation(g,"a_position");t.enableVertexAttribArray(p),t.vertexAttribPointer(p,2,t.FLOAT,!1,0,0);const A=t.getUniformLocation(g,"iResolution"),L=t.getUniformLocation(g,"iTime"),S=t.getUniformLocation(g,"iMouse"),B=Date.now(),k=u=>{const m=n.getBoundingClientRect();r.current.x=u.clientX-m.left,r.current.y=m.height-(u.clientY-m.top)},s=()=>{r.current.x=0,r.current.y=0};T&&(n.addEventListener("mousemove",k),n.addEventListener("mouseleave",s));let y;const w=()=>{const u=n.clientWidth,m=n.clientHeight;e.width=u,e.height=m,t.viewport(0,0,u,m),A&&t.uniform2f(A,u,m),L&&t.uniform1f(L,(Date.now()-B)/1e3),S&&t.uniform2f(S,r.current.x,r.current.y),t.drawArrays(t.TRIANGLES,0,6),y=requestAnimationFrame(w)};return w(),()=>{cancelAnimationFrame(y),T&&(n.removeEventListener("mousemove",k),n.removeEventListener("mouseleave",s))}},[o.fragmentShader,T,c]),f}function q(c){const o=R.useRef(null);return R.useEffect(()=>{const T=o.current,f=c.current;if(!T||!f)return;const r=T.getContext("2d");if(!r)return;const e=50,n=3,t=.2,P=20,a=5,h=f.getBoundingClientRect();T.width=h.width,T.height=h.height;const E=Math.floor(h.width/e),g=Math.floor(h.height/e);let v=[],p=Date.now(),A=Array.from({length:a},()=>({x:Math.floor(Math.random()*E),y:Math.floor(Math.random()*g)})),L=A.map(s=>({...s}));const S=s=>{const y=f.getBoundingClientRect(),w=s.clientX-y.left,u=s.clientY-y.top;if(w<0||u<0||w>h.width||u>h.height)return;p=Date.now();const m=Math.floor(w/e),i=Math.floor(u/e),M=v[0];(!M||M.x!==m||M.y!==i)&&(v.unshift({x:m,y:i}),v.length>n&&v.pop())};f.addEventListener("mousemove",S);let B;const k=()=>{r.clearRect(0,0,h.width,h.height),r.strokeStyle="#1a1a1a",r.lineWidth=1;for(let s=0;s<=h.width;s+=e)r.beginPath(),r.moveTo(s,0),r.lineTo(s,h.height),r.stroke();for(let s=0;s<=h.height;s+=e)r.beginPath(),r.moveTo(0,s),r.lineTo(h.width,s),r.stroke();Date.now()-p>2e3&&L.forEach((s,y)=>{const w=A[y],u=w.x-s.x,m=w.y-s.y;Math.abs(u)<.01&&Math.abs(m)<.01?A[y]={x:Math.floor(Math.random()*E),y:Math.floor(Math.random()*g)}:(s.x+=u*t,s.y+=m*t);const i=Math.round(s.x),M=Math.round(s.y),l=v[0];(!l||l.x!==i||l.y!==M)&&(v.unshift({x:i,y:M}),v.length>n*a&&v.pop())}),v.forEach((s,y)=>{const u=`rgba(255, 255, 255, ${(1-y*(1/(n+1)))*.5})`;r.fillStyle=u,r.shadowColor=u,r.shadowBlur=P,r.fillRect(s.x*e,s.y*e,e,e)}),r.shadowBlur=0,B=requestAnimationFrame(k)};return k(),()=>{cancelAnimationFrame(B),f.removeEventListener("mousemove",S)}},[c]),o}const X=`
precision mediump float;
uniform vec2 iResolution;
uniform float iTime;

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    float time = iTime * 0.4;
    
    // Create organic movement
    vec2 p = uv * 2.0 - 1.0;
    p.x *= iResolution.x / iResolution.y;
    
    float wave = sin(p.x * 2.0 + time) * 0.5 + 0.5;
    wave += cos(p.y * 1.5 - time * 0.8) * 0.4;
    
    // Axium Palette: Deep Purples, Royal Blues, and Pure Black
    vec3 color1 = vec3(0.05, 0.02, 0.15); // Deep Night Purple
    vec3 color2 = vec3(0.1, 0.15, 0.4);  // Cyber Blue
    vec3 color3 = vec3(0.0, 0.0, 0.0);   // Void Black
    
    float mix1 = smoothstep(0.2, 0.8, wave + p.x * 0.5);
    float mix2 = smoothstep(0.4, 0.9, 1.0 - wave + p.y * 0.3);
    
    vec3 color = mix(color1, color2, mix1);
    color = mix(color, color3, mix2 * 0.7);
    
    // Add a very subtle vignette
    float vignette = 1.2 - length(p * 0.6);
    color *= clamp(vignette, 0.0, 1.0);
    
    gl_FragColor = vec4(color, 1.0);
}
`,H=`
precision mediump float;
uniform vec2 iResolution;
uniform float iTime;
#define TAU 6.28318530718
#define MAX_ITER 5
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  float time = iTime * 0.3 + 23.0;
  vec2 uv = fragCoord.xy / iResolution.xy;
  vec2 p = mod(uv * TAU, TAU) - 250.0;
  vec2 i = vec2(p);
  float c = 1.0;
  float inten = 0.005;
  for (int n = 0; n < MAX_ITER; n++) {
    float t = time * (1.0 - (3.0 / float(n + 1)));
    i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));
    c += 1.0 / length(vec2(p.x / (sin(i.x + t) / inten), p.y / (cos(i.y + t) / inten)));
  }
  c /= float(MAX_ITER);
  c = 1.17 - pow(c, 1.4);
  vec3 colour = vec3(pow(abs(c), 8.0));
  // Axium Refinement: Shift from Cyan to Deep Purple/Blue
  colour = clamp(colour + vec3(0.02, 0.01, 0.08), 0.0, 1.0);
  fragColor = vec4(colour, 1.0);
}
void main() { mainImage(gl_FragColor, gl_FragCoord.xy); }
`,Y=`
precision mediump float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec2 iMouse;
vec3 getGradientColor(vec2 uv, float time) {
  float speed = 1.2;
  vec2 c1 = vec2(0.5 + sin(time*speed*0.4)*0.4, 0.5 + cos(time*speed*0.5)*0.4);
  vec2 c2 = vec2(0.5 + cos(time*speed*0.6)*0.5, 0.5 + sin(time*speed*0.45)*0.5);
  vec2 c3 = vec2(0.5 + sin(time*speed*0.35)*0.45, 0.5 + cos(time*speed*0.55)*0.45);
  vec2 c4 = vec2(0.5 + cos(time*speed*0.5)*0.4, 0.5 + sin(time*speed*0.4)*0.4);
  vec2 c5 = vec2(0.5 + sin(time*speed*0.7)*0.35, 0.5 + cos(time*speed*0.6)*0.35);
  vec2 c6 = vec2(0.5 + cos(time*speed*0.45)*0.5, 0.5 + sin(time*speed*0.65)*0.5);
  float gradientRadius = 0.45;
  float i1 = 1.0 - smoothstep(0.0, gradientRadius, length(uv - c1));
  float i2 = 1.0 - smoothstep(0.0, gradientRadius, length(uv - c2));
  float i3 = 1.0 - smoothstep(0.0, gradientRadius, length(uv - c3));
  float i4 = 1.0 - smoothstep(0.0, gradientRadius, length(uv - c4));
  float i5 = 1.0 - smoothstep(0.0, gradientRadius, length(uv - c5));
  float i6 = 1.0 - smoothstep(0.0, gradientRadius, length(uv - c6));
  vec3 color1 = vec3(0.08, 0.04, 0.18); // Axium Deep Purple
  vec3 color2 = vec3(0.02, 0.1, 0.3);   // Axium Cyber Blue
  vec3 darkNavy = vec3(0.0, 0.0, 0.0);  // Void Black
  vec3 color = vec3(0.0);
  color += color1 * i1 * (0.55 + 0.45*sin(time*speed)) * 0.5;
  color += color2 * i2 * (0.55 + 0.45*cos(time*speed*1.2)) * 1.8;
  color += color1 * i3 * (0.55 + 0.45*sin(time*speed*0.8)) * 0.5;
  color += color2 * i4 * (0.55 + 0.45*cos(time*speed*1.3)) * 1.8;
  color += color1 * i5 * (0.55 + 0.45*sin(time*speed*1.1)) * 0.5;
  color += color2 * i6 * (0.55 + 0.45*cos(time*speed*0.9)) * 1.8;
  vec2 ruv1 = uv - 0.5;
  float a1 = time*speed*0.15;
  ruv1 = vec2(ruv1.x*cos(a1)-ruv1.y*sin(a1), ruv1.x*sin(a1)+ruv1.y*cos(a1)) + 0.5;
  float ri1 = 1.0 - smoothstep(0.0, 0.8, length(ruv1-0.5));
  color += mix(color1, color1, ri1)*0.45*0.5;
  vec2 ruv2 = uv - 0.5;
  float a2 = -time*speed*0.12;
  ruv2 = vec2(ruv2.x*cos(a2)-ruv2.y*sin(a2), ruv2.x*sin(a2)+ruv2.y*cos(a2)) + 0.5;
  float ri2 = 1.0 - smoothstep(0.0, 0.8, length(ruv2-0.5));
  color += mix(color2, color2, ri2)*0.4*1.8;
  color = clamp(color, vec3(0.0), vec3(1.0)) * 1.8;
  float lum = dot(color, vec3(0.299, 0.587, 0.114));
  color = mix(vec3(lum), color, 1.35);
  color = pow(color, vec3(0.92));
  float b = length(color);
  float mf = max(b*1.2, 0.15);
  color = mix(darkNavy, color, mf);
  if (b > 1.0) color = color * (1.0/b);
  return color;
}
float grain(vec2 uv, float time) {
  vec2 g = uv * iResolution * 0.5;
  return fract(sin(dot(g+time, vec2(12.9898, 78.233)))*43758.5453)*2.0-1.0;
}
void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  if (iMouse.x > 0.0) {
    vec2 mUv = iMouse / iResolution;
    float dist = length(uv - mUv);
    float ripple = sin(dist*20.0-iTime*3.0)*0.02*(1.0-smoothstep(0.0,0.3,dist));
    uv += vec2(ripple);
  }
  vec3 color = getGradientColor(uv, iTime);
  color += grain(uv, iTime) * 0.08;
  color = clamp(color, vec3(0.0), vec3(1.0));
  gl_FragColor = vec4(color, 1.0);
}
`,I=[{id:"beamgrid",title:"Beam Grid Background",desc:"Canvas-based grid with animated beams, interactive mouse highlights, and idle animation.",type:"beamgrid"},{id:"gradient",title:"Gradient Background",desc:"WebGL shader-based animated gradient with organic mesh movement and cyber-dark palette.",type:"gradient"},{id:"interactivegrid",title:"Interactive Grid",desc:"Canvas grid with mouse-reactive glow trail, idle wandering cells, and dark-mode styling.",type:"igrid"},{id:"reflect",title:"Reflect Background",desc:"WebGL caustic shader refined with deep Axium purple tones for a premium atmospheric effect.",type:"reflect"},{id:"liquid",title:"Liquid Surface",desc:"Liquid gradient with moving color centers and high-fidelity Axium dark aesthetic.",type:"liquid"}];function O(){const c=R.useRef(null),o=W(c);return d.jsx("div",{ref:c,style:{width:"100%",height:"100%",background:"#000000"},children:d.jsx("canvas",{ref:o,style:{position:"absolute",inset:0,width:"100%",height:"100%"}})})}function V(){const c=R.useRef(null),o=j(c,{fragmentShader:X});return d.jsx("div",{ref:c,style:{width:"100%",height:"100%",background:"#000000"},children:d.jsx("canvas",{ref:o,style:{position:"absolute",inset:0,width:"100%",height:"100%"}})})}function z(){const c=R.useRef(null),o=q(c);return d.jsx("div",{ref:c,style:{width:"100%",height:"100%",background:"#000000",cursor:"crosshair"},children:d.jsx("canvas",{ref:o,style:{position:"absolute",inset:0,width:"100%",height:"100%"}})})}function K(){const c=R.useRef(null),o=j(c,{fragmentShader:H});return d.jsx("div",{ref:c,style:{width:"100%",height:"100%",background:"#000000"},children:d.jsx("canvas",{ref:o,style:{position:"absolute",inset:0,width:"100%",height:"100%"}})})}function Q(){const c=R.useRef(null),o=j(c,{fragmentShader:Y},!0);return d.jsx("div",{ref:c,style:{width:"100%",height:"100%",background:"#000000",cursor:"none"},children:d.jsx("canvas",{ref:o,style:{position:"absolute",inset:0,width:"100%",height:"100%"}})})}function $({type:c}){switch(c){case"beamgrid":return d.jsx(O,{});case"gradient":return d.jsx(V,{});case"igrid":return d.jsx(z,{});case"reflect":return d.jsx(K,{});case"liquid":return d.jsx(Q,{});default:return null}}function te(){const c=F();return R.useEffect(()=>{if(c.hash){const o=document.getElementById(c.hash.slice(1));o&&setTimeout(()=>o.scrollIntoView({behavior:"smooth",block:"start"}),100)}},[c]),d.jsxs("div",{className:"detail",children:[d.jsx(G,{items:I.map(o=>({id:o.id,label:o.title}))}),d.jsx("main",{className:"detail__main",children:d.jsxs("div",{className:"detail__inner",children:[d.jsxs("header",{className:"detail__header fade-up",children:[d.jsx("h1",{className:"detail__title",children:"Backgrounds"}),d.jsx("p",{className:"detail__desc",children:"Premium animated background components — real WebGL shaders, interactive canvas grids, and liquid surfaces."})]}),I.map(o=>d.jsx(N,{id:o.id,title:o.title,description:o.desc,prompt:U[o.id]||"",children:d.jsx($,{type:o.type})},o.id))]})})]})}export{te as default};
