(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[278],{2551:function(e,t,l){Promise.resolve().then(l.bind(l,2642))},2642:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return f}});var n=l(7437),a=l(2265),o=l(6691),r=l.n(o),s=l(2231),i=function(){return(i=Object.assign||function(e){for(var t,l=1,n=arguments.length;l<n;l++)for(var a in t=arguments[l])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c={},u="https://checkout.flutterwave.com/v3.js";function d(e){var t,l,o,r,s,d;let{data:f}=e,p={public_key:"FLWPUBK_TEST-ba4507c384e6eb1274b14c1d808c96e6-X",tx_ref:Date.now(),amount:f[5].value,currency:"USD",payment_options:"card,mobilemoney,ussd,nqr",customer:{email:f[1].value,phone_number:f[2].value,name:f[0].value},customizations:{title:f[3].value,description:f[4].value,logo:"pay.analogueshifts.com/analogueShifts.png"}},m=(s=(l=(t=(0,a.useState)({loaded:!1,error:!1}))[0],o=t[1],(0,a.useEffect)(function(){if(c.hasOwnProperty(u))o({loaded:!0,error:!1});else{c.src=u;var e=document.createElement("script");e.src=u,e.async=!0;var t=function(){o({loaded:!0,error:!1})},l=function(){delete c.src,o({loaded:!0,error:!0})};return e.addEventListener("load",t),e.addEventListener("complete",t),e.addEventListener("error",l),document.body.appendChild(e),function(){e.removeEventListener("load",t),e.removeEventListener("error",l)}}},[]),r=[l.loaded,l.error])[0],d=r[1],(0,a.useEffect)(function(){if(d)throw Error("Unable to load flutterwave payment modal")},[d]),function(e){var t,l,n=this,a=e.callback,o=e.onClose;if(d)throw Error("Unable to load flutterwave payment modal");if(s){var r=i(i({},p),{amount:null!==(t=p.amount)&&void 0!==t?t:0,callback:function(e){var t,l,o;return t=void 0,l=void 0,o=function(){var t;return function(e,t){var l,n,a,o,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(l)throw TypeError("Generator is already executing.");for(;r;)try{if(l=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,n=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(6===o[0]&&r.label<a[1]){r.label=a[1],a=o;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(o);break}a[2]&&r.ops.pop(),r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e],n=0}finally{l=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,function(l){switch(l.label){case 0:if("successful"!==e.status)return[3,2];return a(e),[4,fetch("https://cors-anywhere.herokuapp.com/https://kgelfdz7mf.execute-api.us-east-1.amazonaws.com/staging/sendevent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({publicKey:p.public_key,language:"Flutterwave-React-v3",version:"1.0.7",title:(null==p?void 0:p.payment_options.split(",").length)>1?"Initiate-Charge-Multiple":"Initiate-Charge-"+(null==p?void 0:p.payment_options),message:"15s"})})];case 1:return l.sent(),[3,4];case 2:return a(e),[4,fetch("https://cors-anywhere.herokuapp.com/https://kgelfdz7mf.execute-api.us-east-1.amazonaws.com/staging/sendevent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({publicKey:null!==(t=p.public_key)&&void 0!==t?t:"",language:"Flutterwave-React-v3",version:"1.0.7",title:(null==p?void 0:p.payment_options.split(",").length)>1?"Initiate-Charge-Multiple-error":"Initiate-Charge-"+(null==p?void 0:p.payment_options)+"-error",message:"15s"})})];case 3:l.sent(),l.label=4;case 4:return[2]}})},new(l||(l=Promise))(function(e,a){function r(e){try{i(o.next(e))}catch(e){a(e)}}function s(e){try{i(o.throw(e))}catch(e){a(e)}}function i(t){var n;t.done?e(t.value):((n=t.value)instanceof l?n:new l(function(e){e(n)})).then(r,s)}i((o=o.apply(n,t||[])).next())})},onclose:o,payment_options:null!==(l=null==p?void 0:p.payment_options)&&void 0!==l?l:"card, ussd, mobilemoney"});return window.FlutterwaveCheckout&&window.FlutterwaveCheckout(r)}});return(0,n.jsx)("button",{onClick:()=>{m({callback:e=>{console.log(e),document.getElementsByName("checkout").forEach(function(e){e.setAttribute("style","position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;"),e.setAttribute("id","flwpugpaidid"),e.setAttribute("src","https://checkout.flutterwave.com/?"),document.body.style.overflow=""})},onClose:()=>{}})},className:"w-full flex justify-center h-10 items-center rounded-md text-white text-sm bg-[#FFC800] hover:bg-[#FFC800]/80",children:"Continue to payment"})}function f(e){let{params:t}=e,[l,o]=(0,a.useState)([{id:1,label:"Full Name",type:"text",value:"",fullWidth:!0},{id:2,label:"Email",type:"email",value:"",fullWidth:!0},{id:3,label:"Phone",type:"number",value:0,fullWidth:!0},{id:4,label:"Title",type:"text",value:"Payment",fullWidth:!0},{id:5,label:"Description",type:"text",value:"Payment",fullWidth:!0},{id:6,label:"Amount",type:"number",value:0,fullWidth:!0}]),[i,c]=(0,a.useState)(!1),[u,f]=(0,a.useState)(""),p=(e,t)=>{o(l=>l.map(l=>l.id!==e?l:{...l,value:t}))},m=l[5].value;return(0,n.jsx)("main",{className:"w-full flex justify-center pb-10 pt-[100px]",children:(0,n.jsxs)("div",{className:"bg-yellow-50 p-2 md:p-9 rounded-md shadow-2xl w-[1100px] max-[1100px]:w-[90%]",children:[(0,n.jsx)("p",{className:"text-black font-extrabold text-3xl",children:"Payment details"}),(0,n.jsxs)("div",{className:"w-full max-[900px]:flex-col pt-10 flex gap-[60px] max-[900px]:gap-[35px]",children:[(0,n.jsxs)("div",{className:"w-[calc(50%-30px)] flex flex-wrap gap-x-4 gap-y-4 max-[900px]:w-full",children:[l.map(e=>(0,n.jsxs)("div",{className:"flex flex-col gap-1",style:{width:"".concat(e.fullWidth?"100%":"calc(50% - 8px)")},children:[(0,n.jsx)("p",{className:"text-sm text-black/80 font-semibold",children:e.label}),(0,n.jsx)("input",{type:e.type,value:e.value,className:"w-full border rounded px-2 py-2 outline-1 outline-[#FAE315] text-sm text-black/80 font-semibold",onChange:t=>p(e.id,t.target.value)})]},e.id)),(0,n.jsxs)("div",{className:"pt-3 w-full flex flex-col gap-4",children:[(0,n.jsxs)("div",{onClick:()=>c(e=>!e),className:"w-full cursor-pointer flex gap-2 items-center",children:[(0,n.jsx)("input",{checked:i,type:"checkbox",value:i,onChange:e=>c(e.target.checked)}),(0,n.jsx)("p",{className:"text-sm text-black/90 font-semibold",children:"I have promo code"})]}),i&&(0,n.jsx)("input",{type:"text",placeholder:"Enter Promo Code",value:u,className:"w-full border rounded px-2 py-2 outline-1 outline-[#FAE315] text-sm text-black/80 font-semibold",onChange:e=>f(e.target.value)})]}),(0,n.jsxs)("div",{className:"pt-3 w-full flex flex-col gap-4",children:[(0,n.jsxs)("div",{className:"w-full flex justify-between items-center",children:[(0,n.jsx)("p",{className:"text-sm text-black/80 font-semibold",children:"Subtotal"}),(0,n.jsxs)("p",{className:"text-sm text-black/90 font-bold",children:["$",m]})]}),(0,n.jsxs)("div",{className:"w-full flex justify-between items-center",children:[(0,n.jsx)("p",{className:"text-sm text-black/80 font-semibold",children:"Fee"}),(0,n.jsx)("p",{className:"text-sm text-black/90 font-bold",children:"$0"})]}),(0,n.jsx)("div",{className:"w-full border-t"}),(0,n.jsxs)("div",{className:"w-full flex justify-between items-center",children:[(0,n.jsx)("p",{className:"text-base text-black/80 font-semibold",children:"Total Amount"}),(0,n.jsxs)("p",{className:"text-base text-black/90 font-bold",children:["$",m]})]}),(0,n.jsx)(d,{data:l})]})]}),(0,n.jsxs)("div",{className:"w-[calc(50%-30px)] relative max-[900px]:w-full xl:max-[900px]:h-[700px] z-0",children:[(0,n.jsx)(r(),{src:s.default,alt:"AnalogueShift's Logo",className:"w-full h-[90%] max-[900px]:h-full object-cover rounded-lg z-0"}),(0,n.jsxs)("div",{className:"absolute bottom-[calc(10%+50px)] max-[900px]:bottom-[30px] left-[15px] w-[calc(100%-30px)] flex justify-between items-center",children:[(0,n.jsx)("p",{className:"text-black font-bold text-xl",children:"AnalogueShifts"}),(0,n.jsx)("button",{className:"flex justify-center h-9 items-center rounded-md text-[#FFC800] text-sm border hover:scale-110 duration-300 border-[#FFC800] px-10",children:"PAY"})]})]})]})]})})}},679:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{unstable_getImgProps:function(){return i},default:function(){return c}});let n=l(1024),a=l(7929),o=l(2637),r=l(413),s=n._(l(9950)),i=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,l]of Object.entries(t))void 0===l&&delete t[e];return{props:t}},c=r.Image},2231:function(e,t,l){"use strict";l.r(t),t.default={src:"/_next/static/media/pay.3200bbd6.png",height:1080,width:1080,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAuUlEQVR42gVAvWoCQRD+ZnYhl7ugooloIsQmqfIMsbO28lXtxcpSGyt/sFAUFPeEu/V2Z4T8pG44ikQmiBIAJi0rMCD3QkXVVwCEOQSBNbCE6uIkL1BLdX9+mS7S8cD99JgB6nfsb8/2P0M9bc7m7XYrRFGOgsKrgoLXrywb/XcT/wYYLh+oIsqHcMzO12TrsF19+Dy1WQIiUgQOrf36NmycdsfXWoetCBRqDB8O7u+72X1vLDe5Q/4EaP9acaiBBg0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},622:function(e,t,l){"use strict";var n=l(2265),a=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,l){var n,i={},c=null,u=null;for(n in void 0!==l&&(c=""+l),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!s.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:u,props:i,_owner:r.current}}t.jsx=i,t.jsxs=i},7437:function(e,t,l){"use strict";e.exports=l(622)},6691:function(e,t,l){e.exports=l(679)}},function(e){e.O(0,[413,971,472,744],function(){return e(e.s=2551)}),_N_E=e.O()}]);