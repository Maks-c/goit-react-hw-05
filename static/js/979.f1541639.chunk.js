"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[979],{2979:function(n,e,t){t.r(e),t.d(e,{MovieDetailsPage:function(){return E}});var r,a,i,c,s,u,o=t(5861),p=t(885),l=t(7757),d=t.n(l),f=t(6871),h=t(1508),v=t(2791),x=t(501),m=t(168),g=t(5751),w=(0,g.ZP)(x.rU)(r||(r=(0,m.Z)(["\n\nmargin-right: 10px;\n\n\n"]))),k=(0,g.ZP)(x.rU)(a||(a=(0,m.Z)(["\n\n    display: inline-block; /* \u0421\u0442\u0440\u043e\u0447\u043d\u043e-\u0431\u043b\u043e\u0447\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 */\n    background: #B0C4DE; /* \u0421\u0435\u0440\u044b\u0439 \u0446\u0432\u0435\u0442 \u0444\u043e\u043d\u0430 */\n    color: #fff; /* \u0411\u0435\u043b\u044b\u0439 \u0446\u0432\u0435\u0442 \u0442\u0435\u043a\u0441\u0442\u0430 */\n    padding: 1rem 1.5rem; /* \u041f\u043e\u043b\u044f \u0432\u043e\u043a\u0440\u0443\u0433 \u0442\u0435\u043a\u0441\u0442\u0430 */\n    text-decoration: none; /* \u0423\u0431\u0438\u0440\u0430\u0435\u043c \u043f\u043e\u0434\u0447\u0451\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u0435 */\n    border-radius: 3px;\n"]))),j=g.ZP.article(i||(i=(0,m.Z)(["\n\n  width: 1200px;\n  margin-right: auto;\n  margin-left: auto;\n"]))),Z=g.ZP.div(c||(c=(0,m.Z)(["\n  margin-left: 15px;\n  margin-right: 15px;\n"]))),b=g.ZP.div(s||(s=(0,m.Z)(["\n  display: flex;\n"]))),y=g.ZP.h2(u||(u=(0,m.Z)(["\n\n\n    display: table;\n    width: auto;\n    margin: 15px auto;\n    letter-spacing: 1px;\n    color: #808080;\n\n\n\n\n\n"]))),_=t(184),P=function(n){var e,t,r=n.item,a=(0,f.TH)(),i=new Date(r.release_date).getFullYear();return(0,_.jsxs)(j,{children:[(0,_.jsx)(k,{to:null!==(e=null===a||void 0===a||null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:"Go Back"}),(0,_.jsxs)(y,{children:[r.title," ",(0,_.jsx)("span",{children:i})]}),(0,_.jsxs)(b,{children:[(0,_.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(r.poster_path),alt:r.title}),(0,_.jsxs)(Z,{children:[(0,_.jsxs)("p",{children:["User score: ",10*r.vote_average,"%"]}),(0,_.jsxs)("p",{children:["Overview: ",r.overview]}),(0,_.jsx)("p",{children:"Genres: "}),(0,_.jsx)("p",{children:r.genres.map((function(n){var e=n.id,t=n.name;return(0,_.jsxs)("span",{children:[t," "]},e)}))})]})]}),(0,_.jsx)("h2",{children:"Additional information"}),(0,_.jsx)("hr",{}),(0,_.jsx)(w,{to:"cast",state:{from:a},children:"Cast"}),(0,_.jsx)(x.rU,{to:"reviews",state:{from:a},children:"Reviews"})]})},U=t(6140),E=function(){var n=(0,f.UO)().itemId,e=(0,v.useState)(null),t=(0,p.Z)(e,2),r=t[0],a=t[1];return(0,v.useEffect)((function(){function e(){return(e=(0,o.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.Pg)(n);case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),U.Am.error("NOT FOUND, PLEASE ENTRY");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),(0,_.jsxs)("main",{children:[r&&(0,_.jsx)(P,{to:"movies/:itemId",item:r}),(0,_.jsx)(f.j3,{})]})}},1508:function(n,e,t){t.d(e,{XT:function(){return o},Pg:function(){return p},M1:function(){return l},Jh:function(){return d},bq:function(){return f}});var r=t(5861),a=t(7757),i=t.n(a),c=t(4569),s=t.n(c),u="6db178e9ee32ba259e031d27905cafe1";s().defaults.baseURL="".concat("https://api.themoviedb.org/3");var o=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/trending/movie/week?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/search/movie?api_key=".concat(u,"&query=").concat(e,"&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=979.f1541639.chunk.js.map