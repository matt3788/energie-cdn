!function(){"use strict";

// ============================================================
// LED Solutions — Single-Page Application Renderer
// Version 2.0 | Generated Build
// ============================================================

// --- Constants ---
var GREEN="#A3D55D",DARK="#1a1a1a",GRAY="#7A7A7A",WHITE="#FFFFFF",LIGHT="#F8F8F8",FOOTER_BG="#2a2a2a";
var EASE="cubic-bezier(0.16,1,0.3,1)";
var HS_ID="8518457";

// --- Utilities ---
function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!==undefined)e.innerHTML=html;return e}
function qs(s,p){return(p||document).querySelector(s)}
function qsa(s,p){return Array.from((p||document).querySelectorAll(s))}
function on(el,ev,fn){el.addEventListener(ev,fn)}
function attr(e,k,v){e.setAttribute(k,v)}
function fmt$(n){if(n>=1e6)return"$"+( n/1e6).toFixed(1)+"M";if(n>=1e3)return"$"+(n/1e3).toFixed(1)+"K";return"$"+Math.round(n)}
function fmtN(n){if(n>=1e6)return(n/1e6).toFixed(1)+"M+";if(n>=1e3)return Math.round(n/1e3)+"K+";return""+Math.round(n)}

// --- Load Inter from Google Fonts ---
(function(){var l=el("link");l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";document.head.appendChild(l)}());

// --- Inject CSS ---
(function(){var s=el("style");s.textContent=`
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%;font-size:16px}
body{font-family:'Inter',system-ui,-apple-system,sans-serif;color:#333;background:#fff;overflow-x:hidden;line-height:1.6;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
::selection{background:rgba(163,213,93,.25);color:#1a1a1a}
::-webkit-scrollbar{width:6px}
::-webkit-scrollbar-track{background:#f1f1f1}
::-webkit-scrollbar-thumb{background:#ccc;border-radius:3px}
::-webkit-scrollbar-thumb:hover{background:#aaa}
img{max-width:100%;height:auto;display:block}
a{color:inherit;text-decoration:none}
button{cursor:pointer;border:none;background:none;font-family:inherit}
input,select,textarea{font-family:inherit;font-size:inherit}
h1,h2,h3,h4,h5,h6{line-height:1.2;font-weight:600}
.ls-scroll-progress{position:fixed;top:0;left:0;width:0;height:3px;background:#A3D55D;z-index:10001;transition:width .1s linear}
.ls-nav{position:fixed;top:0;left:0;right:0;z-index:1000;padding:18px 40px;display:flex;align-items:center;justify-content:space-between;transition:all .3s cubic-bezier(.16,1,.3,1)}
.ls-nav.scrolled{padding:12px 40px;background:rgba(255,255,255,.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 1px 3px rgba(0,0,0,.08)}
.ls-nav.hidden{transform:translateY(-100%)}
.ls-nav-logo{font-size:22px;font-weight:700;color:#1a1a1a;letter-spacing:-.5px;display:flex;align-items:center;gap:8px}
.ls-nav-logo span{color:#A3D55D}
.ls-nav-links{display:flex;align-items:center;gap:32px;list-style:none}
.ls-nav-links a{font-size:14px;font-weight:500;color:#555;transition:color .2s;position:relative}
.ls-nav-links a:hover{color:#1a1a1a}
.ls-nav-links a::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:2px;background:#A3D55D;transition:width .25s cubic-bezier(.16,1,.3,1)}
.ls-nav-links a:hover::after{width:100%}
.ls-nav-cta{background:#A3D55D;color:#1a1a1a;padding:10px 22px;border-radius:6px;font-size:14px;font-weight:600;transition:all .2s cubic-bezier(.16,1,.3,1)}
.ls-nav-cta:hover{background:#8ec843;transform:translateY(-1px);box-shadow:0 4px 12px rgba(163,213,93,.3)}
.ls-hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;z-index:1001;padding:4px}
.ls-hamburger span{width:24px;height:2px;background:#1a1a1a;transition:all .3s}
.ls-hamburger.active span:nth-child(1){transform:rotate(45deg) translate(5px,5px)}
.ls-hamburger.active span:nth-child(2){opacity:0}
.ls-hamburger.active span:nth-child(3){transform:rotate(-45deg) translate(5px,-5px)}
.ls-mobile-menu{position:fixed;top:0;right:-100%;width:80%;max-width:360px;height:100vh;background:#fff;z-index:999;padding:80px 32px 32px;transition:right .35s cubic-bezier(.16,1,.3,1);box-shadow:-4px 0 20px rgba(0,0,0,.1);display:flex;flex-direction:column;gap:0}
.ls-mobile-menu.open{right:0}
.ls-mobile-menu a{display:block;padding:16px 0;font-size:18px;font-weight:500;color:#333;border-bottom:1px solid #eee;transition:color .2s}
.ls-mobile-menu a:hover{color:#A3D55D}
.ls-mobile-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.4);z-index:998;opacity:0;pointer-events:none;transition:opacity .3s}
.ls-mobile-overlay.show{opacity:1;pointer-events:auto}
.ls-container{max-width:1200px;margin:0 auto;padding:0 24px}
.ls-section{padding:80px 0}
.ls-section-dark{background:#1a1a1a;color:#fff}
.ls-section-gray{background:#F8F8F8}
.ls-section-title{font-size:clamp(28px,4vw,42px);font-weight:700;color:#1a1a1a;margin-bottom:16px;letter-spacing:-.5px}
.ls-section-subtitle{font-size:18px;color:#7A7A7A;max-width:640px;line-height:1.7}
.ls-btn{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;border-radius:6px;font-size:15px;font-weight:600;transition:all .2s cubic-bezier(.16,1,.3,1)}
.ls-btn-primary{background:#A3D55D;color:#1a1a1a}
.ls-btn-primary:hover{background:#8ec843;transform:translateY(-2px);box-shadow:0 6px 20px rgba(163,213,93,.3)}
.ls-btn-secondary{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.3)}
.ls-btn-secondary:hover{border-color:#fff;background:rgba(255,255,255,.08)}
.ls-btn-outline{background:transparent;color:#1a1a1a;border:1px solid #ddd}
.ls-btn-outline:hover{border-color:#A3D55D;color:#A3D55D}
.ls-hero{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#1a1a1a;color:#fff;text-align:center;padding:120px 24px 80px;position:relative;overflow:hidden}
.ls-hero::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(ellipse at 50% 50%,rgba(163,213,93,.06) 0%,transparent 70%);pointer-events:none}
.ls-hero h1{font-size:clamp(40px,7vw,80px);font-weight:700;letter-spacing:-2px;line-height:1.05;margin-bottom:24px}
.ls-hero h1 span{color:#A3D55D}
.ls-hero-counter{font-size:clamp(20px,3vw,32px);color:rgba(255,255,255,.7);margin-bottom:40px;font-weight:300}
.ls-hero-counter strong{color:#A3D55D;font-weight:600}
.ls-hero-ctas{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
.ls-proof-band{padding:60px 0;background:#fff}
.ls-proof-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;text-align:center}
.ls-proof-item .ls-proof-value{font-size:clamp(32px,5vw,52px);font-weight:700;color:#1a1a1a;letter-spacing:-1px}
.ls-proof-item .ls-proof-value span{color:#A3D55D}
.ls-proof-item .ls-proof-label{font-size:14px;color:#7A7A7A;margin-top:4px;font-weight:500}
.ls-triptych{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:48px}
.ls-triptych-card{background:#1a1a1a;border-radius:12px;padding:48px 32px;color:#fff;position:relative;overflow:hidden;transition:all .3s cubic-bezier(.16,1,.3,1);cursor:pointer}
.ls-triptych-card::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,rgba(163,213,93,.08) 0%,transparent 60%);opacity:0;transition:opacity .3s}
.ls-triptych-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,.15)}
.ls-triptych-card:hover::before{opacity:1}
.ls-triptych-card h3{font-size:22px;margin-bottom:12px;position:relative;z-index:1}
.ls-triptych-card p{color:rgba(255,255,255,.7);font-size:15px;line-height:1.7;position:relative;z-index:1;margin-bottom:20px}
.ls-triptych-card .ls-card-link{color:#A3D55D;font-weight:600;font-size:14px;position:relative;z-index:1;display:inline-flex;align-items:center;gap:6px}
.ls-featured-cs{background:#F8F8F8;padding:80px 0}
.ls-cs-content{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
.ls-ba-slider{position:relative;width:100%;aspect-ratio:4/3;border-radius:12px;overflow:hidden;cursor:ew-resize;user-select:none}
.ls-ba-before,.ls-ba-after{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:600}
.ls-ba-before{background:linear-gradient(135deg,#3d3020,#5a4830);color:rgba(255,200,100,.8);z-index:1}
.ls-ba-after{background:linear-gradient(135deg,#e8eef5,#f0f4f8);color:rgba(30,60,100,.5);clip-path:inset(0 50% 0 0);z-index:2;transition:clip-path 0s}
.ls-ba-handle{position:absolute;top:0;bottom:0;left:50%;width:4px;background:#A3D55D;z-index:3;transform:translateX(-50%);cursor:ew-resize}
.ls-ba-handle::after{content:'⟷';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:40px;height:40px;background:#A3D55D;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;color:#1a1a1a;box-shadow:0 2px 8px rgba(0,0,0,.2)}
.ls-ba-label{position:absolute;bottom:16px;padding:6px 14px;background:rgba(0,0,0,.6);color:#fff;font-size:12px;font-weight:600;border-radius:4px;z-index:4;text-transform:uppercase;letter-spacing:1px}
.ls-ba-label-before{left:16px}
.ls-ba-label-after{right:16px}
.ls-cs-metrics{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:24px}
.ls-cs-metric{background:#fff;padding:20px;border-radius:8px;border:1px solid #eee}
.ls-cs-metric-value{font-size:28px;font-weight:700;color:#1a1a1a}
.ls-cs-metric-label{font-size:13px;color:#7A7A7A;margin-top:2px}
.ls-timeline{padding:80px 0}
.ls-timeline-track{display:flex;gap:0;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;padding-bottom:20px;scrollbar-width:none}
.ls-timeline-track::-webkit-scrollbar{display:none}
.ls-timeline-step{flex:0 0 280px;scroll-snap-align:start;padding:32px;position:relative}
.ls-timeline-step::before{content:'';position:absolute;top:0;left:32px;right:-32px;height:2px;background:#eee}
.ls-timeline-num{width:40px;height:40px;background:#A3D55D;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;color:#1a1a1a;margin-bottom:16px;position:relative;z-index:1}
.ls-timeline-step h4{font-size:18px;margin-bottom:8px;color:#1a1a1a}
.ls-timeline-step p{font-size:14px;color:#7A7A7A;line-height:1.6}
.ls-calc-section{padding:80px 0}
.ls-calc-wrap{max-width:640px;margin:0 auto;background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.08);padding:48px;border:1px solid #eee}
.ls-calc-progress{display:flex;gap:8px;margin-bottom:40px}
.ls-calc-progress-step{flex:1;height:4px;background:#eee;border-radius:2px;transition:background .3s}
.ls-calc-progress-step.active{background:#A3D55D}
.ls-calc-step{display:none}
.ls-calc-step.active{display:block}
.ls-calc-step h3{font-size:22px;margin-bottom:8px;color:#1a1a1a}
.ls-calc-step p{font-size:14px;color:#7A7A7A;margin-bottom:24px}
.ls-form-group{margin-bottom:24px}
.ls-form-group label{display:block;font-size:14px;font-weight:500;color:#333;margin-bottom:8px}
.ls-form-group input,.ls-form-group select,.ls-form-group textarea{width:100%;padding:12px 16px;border:1px solid #ddd;border-radius:8px;font-size:15px;transition:border-color .2s;background:#fff;color:#333}
.ls-form-group input:focus,.ls-form-group select:focus,.ls-form-group textarea:focus{outline:none;border-color:#A3D55D;box-shadow:0 0 0 3px rgba(163,213,93,.15)}
.ls-slider-wrap{position:relative;padding:8px 0}
.ls-slider-wrap input[type=range]{width:100%;-webkit-appearance:none;height:6px;background:#eee;border-radius:3px;outline:none}
.ls-slider-wrap input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:24px;height:24px;background:#A3D55D;border-radius:50%;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.15)}
.ls-slider-value{text-align:center;font-size:32px;font-weight:700;color:#1a1a1a;margin-bottom:8px}
.ls-calc-nav{display:flex;justify-content:space-between;margin-top:32px}
.ls-results{text-align:center}
.ls-results h3{font-size:28px;margin-bottom:32px}
.ls-results-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:32px}
.ls-result-card{background:#F8F8F8;padding:24px;border-radius:12px;text-align:center}
.ls-result-card .ls-result-value{font-size:32px;font-weight:700;color:#1a1a1a}
.ls-result-card .ls-result-value.green{color:#A3D55D}
.ls-result-card .ls-result-label{font-size:13px;color:#7A7A7A;margin-top:4px}
.ls-donut-wrap{width:180px;height:180px;margin:0 auto 32px;position:relative}
.ls-donut-wrap svg{width:100%;height:100%;transform:rotate(-90deg)}
.ls-donut-wrap .ls-donut-label{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center}
.ls-donut-wrap .ls-donut-pct{font-size:36px;font-weight:700;color:#1a1a1a}
.ls-donut-wrap .ls-donut-txt{font-size:12px;color:#7A7A7A}
.ls-page-hero{padding:140px 24px 80px;text-align:center;background:#1a1a1a;color:#fff}
.ls-page-hero h1{font-size:clamp(32px,5vw,56px);font-weight:700;letter-spacing:-1px;margin-bottom:16px}
.ls-page-hero p{font-size:18px;color:rgba(255,255,255,.7);max-width:640px;margin:0 auto;line-height:1.7}
.ls-page-hero .ls-hero-ctas{margin-top:32px}
.ls-content-section{padding:60px 0}
.ls-content-section h2{font-size:clamp(24px,3.5vw,36px);font-weight:700;color:#1a1a1a;margin-bottom:16px;letter-spacing:-.5px}
.ls-content-section h3{font-size:20px;font-weight:600;color:#1a1a1a;margin-bottom:8px;margin-top:32px}
.ls-content-section p{font-size:16px;color:#555;line-height:1.8;margin-bottom:16px;max-width:800px}
.ls-content-section ul{list-style:none;padding:0;margin-bottom:24px}
.ls-content-section ul li{padding:8px 0 8px 24px;position:relative;color:#555;font-size:15px;line-height:1.7}
.ls-content-section ul li::before{content:'';position:absolute;left:0;top:16px;width:8px;height:8px;background:#A3D55D;border-radius:50%}
.ls-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
.ls-comp-table{width:100%;border-collapse:collapse;margin:24px 0 32px;font-size:14px}
.ls-comp-table th,.ls-comp-table td{padding:14px 16px;text-align:left;border-bottom:1px solid #eee}
.ls-comp-table th{font-weight:600;color:#1a1a1a;background:#F8F8F8;font-size:13px;text-transform:uppercase;letter-spacing:.5px}
.ls-comp-table td:first-child{font-weight:500;color:#333}
.ls-comp-table td:nth-child(2){color:#A3D55D;font-weight:500}
.ls-comp-table td:nth-child(3){color:#7A7A7A}
.ls-case-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:24px;margin-top:40px}
.ls-case-card{background:#fff;border-radius:12px;overflow:hidden;border:1px solid #eee;transition:all .3s cubic-bezier(.16,1,.3,1)}
.ls-case-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,.08)}
.ls-case-card-img{height:200px;background:#1a1a1a;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.3);font-size:14px;font-weight:500}
.ls-case-card-body{padding:24px}
.ls-case-card-body h3{font-size:20px;margin-bottom:8px;color:#1a1a1a}
.ls-case-card-body p{font-size:14px;color:#7A7A7A;line-height:1.6;margin-bottom:16px}
.ls-case-stats{display:flex;gap:16px;margin-bottom:16px;flex-wrap:wrap}
.ls-case-stat{background:#F8F8F8;padding:8px 14px;border-radius:6px;font-size:13px}
.ls-case-stat strong{color:#1a1a1a;display:block;font-size:18px}
.ls-case-stat span{color:#7A7A7A}
.ls-cta-section{padding:80px 0;text-align:center;background:#1a1a1a;color:#fff}
.ls-cta-section h2{font-size:clamp(28px,4vw,42px);font-weight:700;margin-bottom:16px;letter-spacing:-.5px}
.ls-cta-section p{font-size:18px;color:rgba(255,255,255,.7);max-width:600px;margin:0 auto 32px;line-height:1.7}
.ls-cta-section .ls-hero-ctas{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
.ls-footer{background:#2a2a2a;color:rgba(255,255,255,.7);padding:60px 0 30px}
.ls-footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px}
.ls-footer h4{color:#fff;font-size:16px;margin-bottom:16px;font-weight:600}
.ls-footer p{font-size:14px;line-height:1.7;margin-bottom:8px}
.ls-footer a{color:rgba(255,255,255,.7);font-size:14px;display:block;padding:4px 0;transition:color .2s}
.ls-footer a:hover{color:#A3D55D}
.ls-footer-bottom{border-top:1px solid rgba(255,255,255,.1);padding-top:24px;display:flex;justify-content:space-between;align-items:center;font-size:13px}
.ls-sticky-quiz{position:fixed;bottom:-80px;left:0;right:0;background:#1a1a1a;color:#fff;padding:14px 24px;display:flex;align-items:center;justify-content:center;gap:16px;z-index:900;transition:bottom .4s cubic-bezier(.16,1,.3,1);box-shadow:0 -4px 20px rgba(0,0,0,.15)}
.ls-sticky-quiz.show{bottom:0}
.ls-sticky-quiz p{font-size:14px;font-weight:500}
.ls-sticky-quiz button{background:#A3D55D;color:#1a1a1a;padding:10px 20px;border-radius:6px;font-size:14px;font-weight:600}
.ls-modal-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:2000;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .3s}
.ls-modal-overlay.show{opacity:1;pointer-events:auto}
.ls-modal{background:#fff;border-radius:16px;max-width:560px;width:90%;max-height:85vh;overflow-y:auto;padding:40px;position:relative}
.ls-modal-close{position:absolute;top:16px;right:16px;width:32px;height:32px;border-radius:50%;background:#f5f5f5;display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;transition:background .2s}
.ls-modal-close:hover{background:#eee}
.ls-quiz-q{margin-bottom:24px}
.ls-quiz-q h4{font-size:16px;margin-bottom:12px;color:#1a1a1a}
.ls-quiz-options{display:flex;flex-direction:column;gap:8px}
.ls-quiz-option{padding:12px 16px;border:1px solid #ddd;border-radius:8px;cursor:pointer;transition:all .2s;font-size:14px}
.ls-quiz-option:hover{border-color:#A3D55D;background:rgba(163,213,93,.05)}
.ls-quiz-option.selected{border-color:#A3D55D;background:rgba(163,213,93,.1);font-weight:500}
.ls-audit-form{max-width:640px;margin:0 auto}
.ls-audit-progress{display:flex;gap:4px;margin-bottom:32px}
.ls-audit-progress-step{flex:1;height:4px;background:#eee;border-radius:2px;transition:background .3s}
.ls-audit-progress-step.active{background:#A3D55D}
.ls-checkbox-group{display:flex;flex-direction:column;gap:10px}
.ls-checkbox-item{display:flex;align-items:center;gap:10px;padding:10px 14px;border:1px solid #ddd;border-radius:8px;cursor:pointer;transition:all .2s}
.ls-checkbox-item:hover{border-color:#A3D55D}
.ls-checkbox-item.checked{border-color:#A3D55D;background:rgba(163,213,93,.08)}
.ls-checkbox-item input[type=checkbox]{accent-color:#A3D55D;width:18px;height:18px}
.ls-contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;margin-top:40px}
.ls-contact-info-item{display:flex;gap:16px;margin-bottom:24px}
.ls-contact-info-item .ls-ci-icon{width:44px;height:44px;background:#F8F8F8;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}
.ls-contact-info-item h4{font-size:15px;font-weight:600;color:#1a1a1a;margin-bottom:2px}
.ls-contact-info-item p{font-size:14px;color:#7A7A7A}
.ls-blog-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;margin-top:40px}
.ls-blog-card{background:#fff;border-radius:12px;overflow:hidden;border:1px solid #eee;transition:all .3s}
.ls-blog-card:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,.06)}
.ls-blog-card-img{height:180px;background:#F8F8F8;display:flex;align-items:center;justify-content:center;color:#aaa;font-size:13px}
.ls-blog-card-body{padding:20px}
.ls-blog-card-body .ls-blog-tag{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#A3D55D;font-weight:600;margin-bottom:8px}
.ls-blog-card-body h3{font-size:18px;color:#1a1a1a;margin-bottom:8px;line-height:1.4}
.ls-blog-card-body p{font-size:14px;color:#7A7A7A;line-height:1.6}
.ls-newsletter{background:#F8F8F8;padding:60px 0;text-align:center}
.ls-newsletter h3{font-size:24px;margin-bottom:8px;color:#1a1a1a}
.ls-newsletter p{color:#7A7A7A;margin-bottom:24px;font-size:15px}
.ls-newsletter-form{display:flex;gap:12px;max-width:440px;margin:0 auto}
.ls-newsletter-form input{flex:1;padding:12px 16px;border:1px solid #ddd;border-radius:8px;font-size:15px}
.ls-newsletter-form button{background:#A3D55D;color:#1a1a1a;padding:12px 24px;border-radius:8px;font-weight:600;font-size:14px;white-space:nowrap}
.ls-sports-features{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:24px;margin-top:32px}
.ls-sports-card{padding:24px;background:#fff;border-radius:12px;border:1px solid #eee}
.ls-sports-card h4{font-size:16px;margin-bottom:8px;color:#1a1a1a}
.ls-sports-card p{font-size:14px;color:#7A7A7A;line-height:1.6}
.ls-savings-table{width:100%;border-collapse:collapse;margin:32px 0;font-size:14px}
.ls-savings-table th,.ls-savings-table td{padding:14px 16px;text-align:left;border-bottom:1px solid #eee}
.ls-savings-table th{font-weight:600;color:#1a1a1a;background:#F8F8F8}
.ls-rebate-types{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-top:24px}
.ls-rebate-card{padding:24px;background:#fff;border-radius:12px;border:1px solid #eee}
.ls-rebate-card h4{font-size:16px;margin-bottom:8px;color:#1a1a1a}
.ls-rebate-card p{font-size:14px;color:#7A7A7A;line-height:1.6}
.ls-values-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:32px}
.ls-value-card{padding:28px;background:#fff;border-radius:12px;border:1px solid #eee}
.ls-value-card h4{font-size:18px;margin-bottom:8px;color:#1a1a1a}
.ls-value-card p{font-size:14px;color:#7A7A7A;line-height:1.7}
.ls-confirmation{text-align:center;padding:40px 0}
.ls-confirmation h3{font-size:24px;color:#1a1a1a;margin-bottom:16px}
.ls-confirmation p{color:#7A7A7A;font-size:15px;line-height:1.7;margin-bottom:8px}
.ls-quiz-results{text-align:center;padding:20px 0}
.ls-quiz-results h3{font-size:24px;margin-bottom:8px}
.ls-quiz-score{font-size:64px;font-weight:700;color:#A3D55D;margin:16px 0}
.ls-quiz-results p{color:#7A7A7A;margin-bottom:16px;font-size:15px}
.ls-fade-in{opacity:0;transform:translateY(20px);transition:opacity .6s cubic-bezier(.16,1,.3,1),transform .6s cubic-bezier(.16,1,.3,1)}
.ls-fade-in.visible{opacity:1;transform:translateY(0)}
@media(max-width:1024px){
.ls-proof-grid{grid-template-columns:repeat(2,1fr);gap:24px}
.ls-triptych{grid-template-columns:1fr}
.ls-cs-content{grid-template-columns:1fr}
.ls-footer-grid{grid-template-columns:1fr 1fr}
.ls-grid-2{grid-template-columns:1fr}
.ls-contact-grid{grid-template-columns:1fr}
}
@media(max-width:768px){
.ls-nav-links{display:none}
.ls-nav .ls-nav-cta{display:none}
.ls-hamburger{display:flex}
.ls-hero h1{font-size:clamp(32px,8vw,48px)}
.ls-proof-grid{grid-template-columns:1fr 1fr}
.ls-timeline-step{flex:0 0 260px}
.ls-results-grid{grid-template-columns:1fr}
.ls-footer-grid{grid-template-columns:1fr}
.ls-footer-bottom{flex-direction:column;gap:8px;text-align:center}
.ls-calc-wrap{padding:28px 20px}
.ls-newsletter-form{flex-direction:column}
.ls-case-grid{grid-template-columns:1fr}
}

.ls-page-hero::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(ellipse at 50% 50%,rgba(163,213,93,.06) 0%,transparent 70%);pointer-events:none}
.ls-hero-badge{display:inline-block;padding:6px 16px;border:1px solid rgba(255,255,255,.2);border-radius:20px;font-size:12px;font-weight:500;color:rgba(255,255,255,.6);margin-bottom:24px;text-transform:uppercase;letter-spacing:1.5px}
.ls-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
.ls-grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
.ls-icon-card{padding:32px;background:#fff;border-radius:12px;border:1px solid #eee;text-align:center;transition:all .3s}
.ls-icon-card:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,.06)}
.ls-icon-card .ls-ic-icon{width:56px;height:56px;background:#F8F8F8;border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:24px}
.ls-icon-card h4{font-size:16px;margin-bottom:6px;color:#1a1a1a}
.ls-icon-card p{font-size:13px;color:#7A7A7A;line-height:1.6}
.ls-stat-bar{height:8px;background:#eee;border-radius:4px;margin-top:8px;overflow:hidden}
.ls-stat-bar-fill{height:100%;background:#A3D55D;border-radius:4px;transition:width 1s cubic-bezier(.16,1,.3,1);width:0}
.ls-stat-bar-fill.animated{width:var(--fill-width)}
.ls-process-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.ls-process-card{position:relative;padding:28px;background:#fff;border-radius:12px;border:1px solid #eee}
.ls-process-card .ls-pc-num{position:absolute;top:-12px;left:20px;width:28px;height:28px;background:#A3D55D;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:#1a1a1a}
.ls-process-card h4{margin-top:8px;font-size:16px;margin-bottom:6px;color:#1a1a1a}
.ls-process-card p{font-size:13px;color:#7A7A7A;line-height:1.6}
.ls-testimonial{background:#F8F8F8;border-radius:12px;padding:32px;margin:32px 0;position:relative}
.ls-testimonial::before{content:'\u201C';position:absolute;top:8px;left:20px;font-size:60px;color:rgba(163,213,93,.3);line-height:1}
.ls-testimonial blockquote{font-size:16px;color:#555;line-height:1.8;font-style:italic;padding-left:12px}
.ls-testimonial cite{display:block;margin-top:12px;font-size:14px;font-weight:600;color:#1a1a1a;font-style:normal}
.ls-faq{margin-top:32px}
.ls-faq-item{border-bottom:1px solid #eee;padding:16px 0}
.ls-faq-q{display:flex;justify-content:space-between;align-items:center;cursor:pointer;font-size:16px;font-weight:500;color:#1a1a1a;gap:16px}
.ls-faq-q::after{content:'+';font-size:20px;color:#7A7A7A;transition:transform .3s;flex-shrink:0}
.ls-faq-item.open .ls-faq-q::after{transform:rotate(45deg)}
.ls-faq-a{max-height:0;overflow:hidden;transition:max-height .3s;font-size:14px;color:#7A7A7A;line-height:1.7}
.ls-faq-item.open .ls-faq-a{max-height:300px;padding-top:12px}
.ls-partners{display:flex;gap:32px;align-items:center;justify-content:center;flex-wrap:wrap;padding:40px 0;opacity:.5;filter:grayscale(1);transition:all .3s}
.ls-partners:hover{opacity:.8;filter:grayscale(0)}
.ls-partner-logo{padding:12px 24px;background:#F8F8F8;border-radius:8px;font-size:13px;font-weight:600;color:#999;letter-spacing:1px}
.ls-breadcrumb{font-size:13px;color:rgba(255,255,255,.4);margin-bottom:16px}
.ls-breadcrumb a{color:rgba(255,255,255,.5);transition:color .2s}
.ls-breadcrumb a:hover{color:#A3D55D}
.ls-tag{display:inline-block;padding:4px 10px;background:rgba(163,213,93,.1);color:#7A7A7A;font-size:11px;font-weight:600;border-radius:4px;text-transform:uppercase;letter-spacing:.5px}
.ls-divider{width:60px;height:3px;background:#A3D55D;border-radius:2px;margin:24px 0}
.ls-highlight-box{background:linear-gradient(135deg,rgba(163,213,93,.05),rgba(163,213,93,.1));border:1px solid rgba(163,213,93,.2);border-radius:12px;padding:24px;margin:24px 0}
.ls-highlight-box h4{color:#1a1a1a;font-size:16px;margin-bottom:8px}
.ls-highlight-box p{color:#555;font-size:14px;line-height:1.7}
.ls-tooltip{position:relative;cursor:help;border-bottom:1px dashed #7A7A7A}
.ls-tooltip:hover::after{content:attr(data-tip);position:absolute;bottom:100%;left:50%;transform:translateX(-50%);background:#1a1a1a;color:#fff;padding:6px 12px;border-radius:6px;font-size:12px;white-space:nowrap;z-index:100;margin-bottom:4px}
@media(max-width:1024px){
.ls-grid-3{grid-template-columns:1fr 1fr}
.ls-grid-4{grid-template-columns:1fr 1fr}
.ls-process-grid{grid-template-columns:1fr}
}
@media(max-width:768px){
.ls-grid-3{grid-template-columns:1fr}
.ls-grid-4{grid-template-columns:1fr}
.ls-hero-badge{font-size:10px}
}
`;document.head.appendChild(s)}());

// --- HubSpot Tracking ---
function loadHubSpot(){var s=el("script");s.async=true;s.defer=true;s.src="//js.hs-scripts.com/"+HS_ID+".js";document.head.appendChild(s)}
function hsTrack(path,title){var _hsq=window._hsq=window._hsq||[];_hsq.push(["setPath",path]);_hsq.push(["trackPageView"])}

// --- Scroll Progress Bar ---
var scrollBar;
function initScrollProgress(){scrollBar=el("div","ls-scroll-progress");document.body.appendChild(scrollBar);on(window,"scroll",updateScrollProgress)}
function updateScrollProgress(){var h=document.documentElement.scrollHeight-window.innerHeight;var p=h>0?(window.scrollY/h)*100:0;if(scrollBar)scrollBar.style.width=p+"%"}

// --- Navigation ---
var nav,mobileMenu,mobileOverlay,hamburger,lastScroll=0,navHidden=false;
function buildNav(){
  nav=el("nav","ls-nav");
  nav.innerHTML='<a href="#/" class="ls-nav-logo">LED <span>Solutions</span></a>'+
    '<ul class="ls-nav-links">'+
    '<li><a href="#/services">Services</a></li>'+
    '<li><a href="#/calculator">Calculator</a></li>'+
    '<li><a href="#/case-studies">Case Studies</a></li>'+
    '<li><a href="#/about">About</a></li>'+
    '<li><a href="#/contact">Contact</a></li>'+
    '</ul>'+
    '<a href="#/free-energy-audit" class="ls-nav-cta">Free Energy Audit</a>'+
    '<div class="ls-hamburger"><span></span><span></span><span></span></div>';
  document.body.prepend(nav);
  hamburger=qs(".ls-hamburger",nav);
  mobileOverlay=el("div","ls-mobile-overlay");
  document.body.appendChild(mobileOverlay);
  mobileMenu=el("div","ls-mobile-menu");
  mobileMenu.innerHTML='<a href="#/">Home</a><a href="#/services">Services</a><a href="#/calculator">Calculator</a><a href="#/case-studies">Case Studies</a><a href="#/about">About</a><a href="#/contact">Contact</a><a href="#/free-energy-audit">Free Energy Audit</a>';
  document.body.appendChild(mobileMenu);
  on(hamburger,"click",toggleMobile);
  on(mobileOverlay,"click",closeMobile);
  qsa("a",mobileMenu).forEach(function(a){on(a,"click",closeMobile)});
  var debounced;on(window,"scroll",function(){clearTimeout(debounced);debounced=setTimeout(handleNavScroll,10)});
}
function toggleMobile(){hamburger.classList.toggle("active");mobileMenu.classList.toggle("open");mobileOverlay.classList.toggle("show")}
function closeMobile(){hamburger.classList.remove("active");mobileMenu.classList.remove("open");mobileOverlay.classList.remove("show")}
function handleNavScroll(){var y=window.scrollY;if(y>60)nav.classList.add("scrolled");else nav.classList.remove("scrolled");if(y>lastScroll&&y>300){nav.classList.add("hidden")}else{nav.classList.remove("hidden")}lastScroll=y}

// --- Router ---
var appRoot;
var routes={
  "/":pageHome,
  "/services":pageServices,
  "/services/retrofit":pageRetrofit,
  "/services/controls":pageControls,
  "/services/rebates":pageRebates,
  "/services/sports":pageSports,
  "/calculator":pageCalculator,
  "/case-studies":pageCaseStudies,
  "/about":pageAbout,
  "/blog":pageBlog,
  "/contact":pageContact,
  "/free-energy-audit":pageAudit,
  "/quiz":pageQuiz
};

function navigate(){
  var hash=location.hash.replace(/^#/,"")||"/";
  var fn=routes[hash]||pageHome;
  window.scrollTo(0,0);
  if(!appRoot){appRoot=el("div","ls-app");document.body.appendChild(appRoot)}
  appRoot.innerHTML="";
  fn(appRoot);
  initAnimations();
  initStaggeredAnimations();
  addSectionAnchors();
  initSectionTracking();
  if(hash==="/")setTimeout(initHeroScroll,100);
  hsTrack(hash,document.title);
  closeMobile();
  // Reset scroll depths on navigation
  scrollDepths={25:false,50:false,75:false,100:false};
}

// --- Footer ---
function buildFooter(root){
  var f=el("footer","ls-footer");
  f.innerHTML='<div class="ls-container"><div class="ls-footer-grid">'+
    '<div><h4>LED Solutions</h4><p>Turnkey LED lighting and controls for commercial and industrial facilities across the Southeast United States.</p><p style="margin-top:16px;font-size:13px;color:rgba(255,255,255,.4)">We Work. You Save.</p></div>'+
    '<div><h4>Services</h4><a href="#/services/retrofit">LED Retrofit</a><a href="#/services/controls">Controls</a><a href="#/services/rebates">Rebate Navigator</a><a href="#/services/sports">Sports Lighting</a></div>'+
    '<div><h4>Resources</h4><a href="#/calculator">Savings Calculator</a><a href="#/case-studies">Case Studies</a><a href="#/blog">Blog</a><a href="#/quiz">Diagnostic Quiz</a></div>'+
    '<div><h4>Contact</h4><p>Southeast United States</p><p>Mon–Fri: 7AM–6PM</p><a href="#/contact">Get in Touch</a><a href="#/free-energy-audit" style="color:#A3D55D;margin-top:8px">Free Energy Audit →</a></div>'+
    '</div><div class="ls-footer-bottom"><span>© '+new Date().getFullYear()+' LED Solutions. All rights reserved.</span><span>Serving the Southeast United States</span></div></div>';
  root.appendChild(f);
}

// --- CTA Section Builder ---
function buildCTA(root,headline,sub,btn1Text,btn1Hash,btn2Text,btn2Hash){
  var s=el("section","ls-cta-section");
  var h='<div class="ls-container"><h2>'+headline+'</h2><p>'+sub+'</p><div class="ls-hero-ctas">'+
    '<a href="'+btn1Hash+'" class="ls-btn ls-btn-primary">'+btn1Text+'</a>';
  if(btn2Text)h+='<a href="'+btn2Hash+'" class="ls-btn ls-btn-secondary">'+btn2Text+'</a>';
  h+='</div></div>';
  s.innerHTML=h;root.appendChild(s);
}

// --- Page Hero Builder ---
function buildPageHero(root,h1,sub,ctas){
  var s=el("section","ls-page-hero");
  var h='<div class="ls-container"><h1>'+h1+'</h1><p>'+sub+'</p>';
  if(ctas){h+='<div class="ls-hero-ctas">';ctas.forEach(function(c){h+='<a href="'+c[1]+'" class="ls-btn '+(c[2]||"ls-btn-primary")+'">'+c[0]+'</a>'});h+='</div>'}
  h+='</div>';s.innerHTML=h;root.appendChild(s);
}

// --- Animation System ---
function initAnimations(){
  var observer=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}})},{threshold:0.15});
  qsa(".ls-fade-in").forEach(function(el){observer.observe(el)});
  initCounters();
}

