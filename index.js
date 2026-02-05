import{a as l,S as p,i as n}from"./assets/vendor-xpOxgMII.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();l.defaults.baseURL="https://pixabay.com/api/";function y(o){return l.get("",{params:{key:"54439683-6bac37218bb416e8a78c2120a",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const g=new p(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),u=document.querySelector(".gallery"),m=document.querySelector(".loader");function h(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:a,comments:d,downloads:f})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${s}">
      <div class="photo-item">
        <img
          class="gallery-image"
          src="${i}"
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
  `).join("");u.insertAdjacentHTML("beforeend",r),g.refresh()}function b(){u.innerHTML=""}function L(){m.classList.remove("is-hidden")}function v(){m.classList.add("is-hidden")}const c=document.querySelector(".form"),q=document.querySelector('input[name="search-text"]');c.addEventListener("submit",o=>{o.preventDefault();const r=q.value.trim();if(r===""){n.warning({message:"Please enter the text"});return}b(),L(),y(r).then(i=>{if(i.hits.length===0){n.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(i.hits)}).catch(()=>{n.error({message:"Please try again later."})}).finally(()=>{v(),c.reset()})});
//# sourceMappingURL=index.js.map
