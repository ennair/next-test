(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[476],{8764:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[[...route]]",function(){return i(4198)}])},7578:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(617).Z,n=i(9165).Z,o=i(5291).Z,a=i(17).Z,l=o(i(9953)),s=n(i(6608)),c=i(69),u=i(8506),A=i(294);i(1219);var d=n(i(8758));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,n,o,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===i&&a(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let m=l.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:n,widthInt:o,qualityInt:s,className:c,imgStyle:u,blurStyle:A,isLazy:d,fill:f,placeholder:g,loading:h,srcString:m,config:w,unoptimized:v,loader:b,onLoadRef:E,onLoadingCompleteRef:y,setBlurComplete:C,setShowAltText:_,onLoad:S,onError:x}=e,j=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=d?"lazy":h,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},j,i,{width:o,height:n,decoding:"async","data-nimg":f?"fill":"1",className:c,loading:h,style:r({},u,A),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&p(e,m,g,E,y,C,v))},[m,g,E,y,C,x,v,t]),onLoad:e=>{let t=e.currentTarget;p(t,m,g,E,y,C,v)},onError:e=>{_(!0),"blur"===g&&C(!0),x&&x(e)}})))}),w=l.forwardRef((e,t)=>{let i,n;var o,{src:p,sizes:w,unoptimized:v=!1,priority:b=!1,loading:E,className:y,quality:C,width:_,height:S,fill:x,style:j,onLoad:I,onLoadingComplete:z,placeholder:P="empty",blurDataURL:Q,layout:B,objectFit:R,objectPosition:D,lazyBoundary:k,lazyRoot:M}=e,O=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let N=l.useContext(A.ImageConfigContext),L=l.useMemo(()=>{let e=f||N||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:i})},[N]),T=O,F=T.loader||d.default;delete T.loader;let G="__next_img_default"in F;if(G){if("custom"===L.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=F;F=t=>{let{config:i}=t,r=a(t,["config"]);return e(r)}}if(B){"fill"===B&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[B];e&&(j=r({},j,e));let t={responsive:"100vw",fill:"100vw"}[B];t&&!w&&(w=t)}let U="",W=h(_),Z=h(S);if("object"==typeof(o=p)&&(g(o)||void 0!==o.src)){let e=g(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,n=e.blurHeight,Q=Q||e.blurDataURL,U=e.src,!x){if(W||Z){if(W&&!Z){let t=W/e.width;Z=Math.round(e.height*t)}else if(!W&&Z){let t=Z/e.height;W=Math.round(e.width*t)}}else W=e.width,Z=e.height}}let V=!b&&("lazy"===E||void 0===E);((p="string"==typeof p?p:U).startsWith("data:")||p.startsWith("blob:"))&&(v=!0,V=!1),L.unoptimized&&(v=!0),G&&p.endsWith(".svg")&&!L.dangerouslyAllowSVG&&(v=!0);let[q,J]=l.useState(!1),[K,X]=l.useState(!1),H=h(C),Y=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:D}:{},K?{}:{color:"transparent"},j),$="blur"===P&&Q&&!q?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:W,heightInt:Z,blurWidth:i,blurHeight:n,blurDataURL:Q}),'")')}:{},ee=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:o,sizes:a,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,r)=>"".concat(l({config:t,src:i,quality:o,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:l({config:t,src:i,quality:o,width:s[u]})}}({config:L,src:p,unoptimized:v,width:W,quality:H,sizes:w,loader:F}),et=p,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:T.crossOrigin},er=l.useRef(I);l.useEffect(()=>{er.current=I},[I]);let en=l.useRef(z);l.useEffect(()=>{en.current=z},[z]);let eo=r({isLazy:V,imgAttributes:ee,heightInt:Z,widthInt:W,qualityInt:H,className:y,imgStyle:Y,blurStyle:$,loading:E,config:L,fill:x,unoptimized:v,placeholder:P,loader:F,srcString:et,onLoadRef:er,onLoadingCompleteRef:en,setBlurComplete:J,setShowAltText:X},T);return l.default.createElement(l.default.Fragment,null,l.default.createElement(m,Object.assign({},eo,{ref:t})),b?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},69:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:o}=e,a=r||t,l=n||i,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&n?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},8758:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(r,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},1471:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var r=i(1874),n=function(e){return(0,r.jsx)("h1",{children:e.text})}},4198:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSP:function(){return s},default:function(){return c}});var r=i(1874);i(9953);var n=i(1471),o=i(1485),a=i.n(o),l={src:"/_next/static/media/minion.500b4955.jpg",height:252,width:252,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAApAH/xAAbEAEBAAIDAQAAAAAAAAAAAAADAgEEAAUy4f/aAAgBAQABPwBX2y77WGSaxUrq6x4icfef/8QAGREAAwADAAAAAAAAAAAAAAAAAQIhAEGR/9oACAECAQE/AAgQTd7n/8QAFREBAQAAAAAAAAAAAAAAAAAAEQD/2gAIAQMBAT8AW//Z",blurWidth:8,blurHeight:8},s=!0;function c(e){let{}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)(n.Z,{text:"This is another page"}),(0,r.jsx)(a(),{src:l,alt:"Picture alt"})]})}},1485:function(e,t,i){e.exports=i(7578)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8764)}),_N_E=e.O()}]);