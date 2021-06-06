if (self.CavalryLogger) { CavalryLogger.start_js(["R+ZMF"]); }

__d("deepFreezeValue",["ImmutableValue"],(function(a,b,c,d,e,f){__p&&__p();function a(a){if(a===null||a===void 0)return;switch(typeof a){case"string":return;case"boolean":return;case"number":return;case"function":return;default:b("ImmutableValue").deepFreezeRootNode(a)}}e.exports=a}),null);
__d("StaticSearchSource",["AbstractSearchSource","SearchSourceCallbackManager","TokenizeUtil","killswitch"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f){__p&&__p();var g;e===void 0&&(e=!b("killswitch")("STATIC_SEARCH_SOURCE_DEFAULT_QUERY_STRING_EXHAUSTED"));f===void 0&&(f=!0);g=a.call(this)||this;g.$StaticSearchSource2=c;g.$StaticSearchSource3=e;g.$StaticSearchSource4=f;g.$StaticSearchSource1=new(b("SearchSourceCallbackManager"))({parseFn:b("TokenizeUtil").parse,matchFn:b("TokenizeUtil").isQueryMatch,indexFn:d});g.$StaticSearchSource1.addLocalEntries(g.$StaticSearchSource2);return g}var d=c.prototype;d.searchImpl=function(a,b,c){!a?b(this.$StaticSearchSource4?this.$StaticSearchSource2:[],a):(this.$StaticSearchSource3&&this.$StaticSearchSource1.setQueryStringAsExhausted(a),this.$StaticSearchSource1.search(a,b))};d.getSearchableEntries=function(){return this.$StaticSearchSource2};return c}(b("AbstractSearchSource"));e.exports=a}),null);
__d("isCurrencyWithSymbolAndThousandsSeparators",["CurrencyConfig","distinctArray"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b){b===void 0&&(b=",");var c=h().find(function(b){return a.startsWith(b)});if(c==null||c==="")return!1;c=a.slice(c.length);return c!=null&&i(c,b)}var g=null;function h(){g=g||b("distinctArray")(Object.values(b("CurrencyConfig").allCurrenciesByCode).map(function(a){return a!=null&&typeof a==="object"?String(a.symbol):null}).filter(Boolean));return g}function i(a,b){return new RegExp("^\\d{1,3}("+b+"\\d{3})*(.d+)?$").test(a)}e.exports=a}),null);
__d("AdsCurrencyFormatter",["Currency","NumberFormatConfig","intlNumUtils","isCurrencyWithSymbolAndThousandsSeparators"],(function(a,b,c,d,e,f){__p&&__p();function g(a){return Math.round(Math.log(a)/Math.LN10)}function h(a,c,d){var e=b("Currency").getFormat(a)||"{symbol}{amount}",f=b("Currency").getSymbol(a)||"";e=e.replace("{symbol}",f).replace("{amount}",c);return d===!0?e+" "+b("Currency").getISO(a):e}function i(a,c,d,e){e===void 0&&(e=!0);a=b("Currency").getOffset(a)||100;e=e?g(a):0;return d===!0?b("intlNumUtils").formatNumberWithThousandDelimiters(c/a,e):b("intlNumUtils").formatNumber(c/a,e)}function j(a,b,c,d,e){e===void 0&&(e=!0);b=i(a,b,d,e);return h(a,b,c)}function k(a,b){return j(a,b)}function a(a,b,c){return i(a,b,c)}function c(a,b){return j(a,b,!0)}function d(a,c){return i(a,c)+" "+b("Currency").getISO(a)}function f(a,b,c){c===void 0&&(c=!0);return j(a,b,!1,!0,c)}function l(a,c){a=b("Currency").getOffset(a)||100;var d=g(a);while(c!==0&&Math.round(Math.abs(c)*Math.pow(10,d)/a)<1)d++;return d}function m(a,c){var d=b("Currency").getOffset(a)||100;d=b("intlNumUtils").formatNumberWithThousandDelimiters(c/d,l(a,c));return h(a,d,!1)}function n(a,c,d){var e=b("Currency").getOffset(a)||100;return h(a,b("intlNumUtils").formatNumberWithThousandDelimiters(c/e,Math.max(d,l(a,c))))}function o(a,b,c){return q(a,b,c,!0)}function p(a,b,c){return q(a,b,c,!1)}function q(a,c,d,e){var f=b("Currency").getOffset(a)||100,i=g(f);i&&c%f===0&&(i=0);d=d===!0?b("intlNumUtils").formatNumberWithThousandDelimiters(c/f,i):b("intlNumUtils").formatNumber(c/f,i);return e===!0?h(a,d,!1):d}function r(a,b,c){return u(k(a,b),k(a,c))}function s(a,b,c,d){if(d-c<b)return k(a,d);else return r(a,c,d)}var t="\u2013";function u(a,b){return a+t+b}function v(a,b,c){return w(a,b,c)||0}function w(a,c,d){a=b("Currency").getOffset(a);c=b("intlNumUtils").parseNumberRaw(c,d,b("NumberFormatConfig").numberDelimiter);return c==null?null:Math.round(c*a)}function x(a,c){a=b("Currency").getOffset(a);a=g(a);c=b("intlNumUtils").parseNumber(c)||0;return+c.toFixed(a)}function y(a,c,d){return v(a,c,d!=null&&d!=""?d:b("NumberFormatConfig").decimalSeparator)}function z(a,c,d){return w(a,c,d!=null&&d!=""?d:b("NumberFormatConfig").decimalSeparator)}function A(a,b,c,d,e){e===void 0&&(e=!0);return j(a,b,c,d,e)}function B(a,c){var d=100;a=b("Currency").getOffset(a)||d;return c/d*a}function C(a,c){__p&&__p();var d=b("Currency").getOffset(a)||100,e=b("Currency").getSymbol(a);d=c/d;var f="";if(d>1e6)d/=1e6,f="M";else if(d>1e3)d/=1e3,f="K";else return q(a,c,!0,!0);d=Math.round(d*10)/10;a=b("intlNumUtils").formatNumber(d,1);return e+a+f}e.exports={formatCurrency:k,formatCurrencyAtLeastOneSigFig:m,formatCurrencyFullFormat:A,formatCurrencyNoSymbol:a,formatCurrencyRange:r,formatCurrencyRangeWithThreshold:s,formatCurrencyWithAtLeastNumberOfDecimalPlacesAndOneSigFig:n,formatCurrencyWithISO:c,formatCurrencyWithISONoSymbol:d,formatCurrencyWithLargerNumber:C,formatCurrencyWithNumberDelimiters:f,formatCurrencyWithOptionalDecimals:o,formatCurrencyWithOptionalDecimalsNoSymbol:p,formatRange:u,isCurrencyWithSymbolAndThousandsSeparators:b("isCurrencyWithSymbolAndThousandsSeparators"),parseCurrency:y,parseOptionalCurrency:z,parsePECurrency:x,replaceWithSymbol:h,replaceOffsetFactorFromAmount:B}}),null);
__d("List.react",["cx","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props,c=a.className,d=a.border,e=a.direction,f=a.spacing,g=a.valign,h=a.edgepadding;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","border","direction","spacing","valign","edgepadding"]);e==="vertical"&&(g=null);e=(e==="vertical"?"_4kg":"")+(e==="horizontal"?" _4ki":"")+(g==="top"?" _509-":"")+(g==="middle"?" _509_":"")+(g==="bottom"?" _50a0":"");var i;(f!=="none"||d!=="none")&&(i=(d==="none"?"_6-i":"")+(d==="light"?" _4ks":"")+(d==="medium"?" _4kt":"")+(d==="dark"?" _4ku":""));var j;f!=="none"&&(j=(h?"":"_6-h")+(f==="small"?" _704":"")+(f==="medium"?" _6-j":"")+(f==="large"?" _703":""));c=b("joinClasses")(c,"uiList",e,i,j);return b("React").jsx("ul",babelHelpers["extends"]({className:c},a))};return c}(b("React").Component);a.propTypes={border:(c=b("prop-types")).oneOf(["none","light","medium","dark"]),spacing:c.oneOf(["none","small","medium","large"]),direction:c.oneOf(["vertical","horizontal"]),valign:c.oneOf(["baseline","top","middle","bottom"]),edgepadding:c.bool};a.defaultProps={border:"medium",spacing:"medium",direction:"vertical",valign:"top",edgepadding:!1};e.exports=a}),null);
__d("ObserveResize.react",["useResizeObserver"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.onResize;a=a.children;c=b("useResizeObserver")(c);return a(c)}e.exports=a}),null);
__d("ResponsiveBlock.react",["cx","ObserveResize.react","React","ResizeEventHandler","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=null,d.$2=null,d.$3=null,d.$4=new(b("ResizeEventHandler"))(function(){if(d.$1==null)return;var a=d.$1.offsetWidth,b=d.$1.offsetHeight;(a!==d.$3||b!==d.$2)&&(d.$3=a,d.$2=b,d.props.onResize(a,b))}),d.$5=function(a,b){b instanceof HTMLElement&&(d.$1=b,d.$4.handleEvent())},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentWillUnmount=function(){this.$4.cancel()};d.render=function(){var a=this.props;a.onResize;var c=a.className,d=a.children,e=babelHelpers.objectWithoutPropertiesLoose(a,["onResize","className","children"]);return b("React").jsx(b("ObserveResize.react"),{onResize:this.$5,children:function(a){return b("React").jsx("div",babelHelpers["extends"]({},e,{className:b("joinClasses")("_4u-c",c),ref:a,children:d}))}})};return c}(b("React").Component);e.exports=a}),null);
__d("PECurrency",["PECurrencyConfig","intlNumUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("PECurrencyConfig").currency_map_for_cc,h=b("PECurrencyConfig").currency_map_for_render,i=100;function j(a){var b=0;a=a;while(a>1)b++,a/=10;return b}function k(a,b,c){var d=h[a].symbol,e=h[a].format||"{symbol}{amount}";c===!0&&d!=a&&(e.indexOf("{symbol}")>=e.indexOf("{amount}")?e+=" ("+a+") ":e+=" "+a);return e.replace("{symbol}",d).replace("{amount}",String(b))}function a(a,c,d){d=babelHelpers["extends"]({showCurrencyCode:!1,showDecimals:!0,showSymbol:!0,stripZeros:!1,thousandSeparator:!1},d);var e=o(a)||0;c=c/i;e=d.showDecimals?j(e):0;d.stripZeros||(c=b("intlNumUtils").formatNumber(c,e));d.thousandSeparator&&(typeof c==="string"&&(c=b("intlNumUtils").parseNumber(c)),c=b("intlNumUtils").formatNumberWithThousandDelimiters(Number(c),e));!d.showSymbol?e=d.showCurrencyCode?c+" "+a:String(c):(typeof c==="number"&&(c=""+c),e=k(a,c,d.showCurrencyCode));return e}function c(a,b,c,d,e){b=l(a,b,!0,c,d,e);switch(a){case"AUD":return"A"+b;case"CAD":return"C"+b;case"HKD":return"HK"+b;case"SGD":return"S"+b;case"COP":return"COP"+b;default:return b}}function l(a,c,d,e,f,g){__p&&__p();d=d!=null?d:!0;e=e!=null?e:!1;f=f!=null?f:!1;g=g!=null?g:!1;var h=o(a)||0,l=Math.abs(c)/i;h=j(h);f||(l=b("intlNumUtils").formatNumber(l,h));g&&(typeof l==="string"&&(l=b("intlNumUtils").parseNumber(l)),l=b("intlNumUtils").formatNumberWithThousandDelimiters(Number(l),f?0:h));!d?g=e?l+" "+a:String(l):(typeof l==="number"&&(l=""+l),g=k(a,l,e));c<0&&(g="-"+g);return g}function d(a,b,c,d,e){return l(a.currency,a.amount,b,c,d,e)}function f(a){a=p(a);return a!=null?Object.keys(a):[]}function m(a){return!h[a]?null:h[a].screen_name}function n(a){return!h[a]?null:h[a].symbol}function o(a){return!h[a]?null:h[a].offset}function p(a){switch(a){case 2:return g;case 1:return h;default:return null}}e.exports={DEFAULT_AMOUNT_OFFSET:i,formatAmount:l,formatAmountWithExtendedSymbol:c,formatAmountX:a,formatCurrencyAmount:d,formatRawAmount:k,getAllCurrencies:f,getCurrencyScreenName:m,getCurrencySymbol:n,getCurrencyOffset:o}}),null);
__d("FluxMapStore",["invariant","FluxReduceStore","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return b("immutable").Map()};d.at=function(a){this.has(a)||g(0,465,a);return this.get(a)};d.has=function(a){return this.getState().has(a)};d.get=function(a){return this.getState().get(a)};d.getAll=function(a,c){__p&&__p();var d=this,e=b("immutable").Set(a),f=c||b("immutable").Map();return f.withMutations(function(a){__p&&__p();for(var b=f,c=Array.isArray(b),g=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(c){if(g>=b.length)break;h=b[g++]}else{g=b.next();if(g.done)break;h=g.value}h=h;h=h[0];(!e.has(h)||!d.has(h))&&a["delete"](h)}for(var h=e,g=Array.isArray(h),c=0,h=g?h:h[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(g){if(c>=h.length)break;b=h[c++]}else{c=h.next();if(c.done)break;b=c.value}b=b;d.has(b)&&a.set(b,d.at(b))}})};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=a}),null);
__d("XPagesManagerSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{page_token}/settings/",{page_token:{type:"String",required:!0},business_id:{type:"Int"},edited:{type:"String"},section:{type:"String"},tab:{type:"String"},change_admin_action:{type:"String"},change_admin_uid:{type:"Int"},tbid:{type:"Int"},fid:{type:"Int"},item_id:{type:"Int"},ref:{type:"String"},q:{type:"String"},promote_plugin_tab:{type:"Enum",enumType:1},active_section:{type:"String"},on_load_actions:{type:"StringVector"},partner_id:{type:"Int"},enable:{type:"Enum",enumType:1},creator_request_id:{type:"Int"},show_cc_dialog:{type:"Bool",defaultValue:!1},country_code:{type:"Enum",enumType:1},show_sync_dialog:{type:"Bool",defaultValue:!1},job_manager_requester_id:{type:"Int"}})}),null);
__d("XSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/settings/",{tab:{type:"String"},section:{type:"String"},edit_section:{type:"String"},id:{type:"String"},dispute_id:{type:"String"},managed_notif_id:{type:"Int"},qp_id:{type:"Int"},ref:{type:"String"},privacy_source:{type:"Enum",enumType:1},option:{type:"String"},show_modal:{type:"Bool",defaultValue:!1},modal_type:{type:"String"},flow_kind:{type:"String"},referrer:{type:"Enum",enumType:1},protocol:{type:"String"},country:{type:"String"},initial_open_app_id:{type:"FBID"},legacy_contact_delegator_id:{type:"FBID"}})}),null);