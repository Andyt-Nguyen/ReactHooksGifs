(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),l=a.n(r),c=(a(16),a(4)),o=a(5),u=a(9),s=a(6),f=a(10),m=a(8),g=a(1),d=a(7),h=a.n(d),v=function(e){var t=e.onSubmit,a=e.onTextChange,n=e.text;return i.a.createElement("form",{className:"search_container",onSubmit:t},i.a.createElement("input",{className:"search_input",placeholder:"Search gifs",onChange:a,type:"text",value:n}),i.a.createElement("button",{type:"submit"},"Submit"))},_=function(e){var t=e.isFavNav,a=e.children;return i.a.createElement("nav",{className:t?"favorites_nav_show":"favorites_nav_hide"},a)},b=function(e){var t=Object(n.useState)(!0),a=Object(g.a)(t,2),r=a[0],l=a[1];return i.a.createElement("figure",{style:{width:e.width,height:e.height},className:"gifContainer"},i.a.createElement("div",{className:"overlay_fav"},e.isFav?i.a.createElement("button",{className:"fav_btn",type:"button",onClick:e.removeGif},i.a.createElement("i",{className:e.isFav?"fas fa-star remove_icon":"fas fa-star fav_icon"})):i.a.createElement("button",{className:"fav_btn",type:"button",onClick:e.addGif},i.a.createElement("i",{className:e.isFav?"fas fa-star unfav_icon":"fas fa-star fav_icon"}))),i.a.createElement("button",{className:"gifBtn",type:"button",onClick:function(){return l(!r)}},i.a.createElement("img",{className:"gifImage",alt:e.title,src:r?e.gif_url:e.still_url})))},p=function(){var e=Object(n.useState)("Gif App"),t=Object(g.a)(e,2),r=t[0],l=t[1],c=Object(n.useState)(""),o=Object(g.a)(c,2),u=o[0],s=o[1],f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(n.useState)([]),i=Object(g.a)(t,2),r=i[0],l=i[1];return Object(n.useEffect)(function(){a.e(1).then(a.bind(null,21)).then(function(t){t.getGifs(e,function(e){return l(e)})})}),r}(u),d=Object(n.useState)([]),p=Object(g.a)(d,2),E=p[0],w=p[1],j=Object(n.useState)(!1),O=Object(g.a)(j,2),N=O[0],x=O[1];function y(e,t,a){-1===E.findIndex(function(e){return e.gif_url===t})&&w(Object(m.a)(E).concat([{title:e,gif_url:t,still_url:a}]))}function k(e){w(E.filter(function(t){return t.gif_url!==e}))}return Object(n.useEffect)(function(){document.title=r},[r]),i.a.createElement("div",null,i.a.createElement(_,{isFavNav:N},0===E.length?i.a.createElement("p",null,"There are no gifs here"):E.map(function(e){return i.a.createElement(b,{key:e.gif_url,isFav:!0,addGif:function(){return y(e.title,e.gif_url,e.still_url)},removeGif:function(){return k(e.gif_url)},height:"160px",width:"290px",title:e.title,gif_url:e.gif_url,still_url:e.still_url})})),i.a.createElement("header",{className:"fav_text_container"},i.a.createElement("button",{onClick:function(){x(!N)},className:N?"favs_text_on":"favs_text_off"},i.a.createElement("i",{className:"fas fa-star fav_icon"}))),i.a.createElement("section",null,i.a.createElement("header",{className:"header_container"},i.a.createElement("figure",null,i.a.createElement("img",{src:h.a,alt:"Logo for this giphy app"})),i.a.createElement(v,{onSubmit:function(e){e.preventDefault(),s(r)},onTextChange:function(e){l(e.target.value)},text:r}))),i.a.createElement("main",{className:"main"},i.a.createElement("article",null,i.a.createElement("section",{className:"horizantal_container"},null===f?i.a.createElement("p",null,"Loading..."):0===f.length?i.a.createElement("p",null,"There are no gifs here"):f.data.map(function(e,t){return i.a.createElement(b,{key:e.images.downsized_large.url,height:"320px",width:"350px",addGif:function(){return y(e.title,e.images.downsized_large.url,e.images.downsized_still.url)},removeGif:function(){return k(e.images.downsized_large.url)},title:e.title,gif_url:e.images.downsized_large.url,still_url:e.images.downsized_still.url})})))))};a(18);var E=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){e.exports=a.p+"static/media/giphmeLogo.018f336c.png"}},[[11,3,2]]]);
//# sourceMappingURL=main.7a49b106.chunk.js.map