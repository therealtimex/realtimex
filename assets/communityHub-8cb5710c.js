import{A as s,ac as n}from"../index.js";const c={getItemFromImportId:async e=>await fetch(`${s}/community-hub/item`,{method:"POST",headers:n(),body:JSON.stringify({importId:e})}).then(t=>t.json()).catch(t=>(console.error(t),{error:t.message,item:null})),applyItem:async(e,t={})=>await fetch(`${s}/community-hub/apply`,{method:"POST",headers:n(),body:JSON.stringify({importId:e,options:t})}).then(r=>r.json()).catch(r=>(console.error(r),{success:!1,error:r.message})),importBundleItem:async e=>await fetch(`${s}/community-hub/import`,{method:"POST",headers:n(),body:JSON.stringify({importId:e})}).then(async t=>{var o;const r=await t.json();if(!t.ok)throw new Error((o=r==null?void 0:r.error)!=null?o:t.statusText);return r}).catch(t=>({error:t.message,item:null})),updateSettings:async e=>await fetch(`${s}/community-hub/settings`,{method:"POST",headers:n(),body:JSON.stringify(e)}).then(async t=>{const r=await t.json();if(!t.ok)throw new Error(r.error||"Failed to update settings");return{success:!0,error:null}}).catch(t=>({success:!1,error:t.message})),getSettings:async()=>await fetch(`${s}/community-hub/settings`,{method:"GET",headers:n()}).then(async e=>{const t=await e.json();if(!e.ok)throw new Error(t.error||"Failed to fetch settings");return{connectionKey:t.connectionKey,error:null}}).catch(e=>({connectionKey:null,error:e.message})),fetchExploreItems:async()=>await fetch(`${s}/community-hub/explore`,{method:"GET",headers:n()}).then(e=>e.json()).catch(e=>(console.error(e),{success:!1,error:e.message,result:null})),fetchUserItems:async()=>await fetch(`${s}/community-hub/items`,{method:"GET",headers:n()}).then(e=>e.json()).catch(e=>(console.error(e),{success:!1,error:e.message,createdByMe:{},teamItems:[]}))};export{c as C};
