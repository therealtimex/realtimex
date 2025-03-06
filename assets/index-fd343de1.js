import{k as j,j as e,x as v,I as O,M as N,S as u,h as _,r as l,m as $,b as L,i as A,D as J,y as z,s as w}from"../index.js";import{C as V,S as B}from"./index-af9073a4.js";import{S as I}from"./index-44bf2282.js";/* empty css                 */import{I as W}from"./Download-4d998561.js";import"./Globe-1f44e45d.js";import"./index-0f62630d.js";import"./CaretRight-731d83f5.js";function C(t=""){try{const s=JSON.parse(t);if(!s.hasOwnProperty("text"))throw new Error('JSON response has no property "text".');return typeof s.text!="string"?JSON.stringify(s.text):s.text}catch(s){return console.error(s),"--failed to parse--"}}function q({chat:t,onDelete:s}){var d,a;const{isOpen:c,openModal:i,closeModal:m}=j(),{isOpen:p,openModal:r,closeModal:h}=j(),x=async()=>{if(!window.confirm(`Are you sure you want to delete this chat?

This action is irreversible.`))return!1;await u.deleteChat(t.id),s(t.id)};return e.jsxs(e.Fragment,{children:[e.jsxs("tr",{className:"bg-transparent text-white text-opacity-80 text-sm font-medium",children:[e.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:t.id}),e.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:(d=t.user)==null?void 0:d.username}),e.jsx("td",{className:"px-6 py-4",children:(a=t.workspace)==null?void 0:a.name}),e.jsx("td",{onClick:i,className:"px-6 py-4 border-transparent cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-lg",children:v(t.prompt,40)}),e.jsx("td",{onClick:r,className:"px-6 py-4 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-lg",children:v(C(t.response),40)}),e.jsx("td",{className:"px-6 py-4",children:t.createdAt}),e.jsx("td",{className:"px-6 py-4 flex items-center gap-x-6",children:e.jsx("button",{onClick:x,className:"border-none font-medium px-2 py-1 rounded-lg text-theme-text-primary hover:text-red-500",children:e.jsx(O,{className:"h-5 w-5"})})})]}),e.jsx(N,{isOpen:c,children:e.jsx(S,{text:t.prompt,closeModal:m})}),e.jsx(N,{isOpen:p,children:e.jsx(S,{text:C(t.response),closeModal:h})})]})}const S=({text:t,closeModal:s})=>e.jsx("div",{className:"relative w-full md:max-w-2xl max-h-full",children:e.jsxs("div",{className:"w-full max-w-2xl bg-theme-bg-secondary rounded-lg shadow border-2 border-theme-modal-border overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b rounded-t border-theme-modal-border",children:[e.jsx("h3",{className:"text-xl font-semibold text-white",children:"Viewing Text"}),e.jsx("button",{onClick:s,type:"button",className:"bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center bg-sidebar-button hover:bg-theme-modal-border hover:border-theme-modal-border hover:border-opacity-50 border-transparent border",children:e.jsx(_,{className:"text-white text-lg"})})]}),e.jsx("div",{className:"w-full p-6",children:e.jsx("pre",{className:"w-full h-[200px] py-2 px-4 whitespace-pre-line overflow-auto rounded-lg bg-zinc-900 light:bg-theme-bg-secondary border border-gray-500 text-white text-sm",children:t})})]})}),M={csv:{name:"CSV",mimeType:"text/csv",fileExtension:"csv",filenameFunc:()=>`anythingllm-chats-${new Date().toLocaleDateString()}`},json:{name:"JSON",mimeType:"application/json",fileExtension:"json",filenameFunc:()=>`anythingllm-chats-${new Date().toLocaleDateString()}`},jsonl:{name:"JSONL",mimeType:"application/jsonl",fileExtension:"jsonl",filenameFunc:()=>`anythingllm-chats-${new Date().toLocaleDateString()}-lines`},jsonAlpaca:{name:"JSON (Alpaca)",mimeType:"application/json",fileExtension:"json",filenameFunc:()=>`anythingllm-chats-${new Date().toLocaleDateString()}-alpaca`}};function te(){const[t,s]=l.useState(!1),c=l.useRef(),i=l.useRef(),m=$(),[p,r]=l.useState(!0),[h,x]=l.useState([]),[d,a]=l.useState(Number(m.get("offset")||0)),[f,g]=l.useState(!1),{t:b}=L(),k=async o=>{const n=await u.exportChats(o,"workspace");if(n){const{name:y,mimeType:T,fileExtension:P,filenameFunc:F}=M[o],R=new Blob([n],{type:T});z.saveAs(R,`${F()}.${P}`),w(`Chats exported successfully as ${y}.`,"success")}else w("Failed to export chats.","error")},D=async()=>{if(!window.confirm(`Are you sure you want to clear all chats?

This action is irreversible.`))return!1;await u.deleteChat(-1),x([]),w("Cleared all chats.","success")},E=()=>{s(!t)};return l.useEffect(()=>{function o(n){c.current&&!c.current.contains(n.target)&&!i.current.contains(n.target)&&s(!1)}return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[]),l.useEffect(()=>{async function o(){const{chats:n=[],hasPages:y=!1}=await u.chats(d);x(n),g(y),r(!1)}o()},[d]),e.jsx(V,{children:e.jsxs("div",{className:"w-screen h-screen overflow-hidden bg-theme-bg-container flex",children:[e.jsx(B,{}),e.jsx("div",{style:{height:A?"100%":"calc(100% - 32px)"},className:"relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-theme-bg-secondary w-full h-full overflow-y-scroll p-4 md:p-0",children:e.jsxs("div",{className:"flex flex-col w-full px-1 md:pl-6 md:pr-[50px] md:py-6 py-16",children:[e.jsxs("div",{className:"w-full flex flex-col gap-y-1 pb-6 border-white/10 border-b-2",children:[e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx("p",{className:"text-lg leading-6 font-bold text-theme-text-primary",children:b("recorded.title")}),e.jsxs("div",{className:"relative",children:[e.jsxs("button",{ref:i,onClick:E,className:"flex items-center gap-x-2 px-4 py-1 rounded-lg bg-primary-button hover:light:bg-theme-bg-primary hover:text-theme-text-primary text-xs font-semibold hover:bg-secondary shadow-[0_4px_14px_rgba(0,0,0,0.25)] h-[34px] w-fit",children:[e.jsx(W,{size:18,weight:"bold"}),b("recorded.export"),e.jsx(J,{size:18,weight:"bold"})]}),e.jsx("div",{ref:c,className:`${t?"slide-down":"slide-up hidden"} z-20 w-fit rounded-lg absolute top-full right-0 bg-secondary light:bg-theme-bg-secondary mt-2 shadow-md`,children:e.jsx("div",{className:"py-2",children:Object.entries(M).map(([o,n])=>e.jsx("button",{onClick:()=>{k(o),s(!1)},className:"w-full text-left px-4 py-2 text-white text-sm hover:bg-[#3D4147] light:hover:bg-theme-sidebar-item-hover",children:n.name},o))})})]}),h.length>0&&e.jsxs("button",{onClick:D,className:"flex items-center gap-x-2 px-4 py-1 border hover:border-transparent light:border-theme-sidebar-border border-white/40 text-white/40 light:text-theme-text-secondary rounded-lg bg-transparent hover:light:text-theme-bg-primary hover:text-theme-text-primary text-xs font-semibold hover:bg-red-500 shadow-[0_4px_14px_rgba(0,0,0,0.25)] h-[34px] w-fit",children:[e.jsx(O,{size:18,weight:"bold"}),"Clear Chats"]})]}),e.jsx("p",{className:"text-xs leading-[18px] font-base text-theme-text-secondary mt-2",children:b("recorded.description")})]}),e.jsx("div",{className:"overflow-x-auto mt-6",children:e.jsx(H,{loading:p,chats:h,setChats:x,offset:d,setOffset:a,canNext:f,t:b})})]})})]})})}function H({loading:t,chats:s,setChats:c,offset:i,setOffset:m,canNext:p,t:r}){const h=()=>{m(Math.max(i-1,0))},x=()=>{m(i+1)},d=async a=>{await u.deleteChat(a),c(f=>f.filter(g=>g.id!==a))};return t?e.jsx(I,{height:"80vh",width:"100%",highlightColor:"var(--theme-bg-primary)",baseColor:"var(--theme-bg-secondary)",count:1,className:"w-full p-4 rounded-b-2xl rounded-tr-2xl rounded-tl-sm",containerClassName:"flex w-full"}):e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:"w-full text-sm text-left rounded-lg min-w-[640px] border-spacing-0",children:[e.jsx("thead",{className:"text-theme-text-secondary text-xs leading-[18px] font-bold uppercase light:border-theme-sidebar-border border-white/10 border-b",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3 rounded-tl-lg",children:r("recorded.table.id")}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:r("recorded.table.by")}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:r("recorded.table.workspace")}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:r("recorded.table.prompt")}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:r("recorded.table.response")}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:r("recorded.table.at")}),e.jsx("th",{scope:"col",className:"px-6 py-3 rounded-tr-lg",children:" "})]})}),e.jsx("tbody",{children:!!s&&s.map(a=>e.jsx(q,{chat:a,onDelete:d},a.id))})]}),e.jsxs("div",{className:"flex w-full justify-between items-center mt-6",children:[e.jsxs("button",{onClick:h,className:"px-4 py-2 rounded-lg border border-theme-text-secondary text-theme-text-secondary text-sm items-center flex gap-x-2 hover:bg-theme-text-secondary hover:text-theme-bg-secondary disabled:invisible",disabled:i===0,children:[" ","Previous Page"]}),e.jsx("button",{onClick:x,className:"px-4 py-2 rounded-lg border border-slate-200 text-slate-200 light:text-theme-text-secondary light:border-theme-sidebar-border text-sm items-center flex gap-x-2 hover:bg-slate-200 hover:text-slate-800 disabled:invisible",disabled:!p,children:"Next Page"})]})]})}export{te as default};
