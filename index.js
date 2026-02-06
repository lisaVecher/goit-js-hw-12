import{a as f,S as v,i as l}from"./assets/vendor-xpOxgMII.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();f.defaults.baseURL="https://pixabay.com/api/";async function w(o,r){return f.get("",{params:{key:"54439683-6bac37218bb416e8a78c2120a",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}}).then(a=>a.data)}const q=new v(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),p=document.querySelector(".gallery"),y=document.querySelector(".loader"),g=document.querySelector(".load-more");function S(o){const r=o.map(({webformatURL:a,largeImageURL:c,tags:e,likes:t,views:s,comments:b,downloads:L})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${c}">
      <div class="photo-item">
        <img
          class="gallery-image"
          src="${a}"
          alt="${e}"
        />
        <div class="photo-information">
        <p class="information-item"><b>Likes</b> ${t}</p>
                <p class="information-item"><b>Views</b> ${s}</p>
        <p class="information-item"><b>Comments</b> ${b}</p>
        <p class="information-item"><b>Downloads</b> ${L}</p>
</div>
</div>
      </a>
      </li>
  `).join("");p.insertAdjacentHTML("beforeend",r),q.refresh()}function P(){p.innerHTML=""}function M(){y.classList.remove("is-hidden")}function $(){y.classList.add("is-hidden")}function x(){g.classList.remove("is-hidden")}function n(){g.classList.add("is-hidden")}const u=document.querySelector(".form"),B=document.querySelector('input[name="search-text"]'),I=document.querySelector(".load-more");let d="",i=1;const O=15;let m=0;async function h(){M();try{const o=await w(d,i),{hits:r,totalHits:a}=o;if(i===1&&r.length===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!"}),n();return}S(r),m=Math.ceil(a/O),i<m?x():(n(),i!==1&&l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch{n(),l.error({message:"Please try again later."})}finally{$()}}I.addEventListener("click",async()=>{n(),i+=1,await h();const o=document.querySelector(".gallery-item");if(o){const{height:r}=o.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}});u.addEventListener("submit",async o=>{if(n(),o.preventDefault(),d=B.value.trim(),i=1,d===""){l.warning({message:"Please enter the text"});return}P(),await h(),u.reset()});
//# sourceMappingURL=index.js.map
