(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{q:()=>n});class t{constructor(e,t,o=[]){this.name=e,this.id=t,this.list=o}sayName(){return`Hi ${this.name}`}}let o=JSON.parse(localStorage.getItem("projects")),n=[],c=new t("Crap");console.log(c.sayName());const r=document.querySelector("#projectadd");o&&(n=o),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".main");null!==localStorage.getItem("projects")&&n.forEach((t=>{const o=document.createElement("div");o.setAttribute("class","projecttitles"),o.innerHTML=t,e.appendChild(o),console.log(t)}))})()),r.addEventListener("click",(function(){(()=>{const e=document.createElement("input"),o=document.createElement("br"),c=document.createElement("button"),r=(document.querySelector("#projectadd"),document.querySelector("#projectsubmit"),document.querySelector(".bookInput"),document.querySelector(".main"));r.appendChild(o),r.appendChild(e),e.setAttribute("type","text"),e.setAttribute("class","bookInput"),r.appendChild(c),c.innerHTML="Submit",c.setAttribute("id","projectsubmit"),c.addEventListener("click",(function(){const o=document.createElement("div");o.setAttribute("class","projecttitles"),o.innerHTML=e.value,n.push(e.value),localStorage.setItem("projects",JSON.stringify(n));const l=new t(`${e.value}`,`${n.length}`);console.log(l),console.log(n),e.style.display="none",c.style.display="none",r.appendChild(o)}))})()})),console.log(n)})();