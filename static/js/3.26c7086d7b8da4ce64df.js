webpackJsonp([3],{803:function(t,e,n){function a(t){n(826)}var o=n(83)(n(816),n(839),a,"data-v-743ff6df",null);t.exports=o.exports},816:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{renderedMarkdown:"http://120.77.219.54/Home/About"}},methods:{getReadme:function(){var t=this;this.$gitHubApi.getReadme(this).then(function(e){e.data&&(t.renderedMarkdown=t.$marked(e.data))})}},mounted:function(){var t=this;this.$nextTick(function(){t.getReadme()})}}},822:function(t,e,n){e=t.exports=n(800)(!1),e.push([t.i,".about-me[data-v-743ff6df]{-ms-flex-positive:1;flex-grow:1;padding:30px;overflow-y:auto}",""])},826:function(t,e,n){var a=n(822);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(801)("2d2956a6",a,!0,{})},839:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-me bga-back-top"},[n("article",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.renderedMarkdown)}})])},staticRenderFns:[]}}});