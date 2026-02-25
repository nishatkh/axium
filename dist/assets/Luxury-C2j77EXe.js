import{a as i,j as e}from"./index-D9fbQM-Y.js";import{M as r}from"./menu-D4VZ2zwe.js";import{S as l}from"./search-CmtBUHvp.js";import{c as t}from"./createLucideIcon-KExIQmmt.js";import{A as o}from"./arrow-right-DMPLRBLR.js";import{P as c}from"./plus-Cyil-s4K.js";/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],d=t("instagram",n);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M5 12h14",key:"1ays0h"}]],m=t("minus",x);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],p=t("shopping-bag",h);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],f=t("star",u);function w(){return i.useEffect(()=>{const s=document.createElement("link");s.href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap",s.rel="stylesheet",document.head.appendChild(s)},[]),e.jsxs("div",{className:"luxury-root bg-[#F9F8F6] text-[#1A1A1A] min-h-screen font-sans selection:bg-[#D4AF37] selection:text-white overflow-x-hidden",style:{fontFamily:'"Inter", sans-serif'},children:[e.jsx("style",{children:`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap');

                .luxury-root {
                    --alabaster: #F9F8F6;
                    --charcoal: #1A1A1A;
                    --gold: #D4AF37;
                    --taupe: #EBE5DE;
                    --grey: #6C6863;
                }

                .luxury-root h1, .luxury-root h2, .luxury-root h3, .luxury-root .serif {
                    font-family: 'Playfair Display', serif;
                }

                /* Noise Texture Overlay */
                .luxury-root .noise-bg::before {
                    content: "";
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    z-index: 50;
                    pointer-events: none;
                    opacity: 0.02;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                }

                /* Vertical Text Label */
                .luxury-root .vertical-label {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }

                /* Drop Cap */
                .luxury-root .drop-cap::first-letter {
                    float: left;
                    font-family: 'Playfair Display', serif;
                    font-size: 5rem;
                    line-height: 0.8;
                    margin-top: 0.1em;
                    margin-right: 0.1em;
                    font-weight: 700;
                    color: var(--charcoal);
                }

                /* Gold Sliding Button Animation */
                .luxury-root .btn-gold-slide {
                    position: relative;
                    overflow: hidden;
                    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    background-color: var(--charcoal);
                    color: white;
                    border: none;
                    padding: 1rem 2.5rem;
                    text-transform: uppercase;
                    font-size: 0.75rem;
                    letter-spacing: 0.2em;
                    font-weight: 500;
                    z-index: 1;
                }

                .luxury-root .btn-gold-slide::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: var(--gold);
                    transform: translateX(-100%);
                    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    z-index: -1;
                }

                .luxury-root .btn-gold-slide:hover::before {
                    transform: translateX(0);
                }

                .luxury-root .btn-gold-slide:hover {
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
                }

                /* Grayscale to Color Transition */
                .luxury-root .editorial-img-container {
                    overflow: hidden;
                    position: relative;
                }

                .luxury-root .editorial-img {
                    transition: all 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    filter: grayscale(100%);
                }

                .luxury-root .group:hover .editorial-img {
                    filter: grayscale(0%);
                    transform: scale(1.05);
                }

                /* Custom Underline */
                .luxury-root .luxury-link {
                    position: relative;
                    padding-bottom: 2px;
                }

                .luxury-root .luxury-link::after {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background-color: var(--gold);
                    transition: width 0.5s ease;
                }

                .luxury-root .luxury-link:hover::after {
                    width: 100%;
                }

                /* Grid Lines */
                .luxury-root .grid-line {
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    width: 1px;
                    background-color: rgba(26, 26, 26, 0.1);
                    pointer-events: none;
                    z-index: 40;
                }
            `}),e.jsx("div",{className:"noise-bg"}),e.jsx("div",{className:"grid-line left-[8%] hidden md:block"}),e.jsx("div",{className:"grid-line left-[33%] hidden md:block"}),e.jsx("div",{className:"grid-line left-[66%] hidden md:block"}),e.jsx("div",{className:"grid-line right-[8%] hidden md:block"}),e.jsxs("nav",{className:"relative z-[60] px-8 md:px-[8%] py-8 flex justify-between items-center border-b border-[#1A1A1A]/10",children:[e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx("button",{className:"md:hidden",children:e.jsx(r,{size:20})}),e.jsxs("div",{className:"hidden md:flex gap-10 text-[10px] tracking-[0.3em] font-medium uppercase",children:[e.jsx("a",{href:"#",className:"luxury-link",children:"Collections"}),e.jsx("a",{href:"#",className:"luxury-link",children:"Archives"}),e.jsx("a",{href:"#",className:"luxury-link",children:"Sustainability"})]})]}),e.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-[0.2em] serif italic",children:"ÉDITORIAL"}),e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"hidden md:flex items-center gap-4",children:[e.jsx(l,{size:16,strokeWidth:1.5}),e.jsx(d,{size:16,strokeWidth:1.5})]}),e.jsxs("div",{className:"relative",children:[e.jsx(p,{size:20,strokeWidth:1.5}),e.jsx("span",{className:"absolute -top-1 -right-1 bg-[#D4AF37] text-white text-[8px] w-3 h-3 flex items-center justify-center rounded-full",children:"2"})]})]})]}),e.jsx("section",{className:"relative min-h-[90vh] flex flex-col pt-20 overflow-hidden",children:e.jsxs("div",{className:"px-8 md:px-[8%] relative z-10",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-end mb-16",children:[e.jsxs("div",{className:"max-w-xl",children:[e.jsxs("div",{className:"flex items-center gap-6 mb-8",children:[e.jsx("span",{className:"h-px w-12 bg-[#D4AF37]"}),e.jsx("span",{className:"text-[10px] tracking-[0.4em] font-medium uppercase text-[#6C6863]",children:"Autumn / Winter 2024 Collection"})]}),e.jsxs("h1",{className:"text-7xl md:text-9xl leading-[0.9] tracking-tighter mb-8 serif",children:["The ",e.jsx("span",{className:"italic text-[#D4AF37]",children:"Art"})," of ",e.jsx("br",{}),"Restraint."]})]}),e.jsx("div",{className:"hidden md:block max-w-[280px] text-xs leading-relaxed text-[#6C6863] text-right mb-4",children:"Exploring the intersection of architectural precision and tactile luxury. A study in cinematic slow-motion and high-contrast editorial design."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-0 items-start",children:[e.jsx("div",{className:"md:col-span-1 hidden md:block",children:e.jsx("div",{className:"vertical-label text-[10px] tracking-[0.4em] font-medium uppercase text-[#6C6863] py-20 border-l border-[#1A1A1A]/10 pl-4 h-full",children:"Editorial / Vol. 01 — The New Essentialism"})}),e.jsx("div",{className:"md:col-span-7 group",children:e.jsxs("div",{className:"editorial-img-container shadow-[0_8px_32px_rgba(0,0,0,0.12)]",children:[e.jsx("img",{src:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1600",alt:"Editorial Fashion",className:"editorial-img w-full aspect-[16/10] object-cover"}),e.jsxs("div",{className:"absolute bottom-8 left-8 bg-[#F9F8F6] p-4 hidden md:block translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700",children:[e.jsx("div",{className:"text-[10px] tracking-[0.2em] font-bold uppercase mb-1",children:"Model: Amara Vane"}),e.jsx("div",{className:"text-[10px] text-[#6C6863] uppercase",children:"Paris, France"})]})]})}),e.jsxs("div",{className:"md:col-span-4 md:pl-20 py-12 flex flex-col justify-end min-h-[400px]",children:[e.jsx("p",{className:"text-lg leading-relaxed text-[#1A1A1A] mb-12 italic serif",children:`"Luxury is not about social status; it's about a state of mind. It's the quiet confidence that comes from knowing every detail has been perfected."`}),e.jsxs("div",{className:"flex gap-12",children:[e.jsx("button",{className:"btn-gold-slide",children:"Shop Collection"}),e.jsxs("button",{className:"flex items-center gap-4 text-xs tracking-[0.2em] uppercase font-bold group",children:[e.jsx("span",{children:"The Film"}),e.jsx(o,{size:14,className:"group-hover:translate-x-2 transition-transform duration-500"})]})]})]})]})]})}),e.jsxs("section",{className:"py-32 md:py-48 px-8 md:px-[8%] bg-[#1A1A1A] text-[#F9F8F6] relative overflow-hidden",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-20 items-center",children:[e.jsxs("div",{className:"md:col-span-5 relative z-10",children:[e.jsx("div",{className:"text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase font-bold mb-8",children:"The Philosophy"}),e.jsxs("h2",{className:"text-5xl md:text-7xl serif leading-tight mb-12",children:["Curated ",e.jsx("br",{}),e.jsx("span",{className:"italic",children:"Excellence."})]}),e.jsx("p",{className:"text-sm md:text-base leading-relaxed text-[#F9F8F6]/60 mb-12 drop-cap",children:"We believe that objects should have a soul. Our process begins with the finest raw materials, sourced from historic ateliers across Europe. We don't follow trends; we create lasting impressions. Each piece is a testament to the enduring power of high-contrast design and architectural precision."}),e.jsx("button",{className:"border border-[#F9F8F6]/20 bg-transparent text-[#F9F8F6] px-10 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-[#F9F8F6] hover:text-[#1A1A1A] transition-all duration-500",children:"Our Process"})]}),e.jsxs("div",{className:"md:col-span-7 grid grid-cols-2 gap-8 relative z-10",children:[e.jsx("div",{className:"group mt-20",children:e.jsx("div",{className:"editorial-img-container shadow-[0_8px_32px_rgba(0,0,0,0.3)]",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800",alt:"Editorial Detail",className:"editorial-img w-full aspect-[3/4] object-cover"})})}),e.jsx("div",{className:"group",children:e.jsx("div",{className:"editorial-img-container shadow-[0_8px_32px_rgba(0,0,0,0.3)]",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",alt:"Editorial Fabric",className:"editorial-img w-full aspect-[3/4] object-cover"})})})]})]}),e.jsx("div",{className:"absolute top-0 right-0 w-1/3 h-full bg-[#EBE5DE]/5 -z-0"})]}),e.jsxs("section",{className:"py-32 md:py-48 px-8 md:px-[8%]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-end mb-20 gap-8",children:[e.jsxs("div",{className:"max-w-xl",children:[e.jsx("h2",{className:"text-5xl md:text-6xl serif mb-6",children:"Signature Pieces"}),e.jsx("div",{className:"h-px w-24 bg-[#D4AF37] mb-8"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{className:"w-12 h-12 flex items-center justify-center border border-[#1A1A1A]/10 hover:border-[#1A1A1A] transition-colors",children:e.jsx(m,{size:16})}),e.jsx("button",{className:"w-12 h-12 flex items-center justify-center border border-[#1A1A1A]/10 hover:border-[#1A1A1A] transition-colors",children:e.jsx(c,{size:16})})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-16",children:[{name:"Alabaster Silk Scarf",price:"$420",img:"https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&q=80&w=800"},{name:"Charcoal Wool Coat",price:"$1,850",img:"https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=800"},{name:"Gold Leaf Earring",price:"$780",img:"https://images.unsplash.com/photo-1535633302704-b02f4f141240?auto=format&fit=crop&q=80&w=800"}].map((s,a)=>e.jsxs("div",{className:"group cursor-pointer",children:[e.jsx("div",{className:"editorial-img-container mb-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-700",children:e.jsx("img",{src:s.img,alt:s.name,className:"editorial-img w-full aspect-[4/5] object-cover"})}),e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl serif italic mb-2 group-hover:text-[#D4AF37] transition-colors duration-500",children:s.name}),e.jsx("p",{className:"text-[10px] tracking-[0.2em] uppercase text-[#6C6863]",children:"Sustainable Silk / Linen"})]}),e.jsx("div",{className:"text-sm font-medium",children:s.price})]})]},a))})]}),e.jsx("section",{className:"py-32 md:py-48 px-8 md:px-[8%] bg-[#EBE5DE]/30 border-t border-b border-[#1A1A1A]/5",children:e.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[e.jsx("div",{className:"flex justify-center gap-2 mb-12",children:Array.from({length:5}).map((s,a)=>e.jsx(f,{size:14,fill:"#D4AF37",color:"#D4AF37"},a))}),e.jsx("h2",{className:"text-3xl md:text-4xl serif italic leading-relaxed mb-16 px-8 drop-cap",children:`"The level of detail in this collection is simply unparalleled. It doesn't scream for attention, it commands it through pure, unadulterated quality. This is the new standard of editorial digital experiences."`}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"w-20 h-20 rounded-full overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-1000 border-2 border-[#D4AF37]",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",alt:"Author",className:"w-full h-full object-cover"})}),e.jsx("div",{className:"text-[10px] tracking-[0.4em] uppercase font-bold",children:"Isabella Thorne"}),e.jsx("div",{className:"text-[10px] tracking-[0.2em] uppercase text-[#6C6863] mt-2",children:"Creative Director, Vogue"})]})]})}),e.jsxs("footer",{className:"bg-[#1A1A1A] text-[#F9F8F6] pt-32 pb-16 px-8 md:px-[8%] relative overflow-hidden",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-20 mb-32 relative z-10",children:[e.jsxs("div",{className:"md:col-span-6",children:[e.jsx("div",{className:"text-5xl md:text-7xl serif italic mb-12",children:"ÉDITORIAL."}),e.jsx("div",{className:"max-w-md text-sm leading-relaxed text-[#F9F8F6]/60 mb-12",children:"Join our private circle for exclusive access to archival releases, cinematic previews, and editorial insights into the making of luxury."}),e.jsxs("form",{className:"flex border-b border-[#F9F8F6]/20 pb-4 max-w-sm group focus-within:border-[#D4AF37] transition-colors duration-500",children:[e.jsx("input",{type:"email",placeholder:"Email Address",className:"bg-transparent border-none outline-none text-sm w-full serif italic placeholder:text-[#F9F8F6]/30"}),e.jsx("button",{type:"submit",className:"text-[10px] tracking-[0.3em] uppercase font-bold hover:text-[#D4AF37] transition-colors",children:"Submit"})]})]}),e.jsxs("div",{className:"md:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12",children:[e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("h4",{className:"text-[10px] tracking-[0.3em] uppercase font-bold text-[#D4AF37]",children:"Information"}),e.jsxs("div",{className:"flex flex-col gap-4 text-xs font-medium text-[#F9F8F6]/60 uppercase tracking-widest",children:[e.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"About Us"}),e.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Careers"}),e.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Stores"}),e.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Contact"})]})]}),e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("h4",{className:"text-[10px] tracking-[0.3em] uppercase font-bold text-[#D4AF37]",children:"Support"}),e.jsxs("div",{className:"flex flex-col gap-4 text-xs font-medium text-[#F9F8F6]/60 uppercase tracking-widest",children:[e.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Shipping"}),e.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Returns"}),e.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Warranty"}),e.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"FAQ"})]})]}),e.jsxs("div",{className:"flex flex-col gap-6 col-span-2 md:col-span-1",children:[e.jsx("h4",{className:"text-[10px] tracking-[0.3em] uppercase font-bold text-[#D4AF37]",children:"Social"}),e.jsxs("div",{className:"flex flex-col gap-4 text-xs font-medium text-[#F9F8F6]/60 uppercase tracking-widest",children:[e.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Instagram"}),e.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Vimeo"}),e.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"LinkedIn"})]})]})]})]}),e.jsxs("div",{className:"pt-16 border-t border-[#F9F8F6]/5 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10",children:[e.jsx("div",{className:"text-[10px] tracking-[0.2em] uppercase text-[#F9F8F6]/30",children:"© 2024 ÉDITORIAL INDUSTRIES. ALL RIGHTS RESERVED."}),e.jsx("div",{className:"flex gap-12 text-[10px] tracking-[0.3em] uppercase font-black",children:"PARIS / NEW YORK / TOKYO / LONDON"}),e.jsx("div",{className:"text-[10px] tracking-[0.1em] text-[#F9F8F6]/30 uppercase",children:"Privacy Policy / Terms of Service"})]}),e.jsx("div",{className:"absolute bottom-0 right-0 p-12 opacity-5 pointer-events-none",children:e.jsx("div",{className:"text-[15rem] leading-none serif font-black",children:"01"})})]})]})}export{w as default};
