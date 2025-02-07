import{S as h,i as a}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y="43804338-e495c959d27dd2a0f1faf63f4",g="https://pixabay.com/api/";function L(i){const o=new URLSearchParams({key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${g}?${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function P(i){const o=document.querySelector(".gallery");o.innerHTML="";const t=i.map(({webformatURL:r,largeImageURL:n,tags:u,likes:f,views:d,comments:m,downloads:p})=>`<li class="gallery-item">
            <a href = "${n}">
        <img src="${r}" alt="${u}"/>
    <ul class="gallery-info">
        <li>Likes<p>${f}</p></li>
        <li>Views<p>${d}</p></li>
        <li>Comments<p>${m}</p></li>
        <li>Downloads<p>${p}</p></li>
    </ul>
    </a>
    </li>`).join("");o.insertAdjacentHTML("beforeend",t);const s={captionsData:"alt",captionDelay:250};new h(".gallery a",s).refresh()}const S=document.querySelector(".search-form"),l=document.querySelector(".search-images"),c=document.querySelector(".loader");document.addEventListener("DOMContentLoaded",()=>{S.addEventListener("submit",function(i){i.preventDefault();const o=l.value.trim();if(o===""){alert("Please enter a search term!");return}c.style.display="block",L(o).then(t=>{t.hits.length===0&&a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),P(t.hits)}).catch(t=>{throw a.error({message:`Error fetching images: ${t.message}`,position:"topRight"}),t}).finally(()=>{c.style.display="none"}),l.value=""})});
//# sourceMappingURL=index.js.map
