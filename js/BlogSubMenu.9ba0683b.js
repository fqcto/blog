(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BlogSubMenu"],{3880:function(t,e,i){},"390a":function(t,e,i){"use strict";var n=i("5545"),o=i.n(n);o.a},"4db6":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[i("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[i("v-icon",{attrs:{dark:"",color:"white"}},[t._v("list")])],1),i("v-card",{staticStyle:{"border-radius":"5px"}},[i("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/desert.jpg","aspect-ratio":"2.75"}}),i("v-card-title",{attrs:{"primary-title":""}},[i("div",[i("h3",{staticClass:"headline mb-0"},[t._v("Kangaroo Valley Safari")]),i("div",[t._v(" 111 ")])])]),i("v-btn",{ref:"button",attrs:{color:"primary",block:""},on:{click:function(e){return t.$vuetify.goTo(t.target,t.options)}}},[t._v("scroll")]),i("v-card-actions",[i("v-btn",{attrs:{flat:"",color:"orange"}},[t._v("Share")]),i("v-btn",{attrs:{flat:"",color:"orange"}},[t._v("Explore")])],1)],1)],1)},o=[],s={data:function(){return{target:"#Third",options:{duration:300,offset:0,easing:"easeInOutCubic"},colors:["primary","info","success","warning","danger"],images:["https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-1.23832d31.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-3.3a54f533.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-4.3b7e38ed.jpg"]}}},a=s,r=(i("390a"),i("2877")),c=i("6544"),h=i.n(c),l=i("8336"),u=i("b0af"),d=i("99d9"),f=i("12b2"),v=i("132d"),m=i("adda"),p=(i("3880"),i("2b0e")),g=p["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var n=parseInt(this[t+"Delay"],10);this[t+"Timeout"]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},n)}}}),y=i("c69d"),b=i("3e79"),A=i("d9bd"),x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function w(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function T(t){var e="undefined"===typeof t?"undefined":x(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}var k={name:"detachable",mixins:[b["a"]],props:{attach:{type:null,default:!1,validator:T},contentClass:{default:""}},data:function(){return{hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:"initDetach"},beforeMount:function(){var t=this;this.$nextTick(function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach(function(e){e.elm&&t.$el.parentNode.insertBefore(e.elm,t.$el)})}})},mounted:function(){!this.lazy&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach(function(t){t.elm&&t.elm.parentNode.removeChild(t.elm)})}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=this.$vnode&&this.$vnode.context.$options._scopeId;return t&&w({},t,"")},initDetach:function(){if(!this._isDestroyed&&this.$refs.content&&!this.hasDetached&&""!==this.attach&&!0!==this.attach&&"attach"!==this.attach){var t=void 0;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.insertBefore(this.$refs.content,t.firstChild),this.hasDetached=!0):Object(A["b"])("Unable to locate target "+(this.attach||"[data-app]"),this)}}}},O=i("c22b"),C=i("80d2");function $(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}var S=p["a"].extend().extend({name:"stackable",data:function(){return{stackClass:"unpecified",stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(C["i"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,Object(C["i"])(e)],n=[].concat($(document.getElementsByClassName(this.stackClass))),o=0;o<n.length;o++)t.includes(n[o])||i.push(Object(C["i"])(n[o]));return Math.max.apply(Math,i)}}}),I="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_={activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0},hasWindow:!1},W=p["a"].extend({name:"menuable",mixins:[O["a"],S],props:{activator:{default:null,validator:function(t){return["string","object"].includes("undefined"===typeof t?"undefined":I(t))}},allowOverflow:Boolean,inputActivator:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatorFixed:!1,dimensions:Object.assign({},_),isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(this.isAttached?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),o=0;if(o+=this.left?i-(n-t.width):i,this.offsetX){var s=isNaN(this.maxWidth)?t.width:Math.min(t.width,this.maxWidth);o+=this.left?-s:t.width}return this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),o},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),this.isAttached?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||this.activator||this.inputActivator},isAttached:function(){return!1!==this.attach}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.checkForWindow()},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return(this.isAttached?this.computedLeft:this.calcXOverflow(this.computedLeft,t))+"px"},calcTop:function(){return(this.isAttached?this.computedTop:this.calcYOverflow(this.computedTop))+"px"},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.pageYOffset+e,n=this.dimensions.activator,o=this.dimensions.content.height,s=t+o,a=i<s;return a&&this.offsetOverflow&&n.top>o?t=this.pageYOffset+(n.top-o):a&&!this.allowOverflow?t=i-o-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForWindow:function(){this.hasWindow||(this.hasWindow="undefined"!==typeof window)},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},getActivator:function(t){if(this.inputActivator)return this.$el.querySelector(".v-input__slot");if(this.activator)return"string"===typeof this.activator?document.querySelector(this.activator):this.activator;if(this.$refs.activator)return this.$refs.activator.children.length>0?this.$refs.activator.children[0]:this.$refs.activator;if(t)return this.activatedBy=t.currentTarget||t.target,this.activatedBy;if(this.activatedBy)return this.activatedBy;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode[0]:this.activatorNode,i=e&&e.elm;if(i)return i}},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(this.isAttached){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame(function(){var i=e.$refs.content;if(!i||e.isShown(i))return t();i.style.display="inline-block",t(),i.style.display="none"})},startTransition:function(){var t=this;return new Promise(function(e){return requestAnimationFrame(function(){t.isContentActive=t.hasJustFocused=t.isActive,e()})})},isShown:function(t){return"none"!==t.style.display},updateDimensions:function(){var t=this;this.checkForWindow(),this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,this.isAttached?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek(function(){e.content=t.measure(t.$refs.content),t.dimensions=e})}}}),D=p["a"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:returnValue",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout(function(){e.isActive=!1})}}}),N=i("98a1"),M=i("6a18"),E={methods:{activatorClickHandler:function(t){this.openOnClick&&!this.isActive?(this.getActivator(t).focus(),this.isActive=!0,this.absoluteX=t.clientX,this.absoluteY=t.clientY):this.closeOnClick&&this.isActive&&(this.getActivator(t).blur(),this.isActive=!1)},mouseEnterHandler:function(){var t=this;this.runDelay("open",function(){t.hasJustFocused||(t.hasJustFocused=!0,t.isActive=!0)})},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame(function(){e.isActive=!1,e.callDeactivate()})})},addActivatorEvents:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&!this.disabled&&t.addEventListener("click",this.activatorClickHandler)},removeActivatorEvents:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&t.removeEventListener("click",this.activatorClickHandler)}}},B=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};function H(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function L(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}var j={methods:{genActivator:function(){if(!this.$slots.activator&&!this.$scopedSlots.activator)return null;var t={};if(this.disabled||(this.openOnHover?(t.mouseenter=this.mouseEnterHandler,t.mouseleave=this.mouseLeaveHandler):this.openOnClick&&(t.click=this.activatorClickHandler)),"scoped"===Object(C["h"])(this,"activator")){t.keydown=this.onKeyDown;var e=this.$scopedSlots.activator({on:t});return this.activatorNode=e,e}return this.$createElement("div",{staticClass:"v-menu__activator",class:{"v-menu__activator--active":this.hasJustFocused||this.isActive,"v-menu__activator--disabled":this.disabled},ref:"activator",on:t},this.$slots.activator)},genTransition:function(){return this.transition?this.$createElement("transition",{props:{name:this.transition}},[this.genContent()]):this.genContent()},genDirectives:function(){var t=this,e=!this.openOnHover&&this.closeOnClick?[{name:"click-outside",value:function(){t.isActive=!1},args:{closeConditional:this.closeConditional,include:function(){return[t.$el].concat(L(t.getOpenDependentElements()))}}}]:[];return e.push({name:"show",value:this.isContentActive}),e},genContent:function(){var t=this,e={attrs:this.getScopeIdAttrs(),staticClass:"v-menu__content",class:B({},this.rootThemeClasses,H({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){e.stopPropagation(),e.target.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return!this.disabled&&this.openOnHover&&(e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.showLazyContent(this.$slots.default))}}},Y={props:{disableKeys:Boolean},data:function(){return{listIndex:-1,tiles:[]}},watch:{isActive:function(t){t||(this.listIndex=-1)},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list__tile--highlighted"),this.$refs.content.scrollTop=i.offsetTop-i.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list__tile--highlighted")}},methods:{onKeyDown:function(t){var e=this;if(t.keyCode===C["j"].esc){setTimeout(function(){e.isActive=!1});var i=this.getActivator();this.$nextTick(function(){return i&&i.focus()})}else t.keyCode===C["j"].tab?setTimeout(function(){e.$refs.content.contains(document.activeElement)||(e.isActive=!1)}):this.changeListIndex(t)},changeListIndex:function(t){if(this.getTiles(),t.keyCode===C["j"].down&&this.listIndex<this.tiles.length-1)this.listIndex++;else if(t.keyCode===C["j"].up&&this.listIndex>-1)this.listIndex--;else{if(t.keyCode!==C["j"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()},getTiles:function(){this.tiles=this.$refs.content.querySelectorAll(".v-list__tile")}}},F={data:function(){return{calculatedTopAuto:0}},methods:{calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list__tile--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return this.isAttached?0:parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list__tile--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),n=t.querySelector(".v-list__tile").offsetTop;return this.computedTop-i-n}}},P=i("c584"),V=i("0d3d"),X=i("58df"),q=Object(X["a"])(M["a"]).extend({name:"theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:M["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find(function(t){return!t.isComment&&" "!==t.text})}}),z=p["a"].extend({name:"v-menu",provide:function(){return{theme:this.theme}},directives:{ClickOutside:P["a"],Resize:V["a"]},mixins:[E,y["a"],g,k,j,Y,W,F,D,N["a"],M["a"]],props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,fullWidth:Boolean,maxHeight:{default:"auto"},openOnClick:{type:Boolean,default:!0},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{defaultOffset:8,hasJustFocused:!1,resizeTimeout:null}},computed:{calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?this.calcXOverflow(this.calcLeftAuto(),t)+"px":this.calcLeft(t)},calculatedMaxHeight:function(){return this.auto?"200px":Object(C["b"])(this.maxHeight)},calculatedMaxWidth:function(){return isNaN(this.maxWidth)?this.maxWidth:this.maxWidth+"px"},calculatedMinWidth:function(){if(this.minWidth)return isNaN(this.minWidth)?this.minWidth:this.minWidth+"px";var t=Math.min(this.dimensions.activator.width+this.nudgeWidth+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Math.min(e,t)+"px"},calculatedTop:function(){return!this.auto||this.isAttached?this.calcTop():this.calcYOverflow(this.calculatedTopAuto)+"px"},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{activator:function(t,e){this.removeActivatorEvents(e),this.addActivatorEvents(t)},disabled:function(t){this.activator&&(t?this.removeActivatorEvents(this.activator):this.addActivatorEvents(this.activator))},isContentActive:function(t){this.hasJustFocused=t}},mounted:function(){this.isActive&&this.activate(),"v-slot"===Object(C["h"])(this,"activator",!0)&&Object(A["a"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){var t=this;this.getTiles(),this.updateDimensions(),requestAnimationFrame(function(){t.startTransition().then(function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))})})},closeConditional:function(t){return this.isActive&&this.closeOnClick&&!this.$refs.content.contains(t.target)},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(this.updateDimensions,100))}},render:function(t){var e={staticClass:"v-menu",class:{"v-menu--inline":!this.fullWidth&&this.$slots.activator},directives:[{arg:500,name:"resize",value:this.onResize}],on:this.disableKeys?void 0:{keydown:this.onKeyDown}};return t("div",e,[this.genActivator(),this.$createElement(q,{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])])}}),R=Object(r["a"])(a,n,o,!1,null,null,null);e["default"]=R.exports;h()(R,{VBtn:l["a"],VCard:u["a"],VCardActions:d["a"],VCardTitle:f["a"],VIcon:v["a"],VImg:m["a"],VMenu:z})},5545:function(t,e,i){}}]);
//# sourceMappingURL=BlogSubMenu.9ba0683b.js.map