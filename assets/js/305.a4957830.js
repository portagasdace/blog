(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{661:function(e,t,a){"use strict";a.r(t);var n=a(42),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("blockquote",[a("p",[e._v("本节代码对应 GitHub 分支: chapter5")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/sanyuan0704/react-cloud-music/tree/chapter5",target:"_blank",rel:"noopener noreferrer"}},[e._v("仓库传送门"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("上一章我们留下了一道思考题，让组件切换时能够保存当前组件的状态。当组件切换后，当前组件即被卸载，对于组件内部有关的函数引用也会消失，作用域引用消失，闭包变量不复存在。")]),e._v(" "),a("p",[e._v("所以通过该组件内部缓存是行不通的，必须采取状态存储在组件外的方式。")]),e._v(" "),a("p",[e._v("也许你马上就想到了 redux，这当然可以，但如果真要用这个，我也就没有说的必要了。")]),e._v(" "),a("p",[e._v("其实也是为了拓展一下大家的思路，全局的状态管理不仅仅可以用 redux，react hooks 同样可以模拟出这种功能。现在我们就用 hooks 中的 useContext 结合 useReducer 打造出类似 redux 的状态管理功能。")]),e._v(" "),a("h2",{attrs:{id:"用-hooks-写一个简单的-redux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用-hooks-写一个简单的-redux"}},[e._v("#")]),e._v(" 用 hooks 写一个简单的 redux")]),e._v(" "),a("p",[e._v("在 Singers 目录下新建一个文件 data.js, 模拟一个简单的 redux 代码如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import React, {createContext, useReducer} from 'react';\nimport { fromJS } from 'immutable';\n\n//context\nexport const CategoryDataContext = createContext ({});\n\n// 相当于之前的 constants\nexport const CHANGE_CATEGORY = 'singers/CHANGE_CATEGORY';\nexport const CHANGE_ALPHA = 'singers/CHANGE_ALPHA';\n\n//reducer 纯函数\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case CHANGE_CATEGORY:\n      return state.set ('category', action.data);\n    case CHANGE_ALPHA:\n      return state.set ('alpha', action.data);\n    default:\n      return state;\n  }\n};\n\n//Provider 组件\nexport const Data = props => {\n  //useReducer 的第二个参数中传入初始值\n  const [data, dispatch] = useReducer (reducer, fromJS ({\n    category: '',\n    alpha: ''\n  }));\n  return (\n    <CategoryDataContext.Provider value={{data, dispatch}}>\n      {props.children}\n    </CategoryDataContext.Provider>\n  )\n}\n\n")])])]),a("p",[e._v("然后，在 App.js 中用 Data 这个 Provider 组件来包裹下面的子组件:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//App.js\n// 增加引入代码\nimport { Data } from './application/Singers/data';\n\nfunction App () {\n  return (\n    <Provider store={store}>\n      <HashRouter>\n        <GlobalStyle></GlobalStyle>\n        <IconStyle></IconStyle>\n        <Data>\n          { renderRoutes (routes) }\n        </Data>\n      </HashRouter>\n    </Provider>\n  )\n}\n\n")])])]),a("p",[e._v("然后在 Singers/index.js 来运用：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 首先需要引入 useContext\n// 将之前的 useState 代码删除\nconst {data, dispatch} = useContext (CategoryDataContext);\n// 拿到 category 和 alpha 的值\nconst {category, alpha} = data.toJS ();\n\n")])])]),a("p",[e._v("而且 handleUpdatexxx 函数也要修改:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//CHANGE_ALPHA 和 CHANGE_CATEGORY 变量需要从 data.js 中引入\nlet handleUpdateAlpha = (val) => {\n  dispatch ({type: CHANGE_ALPHA, data: val});\n  updateDispatch (category, val);\n};\n\nlet handleUpdateCatetory = (val) => {\n  dispatch ({type: CHANGE_CATEGORY, data: val});\n  updateDispatch (val, alpha);\n};\n\n")])])]),a("p",[e._v("至此，一个比较简单的 redux 就用 hooks 实现完成了。")]),e._v(" "),a("p",[e._v("看到这里，你可能会说，hooks 现在不就可以取代 redux 吗？")]),e._v(" "),a("p",[e._v("现在的确也有不少人这样说，尽管 hooks 能模拟 redux 的核心功能，但是能够取代 redux 这件事我不敢苟同。")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("首先 redux 有非常成熟的状态跟踪调试工具，也就是 chrome 浏览器的 redux-devtools 插件，至少到现在为止开发中很多的错误我都是通过它发现的。换而言之，它能够协助我们写出更利于维护的代码，并且在出现故障时快速找到问题的根源。")])]),e._v(" "),a("li",[a("p",[e._v("其次，redux 有非常成熟的数据模块化方案，不同模块的 reducer 直接导出，在全局的 store 中，调一下 redux 自带的 combineReducer 即可，目前从官方的角度看 hooks 这方面并不成熟。")])]),e._v(" "),a("li",[a("p",[e._v("Redux 拥有成熟且强大的中间件功能，如 redux-logger, redux-thunk, redux-saga，用 hooks 实现中间件的功能就只能靠自己手动实现了。")])])]),e._v(" "),a("p",[e._v("当然 redux 也并不是十全十美的，有些方面也经常被人吐槽，比如繁重的模板代码，需要 react-redux 引入徒增项目包大小等等。但是瑕不掩瑜，这些不妨碍我们使用 redux 开发出容易调试并维护的应用。")]),e._v(" "),a("p",[e._v("因此客观来说，redux 是一个短时间不可被替代的状态管理方案。")]),e._v(" "),a("h2",{attrs:{id:"歌手列表页的数据缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#歌手列表页的数据缓存"}},[e._v("#")]),e._v(" 歌手列表页的数据缓存")]),e._v(" "),a("p",[e._v("有了分类名称的缓存，我们再来做歌手列表页的数据缓存就轻松多了。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//useEffect 中增加判断逻辑\nuseEffect (() => {\n  if (!singerList.size) {\n    getHotSingerDispatch ();\n  }\n}, []);\n\n")])])]),a("p",[e._v("当歌手列表不为空时，就不发 Ajax 请求，同时能够记忆之前的分类，让分类和列表对应，正是我们想要的效果。")])])}),[],!1,null,null,null);t.default=r.exports}}]);