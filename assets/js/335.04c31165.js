(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{693:function(t,e,n){"use strict";n.r(e);var a=n(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[t._v("本节代码对应 GitHub 分支: chapter3")])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/sanyuan0704/react-cloud-music/tree/chapter3",target:"_blank",rel:"noopener noreferrer"}},[t._v("仓库传送门"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("UI 层算是基本搞定了，不过之前都是用的 mock 数据，现在需要我们做数据层的开发了，一方面包括 Ajax 请求的处理，另一方面是 redux 的相关操作。")]),t._v(" "),n("h2",{attrs:{id:"axios-请求封装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#axios-请求封装"}},[t._v("#")]),t._v(" axios 请求封装")]),t._v(" "),n("p",[t._v("首先安装:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("npm install axios --save\n\n")])])]),n("p",[t._v("大家先去 "),n("a",{attrs:{href:"https://github.com/Binaryify/NeteaseCloudMusicApi/tree/master",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 网易云音乐接口"),n("OutboundLink")],1),t._v(" clone 这个 nodejs 项目然后运行在其他端口上，保证不和前端服务端口冲突。(在"),n("a",{attrs:{href:"https://github.com/sanyuan0704/react-cloud-music",target:"_blank",rel:"noopener noreferrer"}},[t._v("本项目"),n("OutboundLink")],1),t._v("仓库的readme文档也有详细说明)")]),t._v(" "),n("p",[t._v("现在在 src/api 目录下新建 config.js 文件，里面编写 axios 的配置:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import axios from 'axios';\n\nexport const baseUrl = 'http://xxx自己填';\n\n//axios 的实例及拦截器配置\nconst axiosInstance = axios.create ({\n  baseURL: baseUrl\n});\n\naxiosInstance.interceptors.response.use (\n  res => res.data,\n  err => {\n    console.log (err, \"网络错误\");\n  }\n);\n\nexport {\n  axiosInstance\n};\n\n")])])]),n("p",[t._v("然后在同一个目录下新建 request.js 用来封装不同的网络请求，内容如下:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import { axiosInstance } from \"./config\";\n\nexport const getBannerRequest = () => {\n  return axiosInstance.get ('/banner');\n}\n\nexport const getRecommendListRequest = () => {\n  return axiosInstance.get ('/personalized');\n}\n\n")])])]),n("p",[t._v("即需要的两个接口，到时候直接调这些函数即可。")]),t._v(" "),n("h2",{attrs:{id:"redux-层开发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redux-层开发"}},[t._v("#")]),t._v(" redux 层开发")]),t._v(" "),n("p",[t._v("在 Recommend 目录下，新建 store 文件夹，然后新建以下文件")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("actionCreators.js// 放不同 action 的地方\nconstants.js      // 常量集合，存放不同 action 的 type 值\nindex.js          // 用来导出 reducer，action\nreducer.js        // 存放 initialState 和 reducer 函数\n\n")])])]),n("h3",{attrs:{id:"_1-声明初始化-state"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-声明初始化-state"}},[t._v("#")]),t._v(" 1. 声明初始化 state")]),t._v(" "),n("p",[t._v("初始化 state 在 reducer 中进行")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//reducer.js\nimport * as actionTypes from './constants';\nimport { fromJS } from 'immutable';// 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构\n\nconst defaultState = fromJS ({\n  bannerList: [],\n  recommendList: [],\n});\n\n")])])]),n("h3",{attrs:{id:"_2-定义-constants"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-定义-constants"}},[t._v("#")]),t._v(" 2. 定义 constants")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//constants.js\nexport const CHANGE_BANNER = 'recommend/CHANGE_BANNER';\n\nexport const CHANGE_RECOMMEND_LIST = 'recommend/RECOMMEND_LIST';\n\n")])])]),n("h3",{attrs:{id:"_3-定义-reducer-函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-定义-reducer-函数"}},[t._v("#")]),t._v(" 3. 定义 reducer 函数")]),t._v(" "),n("p",[t._v("在 reducer.js 文件中加入以下处理逻辑，由于存放的是 immutable 数据结构，所以必须用 set 方法来设置新状态，同时取状态用 get 方法。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export default (state = defaultState, action) => {\n  switch (action.type) {\n    case actionTypes.CHANGE_BANNER:\n      return state.set ('bannerList', action.data);\n    case actionTypes.CHANGE_RECOMMEND_LIST:\n      return state.set ('recommendList', action.data);\n    default:\n      return state;\n  }\n}\n\n")])])]),n("h3",{attrs:{id:"_4-编写具体的-action"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-编写具体的-action"}},[t._v("#")]),t._v(" 4. 编写具体的 action")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//actionCreators.js\nimport * as actionTypes from './constants';\nimport { fromJS } from 'immutable';// 将 JS 对象转换成 immutable 对象\nimport { getBannerRequest, getRecommendListRequest } from '../../../api/request';\n\nexport const changeBannerList = (data) => ({\n  type: actionTypes.CHANGE_BANNER,\n  data: fromJS (data)\n});\n\nexport const changeRecommendList = (data) => ({\n  type: actionTypes.CHANGE_RECOMMEND_LIST,\n  data: fromJS (data)\n});\n\nexport const getBannerList = () => {\n  return (dispatch) => {\n    getBannerRequest ().then (data => {\n      dispatch (changeBannerList (data.banners));\n    }).catch (() => {\n      console.log (\"轮播图数据传输错误\");\n    }) \n  }\n};\n\nexport const getRecommendList = () => {\n  return (dispatch) => {\n    getRecommendListRequest ().then (data => {\n      dispatch (changeRecommendList (data.result));\n    }).catch (() => {\n      console.log (\"推荐歌单数据传输错误\");\n    });\n  }\n};\n\n\n")])])]),n("h3",{attrs:{id:"_5-将相关变量导出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-将相关变量导出"}},[t._v("#")]),t._v(" 5. 将相关变量导出")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//index.js\nimport reducer from './reducer'\nimport * as actionCreators from './actionCreators'\n\nexport { reducer, actionCreators };\n\n")])])]),n("p",[t._v("如果以后要加入新状态，或者创建新的 reducer 模块，直接走这些步骤即可。")]),t._v(" "),n("h2",{attrs:{id:"组件连接-redux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件连接-redux"}},[t._v("#")]),t._v(" 组件连接 Redux")]),t._v(" "),n("p",[t._v("首先，需要将 recommend 下的 reducer 注册到全局 store，在 store/reducer.js 中，内容如下:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import { combineReducers } from 'redux-immutable';\nimport { reducer as recommendReducer } from '../application/Recommend/store/index';\n\nexport default combineReducers ({\n  recommend: recommendReducer,\n});\n\n")])])]),n("p",[t._v("注册完成！")]),t._v(" "),n("p",[t._v("现在在 Recommend/index.js 中，准备连接 Redux。组件代码更新如下:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import React, { useEffect } from 'react';\nimport Slider from '../../components/slider/';\nimport { connect } from \"react-redux\";\nimport * as actionTypes from './store/actionCreators';\nimport RecommendList from '../../components/list/';\nimport Scroll from '../../baseUI/scroll/index';\nimport { Content } from './style';\n\nfunction Recommend (props){\n  const { bannerList, recommendList } = props;\n\n  const { getBannerDataDispatch, getRecommendListDataDispatch } = props;\n\n  useEffect (() => {\n    getBannerDataDispatch ();\n    getRecommendListDataDispatch ();\n    //eslint-disable-next-line\n  }, []);\n\n  const bannerListJS = bannerList ? bannerList.toJS () : [];\n  const recommendListJS = recommendList ? recommendList.toJS () :[];\n\n  return (\n    <Content>\n      <Scroll>\n        <div>\n          <Slider bannerList={bannerListJS}></Slider>\n          <RecommendList recommendList={recommendListJS}></RecommendList>\n        </div>\n      </Scroll>\n    </Content> \n  );\n}\n\n// 映射 Redux 全局的 state 到组件的 props 上\nconst mapStateToProps = (state) => ({\n  // 不要在这里将数据 toJS\n  // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable\n  bannerList: state.getIn (['recommend', 'bannerList']),\n  recommendList: state.getIn (['recommend', 'recommendList']),\n});\n// 映射 dispatch 到 props 上\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    getBannerDataDispatch () {\n      dispatch (actionTypes.getBannerList ());\n    },\n    getRecommendListDataDispatch () {\n      dispatch (actionTypes.getRecommendList ());\n    },\n  }\n};\n\n// 将 ui 组件包装成容器组件\nexport default connect (mapStateToProps, mapDispatchToProps)(React.memo (Recommend));\n\n")])])]),n("p",[t._v("到这里，一个精美的推荐页面就开发完成了。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/10/18/16dddf0a5ad3e1ef?w=375&h=669&f=jpeg&s=81502",alt:""}})])])}),[],!1,null,null,null);e.default=s.exports}}]);