function initCounters(){
  var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){animateCounter(e.target);obs.unobserve(e.target)}})},{threshold:0.5});
  qsa("[data-count]").forEach(function(el){obs.observe(el)});
}

function animateCounter(elem){
  var target=parseFloat(elem.dataset.count);var prefix=elem.dataset.prefix||"";var suffix=elem.dataset.suffix||"";var decimals=parseInt(elem.dataset.decimals||"0");
  var duration=1500;var start=performance.now();
  function tick(now){var p=Math.min((now-start)/duration,1);var eased=1-Math.pow(1-p,3);var val=eased*target;
    elem.textContent=prefix+(decimals?val.toFixed(decimals):Math.round(val))+suffix;
    if(p<1)requestAnimationFrame(tick)}
  requestAnimationFrame(tick);
}

// --- Before/After Slider ---
function initBASlider(container){
  var handle=qs(".ls-ba-handle",container);var after=qs(".ls-ba-after",container);
  if(!handle||!after)return;var dragging=false;
  function move(x){var rect=container.getBoundingClientRect();var pct=Math.max(0,Math.min(1,(x-rect.left)/rect.width));
    handle.style.left=pct*100+"%";after.style.clipPath="inset(0 "+(100-pct*100)+"% 0 0)"}
  on(handle,"pointerdown",function(e){dragging=true;handle.setPointerCapture(e.pointerId)});
  on(handle,"pointermove",function(e){if(dragging)move(e.clientX)});
  on(handle,"pointerup",function(){dragging=false});
  on(container,"click",function(e){move(e.clientX)});
}

