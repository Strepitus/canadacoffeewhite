(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/ekp":function(e,t,n){"use strict";var i=n("pneb"),a=n("wk2l"),r=n("ERkP"),o=n.n(r),l=n("o44P"),s=n.n(l),c=n("xqAC"),u=n("gBK4"),d=n("3uS1"),f=n.n(d),m=o.a.createElement,p=s.a.bind(f.a),g=function(e){var t=e.children;return m("div",{className:p("bottom-container")},t)};g.defaultProps={children:null};var v=function(e){var t=e.loading,n=e.children;return m("div",{className:p("items-container")},t&&m(c.a,{className:p("loader")}),m("div",{className:p("items-container-inner",{"is-loading":t})},n))};v.defaultProps={children:null,loading:!1};var b=Object(r.forwardRef)(function(e,t){var n=e.layoutPadding,r=e.lightTheme,o=e.children,l=Object(a.a)(e,["layoutPadding","lightTheme","children"]);return m("div",Object(i.a)({ref:t,className:p("root",{"light-theme":r})},l),m(u.a,null,m("div",{className:p("inside",{"layout-padding":n})},o)))});b.defaultProps={layoutPadding:!1,lightTheme:!1,children:null};var h=b;n.d(t,"b",function(){return v}),n.d(t,"a",function(){return g});t.c=h},"0Ocv":function(e,t){e.exports=function(e,t,n){var i=-1,a=e.length;t<0&&(t=-t>a?0:a+t),(n=n>a?a:n)<0&&(n+=a),a=t>n?0:n-t>>>0,t>>>=0;for(var r=Array(a);++i<a;)r[i]=e[i+t];return r}},K3Cp:function(e,t,n){"use strict";var i=n("ERkP"),a=n("7nmT");function r(e,t,n){return e===t||(e.correspondingElement?e.correspondingElement.classList.contains(n):e.classList.contains(n))}var o=function(){if("undefined"!==typeof window&&"function"===typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};return window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t),e}};var l,s,c=(void 0===l&&(l=0),function(){return++l}),u={},d={},f=["touchstart","touchmove"],m="ignore-react-onclickoutside";function p(e,t){var n=null;return-1!==f.indexOf(t)&&s&&(n={passive:!e.props.preventDefault}),n}t.a=function(e,t){var n,l;return l=n=function(n){var l,f;function m(e){var t;return(t=n.call(this,e)||this).__outsideClickHandler=function(e){if("function"!==typeof t.__clickOutsideHandlerProp){var n=t.getInstance();if("function"!==typeof n.props.handleClickOutside){if("function"!==typeof n.handleClickOutside)throw new Error("WrappedComponent lacks a handleClickOutside(event) function for processing outside click events.");n.handleClickOutside(e)}else n.props.handleClickOutside(e)}else t.__clickOutsideHandlerProp(e)},t.enableOnClickOutside=function(){if("undefined"!==typeof document&&!d[t._uid]){"undefined"===typeof s&&(s=o()),d[t._uid]=!0;var e=t.props.eventTypes;e.forEach||(e=[e]),u[t._uid]=function(e){var n;t.props.disableOnClickOutside||null!==t.componentNode&&(t.props.preventDefault&&e.preventDefault(),t.props.stopPropagation&&e.stopPropagation(),t.props.excludeScrollbar&&(n=e,document.documentElement.clientWidth<=n.clientX||document.documentElement.clientHeight<=n.clientY)||function(e,t,n){if(e===t)return!0;for(;e.parentNode;){if(r(e,t,n))return!0;e=e.parentNode}return e}(e.target,t.componentNode,t.props.outsideClickIgnoreClass)===document&&t.__outsideClickHandler(e))},e.forEach(function(e){document.addEventListener(e,u[t._uid],p(t,e))})}},t.disableOnClickOutside=function(){delete d[t._uid];var e=u[t._uid];if(e&&"undefined"!==typeof document){var n=t.props.eventTypes;n.forEach||(n=[n]),n.forEach(function(n){return document.removeEventListener(n,e,p(t,n))}),delete u[t._uid]}},t.getRef=function(e){return t.instanceRef=e},t._uid=c(),t}f=n,(l=m).prototype=Object.create(f.prototype),l.prototype.constructor=l,l.__proto__=f;var g=m.prototype;return g.getInstance=function(){if(!e.prototype.isReactComponent)return this;var t=this.instanceRef;return t.getInstance?t.getInstance():t},g.componentDidMount=function(){if("undefined"!==typeof document&&document.createElement){var e=this.getInstance();if(t&&"function"===typeof t.handleClickOutside&&(this.__clickOutsideHandlerProp=t.handleClickOutside(e),"function"!==typeof this.__clickOutsideHandlerProp))throw new Error("WrappedComponent lacks a function for processing outside click events specified by the handleClickOutside config option.");this.componentNode=Object(a.findDOMNode)(this.getInstance()),this.enableOnClickOutside()}},g.componentDidUpdate=function(){this.componentNode=Object(a.findDOMNode)(this.getInstance())},g.componentWillUnmount=function(){this.disableOnClickOutside()},g.render=function(){var t=this.props,n=(t.excludeScrollbar,function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(t,["excludeScrollbar"]));return e.prototype.isReactComponent?n.ref=this.getRef:n.wrappedRef=this.getRef,n.disableOnClickOutside=this.disableOnClickOutside,n.enableOnClickOutside=this.enableOnClickOutside,Object(i.createElement)(e,n)},m}(i.Component),n.displayName="OnClickOutside("+(e.displayName||e.name||"Component")+")",n.defaultProps={eventTypes:["mousedown","touchstart"],excludeScrollbar:t&&t.excludeScrollbar||!1,outsideClickIgnoreClass:m,preventDefault:!1,stopPropagation:!1},n.getClass=function(){return e.getClass?e.getClass():e},l}},"Ku/O":function(e,t,n){"use strict";var i=n("pneb"),a=n("2ewA"),r=n("ERkP"),o=n.n(r),l=n("o44P"),s=n.n(l),c=n("lTCR"),u=n.n(c),d=n("qnec"),f=n.n(d),m=n("NcTp"),p=n("q52W"),g=n("gBK4"),v=n("CkCS"),b=n("S9Ov"),h=n("SZp9"),O=n("HVJN"),y=n.n(O),C=o.a.createElement;function k(){var e=Object(a.a)(["\n  fragment emagHeroSliderArticlesFields on EmagArticle {\n    title\n    url\n    rdv {\n      title\n    }\n    emotion {\n      title\n    }\n    mainImage {\n      ...emagMainImageFields\n    }\n  }\n  ","\n"]);return k=function(){return e},e}function w(){var e=Object(a.a)(["\n  fragment emagHeroSliderFields on EmagTopicContent {\n    ... on EmagArticle {\n      title\n      url\n      rdv {\n        title\n      }\n      emotion {\n        title\n      }\n      mainImage {\n        ...emagMainImageFields\n      }\n    }\n    ... on EmagFolder {\n      title\n      url\n      mainImage {\n        ...emagMainImageFields\n      }\n    }\n  }\n  ","\n"]);return w=function(){return e},e}function P(){var e=Object(a.a)(["\n  fragment emagMainImageFields on MediaImage {\n    ... on MediaImage {\n      id\n      image {\n        ...heroImageFields\n      }\n    }\n  }\n  ","\n"]);return P=function(){return e},e}var N=s.a.bind(y.a),j=u()(P(),b.a),E={emagHeroSliderFieldsFragment:u()(w(),j),emagMainImageFieldsFragment:j,emagHeroSliderArticlesFieldsFragment:u()(k(),j)},R={dots:!0,dotsClass:N("hero-slider-dots"),arrows:!1,infinite:!0,fade:!0,autoplay:!1,speed:500,draggable:!0,useCSS:1,slidesToShow:1,slidesToScroll:1,pauseOnHover:!1},S=function(e,t,n){return C("div",{className:N("hero-slide-image")},C(p.a,{sources:Object(h.a)(e),src:e.heroDesktopWideResponsive.url,alt:e.alt,onLoad:t,ref:t?n:null}))},F=function(e,t,n,i){return C(g.a,{className:N("hero-slide-bottom-container")},C("div",{className:N("hero-slide-bottom-inside")},!!e.length&&C("div",{className:N("top-title")},function(e){return e.map(function(e){return e.title}).join(" / ")}(e)),t&&C("div",{className:N("middle-title")},t),C(v.a,{to:i,className:N("link")},C("div",{className:N("title")},n))))},I=function(e,t,n,i){var a=e&&e.rdv?e.rdv.title:null,r=t?t.image:null,o=e?e.mainImage.image:r;return C("div",{className:N("js-slick-slide")},o&&S(o,n,i),e?F(e.emotion,a,e.title,e.url):null)},x=function(e,t){var n=e.mainImage.image,i=e.title,a=e.url,r=e.rdv,o=e.emotion,l=r?r.title:null,s=o&&o.length?o:[];return C("div",{key:t,className:N("js-slick-slide")},S(n),F(s,l,i,a))},L=function(e){var t=e.title,n=e.subtitle,a=e.mainContent,l=e.mainArticles,s=e.mainImage,c=e.titleClassName,u=Object(r.useState)(!1),d=u[0],m=u[1],p=Object(r.useRef)();Object(r.useEffect)(function(){p.current&&p.current.complete&&m(!0)},[]);var v=function(){m(!0)},b=l||a;return C("div",{className:N("root")},C(o.a.Fragment,null,b&&b.length<=1&&C("div",{className:N("hero-slider")},I(b[0],s,v,p)),!d&&b&&b.length>1&&C("div",{className:N("hero-slider")},I(b[0],s,v,p)),d&&b&&b.length>1&&C(f.a,Object(i.a)({},R,{className:N("hero-slider")}),b.map(x))),C("div",{className:N("hero-slider-inner-wrapper")},C(g.a,{className:N("hero-slider-inner-container"),width:1140},C("div",{className:N("container-inside")},C("h1",{className:N("container-inside-title",c)},t),n&&C("h2",{className:N("container-inside-subtitle")},n," ")))))};L.defaultProps={mainImage:null,imageAttributes:null,children:null,subtitle:null,titleClassName:null,mainContent:null,mainArticles:null},L.fragment=E;var A=Object(m.b)(L);t.a=A},Q2XZ:function(e,t,n){"use strict";var i=n("2ewA"),a=n("ERkP"),r=n.n(a),o=n("lTCR"),l=n.n(o),s=n("NcTp"),c=n("u2M3"),u=n("vMw0"),d=r.a.createElement;function f(){var e=Object(i.a)(["\n  fragment emagArticlesListingFields on EmagArticle {\n    ...emagArticleBaseFields\n  }\n  ","\n"]);return f=function(){return e},e}var m=l()(f(),c.a),p=function(e){var t=e.articles,n=e.gridSettings;return d(a.Fragment,null,t.map(function(e,t){var i=e.title,a=e.url,r=e.color,o=e.emotion,l=e.rdv,s=e.imgPushSquare,c=e.imgPushPortrait,f=e.imgPushLandscape;return d(u.a,{key:t,title:i,url:a,color:r,firstSubTitle:o.map(function(e){return e.title}).join(" / "),secondSubTitle:l?l.title:null,sizeRow:n[t]?n[t].row:2,sizeCol:n[t]?n[t].col:null,isPortraitMode:n[t]?"isPortraitMode"===n[t].display:null,isLandscapeMode:n[t]?"isLandscapeMode"===n[t].display:null,isSquareMode:n[t]?"isSquareMode"===n[t].display:null,isContentRightAlign:n[t]?n[t].isContentRightAlign:null,isContentPadding:!n[t]||n[t].isContentPadding,imageSquare:s,imagePortrait:c,imageLandscape:f})}))};p.fragment={emagArticlesListingFieldsFragment:m};var g=Object(s.b)(p);t.a=g},R5u7:function(e,t,n){var i=n("pPzx"),a=n("9y2L"),r=n("pnw1"),o=n("tQYX");e.exports=function(e,t,n){if(!o(n))return!1;var l=typeof t;return!!("number"==l?a(n)&&r(t,n.length):"string"==l&&t in n)&&i(n[t],e)}},RBiB:function(e,t,n){var i=n("0Ocv"),a=n("R5u7"),r=n("m2YG"),o=Math.ceil,l=Math.max;e.exports=function(e,t,n){t=(n?a(e,t,n):void 0===t)?1:l(r(t),0);var s=null==e?0:e.length;if(!s||t<1)return[];for(var c=0,u=0,d=Array(o(s/t));c<s;)d[u++]=i(e,c,c+=t);return d}},atWj:function(e,t,n){"use strict";var i=n("2ewA"),a=n("ERkP"),r=n.n(a),o=n("o44P"),l=n.n(o),s=n("lTCR"),c=n.n(s),u=n("K3Cp"),d=n("7xIC"),f=n.n(d),m=n("NcTp"),p=n("m7Oi"),g=n("05Xt"),v=n("fSi8"),b=n.n(v),h=r.a.createElement,O=l.a.bind(b.a),y={enter:O("dropdown-transition-enter"),enterActive:O("dropdown-transition-enter-active"),enterDone:O("dropdown-transition-done-enter"),exit:O("dropdown-transition-exit"),exitActive:O("dropdown-transition-exit-active")},C=Object(m.b)(function(e){var t=e.dropdownLabel,n=e.dropdownList,i=e.toggleDropdown,a=e.isOpened,r=e.onItemClick;return h("div",{className:O("options-list-container")},h("button",{className:O("select-label",{opened:a}),onClick:i},t),h(g.a,{in:a,timeout:150,classNames:y,unmountOnExit:!0},h("ul",{className:O("options-list")},n.map(function(e){var t=e.id,n=e.title;return h("li",{key:t,className:O("option")},h("button",{className:O("option-btn"),value:t,onClick:function(){return r(t)}},h("span",{className:O("option-label")},n)))}))))}),k=n("EBQC"),w=n.n(k),P=r.a.createElement;function N(){var e=Object(i.a)(["\n  fragment emagRdvSelectFields on EmagRdv {\n    id\n    title\n    url\n  }\n"]);return N=function(){return e},e}var j=l.a.bind(w.a),E=Object(u.a)(C),R={emagRdvSelectFieldsFragment:c()(N())},S=function(e){var t=e.rdvList,n=e.rdvAllLabel,i=e.initialActiveItemId,r=Object(a.useState)(i||"all"),o=r[0],l=r[1],s=!!t.length,c=function(e){l(e),function(e){var n=t.find(function(t){return t.id===e}),i=n&&n.url;i&&f.a.sbmPush(i)}(e)},u=t.find(function(e){return e.id===o}),d=u?u.title:n||s&&t[0].title,m=n||u||!s?t.filter(function(e){return e.id!==o}):t.filter(function(e){return e.id!==t[0].id});return!!m.length&&P(p.a,null,function(e){var t=e.status,n=e.toggle;return P("div",{className:j("root")},P(E,{handleClickOutside:function(){t&&n()},isOpened:t,toggleDropdown:n,dropdownList:m,dropdownLabel:d,onItemClick:function(e){c(e),n()}}))})};S.defaultProps={initialActiveItemId:null,rdvAllLabel:null},S.fragment=R;var F=Object(m.b)(S);t.a=F},fFuP:function(e,t,n){"use strict";var i=n("ERkP"),a=n.n(i),r=n("RBiB"),o=n.n(r),l=a.a.createElement,s=function(e){var t=e.articles,n=e.children;return o()(t,10).map(function(e,t){return l(i.Fragment,{key:t},n({group:e}))})};t.a=s},fWyh:function(e,t,n){var i=n("nvU9"),a=1/0,r=1.7976931348623157e308;e.exports=function(e){return e?(e=i(e))===a||e===-a?(e<0?-1:1)*r:e===e?e:0:0===e?e:0}},gPvV:function(e,t,n){"use strict";var i=n("ERkP"),a=n.n(i),r=n("o44P"),o=n.n(r),l=n("ivzW"),s=n("lCu9"),c=n.n(s),u=a.a.createElement,d=o.a.bind(c.a),f=function(e){var t=e.text;return t?u("div",{className:d("root")},u(l.a,{className:d("text"),text:t})):null};f.defaultProps={text:null};var m=f;t.a=m},hRWF:function(e,t,n){"use strict";n.r(t);var i,a,r,o,l,s=n("h7sq"),c=n("tS02"),u=n("/XES"),d=n("ztBH"),f=n("Fayl"),m=n("ERkP"),p=n.n(m),g=n("CLPb"),v=n("rNCn"),b=n("2ewA"),h=n("r27O"),O=n("4KRT"),y=n("lTCR"),C=n.n(y),k=n("o44P"),w=n.n(k),P=n("AYsk"),N=(n("HVdi"),n("NcTp")),j=n("xqAC"),E=n("+YHP"),R=n("5o9w"),S=n("y+X2"),F=n("fFuP"),I=n("FwFB"),x=n.n(I),L=p.a.createElement,A=w.a.bind(x.a),M=function(e){var t=e.children;return L("div",{className:A("root")},t({gridSettings:[{row:2,display:"isSquareMode"},{row:2,display:"isSquareMode"},{row:4},{row:3},{row:3},{row:2,display:"isSquareMode"},{row:2,display:"isSquareMode"},{row:4},{row:3},{row:3}]}))},T=n("vfq0"),_=n("xOjt"),q=n("/ekp"),D=n("hDKq"),B=n("Ku/O"),H=n("atWj"),$=n("zEL0"),W=n("Q2XZ"),z=n("4KUQ"),Q=n("gPvV"),X=n("bZvo"),K=n("kmEC"),U=n.n(K),Y=p.a.createElement;function V(){var e=Object(b.a)(["\n  query EmagRdvLoadMoreQuery($id: ID!, $after: Int, $first: Int) {\n    emagRdv(id: $id) {\n      articlesData(after: $after, first: $first) {\n        count\n        hasNextPage\n        endCursor\n        loadMoreButtonLabel\n        articles {\n          ...emagArticlesListingFields\n        }\n      }\n    }\n  }\n  ","\n"]);return V=function(){return e},e}function Z(){var e=Object(b.a)(["\n  query EmagRdv($id: ID!, $after: Int, $first: Int) {\n    emagRdv(id: $id) {\n      id\n      url\n      urls {\n        language\n        url\n      }\n      title\n      meta {\n        ...metaTagsFields\n      }\n      rdvList {\n        ...emagRdvSelectFields\n      }\n      mainArticles {\n        ...emagHeroSliderArticlesFields\n      }\n      articlesData(after: $after, first: $first) {\n        count\n        hasNextPage\n        endCursor\n        loadMoreButtonLabel\n        articles {\n          ...emagArticlesListingFields\n        }\n      }\n      topTextBlock\n      bottomTextBlock\n      widgets {\n        ...widgetsFields\n      }\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return Z=function(){return e},e}var J=w.a.bind(U.a),G=C()(Z(),T.a.fragment.metaTagsFieldsFragment,H.a.fragment.emagRdvSelectFieldsFragment,W.a.fragment.emagArticlesListingFieldsFragment,B.a.fragment.emagHeroSliderArticlesFieldsFragment,X.a.fragment),ee=C()(V(),W.a.fragment.emagArticlesListingFieldsFragment),te=function(e,t){var n=t.fetchMoreResult;return Object(v.a)({},e,{emagRdv:Object(v.a)({},e.emagRdv,{articlesData:Object(v.a)({},e.emagRdv.articlesData,n.emagRdv.articlesData,{articles:[].concat(Object(g.a)(e.emagRdv.articlesData.articles),Object(g.a)(n.emagRdv.articlesData.articles))})})})},ne=(i=Object(h.c)("routerStore"),a=Object(O.d)(G,{options:function(e){return{variables:{id:e.router.query.id,first:10,after:0}}}}),r=Object(E.a)(),o=Object(R.a)({callback:function(e){var t=e.props,n=t.activePage,i=n.setUrls,a=n.setActiveUniverse,r=t.data,o=r.emagRdv?r.emagRdv.urls:[];a("hotel"),i(o)}}),Object(N.b)(l=Object(P.a)(l=i(l=a(l=r(l=Object(z.b)(l=o(l=Object(h.d)(l=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.data.fetchMore,i=e.routerStore.pageId;if(t.loading)return Y("div",{className:"page-loader"},Y(j.a,null));var a=t.emagRdv,r=a.id,o=a.meta,l=a.title,s=a.mainArticles,c=a.articlesData,u=c.articles,d=c.endCursor,f=c.loadMoreButtonLabel,p=c.hasNextPage,g=c.count,v=a.rdvList,b=a.topTextBlock,h=a.bottomTextBlock,O=a.widgets;return Y(m.Fragment,null,Y(T.a,{data:o}),Y("main",null,s.length&&Y(B.a,{imageAttributes:{itemProp:"photo"},title:l,mainArticles:s,titleClassName:J("main-title")}),Y(H.a,{rdvList:v,initialActiveItemId:r}),Y(Q.a,{text:b}),Y(q.c,{layoutPadding:!0},Y(F.a,{articles:u},function(e){var t=e.group,n=e.index;return Y(M,{key:n},function(e){var n=e.gridSettings;return Y(W.a,{articles:t,gridSettings:n})})}),Y(q.a,null,Y(S.a,{fetchMore:n,query:ee,updateQuery:te,variables:{id:i,first:10,after:d}},function(e){var t=e.loadMore,n=e.isLoading;return Y($.a,{loadMoreInProgress:n,loadMoreButtonLabel:f,hasNextPage:p,onLoadMoreClick:t})}))),Y(Q.a,{text:h}),Y(X.a,{targetToSellItemId:r,data:O})),Y(_.a,null),Y(D.a,{count:g}))}}]),t}(m.Component))||l)||l)||l)||l)||l)||l)||l)||l),ie=p.a.createElement,ae=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return ie(ne,this.props)}}]),t}(m.Component);t.default=ae},hzwN:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/emag_rdv",function(){var e=n("hRWF");return{page:e.default||e}}])},m2YG:function(e,t,n){var i=n("fWyh");e.exports=function(e){var t=i(e),n=t%1;return t===t?n?t-n:t:0}},nvU9:function(e,t,n){var i=n("tQYX"),a=n("a88S"),r=NaN,o=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return r;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=s.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):l.test(e)?r:+e}},"y+X2":function(e,t,n){"use strict";var i=n("ERkP"),a=n("aWzz"),r={children:a.func.isRequired,fetchMore:a.func.isRequired,query:a.object.isRequired,variables:a.object,updateQuery:a.func.isRequired};function o(e){var t=e.fetchMore,n=e.query,a=e.variables,r=e.updateQuery,o=e.children,l=Object(i.useState)(!1),s=l[0],c=l[1];return o({loadMore:function(e){c(!0),e&&e.preventDefault(),t({query:n,variables:a,updateQuery:r}).then(function(){c(!1)}).catch(function(){c(!1)})},isLoading:s})}o.propTypes=r,o.defaultProps={variables:null};var l=o;t.a=l},zEL0:function(e,t,n){"use strict";var i=n("ERkP"),a=n.n(i),r=n("xqAC"),o=n("3wSE"),l=a.a.createElement,s=function(e){var t=e.onLoadMoreClick,n=e.hasNextPage,i=e.loadMoreInProgress,a=e.loadMoreButtonLabel;return n?i?l(r.a,null):l(o.a,{onClick:t},a):null};t.a=s}},[["hzwN",2,0,1]]]);