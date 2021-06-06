if (self.CavalryLogger) { CavalryLogger.start_js(["H2hzH"]); }

__d("CometTextWithEntitiesRelay_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"LinkedField",alias:null,name:"work_foreign_entity_info",storageKey:null,args:null,concreteType:"WorkForeignEntityInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"type",args:null,storageKey:null}]};return{kind:"Fragment",name:"CometTextWithEntitiesRelay_entity",type:"Entity",metadata:{mask:!1},argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"url",args:[{kind:"Literal",name:"site",value:"www"}],storageKey:'url(site:"www")'},{kind:"FragmentSpread",name:"ProfileCometProfileLink_actor",args:null},{kind:"InlineFragment",type:"ExternalUrl",selections:[{kind:"ScalarField",alias:null,name:"external_url",args:null,storageKey:null}]},{kind:"InlineFragment",type:"VideoTimeIndex",selections:[{kind:"ScalarField",alias:null,name:"time_index",args:null,storageKey:null}]},{kind:"InlineFragment",type:"User",selections:[a]},{kind:"InlineFragment",type:"Group",selections:[a,{kind:"ScalarField",alias:null,name:"work_official_status",args:null,storageKey:null}]}]}}();e.exports=a}),null);
__d("CometTextWithEntitiesRelay_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"length",args:null,storageKey:null},b={kind:"ScalarField",alias:null,name:"offset",args:null,storageKey:null},c={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},e={kind:"LinkedField",alias:null,name:"work_foreign_entity_info",storageKey:null,args:null,concreteType:"WorkForeignEntityInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"type",args:null,storageKey:null}]};return{kind:"Fragment",name:"CometTextWithEntitiesRelay_textWithEntities",type:"TextWithEntities",metadata:null,argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"image_ranges",storageKey:null,args:null,concreteType:"ImageAtRange",plural:!0,selections:[a,b,{kind:"LinkedField",alias:null,name:"entity_with_image",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"LinkedField",alias:null,name:"image",storageKey:null,args:null,concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"height",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"scale",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"width",args:null,storageKey:null}]}]}]},{kind:"LinkedField",alias:null,name:"inline_style_ranges",storageKey:null,args:null,concreteType:"InlineStyleAtRange",plural:!0,selections:[a,b,{kind:"ScalarField",alias:null,name:"inline_style",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"aggregated_ranges",storageKey:null,args:null,concreteType:"AggregatedEntitiesAtRange",plural:!0,selections:[a,b,{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"sample_entities",storageKey:null,args:null,concreteType:null,plural:!0,selections:[c,{kind:"InlineFragment",type:"User",selections:[d,{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null}]}]}]},{kind:"LinkedField",alias:null,name:"ranges",storageKey:null,args:null,concreteType:"EntityAtRange",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"entity",storageKey:null,args:null,concreteType:null,plural:!1,selections:[c,d,{kind:"ScalarField",alias:null,name:"url",args:[{kind:"Literal",name:"site",value:"www"}],storageKey:'url(site:"www")'},{kind:"FragmentSpread",name:"ProfileCometProfileLink_actor",args:null},{kind:"InlineFragment",type:"ExternalUrl",selections:[{kind:"ScalarField",alias:null,name:"external_url",args:null,storageKey:null}]},{kind:"InlineFragment",type:"VideoTimeIndex",selections:[{kind:"ScalarField",alias:null,name:"time_index",args:null,storageKey:null}]},{kind:"InlineFragment",type:"User",selections:[e]},{kind:"InlineFragment",type:"Group",selections:[e,{kind:"ScalarField",alias:null,name:"work_official_status",args:null,storageKey:null}]}]},a,b]},{kind:"ScalarField",alias:null,name:"text",args:null,storageKey:null}]}}();e.exports=a}),null);
__d("useCometRouteTracePolicy",["useCurrentRoute"],(function(a,b,c,d,e,f){"use strict";var g="comet.app";function a(){var a;return(a=(a=b("useCurrentRoute")())==null?void 0:a.tracePolicy)!=null?a:g}e.exports=a}),null);
__d("BaseText.react",["React","UnicodeUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React").Fragment;function i(a){return[].concat(a).sort(function(a,b){return a.offset===b.offset&&(a.length===0||b.length===0)?a.length-b.length:a.offset-b.offset})}function j(a,b){return b!=null?b.reduce(function(a,b){return b(a)},a):a}function k(a,c,d,e,f,g){var i=a.__typename;f=Object.prototype.hasOwnProperty.call(f,i)?f[i].concat(g):g;return b("React").jsx(h,{children:f&&f.length>0?f.reduce(function(b,c){return c(b,a)},d):c},e)}function l(a,c,d,e,f,i,l,m,n){var o=l.length;i.push(b("React").jsx(h,{children:j((g||(g=b("UnicodeUtils"))).substr(a,c,d-c),m)},"c"+c+"_"+o));l.pop();l[l.length-1].subElements.push(k(e,i,i,c+"_"+o,f,n))}function a(a){__p&&__p();var c=a.ranges;c=c===void 0?[]:c;var d=a.renderers;d=d===void 0?{}:d;var e=a.transforms;e=e===void 0?[]:e;a=a.text;var f=0,m=Object.prototype.hasOwnProperty.call(d,"*")?d["*"]:[];c=i(c);var n=[{entity:{__typename:""},length:a.length,offset:0,subElements:[]}];for(var o=0;o<c.length;++o){if(f>=a.length)break;var p=c[o],q=p.entity,r=p.length;p=p.offset;var s=n[n.length-1],t=s.entity,u=s.length,v=s.offset;s=s.subElements;var w=v+u;while(w<=p&&n.length>1){l(a,f,w,t,d,s,n,e,m);f=w;var x=n[n.length-1];t=x.entity;u=x.length;v=x.offset;s=x.subElements;w=v+u}f<p&&(n[n.length-1].subElements.push(b("React").jsx(h,{children:j((g||(g=b("UnicodeUtils"))).substr(a,f,p-f),e)},"c"+f+"_"+n.length)),f=p);if(v<=p&&w>=p+r)n.push({entity:q,length:r,offset:p,subElements:[]});else{x=(g||(g=b("UnicodeUtils"))).substr(a,p,r);w=j(x,e);n[n.length-1].subElements.push(k(q,x,w,f+"_"+n.length,d,m));f=p+r}}while(n.length>1){q=n[n.length-1];var t=q.entity,u=q.length,v=q.offset;s=q.subElements;x=v+u;l(a,f,x,t,d,s,n,e,m);f=x}if(f<a.length){w=n[n.length-1].subElements;w.push(b("React").jsx(h,{children:j((g||(g=b("UnicodeUtils"))).substr(a,f),e)},"c"+f))}return n[n.length-1].subElements}e.exports=a}),null);
__d("CometBase.react",["BaseView.react"],(function(a,b,c,d,e,f){"use strict";e.exports=b("BaseView.react")}),null);
__d("CometRelayQueryProfiler",["CometInteractionTracingMetrics","JSTracing","emptyFunction","performanceNow","relay-runtime"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("relay-runtime").RelayProfiler;function i(a,c){__p&&__p();if(!c)return b("emptyFunction");var d=b("JSTracing").getCurrent();if(!d)return b("emptyFunction");var e=(g||(g=b("performanceNow")))();d.forEach(function(a){b("CometInteractionTracingMetrics").addMarkerPoint(a.name,"Relay_"+c.queryName+"_start","RelayQuery",e)});return function(a){var f={usedCache:c.usedCache,usedPrefetcher:c.usedPrefetcher};a&&(f.error=a.message);d.forEach(function(a){b("CometInteractionTracingMetrics").removeMarkerPoint(a.name,"Relay_"+c.queryName+"_start"),b("CometInteractionTracingMetrics").addSubspan(a.name,"Relay_"+c.queryName,"RelayQuery",e,(g||(g=b("performanceNow")))(),f)})}}function a(){h.attachProfileHandler("fetchRelayQuery",i)}e.exports={install:a}}),null);
__d("RelayFBCometMutations",["recoverableViolation","relay-runtime","warning"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("relay-runtime").getRequest,h=1;function a(a){__p&&__p();return function(c,d,e){__p&&__p();var f=d.variables.input||{},i=f.actor_id,j=f.client_mutation_id;f=babelHelpers.objectWithoutPropertiesLoose(f,["actor_id","client_mutation_id"]);b("warning")(j==null,"RelayFBCometMutations: Found `client_mutation_id` in mutation input`. In the Facebook context, `client_mutation_id` and `actor_id` are added automatically.");var k;c.options!=null&&c.options.actorID!=null&&typeof c.options.actorID==="string"?k=c.options.actorID:b("recoverableViolation")("RelayFBCometMutations: Expected a non-nullable string actorID to be set on the Relay environment. https://fburl.com/wiki/m19zmtlh","relay");if(i!=null&&i!==k){var l=g(d.mutation);l=l.params.name;b("recoverableViolation")('You passed an actor_id parameter "'+i+'" to mutation "'+l+'", but the parameter was overridden by the actor_id "'+((l=k)!=null?l:"")+'" defined in the ActorContext that wraps your React tree. Update your code to avoid passing the actor_id parameter to your mutation.',"relay");k=i}i=babelHelpers["extends"]({},d.variables,{input:babelHelpers["extends"]({},f,{actor_id:k,client_mutation_id:(l=j)!=null?l:""+h++})});return a(c,{configs:d.configs,mutation:d.mutation,onCompleted:d.onCompleted,onError:d.onError,optimisticResponse:d.optimisticResponse,optimisticUpdater:d.optimisticUpdater,updater:d.updater,uploadables:d.uploadables,variables:i},e)}}e.exports={addFBisms:a}}),null);
__d("RelayFBModuleResource",["RelayFBModuleLoader","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){if(a===null||typeof a!=="object")throw b("unrecoverableViolation")("ModuleResource.read(): Expected `match` value to be an object.","relay");a=a.__module_component;return a==null?null:b("RelayFBModuleLoader").read(a)}function c(a){if(a===null||typeof a!=="object")throw b("unrecoverableViolation")("ModuleResource.getModuleId(): Expected `match` value to be an object.","relay");a=a.__module_component;if(a==null)return null;a=b("RelayFBModuleLoader").getModuleReference(a);return a.getModuleId()}e.exports={read:a,getModuleId:c}}),null);
__d("useFragmentNodes_DEPRECATED",["React","mapObject","relay-experimental/FragmentResource","relay-experimental/useRelayEnvironment","relay-runtime","warning"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React").useEffect,i=b("React").useRef,j=b("React").useState,k=b("relay-experimental/FragmentResource").getFragmentResourceForEnvironment,l=b("relay-runtime").getFragmentIdentifier,m=b("relay-runtime").isScalarAndEqual,n=b("relay-runtime").stableCopy;function a(a,c,d){__p&&__p();var e=b("relay-experimental/useRelayEnvironment")(),f=k(e),l=i(!1),n=j(0),q=n[1];n=p(a,c);var r=i(0),s=i(0);e=o(e);n=o(n);e=e||n;n=j(c);var t=n[0];n=n[1];var u=Object.keys(c).filter(function(b){return!Object.prototype.hasOwnProperty.call(a,b)}),v=u.some(function(a){return t[a]!==c[a]});u=u.some(function(a){return!m(t[a],c[a])});u=e||u;u&&s.current++;e&&r.current++;v&&n(c);var w=f.readSpec(a,c,d),x=i(!0);function y(){x.current=!0;var a=f.checkMissedUpdatesSpec(w);a&&A()}function z(){x.current=!1}function A(){var a;if(l.current===!1||x.current===!1)return;s.current=((a=s.current)!=null?a:0)+1;q(function(a){return a+1})}h(function(){l.current=!0;var a=f.subscribeSpec(w,A);return function(){l.current=!1,a.dispose()}},[r.current]);u=(g||(g=b("mapObject")))(w,function(a,b){return a.data});return{data:u,disableStoreUpdates:z,enableStoreUpdates:y,shouldUpdateGeneration:s.current}}function o(a){var b=j(a),c=b[0];b=b[1];c=c!==a;c&&b(a);return c}function p(a,c){return JSON.stringify(n((g||(g=b("mapObject")))(a,function(a,b){b=c[b];return l(a,b)})))}e.exports=a}),null);
__d("createSuspenseFragmentContainer_DEPRECATED",["React","mapObject","react-relay/assertFragmentMap","relay-experimental/useRelayEnvironment","relay-runtime","useFragmentNodes_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React").useMemo,i=b("relay-runtime").getFragment;function a(a,c){__p&&__p();var d=a.displayName||a.name||"Unknown",e="RelaySuspenseFragmentContainer("+d+")";b("react-relay/assertFragmentMap")(d,c);d=c;var f=(g||(g=b("mapObject")))(d,i);function j(c,d){var g=b("relay-experimental/useRelayEnvironment")(),i=h(function(){return{environment:g}},[g]),j=b("useFragmentNodes_DEPRECATED")(f,c,e),k=j.data;j=j.shouldUpdateGeneration;return h(function(){var e;return b("React").jsx(a,babelHelpers["extends"]({},c,k,{ref:(e=c.componentRef)!=null?e:d,relay:i}))},[j,d])}j.displayName=e;c=b("React").forwardRef(j);return c}e.exports=a}),null);
__d("createSuspensePaginationContainer_DEPRECATED",["invariant","React","areEqual","createSuspenseFragmentContainer_DEPRECATED","forEachObject","mapObject","relay-experimental/useRelayEnvironment","relay-runtime","warning"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=(c=b("React")).useCallback,k=c.useEffect,l=c.useMemo,m=c.useReducer,n=c.useRef,o=(d=b("relay-runtime")).ConnectionInterface;f=d.__internal;var p=f.fetchQuery,q=f.getOperationVariables,r=d.createOperationDescriptor,s=d.getDataIDsFromObject,t=d.getFragment,u=d.getRequest,v=d.getSelector,w="forward";function a(a,c,d){var e=a.displayName||a.name||"Unknown",f=(h||(h=b("mapObject")))(c,t),g=A(f),i=u(d.query);g=y(a,e,g.direction,B(g),d.getVariables);g=b("createSuspenseFragmentContainer_DEPRECATED")(g,c);c=x(a,e,f,d.getFragmentRefsFromResponse,i,g);return c}function x(a,c,d,e,f,g){__p&&__p();var h="RelaySuspensePaginationContainer("+c+")";a=function(a,c){__p&&__p();var l=b("relay-experimental/useRelayEnvironment")(),o={};b("forEachObject")(d,function(b,c){b=v(b,a[c]);b=b!=null&&b.kind==="PluralReaderSelector"?(c=(c=b.selectors[0])==null?void 0:c.owner.variables)!=null?c:{}:(c=b==null?void 0:b.owner.variables)!=null?c:{};o=babelHelpers["extends"]({},o,b)});var t=s(d,a),u=m(z,{dataIDs:t,mirroredEnvironment:l,mirroredParentVariables:o,refetchFragmentRefs:{},refetchVariables:null}),w=u[0],x=u[1],y=n(!1),A=n(null),B=function(){A.current&&(A.current.dispose(),A.current=null)};k(function(){return function(){y.current=!0,B()}},[]);(l!==w.mirroredEnvironment||!(i||(i=b("areEqual")))(o,w.mirroredParentVariables)||!(i||(i=b("areEqual")))(w.dataIDs,t))&&(B(),x({environment:l,dataIDs:t,parentVariables:o,type:"reset"}));u=j(function(a,c){__p&&__p();if(y.current===!0){b("warning")(!1,"Relay: Unexpected fetch on unmounted component `%s`. It looks like some instances of your container still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.",h);return null}a=q(f.operation,a);var d=r(f,a),g=null,i=l.retain(d),j={dispose:function(){var a=g;g=null;a&&a.unsubscribe();i.dispose()}},k=function(){__p&&__p();var a=c&&c.force?{force:!0}:{},b={complete:function(){B(),x({type:"complete"}),c&&c.onComplete&&c.onComplete(null)},error:function(a){function b(b){return a.apply(this,arguments)}b.toString=function(){return a.toString()};return b}(function(a){B(),x({type:"abort"}),c&&c.onComplete&&c.onComplete(a)}),next:function(){var a=l.lookup(d.fragment);x({fragmentRefs:e(a.data),type:"next"})},unsubscribe:function(){if(y.current===!0)return;B();x({type:"abort"})}};g=p(l,d,{networkCacheConfig:a}).subscribe(b);return j};B();A.current=k();x({type:"fetch",refetchVariables:a});return j},[l]);return b("React").jsx(g,babelHelpers["extends"]({},a,w.refetchFragmentRefs,{forwardedRef:c,isLoading:A.current!=null,parentVariables:(t=w.refetchVariables)!=null?t:o,refetch:u}))};a.displayName=h;c=b("React").forwardRef(a);return c}function y(a,c,d,e,f){__p&&__p();return function(g){__p&&__p();var h,i=g.forwardedRef,k=g.isLoading,m=g.parentVariables,n=g.refetch;g.relay;var p=babelHelpers.objectWithoutPropertiesLoose(g,["forwardedRef","isLoading","parentVariables","refetch","relay"]),q=b("relay-experimental/useRelayEnvironment")();g=e(p);var r=C(c,d,g),s=j(function(a,c){if(r==null||!r.hasMore){c&&c.onComplete&&c.onComplete(null);return null}var e=o.get(),g=e.END_CURSOR;e=e.START_CURSOR;var h=r.cursor;b("warning")(h,"Relay: Cannot `loadMore` without valid `%s` (got `%s`)",d===w?g:e,h);return n(f(p,{count:a,cursor:h},m),c)},[r,n,p,m]),t=j(function(a,b,c){return n(f(p,{count:a,cursor:null},babelHelpers["extends"]({},m,b||{})),babelHelpers["extends"]({},c,{force:!0}))},[n,p,m]),u=!!(r&&r.hasMore&&r.cursor);g=l(function(){return{environment:q,hasMore:u,isLoading:k,loadMore:s,refetchConnection:t}},[q,u,k,s,t]);return b("React").jsx(a,babelHelpers["extends"]({},p,{ref:(h=p.componentRef)!=null?h:i,relay:g}))}}function z(a,b){__p&&__p();var c;switch(b.type){case"reset":c={dataIDs:b.dataIDs,mirroredEnvironment:b.environment,mirroredParentVariables:b.parentVariables,refetchFragmentRefs:{},refetchVariables:null};break;case"fetch":c=babelHelpers["extends"]({},a,{refetchVariables:b.refetchVariables});break;case"abort":c=babelHelpers["extends"]({},a);break;case"next":c=babelHelpers["extends"]({},a,{refetchFragmentRefs:b.fragmentRefs});break;case"complete":default:c=babelHelpers["extends"]({},a);break}return c}function A(a){var b=null;for(var c in a){var d=a[c];d=d&&d.metadata&&d.metadata.connection;d!=null&&(Array.isArray(d)||g(0,12568,typeof d),d.length===1||g(0,12569,c,d.length),b&&g(0,12570),b=babelHelpers["extends"]({},d[0],{fragmentName:c}))}b!==null||g(0,12571);return b}function B(a){__p&&__p();var b=a.path;b||g(0,12564);return function(c){c=c[a.fragmentName];for(var d=0;d<b.length;d++){if(!c||typeof c!=="object")return null;c=c[b[d]]}return c}}function C(a,c,d){__p&&__p();if(d==null)return null;var e=o.get(),f=e.EDGES,h=e.END_CURSOR,i=e.HAS_NEXT_PAGE,j=e.HAS_PREV_PAGE,k=e.PAGE_INFO;e=e.START_CURSOR;typeof d==="object"||g(0,12562,a,f,k,d);var l=d[f];d=d[k];if(l==null||d==null)return null;Array.isArray(l)||g(0,12563,a,f,l);typeof d==="object"||g(0,12565,a,k,d);f=c===w?d[i]:d[j];d=c===w?d[h]:d[e];if(typeof f!=="boolean"||l.length!==0&&d===void 0){b("warning")(!1,"Relay: Cannot paginate without %s fields in `%s`. Be sure to fetch %s (got `%s`) and %s (got `%s`).",k,a,c===w?i:j,f,c===w?h:e,d);return null}return{cursor:d,edgeCount:l.length,hasMore:f}}e.exports=a}),null);
__d("createSuspenseQueryRenderer_DEPRECATED",["React","react-relay/ReactRelayContext","relay-experimental/useLazyLoadQueryNode","relay-experimental/useMemoOperationDescriptor","relay-experimental/useRelayEnvironment","relay-runtime"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useMemo,h=b("relay-runtime").getRequest;function a(a){__p&&__p();var c=h(a),d="RelaySuspenseQueryRenderer("+c.params.name+")";function e(c){var e=c.UNSTABLE_renderPolicy,f=c.children,h=c.fetchKey,j=c.fetchPolicy;c=c.variables;var k=b("relay-experimental/useRelayEnvironment")();c=b("relay-experimental/useMemoOperationDescriptor")(a,c);var l=g(function(){return i(k)},[k]),m=b("relay-experimental/useLazyLoadQueryNode")({componentDisplayName:d,fetchKey:h,fetchPolicy:j,query:c,renderPolicy:e});return b("React").jsx(b("react-relay/ReactRelayContext").Provider,{value:l,children:g(function(){return f(m)},[f,m])})}e.displayName=d;return e}function i(a){return{environment:a}}e.exports=a}),null);
__d("isRelayFBLocalEnvironment",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.options!=null&&a.options.isLocal===!0?!0:!1}e.exports=a}),null);
__d("relay-experimental/LazyLoadEntryPointContainer_DEPRECATED.react",["react","relay-experimental/preloadQuery_DEPRECATED","relay-experimental/useRelayEnvironment","relay-runtime"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=(g||(g=b("react"))).useMemo,i=b("relay-runtime").stableCopy;function j(a){return(a=JSON.stringify(i(a)))!=null?a:"null"}function k(a,c,d){__p&&__p();var e=null;c.root.getModuleIfRequired()==null&&(e=c.root.load());d=c.getPreloadProps(d);var f=d.queries,g=d.entryPoints;d=d.extraProps;var h={},i={};if(f!=null){var j=Object.keys(f);j.forEach(function(c){var d=f[c],e=d.environmentProviderOptions,g=d.options,i=d.parameters;d=d.variables;var j=a.getEnvironment(e);h[c]=b("relay-experimental/preloadQuery_DEPRECATED")(j,i,d,g,e)})}if(g!=null){j=Object.keys(g);j.forEach(function(b){var c=g[b];if(c==null)return;var d=c.entryPoint;c=c.entryPointParams;i[b]=k(a,d,c)})}return{entryPoints:i,extraProps:(j=d)!=null?j:null,getComponent:function(){var a=c.root.getModuleIfRequired();if(a==null){var b;e=(b=e)!=null?b:c.root.load();throw e}return a},queries:h}}function a(a){__p&&__p();var c=a.entryPoint,d=a.entryPointParams,e=a.props,f=a.environmentProvider,i=b("relay-experimental/useRelayEnvironment")();a=c.getPreloadProps;var l=j(d);a=h(function(){var a;return k((a=f)!=null?a:{getEnvironment:function(){return i}},c,d)},[i,f,a,l]);var m=a.getComponent;l=a.queries;var n=a.entryPoints;a=a.extraProps;var o=h(function(){return m()},[m]);return(g||(g=b("react"))).jsx(o,{entryPoints:n,extraProps:a,props:e,queries:l})}e.exports=a}),null);
__d("relay-experimental/useBlockingPaginationFragment",["invariant","Promise","scheduler","relay-experimental/getPaginationMetadata","relay-experimental/useLoadMoreFunction","relay-experimental/useRefetchableFragmentNode","relay-experimental/useStaticFragmentNodeWarning","warning","react","relay-runtime"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=(h||(h=b("react"))).useCallback,j=h.useEffect,k=h.useRef,l=h.useState,m=b("relay-runtime").getFragment,n=b("relay-runtime").getFragmentIdentifier;function a(a,c,d){__p&&__p();d===void 0&&(d="useBlockingPaginationFragment()");a=m(a);b("relay-experimental/useStaticFragmentNodeWarning")(a,"first argument of "+d);var e=b("relay-experimental/getPaginationMetadata")(a,d),f=e.connectionPathInFragmentData,h=e.fragmentRefPathInResponse,j=e.paginationRequest,k=e.paginationMetadata;e=e.stream;e===!1||g(0,18372);e=b("relay-experimental/useRefetchableFragmentNode")(a,c,d);c=e.fragmentData;var l=e.fragmentRef,p=e.refetch,q=e.disableStoreUpdates;e=e.enableStoreUpdates;var r=n(a,l),s=o({direction:"backward",fragmentNode:a,fragmentRef:l,fragmentIdentifier:r,fragmentData:c,connectionPathInFragmentData:f,fragmentRefPathInResponse:h,paginationRequest:j,paginationMetadata:k,disableStoreUpdates:q,enableStoreUpdates:e,componentDisplayName:d}),t=s[0],u=s[1],v=s[2];s=o({direction:"forward",fragmentNode:a,fragmentRef:l,fragmentIdentifier:r,fragmentData:c,connectionPathInFragmentData:f,fragmentRefPathInResponse:h,paginationRequest:j,paginationMetadata:k,disableStoreUpdates:q,enableStoreUpdates:e,componentDisplayName:d});a=s[0];l=s[1];var w=s[2];r=i(function(a,b){w();v();return p(a,babelHelpers["extends"]({},b,{__environment:void 0}))},[w,v,p]);return{data:c,loadNext:a,loadPrevious:t,hasNext:l,hasPrevious:u,refetch:r}}function o(a){__p&&__p();var c=a.disableStoreUpdates,d=a.enableStoreUpdates,e=babelHelpers.objectWithoutPropertiesLoose(a,["disableStoreUpdates","enableStoreUpdates"]),f=l(null),g=f[0],h=f[1],m=k(null),n=k(null),o=function(){n.current!=null&&(n.current(),n.current=null)};f=function(){o()};var p={complete:o,start:function(){c();var a=new(b("Promise"))(function(a){n.current=function(){m.current=null,a()}});m.current=a;h(a)},next:o,error:o};e=b("relay-experimental/useLoadMoreFunction")(babelHelpers["extends"]({},e,{observer:p,onReset:f}));var q=e[0];p=e[1];f=e[2];if(g!=null&&g===m.current)throw g;j(function(){g!==m.current&&d()},[g]);e=i(function(){b("scheduler").unstable_getCurrentPriorityLevel()<b("scheduler").unstable_NormalPriority&&b("warning")(!1,"Relay: Unexpected call to `%s` at a priority higher than expected on fragment `%s` in `%s`. It looks like you tried to call `refetch` under a high priority update, but updates that can cause the component to suspend should be scheduled at normal priority. Make sure you are calling `refetch` inside `startTransition()` from the `useSuspenseTransition()` hook.",a.direction==="forward"?"loadNext":"loadPrevious",a.fragmentNode.name,a.componentDisplayName);return q.apply(void 0,arguments)},[q,a.componentDisplayName,a.direction,a.fragmentNode.name]);return[e,p,f]}e.exports=a}),null);
__d("relay-experimental/useIsParentQueryInFlight",["invariant","react","relay-experimental/useRelayEnvironment","relay-experimental/useStaticFragmentNodeWarning","relay-runtime"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("relay-runtime").__internal.getObservableForActiveRequest,j=b("relay-runtime").getFragment,k=b("relay-runtime").getSelector,l=(h||(h=b("react"))).useEffect,m=h.useState,n=h.useMemo;function a(a,c){__p&&__p();var d=b("relay-experimental/useRelayEnvironment")(),e=j(a);b("relay-experimental/useStaticFragmentNodeWarning")(e,"first argument of useIsParentQueryInFlight()");var f=n(function(){var a=k(e,c);if(a==null)return null;a.kind==="SingularReaderSelector"||g(0,18405);return i(d,a.owner)},[d,e,c]);a=m(f!=null);var h=a[0],o=a[1];l(function(){var a;o(f!=null);if(f!=null){var b=function(){o(!1)};a=f.subscribe({complete:b,error:b})}return function(){a&&a.unsubscribe()}},[f]);return h}e.exports=a}),null);
__d("CometRelay",["requireCond","CometRelayQueryProfiler","cr:894130","RelayFBCometMutations","RelayFBEnvironmentActorID","RelayFBMatchContainer","RelayFBModuleResource","RelayFBSubscription","configureRelayForWWW","createSuspenseFragmentContainer_DEPRECATED","createSuspensePaginationContainer_DEPRECATED","createSuspenseQueryRenderer_DEPRECATED","enqueueMutation","isRelayFBLocalEnvironment","relay-experimental/EntryPointContainer.react","relay-experimental/fetchQuery","relay-experimental/LazyLoadEntryPointContainer_DEPRECATED.react","relay-experimental/loadQuery","relay-experimental/prepareEntryPoint","relay-experimental/ProfilerContext","relay-experimental/RelayEnvironmentProvider","relay-experimental/useBlockingPaginationFragment","relay-experimental/useFragment","relay-experimental/useIsParentQueryInFlight","relay-experimental/useLazyLoadQuery","relay-experimental/usePaginationFragment","relay-experimental/usePreloadedQuery","relay-experimental/useRefetchableFragment","relay-experimental/useRelayEnvironment","relay-experimental/useSubscribeToInvalidationState","relay-runtime","useFBMutation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;a=b("RelayFBEnvironmentActorID").getActorID;c=b("RelayFBEnvironmentActorID").useActorID;d=b("enqueueMutation").enqueueMutation;f=b("relay-experimental/loadQuery").loadQuery;var h=(g=b("relay-runtime")).ConnectionHandler,i=g.MutationTypes,j=g.RangeOperations,k=g.RelayFeatureFlags,l=g.VIEWER_ID,m=g.applyOptimisticMutation,n=g.commitLocalUpdate,o=g.commitMutation,p=g.createPayloadFor3DField,q=g.generateUniqueClientID,r=g.graphql,s=g.readInlineData;g=g.requestSubscription;b("configureRelayForWWW")();b("cr:894130")!=null&&b("cr:894130").install();b("CometRelayQueryProfiler").install();e.exports={ConnectionHandler:h,EntryPointContainer:b("relay-experimental/EntryPointContainer.react"),LazyLoadEntryPointContainer_DEPRECATED:b("relay-experimental/LazyLoadEntryPointContainer_DEPRECATED.react"),MatchContainer:b("RelayFBMatchContainer"),ModuleResource:b("RelayFBModuleResource"),MutationTypes:i,ProfilerContext:b("relay-experimental/ProfilerContext"),RangeOperations:j,RelayEnvironmentProvider:b("relay-experimental/RelayEnvironmentProvider"),RelayFeatureFlags:k,VIEWER_ID:l,applyOptimisticMutation:m,commitLocalUpdate:n,createPayloadFor3DField:p,commitMutation:b("RelayFBCometMutations").addFBisms(o),enqueueMutation:b("RelayFBCometMutations").addFBisms(d),createSuspenseFragmentContainer_DEPRECATED:b("createSuspenseFragmentContainer_DEPRECATED"),createSuspensePaginationContainer_DEPRECATED:b("createSuspensePaginationContainer_DEPRECATED"),createSuspenseQueryRenderer_DEPRECATED:b("createSuspenseQueryRenderer_DEPRECATED"),fetchQuery:b("relay-experimental/fetchQuery"),generateUniqueClientID:q,graphql:r,preloadQuery:f,prepareEntryPoint:b("relay-experimental/prepareEntryPoint"),readInlineData:s,requestSubscription:b("RelayFBSubscription").addFBisms(g),useBlockingPaginationFragment:b("relay-experimental/useBlockingPaginationFragment"),useFragment:b("relay-experimental/useFragment"),useIsParentQueryInFlight:b("relay-experimental/useIsParentQueryInFlight"),usePaginationFragment:b("relay-experimental/usePaginationFragment"),usePreloadedQuery:b("relay-experimental/usePreloadedQuery"),useLazyLoadQuery:b("relay-experimental/useLazyLoadQuery"),useRefetchableFragment:b("relay-experimental/useRefetchableFragment"),useSubscribeToInvalidationState:b("relay-experimental/useSubscribeToInvalidationState"),useRelayEnvironment:function(){return b("relay-experimental/useRelayEnvironment")()},useActorID:c,useMutation:b("useFBMutation"),getActorID:a,isLocalEnvironment:b("isRelayFBLocalEnvironment")}}),null);
__d("getTextDirectionAttribute",["requireCond","cr:1080422"],(function(a,b,c,d,e,f){"use strict";function a(a){var c="auto";b("cr:1080422")!=null&&(c=b("cr:1080422").isDirectionRTL(a)?"rtl":"ltr");return c}e.exports=a}),null);
__d("CometTextWithEntities.react",["fbt","BaseText.react","CometLink.react","CometTrackingNodeProvider.react","React","UnicodeUtils","getTextDirectionAttribute","killswitch","stylex"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=b("React").useCallback,k=b("React").useState,l=.6,m={auto:{textAlign:"start"},ltr:{textAlign:"left"},rtl:{textAlign:"right"}};function n(a){var b=[];for(var c=0;c<a.length;c++){var d=a[c];d!=null&&d.offset!=null&&d.length!=null&&d.entity!=null&&d.entity.__typename!=null&&b.push({entity:d.entity,length:d.length,offset:d.offset})}return b}function o(a,b,c){return a.map(function(a){return babelHelpers["extends"]({},a,{offset:a.offset-b})}).filter(function(a){return a.offset>=0&&a.offset<c})}function p(a){var c=a.ranges;a=a.text;var d=0;return a.split("\n").map(function(a){var e=o(c,d,(h||(h=b("UnicodeUtils"))).strlen(a));d+=h.strlen(a)+1;return{ranges:e,text:a}}).filter(function(a){return a.text.trim()!==""})}function q(a,c){__p&&__p();var d=a.ranges;a=a.text;var e=0;return a.split(/(?=\n\s*\n)/).map(function(a){var f,g;f=(f=a.match(/(^\n\s*\n)?([^]*$)/))!=null?f:[];g=(g=f[1])!=null?g:"";f=(f=f[2])!=null?f:a;g=o(d,e+g.length,(h||(h=b("UnicodeUtils"))).strlen(f));e+=h.strlen(a);return c?p({ranges:g,text:f}):{ranges:g,text:f}})}function r(a,c,d){var e=null,f=a.split("\n");(h||(h=b("UnicodeUtils"))).strlen(a)>c&&(e=c);if(f.length>d){a=f.slice(0,d).join("\n").length;e!==null?e=Math.min(a,e):e=a}return e}function a(a){__p&&__p();var c=a.maxLength;c=c===void 0?800:c;var d=a.maxLines;d=d===void 0?8:d;var e=a.ranges;e=e===void 0?[]:e;var f=a.text,p=a.truncationFactor_DEPRECATED;p=p===void 0?l:p;var s=a.truncationStyle;s=s===void 0?"none":s;var t=a.withLineBreaks;t=t===void 0?!1:t;var u=a.withParagraphs;u=u===void 0?!1:u;var v=a.onToggleExpanded,w=a.seeMoreLinkProps,x=a.expanded,y=a.preserveWhiteSpace,z=y===void 0?!1:y;y=a.suffix;var A=babelHelpers.objectWithoutPropertiesLoose(a,["maxLength","maxLines","ranges","text","truncationFactor_DEPRECATED","truncationStyle","withLineBreaks","withParagraphs","onToggleExpanded","seeMoreLinkProps","expanded","preserveWhiteSpace","suffix"]);a=k((a=x)!=null?a:!1);var B=a[0],C=a[1];a=x!=null?x:B;x=j(function(){C(function(a){return!a}),v!=null&&v()},[v]);B=n(e);e=f;var D=null;if(s!=="none"&&!a){c=r(f,c*p,d);if(c!=null){e=(h||(h=b("UnicodeUtils"))).substring(f,0,c);B=o(B,0,h.strlen(e));switch(s){case"ellipsis-only":D=b("React").jsx(b("React").Fragment,{children:g._("...")},"seemore");break;case"see-more":case"see-more-and-less":D=b("React").jsxs(b("React").Fragment,{children:[g._("...")," ",b("React").jsx(b("CometLink.react"),babelHelpers["extends"]({onClick:x,testid:"CometTextWithEntities-seeMoreBtn"},w,{children:g._("\u0e14\u0e39\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21")}))]},"seemore")}}}else s==="see-more-and-less"&&a&&(D=b("React").jsxs(b("React").Fragment,{children:[" ",b("React").jsx(b("CometLink.react"),{onClick:x,children:g._("\u0e14\u0e39\u0e19\u0e49\u0e2d\u0e22\u0e25\u0e07")})]},"seemore"));D=b("React").jsx(b("CometTrackingNodeProvider.react"),{trackingNode:44,children:D});if(!u)return b("React").jsxs(b("React").Fragment,{children:[b("React").jsx(b("BaseText.react"),babelHelpers["extends"]({ranges:B,text:e},A)),D]});var E=q({ranges:B,text:e},t);b("killswitch")("COMET_MESSAGE_EMPTY_PARAGRAPH_FILTERING")||(E=E.filter(function(a){return!Array.isArray(a)||a.length>0}));var F=y!=null?b("React").jsxs(b("React").Fragment,{children:[" ",y]}):null;return b("React").jsx(b("React").Fragment,{children:E.map(function(a,c){return b("React").jsx("div",{className:(i||(i=b("stylex"))).dedupe({"margin-top-1":"kvgmc6g5","margin-end-1":"cxmmr5t8","margin-bottom-1":"oygrvhab","margin-start-1":"hcukyx3x","word-wrap-1":"c1et5uql"},c!==0?{"margin-top-1":"o9v6fnle"}:null,z?{"white-space-1":"ii04i59q"}:null),children:Array.isArray(a)?a.map(function(d,e){var f=d.ranges;d=d.text;var g=b("getTextDirectionAttribute")(d);return b("React").jsxs("div",{dir:g,style:m[g],children:[b("React").jsx(b("BaseText.react"),babelHelpers["extends"]({ranges:f,text:d},A)),c===E.length-1&&e===a.length-1?b("React").jsxs(b("React").Fragment,{children:[D,F]}):null]},e)}):b("React").jsxs(b("React").Fragment,{children:[b("React").jsx(b("BaseText.react"),babelHelpers["extends"]({ranges:a.ranges,text:a.text},A)),c===E.length-1?b("React").jsxs(b("React").Fragment,{children:[D,F]}):null]})},c)})})}e.exports=a}),null);
__d("cometNormalizeTextEntityRanges",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){return a==null?[]:a.map(function(a){var c=a.length,d=a.offset;a=babelHelpers.objectWithoutPropertiesLoose(a,["length","offset"]);return{entity:babelHelpers["extends"]({},a,{__typename:b}),length:c,offset:d}})}e.exports=a}),null);
__d("CometTextWithEntitiesRelay.react",["CometRelay","CometTextWithEntities.react","React","cometNormalizeTextEntityRanges","CometTextWithEntitiesRelay_entity.graphql","CometTextWithEntitiesRelay_textWithEntities.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h;b("CometRelay").graphql;var i=b("CometRelay").useFragment;g!==void 0?g:g=b("CometTextWithEntitiesRelay_entity.graphql");function a(a){var c=a.textWithEntities;a=babelHelpers.objectWithoutPropertiesLoose(a,["textWithEntities"]);c=i(h!==void 0?h:h=b("CometTextWithEntitiesRelay_textWithEntities.graphql"),c);var d=c.aggregated_ranges,e=c.image_ranges,f=c.inline_style_ranges,g=c.ranges;c=c.text;if(c==null)return null;g=[].concat(g,b("cometNormalizeTextEntityRanges")(d,"Aggregate"),b("cometNormalizeTextEntityRanges")(f,"Inline"),b("cometNormalizeTextEntityRanges")(e,"Image"));return b("React").jsx(b("CometTextWithEntities.react"),babelHelpers["extends"]({},a,{ranges:g,text:c}))}e.exports=a}),null);