// --- Sticky Quiz Bar ---
var stickyShown=false;
function initStickyQuiz(){
  var bar=el("div","ls-sticky-quiz");
  bar.innerHTML='<p>How much is your lighting costing you?</p><button onclick="location.hash=\'#/quiz\'">Take the 2-min quiz →</button>';
  document.body.appendChild(bar);
  on(window,"scroll",function(){if(stickyShown)return;var pct=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight);if(pct>0.4){bar.classList.add("show");stickyShown=true}});
}
// ============================================================
// PAGE: Homepage
// ============================================================
function pageHome(root){

  // --- Hero ---
  var hero=el("section","ls-hero");
  hero.innerHTML='<div class="ls-container" style="position:relative;z-index:1">'+
    '<div class="ls-hero-badge">Commercial LED Lighting &bull; Southeast United States</div>'+
    '<h1>We Work. <span>You Save.</span></h1>'+
    '<div class="ls-hero-counter"><strong data-count="12.4" data-prefix="$" data-suffix="M+" data-decimals="1">$0</strong> in verified client savings</div>'+
    '<div class="ls-hero-ctas">'+
    '<a href="#/calculator" class="ls-btn ls-btn-primary">Calculate Your Savings</a>'+
    '<a href="#/case-studies" class="ls-btn ls-btn-secondary">See Our Work</a>'+
    '</div></div>';
  root.appendChild(hero);

  // --- Proof Band ---
  var proof=el("section","ls-proof-band ls-fade-in");
  proof.innerHTML='<div class="ls-container"><div class="ls-proof-grid">'+
    '<div class="ls-proof-item"><div class="ls-proof-value"><span data-count="147" data-suffix="+">0</span></div><div class="ls-proof-label">Projects Completed</div></div>'+
    '<div class="ls-proof-item"><div class="ls-proof-value"><span data-count="68" data-suffix="%">0</span></div><div class="ls-proof-label">Avg. Energy Reduction</div></div>'+
    '<div class="ls-proof-item"><div class="ls-proof-value"><span data-count="2.1" data-prefix="$" data-suffix="M+" data-decimals="1">$0</span></div><div class="ls-proof-label">Rebates Captured</div></div>'+
    '<div class="ls-proof-item"><div class="ls-proof-value"><span data-count="18" data-suffix=" Mo">0</span></div><div class="ls-proof-label">Avg. Payback Period</div></div>'+
    '</div></div>';
  root.appendChild(proof);

  // --- Services Triptych ---
  var svc=el("section","ls-section ls-fade-in");
  svc.innerHTML='<div class="ls-container">'+
    '<h2 class="ls-section-title">What We Do</h2>'+
    '<p class="ls-section-subtitle">Turnkey LED solutions for commercial and industrial facilities.</p>'+
    '<div class="ls-triptych">'+
    '<div class="ls-triptych-card" onclick="location.hash=\'#/services/retrofit\'">'+
    '<h3>Retrofit &amp; Upgrade</h3><p>Cut energy costs 50\u201370%. Turnkey LED retrofits for commercial and industrial facilities. Audit to install \u2014 one partner, one outcome.</p>'+
    '<span class="ls-card-link">Learn More \u2192</span></div>'+
    '<div class="ls-triptych-card" onclick="location.hash=\'#/services/controls\'">'+
    '<h3>Controls &amp; Integration</h3><p>Your building, automated. Smart controls that add 20\u201340% savings beyond LED alone. Occupancy sensing, scheduling, BAS integration.</p>'+
    '<span class="ls-card-link">Learn More \u2192</span></div>'+
    '<div class="ls-triptych-card" onclick="location.hash=\'#/services/rebates\'">'+
    '<h3>Utility Rebates</h3><p>We find the money. $2.1M+ captured for our clients. We identify, apply for, and secure every rebate dollar your project qualifies for.</p>'+
    '<span class="ls-card-link">Learn More \u2192</span></div>'+
    '</div></div>';
  root.appendChild(svc);

  // --- Featured Case Study with Before/After ---
  var cs=el("section","ls-featured-cs ls-fade-in");
  cs.innerHTML='<div class="ls-container">'+
    '<h2 class="ls-section-title">Eastland Center: $195K/Year in Verified Savings</h2>'+
    '<div class="ls-cs-content">'+
    '<div class="ls-ba-slider">'+
    '<div class="ls-ba-before">Before: HID Lighting</div>'+
    '<div class="ls-ba-after">After: LED Upgrade</div>'+
    '<div class="ls-ba-handle"></div>'+
    '<div class="ls-ba-label ls-ba-label-before">Before</div>'+
    '<div class="ls-ba-label ls-ba-label-after">After</div>'+
    '</div>'+
    '<div><p style="color:#555;line-height:1.8;margin-bottom:24px">Full rebate capture managed by LED Solutions. The project achieved a 67% energy reduction with $195,000 in annual savings and a 16-month payback period.</p>'+
    '<div class="ls-cs-metrics">'+
    '<div class="ls-cs-metric"><div class="ls-cs-metric-value" style="color:#A3D55D">67%</div><div class="ls-cs-metric-label">Energy Reduction</div></div>'+
    '<div class="ls-cs-metric"><div class="ls-cs-metric-value">$195K</div><div class="ls-cs-metric-label">Annual Savings</div></div>'+
    '<div class="ls-cs-metric"><div class="ls-cs-metric-value">16 mo</div><div class="ls-cs-metric-label">Payback Period</div></div>'+
    '<div class="ls-cs-metric"><div class="ls-cs-metric-value">100%</div><div class="ls-cs-metric-label">Rebate Captured</div></div>'+
    '</div>'+
    '<a href="#/case-studies" class="ls-btn ls-btn-outline" style="margin-top:24px">Read the Full Case Study \u2192</a>'+
    '</div></div></div>';
  root.appendChild(cs);
  setTimeout(function(){initBASlider(qs(".ls-ba-slider",cs))},100);

  // --- How We Work Timeline ---
  var hw=el("section","ls-timeline ls-fade-in");
  hw.innerHTML='<div class="ls-container">'+
    '<h2 class="ls-section-title">How We Work</h2>'+
    '<p class="ls-section-subtitle" style="margin-bottom:40px">From audit to verified savings \u2014 one partner, one process.</p>'+
    '<div class="ls-timeline-track">'+
    '<div class="ls-timeline-step"><div class="ls-timeline-num">1</div><h4>Free Energy Audit</h4><p>We audit your facility and model your savings \u2014 free. No obligation, no pressure. Just data.</p></div>'+
    '<div class="ls-timeline-step"><div class="ls-timeline-num">2</div><h4>Custom Design</h4><p>Our engineering team designs a lighting plan optimized for your space, your operations, and your budget.</p></div>'+
    '<div class="ls-timeline-step"><div class="ls-timeline-num">3</div><h4>Rebate Capture</h4><p>We identify every available incentive, complete the paperwork, and secure pre-approvals before any work begins.</p></div>'+
    '<div class="ls-timeline-step"><div class="ls-timeline-num">4</div><h4>Professional Install</h4><p>Our crews install around your schedule to minimize disruption. Most projects complete in days, not months.</p></div>'+
    '<div class="ls-timeline-step"><div class="ls-timeline-num">5</div><h4>Verify &amp; Warranty</h4><p>We verify performance against projections and stand behind it \u2014 period. Measurable outcomes, guaranteed.</p></div>'+
    '</div></div>';
  root.appendChild(hw);

  // --- Bottom CTA ---
  // --- Trust Partners ---
  var trust=el("section","ls-section ls-section-dark ls-fade-in");
  trust.setAttribute("data-track","trust_partners");
  trust.innerHTML='<div class="ls-container" style="text-align:center">'+
    '<h2 class="ls-section-title" style="color:#fff;font-size:20px;font-weight:500;margin-bottom:32px">Trusted by Facilities Leaders Across the Southeast</h2>'+
    '<div class="ls-partners">'+
    '<div class="ls-partner-logo">ENERGY STAR</div>'+
    '<div class="ls-partner-logo">DLC QUALIFIED</div>'+
    '<div class="ls-partner-logo">UL LISTED</div>'+
    '<div class="ls-partner-logo">UTILITY CERTIFIED</div>'+
    '<div class="ls-partner-logo">OSHA COMPLIANT</div>'+
    '</div></div>';
  root.appendChild(trust);

  // --- FAQ Section ---
  var faq=el("section","ls-section ls-fade-in");
  faq.innerHTML='<div class="ls-container">'+
    '<h2 class="ls-section-title">Common Questions</h2>'+
    '<div class="ls-faq">'+
    '<div class="ls-faq-item"><div class="ls-faq-q">How long does a typical LED retrofit take?</div><div class="ls-faq-a">Most projects complete in days to a few weeks, depending on facility size. We schedule installations around your operations to minimize disruption. A 50,000 SF office building typically takes 5\u201310 working days.</div></div>'+
    '<div class="ls-faq-item"><div class="ls-faq-q">What\u2019s the typical payback period?</div><div class="ls-faq-a">Our projects average 12\u201324 months payback before incentives. With utility rebates, many projects achieve payback in under 18 months. The savings continue for the 50,000+ hour rated life of the LED fixtures.</div></div>'+
    '<div class="ls-faq-item"><div class="ls-faq-q">How do utility rebates work?</div><div class="ls-faq-a">Most utilities offer financial incentives for energy-efficient upgrades. We handle the entire rebate process \u2014 identification, application, pre-approval, and collection. Our average client captures $18K+ in rebates per project.</div></div>'+
    '<div class="ls-faq-item"><div class="ls-faq-q">Do I need to shut down my facility during installation?</div><div class="ls-faq-a">No. Our crews are experienced in working around active operations. We can install during off-hours, weekends, or in phased sections. We\u2019ll build a schedule that works for your team.</div></div>'+
    '<div class="ls-faq-item"><div class="ls-faq-q">What\u2019s included in the free energy audit?</div><div class="ls-faq-a">A complete lighting inventory, energy consumption analysis, savings projection, rebate identification, custom lighting design, and a CFO-ready financial summary. No obligation. No sales pitch.</div></div>'+
    '</div></div>';
  root.appendChild(faq);
  // Init FAQ toggles
  setTimeout(function(){qsa(".ls-faq-q",faq).forEach(function(q){on(q,"click",function(){q.parentNode.classList.toggle("open")})})},50);

  buildCTA(root,"Ready to Start Saving?","Every month you wait costs money. Let\u2019s model your savings \u2014 it takes 4 questions and 60 seconds.","Calculate Your Savings","#/calculator","Get Your Free Audit","#/free-energy-audit");
  buildFooter(root);
}

