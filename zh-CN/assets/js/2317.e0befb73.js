"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2317],{6747:function(e,t,n){n.d(t,{a:function(){return u}});var r=n(7294);function a(){return r.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var o=n(830);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i="Ctrl";var u=r.forwardRef((function(e,t){var n=e.translations,u=void 0===n?{}:n,s=l(e,["translations"]),m=u.buttonText,d=void 0===m?"Search":m,f=u.buttonAriaLabel,v=void 0===f?"Search":f,h=(0,r.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":i:null}),[]);return r.createElement("button",c({type:"button",className:"DocSearch DocSearch-Button","aria-label":v},s,{ref:t}),r.createElement("span",{className:"DocSearch-Button-Container"},r.createElement(o.W,null),r.createElement("span",{className:"DocSearch-Button-Placeholder"},d)),r.createElement("span",{className:"DocSearch-Button-Keys"},null!==h&&r.createElement(r.Fragment,null,r.createElement("span",{className:"DocSearch-Button-Key"},h===i?r.createElement(a,null):h),r.createElement("span",{className:"DocSearch-Button-Key"},"K"))))}))},830:function(e,t,n){n.d(t,{W:function(){return a}});var r=n(7294);function a(){return r.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},7052:function(e,t,n){n.d(t,{D:function(){return a}});var r=n(7294);function a(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,o=e.onInput,c=e.searchButtonRef;r.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),c&&c.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,o,c])}},8617:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a="iconExternalLink_3J9K",o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,c=void 0===o?13.5:o;return r.createElement("svg",{width:n,height:c,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},3264:function(e,t,n){n(7294)},4478:function(e,t,n){var r=n(7462),a=n(3366),o=n(7294),c=["width","height","className"];t.Z=function(e){var t=e.width,n=void 0===t?30:t,l=e.height,i=void 0===l?30:l,u=e.className,s=(0,a.Z)(e,c);return o.createElement("svg",(0,r.Z)({className:u,width:n,height:i,viewBox:"0 0 30 30","aria-hidden":"true"},s),o.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},4986:function(e,t,n){n.d(t,{Z:function(){return de}});var r=n(7294),a=n(6010),o=n(5977),c=n(4973),l=n(9306),i="skipToContent_1oUP";function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,r.useRef)(null),t=(0,o.k6)().action;return(0,l.SL)((function(n){var r=n.location;e.current&&!r.hash&&"POP"!==t&&u(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:i,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.createElement(c.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_3WsW",d="announcementBarClose_38nx",f="announcementBarContent_3EUC",v="announcementBarCloseable_3myR";var h=function(){var e,t=(0,l.nT)(),n=t.isClosed,o=t.close,i=(0,l.LU)().announcementBar;if(!i)return null;var u=i.content,s=i.backgroundColor,h=i.textColor,g=i.isCloseable;return!u||g&&n?null:r.createElement("div",{className:m,style:{backgroundColor:s,color:h},role:"banner"},r.createElement("div",{className:(0,a.Z)(f,(e={},e[v]=g,e)),dangerouslySetInnerHTML:{__html:u}}),g?r.createElement("button",{type:"button",className:(0,a.Z)(d,"clean-btn"),onClick:o,"aria-label":(0,c.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},g=n(7462),b=n(6979),p=n(2263),E={toggle:"toggle_71bT"},k=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(E.toggle,E.dark),style:n},t)},Z=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(E.toggle,E.light),style:n},t)},y=(0,r.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,c=e.disabled,l=e.onChange,i=(0,r.useState)(o),u=i[0],s=i[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":u,"react-toggle--focus":d,"react-toggle--disabled":c})},r.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked),r.createElement("div",{className:"react-toggle-thumb"})),r.createElement("input",{ref:v,checked:u,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:l,onClick:function(){return s(!u)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function w(e){var t=(0,l.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,o=t.lightIcon,c=t.lightIconStyle,i=(0,p.Z)().isClient;return r.createElement(y,(0,g.Z)({disabled:!i,icons:{checked:r.createElement(k,{icon:n,style:a}),unchecked:r.createElement(Z,{icon:o,style:c})}},e))}var C=n(5350),N=n(7898),_=function(e){var t=(0,o.TH)(),n=(0,r.useState)(e),a=n[0],c=n[1],i=(0,r.useRef)(!1),u=(0,r.useState)(0),s=u[0],m=u[1],d=(0,r.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,N.Z)((function(t,n){var r=t.scrollY,a=n.scrollY;if(e)if(r<s)c(!0);else{if(i.current)return i.current=!1,void c(!1);a&&0===r&&c(!0);var o=document.documentElement.scrollHeight-s,l=window.innerHeight;a&&r>=a?c(!1):r+l<o&&c(!0)}}),[s,i]),(0,l.SL)((function(t){e&&!t.location.hash&&c(!0)})),(0,r.useEffect)((function(){e&&t.hash&&(i.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:a}},L=n(1839),S=n(3783),D=n(3366),I=n(5525),T=n(532);function M(e){return e.mobile?null:r.createElement(b.Z,null)}var B=["type"],P={default:function(){return I.Z},localeDropdown:function(){return T.Z},search:function(){return M},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};function x(e){var t=e.type,n=(0,D.Z)(e,B),a=function(e){void 0===e&&(e="default");var t=P[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(t);return r.createElement(a,n)}var O=n(5537),A=n(4478),R="displayOnlyInLargeViewport_GrZ2",U="navbarHideable_2qcr",V="navbarHidden_3yey",W="right";var H=function(){var e,t=(0,l.LU)(),n=t.navbar,o=n.items,c=n.hideOnScroll,i=n.style,u=t.colorMode.disableSwitch,s=(0,r.useState)(!1),m=s[0],d=s[1],f=(0,C.Z)(),v=f.isDarkTheme,h=f.setLightTheme,p=f.setDarkTheme,E=_(c),k=E.navbarRef,Z=E.isNavbarVisible;(0,L.Z)(m);var y=(0,r.useCallback)((function(){d(!0)}),[d]),N=(0,r.useCallback)((function(){d(!1)}),[d]),D=(0,r.useCallback)((function(e){return e.target.checked?p():h()}),[h,p]),I=(0,S.Z)();(0,r.useEffect)((function(){I===S.D.desktop&&d(!1)}),[I]);var T=o.some((function(e){return"search"===e.type})),M=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:W)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:W)}))}}(o),B=M.leftItems,P=M.rightItems;return r.createElement("nav",{ref:k,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":m},e[U]=c,e[V]=c&&!Z,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},null!=o&&0!==o.length&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:y,onKeyDown:y},r.createElement(A.Z,null)),r.createElement(O.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),B.map((function(e,t){return r.createElement(x,(0,g.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},P.map((function(e,t){return r.createElement(x,(0,g.Z)({},e,{key:t}))})),!u&&r.createElement(w,{className:R,checked:v,onChange:D}),!T&&r.createElement(b.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:N}),r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(O.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:N}),!u&&m&&r.createElement(w,{checked:v,onChange:D})),r.createElement("div",{className:"navbar-sidebar__items"},r.createElement("div",{className:"menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(x,(0,g.Z)({mobile:!0},e,{onClick:N,key:t}))})))))))},j=n(546),K=n(412),q=(0,l.WA)("theme"),z="light",G="dark",F=function(e){return e===G?G:z},X=function(e){(0,l.WA)("theme").set(F(e))},J=function(){var e=(0,l.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return K.Z.canUseDOM?F(document.documentElement.getAttribute("data-theme")):F(e)}(t)),c=o[0],i=o[1],u=(0,r.useCallback)((function(){i(z),X(z)}),[]),s=(0,r.useCallback)((function(){i(G),X(G)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",F(c))}),[c]),(0,r.useEffect)((function(){if(!n)try{var e=q.get();null!==e&&i(F(e))}catch(t){console.error(t)}}),[i]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?G:z)}))}),[]),{isDarkTheme:c===G,setLightTheme:u,setDarkTheme:s}},Y=n(2924);var Q=function(e){var t=J(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(Y.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},$="docusaurus.tab.",ee=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,l.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,l._f)().forEach((function(t){if(t.startsWith($)){var n=t.substring($.length);e[n]=(0,l.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},te=(0,r.createContext)(void 0);var ne=function(e){var t=ee(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(te.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function re(e){var t=e.children;return r.createElement(Q,null,r.createElement(l.pl,null,r.createElement(ne,null,r.createElement(l.L5,null,t))))}var ae=n(9105),oe=n(4996);function ce(e){var t=e.locale,n=e.version,a=e.tag,o=t;return r.createElement(ae.Z,null,o&&r.createElement("meta",{name:"docsearch:language",content:o}),n&&r.createElement("meta",{name:"docsearch:version",content:n}),a&&r.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}var le=n(1217);function ie(){var e=(0,p.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,l.l5)();return r.createElement(ae.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function ue(e){var t=e.permalink,n=(0,p.Z)().siteConfig.url,a=function(){var e=(0,p.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,oe.Z)(t)}(),c=t?""+n+t:a;return r.createElement(ae.Z,null,r.createElement("meta",{property:"og:url",content:c}),r.createElement("link",{rel:"canonical",href:c}))}function se(e){var t=(0,p.Z)(),n=t.siteConfig,a=n.favicon,o=n.themeConfig,c=o.metadatas,i=o.image,u=t.i18n,s=u.currentLocale,m=u.localeConfigs,d=e.title,f=e.description,v=e.image,h=e.keywords,b=e.searchMetadatas,E=(0,oe.Z)(a),k=(0,l.pe)(d),Z=s,y=m[s].direction;return r.createElement(r.Fragment,null,r.createElement(ae.Z,null,r.createElement("html",{lang:Z,dir:y}),a&&r.createElement("link",{rel:"shortcut icon",href:E}),r.createElement("title",null,k),r.createElement("meta",{property:"og:title",content:k}),v||i&&r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.createElement(le.Z,{description:f,keywords:h,image:v}),r.createElement(ue,null),r.createElement(ie,null),r.createElement(ce,(0,g.Z)({tag:l.HX,locale:s},b)),r.createElement(ae.Z,null,c.map((function(e,t){return r.createElement("meta",(0,g.Z)({key:"metadata_"+t},e))}))))}var me=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var de=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,c=e.pageClassName;return me(),r.createElement(re,null,r.createElement(se,e),r.createElement(s,null),r.createElement(h,null),r.createElement(H,null),r.createElement("div",{className:(0,a.Z)(l.kM.wrapper.main,o,c)},t),!n&&r.createElement(j.Z,null))}},5537:function(e,t,n){var r=n(7462),a=n(3366),o=n(7294),c=n(6742),l=n(8465),i=n(4996),u=n(2263),s=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,u.Z)(),n=t.siteConfig,m=n.title,d=n.themeConfig.navbar,f=d.title,v=d.logo,h=void 0===v?{src:""}:v,g=t.isClient,b=e.imageClassName,p=e.titleClassName,E=(0,a.Z)(e,s),k=(0,i.Z)(h.href||"/"),Z={light:(0,i.Z)(h.src),dark:(0,i.Z)(h.srcDark||h.src)};return o.createElement(c.Z,(0,r.Z)({to:k},E,h.target&&{target:h.target}),h.src&&o.createElement(l.Z,{key:g,className:b,sources:Z,alt:h.alt||f||m}),null!=f&&o.createElement("b",{className:p},f))}},5525:function(e,t,n){var r=n(7462),a=n(3366),o=n(7294),c=n(6010),l=n(6742),i=n(4996),u=n(5977),s=n(9306),m=n(8617),d=n(3919),f=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],v=["items","position","className"],h=["className"],g=["items","className","position"],b=["className"],p=["mobile"],E="dropdown__link--active";function k(e){var t=e.activeBasePath,n=e.activeBaseRegex,c=e.to,u=e.href,s=e.label,v=e.activeClassName,h=void 0===v?"navbar__link--active":v,g=e.prependBaseUrlToHref,b=(0,a.Z)(e,f),p=(0,i.Z)(c),k=(0,i.Z)(t),Z=(0,i.Z)(u,{forcePrependBaseUrl:!0}),y=s&&u&&!(0,d.Z)(u),w=h===E;return o.createElement(l.Z,(0,r.Z)({},u?{href:g?Z:u}:Object.assign({isNavLink:!0,activeClassName:h,to:p},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(k)}}:null),b),y?o.createElement("span",null,s,o.createElement(m.Z,w&&{width:12,height:12})):s)}function Z(e){var t,n=e.items,l=e.position,i=e.className,u=(0,a.Z)(e,v),s=(0,o.useRef)(null),m=(0,o.useRef)(null),d=(0,o.useState)(!1),f=d[0],g=d[1];(0,o.useEffect)((function(){var e=function(e){s.current&&!s.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[s]);var b=function(e,t){return void 0===t&&(t=!1),(0,c.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?o.createElement("div",{ref:s,className:(0,c.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===l,"dropdown--right":"right"===l,"dropdown--show":f})},o.createElement(k,(0,r.Z)({className:b(i)},u,{onClick:u.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!f))}}),null!=(t=u.children)?t:u.label),o.createElement("ul",{ref:m,className:"dropdown__menu"},n.map((function(e,t){var c=e.className,l=(0,a.Z)(e,h);return o.createElement("li",{key:t},o.createElement(k,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var r=s.current.nextElementSibling;r&&r.focus()}},activeClassName:E,className:b(c,!0)},l)))})))):o.createElement(k,(0,r.Z)({className:b(i)},u))}function y(e){var t,n,l,i=e.items,m=e.className,d=(e.position,(0,a.Z)(e,g)),f=(0,o.useRef)(null),v=(0,u.TH)().pathname,h=(0,o.useState)((function(){var e;return null==(e=!(null!=i&&i.some((function(e){return(0,s.Mg)(e.to,v)}))))||e})),p=h[0],E=h[1],Z=function(e,t){return void 0===t&&(t=!1),(0,c.Z)("menu__link",{"menu__link--sublist":t},e)};if(!i)return o.createElement("li",{className:"menu__list-item"},o.createElement(k,(0,r.Z)({className:Z(m)},d)));var y=null!=(t=f.current)&&t.scrollHeight?(null==(n=f.current)?void 0:n.scrollHeight)+"px":void 0;return o.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":p})},o.createElement(k,(0,r.Z)({role:"button",className:Z(m,!0)},d,{onClick:function(e){e.preventDefault(),E((function(e){return!e}))}}),null!=(l=d.children)?l:d.label),o.createElement("ul",{className:"menu__list",ref:f,style:{height:p?void 0:y}},i.map((function(e,t){var n=e.className,c=(0,a.Z)(e,b);return o.createElement("li",{className:"menu__list-item",key:t},o.createElement(k,(0,r.Z)({activeClassName:"menu__link--active",className:Z(n)},c,{onClick:d.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,p),c=n?y:Z;return o.createElement(c,r)}},6400:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(3366),o=n(7294),c=n(5525),l=n(907),i=n(6010),u=n(9306),s=n(8780),m=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,n=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,m),g=(0,l.Iw)(v),b=g.activeVersion,p=g.activeDoc,E=(0,u.J)(v).preferredVersion,k=(0,l.yW)(v),Z=function(e,t){var n,r=(n=[]).concat.apply(n,e.map((function(e){return e.docs}))),a=r.find((function(e){return e.id===t}));if(!a){var o=r.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+o)}return a}((0,s.uniq)([b,E,k].filter(Boolean)),n);return o.createElement(c.Z,(0,r.Z)({exact:!0},h,{className:(0,i.Z)(h.className,(t={},t[d]=p&&p.sidebar===Z.sidebar,t)),label:null!=f?f:Z.id,to:Z.path}))}},9308:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(3366),o=n(7294),c=n(5525),l=n(907),i=n(9306),u=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],s=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,n,m=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,v=e.dropdownItemsBefore,h=e.dropdownItemsAfter,g=(0,a.Z)(e,u),b=(0,l.Iw)(d),p=(0,l.gB)(d),E=(0,l.yW)(d),k=(0,i.J)(d),Z=k.preferredVersion,y=k.savePreferredVersionName;var w=function(){var e=p.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){y(e.name)}}})),t=[].concat(v,e,h);if(!(t.length<=1))return t}(),C=null!=(t=null!=(n=b.activeVersion)?n:Z)?t:E,N=m&&w?"Versions":C.label,_=m&&w?void 0:s(C).path;return o.createElement(c.Z,(0,r.Z)({},g,{mobile:m,label:N,to:_,items:w,isActive:f?function(){return!1}:void 0}))}},7250:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),a=n(3366),o=n(7294),c=n(5525),l=n(907),i=n(9306),u=["label","to","docsPluginId"];function s(e){var t,n=e.label,s=e.to,m=e.docsPluginId,d=(0,a.Z)(e,u),f=(0,l.zu)(m),v=(0,i.J)(m).preferredVersion,h=(0,l.yW)(m),g=null!=(t=null!=f?f:v)?t:h,b=null!=n?n:g.label,p=null!=s?s:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return o.createElement(c.Z,(0,r.Z)({},d,{label:b,to:p}))}},2924:function(e,t,n){var r=n(7294).createContext(void 0);t.Z=r},8465:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(3366),o=n(7294),c=n(6010),l=n(2263),i=n(5350),u={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},s=["sources","className","alt"],m=function(e){var t=(0,l.Z)().isClient,n=(0,i.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,s),g=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,g.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:m[e],alt:v,className:(0,c.Z)(u.themedImage,u["themedImage--"+e],d)},h))})))}},1839:function(e,t,n){var r=n(7294);t.Z=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},7898:function(e,t,n){var r=n(7294),a=n(412),o=function(){return{scrollX:a.Z.canUseDOM?window.pageXOffset:0,scrollY:a.Z.canUseDOM?window.pageYOffset:0}};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(o()),a=function(){var t=o();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},5350:function(e,t,n){var r=n(7294),a=n(2924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},3783:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(7294),a=n(412),o={desktop:"desktop",mobile:"mobile"};t.Z=function(){var e=a.Z.canUseDOM;function t(){if(e)return window.innerWidth>996?o.desktop:o.mobile}var n=(0,r.useState)(t),c=n[0],l=n[1];return(0,r.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){l(t())}}),[]),c}},5613:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(907),a=n(9306),o=n(2263);function c(){var e=function(){var e=(0,o.Z)().i18n,t=(0,r._r)(),n=(0,r.WS)(),c=(0,a.Oh)(),l=[a.HX].concat(Object.keys(t).map((function(e){var r,o,l=(null==n||null==(r=n.activePlugin)?void 0:r.pluginId)===e?n.activeVersion:void 0,i=c[e],u=t[e].versions.find((function(e){return e.isLast})),s=null!=(o=null!=l?l:i)?o:u;return(0,a.os)(e,s.name)})));return{locale:e.currentLocale,tags:l}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}},6397:function(e,t,n){var r=n(5977),a=n(412),o=n(2263);t.Z=function(){var e=(0,r.k6)(),t=(0,r.TH)(),n=(0,o.Z)().siteConfig,c=(n=void 0===n?{}:n).baseUrl;return{searchValue:a.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return c+"search?q="+encodeURIComponent(e)}}}}}]);