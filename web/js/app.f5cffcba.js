(function(t){function e(e){for(var a,r,c=e[0],l=e[1],o=e[2],u=0,p=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},i={app:0},n=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a6af102b"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=a);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t);var o=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",o.name="ChunkLoadError",o.type=a,o.request=n,s[1](o)}i[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0972":function(t,e,s){},1399:function(t,e,s){"use strict";var a=s("ef4a"),i=s.n(a);i.a},"21bb":function(t,e,s){"use strict";var a=s("2dad"),i=s.n(a);i.a},"2dad":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r=s("2877"),c={},l=Object(r["a"])(c,i,n,!1,null,null,null),o=l.exports,u=(s("be35"),s("78a7"),s("d3b7"),s("8c4f")),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"bg-primary pt-3 pb-2"},[s("div",{staticClass:"nav nav-inverse pb-1 jc-around"},[s("div",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("首页")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("攻略中心")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("赛事中心")])],1)])]),s("router-view")],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center"},[a("img",{attrs:{src:s("cf05"),height:"30"}}),a("div",{staticClass:"px-2 flex-1"},[a("div",{staticClass:"text-white"},[t._v("王者荣耀")]),a("div",{staticClass:"text-grey-1 fs-xxs"},[t._v("团队成就更多")])]),a("button",{staticClass:"btn bg-primary",attrs:{type:"button"}},[t._v("立即下载")])])}],m={},v=m,f=(s("a006"),Object(r["a"])(v,d,p,!1,null,null,null)),g=f.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-warp"},[s("swiper",{attrs:{options:t.swiperOption}},[t._l(t.adList.items,(function(t){return s("swiper-slide",{key:t._id},[s("img",{staticClass:"w-100",attrs:{src:t.image,alt:""}})])})),s("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-1",attrs:{slot:"pagination"},slot:"pagination"})],2),s("div",{staticClass:"nav-icons bg-white mt-3 text-center pt-3 text-dark-1"},[s("div",{staticClass:"d-flex flex-wrap"},t._l(t.navItem,(function(e,a){return s("div",{key:a,staticClass:"nav-item mb-3"},[s("i",{staticClass:"sprite",class:e.icon}),s("div",{staticClass:"py-2"},[t._v(t._s(e.name))])])})),0),t._m(0)]),s("m-list-card",{attrs:{icon:"menu1",title:"新闻资讯",categories:t.newsCats},scopedSlots:t._u([{key:"items",fn:function(e){var a=e.category;return t._l(a.newsList,(function(e,a){return s("router-link",{key:a,staticClass:"py-2 fs-lg d-flex",attrs:{tag:"div",to:"/articles/"+e._id}},[s("span",{staticClass:"text-info"},[t._v("["+t._s(e.categoryName)+"]")]),s("span",{staticClass:"px-2"},[t._v("|")]),s("span",{staticClass:"flex-1 text-dark-1 text-ellipsis pr-2"},[t._v(t._s(e.title))]),s("span",{staticClass:"text-grey-1 fs-sm"},[t._v(t._s(t._f("date")(e.createdAt)))])])}))}}])}),s("m-list-card",{attrs:{icon:"card-hero",title:"英雄列表",categories:t.heroCats},scopedSlots:t._u([{key:"items",fn:function(e){var a=e.category;return[s("div",{staticClass:"d-flex flex-wrap",staticStyle:{margin:"0 -0.5rem"}},t._l(a.heroList,(function(e,a){return s("router-link",{key:a,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/heroes/"+e._id}},[s("img",{staticClass:"w-100",attrs:{src:e.avatar}}),s("div",[t._v(t._s(e.name))])])})),1)]}}])},[s("img",{staticClass:"w-100 border-bottom pb-3 hero-banner",attrs:{src:t.HeroBanner.image,alt:"新英雄banner"}})]),s("m-list-card",{staticClass:"video-warp",attrs:{icon:"menu1",title:"精彩视频",categories:t.videoCats},scopedSlots:t._u([{key:"items",fn:function(e){var a=e.category;return[s("div",{staticClass:"d-flex flex-wrap jc-start",staticStyle:{margin:"0 -0.5rem"}},t._l(a.videoList,(function(e,a){return s("router-link",{key:a,staticClass:"p-2 text-center",staticStyle:{width:"50%"},attrs:{tag:"div",to:"/heroes/"+e._id}},[s("img",{staticClass:"w-100 mb-2 video-img",attrs:{src:e.img}}),s("div",{staticClass:"fs-sm text-left text-dark-1 mb-2 text-ellipsis"},[t._v(" "+t._s(e.title)+" ")]),s("div",{staticClass:"d-flex jc-between text-grey-1 fs-xs"},[s("i",{staticClass:"iconfont icon-menu1 text-grey-1 fs-xs"},[s("span",{staticClass:"ml-1"},[t._v(t._s(e.times))])]),s("span",[t._v(t._s(t._f("date1")(e.createdAt)))])])])})),1)]}}])})],1)},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-light py-2 fs-sm"},[s("i",{staticClass:"sprite sprite-arrow mr-1"}),s("span",[t._v("收起")])])}],C=(s("96cf"),s("1da1")),b=s("5a0c"),x=s.n(b),w={filters:{date:function(t){return x()(t).format("MM/DD")},date1:function(t){return x()(t).format("MM-DD")}},data:function(){return{swiperOption:{pagination:{el:".pagination-home"}},navItem:[{name:"爆料站",icon:"sprite-news"},{name:"故事站",icon:"sprite-story"},{name:"周边商城",icon:"sprite-shop"},{name:"体验服",icon:"sprite-tiyan"},{name:"新人专区",icon:"sprite-newpeople"},{name:"荣耀传承",icon:"sprite-inherit"},{name:"王者营地",icon:"sprite-camp"},{name:"公众号",icon:"sprite-public"},{name:"版本介绍",icon:"sprite-edition"},{name:"对局环境",icon:"sprite-duiju"},{name:"无限王者团",icon:"sprite-wangzhetuan"},{name:"创意互动营",icon:"sprite-interaction"}],newsCats:[],heroCats:[],adList:{},HeroBanner:{},videoCats:[]}},methods:{fetchAds:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/ads/list/首页轮播");case 2:s=e.sent,t.adList=s.data,console.log(t.adList,"首页轮播");case 5:case"end":return e.stop()}}),e)})))()},fetchBanner:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/ads/list/HeroBanner");case 2:s=e.sent,t.HeroBanner=s.data.items[0],console.log(t.HeroBanner,"新英雄banner");case 5:case"end":return e.stop()}}),e)})))()},fetchNewsCats:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("news/list");case 2:s=e.sent,t.newsCats=s.data,console.log(t.newsCats,"新闻列表");case 5:case"end":return e.stop()}}),e)})))()},fetchHeroCats:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/list");case 2:s=e.sent,t.heroCats=s.data,console.log(t.heroCats,"英雄列表");case 5:case"end":return e.stop()}}),e)})))()},fetchVideo:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("video/list");case 2:s=e.sent,t.videoCats=s.data,console.log(t.videoCats,"视频列表");case 5:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchNewsCats(),this.fetchHeroCats(),this.fetchVideo(),this.fetchAds(),this.fetchBanner()}},k=w,y=(s("21bb"),Object(r["a"])(k,_,h,!1,null,null,null)),j=y.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-article"},[s("div",{staticClass:"d-flex py-3 px-2 border-bottom"},[s("div",{staticClass:"iconfont icon-Back text-blue"}),s("strong",{staticClass:"flex-1 text-blue pl-2"},[t._v(t._s(t.model.title))]),s("div",{staticClass:"text-grey fs-xs"},[t._v("2019-06-19")])]),s("div",{staticClass:"px-3 body fs-lg",domProps:{innerHTML:t._s(t.model.body)}}),s("div",{staticClass:"px-3 border-top py-3"},[t._m(0),s("div",{staticClass:"pt-2"},t._l(t.model.related,(function(e){return s("router-link",{key:e._id,staticClass:"py-1",attrs:{tag:"div",to:"/articles/"+e._id}},[t._v(t._s(e.title))])})),1)])]):t._e()},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex ai-center"},[s("i",{staticClass:"iconfont icon-menu1"}),s("strong",{staticClass:"text-blue fs-lg ml-1"},[t._v("相关资讯")])])}],O={props:{id:{required:!0}},data:function(){return{model:null}},watch:{id:"fetch"},methods:{fetch:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("articles/".concat(t.id));case 2:s=e.sent,t.model=s.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetch()}},E=O,R=(s("1399"),Object(r["a"])(E,S,$,!1,null,null,null)),L=R.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("div",{staticClass:"page-hero"},[a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center text-white"},[a("img",{attrs:{src:s("cf05"),height:"30"}}),t._m(0),a("router-link",{attrs:{to:"/allHeroes",tag:"div"}},[t._v("更多英雄 >")])],1),a("div",{staticClass:"top",style:{"background-image":"url("+t.model.banner+")"}},[a("div",{staticClass:"info text-white p-3 h-100 d-flex flex-column jc-end"},[a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.title))]),a("h2",{staticClass:"my-2"},[t._v(t._s(t.model.name))]),a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.categories.map((function(t){return t.name})).join("/")))]),a("div",{staticClass:"d-flex jc-between pt-2"},[t.model.scores?a("div",{staticClass:"scores d-flex ai-center"},[a("span",[t._v("难度")]),a("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scores.difficult))]),a("span",[t._v("技能")]),a("span",{staticClass:"badge bg-blue-1"},[t._v(t._s(t.model.scores.skills))]),a("span",[t._v("攻击")]),a("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.model.scores.attack))]),a("span",[t._v("生存")]),a("span",{staticClass:"badge bg-dark"},[t._v(t._s(t.model.scores.survive))])]):t._e(),a("router-link",{staticClass:"text-grey fs-sm",attrs:{to:{name:"heroeSkins",params:{data:t.model.skin}},tag:"span"}},[t._v("皮肤: "+t._s(t.model.skin&&t.model.skin.length)+" >")])],1)])]),a("div",[t._m(1),a("swiper",[a("swiper-slide",[a("div",[a("div",{staticClass:"p-3 bg-white border-bottom"},[a("div",{staticClass:"d-flex"},[a("router-link",{staticClass:"btn btn-lg flex-1",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu1"}),t._v(" 英雄介绍视频 ")]),a("router-link",{staticClass:"btn btn-lg flex-1 ml-2",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu1"}),t._v(" 英雄介绍视频 ")])],1),a("div",{staticClass:"skills bg-white mt-4"},[a("div",{staticClass:"d-flex jc-around"},t._l(t.model.skills,(function(e,s){return a("img",{key:e.name,staticClass:"icon",class:{active:t.currentSkillIndex===s},attrs:{src:e.icon},on:{click:function(e){t.currentSkillIndex=s}}})})),0),t.currentSkill?a("div",[a("div",{staticClass:"d-flex pt-4 pb-3"},[a("h3",{staticClass:"m-0"},[t._v(t._s(t.currentSkill.name))]),a("span",{staticClass:"text-grey-1 ml-4"},[t._v(" (冷却值: "+t._s(t.currentSkill.delay)+" 消耗: "+t._s(t.currentSkill.cost)+") ")])]),a("p",[t._v(t._s(t.currentSkill.description))]),a("div",{staticClass:"border-bottom"}),a("p",{staticClass:"text-grey-1"},[t._v("小提示: "+t._s(t.currentSkill.tips))])]):t._e()])]),t.suggest.major&&t.suggest.minor&&t.suggest.skill?a("m-card",{attrs:{plain:"",icon:"menu1",title:"加点建议"}},[a("div",{staticClass:"d-flex jc-between"},[a("div",{staticClass:"text-center",staticStyle:{width:"25%"}},[a("div",{staticClass:"fs-lg mb-3"},[t._v("主升")]),a("img",{staticClass:"sug-icon",attrs:{src:t.suggest.major.icon}}),a("div",{staticClass:"fs-xs mt-1"},[t._v(t._s(t.suggest.major.name))])]),a("div",{staticClass:"text-center",staticStyle:{width:"25%"}},[a("div",{staticClass:"fs-lg mb-3"},[t._v("次升")]),a("img",{staticClass:"sug-icon",attrs:{src:t.suggest.minor.icon}}),a("div",{staticClass:"fs-xs mt-1"},[t._v(t._s(t.suggest.minor.name))])]),a("div",{staticStyle:{width:"38%"}},[a("div",{staticClass:"fs-lg mb-3 text-center"},[t._v("召唤师技能")]),a("div",{staticClass:"d-flex jc-between"},t._l(t.suggest.skill,(function(e){return a("div",{key:e._id},[a("img",{staticClass:"sug-icon",attrs:{src:e.icon}}),a("div",{staticClass:"fs-xs mt-1 text-center"},[t._v(t._s(e.name))])])})),0)])])]):t._e(),a("m-card",{staticClass:"hero-items",attrs:{plain:"",icon:"menu1",title:"出装推荐"}},[a("div",{staticClass:"fs-xl"},[t._v("顺风出装")]),a("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.items1,(function(e){return a("div",{key:e.name},[a("img",{staticClass:"icon",attrs:{src:e.icon}}),a("div",{staticClass:"fs-xs mt-1"},[t._v(t._s(e.name))])])})),0),a("div",{staticClass:"border-bottom mt-3"}),a("div",{staticClass:"fs-xl mt-3"},[t._v("逆风出装")]),a("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.items2,(function(e){return a("div",{key:e.name},[a("img",{staticClass:"icon",attrs:{src:e.icon}}),a("div",{staticClass:"fs-xs mt-1"},[t._v(t._s(e.name))])])})),0)]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"使用技巧"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.usegeTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"对抗技巧"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.battleTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"团战思路"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.teamTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"英雄关系"}},[a("div",{staticClass:"fs-xl"},[t._v("最佳搭档")]),t._l(t.model.partners,(function(e){return a("div",{key:e.name,staticClass:"d-flex pt-3"},[a("img",{attrs:{src:e.hero.avatar,alt:"",height:"50"}}),a("p",{staticClass:"flex-1 m-0 ml-3"},[t._v(" "+t._s(e.description)+" ")])])})),a("div",{staticClass:"border-bottom mt-3 mb-3"}),a("div",{staticClass:"fs-xl"},[t._v("被谁克制")]),t._l(t.model.byWhoControl,(function(e){return a("div",{key:e.name,staticClass:"d-flex pt-3"},[a("img",{attrs:{src:e.hero.avatar,alt:"",height:"50"}}),a("p",{staticClass:"flex-1 m-0 ml-3"},[t._v(" "+t._s(e.description)+" ")])])})),a("div",{staticClass:"border-bottom mt-3 mb-3"}),a("div",{staticClass:"fs-xl"},[t._v("克制谁")]),t._l(t.model.controlWho,(function(e){return a("div",{key:e.name,staticClass:"d-flex pt-3"},[a("img",{attrs:{src:e.hero.avatar,alt:"",height:"50"}}),a("p",{staticClass:"flex-1 m-0 ml-3"},[t._v(" "+t._s(e.description)+" ")])])}))],2)],1)]),a("swiper-slide")],1)],1)]):t._e()},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-2 flex-1"},[s("span",{staticClass:"text-white"},[t._v("王者荣耀")]),s("span",{staticClass:"ml-2"},[t._v("攻略站")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-white px-3"},[s("div",{staticClass:"nav d-flex jc-around pt-3 pb-2 border-bottom"},[s("div",{staticClass:"nav-item active"},[s("div",{staticClass:"nav-link"},[t._v("英雄初识")])]),s("div",{staticClass:"nav-item"},[s("div",{staticClass:"nav-link"},[t._v("进阶攻略")])])])])}],P=(s("4de4"),{props:{id:{required:!0}},data:function(){return{model:null,currentSkillIndex:0,suggest:{}}},computed:{currentSkill:function(){return this.model.skills[this.currentSkillIndex]}},methods:{fetch:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/".concat(t.id));case 2:s=e.sent,t.model=s.data,t.suggest.major=s.data.skills.filter((function(t){return t.isMajor&&1===t.isMajor})).pop(),t.suggest.minor=s.data.skills.filter((function(t){return t.isMajor&&2===t.isMajor})).pop(),t.suggest.skill=s.data.callSkills,console.log("英雄数据",t.suggest);case 8:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetch()}}),T=P,B=(s("9656"),Object(r["a"])(T,H,M,!1,null,"011a2e19",null)),A=B.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-skins"},[t._m(0),s("div",{staticClass:"mt-1 pl-1 pr-1"},[s("swiper",{staticClass:"my-swiper-warp",attrs:{options:t.swiperOption}},[t._l(t.skin,(function(e,a){return s("swiper-slide",{key:a},[s("img",{staticClass:"w-100 mb-3",attrs:{src:e.img,alt:""}}),s("div",{staticClass:"skin-name"},[t._v(t._s(e.name))])])})),s("div",{staticClass:"swiper-pagination  pagination-home",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center text-white"},[a("img",{attrs:{src:s("cf05"),height:"30"}}),a("div",{staticClass:"px-2"},[a("div",{staticClass:"text-white"},[t._v("王者荣耀")]),a("div",{staticClass:"text-grey-1 fs-xxs mt-1"},[t._v("团队成就更多")])])])}],N={data:function(){return{swiperOption:{pagination:{el:".pagination-home"}},skin:[]}},mounted:function(){this.skin=this.$route.params.data,console.log(this.$route.params.data)}},D=N,U=(s("be47"),Object(r["a"])(D,I,q,!1,null,null,null)),V=U.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-4 pl-3 pr-3"},[s("div",{staticClass:"nav jc-between"},t._l(t.categories,(function(e,a){return s("div",{key:a,staticClass:"nav-item",class:{active:t.active===a},on:{click:function(e){return t.$refs.list.$swiper.slideTo(a)}}},[s("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])})),0),s("div",{staticClass:"pt-3"},[s("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return t.active=t.$refs.list.$swiper.realIndex}}},t._l(t.categories,(function(e,a){return s("swiper-slide",{key:a},[s("div",{staticClass:"d-flex flex-wrap",staticStyle:{margin:"0 -0.5rem"}},t._l(e.heroList,(function(e,a){return s("router-link",{key:a,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/heroes/"+e._id}},[s("img",{staticClass:"w-100",attrs:{src:e.avatar}}),s("div",[t._v(t._s(e.name))])])})),1)])})),1)],1)])},W=[],z=(s("a434"),{data:function(){return{categories:[],active:0}},methods:{fetchHeroCats:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var s,a,i,n,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/list");case 2:for(s=e.sent,a=s.data.splice(1,6),i=[],n=0;n<a.length;n++)for(r=a[n].heroList,c=0;c<r.length;c++)i.push(r[c]);a.unshift({name:"全部",heroList:i}),t.categories=a,console.log(a,"英雄列表");case 9:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchHeroCats()}}),F=z,G=Object(r["a"])(F,J,W,!1,null,null,null),K=G.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v(" 所有新闻 ")])},X=[],Y={},Z=Object(r["a"])(Y,Q,X,!1,null,null,null),tt=Z.exports;a["default"].use(u["a"]);var et=new u["a"]({routes:[{path:"/",component:g,children:[{path:"/",name:"home",component:j},{path:"/articles/:id",name:"article",component:L,props:!0}]},{path:"/heroes/:id",name:"hero",component:A,props:!0},{path:"/heroeSkins",name:"heroeSkins",component:V,props:!0},{path:"/allHeroes",name:"allHeroes",component:K,props:!0},{path:"/allNews",name:"allNews",component:tt,props:!0},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),st=s("7212"),at=s.n(st),it=(s("a7a3"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card bg-white p-3 mt-3"},[s("div",{staticClass:"card-header d-flex ai-center",class:{"border-bottom":!t.plain,"pb-3":!t.plain}},[s("i",{staticClass:"iconfont",class:"icon-"+t.icon}),s("div",{staticClass:"fs-xl flex-1 px-2"},[s("strong",[t._v(t._s(t.title))])]),s("router-link",{attrs:{tag:"div",to:"/"}},[t.plain?t._e():s("i",{staticClass:"iconfont icon-menu"})])],1),s("div",{staticClass:"card-body pt-3"},[t._t("default")],2)])}),nt=[],rt={props:{title:{type:String,required:!1},icon:{type:String,required:!1},plain:{type:Boolean}}},ct=rt,lt=(s("e60d"),Object(r["a"])(ct,it,nt,!1,null,null,null)),ot=lt.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("m-card",{attrs:{icon:t.icon,title:t.title}},[t._t("default"),s("div",{staticClass:"nav jc-between"},t._l(t.categories,(function(e,a){return s("div",{key:a,staticClass:"nav-item",class:{active:t.active===a},on:{click:function(e){return t.$refs.list.$swiper.slideTo(a)}}},[s("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])})),0),s("div",{staticClass:"pt-3"},[s("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return t.active=t.$refs.list.$swiper.realIndex}}},t._l(t.categories,(function(e,a){return s("swiper-slide",{key:a},[t._t("items",null,{category:e})],2)})),1)],1)],2)},dt=[],pt={props:{icon:{type:String,required:!1},title:{type:String,required:!1},categories:{type:Array,required:!1}},data:function(){return{active:0}}},mt=pt,vt=Object(r["a"])(mt,ut,dt,!1,null,null,null),ft=vt.exports,gt=s("bc3a"),_t=s.n(gt);a["default"].config.productionTip=!1,a["default"].use(at.a),a["default"].component("m-card",ot),a["default"].component("m-list-card",ft),a["default"].prototype.$http=_t.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||"/web/api"}),new a["default"]({router:et,render:function(t){return t(o)}}).$mount("#app")},"78a7":function(t,e,s){},"7e7b":function(t,e,s){},9656:function(t,e,s){"use strict";var a=s("a8a8"),i=s.n(a);i.a},a006:function(t,e,s){"use strict";var a=s("0972"),i=s.n(a);i.a},a8a8:function(t,e,s){},be35:function(t,e,s){},be47:function(t,e,s){"use strict";var a=s("7e7b"),i=s.n(a);i.a},cf05:function(t,e,s){t.exports=s.p+"img/logo.fc64bf07.png"},e60d:function(t,e,s){"use strict";var a=s("e9ec"),i=s.n(a);i.a},e9ec:function(t,e,s){},ef4a:function(t,e,s){}});
//# sourceMappingURL=app.f5cffcba.js.map