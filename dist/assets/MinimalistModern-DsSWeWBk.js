import{a as d,j as e,f as i}from"./index-D9fbQM-Y.js";import{Z as r}from"./zap-YIrqDWG0.js";import{A as l}from"./arrow-right-DMPLRBLR.js";import{c as a}from"./createLucideIcon-KExIQmmt.js";import{C as m}from"./cpu-ONG2l_g0.js";import{G as x}from"./globe-sa-aSVG5.js";import{B as h}from"./box-CTR-Sz0x.js";import{C as f}from"./check-ZG8Th-Qj.js";import{L as p}from"./layers-CxohszxS.js";/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],u=a("github",g);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],j=a("message-square",b);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],N=a("panels-top-left",v);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],o=a("play",w);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],F=a("twitter",y);function S(){return d.useEffect(()=>{const t=document.createElement("link");t.href="https://fonts.googleapis.com/css2?family=Calistoga&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",t.rel="stylesheet",document.head.appendChild(t)},[]),e.jsxs("div",{className:"modern-root bg-[#FAFAFA] text-[#0F172A] min-h-screen font-sans selection:bg-[#0052FF]/20 overflow-x-hidden",style:{fontFamily:'"Inter", sans-serif'},children:[e.jsx("style",{children:`
                @import url('https://fonts.googleapis.com/css2?family=Calistoga&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

                .modern-root {
                    --bg: #FAFAFA;
                    --fg: #0F172A;
                    --accent: #0052FF;
                    --accent-light: #4D7CFF;
                    --muted: #F1F5F9;
                    --muted-fg: #64748B;
                }

                .modern-root h1, .modern-root h2, .modern-root h3, .modern-root .serif {
                    font-family: 'Calistoga', serif;
                    line-height: 1.15;
                }

                .modern-root .mono {
                    font-family: 'JetBrains Mono', monospace;
                }

                /* Gradient Text */
                .modern-root .gradient-text {
                    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                /* Pulse Dot */
                .modern-root .pulse-dot {
                    width: 6px;
                    height: 6px;
                    background-color: var(--accent);
                    border-radius: 50%;
                    position: relative;
                }

                .modern-root .pulse-dot::after {
                    content: "";
                    position: absolute;
                    top: -4px;
                    left: -4px;
                    right: -4px;
                    bottom: -4px;
                    border: 1px solid var(--accent);
                    border-radius: 50%;
                    animation: pulse 2s cubic-bezier(0, 0.45, 0.45, 1) infinite;
                }

                @keyframes pulse {
                    0% { transform: scale(0.5); opacity: 1; }
                    100% { transform: scale(2.5); opacity: 0; }
                }

                /* Floating Animation */
                .modern-root .float-anim {
                    animation: float 5s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }

                /* Gradient Border */
                .modern-root .gradient-border {
                    position: relative;
                    background: white;
                    border-radius: 1rem;
                }

                .modern-root .gradient-border::before {
                    content: "";
                    position: absolute;
                    inset: -2px;
                    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%);
                    z-index: -1;
                    border-radius: 1.1rem;
                }

                /* Ghost Grid */
                .modern-root .ghost-grid {
                    background-image: radial-gradient(#E2E8F0 1px, transparent 1px);
                    background-size: 32px 32px;
                }

                /* Custom Button */
                .modern-root .btn-modern {
                    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%);
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 0.75rem;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 4px 14px rgba(0, 82, 255, 0.25);
                }

                .modern-root .btn-modern:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(0, 82, 255, 0.35);
                }
            `}),e.jsxs("nav",{className:"fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#FAFAFA]/80 backdrop-blur-md border-b border-slate-200",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-[#0052FF] to-[#4D7CFF] rounded-xl flex items-center justify-center text-white shadow-lg",children:e.jsx(r,{size:20,fill:"currentColor"})}),e.jsx("span",{className:"text-xl font-bold tracking-tight serif",children:"Streamline"})]}),e.jsxs("div",{className:"hidden md:flex items-center gap-10 text-sm font-medium text-slate-500",children:[e.jsx("a",{href:"#",className:"hover:text-[#0052FF] transition-colors",children:"Product"}),e.jsx("a",{href:"#",className:"hover:text-[#0052FF] transition-colors",children:"Ecosystem"}),e.jsx("a",{href:"#",className:"hover:text-[#0052FF] transition-colors",children:"Enterprise"}),e.jsx("a",{href:"#",className:"hover:text-[#0052FF] transition-colors",children:"Pricing"})]}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx("button",{className:"text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors",children:"Sign in"}),e.jsx("button",{className:"bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all",children:"Get Started"})]})]}),e.jsxs("section",{className:"pt-40 pb-32 px-8 overflow-hidden relative",children:[e.jsx("div",{className:"ghost-grid absolute inset-0 opacity-40 -z-10"}),e.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20",children:[e.jsxs("div",{className:"md:w-1/2 relative z-10",children:[e.jsxs("div",{className:"inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-10",children:[e.jsx("div",{className:"pulse-dot"}),e.jsx("span",{className:"mono text-[10px] uppercase tracking-[0.15em] font-bold text-slate-500",children:"v2.0 Now Platform Ready"})]}),e.jsxs("h1",{className:"text-6xl md:text-8xl mb-8 serif tracking-tight",children:["Build with ",e.jsx("br",{}),e.jsx("span",{className:"gradient-text italic",children:"Momentum."})]}),e.jsx("p",{className:"text-lg md:text-xl text-slate-500 max-w-lg mb-12 leading-relaxed",children:"A high-fidelity design system for scaling modern interfaces. Minimalist structure meets maximalist confidence in every interaction."}),e.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-6",children:[e.jsxs("button",{className:"btn-modern w-full sm:w-auto",children:["Start Deploying",e.jsx(l,{size:18})]}),e.jsxs("button",{className:"flex items-center gap-3 font-semibold text-slate-600 hover:text-slate-900 transition-colors group",children:[e.jsx("span",{className:"w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#0052FF] transition-colors",children:e.jsx(o,{size:14,fill:"currentColor",className:"ml-0.5"})}),"View Demo"]})]})]}),e.jsx("div",{className:"md:w-1/2 relative",children:e.jsxs("div",{className:"relative w-full aspect-square flex items-center justify-center",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#0052FF]/10 to-[#4D7CFF]/5 rounded-[4rem] blur-3xl -z-10"}),e.jsxs("div",{className:"float-anim w-full h-full relative flex items-center justify-center",children:[e.jsxs("div",{className:"absolute top-0 right-0 w-64 h-64 bg-slate-900 rounded-[3rem] rotate-12 flex items-center justify-center shadow-2xl p-10 overflow-hidden group",children:[e.jsx("div",{className:"absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0052FF]/20 to-transparent"}),e.jsx(m,{size:120,className:"text-white/20 group-hover:scale-110 transition-transform duration-700",strokeWidth:1}),e.jsxs("div",{className:"absolute top-6 left-6 flex gap-2",children:[e.jsx("div",{className:"w-12 h-1 bg-white/20 rounded-full"}),e.jsx("div",{className:"w-6 h-1 bg-white/20 rounded-full"})]})]}),e.jsxs("div",{className:"absolute bottom-10 left-0 w-80 h-48 bg-white rounded-3xl shadow-xl p-8 border border-slate-100 float-anim [animation-delay:-2.5s]",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#0052FF]",children:e.jsx(x,{size:24})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-bold",children:"Latency Optimization"}),e.jsx("div",{className:"text-[10px] text-slate-400 font-bold uppercase tracking-widest",children:"Active nodes"})]})]}),e.jsx("div",{className:"flex gap-2",children:Array.from({length:12}).map((t,s)=>e.jsx("div",{className:`h-2 rounded-full flex-1 ${s<8?"bg-[#0052FF]":"bg-slate-100"}`},s))})]}),e.jsx("div",{className:"absolute top-20 left-20 w-16 h-16 bg-[#0052FF] rounded-full shadow-[0_0_40px_rgba(0,82,255,0.4)] flex items-center justify-center text-white float-anim [animation-delay:-1s]",children:e.jsx(r,{size:20,fill:"currentColor"})})]})]})})]})]}),e.jsxs("section",{className:"py-32 px-8 bg-slate-900 text-white relative overflow-hidden",children:[e.jsx("div",{className:"ghost-grid absolute inset-0 opacity-[0.03] -z-0"}),e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-[#0052FF]/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"}),e.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[e.jsxs("div",{className:"text-center mb-24",children:[e.jsx("div",{className:"inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8",children:e.jsx("span",{className:"mono text-[10px] uppercase tracking-[0.15em] font-bold text-[#4D7CFF]",children:"Engineered for Performance"})}),e.jsxs("h2",{className:"text-5xl md:text-7xl serif tracking-tight mb-8",children:["Precision meets ",e.jsx("br",{}),e.jsx("span",{className:"gradient-text italic",children:"Confidence."})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-10",children:[{icon:e.jsx(N,{}),title:"Structural Clarity",desc:"Pre-defined patterns that prioritize hierarchy and visual flow across any device density."},{icon:e.jsx(h,{}),title:"Atomic Foundations",desc:"Every component is built on a rigid atomic system, ensuring perfect synchronization."},{icon:e.jsx(j,{}),title:"Dynamic Interaction",desc:"Buttery-smooth animations and meaningful micro-interactions that communicate state."}].map((t,s)=>e.jsxs("div",{className:"p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group overflow-hidden relative",children:[e.jsx("div",{className:"absolute -bottom-10 -right-10 text-white/5 group-hover:text-[#0052FF]/20 group-hover:scale-125 transition-all duration-700 pointer-events-none",children:i.cloneElement(t.icon,{size:160})}),e.jsx("div",{className:"w-14 h-14 rounded-2xl bg-[#0052FF] flex items-center justify-center mb-8 shadow-lg shadow-[#0052FF]/20",children:i.cloneElement(t.icon,{size:24})}),e.jsx("h3",{className:"text-2xl font-bold mb-4 serif tracking-tight group-hover:gradient-text transition-all",children:t.title}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:t.desc})]},s))})]})]}),e.jsx("section",{className:"py-44 px-8",children:e.jsx("div",{className:"max-w-7xl mx-auto",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-32 items-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"w-16 h-1 bg-[#0052FF] mb-12"}),e.jsxs("h2",{className:"text-5xl md:text-6xl serif mb-10 leading-tight",children:["Design that feels ",e.jsx("br",{}),e.jsx("span",{className:"italic",children:"as good"})," as it looks."]}),e.jsx("p",{className:"text-lg text-slate-500 mb-12 leading-relaxed",children:"We've obsessed over the details so you don't have to. From the exact weight of our focus rings to the acceleration curves of our drawer reveals."}),e.jsx("div",{className:"space-y-6",children:["Ultra-low bundle footprint","Accessible-first primitives","Developer-experience priority"].map((t,s)=>e.jsxs("div",{className:"flex items-center gap-4 text-slate-700 font-semibold italic",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[#0052FF]",children:e.jsx(f,{size:14})}),t]},s))}),e.jsxs("button",{className:"mt-16 text-[#0052FF] font-bold tracking-widest uppercase text-xs flex items-center gap-3 group",children:["View Full Archive",e.jsx(l,{size:16,className:"group-hover:translate-x-2 transition-transform"})]})]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"gradient-border p-1",children:e.jsxs("div",{className:"rounded-[0.9rem] overflow-hidden bg-slate-100 aspect-square relative group",children:[e.jsx("img",{src:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",alt:"Modern Code",className:"w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity",children:e.jsx("div",{className:"w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#0052FF] shadow-2xl scale-75 group-hover:scale-100 transition-transform",children:e.jsx(o,{size:24,fill:"currentColor",className:"ml-1"})})})]})}),e.jsx("div",{className:"absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#0052FF] to-[#4D7CFF] rounded-[2rem] -z-10 group-hover:rotate-12 transition-transform duration-1000"})]})]})})}),e.jsx("section",{className:"py-32 px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto text-center px-10 py-24 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden",children:[e.jsx("div",{className:"ghost-grid absolute inset-0 opacity-[0.03] -z-0"}),e.jsx("div",{className:"absolute -bottom-20 -left-20 w-80 h-80 bg-[#0052FF]/30 blur-[100px] rounded-full"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("h2",{className:"text-5xl md:text-7xl serif mb-8 tracking-tight",children:"Ready for a upgrade?"}),e.jsx("p",{className:"text-slate-400 max-w-xl mx-auto mb-14 text-lg",children:"Join over 2,000+ engineers building the tomorrow's most characterful interfaces."}),e.jsxs("div",{className:"flex flex-col sm:flex-row justify-center items-center gap-6",children:[e.jsx("button",{className:"btn-modern px-10",children:"Download Framework"}),e.jsx("button",{className:"bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-xl font-semibold transition-all",children:"Schedule Demo"})]})]})]})}),e.jsx("footer",{className:"pt-32 pb-12 px-8 border-t border-slate-200",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-20 mb-32",children:[e.jsxs("div",{className:"md:col-span-4",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-[#0052FF] to-[#4D7CFF] rounded-xl flex items-center justify-center text-white",children:e.jsx(r,{size:20,fill:"currentColor"})}),e.jsx("span",{className:"text-xl font-bold tracking-tight serif",children:"Streamline"})]}),e.jsx("p",{className:"text-slate-500 max-w-xs mb-10 leading-relaxed",children:"The ultimate design system for modern engineering teams who value clarity, confidence, and character."}),e.jsxs("div",{className:"flex gap-6 text-slate-400",children:[e.jsx("a",{href:"#",className:"hover:text-[#0052FF] transition-colors",children:e.jsx(F,{size:20})}),e.jsx("a",{href:"#",className:"hover:text-[#0052FF] transition-colors",children:e.jsx(u,{size:20})}),e.jsx("a",{href:"#",className:"hover:text-[#0052FF] transition-colors",children:e.jsx(p,{size:20})})]})]}),[{title:"Product",links:["Features","API Design","Security","Enterprise"]},{title:"Resources",links:["Documentation","Guides","Community","Academy"]},{title:"Company",links:["Our Story","Careers","Changelog","Support"]}].map((t,s)=>e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("h4",{className:"font-bold serif text-lg mb-8 tracking-tight",children:t.title}),e.jsx("ul",{className:"space-y-4",children:t.links.map((n,c)=>e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-slate-500 hover:text-[#0052FF] transition-colors font-medium",children:n})},c))})]},s))]}),e.jsxs("div",{className:"pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-slate-400",children:[e.jsx("p",{children:"© 2024 Streamline Inc. Built with absolute confidence."}),e.jsxs("div",{className:"flex gap-10",children:[e.jsx("a",{href:"#",className:"hover:text-slate-900 transition-colors",children:"Privacy"}),e.jsx("a",{href:"#",className:"hover:text-slate-900 transition-colors",children:"Terms"}),e.jsx("a",{href:"#",className:"hover:text-slate-900 transition-colors",children:"Cookies"})]})]})]})})]})}export{S as default};