// ============================================================
// PAGE: Savings Calculator
// ============================================================
function pageCalculator(root){
  buildPageHero(root,"How Much Could You Save?","Answer 4 questions. Get your estimate in 60 seconds. Most commercial and industrial facilities waste 50\u201370% of their lighting energy on outdated technology.",null);

  var wrap=el("section","ls-calc-section");
  wrap.innerHTML='<div class="ls-container"><div class="ls-calc-wrap">'+
    '<div class="ls-calc-progress"><div class="ls-calc-progress-step active"></div><div class="ls-calc-progress-step"></div><div class="ls-calc-progress-step"></div><div class="ls-calc-progress-step"></div></div>'+
    '<div class="ls-calc-step active" data-step="1">'+
    '<h3>Facility Type</h3><p>Select the type that best describes your building.</p>'+
    '<div class="ls-form-group"><label>Facility Type</label><select id="ls-calc-type"><option value="office">Office Building</option><option value="warehouse">Warehouse / Distribution</option><option value="retail">Retail</option><option value="parking">Parking Structure</option><option value="healthcare">Healthcare</option><option value="industrial">Industrial / Manufacturing</option></select></div>'+
    '<div class="ls-calc-nav"><span></span><button class="ls-btn ls-btn-primary" onclick="calcNext(2)">Next \u2192</button></div>'+
    '</div>'+
    '<div class="ls-calc-step" data-step="2">'+
    '<h3>Square Footage</h3><p>Approximate total area of the facility.</p>'+
    '<div class="ls-form-group"><label>Square Footage</label><input type="number" id="ls-calc-sqft" placeholder="e.g. 50000" value="50000" min="1000" max="5000000"></div>'+
    '<div class="ls-calc-nav"><button class="ls-btn ls-btn-outline" onclick="calcNext(1)">\u2190 Back</button><button class="ls-btn ls-btn-primary" onclick="calcNext(3)">Next \u2192</button></div>'+
    '</div>'+
    '<div class="ls-calc-step" data-step="3">'+
    '<h3>Operating Hours</h3><p>Average hours per day your lights are on.</p>'+
    '<div class="ls-slider-value" id="ls-hours-val">12</div>'+
    '<div class="ls-slider-wrap"><input type="range" id="ls-calc-hours" min="8" max="24" value="12" oninput="qs(\'#ls-hours-val\').textContent=this.value"></div>'+
    '<div style="display:flex;justify-content:space-between;font-size:12px;color:#999"><span>8 hrs</span><span>24 hrs</span></div>'+
    '<div class="ls-calc-nav"><button class="ls-btn ls-btn-outline" onclick="calcNext(2)">\u2190 Back</button><button class="ls-btn ls-btn-primary" onclick="calcNext(4)">Next \u2192</button></div>'+
    '</div>'+
    '<div class="ls-calc-step" data-step="4">'+
    '<h3>Utility Rate</h3><p>Your cost per kWh (check your electric bill).</p>'+
    '<div class="ls-form-group"><label>$ per kWh</label><input type="number" id="ls-calc-rate" step="0.01" value="0.12" min="0.01" max="1"></div>'+
    '<div class="ls-calc-nav"><button class="ls-btn ls-btn-outline" onclick="calcNext(3)">\u2190 Back</button><button class="ls-btn ls-btn-primary" onclick="calcResults()">See My Savings \u2192</button></div>'+
    '</div>'+
    '<div class="ls-calc-step" data-step="results"><div class="ls-results" id="ls-calc-results"></div></div>'+
    '</div></div>';
  root.appendChild(wrap);

  // --- Typical Savings Table ---
  var info=el("section","ls-section ls-section-gray ls-fade-in");
  info.innerHTML='<div class="ls-container">'+
    '<h2 class="ls-section-title">Typical Savings Ranges</h2>'+
    '<table class="ls-savings-table"><thead><tr><th>Facility Type</th><th>Typical Reduction</th><th>Typical Payback</th></tr></thead><tbody>'+
    '<tr><td>Office Building</td><td>55\u201370%</td><td>12\u201320 months</td></tr>'+
    '<tr><td>Warehouse / Industrial</td><td>60\u201375%</td><td>10\u201318 months</td></tr>'+
    '<tr><td>Retail</td><td>50\u201365%</td><td>14\u201322 months</td></tr>'+
    '<tr><td>Parking Structure</td><td>60\u201375%</td><td>8\u201316 months</td></tr>'+
    '<tr><td>Healthcare</td><td>50\u201365%</td><td>14\u201324 months</td></tr>'+
    '</tbody></table>'+
    '<p class="ls-section-subtitle">These ranges reflect LED retrofit only. Adding smart controls typically delivers an additional 20\u201340% savings.</p>'+
    '</div>';
  root.appendChild(info);

  buildCTA(root,"Want Exact Numbers?","Request a free energy audit. We\u2019ll walk your facility, model your specific savings, and deliver a detailed proposal.","Get Your Free Audit","#/free-energy-audit","Talk to Our Team","#/contact");
  buildFooter(root);
}

// --- Calculator Logic ---
var calcData={
  wattsPerSqft:{office:1.2,warehouse:1.5,retail:1.8,parking:0.8,healthcare:1.4,industrial:1.6},
  savingsRate:{office:0.62,warehouse:0.68,retail:0.58,parking:0.70,healthcare:0.60,industrial:0.65},
  rebatePerSqft:{office:0.15,warehouse:0.12,retail:0.18,parking:0.10,healthcare:0.16,industrial:0.13},
  costPerSqft:{office:1.80,warehouse:1.50,retail:2.20,parking:1.20,healthcare:2.00,industrial:1.70}
};

function calcNext(step){
  qsa(".ls-calc-step").forEach(function(s){s.classList.remove("active")});
  var target=qs("[data-step=\""+step+"\"]");if(target)target.classList.add("active");
  qsa(".ls-calc-progress-step").forEach(function(s,i){s.classList.toggle("active",i<step)});
}

function calcResults(){
  var type=qs("#ls-calc-type").value;
  var sqft=parseFloat(qs("#ls-calc-sqft").value)||50000;
  var hours=parseFloat(qs("#ls-calc-hours").value)||12;
  var rate=parseFloat(qs("#ls-calc-rate").value)||0.12;

  var currentCost=sqft*calcData.wattsPerSqft[type]*hours*365*rate/1000;
  var ledCost=currentCost*(1-calcData.savingsRate[type]);
  var annualSavings=currentCost-ledCost;
  var rebateEst=sqft*calcData.rebatePerSqft[type];
  var projectCost=sqft*calcData.costPerSqft[type];
  var netCost=projectCost-rebateEst;
  var paybackMo=netCost>0?(netCost/annualSavings)*12:0;
  var roi5=netCost>0?((annualSavings*5-netCost)/netCost)*100:0;
  var pct=Math.round(calcData.savingsRate[type]*100);

  qsa(".ls-calc-step").forEach(function(s){s.classList.remove("active")});
  var r=qs("[data-step=\"results\"]");r.classList.add("active");
  qsa(".ls-calc-progress-step").forEach(function(s){s.classList.add("active")});

  var res=qs("#ls-calc-results");
  res.innerHTML='<h3>Your Estimated Savings</h3>'+
    '<div class="ls-donut-wrap"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="none" stroke="#eee" stroke-width="12"/>'+
    '<circle cx="60" cy="60" r="52" fill="none" stroke="#A3D55D" stroke-width="12" stroke-dasharray="'+Math.round(pct*3.27)+' 327" stroke-linecap="round" style="transition:stroke-dasharray 1s"/>'+
    '</svg><div class="ls-donut-label"><div class="ls-donut-pct">'+pct+'%</div><div class="ls-donut-txt">Reduction</div></div></div>'+
    '<div class="ls-results-grid">'+
    '<div class="ls-result-card"><div class="ls-result-value green">'+fmt$(annualSavings)+'</div><div class="ls-result-label">Annual Energy Savings</div></div>'+
    '<div class="ls-result-card"><div class="ls-result-value">'+fmt$(rebateEst)+'</div><div class="ls-result-label">Projected Rebate</div></div>'+
    '<div class="ls-result-card"><div class="ls-result-value">'+Math.round(paybackMo)+' mo</div><div class="ls-result-label">Payback Period</div></div>'+
    '<div class="ls-result-card"><div class="ls-result-value green">'+Math.round(roi5)+'%</div><div class="ls-result-label">5-Year ROI</div></div>'+
    '</div>'+
    '<p style="color:#7A7A7A;font-size:14px;margin:24px 0">Based on facilities like yours, here\u2019s what we typically see. Want the exact numbers?</p>'+
    '<a href="#/free-energy-audit" class="ls-btn ls-btn-primary">Get Your Detailed Audit</a>';
}

// ============================================================
// PAGE: Services Overview
// ============================================================
function pageServices(root){
  buildPageHero(root,"Commercial LED Solutions","Turnkey lighting upgrades for commercial and industrial facilities. From audit to verified savings \u2014 one partner, one process.",[["Get Your Free Audit","#/free-energy-audit"],["Calculate Savings","#/calculator","ls-btn-secondary"]]);

  var s=el("section","ls-section ls-fade-in");
  s.innerHTML='<div class="ls-container">'+
    '<div class="ls-triptych">'+
    '<div class="ls-triptych-card" onclick="location.hash=\'#/services/retrofit\'">'+
    '<h3>LED Retrofit &amp; Upgrade</h3><p>Cut energy costs 50\u201370%. Turnkey LED retrofits for commercial and industrial facilities. Complete audit-to-install service.</p>'+
    '<span class="ls-card-link">Explore Retrofit \u2192</span></div>'+
    '<div class="ls-triptych-card" onclick="location.hash=\'#/services/controls\'">'+
    '<h3>Smart Controls &amp; Integration</h3><p>Add 20\u201340% savings beyond LED alone. Occupancy sensing, daylight harvesting, scheduling, and BAS integration.</p>'+
    '<span class="ls-card-link">Explore Controls \u2192</span></div>'+
    '<div class="ls-triptych-card" onclick="location.hash=\'#/services/rebates\'">'+
    '<h3>Utility Rebate Navigator</h3><p>$2.1M+ captured. We identify, apply for, and secure every rebate dollar your project qualifies for.</p>'+
    '<span class="ls-card-link">Explore Rebates \u2192</span></div>'+
    '</div>'+
    '<div style="margin-top:24px"><div class="ls-triptych" style="grid-template-columns:1fr 1fr">'+
    '<div class="ls-triptych-card" onclick="location.hash=\'#/services/sports\'">'+
    '<h3>Sports &amp; Athletic Lighting</h3><p>Broadcast-quality illumination at 50\u201370% less energy. Fields, courts, arenas, and recreation centers.</p>'+
    '<span class="ls-card-link">Explore Sports Lighting \u2192</span></div>'+
    '<div class="ls-triptych-card" onclick="location.hash=\'#/free-energy-audit\'">'+
    '<h3>Free Energy Audit</h3><p>Comprehensive, engineering-grade assessment of your facility\u2019s lighting. No obligation, no pressure. Just data.</p>'+
    '<span class="ls-card-link">Request Your Audit \u2192</span></div>'+
    '</div></div>'+
    '</div>';
  root.appendChild(s);

  // --- By The Numbers ---
  var nums=el("section","ls-section ls-section-gray ls-fade-in");
  nums.innerHTML='<div class="ls-container"><div class="ls-proof-grid">'+
    '<div class="ls-proof-item"><div class="ls-proof-value"><span data-count="147" data-suffix="+">0</span></div><div class="ls-proof-label">Projects Completed</div></div>'+
    '<div class="ls-proof-item"><div class="ls-proof-value"><span data-count="12.4" data-prefix="$" data-suffix="M+" data-decimals="1">$0</span></div><div class="ls-proof-label">Verified Savings</div></div>'+
    '<div class="ls-proof-item"><div class="ls-proof-value"><span data-count="68" data-suffix="%">0</span></div><div class="ls-proof-label">Avg. Energy Reduction</div></div>'+
    '<div class="ls-proof-item"><div class="ls-proof-value"><span data-count="18" data-suffix=" Mo">0</span></div><div class="ls-proof-label">Avg. Payback</div></div>'+
    '</div></div>';
  root.appendChild(nums);

  // --- Process Steps ---
  var proc=el("section","ls-content-section ls-fade-in");
  proc.innerHTML='<div class="ls-container">'+
    '<h2>Our Process</h2>'+
    '<div class="ls-process-grid">'+
    '<div class="ls-process-card"><div class="ls-pc-num">1</div><h4>Site Assessment</h4><p>We walk your facility, document existing conditions, and collect utility data. Duration: 1\u20133 hours.</p></div>'+
    '<div class="ls-process-card"><div class="ls-pc-num">2</div><h4>Engineering Analysis</h4><p>Our team models energy consumption, identifies savings opportunities, and designs the optimal lighting plan.</p></div>'+
    '<div class="ls-process-card"><div class="ls-pc-num">3</div><h4>Financial Modeling</h4><p>We calculate ROI, identify all available rebates, and present a clear payback timeline.</p></div>'+
    '<div class="ls-process-card"><div class="ls-pc-num">4</div><h4>Rebate Capture</h4><p>We complete all incentive applications and secure pre-approvals before work begins.</p></div>'+
    '<div class="ls-process-card"><div class="ls-pc-num">5</div><h4>Professional Installation</h4><p>Our experienced crews install around your schedule. Minimal disruption. Clean site.</p></div>'+
    '<div class="ls-process-card"><div class="ls-pc-num">6</div><h4>Verification &amp; Warranty</h4><p>We measure post-install performance, compare to projections, and stand behind the results.</p></div>'+
    '</div></div>';
  root.appendChild(proc);

  // --- Testimonial ---
  var test=el("section","ls-section ls-section-gray ls-fade-in");
  test.innerHTML='<div class="ls-container">'+
    '<div class="ls-testimonial">'+
    '<blockquote>We needed a lighting upgrade that wouldn\u2019t disrupt our tenants or blow our capital budget. LED Solutions delivered both \u2014 the project paid for itself in just over a year, and we haven\u2019t had a single lighting maintenance call since.</blockquote>'+
    '<cite>\u2014 Property Manager, Metro Center Office Complex</cite>'+
    '</div></div>';
  root.appendChild(test);

  buildCTA(root,"Ready to Stop Wasting Energy?","Every month you wait costs money. Let\u2019s model your savings.","Calculate Your Savings","#/calculator","Request a Free Audit","#/free-energy-audit");
  buildFooter(root);
}
// ============================================================
// PAGE: LED Retrofit & Upgrade
// ============================================================
function pageRetrofit(root){
  buildPageHero(root,"Replace Wasted Energy with Guaranteed Savings.","We handle everything \u2014 audit, design, rebates, install, and warranty. One partner. One outcome.",[["Get Your Free Energy Audit","#/free-energy-audit"],["Calculate Your Savings","#/calculator","ls-btn-secondary"]]);

  var s1=el("section","ls-content-section ls-fade-in");
  s1.innerHTML='<div class="ls-container">'+
    '<h2>Service Overview</h2>'+
    '<p>Your lighting is the single largest controllable operating expense in most commercial buildings. Outdated fluorescents, HIDs, and metal halides waste 50\u201370% of the energy they consume as heat \u2014 while generating maintenance headaches and safety risks.</p>'+
    '<p>LED Solutions delivers turnkey commercial LED retrofits that eliminate that waste and convert it into measurable savings. We manage every phase \u2014 from the initial energy audit through rebate capture, professional installation, and post-install performance verification.</p>'+
    '<p>The result: lower energy bills, reduced maintenance costs, and a project that typically pays for itself in 12\u201324 months.</p>'+
    '</div>';
  root.appendChild(s1);

  // --- Application Areas ---
  var s2=el("section","ls-section ls-section-gray ls-fade-in");
  s2.innerHTML='<div class="ls-container">'+
    '<h2 class="ls-section-title">What We Retrofit</h2>'+
    '<div class="ls-sports-features">'+
    '<div class="ls-sports-card"><h4>Commercial Real Estate</h4><p>Office buildings, Class A through C. Typical savings: 55\u201370%. Improved tenant satisfaction. Increased NOI.</p></div>'+
    '<div class="ls-sports-card"><h4>Retail</h4><p>Storefronts, shopping centers, and big-box. Enhanced merchandise visibility. Typical savings: 50\u201365%.</p></div>'+
    '<div class="ls-sports-card"><h4>Industrial &amp; Manufacturing</h4><p>Warehouses, distribution centers, manufacturing floors. High-bay and low-bay replacements. Typical savings: 60\u201375%.</p></div>'+
    '<div class="ls-sports-card"><h4>Parking &amp; Exterior</h4><p>Garages, surface lots, building exteriors. Improved safety and visibility. Typical savings: 55\u201370%.</p></div>'+
    '<div class="ls-sports-card"><h4>Sports &amp; Athletic</h4><p>Fields, courts, arenas. Broadcast-quality illumination at 50\u201370% less energy. Instant-on capability.</p></div>'+
    '<div class="ls-sports-card"><h4>Healthcare</h4><p>Patient areas, surgical suites, parking. Code-compliant. Flicker-free. Reduced maintenance in critical environments.</p></div>'+
    '</div></div>';
  root.appendChild(s2);

  // --- Comparison Table ---
  var s3=el("section","ls-content-section ls-fade-in");
  s3.innerHTML='<div class="ls-container">'+
    '<h2>The LED Solutions Difference</h2>'+
    '<table class="ls-comp-table"><thead><tr><th></th><th>LED Solutions</th><th>Typical Contractor</th></tr></thead><tbody>'+
    '<tr><td>Energy Audit</td><td>Free, engineering-grade analysis</td><td>Basic walkthrough or none</td></tr>'+
    '<tr><td>Rebate Management</td><td>End-to-end \u2014 we capture every dollar</td><td>\u201cYou handle the paperwork\u201d</td></tr>'+
    '<tr><td>Project Design</td><td>Custom-engineered for your facility</td><td>One-size-fits-all spec sheets</td></tr>'+
    '<tr><td>Installation</td><td>Scheduled around your operations</td><td>\u201cWe\u2019ll be there sometime this week\u201d</td></tr>'+
    '<tr><td>Controls Integration</td><td>Designed in from day one</td><td>Sold as an expensive add-on</td></tr>'+
    '<tr><td>Post-Install Verification</td><td>Measured results vs. projections</td><td>Invoice and gone</td></tr>'+
    '<tr><td>Warranty</td><td>Comprehensive, backed by LED Solutions</td><td>Manufacturer warranty only</td></tr>'+
    '</tbody></table>'+
    '</div>';
  root.appendChild(s3);

  // --- Benefits ---
  var s4=el("section","ls-section ls-section-gray ls-fade-in");
  s4.innerHTML='<div class="ls-container">'+
    '<h2 class="ls-section-title">Benefits \u2014 By the Numbers</h2>'+
    '<ul>'+
    '<li><strong>50\u201370% energy reduction</strong> on average across all facility types</li>'+
    '<li><strong>20\u201340% additional savings</strong> when smart controls are added</li>'+
    '<li><strong>12\u201324 month typical payback</strong> before incentives</li>'+
    '<li><strong>$18K average rebate captured</strong> per project</li>'+
    '<li><strong>$12.4M+ in total verified client savings</strong> to date</li>'+
    '<li><strong>Reduced HVAC load</strong> \u2014 LEDs produce significantly less heat</li>'+
    '<li><strong>Maintenance elimination</strong> \u2014 no more lamp replacements or ballast failures</li>'+
    '<li><strong>Improved light quality</strong> \u2014 better visibility, color rendering, and occupant comfort</li>'+
    '</ul></div>';
  root.appendChild(s4);

  // --- Process Steps ---
  var proc=el("section","ls-content-section ls-fade-in");
  proc.innerHTML='<div class="ls-container">'+
    '<h2>Our Process</h2>'+
    '<div class="ls-process-grid">'+
    '<div class="ls-process-card"><div class="ls-pc-num">1</div><h4>Site Assessment</h4><p>We walk your facility, document existing conditions, and collect utility data. Duration: 1\u20133 hours.</p></div>'+
    '<div class="ls-process-card"><div class="ls-pc-num">2</div><h4>Engineering Analysis</h4><p>Our team models energy consumption, identifies savings opportunities, and designs the optimal lighting plan.</p></div>'+
    '<div class="ls-process-card"><div class="ls-pc-num">3</div><h4>Financial Modeling</h4><p>We calculate ROI, identify all available rebates, and present a clear payback timeline.</p></div>'+
    '<div class="ls-process-card"><div class="ls-pc-num">4</div><h4>Rebate Capture</h4><p>We complete all incentive applications and secure pre-approvals before work begins.</p></div>'+
    '<div class="ls-process-card"><div class="ls-pc-num">5</div><h4>Professional Installation</h4><p>Our experienced crews install around your schedule. Minimal disruption. Clean site.</p></div>'+
    '<div class="ls-process-card"><div class="ls-pc-num">6</div><h4>Verification &amp; Warranty</h4><p>We measure post-install performance, compare to projections, and stand behind the results.</p></div>'+
    '</div></div>';
  root.appendChild(proc);

  // --- Testimonial ---
  var test=el("section","ls-section ls-section-gray ls-fade-in");
  test.innerHTML='<div class="ls-container">'+
    '<div class="ls-testimonial">'+
    '<blockquote>We needed a lighting upgrade that wouldn\u2019t disrupt our tenants or blow our capital budget. LED Solutions delivered both \u2014 the project paid for itself in just over a year, and we haven\u2019t had a single lighting maintenance call since.</blockquote>'+
    '<cite>\u2014 Property Manager, Metro Center Office Complex</cite>'+
    '</div></div>';
  root.appendChild(test);

  buildCTA(root,"Ready to Stop Wasting Energy?","Every month you wait costs money. Let\u2019s model your savings \u2014 it takes 4 questions and 60 seconds.","Calculate Your Savings","#/calculator","Request a Free Energy Audit","#/free-energy-audit");
  buildFooter(root);
}

