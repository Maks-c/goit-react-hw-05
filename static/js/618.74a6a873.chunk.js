"use strict";(self.webpackChunkgoit_react_hw_05=self.webpackChunkgoit_react_hw_05||[]).push([[618],{6618:function(n,t,e){e.r(t),e.d(t,{HomePage:function(){return _}});var r,a,c,u,i=e(5861),s=e(885),o=e(7757),p=e.n(o),f=e(2791),d=e(1508),l=e(168),h=e(5751),x=h.ZP.div(r||(r=(0,l.Z)(["\n  width: 1200px;\n  margin-right: auto;\n  margin-left: auto;\n\n"]))),v=h.ZP.ul(a||(a=(0,l.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin: 0 auto 0 auto;\n  padding: 0;\n  list-style: none;\n"]))),m=h.ZP.li(c||(c=(0,l.Z)(["\n  border-radius: 2px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),\n  0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    Transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),g=h.ZP.img(u||(u=(0,l.Z)(["\n  width: 100%;\n  object-fit: cover;\n\n"]))),w=e(501),b=e(6871),k=e(184),Z=function(n){var t=n.items,e=(0,b.TH)();return(0,k.jsx)(x,{children:(0,k.jsxs)("main",{children:[(0,k.jsx)("h1",{children:"List Movies"}),(0,k.jsx)(v,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path;return(0,k.jsx)(m,{children:(0,k.jsxs)(w.rU,{to:"/movies/".concat(t),state:{from:e},style:{textDecoration:"none"},children:[(0,k.jsx)(g,{src:"https://image.tmdb.org/t/p/w200".concat(a),alt:r}),(0,k.jsx)("p",{children:r})]})},t)}))})]})})},y=e(6373),_=function(){var n=(0,f.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,f.useState)(!1),c=(0,s.Z)(a,2),u=c[0],o=c[1];return(0,f.useEffect)((function(){function n(){return(n=(0,i.Z)(p().mark((function n(){var t,e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(!0),n.prev=1,n.next=4,(0,d.XT)();case 4:t=n.sent,e=t.map((function(n){return{id:n.id,title:n.title,poster_path:n.poster_path}})),r(e),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(1);case 11:return n.prev=11,o(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,9,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,k.jsxs)(k.Fragment,{children:[u&&(0,k.jsx)(y.Z1,{}),(0,k.jsx)(Z,{items:e})]})}},1508:function(n,t,e){e.d(t,{XT:function(){return o},Pg:function(){return p},M1:function(){return f},Jh:function(){return d},bq:function(){return l}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u),s="6db178e9ee32ba259e031d27905cafe1";i().defaults.baseURL="".concat("https://api.themoviedb.org/3");var o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/week?api_key=".concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie?api_key=".concat(s,"&query=").concat(t,"&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=618.74a6a873.chunk.js.map