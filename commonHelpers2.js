import"./assets/styles-026c8c0e.js";const t={email:"",message:""},o=document.querySelector(".feedback-form"),l=(e,a)=>{localStorage.setItem(e,JSON.stringify(a))},s=e=>{try{const a=localStorage.getItem(e);return a?JSON.parse(a):null}catch(a){return console.error("Error loading data from localStorage",a),null}};document.addEventListener("DOMContentLoaded",()=>{const e=s("feedback-form-state");e&&(o.email.value=e.email||"",o.message.value=e.message||"",t.email=e.email||"",t.message=e.message||"")});o.addEventListener("input",e=>{t[e.target.name]=e.target.value.trim(),l("feedback-form-state",t)});o.addEventListener("submit",e=>{e.preventDefault();const{email:a,message:r}=t;if(!a||!r){alert("Fill please all fields");return}console.log(t),localStorage.removeItem("feedback-form-state"),t.email="",t.message="",o.reset()});
//# sourceMappingURL=commonHelpers2.js.map
