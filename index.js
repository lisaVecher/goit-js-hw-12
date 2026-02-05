import{a as c,S as p,i as n}from"./assets/vendor-xpOxgMII.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com/api/";let y=15;function g(i,r){return c.get("",{params:{key:"54439683-6bac37218bb416e8a78c2120a",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:y,page:r}}).then(o=>o.data)}const h=new p(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),u=document.querySelector(".gallery"),m=document.querySelector(".loader"),b=document.querySelector(".load-more");function L(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:a,comments:d,downloads:f})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${s}">
      <div class="photo-item">
        <img
          class="gallery-image"
          src="${o}"
          alt="${e}"
        />
        <div class="photo-information">
        <p class="information-item"><b>Likes</b> ${t}</p>
                <p class="information-item"><b>Views</b> ${a}</p>
        <p class="information-item"><b>Comments</b> ${d}</p>
        <p class="information-item"><b>Downloads</b> ${f}</p>
</div>
</div>
      </a>
      </li>
  `).join("");u.insertAdjacentHTML("beforeend",r),h.refresh()}function v(){u.innerHTML=""}function q(){m.classList.remove("is-hidden")}function S(){m.classList.add("is-hidden")}function P(){b.classList.add("is-hidden")}const l=document.querySelector(".form"),w=document.querySelector('input[name="search-text"]');let $=1;l.addEventListener("submit",i=>{P(),i.preventDefault();const r=w.value.trim();if(r===""){n.warning({message:"Please enter the text"});return}v(),q(),g(r,$).then(o=>{if(o.hits.length===0){n.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(o.hits)}).catch(()=>{n.error({message:"Please try again later."})}).finally(()=>{S(),l.reset()})});
//# sourceMappingURL=index.js.map
