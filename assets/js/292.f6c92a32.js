(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{649:function(e,r,t){"use strict";t.r(r);var a=t(42),_=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"实战篇-01-开发前准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实战篇-01-开发前准备"}},[e._v("#")]),e._v(" 实战篇 01：开发前准备")]),e._v(" "),t("h2",{attrs:{id:"为什么选择-react"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么选择-react"}},[e._v("#")]),e._v(" 为什么选择 React")]),e._v(" "),t("p",[e._v("企业管理系统作为供企业内部人员使用的应用，在浏览器适配性方面的要求并没有供普通用户使用的应用那么严格，这为我们选择现代的 JavaScript 框架提供了一定的便利。于是接下来的问题就变为了在 React、Angular、Vue 这三大 JavaScript 框架中应当选择哪一个？")]),e._v(" "),t("p",[e._v("其实这个问题在具体技术层面并没有一个确定的答案，更多的还是要看团队成员们的背景。如果专业前端比较多的话，React 和 Vue 都是不错的选择。如果团队中后端背景的全栈比较多的话，大而全且接近 Java 思想的 Angular 可能是最优的选择。")]),e._v(" "),t("p",[e._v("至于 React 的 Vue 之间的选择可以说虽然二者在写法上有着许多的不同，但核心的区别却是在于二者的社区构成。React 的社区更加去中心化，许多常用的第三方库都不是由官方提供的。这让 React 社区非常得活跃，在一个问题上大家可能会产生出许多种不同的解决方案。Vue 的社区则相对而言更中心化一些，除了 Vue 本身支持的功能要比 React 多之外，如 "),t("a",{attrs:{href:"https://vuex.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuex"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue Router"),t("OutboundLink")],1),e._v(" 这样由官方维护的第三方库也让 Vue 的社区更多地是在官方的指导下去解决问题。简而言之的话，React 选择更多，Vue 更标准化，但二者之间并没有好坏之分。")]),e._v(" "),t("p",[e._v("最后还有一点值得比较的就是二者对于 TypeScript 的友好程度。React 社区在 TypeScript 方面的探索以及积累的经验相对而言要比 Vue 社区更多一些，而 Vue 则是在 "),t("a",{attrs:{href:"https://vuejs.org/v2/guide/typescript.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("2.5"),t("OutboundLink")],1),e._v(" 版本之后才完善了自身对于 TypeScript 的支持。所以如果你的技术选型中有 TypeScript 的话，在渲染框架层面 React 可能会是一个更好的选择。")]),e._v(" "),t("h2",{attrs:{id:"示例项目列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例项目列表"}},[e._v("#")]),e._v(" 示例项目列表")]),e._v(" "),t("p",[e._v("在进入具体的实战篇之前，先交代下后面实战篇中会涉及的示例项目：")]),e._v(" "),t("ol",[t("li",[e._v("基础脚手架："),t("a",{attrs:{href:"https://github.com/AlanWei/react-boilerplate",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-boilerplate"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("企业管理系统脚手架："),t("a",{attrs:{href:"https://github.com/AlanWei/react-boilerplate-pro",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-boilerplate-pro"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("侧边栏组件："),t("a",{attrs:{href:"https://github.com/AlanWei/react-sider",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-sider"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("包含鉴权的路由："),t("a",{attrs:{href:"https://github.com/AlanWei/react-acl-router",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-acl-router"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("国际化多语言文件注入："),t("a",{attrs:{href:"https://github.com/AlanWei/react-intl-context",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-intl-context"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("这其中前两个是完整的示例项目，在把项目 clone 到本地后根据 README.md 文件中的指导就可以运行起来。后三个是企业管理系统中常用模块的组件抽象，全部都应用在了 "),t("code",[e._v("react-boilerplate-pro")]),e._v(" 项目中，推荐搭配着 demo 一起研究。")]),e._v(" "),t("h2",{attrs:{id:"node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[e._v("#")]),e._v(" Node.js")]),e._v(" "),t("p",[e._v("笔者本地的 Node.js 版本是 "),t("code",[e._v("8.11.3")]),e._v("。推荐使用 "),t("code",[e._v("8.10.0")]),e._v(" 或 "),t("code",[e._v("9.10.0")]),e._v(" 以上的版本，否则将不能够兼容 ESLint 当前最新的 "),t("code",[e._v("5.0")]),e._v(" 版本。")]),e._v(" "),t("h2",{attrs:{id:"包管理工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#包管理工具"}},[e._v("#")]),e._v(" 包管理工具")]),e._v(" "),t("p",[e._v("各位在安装项目依赖时可以使用默认的 npm，但在这里推荐使用 "),t("a",{attrs:{href:"https://yarnpkg.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yarn"),t("OutboundLink")],1),e._v(" 作为项目的包管理工具，在所有的项目中也都提供了相应的 "),t("code",[e._v("yarn.lock")]),e._v(" 文件。这样可以确保大家使用的第三方依赖与笔者本地的保持一致，而且 Yarn 自身强大的 cache 功能也可以在重复安装相同依赖时起到一定的加速作用。")]),e._v(" "),t("h2",{attrs:{id:"第三方依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三方依赖"}},[e._v("#")]),e._v(" 第三方依赖")]),e._v(" "),t("p",[e._v("所有项目中需要用到的第三方依赖都在项目的 "),t("code",[e._v("package.json")]),e._v(" 以及 "),t("code",[e._v("yarn.lock")]),e._v(" 中有所体现，大家使用 "),t("code",[e._v("yarn install")]),e._v("（或 "),t("code",[e._v("npm install")]),e._v("）安装即可。")]),e._v(" "),t("p",[e._v("这里列出一些使用的重要依赖的版本，供大家参考：")]),e._v(" "),t("ul",[t("li",[e._v("react: "),t("code",[e._v("16.4.2")])]),e._v(" "),t("li",[e._v("react-dom: "),t("code",[e._v("16.4.2")])]),e._v(" "),t("li",[e._v("redux: "),t("code",[e._v("4.0.0")])]),e._v(" "),t("li",[e._v("redux-thunk: "),t("code",[e._v("2.3.0")])]),e._v(" "),t("li",[e._v("react-router-dom: "),t("code",[e._v("4.3.1")])]),e._v(" "),t("li",[e._v("connected-react-router: "),t("code",[e._v("4.3.0")])]),e._v(" "),t("li",[e._v("antd: "),t("code",[e._v("3.6.6")])]),e._v(" "),t("li",[e._v("webpack: "),t("code",[e._v("4.16.5")])]),e._v(" "),t("li",[e._v("babel-core: "),t("code",[e._v("6.26.3")])]),e._v(" "),t("li",[e._v("eslint: "),t("code",[e._v("5.3.0")])]),e._v(" "),t("li",[e._v("jest: "),t("code",[e._v("23.4.2")])])]),e._v(" "),t("p",[e._v("示例项目会定时对使用的第三方依赖进行升级，但因为第三方依赖的更新速度较快，所以上面列出的第三方依赖版本可能会与实际示例项目中的有所出入，一切以实际示例项目中的 "),t("code",[e._v("package.json")]),e._v(" 和 "),t("code",[e._v("yarn.lock")]),e._v(" 为准。")]),e._v(" "),t("h2",{attrs:{id:"建议学习方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建议学习方式"}},[e._v("#")]),e._v(" 建议学习方式")]),e._v(" "),t("p",[e._v("小册以「企业管理系统」为切入点，希望向读者传达的是对于某一类特定的需求，过于原子化的组件化开发方式并不能够彻底地解决开发效率问题，从抽象的业务需求中能够具象出较为通用的可插拔可组合的技术方案才是解决实际问题的终极答案。")]),e._v(" "),t("p",[e._v("在之后的六个小节中我们将分别从项目脚手架、页面布局、权限管理、菜单匹配、消息通知以及多语言支持六个方面讲述在搭建企业管理系统应用中的最佳实践。但因为企业管理系统涉及的内容颇多，小册难免挂一漏万，没有涉及或遗漏的部分欢迎各位向笔者反馈。")]),e._v(" "),t("p",[e._v("在小册之外笔者还提供了 5 个示例项目，帮助大家从源码层面理解笔者的思路。强烈建议大家将项目 clone 下来，配合着小册中的内容自己运行一遍，相信会有更多的收获。")]),e._v(" "),t("p",[e._v("最后，小册中重点提及的一些开发理念及开发思想都并不局限于 React 这个框架本身，希望大家在阅读时可以抛去框架、语言的偏见，站在更高的层面和笔者一起去寻找通用业务问题的解决方案。")]),e._v(" "),t("p",[e._v("感谢各位的时间，也祝大家阅读、学习愉快。")]),e._v(" "),t("h2",{attrs:{id:"拓展学习资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拓展学习资料"}},[e._v("#")]),e._v(" 拓展学习资料")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://github.com/AlanWei/blog",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlanWei/blog"),t("OutboundLink")],1),e._v("：笔者的 GitHub 博客，里面有更多关于 React、组件库、前端数据层、服务端渲染的资料。")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/purerender",target:"_blank",rel:"noopener noreferrer"}},[e._v("pure render"),t("OutboundLink")],1),e._v("：阿里数据中台前端团队分享前端相关经验。")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/FrontendPerusal",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端精读评论"),t("OutboundLink")],1),e._v("：阿里数据中台前端团队分享前端界的好文精读。")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/ne-fe",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端新能源"),t("OutboundLink")],1),e._v("：分享前端有深度的新思想和新方法。")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/xtech",target:"_blank",rel:"noopener noreferrer"}},[e._v("蚂蚁金服体验科技"),t("OutboundLink")],1),e._v("：探索极致用户体验与最佳工程实践。")])])])}),[],!1,null,null,null);r.default=_.exports}}]);