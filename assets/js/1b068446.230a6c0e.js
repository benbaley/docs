"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9706],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},614:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"Solidity_Inner_Contract",title:"Call Inner Contract",sidebar_label:"Call Inner Contract"},c=void 0,s={unversionedId:"Solidity_Inner_Contract",id:"Solidity_Inner_Contract",isDocsHomePage:!1,title:"Call Inner Contract",description:"Introduction",source:"@site/../docs/solidity\u5408\u7ea6\u8c03\u7528\u5185\u7f6e\u5408\u7ea6.md",sourceDirName:".",slug:"/Solidity_Inner_Contract",permalink:"/docs/Solidity_Inner_Contract",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/solidity\u5408\u7ea6\u8c03\u7528\u5185\u7f6e\u5408\u7ea6.md",version:"current",frontMatter:{id:"Solidity_Inner_Contract",title:"Call Inner Contract",sidebar_label:"Call Inner Contract"},sidebar:"docs",previous:{title:"Contract security",permalink:"/docs/Solidity_Contract_Security_Dev_Guide"},next:{title:"Getting started",permalink:"/docs/Wasm_Dev_Manual"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Code example",id:"code-example",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Platon has a built-in ",(0,o.kt)("a",{parentName:"p",href:"/docs/PlatON_system_contract"},"system contract"),",Support for SOLIDITY cross-contract calls, can be called by the following method:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<address>.call(...) returns (bool)"),":\n\xa0  Low-level functions ",(0,o.kt)("inlineCode",{parentName:"p"}," Call"),", return ",(0,o.kt)("inlineCode",{parentName:"p"}," false"),", send all available GAS, adjustable."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<address>.callcode(...) returns (bool)"),"\uff1a\n\xa0 Low-level functions ",(0,o.kt)("inlineCode",{parentName:"p"}," Callcode"),", return ",(0,o.kt)("inlineCode",{parentName:"p"}," false"),", send all available GAS, adjustable."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<address>.delegatecall(...) returns (bool)"),":\n\xa0 Emit a low-level function ",(0,o.kt)("inlineCode",{parentName:"p"}," delegateCall"),", return ",(0,o.kt)("inlineCode",{parentName:"p"}," false"),", send all available GAS, adjustable."),(0,o.kt)("p",null,"Or call the Call operating code by inline assembly."),(0,o.kt)("h3",{id:"code-example"},"Code example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pragma solidity ^0.5.13;\n\ncontract PlatonInner {\n\n    bytes returnValue;\n\n    function assemblyCallppos(bytes memory data,address addr) public {\n        uint256 len = data.length;\n        uint retsize;\n        bytes memory resval;\n        assembly {\n            if iszero(call(gas, addr, 0,  add(data, 0x20), len, 0, 0)) {\n                invalid()\n            }\n            retsize := returndatasize()\n        }\n        resval = new bytes(retsize);\n        assembly {\n            returndatacopy(add(resval, 0x20), 0, returndatasize())\n        }\n        returnValue = resval;\n    }\n\n    function getReturnValue() public view returns(bytes memory ){\n        return returnValue;\n    }\n\n}\n")),(0,o.kt)("p",null,"Note: The RLP codes are required for the parameters of the system contract, so it is recommended to complete it under the chain."))}p.isMDXComponent=!0}}]);