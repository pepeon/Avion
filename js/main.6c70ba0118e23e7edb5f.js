(()=>{"use strict";const e=document.querySelector(".notice"),t=document.querySelectorAll(".stepper"),s=document.querySelector(".burger"),r=document.querySelector(".header__list"),l=document.querySelector(".catalog__mobile-btn"),c=document.querySelectorAll(".header__button");if(c&&c.forEach((e=>{"Cart"===e.getAttribute("aria-label")&&e.addEventListener("click",(()=>{window.location.href="cart.html"}))})),l){const e=document.querySelector(".filters");l.addEventListener("click",(()=>{e.classList.toggle("filters--active"),l.classList.toggle("catalog__mobile-btn--active")}))}if(r&&new TransferElements({sourceElement:r,breakpoints:{767.98:{targetElement:document.querySelector(".header__bottom"),targetPosition:1}}}),s){const e=document.querySelector(".header__bottom"),t=document.body;s.addEventListener("click",(()=>{s.classList.toggle("burger--active"),e.classList.toggle("header__bottom--active"),t.classList.toggle("stop-scroll")}))}e&&document.querySelector(".notice__close").addEventListener("click",(()=>{e.classList.add("notice--hidden")})),0!=t.length&&t.forEach((e=>{const t=e.querySelector(".stepper__input"),s=e.querySelector(".stepper__btn--minus"),r=e.querySelector(".stepper__btn--plus"),l=t.getAttribute("min"),c=t.getAttribute("max");let a=Number(t.value);t.addEventListener("input",(()=>{t.value<=+l&&(t.value=l,a=l,s.classList.add("stepper__btn--disabled"),r.classList.remove("stepper__btn--disabled")),t.value>=+c&&(t.value=c,a=c,r.classList.add("stepper__btn--disabled"),s.classList.remove("stepper__btn--disabled"))})),r.addEventListener("click",(()=>{c>a&&(s.classList.remove("stepper__btn--disabled"),r.classList.remove("stepper__btn--disabled"),t.value=++a),a==c&&r.classList.add("stepper__btn--disabled")})),s.addEventListener("click",(()=>{l<a&&(r.classList.remove("stepper__btn--disabled"),s.classList.remove("stepper__btn--disabled"),a--,t.value=a),a==l&&s.classList.add("stepper__btn--disabled")}))}))})();