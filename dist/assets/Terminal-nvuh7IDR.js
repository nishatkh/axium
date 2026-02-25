import{a as _,j as e}from"./index-D9fbQM-Y.js";import{c as t}from"./createLucideIcon-KExIQmmt.js";import{S as c}from"./shield-DyR6qalQ.js";import{Z as n}from"./zap-YIrqDWG0.js";import{L as o}from"./lock-CsW0nF1E.js";import{C as x}from"./cpu-ONG2l_g0.js";import{C as d}from"./chevron-right-AfAbpj2O.js";import{B as p}from"./box-CTR-Sz0x.js";/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],h=t("binary",m);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],b=t("database",N);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],g=t("terminal",E);function O(){const[i,l]=_.useState(""),r="AUTHENTICATED_SESSION_0x82... INITIALIZING VORTEX_DEFENSE_CLOUD...";return _.useEffect(()=>{let s=0;const a=setInterval(()=>{l(r.slice(0,s)),s++,s>r.length&&clearInterval(a)},50);return()=>clearInterval(a)},[]),e.jsxs("div",{className:"terminal-root bg-[#0A0A0A] text-[#00FF41] min-h-screen font-mono overflow-x-hidden selection:bg-[#00FF41] selection:text-black",children:[e.jsx("style",{children:`
                .terminal-root {
                    --accent: #00FF41;
                    --glow: rgba(0, 255, 65, 0.2);
                    --border: 1px solid rgba(0, 255, 65, 0.3);
                    --crt-scanline: linear-gradient(to bottom, transparent font-size: 50%, rgba(0, 0, 0, 0.1) 50%);
                }
                .terminal-root .crt::before {
                    content: " ";
                    display: block;
                    position: fixed;
                    top: 0; left: 0; bottom: 0; right: 0;
                    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), 
                                linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03));
                    z-index: 100;
                    background-size: 100% 4px, 6px 100%;
                    pointer-events: none;
                }
                .terminal-root .crt::after {
                    content: " ";
                    display: block;
                    position: fixed;
                    top: 0; left: 0; bottom: 0; right: 0;
                    background: rgba(18, 16, 16, 0.05);
                    opacity: 0;
                    z-index: 100;
                    pointer-events: none;
                    animation: flicker 0.15s infinite;
                }
                @keyframes flicker {
                    0% { opacity: 0.27861; } 5% { opacity: 0.34769; } 
                    10% { opacity: 0.23604; } 15% { opacity: 0.90626; }
                    20% { opacity: 0.18128; } 25% { opacity: 0.83891; }
                    30% { opacity: 0.65583; } 35% { opacity: 0.57807; }
                    40% { opacity: 0.26559; } 45% { opacity: 0.84693; }
                    50% { opacity: 0.96019; } 55% { opacity: 0.08523; }
                    60% { opacity: 0.71056; } 65% { opacity: 0.73437; }
                    70% { opacity: 0.28574; } 75% { opacity: 0.96387; }
                    80% { opacity: 0.22679; } 85% { opacity: 0.57148; }
                    90% { opacity: 0.82983; } 95% { opacity: 0.43479; }
                    100% { opacity: 0.35123; }
                }
                .terminal-root .btn-terminal {
                    border: 1px solid var(--accent);
                    background: transparent;
                    color: var(--accent);
                    padding: 10px 20px;
                    text-transform: uppercase;
                    transition: all 0.2s ease;
                    cursor: pointer;
                    box-shadow: 0 0 10px var(--glow);
                }
                .terminal-root .btn-terminal:hover {
                    background: var(--accent);
                    color: black;
                    box-shadow: 0 0 25px var(--accent);
                }
                .terminal-root .panel {
                    border: var(--border);
                    background: rgba(0, 40, 0, 0.05);
                    padding: 20px;
                    position: relative;
                }
                .terminal-root .panel::before {
                    content: "STATUS_OK";
                    position: absolute;
                    top: -10px; right: 20px;
                    background: #0A0A0A;
                    padding: 0 10px;
                    font-size: 10px;
                }
            `}),e.jsxs("div",{className:"crt",children:[e.jsxs("header",{className:"p-8 border-b border-[#00FF41]/30 flex justify-between items-center bg-[#070707]",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(g,{className:"animate-pulse",size:24}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h1",{className:"text-xl font-bold tracking-widest uppercase",children:"Vortex Defense"}),e.jsx("span",{className:"text-[10px] opacity-60",children:"KERNEL_VER_10.2.0-STABLE"})]})]}),e.jsxs("div",{className:"hidden md:flex gap-10 text-xs",children:[e.jsx("span",{className:"hover:bg-[#00FF41] hover:text-black px-2 cursor-pointer transition-colors",children:"[ NETWORK ]"}),e.jsx("span",{className:"hover:bg-[#00FF41] hover:text-black px-2 cursor-pointer transition-colors",children:"[ SECURITY ]"}),e.jsx("span",{className:"hover:bg-[#00FF41] hover:text-black px-2 cursor-pointer transition-colors",children:"[ STORAGE ]"}),e.jsx("span",{className:"hover:bg-[#00FF41] hover:text-black px-2 cursor-pointer transition-colors",children:"[ MANIFEST ]"})]}),e.jsxs("div",{className:"flex items-center gap-4 text-xs",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-[#00FF41] animate-ping"}),"UPTIME: 14:02:44"]})]}),e.jsx("section",{className:"p-12 md:p-24 grid grid-cols-1 md:grid-cols-12 gap-16",children:e.jsxs("div",{className:"md:col-span-12",children:[e.jsxs("div",{className:"text-sm opacity-60 mb-8",children:[i,e.jsx("span",{className:"animate-bounce",children:"_"})]}),e.jsxs("h2",{className:"text-[10vw] font-black tracking-tighter leading-none mb-12",children:["DEFENSE_GRADE",e.jsx("br",{}),"CLOUD_OS"]}),e.jsx("pre",{className:"text-[8px] md:text-[10px] leading-none mb-12 opacity-80 text-[#008F11]",children:`   __________________________________________________________________________
  /                                                                          \\
 |    __________________________________________________________________    |
 |   |                                                                  |   |
 |   |   VORTEX CORE: ACTIVE                                            |   |
 |   |   THREAT REDUCTION: 99.98%                                       |   |
 |   |   LATENCY: 0.04ms                                                |   |
 |   |   ENCRYPTION: QUANTUM_ENABLED                                    |   |
 |   |__________________________________________________________________|   |
 |                                                                          |
  \\__________________________________________________________________________/`}),e.jsxs("div",{className:"flex flex-wrap gap-6",children:[e.jsx("button",{className:"btn-terminal",children:"Initialize Deployment"}),e.jsxs("button",{className:"border border-[#00FF41]/30 p-2 text-xs flex items-center gap-2 hover:bg-[#00FF41]/10",children:[e.jsx(h,{size:14})," View Kernel Source"]})]})]})}),e.jsx("section",{className:"px-12 md:px-24 py-12 grid grid-cols-1 md:grid-cols-3 gap-8",children:[{icon:e.jsx(c,{}),label:"HARDWARE_ENCLAVE",val:"SECURE"},{icon:e.jsx(n,{}),label:"THROUGHPUT_EFF",val:"942GB/S"},{icon:e.jsx(o,{}),label:"ROOT_ACCESS",val:"ENCRYPTED"}].map((s,a)=>e.jsxs("div",{className:"panel flex items-center gap-6 group hover:bg-[#00FF41]/5 transition-colors cursor-crosshair",children:[e.jsx("div",{className:"text-3xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all",children:s.icon}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[10px] opacity-40 mb-1",children:s.label}),e.jsx("div",{className:"text-xl font-bold tracking-widest",children:s.val})]})]},a))}),e.jsx("section",{className:"px-12 md:px-24 py-20",children:e.jsxs("div",{className:"panel bg-black/40 min-h-[400px]",children:[e.jsxs("div",{className:"flex justify-between border-b border-[#00FF41]/20 pb-4 mb-6",children:[e.jsx("span",{className:"text-xs uppercase font-bold",children:"[ SYSTEM_LOGS / FEB_24 ]"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-red-500/50"}),e.jsx("div",{className:"w-2 h-2 rounded-full bg-yellow-500/50"}),e.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500/50"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2 font-mono text-xs opacity-80 overflow-hidden h-[300px]",children:[e.jsx("div",{className:"text-[#008F11]",children:"[ 04:22:01 ] INBOUND_CONNECTION_ESTABLISHED: 192.168.0.1"}),e.jsx("div",{className:"text-[#008F11]",children:"[ 04:22:04 ] AUTHENTICATION_SUCCESS: USER_ADMIN_VORTEX"}),e.jsx("div",{className:"text-[#00FF41]",children:"[ 04:22:08 ] LOADING_RESOURCES: [ ########## ] 100%"}),e.jsx("div",{className:"text-yellow-500",children:"[ 04:22:12 ] WARN: RESOURCE_LEAK_IN_MODULE_KBN"}),e.jsx("div",{className:"text-[#008F11]",children:"[ 04:22:15 ] INITIALIZING_QUANTUM_HANDSHAKE..."}),e.jsx("div",{className:"text-[#008F11]",children:"[ 04:22:18 ] SHIELD_PROTOCOLS_ENGAGED"}),e.jsx("div",{className:"text-[#008F11]",children:"[ 04:22:20 ] STANDBY_MODE_DISENGAGED"}),e.jsx("div",{className:"text-red-500",children:"[ 04:22:24 ] ERR: MALICIOUS_PACKET_DETECTED_AND_DROPPED"}),e.jsx("div",{className:"text-[#008F11]",children:"[ 04:22:28 ] LOGGING_SESSION_METADATA_TO_DB04"}),e.jsx("div",{className:"text-white/20",children:"... system scanning ..."})]}),e.jsxs("div",{className:"mt-8 pt-6 border-t border-[#00FF41]/10 flex justify-between items-center",children:[e.jsxs("div",{className:"text-xs flex items-center gap-4",children:[e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(b,{size:12})," DB_ACTIVE"]}),e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(x,{size:12})," CORE_94%"]})]}),e.jsxs("div",{className:"flex items-center gap-2 text-xs",children:["EXPORT_LOGS ",e.jsx(d,{size:14,className:"animate-bounce"})]})]})]})}),e.jsxs("footer",{className:"p-12 md:p-24 border-t border-[#00FF41]/30 bg-[#050505]",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-16",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsxs("div",{className:"text-3xl font-black mb-6 tracking-widest uppercase flex items-center gap-4",children:[e.jsx(p,{className:"text-[#00FF41]"})," VORTEX.SYSTEMS"]}),e.jsx("p",{className:"text-sm opacity-50 max-w-sm mb-12",children:"THE WORLD'S ONLY TRUE QUANTUM-HARDENED CLOUD INFRASTRUCTURE. BUILT FOR THE ERA OF POST-SILICON SURVEILLANCE."})]}),e.jsxs("div",{className:"flex flex-col gap-4 text-xs",children:[e.jsx("h4",{className:"font-bold opacity-30",children:"[ COMMANDS ]"}),e.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"/deploy"}),e.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"/scan"}),e.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"/secure"}),e.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"/reboot"})]}),e.jsxs("div",{className:"flex flex-col gap-4 text-xs",children:[e.jsx("h4",{className:"font-bold opacity-30",children:"[ NODES ]"}),e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#00FF41]"})," US_EAST_01"]}),e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#00FF41]"})," EU_WEST_04"]}),e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-red-500"})," ASIA_SOUTH_02 (OFFLINE)"]}),e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#00FF41]"})," GLOBAL_CORE_00"]})]})]}),e.jsxs("div",{className:"mt-24 pt-12 border-t border-[#00FF41]/10 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] opacity-40",children:[e.jsx("div",{children:"© 2024 VORTEX DEFENSE SYSTEMS. NO RIGHTS RESERVED. CODE IS FREE."}),e.jsxs("div",{className:"flex gap-8 italic",children:[e.jsx("span",{children:"REDACTED_PROTOCOL_V4"}),e.jsx("span",{children:"OPERATOR: MNML_SYS"})]})]})]})]})]})}export{O as default};
