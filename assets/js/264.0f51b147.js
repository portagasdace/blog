(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{620:function(r,e,a){"use strict";a.r(e);var n=a(42),s=Object(n.a)({},(function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"_3-1-实现-npm-script-跨平台兼容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-实现-npm-script-跨平台兼容"}},[r._v("#")]),r._v(" 3.1 实现 npm script 跨平台兼容")]),r._v(" "),a("p",[r._v("到目前为止，如果你在 Linux、Mac 平台做开发，所有的 npm script 都会顺利运行，但是 Windows 下面的同学可能就比较痛苦了，因为不是所有的 shell 命令都是跨平台兼容的，甚至各种常见的文件系统操作也是不兼容的。")]),r._v(" "),a("p",[r._v("可能有部分同学处理过 npm script 跨平台兼容的问题，比如粗暴的为两种平台各写一份 npm script，像下面这样：")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v('{\n  "name": "hello-npm-script",\n  "scripts": {\n    "bash-script": "echo Hello $npm_package_name",\n    "win-script": "echo Hello %npm_package_name%"\n  }\n}\n\n')])])]),a("p",[r._v("有技术追求的工程师肯定不会满足上面的解决方案，实际上社区中已经有非常多的小工具可以帮我们优雅的实现跨平台的 npm script，下面我们探索下如何实现跨平台的文件系统操作、变量引用、环境变量设置。")]),r._v(" "),a("p",[a("strong",[r._v("特别说明，windows 环境的同学建议使用 git bash 来运行 npm script，使用 windows 自带的 cmd 可能会遇到比较多的问题")])]),r._v(" "),a("h2",{attrs:{id:"文件系统操作的跨平台兼容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件系统操作的跨平台兼容"}},[r._v("#")]),r._v(" 文件系统操作的跨平台兼容")]),r._v(" "),a("p",[r._v("npm script 中涉及到的文件系统操作包括文件和目录的创建、删除、移动、复制等操作，而社区为这些基本操作也提供了跨平台兼容的包，列举如下：")]),r._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/isaacs/rimraf",target:"_blank",rel:"noopener noreferrer"}},[r._v("rimraf"),a("OutboundLink")],1),r._v(" 或 "),a("a",{attrs:{href:"https://www.npmjs.com/package/del-cli",target:"_blank",rel:"noopener noreferrer"}},[r._v("del-cli"),a("OutboundLink")],1),r._v("，用来删除文件和目录，实现类似于 "),a("code",[r._v("rm -rf")]),r._v(" 的功能；")]),r._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/cpr",target:"_blank",rel:"noopener noreferrer"}},[r._v("cpr"),a("OutboundLink")],1),r._v("，用于拷贝、复制文件和目录，实现类似于 "),a("code",[r._v("cp -r")]),r._v(" 的功能；")]),r._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/make-dir-cli",target:"_blank",rel:"noopener noreferrer"}},[r._v("make-dir-cli"),a("OutboundLink")],1),r._v("，用于创建目录，实现类似于 "),a("code",[r._v("mkdir -p")]),r._v(" 的功能；")])]),r._v(" "),a("p",[r._v("使用上面这几个小工具改造 npm script 的具体步骤如下：")]),r._v(" "),a("p",[r._v("第 1 步，添加开发依赖：")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("npm i rimraf cpr make-dir-cli -D\n# npm install rimraf cpr make-dir-cli --save-dev\n# yarn add rimraf cpr make-dir-cli -D\n\n")])])]),a("p",[r._v("第 2 步，改造涉及文件系统操作的 npm script：")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v('  "scripts": {\n-    "cover:cleanup": "rm -rf coverage && rm -rf .nyc_output",\n-    "cover:archive": "cross-var \\"mkdir -p coverage_archive/$npm_package_version && cp -r coverage/* coverage_archive/$npm_package_version\\"",\n+    "cover:cleanup": "rimraf coverage && rimraf .nyc_output",\n+    "cover:archive": "cross-var \\"make-dir coverage_archive/$npm_package_version && cpr coverage/* coverage_archive/$npm_package_version -o\\"",\n     "cover:serve": "cross-var http-server coverage_archive/$npm_package_version -p $npm_package_config_port",\n     "cover:open": "cross-var opn http://localhost:$npm_package_config_port",\n-    "postcover": "npm-run-all cover:archive cover:cleanup --parallel cover:serve cover:open"\n+    "precover": "npm run cover:cleanup",\n+    "postcover": "npm-run-all cover:archive --parallel cover:serve cover:open"\n  },\n\n')])])]),a("p",[r._v("对改动的几点说明：")]),r._v(" "),a("ul",[a("li",[a("code",[r._v("rm -rf")]),r._v(" 直接替换成 "),a("code",[r._v("rimraf")]),r._v("；")]),r._v(" "),a("li",[a("code",[r._v("mkdir -p")]),r._v(" 直接替换成 "),a("code",[r._v("make-dir")]),r._v("；")]),r._v(" "),a("li",[a("code",[r._v("cp -r")]),r._v(" 的替换需特别说明下，"),a("code",[r._v("cpr")]),r._v(" 默认是不覆盖的，需要显示传入 "),a("code",[r._v("-o")]),r._v(" 配置项，并且参数必须严格是 "),a("code",[r._v("cpr <source> <destination> [options]")]),r._v(" 的格式，即配置项放在最后面；")]),r._v(" "),a("li",[r._v("把 "),a("code",[r._v("cover:cleanup")]),r._v(" 从 "),a("code",[r._v("postcover")]),r._v(" 挪到 "),a("code",[r._v("precover")]),r._v(" 里面去执行，规避 "),a("code",[r._v("cpr")]),r._v(" 没归档完毕覆盖率报告就被清空的问题；")])]),r._v(" "),a("blockquote",[a("p",[a("strong",[r._v("TIP#13")]),r._v("：任何改动之后记得重新运行 npm run cover，确保所有的 npm script 还是按预期工作的")])]),r._v(" "),a("h2",{attrs:{id:"用-cross-var-引用变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用-cross-var-引用变量"}},[r._v("#")]),r._v(" 用 cross-var 引用变量")]),r._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/book/5a1212bc51882531ea64df07/section/5a12146951882531bb6c68fe",target:"_blank",rel:"noopener noreferrer"}},[r._v("2.2 在 npm script 中使用变量"),a("OutboundLink")],1),r._v(" 介绍了如何使用内置和预定义变量减少代码重复的技巧，如本节开头的例子，Linux 和 Windows 下引用变量的方式是不同的，Linux 下直接可以用 "),a("code",[r._v("$npm_package_name")]),r._v("，而 Windows 下必须使用 "),a("code",[r._v("%npm_package_name%")]),r._v("，我们可以使用 "),a("a",{attrs:{href:"https://www.npmjs.com/package/cross-var",target:"_blank",rel:"noopener noreferrer"}},[r._v("cross-var"),a("OutboundLink")],1),r._v(" 实现跨平台的变量引用，具体步骤如下：")]),r._v(" "),a("p",[r._v("第 1 步，安装 cross-var 为开发依赖：")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("npm i cross-var -D\n# npm install cross-var --save-dev\n# yarn add cross-var -D\n\n")])])]),a("p",[r._v("第 2 步，改写引用变量 npm script，具体 diff 如下：")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v('  "scripts": {\n     "cover:cleanup": "rm -rf coverage && rm -rf .nyc_output",\n-    "cover:archive": "mkdir -p coverage_archive/$npm_package_version && cp -r coverage/* coverage_archive/$npm_package_version",\n-    "cover:serve": "http-server coverage_archive/$npm_package_version -p $npm_package_config_port",\n-    "cover:open": "opn http://localhost:$npm_package_config_port",\n+    "cover:archive": "cross-var \\"mkdir -p coverage_archive/$npm_package_version && cp -r coverage/* coverage_archive/$npm_package_version\\"",\n+    "cover:serve": "cross-var http-server coverage_archive/$npm_package_version -p $npm_package_config_port",\n+    "cover:open": "cross-var opn http://localhost:$npm_package_config_port",\n     "postcover": "npm-run-all cover:archive cover:cleanup --parallel cover:serve cover:open"\n   },\n\n')])])]),a("p",[r._v("因为 cover:serve 和 cover:open 命令都比较简单，直接在原始命令前增加 cross-var 命令即可，而 cover:archive 内含了两条子命令，我们需要用引号把整个命令包起来（注意这里是用的双引号，且必须转义），然后在前面加上 cross-var。")]),r._v(" "),a("p",[r._v("此外，细心的同学可能发现引入 cross-var 之后，它竟然给我们安装了 babel，如果想保持依赖更轻量的话，可以考虑使用 "),a("a",{attrs:{href:"https://www.npmjs.com/package/cross-var-no-babel",target:"_blank",rel:"noopener noreferrer"}},[r._v("cross-var-no-babel"),a("OutboundLink")],1),r._v("。")]),r._v(" "),a("h2",{attrs:{id:"用-cross-env-设置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用-cross-env-设置环境变量"}},[r._v("#")]),r._v(" 用 cross-env 设置环境变量")]),r._v(" "),a("p",[r._v("在 node.js 脚本和 npm script 使用环境变量也是比较常见的，比如我们在运行测试时，需要加上 "),a("code",[r._v("NODE_ENV=test")]),r._v("，或者在启动静态资源服务器时自定义端口号。因为不同平台的环境变量语法不同，我们可以使用 "),a("a",{attrs:{href:"https://www.npmjs.com/package/cross-env",target:"_blank",rel:"noopener noreferrer"}},[r._v("cross-env"),a("OutboundLink")],1),r._v(" 来实现 npm script 的跨平台兼容，具体步骤如下：")]),r._v(" "),a("p",[r._v("第 1 步，添加 cross-env 到开发依赖：")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("npm i cross-env -D\n# npm install cross-env --save-dev\n# yarn add cross-env -D\n\n")])])]),a("p",[r._v("第 2 步，改写使用了环境变量的 npm script：")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v('  "scripts": {\n-    "test": "NODE_ENV=test mocha tests/",\n+    "test": "cross-env NODE_ENV=test mocha tests/",\n  },\n\n')])])]),a("p",[r._v("上面的改动更简单，直接在设置了环境变量的命令前面加上 cross-env 即可。")]),r._v(" "),a("h2",{attrs:{id:"再多说几句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再多说几句"}},[r._v("#")]),r._v(" 再多说几句")]),r._v(" "),a("p",[r._v("关于 npm script 的跨平台兼容，还有几点需要大家注意：")]),r._v(" "),a("ul",[a("li",[r._v("所有使用引号的地方，建议使用双引号，并且加上转义；")]),r._v(" "),a("li",[r._v("没做特殊处理的命令比如 eslint、stylelint、mocha、opn 等工具本身都是跨平台兼容的；")]),r._v(" "),a("li",[r._v("还是强烈建议有能力的同学能使用 Linux 做开发，只要你入门并且熟练了，效率提升会惊人；")]),r._v(" "),a("li",[r._v("短时间内继续拥抱 Windows 的同学，可以考虑看看 Windows 10 里面引入的 "),a("a",{attrs:{href:"https://msdn.microsoft.com/en-us/commandline/wsl/about",target:"_blank",rel:"noopener noreferrer"}},[r._v("Subsystem"),a("OutboundLink")],1),r._v("，让你不用虚拟机即可在 Windows 下使用大多数 Linux 命令。")])]),r._v(" "),a("blockquote",[a("p",[a("strong",[r._v("TIP#14")]),r._v("：如果你在编写 npm script 过程中有更多的跨平台兼容需求，基本思路是去 "),a("a",{attrs:{href:"https://www.npmjs.com/search?q=cross%20platform",target:"_blank",rel:"noopener noreferrer"}},[r._v("npmjs.com"),a("OutboundLink")],1),r._v(" 上找对应的包，关键词自然少不了 "),a("code",[r._v("cross platform")]),r._v("，你遇到的问题，肯定很多其他人遇到过，相信我，你并不孤独！")])]),r._v(" "),a("hr"),r._v(" "),a("blockquote",[a("p",[r._v("本节用到的代码见 "),a("a",{attrs:{href:"https://github.com/wangshijun/automated-workflow-with-npm-script/tree/06-add-cross-platform-support",target:"_blank",rel:"noopener noreferrer"}},[r._v("GitHub"),a("OutboundLink")],1),r._v("，想边看边动手练习的同学可以拉下来自己改，注意切换到正确的分支 "),a("code",[r._v("06-add-cross-platform-support")]),r._v("。")])]),r._v(" "),a("hr")])}),[],!1,null,null,null);e.default=s.exports}}]);