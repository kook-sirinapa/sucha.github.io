if (self.CavalryLogger) { CavalryLogger.start_js(["sEE\/P"]); }

__d("GroupAdminType",[],(function(a,b,c,d,e,f){e.exports={none:"NONE",moderator:"MODERATOR",admin:"ADMIN"}}),null);
__d("AdsInsightsColumns",["AdsInsightsColumn"],(function(a,b,c,d,e,f){"use strict";a=function(a,b){return[a,b].join(":")};c=function(a){return b("AdsInsightsColumn").RELEVANCE_SCORE+":"+a};d={makeActionID:a,makeRelevanceScoreID:c};e.exports=d}),null);
__d("Facepile.react",["cx","fbt","ix","HovercardLink","Image.react","Link.react","List.react","React","createReactClass_DEPRECATED","intlSummarizeNumber","joinClasses","prop-types"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j={small:24,medium:32,large:50};c=b("createReactClass_DEPRECATED")({displayName:"Facepile",defaultProps:{moreColor:"blue",moreCount:0,showHovercard:!1,tooltipPosition:"above",showToolTip:!0,spacing:"none"},propTypes:{className:(a=b("prop-types")).string,moreColor:a.oneOf(["blue","gray"]),moreCount:a.number,moreDialogLink:a.string,morePageLink:a.string,numFaces:a.number,onFaceClick:a.func,onComponentDidMount:a.func,profiles:a.arrayOf(a.shape({URL:a.any,name:a.node.isRequired,uniqueID:a.any.isRequired,profilePicURI:a.any.isRequired})).isRequired,showHovercard:a.bool,size:a.oneOf([28,"small","medium","large"]).isRequired,spacing:a.oneOf(["none","small","medium","large"]),showToolTip:a.bool,tooltipPosition:a.oneOf(["above","below","left","right"])},_onFaceClick:function(a,b){this.props.onFaceClick&&this.props.onFaceClick(a,b)},componentDidMount:function(){this.props.onComponentDidMount&&this.props.onComponentDidMount()},getPicSize:function(){return j[this.props.size]||this.props.size},renderFace:function(a,c){var d=this.getPicSize(),e=b("HovercardLink").constructEndpoint({id:a.uniqueID}).toString();return b("React").jsx("li",{className:"_43q7",onClick:this._onFaceClick.bind(this,a,c),children:b("React").jsx(b("Link.react"),{"aria-label":a.name,className:"_2rt_ link","data-hover":this.props.showHovercard?null:"tooltip","data-hovercard":this.props.showHovercard?e:null,"data-ignoreclass":"_2rt_","data-tooltip-alignh":"left","data-tooltip-content":a.name,"data-tooltip-position":this.props.tooltipPosition,href:a.URL,children:b("React").jsx(b("Image.react"),{src:a.profilePicURI,width:d,height:d,className:"img"})})},a.uniqueID)},renderMore:function(){if(!this.props.moreCount)return null;var a=this.props.numFaces!=null&&this.props.numFaces<=this.props.profiles.length?this.props.moreCount+1:this.props.moreCount,c=b("intlSummarizeNumber")(a,0),d=c.length,e;a===0||this.props.size==="small"&&d>2||this.props.size===28&&d>2||this.props.size==="medium"&&d>3||this.props.size==="large"&&d>6?e=b("React").jsx(b("Image.react"),{src:i("97502")}):e="+"+c;var f;(this.props.showToolTip===void 0||this.props.showToolTip===!0)&&(a===1?f=h._("\u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e2d\u0e35\u0e01 1 \u0e04\u0e19"):f=h._("\u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e2d\u0e35\u0e01 {num} \u0e04\u0e19",[h._param("num",a)]));c=b("joinClasses")("_43q8 _43q7"+(d<2?" _43qa":"")+(d===2?" _43qb":"")+(d===3?" _43qd":"")+(d>3?" _43qe":"")+(this.props.moreColor==="blue"?" _49c8":"")+(this.props.moreColor==="gray"?" _49cb":""));return b("React").jsx("li",{className:c,children:b("React").jsx("a",{"data-hover":f?"tooltip":null,"data-tooltip-position":f?"right":null,"data-tooltip-content":f,ajaxify:this.props.moreDialogLink||this.props.morePageLink,href:this.props.morePageLink,role:"button",rel:this.props.moreDialogLink?"dialog":null,children:e})})},render:function(){var a=this.props.spacing||this.defaultProps.spacing;a=b("joinClasses")(this.props.className,"_43qm"+(this.props.size==28?" _3cxu":"")+(this.props.size=="small"?" _43q9":"")+(this.props.size=="medium"?" _43qc":"")+(this.props.size=="large"?" _43qf":"")+(a!=this.defaultProps.spacing?" _4nab":""));var c=this.props.numFaces==void 0?this.props.profiles:this.props.profiles.slice(0,this.props.moreCount?this.props.numFaces-1:this.props.numFaces);return b("React").jsx("div",{className:a,style:this.props.style,children:b("React").jsxs(b("List.react"),{className:"_4cg3",direction:"horizontal",spacing:this.props.spacing||"none",border:"none",children:[c.map(this.renderFace),this.renderMore()]})})}});e.exports=c}),null);
__d("FBMoreLink.react",["ix","cx","fbt","FDSLink.react","FDSText.react","Image.react","Link.react","React","fbglyph","prop-types"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={isCollapsed:c.props.isInitiallyCollapsed!=null?c.props.isInitiallyCollapsed:!0},c.onClick=function(a){var b=c.$1();c.setState({isCollapsed:!b});c.props.onClick&&c.props.onClick(!b,a)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.$1();if(!this.props.allowToggle&&!a)return b("React").jsx("div",{children:this.props.children});var c=this.props.moreLabel,d=g("117293");a||(c=this.props.lessLabel,d=g("117305"));d=this.props.hideToggleIcon?null:b("React").jsx(b("Image.react"),{className:"_554d",src:d});c=b("React").jsxs(b("React").Fragment,{children:[b("React").jsx("span",{className:this.props.useFDSLink?"":"_554b",children:c}),d]});return b("React").jsxs(b("React").Fragment,{children:[a?null:this.props.children,this.props.useFDSLink===!0?b("React").jsx(b("FDSText.react"),{children:b("React").jsx(b("FDSLink.react"),{onClick:this.onClick,children:c})}):b("React").jsx(b("Link.react"),babelHelpers["extends"]({},this.props,{onClick:this.onClick,children:c}))]})};d.$1=function(){return this.props.isCollapsed!=null?this.props.isCollapsed:this.state.isCollapsed};return c}(b("React").Component);a.propTypes={allowToggle:(c=b("prop-types")).bool,hideToggleIcon:c.bool,moreLabel:c.node,lessLabel:c.node,isInitiallyCollapsed:c.bool,isCollapsed:c.bool,onClick:c.func,useFDSLink:c.bool,children:c.node};a.defaultProps=function(){var a=i._("\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21"),b=i._("\u0e22\u0e48\u0e2d\u0e25\u0e07");return{allowToggle:!1,moreLabel:a,lessLabel:b}}();e.exports=a}),null);
__d("VideoDuration.react",["cx","fbt","ix","DurationFormatter","FlexLayout.react","Image.react","React"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=null;this.props.isSpherical&&(a=b("React").jsx(b("Image.react"),{className:"__lq",src:i("501720")}));if(this.props.isLive){if(this.props.liveViewerCount){var c;return(c=b("React")).jsxs(b("FlexLayout.react"),{className:"_7p9t",children:[c.jsx(b("FlexLayout.react"),{className:"_7p9w",align:"center",children:h._("\u0e2a\u0e14")}),c.jsx(b("FlexLayout.react"),{align:"center",className:"_7p9y",children:c.jsx("span",{children:this.props.liveViewerCount})})]})}return b("React").jsxs(b("FlexLayout.react"),{className:"_2pq9",align:"center",children:[a,h._("\u0e2a\u0e14")]})}return this.props.duration?b("React").jsxs(b("FlexLayout.react"),{className:"_2pq8",align:"center",children:[a,b("React").jsx("span",{children:b("DurationFormatter").formatShort(this.props.duration)})]}):null};return c}(b("React").Component);e.exports=a}),null);
__d("PixelNumConverter",[],(function(a,b,c,d,e,f){function g(a){return a!=null&&!isNaN(a)&&isFinite(a)&&a!==""}a={pixelValue:function(a){return g(a)?Number(a)+"px":"auto"},numValue:function(a){a=a.replace("px","");return g(a)?Number(a):0}};e.exports=a}),null);
__d("AdPreviewIFrameResizeListener",["Arbiter","DOM","PixelNumConverter","Style","lowerFacebookDomain"],(function(a,b,c,d,e,f){__p&&__p();a={listen:function(a,c,d,e){__p&&__p();var f=!1,g=!1;try{b("lowerFacebookDomain")()}catch(a){g=!0}var h=function(g){var h=g.frame,i=g.frameHeight;g=g.storyHeight;if(f||h!==a)return;c.height=i;if(!d)return;h=!e||!g?i:g-1;b("Style").set(d,"height",b("PixelNumConverter").pixelValue(h))};g&&window.addEventListener("message",function(a){a.data.event==="fb:preview:iframe/resize"&&h(a.data.data)},!1);return b("Arbiter").subscribe(["iframe/resize","contextualLayer/toggle"],function(a,d){if(a==="iframe/resize")h(d);else{if(!b("DOM").contains(d.contentRoot,c))return;d.show?f=!1:f=!0}})}};e.exports=a}),null);
__d("TahoeEndScreenProgressCircle.react",["cx","React","ReactDOM","Style","clearInterval","prop-types","setInterval"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=null,c.$2=0,c.$3=0,b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$3=this.$2,this.drawProgressCircle(this.props)};d.componentWillUnmount=function(){b("clearInterval")(this.$1)};d.UNSAFE_componentWillReceiveProps=function(a){(a.makeProgress!==this.props.makeProgress||a.timeoutSec!==this.props.timeoutSec)&&this.drawProgressCircle(a)};d.drawProgressCircle=function(a){__p&&__p();var c=this;b("clearInterval")(this.$1);var d=b("ReactDOM").findDOMNode(this.refs.progressCircle);if(!d)return;if(a.timeoutSec===0){b("Style").set(d,"stroke-dashoffset",this.$2+"px");return}var e=this.$2/100;b("Style").set(d,"stroke-dashoffset",this.$3+"px");a.makeProgress&&(this.$1=b("setInterval")(function(){c.$3-=e,b("Style").set(d,"stroke-dashoffset",c.$3+"px"),c.$3<=0&&(b("clearInterval")(c.$1),b("Style").set(d,"stroke-dashoffset","0px"),a.onProgressDone&&a.onProgressDone())},a.timeoutSec*10))};d.render=function(){var a=this.props,c=a.circleDiameter,d=a.strokeWidth;a=a.inlineBlock;var e=c/2,f=e-d/2;this.$2=f*2*Math.PI;return b("React").jsxs("div",{className:"_3was",children:[b("React").jsxs("svg",{className:"_4bcw"+(a?" _7cis":""),style:{height:c,width:c},children:[b("React").jsx("circle",{cx:e,cy:e,r:e,fill:this.props.ringColor}),b("React").jsx("circle",{ref:"progressCircle",cx:e,cy:e,r:f,fill:this.props.circleColor,stroke:this.props.ringProgressColor,strokeWidth:d,strokeDasharray:this.$2})]}),this.props.children]})};return c}(b("React").Component);a.propTypes={children:(c=b("prop-types")).element,makeProgress:c.bool.isRequired,onProgressDone:c.func,timeoutSec:c.number.isRequired};a.defaultProps={circleDiameter:48,circleColor:"transparent",inlineBlock:!1,ringColor:"rgba(0, 0, 0, 0.3)",ringProgressColor:"#ffffff",strokeWidth:4};e.exports=a}),null);
__d("ResizeListener",["EventListener","SubscriptionList","requestAnimationFrame"],(function(a,b,c,d,e,f){"use strict";var g,h=!1,i=new(b("SubscriptionList"))(function(){g=b("EventListener").listen(window,"resize",j)},function(){g.remove()});function j(){h||(h=!0,b("requestAnimationFrame")(function(){i.fireCallbacks(),h=!1}))}e.exports=i}),null);
__d("XDeveloperDocumentationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/docs/{?path1}/{?path2}/{?path3}/{?path4}/{?path5}/{?path6}/",{version:{type:"String"},preview:{type:"Exists",defaultValue:!1},revisionid:{type:"Int"},translation:{type:"Exists",defaultValue:!1},path1:{type:"String"},path2:{type:"String"},path3:{type:"String"},path4:{type:"String"},path5:{type:"String"},path6:{type:"String"}})}),null);