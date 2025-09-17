import{S as f,i as l}from"./assets/vendor-BcHgwmCV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function d(s){const t="https://pixabay.com",a="52332038-e4c0548d3264099870d60baa2",n="/api/",e={key:a,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"};return axios.get(`${t}${n}`,{params:e}).then(r=>r.data.hits)}const o={galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")},m=new f(".gallery a",{captionsData:"alt",captionDelay:250});function p(s){return s.map(({webformatURL:t,largeImageURL:a,tags:n,likes:e,views:r,comments:i,downloads:u})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img class="gallery-image" src="${t}" alt="${n}" />
          <div class="info">
            <div class="info-item">
              <span class="info-label">Likes</span>
              <span class="info-value">${e}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Views</span>
              <span class="info-value">${r}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Comments</span>
              <span class="info-value">${i}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Downloads</span>
              <span class="info-value">${u}</span>
            </div>
          </div>
        </a>
      </li>`).join("")}function g(s){o.galleryList.innerHTML=p(s),m.refresh()}function y(){o.galleryList.innerHTML=""}function h(){o.loader.classList.remove("is-hidden")}function v(){o.loader.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",L);function L(s){s.preventDefault();const t=s.currentTarget.elements["search-text"].value.trim();if(!t){l.warning({title:"Warning",message:"please enter a search query"});return}y(),h(),d(t).then(a=>{const n=a;if(n.length===0){l.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!"});return}g(n)}).catch(a=>{console.error("Error fetching images:",a),l.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{v(),c.reset()})}
//# sourceMappingURL=index.js.map
