(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{806:function(e,s,t){"use strict";t.r(s);var r=t(42),n=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"实战篇-1-小程序开发环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实战篇-1-小程序开发环境搭建"}},[e._v("#")]),e._v(" 实战篇 1：小程序开发环境搭建")]),e._v(" "),t("p",[e._v("微信小程序虽然提供自己的 IDE 开发工具，但是对于用惯了 VS Code、Sublime 等编辑器的前端工程师来说，其体验还是挺差的，因此本项目中，只将微信小程序开发者工具作为模拟器、调试和代码上传的工具，其他开发使用自己熟练的编辑器 / IDE 即可。")]),e._v(" "),t("p",[e._v("除了选择自己熟练的编辑器 / IDE 之外，还应该在代码层面提高编码体验，本实战项目使用 Sass 和 ES6 语法来写代码，通过构建工具编译成小程序可以识别的 WXSS 和 ES5，最后也使用构建工具压缩和优化静态资源。")]),e._v(" "),t("p",[e._v("对于小程序云开发（腾讯云）的测试，本项目使用官方提供的 "),t("a",{attrs:{href:"https://github.com/TencentCloud/scf-node-debug",target:"_blank",rel:"noopener noreferrer"}},[e._v("SCF-Cli"),t("OutboundLink")],1),e._v(" 来本地测试云函数，这样云函数的修改就不需要每次都上传到云端之后再测试了，可以提高研发效率。")]),e._v(" "),t("p",[e._v("整体技术选型如下：")]),e._v(" "),t("ul",[t("li",[e._v("VS Code： 编辑器，用于代码编写")]),e._v(" "),t("li",[e._v("Gulp：前端项目构建工具")]),e._v(" "),t("li",[e._v("Sass：小程序样式表")]),e._v(" "),t("li",[e._v("ES6：采用 ES6 语法编写 JS 代码，Babel 做编译处理")])]),e._v(" "),t("p",[e._v("本节重点介绍使用 Gulp 搭建小程序开发环境。")]),e._v(" "),t("h2",{attrs:{id:"gulp-和-webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gulp-和-webpack"}},[e._v("#")]),e._v(" Gulp 和 webpack")]),e._v(" "),t("p",[e._v("目前，前端最火的打包工具无疑是 webpack，而 webpack 的产品定位是"),t("strong",[e._v("模块打包工具")]),e._v("，对于小程序开发，涉及项目资源分类管理，所以 "),t("a",{attrs:{href:"https://gulpjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gulp"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://gruntjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grunt"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"http://fis.baidu.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("FIS"),t("OutboundLink")],1),e._v(" 这类前端工程构建工具很合适。")]),e._v(" "),t("p",[e._v("Gulp 可以对不同的文件类型、文件夹、文件等多种方式进行不同的处理流程，像小程序项目中多种文件类型需要不同的构建流程，使用 Gulp 的 task 就非常方便管理。")]),e._v(" "),t("p",[e._v("另外 Gulp 的 watch 功能也可以监控源文件，当源码发生变化时，立即执行对应 task，将修改后的代码编译到小程序开发工具监控的目录中；在生态建设上，Gulp 工具链也很完善。小程序开发本来就是本地开发模式，代码必须在小程序开发者工具提供的 Runtime 中才可以跑起来，不涉及服务搭建相关的知识，所以 webpack 的 devserver 也没有用武之地。")]),e._v(" "),t("p",[e._v("综上，本小册采用 Gulp 来搭建小程序开发环境。")]),e._v(" "),t("h2",{attrs:{id:"项目目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目目录结构"}},[e._v("#")]),e._v(" 项目目录结构")]),e._v(" "),t("p",[e._v("首先介绍下项目的目录结构，下面的目录结构是最开始的目录结构，注释中描述了文件夹（或文件）具体是做什么用的。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("├── cloud-functions // 云函数文件夹\n├── dist            // 构建工具 release 之后的文件夹\n├── gulpfile.js     // Gulp 配置文件\n├── node_modules\n├── package.json    // npm 描述文件\n└── src             // 实际开发的源代码文件夹\n    ├── app.js      // 入口 js\n    ├── app.json    // App 配置\n    ├── app.scss    // App 整体样式\n    ├── components  // 小程序组件，例如 icon 类这些通用组件\n    ├── images      // 小程序静态图片\n    ├── lib         // 公共 lib\n    ├── pages       // 小程序 page 页面\n    │   ├── index.js\n    │   ├── index.json\n    │   ├── index.scss\n    │   ├── index.wxml\n    │   └── index.wxs\n    └── project.config.json // 小程序项目配置\n\n")])])]),t("h2",{attrs:{id:"gulp-工程化打包方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gulp-工程化打包方案"}},[e._v("#")]),e._v(" Gulp 工程化打包方案")]),e._v(" "),t("p",[e._v("针对上面的开发目录，我们要达到的目标是："),t("strong",[e._v("将 src 目录下的文件，编译到小程序开发者工具实际运行的 dist 目录下")]),e._v("，先在 "),t("code",[e._v("gulpfile.js")]),e._v(" 中定义这两个目录的变量：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const src = './src'\nconst dist = './dist'\n\n")])])]),t("p",[e._v("Gulp 是以 task 为核心的打包工具，针对不同的文件类型（比如通过正则过滤）可以配置不同的流程控制。小程序打包主要解决的是 WXML、WXSS、WXS 以及 JS 的编译，另外针对小程序开发中常见的问题进行工具化处理，例如 px 转 rpx、压缩优化等，下面笔者来一一介绍。")]),e._v(" "),t("h3",{attrs:{id:"wxml-task"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wxml-task"}},[e._v("#")]),e._v(" wxml task")]),e._v(" "),t("p",[t("code",[e._v("wxml")]),e._v(" 语法实际就是 "),t("code",[e._v("html")]),e._v(" 的语法，不需要做额外的处理，直接 release 到"),t("strong",[e._v("目标目录")]),e._v("即可：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gulp.task('wxml', () => {\n  return gulp\n    .src(`${src}/**/*.wxml`)\n    .pipe(gulp.dest(dist))\n})\n\n")])])]),t("h3",{attrs:{id:"wxss-task"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wxss-task"}},[e._v("#")]),e._v(" wxss task")]),e._v(" "),t("p",[e._v("为了更好地维护和提供更加灵活的 CSS 开发体验，笔者在项目中使用了 "),t("code",[e._v("sass")]),e._v(" 作为 wxss 的开发语言，然后通过 Gulp 的 wxss task 将"),t("code",[e._v("scss/sass")]),e._v("文件编译成 wxss，在处理样式文件的时候，笔者还解决了两个问题：")]),e._v(" "),t("ul",[t("li",[e._v("px 转 rpx：使用"),t("code",[e._v("postcss-px2rpx")]),e._v("，将"),t("code",[e._v("px")]),e._v("按照 2 倍算法转化成 rpx，px 和 rpx 的详细介绍可以参考前面章节的内容")]),e._v(" "),t("li",[e._v("将 webfont 转化成 base64 引入：在小程序内，webfont 不允许访问小程序内部地址，所以只能将其转化成 bas64 方式引入")])]),e._v(" "),t("p",[e._v("将 "),t("code",[e._v("sass/scss")]),e._v(" 文件处理完之后，在最后一步，利用 "),t("code",[e._v("rename")]),e._v(" 工具，将 "),t("code",[e._v(".sass/.scss")]),e._v(" 改名为 "),t("code",[e._v(".wxss")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const rename = require('gulp-rename')\nconst postcss = require('gulp-postcss')\nconst pxtorpx = require('postcss-px2rpx')\nconst base64 = require('postcss-font-base64')\nconst combiner = require('stream-combiner2')\n\ngulp.task('wxss', () => {\n  const combined = combiner.obj([\n    gulp.src(`${src}/**/*.{wxss,scss}`),\n    sass().on('error', sass.logError),\n    postcss([pxtorpx(), base64()]),\n    rename((path) => (path.extname = '.wxss')),\n    gulp.dest(dist)\n  ])\n\n  combined.on('error', handleError)\n})\n\n")])])]),t("blockquote",[t("p",[e._v("可以不使用 CSS 的自动添加浏览器兼容前缀的 "),t("code",[e._v("autoprefixer")]),e._v(" 插件，而直接用小程序开发者工具的「详情 -> 项目设置 -> 上传代码时样式自动补全」功能。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/13/1653140645f84aaa?w=377&h=361&f=png&s=34728",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"js-task"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-task"}},[e._v("#")]),e._v(" js task")]),e._v(" "),t("p",[e._v("微信的 js 文件使用的是 ES5 语法，为了更好的开发体验，笔者开发中使用了 ES6/7 语法，在 Gulp 编译时引入了 "),t("code",[e._v("babel")]),e._v(" 插件对 js 进行编译，并且还引入了 "),t("code",[e._v("sourcemap")]),e._v(" 以方便本地 debug 代码。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gulp.task('js', () => {\n  gulp\n    .src(`${src}/**/*.js`)\n    .pipe(sourcemaps.init())\n    .pipe(\n      babel({\n        presets: ['env']\n      })\n    )\n    .pipe(sourcemaps.write('./'))\n    .pipe(gulp.dest(dist))\n})\n\n")])])]),t("h3",{attrs:{id:"其他-task"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他-task"}},[e._v("#")]),e._v(" 其他 task")]),e._v(" "),t("p",[e._v("对于 "),t("code",[e._v("json")]),e._v("、"),t("code",[e._v("images")]),e._v(" 和 "),t("code",[e._v("wxs")]),e._v(" 类文件，主要采取的方式是按照当前路径复制到"),t("strong",[e._v("目标目录")]),e._v("，所以它们的 task 配置是：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gulp.task('json', () => {\n  return gulp.src(`${src}/**/*.json`).pipe(gulp.dest(dist))\n})\ngulp.task('images', () => {\n  return gulp.src(`${src}/images/**`).pipe(gulp.dest(`${dist}/images`))\n})\ngulp.task('wxs', () => {\n  return gulp.src(`${src}/**/*.wxs`).pipe(gulp.dest(dist))\n})\n\n")])])]),t("h3",{attrs:{id:"给每个-task-增加生产发布打包配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#给每个-task-增加生产发布打包配置"}},[e._v("#")]),e._v(" 给每个 task 增加生产发布打包配置")]),e._v(" "),t("p",[e._v("针对开发和生产两种不同的发布环境，可以通过自定义 Gulp 命令参数来区分，这里使用 "),t("code",[e._v("--type")]),e._v(" 来区分，即：")]),e._v(" "),t("ul",[t("li",[e._v("--type prod：代表生产发布打包")]),e._v(" "),t("li",[e._v("默认：为开发发布打包")])]),e._v(" "),t("p",[e._v("在生产发布打包的流程中，增加了对资源的压缩（js、html、json、css）和 "),t("a",{attrs:{href:"https://github.com/zswang/jdists",target:"_blank",rel:"noopener noreferrer"}},[e._v("jdists 的代码块预处理"),t("OutboundLink")],1),e._v("，下面以 js task 为例，解释下怎么配置生产发布的流程（详细解释见注释）：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 引入需要用到的 npm 包\nconst sourcemaps = require('gulp-sourcemaps')\nconst jdists = require('gulp-jdists')\nconst through = require('through2')\nconst babel = require('gulp-babel')\nconst uglify = require('gulp-uglify')\nconst argv = require('minimist')(process.argv.slice(2))\n// 判断 gulp --type prod 命名 type 是否是生产打包\nconst isProd = argv.type === 'prod'\nconst src = './client'\nconst dist = './dist'\n\ngulp.task('js', () => {\n  gulp\n    .src(`${src}/**/*.js`)\n    // 如果是 prod，则触发 jdists 的 prod trigger\n    // 否则则为 dev trigger，后面讲解\n    .pipe(\n      isProd\n        ? jdists({\n            trigger: 'prod'\n          })\n        : jdists({\n            trigger: 'dev'\n          })\n    )\n    // 如果是 prod，则传入空的流处理方法，不生成 sourcemap\n    .pipe(isProd ? through.obj() : sourcemaps.init())\n    // 使用 babel 处理js 文件\n    .pipe(\n      babel({\n        presets: ['env']\n      })\n    )\n    // 如果是 prod，则使用 uglify 压缩 js\n    .pipe(\n      isProd\n        ? uglify({\n            compress: true\n          })\n        : through.obj()\n    )\n    // 如果是 prod，则传入空的流处理方法，不生成 sourcemap\n    .pipe(isProd ? through.obj() : sourcemaps.write('./'))\n    .pipe(gulp.dest(dist))\n})\n\n")])])]),t("p",[e._v("说下 "),t("code",[e._v("jdists")]),e._v(" 代码块预处理工具，"),t("code",[e._v("jdists")]),e._v("是一种通过注释的方式，将不同的代码块根据不同的指令进行处理的工具，详细功能见 "),t("a",{attrs:{href:"https://github.com/zswang/jdists",target:"_blank",rel:"noopener noreferrer"}},[e._v("jdists 文档"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("本项目中主要用到了：")]),e._v(" "),t("ol",[t("li",[e._v("根据 "),t("code",[e._v("trigger")]),e._v(" 触发 "),t("code",[e._v("remove")]),e._v(" 操作；")]),e._v(" "),t("li",[e._v("根据 "),t("code",[e._v("import")]),e._v(" 将媒介（资源）嵌入到文件的固定位置。")])]),e._v(" "),t("p",[e._v("例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/*<remove trigger=\"prod\">*/\nimport {getMood, geocoder} from '../../lib/api'\nimport {getWeather, getAir} from '../../lib/api-mock'\n/*</remove>*/\n\n/*<jdists trigger=\"prod\">\nimport {getMood, geocoder, getWeather, getAir} from '../../lib/api'\n</jdists>*/\n\n")])])]),t("p",[e._v("上面的代码片段中，"),t("code",[e._v('/*<remove trigger="prod">*/.../*</remove>*/')]),e._v(" 之间是默认代码，从命名来看，实际 "),t("code",[e._v("getWeather")]),e._v(" 和 "),t("code",[e._v("getAir")]),e._v(" 两个方法来自 "),t("code",[e._v("api-mock")]),e._v(" 这个 js 文件，"),t("code",[e._v("api-mock")]),e._v(" 是接口的 mock 实现。真实上线的时候，我们希望暴露的是底部 "),t("code",[e._v('<jdists trigger="prod">...</jdists>*/')]),e._v(" 中间的代码，这样在下面 Gulp 的配置中：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".pipe(\n      isProd\n        ? jdists({\n            trigger: 'prod'\n          })\n        : jdists({\n            trigger: 'dev'\n          })\n    )\n\n")])])]),t("p",[e._v("当 "),t("code",[e._v("isProd")]),e._v(" 成立时，则触发 "),t("code",[e._v("trigger=prod")]),e._v("，即将顶部代码库移出，底部注释中的代码暴露出来，最终得到的代码如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import {getMood, geocoder, getWeather, getAir} from '../../lib/api'\n\n")])])]),t("p",[e._v("而普通打包（dev 开发方式时）则保持原样：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/*<remove trigger=\"prod\">*/\nimport {getMood, geocoder} from '../../lib/api'\nimport {getWeather, getAir} from '../../lib/api-mock'\n/*</remove>*/\n\n/*<jdists trigger=\"prod\">\nimport {getMood, geocoder, getWeather, getAir} from '../../lib/api'\n</jdists>*/\n\n")])])]),t("p",[e._v("通过上面的讲解，你应该明白了，在 "),t("code",[e._v("gulp --type prod")]),e._v(" 下，"),t("code",[e._v("getWeather")]),e._v(" 和 "),t("code",[e._v("getAir")]),e._v(" 来自 "),t("code",[e._v("lib/api")]),e._v(" 文件，而在本地开发调试的时候，则来自 "),t("code",[e._v("api-mock")]),e._v(" 这个 mock 的文件中，至于这俩文件有什么区别，以及 "),t("code",[e._v("jdists")]),e._v(" 的 "),t("code",[e._v("import")]),e._v(" 用法，见本小节的「mock server 实现」部分。")]),e._v(" "),t("h3",{attrs:{id:"根据发布环境不同-对-task-进行聚合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据发布环境不同-对-task-进行聚合"}},[e._v("#")]),e._v(" 根据发布环境不同，对 task 进行聚合")]),e._v(" "),t("p",[e._v("上面单个 task 配置完毕，需要添加聚合类的 task 和 watch task，详细配置如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gulp.task('watch', () => {\n  ;['wxml', 'wxss', 'js', 'json', 'wxs'].forEach((v) => {\n    gulp.watch(`${src}/**/*.${v}`, [v])\n  })\n  gulp.watch(`${src}/images/**`, ['images'])\n  gulp.watch(`${src}/**/*.scss`, ['wxss'])\n})\n\ngulp.task('clean', () => {\n  return del(['./dist/**'])\n})\n\ngulp.task('dev', ['clean'], () => {\n  runSequence('json', 'images', 'wxml', 'wxss', 'js', 'wxs', 'cloud', 'watch')\n})\n\ngulp.task('build', ['clean'], () => {\n  runSequence('json', 'images', 'wxml', 'wxss', 'js', 'wxs', 'cloud')\n})\n\n")])])]),t("h2",{attrs:{id:"mock-server-实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mock-server-实现"}},[e._v("#")]),e._v(" mock server 实现")]),e._v(" "),t("p",[e._v("小程序云函数的联调测试是相当麻烦的，每次修改代码，都需要跑到小程序开发者工具的编辑器中，选择云函数文件夹「上传并部署」：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/13/165313fec208c69b?w=442&h=400&f=png&s=67432",alt:""}})]),e._v(" "),t("p",[e._v("这样的开发效率是十分低的，所以笔者自研了一套云函数本地 mock 的方法，使用 mock server 可以在本地开发的时候直接使用 "),t("code",[e._v("wx.request")]),e._v(" 方法调用 mock server 的接口，而真正上线的时候（或者发布测试的时候），则使用 "),t("code",[e._v("wx.cloud.callFunction")]),e._v(" 方式调用。")]),e._v(" "),t("p",[e._v("mock server 的职责：")]),e._v(" "),t("ul",[t("li",[e._v("本地开发时，将云函数代理到 localserver，免除每次上传云函数测试效果的低效率研发方式")]),e._v(" "),t("li",[e._v("要设计一套方案，将云函数文件单独提取出来，做到 mock server 和上线后代码统一，不做二次开发（修改），降低开发成本")]),e._v(" "),t("li",[e._v("把将来放到服务器管理的静态资源（如图片 icon 类等）暂时放到本地托管，方便本地开发使用")])]),e._v(" "),t("p",[e._v("基于上面的职责，笔者将小程序项目结构调整如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("├── README.md\n├── client                    // 小程序 client 部分，主要编写内容\n│   ├── app.js\n│   ├── app.json\n│   ├── app.scss\n│   ├── project.config.json  // 小程序项目配置，如云函数文件夹\n│   ├── components           // 组件\n│   ├── images               // 图片资源\n│   ├── lib\n│   │   ├── api-mock.js      // api-mock 功能，详见文档「云函数 mock」部分\n│   │   ├── api.js           // 实际 api\n│   │   ├── bluebird.js\n│   │   └── util.js\n│   └── pages\n│       └── index\n├── config.server.json\n├── dist\n├── gulpfile.js\n├── package.json\n├── server                   // 小程序 server 部分，主要是静态资源和云函数\n│   ├── cloud-functions\n│   │   ├── test\n│   │   └── test2\n│   ├── index.js\n│   ├── inline               // 云函数公共模块，打包的时候会 inline 进引入的云函数\n│   │   └── utils.js\n│   └── static\n│       └── gulp.png\n└── test                     // 测试文件夹\n    └── functions            // 存储小程序云函数测试用的参数模板\n        └── test.json\n\n")])])]),t("p",[e._v("主要变化如下：")]),e._v(" "),t("ol",[t("li",[e._v("跟前端相关的文件都放入了 client 中，编译后放到 dist 目录中，小程序开发者工具开发目录选择 dist 文件夹")]),e._v(" "),t("li",[e._v("跟 mock server 相关的放入 server 中，server 下文件不做打包处理，即不 release 到 dist 文件下")]),e._v(" "),t("li",[e._v("其中 server/cloud-functions 是云函数文件夹，编译之后放到 dist/cloud-functions 下")]),e._v(" "),t("li",[e._v("server/static 文件夹是静态资源文件夹，将来上传到小程序云开发的「文件管理」中维护（小程序云开发 CDN 静态资源服务器）")])]),e._v(" "),t("h3",{attrs:{id:"使用-express-来实现-mock-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-express-来实现-mock-server"}},[e._v("#")]),e._v(" 使用 Express 来实现 mock server")]),e._v(" "),t("p",[e._v("笔者使用 "),t("a",{attrs:{href:"https://www.express.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Express"),t("OutboundLink")],1),e._v(" 来在本地实现一个 mock server：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const express = require('express')\nconst {PORT} = require('../config.server.json')\nconst app = express()\n\napp.listen(PORT, () => {\n  console.log(`开发服务器启动成功：http://127.0.0.1:${PORT}`)\n})\n\n")])])]),t("p",[e._v("这样就开启了一个端口号为 3000 的本地服务。")]),e._v(" "),t("h4",{attrs:{id:"实现静态资源服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现静态资源服务"}},[e._v("#")]),e._v(" 实现静态资源服务")]),e._v(" "),t("p",[e._v("下面要做的就是使用 "),t("code",[e._v("express.static")]),e._v(" 将 "),t("code",[e._v("server/static")]),e._v(" 目录设置为静态资源服务器：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 添加static\napp.use(\n  '/static',\n  express.static(path.join(__dirname, 'static'), {\n    index: false,\n    maxage: '30d'\n  })\n)\n\n")])])]),t("p",[e._v("静态资源服务器添加好之后，访问 "),t("code",[e._v("http://127.0.0.1:3000/static/xxx")]),e._v(" 就可以直接访问 "),t("code",[e._v("static")]),e._v(" 文件夹下的静态资源了。")]),e._v(" "),t("h4",{attrs:{id:"实现云函数服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现云函数服务"}},[e._v("#")]),e._v(" 实现云函数服务")]),e._v(" "),t("p",[e._v("为了满足「云函数文件线上和 mock server 使用一份，不二次开发」的需求，我们直接按照云函数的写法写代码即可，比如 "),t("code",[e._v("cloud-functions/test/")]),e._v(" 模块：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("exports.main = async (event) => {\n  let {a, b} = event\n  return new Promise((resolve, reject) => {\n    resolve({result: parseInt(a) + parseInt(b)})\n  })\n}\n\n")])])]),t("p",[e._v("在 "),t("code",[e._v("server/index.js")]),e._v(" 中引入对应的模块，然后分配一个路由即可：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const test = require('./cloud-functions/test/').main\n\napp.get('/api/test', (req, res, next) => {\n  // 将 req.query 传入\n  test(req.query).then(res.json.bind(res)).catch((e) => {\n    console.error(e)\n    next(e)\n  })\n  // next()\n})\n\n")])])]),t("p",[e._v("上面代码中，将 "),t("code",[e._v("req.query")]),e._v(" 传入 "),t("code",[e._v("test.main")]),e._v("，构造一个云函数的 "),t("code",[e._v("event")]),e._v(" 参数，用于获取云函数的参数，最后通过 "),t("code",[e._v("Promise")]),e._v(" 的 "),t("code",[e._v("then")]),e._v(" 传递给 "),t("code",[e._v("res.json")]),e._v(" 输出。")]),e._v(" "),t("p",[e._v("写完上面代码，再访问 "),t("code",[e._v("http://127.0.0.1:3000/api/test?a=1&b=2")]),e._v(" 就会输出：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/13/165313f947bd3ad9?w=350&h=105&f=png&s=12377",alt:""}})]),e._v(" "),t("h4",{attrs:{id:"使用-nodemon-对-server-进行自动重启"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-nodemon-对-server-进行自动重启"}},[e._v("#")]),e._v(" 使用 nodemon 对 server 进行自动重启")]),e._v(" "),t("p",[e._v("在云函数开发中，当文件改动了，需要重启 Node.js 服务，如果每次都手动操作就太消耗时间和精力了，所以引入了 "),t("a",{attrs:{href:"https://github.com/remy/nodemon",target:"_blank",rel:"noopener noreferrer"}},[e._v("nodemon"),t("OutboundLink")],1),e._v(" 对 server 目录下文件进行监控，发现文件修改，则重启 Node.js 服务。nodemon 的重启命令放在 "),t("code",[e._v("package.json")]),e._v(" 中维护：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 启动\n"scripts": {\n  "server": "nodemon ./server/index.js"\n},\n// nodemon 配置\n"nodemonConfig": {\n  "ignore": ["test/*", "book/*", "client/*", "bin/*", "node_modules", "dist/*", "package.json"],\n  "delay": "1000"\n},\n\n')])])]),t("p",[e._v("效果如下图所示。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/13/165313f69b72a696?w=372&h=182&f=png&s=42545",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"前端对云函数的调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端对云函数的调用"}},[e._v("#")]),e._v(" 前端对云函数的调用")]),e._v(" "),t("p",[e._v("mock server 中的云函数实现了一套代码在本地和线上都可以跑通，但是 "),t("code",[e._v("client")]),e._v(" 中页面引用云函数使用 "),t("code",[e._v("wx.cloud.callFunction")]),e._v(" 却不能实现一套代码通用，为解决这个问题，笔者通过 "),t("code",[e._v("jdists")]),e._v(" 的 "),t("code",[e._v("remove")]),e._v(" 和 "),t("code",[e._v("trigger")]),e._v(" 方式来实现差异化管理，即")]),e._v(" "),t("ol",[t("li",[e._v("将云函数调用等 API 接口请求调用方法，统一放入 "),t("code",[e._v("client/lib/api.js")]),e._v(" 中实现，"),t("code",[e._v("api.js")]),e._v(" 中使用 "),t("code",[e._v("wx.cloud.callFunction")]),e._v(" 方法")]),e._v(" "),t("li",[e._v("将云函数相关的再用 "),t("code",[e._v("wx.request")]),e._v(" 方法实现一下，请求本地 "),t("code",[e._v("127.0.0.1:3000/api/")]),e._v(" 接口，代码在 "),t("code",[e._v("api-mock.js")]),e._v(" 中实现")]),e._v(" "),t("li",[t("code",[e._v("api.js")]),e._v(" 和 "),t("code",[e._v("api-mock.js")]),e._v(" 输入的参数和输出的结果是一致的，而内部实现是不同的")]),e._v(" "),t("li",[e._v("使用某个云函数时，通过上文提到的 "),t("code",[e._v("jdists")]),e._v(" 的 "),t("code",[e._v("remove")]),e._v(" 和 "),t("code",[e._v("trigger")]),e._v(" 分别引入")])]),e._v(" "),t("p",[e._v("继续拿 "),t("code",[e._v("test")]),e._v(" 这个云函数做说明，"),t("code",[e._v("api.js")]),e._v(" 中直接使用：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export const test = (a, b) => {\n  return wx.cloud.callFunction({\n    name: 'test',\n    data: {\n      a, b\n    }\n  })\n}\n\n")])])]),t("p",[e._v("然后在 "),t("code",[e._v("api-mock.js")]),e._v(" 中实现一次：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 因为小程序的 callfunction 是 Promisify 的，所以这里需要用 Promise 处理一下\n// 小程序中不支持 Promise，所以引入了 bluebird 这个库\nimport Promise from './bluebird'\nexport const test = (a,b) => {\n  return new Promise((resolve, reject) => {\n    wx.request({\n      url: 'http://127.0.0.1:3000/api/test',\n      {a,b},\n      success: (res) => {\n        resolve({result: res.data})\n      },\n      fail: (e) => {\n        reject(e)\n      }\n    })\n  })\n}\n\n")])])]),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),t("p",[e._v("本节主要讲解了 Gulp 构建小程序开发脚手架，从 Gulp 的配置说起，介绍了 WXML、Sass、ES6/7 编写小程序前端代码，然后针对云函数开发测试体验不好的问题，介绍了使用 Express 实现本地 mock server 的方式，将云函数和静态资源文件在本地服务器统一管理，实现「一套代码，多处执行」的效果。")]),e._v(" "),t("p",[e._v("关于上面小程序开发用到的环境搭建代码，笔者从天气小程序项目中整理了出来，作为一个小程序开发脚手架放到了 "),t("a",{attrs:{href:"https://github.com/ksky521/gulp-wxapp-boilerplate",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),t("OutboundLink")],1),e._v(" 上，方便读者快速创建自己的小程序开发环境。")])])}),[],!1,null,null,null);s.default=n.exports}}]);