(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1QcF":function(e,n,i){},H1WH:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,t=i("q1tI"),o=(r=t)&&"object"==typeof r&&"default"in r?r.default:r,a=i("peHP"),s=new a,u=s.getBrowser(),l=s.getCPU(),c=s.getDevice(),d=s.getEngine(),m=s.getOS(),b=s.getUA(),w=function(e){return s.setUA(e)},f=function(e){if(e){var n=new a(e);return{UA:n,browser:n.getBrowser(),cpu:n.getCPU(),device:n.getDevice(),engine:n.getEngine(),os:n.getOS(),ua:n.getUA(),setUserAgent:function(e){return n.setUA(e)}}}console.error("No userAgent string was provided")},v=Object.freeze({ClientUAInstance:s,browser:u,cpu:l,device:c,engine:d,os:m,ua:b,setUa:w,parseUserAgent:f});function p(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function E(){return(E=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,n){return(O=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function S(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==i)return;var r,t,o=[],a=!0,s=!1;try{for(i=i.call(e);!(a=(r=i.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(u){s=!0,t=u}finally{try{a||null==i.return||i.return()}finally{if(s)throw t}}return o}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return A(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return A(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=e[i];return r}var P="mobile",j="tablet",F="smarttv",M="console",V="wearable",N="embedded",W=void 0,I={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},T={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},_={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},L=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||n},U=function(){return!("undefined"==typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},B=function(e){var n=U();return n&&n.platform&&(-1!==n.platform.indexOf(e)||"MacIntel"===n.platform&&n.maxTouchPoints>1&&!window.MSStream)},z=function(e,n,i,r){return function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?p(Object(i),!0).forEach((function(n){y(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}({},e,{vendor:L(n.vendor),model:L(n.model),os:L(i.name),osVersion:L(i.version),ua:L(r)})};var q=function(e){return e.type===P},D=function(e){return e.type===j},R=function(e){var n=e.type;return n===P||n===j},H=function(e){return e.type===F},G=function(e){return e.type===W},Y=function(e){return e.type===V},X=function(e){return e.type===M},Z=function(e){return e.type===N},$=function(e){var n=e.vendor;return L(n)},J=function(e){var n=e.model;return L(n)},Q=function(e){var n=e.type;return L(n,"browser")},K=function(e){return e.name===T.Android},ee=function(e){return e.name===T.Windows},ne=function(e){return e.name===T.MAC_OS},ie=function(e){return e.name===T.WindowsPhone},re=function(e){return e.name===T.IOS},te=function(e){var n=e.version;return L(n)},oe=function(e){var n=e.name;return L(n)},ae=function(e){return e.name===I.Chrome},se=function(e){return e.name===I.Firefox},ue=function(e){return e.name===I.Chromium},le=function(e){return e.name===I.Edge},ce=function(e){return e.name===I.Yandex},de=function(e){var n=e.name;return n===I.Safari||n===I.MobileSafari},me=function(e){return e.name===I.MobileSafari},be=function(e){return e.name===I.Opera},we=function(e){var n=e.name;return n===I.InternetExplorer||n===I.Ie},fe=function(e){return e.name===I.MIUI},ve=function(e){return e.name===I.SamsungBrowser},pe=function(e){var n=e.version;return L(n)},he=function(e){var n=e.major;return L(n)},ge=function(e){var n=e.name;return L(n)},ye=function(e){var n=e.name;return L(n)},Ee=function(e){var n=e.version;return L(n)},xe=function(){var e=U(),n=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"==typeof n&&/electron/.test(n)},Oe=function(e){return"string"==typeof e&&-1!==e.indexOf("Edg/")},Se=function(){var e=U();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream},ke=function(){return B("iPad")},Ce=function(){return B("iPhone")},Ae=function(){return B("iPod")},Pe=function(e){return L(e)};function je(e){var n=e||v,i=n.device,r=n.browser,t=n.os,o=n.engine,a=n.ua;return{isSmartTV:H(i),isConsole:X(i),isWearable:Y(i),isEmbedded:Z(i),isMobileSafari:me(r)||ke(),isChromium:ue(r),isMobile:R(i)||ke(),isMobileOnly:q(i),isTablet:D(i)||ke(),isBrowser:G(i),isDesktop:G(i),isAndroid:K(t),isWinPhone:ie(t),isIOS:re(t)||ke(),isChrome:ae(r),isFirefox:se(r),isSafari:de(r),isOpera:be(r),isIE:we(r),osVersion:te(t),osName:oe(t),fullBrowserVersion:pe(r),browserVersion:he(r),browserName:ge(r),mobileVendor:$(i),mobileModel:J(i),engineName:ye(o),engineVersion:Ee(o),getUA:Pe(a),isEdge:le(r)||Oe(a),isYandex:ce(r),deviceType:Q(i),isIOS13:Se(),isIPad13:ke(),isIPhone13:Ce(),isIPod13:Ae(),isElectron:xe(),isEdgeChromium:Oe(a),isLegacyEdge:le(r)&&!Oe(a),isWindows:ee(t),isMacOs:ne(t),isMIUI:fe(r),isSamsungBrowser:ve(r)}}var Fe=H(c),Me=X(c),Ve=Y(c),Ne=Z(c),We=me(u)||ke(),Ie=ue(u),Te=R(c)||ke(),_e=q(c),Le=D(c)||ke(),Ue=G(c),Be=G(c),ze=K(m),qe=ie(m),De=re(m)||ke(),Re=ae(u),He=se(u),Ge=de(u),Ye=be(u),Xe=we(u),Ze=te(m),$e=oe(m),Je=pe(u),Qe=he(u),Ke=ge(u),en=$(c),nn=J(c),rn=ye(d),tn=Ee(d),on=Pe(b),an=le(u)||Oe(b),sn=ce(u),un=Q(c),ln=Se(),cn=ke(),dn=Ce(),mn=Ae(),bn=xe(),wn=Oe(b),fn=le(u)&&!Oe(b),vn=ee(m),pn=ne(m),hn=fe(u),gn=ve(u);function yn(e){var n=e||window.navigator.userAgent;return f(n)}n.AndroidView=function(e){var n=e.renderWithFragment,i=e.children,r=S(e,["renderWithFragment","children"]);return ze?n?o.createElement(t.Fragment,null,i):o.createElement("div",r,i):null},n.BrowserTypes=I,n.BrowserView=function(e){var n=e.renderWithFragment,i=e.children,r=S(e,["renderWithFragment","children"]);return Ue?n?o.createElement(t.Fragment,null,i):o.createElement("div",r,i):null},n.ConsoleView=function(e){var n=e.renderWithFragment,i=e.children,r=S(e,["renderWithFragment","children"]);return Me?n?o.createElement(t.Fragment,null,i):o.createElement("div",r,i):null},n.CustomView=function(e){var n=e.renderWithFragment,i=e.children,r=(e.viewClassName,e.style,e.condition),a=S(e,["renderWithFragment","children","viewClassName","style","condition"]);return r?n?o.createElement(t.Fragment,null,i):o.createElement("div",a,i):null},n.IEView=function(e){var n=e.renderWithFragment,i=e.children,r=S(e,["renderWithFragment","children"]);return Xe?n?o.createElement(t.Fragment,null,i):o.createElement("div",r,i):null},n.IOSView=function(e){var n=e.renderWithFragment,i=e.children,r=S(e,["renderWithFragment","children"]);return De?n?o.createElement(t.Fragment,null,i):o.createElement("div",r,i):null},n.MobileOnlyView=function(e){var n=e.renderWithFragment,i=e.children,r=(e.viewClassName,e.style,S(e,["renderWithFragment","children","viewClassName","style"]));return _e?n?o.createElement(t.Fragment,null,i):o.createElement("div",r,i):null},n.MobileView=function(e){var n=e.renderWithFragment,i=e.children,r=S(e,["renderWithFragment","children"]);return Te?n?o.createElement(t.Fragment,null,i):o.createElement("div",r,i):null},n.OsTypes=T,n.SmartTVView=function(e){var n=e.renderWithFragment,i=e.children,r=S(e,["renderWithFragment","children"]);return Fe?n?o.createElement(t.Fragment,null,i):o.createElement("div",r,i):null},n.TabletView=function(e){var n=e.renderWithFragment,i=e.children,r=S(e,["renderWithFragment","children"]);return Le?n?o.createElement(t.Fragment,null,i):o.createElement("div",r,i):null},n.WearableView=function(e){var n=e.renderWithFragment,i=e.children,r=S(e,["renderWithFragment","children"]);return Ve?n?o.createElement(t.Fragment,null,i):o.createElement("div",r,i):null},n.WinPhoneView=function(e){var n=e.renderWithFragment,i=e.children,r=S(e,["renderWithFragment","children"]);return qe?n?o.createElement(t.Fragment,null,i):o.createElement("div",r,i):null},n.browserName=Ke,n.browserVersion=Qe,n.deviceDetect=function(e){var n=e?f(e):v,i=n.device,r=n.browser,t=n.engine,o=n.os,a=n.ua,s=function(e){switch(e){case P:return{isMobile:!0};case j:return{isTablet:!0};case F:return{isSmartTV:!0};case M:return{isConsole:!0};case V:return{isWearable:!0};case W:return{isBrowser:!0};case N:return{isEmbedded:!0};default:return _}}(i.type),u=s.isBrowser,l=s.isMobile,c=s.isTablet,d=s.isSmartTV,m=s.isConsole,b=s.isWearable,w=s.isEmbedded;return u?function(e,n,i,r,t){return{isBrowser:e,browserMajorVersion:L(n.major),browserFullVersion:L(n.version),browserName:L(n.name),engineName:L(i.name),engineVersion:L(i.version),osName:L(r.name),osVersion:L(r.version),userAgent:L(t)}}(u,r,t,o,a):d?function(e,n,i,r){return{isSmartTV:e,engineName:L(n.name),engineVersion:L(n.version),osName:L(i.name),osVersion:L(i.version),userAgent:L(r)}}(d,t,o,a):m?function(e,n,i,r){return{isConsole:e,engineName:L(n.name),engineVersion:L(n.version),osName:L(i.name),osVersion:L(i.version),userAgent:L(r)}}(m,t,o,a):l||c?z(s,i,o,a):b?function(e,n,i,r){return{isWearable:e,engineName:L(n.name),engineVersion:L(n.version),osName:L(i.name),osVersion:L(i.version),userAgent:L(r)}}(b,t,o,a):w?function(e,n,i,r,t){return{isEmbedded:e,vendor:L(n.vendor),model:L(n.model),engineName:L(i.name),engineVersion:L(i.version),osName:L(r.name),osVersion:L(r.version),userAgent:L(t)}}(w,i,t,o,a):void 0},n.deviceType=un,n.engineName=rn,n.engineVersion=tn,n.fullBrowserVersion=Je,n.getSelectorsByUserAgent=function(e){if(e&&"string"==typeof e){var n=f(e);return je({device:n.device,browser:n.browser,os:n.os,engine:n.engine,ua:n.ua})}console.error("No valid user agent string was provided")},n.getUA=on,n.isAndroid=ze,n.isBrowser=Ue,n.isChrome=Re,n.isChromium=Ie,n.isConsole=Me,n.isDesktop=Be,n.isEdge=an,n.isEdgeChromium=wn,n.isElectron=bn,n.isEmbedded=Ne,n.isFirefox=He,n.isIE=Xe,n.isIOS=De,n.isIOS13=ln,n.isIPad13=cn,n.isIPhone13=dn,n.isIPod13=mn,n.isLegacyEdge=fn,n.isMIUI=hn,n.isMacOs=pn,n.isMobile=Te,n.isMobileOnly=_e,n.isMobileSafari=We,n.isOpera=Ye,n.isSafari=Ge,n.isSamsungBrowser=gn,n.isSmartTV=Fe,n.isTablet=Le,n.isWearable=Ve,n.isWinPhone=qe,n.isWindows=vn,n.isYandex=sn,n.mobileModel=nn,n.mobileVendor=en,n.osName=$e,n.osVersion=Ze,n.parseUserAgent=f,n.setUserAgent=function(e){return w(e)},n.useDeviceData=yn,n.useDeviceSelectors=function(e){var n=yn(e||window.navigator.userAgent);return[je(n),n]},n.useMobileOrientation=function(){var e=C(t.useState((function(){var e=window.innerWidth>window.innerHeight?90:0;return{isPortrait:0===e,isLandscape:90===e,orientation:0===e?"portrait":"landscape"}})),2),n=e[0],i=e[1],r=t.useCallback((function(){var e=window.innerWidth>window.innerHeight?90:0,r={isPortrait:0===e,isLandscape:90===e,orientation:0===e?"portrait":"landscape"};n.orientation!==r.orientation&&i(r)}),[n.orientation]);return t.useEffect((function(){return void 0!==("undefined"==typeof window?"undefined":h(window))&&Te&&(r(),window.addEventListener("load",r,!1),window.addEventListener("resize",r,!1)),function(){window.removeEventListener("resize",r,!1),window.removeEventListener("load",r,!1)}}),[r]),n},n.withOrientationChange=function(e){return function(n){function i(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),(n=function(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}(this,x(i).call(this,e))).isEventListenerAdded=!1,n.handleOrientationChange=n.handleOrientationChange.bind(k(n)),n.onOrientationChange=n.onOrientationChange.bind(k(n)),n.onPageLoad=n.onPageLoad.bind(k(n)),n.state={isLandscape:!1,isPortrait:!1},n}var r,t,a;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&O(e,n)}(i,n),r=i,(t=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"==typeof window?"undefined":h(window))&&Te&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return o.createElement(e,E({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}])&&g(r.prototype,t),a&&g(r,a),i}(o.Component)}},PDX0:function(e,n){(function(n){e.exports=n}).call(this,{})},TsVF:function(e,n,i){},VYsE:function(e,n,i){},Y64x:function(e,n,i){},"n1n/":function(e,n,i){},peHP:function(e,n,i){var r;!function(t,o){"use strict";var a="model",s="name",u="type",l="vendor",c="version",d="mobile",m="tablet",b="smarttv",w=function(e){for(var n={},i=0;i<e.length;i++)n[e[i].toUpperCase()]=e[i];return n},f=function(e,n){return"string"==typeof e&&-1!==v(n).indexOf(v(e))},v=function(e){return e.toLowerCase()},p=function(e,n){if("string"==typeof e)return e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,""),void 0===n?e:e.substring(0,255)},h=function(e,n){for(var i,r,t,o,a,s,u=0;u<n.length&&!a;){var l=n[u],c=n[u+1];for(i=r=0;i<l.length&&!a;)if(a=l[i++].exec(e))for(t=0;t<c.length;t++)s=a[++r],"object"==typeof(o=c[t])&&o.length>0?2===o.length?"function"==typeof o[1]?this[o[0]]=o[1].call(this,s):this[o[0]]=o[1]:3===o.length?"function"!=typeof o[1]||o[1].exec&&o[1].test?this[o[0]]=s?s.replace(o[1],o[2]):void 0:this[o[0]]=s?o[1].call(this,s,o[2]):void 0:4===o.length&&(this[o[0]]=s?o[3].call(this,s.replace(o[1],o[2])):void 0):this[o]=s||void 0;u+=2}},g=function(e,n){for(var i in n)if("object"==typeof n[i]&&n[i].length>0){for(var r=0;r<n[i].length;r++)if(f(n[i][r],e))return"?"===i?void 0:i}else if(f(n[i],e))return"?"===i?void 0:i;return e},y={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},E={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[c,[s,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[c,[s,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[s,c],[/opios[\/ ]+([\w\.]+)/i],[c,[s,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[c,[s,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[s,c],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[c,[s,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[c,[s,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[c,[s,"WeChat"]],[/konqueror\/([\w\.]+)/i],[c,[s,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[c,[s,"IE"]],[/yabrowser\/([\w\.]+)/i],[c,[s,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[s,/(.+)/,"$1 Secure Browser"],c],[/\bfocus\/([\w\.]+)/i],[c,[s,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[c,[s,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[c,[s,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[c,[s,"Dolphin"]],[/coast\/([\w\.]+)/i],[c,[s,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[c,[s,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[c,[s,"Firefox"]],[/\bqihu|(qi?ho?o?|360)browser/i],[[s,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[s,/(.+)/,"$1 Browser"],c],[/(comodo_dragon)\/([\w\.]+)/i],[[s,/_/g," "],c],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[s,c],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[s],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[s,"Facebook"],c],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[s,c],[/\bgsa\/([\w\.]+) .*safari\//i],[c,[s,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[c,[s,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[s,"Chrome WebView"],c],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[c,[s,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[s,c],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[c,[s,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[c,s],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[s,[c,g,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[s,c],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[s,"Netscape"],c],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[c,[s,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[s,c]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",v]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[["architecture","arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[["architecture","armhf"]],[/windows (ce|mobile); ppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[["architecture",/ower/,"",v]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[["architecture",v]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[a,[l,"Samsung"],[u,m]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[a,[l,"Samsung"],[u,d]],[/\((ip(?:hone|od)[\w ]*);/i],[a,[l,"Apple"],[u,d]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[a,[l,"Apple"],[u,m]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[a,[l,"Huawei"],[u,m]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[a,[l,"Huawei"],[u,d]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[a,/_/g," "],[l,"Xiaomi"],[u,d]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[a,/_/g," "],[l,"Xiaomi"],[u,m]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[a,[l,"OPPO"],[u,d]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[a,[l,"Vivo"],[u,d]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[a,[l,"Realme"],[u,d]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[a,[l,"Motorola"],[u,d]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[a,[l,"Motorola"],[u,m]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[a,[l,"LG"],[u,m]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[a,[l,"LG"],[u,d]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[a,[l,"Lenovo"],[u,m]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[a,/_/g," "],[l,"Nokia"],[u,d]],[/(pixel c)\b/i],[a,[l,"Google"],[u,m]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[a,[l,"Google"],[u,d]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[a,[l,"Sony"],[u,d]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[a,"Xperia Tablet"],[l,"Sony"],[u,m]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[a,[l,"OnePlus"],[u,d]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[a,[l,"Amazon"],[u,m]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[a,/(.+)/g,"Fire Phone $1"],[l,"Amazon"],[u,d]],[/(playbook);[-\w\),; ]+(rim)/i],[a,l,[u,m]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[a,[l,"BlackBerry"],[u,d]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[a,[l,"ASUS"],[u,m]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[a,[l,"ASUS"],[u,d]],[/(nexus 9)/i],[a,[l,"HTC"],[u,m]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[l,[a,/_/g," "],[u,d]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[a,[l,"Acer"],[u,m]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[a,[l,"Meizu"],[u,d]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[a,[l,"Sharp"],[u,d]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[l,a,[u,d]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[l,a,[u,m]],[/(surface duo)/i],[a,[l,"Microsoft"],[u,m]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[a,[l,"Fairphone"],[u,d]],[/(u304aa)/i],[a,[l,"AT&T"],[u,d]],[/\bsie-(\w*)/i],[a,[l,"Siemens"],[u,d]],[/\b(rct\w+) b/i],[a,[l,"RCA"],[u,m]],[/\b(venue[\d ]{2,7}) b/i],[a,[l,"Dell"],[u,m]],[/\b(q(?:mv|ta)\w+) b/i],[a,[l,"Verizon"],[u,m]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[a,[l,"Barnes & Noble"],[u,m]],[/\b(tm\d{3}\w+) b/i],[a,[l,"NuVision"],[u,m]],[/\b(k88) b/i],[a,[l,"ZTE"],[u,m]],[/\b(nx\d{3}j) b/i],[a,[l,"ZTE"],[u,d]],[/\b(gen\d{3}) b.+49h/i],[a,[l,"Swiss"],[u,d]],[/\b(zur\d{3}) b/i],[a,[l,"Swiss"],[u,m]],[/\b((zeki)?tb.*\b) b/i],[a,[l,"Zeki"],[u,m]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[l,"Dragon Touch"],a,[u,m]],[/\b(ns-?\w{0,9}) b/i],[a,[l,"Insignia"],[u,m]],[/\b((nxa|next)-?\w{0,9}) b/i],[a,[l,"NextBook"],[u,m]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[l,"Voice"],a,[u,d]],[/\b(lvtel\-)?(v1[12]) b/i],[[l,"LvTel"],a,[u,d]],[/\b(ph-1) /i],[a,[l,"Essential"],[u,d]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[a,[l,"Envizen"],[u,m]],[/\b(trio[-\w\. ]+) b/i],[a,[l,"MachSpeed"],[u,m]],[/\btu_(1491) b/i],[a,[l,"Rotor"],[u,m]],[/(shield[\w ]+) b/i],[a,[l,"Nvidia"],[u,m]],[/(sprint) (\w+)/i],[l,a,[u,d]],[/(kin\.[onetw]{3})/i],[[a,/\./g," "],[l,"Microsoft"],[u,d]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[a,[l,"Zebra"],[u,m]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[a,[l,"Zebra"],[u,d]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[l,a,[u,"console"]],[/droid.+; (shield) bui/i],[a,[l,"Nvidia"],[u,"console"]],[/(playstation [345portablevi]+)/i],[a,[l,"Sony"],[u,"console"]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[a,[l,"Microsoft"],[u,"console"]],[/smart-tv.+(samsung)/i],[l,[u,b]],[/hbbtv.+maple;(\d+)/i],[[a,/^/,"SmartTV"],[l,"Samsung"],[u,b]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[l,"LG"],[u,b]],[/(apple) ?tv/i],[l,[a,"Apple TV"],[u,b]],[/crkey/i],[[a,"Chromecast"],[l,"Google"],[u,b]],[/droid.+aft(\w)( bui|\))/i],[a,[l,"Amazon"],[u,b]],[/\(dtv[\);].+(aquos)/i],[a,[l,"Sharp"],[u,b]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[l,p],[a,p],[u,b]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[u,b]],[/((pebble))app/i],[l,a,[u,"wearable"]],[/droid.+; (glass) \d/i],[a,[l,"Google"],[u,"wearable"]],[/droid.+; (wt63?0{2,3})\)/i],[a,[l,"Zebra"],[u,"wearable"]],[/(quest( 2)?)/i],[a,[l,"Facebook"],[u,"wearable"]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[l,[u,"embedded"]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[a,[u,d]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[a,[u,m]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[u,m]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[u,d]],[/(android[-\w\. ]{0,9});.+buil/i],[a,[l,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[c,[s,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[c,[s,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[s,c],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[c,s]],os:[[/microsoft (windows) (vista|xp)/i],[s,c],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[s,[c,g,y]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[s,"Windows"],[c,g,y]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[c,/_/g,"."],[s,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[s,"Mac OS"],[c,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[c,s],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[s,c],[/\(bb(10);/i],[c,[s,"BlackBerry"]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[c,[s,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[c,[s,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[c,[s,"webOS"]],[/crkey\/([\d\.]+)/i],[c,[s,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[s,"Chromium OS"],c],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[s,c],[/(sunos) ?([\w\.\d]*)/i],[[s,"Solaris"],c],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[s,c]]},x=function e(n,i){if("object"==typeof n&&(i=n,n=void 0),!(this instanceof e))return new e(n,i).getResult();var r=n||(void 0!==t&&t.navigator&&t.navigator.userAgent?t.navigator.userAgent:""),o=i?function(e,n){var i={};for(var r in e)n[r]&&n[r].length%2==0?i[r]=n[r].concat(e[r]):i[r]=e[r];return i}(E,i):E;return this.getBrowser=function(){var e,n={};return n[s]=void 0,n[c]=void 0,h.call(n,r,o.browser),n.major="string"==typeof(e=n.version)?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0,n},this.getCPU=function(){var e={architecture:void 0};return h.call(e,r,o.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return h.call(e,r,o.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return h.call(e,r,o.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return h.call(e,r,o.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r="string"==typeof e&&e.length>255?p(e,255):e,this},this.setUA(r),this};x.VERSION="1.0.2",x.BROWSER=w([s,c,"major"]),x.CPU=w(["architecture"]),x.DEVICE=w([a,l,u,"console",d,b,m,"wearable","embedded"]),x.ENGINE=x.OS=w([s,c]),void 0!==n?(void 0!==e&&e.exports&&(n=e.exports=x),n.UAParser=x):i("PDX0")?void 0===(r=function(){return x}.call(n,i,n,e))||(e.exports=r):void 0!==t&&(t.UAParser=x);var O=void 0!==t&&(t.jQuery||t.Zepto);if(O&&!O.ua){var S=new x;O.ua=S.getResult(),O.ua.get=function(){return S.getUA()},O.ua.set=function(e){S.setUA(e);var n=S.getResult();for(var i in n)O.ua[i]=n[i]}}}("object"==typeof window?window:this)},uhgt:function(e,n,i){},vg9a:function(e,n,i){},yZlL:function(e,n,i){"use strict";i.r(n);var r=i("q1tI"),t=i.n(r),o=(i("TsVF"),function(){return t.a.createElement("hr",{className:"custom-hr"})}),a=i("hpys"),s=i("CC2r"),u=function(e){var n=e.title;return t.a.createElement("h1",null,n)},l=(i("1QcF"),function(e){var n=e.date;return t.a.createElement("p",{className:"post-date"},n)}),c=function(e){var n=e.html;return t.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})},d=i("lbRd"),m=i("Wbzz"),b=(i("n1n/"),function(e){var n=e.pageContext,i=n.previous,r=n.next;return t.a.createElement("ul",{className:"navigator"},t.a.createElement("li",null,i&&t.a.createElement(m.Link,{to:i.fields.slug,rel:"prev"},"← ",i.frontmatter.title)),t.a.createElement("li",null,r&&t.a.createElement(m.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →")))}),w=(i("E9XD"),i("ToJy"),function(e,n){var i=Object(r.useRef)({});Object(r.useEffect)((function(){i.current={};var n=new IntersectionObserver((function(n){i.current=n.reduce((function(e,n){return n.target.id&&(e[n.target.id]=n),e}),i.current);var t=[];Object.keys(i.current).forEach((function(e){var n=i.current[e];n.isIntersecting&&t.push(n)}));var o=function(e){return r.findIndex((function(n){return n.id===e}))};if(1===t.length)t[0].target.textContent&&e(t[0].target.textContent);else if(t.length>1){var a=t.sort((function(e,n){return o(e.target.id)-o(n.target.id)}));a[0].target.textContent&&e(a[0].target.textContent)}}),{rootMargin:"-0px 0px -45% 0px"}),r=Array.from(document.querySelectorAll("h1, h2, h3, h4"));return r.forEach((function(e){return n.observe(e)})),function(){return n.disconnect()}}),[n])}),f=(i("Y64x"),function(e){var n=e.content,i=Object(r.useState)(""),o=i[0],a=i[1],s=Object(r.useRef)({});return w(a,n),Object(r.useEffect)((function(){s.current.querySelectorAll("a").forEach((function(e){var n;(null===(n=e.textContent)||void 0===n?void 0:n.toLowerCase())==o.toLowerCase()?e.classList.add("active"):e.classList.remove("active")}))}),[o]),t.a.createElement("div",{className:"toc-wrap"},t.a.createElement("div",{className:"toc-content",ref:s,dangerouslySetInnerHTML:{__html:n}}))}),v=i("Mxwr"),p=i("EXIE"),h=(i("uhgt"),i("VYsE"),i("vg9a"),i("H1WH"));n.default=function(e){var n=e.data,i=e.pageContext,m=e.location;Object(r.useEffect)((function(){return p.c(),function(){return p.a()}}),[]);var w=n.markdownRemark,g=n.site.siteMetadata,y=g.title,E=g.comment,x=g.siteUrl,O=g.author,S=(g.sponsor,E.disqusShortName,E.utterances,w.frontmatter),k=S.title,C=S.date;return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"post-content-wrap"},t.a.createElement("div",{className:"post-content"},t.a.createElement(a.a,{location:m,title:y,siteUrl:x,author:O},t.a.createElement("div",{className:"home-header-wrap"},t.a.createElement(s.a,{title:k,description:w.excerpt}),t.a.createElement(u,{title:k}),t.a.createElement(v.a,null)),t.a.createElement(l,{date:C}),t.a.createElement(c,{html:w.html}),t.a.createElement(o,null),t.a.createElement(d.a,null),t.a.createElement(b,{pageContext:i}))),!h.isMobile&&w.tableOfContents&&t.a.createElement(f,{content:w.tableOfContents})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-2ae42b68c40d5b34dc62.js.map