webpackJsonp([8],{"0If5":function(s,t){},EGw9:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("7+uW"),i=a("/ocq"),c=a("9Qok");interactive.init("xiaoneng");var e={name:"hotschool",components:{},data:function(){return{school:!0,profess:!1,warnImg:"./images/school_prompt.png",goback:"./images/major_return.png",maskImg:"./images/major_lead.png",tips:""}},created:function(){this.schoolList=hotData.schoolList,this.professList=hotData.professList,this.redBtn=hotData.redBtn,this.navtitle=hotData.navtitle,this.tips=hotData.tips},methods:{select:function(s){var t=this;t.navtitle.forEach(function(a,o){s==o?(a.sel=!0,0==s?(t.school=!0,t.profess=!1):(t.school=!1,t.profess=!0)):a.sel=!1})},neng:function(s,t,a){console.log(t,a),interactive.openNtkf(s,"尚德机构",{moduleName:t,elemName:a})},backtoindex:function(){window.history.back(-1)}}},n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"nav"},[a("div",{staticClass:"goback",on:{click:s.backtoindex}},[a("img",{attrs:{src:s.goback,alt:""}})]),s._v(" "),s._l(s.navtitle,function(t,o){return a("div",{key:o,class:{school:0==o,profess:1==o},on:{click:function(t){s.select(o)}}},[a("span",{class:{active:1==t.sel}},[s._v(s._s(t.text))])])})],2),s._v(" "),a("div",{staticClass:"bottom-line"},[a("div",{staticClass:"school",class:{red:s.school}}),s._v(" "),a("div",{staticClass:"profess",class:{red:s.profess}})]),s._v(" "),s.school?a("div",{staticClass:"school-section"},[a("span",{staticClass:"warn-icon"},[a("img",{attrs:{src:s.warnImg,alt:""}})]),s._v(" "),a("span",{staticClass:"tips"},[s._v(s._s(s.tips))])]):s._e(),s._v(" "),s.profess?a("div",{staticClass:"profess-section-white"}):s._e(),s._v(" "),s.school?a("div",{staticClass:"school-list"},s._l(s.schoolList,function(t,o){return a("div",{key:o,staticClass:"list-box",on:{click:function(t){s.neng(t,"hotschool","V3.0_hotschool.trigger_school_"+o)}}},[a("div",{staticClass:"school-icon"},[a("img",{attrs:{src:t.icon,alt:""}})]),s._v(" "),a("div",{staticClass:"school-info"},[a("div",{staticClass:"name"},[a("div",{staticClass:"tagImg"},[a("img",{attrs:{src:t.tagImg,alt:""}})]),s._v(" "),a("span",{staticClass:"schoolName"},[s._v(s._s(t.name))])]),s._v(" "),a("div",{staticClass:"tags"},[a("span",[s._v(s._s(t.profess[0]))]),s._v(" "),a("span",[s._v(s._s(t.profess[1]))]),s._v(" "),a("span",[s._v(s._s(t.profess[2]))])]),s._v(" "),a("div",{staticClass:"total-tags"},[s._v("共提供"+s._s(t.profess.length)+"个专业")])]),s._v(" "),a("div",{staticClass:"btn-zx"},[a("img",{attrs:{src:s.redBtn,alt:""}})])])})):s._e(),s._v(" "),s.profess?a("div",{staticClass:"school-list"},s._l(s.professList,function(t,o){return a("div",{key:o,staticClass:"list-box",on:{click:function(t){s.neng(t,"hotschool","V3.0_hotschool.trigger_profess_"+o)}}},[a("div",{staticClass:"school-icon"},[a("img",{attrs:{src:t.icon,alt:""}})]),s._v(" "),a("div",{staticClass:"school-info"},[a("div",{staticClass:"name"},[a("span",{staticClass:"schoolName"},[s._v(s._s(t.name))])]),s._v(" "),a("div",{staticClass:"tags-desc"},[a("span",[a("img",{staticClass:"maskImg",attrs:{src:s.maskImg,alt:""}}),s._v(s._s(t.desc))])]),s._v(" "),a("div",{staticClass:"total-tags"},[s._v("热门指数   "+s._s(t.count))])]),s._v(" "),a("div",{staticClass:"btn-zx"},[a("img",{attrs:{src:s.redBtn,alt:""}})])])})):s._e()])},staticRenderFns:[]};var l=a("VU/8")(e,n,!1,function(s){a("0If5")},"data-v-6068f83e",null).exports;o.default.use(i.a),Object(c.a)(new i.a({routes:[{path:"/",name:"Hotschool",component:l}]}))}},["EGw9"]);