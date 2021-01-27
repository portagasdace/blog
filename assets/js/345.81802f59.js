(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{701:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"导读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导读"}},[e._v("#")]),e._v(" 导读")]),e._v(" "),a("p",[e._v("本节标题：CSR/SSR双模式渲染支持以及其他细节梳理")]),e._v(" "),a("p",[e._v("本节主旨：前面没有关注小细节，这里合并起来统一说明，如双模式渲染、跨平台处理、前端模块 hack、跨端访问等")]),e._v(" "),a("h1",{attrs:{id:"正文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正文"}},[e._v("#")]),e._v(" 正文")]),e._v(" "),a("p",[e._v("本节主要是补充一下以前没有提到的一些细节和一些问题以及解决思路，以便于我们可以更方便的应用本骨架进行业务开发，减少前期的一些时间准备成本。")]),e._v(" "),a("p",[e._v("本来打算将"),a("code",[e._v("csr/ssr")]),e._v("双模式渲染作为独立章节来说，但是具体的实现很简单，作为独立章节的话又确实没必要。")]),e._v(" "),a("p",[e._v("但是这个特性又非常重要，所以干脆将内容进行压缩一下，只说主要的部分，同时将本骨架的其他的一些细节合在一起介绍吧。")]),e._v(" "),a("h1",{attrs:{id:"ssr-csr-两种渲染模式支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssr-csr-两种渲染模式支持"}},[e._v("#")]),e._v(" ssr/csr 两种渲染模式支持")]),e._v(" "),a("p",[e._v("目前我们的骨架只是单纯的支持了"),a("code",[e._v("ssr")]),e._v("模式下的开发和运行，其实我们还可以做一个扩展，多加一个运行模式"),a("code",[e._v("csr")]),e._v("模式，这样整个应用就可以支持两种渲染模式。")]),e._v(" "),a("p",[e._v("我们可以根据需要来进行切换渲染模式，当应用的负载过大的时候我们也可以方便的切换为单页应用，这种临时处理方案可以迅速的降低服务器的压力。")]),e._v(" "),a("h2",{attrs:{id:"实现说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现说明"}},[e._v("#")]),e._v(" 实现说明")]),e._v(" "),a("p",[e._v("具体的实现很简单，我们在全局配置文件内增加一个配置，用于表示渲染模式。")]),e._v(" "),a("p",[e._v("我们目前是"),a("code",[e._v("ssr")]),e._v("模式，如果当前是"),a("code",[e._v("csr")]),e._v(" 模式的话只需要返回一个空的"),a("code",[e._v("html")]),e._v("结构,然后向浏览器注入一个全局变量，表示当前的渲染模式。")]),e._v(" "),a("p",[e._v("其他的"),a("code",[e._v("css/js")]),e._v("资源正常按照"),a("code",[e._v("ssr")]),e._v("下的模式直出即可。")]),e._v(" "),a("p",[a("code",[e._v("增加一个全局设置")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// ./src/share/pro-config.js\n//双端公用的配置文件\n\nmodule.exports = {\n    __IS_SSR__:false,//是否为 ssr 模式\n    wdsPort:9002,//wds 服务的运行端口\n    nodeServerPort:9001,//node server 的监听端口\n    asyncComponentKey:'__IS_ASYNC_COMP_FLAG__'//标志组件是否是按需加载 turn | false\n}\n\n")])])]),a("p",[a("code",[e._v("服务端模式判断")])]),e._v(" "),a("p",[e._v("我们在"),a("code",[e._v("ssr")]),e._v("中间件对渲染模式进行判断，如果是"),a("code",[e._v("csr")]),e._v("则返回一个空的页面骨架。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('let html="";//组件渲染结果\n if (proConfig.__IS_SSR__){\n //匹配路由\n //数据预取\n //组件渲染\n }\n\n//...\n\n    ctx.body = `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>${tdk.title}</title>\n    <meta name="keywords" content="${tdk.keywords}" />\n    <meta name="description" content="${tdk.description}" />\n     ${assetsMap.css.join(\'\')}\n</head>\n<body>\n    <div id="root">\n       ${html}\n    </div>\n    <textarea id="ssrTextInitData" style="display:none;">\n    ${JSON.stringify(fetchResult)}\n    </textarea>\n</body>\n</html>\n</body>\n<script>\n//注入全局渲染模式\nwindow.__IS__SSR__=${proConfig.__IS_SSR__};\n<\/script>\n ${assetsMap.js.join(\'\')}\n`;\n\n\n')])])]),a("p",[a("code",[e._v("高阶组件调整")])]),e._v(" "),a("p",[e._v("我们的高阶组件"),a("code",[e._v("PageContainer")]),e._v("用来管理客户端页面在路由切换时是否进行异步获取数据，所以当前若是"),a("code",[e._v("csr")]),e._v("模式，则每次在"),a("code",[e._v("componentDidMount")]),e._v("内直接获取数据,也不需要监听"),a("code",[e._v("popstate")]),e._v("事件了。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// src/client/common/components/page-container/index.js\n\n//...\n\nasync componentDidMount() {\n            \n            _this = this; // 修正_this指向，保证_this指向当前渲染的页面组件\n            //只有当前是ssr模式才会注册事件，用于在页面切换时候触发\n            window.__IS__SSR && window.addEventListener('popstate', popStateCallback);\n\n            const canClientFetch = this.props.history && this.props.history.action === 'PUSH';//路由跳转的时候可以异步请求数据\n\n            if (canClientFetch || !window.__IS__SSR) {//如果是 csr 模式，每次都需要异步请求数据\n                await this.getInitialProps();\n            }\n        }\n\n\n//...\n\n\n")])])]),a("p",[e._v("完整代码："),a("a",{attrs:{href:"https://github.com/Bigerfe/koa-react-ssr/blob/better/packages/my-react-ssr-dataisobetter/src/client/common/components/page-container/index.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Bigerfe/koa-react-ssr/blob/better/packages/my-react-ssr-dataisobetter/src/client/common/components/page-container/index.js"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("code",[e._v("看下整体的页面输出结果")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>默认标题 - my react ssr</title>\n    <meta name="keywords" content="默认关键词" />\n    <meta name="description" content="默认描述" />\n     <link rel="stylesheet" type="text/css" href="//localhost:9002/styles.css" />\n</head>\n<body>\n    <div id="root">\n       \n    </div>\n    <textarea id="ssrTextInitData" style="display:none;">\n    {}\n    </textarea>\n</body>\n</html>\n</body>\n<script>\n//定义当前的渲染模式\nwindow.__IS__SSR__=false;\n<\/script>\n <script type="text/javascript"  src="//localhost:9002/libs.js"><\/script><script type="text/javascript"  src="//localhost:9002/main.js"><\/script><script type="text/javascript"  src="//localhost:9002/styles.js"><\/script>\n\n\n')])])]),a("p",[a("code",[e._v("模式热切换")])]),e._v(" "),a("p",[e._v("我们现在是将渲染模式放到了配置文件内，手动切换模式后需要重启"),a("code",[e._v("node")]),e._v("进程，如果想做到动态切换可以将配置值从接口来获取,这样不需要重启 "),a("code",[e._v("node")]),e._v("服务。")]),e._v(" "),a("p",[e._v("ok，到这里双模式支持完成。")]),e._v(" "),a("h1",{attrs:{id:"跨平台设置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨平台设置环境变量"}},[e._v("#")]),e._v(" 跨平台设置环境变量")]),e._v(" "),a("p",[e._v("在使用"),a("code",[e._v("npm scripts")]),e._v("运行本骨架时会设置环境变量，目前只能在"),a("code",[e._v("mac")]),e._v("系统运行正常，"),a("code",[e._v("windows")]),e._v("下运行会报错。")]),e._v(" "),a("p",[e._v("所以需要使用"),a("code",[e._v("cross-env")]),e._v("来进行环境变量的设置，该库能够以"),a("code",[e._v("unix")]),e._v("方式设置环境变量，然后在"),a("code",[e._v("windows")]),e._v("上也能兼容运行。")]),e._v(" "),a("p",[e._v("改造后的命令为")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"scripts": {\n    //...\n    "build": "cross-env NODE_ENV=production npm run client:build && npm run server:build",\n    "client:build": "cross-env NODE_ENV=production webpack --config  ./webpack/webpack.prod.config.js",\n    "server:build": "cross-env NODE_ENV=production webpack --config  ./webpack/webpack.server.config.js",\n    //...\n    "wds:watch": "cross-env BABEL_ENV=development node ./webpack/scripts/wds-start.js"\n  },\n\n')])])]),a("h1",{attrs:{id:"前端模块-hack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端模块-hack"}},[e._v("#")]),e._v(" 前端模块 hack")]),e._v(" "),a("p",[a("code",[e._v("react ssr")]),e._v("开发骨架的核心是"),a("code",[e._v("同构")]),e._v(",也就是双端会运行同一套代码，所以一些用于浏览器端的模块就会在服务器端执行，然而此时就会报错。")]),e._v(" "),a("p",[e._v("因为"),a("code",[e._v("document window")]),e._v("都是浏览器的对象，"),a("code",[e._v("node")]),e._v("里不存在。")]),e._v(" "),a("p",[e._v("那我们应该解决这个问题呢？")]),e._v(" "),a("h2",{attrs:{id:"最直接的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最直接的方式"}},[e._v("#")]),e._v(" 最直接的方式")]),e._v(" "),a("p",[e._v("直接在"),a("code",[e._v("node global")]),e._v("上增加相关缺失的属性")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("global.document={};\nglobal.window={};\n\n")])])]),a("p",[e._v("这种方式虽然可行，但是比较辛苦。如果是多级访问的对象可就更麻烦了。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("document.location.hash\ndocument.location.hash={};\n\n")])])]),a("p",[e._v("所以这个方式并不好，放弃吧。")]),e._v(" "),a("h2",{attrs:{id:"使用babel插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用babel插件"}},[e._v("#")]),e._v(" 使用babel插件")]),e._v(" "),a("p",[e._v("最彻底的办法是不让服务端加载浏览器模块，所以我们可以写一个插件，在代码打包的时候将导入的模块替换为"),a("code",[e._v("{}")]),e._v("。")]),e._v(" "),a("p",[e._v("和我们前面小节中过滤掉组件内的 "),a("code",[e._v("css")]),e._v("模块的方式一致。")]),e._v(" "),a("p",[e._v("这个方式在我这个开发骨架"),a("code",[e._v("1.0")]),e._v("版本的时候使用过。")]),e._v(" "),a("p",[e._v("所以最终运行在服务端代码会变为")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import React from 'react';\n\n- import dom from './dom';\n\n+ const xxMd = {};\n\n\n")])])]),a("p",[e._v("这个方式可以彻底解决，但是实现有些复杂了。其实还有更简单的方式，往下看。")]),e._v(" "),a("p",[e._v("既然不是最好的，就不做过多介绍了。")]),e._v(" "),a("h2",{attrs:{id:"使用动态加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用动态加载"}},[e._v("#")]),e._v(" 使用动态加载")]),e._v(" "),a("p",[e._v("使用我们在"),a("code",[e._v("webpack")]),e._v("内定义的全局变量"),a("code",[e._v("__SERVER__")]),e._v(",结合使用"),a("code",[e._v("require")]),e._v("运行时执行来实现。")]),e._v(" "),a("p",[e._v("这样服务端就彻底不会加载这个前端模块了。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//当前环境是服务端 则 dom={} \nconst dom = __SERVER__ ? {} : require('./dom').default;\n\n\n")])])]),a("p",[a("code",[e._v("测试模块")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// dom.js \n\nconsole.log(window.location.href);\n\nexport default {\n    log(){\n        console.log(window.location.href);\n    }\n}\n\n\n")])])]),a("h1",{attrs:{id:"无法跨端访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无法跨端访问"}},[e._v("#")]),e._v(" 无法跨端访问")]),e._v(" "),a("p",[e._v("目前本骨架在本地开发服务为双服务模式，一个是"),a("code",[e._v("node server")]),e._v("绑定的是"),a("code",[e._v("9001")]),e._v("端口，另一个是静态资源"),a("code",[e._v("webpack-dev-server")]),e._v("启动的服务绑定端口为"),a("code",[e._v("9002")]),e._v("，而骨架内的静态资源"),a("code",[e._v("host")]),e._v("地址为"),a("code",[e._v("localhost")]),e._v("，所以只能在本地访问，无法在其他设备或者终端访问。")]),e._v(" "),a("h2",{attrs:{id:"改造思路-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#改造思路-1"}},[e._v("#")]),e._v(" 改造思路 1")]),e._v(" "),a("p",[e._v("通过本机"),a("code",[e._v("ip")]),e._v("启动"),a("code",[e._v("node server")]),e._v(",同时其静态资源地址统一为"),a("code",[e._v("ip")]),e._v("地址即可。")]),e._v(" "),a("p",[a("code",[e._v("获取本机ip")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const os = require('os');\n\nfunction getNetworkAddress() {\n    const interfaces = os.networkInterfaces();\n    for (const name of Object.keys(interfaces)) {\n        for (const interface of interfaces[name]) {\n            const { address, family, internal } = interface;\n            if (family === 'IPv4' && !internal) {\n                return address;\n            }\n        }\n    }\n}\n\n\n")])])]),a("p",[e._v("然后调整"),a("code",[e._v("wds")]),e._v("和"),a("code",[e._v("webpack.dev.config")]),e._v("的相关配置")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// webpack-dev-server.config\n\n  output: {\n        filename: '[name].js',\n        path: resolvePath('../dist/static'),\n        //设置静态资源地址通过 ip 访问\n        publicPath: `http://${__LOCAL_IP__}:${proConfig.wdsPort}/`\n    },\n\n\n")])])]),a("p",[e._v("设置"),a("code",[e._v("wds")]),e._v("选项的"),a("code",[e._v("host")]),e._v("为本机 "),a("code",[e._v("ip")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// ./webpack/webpack-dev-server.config\nmodule.exports = function (port, publicPath) {\n    return {\n        host: global.__LOCAL_IP__//本机 ip，这里我提前把 ip 作为一个全局变量\n    //...\n    }\n\n")])])]),a("h2",{attrs:{id:"改造方案-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#改造方案-2"}},[e._v("#")]),e._v(" 改造方案 2")]),e._v(" "),a("p",[e._v("使用"),a("code",[e._v("node server")]),e._v(" 进行请求转发。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = {\n  proxy: {\n    host: 'http://127.0.0.1:9002', // 本地开发时,代理前端打包出来的静态资源\n    match: /(\\/static)|(\\/sockjs-node)|(\\/__webpack_dev_server__)|hot-update/\n  }\n}\n\n")])])]),a("h1",{attrs:{id:"子进程的平台兼容问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子进程的平台兼容问题"}},[e._v("#")]),e._v(" 子进程的平台兼容问题")]),e._v(" "),a("p",[e._v("我们本地开发时执行"),a("code",[e._v("npm run dev")]),e._v("命令，内部会创建多个子进程。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const {spawn} = require('child_process');//用于创建子进程\n\n//wds 服务\nconst feCodeWatchProcess = spawn('npm', ['run', 'wds:watch',localHostIp], { stdio: 'inherit' });\n\n//服务端代码监控和编译进程\nconst svrCodeWatchProcess = spawn('npm', ['run', 'svr:watch']);\n\n//....\n\n\n")])])]),a("p",[e._v("但上面"),a("code",[e._v("spawn")]),e._v("使用方式在"),a("code",[e._v("windows")]),e._v("系统上会报错。")]),e._v(" "),a("p",[e._v("原因：当执行 "),a("code",[e._v("npm")]),e._v(" 时，实际执行的是 "),a("code",[e._v("npm.cmd")]),e._v(" 批处理，而在"),a("code",[e._v("windows")]),e._v("上，"),a("code",[e._v(".cmd")]),e._v(", "),a("code",[e._v(".bat")]),e._v(" 批处理是无法脱离 "),a("code",[e._v("cmd.exe")]),e._v("解释器而单独运行的。")]),e._v(" "),a("h2",{attrs:{id:"解决方法1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法1"}},[e._v("#")]),e._v(" 解决方法1")]),e._v(" "),a("p",[e._v("调用 "),a("code",[e._v("spawn")]),e._v(" 函数时，设置 "),a("code",[e._v("shell")]),e._v(" 选项为 "),a("code",[e._v("true")]),e._v(" 以隐式地调用 "),a("code",[e._v("cmd")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("spawn('npm', {\n  stdio: 'inherit',\n  shell: true\n});\n\n")])])]),a("p",[e._v("优化一下,毕竟在"),a("code",[e._v("mac")]),e._v("上不需要此设置")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const child = cp.spawn('npm', ['run', 'build'], { shell: process.platform === 'win32' });\n\n")])])]),a("h2",{attrs:{id:"解决方法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法-2"}},[e._v("#")]),e._v(" 解决方法 2")]),e._v(" "),a("p",[e._v("除了自己编写代码的时候做处理，也有第三方模块"),a("code",[e._v("cross-spawn")]),e._v("。")]),e._v(" "),a("p",[e._v("使用该模块，可以在调用 "),a("code",[e._v("spawn")]),e._v(" 函数时，自动根据当前的运行平台，来决定是否生成一个 "),a("code",[e._v("shell")]),e._v(" 来执行所给的命令。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install cross-spawn\n\nconst spawn = require('cross-spawn');\n \nspawn('npm', {\n  stdio: 'inherit'\n});\n\n\n")])])]),a("h1",{attrs:{id:"数据预取方法参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据预取方法参数"}},[e._v("#")]),e._v(" 数据预取方法参数")]),e._v(" "),a("p",[e._v("在前面小节内，我们的数据预取都是获取的假数据，所以没有提关于一些动态参数的传递问题。但在实际业务中是离不开的。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//还没有传递参数\nIndex.getInitialProps= async ()=>{\n    console.log('fetch data index');\n    //模拟数据请求方法\n    //...\n\n    return {\n        page: {\n            tdk: {\n                title: '首页 - koa-react-ssr',\n                keywords: '关键词 - koa-react-ssr',\n                description: '描述'\n            }\n        }\n    };\n}\n\n")])])]),a("p",[e._v("所以这里单独说明下需要传递的参数。")]),e._v(" "),a("p",[e._v("最基本的参数有路由"),a("code",[e._v("params")]),e._v("和"),a("code",[e._v("url query")]),e._v("。")]),e._v(" "),a("p",[a("code",[e._v("路由params")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    {\n        path: '/list/:id',//id 的获取\n        component:A,\n        exact: true\n    },\n\n")])])]),a("p",[a("code",[e._v("url")]),e._v("透传的参数")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//获取 a b 值\nhttp://localhost:9001/list/100?a=1&b=2\n\n")])])]),a("h2",{attrs:{id:"约定参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#约定参数"}},[e._v("#")]),e._v(" 约定参数")]),e._v(" "),a("p",[e._v("我们可以约定函数的参数如下")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Index.getInitialProps= async ({match,location})=>{\n    //...\n}\n\n")])])]),a("h2",{attrs:{id:"客户端处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端处理"}},[e._v("#")]),e._v(" 客户端处理")]),e._v(" "),a("p",[e._v("上面两个参数可以在组件的"),a("code",[e._v("props")]),e._v("属性获取。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var match = this.props.match;\nvar location = this.props.location;\n\n")])])]),a("p",[e._v("所以只需要在调用的时候带入"),a("code",[e._v("props")]),e._v("即可。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" //用于封装处理\n async getInitialProps(){\n            //ssr首次进入页面以及csr/ssr切换路由时才调用组件的getInitialProps方法\n            const {match,location} = this.props;\n            const res =  SourceComponent.getInitialProps ? await SourceComponent.getInitialProps({match,location}) : {};\n            //...\n        }\n\n")])])]),a("h2",{attrs:{id:"服务端处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端处理"}},[e._v("#")]),e._v(" 服务端处理")]),e._v(" "),a("p",[e._v("在服务端调用数据预取方法时，路由的匹配结果会返回"),a("code",[e._v("match")]),e._v("结果，结果内包含了"),a("code",[e._v("params")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" //查找到的目标路由对象\n    let matchResult = await matchRoute(path, staticRoutesList);\n    //targetMatch 包含参数信息\n    let { targetRoute, targetMatch } = matchResult;\n    \n//...targetMatch \n{ path: '/list', url: '/list', isExact: true, params: {} }\n\n")])])]),a("p",[e._v("另外"),a("code",[e._v("location")]),e._v("就可以通过"),a("code",[e._v("ndoe server context")]),e._v("来获取了,具体代码就省略了。")]),e._v(" "),a("p",[e._v("除了这两个基础参数外，可能还需要对服务端做一些单独的处理，所以我们可以带入"),a("code",[e._v("req")]),e._v("，"),a("code",[e._v("res")]),e._v("对象。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Index.getInitialProps= async ({match,location,req,res})=>{\n    if(req){\n        //服务端处理\n    }\n}\n\n")])])]),a("h1",{attrs:{id:"页面级渲染可控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面级渲染可控"}},[e._v("#")]),e._v(" 页面级渲染可控")]),e._v(" "),a("p",[e._v("这里只是提一个想法，在我们的项目中存在很多页面，可能有些页面根本不需要考虑"),a("code",[e._v("SEO")]),e._v(",所以也就不需要"),a("code",[e._v("ssr")]),e._v("。")]),e._v(" "),a("p",[e._v("所以我们需要做到对页面级的渲染模式可控。")]),e._v(" "),a("p",[e._v("可以约定为组件添加一个静态属性，该属性表示当前页面是否开启"),a("code",[e._v("ssr")]),e._v("渲染。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class Index{\n    \n}\n\nIndex.__OPEN_SSR__=false;//关闭 ssr\n\n")])])]),a("p",[e._v("然后在服务端匹配路由时，就可以通过对该属性进行逻辑判断当前页面是否需要做"),a("code",[e._v("ssr")]),e._v("。")]),e._v(" "),a("h1",{attrs:{id:"配套-cli-工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配套-cli-工具"}},[e._v("#")]),e._v(" 配套 cli 工具")]),e._v(" "),a("p",[e._v("一个完整的开发框架一般都会配"),a("code",[e._v("cli")]),e._v("脚手架工具，可以在命令行下帮我们快速的创建项目开发模板。")]),e._v(" "),a("p",[e._v("像"),a("code",[e._v("react")]),e._v("的"),a("code",[e._v("create-react-app")]),e._v("，"),a("code",[e._v("vue")]),e._v("的"),a("code",[e._v("vue-cli")]),e._v("。")]),e._v(" "),a("p",[e._v("本骨架的"),a("code",[e._v("cli")]),e._v("工具目前已经开发完成，具体的实现方式很简单,所以就不做具体介绍了。")]),e._v(" "),a("p",[a("code",[e._v("cli")]),e._v("项目源码： "),a("a",{attrs:{href:"https://github.com/Bigerfe/zzjs-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Bigerfe/zzjs-cli"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("另外具体的实现可以参考下面文章，写的很不错")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/CO6La0NCHnsfXN4MHgiBag",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://mp.weixin.qq.com/s/CO6La0NCHnsfXN4MHgiBag"),a("OutboundLink")],1)]),e._v(" "),a("h1",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),a("p",[e._v("本小节主要是总结性的说明下之前我们没有涉及到细节，包括一些问题和扩展方案。")]),e._v(" "),a("p",[e._v("这些应该算是比较基础的，也比较容易发现的，其实还有很多可以扩展的地方。比如路由配置，现在是集中配置，其实这种方式并不利于维护，或许我们可以参考"),a("code",[e._v("next.js")]),e._v("的约定式路由来改造一下。")]),e._v(" "),a("p",[e._v("其他更多的扩展，可能需要在后期的使用中逐步的挖掘和完善，好在，这个骨架是白盒的，你可以灵活定制。")]),e._v(" "),a("p",[e._v("感谢你的阅读。")]),e._v(" "),a("p",[e._v("如果有问题欢迎留言，也欢迎在留言区留下你的想法和思考。")])])}),[],!1,null,null,null);t.default=n.exports}}]);