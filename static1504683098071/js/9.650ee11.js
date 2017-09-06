webpackJsonp([9],{1155:function(_,v,t){"use strict";Object.defineProperty(v,"__esModule",{value:!0}),v.default={data:function(){return{}},methods:{},components:{}}},1651:function(_,v){_.exports={render:function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("div",{staticClass:"doc"},[t("h2",[_._v("Grid 布局")]),_._v(" "),t("p",[_._v("我们采用标准的24格布局容器，利用容器完成简单的网络布局。")]),_._v(" "),t("h3",[_._v("基本的排版")]),_._v(" "),_._m(0),_._v(" "),t("example",{attrs:{demo:"basic/grid1"}}),_._v(" "),t("h3",[_._v("组件排版")]),_._v(" "),_._m(1),_._v(" "),t("blockquote",[_._v("注意：当使用非字符串模式的时候，请使用"),t("code",[_._v("h-row")]),_._v(","),t("code",[_._v("h-col")]),_._v("，详情请参考"),t("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components.html#组件命名约定",target:"_blank"}},[_._v("vue组件命名约定")])]),_._v(" "),t("example",{attrs:{demo:"basic/grid2"}}),_._v(" "),t("h3",[_._v("区块间隔")]),_._v(" "),_._m(2),_._v(" "),t("blockquote",[_._v("我们使用的并非是栅格的排列布局，所以可以对循环的区块做布局。")]),_._v(" "),t("example",{attrs:{demo:"basic/grid3"}}),_._v(" "),t("h3",[_._v("横向，竖向区块间隔")]),_._v(" "),_._m(3),_._v(" "),t("example",{attrs:{demo:"basic/grid4"}}),_._v(" "),t("h3",[_._v("Flex布局")]),_._v(" "),t("p",[_._v("Flex布局主要使用在flex自适应的场景中。")]),_._v(" "),t("example",{attrs:{demo:"basic/grid5"}}),_._v(" "),t("h3",[_._v("自适应布局")]),_._v(" "),t("p",[_._v("实现响应式设计，利用五个尺寸：xs, sm, md, lg, xl。")]),_._v(" "),t("p",[_._v("max-768px, 768px, 992px,1200px , min-1800px")]),_._v(" "),t("example",{attrs:{demo:"basic/grid6"}}),_._v(" "),t("h3",[_._v("Row 参数")]),_._v(" "),_._m(4),_._v(" "),t("h3",[_._v("Col 参数")]),_._v(" "),_._m(5)],1)},staticRenderFns:[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("p",[_._v("利用基本的class"),t("code",[_._v(".h-col-{n}")]),_._v("进行排版布局。")])},function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("p",[_._v("利用组件"),t("code",[_._v("Row")]),_._v(","),t("code",[_._v("Col")]),_._v("进行排版布局，通过"),t("code",[_._v("width")]),_._v("设定宽度。")])},function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("p",[_._v("通过给"),t("code",[_._v("Row")]),_._v("添加"),t("code",[_._v("space")]),_._v("属性，让"),t("code",[_._v("Col")]),_._v("产生间距。间距可以设置为任意整数数值。")])},function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("p",[_._v("通过给"),t("code",[_._v("Row")]),_._v("添加"),t("code",[_._v("space-x")]),_._v(","),t("code",[_._v("space-y")]),_._v("属性，让"),t("code",[_._v("Col")]),_._v("产生间距。")])},function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("table",{staticClass:"table"},[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("可选值")]),_._v(" "),t("th",[_._v("默认值")])]),_._v(" "),t("tr",[t("td",[_._v("type")]),_._v(" "),t("td",[_._v("模式")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("flex")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("space")]),_._v(" "),t("td",[_._v("区块间隔")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("0")])]),_._v(" "),t("tr",[t("td",[_._v("space-x")]),_._v(" "),t("td",[_._v("横向区块间隔")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("0")])]),_._v(" "),t("tr",[t("td",[_._v("space-y")]),_._v(" "),t("td",[_._v("竖向区块间隔")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("0")])]),_._v(" "),t("tr",[t("td",[_._v("direction")]),_._v(" "),t("td",[_._v("flex布局区块方向")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("row, column, row-reverse, column-reverse")]),_._v(" "),t("td",[_._v("row")])]),_._v(" "),t("tr",[t("td",[_._v("justify")]),_._v(" "),t("td",[_._v("flex布局区块排列方式")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("start, end, center, space-around, space-between")]),_._v(" "),t("td",[_._v("start")])]),_._v(" "),t("tr",[t("td",[_._v("align")]),_._v(" "),t("td",[_._v("flex布局区块对齐方式")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("top, middle, bottom")]),_._v(" "),t("td",[_._v("top")])])])},function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("table",{staticClass:"table"},[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("可选值")]),_._v(" "),t("th",[_._v("默认值")])]),_._v(" "),t("tr",[t("td",[_._v("width")]),_._v(" "),t("td",[_._v("比例")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("1至24")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("flex")]),_._v(" "),t("td",[_._v("flex模式下的flex值")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("xs")]),_._v(" "),t("td",[_._v("自适应模式下大屏幕的显示比例")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("sm")]),_._v(" "),t("td",[_._v("自适应模式下中大屏幕的显示比例")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("md")]),_._v(" "),t("td",[_._v("自适应模式下中小屏幕的显示比例")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("r-w")])]),_._v(" "),t("tr",[t("td",[_._v("lg")]),_._v(" "),t("td",[_._v("自适应模式下小屏幕的显示比例")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("-")])])])}]}},216:function(_,v,t){var e=t(1)(t(1155),t(1651),null,null,null);_.exports=e.exports}});