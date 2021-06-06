if (self.CavalryLogger) { CavalryLogger.start_js(["QKl2i"]); }

__d("UFIAsyncWrapper",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").Fragment}),null);
__d("UFIDispatcher",["ReactDispatcher_DEPRECATED","UFISharedDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.dispatch=function(c){a.prototype.dispatch.call(this,c),b("UFISharedDispatcher").dispatch(c)};return c}(b("ReactDispatcher_DEPRECATED"));e.exports=a}),null);
__d("UFINewCommentNotifier",["Arbiter","UFIFeedbackTargets","UFIUserActions"],(function(a,b,c,d,e,f){"use strict";a={onNewComment:function(a,c,d,e,f,g){b("UFIUserActions").addComment(c.ftentidentifier,d.visibleValue,d.encodedValue,{source:c.source,ufiinstanceid:c.instanceid,target:e,replyid:f,rootid:c.rootid,attachedphoto:d.attachedPhoto,attachedvideo:d.attachedVideo,attachedfile:d.attachedFile,attachedsticker:d.attachedSticker,feedcontext:c.feedcontext,timestamp:g,feedbackReferrer:c.feedbackReferrer,isMarkdown:d.isMarkdown,fluentContentToken:c.fluentContentToken,isActiveLivingRoom:c.isActiveLivingRoom,livingRoomID:c.livingRoomID,isLiveVOD:c.isLiveVOD,isLivingRoomWithReplies:c.isLivingRoomWithReplies,islivestreaming:c.islivestreaming,liveVideoQuickCommentQuality:d.liveVideoQuickCommentQuality,photoTextTagID:c.photoTextTagID,isPhotoTag:c.isPhotoTag,photoFBID:c.photoFBID,photoTagX:c.photoTagX,photoTagY:c.photoTagY,privacyValue:d.privacy_value,section:d.section,selectedInsightPoint:d.selectedInsightPoint,attachedshareurl:d.attachedShareURL,isBroadcasterUFI:c.isBroadcasterUFI,enableVODCommentTimestamps:c.enableVODCommentTimestamps,trackingID:d.trackingID,delightRanges:d.delightRanges}),b("UFIFeedbackTargets").getFeedbackTarget(c.ftentidentifier,function(f){a&&b("Arbiter").inform("ufi/comment",{ft_id:f.entidentifier,target:e,form:a,isinverted:f.isranked||c.islivestreaming||c.isActiveLivingRoom,isPhotoTag:c.isPhotoTag,photoTextTagID:c.photoTextTagID,photoTagX:c.photoTagX,photoTagY:c.photoTagY,commentString:d.visibleValue})})}};e.exports=a}),null);
__d("UFICallbackStore",["FluxStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.__onDispatch=function(a){var b=a.type;a=babelHelpers.objectWithoutPropertiesLoose(a,["type"]);this.__emitter.emit(b,a)};c.on=function(a,b){return this.__emitter.addListener(a,b)};c.remove=function(){this.__emitter.removeAllListeners()};return b}(b("FluxStore"));a.__moduleID=e.id;e.exports=a}),null);
__d("UFIReactionStore",["Arbiter","FluxStore","UFIReactionTypes","UFIUserActions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.__onDispatch=function(a){switch(a.type){case"story_change_reaction":b("UFIUserActions").changeReaction(a.contextArgs.ftentidentifier,a.reactionType,{rootid:a.contextArgs.rootid,source:a.contextArgs.source,feedbackReferrer:a.contextArgs.feedbackReferrer,fluentContentToken:a.contextArgs.fluentContentToken,isLiveVOD:a.contextArgs.isLiveVOD,islivestreaming:a.contextArgs.islivestreaming,instanceid:a.contextArgs.instanceid},a.target,a.sphericalYaw,a.sphericalPitch);b("Arbiter").inform("ufi/reactionButtonClicked",{ft_id:a.contextArgs.ftentidentifier,like_action:a.reactionType===b("UFIReactionTypes").LIKE,reaction_type:a.reactionType,target:a.target});break}};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=a}),null);
__d("UFICommentLink.react",["cx","fbt","React","TrackingNodes","emptyFunction","prop-types"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=h._("\u0e41\u0e2a\u0e14\u0e07\u0e04\u0e27\u0e32\u0e21\u0e04\u0e34\u0e14\u0e40\u0e2b\u0e47\u0e19"),c='{ "tn": "'+b("TrackingNodes").encodeTN(b("TrackingNodes").types.COMMENT_LINK)+'", "type": 24 }';return b("React").jsx("a",{className:"comment_link _5yxe","data-testid":"fb-ufi-commentlink",role:"button",href:this.props.href?this.props.href:"#",title:a,ajaxify:this.props.ajaxify,rel:this.props.rel,onClick:this.props.onClick,"data-ft":c,ref:"root",children:this.props.children})};return c}(b("React").Component);a.propTypes={onClick:(c=b("prop-types")).func,href:c.string,ajaxify:c.string,rel:c.string};a.defaultProps={onClick:b("emptyFunction")};e.exports=a}),null);
__d("UFIDispatcherContext.react",["React","prop-types"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getChildContext=function(){return{dispatch:this.props.dispatcher.dispatch.bind(this.props.dispatcher),stores:this.props.stores}};c.render=function(){return this.props.children};return b}(b("React").Component);a.childContextTypes={dispatch:b("prop-types").func,stores:b("prop-types").object};e.exports=a}),null);
__d("PostsByOtherPreviewObject",["csx","Parent"],(function(a,b,c,d,e,f,g){a={getRoot:function(a){return b("Parent").bySelector(a,"._5kjo")}};e.exports=a}),null);
__d("CommentPrelude",["BanzaiODS","CSS","FBLogger","Parent","clickRefAction","ifRequired"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c){if(a==="ufi.react"||a==="ufi_mentions_input.react"||a==="ufi_controller"||a==="action_link_bling"||a==="action_link_timeline_bling")return;b("FBLogger")("ufi").warn("Deprecated CommentPrelude action %s called from ref %s",c||"unknown",a||"unknown");b("BanzaiODS").bumpEntityKey(2966,"comment_prelude",a)}function a(a,c,d){g(d,"click");var e=b("Parent").byTag(a,"form");if(!e||!b("CSS").hasClass(e,"collapsible_comments"))return;b("clickRefAction")("ufi",a,null,"FORCE");return h(a,c,d)}function h(a,c,d){__p&&__p();g(d,"expand");a=b("Parent").byTag(a,"form");if(!a||!b("CSS").hasClass(a,"collapsible_comments"))return;i(a,d);if(c!==!1){var e=a.add_comment_text_text||a.add_comment_text;d=e.length;d&&(!b("Parent").byClass(e[d-1],"UFIReplyList")?e=e[d-1]:!b("Parent").byClass(e[0],"UFIReplyList")?e=e[0]:e=null);e&&(e.focus(),b("ifRequired")("FbFeedCommentUFIScroller",function(a){return a.reveal(e)}))}return!1}function i(a,c){g(c,"uncollapse");if(!a||!b("CSS").hasClass(a,"collapsible_comments"))return;var d=b("CSS").removeClass.bind(null,a,"collapsed_comments");b("ifRequired")("ScrollAwareDOM",function(b){return b.monitor(a,d)},function(){return d()})}function c(a){var c=a.getAttribute("data-comment-prelude-ref");g(c,"blingbox");c=b("Parent").byTag(a,"form");if(!c||!b("CSS").hasClass(c,"collapsible_comments"))return;b("CSS").toggleClass(c,"collapsed_comments")}d={click:a,expand:h,uncollapse:i,onBlingboxClick:c,logRef:g};e.exports=d}),null);