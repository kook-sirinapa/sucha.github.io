if (self.CavalryLogger) { CavalryLogger.start_js(["UJPpJ"]); }

__d("CometHovercardEntityRenderer_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometHovercardEntityRenderer_actor",type:"Actor",metadata:{mask:!1},argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]};e.exports=a}),null);
__d("CometShortenedExternalUrlEntityRenderer_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometShortenedExternalUrlEntityRenderer_entity",type:"Entity",metadata:{mask:!1},argumentDefinitions:[],selections:[{kind:"InlineFragment",type:"ExternalUrl",selections:[{kind:"ScalarField",alias:null,name:"external_url",args:null,storageKey:null}]}]};e.exports=a}),null);
__d("CometVideoTimeIndexEntityRenderer_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometVideoTimeIndexEntityRenderer_entity",type:"Entity",metadata:{mask:!1},argumentDefinitions:[],selections:[{kind:"InlineFragment",type:"VideoTimeIndex",selections:[{kind:"ScalarField",alias:null,name:"time_index",args:null,storageKey:null}]}]};e.exports=a}),null);
__d("CometUFICommentBodyTextWithEntities_textWithEntities$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"length",args:null,storageKey:null},b={kind:"ScalarField",alias:null,name:"offset",args:null,storageKey:null},c={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},e={kind:"LinkedField",alias:null,name:"work_foreign_entity_info",storageKey:null,args:null,concreteType:"WorkForeignEntityInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"type",args:null,storageKey:null}]};return{kind:"SplitOperation",name:"CometUFICommentBodyTextWithEntities_textWithEntities$normalization",metadata:{derivedFrom:"CometUFICommentBodyTextWithEntities_textWithEntities"},selections:[{kind:"LinkedField",alias:null,name:"image_ranges",storageKey:null,args:null,concreteType:"ImageAtRange",plural:!0,selections:[a,b,{kind:"LinkedField",alias:null,name:"entity_with_image",storageKey:null,args:null,concreteType:null,plural:!1,selections:[c,{kind:"LinkedField",alias:null,name:"image",storageKey:null,args:null,concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"height",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"scale",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"width",args:null,storageKey:null}]},d]}]},{kind:"LinkedField",alias:null,name:"inline_style_ranges",storageKey:null,args:null,concreteType:"InlineStyleAtRange",plural:!0,selections:[a,b,{kind:"ScalarField",alias:null,name:"inline_style",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"aggregated_ranges",storageKey:null,args:null,concreteType:"AggregatedEntitiesAtRange",plural:!0,selections:[a,b,{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"sample_entities",storageKey:null,args:null,concreteType:null,plural:!0,selections:[c,{kind:"InlineFragment",type:"User",selections:[d,{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null}]},d]}]},{kind:"LinkedField",alias:null,name:"ranges",storageKey:null,args:null,concreteType:"EntityAtRange",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"entity",storageKey:null,args:null,concreteType:null,plural:!1,selections:[c,d,{kind:"ScalarField",alias:null,name:"url",args:[{kind:"Literal",name:"site",value:"www"}],storageKey:'url(site:"www")'},{kind:"ScalarField",alias:"profile_url",name:"url",args:null,storageKey:null},{kind:"InlineFragment",type:"ExternalUrl",selections:[{kind:"ScalarField",alias:null,name:"external_url",args:null,storageKey:null}]},{kind:"InlineFragment",type:"VideoTimeIndex",selections:[{kind:"ScalarField",alias:null,name:"time_index",args:null,storageKey:null}]},{kind:"InlineFragment",type:"User",selections:[e]},{kind:"InlineFragment",type:"Group",selections:[e,{kind:"ScalarField",alias:null,name:"work_official_status",args:null,storageKey:null}]}]},a,b]},{kind:"ScalarField",alias:null,name:"text",args:null,storageKey:null}]}}();e.exports=a}),null);
__d("CometUFICommentBodyTextWithEntities_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometUFICommentBodyTextWithEntities_textWithEntities",type:"TextWithEntities",metadata:null,argumentDefinitions:[],selections:[{kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities",args:null}]};e.exports=a}),null);
__d("CometRouteURL",["ConstUriUtils","React","useCurrentRoute"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useMemo;function h(a){if(a!=null){a=b("ConstUriUtils").getUri(a);return a!=null?a.getPath():""}return""}function i(a){if(a!=null){a=b("ConstUriUtils").getUri(a);return a!=null?Object.fromEntries(a.getQueryParams()):{}}return{}}function a(){var a,c=b("useCurrentRoute")();a=(a=c==null?void 0:c.canonicalUrl)!=null?a:c==null?void 0:c.url;return a||""}function c(){var a,c=b("useCurrentRoute")(),d=(a=c==null?void 0:c.canonicalUrl)!=null?a:c==null?void 0:c.url;return g(function(){return h(d)},[d])}function d(){var a,c=b("useCurrentRoute")(),d=(a=c==null?void 0:c.canonicalUrl)!=null?a:c==null?void 0:c.url;return g(function(){return i(d)},[d])}e.exports={useRouteURL:a,useRouteURLParams:d,useRouteURLPath:c}}),null);
__d("useOnBeforeUnloadBlue",["React","Run"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useEffect;function a(a){var c=function(){var b=a();return b==null?void 0:b.warnMessage};g(function(){return b("Run").onBeforeUnload(c,!0).remove})}e.exports=a}),null);
__d("usePartialViewImpression",["useVisibilityObserver"],(function(a,b,c,d,e,f){"use strict";a=function(a){var c=a.onImpressionEnd;a=a.onImpressionStart;return b("useVisibilityObserver")({onHidden:c,onVisible:a,options:{hiddenWhenCSSStyleHidden:!0,hiddenWhenZeroArea:!0}})};e.exports=a}),null);
__d("BaseAccessibleElement_DEPRECATED.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.children;a=a.id;return b("React").jsx("span",{className:"pmk7jnqg g0aa4cga q45zohi1",id:a,children:c})}e.exports=a}),null);
__d("canRenderHovercardForGraphQLEntityType",[],(function(a,b,c,d,e,f){"use strict";e.exports=function(a){return["Event","Page","Group","GroupAnonAuthorProfile","User"].includes(a)}}),null);
__d("CometHovercardEntityRenderer",["ActorHovercard.react","CometRelay","React","canRenderHovercardForGraphQLEntityType","CometHovercardEntityRenderer_actor.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("CometRelay").graphql;g!==void 0?g:g=b("CometHovercardEntityRenderer_actor.graphql");a=function(a,c){if(b("canRenderHovercardForGraphQLEntityType")(c.__typename)===!1)return a;return c.id==null?a:b("React").jsx(b("ActorHovercard.react"),{actorID:c.id,display:"inline",children:function(c){return b("React").jsx("span",{ref:c,children:a})}})};e.exports=a}),null);
__d("CometShortenedExternalUrlEntityRenderer",["CometRelay","URITruncator","CometShortenedExternalUrlEntityRenderer_entity.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("CometRelay").graphql;g!==void 0?g:g=b("CometShortenedExternalUrlEntityRenderer_entity.graphql");var h=60;a=function(a,c){if(c.external_url==null)return a;c=b("URITruncator")(c.external_url,h);return c.length<[a].join("").length?c:a};e.exports=a}),null);
__d("CometUFIVideoPlayerContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext;c=a([null,function(){}]);e.exports=c}),null);
__d("useCometUFIVideoPlayerStateAndController",["CometUFIVideoPlayerContext","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useContext;function a(){var a=g(b("CometUFIVideoPlayerContext")),c=a[0];a[1];return c}e.exports=a}),null);
__d("CometVideoTimeIndexEntityRenderer",["CometLink.react","CometRelay","React","useCometUFIVideoPlayerStateAndController","CometVideoTimeIndexEntityRenderer_entity.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("CometRelay").graphql;g!==void 0?g:g=b("CometVideoTimeIndexEntityRenderer_entity.graphql");a=function(a,c){var d=b("useCometUFIVideoPlayerStateAndController")();return c.time_index==null||d==null?a:b("React").jsx(b("CometLink.react"),{onClick:function(){c.time_index!=null&&d.controller.seek(c.time_index)},ref:function(a){var b=null;a&&(a.onmousedown=function(){b=document.activeElement},a.onmouseup=function(){a.blur(),b&&b.focus()})},children:b("React").jsx("strong",{children:a})})};e.exports=a}),null);
__d("CometRefineRef",[],(function(a,b,c,d,e,f){"use strict";function a(a){return function(b){if(a==null)return;typeof a==="function"?a(b):typeof a==="object"&&(a.current=b)}}e.exports=a}),null);
__d("CometFeedStoryMetaSectionMiddot.react",["Middot.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";function a(){return b("React").jsx("span",{className:"jpp8pzdo",children:b("React").jsx(b("Middot.react"),{})})}e.exports=a}),null);
__d("CometFeedARIAProperties.react",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(Object.freeze({}));e.exports=a}),null);
__d("useCometTrackingCodeForMutationProperties",["CometRouteURL","CometTrackingCodeContext","React","getReferrerURI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("CometRouteURL").useRouteURLParams,h=b("React").useContext,i=b("React").useMemo;function a(){var a=g(),c=b("getReferrerURI")(),d=c?c.getPath():void 0,e=h(b("CometTrackingCodeContext")),f=a.notif_id,j=a.notif_t;c=i(function(){var a=null;f!=null&&(a=JSON.stringify({alert_id:f,notif_source:"notif_tab",notif_type:j}));a=a!=null?[a].concat(e.encrypted_tracking):e.encrypted_tracking;return{feedback_referrer:d,is_tracking_encrypted:!0,tracking:a}},[d,f,j,e]);return c}e.exports=a}),null);
__d("CometUFIVideoPlayerUtils",["CometUFIVideoPlayerContext","React","VideoPlayerHooks","useCometUFIVideoPlayerStateAndController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=(f=b("React")).useCallback,h=f.useContext,i=f.useEffect,j=f.useMemo,k=f.useState,l=b("VideoPlayerHooks").useController;function a(a){a=a.children;var c=k(null),d=j(function(){return c},[c]);return b("React").jsx(b("CometUFIVideoPlayerContext").Provider,{value:d,children:a})}function c(a){var c=a.data,d=l();a=h(b("CometUFIVideoPlayerContext"));a[0];var e=a[1];i(function(){e({controller:d,data:c})},[d,c,e]);return null}function d(){var a=b("useCometUFIVideoPlayerStateAndController")();return g(function(){if(a==null)return null;var b=a.controller.getPlayheadPosition();return b==null?null:Math.floor(b)},[a])}e.exports={CometUFIVideoPlayerStateAndControllerContextProvider:a,CometUFIVideoPlayerStateAndControllerExtractor:c,useCometUFIVideoPlayerStateAndController:b("useCometUFIVideoPlayerStateAndController"),useGetCometUFIVideoPlayerTimestampInteger:d}}),null);
__d("CometUFICommentBodyTextWithEntities.react",["CometEmojiTransform","CometEmoticonTransform","CometHovercardEntityRenderer","CometLineBreakTransform","CometLinkedEntityRenderer","CometRelay","CometShortenedExternalUrlEntityRenderer","CometTextWithEntitiesRelay.react","CometVideoTimeIndexEntityRenderer","React","gkx","CometUFICommentBodyTextWithEntities_textWithEntities.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i={"*":[b("CometLinkedEntityRenderer")],Event:[c=b("CometHovercardEntityRenderer")],ExternalUrl:[b("CometShortenedExternalUrlEntityRenderer")],Group:[c],Page:[c],User:[c],VideoTimeIndex:b("gkx")("1096688")?[b("CometVideoTimeIndexEntityRenderer")]:[]},j=[b("CometEmoticonTransform")(),b("CometEmojiTransform")(),b("CometLineBreakTransform")];function a(a){a=h(g!==void 0?g:g=b("CometUFICommentBodyTextWithEntities_textWithEntities.graphql"),a.textWithEntities);return a==null?null:b("React").jsx(b("CometTextWithEntitiesRelay.react"),{maxLength:420,maxLines:3,renderers:i,textWithEntities:a,transforms:j,truncationStyle:"see-more",withLineBreaks:!0,withParagraphs:!0})}e.exports=a}),null);
__d("useCometUFICodedErrorDialog",["CometPlaceholder.react","JSResource","React","lazyLoadComponent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useCallback,h=b("React").useState,i=b("lazyLoadComponent")(b("JSResource")("CometUFICodedErrorDialog.react").__setRef("useCometUFICodedErrorDialog"));function a(){var a=h(null),c=a[0],d=a[1];a=g(function(a){a.code!=null&&d(a)},[d]);var e=g(function(){return d(null)},[d]);return c==null?{errorDialog:null,setError:a}:{errorDialog:b("React").jsx(b("CometPlaceholder.react"),{fallback:b("React").jsx(b("React").Fragment,{}),children:b("React").jsx(i,{error:c,onClose:e})}),setError:a}}e.exports=a}),null);
__d("useTrackingCodeFnForComet",["React","useCometTrackingCodeForMutationProperties"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useCallback;a=function(){var a=b("useCometTrackingCodeForMutationProperties")(),c=g(function(){return a},[a]);return c};e.exports=a}),null);