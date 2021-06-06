if (self.CavalryLogger) { CavalryLogger.start_js(["30R1Y"]); }

__d("BusinessURI.brands",["BizSiteIdentifier.brands","URI","isFacebookURI"],(function(a,b,c,d,e,f){__p&&__p();var g,h=function(c){"use strict";__p&&__p();babelHelpers.inheritsLoose(a,c);function a(a,d){a=c.call(this,a)||this;if(b("BizSiteIdentifier.brands").isBizSite()){d=d!==null&&d!==void 0&&d!==""?d:b("BizSiteIdentifier.brands").getBusinessID();d!==null&&d!==void 0&&d!==""&&a.addQueryData("business_id",d);a.$BusinessURI1(a.getSubdomain())||a.setSubdomain("business")}if(!b("isFacebookURI")(babelHelpers.assertThisInitialized(a)))throw new Error("Business URI must be FB URI");return babelHelpers.assertThisInitialized(a)||babelHelpers.assertThisInitialized(a)}var d=a.prototype;d.$BusinessURI1=function(a){return a==="developers"};return a}(g||b("URI"));a=function(a,b){return new h(a,b)};a.BusinessURI=h;e.exports=a}),null);
__d("FBProfilePhotoShadow.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.className,d=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","children"]);d=b("React").Children.only(d);return b("React").jsx("div",babelHelpers["extends"]({},a,{className:b("joinClasses")(c,"_38vo"),children:b("React").cloneElement(d,{className:b("joinClasses")(d.props.className,"_44ma")})}))};return c}(b("React").Component);e.exports=a}),null);
__d("LitestandComposer",["csx","Arbiter","Bootloader","Parent","ReactComposerEvents","ReactComposerIDGenerator","Run","SubscriptionsHandler","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h=600,i={};function j(a,c,d,e){__p&&__p();b("Bootloader").loadModules(["Animation","ComposerXController","ComposerXMarauderLogger","DOM","LitestandStream"],function(f,g,k,l,m){__p&&__p();if(!m.isReady()){m.addReadyListener(function(){j(a,c,d,e)});return}b("ReactComposerIDGenerator").isComposerID(a)||g.reset(a);if(!m||!c)return;if(i[a]){l.insertAfter(i[a],c);g=i[a].parentNode;g&&g.removeChild(i[a]);delete i[a]}else d===null?l.prependContent(m.getStreamRoot(),c):l.insertAfter(d,c);new f(c).from("opacity",0).to("opacity",1).duration(h).go();k.logCompleted(a);e&&e();b("Arbiter").inform("LitestandComposer/publishCompleted",{story:c})},"LitestandComposer")}var k={},l={initComposer:function(a){__p&&__p();k[a]&&l.destructComposer(a),k[a]=new(b("SubscriptionsHandler"))(),k[a].addSubscriptions(b("Arbiter").subscribe("LitestandComposer/publish",function(c,d){__p&&__p();if(d.composer_id===a){c=b("ge")(a);c=c!==null?b("Parent").bySelector(c,"._l2u"):null;j(a,d.markup,c,function(){var a=d.markup;if(a){var c=a.id;c||(c="random_id_for_litestand_context_"+Math.random(),a.id=c);b("Arbiter").inform("LitestandComposer/attachedToDOM",c)}})}}),b("Arbiter").subscribe("LitestandComposer/publishTemp",function(b,c){c.composer_id===a&&j(a,c.markup,null,function(){c.markup&&(i[a]=c.markup)})}),b("Arbiter").subscribe(b("ReactComposerEvents").COMPOSER_UNMOUNT+a,l.destructComposer.bind(null,a))),b("Run").onLeave(l.destructComposer.bind(null,a))},destructComposer:function(a){var b=k[a];b!=null&&(b.release(),delete k[a])}};e.exports=l}),null);
__d("LitestandStoryInsertionStatus",["ArbiterMixin"],(function(a,b,c,d,e,f){var g="check";a={registerBlocker:function(a){return this.subscribe(g,function(b,c){c.can_insert&&a()&&(c.can_insert=!1)})},canInsert:function(){var a={can_insert:!0};this.inform(g,a);return a.can_insert}};Object.assign(a,b("ArbiterMixin"));e.exports=a}),null);
__d("ReactComposerFocusActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({SUBSCRIBE:null,UNSUBSCRIBE:null,FOCUS_ACQUIRED:null,FOCUS_LOST:null})}),null);
__d("keyMirrorRecursive",["invariant","isTruthy"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function a(c,d){__p&&__p();var e={};h(c)||g(0,580);for(var f in c){if(!Object.prototype.hasOwnProperty.call(c,f))continue;var i=c[f],j=b("isTruthy")(d)?d+"."+f:f;h(i)?i=a(i,j):i=j;e[f]=i}return e};function h(a){return a instanceof Object&&!Array.isArray(a)}e.exports=a}),null);
__d("ReactComposerFocusActions",["ReactComposerDispatcher","ReactComposerFocusActionTypes","ReactComposerStore"],(function(a,b,c,d,e,f){"use strict";b("ReactComposerStore");a={subscribe:function(a,c,d){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerFocusActionTypes").SUBSCRIBE,onFocusAcquiredCallback:c,onFocusLostCallback:d})},unsubscribe:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerFocusActionTypes").UNSUBSCRIBE})},notifyFocusAcquired:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerFocusActionTypes").FOCUS_ACQUIRED})},notifyFocusLost:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerFocusActionTypes").FOCUS_LOST})}};e.exports=a}),null);
__d("VideoWithFallbackMode",["Event","SubscriptionsHandler","TimeSlice","VideoPlayerExperiments","VideoPlayerLoggerFallbackReasons","Visibility"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c){__p&&__p();var d=this;this.$1=!1;this.$2=!1;this.$5=function(){d.$1=!0,b("VideoPlayerExperiments").disableFallbackModeForInactiveTab&&d.$2&&(d.$6.play("fallback_mode"),d.$2=!1)};this.$8=function(){d.$1=!1};this.$3=new(b("SubscriptionsHandler"))();c||(c=a,a=null);this.$4=c;a&&this.enable(a)}var c=a.prototype;c.enable=function(a){__p&&__p();var c=this;this.$3.engage();this.$6=a;if(this.$6.isImplementationUnavailable()||this.$6.getOption("SphericalVideoPlayer","isUnavailable")){this.$7(b("VideoPlayerLoggerFallbackReasons").FLASH_UNAVAILABLE);return}this.$3.addSubscriptions(b("Event").listen(window,"blur",this.$8),b("Event").listen(window,"focus",this.$5),b("Visibility").addListener(b("Visibility").HIDDEN,this.$8),b("Visibility").addListener(b("Visibility").VISIBLE,this.$5),a.addListener("error",this.$9.bind(this)));if(this.$4.fallbackTimeoutMs){a=this.$4.fallbackTimeoutMs;this.$10=setTimeout(b("TimeSlice").guard(function(){c.$6.isState("loading")&&(c.$6.pause("fallback_mode"),c.$7(b("VideoPlayerLoggerFallbackReasons").TIMEOUT),c.$2=!0)},"VideoWithFallbackMode fallbackTimeout",{propagationType:b("TimeSlice").PropagationType.EXECUTION}),a)}};c.disable=function(){this.$3.release(),clearTimeout(this.$10),this.$10=null,this.$6=null};c.$9=function(a){if(this.$6.isState("fallback"))return;this.$6.isState("playing")&&this.$6.pause("fallback_mode");this.$6.abortLoading();a?this.$7(a):(this.$7(b("VideoPlayerLoggerFallbackReasons").FLASH_ERROR),this.$2=!0)};c.$7=function(a){if(b("VideoPlayerExperiments").disableFallbackModeForInactiveTab&&!this.$1)return;this.$6.setState("fallback");a===b("VideoPlayerLoggerFallbackReasons").TIMEOUT&&this.$6.emit("VideoWithStallRecoveryOverlay/timeout");this.$6.logEvent("entered_fallback",{debug_reason:a})};return a}();e.exports=a}),null);
__d("VideoNodeStaledScreen",["CSS","EventListener","SubscriptionsHandler"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){var c=this;this.$3=new(b("SubscriptionsHandler"))();this.$5=function(){b("CSS").show(c.$1)};this.$4=function(){b("CSS").hide(c.$1)};this.$1=a;this.$2=null;b("EventListener").listen(this.$1,"click",this.$4)}var c=a.prototype;c.enable=function(a){this.$2=a,this.$3.addSubscriptions(this.$2.addListener("videoNodeStaled",this.$5))};c.disable=function(){this.$3.release(),this.$2=null};return a}();e.exports=a}),null);
__d("VideoStateDirectory",["EventEmitter","VideoPlayerExperiments"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b;b=a.call(this)||this;b.$VideoStateDirectory1=new Map();return b}var d=c.prototype;d.setPlaybackState=function(a,c,d){var e=this.$VideoStateDirectory1.get(a)||{};e.currentTimePosition=c;e.playbackDuration=d;e.watched=e.currentTimePosition/e.playbackDuration>=b("VideoPlayerExperiments").watchedPercentage/100||!!e.watched;this.$VideoStateDirectory1.set(a,e);this.emit(a,e)};d.setSaveState=function(a,b){var c=this.$VideoStateDirectory1.get(a)||{};c.saved=b;this.emit(a,c)};d.setSubscriptionState=function(a,b){var c=this.$VideoStateDirectory1.get(a)||{};c.subscribed=b;this.emit(a,c)};d.getState=function(a){return this.$VideoStateDirectory1.get(a)};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("VideoUpdateStateDirectory",["VideoStateDirectory"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){var a=this;this.$2=function(){var c=a.$1,d=c.getVideoID(),e=c.getCurrentTimePosition();c=c.getPlaybackDuration();b("VideoStateDirectory").setPlaybackState(d,e,c)}}var c=a.prototype;c.enable=function(a){this.$1=a,a.addListener("finishPlayback",this.$2),a.addListener("pausePlayback",this.$2)};c.disable=function(){};return a}();e.exports=a}),null);
__d("StoreBasedStateMixinHelper",["invariant","SubscriptionsHandler"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this.$1=a,this.$2=new(b("SubscriptionsHandler"))()}var c=a.prototype;c.subscribeCallback=function(a,b){__p&&__p();var c=this.$1.map(function(c){__p&&__p();var d=b!=null?function(d){b&&b(c);return a(d)}:a;if(c.hasChanged&&c.getDispatchToken&&c.addListener)return c.addListener(d);else if(c.subscribe)return c.subscribe("change",d);else if(c.addListener)return c.addListener("change",d);else g(0,574)});this.$1.length>0&&this.$2.addSubscriptions.apply(this.$2,c)};c.release=function(){this.$2.release()};return a}();e.exports=a}),null);
__d("distinctArrayBy",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return a}function a(a,b){__p&&__p();b===void 0&&(b=g);var c=[],d=new Set();for(var a=a,e=Array.isArray(a),f=0,a=e?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(e){if(f>=a.length)break;h=a[f++]}else{f=a.next();if(f.done)break;h=f.value}h=h;var i=b(h);d.has(i)||(d.add(i),c.push(h))}return c}e.exports=a}),null);