// ============================================================
// PAGE: Smart Controls & Integration
// ============================================================
function pageControls(root){
  buildPageHero(root,"Your Lighting Is a Network. We Make It Intelligent.","Controls aren\u2019t dimmers. They\u2019re the data and compliance layer that turns lighting into building infrastructure.",[["Learn How Controls Work for You","#/free-energy-audit"],["Calculate Your Savings","#/calculator","ls-btn-secondary"]]);

  var s1=el("section","ls-content-section ls-fade-in");
  s1.innerHTML='<div class="ls-container">'+
    '<h2>What Are Smart Controls?</h2>'+
    '<p>Most LED retrofits stop at the fixture. That captures the first layer of savings \u2014 but leaves 20\u201340% more on the table.</p>'+
    '<p>Smart lighting controls transform your LED system from static fixtures into a responsive, data-driven network. They automatically adjust lighting based on occupancy, daylight, scheduling, and facility needs \u2014 reducing energy waste to near zero during unoccupied hours.</p>'+
    '<p>For building owners and facility managers, controls also deliver something equally valuable: visibility. Real-time data on energy usage, space utilization, and system performance.</p>'+
    '</div>';
  root.appendChild(s1);

  // --- Types of Controls ---
  var s2=el("section","ls-section ls-section-gray ls-fade-in");
  s2.innerHTML='<div class="ls-container">'+
    '<h2 class="ls-section-title">Types of Controls</h2>'+
    '<div class="ls-sports-features">'+
    '<div class="ls-sports-card"><h4>Occupancy &amp; Vacancy Sensing</h4><p>Lights activate when spaces are occupied and dim or shut off when empty. Ideal for restrooms, stairwells, conference rooms. Typical impact: 15\u201330% additional savings.</p></div>'+
    '<div class="ls-sports-card"><h4>Daylight Harvesting</h4><p>Sensors measure natural light and automatically reduce artificial output. Perimeter offices and retail storefronts see the greatest impact. Typical impact: 10\u201325% additional savings.</p></div>'+
    '<div class="ls-sports-card"><h4>Scheduling &amp; Time-Based</h4><p>Automated schedules ensure lights operate only when needed. Eliminates the \u201clights left on all weekend\u201d problem. Typical impact: 10\u201320% additional savings.</p></div>'+
    '<div class="ls-sports-card"><h4>Dimming &amp; Tuning</h4><p>Adjust light levels to match the task. Warehouses can run at 70% during low-activity periods. Typical impact: 5\u201315% additional savings.</p></div>'+
    '<div class="ls-sports-card"><h4>BAS Integration</h4><p>Connect lighting controls to your building automation system. Coordinate with HVAC, security, and fire systems. Centralized visibility and control.</p></div>'+
    '</div></div>';
  root.appendChild(s2);

  // --- Combined Impact ---
  var s3=el("section","ls-content-section ls-fade-in");
  s3.innerHTML='<div class="ls-container">'+
    '<h2>The Combined Impact</h2>'+
    '<ul>'+
    '<li><strong>LED retrofit alone:</strong> 50\u201370% energy reduction</li>'+
    '<li><strong>LED + smart controls:</strong> 70\u201385% total energy reduction</li>'+
    '<li><strong>Payback acceleration:</strong> controls often reduce payback by 3\u20136 months through additional incentive qualification</li>'+
    '</ul>'+
    '<h3>Why Controls Matter Now</h3>'+
    '<p>Building energy codes are tightening. ASHRAE 90.1, Title 24, and local codes increasingly require occupancy sensors, daylight controls, and scheduling as baseline requirements for renovations and new construction.</p>'+
    '<p>Installing controls now means you\u2019re investing in compliance \u2014 not scrambling to retrofit later when code triggers hit.</p>'+
    '</div>';
  root.appendChild(s3);

  // --- Key Stat Highlight ---
  var hl=el("section","ls-section ls-section-gray ls-fade-in");
  hl.innerHTML='<div class="ls-container">'+
    '<div class="ls-highlight-box" style="text-align:center;max-width:640px;margin:0 auto">'+
    '<h4 style="font-size:20px">Average Additional Savings with Controls</h4>'+
    '<div style="font-size:48px;font-weight:700;color:#A3D55D;margin:16px 0">20\u201340%</div>'+
    '<p>Beyond LED alone. That\u2019s the difference between a good project and a great one.</p>'+
    '</div></div>';
  root.appendChild(hl);

  // --- Integration Note ---
  var integ=el("section","ls-content-section ls-fade-in");
  integ.innerHTML='<div class="ls-container">'+
    '<h2>Integration with LED Lighting</h2>'+
    '<p>Controls work best when they\u2019re designed into the LED retrofit from day one \u2014 not bolted on after the fact.</p>'+
    '<p>LED Solutions engineers every project with controls-readiness in mind. Whether you deploy full controls now or plan for them later, the infrastructure is there. That means no rewiring, no fixture swaps, and no second mobilization.</p>'+
    '<div class="ls-testimonial">'+
    '<blockquote>The controls alone are saving us almost 30% beyond the LED swap \u2014 and our tenants finally stopped complaining about the lighting.</blockquote>'+
    '<cite>\u2014 Director of Operations, Riverside Shopping Center</cite>'+
    '</div></div>';
  root.appendChild(integ);

  buildCTA(root,"Add Intelligence to Your Lighting Investment.","Controls turn a good project into a great one. Let\u2019s model the additional savings for your facility.","Request a Free Energy Audit","#/free-energy-audit","Calculate Your Savings","#/calculator");
  buildFooter(root);
}

// ============================================================
// PAGE: Rebate Navigator
// ============================================================
function pageRebates(root){
  buildPageHero(root,"Your Utility Wants to Pay for This. We Make Sure They Do.","We\u2019ve captured $2.1M+ in rebates for our clients. Average: $18K per project.",[["Request a Free Energy Audit","#/free-energy-audit"],["Talk to a Rebate Specialist","#/contact","ls-btn-secondary"]]);

  var s1=el("section","ls-content-section ls-fade-in");
  s1.innerHTML='<div class="ls-container">'+
    '<h2>Understanding Utility Rebates</h2>'+
    '<p>Most utility companies offer significant financial incentives for commercial LED upgrades. These rebate programs can cover 15\u201340% of your total project cost \u2014 dramatically reducing your net investment and accelerating payback.</p>'+
    '<p>The catch? Rebate programs are complex. They have specific eligibility requirements, product qualifications, application deadlines, and pre-approval processes. Miss a step, and you lose the money.</p>'+
    '<p>That\u2019s where we come in.</p>'+
    '<h3>How LED Solutions Helps</h3>'+
    '<ul>'+
    '<li><strong>We Identify Every Program</strong> \u2014 Our team tracks rebate programs across Southeast utilities, including programs most contractors don\u2019t know about.</li>'+
    '<li><strong>We Handle the Paperwork</strong> \u2014 Fixture schedules, wattage calculations, energy savings projections. We prepare and submit everything.</li>'+
    '<li><strong>We Secure Pre-Approval</strong> \u2014 Many programs require utility approval before work begins. We manage that process.</li>'+
    '<li><strong>We Maximize Your Capture</strong> \u2014 We design projects specifically to qualify for the highest available rebate tiers.</li>'+
    '</ul></div>';
  root.appendChild(s1);

  // --- Types of rebates ---
  var s2=el("section","ls-section ls-section-gray ls-fade-in");
  s2.innerHTML='<div class="ls-container">'+
    '<h2 class="ls-section-title">Common Rebate Programs</h2>'+
    '<div class="ls-rebate-types">'+
    '<div class="ls-rebate-card"><h4>Prescriptive Rebates</h4><p>Fixed dollar amounts per fixture type replaced. Simple qualification based on product specifications. Fastest to process.</p></div>'+
    '<div class="ls-rebate-card"><h4>Custom / Calculated Rebates</h4><p>Based on actual measured or calculated energy savings. Requires engineering analysis. Often yields higher incentive amounts.</p></div>'+
    '<div class="ls-rebate-card"><h4>Midstream / Distributor</h4><p>Discounts applied at the point of purchase through qualified distributors. Reduces upfront cost immediately.</p></div>'+
    '<div class="ls-rebate-card"><h4>Demand Response Programs</h4><p>Incentives for facilities that can reduce lighting load during peak demand events. Smart controls enable participation.</p></div>'+
    '</div></div>';
  root.appendChild(s2);

  // --- On-Bill Financing ---
  var obf=el("section","ls-content-section ls-fade-in");
  obf.innerHTML='<div class="ls-container">'+
    '<h2>On-Bill Financing</h2>'+
    '<div class="ls-highlight-box">'+
    '<h4>Pay Through Your Utility Bill</h4>'+
    '<p>Some utilities offer on-bill financing where the upgrade cost is repaid through your monthly utility bill \u2014 often structured so that monthly savings exceed the payment from day one. That means positive cash flow from month one, with no capital outlay required.</p>'+
    '</div>'+
    '<h3 style="margin-top:32px">Rebate Timeline</h3>'+
    '<p>Rebate programs have deadlines and budget caps. Programs that exist today may not be available next quarter. LED Solutions monitors program status and budget availability to ensure your project captures maximum incentives.</p>'+
    '<p>Our rebate specialists track programs across every major Southeast utility provider. When programs change, we adapt project strategies to maintain maximum capture.</p>'+
    '</div>';
  root.appendChild(obf);

  buildCTA(root,"Don\u2019t Leave Money on the Table.","Rebate programs change. Deadlines pass. Budgets run out. Let us identify and secure your incentives before they expire.","Request a Free Energy Audit","#/free-energy-audit","Talk to a Rebate Specialist","#/contact");
  buildFooter(root);
}

