"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function debounce(e,t){var n;return function(){for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];n&&clearTimeout(n),n=setTimeout(function(){e.apply(void 0,a),n=null},t)}}var ModalMenu=function(){function e(t,n,i,a){_classCallCheck(this,e),this.container=document.querySelector(t),this.button=document.querySelector(n),this.menu=document.querySelector(i),this.class=a||"is-active",this.events=["touchstart","click"]}return _createClass(e,[{key:"setAttributes",value:function(){var e=this.button;e.classList.contains(this.class)?(e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label","close menu")):(e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","open menu"))}},{key:"toggleMenuEvent",value:function(e){e.cancelable&&e.preventDefault(),[this.container,this.button,this.menu].forEach(function(e){e.classList.toggle("is-active")}),this.setAttributes()}},{key:"addEventsInButton",value:function(){var e=this;this.events.forEach(function(t){e.button.addEventListener(t,e.toggleMenuEvent,{passive:!1})})}},{key:"bindEvents",value:function(){this.toggleMenuEvent=this.toggleMenuEvent.bind(this)}},{key:"init",value:function(){return this.container&&this.button&&this.menu&&(this.bindEvents(),this.addEventsInButton()),this}}]),e}(),modalMenu=new ModalMenu('[data-mobile="container"]','[data-mobile="button"]','[data-mobile="content"]');modalMenu.init();var ScrollAnim=function(){function e(){var t;_classCallCheck(this,e),this.elements=(t=document).querySelectorAll.apply(t,arguments),this.windowMetade=.8*window.innerHeight}return _createClass(e,[{key:"getDistance",value:function(){var e=this;this.distance=_toConsumableArray(this.elements).map(function(t){var n=t.offsetTop;return{element:t,offsetTop:Math.floor(n-e.windowMetade)}})}},{key:"checkDistance",value:function(){this.distance.forEach(function(e){var t=e.element;window.pageYOffset>e.offsetTop?t.classList.add("is-visible"):t.classList.remove("is-visible")})}},{key:"addEventInWindow",value:function(){window.addEventListener("scroll",this.checkDistance)}},{key:"bindEvents",value:function(){this.checkDistance=debounce(this.checkDistance.bind(this),50)}},{key:"init",value:function(){return this.elements.length&&(this.bindEvents(),this.checkDistance(),this.getDistance(),this.addEventInWindow()),this}}]),e}(),scrollAnim=new ScrollAnim(["[data-anim]","[data-anim-2]"]);scrollAnim.init();