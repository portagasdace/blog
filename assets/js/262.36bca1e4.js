(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{618:function(e,n,a){"use strict";a.r(n);var r=a(42),p=Object(r.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_2-2-在-npm-script-中使用变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-在-npm-script-中使用变量"}},[e._v("#")]),e._v(" 2.2 在 npm script 中使用变量")]),e._v(" "),a("p",[e._v("npm 为加高效的执行 npm script 做了大量的优化，"),a("a",{attrs:{href:"https://juejin.im/book/5a1212bc51882531ea64df07/section/5a1213d4f265da4335625b4a",target:"_blank",rel:"noopener noreferrer"}},[e._v("创建并运行 npm script 命令"),a("OutboundLink")],1),e._v(" 里面讲到的环境变量特性能让我们在 npm script 中直接调用依赖包里的可执行文件，更强大的是，npm 还提供了 "),a("code",[e._v("$PATH")]),e._v(" 之外的更多的变量，比如当前正在执行的命令、包的名称和版本号、日志输出的级别等。")]),e._v(" "),a("p",[e._v("DRY（Don't Repeat Yourself）是基本的编程原则，在 npm script 中使用预定义变量和自定义变量让我们更容易遵从 DRY 原则，因为使用这些变量之后，npm script 就具备了自适应的能力，我们可以直接把积累起来的 npm script 使用到其他项目里面，而不用做任何修改。")]),e._v(" "),a("h2",{attrs:{id:"使用预定义变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用预定义变量"}},[e._v("#")]),e._v(" 使用预定义变量")]),e._v(" "),a("p",[e._v("首先我们来看预定义变量，通过运行 "),a("code",[e._v("npm run env")]),e._v(" 就能拿到完整的变量列表，这个列表非常长，这里我使用 "),a("code",[e._v("npm run env | grep npm_package | sort")]),e._v(" 拿到部分排序后的预定义环境变量：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 作者信息...\nnpm_package_author_email=wangshijun2010@gmail.com\nnpm_package_author_name=wangshijun\nnpm_package_author_url=http://github.com/wangshijun\n// 依赖信息...\nnpm_package_devDependencies_markdownlint_cli=^0.5.0\nnpm_package_devDependencies_mocha=^4.0.1\nnpm_package_devDependencies_npm_run_all=^4.1.2\n// 各种 npm script\nnpm_package_scripts_lint=npm-run-all --parallel lint:*\nnpm_package_scripts_lint_css=stylelint *.less\nnpm_package_scripts_lint_js=eslint *.js\nnpm_package_scripts_lint_js_fix=npm run lint:js -- --fix\nnpm_package_scripts_lint_json=jsonlint --quiet *.json\n// 基本信息\nnpm_package_version=0.1.0\nnpm_package_gitHead=3796e548cfe406ec33ab837ac00bcbd6ee8a38a0\nnpm_package_license=MIT\nnpm_package_main=index.js\nnpm_package_name=hello-npm-script\nnpm_package_readmeFilename=README.md\n// 依赖的配置\nnpm_package_nyc_exclude_0=**/*.spec.js\nnpm_package_nyc_exclude_1=.*.js\n")])])]),a("p",[e._v("变量的使用方法遵循 shell 里面的语法，直接在 npm script 给想要引用的变量前面加上 "),a("code",[e._v("$")]),e._v(" 符号即可。比如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "dummy": "echo $npm_package_name"\n}\n')])])]),a("p",[e._v("回到我们的项目，测试覆盖率归档是比较常见的需求，因为它方便我们追踪覆盖率的变化趋势，最彻底的做法是归档到 CI 系统里面，对于简单项目，则可以直接归档到文件系统中，即把收集到的覆盖率报告按版本号去存放。")]),e._v(" "),a("p",[e._v("比如，我们在根目录下新建 coverage_archive 目录存储覆盖率归档，并利用变量机制把归档和版本号关联起来。具体的 npm script 修改如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('diff --git a/package.json b/package.json\nindex d297f2e..d86f65c 100644\n--- a/package.json\n+++ b/package.json\n@@ -12,9 +12,10 @@\n   "scripts": {\n-    "precover": "rm -rf coverage",\n     "cover": "nyc --reporter=html npm test",\n-    "postcover": "rm -rf .nyc_output && opn coverage/index.html"\n+    "cover:cleanup": "rm -rf coverage && rm -rf .nyc_output",\n+    "cover:archive": "mkdir -p coverage_archive/$npm_package_version && cp -r coverage/* coverage_archive/$npm_package_version",\n+    "postcover": "npm run cover:archive && npm run cover:cleanup && opn coverage_archive/$npm_package_version/index.html"\n   },\n')])])]),a("p",[e._v("主要改动是：增加 cover:cleanup 和 cover:archive 命令，并且修改 postcover 命令。下面对使用了环境变量的 npm script 稍作解释：")]),e._v(" "),a("p",[e._v("cover:archive 做了 2 件事情：")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("mkdir -p coverage_archive/$npm_package_version")]),e._v(" 准备当前版本号的归档目录；")]),e._v(" "),a("li",[a("code",[e._v("cp -r coverage/* coverage_archive/$npm_package_version")]),e._v("，直接复制文件来归档；")])]),e._v(" "),a("p",[e._v("而 postcover 做了 3 件事情：")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("npm run cover:archive")]),e._v("，归档本次覆盖率报告；")]),e._v(" "),a("li",[a("code",[e._v("npm run cover:cleanup")]),e._v("，清理本次覆盖率报告；")]),e._v(" "),a("li",[a("code",[e._v("opn coverage_archive/$npm_package_version/index.html")]),e._v("，直接预览覆盖率报告；")])]),e._v(" "),a("p",[e._v("配置好之后，我们直接运行 "),a("code",[e._v("npm run cover")]),e._v("，最后的目录结构如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/1/1600f6b21ec7b5f9?w=1820&h=878&f=png&s=253518",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"使用自定义变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用自定义变量"}},[e._v("#")]),e._v(" 使用自定义变量")]),e._v(" "),a("p",[e._v("除了预定义变量外，我们还可以在 package.json 中添加自定义变量，并且在 npm script 中使用这些变量。")]),e._v(" "),a("p",[e._v("为把测试覆盖率报告分享给其他同事浏览，我们就不能使用 opn-cli 打开文件了，需要启动简单的 http 服务，把网址发给别人浏览，比如我们约定网址 "),a("code",[e._v("http://IP:3000")]),e._v("，这里的 IP 需要替换成自己的实际 IP。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/http-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("http-server"),a("OutboundLink")],1),e._v(" 提供了非常轻量的 http 服务，我们先把它加到 devDependencies 中：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm i http-server -D    # 等价命令 npm install http-server --save-dev\n")])])]),a("p",[e._v("接下来，在 package.json 增加自定义端口配置和相应的 npm script 命令，完整的 diff 如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('diff --git a/package.json b/package.json\nindex d86f65c..abc9d01 100644\n--- a/package.json\n+++ b/package.json\n@@ -3,6 +3,9 @@\n   "version": "0.1.0",\n+  "config": {\n+    "port": 3000\n+  },\n   "scripts": {\n@@ -15,7 +18,9 @@\n     "cover": "nyc --reporter=html npm test",\n-    "postcover": "npm run cover:archive && npm run cover:cleanup && opn coverage_archive/$npm_package_version/index.html"\n+    "cover:serve": "http-server coverage_archive/$npm_package_version -p $npm_package_config_port",\n+    "cover:open": "opn http://localhost:$npm_package_config_port",\n+    "postcover": "npm-run-all cover:archive cover:cleanup --parallel cover:serve cover:open"\n   },\n@@ -23,6 +28,7 @@\n   "devDependencies": {\n     "chai": "^4.1.2",\n+    "http-server": "^0.10.0",\n     "mocha": "^4.0.1",\n')])])]),a("p",[e._v("关于改动做以下几点解释：")]),e._v(" "),a("ul",[a("li",[e._v("新增的命令 "),a("code",[e._v("cover:serve")]),e._v(" 中同时使用了预定义变量 "),a("code",[e._v("$npm_package_version")]),e._v(" 和自定义变量 "),a("code",[e._v("$npm_package_config_port")]),e._v("；")]),e._v(" "),a("li",[e._v("预览覆盖率报告的方式从直接打开文件修改为打开网址： "),a("code",[e._v("http://localhost:$npm_package_config_port")]),e._v("；")]),e._v(" "),a("li",[e._v("postcover 命令要做的事情比较多，我们直接使用 npm-run-all 来编排子命令。")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("TIP#8")]),e._v("：注意这里给 cover:serve 和 cover:open 增加了并行参数 "),a("code",[e._v("--parallel")]),e._v("，因为 cover:serve 不会自动退出。")]),e._v(" "),a("p",[a("strong",[e._v("TIP#9")]),e._v("：可能有同学会好奇，是否可以在自定义变量的声明中使用预定义变量，笔者也有这种好奇，并且做过尝试，结果是不支持。")])]),e._v(" "),a("p",[e._v("修改完之后，我们再次运行 npm run cover，终端会在 cover:serve 之后进入等待状态：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/1/1600f6b886e6e423?w=1280&h=968&f=png&s=228450",alt:""}})]),e._v(" "),a("p",[e._v("同时浏览器会打开覆盖率报告，如下图：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/1/1600f6bb0e572ee4?w=976&h=554&f=png&s=70116",alt:""}})]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[e._v("好，关于 npm script 里面的变量使用就介绍到这里，留给你的问题是，在你的项目里面怎么用起来呢？如果想到了，什么时候落地？")])]),e._v(" "),a("hr"),e._v(" "),a("blockquote",[a("p",[e._v("本节用到的代码见 "),a("a",{attrs:{href:"https://github.com/wangshijun/automated-workflow-with-npm-script/tree/05-use-config-variables",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1),e._v("，想边看边动手练习的同学可以拉下来自己改，注意切换到正确的分支 "),a("code",[e._v("05-use-config-variables")]),e._v("。")])]),e._v(" "),a("hr")])}),[],!1,null,null,null);n.default=p.exports}}]);