import"./style-PBnCUApt.js";const c=document.querySelectorAll("button.rounded-lg"),o=document.getElementById("dropdownNavbarLink"),d=document.getElementById("dropdownNavbar");let n=!1;const e=document.getElementById("mobileMenu"),t=document.getElementById("hamburgerIcon");window.addEventListener("DOMContentLoaded",()=>{c.forEach(s=>{s.textContent=Math.floor(Math.random()*(10**11-10**7+1)+10**7).toLocaleString()})});o==null||o.addEventListener("click",()=>{d==null||d.classList.toggle("hidden")});t==null||t.addEventListener("click",()=>{console.log(n),n=!n,e==null||e.classList.toggle("hidden"),e==null||e.classList.toggle("flex"),n===!1?t.innerHTML='<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />':t.innerHTML='<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />'});
