/*! Adblock */
(function(e,t){function i(){function i(e,t){var i=n.createElement("b"),s=n.body,o=s.style,u=s.childNodes.length;if(typeof t!=r){i.setAttribute("id",t);o.margin=o.padding=0;o.height="100%";u=Math.floor(Math.random()*u)+1}i.innerHTML=e;s.insertBefore(i,s.childNodes[u-1])}function s(e,t){return!t?n.getElementById(e):n.getElementsByTagName(t)}function o(e){if(!s("z2c7")){i("<p><s1>Adblock detected !!</s1><br/><s2>
Please disable / turn off adblock on androidradeon.blogspot.com</s2><br/><br/>Each click ads buddy used for upgrades and server maintenance.<br><s3>&copy; 2009-2015</s3></p>","z2c7")}}(function(){var t=["adBannerTable","ad_YieldManager-728x90","adver5","googleAdwordsModule","iframeTopAd","multi_ad","cnt #center_col > #res > #topstuff > .ts","ad","ads","adsense"],r=t.length,u,a="",l;for(u=0;u<r;u++){if(!s(t[u])){a+='<a id="'+t[u]+'"></a>'}}i(a);r=t.length;setTimeout(function(){for(u=0;u<r;u++){l=s(t[u]);if(l.offsetParent==null||(e.getComputedStyle?n.defaultView.getComputedStyle(l,null).getPropertyValue("display"):l.currentStyle.display)=="none"){return o("#"+t[u])}}},250)})();(function(){var e=s(0,"img"),t=["/adimg.","/admanagers/ad","/adserve_","/adslug-","/adsrich.","/advertising_","/framead/ad","/htmlads/ad","/netreachtextads/ad","_advertising/"],n;if(typeof e[0]!=r&&typeof e[0].src!=r){n=new Image;n.onload=function(){this.onload=r;this.onerror=function(){o(this.src)};this.src=e[0].src+"#"+t.join("")};n.src=e[0].src}})();(function(){var i={"http://pagead2.googlesyndication.com/pagead/show_ads.js":"google_ad_client","http://js.adscale.de/getads.js":"adscale_slot_id","http://get.mirando.de/mirando.js":"adPlaceId"},a=s(0,"script"),l=a.length-1,c,h,p,v,m;n.write=null;for(p=l;p>=0;--p){m=a[p];if(typeof i[m.src]!=r){c=n.createElement("script");c.type="text/javascript";c.src=m.src;v=i[m.src];e[v]=t;h=a[0];c.onload=c.onreadystatechange=function(){if(typeof e[v]==r&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){c.onload=c.onreadystatechange=null;h.parentNode.removeChild(c);e[v]=null}};h.parentNode.insertBefore(c,h);setTimeout(function(){if(e[v]===t){o(c.src)}},50);break}}})()}var n=e.document,r=typeof t;if(n.addEventListener){e.addEventListener("load",i,false)}else{e.attachEvent("onload",i)}})(window)

