(window.wpJsonp_ibclicktotweet=window.wpJsonp_ibclicktotweet||[]).push([[1],{10:function(t,e,o){}}]),function(t){function e(e){for(var n,i,l=e[0],a=e[1],u=e[2],b=0,p=[];b<l.length;b++)i=l[b],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(s&&s(e);p.length;)p.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,l=1;l<o.length;l++){var a=o[l];0!==r[a]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={0:0},c=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var l=window.wpJsonp_ibclicktotweet=window.wpJsonp_ibclicktotweet||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=a;c.push([11,1]),o()}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.wp.blockEditor}()},function(t){t.exports=JSON.parse('{"name":"click-to-tweet/click-to-tweet","title":"Click To Tweet","category":"widgets","icon":"twitter","description":"Add a quote for visitors to tweet via Twitter.","textdomain":"ib-click-to-tweet","supports":{"html":false},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}')},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e){t.exports=function(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e){!function(){t.exports=this.wp.compose}()},function(t,e){!function(){t.exports=this.wp.data}()},function(t,e,o){},,function(t,e,o){"use strict";o.r(e);var n=o(6),r=o(1),c={tweet:{type:"string",default:""},url:{type:"string",default:""},via:{type:"string"},textAlign:{type:"string"},textColor:{type:"string"},textSize:{type:"number"},buttonText:{type:"string",default:Object(r.__)("Tweet","ib-click-to-tweet")},buttonColor:{type:"string"}},i=o(5),l=o.n(i),a=o(0),u=o(2),s=o(7),b=o(8),p=o(4),f=function(t){var e=t.attributes,o=t.setAttributes,n=e.textColor,c=e.textSize,i=e.buttonColor;return Object(a.createElement)(u.InspectorControls,null,Object(a.createElement)(p.PanelBody,{title:Object(r.__)("Content","ib-click-to-tweet")},Object(a.createElement)(u.FontSizePicker,{value:c,onChange:function(t){return o({textSize:t})}})),Object(a.createElement)(u.PanelColorSettings,{title:Object(r.__)("Color","ib-click-to-tweet"),initialOpen:!1,colorSettings:[{value:n,onChange:function(t){o({textColor:t})},label:Object(r.__)("Text color","ib-click-to-tweet")},{value:i,onChange:function(t){o({buttonColor:t})},label:Object(r.__)("Button color","ib-click-to-tweet")}]},Object(a.createElement)(u.ContrastChecker,{textColor:"#ffffff",backgroundColor:i,fallbackTextColor:"#ffffff",fallbackButtonColor:"#1ea1f1"})))},w=function(t){var e=t.attributes,o=t.setAttributes,n=e.textAlign,c=e.via;return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(u.BlockControls,null,Object(a.createElement)(u.AlignmentToolbar,{value:n,onChange:function(t){o({textAlign:t})}}),Object(a.createElement)(p.Toolbar,null,Object(a.createElement)("div",{className:"ib-ctt-tb-wrapper"},Object(a.createElement)("label",{"aria-label":Object(r.__)("Twitter Username","ib-click-to-tweet"),htmlFor:"ib-ctt-tb-via-input"},"@"),Object(a.createElement)("input",{type:"text",placeholder:Object(r.__)("Twitter Username","ib-click-to-tweet"),id:"ib-ctt-tb-via-input",value:c,onChange:function(t){o({via:t.target.value})}})))))},m=(o(9),Object(s.compose)(Object(b.withSelect)((function(t){return{postUrl:t("core/editor").getPermalink()}})))((function(t){var e,o=t.attributes,n=t.setAttributes,c=o.tweet,i=o.textSize,s=o.textAlign,b=o.textColor,p=o.buttonText,m=o.buttonColor;return t.postUrl&&n({url:t.postUrl}),[Object(a.createElement)(a.Fragment,null,Object(a.createElement)(w,{attributes:o,setAttributes:n}),Object(a.createElement)(f,{attributes:o,setAttributes:n}),Object(a.createElement)("div",{className:t.className},Object(a.createElement)("div",{className:"ib-click-to-tweet",style:{textAlign:s,"--color":b}},Object(a.createElement)(u.RichText,(e={className:"ib-click-to-tweet-text",placeholder:Object(r.__)("Tweet...","ib-click-to-tweet"),value:c,allowedFormats:[],keepPlaceholderOnFocus:!0,onChange:function(t){n({tweet:t})},tagName:"p"},l()(e,"allowedFormats",["core/bold","core/italic"]),l()(e,"style",{color:b,fontSize:i}),e)),Object(a.createElement)(u.RichText,{className:"ib-click-to-tweet-button",placeholder:Object(r.__)("Tweet","ib-click-to-tweet"),multiline:"false",allowedFormats:[],value:p,keepPlaceholderOnFocus:!0,onChange:function(t){n({buttonText:t})},tagName:"span",style:{backgroundColor:m}}))))]}))),d=function(t){var e,o,n=t.attributes,r=n.tweet,c=n.url,i=n.via,l=n.textAlign,s=n.textColor,b=n.textSize,p=n.buttonText,f=n.buttonColor,w="http://twitter.com/share?&text=".concat(encodeURIComponent((e=r,o=document.createElement("div"),o.innerHTML=e,o.textContent||o.innerText)),"&url=").concat(c,"&via=").concat(i||"");return Object(a.createElement)("div",null,Object(a.createElement)("div",{className:"ib-click-to-tweet",style:{textAlign:l,"--color":s}},Object(a.createElement)(u.RichText.Content,{className:"ib-click-to-tweet-text",value:r,tagName:"p",style:{color:s,fontSize:b}}),Object(a.createElement)(u.RichText.Content,{className:"ib-click-to-tweet-button",value:p,tagName:"a",href:w,target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:f}})))},O={attributes:{}},x=o(3),g=(o(10),x.name,x.icon),j=x.category,v=x.keywords,k=x.supports;Object(n.registerBlockType)("ideabox/click-to-tweet",{title:Object(r.__)("Click to Tweet","ib-click-to-tweet"),description:Object(r.__)("Add a quote for visitors to tweet via Twitter.","ib-click-to-tweet"),category:j,icon:g,keywords:v,supports:k,attributes:c,edit:m,save:d,example:O,styles:[{name:"normal",label:Object(r.__)("Normal","ib-click-to-tweet"),isDefault:!0},{name:"quote",label:Object(r.__)("Blockquote","ib-click-to-tweet"),isDefault:!1}]})}]);