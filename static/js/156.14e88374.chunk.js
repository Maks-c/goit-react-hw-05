"use strict";(self.webpackChunkgoit_react_hw_05=self.webpackChunkgoit_react_hw_05||[]).push([[156],{6156:function(n,t,e){e.r(t),e.d(t,{MoviesPage:function(){return E}});var r,a,i,u,c,o,s,p,f=e(1413),d=e(5861),l=e(885),h=e(7757),x=e.n(h),v=e(2791),m=e(501),g=e(6871),b=e(1508),w=e(8494),Z=e(168),y=e(5751),k=y.ZP.form(r||(r=(0,Z.Z)(["\n  //margin-top: 25px;\n  //margin-bottom: 25px;\n\n  margin: 25px auto 25px auto;\n  width: fit-content;\n"]))),_=y.ZP.input(a||(a=(0,Z.Z)(["\nmargin-right: 5px;\npadding: 15px ;\n\n\n  border-width: 2px;\n  border-style: ridge;\n  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));\n  border-image: -moz-linear-gradient(darkmagenta);\n\n\n"]))),j=y.ZP.button(i||(i=(0,Z.Z)(["\n  padding:  15px 15px 15px 3px;\n  width: fit-content;\n  border:none;\n\n"]))),S=e(184),P=function(n){var t=n.onSubmit,e=(0,v.useState)(""),r=(0,l.Z)(e,2),a=r[0],i=r[1];return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(k,{onSubmit:function(n){n.preventDefault(),""!==a.trim()&&(t(a),i(""))},children:[(0,S.jsx)(_,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(n){i(n.currentTarget.value.toLowerCase())}}),(0,S.jsxs)(j,{type:"submit",children:["Search",(0,S.jsx)(w.Yfv,{})]})]})})},q=y.ZP.div(u||(u=(0,Z.Z)(["\n  width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n\n"]))),C=y.ZP.ul(c||(c=(0,Z.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin:0  auto 0 auto;\n  padding: 0;\n  list-style: none;\n"]))),T=y.ZP.li(o||(o=(0,Z.Z)(["\n  border-radius: 2px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),\n  0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover{\n    Transform: scale(1.03);\n    cursor: zoom-in;\n  }\n\n\n"]))),U=y.ZP.img(s||(s=(0,Z.Z)(["\n  width: 100%;\n  object-fit: cover;\n\n"]))),z=(0,y.ZP)(m.rU)(p||(p=(0,Z.Z)(["\n\ntext-decoration: none;\n\n"]))),F=function(n){var t=n.founds,e=(0,g.TH)();return(0,S.jsx)(q,{children:(0,S.jsx)(C,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path;return(0,S.jsx)(T,{children:(0,S.jsxs)(z,{to:"/movies/".concat(t),state:{from:e},children:[(0,S.jsx)(U,{src:"https://image.tmdb.org/t/p/w200".concat(a),alt:r}),r]})},t)}))})})},E=function(){var n=(0,v.useState)(""),t=(0,l.Z)(n,2),e=t[0],r=t[1],a=(0,v.useState)([]),i=(0,l.Z)(a,2),u=i[0],c=i[1],o=(0,g.TH)(),s=(0,g.s0)(),p=(0,m.lr)(),h=(0,l.Z)(p,1)[0].get("query");(0,v.useEffect)((function(){function n(){return(n=(0,d.Z)(x().mark((function n(){var t,r;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,b.bq)(e);case 3:t=n.sent,r=t.map((function(n){return{id:n.id,overview:n.overview,poster_path:n.poster_path,title:n.title}})),c(r),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}""!==e&&function(){n.apply(this,arguments)}()}),[e]),(0,v.useEffect)((function(){function n(){return(n=(0,d.Z)(x().mark((function n(){var t,e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,b.bq)(h);case 3:t=n.sent,e=t.map((function(n){return{id:n.id,overview:n.overview,poster_path:n.poster_path,title:n.title}})),c(e),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}null!==h&&function(){n.apply(this,arguments)}()}),[h]);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(P,{onSubmit:function(n){r(n),s((0,f.Z)((0,f.Z)({},o),{},{search:"query=".concat(n)}))}}),(0,S.jsx)(F,{founds:u})]})}},1508:function(n,t,e){e.d(t,{XT:function(){return s},Pg:function(){return p},M1:function(){return f},Jh:function(){return d},bq:function(){return l}});var r=e(5861),a=e(7757),i=e.n(a),u=e(4569),c=e.n(u),o="6db178e9ee32ba259e031d27905cafe1";c().defaults.baseURL="".concat("https://api.themoviedb.org/3");var s=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/trending/movie/week?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/search/movie?api_key=".concat(o,"&query=").concat(t,"&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=156.14e88374.chunk.js.map