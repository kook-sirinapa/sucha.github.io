if (self.CavalryLogger) { CavalryLogger.start_js(["R8u9b"]); }

__d("CometSuspenseList.react",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").SuspenseList}),null);
__d("HiddenSubtreeContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext({backgrounded:!1,hidden:!1,hiddenOrBackgrounded:!1,hiddenOrBackgrounded_FIXME:!1});e.exports=a}),null);
__d("CometKeyCommandContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(null);e.exports=a}),null);
__d("CometKeyCommandUtilsContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(null);e.exports=a}),null);
__d("CometKeyCommandsTypedLoggerLite",["Banzai","generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:CometKeyCommandsLoggerConfig")}),null);
__d("createKeyCommand",[],(function(a,b,c,d,e,f){"use strict";var g=["alt","command","shift"];function a(a){return g.filter(function(b){return(a==null?void 0:a[b])===!0}).concat(a==null?void 0:a.key).join(" ")}e.exports=a}),null);
__d("createKeyCommandWrapper",["CometKeyCommandContext","CometKeyCommandsTypedLoggerLite","CometKeyCommandUtilsContext","React","createKeyCommand","recoverableViolation","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("CometKeyCommandsTypedLoggerLite").log,i=b("React").useCallback,j=b("React").useContext,k=b("React").useState,l={wrapperFocusable:{":focus":{outline:"iqfcb0g7"}}};function m(a){if(a instanceof HTMLInputElement)return a.type!=="hidden"&&a.type!=="file"&&!a.disabled;return a instanceof HTMLSelectElement||a instanceof HTMLTextAreaElement?!a.disabled:a instanceof HTMLElement&&a.isContentEditable}function a(a,c){__p&&__p();return function(d){__p&&__p();var e=j(b("CometKeyCommandContext")),f=j(b("CometKeyCommandUtilsContext")),n=f&&f.setActiveWrapper,o=k(function(){return new Map()}),p=o[0];o[1];o=k(function(){__p&&__p();return{addCommands:function(a){__p&&__p();a.forEach(function(a){var c=a.command;if(c!=null){c=b("createKeyCommand")(c);p.has(c)&&b("recoverableViolation")("Conflicting key command registered for "+c,"comet_ax");p.set(c,a);f&&f.notifyCommandUpdate()}});return function(){a.forEach(function(a){var c=a.command;c=b("createKeyCommand")(c);var d=p.get(c);d===a&&p["delete"](c)}),f&&f.notifyCommandUpdate()}},applyCommand:function(a,b){__p&&__p();var c=p.get(a);if(c===null||c===void 0)return!1;if(!c.triggerFromInputs&&m(b.target))return!1;if(!(b.type==="keyup"&&c.triggerOnKeyup||b.type==="keydown"&&!c.triggerOnKeyup))return!1;c.shouldPreventDefault!==!1&&b.preventDefault();b=c.handler;if(b!==null&&b!==void 0){b();b=c.description;h({key_combo:a,key_context:d.debugName,key_description:b});return c.shouldStopPropagation!==!1}return!1},debugName:d.debugName,getCommandMap:function(){return p},getParent:function(){return e},removeCommand:function(a){p["delete"](a),f&&f.notifyCommandUpdate()}}});var q=o[0];o[1];o=i(function(){if(!n){b("recoverableViolation")("setActiveWrapper is undefined in "+(d.debugName!=null?d.debugName:"unknown"),"comet_ax");return}n(q)},[n,q,d.debugName]);if(a||d.elementType!==void 0){var r=d.elementType!==void 0?d.elementType:"div";o={className:(g||(g=b("stylex")))(d.isWrapperFocusable?l.wrapperFocusable:void 0,d.xstyle),"data-testid":"Keycommand_wrapper"+(d.debugName!=null?"_"+d.debugName:""),onFocusCapture:a?o:void 0,tabIndex:d.isWrapperFocusable?-1:void 0};r=b("React").createElement(r,o,d.children)}else r=b("React").jsx(b("React").Fragment,{children:d.children});c&&(r=b("React").jsx(c.Provider,{value:q,children:r}));return b("React").jsx(b("CometKeyCommandContext").Provider,{value:q,children:r})}}e.exports=a}),null);
__d("createKeyCommandWidget",["React","createKeyCommandWrapper","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useContext,h=b("React").useEffect;function a(a){__p&&__p();a===void 0&&(a=!0);var c=b("React").createContext();a=b("createKeyCommandWrapper")(a,c);function d(a){var d=g(c);h(function(){if(!d){b("recoverableViolation")("Attempting to register a key command outside of its widget scope. Calls to useKeyCommand must be within its widget's wrapper.","comet_ax");return}var c=d.addCommands(a);return c},[d,a])}return{Context:c,Wrapper:a,useKeyCommands:d}}e.exports=a}),null);
__d("CometKeyCommandWidget",["createKeyCommandWidget"],(function(a,b,c,d,e,f){"use strict";a=b("createKeyCommandWidget")();e.exports=a}),null);
__d("CometKeyCommandWrapper.react",["CometKeyCommandContext","CometKeyCommandWidget","React"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);return b("React").jsx(b("CometKeyCommandWidget").Wrapper,babelHelpers["extends"]({},a,{children:c}))}e.exports=a}),null);
__d("useKeyCommands",["CometKeyCommandWidget"],(function(a,b,c,d,e,f){"use strict";e.exports=b("CometKeyCommandWidget").useKeyCommands}),null);
__d("CometComponentWithKeyCommands.react",["CometKeyCommandWrapper.react","React","stylex","useKeyCommands"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={displayInherit:{display:"a8s20v7p"},inherit:{alignContent:"tojvnm2t",alignItems:"a6sixzi8",flex:"ji37btr1",flexDirection:"k5wvi7nf",height:"bipmatt0",justifyContent:"cebpdrjk",maxHeight:"qowsmv63",maxWidth:"owwhemhu",minHeight:"dp1hu0rb",minWidth:"dhp61c6y",position:"l9j0dhe7",width:"iyyx5f41"}};function h(a){b("useKeyCommands")(a.commandConfigs);return null}function a(a){var c=a.children,d=a.commandConfigs,e=a.elementType,f=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","commandConfigs","elementType","xstyle"]);var i=e==="span"?g.inherit:[g.inherit,g.displayInherit];return b("React").jsxs(b("CometKeyCommandWrapper.react"),babelHelpers["extends"]({elementType:e,xstyle:f!=null?f:i},a,{children:[b("React").jsx(h,{commandConfigs:d}),c]}))}e.exports=a}),null);
__d("CometKeys",["Locale"],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({DELETE:"backspace",DOWN:"arrowdown",END:"end",ENTER:"enter",ESCAPE:"escape",HOME:"home",LEFT:b("Locale").isRTL()?"arrowright":"arrowleft",PAGE_DOWN:"pagedown",PAGE_UP:"pageup",QUESTION:"?",RIGHT:b("Locale").isRTL()?"arrowleft":"arrowright",SPACE:" ",TAB:"tab",UP:"arrowup",ONE:"1",TWO:"2",THREE:"3",FOUR:"4",FIVE:"5",SIX:"6",SEVEN:"7",EIGHT:"8",NINE:"9",ZERO:"0",A:"a",B:"b",C:"c",D:"d",E:"e",F:"f",G:"g",H:"h",I:"i",J:"j",K:"k",L:"l",M:"m",N:"n",O:"o",P:"p",Q:"q",R:"r",S:"s",T:"t",U:"u",V:"v",W:"w",X:"x",Y:"y",Z:"z"});e.exports=a}),null);
__d("BaseHeadingContextWrapper.react",["BaseHeadingContext","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useContext;function a(a){a=a.children;var c=g(b("BaseHeadingContext"));return b("React").jsx(b("BaseHeadingContext").Provider,{value:c+1,children:a})}e.exports=a}),null);
__d("BaseContextualLayerContextSizeContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(null);e.exports=a}),null);
__d("BaseContextualLayerLayerAdjustmentContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(null);e.exports=a}),null);
__d("BaseContextualLayerOrientationContext",["React"],(function(a,b,c,d,e,f){"use strict";a={align:"start",position:"below"};e.exports=b("React").createContext(a)}),null);
__d("BaseDialog.react",["CometHideLayerOnEscape.react","React","cometTestID","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React").useCallback,i=b("React").useRef,j={anchor:{alignItems:"ll8tlv6m",display:"j83agx80",justifyContent:"taijpn5t",pointerEvents:"hzruof5a"},dialog:{display:"j83agx80",flexDirection:"cbu4d94t",overflowX:"ni8dbmo4",overflowY:"stjgntxs",pointerEvents:"oqq733wu",position:"l9j0dhe7",zIndex:"du4w35lb"},root:{alignItems:"gs1a9yip",boxSizing:"rq0escxv",display:"j83agx80",flexDirection:"cbu4d94t",justifyContent:"taijpn5t",minHeight:"h3gjbzrl",paddingTop:"mzuyfyff",paddingEnd:"dflh9lhu",paddingBottom:"b9s9zkiy",paddingStart:"scb9dxdr"}};function a(a){__p&&__p();var c=a.anchorUntilHeight;c=c===void 0?0:c;var d=a.children,e=a.disableClosingWithMask,f=e===void 0?!1:e;e=a.label;var k=a.labelledBy,l=a.onClose,m=a.testid;a=a.xstyle;var n=b("React").createRef(),o=i(!1),p=h(function(a){if(o.current===!1)return;f===!1&&l()},[f,l]),q=h(function(a){o.current=a.target===n.current},[n]),r=h(function(a){o.current=!1},[]),s=h(function(a){o.current=!1,a.stopPropagation()},[]);return b("React").jsx(b("CometHideLayerOnEscape.react"),{onHide:l,children:b("React").jsx("div",{className:(g||(g=b("stylex")))(j.root),onMouseDown:q,onMouseUp:p,onTouchEnd:p,onTouchMove:r,onTouchStart:q,ref:n,children:b("React").jsx("div",{className:g(j.anchor),style:{minHeight:c},children:b("React").jsx("div",babelHelpers["extends"]({"aria-label":e,"aria-labelledby":k,className:g(j.dialog,a)},b("cometTestID")(m),{onMouseUp:s,onTouchEnd:s,role:"dialog",children:d}))})})})}e.exports=a}),null);
__d("useCometPrerenderer",["requireCond","cr:956931"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:956931")}),null);
__d("BaseRowContext",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").createContext({columns:1,wrap:"none"})}),null);
__d("BaseView.react",["React","stylex","testID"],(function(a,b,c,d,e,f){"use strict";var g,h={hidden:{display:"mkhogb32"},root:{boxSizing:"rq0escxv",position:"l9j0dhe7",zIndex:"du4w35lb"}};function a(a,c){var d=a.testid,e=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["testid","xstyle"]);return b("React").jsx("div",babelHelpers["extends"]({},a,b("testID")(d),{className:(g||(g=b("stylex")))(h.root,e,a.hidden===!0&&h.hidden),ref:c}))}e.exports=b("React").forwardRef(a)}),null);
__d("BaseRow.react",["React","BaseRowContext","BaseView.react","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useMemo,h={row:{display:"j83agx80"}},i={center:{justifyContent:"taijpn5t"},end:{justifyContent:"bkfpd7mw"},justify:{justifyContent:"i1fnvgqd"},start:{justifyContent:"jifvfom9"}},j={center:{alignItems:"bp9cbjyn"},end:{alignItems:"aovydwv3"},start:{alignItems:"ll8tlv6m"},stretch:{alignItems:"gs1a9yip"}},k={backward:{flexDirection:"rl25f0pe"},forward:{flexDirection:"btwxx1t3"}},l={backward:{flexWrap:"kbz25j0m"},forward:{flexWrap:"lhclo0ds"},none:{flexWrap:"owycx6da"}},m={end:"start",start:"end"};function a(a,c){__p&&__p();var d=a.align;d=d===void 0?"justify":d;var e=a.children,f=a.columns,n=f===void 0?0:f;f=a.direction;f=f===void 0?"forward":f;var o=a.verticalAlign;o=o===void 0?"stretch":o;var p=a.wrap,q=p===void 0?"none":p;p=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["align","children","columns","direction","verticalAlign","wrap","xstyle"]);var r=g(function(){return{columns:n,wrap:q}},[n,q]);return b("React").jsx(b("BaseView.react"),babelHelpers["extends"]({},a,{ref:c,xstyle:[h.row,i[f==="backward"&&(d==="start"||d==="end")?m[d]:d],j[o],l[q],k[f],p],children:b("React").jsx(b("BaseRowContext").Provider,{value:r,children:e})}))}e.exports=b("React").forwardRef(a)}),null);
__d("BaseRowItem.react",["React","BaseRowContext","BaseView.react","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useContext,h={expanding:{flexBasis:"rj1gh0hx",flexGrow:"buofh1pr",flexShrink:"g5gj957u",minWidth:"hpfvmrgz"},expandingWithWrap:{flexBasis:"d8ncny3e"},item:{maxWidth:"d2edcug0"}},i={1:{flexBasis:"d8ncny3e"},2:{flexBasis:"hkbzh7o3"},3:{flexBasis:"p8cu3f6v"},4:{flexBasis:"ftbm7790"},5:{flexBasis:"eot2utzp"},6:{flexBasis:"acumsrbk"},7:{flexBasis:"snx44xhi"},8:{flexBasis:"joeu7ti0"},9:{flexBasis:"dswtirgy"},10:{flexBasis:"t9lf192y"}},j={center:{alignSelf:"o8rfisnq"},end:{alignSelf:"c4hnarmi"},start:{alignSelf:"nqmvxvec"},stretch:{alignSelf:"ns4p8fja"}};function a(a,c){var d=a.xstyle,e=a.expanding;e=e===void 0?!1:e;var f=a.verticalAlign;a=babelHelpers.objectWithoutPropertiesLoose(a,["xstyle","expanding","verticalAlign"]);var k=g(b("BaseRowContext")),l=k.columns;k=k.wrap;return b("React").jsx(b("BaseView.react"),babelHelpers["extends"]({},a,{ref:c,xstyle:[h.item,e&&h.expanding,e&&k!=="none"&&h.expandingWithWrap,l>0&&i[l],f!=null&&j[f],d]}))}e.exports=b("React").forwardRef(a)}),null);
__d("CometCardedDialog.react",["ix","fbt","BaseDialog.react","BaseHeadingContextWrapper.react","CometTrackingNodeProvider.react","React","TetraCircleButton.react","TetraText.react","TetraTextPairing.react","cometTestID","fbicon","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j={backButton:{position:"pmk7jnqg",start:"re5koujm",top:"fcg2cn6m",zIndex:"tkr6xdv7"},card:{backgroundColor:"cwj9ozl2",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",boxShadow:"nwpbqux9"},closeButton:{end:"cypi58rs",position:"pmk7jnqg",top:"fcg2cn6m",zIndex:"tkr6xdv7"},header:{borderBottom:"linmgsc8",boxSizing:"rq0escxv",height:"cb02d2ww"},headerWithBackButton:{paddingStart:"bjjun2dj"},headerWithCloseButton:{paddingEnd:"clqubjjj"},headerWithPadding:{paddingEnd:"clqubjjj",paddingStart:"bjjun2dj"},titleWrapper:{alignItems:"bp9cbjyn",boxSizing:"rq0escxv",display:"j83agx80",height:"datstx6m",paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"}},k={content:{},medium:{maxWidth:"pwh3vvf2",width:"k4urcfbm"},small:{maxWidth:"gc7gaz0o",width:"k4urcfbm"}},l={center:{justifyContent:"taijpn5t"},start:{justifyContent:"jifvfom9"}};function a(a){__p&&__p();var c,d=a.anchorUntilHeight;d=d===void 0?0:d;var e=a.children,f=a.header,m=a.onBack;m=m===void 0?function(){}:m;var n=a.onClose;n=n===void 0?function(){}:n;var o=a.disableClosingWithMask;o=o===void 0?!1:o;var p=a.labelledBy,q=a.size;q=q===void 0?"small":q;var r=a.testid,s=a.title,t=a.titleWithEntities,u=a.subtitle,v=a.titleHorizontalAlignment;v=v===void 0?"center":v;var w=a.withBackButton;w=w===void 0?!1:w;a=a.withCloseButton;a=a===void 0?!1:a;c=(c=s)!=null?c:t;return b("React").jsxs(b("BaseDialog.react"),{anchorUntilHeight:d,disableClosingWithMask:o,label:p!=null?void 0:(t=s)!=null?t:void 0,labelledBy:p,onClose:n,testid:r,xstyle:[j.card,k[q]],children:[f!=null&&b("React").jsx("div",{className:(i||(i=b("stylex")))(j.header,a&&j.headerWithCloseButton,w&&j.headerWithBackButton,(a||w)&&v==="center"&&j.headerWithPadding),children:f}),c!=null&&f==null&&b("React").jsx("div",{className:(i||(i=b("stylex")))(j.header,a&&j.headerWithCloseButton,w&&j.headerWithBackButton,(a||w)&&v==="center"&&j.headerWithPadding),children:b("React").jsx("div",{className:(i||(i=b("stylex")))(j.titleWrapper,l[v]),children:u!=null?b("React").jsx(b("TetraTextPairing.react"),{body:u,bodyLineLimit:2,headline:c,headlineLineLimit:1,isSemanticHeading:!0,level:2,textAlign:"center"}):b("React").jsx(b("TetraText.react"),{isSemanticHeading:!0,numberOfLines:1,type:"headlineEmphasized2",children:c})})}),a?b("React").jsx(b("CometTrackingNodeProvider.react"),{trackingNode:141,children:b("React").jsx("div",babelHelpers["extends"]({className:(i||(i=b("stylex")))(j.closeButton)},b("cometTestID")("close_button"),{children:b("React").jsx(b("TetraCircleButton.react"),{color:"secondary",icon:b("fbicon")._(g("478233"),20),label:h._("\u0e1b\u0e34\u0e14"),onPress:n,size:36})}))}):null,w?b("React").jsx("div",{className:(i||(i=b("stylex")))(j.backButton),children:b("React").jsx(b("TetraCircleButton.react"),{color:"secondary",icon:b("fbicon")._(g("512647"),20),label:h._("\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a"),onPress:m,size:36})}):null,b("React").jsx(b("BaseHeadingContextWrapper.react"),{children:e})]})}e.exports=a}),null);
__d("CometCardedDialogLoadingStateGlimmer.react",["BaseGlimmer.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h={bodyGlimmer:{borderTopStartRadius:"h1ci2mql",borderTopEndRadius:"mjfe6jtr",borderBottomEndRadius:"c6w6u7b1",borderBottomStartRadius:"hc21y3pz",height:"i4qgphn6",marginBottom:"p5pk11vy"},bodyGlimmerContainer:{paddingTop:"aodizinl",paddingEnd:"gl4o1x5y",paddingBottom:"ckl02a0p",paddingStart:"lt9micmv"},bodyGlimmerFirst:{width:"eq70wtua"},bodyGlimmerSecond:{width:"pfqjqu37"},header:{alignItems:"bp9cbjyn",borderBottom:"linmgsc8",display:"j83agx80",height:"cb02d2ww",justifyContent:"taijpn5t",textAlign:"oqcyycmt"},headerGlimmer:{borderTopStartRadius:"h1ci2mql",borderTopEndRadius:"mjfe6jtr",borderBottomEndRadius:"c6w6u7b1",borderBottomStartRadius:"hc21y3pz",height:"i4qgphn6",width:"gjzvkazv"}};function a(a){var c=a.bodyGlimmerContainerXStyle;c=c===void 0?null:c;a=a.withHeader;a=a===void 0?!1:a;return b("React").jsxs("div",{children:[a&&b("React").jsx("div",{className:(g||(g=b("stylex")))(h.header),children:b("React").jsx(b("BaseGlimmer.react"),{className:(g||(g=b("stylex")))(h.headerGlimmer),index:0})}),b("React").jsxs("div",{className:(g||(g=b("stylex")))(h.bodyGlimmerContainer,c),children:[b("React").jsx(b("BaseGlimmer.react"),{className:g(h.bodyGlimmer,h.bodyGlimmerFirst),index:1}),b("React").jsx(b("BaseGlimmer.react"),{className:g(h.bodyGlimmer,h.bodyGlimmerSecond),index:2})]})]})}e.exports=a}),null);
__d("CometCardedDialogLoadingState.react",["CometCardedDialog.react","CometCardedDialogLoadingStateGlimmer.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("React").jsx("div",{className:"r2dqequf k4mk90pw il7rb8sk",children:b("React").jsx(b("CometCardedDialog.react"),babelHelpers["extends"]({},a,{children:b("React").jsx(b("CometCardedDialogLoadingStateGlimmer.react"),{withHeader:a.title==null})}))})}e.exports=a}),null);
__d("CometSuspendedDialogImpl.react",["CometCardedDialogLoadingState.react","CometPlaceholder.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(a){return b("React").jsx(b("CometCardedDialogLoadingState.react"),{onClose:a,withCloseButton:!0})};function a(a){var c=a.dialog,d=a.dialogProps,e=a.fallback;e=e===void 0?g:e;a=babelHelpers.objectWithoutPropertiesLoose(a,["dialog","dialogProps","fallback"]);var f=a.onClose;e=e(f);return b("React").jsx(b("CometPlaceholder.react"),{fallback:e,children:b("React").jsx(c,babelHelpers["extends"]({},d,a))})}e.exports=a}),null);
__d("useCometLazyDialog",["CometDialogContext","CometSuspendedDialogImpl.react","React","lazyLoadComponent"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useCallback,h=b("React").useContext,i=b("React").useRef;function a(a,c){var d=i(null),e=h(b("CometDialogContext")),f=g(function(d,f){var g=b("lazyLoadComponent")(a);e(b("CometSuspendedDialogImpl.react"),{dialog:g,dialogProps:d,fallback:c},f)},[e,a,c]),j=g(function(){a.preload()},[a]);return[f,d,j]}e.exports=a}),null);
__d("useCometPassiveWindowSize",["ExecutionEnvironment","React","removeFromArray"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useEffect,h=b("React").useRef,i=b("React").useState;function j(){return b("ExecutionEnvironment").canUseDOM?{innerHeight:window.innerHeight,innerWidth:window.innerWidth,outerHeight:window.outerHeight,outerWidth:window.outerWidth}:{innerHeight:0,innerWidth:0,outerHeight:0,outerWidth:0}}function a(){__p&&__p();var a=h([]),c=i(function(){return{getCurrent:function(){return j()},subscribe:function(c){a.current.push(c);return{remove:function(){b("removeFromArray")(a.current,c)}}}}}),d=c[0];c[1];g(function(){var b=function(){a.current.forEach(function(a){return a()})};window.addEventListener("resize",b);return function(){window.removeEventListener("resize",b)}},[]);return d}e.exports=a}),null);
__d("CometImageIcon.react",["BaseImage.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function a(a){var c=a.auxiliary,d=a.size;d=d===void 0?24:d;var e=a.src,f=a.style;f=f===void 0?"circle":f;a=a.testid;return b("React").jsxs("div",{className:"l9j0dhe7",children:[b("React").jsx(b("BaseImage.react"),{className:(g||(g=b("stylex"))).dedupe(f==="circle"?{"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv"}:{},{"display-1":"a8c37x1j"},f==="roundedRect"?{"border-top-start-radius-1":"ue3kfks5","border-top-end-radius-1":"pw54ja7n","border-bottom-end-radius-1":"uo3d90p7","border-bottom-start-radius-1":"l82x9zwi"}:null),height:d,src:e,testid:a,width:d}),f!=="square"?b("React").jsx("div",{className:(g||(g=b("stylex"))).dedupe(f==="circle"?{"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv"}:{},{"box-shadow-1":"oaz4zybt","position-1":"pmk7jnqg","start-1":"j9ispegn","top-1":"kr520xx4"},f==="roundedRect"?{"border-top-start-radius-1":"ue3kfks5","border-top-end-radius-1":"pw54ja7n","border-bottom-end-radius-1":"uo3d90p7","border-bottom-start-radius-1":"l82x9zwi"}:null),style:{height:d,width:d}}):null,c!=null?b("React").jsx("div",{className:"pmk7jnqg n7fi1qx3 i09qtzwb",children:c}):null]})}e.exports=a}),null);
__d("CometLoadingAnimation.react",["cssVar","React","stylex"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=38,j=62,k=2,l=4,m=i/2,n=j/2,o=m-2,p=n-2;function a(a){__p&&__p();var c=a.animationPaused;c=c===void 0?!1:c;a=a.size;var d,e,f;switch(a){case 36:d=i;e=m;f=o;break;case 60:default:d=j;e=n;f=p;break}return b("React").jsx("svg",{className:(h||(h=b("stylex"))).dedupe({"position-1":"pmk7jnqg"},a===36?{"start-1":"fuin34xk","top-1":"l59n7fsa"}:null,a===60?{"start-1":"fuin34xk","top-1":"l59n7fsa"}:null),height:d,width:d,children:b("React").jsx("g",{className:"pf5603km a5zjgiyk koppk0rk ee40wjg4 l10wm3d9"+(c?" sb3519qa":""),children:b("React").jsx("circle",{className:h.dedupe({"animation-direction-1":"lqhrf7f0","animation-duration-1":"l248sb3c","animation-iteration-count-1":"ee40wjg4","animation-timing-function-1":"a5zjgiyk","transform-origin-1":"pf5603km"},a===36?{"animation-direction-1":"lqhrf7f0","animation-duration-1":"l10wm3d9","animation-iteration-count-1":"ee40wjg4","animation-name-1":"suagjxr3","animation-timing-function-1":"a5zjgiyk","stroke-width-1":"s6kb5r3f"}:null,a===60?{"animation-direction-1":"lqhrf7f0","animation-duration-1":"l10wm3d9","animation-iteration-count-1":"ee40wjg4","animation-name-1":"btit5cxg","animation-timing-function-1":"a5zjgiyk","stroke-width-1":"gjkn0k4t"}:null,c?{"animation-play-state-1":"sb3519qa"}:null),cx:e,cy:e,fill:"none",r:f,stroke:"#1877F2",strokeWidth:a===36?k:l})})})}e.exports=a}),null);
__d("useCometUniqueID",["React","cometUniqueID","shallowEqual","usePrevious"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useEffect,h=b("React").useRef;function a(a){a===void 0&&(a=[]);var c=h(),d=b("usePrevious")(a),e=c.current;(e==null||!b("shallowEqual")(d,a))&&(e=b("cometUniqueID")());g(function(){c.current=e},[e]);return e}e.exports=a}),null);
__d("ProfileCometLinkContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext({groupID:null});e.exports=a}),null);
__d("WorkChatDoNotDisturbStatusImpl.react",["ix","Image.react","MercuryIDs","React","asset"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=a.thread;if(!c)return null;c=b("MercuryIDs").getUserIDFromThreadID(c.thread_id);return c==null?null:a.isDoNotDisturb?b("React").jsx(b("Image.react"),{className:a.className,src:g("550343"),"data-tooltip-content":a.description,"data-hover":"tooltip"}):null}e.exports=a}),null);
__d("FirstFocusScopeQuery.react",[],(function(a,b,c,d,e,f){a=function(a,b){return a==="h1"||a==="h2"||a==="h3"||b["aria-busy"]===!0?!0:!1};e.exports=a}),null);
__d("FBOverlayElement.react",["cx","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){__p&&__p();var h={horizontal:{left:"_32rg",right:"_32rh",fit:"_32rg _32rh",center:"_1cy5"},vertical:{top:"_32ri",bottom:"_32rj",fit:"_32ri _32rj",middle:"_1cy6"}};a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("React").Children.only(this.props.children),c=b("joinClasses")(a.props.className,"_32rk",h.horizontal[this.props.horizontal],h.vertical[this.props.vertical]);return b("React").cloneElement(a,{className:c})};return c}(b("React").PureComponent);a.propTypes={horizontal:b("prop-types").oneOf(["left","right","fit","center"]),vertical:b("prop-types").oneOf(["top","bottom","fit","middle"])};a.defaultProps={horizontal:"fit",vertical:"fit"};e.exports=a}),null);
__d("objectKeys",[],(function(a,b,c,d,e,f){function a(a){return Object.keys(a)}e.exports=a}),null);
__d("FBLoomEventBuffer",["performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;a=function(){function a(){this.$1=[]}var c=a.prototype;c.addEvent=function(a,c){this.$1.push({event:a,timestamp:(a=c)!=null?a:(g||(g=b("performanceAbsoluteNow")))()})};c.flushEvents=function(){return this.$1};return a}();e.exports=a}),null);
__d("HeroTracingMetrics",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new Map();function h(a,b){a=g.get(a);if(a==null)return;a.completed==null&&b(a)}a=function(){__p&&__p();function a(){}var b=a.prototype;b.start=function(a,b,c,d,e,f){b={metadata:{},start:b,subSpans:{},traceId:a,type:c,qplEvent:e,interactionClass:d,tracePolicy:f};g.set(a,b);return b};b.end=function(a,b){a=g.get(a);a&&(a.completed=b)};b.addSubspan=function(a,b,c,d,e,f){h(a,function(a){var g={data:f,end:e,start:d,type:c};a.subSpans[b]?a.subSpans[b].push(g):a.subSpans[b]=[g]})};b.get=function(a){return g.get(a)};return a}();e.exports=new a()}),null);