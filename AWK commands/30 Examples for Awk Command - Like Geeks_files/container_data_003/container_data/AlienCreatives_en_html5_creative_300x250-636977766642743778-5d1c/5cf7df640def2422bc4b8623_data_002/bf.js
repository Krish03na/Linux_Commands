!function i(a,o,s){var l,e;function d(n,e){var t,r;if(!o[n]){if(!a[n]){if(t="function"==typeof require&&require,!e&&t)return t(n,!0);if(l)return l(n,!0);throw new Error("Cannot find module '"+n+"'")}r=o[n]={exports:{}},a[n][0].call(r.exports,function(e){var t=a[n][1][e];return d(t||e)},r,r.exports,i,a,o,s)}return o[n].exports}for(l="function"==typeof require&&require,e=0;e<s.length;e++)d(s[e]);return d}({1:[function(e,t,n){t.exports=function(s){var a=e("../utils/url");s.setupClickListener=function(){var e,t;s.TextTargetUrls=s.TextTargetUrls||{},e=document.getElementById("banner")||document,t=function(e,t,n){var r,i,a,o;e=e||{},r=window.event?window.event.srcElement:e.target||document,i=s.findParentBySelector(r,".object-inner"),r!==document&&i&&(r=i),o=a=t||s.getTargetUrlByElement(r),s.Parameters.targeturl&&(o=decodeURIComponent(s.Parameters.targeturl)),window.onBannerClick&&"function"==typeof onBannerClick&&(o=onBannerClick(e,a,n)),String.isString(o)&&-1<o.indexOf("//")&&"#"!==o&&"none"!==o&&(o=o.replace(/\[target_url\]/gi,a).replace(/\[target_url_esc\]/gi,encodeURIComponent(a)).replace(/\[target_url_esc_esc\]/gi,encodeURIComponent(encodeURIComponent(a))),s.trackEvent("click",{targetUrl:a,x:e.clientX,y:e.clientY}),window.open(o,s.Parameters.targetwindow||"_blank"))},s.bannerClick=t,e.onclick=t},s.getTargetUrlByElement=function(e){var t,n,r,i,a=e.getAttribute(s.TextAttributeName);if(a&&s.TextTargetUrls)return(t=s.TextTargetUrls[a])?t.value:s.DefaultTargetUrl;if((a=e.getAttribute(s.FeedAttributeName))&&s.LastParsedFeedData){for(r=0;r<s.LastParsedFeedData.length;r++)s.LastParsedFeedData[r].name===a&&(n=s.LastParsedFeedData[r]);return n&&n.clickUrls&&0<n.clickUrls.length?(i=s.getCalculatedIndexFromElement(e))%n.clickUrls.length>n.clickUrls.length-1?s.DefaultTargetUrl:n.clickUrls[i%n.clickUrls.length]||s.DefaultTargetUrl:s.DefaultTargetUrl}return s.DefaultTargetUrl},s.setTargetUrlByKey=function(e,t){s.TextTargetUrls||(s.TextTargetUrls={}),s.TextTargetUrls[e]||(s.TextTargetUrls[e]={}),-1===t.indexOf("//")&&(t="http://"+t),s.TextTargetUrls[e].value=t},s.trackEvent=function(e,t){var n,r=s.Parameters.clickpixel,i={};if(r&&(n=a.getQueryStrings(r)).data)try{i=JSON.parse(n.data)}catch(e){}window.parent.postMessage(JSON.stringify({event:e,url:window.location.href,data:t,params:i}),"*")}}},{"../utils/url":18}],2:[function(e,t,n){t.exports=function(u){u.injectFeed=function(){var i,t,r,e,a,o;function s(t){var n,e,r,i,a,o,s,l,d,c;try{if(!(n=JSON.parse(t)).Success&&!(n=JSON.parse(n)).Success)throw"is b1";a=!0}catch(e){n=t,a=!1}if(o=[],s=0,!a&&n){if(1===(r=n.split("#|#")).length&&""===r[0])return null;for(i=0;i<r.length;i++)d=(l=r[i].split("§|§"))[0],c=l[1].split("&|&"),(e=new f).name=d,e.values=c[0]?c[0].split("|||"):[],e.clickUrls=1<c.length?c[1].split("|||"):[],s=Math.max(e.values.length,s),o.push(e)}else{if(!(r=n.Feeds)||0===r.length)return null;for(i=0;i<r.length;i++)(e=new f).name=r[i].Name,e.values=r[i].Values,e.clickUrls=r[i].TargetUrls,s=Math.max(e.values.length,s),o.push(e)}return u.FeedSize=s,o}u.setFeedInterval(u.FeedInterval),void(r=t=0)===(e=u.all("animated")[0]||document.getElementById("iteration-div"))?u.log("Animated object not found"):u.prefixedEvent(e,"AnimationIteration",function(e){t++,u.TotalIterations=t*r,u.LastParsedFeedData&&u.fillFeedData(u.LastParsedFeedData)}),a=10,o=0,u.each(function(e){var t=parseInt(e.getAttribute("data-feed-index")),n="true"===e.getAttribute("data-feed-fixed");n||r<t&&(r=t)}),0===r&&(r=1),String.isString(u.FeedBackup)&&u.setFeed(s(u.FeedBackup)),Boolean.toBoolean(u.IsLiveFeed)&&parseInt(u.FeedInterval)<12e5?function n(e){var r=Date.now();return a<=o?(u.fillFeedData(i||u.FeedBackup),u.log("To many fetch errors, aborting")):function(e,t){var n,r,i,a;if("undefined"!=typeof XMLHttpRequest)n=new XMLHttpRequest;else for(i=0,a=(r=["MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"]).length;i<a;i++)try{n=new ActiveXObject(r[i]);break}catch(e){}n.onreadystatechange=function(){n.readyState<4||200===n.status&&4===n.readyState&&t(n)},n.open("GET",e,!0),n.send("")}(e+(-1<e.indexOf("?")?"&":"?")+"cb="+(new Date).getTime(),function(e){var t=Date.now()-r;return u.AdjustedFeedInterval*=Math.max(1,t/1e3),e.responseText&&4===e.readyState&&200===e.status?(i!==e.responseText&&(i=e.responseText,u.setFeed(s(i))),o=0,Boolean.toBoolean(u.IsLiveFeed)&&null!==u.AdjustedFeedInterval&&(u.liveTimeout&&clearTimeout(u.liveTimeout),u.liveTimeout=setTimeout(function(){n(u.FeedUrl)},u.AdjustedFeedInterval)),!0):(o++,!1)}),!1}(u.FeedUrl):u.sendToAllWidgets("set_feed",u.LastParsedFeedData)},u.fillFeedData=function(e){e&&u.each(function(e){u.setText(e,u.getText(e))})},u.setFeed=function(e){try{e&&e.length&&e[0].values.length&&(1!==e[0].values.length||e[0].values[0])?document.body.classList.add("feeded"):document.body.classList.remove("feeded")}catch(e){}u.LastParsedFeedData=e,u.fillFeedData(e),u.sendToAllWidgets("set_feed",e)},u.setFeedInterval=function(e){return u.FeedInterval=u.AdjustedFeedInterval=Math.max(1e4,parseInt(e)||0),u.FeedInterval},u.getCalculatedIndexFromElement=function(e){var t="data-feed-",n=parseInt(e.getAttribute(t+"index")),r="true"==e.getAttribute(t+"fixed");return isNaN(n)&&(n=0),r||(0===n?n=0===u.TotalIterations?1:u.TotalIterations+1:n+=u.TotalIterations),n-1};var f=function(e){var t=this;e||(e={}),t.name=e.name?e.name:"",t.valueIndex=e.valueIndex?e.valueIndex:0,t.showType=e.showType?e.showType:"auto",t.values=[],t.clickUrls=[]}}},{}],3:[function(e,t,n){t.exports=function(r){r.dispatchEvent=function(t,e){var n,r,i,a;if(!t)throw new Error("Event object missing type property.");try{n=new Event(t)}catch(e){(n=document.createEvent("Event")).initEvent(t,!0,!1)}if(n.data=e,vars._listeners[n.type]instanceof Array)for(i=0,a=(r=vars._listeners[n.type]).length;i<a;i++)r[i].call(vars,n,e)},r.all=function(e){return[].slice.call(document.getElementsByClassName(e||"object-inner"))},r.each=function(e,t){t=t||r.all();for(var n=0;n<t.length;n++)e(t[n],n)},r.getObjectsByKey=function(t){var n=[];return r.each(function(e){e.getAttribute("data-text-field")===t&&n.push(e)}),n},r.getObjectByKey=function(e){var t=r.getObjectsByKey(e);return 0<t.length?t[0]:void 0},r.cloneObject=function(e){var t,n;if(!e||"object"!=typeof e)return e;for(n in t=e.constructor(),e)e.hasOwnProperty(n)&&(t[n]=clone(e[n]));return t},r.log=r.error=function(){console&&console.log&&(-1!==window.location.href.indexOf("sandbox")||-1!==window.location.href.indexOf("localhost")||r.Parameters&&"1"===r.Parameters.verbose)&&console.log(arguments)},r.findParentBySelector=function(e,t){for(var n=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return!0;return!1},r=document.querySelectorAll(t),i=e?e.parentNode:null;i&&!n(r,i);)i=i.parentNode;return i},r.hasClass=function(e,t){return e.classList.contains(t.replace(/\./g,""))},r.prefixedEvent=function(e,t,n){var r,i=["webkit","moz","MS","o",""];for(r=0;r<i.length;r++)i[r]||(t=t.toLowerCase()),e.addEventListener(i[r]+t,n,!1)},r.toCamelCase=function(e){return e.replace(/-([a-z])/gi,function(e,t){return t.toUpperCase()})},r.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}},{}],4:[function(e,t,n){t.exports=function(z){var D={},R={},X=-1<window.navigator.userAgent.indexOf("Edge");z.resizeText=function(g,e,t,f,p,m,h,d){var n,r,i,y,s,v,a,o,l,c,u,b,x,T,w,I,L,N,M,k,E,A,S,B,C,F,O,W,U,P,j;if(!g||!g.innerHTML||""===g.innerHTML)return!1;if(h=h||g.getAttribute("data-resize")||"row",d=d||parseInt(g.getAttribute("data-textskew"))||0,g.getAttribute("data-originalText")&&(g.innerHTML=g.getAttribute("data-originalText")),"none"===h||!g||!g.innerHTML||""===g.innerHTML||-1!==g.innerHTML.indexOf("<iframe"))return!1;if(e=e||parseInt(g.parentNode.style.width.replace("px",""),10),t=t||parseInt(g.parentNode.style.height.replace("px",""),10),f=Math.max(0,f||parseInt(g.getAttribute("maxrows"))||parseInt(g.getAttribute("data-maxrows"))||0),p=p||parseInt(g.getAttribute("data-fontsize"))||parseInt(g.style.fontSize.replace("px",""),10)||20,m=m||parseInt(g.getAttribute("data-lineheight"))||parseInt(g.style.lineHeight.replace("px",""),10)||p,n=g.parentNode,r=parseInt(g.style.paddingTop.replace("px",""),10)||0,i=(parseInt(g.style.borderWidth.replace("px",""),10)||0)+r,y=e-2*i,s=t-2*i,v=m/p,a=g.style.transition,o=!1,l=g.parentNode.style.transform,c=g.style.transform,g.style.verticalAlign||"middle",u=document.getElementById("banner"),n.id&&u&&(b=u.getBoundingClientRect(),R[n.id]&&(clearTimeout(R[n.id]),R[n.id]=null),b&&0===b.width&&0===b.height))R[n.id]=setTimeout(function(){z.resizeText(g,e,t,f,p,m,h,d)},50);else{if(x=function(){return"ellipsis"===h},T=function(){return g.offsetHeight-2*i},w=function(){return g.offsetWidth-2*i},I=function(e,t){e.parentNode.insertBefore(t,e.nextSibling)},L=function(e,t){if(!e&&0===e.length)return!1;for(var n=0;n<e.length;n++)e[n].style.fontSize=t+"px",e[n].style.lineHeight=Math.round(t*v)+"px"},N=function(e){var t,n,r,i,a,o,s,l,d,c,u;for(A(g),t=0,n=[],r=[],i=1,a=-1e5,s=Math.max(.065*p,1.5),l=g.getElementsByClassName("bf_single_word"),d=0;d<l.length;d++)(c=l[d].getBoundingClientRect())&&c.height&&c.width&&(u=1<=(u=H())?1:u,o=c.top/u,Math.abs(o-a)>=s&&(0===f||t<f)&&(a=o,t++),X&&(i!==t&&r.length&&(n.push(r),i=t,r=[]),r.push({element:l[d],metrics:c}),d===l.length-1&&n.push(r)),l[d].className+=" bf_row"+t);return X?n:t},M=function(){var e,t=g.getElementsByClassName("bf_br");for(e=t.length-1;0<=e;e--)t[e].parentNode.removeChild(t[e])},k=function(){for(var e,t=g.getElementsByClassName("bf_single_word");t.length;){for(e=t[0].parentNode;t[0].firstChild;)e.insertBefore(t[0].firstChild,t[0]);e.removeChild(t[0])}},E=function(){var e,t,n="all"!==h?"line-height:"+(parseInt(g.style.lineHeight.replace("px",""),10)||m)+"px;":"",r="all"!==h?"font-size:"+(parseInt(g.style.fontSize.replace("px",""),10)||p)+"px;":"",i=g.innerHTML.replace(/<br\s*\/\>/g,"<br>").replace(/<\/br>/g,"<br>");if(i&&-1===i.indexOf("<div")&&-1<i.indexOf("<")&&-1<i.indexOf(">")){for(e=(i=i.replace(/(<br>){1,}/g,"<br><br>")).split("<br>"),t=0;t<e.length;t++)""===e[t]?e[t]="<div><br></div>":e[t]="<div>"+e[t]+"</div>";i=e.join("")}i=i.replace(/<div>(<u>|<i>|<b>|<span[^>]*>)*\s*(&nbsp;)+\s*(<\/u>|<\/i>|<\/b>|<\/span>)*<\/div>/gi,"<div><br></div>").replace(/\s+<\/div>/gi,"</div>").replace(/<strong>/g,"<b>").replace(/<\/strong>/g,"</b>").replace(/<em>/g,"<i>").replace(/<\/em>/g,"</i>").replace(/(<div><br><\/div>)+$/g,"").replace(/<br>/g,'<p style="'+r+n+'">&nbsp;</p>'),g.innerHTML=i},A=function e(t){var n,r,i,a,o,s,l;if(3!==t.nodeType)for(l=(n=t.childNodes).length-1;0<=l;l--)e(n[l]);else{for(r=document.createElement("div"),i="all"!==h?"line-height:"+(parseInt(g.style.lineHeight.replace("px",""),10)||m)+"px;":"",""!==(a=0!==d?"transform: skewX("+d+"deg);":"")&&(a+="-webkit-"+a+"display:inline-block;"),r.innerHTML=t.nodeValue.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([^\s<>]+)(?![^<]*>|[^<>]*<\/)/g,'<span class="bf_single_word" style="'+i+a+'">$1</span>'),o=t.parentNode,s=(n=r.childNodes).length-1;0<=s;s--)o.insertBefore(n[s],t.nextSibling);o.removeChild(t)}},g.getAttribute("data-lineheight")||g.setAttribute("data-lineheight",m),g.getAttribute("data-fontsize")||g.setAttribute("data-fontsize",p),"none"===g.parentNode.style.display&&(g.parentNode.style.display="table",o=!0),"all"!==h&&"row"!==h||(p=Math.min(t,p),m=p*v),g.style.fontSize=p+"px",g.style.lineHeight=m+"px",g.style.display="block",g.style.height="auto",g.style.width=y+"px",g.style.transition="none",g.style.transform="none",g.parentNode.style.transform="none",M(),k(),E(),S=g.getElementsByTagName("div"),B=g.getElementsByTagName("p"),C=S.length-f,!x()){if(0<f&&S.length>f)for(F=0;F<C;F++)0<B.length?((O=B[B.length-1].parentNode).parentNode.removeChild(O),B=g.getElementsByTagName("p")):(W=S[S.length-2],U=S[S.length-1],W.innerHTML=W.innerHTML+" "+U.innerHTML,U.parentNode.removeChild(U)),S=g.getElementsByTagName("div");for(P=T()/m;(0<f&&f<P||T()>s)&&(j=parseInt(g.style.fontSize.replace("px",""),10)-1,g.style.fontSize=j+"px",g.style.lineHeight=Math.round(j*v)+"px",L(B,j),P=T()/(j*v),!(j<2)););}x()?function(){var r,e,t,n,i,a,o;for(N(),r=[],function e(t){if(t.childNodes.length)for(var n=0;n<t.childNodes.length;n++)t.childNodes[n].childNodes.length?3===t.childNodes[n].childNodes[0].nodeType?r.push(t.childNodes[n]):e(t.childNodes[n]):r.push(t.childNodes[n])}(g),e=!1,t=0;t<r.length;t++)for(n=r[t];n.offsetWidth+n.offsetLeft>w();){n.innerHTML=n.textContent.split("").join("&shy;"),n.style.wordBreak="break-all",t===r.length-1&&s<T()&&(n.innerHTML=n.innerHTML.replace(/(\&shy;|­|&#173;)/gi,""),n.style.wordBreak="");break}for(t=r.length-1;0<=t;t--){for(n=r[t];s<T()||n.offsetWidth>w();)if(e=!0,3===n.nodeType){if(n.nodeValue=n.nodeValue.slice(0,-1),0===n.nodeValue.length)break}else if(n.innerHTML=n.innerHTML.slice(0,-1),0===n.innerHTML.length)break;for(""===(3===n.nodeType?n.nodeValue:n.textContent)&&(n.parentNode.removeChild(n),r.pop()),i=g.childNodes.length-1;0<i&&g.childNodes[i].textContent.match(/\s/)&&g.childNodes[i].previousSibling&&g.childNodes[i].previousSibling.textContent.match(/\s/);i--)g.childNodes[i].parentNode.removeChild(g.childNodes[i])}if(e&&0<r.length)for(a=!1,o=0,t=r.length-1;0<=t;t--)if(o+=0===(n=r[t]).textContent.replace(/\s/gi,"").length?0:n.textContent.length,n.textContent){if(4<=o){a?n.textContent=n.textContent.slice(0,-1)+"...":n&&3===n.nodeType?n.nodeValue=_(n.nodeValue):n.textContent=_(n.textContent);break}n.parentNode&&n.parentNode.removeChild(n),0<o.length&&(a=!0)}}():X?function(){for(var e,t,n,r,i,a,o,s,l,d,c=0,u=N(),f=u.length;c<f;){for(t=(e=u[c])[e.length-1],n=e[0],r=parseInt(g.style.fontSize.replace("px",""),10)||p,i=m,a=H(),o=t.metrics.width/(1<=a?1:a);t.metrics.left+o-n.metrics.left>=y||t.metrics.top>n.metrics.top+1||0===t.metrics.left&&0===t.metrics.width&&0===n.metrics.left;){if(r--,"all"===h)g.style.fontSize=r+"px",g.style.lineHeight=Math.round(r*v)+"px";else for(i=Math.round(r*v+Math.min(5,Math.max(0,15-r))),s=0;s<e.length;s++)e[s].element.style.fontSize=r+"px",e[s].element.style.lineHeight=i+"px";if(r<2)break;o=(l=g.getElementsByClassName("bf_row"+(c+1)))[l.length-1].offsetWidth}(d=document.createElement("br")).className="bf_br",I(t.element,d),c++}}():function(){var e,t,n,r,i,a,o,s,l=N();for(e=1;e<=l;e++){for(n=(t=g.getElementsByClassName("bf_row"+e))[t.length-1],r=t[0],i=parseInt(g.style.fontSize.replace("px",""),10)||p,a=m;n.offsetLeft+n.offsetWidth-r.offsetLeft>=y||n.offsetTop>r.offsetTop+1||0===n.offsetLeft&&0===n.offsetWidth&&0===r.offsetLeft;){if(i--,"all"===h)g.style.fontSize=i+"px",g.style.lineHeight=Math.round(i*v)+"px";else for(a=Math.round(i*v+Math.min(5,Math.max(0,15-i))),o=0;o<t.length;o++)t[o].style.fontSize=i+"px",t[o].style.lineHeight=a+"px";if(i<2)break}(s=document.createElement("br")).className="bf_br",I(n,s)}}(),"all"===h||x()||(g.style.lineHeight="0px"),g.parentNode.style.transform=l,g.style.transform=c,g.style.display="table-cell",g.style.height="100%",g.style.width="100%",o&&(g.parentNode.style.display="none"),n.id&&(D[n.id]&&(clearTimeout(D[n.id]),D[n.id]=null),D[n.id]=setTimeout(function(e){e.el.style.transition="all 0.3s linear"},50,{el:g,transition:a}))}function H(){var e=/\(([^)]+)\)/.exec(window.getComputedStyle(n,null).getPropertyValue("transform"));return e?parseFloat(e[1].split(",")[0]):1}function _(e){return e.slice(0,-3)+"..."}}}},{}],5:[function(e,t,n){t.exports=function(u){u.injectTexts=function(e){e&&(u.Texts=e),u.each(function(e){u.setText(e,u.getText(e))})},u.setText=function(e,t){"string"==typeof t&&(t={value:t}),e&&String.isString(t.value)&&(t.value=u.replaceTextMacros(t.value),"true"===e.getAttribute("data-font-uppercase")&&(t.value=t.value.toUpperCase()),u.isWidget(e)?u.setWidgetText(e.getElementsByTagName("iframe")[0],t):(e["innerHTML"in e?"innerHTML":"textContent"]=t.value,u.checkRTL(t.value)?e.style.direction="rtl":e.style.direction="",e.setAttribute("data-originalText",t.value),u.resizeText(e)))},u.getText=function(e){var t,n,r,i,a,o,s,l,d,c;if(u.LastParsedFeedData&&(t="data-feed-",n=u.LastParsedFeedData,r=e.getAttribute(t+"field"),i="true"===e.getAttribute(t+"fixed"),a=u.getCalculatedIndexFromElement(e),r)){for(s=0;s<n.length;s++)if(n[s].name===r){o=n[s];break}if(o)return l={value:null,url:null},i?a<=o.values.length-1?(l.value=o.values[a],l.url=o.clickUrls[a]):(l.value=o.values[0],l.url=o.clickUrls[0]):(l.value=o.values[a%o.values.length],l.url=o.clickUrls[a%o.clickUrls.length]),l}return d=u.Texts,c=u.TextTargetUrls,d&&(r=e.getAttribute("data-text-field"))&&d[r]?{value:d[r].value,url:c[r]?c[r].value:null}:""},u.setTextByKey=function(e,t){u.each(function(e){u.setText(e,t)},u.getObjectsByKey(e)),u.Texts&&u.Texts[e]&&(u.Texts[e].value=t)},u.replaceTextMacros=function(r){var e,t,n,i,a,o;if(r=r||"",e=function(e){var t,n=r.indexOf("#"+e+":");return-1===n&&(n=r.indexOf("#"+e+"#")),-1<n&&-1<(t=r.indexOf("#",n+1))?r.slice(n,t+1):""},u.Parameters)for(t in u.Parameters)if(u.Parameters.hasOwnProperty(t))for(;n=e(t);)r=r.split(n).join(u.Parameters[t]);for(i=new RegExp(/#[^:#]*:[^:#]*#/),a=r.match(i);a&&0<a.length;)o=a[0].replace(/#/g,"").split(":")[1],a=(r=r.replace(i,o)).match(i);return r},u.resizeAllObjectInner=function(){u.each(function(e){u.resizeText(e)})},u.checkRTL=function(e){return!(!window.BF_prop||-1==window.BF_prop.TextLanguageCulture.indexOf("ar")||!/[\u0600-\u06FF]/.test(e))}}},{}],6:[function(e,t,n){t.exports=function(o){var i=e("../utils/css"),s=document.getElementById("iteration-div");o.initStop=function(){var e,t=document.getElementById("iteration-div"),n=o.all("animated"),r=n[0]||t;if("none"===i.get(r.parentNode,"display"))for(e=0;e<n.length;e++)if("none"!==i.get(n[e].parentNode,"display")){r=n[e];break}t&&o.prefixedEvent(t,"AnimationIteration",function(){o.CurrentLoop+1>=o.MaxIterations&&0<o.MaxIterations&&o.stop()}),r&&o.prefixedEvent(r,"AnimationIteration",function(){o.CurrentLoop++,o.sendToAllWidgets("new_loop",o.CurrentLoop)})},o.seek=function(t){t=Math.limit(t,0,o.Duration/1e3),o.seekOffset=t,o.sendToAllWidgets("before_seek",t),o.seekOffset=t;var n=o.all("animated");n.forEach(function(e){e.parentNode.style.opacity="0"}),o.restartLoop(function(){var e=parseFloat(s.getAttribute("data-delay"))||-2;s.style.animationDelay=e-t+"s",n.forEach(function(e){e.style.animationDelay="-"+t+"s",e.parentNode.style.opacity="1"})},t)},o.restartBanner=function(e){o.CurrentLoop=0,o.TotalIterations=0,o.restartLoop(e)},o.restartTimeoutRefs={},o.restartLoop=function(i,e){var a=o.all("animated"),r=function(t,n,r){o.restartTimeoutRefs[t.id]&&(clearTimeout(o.restartTimeoutRefs[t.id]),o.restartTimeoutRefs[t.id]=null),o.restartTimeoutRefs[t.id]=setTimeout(function(e){o.restartTimeoutRefs[t.id]=null,t.setAttribute("class",n),t.style.visibility="visible",r===a.length-1&&(o.play(),i&&i())},1e3/60)},t=function(e,t){var n=e.getAttribute("class");-1===n.indexOf("restart")?(e.setAttribute("class","animated restart"),r(e,n,t),e.style.visibility="hidden"):t===a.length-1&&(o.play(),i&&i())},n=parseFloat(s.getAttribute("data-delay"))||-2;s.style.animationDelay=n+"s",t(document.getElementById("iteration-div")),a&&a.length?(o.seekOffset=e||0,o.each(t,a),o.each(function(e){e.style.animationDelay=o.seekOffset+"s"},a),o.sendToAllWidgets("new_loop",{loop:o.CurrentLoop,seekOffset:o.seekOffset})):i()},o.setLoopIndex=function(t,e){try{t<0&&(t=Math.max(0,o.FeedSize+t)),o.TotalIterations=t,e||o.restartLoop(),o.injectFeed()}catch(e){o.log("setLoopIndex error",t,e.message)}},o.setFeedInterval=function(e){return o.FeedInterval=o.AdjustedFeedInterval=Math.max(1e4,parseInt(e)||0),o.FeedInterval},o.prevLoop=function(e){o.setLoopIndex(o.TotalIterations-1,e)},o.nextLoop=function(e){o.setLoopIndex(o.TotalIterations+1,e)},o.pause=function(){o.each(function(e){e.classList.add("paused")},o.all("animated"));var e=document.getElementById("iteration-div");e&&e.classList.add("paused"),o.sendToAllWidgets("pause")},o.stop=function(){o.all("animated");o.pause(),o.each(function(e){e.classList.add("stopped"),e.classList.contains("bf_end")?e.style.display="table":e.style.display="none"},o.all("animated")),o.sendToAllWidgets("stop")},o.play=function(){o.each(function(e){e.classList.remove("paused"),e.classList.remove("stopped"),e.style.display="table"},o.all("animated"));var e=document.getElementById("iteration-div");e&&e.classList.remove("paused"),o.sendToAllWidgets("play",o.seekOffset||0)}}},{"../utils/css":10}],7:[function(e,t,n){t.exports=function(f){var n="custom_event",r="custom_progress_event",l=e("../utils/device");f.initListeners=function(){var i,e=function(e){f.sendToAllWidgets(e.type,{x:e.clientX,y:e.clientY})},t=function(e){var t=e.touches[0],n=e.type.replace(/touch/,"mouse").replace(/start/,"down").replace(/end/,"up").replace(/cancel/,"leave"),r={x:t?t.clientX:i.x,y:t?t.clientY:i.y,touch:!0};i=r,f.sendToAllWidgets(n,r)};document.addEventListener("mousemove",e),document.addEventListener("click",e),document.addEventListener("mousedown",e),document.addEventListener("mouseup",e),document.addEventListener("mouseleave",e),document.addEventListener("mouseenter",e),document.addEventListener("touchmove",t),document.addEventListener("touchstart",t),document.addEventListener("touchend",t),document.addEventListener("touchcancel",t)},f.onWidgetLoad=function(t,n,e){if(!t)return!1;if("true"===t.getAttribute("data-loaded"))try{n(t)}catch(e){f.log("Callback error "+e.message)}else window.addEventListener("message",function(e){try{t.contentWindow===e.source&&"loaded"===e.data.type&&(this.removeEventListener("message",arguments.callee),t.setAttribute("data-loaded","true"),n(t))}catch(e){f.log("Callback error "+e.message)}}),f.sendToWidget(t,"is_loaded")},f.setWidgetText=function(t,n,e){try{f.onWidgetLoad(t,function(){var e={type:"set_text",value:n.value,url:n.url};t.contentWindow.postMessage(e,"*")})}catch(e){f.log("Inject texts failed: "+e.message)}},f.getAllWidgets=function(){var t=[];return f.each(function(e){f.isWidget(e)&&t.push(e)}),t},f.sendToWidget=function(e,t,n){e.contentWindow.postMessage({type:t,value:n},"*")},f.sendToAllWidgets=function(n,r){f.each(function(e){var t=e.getElementsByTagName("iframe")[0];f.onWidgetLoad(t,function(e){f.sendToWidget(e,n,r)},n)},f.getAllWidgets())},f.initWidget=function(e){var t=e.parentNode;f.setWidgetStyle(e),f.onWidgetLoad(e,function(e){var t,n,r,i,a,o=e.parentNode,s=o.parentNode.id,l=f.getWidgetStyle(e),d=f.getWidgetSettings(e),c=f.replaceTextMacros(f.getText(o).value),u=(o.attributes,{text:c,feed:f.LastParsedFeedData,texts:f.Texts,target:f.DefaultTargetUrl,targetUrl:null,defaultTargetUrl:f.DefaultTargetUrl,style:l,settings:d,duration:f.Duration,elementId:s,size:{width:f.Width,height:f.Height}});for(t in u.texts)u.texts[t].url=f.TextTargetUrls[t]?f.TextTargetUrls[t].value:null;n=o.getAttribute("data-feed-field")||o.getAttribute("data-text-field"),r=o.getAttribute("data-feed-index"),i=o.getAttribute("data-fallback"),a=o.getAttribute("data-fallbackposition"),f.Parameters&&(u.parameters=f.Parameters),n&&(u.key=n,u.targetUrl=f.TextTargetUrls[n]?f.TextTargetUrls[n].value:null),r&&(u.feedIndex=parseInt(r)),i&&(u.isFallback=!0),a&&(u.fallbackPosition=parseFloat(a)),f.inEditor&&(u.isEditor=!0),window.BF_prop&&(u.languageCulture=BF_prop.TextLanguageCulture),window.BF_prop&&(u.cultureName=BF_prop.TextCultureName),f.sendToWidget(e,"init",u),e.style.opacity=1});try{f.getTargetUrlByElement(t)!==f.DefaultTargetUrl&&(t.parentNode.style.pointerEvents="all")}catch(e){}},f.initWidgets=function(){f.each(function(e){var t,n,r,i,a,o,s;f.isWidget(e)&&(t=e.getElementsByTagName("iframe")[0],n=e.getElementsByClassName("cover"),l.isMobile()&&n&&0<n.length&&(n[0].style.display="block"),l.isiOS()&&(t.style.width="1px",t.style.minWidth="100%"),r=e.parentNode,i=parseInt(r.style.top),a=parseInt(r.style.left),o=parseInt(r.style.width),s=parseInt(r.style.height),-1<r.className.indexOf("no-animation")&&(i+s<0||a+o<0||a>f.Width||i>f.Height)&&(r.style.top=f.Height-2+"px",r.style.left=f.Width-2+"px",r.style.zIndex=1,r.style.opacity=0,r.style.visibility="hidden",r.style.animation="none"),f.initWidget(t))}),window.addEventListener("message",f.widgetAssetMessage)},f.getWidgetStyle=function(e){var t,n,r,i={},a=e.parentNode;for(t=0;t<a.style.length;++t)i[(a.style.item(t)||"").toString().replace(/-/g,"").toLowerCase()]=a.style[f.toCamelCase(a.style.item(t))];n={};try{for(t=0;t<a.parentNode.style.length;++t)n[(a.parentNode.style.item(t)||"").toString().replace(/-/g,"").toLowerCase()]=a.parentNode.style[f.toCamelCase(a.parentNode.style.item(t))]}catch(e){}for(i.attributes={},t=0;t<a.attributes.length;t++)r=e.parentNode.attributes[t],i.attributes[r.nodeName.replace(/-/g,"").toLowerCase()]=a.attributes[t].nodeValue;return i.parentStyle=n,i},f.setWidgetStyle=function(e){f.onWidgetLoad(e,function(e){var t=f.getWidgetStyle(e);f.sendToWidget(e,"set_style",t)})},f.getWidgetSettings=function(e){var t,n,r,i={},a=e.getAttribute("data-settings");if(a&&(t=JSON.parse(a))&&t.length)for(n=0;n<t.length;n++)i[(r=t[n]).key]=r.value;return i},f.setWidgetSettings=function(e){f.onWidgetLoad(e,function(e){var t=f.getWidgetSettings(e);f.sendToWidget(e,"set_settings",t)})},f.widgetAssetMessage=function(e){try{if(e.data&&e.data.type){var t=e.data.data;switch(e.data.type){case"setFeed":f.setFeed(t);break;case"setText":f.setTextByKey(t.key,t.text);break;case"setTargetUrlByKey":f.setTargetUrlByKey(t.key,t.url);break;case"event":f.sendToAllWidgets("event",t);try{window.parent.postMessage({type:"bfWidgetEvent",value:t},"*")}catch(e){}break;case n:f.trackCustomEvent(t);break;case r:f.trackCustomProgressEvent(t);break;case"hideWidget":f.hideWidget(t);case"showWidget":f.showWidget(t);default:f[e.data.type]&&f[e.data.type](t)}}}catch(e){f.log("Widget callback error "+e.message)}},f.trackCustomEvent=function(e){e&&e.name&&f.trackEvent(n,e)},f.trackCustomProgressEvent=function(e){e&&e.name&&f.trackEvent(r,e)},f.isWidget=function(e){return 0<e.getElementsByTagName("iframe").length},f.hideWidget=function(e){var t,n,r=document.getElementById(e);for(r.style.opacity="0",r.style.pointerEvents="none",t=r.getElementsByTagName("*"),n=0;n<t.length;n++)t[n].style.display="none"},f.showWidget=function(e){var t,n,r=document.getElementById(e);for(r.style.opacity="",r.style.pointerEvents="",t=r.getElementsByTagName("*"),n=0;n<t.length;n++)t[n].style.display=""},f.click=function(e){window.open(e||f.DefaultTargetUrl,"_blank")}}},{"../utils/device":11}],8:[function(l,e,t){!function(){"use strict";var e,t,i,n,a,o,s,r;l("./utils/polyfills/console"),l("./utils/polyfills/object"),l("./utils/extensions/boolean"),l("./utils/extensions/string"),l("./utils/extensions/math"),l("./utils/extensions/object"),e=l("./utils/url"),t=l("./utils/browser"),i=l("./utils/device"),n=l("./utils/css"),a=t&&"Safari"===t.name&&10<=parseInt(t.version);try{o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Version)/i.test(navigator.userAgent)}catch(e){}try{!document.domain.match(/(pro\.|sandbox\.|sandbox\-app\.|app\.|localhost)/)&&2<document.domain.split(".").length&&(document.domain=document.domain.substring(document.domain.indexOf(".")+1))}catch(e){}if((s={Texts:{},TextTargetUrls:{},TextAttributeName:"data-text-field",FeedAttributeName:"data-feed-field",Parameters:e.getQueryStrings(),DefaultTargetUrl:"",FeedUrl:"",FeedBackup:"",FeedInterval:0,AdjustedFeedInterval:0,IsLiveFeed:!1,LastParsedFeedData:null,TotalIterations:0,MaxIterations:-1,CurrentLoop:0,Duration:0,Initialized:!1,FeedSize:0,Width:0,Height:0}).Parameters.bfscript)return r=decodeURIComponent(s.Parameters.bfscript),document.write("<scr"+'ipt src="{0}"></scr'.format(r)+"ipt>");Object.assign(s,l("./banner/text")(s)),Object.assign(s,l("./banner/text-resize")(s)),Object.assign(s,l("./banner/click")(s)),Object.assign(s,l("./banner/timeline")(s)),Object.assign(s,l("./banner/feed")(s)),Object.assign(s,l("./banner/widget-communication")(s)),Object.assign(s,l("./banner/misc")(s)),s.setupClickListener(),"-90"===s.Parameters.rotate&&n.set(document.body,{transform:"rotate(-90deg) translateX(-"+document.getElementById("banner").offsetWidth+"px)","transform-origin":"top left"}),s.Init=function(){var e,t,n,r=s;if((a||o)&&(document.body.style.opacity=0),(e=i.isMobile())?document.body.classList.add("mobile"):e||document.body.classList.add("desktop"),r.Initialized||"complete"!==document.readyState)!r.Initialized&&document.body.classList&&window.addEventListener("load",r.Init);else{try{r.injectTexts()}catch(e){r.error("BF: Inject texts failed: "+e.message,e)}try{r.injectFeed()}catch(e){r.error("BF: Inject feed failed: "+e.message,e)}try{r.initWidgets()}catch(e){r.error("BF: Widget asset setup failed: "+e.message,e)}try{r.initStop()}catch(e){r.error("BF: Stop setup failed: "+e.message,e)}try{r.initListeners()}catch(e){r.error("BF: Listeners setup failed: "+e.message,e)}r.Initialized=!0,(a||o)&&(t=function(){document.body.style.transition="opacity 0.2s",document.body.style.opacity=1},document.hidden?(n=function(){"visible"===document.visibilityState&&r.restartBanner(t)},document.addEventListener("visibilitychange",n)):setTimeout(function(){r.resizeAllObjectInner(),r.restartBanner(t)},100)),r.sendToAllWidgets("new_loop",0),r.play(),s.Parameters.ipxl&&((new Image).src=s.Parameters.ipxl,null)}},window.BF=s}()},{"./banner/click":1,"./banner/feed":2,"./banner/misc":3,"./banner/text":5,"./banner/text-resize":4,"./banner/timeline":6,"./banner/widget-communication":7,"./utils/browser":9,"./utils/css":10,"./utils/device":11,"./utils/extensions/boolean":12,"./utils/extensions/math":13,"./utils/extensions/object":14,"./utils/extensions/string":15,"./utils/polyfills/console":16,"./utils/polyfills/object":17,"./utils/url":18}],9:[function(e,t,n){t.exports=function(){var e,t=navigator.userAgent,n=t.match(/(opera|edge|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];if(/trident/i.test(n[1]))return{name:"IE",version:(e=/\brv[ :]+(\d+)/g.exec(t)||[])[1]||""};if("Chrome"===n[1]){if(e=t.match(/\bOPR\/(\d+)/))return{name:"Opera",version:e[1]};if(e=t.match(/(edge(?=\/))\/?\s*(\d+)/i))return{name:"Edge",version:e[e.length-1]}}return n=n[2]?[n[1],n[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=t.match(/version\/(\d+)/i))&&n.splice(1,1,e[1]),{name:n[0].replace(/MSIE/g,"IE"),version:n[1]}}()},{}],10:[function(e,t,n){t.exports=function(){"use strict";var e=["moz","webkit","o","ms"],d={animation:e,"animation-name":e,"animation-duration":e,"animation-timing-function":e,"animation-delay":e,"animation-iteration-count":e,"animation-direction":e,"animation-fill-mode":e,"animation-play-state":e,"box-decoration-break":e,"box-shadow":e,"box-sizing":e,transition:e,"transition-property,":e,"transition-duration":e,"transition-timing-function":e,"transition-delay":e},o={"linear-gradient":e,"radial-gradient":e,"repeating-linear-gradient":e,"repeating-radial-gradient":e,scale:e,translate:e,rotate:e,skew:e,perspective:e};function c(e,t,n){var r,i,a;if(e.style[t]===n)return!0;if(r=e.style[t],e.style[t]=n,e.style[t]!==r)return!0;for(i=0,a=o.length;i<a;i++)if(0===s.startsWith(o[i])&&(e.style[t]="-"+o[i]+"-"+style[s],e.style[t]!==r))return!0;return!1}return{set:function(s,l){if(s&&l)if(Array.isArray(s)){var t=this;s.forEach(function(e){t.set(e,l)})}else Object.keys(l).forEach(function(e){var t,n,r,i,a,o=Array.isArray(l[e])?l[e]:[l[e]];for(t=0,n=o.length;t<n;t++){if(c(s,e,o[t]))return;if(d[e])for(r=0,i=d[e].length;r<i;r++)if(a=d[e][r],c(s,"-"+a+"-"+e,o[t]))return}})},get:function(e,t,n){if(e&&t){var r=window.getComputedStyle?window.getComputedStyle(e,n):e.style;return r.getPropertyValue?r.getPropertyValue(t):r[t]}}}}()},{}],11:[function(e,t,n){t.exports={isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|SamsungBrowser|IEMobile|Opera Mini/i.test(navigator.userAgent)},isTouchDevice:function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)},supportsHtml5:function(){var e,t,n,r,i,a,o;if(-1<navigator.userAgent.indexOf("Android")){if(Number(navigator.userAgent.match(/Android\s(.*?);/i)[1].split(".").slice(0,2).join("."))<4.1)return!1;if(-1<navigator.userAgent.indexOf("Firefox"))return!1}if((e=function(){for(var e=3,t=document.createElement("div"),n=t.getElementsByTagName("i");t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e",n[0];);return 4<e?e:void 0}())&&e<10)return!1;if(navigator.appVersion)try{if(-1<(n=(t=navigator.appVersion.split("/"))[t.length-2]).indexOf("Safari")&&Number(n.split(".")[0])<=5)return!1}catch(e){}if("string"==typeof(r=(document.body||document.documentElement).style)[i="transition"])return!0;for(a=["Moz","webkit","Webkit","Khtml","O","ms"],i=i.charAt(0).toUpperCase()+i.substr(1),o=0;o<a.length;o++)if("string"==typeof r[a[o]+i])return!0;return!1},isiOS:function(){return!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform)}}},{}],12:[function(e,t,n){t.exports=void(Boolean.toBoolean||(Boolean.toBoolean=function(e){return!0===e||"true"===e||"True"===e}))},{}],13:[function(e,t,n){t.exports=(Math.limit||(Math.limit=function(e,t,n){return this.min(this.max(e,t),n)}),Math.roundTo||(Math.roundTo=function(e,t){return t=Math.abs(t)||1,Math.round(e/t)*t}),Math.floorTo||(Math.floorTo=function(e,t){return t=Math.abs(t)||1,Math.floor(e/t)*t}),Math.ceilTo||(Math.ceilTo=function(e,t){return t=Math.abs(t)||1,Math.ceil(e/t)*t}),Math.toDegrees||(Math.toDegrees=function(e){return 180*e/Math.PI}),Math.toRadians||(Math.toRadians=function(e){return e*Math.PI/180}),Math.closest||(Math.closest=function(e,t){var n,r,i=0,a=Number.MAX_VALUE;for(i in e)(r=Math.abs(parseFloat(t)-parseFloat(e[i])))<a&&(a=r,n=parseFloat(e[i]));return n}),Math.toNumber||(Math.toNumber=function(e,t){var n=null!=e?parseFloat(e.toString().replace(",",".").replace(/[^\.\d-]/g,""),10):NaN;return isNaN(n)&&void 0!==t?t:n}),void(Math.toInt||(Math.toInt=function(e,t){var n=null!=e?parseInt(e.toString().replace(",",".").replace(/[^\.\d-]/g,""),10):NaN;return isNaN(n)&&void 0!==t?t:n})))},{}],14:[function(e,t,n){t.exports=void(Object.isObject||(Object.isObject=function(e){return e&&e.constructor==={}.constructor}))},{}],15:[function(e,t,n){t.exports=(String.prototype.capitalize||(String.prototype.capitalize=function(){return this[0].toUpperCase()+this.slice(1)}),String.isString||(String.isString=function(e){return"string"==typeof e||e instanceof String}),String.prototype.format||(String.prototype.format=function(){var n=arguments;return this.replace(/{(\d+)}/g,function(e,t){return void 0!==n[t]?n[t]:e})}),void(String.prototype.camelCase||(String.prototype.camelCase=function(){return this.replace(/-([a-z])/gi,function(e,t){return t.toUpperCase()})})))},{}],16:[function(e,t,n){t.exports=("undefined"!=typeof console&&void 0!==console.log||(window.console={log:function(){}}),console.warn=console.warn||console.log,void(console.error=console.error||console.log))},{}],17:[function(e,t,n){function r(){}t.exports=("function"!=typeof Object.assign&&(Object.assign=function(e){"use strict";var t,n,r,i=Object(e);for(t=1;t<arguments.length;t++)if(null!=(n=arguments[t]))for(r in n)n.hasOwnProperty(r)&&(i[r]=n[r]);return i}),"function"!=typeof Object.create&&(Object.create=function(e){r.prototype=e;var t=new r;return r.prototype=null,t}),void(Object.keys||(Object.keys=function(e){var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push(t);return n})))},{}],18:[function(e,t,n){t.exports=function(){"use strict";return{getQueryStrings:function(e){e&&-1<e.indexOf("?")&&(e=e.substring(e.indexOf("?")+1));for(var t,n=/\+/g,r=/([^&=]+)=?([^&]*)/g,i=function(e){try{e=decodeURIComponent(e.replace(n," "))}catch(e){}return e},a=e||window.location.search.substring(1),o={};t=r.exec(a);)o[i(t[1])]=i(t[2]);return o},appendQueryString:function(e,t,n){return t&&n?e+(-1<e.indexOf("?")?"&":"?")+t+"="+n:e}}}()},{}]},{},[8]);
//# sourceMappingURL=bf.min.js.map
