(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{504:function(e,t,s){"use strict";s.r(t);var r=s(42),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"serverless-部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serverless-部署"}},[e._v("#")]),e._v(" Serverless 部署")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://serverless.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Serverless"),s("OutboundLink")],1),e._v(" 中文称之为无服务器，并不是说没有服务器，而是说服务器对用户来说是透明的。它使用计算托管的方式，在 "),s("code",[e._v("Serverless")]),e._v(" 这里，我们可以看成两块，第一块就是函数即服务，它真正实现了你业务的托管计算。另外一种是后端即服务，包括对象存储，大家不用自己构建分布式存储，不用担心数据的丢失和安全性问题；同时在云上提供的数据库，消息队列和对象存储都是一样的，不用购买服务器自己搭建，在购买使用的过程当中我们可以称之为 "),s("code",[e._v("Serverless")]),e._v("。因为这些都是托管型的，使用的时候不用关心它的安全性，不用关心可能服务器宕机导致的故障。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/2/28/1708ae0a1a571aa6?w=1031&h=474&f=png&s=25673",alt:""}})]),e._v(" "),s("p",[e._v("FaaS（Function as a Service） 就是一些运行函数的平台，比如阿里云的函数计算、AWS 的 Lambda 等。")]),e._v(" "),s("p",[e._v("BaaS（Backend as a Service）则是一些后端云服务，比如云数据库、对象存储、消息队列等。利用 BaaS，可以极大简化我们的应用开发难度。")]),e._v(" "),s("h2",{attrs:{id:"传统开发流程-vs-serverless-开发流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传统开发流程-vs-serverless-开发流程"}},[e._v("#")]),e._v(" 传统开发流程 VS Serverless 开发流程")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/2/28/1708ae4cbdbe13a7?w=896&h=214&f=png&s=14240",alt:""}})]),e._v(" "),s("p",[e._v("在传统开发流程中，我们需要前端写页面，后端工程师写接口。后端写完接口之后，把接口部署了，再进行前后端联调。联调完毕后再测试、上线。上线之后，还需要运维工程师对系统进行维护。整个过程涉及多个不同角色，链路较长，沟通协调也是一个问题。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/2/28/1708ae50228337c9?w=888&h=172&f=png&s=7895",alt:""}})]),e._v(" "),s("p",[e._v("而基于 "),s("code",[e._v("Serverless")]),e._v("，后端变得非常简单了，以往的后端应用被拆分为一个个函数，只需要写完函数并部署到 "),s("code",[e._v("Serverless")]),e._v(" 服务即可，后续也不用关心任何服务器的运维操作。")]),e._v(" "),s("h2",{attrs:{id:"搞懂-serverless-四大特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搞懂-serverless-四大特点"}},[e._v("#")]),e._v(" 搞懂 Serverless 四大特点")]),e._v(" "),s("h3",{attrs:{id:"自动扩缩容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动扩缩容"}},[e._v("#")]),e._v(" 自动扩缩容")]),e._v(" "),s("p",[e._v("函数即应用，一个函数只做一件事，可以独立的进行扩缩容，而不用担心影响其他函数，并且由于粒度更小，扩缩容速度也更快。而对于单体应用和微服务，借助于各种容器编排技术，虽然也能实现自动扩缩容，但由于粒度关系，相比函数，始终会存在一定的资源浪费。比如一个微服务提供两个 API，其中一个 API 需要进行扩容，而另一个并不需要，那么这时候扩容，对于不需要的 API 就是一种浪费。")]),e._v(" "),s("h3",{attrs:{id:"事件驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动"}},[e._v("#")]),e._v(" 事件驱动")]),e._v(" "),s("p",[e._v("函数本质上实现的是一种"),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/IPO_model",target:"_blank",rel:"noopener noreferrer"}},[e._v("IPO"),s("OutboundLink")],1),e._v("（Input-Process-Output）模型，它是短暂的，是即用即走的。既不发布任何服务，没有请求时也不消耗任何资源，只有当请求来了，才会消耗资源进行响应，服务完立刻释放资源。正是由于这一点，函数天然的适用于任何事件驱动的业务场景，比如身份验证，定时任务，图片处理等。")]),e._v(" "),s("h3",{attrs:{id:"运行成本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行成本"}},[e._v("#")]),e._v(" 运行成本")]),e._v(" "),s("p",[e._v("无论是过去的 IDC 还是现在的云主机，本质上都是一种包月计费模式，也就是说，不管有没有用户访问你的应用，也不管你有没有部署应用，你都要付相同的钱。而对于 "),s("code",[e._v("Serverless")]),e._v(" 应用是根据实际使用量来进行付费的，用多少付多少。而在运维过程中，用户无须再持续监控和维护具体服务器的状态，只需要关心应用的整体状态。应用运营的整体复杂度下降，用户的关注点可以更多地放在软件应用的体验和改进以及其他能带来更高业务价值的地方。")]),e._v(" "),s("h3",{attrs:{id:"无状态性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无状态性"}},[e._v("#")]),e._v(" 无状态性")]),e._v(" "),s("p",[e._v("在 "),s("code",[e._v("Serverless")]),e._v(" 架构下，应用的功能被解构成若干个细颗粒度的无状态函数，功能与功能之间的边界变得更加清晰，功能模块之间的耦合度大大减小。这使得软件应用的开发效率更高，应用开发的迭代周期更短。无状态一方面有助于提高函数的可重用性和可迁移性，但也带来了性能上的一些损失。函数不是常驻进程，每一个请求，函数都要经历一次冷启动。每服务完一个请求，函数的进程会被杀掉，也就是说使用内存进行缓存对函数而言没有意义。每次启动都可能被调度到新的服务器上，任何基于本地磁盘的缓存技术也不再适用。")]),e._v(" "),s("h2",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[e._v("#")]),e._v(" 准备")]),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("Serverless")]),e._v(" 在几分钟内就可以创建和部署一个无服务器微服务，接下来我们就来拿我们的项目来做实践。")]),e._v(" "),s("h3",{attrs:{id:"安装插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装插件"}},[e._v("#")]),e._v(" 安装插件")]),e._v(" "),s("p",[e._v("通过 NPM 全局安装 "),s("a",{attrs:{href:"https://www.github.com/serverless/serverless",target:"_blank",rel:"noopener noreferrer"}},[e._v("Serverless Framework"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npm install -g serverless\n\n")])])]),s("h3",{attrs:{id:"修改-egg-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改-egg-配置"}},[e._v("#")]),e._v(" 修改 Egg 配置")]),e._v(" "),s("p",[e._v("由于云函数在执行时，只有 "),s("code",[e._v("/tmp")]),e._v(" 可读写的，所以我们需要将 "),s("code",[e._v("egg.js")]),e._v(" 框架运行尝试的日志写到该目录下，为此需要修改 "),s("code",[e._v("config/config.default.ts")]),e._v(" 中的配置如下")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const config = {\n    env: 'prod',  // 推荐云函数的 egg 运行环境变量修改为 prod\n    rundir: '/tmp',\n    logger: {\n      dir: '/tmp',\n    },\n  } as PowerPartial<EggAppConfig>;\n\n")])])]),s("h3",{attrs:{id:"构建为-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建为-js"}},[e._v("#")]),e._v(" 构建为 JS")]),e._v(" "),s("p",[e._v("egg.js 的文档上有句话：正式环境下，我们更倾向于把 "),s("code",[e._v("ts")]),e._v(" 构建为 "),s("code",[e._v("js")]),e._v("。等于说我们在服务器里面运行之前，需要将 "),s("code",[e._v("ts")]),e._v(" 都转换为 "),s("code",[e._v("js")]),e._v("，这样才能正常运行。看看 "),s("code",[e._v("package.json")]),e._v("，里面有对应的命令。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npm run ci\n\n")])])]),s("p",[e._v("当有同名的 "),s("code",[e._v("ts")]),e._v(" 和 "),s("code",[e._v("js")]),e._v(" 文件时，egg 会优先加载 "),s("code",[e._v("js")]),e._v(" 文件。")]),e._v(" "),s("h3",{attrs:{id:"serverless-yml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serverless-yml"}},[e._v("#")]),e._v(" serverless.yml")]),e._v(" "),s("p",[e._v("在项目目录下，创建 "),s("code",[e._v("serverless.yml")]),e._v(" 文件，在其中进行如下配置")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('# Serverless.yml\n\negg:\n  component: "@Serverless/tencent-egg"  # NPM 包名称\n  inputs:\n    region: ap-guangzhou\t\t\t\t# 地区 默认为：ap-guangzhou\n    functionName: egg-graphql-function  # 函数名称\n    code: ./\t\t\t\t\t\t\t# 工作目录\n    functionConf:\t\t\t\t\t\t# 功能配置\n      timeout: 10\t\t\t\t\t\t# 允许执行的功能的持续时间\n      memorySize: 128\t\t\t\t\t# 执行期间该功能可用的内存大小\n      environment:\t\t\t\t\t\t# 功能的环境变量\n        variables:\t\t\t\t\t\t# 环境变量数组\n          TEST: vale\n    apigatewayConf:\t\t\t\t\t\t# API网关配置\n      protocol: https\t\t\t\t\t# 服务的前端请求类型，例如HTTP，HTTPS，HTTP和HTTPS\n      environment: release \t\t\t\t# 要发布的环境的名称。支持三种环境: test, prepub 和 release\n\n')])])]),s("h2",{attrs:{id:"开始部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始部署"}},[e._v("#")]),e._v(" 开始部署")]),e._v(" "),s("p",[e._v("通过 "),s("strong",[e._v("serverless")]),e._v(" "),s("code",[e._v("or")]),e._v(" "),s("strong",[e._v("sls")]),e._v(" 命令进行部署，并可以添加 "),s("code",[e._v("--debug")]),e._v(" 参数查看部署过程中的信息。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ serverless --debug\n# or\n$ sls --debug\n\n")])])]),s("p",[e._v("如您的账号未 "),s("a",{attrs:{href:"https://cloud.tencent.com/login",target:"_blank",rel:"noopener noreferrer"}},[e._v("登陆"),s("OutboundLink")],1),e._v(" 或 "),s("a",{attrs:{href:"https://cloud.tencent.com/register",target:"_blank",rel:"noopener noreferrer"}},[e._v("注册"),s("OutboundLink")],1),e._v(" 腾讯云，您可以直接通过 "),s("code",[e._v("微信")]),e._v(" 扫描命令行中的二维码进行授权登陆和注册。")]),e._v(" "),s("p",[e._v("部署成功后，可以直接在访问日志中返回的 url 地址，查看本次部署的效果。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/2/28/1708ae66251f926d?w=872&h=197&f=png&s=19658",alt:""}})]),e._v(" "),s("p",[e._v("打开这个 url 我们看到我们的项目已经部署上去并且可以正常使用。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/2/28/1708ae6341cc1ab3?w=1910&h=421&f=png&s=85343",alt:""}})]),e._v(" "),s("h3",{attrs:{id:"账号配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#账号配置"}},[e._v("#")]),e._v(" 账号配置")]),e._v(" "),s("p",[e._v("当前默认支持 CLI 扫描二维码登录，如您希望配置持久的环境变量/秘钥信息，也可以本地创建 "),s("code",[e._v(".env")]),e._v(" 文件")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ touch .env # 腾讯云的配置信息\n\n")])])]),s("p",[e._v("如果已有腾讯云账号，可以在 "),s("a",{attrs:{href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"}},[e._v("API 密钥管理"),s("OutboundLink")],1),e._v(" 中获取 "),s("code",[e._v("SecretId")]),e._v(" 和"),s("code",[e._v("SecretKey")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/2/28/1708ae5eaa1d7bec?w=1920&h=662&f=png&s=82648",alt:""}})]),e._v(" "),s("p",[e._v("在 "),s("code",[e._v(".env")]),e._v(" 文件中配置腾讯云的 SecretId 和 SecretKey 信息并保存")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("TENCENT_SECRET_ID=SecretId\nTENCENT_SECRET_KEY=SecretKey\n\n")])])]),s("h3",{attrs:{id:"移除部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移除部署"}},[e._v("#")]),e._v(" 移除部署")]),e._v(" "),s("p",[e._v("通过以下命令移除部署的 API 网关，并可以添加 "),s("code",[e._v("--debug")]),e._v(" 参数查看移除部署过程中的信息。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ serverless remove --debug\n# or\n$ sls remove --debug\n\n")])])]),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),s("p",[e._v("通过本篇的学习我们知道使用 "),s("code",[e._v("Serverless")]),e._v(" 时，我们不需要再过多关注服务端的运维，不需要关心我们不熟悉的领域，我们只需要专注于业务的开发、专注于产品的实现。我们需要关心的事情变少了，但我们能做的事情更多了。")])])}),[],!1,null,null,null);t.default=a.exports}}]);