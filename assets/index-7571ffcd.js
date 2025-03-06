import{r as a,b as T,j as e,i as b,G as B,w as D,h as z,H as F,n as E,O as H,ai as U,U as W,aj as V,ak as X,al as Q,V as _,am as Y,an as $,ao as J,ap as Z,aq as ee,Y as oe,ar as ie,as as se,at as ae,Z as te,au as ne,X as re,av as le,aw as pe,ax as ce,ay as de,az as ue,a1 as me,aA as ge,aB as fe,aC as xe,aD as Le,aE as he,aF as Ae,aG as ve,aH as ye,aI as be,aJ as we,aK as Me,_ as je,aL as Ce,a0 as Ie,aM as Oe,aN as Ne,aO as ke,aP as Pe,aQ as Se,aR as qe,aS as Ke,a2 as Re,aT as Ge,aU as Te,aV as Be,S as w,s as M}from"../index.js";import{S as De}from"./index-af9073a4.js";import{D as ze}from"./CaretUpDown-676a7767.js";import{C as Fe}from"./index-07eec889.js";import"./Globe-1f44e45d.js";import"./index-0f62630d.js";import"./CaretRight-731d83f5.js";const x=[{name:"OpenAI",value:"openai",logo:H,options:o=>e.jsx(U,{settings:o}),description:"The standard option for most non-commercial use.",requiredConfig:["OpenAiKey"]},{name:"Azure OpenAI",value:"azure",logo:W,options:o=>e.jsx(V,{settings:o}),description:"The enterprise option of OpenAI hosted on Azure services.",requiredConfig:["AzureOpenAiEndpoint"]},{name:"Anthropic",value:"anthropic",logo:X,options:o=>e.jsx(Q,{settings:o}),description:"A friendly AI Assistant hosted by Anthropic.",requiredConfig:["AnthropicApiKey"]},{name:"Gemini",value:"gemini",logo:_,options:o=>e.jsx(Y,{settings:o}),description:"Google's largest and most capable AI model",requiredConfig:["GeminiLLMApiKey"]},{name:"NVIDIA NIM",value:"nvidia-nim",logo:$,options:o=>e.jsx(J,{settings:o}),description:"Run full parameter LLMs directly on your NVIDIA RTX GPU using NVIDIA NIM.",requiredConfig:["NvidiaNimLLMBasePath"]},{name:"HuggingFace",value:"huggingface",logo:Z,options:o=>e.jsx(ee,{settings:o}),description:"Access 150,000+ open-source LLMs and the world's AI community",requiredConfig:["HuggingFaceLLMEndpoint","HuggingFaceLLMAccessToken","HuggingFaceLLMTokenLimit"]},{name:"Ollama",value:"ollama",logo:oe,options:o=>e.jsx(ie,{settings:o}),description:"Run LLMs locally on your own machine.",requiredConfig:["OllamaLLMBasePath"]},{name:"Novita AI",value:"novita",logo:se,options:o=>e.jsx(ae,{settings:o}),description:"Reliable, Scalable, and Cost-Effective for LLMs from Novita AI",requiredConfig:["NovitaLLMApiKey"]},{name:"LM Studio",value:"lmstudio",logo:te,options:o=>e.jsx(ne,{settings:o}),description:"Discover, download, and run thousands of cutting edge LLMs in a few clicks.",requiredConfig:["LMStudioBasePath"]},{name:"Local AI",value:"localai",logo:re,options:o=>e.jsx(le,{settings:o}),description:"Run LLMs locally on your own machine.",requiredConfig:["LocalAiApiKey","LocalAiBasePath","LocalAiTokenLimit"]},{name:"Together AI",value:"togetherai",logo:pe,options:o=>e.jsx(ce,{settings:o}),description:"Run open source models from Together AI.",requiredConfig:["TogetherAiApiKey"]},{name:"Fireworks AI",value:"fireworksai",logo:de,options:o=>e.jsx(ue,{settings:o}),description:"The fastest and most efficient inference engine to build production-ready, compound AI systems.",requiredConfig:["FireworksAiLLMApiKey"]},{name:"Mistral",value:"mistral",logo:me,options:o=>e.jsx(ge,{settings:o}),description:"Run open source models from Mistral AI.",requiredConfig:["MistralApiKey"]},{name:"Perplexity AI",value:"perplexity",logo:fe,options:o=>e.jsx(xe,{settings:o}),description:"Run powerful and internet-connected models hosted by Perplexity AI.",requiredConfig:["PerplexityApiKey"]},{name:"OpenRouter",value:"openrouter",logo:Le,options:o=>e.jsx(he,{settings:o}),description:"A unified interface for LLMs.",requiredConfig:["OpenRouterApiKey"]},{name:"Groq",value:"groq",logo:Ae,options:o=>e.jsx(ve,{settings:o}),description:"The fastest LLM inferencing available for real-time AI applications.",requiredConfig:["GroqApiKey"]},{name:"KoboldCPP",value:"koboldcpp",logo:ye,options:o=>e.jsx(be,{settings:o}),description:"Run local LLMs using koboldcpp.",requiredConfig:["KoboldCPPModelPref","KoboldCPPBasePath","KoboldCPPTokenLimit"]},{name:"Oobabooga Web UI",value:"textgenwebui",logo:we,options:o=>e.jsx(Me,{settings:o}),description:"Run local LLMs using Oobabooga's Text Generation Web UI.",requiredConfig:["TextGenWebUIBasePath","TextGenWebUITokenLimit"]},{name:"Cohere",value:"cohere",logo:je,options:o=>e.jsx(Ce,{settings:o}),description:"Run Cohere's powerful Command models.",requiredConfig:["CohereApiKey"]},{name:"LiteLLM",value:"litellm",logo:Ie,options:o=>e.jsx(Oe,{settings:o}),description:"Run LiteLLM's OpenAI compatible proxy for various LLMs.",requiredConfig:["LiteLLMBasePath"]},{name:"DeepSeek",value:"deepseek",logo:Ne,options:o=>e.jsx(ke,{settings:o}),description:"Run DeepSeek's powerful LLMs.",requiredConfig:["DeepSeekApiKey"]},{name:"AWS Bedrock",value:"bedrock",logo:Pe,options:o=>e.jsx(Se,{settings:o}),description:"Run powerful foundation models privately with AWS Bedrock.",requiredConfig:["AwsBedrockLLMAccessKeyId","AwsBedrockLLMAccessKey","AwsBedrockLLMRegion","AwsBedrockLLMModel"]},{name:"APIpie",value:"apipie",logo:qe,options:o=>e.jsx(Ke,{settings:o}),description:"A unified API of AI services from leading providers",requiredConfig:["ApipieLLMApiKey","ApipieLLMModelPref"]},{name:"Generic OpenAI",value:"generic-openai",logo:Re,options:o=>e.jsx(Ge,{settings:o}),description:"Connect to any OpenAi-compatible service via a custom configuration",requiredConfig:["GenericOpenAiBasePath","GenericOpenAiModelPref","GenericOpenAiTokenLimit","GenericOpenAiKey"]},{name:"xAI",value:"xai",logo:Te,options:o=>e.jsx(Be,{settings:o}),description:"Run xAI's powerful LLMs like Grok-2 and more.",requiredConfig:["XAIApiKey","XAIModelPref"]}];function _e(){var l,v;const[o,L]=a.useState(!1),[j,p]=a.useState(!1),[C,I]=a.useState(null),[O,N]=a.useState(!0),[c,d]=a.useState(""),[k,P]=a.useState([]),[n,h]=a.useState(null),[u,r]=a.useState(!1),m=a.useRef(null),{t:g}=T(),A=async i=>{i.preventDefault();const t=i.target,y={LLMProvider:n},K=new FormData(t);for(var[R,G]of K.entries())y[R]=G;const{error:f}=await w.updateSystem(y);L(!0),f?M(`Failed to save LLM settings: ${f}`,"error"):M("LLM preferences saved successfully.","success"),L(!1),p(!!f)},S=i=>{d(""),h(i),r(!1),p(!0)},q=()=>{c.length>0?(d(""),m.current&&(m.current.value="")):r(!u)};a.useEffect(()=>{async function i(){const t=await w.keys();I(t),h(t==null?void 0:t.LLMProvider),N(!1)}i()},[]),a.useEffect(()=>{const i=x.filter(t=>t.name.toLowerCase().includes(c.toLowerCase()));P(i)},[c,n]);const s=x.find(i=>i.value===n);return e.jsxs("div",{className:"w-screen h-screen overflow-hidden bg-theme-bg-container flex",children:[e.jsx(De,{}),O?e.jsx("div",{style:{height:b?"100%":"calc(100% - 32px)"},className:"relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-theme-bg-secondary w-full h-full overflow-y-scroll p-4 md:p-0",children:e.jsx("div",{className:"w-full h-full flex justify-center items-center",children:e.jsx(B,{})})}):e.jsx("div",{style:{height:b?"100%":"calc(100% - 32px)"},className:"relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-theme-bg-secondary w-full h-full overflow-y-scroll p-4 md:p-0",children:e.jsx("form",{onSubmit:A,className:"flex w-full",children:e.jsxs("div",{className:"flex flex-col w-full px-1 md:pl-6 md:pr-[50px] md:py-6 py-16",children:[e.jsxs("div",{className:"w-full flex flex-col gap-y-1 pb-6 border-white light:border-theme-sidebar-border border-b-2 border-opacity-10",children:[e.jsx("div",{className:"flex gap-x-4 items-center",children:e.jsx("p",{className:"text-lg leading-6 font-bold text-white",children:g("llm.title")})}),e.jsx("p",{className:"text-xs leading-[18px] font-base text-white text-opacity-60",children:g("llm.description")})]}),e.jsx("div",{className:"w-full justify-end flex",children:j&&e.jsx(Fe,{onClick:()=>A(),className:"mt-3 mr-0 -mb-14 z-10",children:o?"Saving...":"Save changes"})}),e.jsx("div",{className:"text-base font-bold text-white mt-6 mb-4",children:g("llm.provider")}),e.jsxs("div",{className:"relative",children:[u&&e.jsx("div",{className:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-sm z-10",onClick:()=>r(!1)}),u?e.jsx("div",{className:"absolute top-0 left-0 w-full max-w-[640px] max-h-[310px] overflow-auto white-scrollbar min-h-[64px] bg-theme-settings-input-bg rounded-lg flex flex-col justify-between cursor-pointer border-2 border-primary-button z-20",children:e.jsxs("div",{className:"w-full flex flex-col gap-y-1",children:[e.jsxs("div",{className:"flex items-center sticky top-0 border-b border-[#9CA3AF] mx-4 bg-theme-settings-input-bg",children:[e.jsx(D,{size:20,weight:"bold",className:"absolute left-4 z-30 text-theme-text-primary -ml-4 my-2"}),e.jsx("input",{type:"text",name:"llm-search",autoComplete:"off",placeholder:"Search all LLM providers",className:"border-none -ml-4 my-2 bg-transparent z-20 pl-12 h-[38px] w-full px-4 py-1 text-sm outline-none text-theme-text-primary placeholder:text-theme-text-primary placeholder:font-medium",onChange:i=>d(i.target.value),ref:m,onKeyDown:i=>{i.key==="Enter"&&i.preventDefault()}}),e.jsx(z,{size:20,weight:"bold",className:"cursor-pointer text-white hover:text-x-button",onClick:q})]}),e.jsx("div",{className:"flex-1 pl-4 pr-2 flex flex-col gap-y-1 overflow-y-auto white-scrollbar pb-4",children:k.map(i=>e.jsx(F,{name:i.name,value:i.value,image:i.logo,description:i.description,checked:n===i.value,onClick:()=>S(i.value)},i.name))})]})}):e.jsxs("button",{className:"w-full max-w-[640px] h-[64px] bg-theme-settings-input-bg rounded-lg flex items-center p-[14px] justify-between cursor-pointer border-2 border-transparent hover:border-primary-button transition-all duration-300",type:"button",onClick:()=>r(!0),children:[e.jsxs("div",{className:"flex gap-x-4 items-center",children:[e.jsx("img",{src:(s==null?void 0:s.logo)||E,alt:`${s==null?void 0:s.name} logo`,className:"w-10 h-10 rounded-md"}),e.jsxs("div",{className:"flex flex-col text-left",children:[e.jsx("div",{className:"text-sm font-semibold text-white",children:(s==null?void 0:s.name)||"None selected"}),e.jsx("div",{className:"mt-1 text-xs text-description",children:(s==null?void 0:s.description)||"You need to select an LLM"})]})]}),e.jsx(ze,{size:24,weight:"bold",className:"text-white"})]})]}),e.jsx("div",{onChange:()=>p(!0),className:"mt-4 flex flex-col gap-y-1",children:n&&((v=(l=x.find(i=>i.value===n))==null?void 0:l.options)==null?void 0:v.call(l,C))})]})})})]})}export{x as AVAILABLE_LLM_PROVIDERS,_e as default};
