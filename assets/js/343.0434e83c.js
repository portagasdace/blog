(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{699:function(s,e,t){"use strict";t.r(e);var a=t(42),v=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"导读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导读"}},[s._v("#")]),s._v(" 导读")]),s._v(" "),t("p",[s._v("本节标题：「装修阶段」- CSS 资源同构处理")]),s._v(" "),t("p",[s._v("本节主旨：利用同构，实现 CSS 资源按需直出，提升 CSS 资源的加载速度，提升页面性能")]),s._v(" "),t("p",[s._v("本节配套代码：")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/Bigerfe/koa-react-ssr/tree/better/packages/my-react-ssr-cssiso",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/Bigerfe/koa-react-ssr/tree/better/packages/my-react-ssr-cssiso"),t("OutboundLink")],1)]),s._v(" "),t("h1",{attrs:{id:"正文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正文"}},[s._v("#")]),s._v(" 正文")]),s._v(" "),t("p",[s._v("之前的小节中我们已经对 "),t("code",[s._v("css")]),s._v("做过处理，将所有的"),t("code",[s._v("css")]),s._v("打包到一个文件内,然后作为资源"),t("code",[s._v("link")]),s._v("和组件的 "),t("code",[s._v("html")]),s._v("内容一起直出到客户端。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/8/16f842f0a71e223d?w=891&h=178&f=png&s=49649",alt:""}})]),s._v(" "),t("h1",{attrs:{id:"发现问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发现问题"}},[s._v("#")]),s._v(" 发现问题")]),s._v(" "),t("p",[s._v("上面的方式很简单也很有效。")]),s._v(" "),t("p",[s._v("但存在一些问题，当项目体量上来后"),t("code",[s._v("css")]),s._v("代码量剧增，导致最终打包的"),t("code",[s._v("css")]),s._v("文件会过大，另外只要一个页面的"),t("code",[s._v("css")]),s._v("内容产生变化，就会导致此文件的缓存生效，用户端就需要重新下载，最终会对体验和性能造成影响。")]),s._v(" "),t("h1",{attrs:{id:"优化思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化思路"}},[s._v("#")]),s._v(" 优化思路")]),s._v(" "),t("p",[s._v("如何来解决这个问题呢？")]),s._v(" "),t("p",[s._v("前面的小节中我们对"),t("code",[s._v("js")]),s._v(" 业务代码进行了优化，使用了路由拆分，按需加载,只加载基础库和当前页面的代码，大大缩减了所需下载的资源体积。")]),s._v(" "),t("p",[s._v("所以我们也可以使用"),t("code",[s._v("按需加载")]),s._v("的方式对该问题进行优化处理。")]),s._v(" "),t("h1",{attrs:{id:"实现分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现分析"}},[s._v("#")]),s._v(" 实现分析")]),s._v(" "),t("p",[s._v("如何实现呢？")]),s._v(" "),t("p",[s._v("相信大家都用过"),t("code",[s._v("style-loader")]),s._v("，该库的作用是将模块引入的 "),t("code",[s._v("css")]),s._v("，在客户端渲染的时候以内联的形式动态插入到"),t("code",[s._v("head")]),s._v("内。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/8/16f843f48bca87f5?w=444&h=577&f=png&s=68879",alt:""}})]),s._v(" "),t("p",[s._v("上图便是我们在单页应用开发中的必然产物。")]),s._v(" "),t("p",[s._v("那么插入到"),t("code",[s._v("DOM")]),s._v("时的"),t("code",[s._v("css")]),s._v("内容从哪里获得的呢?")]),s._v(" "),t("p",[s._v("这里就需要说到"),t("code",[s._v("css-loader")]),s._v("了，它的存在是很强大的，"),t("code",[s._v("js")]),s._v("模块内导入的"),t("code",[s._v("css")]),s._v("文件能够被处理，全仰仗该库的作用。")]),s._v(" "),t("p",[s._v("该库会把"),t("code",[s._v("css")]),s._v("代码转换成"),t("code",[s._v("js")]),s._v("代码或者"),t("code",[s._v("css")]),s._v("字符串，最终和"),t("code",[s._v("js")]),s._v("模块代码打包在一起，之后便能够作为"),t("code",[s._v("js")]),s._v("代码的一部分加载到客户端，然后"),t("code",[s._v("style-loader")]),s._v("便会简单粗暴的使用"),t("code",[s._v("DOM")]),s._v("操作将"),t("code",[s._v("css")]),s._v("中的样式插入"),t("code",[s._v("head")]),s._v("内。")]),s._v(" "),t("p",[s._v("那上面这些内容和我们的 "),t("code",[s._v("css")]),s._v("按需加载有什么关系呢？")]),s._v(" "),t("p",[s._v("我们可以得到一些信息，"),t("code",[s._v("css-loader")]),s._v("可以让我们得到导入的"),t("code",[s._v("css")]),s._v("文件的内容，如果我们得到了这些信息就可以在服务端直出组件的时候将"),t("code",[s._v("css")]),s._v("代码一同直出。")]),s._v(" "),t("p",[s._v("当客户端接管页面后，后续的访问就是单页应用了，此时"),t("code",[s._v("css")]),s._v("就应该是由客户端代码动态插入到"),t("code",[s._v("head")]),s._v("标签内。")]),s._v(" "),t("p",[s._v("但是上面介绍的"),t("code",[s._v("style-loader")]),s._v("就无法胜任了，它只能运行在客户端，在服务端就无法愉快的玩耍了。")]),s._v(" "),t("p",[s._v("所以我们要使用一种同构的方式来处理，让双端都可以运行。")]),s._v(" "),t("h1",{attrs:{id:"isomorphic-style-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isomorphic-style-loader"}},[s._v("#")]),s._v(" isomorphic-style-loader")]),s._v(" "),t("p",[s._v("该库没有像"),t("code",[s._v("style-loader")]),s._v("那样直接进行"),t("code",[s._v("DOM")]),s._v("操作，而是导出了一些辅助方法，让用户依据实际情况来调用不同的方法。")]),s._v(" "),t("p",[s._v("可以参考下面部分源码来理解下")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("//用于获得模块信息和 样式内容\nexports._getContent = function() { return content; };\n//获得 css 内容\nexports._getCss = function() { return '' + css; };\n//执行 dom 操作，将 css 动态插入到head 内\nexports._insertCss = function(options) { return insertCss(content, options) };\n\n\n")])])]),t("p",[s._v("可以先看下官方的说明,里面也包含了很多参考实例")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/kriasoft/isomorphic-style-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/kriasoft/isomorphic-style-loader"),t("OutboundLink")],1)]),s._v(" "),t("h1",{attrs:{id:"具体实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体实现"}},[s._v("#")]),s._v(" 具体实现")]),s._v(" "),t("p",[s._v("现在我们已经了解了"),t("code",[s._v("css")]),s._v("同构直出的原理，接下来进行一步一步的实现。")]),s._v(" "),t("h2",{attrs:{id:"从开发环境开始-首先调整-webpack-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从开发环境开始-首先调整-webpack-配置"}},[s._v("#")]),s._v(" 从开发环境开始，首先调整 webpack 配置")]),s._v(" "),t("p",[s._v("之前我们是使用插件"),t("code",[s._v("mini-css-extract-plugin")]),s._v("将"),t("code",[s._v("css")]),s._v("全部提取到一个文件内，现在这个插件就不需要使用了，替换为下面的配置。")]),s._v(" "),t("p",[t("code",[s._v("客户端配置")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// webpack/webpack.dev.config.js\n\n//...\n  {\n                test: /\\.(sa|sc|c)ss$/,\n                use: ['isomorphic-style-loader',\n                    {\n                        loader: \"css-loader\",\n                        options: {\n                            importLoaders: 2\n                        }\n                    }, 'postcss-loader', 'sass-loader'\n                ]\n            }\n//...\n\n")])])]),t("p",[t("code",[s._v("服务端配置")])]),s._v(" "),t("p",[s._v("同时服务端"),t("code",[s._v("webpack.server.config.js")]),s._v("的配置和上面客户端的配置保持一致即可。")]),s._v(" "),t("h2",{attrs:{id:"页面组件的调整"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面组件的调整"}},[s._v("#")]),s._v(" 页面组件的调整")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// ./src/client/pages/index/index.js\n\n//导入 css\nimport css from  './index.scss';\n//导入高阶组件，用于同构处理 css\nimport withStyles from 'isomorphic-style-loader/withStyles'\n\n//组件代码 略...\n\n\nexport default withStyles(css)(PageContainer(Index));\n\n\n\n")])])]),t("h2",{attrs:{id:"客户端渲染入口的调整"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端渲染入口的调整"}},[s._v("#")]),s._v(" 客户端渲染入口的调整")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("//定义css处理逻辑，实现将 css 动态插入到`head`内\n\n  const insertCss = (...styles) => {\n                const removeCss = styles.map(style => style._insertCss());//客户端执行，插入style\n                return () => removeCss.forEach(dispose => dispose());//组件卸载时 移除当前的 style 标签\n        }\n\n\n//导入内置的 context 组件，用于将上面的方法传递给子组件\nimport StyleContext from 'isomorphic-style-loader/StyleContext';\n    \nReactDom.hydrate(<BrowserRouter>\n    <StyleContext.Provider value={{ insertCss }}>\n        <App routeList={routeList}/>\n    </StyleContext.Provider>\n\n</BrowserRouter>,document.getElementById('root'))；\n//...\n\n")])])]),t("h2",{attrs:{id:"服务端-ssr-中间件调整"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端-ssr-中间件调整"}},[s._v("#")]),s._v(" 服务端 "),t("code",[s._v("ssr")]),s._v(" 中间件调整")]),s._v(" "),t("p",[s._v("基本上和客户端的渲染部分差不多，只是服务端只需要收集到所有组件的"),t("code",[s._v("css")]),s._v("样式内容。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("//定义存储组件 css 的变量\nconst css = new Set() // CSS for all rendered React components\n\n//定义收集 css 的方法.此方法会在`withStyles`高阶组件内获得，然后执行该方法，完成 css 内容搜集。\nconst insertCss = (...styles) => styles.forEach(style => css.add(style._getContent()));\n\nconst html = renderToString(<StaticRouter location={path} context={context}>\n<StyleContext.Provider value={{ insertCss }} >\n    <App routeList={staticRoutesList}></App></StyleContext.Provider>\n</StaticRouter>);\n\n//...\n\n\n")])])]),t("h2",{attrs:{id:"配置基本完成-但存在问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置基本完成-但存在问题"}},[s._v("#")]),s._v(" 配置基本完成，但存在问题")]),s._v(" "),t("p",[s._v("我们先来看下效果。")]),s._v(" "),t("p",[s._v("本地启动服务并运行，查看网页源代码的确能看到"),t("code",[s._v("css")]),s._v("直出到了页面。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/8/16f85df30392c227?w=1466&h=818&f=png&s=206441",alt:""}})]),s._v(" "),t("p",[s._v("但是通过审查元素会发现问题，客户端也执行了插入，相当于是两份相同的 "),t("code",[s._v("css")]),s._v("。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/8/16f85e20cb580434?w=1894&h=1176&f=png&s=603469",alt:""}})]),s._v(" "),t("p",[s._v("正常情况下应该是服务端直出了"),t("code",[s._v("css")]),s._v("内容，客户端在插入前需要判断是否可以插入。")]),s._v(" "),t("p",[t("code",[s._v("根据什么来判断呢？")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/9/16f85e415b62c26e?w=1114&h=624&f=png&s=216712",alt:""}})]),s._v(" "),t("p",[s._v("上面截图中能看到"),t("code",[s._v("style")]),s._v("标签上都有"),t("code",[s._v("id")]),s._v("的属性，所以关键就在这里，猜想肯定是通过"),t("code",[s._v("id")]),s._v("来判断。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("//执行 dom 操作，将 css 动态插入到head 内\nexports._insertCss = function(options) { return insertCss(content, options) };\n\n")])])]),t("p",[t("code",[s._v("_insertCss")]),s._v("方法的内部逻辑也是通过 "),t("code",[s._v("id")]),s._v("来判断的。")]),s._v(" "),t("p",[s._v("下面是关键代码，一看便知。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// https://github.com/kriasoft/isomorphic-style-loader/blob/master/src/insertCss.js\n//...\n\n//根据 id 获取对应的节点\n let elem = document.getElementById(id)\n    let create = false\n\n    if (!elem) {//如果节点不存在 才会执行插入\n      create = true\n\n      elem = document.createElement('style')\n      elem.setAttribute('type', 'text/css')\n      elem.id = id\n\n      if (media) {\n        elem.setAttribute('media', media)\n      }\n    }\n\n//...\n\n")])])]),t("p",[t("code",[s._v("如何给 style 标签 增加 id呢？")])]),s._v(" "),t("p",[t("code",[s._v("id 的取值又是什么,又如何取值呢？")])]),s._v(" "),t("p",[s._v("其实"),t("code",[s._v("isomorphic-style-loader")]),s._v("已为我们提供，只是有时候需要多尝试下。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("//用于获得模块信息 和 样式内容\nexports._getContent = function() { return content; };\n\n")])])]),t("p",[s._v("该方法会返回当前 "),t("code",[s._v("css")]),s._v("模块的"),t("code",[s._v("id")]),s._v("和样式信息。")]),s._v(" "),t("p",[s._v("在上面几张图中能看到"),t("code",[s._v("id")]),s._v("的取值是很长的字符串。之所以这么长，是因为在"),t("code",[s._v("development")]),s._v("环境中"),t("code",[s._v("id")]),s._v("值默认为模块的相对路径地址。")]),s._v(" "),t("h2",{attrs:{id:"设置style标签-id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置style标签-id"}},[s._v("#")]),s._v(" 设置style标签 id")]),s._v(" "),t("p",[s._v("根据上面的分析，我们来对"),t("code",[s._v("react ssr")]),s._v("中间件做下调整。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    const css = new Set() ;\n    - React components\n    const insertCss = (...styles) => styles.forEach(style => css.add(style.——getCss()));\n    \n    + React components\n    const insertCss = (...styles) => styles.forEach(style => css.add(style._getContent()));//该方法会获得css id 值\n\n\n")])])]),t("p",[s._v("增加转换逻辑，在直出时可以带上"),t("code",[s._v("style")]),s._v("标签和"),t("code",[s._v("id")]),s._v("属性。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('    const styles = [];\n    [...css].forEach(item => {\n        let [mid, content] = item[0];\n        styles.push(`<style id="s${mid}-0">${content}</style>`)\n    });\n    //...\n\n')])])]),t("p",[s._v("直出部分")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<head>\n    <meta charset="UTF-8">\n    <title>${tdk.title}</title>\n    <meta name="keywords" content="${tdk.keywords}" />\n    <meta name="description" content="${tdk.description}" />\n    ${styles.join(\'\')}\n</head>\n\n')])])]),t("h1",{attrs:{id:"生产环境处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产环境处理"}},[s._v("#")]),s._v(" 生产环境处理")]),s._v(" "),t("p",[s._v("经过上一步的处理，目前已经不会重复插入"),t("code",[s._v("style")]),s._v("了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/9/16f85f2a24505ea7?w=1094&h=496&f=png&s=192551",alt:""}})]),s._v(" "),t("p",[s._v("开发环境是 ok 了，不过生产环境中，仍然有坑。")]),s._v(" "),t("p",[s._v("继续往下看。")]),s._v(" "),t("p",[s._v("生产环境也主要是调整下"),t("code",[s._v("webpack.prod.config.js")]),s._v("配置，移除"),t("code",[s._v("mini-css-extract-plugin")]),s._v("的使用，调整 下"),t("code",[s._v("scss")]),s._v("相关"),t("code",[s._v("loader")]),s._v("配置即可。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("   {\n        test: /\\.(sa|sc|c)ss$/,\n        use: ['isomorphic-style-loader',\n                {\n                    loader: \"css-loader\",\n                    options: {\n                            importLoaders: 2\n                        }\n                }, 'postcss-loader', 'sass-loader'\n            ]\n    }\n\n")])])]),t("p",[s._v("构建后，并启动生产环境服务。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/9/16f85f9cc7d545bf?w=2220&h=446&f=png&s=215831",alt:""}})]),s._v(" "),t("p",[s._v("从上图中可以看出，在生产环境"),t("code",[s._v("style")]),s._v("标签的"),t("code",[s._v("id")]),s._v("不再是模块的相对路径，而变成了数字，比如"),t("code",[s._v("s19-0")]),s._v("。")]),s._v(" "),t("p",[s._v("其中的"),t("code",[s._v("s")]),s._v("为前缀，后面的"),t("code",[s._v("-0")]),s._v("其实没用，永远都是"),t("code",[s._v("-0")]),s._v("，源码中本身可以删除这个逻辑。")]),s._v(" "),t("p",[s._v("问题出现了，当我们审查元素的时候发现"),t("code",[s._v("style")]),s._v("标签增多了，又出现了重复的插入，客户端排重失败。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/9/16f85fe063783640?w=1894&h=672&f=png&s=247803",alt:""}})]),s._v(" "),t("p",[s._v("原因是：客户端的模块 "),t("code",[s._v("id")]),s._v("和服务器的模块"),t("code",[s._v("id")]),s._v("值不同。")]),s._v(" "),t("p",[s._v("为什么不同呢 ？")]),s._v(" "),t("p",[s._v("因为环境问题，打包的目标平台不同，所以"),t("code",[s._v("node")]),s._v("和"),t("code",[s._v("浏览器")]),s._v("的打包内容也不同，所以就会导致模块的"),t("code",[s._v("id")]),s._v("值不同。")]),s._v(" "),t("p",[s._v("诶？可是在开发环境采用的是模块的路径是相同的，这个是肯定的。")]),s._v(" "),t("h3",{attrs:{id:"hashedmoduleidsplugin-解决模块-id-不稳定问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashedmoduleidsplugin-解决模块-id-不稳定问题"}},[s._v("#")]),s._v(" HashedModuleIdsPlugin 解决模块 id 不稳定问题")]),s._v(" "),t("p",[s._v("该插件会根据模块的相对路径生成一个四位数的"),t("code",[s._v("hash")]),s._v("作为模块"),t("code",[s._v("id")]),s._v(", 主要用于生产环境。")]),s._v(" "),t("p",[s._v("ps:服务端打包配置也需要配置此插件")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("new webpack.HashedModuleIdsPlugin({\n  // Options...\n})\n\n")])])]),t("p",[s._v("ok，直接上插件。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// ./webpack/webpack.prod.config.js\n\n  plugins: [\n        new webpack.HashedModuleIdsPlugin(),\n    //...\n    ]\n\n\n")])])]),t("p",[s._v("重新启动服务后，得到了我们期望的结果。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/9/16f860762a797dd4?w=2108&h=440&f=png&s=204836",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/9/16f8607fa336a71e?w=1406&h=438&f=png&s=177235",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"但是最后还有个-bug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#但是最后还有个-bug"}},[s._v("#")]),s._v(" 但是最后还有个 bug")]),s._v(" "),t("p",[s._v("这个问题很难发现，隐藏的比较深。")]),s._v(" "),t("p",[s._v("我在验证的过程中发现了"),t("code",[s._v("style")]),s._v("标签内容会被替换，经过一番折腾验证了这个问题。")]),s._v(" "),t("p",[s._v("然后经过研究和排查，最终确定这该同构库的一个 "),t("code",[s._v("bug")]),s._v("。")]),s._v(" "),t("p",[t("code",[s._v("insertCss.js 文件")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/9/16f860c3ee2817ec?w=1464&h=1406&f=png&s=255043",alt:""}})]),s._v(" "),t("p",[s._v("以上代码中，"),t("code",[s._v("id")]),s._v("排重验证没有问题，到后面，也就是我标注的地方，判断是有问题的。")]),s._v(" "),t("p",[s._v("但我没理解为什么加这个判断，干掉以后就正常了。")]),s._v(" "),t("p",[s._v("所以也顺便给官方提了一个 "),t("a",{attrs:{href:"https://github.com/kriasoft/isomorphic-style-loader/pull/176",target:"_blank",rel:"noopener noreferrer"}},[s._v("pr"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h1",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("本节我们再次对"),t("code",[s._v("css")]),s._v("代码进行了一次优化，采用的是同构直出的方式实现了"),t("code",[s._v("css")]),s._v("的按需加载，减少了请求次数，解决了单一文件的弊端。")]),s._v(" "),t("p",[s._v("另外也大致的了解了"),t("code",[s._v("style-loader")]),s._v(","),t("code",[s._v("css-loader")]),s._v("以及"),t("code",[s._v("isomorphic-style-loader")]),s._v("的原理。")]),s._v(" "),t("p",[s._v("本节完整代码已上传")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/Bigerfe/koa-react-ssr/tree/better/packages/my-react-ssr-cssiso",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/Bigerfe/koa-react-ssr/tree/better/packages/my-react-ssr-cssiso"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("感谢你的阅读。")]),s._v(" "),t("p",[s._v("如果有问题欢迎留言，也欢迎在留言区留下你的想法和思考。")])])}),[],!1,null,null,null);e.default=v.exports}}]);