// ============================================================
// PAGE: Sports Lighting
// ============================================================
function pageSports(root){
  buildPageHero(root,"Sports &amp; Athletic Facility Lighting","Broadcast-quality illumination at 50\u201370% less energy. Instant-on capability with zero warm-up time.",[["Request a Free Energy Audit","#/free-energy-audit"],["Calculate Your Savings","#/calculator","ls-btn-secondary"]]);

  var s1=el("section","ls-content-section ls-fade-in");
  s1.innerHTML='<div class="ls-container">'+
    '<h2>Why LED for Sports?</h2>'+
    '<p>Traditional sports lighting \u2014 metal halide and HPS fixtures \u2014 wastes energy, requires lengthy warm-up and restrike times, and delivers inconsistent light quality. LED technology eliminates every one of these problems while cutting energy costs 50\u201370%.</p>'+
    '<p>Modern LED sports lighting delivers broadcast-quality illumination with instant-on capability, precise beam control, and zero warm-up time. That means better visibility for athletes and spectators, lower operating costs, and dramatically reduced maintenance.</p>'+
    '<h3>Applications</h3>'+
    '<div class="ls-sports-features">'+
    '<div class="ls-sports-card"><h4>Outdoor Fields</h4><p>Football, soccer, baseball, and multi-use fields. High-mast LED delivers uniform coverage with minimal spill and glare.</p></div>'+
    '<div class="ls-sports-card"><h4>Courts &amp; Arenas</h4><p>Basketball, tennis, volleyball. Indoor and outdoor. Precise light control with dimming capability for events.</p></div>'+
    '<div class="ls-sports-card"><h4>Recreation Centers</h4><p>Gyms, pools, fitness areas. Improved light quality with flicker-free operation for activity safety.</p></div>'+
    '<div class="ls-sports-card"><h4>Tracks &amp; Stadiums</h4><p>Running tracks, stadium seating areas. Uniform illumination for athlete safety and spectator experience.</p></div>'+
    '</div>'+
    '<h3>Key Benefits</h3>'+
    '<ul>'+
    '<li><strong>50\u201370% energy reduction</strong> compared to metal halide and HPS</li>'+
    '<li><strong>Instant on/off</strong> \u2014 no 15\u201320 minute warm-up or restrike delays</li>'+
    '<li><strong>Broadcast-quality light</strong> \u2014 high CRI for TV and streaming events</li>'+
    '<li><strong>Precise beam control</strong> \u2014 minimized light spill and community impact</li>'+
    '<li><strong>Dramatically reduced maintenance</strong> \u2014 50,000+ hour rated life</li>'+
    '<li><strong>Smart controls ready</strong> \u2014 scheduling, dimming, and event-based scenes</li>'+
    '</ul></div>';
  root.appendChild(s1);

  buildCTA(root,"Upgrade Your Facility Lighting","Let us design a sports lighting solution that delivers better performance at lower cost.","Request a Free Energy Audit","#/free-energy-audit","Calculate Your Savings","#/calculator");
  buildFooter(root);
}
// ============================================================
// PAGE: Case Studies
// ============================================================
function pageCaseStudies(root){
  buildPageHero(root,"Don\u2019t Take Our Word for It. See the Numbers.","147+ projects. $12.4M+ in verified savings. $2.1M+ in rebates captured. Every project below includes real performance data measured after installation.",null);

  var s=el("section","ls-section ls-fade-in");
  s.innerHTML='<div class="ls-container"><div class="ls-case-grid">'+

  // Case Study 1
  '<div class="ls-case-card">'+
  '<div class="ls-case-card-img">Metro Center Office Complex</div>'+
  '<div class="ls-case-card-body">'+
  '<h3>Metro Center Office Complex</h3>'+
  '<p>185,000 SF Class B Office Building \u2014 Full interior and parking garage LED retrofit with integrated occupancy controls. Completed in 12 working days during off-hours.</p>'+
  '<div class="ls-case-stats">'+
  '<div class="ls-case-stat"><strong>63%</strong><span>Energy Reduction</span></div>'+
  '<div class="ls-case-stat"><strong>$89.5K</strong><span>Annual Savings</span></div>'+
  '<div class="ls-case-stat"><strong>14 mo</strong><span>Payback</span></div>'+
  '<div class="ls-case-stat"><strong>340%</strong><span>5-Year ROI</span></div>'+
  '</div>'+
  '<p style="font-style:italic;font-size:13px;color:#666;margin-top:12px">\u201cLED Solutions delivered both \u2014 the project paid for itself in just over a year, and we haven\u2019t had a single lighting maintenance call since.\u201d<br><span style="font-style:normal;font-weight:500;color:#333">\u2014 Property Manager, Metro Center</span></p>'+
  '</div></div>'+

  // Case Study 2
  '<div class="ls-case-card">'+
  '<div class="ls-case-card-img">Riverside Shopping Center</div>'+
  '<div class="ls-case-card-body">'+
  '<h3>Riverside Shopping Center</h3>'+
  '<p>4-Level Parking Structure (320,000 SF) \u2014 Replaced 480 metal halide fixtures with high-efficiency LED and occupancy controls. Fixtures dim to 40% when unoccupied.</p>'+
  '<div class="ls-case-stats">'+
  '<div class="ls-case-stat"><strong>72%</strong><span>Energy Reduction</span></div>'+
  '<div class="ls-case-stat"><strong>$69.1K</strong><span>Annual Savings</span></div>'+
  '<div class="ls-case-stat"><strong>11 mo</strong><span>Payback</span></div>'+
  '<div class="ls-case-stat"><strong>$31K</strong><span>Rebates Captured</span></div>'+
  '</div>'+
  '<p style="font-style:italic;font-size:13px;color:#666;margin-top:12px">\u201cThe parking structure was our biggest energy headache. LED Solutions turned it into our best ROI.\u201d<br><span style="font-style:normal;font-weight:500;color:#333">\u2014 Director of Operations, Riverside</span></p>'+
  '</div></div>'+

  // Case Study 3
  '<div class="ls-case-card">'+
  '<div class="ls-case-card-img">Southpoint Distribution Center</div>'+
  '<div class="ls-case-card-body">'+
  '<h3>Southpoint Distribution Center</h3>'+
  '<p>280,000 SF Warehouse &amp; Loading Dock \u2014 High-bay LED replacement with scheduling controls and occupancy sensors. Completed over two weekends to avoid disrupting operations.</p>'+
  '<div class="ls-case-stats">'+
  '<div class="ls-case-stat"><strong>68%</strong><span>Energy Reduction</span></div>'+
  '<div class="ls-case-stat"><strong>$80.2K</strong><span>Annual Savings</span></div>'+
  '<div class="ls-case-stat"><strong>13 mo</strong><span>Payback</span></div>'+
  '<div class="ls-case-stat"><strong>380%</strong><span>5-Year ROI</span></div>'+
  '</div>'+
  '<p style="font-style:italic;font-size:13px;color:#666;margin-top:12px">\u201cWe were skeptical about the savings projections. LED Solutions hit the numbers exactly. Our warehouse has never been this bright or this cool.\u201d<br><span style="font-style:normal;font-weight:500;color:#333">\u2014 Facilities Director, Southpoint</span></p>'+
  '</div></div>'+

  '</div></div>';
  root.appendChild(s);

  // --- Case Study Stats Summary ---
  var summary=el("section","ls-section ls-section-gray ls-fade-in");
  summary.innerHTML='<div class="ls-container" style="text-align:center">'+
    '<h2 class="ls-section-title">Aggregate Results</h2>'+
    '<p class="ls-section-subtitle" style="margin:0 auto 40px">Across our three featured case studies:</p>'+
    '<div class="ls-proof-grid">'+
    '<div class="ls-proof-item"><div class="ls-proof-value" style="color:#A3D55D">67.7%</div><div class="ls-proof-label">Avg. Energy Reduction</div></div>'+
    '<div class="ls-proof-item"><div class="ls-proof-value">$238.8K</div><div class="ls-proof-label">Combined Annual Savings</div></div>'+
    '<div class="ls-proof-item"><div class="ls-proof-value">$81.5K</div><div class="ls-proof-label">Total Rebates Captured</div></div>'+
    '<div class="ls-proof-item"><div class="ls-proof-value">12.7 mo</div><div class="ls-proof-label">Avg. Payback Period</div></div>'+
    '</div></div>';
  root.appendChild(summary);

  // --- Filter tags (decorative) ---
  var filter=el("section","ls-content-section ls-fade-in");
  filter.innerHTML='<div class="ls-container" style="text-align:center">'+
    '<p style="font-size:14px;color:#7A7A7A;margin-bottom:16px">Filter by facility type:</p>'+
    '<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">'+
    '<span class="ls-tag" style="cursor:pointer;padding:8px 16px">All Projects</span>'+
    '<span class="ls-tag" style="cursor:pointer;padding:8px 16px">Office</span>'+
    '<span class="ls-tag" style="cursor:pointer;padding:8px 16px">Retail</span>'+
    '<span class="ls-tag" style="cursor:pointer;padding:8px 16px">Industrial</span>'+
    '<span class="ls-tag" style="cursor:pointer;padding:8px 16px">Parking</span>'+
    '<span class="ls-tag" style="cursor:pointer;padding:8px 16px">Healthcare</span>'+
    '</div></div>';
  root.appendChild(filter);

  buildCTA(root,"Ready to See Results Like These?","Every facility is different. Let us model the savings specific to your building, your operations, and your utility rates.","Get Your Free Energy Audit","#/free-energy-audit","Calculate Your Savings","#/calculator");
  buildFooter(root);
}

// ============================================================
// PAGE: About
// ============================================================
function pageAbout(root){
  buildPageHero(root,"147 Projects. $12.4M in Verified Savings. We Do This Every Day.","Turnkey LED lighting and controls for commercial and industrial facilities across the Southeast.",null);

  var s1=el("section","ls-content-section ls-fade-in");
  s1.innerHTML='<div class="ls-container">'+
    '<h2>Our Story</h2>'+
    '<p>LED Solutions exists for one reason: commercial and industrial facilities waste too much energy on outdated lighting, and the solution is straightforward \u2014 when it\u2019s executed right.</p>'+
    '<p>We\u2019re a turnkey LED lighting and controls company serving commercial and industrial clients across the Southeast. We handle every phase of the process \u2014 energy audit, custom design, utility rebate capture, professional installation, and post-install performance verification.</p>'+
    '<p>We started because we saw the same problem repeated across hundreds of facilities: building owners knew they should upgrade their lighting, but the process was fragmented, confusing, and full of broken promises. One company did the audit. Another handled design. A third did the install. Nobody managed rebates. Nobody verified results.</p>'+
    '<p>We built LED Solutions to be the single accountable partner that owns the entire outcome. One team. One process. Measured results.</p>'+
    '<h3>Mission: We Work. You Save.</h3>'+
    '<p>Our mission is to eliminate wasted energy in commercial and industrial facilities through expert LED retrofits and smart controls \u2014 delivered turnkey, funded through savings and rebates, and verified with real performance data.</p>'+
    '</div>';
  root.appendChild(s1);

  // --- Stats ---
  var stats=el("section","ls-section ls-section-gray ls-fade-in");
  stats.innerHTML='<div class="ls-container"><div class="ls-proof-grid">'+
    '<div class="ls-proof-item"><div class="ls-proof-value"><span data-count="147" data-suffix="+">0</span></div><div class="ls-proof-label">Projects Completed</div></div>'+
    '<div class="ls-proof-item"><div class="ls-proof-value"><span data-count="12.4" data-prefix="$" data-suffix="M+" data-decimals="1">$0</span></div><div class="ls-proof-label">Verified Client Savings</div></div>'+
    '<div class="ls-proof-item"><div class="ls-proof-value"><span data-count="2.1" data-prefix="$" data-suffix="M+" data-decimals="1">$0</span></div><div class="ls-proof-label">Rebates Captured</div></div>'+
    '<div class="ls-proof-item"><div class="ls-proof-value"><span data-count="68" data-suffix="%">0</span></div><div class="ls-proof-label">Avg. Energy Reduction</div></div>'+
    '</div></div>';
  root.appendChild(stats);

  // --- Values ---
  var vals=el("section","ls-content-section ls-fade-in");
  vals.innerHTML='<div class="ls-container">'+
    '<h2>Our Values</h2>'+
    '<div class="ls-values-grid">'+
    '<div class="ls-value-card"><h4>Outcomes Over Promises</h4><p>We lead with numbers, not adjectives. Every project comes with measurable savings projections \u2014 and we verify them after installation. If we can\u2019t quantify it, we don\u2019t claim it.</p></div>'+
    '<div class="ls-value-card"><h4>Turnkey Accountability</h4><p>We own the outcome end-to-end. Audit, design, rebates, install, warranty \u2014 one partner, one point of accountability. No finger-pointing. No gaps.</p></div>'+
    '<div class="ls-value-card"><h4>Transparency by Default</h4><p>Our proposals show every number: project cost, rebate amounts, net investment, projected savings, and payback timeline. The math is clear.</p></div>'+
    '<div class="ls-value-card"><h4>Execution, Not Hype</h4><p>We don\u2019t use words like \u201crevolutionary\u201d or \u201ccutting-edge.\u201d We install LED lighting and controls. We capture rebates. We reduce your energy costs. We do it well.</p></div>'+
    '</div>'+
    '<h3 style="margin-top:48px">Partnership Approach</h3>'+
    '<p>We\u2019re not vendors. We\u2019re partners. That\u2019s not a slogan \u2014 it\u2019s how we structure every engagement. We invest time upfront in free energy audits because we believe the data should make the case. We manage rebate paperwork because it\u2019s too important to leave to chance. We verify performance after installation because accountability doesn\u2019t end at the invoice.</p>'+
    '</div>';
  root.appendChild(vals);

  // --- Service Area ---
  var area=el("section","ls-section ls-section-gray ls-fade-in");
  area.innerHTML='<div class="ls-container" style="text-align:center">'+
    '<h2 class="ls-section-title">Service Area</h2>'+
    '<p class="ls-section-subtitle" style="margin:0 auto 24px">We serve commercial and industrial facilities across the Southeast United States.</p>'+
    '<div style="max-width:480px;margin:0 auto;padding:40px;background:#fff;border-radius:12px;border:1px solid #eee">'+
    '<div style="font-size:14px;color:#7A7A7A;line-height:2">'+
    '<strong style="color:#1a1a1a;display:block;margin-bottom:12px">Active in:</strong>'+
    'Alabama \u2022 Florida \u2022 Georgia \u2022 Louisiana \u2022 Mississippi<br>'+
    'North Carolina \u2022 South Carolina \u2022 Tennessee \u2022 Virginia'+
    '</div></div></div>';
  root.appendChild(area);

  // --- Why LED Solutions ---
  var why=el("section","ls-content-section ls-fade-in");
  why.innerHTML='<div class="ls-container">'+
    '<h2>Why LED Solutions?</h2>'+
    '<div class="ls-highlight-box">'+
    '<h4>We\u2019re Not Vendors. We\u2019re Partners.</h4>'+
    '<p>When you work with LED Solutions, you get a single team that understands your facility, your budget constraints, and your operational requirements. We build long-term relationships because most clients have more than one building \u2014 and great results in the first one lead to the next.</p>'+
    '</div></div>';
  root.appendChild(why);

  buildCTA(root,"Let\u2019s See What We Can Do for Your Facility.","147+ projects. One process. Measured results.","Request a Free Energy Audit","#/free-energy-audit","Calculate Your Savings","#/calculator");
  buildFooter(root);
}

// ============================================================
// PAGE: Blog / Resources
// ============================================================
function pageBlog(root){
  buildPageHero(root,"Insights for Facilities Leaders","Guides, case studies, rebate updates, and industry insights \u2014 all focused on helping you make smarter decisions about commercial lighting.",null);

  var s=el("section","ls-section ls-fade-in");
  s.innerHTML='<div class="ls-container">'+
    '<p class="ls-section-subtitle" style="margin-bottom:16px">The LED Solutions Resource Center is your source for practical, data-driven information about commercial lighting upgrades, utility rebates, energy savings, and smart controls.</p>'+
    '<div class="ls-blog-grid">'+
    '<div class="ls-blog-card"><div class="ls-blog-card-img">ROI Guide</div><div class="ls-blog-card-body"><div class="ls-blog-tag">ROI &amp; Savings</div><h3>The Complete Guide to LED Retrofit ROI</h3><p>How to calculate payback period, net present value, and total cost of ownership for commercial LED upgrades.</p></div></div>'+
    '<div class="ls-blog-card"><div class="ls-blog-card-img">Rebate Update</div><div class="ls-blog-card-body"><div class="ls-blog-tag">Rebates &amp; Incentives</div><h3>2026 Southeast Utility Rebate Guide</h3><p>Updated program details, deadlines, and eligibility requirements for major Southeast utility rebate programs.</p></div></div>'+
    '<div class="ls-blog-card"><div class="ls-blog-card-img">Case Study</div><div class="ls-blog-card-body"><div class="ls-blog-tag">Case Study</div><h3>How a 185K SF Office Cut Lighting Costs 63%</h3><p>Metro Center\u2019s full retrofit story: the challenge, the solution, and the verified results 18 months later.</p></div></div>'+
    '<div class="ls-blog-card"><div class="ls-blog-card-img">Controls Guide</div><div class="ls-blog-card-body"><div class="ls-blog-tag">Industry Insights</div><h3>Smart Controls: The Next 20\u201340% Savings</h3><p>Why most LED retrofits leave money on the table \u2014 and how controls capture it.</p></div></div>'+
    '<div class="ls-blog-card"><div class="ls-blog-card-img">Code Update</div><div class="ls-blog-card-body"><div class="ls-blog-tag">Industry Insights</div><h3>ASHRAE 90.1 Lighting Control Requirements</h3><p>What building owners need to know about tightening energy code requirements for commercial lighting.</p></div></div>'+
    '<div class="ls-blog-card"><div class="ls-blog-card-img">Savings Guide</div><div class="ls-blog-card-body"><div class="ls-blog-tag">ROI &amp; Savings</div><h3>Building the Business Case for LED</h3><p>A CFO-ready framework for evaluating LED retrofit investments in commercial real estate.</p></div></div>'+
    '</div></div>';
  root.appendChild(s);

  // --- Newsletter ---
  var nl=el("section","ls-newsletter ls-fade-in");
  nl.innerHTML='<div class="ls-container">'+
    '<h3>Get Monthly Insights</h3>'+
    '<p>No spam. Just useful information for facilities decision-makers.</p>'+
    '<div class="ls-newsletter-form"><input type="email" placeholder="Your email address"><button>Subscribe</button></div>'+
    '</div>';
  root.appendChild(nl);

  buildFooter(root);
}

