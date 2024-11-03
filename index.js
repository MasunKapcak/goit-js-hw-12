import{S as p,a as u,i as l}from"./assets/vendor-D73Uttp0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=document.querySelector(".search-input"),d=document.getElementById("gallery"),m=document.querySelector(".search-form"),y=new p(".gallery li > a",{captionsData:"alt",captionDelay:250}),g=document.getElementById("load-more");let i=1,c="";async function h(){const s=f.value.trim();let r;s!==""&&s!==c?(i=1,c=s,d.innerHTML="",r=document.getElementById("loader-container")):r=document.getElementById("loader-more-container");const n=`https://pixabay.com/api/?key=46766267-b6642edcf68e61aa5f54d39e5&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${i}&per_page=40`;try{r.classList.remove("hidden");const t=(await u.get(n)).data;t.hits.length===0?l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(b(t.hits),g.classList.remove("hidden"),i++)}catch(e){l.error({title:"",message:`Sorry, ${e.message}! Please try again!`,position:"topRight"}),console.error(e)}finally{r.classList.add("hidden")}}function b(s){const r=s.map(o=>`
    <li class="card">
      <a href="${o.largeImageURL}">
        <img src="${o.webformatURL}" alt="${o.tags}" />
      </a>
      <div class="info">
        <p class="info-text"><b>Likes</b> ${o.likes}</p>
        <p class="info-text"><b>Views</b> ${o.views}</p>
        <p class="info-text"><b>Comments</b> ${o.comments}</p>
        <p class="info-text"><b>Downloads</b> ${o.downloads}</p>
      </div>
    </li> 
    `);d.innerHTML+=r.join(""),y.refresh()}m.addEventListener("submit",s=>{s.preventDefault(),h()});
//# sourceMappingURL=index.js.map
