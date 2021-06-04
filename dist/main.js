(()=>{"use strict";var t={d:(e,n)=>{for(var d in n)t.o(n,d)&&!t.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:n[d]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t){const e=document.querySelector("#main_nav");for(;e.firstChild;)e.removeChild(e.firstChild);const n=document.createElement("h1");n.setAttribute("class","header"),n.textContent="Projects",e.appendChild(n);for(let n=0;n<t.length;n++){let d=document.createElement("p");d.setAttribute("id",t[n].id),d.textContent=t[n].name,e.appendChild(d)}const d=document.createElement("div");d.setAttribute("id","nav-buttons-layout");const c=document.createElement("button");c.setAttribute("id","add-project"),c.textContent="CREATE",c.addEventListener("click",b),d.appendChild(c);const o=document.createElement("button");o.setAttribute("id","delete-project"),o.textContent="DELETE",o.addEventListener("click",m),d.appendChild(o),e.appendChild(d)}function n(){const t=document.querySelector("#content");if(document.contains(document.getElementById("form"))){const e=document.querySelector("#form");t.removeChild(e)}if(document.contains(document.getElementById("table"))){const t=document.querySelector("#table"),e=document.querySelector("#titl"),n=document.querySelector("#desc");t.style.opacity="1",e.style.opacity="1",n.style.opacity="1"}}function d(){const t=document.querySelector("#content");if(document.contains(document.getElementById("table"))){const e=document.querySelector("#table"),n=document.querySelector("#titl"),d=document.querySelector("#desc");t.removeChild(e),t.removeChild(n),t.removeChild(d)}}function c(t){if(document.contains(document.getElementById("table"))){const t=document.querySelector("#table"),e=document.querySelector("#titl"),n=document.querySelector("#desc");t.style.opacity="0.1",e.style.opacity="0.1",n.style.opacity="0.1"}const e=document.querySelector("#content"),d=document.createElement("div");d.setAttribute("id","form");const c=document.createElement("div");c.setAttribute("id","form-header");const o=document.createElement("h2");o.textContent="New Task",c.appendChild(o);const i=document.createElement("button");i.setAttribute("id","close-form"),i.textContent="x",i.addEventListener("click",n),c.appendChild(i),d.appendChild(c);const l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("id","task_name"),l.setAttribute("value",t.name),d.appendChild(l);const a=document.createElement("input");a.setAttribute("type","date"),a.setAttribute("id","task_date"),a.setAttribute("value",t.date),d.appendChild(a);const r=document.createElement("button");r.setAttribute("id","submit"),r.textContent="Submit",r.addEventListener("click",s),d.appendChild(r),e.appendChild(d)}function o(t){const e=document.querySelector("#content"),n=document.createElement("h2");n.setAttribute("id","titl"),n.textContent=t.name,e.appendChild(n);const d=document.createElement("h3");d.setAttribute("id","desc"),d.textContent=t.description,e.appendChild(d);const c=document.createElement("div");c.setAttribute("id","table");const o=document.createElement("table"),i=document.createElement("tr"),s=document.createElement("th");s.textContent="Name",i.appendChild(s);const u=document.createElement("th");u.textContent="Date",i.appendChild(u),o.appendChild(i);for(let e=0;e<t.tasks.length;e++){let n=document.createElement("tr");n.setAttribute("id",String(e));let d=document.createElement("td");d.textContent=t.tasks[e].name,n.appendChild(d);let c=document.createElement("td");c.textContent=t.tasks[e].date,n.appendChild(c);let i=document.createElement("td");i.setAttribute("class","edit"),i.addEventListener("click",a),i.innerHTML='<i class="material-icons edt">edit</i>',n.appendChild(i);let l=document.createElement("td");l.setAttribute("class","edit"),l.addEventListener("click",r),l.innerHTML='<i class="material-icons dlt">delete</i>',n.appendChild(l),o.appendChild(n)}c.appendChild(o);const m=document.createElement("button");m.textContent="New Task",m.setAttribute("id","task-add"),m.addEventListener("click",l),c.appendChild(m),e.appendChild(c)}function i(){for(let t=0;t<q.length;t++){let e=document.getElementById(q[t].id);q[t]===S?e.setAttribute("class","menu selected-project"):e.setAttribute("class","menu"),e.addEventListener("click",h)}}function l(){!function(){if(document.contains(document.getElementById("table"))){const t=document.querySelector("#table"),e=document.querySelector("#titl"),n=document.querySelector("#desc");t.style.opacity="0.1",e.style.opacity="0.1",n.style.opacity="0.1"}const t=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("id","form");const d=document.createElement("div");d.setAttribute("id","form-header");const c=document.createElement("h2");c.textContent="New Task",d.appendChild(c);const o=document.createElement("button");o.setAttribute("id","close-form"),o.textContent="x",o.addEventListener("click",n),d.appendChild(o),e.appendChild(d);const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("id","task_name"),i.setAttribute("value",""),i.setAttribute("placeholder","Name"),e.appendChild(i);const l=document.createElement("input");l.setAttribute("type","date"),l.setAttribute("id","task_date"),l.setAttribute("value",""),e.appendChild(l);const a=document.createElement("button");a.setAttribute("id","submit"),a.textContent="Submit",a.addEventListener("click",u),e.appendChild(a),t.appendChild(e)}()}function a(){for(let t=0;t<S.tasks.length;t++)t===parseInt(this.parentNode.id)&&(n(),A=t,c(S.tasks[t]))}function r(){for(let t=0;t<S.tasks.length;t++)t===parseInt(this.parentNode.id)&&(S.tasks.splice(t,1),d(),o(S))}function s(){const t=document.getElementById("task_name").value,e=document.getElementById("task_date").value;if(""!=t&&""!=e)for(let c=0;c<S.tasks.length;c++)c===A&&(S.tasks[c].name=t,S.tasks[c].date=e,d(),n(),o(S))}function u(){const t=document.getElementById("task_name").value,e=document.getElementById("task_date").value;if(""!=t&&""!=e){let n=C(t,e);S.tasks.push(n)}d(),n(),o(S)}function m(){const t=q.indexOf(S);t>0&&(q.splice(t,1),S=E,e(q),i())}function p(){const t=document.getElementById("project_name").value,d=document.getElementById("project_description").value;if(""!=t&&""!=d){let e=y(t,d);q.push(e)}e(q),i(),n()}function b(){n(),function(){if(document.contains(document.getElementById("table"))){const t=document.querySelector("#table"),e=document.querySelector("#titl"),n=document.querySelector("#desc");t.style.opacity="0.1",e.style.opacity="0.1",n.style.opacity="0.1"}const t=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("id","form");const d=document.createElement("div");d.setAttribute("id","form-header");const c=document.createElement("h2");c.textContent="New Project",d.appendChild(c);const o=document.createElement("button");o.setAttribute("id","close-form"),o.textContent="x",o.addEventListener("click",n),d.appendChild(o),e.appendChild(d);const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("id","project_name"),i.setAttribute("value",""),i.setAttribute("placeholder","Name"),e.appendChild(i);const l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("id","project_description"),l.setAttribute("value",""),l.setAttribute("placeholder","Description"),e.appendChild(l);const a=document.createElement("button");a.setAttribute("id","submit"),a.textContent="Submit",a.addEventListener("click",p),e.appendChild(a),t.appendChild(e)}()}function h(){for(let t=0;t<q.length;t++)if(this.id===q[t].id){S=q[t],i(),d(),n(),o(S);break}}t.d({},{p9:()=>b,_1:()=>s,$O:()=>m,m9:()=>r,mL:()=>a,$d:()=>l,OM:()=>p,OV:()=>u});const y=(t,e)=>{let n=[],d=t.charAt(0).toUpperCase()+t.slice(1);return{id:t,name:d,tasks:n,description:e,add_task:t=>{n.push(t)}}},C=(t,e)=>{let n=t.charAt(0).toUpperCase()+t.slice(1);return{id:t,name:n,date:e}},E=y("overview","All tasks here"),f=y("sports","Sport tasks here");let A=-1;const k=C("dentist","2020-05-27"),v=C("run","2020-01-27"),x=C("eat","2018-10-11");E.add_task(k),E.add_task(v),E.add_task(x);let S=E,q=[E,f];e(q),i(),o(S)})();