// ============================================================
// PAGE: Contact
// ============================================================
function pageContact(root){
  buildPageHero(root,"Let\u2019s Talk.","Call, email, or fill out the form. We respond within 4 business hours.",null);

  var s=el("section","ls-section ls-fade-in");
  s.innerHTML='<div class="ls-container"><div class="ls-contact-grid">'+
    '<div>'+
    '<h2 style="font-size:24px;margin-bottom:24px;color:#1a1a1a">Get in Touch</h2>'+
    '<div class="ls-contact-info-item"><div class="ls-ci-icon">\ud83d\udcde</div><div><h4>Phone</h4><p>Call us Monday\u2013Friday, 7AM\u20136PM</p></div></div>'+
    '<div class="ls-contact-info-item"><div class="ls-ci-icon">\u2709\ufe0f</div><div><h4>Email</h4><p>info@ledsolutions.com</p></div></div>'+
    '<div class="ls-contact-info-item"><div class="ls-ci-icon">\ud83d\udccd</div><div><h4>Service Area</h4><p>Southeast United States</p></div></div>'+
    '<div class="ls-contact-info-item"><div class="ls-ci-icon">\ud83d\udd52</div><div><h4>Business Hours</h4><p>Monday\u2013Friday: 7:00 AM\u20136:00 PM<br>Saturday: By appointment<br>Sunday: Closed</p></div></div>'+
    '<p style="margin-top:24px;font-size:14px;color:#7A7A7A">Not ready for a conversation? Start with our <a href="#/calculator" style="color:#A3D55D">Savings Calculator</a> or <a href="#/quiz" style="color:#A3D55D">Diagnostic Quiz</a> \u2014 no commitment required.</p>'+
    '</div>'+
    '<div>'+
    '<h2 style="font-size:24px;margin-bottom:8px;color:#1a1a1a">Send Us a Message</h2>'+
    '<p style="font-size:14px;color:#7A7A7A;margin-bottom:24px">Tell us about your facility and we\u2019ll follow up with the right person on our team.</p>'+
    '<div class="ls-form-group"><label>Name *</label><input type="text" id="ls-c-name" placeholder="Your name"></div>'+
    '<div class="ls-form-group"><label>Email *</label><input type="email" id="ls-c-email" placeholder="you@company.com"></div>'+
    '<div class="ls-form-group"><label>Phone</label><input type="tel" id="ls-c-phone" placeholder="(555) 123-4567"></div>'+
    '<div class="ls-form-group"><label>Facility Type</label><select id="ls-c-type"><option value="">Select...</option><option>Office Building</option><option>Warehouse</option><option>Retail</option><option>Parking</option><option>Healthcare</option><option>Industrial</option><option>Sports/Athletic</option><option>Other</option></select></div>'+
    '<div class="ls-form-group"><label>Message</label><textarea id="ls-c-msg" rows="4" placeholder="Tell us about your project or ask a question..."></textarea></div>'+
    '<button class="ls-btn ls-btn-primary" onclick="submitContactForm()">Send Message</button>'+
    '<p style="font-size:12px;color:#999;margin-top:12px">We\u2019ll respond within 4 business hours. No automated phone trees. No chatbots.</p>'+
    '</div>'+
    '</div></div>';
  root.appendChild(s);

  buildFooter(root);
}

function submitContactForm(){
  var name=qs("#ls-c-name").value,email=qs("#ls-c-email").value;
  if(!name||!email){alert("Please fill in your name and email.");return}
  var _hsq=window._hsq=window._hsq||[];
  _hsq.push(["identify",{email:email}]);
  _hsq.push(["trackEvent",{id:"contact_form_submit"}]);
  var form=qs(".ls-contact-grid");
  if(form)form.innerHTML='<div class="ls-confirmation" style="grid-column:1/-1"><h3>\u2705 Message Sent</h3><p>Thanks, '+name+'! We\u2019ll get back to you within 4 business hours.</p><p>A real person who understands commercial lighting will review your inquiry.</p><a href="#/" class="ls-btn ls-btn-outline" style="margin-top:24px">Back to Home</a></div>';
}
// ============================================================
// PAGE: Free Energy Audit
// ============================================================
function pageAudit(root){
  buildPageHero(root,"Let\u2019s Find Your Savings.","4 questions. 2 minutes. No obligation. We\u2019ll model your energy reduction, identify rebates, and deliver a custom proposal.",null);

  // --- What's Included ---
  var info=el("section","ls-content-section ls-fade-in");
  info.innerHTML='<div class="ls-container">'+
    '<h2>What\u2019s Included</h2>'+
    '<p>Every LED Solutions energy audit is a comprehensive, engineering-grade assessment \u2014 not a quick walkthrough with a sales pitch.</p>'+
    '<ul>'+
    '<li><strong>Complete lighting inventory</strong> \u2014 fixture types, quantities, wattages, and operating hours</li>'+
    '<li><strong>Energy consumption analysis</strong> \u2014 current use and cost, benchmarked against efficient alternatives</li>'+
    '<li><strong>Savings projection</strong> \u2014 detailed model showing projected energy reduction and payback</li>'+
    '<li><strong>Rebate identification</strong> \u2014 every utility incentive your project qualifies for</li>'+
    '<li><strong>Custom lighting design</strong> \u2014 recommended fixtures, controls, and layout</li>'+
    '<li><strong>Financial summary</strong> \u2014 CFO-ready document showing ROI</li>'+
    '</ul>'+
    '<p><strong>What it costs: Nothing.</strong> The energy audit is free for qualified commercial and industrial facilities.</p>'+
    '</div>';
  root.appendChild(info);

  // --- Multi-Step Form ---
  var form=el("section","ls-section ls-section-gray");
  form.innerHTML='<div class="ls-container"><div class="ls-audit-form">'+
    '<h2 class="ls-section-title" style="text-align:center">Request Your Free Energy Audit</h2>'+
    '<div class="ls-audit-progress"><div class="ls-audit-progress-step active"></div><div class="ls-audit-progress-step"></div><div class="ls-audit-progress-step"></div><div class="ls-audit-progress-step"></div></div>'+

    '<div class="ls-calc-step active" data-audit="1">'+
    '<h3>Facility Information</h3><p style="color:#7A7A7A;font-size:14px;margin-bottom:20px">Tell us about your space so we can prepare for the visit.</p>'+
    '<div class="ls-form-group"><label>Facility Type</label><select id="ls-a-type"><option value="">Select...</option><option>Office Building</option><option>Warehouse / Distribution</option><option>Retail</option><option>Parking Structure</option><option>Healthcare</option><option>Industrial / Manufacturing</option><option>Sports / Athletic</option><option>Other</option></select></div>'+
    '<div class="ls-form-group"><label>City</label><input type="text" id="ls-a-city" placeholder="City"></div>'+
    '<div class="ls-form-group"><label>State</label><input type="text" id="ls-a-state" placeholder="State"></div>'+
    '<div class="ls-calc-nav"><span></span><button class="ls-btn ls-btn-primary" onclick="auditNext(2)">Next \u2192</button></div>'+
    '</div>'+

    '<div class="ls-calc-step" data-audit="2">'+
    '<h3>Current Lighting</h3><p style="color:#7A7A7A;font-size:14px;margin-bottom:20px">Don\u2019t worry if you\u2019re not sure \u2014 we\u2019ll confirm everything on-site.</p>'+
    '<div class="ls-form-group"><label>Current Lighting Type</label><select id="ls-a-lighting"><option value="">Select...</option><option>Fluorescent (T8/T12)</option><option>HID / Metal Halide</option><option>Mix of Fluorescent and HID</option><option>Some LED, mostly legacy</option><option>Not sure</option></select></div>'+
    '<div class="ls-form-group"><label>Approximate Square Footage</label><input type="number" id="ls-a-sqft" placeholder="e.g. 50000"></div>'+
    '<div class="ls-calc-nav"><button class="ls-btn ls-btn-outline" onclick="auditNext(1)">\u2190 Back</button><button class="ls-btn ls-btn-primary" onclick="auditNext(3)">Next \u2192</button></div>'+
    '</div>'+

    '<div class="ls-calc-step" data-audit="3">'+
    '<h3>What\u2019s Driving This?</h3><p style="color:#7A7A7A;font-size:14px;margin-bottom:20px">Understanding your priorities helps us focus the audit where it matters most.</p>'+
    '<div class="ls-checkbox-group">'+
    '<label class="ls-checkbox-item" onclick="this.classList.toggle(\'checked\')"><input type="checkbox" value="energy"> Energy Costs</label>'+
    '<label class="ls-checkbox-item" onclick="this.classList.toggle(\'checked\')"><input type="checkbox" value="maintenance"> Maintenance Burden</label>'+
    '<label class="ls-checkbox-item" onclick="this.classList.toggle(\'checked\')"><input type="checkbox" value="compliance"> Code Compliance</label>'+
    '<label class="ls-checkbox-item" onclick="this.classList.toggle(\'checked\')"><input type="checkbox" value="safety"> Safety / Visibility</label>'+
    '<label class="ls-checkbox-item" onclick="this.classList.toggle(\'checked\')"><input type="checkbox" value="tenant"> Tenant Satisfaction</label>'+
    '</div>'+
    '<div class="ls-calc-nav"><button class="ls-btn ls-btn-outline" onclick="auditNext(2)">\u2190 Back</button><button class="ls-btn ls-btn-primary" onclick="auditNext(4)">Next \u2192</button></div>'+
    '</div>'+

    '<div class="ls-calc-step" data-audit="4">'+
    '<h3>Contact &amp; Timeline</h3><p style="color:#7A7A7A;font-size:14px;margin-bottom:20px">We\u2019ll reach out within 4 business hours to schedule your audit.</p>'+
    '<div class="ls-form-group"><label>Name *</label><input type="text" id="ls-a-name" placeholder="Your name"></div>'+
    '<div class="ls-form-group"><label>Email *</label><input type="email" id="ls-a-email" placeholder="you@company.com"></div>'+
    '<div class="ls-form-group"><label>Phone</label><input type="tel" id="ls-a-phone" placeholder="(555) 123-4567"></div>'+
    '<div class="ls-form-group"><label>Timeline</label><select id="ls-a-timeline"><option value="">Select...</option><option>ASAP</option><option>Within 30 days</option><option>1-3 months</option><option>Just researching</option></select></div>'+
    '<div class="ls-calc-nav"><button class="ls-btn ls-btn-outline" onclick="auditNext(3)">\u2190 Back</button><button class="ls-btn ls-btn-primary" onclick="submitAudit()">Submit Request \u2192</button></div>'+
    '</div>'+

    '<div class="ls-calc-step" data-audit="confirm"></div>'+
    '</div></div>';
  root.appendChild(form);
  buildFooter(root);
}

function auditNext(step){
  qsa("[data-audit]").forEach(function(s){s.classList.remove("active")});
  var t=qs("[data-audit=\""+step+"\"]");if(t)t.classList.add("active");
  qsa(".ls-audit-progress-step").forEach(function(s,i){s.classList.toggle("active",i<step)});
}

function submitAudit(){
  var name=qs("#ls-a-name").value,email=qs("#ls-a-email").value;
  if(!name||!email){alert("Please fill in your name and email.");return}
  var _hsq=window._hsq=window._hsq||[];
  _hsq.push(["identify",{email:email}]);
  _hsq.push(["trackEvent",{id:"audit_form_submit"}]);
  qsa("[data-audit]").forEach(function(s){s.classList.remove("active")});
  var confirm=qs("[data-audit=\"confirm\"]");confirm.classList.add("active");
  qsa(".ls-audit-progress-step").forEach(function(s){s.classList.add("active")});
  confirm.innerHTML='<div class="ls-confirmation"><h3>\u2705 Your Audit Request Is Confirmed</h3>'+
    '<p>Thanks, '+name+'! Here\u2019s what happens next:</p>'+
    '<p><strong>1.</strong> We\u2019ll contact you within 4 business hours to schedule.</p>'+
    '<p><strong>2.</strong> Our team visits your facility (1\u20133 hours, minimal disruption).</p>'+
    '<p><strong>3.</strong> You receive your savings report within 5 business days.</p>'+
    '<a href="#/" class="ls-btn ls-btn-primary" style="margin-top:24px">Back to Home</a></div>';
}

// ============================================================
// PAGE: Diagnostic Quiz
// ============================================================
function pageQuiz(root){
  buildPageHero(root,"How Much Is Your Lighting Costing You?","Take our 7-question diagnostic assessment and find out in under 2 minutes.",null);

  var intro=el("section","ls-content-section ls-fade-in");
  intro.innerHTML='<div class="ls-container">'+
    '<p>Most facility managers and property owners know their lighting could be more efficient \u2014 but they don\u2019t know how much they\u2019re actually leaving on the table. This quick assessment evaluates your facility\u2019s lighting against key efficiency benchmarks.</p>'+
    '<h3>What You\u2019ll Learn</h3>'+
    '<ul>'+
    '<li><strong>Your Efficiency Score</strong> \u2014 how your lighting compares to modern LED standards</li>'+
    '<li><strong>Estimated Savings Range</strong> \u2014 based on facility type, size, and current lighting</li>'+
    '<li><strong>Rebate Eligibility</strong> \u2014 preliminary indication of incentive qualification</li>'+
    '<li><strong>Priority Recommendations</strong> \u2014 where upgrading delivers the highest return</li>'+
    '</ul>'+
    '<p>No obligation. No sales pitch. Your information stays with LED Solutions.</p>'+
    '</div>';
  root.appendChild(intro);

  // --- Quiz Modal Inline ---
  var quizSec=el("section","ls-section ls-section-gray");
  quizSec.innerHTML='<div class="ls-container"><div class="ls-calc-wrap" id="ls-quiz-wrap">'+
    '<div class="ls-calc-progress" id="ls-quiz-prog"></div>'+
    '<div id="ls-quiz-body"></div>'+
    '</div></div>';
  root.appendChild(quizSec);
  setTimeout(initQuizInline,50);
  buildFooter(root);
}

// --- Quiz Engine ---
var quizQuestions=[
  {q:"What type of facility do you manage?",opts:["Office Building","Warehouse / Distribution","Retail","Parking Structure","Healthcare","Industrial","Sports / Athletic","Other"],scores:[3,4,3,4,3,4,3,2]},
  {q:"Approximately how large is your facility?",opts:["Under 10,000 SF","10,000 - 50,000 SF","50,000 - 150,000 SF","150,000 - 500,000 SF","Over 500,000 SF"],scores:[1,2,3,4,5]},
  {q:"What type of lighting do you currently have?",opts:["Mostly Fluorescent (T8/T12)","Mostly HID / Metal Halide","Mix of Fluorescent and HID","Mostly LED already","Not sure"],scores:[4,5,4,1,3]},
  {q:"How many hours per day are your lights on?",opts:["8-10 hours","10-14 hours","14-18 hours","18-24 hours (near continuous)"],scores:[2,3,4,5]},
  {q:"How often do you deal with lighting maintenance issues?",opts:["Rarely (few times a year)","Monthly","Weekly","Constantly"],scores:[1,3,4,5]},
  {q:"Do you currently have any lighting controls?",opts:["None","Basic timers only","Some occupancy sensors","Comprehensive controls system"],scores:[5,4,3,1]},
  {q:"What is your timeline for improvements?",opts:["ASAP","Within 6 months","Within a year","Just exploring options"],scores:[5,4,3,2]}
];

function initQuizInline(){
  var wrap=qs("#ls-quiz-wrap");if(!wrap)return;
  var prog=qs("#ls-quiz-prog",wrap);var body=qs("#ls-quiz-body",wrap);
  var step=0;var answers=[];
  prog.innerHTML=quizQuestions.map(function(_,i){return'<div class="ls-calc-progress-step'+(i===0?" active":"")+'"></div>'}).join("");
  function show(){
    if(step>=quizQuestions.length){showResults();return}
    var q=quizQuestions[step];
    body.innerHTML='<h3 style="margin-bottom:4px">Question '+(step+1)+' of 7</h3><div class="ls-quiz-q"><h4>'+q.q+'</h4><div class="ls-quiz-options">'+
      q.opts.map(function(o,i){return'<div class="ls-quiz-option" data-idx="'+i+'">'+o+'</div>'}).join("")+'</div></div>';
    qsa(".ls-quiz-option",body).forEach(function(o){on(o,"click",function(){
      answers.push(q.scores[parseInt(o.dataset.idx)]);step++;
      qsa(".ls-calc-progress-step",prog).forEach(function(s,i){s.classList.toggle("active",i<=step)});
      show()})});
  }
  function showResults(){
    var total=answers.reduce(function(a,b){return a+b},0);
    var max=quizQuestions.reduce(function(a,q){return a+Math.max.apply(null,q.scores)},0);
    var pct=Math.round(total/max*100);
    var label=pct>70?"High Savings Potential":pct>45?"Moderate Savings Potential":"Lower Priority";
    var msg=pct>70?"Your facility shows strong indicators for significant energy and cost savings through LED upgrades. A professional energy audit would likely reveal a compelling ROI.":pct>45?"Your facility has meaningful savings opportunities. A free energy audit would help quantify the exact returns available.":"Your facility may already be fairly efficient, but there could still be opportunities for improvement. A quick conversation with our team can help identify any remaining savings.";
    body.innerHTML='<div class="ls-quiz-results"><h3>Your Results</h3><div class="ls-quiz-score">'+pct+'%</div><h3>'+label+'</h3><p>'+msg+'</p>'+
      '<a href="#/free-energy-audit" class="ls-btn ls-btn-primary" style="margin-top:16px">Get Your Free Energy Audit</a>'+
      '<br><a href="#/calculator" class="ls-btn ls-btn-outline" style="margin-top:12px">Try the Savings Calculator</a></div>';
    qsa(".ls-calc-progress-step",prog).forEach(function(s){s.classList.add("active")});
  }
  show();
}

