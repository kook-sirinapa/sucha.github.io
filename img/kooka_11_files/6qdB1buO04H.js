if (self.CavalryLogger) { CavalryLogger.start_js(["f2nOW"]); }

__d("ProfileCometTileLifeEventsViewItem_profileTileItem.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Variable",name:"scale",variableName:"scale"};return{kind:"Fragment",name:"ProfileCometTileLifeEventsViewItem_profileTileItem",type:"ProfileTileItem",metadata:null,argumentDefinitions:[{kind:"RootArgument",name:"scale",type:"Float"}],selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"Story",selections:[{kind:"LinkedField",alias:null,name:"actors",storageKey:null,args:null,concreteType:null,plural:!0,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"attachments",storageKey:null,args:null,concreteType:"StoryAttachment",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"all_subattachments",storageKey:"all_subattachments(first:2)",args:[{kind:"Literal",name:"first",value:2}],concreteType:"SubattachmentsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"SubattachmentsEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"StoryAttachment",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"media",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"LinkedField",alias:"photo_image",name:"image",storageKey:null,args:[a],concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null}]},{kind:"InlineFragment",type:"Photo",selections:[{kind:"ScalarField",alias:null,name:"accessibility_caption",args:null,storageKey:null}]}]}]}]}]},{kind:"LinkedField",alias:null,name:"style_infos",storageKey:null,args:null,concreteType:null,plural:!0,selections:[{kind:"InlineFragment",type:"LifeEventAttachmentStyleInfo",selections:[{kind:"ScalarField",alias:null,name:"icon_url",args:[{kind:"Literal",name:"color",value:"WHITE"},a,{kind:"Literal",name:"size",value:"DP20"}],storageKey:null},{kind:"ScalarField",alias:null,name:"life_event_title",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"pretty_date",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"third_person_title",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"use_standard_media_layout",args:null,storageKey:null}]}]}]},{kind:"ScalarField",alias:null,name:"url",args:[{kind:"Literal",name:"site",value:"www"}],storageKey:'url(site:"www")'}]}]}]}}();e.exports=a}),null);
__d("ProfileCometTileLifeEventsView_viewStyleRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},b={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},c={kind:"Variable",name:"scale",variableName:"scale"};return{kind:"SplitOperation",name:"ProfileCometTileLifeEventsView_viewStyleRenderer$normalization",metadata:{derivedFrom:"ProfileCometTileLifeEventsView_viewStyleRenderer"},selections:[{kind:"LinkedField",alias:null,name:"view",storageKey:null,args:null,concreteType:"ProfileTileView",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"profile_tile_items",storageKey:null,args:null,concreteType:"ProfileTileItemsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"nodes",storageKey:null,args:null,concreteType:"ProfileTileItem",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:null,plural:!1,selections:[a,b,{kind:"InlineFragment",type:"Story",selections:[{kind:"LinkedField",alias:null,name:"actors",storageKey:null,args:null,concreteType:null,plural:!0,selections:[a,b]},{kind:"LinkedField",alias:null,name:"attachments",storageKey:null,args:null,concreteType:"StoryAttachment",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"all_subattachments",storageKey:"all_subattachments(first:2)",args:[{kind:"Literal",name:"first",value:2}],concreteType:"SubattachmentsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"SubattachmentsEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"StoryAttachment",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"media",storageKey:null,args:null,concreteType:null,plural:!1,selections:[a,{kind:"LinkedField",alias:"photo_image",name:"image",storageKey:null,args:[c],concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null}]},{kind:"InlineFragment",type:"Photo",selections:[{kind:"ScalarField",alias:null,name:"accessibility_caption",args:null,storageKey:null}]},b,{kind:"InlineFragment",type:"GenericAttachmentMedia",selections:[b]}]}]}]}]},{kind:"LinkedField",alias:null,name:"style_infos",storageKey:null,args:null,concreteType:null,plural:!0,selections:[a,{kind:"InlineFragment",type:"LifeEventAttachmentStyleInfo",selections:[{kind:"ScalarField",alias:null,name:"icon_url",args:[{kind:"Literal",name:"color",value:"WHITE"},c,{kind:"Literal",name:"size",value:"DP20"}],storageKey:null},{kind:"ScalarField",alias:null,name:"life_event_title",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"pretty_date",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"third_person_title",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"use_standard_media_layout",args:null,storageKey:null}]}]}]},{kind:"ScalarField",alias:null,name:"url",args:[{kind:"Literal",name:"site",value:"www"}],storageKey:'url(site:"www")'}]}]}]}]},b]}]}}();e.exports=a}),null);
__d("ProfileCometTileLifeEventsView_viewStyleRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"ProfileCometTileLifeEventsView_viewStyleRenderer",type:"ProfileTileViewLifeEventsRenderer",metadata:null,argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"view",storageKey:null,args:null,concreteType:"ProfileTileView",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"profile_tile_items",storageKey:null,args:null,concreteType:"ProfileTileItemsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"nodes",storageKey:null,args:null,concreteType:"ProfileTileItem",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]},{kind:"FragmentSpread",name:"ProfileCometTileLifeEventsViewItem_profileTileItem",args:null}]}]}]}]};e.exports=a}),null);
__d("ProfileCometTileLifeEventsViewItem.react",["ix","CometAspectRatioContainer.react","CometImage.react","CometImageCover.react","CometPressable.react","CometRelay","ProfileCometContext","React","TetraIcon.react","TetraText.react","TetraTextPairing.react","fbicon","getRoundedCorners","stylex","ProfileCometTileLifeEventsViewItem_profileTileItem.graphql"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i;b("CometRelay").graphql;var j=b("CometRelay").useFragment,k=b("React").useContext,l=b("getRoundedCorners").CORNERS,m=b("getRoundedCorners").hasCorner,n={borderBottomEndRadius:{borderBottomEndRadius:"uo3d90p7"},borderBottomStartRadius:{borderBottomStartRadius:"l82x9zwi"},borderTopEndRadius:{borderTopEndRadius:"pw54ja7n"},borderTopStartRadius:{borderTopStartRadius:"ue3kfks5"},boxShadow:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",boxShadow:"oaz4zybt"},gridImage:{width:"n99xedck"},icon:{alignItems:"bp9cbjyn",backgroundColor:"is6700om",borderTop:"daafqeya",borderEnd:"fe6wqiwt",borderBottom:"qh2uoj65",borderStart:"ke9llt82",borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",display:"j83agx80",height:"qypqp5cg",justifyContent:"taijpn5t",marginEnd:"ad2k81qe",marginBottom:"myj7ivm5",marginStart:"f9o22wc5",marginTop:"sxpk6l6v",width:"q676j6op"},iconWrapper:{position:"l9j0dhe7",textAlign:"oqcyycmt"},image:{display:"j83agx80",height:"me31hnl3",width:"k4urcfbm"},imageContainer:{display:"j83agx80",flexDirection:"btwxx1t3"},itemContent:{display:"j83agx80",flexDirection:"cbu4d94t",height:"datstx6m",textAlign:"oqcyycmt"},itemContentNoMedia:{justifyContent:"taijpn5t"},itemText:{marginTop:"aov4n071",marginEnd:"oi9244e8",marginBottom:"bi6gxh9e",marginStart:"h676nmdw"},pressable:{height:"datstx6m",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",width:"k4urcfbm"}};function a(a){__p&&__p();var c,d,e,f,o=a.profileTileItem,p=a.roundCorner;a=j(h!==void 0?h:h=b("ProfileCometTileLifeEventsViewItem_profileTileItem.graphql"),o);o=k(b("ProfileCometContext"));o=o.profileID;c=(c=(((c=a.node)==null?void 0:c.actors)||[])[0])==null?void 0:c.id;d=((a==null?void 0:(d=a.node)==null?void 0:d.attachments)||[])[0];var q=((d==null?void 0:d.style_infos)||[])[0];a=(a==null?void 0:(a=a.node)==null?void 0:a.url)||"";e=(e=((d==null?void 0:(e=d.all_subattachments)==null?void 0:e.edges)||[])[0])==null?void 0:(e=e.node)==null?void 0:e.media;f=e==null?void 0:(f=e.photo_image)==null?void 0:f.uri;e=(e==null?void 0:e.accessibility_caption)||"";var r=f!=null,s=q.icon_url,t=q.use_standard_media_layout,u=null;if(t===!0){d=(d=((d==null?void 0:(t=d.all_subattachments)==null?void 0:t.edges)||[])[1])==null?void 0:(t=d.node)==null?void 0:t.media;t=d==null?void 0:(t=d.photo_image)==null?void 0:t.uri;d=(d==null?void 0:d.accessibility_caption)||"";f!=null&&t!=null&&(u=b("React").jsxs("div",{className:(i||(i=b("stylex")))(n.imageContainer),children:[b("React").jsx("div",{className:i(n.gridImage),children:b("React").jsx(b("CometImageCover.react"),{alt:e,src:f})}),b("React").jsx("div",{className:i(n.gridImage),children:b("React").jsx(b("CometImageCover.react"),{alt:d,src:t})})]}))}else f!=null&&(u=b("React").jsx("div",{className:(i||(i=b("stylex")))(n.image),children:b("React").jsx(b("CometImageCover.react"),{alt:e,src:f})}));d=[l.BOTTOM_END,l.BOTTOM_START,l.TOP_END,l.TOP_START].map(function(a){return m(p,a)});t=d[0];e=d[1];f=d[2];d=d[3];return b("React").jsx(b("CometPressable.react"),{display:"block",linkProps:{url:a},xstyle:[n.pressable,t&&n.borderBottomEndRadius,e&&n.borderBottomStartRadius,f&&n.borderTopEndRadius,d&&n.borderTopStartRadius],children:b("React").jsxs(b("CometAspectRatioContainer.react"),{aspectRatio:2/3,children:[b("React").jsxs("div",{className:(i||(i=b("stylex")))(n.itemContent,r?null:n.itemContentNoMedia),children:[u,b("React").jsx("div",{className:i(n.iconWrapper),children:b("React").jsx("div",{className:i(n.icon),children:s!=null?b("React").jsx(b("CometImage.react"),{height:20,src:s,width:20}):b("React").jsx(b("TetraIcon.react"),{color:"white",icon:b("fbicon")._(g("652649"),20)})})}),b("React").jsx("div",{className:i(n.itemText),children:b("React").jsx(b("TetraTextPairing.react"),{body:b("React").jsx(b("TetraText.react"),{type:"headlineEmphasized4",children:(a=o!==c?q.third_person_title:q.life_event_title)!=null?a:""}),bodyLineLimit:3,level:3,meta:b("React").jsx(b("TetraText.react"),{type:"body4",children:(r=q.pretty_date)!=null?r:""})})})]}),b("React").jsx("div",{className:i(n.boxShadow,t&&n.borderBottomEndRadius,e&&n.borderBottomStartRadius,f&&n.borderTopEndRadius,d&&n.borderTopStartRadius)})]})})}e.exports=a}),null);
__d("ProfileCometTileLifeEventsView.react",["CometRelay","ProfileCometTileLifeEventsViewItem.react","React","getRoundedCorners","stylex","ProfileCometTileLifeEventsView_viewStyleRenderer.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=2;function a(a){a=a.viewStyleRenderer;a=h(g!==void 0?g:g=b("ProfileCometTileLifeEventsView_viewStyleRenderer.graphql"),a);a=(a=a==null?void 0:(a=a.view)==null?void 0:(a=a.profile_tile_items)==null?void 0:a.nodes)!=null?a:[];var c=b("getRoundedCorners")(a.length,i);return b("React").jsx("div",{className:"dlv3wnog j83agx80",children:a.map(function(a,d){return b("React").jsx("div",{className:"n99xedck cgat1ltu j83agx80",children:b("React").jsx(b("ProfileCometTileLifeEventsViewItem.react"),{profileTileItem:a,roundCorner:c[d]})},((a=a.node)==null?void 0:a.id)||d)})})}e.exports=a}),null);