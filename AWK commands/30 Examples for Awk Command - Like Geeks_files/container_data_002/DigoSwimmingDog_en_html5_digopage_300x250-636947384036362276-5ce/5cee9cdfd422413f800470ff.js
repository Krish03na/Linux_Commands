(function(){function t(n,t,i){n.addEventListener?n.addEventListener(t,i,!1):n.attachEvent&&n.attachEvent("on"+t,i)}function u(n,t,i){n.addEventListener?n.removeEventListener(t,i):n.attachEvent&&n.detachEvent("on"+t,i)}function f(i){function h(){var t;for(f=r[r.length-1],t=r.length-1;t>=0;t--){var u=r[t],e=u.src||"",o=u.className||"";if(e.indexOf(n.id)!==-1||e.indexOf(n.ad.id)!==-1||o.indexOf("bannerflow_preview_script")!==-1){f=u;break}}i(f)}var r=document.getElementsByTagName("script"),f=e,o;if(f)i(f);else if(document.readyState=="complete")h();else{function c(n){s(n.target)}function s(t){for(var e=t&&t.src?t.src:"",f=0;f<r.length;++f)u(r[f],"load",c),u(r[f],"readystatechange",l);if(u(document,"readystatechange",a),!t||e.indexOf(n.id)==-1&&e.indexOf(n.ad.id)==-1&&(!t.className||t.className.indexOf("bannerflow_preview_script")==-1)){h();return}i(t)}function l(n){n=n||window.event;var t=n.target||n.srcElement;t.readyState=="complete"&&s(t)}function a(){document.readyState=="complete"&&s()}for(o=0;o<r.length;++o)t(r[o],"load",c),t(r[o],"readystatechange",l);t(document,"readystatechange",a)}}var n={id:"5cee9cdfd422413f800470ff",targetUrl:null,targetWindow:"_blank",politeLoading:!0,displayType:"animated",responsive:!1,campaignId:null,scheduleId:"",account:{id:"shutterstock"},brand:{id:"589873bd5a4e8749bce403ff",defaultLocalization:"en"},publisher:{id:"missing",name:null},network:{tag:{patternClickUrl:null,patternClickPixel:null,patternImpressionPixel:null},id:"58aecd5c657197058cc7aede"},ad:{id:"5ce6c570a4a4a03b243101ba",size:{width:"300px",height:"250px"},type:{id:0,fallbackId:0,name:"regular",dependencies:[{func:"BannerFlowRender",src:"//cdn.bannerflow.com/scripts/1.4.48/render.min.js"}],settings:{}},localization:null,spots:[{index:0,size:{width:"300px",height:"250px"},type:"regular",selections:[{name:"",weight:0,localization:null,banners:[{id:"5ce6c570a4a4a03b243101b9",srcAnimated:"//cdn.bannerflow.com/bf-banners/5ce6c570a4a4a03b243101b9.html?cb=636942705449155757",srcImage:"//cdn.bannerflow.com/bf-banners/5ce6c570a4a4a03b243101b9.KCWWe25qDCjD.html?cb=636942705467594010",imageUrl:"//cdn.bannerflow.com/bf-images/5ce6c570a4a4a03b243101b9.KCWWe25qDCjD.jpg?cb=636942705463687313",localization:"zh",bannerset:"5cc069fe630da466100b0490",targeturl:"https://www.shutterstock.com/",localizationId:"58b680dacc269d5eacb850a0",translationId:"5ce6c570a4a4a03b243101b3",sizeFormatId:"58aaea9e890ac141a4f1c78e",bannerFormatId:"5ce24ecc16cb341a04fe72b1"}]}]}]},bftracking:{url:"//589873bd5a4e8749bce403ff.tracker.bannerflow.com/api/tr/impression?data=",clickUrl:"//589873bd5a4e8749bce403ff.tracker.bannerflow.com/api/tr/click?data=",preview:!1,trackerUrl:"//589873bd5a4e8749bce403ff.tracker.bannerflow.com/api/tr/v1/pixel?data="}},r,e,i;(r=!1,n.ad)&&(e=document.currentScript,i=function(u){function g(n){var u={},f,i,t,e,r;if(!n)return u;for(f=n.split(/[;&]/),i=0;i<f.length;i++)(t=f[i].split("="),t&&t.length==2)&&(e=unescape(t[0]),r=unescape(t[1]),r=r.replace(/\+/g," "),u[e]=r);return u}function it(n,t){for(var e=u.src.split("/")[0],i=undefined,f=document.getElementsByTagName("script"),r=0;r<f.length;r++)if(f[r].src&&f[r].src.indexOf(n.src)>-1){i=f[r];n.func&&typeof window[n.func]=="undefined"?b(i,t):t();break}i||(i=document.createElement("script"),i.async=!0,b(i,t),i.src=(n.src.indexOf("http")!==0?e:"")+n.src,document.getElementsByTagName("head")[0].appendChild(i))}function b(i,r){var u=function(){var n=i.readyState;r.done||n&&!/loaded|complete/.test(n)||(r.done=!0,r())};tt?t(i,"load",u):v||(v=setInterval(function(){for(var i,r=!0,t=0;t<n.ad.type.dependencies.length;t++)i=n.ad.type.dependencies[t],i.func&&!window[i.func]&&(r=!1);r&&(clearInterval(v),p());w>30&&p();w++},200))}function p(){var f,t,i;if(!r&&(r=!0,f=window[n.ad.type.dependencies[0].func](n,e,u),t=n.ad.type.dependencies,t.length>1))for(i=1;i<t.length;i++)t[i].func&&window[t[i].func](f,n,e)}var d=u.src.replace(/^[^\?]+\??/,""),e=g(d),o="",s,l,h,y,c,k;for(prop in e)o+=prop+"="+e[prop]+"&";if(o.length>1&&(o=o.substring(0,o.length-1)),s=u.parentNode,l=document.body,(!l.innerHTML||/reporting\/creative_display\.asp/.test(window.location.href))&&s&&s.nodeName=="HEAD"&&(l.setAttribute("id","body"),n.container="body"),!s||s.nodeName=="HEAD"&&!n.container&&!e.container){setTimeout(function(){f(i)},500);return}if(e.renderjs&&e.renderjs!=-1)for(h=0;h<n.ad.type.dependencies.length;h++)n.ad.type.dependencies[h].src.indexOf("render")!=-1&&(n.ad.type.dependencies[h].src=e.renderjs);var a=function(){for(var i,n=3,t=document.createElement("div"),r=t.getElementsByTagName("i");t.innerHTML="<!--[if gt IE "+ ++n+"]><i><\/i><![endif]-->",r[0];);return n>4?n:i}(),nt=/firefox/i.test(navigator.userAgent),tt=!a&&!nt||a!=undefined&&a>9,w=0,v;for(y=n.ad.type.dependencies.length,c=0;c<n.ad.type.dependencies.length;c++)k=n.ad.type.dependencies[c],it(k,function(){y--;y===0&&p()})},document.body?f(i):t(window,"load",function(){var t=document.body;t&&(t.setAttribute("id","body"),n.container="body");f(i)}))})()