// --- Quiz Modal ---
function openQuizModal(){
  var overlay=el("div","ls-modal-overlay show");
  overlay.innerHTML='<div class="ls-modal"><div class="ls-modal-close" onclick="this.closest(\'.ls-modal-overlay\').remove()">\u2715</div>'+
    '<h2 style="margin-bottom:4px">Lighting Efficiency Quiz</h2><p style="color:#7A7A7A;margin-bottom:24px;font-size:14px">7 questions. Under 2 minutes.</p>'+
    '<div class="ls-calc-progress" id="ls-modal-quiz-prog"></div>'+
    '<div id="ls-modal-quiz-body"></div></div>';
  document.body.appendChild(overlay);
  on(overlay,"click",function(e){if(e.target===overlay)overlay.remove()});
  // Reuse quiz engine in modal
  var prog=qs("#ls-modal-quiz-prog");var body=qs("#ls-modal-quiz-body");
  var step=0;var answers=[];
  prog.innerHTML=quizQuestions.map(function(_,i){return'<div class="ls-calc-progress-step'+(i===0?" active":"")+'"></div>'}).join("");
  function show(){
    if(step>=quizQuestions.length){showRes();return}
    var q=quizQuestions[step];
    body.innerHTML='<div class="ls-quiz-q"><h4>'+q.q+'</h4><div class="ls-quiz-options">'+
      q.opts.map(function(o,i){return'<div class="ls-quiz-option" data-idx="'+i+'">'+o+'</div>'}).join("")+'</div></div>';
    qsa(".ls-quiz-option",body).forEach(function(o){on(o,"click",function(){
      answers.push(q.scores[parseInt(o.dataset.idx)]);step++;
      qsa(".ls-calc-progress-step",prog).forEach(function(s,i){s.classList.toggle("active",i<=step)});
      show()})});
  }
  function showRes(){
    var total=answers.reduce(function(a,b){return a+b},0);
    var max=quizQuestions.reduce(function(a,q){return a+Math.max.apply(null,q.scores)},0);
    var pct=Math.round(total/max*100);
    body.innerHTML='<div class="ls-quiz-results"><div class="ls-quiz-score">'+pct+'%</div><h3>'+(pct>70?"High":"Moderate")+' Savings Potential</h3>'+
      '<a href="#/free-energy-audit" class="ls-btn ls-btn-primary" style="margin-top:16px" onclick="this.closest(\'.ls-modal-overlay\').remove()">Get Your Free Audit</a></div>';
  }
  show();
}
window.openQuizModal=openQuizModal;


// ============================================================
// ENHANCED: Hero Scroll Effect
// ============================================================
function initHeroScroll(){
  var hero=qs(".ls-hero");
  if(!hero)return;
  var ticking=false;
  on(window,"scroll",function(){
    if(!ticking){
      requestAnimationFrame(function(){
        var y=window.scrollY;
        var h=window.innerHeight;
        if(y<h){
          var pct=y/h;
          hero.style.opacity=1-pct*0.6;
          var inner=qs(".ls-container",hero);
          if(inner)inner.style.transform="translateY("+y*0.3+"px)";
        }
        ticking=false;
      });
      ticking=true;
    }
  });
}

// ============================================================
// ENHANCED: Scroll Depth Tracking
// ============================================================
var scrollDepths={25:false,50:false,75:false,100:false};
function initScrollDepthTracking(){
  on(window,"scroll",function(){
    var pct=Math.round(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100);
    [25,50,75,100].forEach(function(d){
      if(pct>=d&&!scrollDepths[d]){
        scrollDepths[d]=true;
        var _hsq=window._hsq=window._hsq||[];
        _hsq.push(["trackEvent",{id:"scroll_depth_"+d}]);
      }
    });
  });
}

// ============================================================
// ENHANCED: Section View Tracking
// ============================================================
function initSectionTracking(){
  var tracked={};
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        var id=e.target.dataset.track;
        if(id&&!tracked[id]){
          tracked[id]=true;
          var _hsq=window._hsq=window._hsq||[];
          _hsq.push(["trackEvent",{id:"section_view_"+id}]);
        }
      }
    });
  },{threshold:0.3});
  qsa("[data-track]").forEach(function(el){obs.observe(el)});
}

// ============================================================
// ENHANCED: Smooth Counter with Formatting
// ============================================================
function formatWithCommas(n){
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}

// ============================================================
// ENHANCED: Preloader
// ============================================================
function showPreloader(){
  var pl=el("div","ls-preloader");
  pl.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;background:#1a1a1a;z-index:99999;display:flex;align-items:center;justify-content:center;transition:opacity .5s";
  pl.innerHTML='<div style="text-align:center"><div style="font-size:28px;font-weight:700;color:#fff;letter-spacing:-1px">LED <span style=\'color:#A3D55D\'>Solutions</span></div><div style="width:120px;height:2px;background:#333;margin:16px auto 0;border-radius:1px;overflow:hidden"><div style="width:0;height:100%;background:#A3D55D;animation:ls-load 1.2s ease forwards"></div></div></div>';
  document.body.appendChild(pl);
  var style=el("style");
  style.textContent="@keyframes ls-load{0%{width:0}100%{width:100%}}";
  document.head.appendChild(style);
  setTimeout(function(){pl.style.opacity="0";setTimeout(function(){pl.remove()},500)},1200);
}

// ============================================================
// ENHANCED: Keyboard Navigation
// ============================================================
function initKeyboardNav(){
  on(document,"keydown",function(e){
    if(e.key==="Escape"){
      var modal=qs(".ls-modal-overlay.show");
      if(modal)modal.remove();
      closeMobile();
    }
  });
}

// ============================================================
// ENHANCED: Link Active State
// ============================================================
function updateActiveLinks(){
  var hash=location.hash.replace(/^#/,"")||"/";
  qsa(".ls-nav-links a").forEach(function(a){
    var href=a.getAttribute("href").replace(/^#/,"");
    if(hash===href||hash.startsWith(href)&&href!=="/"){
      a.style.color="#1a1a1a";
    }else{
      a.style.color="";
    }
  });
}

// ============================================================
// ENHANCED: Reduced Motion Support
// ============================================================
function prefersReducedMotion(){
  return window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ============================================================
// ENHANCED: Form Validation Helpers
// ============================================================
function validateEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFieldError(input,msg){
  input.style.borderColor="#e74c3c";
  var err=input.parentNode.querySelector(".ls-field-error");
  if(!err){err=el("div","ls-field-error");err.style.cssText="color:#e74c3c;font-size:12px;margin-top:4px";input.parentNode.appendChild(err)}
  err.textContent=msg;
}

function clearFieldError(input){
  input.style.borderColor="";
  var err=input.parentNode.querySelector(".ls-field-error");
  if(err)err.remove();
}

// ============================================================
// ENHANCED: Local Storage for Calculator
// ============================================================
function saveCalcInputs(){
  try{
    var data={
      type:qs("#ls-calc-type")?qs("#ls-calc-type").value:"",
      sqft:qs("#ls-calc-sqft")?qs("#ls-calc-sqft").value:"",
      hours:qs("#ls-calc-hours")?qs("#ls-calc-hours").value:"",
      rate:qs("#ls-calc-rate")?qs("#ls-calc-rate").value:""
    };
    localStorage.setItem("ls_calc",JSON.stringify(data));
  }catch(e){}
}

function loadCalcInputs(){
  try{
    var data=JSON.parse(localStorage.getItem("ls_calc"));
    if(data){
      if(data.type&&qs("#ls-calc-type"))qs("#ls-calc-type").value=data.type;
      if(data.sqft&&qs("#ls-calc-sqft"))qs("#ls-calc-sqft").value=data.sqft;
      if(data.hours&&qs("#ls-calc-hours")){qs("#ls-calc-hours").value=data.hours;if(qs("#ls-hours-val"))qs("#ls-hours-val").textContent=data.hours}
      if(data.rate&&qs("#ls-calc-rate"))qs("#ls-calc-rate").value=data.rate;
    }
  }catch(e){}
}

// ============================================================
// ENHANCED: Debounce & Throttle Utilities
// ============================================================
function debounce(fn,wait){
  var t;
  return function(){
    var ctx=this,args=arguments;
    clearTimeout(t);
    t=setTimeout(function(){fn.apply(ctx,args)},wait);
  };
}

function throttle(fn,limit){
  var last=0;
  return function(){
    var now=Date.now();
    if(now-last>=limit){
      last=now;
      fn.apply(this,arguments);
    }
  };
}

// ============================================================
// ENHANCED: Number Formatting
// ============================================================
function formatDollar(n){
  if(n>=1000000)return"$"+(n/1000000).toFixed(1)+"M";
  if(n>=1000)return"$"+formatWithCommas(Math.round(n));
  return"$"+n.toFixed(2);
}

function formatPercent(n){return Math.round(n)+"%"}

// ============================================================
// ENHANCED: Copy to Clipboard (for sharing results)
// ============================================================
function copyResults(){
  var r=qs("#ls-calc-results");
  if(!r)return;
  var text="LED Solutions Savings Estimate\n";
  qsa(".ls-result-card",r).forEach(function(c){
    var val=qs(".ls-result-value",c);
    var label=qs(".ls-result-label",c);
    if(val&&label)text+=label.textContent+": "+val.textContent+"\n";
  });
  if(navigator.clipboard){
    navigator.clipboard.writeText(text).then(function(){alert("Results copied to clipboard!")});
  }
}

// ============================================================
// ENHANCED: Window Resize Handler
// ============================================================
function initResizeHandler(){
  var resizeDebounced=debounce(function(){
    // Close mobile menu on resize to desktop
    if(window.innerWidth>768){
      closeMobile();
    }
  },250);
  on(window,"resize",resizeDebounced);
}

// ============================================================
// ENHANCED: Intersection Observer for Staggered Animations
// ============================================================
function initStaggeredAnimations(){
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        var children=entry.target.querySelectorAll(".ls-triptych-card, .ls-sports-card, .ls-rebate-card, .ls-value-card, .ls-case-card, .ls-blog-card");
        children.forEach(function(child,i){
          child.style.opacity="0";
          child.style.transform="translateY(20px)";
          child.style.transition="opacity .4s "+EASE+" "+(i*0.1)+"s, transform .4s "+EASE+" "+(i*0.1)+"s";
          setTimeout(function(){
            child.style.opacity="1";
            child.style.transform="translateY(0)";
          },50);
        });
        obs.unobserve(entry.target);
      }
    });
  },{threshold:0.1});
  qsa(".ls-triptych, .ls-sports-features, .ls-rebate-types, .ls-values-grid, .ls-case-grid, .ls-blog-grid").forEach(function(el){obs.observe(el)});
}

// ============================================================
// ENHANCED: Table of Contents for Long Pages
// ============================================================
function addSectionAnchors(){
  qsa(".ls-content-section h2, .ls-content-section h3").forEach(function(heading,i){
    var id="section-"+i;
    heading.id=id;
  });
}

// ============================================================
// ENHANCED: Back to Top Button
// ============================================================
function initBackToTop(){
  var btn=el("button","ls-back-to-top");
  btn.innerHTML="&#8593;";
  btn.style.cssText="position:fixed;bottom:80px;right:24px;width:44px;height:44px;border-radius:50%;background:#fff;border:1px solid #ddd;font-size:20px;color:#333;z-index:800;opacity:0;pointer-events:none;transition:all .3s;box-shadow:0 2px 8px rgba(0,0,0,.08);cursor:pointer;display:flex;align-items:center;justify-content:center";
  document.body.appendChild(btn);
  on(btn,"click",function(){window.scrollTo({top:0,behavior:"smooth"})});
  on(window,"scroll",throttle(function(){
    if(window.scrollY>600){btn.style.opacity="1";btn.style.pointerEvents="auto"}
    else{btn.style.opacity="0";btn.style.pointerEvents="none"}
  },200));
}

// ============================================================
// ENHANCED: Print-friendly Styles
// ============================================================
function addPrintStyles(){
  var style=el("style");
  style.textContent="@media print{.ls-nav,.ls-hamburger,.ls-mobile-menu,.ls-mobile-overlay,.ls-sticky-quiz,.ls-back-to-top,.ls-scroll-progress{display:none!important}.ls-hero{min-height:auto;padding:40px 24px}.ls-section,.ls-content-section{padding:20px 0}body{font-size:12px}}";
  document.head.appendChild(style);
}

// ============================================================
// ENHANCED: Performance - will-change hints
// ============================================================
function addPerformanceHints(){
  var style=el("style");
  style.textContent=".ls-nav{will-change:transform,padding,background}.ls-triptych-card,.ls-case-card,.ls-blog-card{will-change:transform}.ls-scroll-progress{will-change:width}.ls-ba-handle{will-change:left}.ls-ba-after{will-change:clip-path}";
  document.head.appendChild(style);
}

// ============================================================
// ENHANCED: Service Worker Registration (optional)
// ============================================================
function registerSW(){
  // Placeholder for future service worker registration
  // if('serviceWorker' in navigator){ ... }
}

// ============================================================
// ENHANCED: Favicon generation
// ============================================================
function setFavicon(){
  var canvas=document.createElement("canvas");
  canvas.width=32;canvas.height=32;
  var ctx=canvas.getContext("2d");
  ctx.fillStyle="#1a1a1a";
  ctx.fillRect(0,0,32,32);
  ctx.fillStyle="#A3D55D";
  ctx.font="bold 20px Inter, sans-serif";
  ctx.textAlign="center";
  ctx.textBaseline="middle";
  ctx.fillText("L",16,17);
  var link=qs("link[rel='icon']");
  if(!link){link=el("link");link.rel="icon";document.head.appendChild(link)}
  link.href=canvas.toDataURL("image/png");
}

// ============================================================
// ENHANCED: Meta Tags
// ============================================================
function setMetaTags(){
  var desc=qs("meta[name='description']");
  if(!desc){desc=el("meta");desc.name="description";document.head.appendChild(desc)}
  desc.content="LED Solutions delivers turnkey commercial LED retrofits and smart controls. 147+ projects, $12.4M+ in verified savings, 68% average energy reduction.";
  
  var ogTitle=qs("meta[property='og:title']");
  if(!ogTitle){ogTitle=el("meta");ogTitle.setAttribute("property","og:title");document.head.appendChild(ogTitle)}
  ogTitle.content="LED Solutions | We Work. You Save.";
  
  var ogDesc=qs("meta[property='og:description']");
  if(!ogDesc){ogDesc=el("meta");ogDesc.setAttribute("property","og:description");document.head.appendChild(ogDesc)}
  ogDesc.content="Turnkey commercial LED lighting upgrades. 147+ projects. $12.4M+ verified savings. Free energy audits.";
}


// ============================================================
// INIT
// ============================================================
function init(){
  // Show preloader
  showPreloader();
  // Clear existing body content
  document.body.innerHTML="";
  document.title="LED Solutions | We Work. You Save.";
  // Set meta tags
  setMetaTags();
  setFavicon();
  addPrintStyles();
  addPerformanceHints();
  // Add meta viewport
  var mv=qs("meta[name=viewport]");if(!mv){mv=el("meta");mv.name="viewport";mv.content="width=device-width,initial-scale=1";document.head.appendChild(mv)}
  // Build shell
  initScrollProgress();
  buildNav();
  initStickyQuiz();
  initBackToTop();
  initKeyboardNav();
  initResizeHandler();
  initScrollDepthTracking();
  loadHubSpot();
  // Listen for route changes
  on(window,"hashchange",function(){navigate();updateActiveLinks()});
  navigate();
  updateActiveLinks();
}

// Start when DOM is ready
if(document.readyState==="loading"){on(document,"DOMContentLoaded",init)}else{init()}

}();