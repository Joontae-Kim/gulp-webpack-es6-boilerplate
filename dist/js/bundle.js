!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";var o=t(1),r=function(e){return e&&e.__esModule?e:{default:e}}(o),u=new r.default("Joontae");u.gretting(),u.say(),u.question();var i=new r.default("Kyung-A");i.gretting(),i.say(),i.question()},function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),u=function(){function e(n){o(this,e),this.name=n}return r(e,[{key:"gretting",value:function(){console.log("Hello, ",this.name)}},{key:"question",value:function(){console.log("What is your job?",this.name)}},{key:"say",value:function(){console.log("HI, I AM ",this.name)}}]),e}();n.default=u}]);