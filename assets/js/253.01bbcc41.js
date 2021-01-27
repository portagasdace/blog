(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{609:function(n,t,e){"use strict";e.r(t);var s=e(42),a=Object(s.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"_1-1-初识-npm-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-初识-npm-script"}},[n._v("#")]),n._v(" 1.1 初识 npm script")]),n._v(" "),e("p",[n._v("首先介绍创建 package.json 文件的科学方法，目标是掌握 npm init 命令。然后，通过在终端中运行自动生成的 test 命令，详细讲解 npm 脚本基本执行流程。 然后，动手给项目增加 eslint 命令，熟悉创建自定义命令的基本流程。")]),n._v(" "),e("h2",{attrs:{id:"用-npm-init-快速创建项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用-npm-init-快速创建项目"}},[n._v("#")]),n._v(" 用 npm init 快速创建项目")]),n._v(" "),e("p",[n._v("开始探索 npm script 之前，我们先聊聊这些 scripts 所依赖的文件 package.json，以它为基础的 npm 则是 node.js 社区蓬勃发展的顶梁柱。")]),n._v(" "),e("p",[n._v("npm 为我们提供了快速创建 package.json 文件的命令 npm init，执行该命令会问几个基本问题，如包名称、版本号、作者信息、入口文件、仓库地址、许可协议等，多数问题已经提供了默认值，你可以在问题后敲回车接受默认值：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("package name: (hello-npm-script)\nversion: (0.1.0)\ndescription: hello npm script\nentry point: (index.js)\ntest command:\ngit repository:\nkeywords: npm, script\nlicense: (MIT)\n\n")])])]),e("p",[n._v("上面的例子指定了描述（description）和关键字（keywords）两个字段，基本问题问完之后 npm 会把 package.json 文件内容打出来供你确认：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('{\n  "name": "hello-npm-script",\n  "version": "0.1.0",\n  "description": "hello npm script",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [\n    "npm",\n    "script"\n  ],\n  "author": "wangshijun <wangshijun2010@gmail.com> (https://github.com/wangshijun)",\n  "license": "MIT"\n}\n\n')])])]),e("p",[n._v("按回车确认就能把package.json 的内容写到文件系统，如果要修改 package.json，可以直接用编辑器编辑，或者再次运行 npm init，npm 默认不会覆盖修改里面已经存在的信息。")]),n._v(" "),e("blockquote",[e("p",[e("strong",[n._v("TIP#1")]),n._v(": 嫌上面的初始化方式太啰嗦？你可以使用 npm init -f（意指 --force，或者使用 --yes）告诉 npm 直接跳过参数问答环节，快速生成 package.json。")])]),n._v(" "),e("p",[n._v("初始化 package.json 时的字段默认值是可以自己配置的，细心的同学可能已经发现，我上面的默认版本号是 0.1.0，而 npm 默认的版本号是 0.0.1，可以用下面的命令去修改默认配置：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('npm config set init.author.email "wangshijun2010@gmail.com"\nnpm config set init.author.name "wangshijun"\nnpm config set init.author.url "http://github.com/wangshijun"\nnpm config set init.license "MIT"\nnpm config set init.version "0.1.0"\n\n')])])]),e("blockquote",[e("p",[e("strong",[n._v("TIP#2")]),n._v(": 将默认配置和 -f 参数结合使用，能让你用最短的时间创建 package.json，快去自己试试吧。")])]),n._v(" "),e("p",[n._v("严肃的工程师都会使用 Git 对源代码进行版本管理，在 npm init 的基础上，你可以使用 git init 来初始化 git 仓库，不再展开。")]),n._v(" "),e("p",[n._v("纸上得来终觉浅，想掌握 npm script，请打开终端，执行下列命令：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("cd ~\nmkdir hello-npm-script && cd $_\nnpm init\nnpm init -f\n\n")])])]),e("p",[e("strong",[n._v("执行上面第 3、4 行命令时结果是否符合预期？如果不符合预期，请在下面留言，或者在读者群里反馈。")])]),n._v(" "),e("h2",{attrs:{id:"用-npm-run-执行任意命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用-npm-run-执行任意命令"}},[n._v("#")]),n._v(" 用 npm run 执行任意命令")]),n._v(" "),e("p",[n._v("使用 npm init 创建的 package.json 文件中包含了 scripts 字段：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('"scripts": {\n  "test": "echo \\"Error: no test specified\\" && exit 1"\n},\n\n')])])]),e("p",[n._v("在终端中运行 npm run test，能看到 Error: no test specified 的输出。npm run test 可以简写为 npm test，或更简单的 npm t，得到的结果是几乎相同的。npm test 顾名思义，就是运行项目测试，实际用法在实战环节会有介绍。")]),n._v(" "),e("p",[n._v("和 test 类似，start 也是 npm 内置支持的命令，但是需要先在 scripts 字段中声明该脚本的实际内容，如果没声明就执行 npm start，会直接报错。如下图所示：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/25/15ff0b3414194277?w=805&h=112&f=png&s=26451",alt:""}})]),n._v(" "),e("p",[n._v("那么，npm 是如何管理和执行各种 scripts 的呢？作为 npm 内置的核心功能之一，npm run 实际上是 npm run-script 命令的简写。当我们运行 npm run xxx 时，基本步骤如下：")]),n._v(" "),e("ol",[e("li",[n._v("从 package.json 文件中读取 scripts 对象里面的全部配置；")]),n._v(" "),e("li",[n._v("以传给 npm run 的第一个参数作为键，本例中为 xxx，在 scripts 对象里面获取对应的值作为接下来要执行的命令，如果没找到直接报错；")]),n._v(" "),e("li",[n._v("在系统默认的 shell 中执行上述命令，系统默认 shell 通常是 bash，windows 环境下可能略有不同，稍后再讲。")])]),n._v(" "),e("p",[n._v("注意，上面这是简化的流程，更复杂的钩子机制后面章节单独介绍。")]),n._v(" "),e("p",[n._v("举例来说，如果 package.json 文件内容如下：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('{\n  "name": "hello-npm-script",\n  "devDependencies": {\n    "eslint": "latest"\n  },\n  "scripts": {\n    "eslint": "eslint **.js"\n  }\n}\n\n')])])]),e("p",[n._v("如果不带任何参数执行 npm run，它会列出可执行的所有命令，比如下面这样：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("Available scripts in the myproject package:\n  eslint\n    eslint **.js\n\n")])])]),e("p",[n._v("如果运行 npm run eslint，npm 会在 shell 中运行 eslint **.js。")]),n._v(" "),e("p",[n._v("有没有好奇过上面的 eslint 命令是从哪里来的？其实，npm 在执行指定 script 之前会把 node_modules/.bin 加到环境变量 $PATH 的前面，这意味着任何内含可执行文件的 npm 依赖都可以在 npm script 中直接调用，换句话说，你不需要在 npm script 中加上可执行文件的完整路径，比如 "),e("code",[n._v("./node_modules/.bin/eslint **.js")]),n._v("。")]),n._v(" "),e("h2",{attrs:{id:"创建自定义-npm-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建自定义-npm-script"}},[n._v("#")]),n._v(" 创建自定义 npm script")]),n._v(" "),e("p",[n._v("知道如何运行 npm script 之后，接下来我们在 hello-npm-script 项目中添加有实际用途的 eslint 脚本，"),e("a",{attrs:{href:"https://eslint.org",target:"_blank",rel:"noopener noreferrer"}},[n._v("eslint"),e("OutboundLink")],1),n._v(" 是社区中接受度比较高的 javascript 风格检查工具，有大把现成的规则集可供你选择，比如 "),e("a",{attrs:{href:"https://github.com/google/eslint-config-google",target:"_blank",rel:"noopener noreferrer"}},[n._v("google"),e("OutboundLink")],1),n._v("、 "),e("a",{attrs:{href:"https://www.npmjs.com/package/eslint-config-airbnb",target:"_blank",rel:"noopener noreferrer"}},[n._v("airbnb"),e("OutboundLink")],1),n._v("。")]),n._v(" "),e("p",[n._v("在新项目或者任何现有项目中添加 eslint 自定义脚本的步骤如下：")]),n._v(" "),e("h3",{attrs:{id:"_1-准备被检查的代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备被检查的代码"}},[n._v("#")]),n._v(" 1. 准备被检查的代码")]),n._v(" "),e("p",[n._v("要做代码检查，我们必须有代码，创建 index.js 文件，输入如下内容：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const str = 'some value';\n\nfunction fn(){\n    console.log('some log');\n}\n\n")])])]),e("h3",{attrs:{id:"_2-添加-eslint-依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加-eslint-依赖"}},[n._v("#")]),n._v(" 2. 添加 eslint 依赖")]),n._v(" "),e("p",[n._v("执行如下命令将 eslint 添加为 devDependencies：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("npm install eslint -D\n\n")])])]),e("h3",{attrs:{id:"_3-初始化-eslint-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-初始化-eslint-配置"}},[n._v("#")]),n._v(" 3. 初始化 eslint 配置")]),n._v(" "),e("p",[n._v("用 eslint 做检查需要配置规则集，存放规则集的文件就是配置文件，使用如下文件生成配置文件：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("./node_modules/.bin/eslint --init\n\n")])])]),e("blockquote",[e("p",[e("strong",[n._v("TIP#3")]),n._v(": 把 eslint 安装为项目依赖而非全局命令，项目可移植性更高。")])]),n._v(" "),e("p",[n._v("在命令行提示中选择 Answer questions about your style，如下图回答几个问题，答案可以根据自己的偏好：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/25/15ff0b3ab69913bd?w=998&h=264&f=png&s=75959",alt:""}})]),n._v(" "),e("p",[n._v("回车后根目录下就有了 .eslintrc.js 配置文件：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("module.exports = {\n  env: {\n    es6: true,\n    node: true,\n  },\n  extends: 'eslint:recommended',\n  rules: {\n    indent: ['error', 4],\n    'linebreak-style': ['error', 'unix'],\n    quotes: ['error', 'single'],\n    semi: ['error', 'always'],\n  },\n};\n\n")])])]),e("h3",{attrs:{id:"_4-添加-eslint-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-添加-eslint-命令"}},[n._v("#")]),n._v(" 4. 添加 eslint 命令")]),n._v(" "),e("p",[n._v("在 package.json 的 scripts 字段中新增命令 eslint：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('{\n  "scripts": {\n    "eslint": "eslint *.js",\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n}\n\n')])])]),e("p",[e("strong",[n._v("手动修改 package.json 时一定要注意语法正确。")])]),n._v(" "),e("h3",{attrs:{id:"_5-运行-eslint-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-运行-eslint-命令"}},[n._v("#")]),n._v(" 5. 运行 eslint 命令")]),n._v(" "),e("p",[n._v("执行 npm run eslint，可以看到，按照官方推荐规则代码里有 3 处不符合规范的地方：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/25/15ff0b3dd4c03103?w=783&h=271&f=png&s=49211",alt:""}})]),n._v(" "),e("hr"),n._v(" "),e("p",[n._v("如果读到这里，相信你已经完成 npm script 上手，接下来我们去探索更高级的话题。")]),n._v(" "),e("hr"),n._v(" "),e("h2",{attrs:{id:"_20171205-增补-eslint-完成-react、vue-js-代码的检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20171205-增补-eslint-完成-react、vue-js-代码的检查"}},[n._v("#")]),n._v(" 20171205 增补：eslint 完成 react、vue.js 代码的检查")]),n._v(" "),e("p",[n._v("如果需要结合 eslint 检查主流前端框架 react、vue.js，下面提供两条线索，因为官方仓库的 README 就可以作为入门文档，仔细读读相信绝大多数同学都能配置好。")]),n._v(" "),e("p",[n._v("使用 "),e("a",{attrs:{href:"https://github.com/yannickcr/eslint-plugin-react",target:"_blank",rel:"noopener noreferrer"}},[n._v("eslint-plugin-react"),e("OutboundLink")],1),n._v(" 检查 react 代码，使用 "),e("a",{attrs:{href:"https://github.com/Intellicode/eslint-plugin-react-native",target:"_blank",rel:"noopener noreferrer"}},[n._v("react-plugin-react-native"),e("OutboundLink")],1),n._v(" 检查 react-native 代码，如果你比较懒，可以直接使用 "),e("a",{attrs:{href:"https://www.npmjs.com/package/eslint-config-airbnb",target:"_blank",rel:"noopener noreferrer"}},[n._v("eslint-config-airbnb"),e("OutboundLink")],1),n._v("，里面内置了 eslint-plugin-react，新人常遇到 peerDependencies 安装失败问题可参照 npmjs 主页上的如下方法解决：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('(\n  export PKG=eslint-config-airbnb;\n  npm info "$PKG@latest" peerDependencies --json | command sed \'s/[\\{\\},]//g ; s/: /@/g\' | xargs npm install --save-dev "$PKG@latest"\n)\n\n')])])]),e("p",[n._v("推荐使用 vue.js 官方的 eslint 插件："),e("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue",target:"_blank",rel:"noopener noreferrer"}},[n._v("eslint-plugin-vue"),e("OutboundLink")],1),n._v(" 来检查 vue.js 代码，具体的配置方法官方 README 写的清晰明了，这里就不赘述了。")]),n._v(" "),e("p",[n._v("上面的几种 eslint 规则集的官方仓库都列出了各自支持的规则，如果你需要关闭某些规则，可以直接在自己的 .eslintrc* 里面的 rules 中配置，比如我们仓库里面的：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("module.exports = {\n  env: {\n    es6: true,\n    node: true,\n  },\n  extends: 'eslint:recommended',\n  rules: {\n    indent: ['error', 2],\n    'linebreak-style': ['error', 'unix'],\n    quotes: ['error', 'single'],\n    semi: ['error', 'always'],\n  },\n};\n\n")])])]),e("p",[n._v("如果你配置过程中遇到什么问题，欢迎留言或者在读者群里面交流。")])])}),[],!1,null,null,null);t.default=a.exports}}]);