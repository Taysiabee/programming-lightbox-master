"use strict";var lightboxLinks=document.querySelector(".lightboxify");lightboxLinks.addEventListener("click",function(e){e.preventDefault();var t=document.createElement("div");t.style.position="fixed",t.style.width="100%",t.style.height="100%",t.style.top=0,t.style.backgroundColor="yellow",t.style.opacity=.75,document.body.appendChild(t);var o=document.createElement("div");o.classList.add("lightbox"),document.body.appendChild(o);var i=document.createElement("img");o.appendChild(i);var n=this.href;i.setAttribute("src",n),t.addEventListener("click",function(){t.remove(),o.remove(),console.log("clicked")}),document.addEventListener("keydown",function(e){27==e.keyCode&&(o.remove(),t.remove())})});
//# sourceMappingURL=main.js.map