/* LivingProtein LP bundle - source of truth: live_page_final.liquid */
(function(){
var EL=document.getElementById('lp-app')||document.body;
EL.innerHTML=`<style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
[id*="announcement_bar"],[id*="__header"],[id*="__footer"],.shopify-section-group-header-group,sticky-header,.header-wrapper,.utility-bar{display:none!important}
body{background:#FBF6EE!important}
body.gradient{background-image:none!important}
#MainContent{padding:0!important;margin:0!important;background:#FBF6EE!important}
.main-page-section,#MainContent .page-width{max-width:none!important;width:100%!important;padding-left:0!important;padding-right:0!important;margin-left:0!important;margin-right:0!important}
[class*="__main-padding"]{padding-top:0!important;padding-bottom:0!important}
#MainContent .rte,#MainContent .scroll-trigger,#MainContent [class*="animate--"]{transform:none!important;will-change:auto!important;opacity:1!important}
#lp-app{font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
#lp-app h1,#lp-app h2,#lp-app h3,#lp-app h4{font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif!important;letter-spacing:-.02em!important}
#lp-app .nav{padding:7px 0!important;min-height:0!important}
#lp-app .brand{padding:0!important;margin:0!important;gap:0!important;min-height:0!important;height:auto!important}
#lp-app .brand img{height:38px!important;width:auto!important;max-width:none!important;padding:0!important;margin:0!important}
#lp-app .brand .tag{display:none!important}
#lp-app .btn,#lp-app a.btn,#lp-app .bb-cta{color:#fff!important}
#lp-app .btn:hover,#lp-app a.btn:hover{color:#fff!important}
#lp-app .hero::before,#lp-app .hero::after{content:none!important;display:none!important;background:none!important}
@media(max-width:600px){#lp-app .nav .rate{display:none!important}}
@media(max-width:520px){#lp-app .ctable{font-size:11px!important}#lp-app .ctable th,#lp-app .ctable td{padding:8px 4px!important}#lp-app .ctable thead th.us{font-size:11px!important}#lp-app .ctable thead th{line-height:1.12}}
:root{--green:#148040;--green-d:#0E5539;--orange:#F47529;--orange-d:#D85A1A;--gold:#F5C842;--gold-d:#D9A625;--ink:#241a12;--ink-soft:#4a3d33;--mute:#9c8a73;--cream:#FBF6EE;--cream-2:#F5ECDD;--line:#E7DAC6;--white:#fff;--shadow:0 18px 50px -18px rgba(60,35,10,.35);--radius:18px}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:var(--ink);background:var(--cream);line-height:1.55;-webkit-font-smoothing:antialiased}
img{max-width:100%;display:block}
.wrap{max-width:1140px;margin:0 auto;padding:0 22px}
.wrap-sm{max-width:860px;margin:0 auto;padding:0 22px}
h1,h2,h3{line-height:1.08;letter-spacing:-.02em;font-weight:800}
.kicker{font-weight:800;font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:var(--orange-d)}
.stars{color:#F4A521;letter-spacing:2px}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:linear-gradient(180deg,var(--orange),var(--orange-d));color:#fff;font-weight:800;font-size:18px;border:none;border-radius:60px;padding:18px 38px;cursor:pointer;text-decoration:none;box-shadow:0 12px 26px -8px rgba(216,90,26,.6);transition:transform .15s,box-shadow .15s}
.btn:hover{transform:translateY(-2px)}
.announce{background:var(--ink);color:#fdebd6;font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;text-align:center;padding:9px 12px}
.announce b{color:var(--gold)}
.nav{display:flex;align-items:center;justify-content:space-between;padding:14px 0}
.brand{display:inline-flex;flex-direction:column;align-items:center;gap:3px;line-height:1}
.brand img{height:40px;width:auto;display:block}
.brand .tag{font-size:8.5px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:var(--ink-soft)}
.nav .rate{font-size:12.5px;font-weight:700;color:var(--ink-soft)}
.hero{background:var(--cream);padding-bottom:40px}
.hero-grid{display:grid;grid-template-columns:.92fr 1.08fr;gap:40px;align-items:start;padding-top:26px}
.gallery .main img{width:100%;border-radius:20px;box-shadow:var(--shadow)}
.thumbs{display:flex;gap:10px;margin-top:12px}
.thumb{flex:1;border:2px solid var(--line);border-radius:12px;overflow:hidden;cursor:pointer;background:#fff;transition:border-color .15s}
.thumb.active{border-color:var(--orange)}
.thumb img{width:100%;height:74px;object-fit:cover}
.hero h1{font-size:44px;font-weight:900;margin:6px 0 12px}
.hero h1 .hl{color:var(--orange-d)}
.hero .lede{font-size:16.5px;color:var(--ink-soft);margin-bottom:16px}
.eyebrow{display:flex;align-items:center;gap:10px;flex-wrap:wrap;font-size:13px;font-weight:700;color:var(--ink-soft)}
.eyebrow .stars{font-size:15px}
.ticks{list-style:none;margin:0 0 20px}
.ticks li{display:flex;gap:10px;align-items:flex-start;padding:5px 0;font-weight:600;font-size:15px}
.ticks .ic{flex:none;width:22px;height:22px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center;font-size:12px;font-weight:900;margin-top:1px}
.buybox{display:flex;flex-direction:column;gap:10px;margin-bottom:14px}
.bb-opt{position:relative;display:flex;align-items:center;gap:14px;border:2px solid var(--line);border-radius:14px;padding:15px 16px;cursor:pointer;background:#fff;transition:border-color .15s,background .15s}
.bb-opt.active{border-color:var(--orange);background:#FFF6EE}
.bb-badge{position:absolute;top:-10px;left:16px;background:var(--green);color:#fff;font-size:10px;font-weight:800;letter-spacing:.05em;padding:3px 10px;border-radius:30px;text-transform:uppercase}
.bb-badge.alt{background:var(--orange-d)}
.bb-radio{flex:none;width:22px;height:22px;border-radius:50%;border:2px solid var(--line);position:relative}
.bb-opt.active .bb-radio{border-color:var(--orange)}
.bb-opt.active .bb-radio::after{content:'';position:absolute;inset:4px;border-radius:50%;background:var(--orange)}
.bb-main{flex:1}
.bb-name{font-weight:800;font-size:15.5px}
.bb-desc{font-size:12.5px;color:var(--ink-soft);font-weight:600;margin-top:2px}
.bb-price{text-align:right;white-space:nowrap}
.bb-now{font-weight:900;font-size:19px;line-height:1}
.bb-price s{font-size:12.5px;color:var(--mute);font-weight:600}
.bb-per{font-size:11.5px;color:var(--green);font-weight:800;margin-top:2px}
.bb-cta{width:100%;font-size:19px;margin-bottom:10px}
.bb-micro{display:flex;flex-wrap:wrap;gap:6px 16px;justify-content:center;font-size:12px;font-weight:700;color:var(--ink-soft);margin-bottom:12px}
.bb-guarantee{display:flex;align-items:center;justify-content:center;gap:8px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:10px;font-size:13px;font-weight:800;margin-bottom:12px}
.bb-pay{display:flex;gap:7px;justify-content:center;flex-wrap:wrap}
.bb-pay span{font-size:9.5px;font-weight:800;letter-spacing:.04em;color:#6f6051;background:#fff;border:1px solid var(--line);border-radius:6px;padding:5px 8px}
.press-band{padding:20px 0;border-bottom:1px solid var(--line);background:#fff}
.press-band .row{display:flex;align-items:center;justify-content:center;gap:12px 26px;flex-wrap:wrap}
.press-band .lbl{font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--mute)}
.press{font-family:Georgia,'Times New Roman',serif;font-style:italic;font-weight:700;font-size:22px;color:var(--ink)}
.statband{background:linear-gradient(180deg,var(--orange),var(--orange-d));color:#fff}
.statband .row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;padding:20px 0;text-align:center}
.statband .s{flex:1;min-width:110px}
.statband .s .n{font-size:28px;font-weight:900;line-height:1}
.statband .s .l{font-size:11.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;opacity:.92;margin-top:4px}
.statband .s + .s{border-left:1px solid rgba(255,255,255,.25)}
.sec{padding:60px 0}
.sec h2{font-size:36px;font-weight:900;margin-bottom:14px}
.center{text-align:center}
.center .lede{max-width:660px;margin:0 auto;color:var(--ink-soft);font-size:17px}
.kicker + h2{margin-top:10px}
.bandimg{width:100%;border-radius:20px;box-shadow:var(--shadow);display:block}
.shakeband{width:100%;height:360px;object-fit:cover;object-position:center 42%;border-radius:20px;box-shadow:var(--shadow);display:block}
.card{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:26px}
.twocol{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:34px}
.card.bad{border-top:4px solid #d96a4a}
.card .tagbad{font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#c2542f}
.card h3{font-size:20px;margin:6px 0 8px}.card p{color:var(--ink-soft);font-size:15px}
.twocol-wrap{position:relative}
.vs{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);background:var(--ink);color:#fff;width:46px;height:46px;border-radius:50%;display:grid;place-items:center;font-weight:900;font-size:14px;z-index:2;box-shadow:var(--shadow)}
.mech{background:var(--cream-2)}
.pillgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px}
.pill-c{background:#fff;border:1px solid var(--line);border-radius:16px;padding:22px}
.pill-c .num{font-size:13px;font-weight:900;color:var(--orange-d)}
.pill-c h3{font-size:18px;margin:8px 0 6px}.pill-c p{font-size:14px;color:var(--ink-soft)}
.mech-tag{display:inline-block;margin-top:30px;background:var(--ink);color:#fff;font-weight:800;padding:12px 22px;border-radius:50px;font-size:15px}
.amino-grid{display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center;margin-top:30px}
.amino-grid img{border-radius:14px;border:1px solid var(--line);box-shadow:var(--shadow);background:#fff}
.amino-grid .note{background:#fff;border-left:4px solid var(--gold-d);padding:16px 18px;border-radius:10px;font-style:italic;color:var(--ink-soft);margin-top:18px;font-size:15px}
.nogrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:32px}
.no-c{background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px 20px;display:flex;align-items:center;gap:12px;font-weight:700;font-size:15px}
.no-c .xx{flex:none;width:26px;height:26px;border-radius:50%;background:#fbe7df;color:#c2542f;display:grid;place-items:center;font-weight:900}
.yesrow{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:24px}
.yeschip{font-size:12.5px;font-weight:800;letter-spacing:.03em;text-transform:uppercase;color:var(--green-d);background:#eaf5ee;border:1px solid #cfe7d8;border-radius:40px;padding:8px 15px}
.yeschip .ck{margin-right:5px}
.ctable{width:100%;border-collapse:separate;border-spacing:0;margin-top:30px;background:#fff;border:1px solid var(--line);border-radius:16px;overflow:hidden;font-size:15px}
.ctable th,.ctable td{padding:15px 14px;text-align:center;border-bottom:1px solid var(--line)}
.ctable th{font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:.04em}
.ctable thead th{background:var(--cream-2)}
.ctable thead th.us{background:var(--green);color:#fff;font-size:15px}
.ctable td:first-child,.ctable th:first-child{text-align:left;font-weight:700}
.ctable td.us{background:rgba(20,128,64,.06);font-weight:800;color:var(--green)}
.ctable .x{color:#c46;font-weight:800}.ctable .dash{color:#bbab95}
.ctable tr:last-child td{border-bottom:none}
.backup{background:var(--cream-2)}
.b3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:32px}
.b-c{background:#fff;border:1px solid var(--line);border-radius:16px;padding:24px;text-align:center}
.b-c .big{font-size:32px;font-weight:900;color:var(--orange-d);line-height:1}
.b-c h3{font-size:17px;margin:10px 0 6px}.b-c p{font-size:14px;color:var(--ink-soft)}
.founder-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:34px;align-items:center;margin-top:10px}
.founder-card{background:var(--ink);color:#f6e7d5;border-radius:22px;padding:40px;box-shadow:var(--shadow)}
.founder-card .kick{color:var(--gold);font-weight:800;letter-spacing:.14em;text-transform:uppercase;font-size:12px}
.founder-card h2{color:#fff;font-size:30px;margin:10px 0 14px}
.founder-card p{color:#e7d3bd;font-size:16px;margin-bottom:12px}
.founder-card .sig{font-family:Georgia,serif;font-style:italic;font-size:20px;color:#fff;margin-top:6px}
.founder-stats{display:flex;flex-direction:column;gap:14px}
.fstat{background:#fff;border:1px solid var(--line);border-radius:16px;padding:20px 24px}
.fstat .n{font-size:30px;font-weight:900;color:var(--orange-d);line-height:1}
.fstat .l{font-size:14px;font-weight:700;color:var(--ink-soft);margin-top:4px}
.revsum{display:grid;grid-template-columns:.7fr 1.3fr;gap:30px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px;margin-top:30px}
.revsum .agg{text-align:center;border-right:1px solid var(--line);padding-right:20px}
.revsum .agg .num{font-size:50px;font-weight:900;line-height:1}
.revsum .agg .stars{font-size:18px}
.revsum .agg .cnt{font-size:13px;color:var(--ink-soft);font-weight:700;margin-top:4px}
.dist{display:flex;flex-direction:column;gap:7px}
.distrow{display:flex;align-items:center;gap:10px;font-size:12.5px;font-weight:700;color:var(--ink-soft)}
.distrow .lab{width:34px}
.bar{flex:1;height:9px;background:var(--cream-2);border-radius:6px;overflow:hidden}
.bar i{display:block;height:100%;background:var(--gold-d)}
.rev3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:18px}
.rev{background:#fff;border:1px solid var(--line);border-radius:16px;padding:22px}
.rev .stars{margin-bottom:8px}.rev p{font-size:15px;font-weight:500}
.rev .who{margin-top:14px;font-size:13px;font-weight:800}
.rev .vb{font-size:11px;font-weight:700;color:var(--green);text-transform:uppercase;letter-spacing:.05em}
.offer{background:radial-gradient(120% 120% at 50% 0%,#FFF3E2,var(--cream) 60%)}
.offer-card{max-width:560px;margin:30px auto 0;background:#fff;border:1px solid var(--line);border-radius:24px;box-shadow:var(--shadow);overflow:hidden}
.offer-head{background:var(--ink);color:#fff;text-align:center;padding:16px;font-weight:800;letter-spacing:.04em;font-size:14px}
.offer-body{padding:26px}
.guarantee{background:var(--green-d);color:#eafff2}
.guarantee .g-grid{display:grid;grid-template-columns:auto 1fr;gap:24px;align-items:center;padding:34px 0}
.g-seal{width:120px;height:120px;border-radius:50%;border:4px dashed rgba(255,255,255,.5);display:grid;place-items:center;text-align:center;font-weight:900;line-height:1.1;font-size:15px;color:#fff}
.guarantee h2{color:#fff;font-size:28px;margin-bottom:8px}
.guarantee p{color:#cdeedb;font-size:16px}
.flag{display:inline-block;background:var(--gold);color:#3a2a12;font-size:10px;font-weight:900;letter-spacing:.06em;text-transform:uppercase;padding:3px 8px;border-radius:5px;margin-left:8px;vertical-align:middle}
.faq{max-width:760px;margin:0 auto}
.q{background:#fff;border:1px solid var(--line);border-radius:14px;margin-top:12px;overflow:hidden}
.q summary{list-style:none;cursor:pointer;padding:18px 20px;font-weight:800;font-size:16px;display:flex;justify-content:space-between;gap:12px;align-items:center}
.q summary::-webkit-details-marker{display:none}
.q summary .pl{color:var(--orange);font-size:22px;font-weight:700;transition:transform .2s}
.q[open] summary .pl{transform:rotate(45deg)}
.q .a{padding:0 20px 18px;color:var(--ink-soft);font-size:15px}
.final{background:linear-gradient(180deg,var(--ink),#3a2a1c);color:#fff;text-align:center}
.final h2{font-size:38px;color:#fff;margin-bottom:10px}
.final p{color:#f1d8bf;font-size:18px;margin-bottom:26px}
.final .micro{margin-top:16px;font-size:13px;color:#d8c0a6;font-weight:600}
footer{background:#1b130d;color:#b6a591;font-size:12.5px;padding:40px 0}
footer .disc{background:#241a12;border:1px solid #3a2a1c;border-radius:12px;padding:18px 20px;line-height:1.6;color:#c8b8a3}
footer .fl{display:flex;gap:18px;flex-wrap:wrap;justify-content:center;margin-top:22px;font-weight:600}
footer a{color:#d8c0a6;text-decoration:none}
footer .cp{text-align:center;margin-top:18px;color:#8a7965}
.sticky{position:fixed;left:0;right:0;bottom:0;background:#fff;border-top:1px solid var(--line);box-shadow:0 -10px 30px -12px rgba(60,35,10,.3);padding:10px 14px;display:none;align-items:center;justify-content:space-between;gap:12px;z-index:50}
.sticky .nm{font-weight:900;font-size:14px}
.sticky .pr{font-size:13px;color:var(--ink-soft);font-weight:700}
.sticky .btn{padding:14px 22px;font-size:15px}
@media(max-width:900px){.hero-grid{grid-template-columns:1fr;gap:22px}.hero h1{font-size:34px}.sec{padding:46px 0}.sec h2{font-size:27px}.twocol,.pillgrid,.b3,.rev3,.amino-grid,.nogrid,.founder-grid,.revsum{grid-template-columns:1fr}.revsum .agg{border-right:none;border-bottom:1px solid var(--line);padding:0 0 18px}.vs{display:none}.pillgrid{grid-template-columns:1fr 1fr}.g-grid{grid-template-columns:1fr;text-align:center;justify-items:center}.final h2{font-size:28px}.sticky{display:flex}body{padding-bottom:74px}.statband .s+.s{border-left:none}.ctable{font-size:13px}.ctable th,.ctable td{padding:11px 8px}}
@media(max-width:520px){.pillgrid,.nogrid{grid-template-columns:1fr}.hero h1{font-size:30px}}
#lpModal{position:fixed;inset:0;z-index:2147483600;display:none;align-items:center;justify-content:center;padding:20px;background:rgba(36,26,18,.74);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
#lpModal.open{display:flex}
#lpModal .lpm-card{position:relative;width:100%;max-width:460px;max-height:92vh;overflow-y:auto;background:linear-gradient(180deg,#fff,#FBF6EE);border-radius:22px;box-shadow:0 30px 90px -20px rgba(0,0,0,.55);padding:36px 32px 24px;text-align:center;animation:lpmIn .35s ease;color:#241a12}
@keyframes lpmIn{from{opacity:0;transform:translateY(18px) scale(.97)}to{opacity:1;transform:none}}
#lpModal .lpm-x{position:absolute;top:10px;right:14px;background:none;border:none;font-size:26px;line-height:1;color:#c9bba6;cursor:pointer;padding:4px;z-index:2}
#lpModal .lpm-logo{height:28px;width:auto;margin:0 auto 12px;display:block}
#lpModal .lpm-prog{font-size:11px;font-weight:800;letter-spacing:.13em;text-transform:uppercase;color:#c9bba6;margin-bottom:10px}
#lpModal .lpm-eyebrow{font-weight:800;font-size:12px;letter-spacing:.15em;text-transform:uppercase;color:#D85A1A}
#lpModal .lpm-h{font-size:27px;font-weight:900;margin:6px 0 12px;line-height:1.08}
#lpModal .lpm-h span{color:#D85A1A}
#lpModal .lpm-sub{font-size:15px;color:#4a3d33;margin-bottom:16px;line-height:1.45}
#lpModal .lpm-opt{display:block;width:100%;background:#fff;border:2px solid #E7DAC6;border-radius:12px;padding:14px;margin-bottom:9px;font-size:15.5px;font-weight:800;color:#241a12;cursor:pointer;font-family:inherit;transition:border-color .15s,background .15s}
#lpModal .lpm-opt:hover{border-color:#F47529;background:#FFF6EE}
#lpModal .lpm-formrow{display:flex;flex-direction:column;gap:10px}
#lpModal .lpm-input{width:100%;padding:15px 16px;border:2px solid #E7DAC6;border-radius:12px;font-size:16px;font-family:inherit;text-align:center;color:#241a12}
#lpModal .lpm-input:focus{outline:none;border-color:#F47529}
#lpModal .lpm-btn{width:100%;font-size:17px;color:#fff!important}
#lpModal .lpm-fine{font-size:10.5px;color:#9c8a73;margin-top:11px;line-height:1.5}
#lpModal .lpm-nothanks{display:inline-block;margin-top:12px;background:none;border:none;color:#9c8a73;font-size:13px;font-weight:600;text-decoration:underline;cursor:pointer;font-family:inherit}
#lpModal .lpm-burst{font-size:40px;margin-bottom:2px}
#lpModal .lpm-match{font-size:34px;margin-bottom:2px}
#lpModal .lpm-code{font-weight:900;font-size:23px;letter-spacing:.07em;color:#148040;background:#eaf5ee;border:2px dashed #148040;border-radius:12px;padding:15px;margin-bottom:14px}
@media(max-width:520px){#lpModal .lpm-card{padding:30px 20px 22px}#lpModal .lpm-h{font-size:24px}}
</style><div class='announce'>FREE SHIPPING ON SUBSCRIPTIONS &nbsp;&middot;&nbsp; <b>30-DAY</b> MONEY-BACK GUARANTEE &nbsp;&middot;&nbsp; FREE SHAKER + 2 GUIDES &nbsp;&middot;&nbsp; <b>500,000+</b> CANS SOLD</div>
<div class='wrap'><div class='nav'><div class='brand'><img src='https://cdn.shopify.com/s/files/1/0705/3541/3938/files/LivingFuel-Logo-Lockup.png?v=1782527503' alt='LivingFuel - Scientifically Perfected Nutrition' style='height:46px;width:auto;display:block'></div><div class='rate'>&#9733;&#9733;&#9733;&#9733;&#9733; #1-Ranked Plant Protein</div></div></div>

<section class='hero'><div class='wrap hero-grid'>
<div class='gallery'>
<div class='main'><img id='heroMain' src='https://d8j0ntlcm91z4.cloudfront.net/user_2xe4bXszq79RwT7VFukaNilrFam/hf_20260626_165302_f8cd6920-615a-4a8c-be5c-90036b039f3e.png' alt='LivingProtein tub with a creamy shake, split peas and brown rice'></div>
<div class='thumbs'>
<div class='thumb active' data-src='https://d8j0ntlcm91z4.cloudfront.net/user_2xe4bXszq79RwT7VFukaNilrFam/hf_20260626_165302_f8cd6920-615a-4a8c-be5c-90036b039f3e.png'><img src='https://d8j0ntlcm91z4.cloudfront.net/user_2xe4bXszq79RwT7VFukaNilrFam/hf_20260626_165302_f8cd6920-615a-4a8c-be5c-90036b039f3e.png' alt=''></div>
<div class='thumb' data-src='https://d8j0ntlcm91z4.cloudfront.net/user_2xe4bXszq79RwT7VFukaNilrFam/hf_20260626_165533_22ea1fe0-44af-42af-a30c-0b6d4c98f7f0.png'><img src='https://d8j0ntlcm91z4.cloudfront.net/user_2xe4bXszq79RwT7VFukaNilrFam/hf_20260626_165533_22ea1fe0-44af-42af-a30c-0b6d4c98f7f0.png' alt=''></div>
<div class='thumb' data-src='https://d8j0ntlcm91z4.cloudfront.net/user_2xe4bXszq79RwT7VFukaNilrFam/hf_20260626_165535_5cade521-d122-4588-a89c-e7bddfb74671.png'><img src='https://d8j0ntlcm91z4.cloudfront.net/user_2xe4bXszq79RwT7VFukaNilrFam/hf_20260626_165535_5cade521-d122-4588-a89c-e7bddfb74671.png' alt=''></div>
<div class='thumb' data-src='https://d8j0ntlcm91z4.cloudfront.net/user_2xe4bXszq79RwT7VFukaNilrFam/hf_20260626_165302_68a36d09-0e84-42f5-9f23-7b457278ae35.png'><img src='https://d8j0ntlcm91z4.cloudfront.net/user_2xe4bXszq79RwT7VFukaNilrFam/hf_20260626_165302_68a36d09-0e84-42f5-9f23-7b457278ae35.png' alt=''></div>
</div>
</div>
<div>
<div class='eyebrow'><span class='stars'>&#9733;&#9733;&#9733;&#9733;&#9733;</span> <span>4.8 &middot; 1,900+ reviews</span> <span>&middot;</span> <span>#1-Ranked Protein, <i>First for Women</i></span></div>
<h1>Plant protein had a problem. <span class='hl'>We engineered around it.</span></h1>
<p class='lede'>All 9 essential amino acids in a profile similar to egg &mdash; from 100% plants. <b>None of whey&rsquo;s bloat. None of plant protein&rsquo;s gaps.</b> Plus the fiber, pre &amp; probiotics and vitamin C to support your gut &mdash; not wreck it.</p>
<ul class='ticks'>
<li><span class='ic'>&#10003;</span><span><b>22g complete plant protein</b> &middot; all 9 essential aminos &mdash; none of plant protein&rsquo;s gaps</span></li>
<li><span class='ic'>&#10003;</span><span><b>Supports your gut, not wrecks it</b> &middot; 6g fiber + pre &amp; probiotics</span></li>
<li><span class='ic'>&#10003;</span><span><b>No dairy, no bloat, no artificial sweeteners</b> &middot; 140 cal, under 2g sugar</span></li>
</ul>
<div class='buybox'>
<div class='bb-opt active' data-plan='sub'><span class='bb-badge'>Most Popular</span><div class='bb-radio'></div><div class='bb-main'><div class='bb-name'>Subscribe &amp; Save</div><div class='bb-desc'>1 can/month &middot; 14% off &middot; cancel anytime</div></div><div class='bb-price'><div class='bb-now'>$59.99</div><s>$69.99</s><div class='bb-per'>$2.40/serving</div></div></div>
<div class='bb-opt' data-plan='bundle'><span class='bb-badge alt'>Best Value &middot; Save $30</span><div class='bb-radio'></div><div class='bb-main'><div class='bb-name'>Bundle &amp; Save &mdash; 3 Cans</div><div class='bb-desc'>3-month supply &middot; one-time</div></div><div class='bb-price'><div class='bb-now'>$179.97</div><s>$209.97</s><div class='bb-per'>$2.40/serving</div></div></div>
<div class='bb-opt' data-plan='once'><div class='bb-radio'></div><div class='bb-main'><div class='bb-name'>Buy Now &mdash; One-Time</div><div class='bb-desc'>1 can &middot; no subscription</div></div><div class='bb-price'><div class='bb-now'>$69.99</div><div class='bb-per'>$2.80/serving</div></div></div>
</div>
<a href='#' class='btn bb-cta' id='ctaBtn'>Add to Cart &rarr;</a>
<div class='bb-micro'><span>&#8617; Cancel anytime</span><span>&#128666; Free shipping on subscriptions</span><span>&#127941; Certified for Sport</span></div>
<div class='bb-guarantee' style='background:#FFF6EE;border-color:var(--orange)'>&#127873; Subscribe &rarr; FREE Shaker + KC&rsquo;s book + Gut Reset Guide <b style='color:var(--orange-d)'>&mdash; $69 in gifts</b></div>
<div class='bb-guarantee'>&#128737; 30-Day Money-Back Guarantee &mdash; love it or your money back</div>
<div class='bb-pay'><span>VISA</span><span>MASTERCARD</span><span>AMEX</span><span>APPLE PAY</span><span>SHOP PAY</span><span>G PAY</span></div>
</div>
</div></section>

<section class='press-band'><div class='wrap row'><span class='lbl'>As seen in</span><span class='press'>First for Women</span><span class='press'>TBN</span></div></section>

<section class='statband'><div class='wrap row'><div class='s'><div class='n'>22g</div><div class='l'>Plant Protein</div></div><div class='s'><div class='n'>6g</div><div class='l'>Fiber</div></div><div class='s'><div class='n'>140</div><div class='l'>Calories</div></div><div class='s'><div class='n'>&lt;2g</div><div class='l'>Sugar</div></div><div class='s'><div class='n'>333%</div><div class='l'>Vitamin C</div></div></div></section>

<section class='sec'><div class='wrap center'><span class='kicker'>The Protein Trap</span><h2>Every other protein makes you pick a poison.</h2><p class='lede'>The most popular protein wrecks your gut &mdash; the gentle one is incomplete and underpowered. Those were your only two options. Until now.</p></div><div class='wrap'><div class='twocol-wrap'><div class='twocol'><div class='card bad'><span class='tagbad'>Whey protein</span><h3>The most popular &mdash; but it wrecks your gut.</h3><p>Whey is dairy. For millions of people that means <b>bloating, gas and cramping</b> &mdash; even breakouts. Add ~0g fiber and a scoop of artificial sweeteners, and the most popular protein on the shelf costs you your digestion.</p></div><div class='card bad'><span class='tagbad'>Typical plant protein</span><h3>Gentle &mdash; but incomplete &amp; underpowered.</h3><p>Pea, rice, hemp and soy are <b>missing essential amino acids</b> &mdash; and often low in usable protein. Your body cannot build with what it cannot complete, so you absorb less than the scoop promises.</p></div><div class='vs'>VS</div></div></div></div></section>

<section class='sec mech'><div class='wrap center'><span class='kicker'>Engineered, Not Assembled</span><h2>We built a plant protein with the amino profile of egg.</h2><p class='lede'>Egg scores as the gold standard of protein because of its amino acid profile. So we engineered ours to match it &mdash; from plants &mdash; then added back everything the rest of the aisle leaves out. <b>More potent than whey. Gentle like plants. None of the downsides of either.</b></p></div><div class='wrap'><img class='bandimg' src='https://d8j0ntlcm91z4.cloudfront.net/user_2xe4bXszq79RwT7VFukaNilrFam/hf_20260626_165533_22ea1fe0-44af-42af-a30c-0b6d4c98f7f0.png' alt='LivingProtein tub with yellow split peas, brown rice and a scoop of protein' style='margin:30px 0 6px'></div><div class='wrap'><div class='pillgrid'><div class='pill-c'><div class='num'>01 &middot; BASE</div><h3>Organic Brown Rice Protein</h3><p>Clean, hypoallergenic plant base &mdash; half of the complete-amino foundation.</p></div><div class='pill-c'><div class='num'>02 &middot; BASE</div><h3>Organic Yellow Pea Protein</h3><p>Pairs with rice to cover what each one alone is missing.</p></div><div class='pill-c'><div class='num'>03 &middot; THE FIX</div><h3>Targeted Amino Acids</h3><p>Added to fill the remaining gaps, for a profile similar to egg.</p></div><div class='pill-c'><div class='num'>04 &middot; GUT</div><h3>Pre + Probiotics</h3><p>Work with your gut to support healthy digestion and absorption.</p></div><div class='pill-c'><div class='num'>05 &middot; DIGESTION</div><h3>6g Fiber</h3><p>Most protein powders deliver ~0g. Protein without fiber is metabolically incomplete.</p></div><div class='pill-c'><div class='num'>06 &middot; RECOVERY</div><h3>Vitamin C &mdash; 333%</h3><p>Protein metabolism uses up vitamin C. We restore what protein burns.</p></div></div><div class='center'><span class='mech-tag'>SCIENTIFICALLY PERFECTED PROTEIN.</span></div></div></section>

<section class='sec'><div class='wrap center'><span class='kicker'>Radical Transparency</span><h2>All 9 essential amino acids. On the label, in the open.</h2></div><div class='wrap amino-grid'><div><img src='https://cdn.shopify.com/s/files/1/0705/3541/3938/files/LP_Amino_Acid_Profile_2026.jpg?v=1771951417' alt='Essential Amino Acid Profile'></div><div><p style='font-size:17px;color:var(--ink-soft)'>No proprietary blends. No hiding behind a protein blend. Every essential amino acid is printed on the panel &mdash; because the amino acid profile is the entire reason egg is considered the perfect protein, and it is the entire reason LivingProtein works.</p><div class='note'>Certain plant-based amino acids have been added to provide an amino acid profile similar to egg. &mdash; directly from the LivingProtein label.</div></div></div></section>

<section class='sec mech'><div class='wrap center'><span class='kicker'>Clean by Engineering</span><h2>What is <em>not</em> in it matters just as much.</h2></div><div class='wrap'><div class='nogrid'><div class='no-c'><span class='xx'>&#10005;</span> No whey or dairy</div><div class='no-c'><span class='xx'>&#10005;</span> No soy</div><div class='no-c'><span class='xx'>&#10005;</span> No gluten</div><div class='no-c'><span class='xx'>&#10005;</span> No artificial sweeteners</div><div class='no-c'><span class='xx'>&#10005;</span> No fillers</div><div class='no-c'><span class='xx'>&#10005;</span> No ingredients from China</div></div><div class='yesrow'><span class='yeschip'><span class='ck'>&#10003;</span>Vegan</span><span class='yeschip'><span class='ck'>&#10003;</span>Non-GMO</span><span class='yeschip'><span class='ck'>&#10003;</span>Third-Party Tested</span><span class='yeschip'><span class='ck'>&#10003;</span>Certified for Sport</span><span class='yeschip'><span class='ck'>&#10003;</span>Made in the USA</span></div></div></section>

<section class='sec'><div class='wrap center'><span class='kicker'>Side by Side</span><h2>LivingProtein vs. the protein aisle</h2></div><div class='wrap'><table class='ctable'><thead><tr><th></th><th class='us'>LivingProtein</th><th>Whey Isolate</th><th>Typical Plant Protein</th></tr></thead><tbody><tr><td>All 9 essential amino acids</td><td class='us'>&#10003;</td><td>&#10003;</td><td class='x'>&#10007;</td></tr><tr><td>22g usable protein per serving</td><td class='us'>&#10003;</td><td>&#10003;</td><td class='dash'>Often low</td></tr><tr><td>Gentle on digestion &mdash; no dairy bloat</td><td class='us'>&#10003;</td><td class='x'>&#10007;</td><td>&#10003;</td></tr><tr><td>Supports gut health (fiber + probiotics)</td><td class='us'>&#10003;</td><td class='x'>&#10007;</td><td class='x'>&#10007;</td></tr><tr><td>6g prebiotic fiber</td><td class='us'>&#10003;</td><td class='dash'>~0g</td><td class='dash'>~0g</td></tr><tr><td>Vitamin C for immunity</td><td class='us'>&#10003;</td><td class='dash'>&mdash;</td><td class='dash'>&mdash;</td></tr><tr><td>No artificial sweeteners</td><td class='us'>&#10003;</td><td class='dash'>Varies</td><td class='dash'>Varies</td></tr><tr><td>Certified for Sport</td><td class='us'>&#10003;</td><td class='dash'>Varies</td><td class='dash'>Varies</td></tr></tbody></table></div></section>

<section class='sec backup'><div class='wrap center'><span class='kicker'>Designed To Support Your Gut, Not Wreck It</span><h2>The only protein built to support your gut &mdash; not punish it.</h2><p class='lede'>Most protein taxes your digestion. LivingProtein supports it &mdash; with a three-part system no whey or plant protein includes.</p></div><div class='wrap'><div class='b3'><div class='b-c'><div class='big'>6g</div><h3>Fiber &rarr; digestion</h3><p>6g of prebiotic fiber to support smooth, comfortable digestion and steady energy &mdash; where most powders deliver none.</p></div><div class='b-c'><div class='big'>Pre+Pro</div><h3>Pre + Probiotics &rarr; gut</h3><p>Beneficial bacteria that work with your gut, not against it &mdash; supporting a healthy gut microbiome.</p></div><div class='b-c'><div class='big'>333%</div><h3>Vitamin C &rarr; immunity</h3><p>Restores the vitamin C protein metabolism burns, to support recovery and a healthy immune system.</p></div></div></div></section>

<section class='sec'><div class='wrap founder-grid'><div class='founder-stats'><div class='fstat'><div class='n'>24 yrs</div><div class='l'>Formulating Scientifically Perfected Nutrition</div></div><div class='fstat'><div class='n'>500,000+</div><div class='l'>Cans sold &middot; referral-only for 23 years</div></div><div class='fstat'><div class='n'>#1</div><div class='l'>Ranked protein by <i>First for Women</i></div></div></div><div class='founder-card'><div class='kick'>Founder-Formulated</div><h2>We did not assemble a protein. We engineered one.</h2><p>LivingFuel was founded in 2002 on a simple, stubborn idea: nutrition should be engineered to a standard, not assembled from whatever is cheap and trendy. For 24 years we have refined that standard &mdash; and stayed referral-only while the rest of the category chased hype.</p><p>LivingProtein is what happens when you treat plant protein as an engineering problem instead of a marketing one.</p><div class='sig'>&mdash; KC Craichy, Founder of LivingFuel</div></div></div></section>

<section class='sec mech'><div class='wrap center'><span class='kicker'>24 Years &middot; 500,000+ Cans Sold</span><h2>People do not switch back.</h2></div><div class='wrap'><div class='revsum'><div class='agg'><div class='num'>4.8</div><div class='stars'>&#9733;&#9733;&#9733;&#9733;&#9733;</div><div class='cnt'>1,900+ verified reviews</div></div><div class='dist'><div class='distrow'><span class='lab'>5&#9733;</span><span class='bar'><i style='width:86%'></i></span><span>86%</span></div><div class='distrow'><span class='lab'>4&#9733;</span><span class='bar'><i style='width:9%'></i></span><span>9%</span></div><div class='distrow'><span class='lab'>3&#9733;</span><span class='bar'><i style='width:3%'></i></span><span>3%</span></div><div class='distrow'><span class='lab'>2&#9733;</span><span class='bar'><i style='width:1%'></i></span><span>1%</span></div><div class='distrow'><span class='lab'>1&#9733;</span><span class='bar'><i style='width:1%'></i></span><span>1%</span></div></div></div><div class='rev3'><div class='rev'><div class='stars'>&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>I put off trying LivingFuel for a long time because I was taking a different supplement, then I compared how much more nutrition I would get if I switched. It blew my mind. I will definitely be a customer for life.</p><div class='who'>Richard O.</div><div class='vb'>Verified Buyer</div></div><div class='rev'><div class='stars'>&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>I have now been taking LivingFuel for over 18 years! It is the foundational part of my nutrition and I am never going to stop.</p><div class='who'>Naomi M.</div><div class='vb'>Verified Buyer</div></div><div class='rev'><div class='stars'>&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>It was always so hard to make sure I was getting the nutrition I needed, but LivingFuel makes it easy. Less than 5 minutes and I know I am giving my body what it needs.</p><div class='who'>Linda H.</div><div class='vb'>Verified Buyer</div></div></div><p class='center' style='font-size:12px;color:var(--mute);margin-top:18px'>Individual results may vary. Customer testimonials reflect personal experiences.</p></div></section>

<section class='sec' style='padding:18px 0 0'><div class='wrap-sm center' style='margin-bottom:18px'><span class='kicker'>Clean &amp; Complete</span><h2 style='font-size:30px'>Mixes smooth with just water.</h2><p class='lede' style='font-size:16px'>No chalk, no grit, no artificial sweeteners &mdash; just 22g of engineered plant protein you will actually look forward to.</p></div><div class='wrap'><img class='shakeband' src='https://d8j0ntlcm91z4.cloudfront.net/user_2xe4bXszq79RwT7VFukaNilrFam/hf_20260626_165535_5cade521-d122-4588-a89c-e7bddfb74671.png' alt='A creamy LivingProtein shake in a glass'></div></section>

<section class='sec offer' id='offer'><div class='wrap center'><span class='kicker'>Start Today</span><h2>One protein. Engineered to do the work of four.</h2></div><div class='offer-card'><div class='offer-head'>CHOOSE YOUR PLAN &mdash; 25 SERVINGS PER CAN</div><div class='offer-body'>
<div style='display:flex;align-items:center;gap:14px;margin-bottom:16px;background:#fff;border:1px dashed var(--orange);border-radius:14px;padding:12px 14px'><img src='https://cdn.shopify.com/s/files/1/0705/3541/3938/files/db_file_img_127_746xauto_428x640_38687d22-8917-4c02-9cd7-8fd4535c0fd4.png' alt='The Super Health Diet book by KC Craichy' style='height:92px;width:auto;flex:none;filter:drop-shadow(0 5px 10px rgba(60,35,10,.28))'><div><div style='font-weight:800;font-size:12px;letter-spacing:.05em;text-transform:uppercase;color:var(--orange-d)'>Free with every subscription</div><div style='font-size:13px;font-weight:600;color:var(--ink-soft);margin-top:3px'>KC Craichy&rsquo;s bestselling book <i>The Super Health Diet</i>, a premium stainless shaker, and the 7-Day Gut Reset Guide.</div></div></div>
<div style='background:var(--cream-2);border:1px solid var(--line);border-radius:14px;padding:16px 18px;margin-bottom:18px'><div style='font-weight:800;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-soft);margin-bottom:10px'>Subscribe &amp; Save &mdash; everything you get</div><div style='display:flex;justify-content:space-between;font-size:14px;font-weight:600;padding:5px 0'><span>&#10003; LivingProtein&reg; &middot; 25 servings</span><span>$69.99</span></div><div style='display:flex;justify-content:space-between;font-size:14px;font-weight:700;padding:5px 0;color:var(--green)'><span>&#127873; FREE Premium Stainless Shaker</span><span>$24.99</span></div><div style='display:flex;justify-content:space-between;font-size:14px;font-weight:700;padding:5px 0;color:var(--green)'><span>&#128214; FREE ebook &mdash; The Super Health Diet</span><span>$24.97</span></div><div style='display:flex;justify-content:space-between;font-size:14px;font-weight:700;padding:5px 0;color:var(--green)'><span>&#128196; FREE 7-Day Gut Reset Guide</span><span>$19.00</span></div><div style='display:flex;justify-content:space-between;font-size:14px;font-weight:700;padding:5px 0;color:var(--green)'><span>&#128666; FREE shipping</span><span>$9.99</span></div><div style='border-top:1px solid var(--line);margin-top:8px;padding-top:10px;display:flex;justify-content:space-between;font-weight:900;font-size:15px'><span>Total value</span><span><s style='color:var(--mute);font-weight:600;font-size:13px'>$148.94</s> &nbsp;Today $59.99</span></div></div><div class='buybox'><div class='bb-opt active' data-plan='sub'><span class='bb-badge'>Most Popular</span><div class='bb-radio'></div><div class='bb-main'><div class='bb-name'>Subscribe &amp; Save</div><div class='bb-desc'>1 can/month &middot; 14% off &middot; cancel anytime</div></div><div class='bb-price'><div class='bb-now'>$59.99</div><s>$69.99</s><div class='bb-per'>$2.40/serving</div></div></div><div class='bb-opt' data-plan='bundle'><span class='bb-badge alt'>Best Value &middot; Save $30</span><div class='bb-radio'></div><div class='bb-main'><div class='bb-name'>Bundle &amp; Save &mdash; 3 Cans</div><div class='bb-desc'>3-month supply &middot; one-time</div></div><div class='bb-price'><div class='bb-now'>$179.97</div><s>$209.97</s><div class='bb-per'>$2.40/serving</div></div></div><div class='bb-opt' data-plan='once'><div class='bb-radio'></div><div class='bb-main'><div class='bb-name'>Buy Now &mdash; One-Time</div><div class='bb-desc'>1 can &middot; no subscription</div></div><div class='bb-price'><div class='bb-now'>$69.99</div><div class='bb-per'>$2.80/serving</div></div></div></div><a href='#' class='btn bb-cta'>Add to Cart &rarr;</a><div class='bb-micro' style='margin-top:12px'><span>&#8617; Cancel anytime</span><span>&#128666; Free shipping on subscriptions</span><span>&#128737; 30-day guarantee</span></div></div></div></section>

<section class='guarantee'><div class='wrap g-grid'><div class='g-seal'>30-DAY<br>MONEY<br>BACK</div><div><h2>Love it, or your money back.</h2><p>Drink LivingProtein daily for 30 days. If you don&rsquo;t feel the difference, contact us within 30 days of delivery for a full refund &mdash; and keep the shaker and guides on us. Backed by a brand with a 24-year, zero-warning-letter track record.</p></div></div></section>

<section class='sec'><div class='wrap center'><span class='kicker'>Before You Ask</span><h2>Questions, answered.</h2></div><div class='wrap faq'><details class='q' open><summary>Does it actually taste good? <span class='pl'>+</span></summary><div class='a'>It is designed to mix smoothly with just water and blend easily into smoothies, lightly sweetened with no artificial sweeteners &mdash; clean and easy to drink every day, without the chalky aftertaste of most plant proteins.</div></details><details class='q'><summary>Is it really a complete protein? <span class='pl'>+</span></summary><div class='a'>Yes. LivingProtein contains all 9 essential amino acids, with targeted amino acids added so the overall profile is similar to egg &mdash; the gold-standard protein source. Every amino acid is printed transparently on the label.</div></details><details class='q'><summary>How does it compare to whey? <span class='pl'>+</span></summary><div class='a'>Whey is dairy-based, delivers roughly 0g fiber, and leaves a lot of people bloated. LivingProtein gives you all 9 essential amino acids in an egg-equivalent profile &mdash; from plants, no dairy &mdash; plus 6g fiber, pre/probiotics and vitamin C that whey does not.</div></details><details class='q'><summary>What is it made from? Is it vegan? <span class='pl'>+</span></summary><div class='a'>100% plant-based and vegan &mdash; organic brown rice and yellow pea protein, with added prebiotics, probiotics, fiber and vitamin C. Dairy-free, soy-free, gluten-free, non-GMO, made with no ingredients from China.</div></details><details class='q'><summary>How do I take it? <span class='pl'>+</span></summary><div class='a'>Two heaping scoops (one serving) in water, plant milk, or a smoothie &mdash; once a day. 140 calories, under 2g sugar, 22g protein and 6g fiber per serving. 25 servings per can.</div></details><details class='q'><summary>What are the free gifts? <span class='pl'>+</span></summary><div class='a'>Every subscription includes a free Premium Stainless Steel Shaker, a free digital copy of KC Craichy&rsquo;s book <i>The Super Health Diet</i>, and our 7-Day Gut Reset Guide &mdash; plus free shipping on every order. Cancel anytime and keep the gifts.</div></details><details class='q'><summary>Can I cancel my subscription anytime? <span class='pl'>+</span></summary><div class='a'>Always. Subscribe &amp; Save gives you 14% off and full flexibility &mdash; pause, skip a shipment, or cancel anytime from your account. No phone calls, no lock-in.</div></details></div></section>

<section class='sec final'><div class='wrap-sm'><h2>Stop stacking. Start with one.</h2><p>Egg amino profile. From plants. With the fiber, gut support and vitamin C the rest of the aisle forgot.</p><a href='#offer' class='btn'>Choose Your Plan &rarr;</a><div class='micro'>From $2.40/serving on subscription &middot; Free shaker + 2 guides &middot; Free shipping &middot; Cancel anytime</div></div></section>

<footer><div class='wrap'><div class='disc'><b>Statements about products and health conditions have not been evaluated by the U.S. Food and Drug Administration and are not intended to diagnose, treat, cure, or prevent any disease.</b> Individual results may vary. Consult your healthcare professional before starting any new supplement program. If you are pregnant, nursing, taking medication, or have a medical condition, consult your healthcare professional before using this product.</div><div class='fl'><a href='#'>Shop</a><a href='#'>Our Science</a><a href='#'>Subscriptions</a><a href='#'>Contact</a><a href='#'>Shipping &amp; Returns</a><a href='#'>Privacy</a></div><div class='cp'>&copy; LivingFuel &mdash; The Leader in Superfood Nutrition &middot; Scientifically Perfected Nutrition</div></div></footer>

<div class='sticky'><div><div class='nm'>LivingProtein</div><div class='pr' id='stickyPr'><b>$59.99</b> &middot; Subscribe &amp; Save</div></div><a href='#offer' class='btn'>Choose Plan &rarr;</a></div>
<div id="lpModal" aria-hidden="true">
<div class="lpm-card" role="dialog" aria-modal="true" aria-label="LivingProtein quiz">
<button class="lpm-x" id="lpmClose" aria-label="Close">&times;</button>

<div id="lpmIntro"><img class="lpm-logo" src="https://cdn.shopify.com/s/files/1/0705/3541/3938/files/LivingFuel-Logo-Lockup.png?v=1782527503" alt="LivingFuel">
<div class="lpm-eyebrow">30-second quiz</div>
<h2 class="lpm-h">Is LivingProtein <span>right for you?</span></h2>
<p class="lpm-sub">Answer 3 quick questions and unlock <b>10% off</b> to try it for yourself.</p>
<button class="btn lpm-btn" id="lpmStart" type="button">Start the Quiz &rarr;</button>
<button class="lpm-nothanks lpm-decline" type="button">No thanks, I&rsquo;ll pay full price</button></div>

<div id="lpmQ1" style="display:none">
<div class="lpm-prog">Question 1 of 3</div>
<h2 class="lpm-h">How much protein do you get most days?</h2>
<button class="lpm-opt" data-val="Not enough">Honestly, not enough</button>
<button class="lpm-opt" data-val="Could be better">Some &mdash; could be better</button>
<button class="lpm-opt" data-val="Hits goal">I hit my protein goal</button>
<button class="lpm-nothanks lpm-decline" type="button">No thanks, I&rsquo;ll pay full price</button></div>

<div id="lpmQ2" style="display:none">
<div class="lpm-prog">Question 2 of 3</div>
<h2 class="lpm-h">What protein have you used before?</h2>
<button class="lpm-opt" data-val="Whey/dairy">Whey / dairy-based</button>
<button class="lpm-opt" data-val="Plant-based">Plant-based</button>
<button class="lpm-opt" data-val="Both">Both</button>
<button class="lpm-opt" data-val="None yet">None yet</button>
<button class="lpm-nothanks lpm-decline" type="button">No thanks, I&rsquo;ll pay full price</button></div>

<div id="lpmQ3" style="display:none">
<div class="lpm-prog">Question 3 of 3</div>
<h2 class="lpm-h">Do any of these sound familiar?</h2>
<button class="lpm-opt" data-val="Bloating/gas" data-result="gut">Bloating or gas</button>
<button class="lpm-opt" data-val="Cramping" data-result="gut">Cramping or stomach discomfort</button>
<button class="lpm-opt" data-val="Chalky taste" data-result="smooth">Chalky &amp; hard to drink</button>
<button class="lpm-opt" data-val="None" data-result="generic">None of these</button>
<button class="lpm-nothanks lpm-decline" type="button">No thanks, I&rsquo;ll pay full price</button></div>

<div id="lpmResult" style="display:none">
<div class="lpm-match">&#9989;</div>
<div class="lpm-eyebrow">Your result</div>
<h2 class="lpm-h">You&rsquo;re a <span>match</span>.</h2>
<p class="lpm-sub" id="lpmResultLine">You&rsquo;re a strong match for LivingProtein.</p>
<p class="lpm-sub">Enter your email and we&rsquo;ll send your <b>10% off code</b> &mdash; try it and feel the difference for yourself.</p>
<form class="lpm-formrow" id="lpmFormEl">
<input type="email" id="lpmEmail" class="lpm-input" placeholder="Your email address" required autocomplete="email">
<button type="submit" class="btn lpm-btn">Get My 10% Off &rarr;</button>
</form>
<div class="lpm-fine">No spam &mdash; unsubscribe anytime. By entering your email you agree to receive marketing emails from LivingFuel.</div>
<button class="lpm-nothanks lpm-decline" type="button">No thanks, I&rsquo;ll pay full price</button></div>

<div id="lpmPhone" style="display:none">
<div class="lpm-eyebrow">Last step</div>
<h2 class="lpm-h">Want your code <span>by text?</span></h2>
<p class="lpm-sub">Add your number and we&rsquo;ll text your 10% code so it&rsquo;s ready at checkout.</p>
<form class="lpm-formrow" id="lpmPhoneEl">
<input type="tel" id="lpmPhoneInput" class="lpm-input" placeholder="Your mobile number" autocomplete="tel">
<button type="submit" class="btn lpm-btn">Text Me My Code &rarr;</button>
</form>
<div class="lpm-fine">By providing your number you agree to receive recurring automated marketing texts (e.g. your discount) from LivingFuel at the number provided. Consent is not a condition of purchase. Msg &amp; data rates may apply. Reply STOP to opt out, HELP for help.</div>
<button class="lpm-nothanks" id="lpmSkipPhone" type="button">Skip &mdash; email&rsquo;s fine</button>
</div>

<div id="lpmReveal" style="display:none">
<div class="lpm-burst">&#127881;</div>
<div class="lpm-eyebrow">Here&rsquo;s your reward</div>
<h2 class="lpm-h"><span>10% OFF</span> your first order</h2>
<p class="lpm-sub">Use your code now &mdash; check your inbox for it too:</p>
<div class="lpm-code">LFLP-MYSTERY10</div>
<a class="btn lpm-btn" id="lpmApply" href="/discount/LFLP-MYSTERY10?redirect=%2Fpages%2Flivingprotein-lp">Apply &amp; Shop &rarr;</a>
<div class="lpm-fine">10% off your first order &middot; one use per customer.</div>
</div>

</div>
</div>
`;
var PLANS={sub:{id:45399702208690,sp:2442231986,price:'$59.99',label:'Subscribe & Save'},bundle:{id:46990698315954,price:'$179.97',label:'Bundle & Save'},once:{id:45399702208690,price:'$69.99',label:'One-Time'}};
var SHAKER=47564921503922;
var GIFT='/discount/LFLP-FREESHAKER?redirect='+encodeURIComponent('/discount/LFLP-FREESHIP?redirect=/checkout');
var current='sub';
function setPlan(el){var box=el.closest('.buybox');var opts=box.querySelectorAll('.bb-opt');for(var i=0;i<opts.length;i++){opts[i].classList.remove('active');}el.classList.add('active');current=el.getAttribute('data-plan');var p=PLANS[current];var ctas=document.querySelectorAll('.bb-cta');for(var j=0;j<ctas.length;j++){ctas[j].textContent='Add to Cart — '+p.price+' →';}var sp=document.getElementById('stickyPr');if(sp){sp.innerHTML='<b>'+p.price+'</b> · '+p.label;}}
function add(){var p=PLANS[current];var items=[{id:p.id,quantity:1}];if(p.sp){items[0].selling_plan=p.sp;}if(current==='sub'){items.push({id:SHAKER,quantity:1});}fetch('/cart/add.js',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({items:items})}).then(function(r){return r.json();}).then(function(){window.location.href=(current==='sub')?GIFT:'/checkout';}).catch(function(){window.location.href='/cart';});}
document.addEventListener('click',function(e){var opt=e.target.closest('.bb-opt');if(opt){setPlan(opt);return;}var cta=e.target.closest('.bb-cta');if(cta){e.preventDefault();add();return;}var th=e.target.closest('.thumb');if(th){var src=th.getAttribute('data-src');if(src){document.getElementById('heroMain').src=src;var ts=document.querySelectorAll('.thumb');for(var k=0;k<ts.length;k++){ts[k].classList.remove('active');}th.classList.add('active');}return;}});
var def=document.querySelector('.bb-opt.active');if(def){setPlan(def);}

(function(){
var modal=document.getElementById('lpModal'); if(!modal) return;
if(modal.parentElement!==document.body){ document.body.appendChild(modal); }
var ans={}, shown=false;
var STEPS=['lpmIntro','lpmQ1','lpmQ2','lpmQ3','lpmResult','lpmPhone','lpmReveal'];
function show(id){ for(var s=0;s<STEPS.length;s++){ var el=document.getElementById(STEPS[s]); if(el) el.style.display=(STEPS[s]===id?'block':'none'); } var c=modal.querySelector('.lpm-card'); if(c) c.scrollTop=0; }
function openM(){ if(shown||sessionStorage.getItem('lpmSeen')) return; shown=true; try{sessionStorage.setItem('lpmSeen','1');}catch(e){} modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); }
function closeM(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }
document.getElementById('lpmClose').addEventListener('click',closeM);
modal.addEventListener('click',function(e){ if(e.target===modal) closeM(); });
document.addEventListener('keydown',function(e){ if(e.key==='Escape') closeM(); });
var dec=modal.querySelectorAll('.lpm-decline'); for(var i=0;i<dec.length;i++){ dec[i].addEventListener('click',closeM); }
var start=document.getElementById('lpmStart'); if(start) start.addEventListener('click',function(){ show('lpmQ1'); });
var RES={ gut:"Bloating and stomach discomfort usually trace back to dairy-based protein &mdash; LivingProtein is 100% dairy-free, with 6g fiber plus pre &amp; probiotics to support your gut, not wreck it.", smooth:"No more chalk &mdash; LivingProtein mixes smooth with just water, with no grit and no artificial sweeteners.", generic:"LivingProtein delivers all 9 essential amino acids from 100% plants, plus the 6g fiber and probiotics most proteins skip." };
function bindQ(qid,key,next){ var b=document.querySelectorAll('#'+qid+' .lpm-opt'); for(var k=0;k<b.length;k++){ b[k].addEventListener('click',function(){ ans[key]=(this.getAttribute('data-val')||this.textContent).trim(); if(qid==='lpmQ3'){ var r=document.getElementById('lpmResultLine'); if(r) r.innerHTML=RES[this.getAttribute('data-result')]||RES.generic; } show(next); }); } }
bindQ('lpmQ1','LP Protein Intake','lpmQ2');
bindQ('lpmQ2','LP Tried Before','lpmQ3');
bindQ('lpmQ3','LP Side Effect','lpmResult');
document.getElementById('lpmFormEl').addEventListener('submit',function(e){ e.preventDefault(); var email=(document.getElementById('lpmEmail').value||'').trim(); if(!email||email.indexOf('@')<1) return; ans._email=email; try{ window._learnq=window._learnq||[]; var p={'$email':email,'$source':'LivingProtein LP quiz'}; ['LP Protein Intake','LP Tried Before','LP Side Effect'].forEach(function(kk){ if(ans[kk]) p[kk]=ans[kk]; }); window._learnq.push(['identify',p]); window._learnq.push(['track','LP Quiz Completed',{email:email,code:'LFLP-MYSTERY10','LP Protein Intake':ans['LP Protein Intake']||'','LP Tried Before':ans['LP Tried Before']||'','LP Side Effect':ans['LP Side Effect']||''}]); }catch(err){} show('lpmPhone'); });
document.getElementById('lpmPhoneEl').addEventListener('submit',function(e){ e.preventDefault(); var raw=(document.getElementById('lpmPhoneInput').value||''); var digits=raw.replace(/[^0-9]/g,''); if(digits.length<7) return; var ph=raw.trim().charAt(0)==='+'?('+'+digits):digits; try{ window._learnq=window._learnq||[]; var pp={'$phone_number':ph,'LP SMS Consent':'Yes'}; if(ans._email) pp['$email']=ans._email; window._learnq.push(['identify',pp]); window._learnq.push(['track','LP SMS Opt-in',{phone:ph,code:'LFLP-MYSTERY10'}]); }catch(err){} show('lpmReveal'); });
var skip=document.getElementById('lpmSkipPhone'); if(skip) skip.addEventListener('click',function(){ show('lpmReveal'); });
setTimeout(openM,6000);
if(!window.matchMedia('(max-width:900px)').matches){ document.addEventListener('mouseout',function(e){ if(!e.relatedTarget && e.clientY<=0) openM(); }); }
})();
(function(){
function kill(){ var els=document.querySelectorAll('[class*="kl-private-reset"]'); for(var i=0;i<els.length;i++){ var n=els[i]; while(n&&n.parentElement&&n.parentElement!==document.body){n=n.parentElement;} if(n&&n.parentElement===document.body){ n.style.display='none'; } } }
kill();
try{ new MutationObserver(kill).observe(document.body,{childList:true,subtree:true}); }catch(e){}
setInterval(kill,1500);
})();

})();
