import{a as f,S as w,i as l}from"./assets/vendor-xpOxgMII.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();f.defaults.baseURL="https://pixabay.com/api/";async function q(o,r){return(await f.get("",{params:{key:"54439683-6bac37218bb416e8a78c2120a",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}const S=new w(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),p=document.querySelector(".gallery"),y=document.querySelector(".loader"),g=document.querySelector(".load-more");function P(o){const r=o.map(({webformatURL:a,largeImageURL:c,tags:e,likes:t,views:n,comments:L,downloads:v})=>`
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
                <p class="information-item"><b>Views</b> ${n}</p>
        <p class="information-item"><b>Comments</b> ${L}</p>
        <p class="information-item"><b>Downloads</b> ${v}</p>
</div>
</div>
      </a>
      </li>
  `).join("");p.insertAdjacentHTML("beforeend",r),S.refresh()}function M(){p.innerHTML=""}function $(){y.classList.remove("is-hidden")}function h(){y.classList.add("is-hidden")}function x(){g.classList.remove("is-hidden")}function i(){g.classList.add("is-hidden")}const u=document.querySelector(".form"),B=document.querySelector('input[name="search-text"]'),I=document.querySelector(".load-more");i();h();let d="",s=1;const O=15;let m=0;async function b(){$();try{const o=await q(d,s),{hits:r,totalHits:a}=o;if(s===1&&r.length===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!"}),i();return}P(r),m=Math.ceil(a/O),s<m?x():(i(),s!==1&&l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch{i(),l.error({message:"Please try again later."})}finally{h()}}I.addEventListener("click",async()=>{i(),s+=1,await b();const o=document.querySelector(".gallery-item");if(o){const{height:r}=o.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}});u.addEventListener("submit",async o=>{if(i(),o.preventDefault(),d=B.value.trim(),s=1,d===""){l.warning({message:"Please enter the text"});return}M(),await b(),u.reset()});
//# sourceMappingURL=index.js.map
