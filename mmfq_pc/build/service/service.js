"use strict";function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),CommonService=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"MD5",value:function(e){function t(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;for(var n=1732584193,c=-271733879,l=-1732584194,u=271733878,f=0;f<e.length;f+=16){var p=n,m=c,d=l,h=u;n=r(n,c,l,u,e[f+0],7,-680876936),u=r(u,n,c,l,e[f+1],12,-389564586),l=r(l,u,n,c,e[f+2],17,606105819),c=r(c,l,u,n,e[f+3],22,-1044525330),n=r(n,c,l,u,e[f+4],7,-176418897),u=r(u,n,c,l,e[f+5],12,1200080426),l=r(l,u,n,c,e[f+6],17,-1473231341),c=r(c,l,u,n,e[f+7],22,-45705983),n=r(n,c,l,u,e[f+8],7,1770035416),u=r(u,n,c,l,e[f+9],12,-1958414417),l=r(l,u,n,c,e[f+10],17,-42063),c=r(c,l,u,n,e[f+11],22,-1990404162),n=r(n,c,l,u,e[f+12],7,1804603682),u=r(u,n,c,l,e[f+13],12,-40341101),l=r(l,u,n,c,e[f+14],17,-1502002290),c=r(c,l,u,n,e[f+15],22,1236535329),n=a(n,c,l,u,e[f+1],5,-165796510),u=a(u,n,c,l,e[f+6],9,-1069501632),l=a(l,u,n,c,e[f+11],14,643717713),c=a(c,l,u,n,e[f+0],20,-373897302),n=a(n,c,l,u,e[f+5],5,-701558691),u=a(u,n,c,l,e[f+10],9,38016083),l=a(l,u,n,c,e[f+15],14,-660478335),c=a(c,l,u,n,e[f+4],20,-405537848),n=a(n,c,l,u,e[f+9],5,568446438),u=a(u,n,c,l,e[f+14],9,-1019803690),l=a(l,u,n,c,e[f+3],14,-187363961),c=a(c,l,u,n,e[f+8],20,1163531501),n=a(n,c,l,u,e[f+13],5,-1444681467),u=a(u,n,c,l,e[f+2],9,-51403784),l=a(l,u,n,c,e[f+7],14,1735328473),c=a(c,l,u,n,e[f+12],20,-1926607734),n=o(n,c,l,u,e[f+5],4,-378558),u=o(u,n,c,l,e[f+8],11,-2022574463),l=o(l,u,n,c,e[f+11],16,1839030562),c=o(c,l,u,n,e[f+14],23,-35309556),n=o(n,c,l,u,e[f+1],4,-1530992060),u=o(u,n,c,l,e[f+4],11,1272893353),l=o(l,u,n,c,e[f+7],16,-155497632),c=o(c,l,u,n,e[f+10],23,-1094730640),n=o(n,c,l,u,e[f+13],4,681279174),u=o(u,n,c,l,e[f+0],11,-358537222),l=o(l,u,n,c,e[f+3],16,-722521979),c=o(c,l,u,n,e[f+6],23,76029189),n=o(n,c,l,u,e[f+9],4,-640364487),u=o(u,n,c,l,e[f+12],11,-421815835),l=o(l,u,n,c,e[f+15],16,530742520),c=o(c,l,u,n,e[f+2],23,-995338651),n=s(n,c,l,u,e[f+0],6,-198630844),u=s(u,n,c,l,e[f+7],10,1126891415),l=s(l,u,n,c,e[f+14],15,-1416354905),c=s(c,l,u,n,e[f+5],21,-57434055),n=s(n,c,l,u,e[f+12],6,1700485571),u=s(u,n,c,l,e[f+3],10,-1894986606),l=s(l,u,n,c,e[f+10],15,-1051523),c=s(c,l,u,n,e[f+1],21,-2054922799),n=s(n,c,l,u,e[f+8],6,1873313359),u=s(u,n,c,l,e[f+15],10,-30611744),l=s(l,u,n,c,e[f+6],15,-1560198380),c=s(c,l,u,n,e[f+13],21,1309151649),n=s(n,c,l,u,e[f+4],6,-145523070),u=s(u,n,c,l,e[f+11],10,-1120210379),l=s(l,u,n,c,e[f+2],15,718787259),c=s(c,l,u,n,e[f+9],21,-343485551),n=i(n,p),c=i(c,m),l=i(l,d),u=i(u,h)}return Array(n,c,l,u)}function n(e,t,n,r,a,o){return i(c(i(i(t,e),i(r,o)),a),n)}function r(e,t,r,a,o,s,i){return n(t&r|~t&a,e,t,o,s,i)}function a(e,t,r,a,o,s,i){return n(t&a|r&~a,e,t,o,s,i)}function o(e,t,r,a,o,s,i){return n(t^r^a,e,t,o,s,i)}function s(e,t,r,a,o,s,i){return n(r^(t|~a),e,t,o,s,i)}function i(e,t){var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16);return r<<16|65535&n}function c(e,t){return e<<t|e>>>32-t}function l(e){for(var t=Array(),n=(1<<p)-1,r=0;r<e.length*p;r+=p)t[r>>5]|=(e.charCodeAt(r/p)&n)<<r%32;return t}function u(e){for(var t=f?"0123456789ABCDEF":"0123456789abcdef",n="",r=0;r<4*e.length;r++)n+=t.charAt(e[r>>2]>>r%4*8+4&15)+t.charAt(e[r>>2]>>r%4*8&15);return n}var f=0,p=8;return u(t(l(e),e.length*p))}},{key:"getUrlParams",value:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?unescape(decodeURI(n[2])):null}}]),e}(),HttpService=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"query",value:function(t){console.log(),t=t||{};var n=e.formatParams(t.data),r=new XMLHttpRequest;r.onreadystatechange=function(){if(4==r.readyState){var e=r.status;if(!(e>=200&&e<300))return t.fail&&t.fail(e);var n=JSON.parse(r.responseText);if(console.log(n),0==n.result)t.success&&t.success(n.data);else{if(1013!=n.result)return t.error&&t.error(n.result,n.msg);window.localStorage.referer=window.location.href,window.location.href="login.html"}}},r.open("GET",t.url+"?"+n,!0),r.send(null)}},{key:"save",value:function(t){t=t||{};var n=e.formatParams(t.data),r=new XMLHttpRequest;r.onreadystatechange=function(){if(4==r.readyState){var e=r.status;if(e>=200&&e<300){var n=JSON.parse(r.responseText);toast.toaster(n.msg),0==n.result?t.success&&t.success(n.data):1013==n.result?(window.localStorage.referer=window.location.href,window.location.href="login.html"):t.error&&t.error(n.result,n.msg)}else t.fail&&t.fail(e)}},r.open("POST",t.url,!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.send(n)}},{key:"formatParams",value:function(e){var t=[];for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.push(("v="+Math.random()).replace(".","")),t.join("&")}}]),e}(),R_Flex=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e));return n.state={blockOrnone:n.props.blockOrnone},n}return _inherits(t,e),_createClass(t,[{key:"yescb",value:function(){this.props.config.yescb()}},{key:"nocb",value:function(){var e=!1;this.setState({blockOrnone:e}),this.props.config.nocb(e)}},{key:"render",value:function(){var e=this.props.config,t=e.img,n=e.issure,r=e.iscancle;return React.createElement("div",{className:"none",style:{display:1==this.props.blockOrnone?"block":"none"}},React.createElement("div",{className:"_z"}),React.createElement("div",{className:"layer_content"},React.createElement("div",{className:"header"},React.createElement("div",{className:"title"},"提示"),React.createElement("div",{className:"cance",onClick:this.nocb.bind(this)},"x")),React.createElement("div",{className:"layer_content2"},React.createElement("div",null,React.createElement("img",{src:t,alt:"",style:{verticalAlign:"middle"}}),"  ",React.createElement("span",null,e.text))),React.createElement("div",{className:"t_foot"},React.createElement("div",{className:"btn cancle_btn",style:{display:r?"none":"inline-block"},onClick:this.nocb.bind(this)},"取消"),React.createElement("div",{className:"btn sure_btn",style:{display:n?"none":"inline-block"},onClick:this.yescb.bind(this)},"确定"))))}}]),t}(React.Component),toast=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"toaster",value:function(e,t){t=isNaN(t)?3e3:t;var n=document.createElement("div");n.innerHTML=e,n.style.cssText="width:230px;opacity:1; height:35px; color:#fff; line-height:35px ; text-align:center; border-radius:2px; position:fixed; top:0; left:50%; z-index:9999999; filter: alpha(opacity=100); background: #fc8394;margin-left: -115px;",document.body.appendChild(n),setTimeout(function(){var e=.5;n.style.webkitTransition="-webkit-transform "+e+"s ease-in, opacity "+e+"s ease-in",n.style.mozTransition="-moz-transform "+e+"s ease-in, opacity "+e+"s ease-in",n.style.msTransition="-ms-transform "+e+"s ease-in, opacity "+e+"s ease-in",n.style.oTransition="-o-transform "+e+"s ease-in, opacity "+e+"s ease-in",n.style.transition="transform "+e+"s ease-in, opacity "+e+"s ease-in",n.style.opacity="0",setTimeout(function(){document.body.removeChild(n)},1e3*e)},t)}}]),e}();