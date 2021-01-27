(window.webpackJsonp=window.webpackJsonp||[]).push([[363],{719:function(e,n,t){"use strict";t.r(n);var a=t(42),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"实战-4-全局提示组件-alert"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实战-4-全局提示组件-alert"}},[e._v("#")]),e._v(" 实战 4：全局提示组件——$Alert")]),e._v(" "),t("p",[e._v("有一种 Vue.js 组件，它不同于常规的组件，但组件结构本身很简单，比如下面的全局提示组件：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fcc05107e987c?w=3187&h=2087&f=png&s=265274",alt:""}})]),e._v(" "),t("p",[e._v("实现这样一个组件并不难，只需要简单的几行 div 和 css，但使用者可能要这样来显示组件：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<template>\n  <div>\n    <Alert v-if="show">这是一条提示信息</Alert>\n    <button @click="show = true">显示</button>\n  </div>\n</template>\n<script>\n  import Alert from \'../component/alert.vue\';\n\n  export default {\n    components: { Alert },\n    data () {\n      return {\n        show: false\n      }\n    }\n  }\n<\/script>\n\n')])])]),t("p",[e._v("这样的用法，有以下缺点：")]),e._v(" "),t("ul",[t("li",[e._v("每个使用的地方，都得注册组件；")]),e._v(" "),t("li",[e._v("需要预先将 "),t("code",[e._v("<Alert>")]),e._v(" 放置在模板中；")]),e._v(" "),t("li",[e._v("需要额外的 data 来控制 Alert 的显示状态；")]),e._v(" "),t("li",[e._v("Alert 的位置，是在当前组件位置，并非在 body 下，有可能会被其它组件遮挡。")])]),e._v(" "),t("p",[e._v("总之对使用者来说是很不友好的，那怎样才能优雅地实现这样一个组件呢？事实上，原生的 JavaScript 早已给出了答案：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 全局提示\nwindow.alert('这是一条提示信息');\n// 二次确认\nconst confirm = window.confirm('确认删除吗？');\nif (confirm) {\n  // ok\n} else {\n  // cancel\n}\n\n")])])]),t("p",[e._v("所以，结论是：我们需要一个能用 JavaScript 调用组件的 API。")]),e._v(" "),t("p",[e._v("如果你使用过 iView 之类的组件库，一定对它内置的 $Message、$Notice、$Modal 等组件很熟悉，本节就来开发一个全局通知组件——$Alert。")]),e._v(" "),t("h2",{attrs:{id:"_1-3-先把组件写好"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-先把组件写好"}},[e._v("#")]),e._v(" 1/3 先把组件写好")]),e._v(" "),t("p",[e._v("我们期望最终的 API 是这样的：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("methods: {\n  handleShow () {\n    this.$Alert({\n      content: '这是一条提示信息',\n      duration: 3\n    })\n  }\n}\n\n")])])]),t("p",[t("code",[e._v("this.$Alert")]),e._v(" 可以在任何位置调用，无需单独引入。该方法接收两个参数：")]),e._v(" "),t("ul",[t("li",[e._v("content：提示内容；")]),e._v(" "),t("li",[e._v("duration：持续时间，单位秒，默认 1.5 秒，到时间自动消失。")])]),e._v(" "),t("p",[e._v("最终效果如下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fcc09c43c2ad1?w=1208&h=314&f=gif&s=207241",alt:""}})]),e._v(" "),t("p",[e._v("我们从最简单的入手，不考虑其它，先写一个基本的 Alert 组件。")]),e._v(" "),t("p",[e._v("在 "),t("code",[e._v("src/component")]),e._v(" 下新建 "),t("code",[e._v("alert")]),e._v(" 目录，并创建文件 "),t("code",[e._v("alert.vue")]),e._v("：")]),e._v(" "),t("p",[e._v("通知可以是多个，我们用一个数组 "),t("code",[e._v("notices")]),e._v(" 来管理每条通知：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('\x3c!-- alert.vue --\x3e\n<template>\n  <div class="alert">\n    <div class="alert-main" v-for="item in notices" :key="item.name">\n      <div class="alert-content">{{ item.content }}</div>\n    </div>\n  </div>\n</template>\n<script>\n  export default {\n    data () {\n      return {\n        notices: []\n      }\n    }\n  }\n<\/script>\n<style>\n  .alert{\n    position: fixed;\n    width: 100%;\n    top: 16px;\n    left: 0;\n    text-align: center;\n    pointer-events: none;\n  }\n  .alert-content{\n    display: inline-block;\n    padding: 8px 16px;\n    background: #fff;\n    border-radius: 3px;\n    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);\n    margin-bottom: 8px;\n  }\n</style>\n\n')])])]),t("p",[e._v("Alert 组件不同于常规的组件使用方式，它最终是通过 JS 来调用的，因此组件不用预留 props 和 events 接口。")]),e._v(" "),t("p",[e._v("接下来，只要给数组 "),t("code",[e._v("notices")]),e._v(" 增加数据，这个提示组件就能显示内容了，我们先假设，最终会通过 JS 调用 Alert 的一个方法 "),t("code",[e._v("add")]),e._v("，并将 "),t("code",[e._v("content")]),e._v(" 和 "),t("code",[e._v("duration")]),e._v(" 传入进来：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\x3c!-- alert.vue，部分代码省略 --\x3e\n<script>\n  let seed = 0;\n\n  function getUuid() {\n    return 'alert_' + (seed++);\n  }\n\n  export default {\n    data () {\n      return {\n        notices: []\n      }\n    },\n    methods: {\n      add (notice) {\n        const name = getUuid();\n\n        let _notice = Object.assign({\n          name: name\n        }, notice);\n\n        this.notices.push(_notice);\n\n        // 定时移除，单位：秒\n        const duration = notice.duration;\n        setTimeout(() => {\n          this.remove(name);\n        }, duration * 1000);\n      },\n      remove (name) {\n        const notices = this.notices;\n\n        for (let i = 0; i < notices.length; i++) {\n          if (notices[i].name === name) {\n            this.notices.splice(i, 1);\n            break;\n          }\n        }\n      }\n    }\n  }\n<\/script>\n\n")])])]),t("p",[e._v("在 "),t("code",[e._v("add")]),e._v(" 方法中，给每一条传进来的提示数据，加了一个不重复的 "),t("code",[e._v("name")]),e._v(" 字段来标识，并通过 "),t("code",[e._v("setTimeout")]),e._v(" 创建了一个计时器，当到达指定的 "),t("code",[e._v("duration")]),e._v(" 持续时间后，调用 "),t("code",[e._v("remove")]),e._v(" 方法，将对应 "),t("code",[e._v("name")]),e._v(" 的那条提示信息找到，并从数组中移除。")]),e._v(" "),t("p",[e._v("由这个思路，Alert 组件就可以无限扩展，只要在 add 方法中传递更多的参数，就能支持更复杂的组件，比如是否显示手动关闭按钮、确定 / 取消按钮，甚至传入一个 Render 函数都可以，完成本例后，读者可以尝试”改造“。")]),e._v(" "),t("h2",{attrs:{id:"_2-3-实例化封装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-实例化封装"}},[e._v("#")]),e._v(" 2/3 实例化封装")]),e._v(" "),t("p",[e._v("这一步，我们对 Alert 组件进一步封装，让它能够实例化，而不是常规的组件使用方法。实例化组件我们在第 8 节中介绍过，可以使用 Vue.extend 或 new Vue，然后用 $mount 挂载到 body 节点下。")]),e._v(" "),t("p",[e._v("在 "),t("code",[e._v("src/components/alert")]),e._v(" 目录下新建 "),t("code",[e._v("notification.js")]),e._v(" 文件：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// notification.js\nimport Alert from './alert.vue';\nimport Vue from 'vue';\n\nAlert.newInstance = properties => {\n  const props = properties || {};\n\n  const Instance = new Vue({\n    data: props,\n    render (h) {\n      return h(Alert, {\n        props: props\n      });\n    }\n  });\n\n  const component = Instance.$mount();\n  document.body.appendChild(component.$el);\n\n  const alert = Instance.$children[0];\n\n  return {\n    add (noticeProps) {\n      alert.add(noticeProps);\n    },\n    remove (name) {\n      alert.remove(name);\n    }\n  }\n};\n\nexport default Alert;\n\n")])])]),t("p",[e._v("notification.js 并不是最终的文件，它只是对 alert.vue 添加了一个方法 "),t("code",[e._v("newInstance")]),e._v("。虽然 alert.vue 包含了 template、script、style 三个标签，并不是一个 JS 对象，那怎么能够给它扩展一个方法 "),t("code",[e._v("newInstance")]),e._v(" 呢？事实上，alert.vue 会被 Webpack 的 vue-loader 编译，把 template 编译为 Render 函数，最终就会成为一个 JS 对象，自然可以对它进行扩展。")]),e._v(" "),t("p",[e._v("Alert 组件没有任何 props，这里在 Render Alert 组件时，还是给它加了 props，当然，这里的 props 是空对象 {}，而且即使传了内容，也不起作用。这样做的目的还是为了扩展性，如果要在 Alert 上添加 props 来支持更多特性，是要在这里传入的。不过话说回来，因为能拿到 Alert 实例，用 data 或 props 都是可以的。")]),e._v(" "),t("p",[e._v("在第 8 节已经解释过，"),t("code",[e._v("const alert = Instance.$children[0];")]),e._v("，这里的 alert 就是 Render 的 Alert 组件实例。在 "),t("code",[e._v("newInstance")]),e._v(" 里，使用闭包暴露了两个方法 "),t("code",[e._v("add")]),e._v(" 和 "),t("code",[e._v("remove")]),e._v("。这里的 add 和 remove 可不是 alert.vue 里的 add 和 remove，它们只是名字一样。")]),e._v(" "),t("h2",{attrs:{id:"_3-3-入口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-入口"}},[e._v("#")]),e._v(" 3/3 入口")]),e._v(" "),t("p",[e._v("最后要做的，就是调用 notification.js 创建实例，并通过 "),t("code",[e._v("add")]),e._v(" 把数据传递过去，这是组件开发的最后一步，也是最终的入口。在 "),t("code",[e._v("src/component/alert")]),e._v(" 下创建文件 "),t("code",[e._v("alert.js")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// alert.js\nimport Notification from './notification.js';\n\nlet messageInstance;\n\nfunction getMessageInstance () {\n  messageInstance = messageInstance || Notification.newInstance();\n  return messageInstance;\n}\n\nfunction notice({ duration = 1.5, content = '' }) {\n  let instance = getMessageInstance();\n\n  instance.add({\n    content: content,\n    duration: duration\n  });\n}\n\nexport default {\n  info (options) {\n    return notice(options);\n  }\n}\n\n")])])]),t("p",[t("code",[e._v("getMessageInstance")]),e._v(" 函数用来获取实例，它不会重复创建，如果 messageInstance 已经存在，就直接返回了，只在第一次调用 Notification 的 "),t("code",[e._v("newInstance")]),e._v(" 时来创建实例。")]),e._v(" "),t("p",[e._v("alert.js 对外提供了一个方法 "),t("code",[e._v("info")]),e._v("，如果需要各种显示效果，比如成功的、失败的、警告的，可以在 info 下面提供更多的方法，比如 success、fail、warning 等，并传递不同参数让 Alert.vue 知道显示哪种状态的图标。本例因为只有一个 info，事实上也可以省略掉，直接导出一个默认的函数，这样在调用时，就不用 "),t("code",[e._v("this.$Alert.info()")]),e._v(" 了，直接 "),t("code",[e._v("this.$Alert()")]),e._v("。")]),e._v(" "),t("p",[e._v("来看一下显示一个信息提示组件的流程：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fcc0fe6df06d2?w=1800&h=180&f=png&s=47285",alt:""}})]),e._v(" "),t("p",[e._v("最后把 alert.js 作为插件注册到 Vue 里就行，在入口文件 "),t("code",[e._v("src/main.js")]),e._v("中，通过 "),t("code",[e._v("prototype")]),e._v(" 给 Vue 添加一个实例方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// src/main.js\nimport Vue from 'vue'\nimport App from './App.vue'\nimport router from './router'\nimport Alert from '../src/components/alert/alert.js'\n\nVue.config.productionTip = false\n\nVue.prototype.$Alert = Alert\n\nnew Vue({\n  router,\n  render: h => h(App)\n}).$mount('#app')\n\n\n")])])]),t("p",[e._v("这样在项目任何地方，都可以通过 "),t("code",[e._v("this.$Alert")]),e._v(" 来调用 Alert 组件了，我们创建一个 alert 的路由，并在 "),t("code",[e._v("src/views")]),e._v(" 下创建页面 "),t("code",[e._v("alert.vue")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\x3c!-- src/views/alert.vue --\x3e\n<template>\n  <div>\n    <button @click=\"handleOpen1\">打开提示 1</button>\n    <button @click=\"handleOpen2\">打开提示 2</button>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      handleOpen1 () {\n        this.$Alert.info({\n          content: '我是提示信息 1'\n        });\n      },\n      handleOpen2 () {\n        this.$Alert.info({\n          content: '我是提示信息 2',\n          duration: 3\n        });\n      }\n    }\n  }\n<\/script>\n\n")])])]),t("p",[t("code",[e._v("duration")]),e._v(" 如果不传入，默认是 1.5 秒。")]),e._v(" "),t("p",[e._v("以上就是全局通知组件的全部内容。")]),e._v(" "),t("h2",{attrs:{id:"友情提示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#友情提示"}},[e._v("#")]),e._v(" 友情提示")]),e._v(" "),t("p",[e._v("本示例算是一个 MVP（最小化可行方案），要开发一个完善的全局通知组件，还需要更多可维护性和功能性的设计，但离不开本例的设计思路。以下几点是同类组件中值得注意的：")]),e._v(" "),t("ol",[t("li",[e._v("Alert.vue 的最外层是有一个 .alert 节点的，它会在第一次调用 "),t("code",[e._v("$Alert")]),e._v(" 时，在 body 下创建，因为不在 "),t("code",[e._v("<router-view>")]),e._v(" 内，它不受路由的影响，也就是说一经创建，除非刷新页面，这个节点是不会消失的，所以在 alert.vue 的设计中，并没有主动销毁这个组件，而是维护了一个子节点数组 "),t("code",[e._v("notices")]),e._v("。")]),e._v(" "),t("li",[e._v(".alert 节点是 "),t("code",[e._v("position: fixed")]),e._v(" 固定的，因此要合理设计它的 "),t("code",[e._v("z-index")]),e._v("，否则可能被其它节点遮挡。")]),e._v(" "),t("li",[e._v("notification.js 和 alert.vue 是可以复用的，如果还要开发其它同类的组件，比如二次确认组件 "),t("code",[e._v("$Confirm")]),e._v(", 只需要再写一个入口 "),t("code",[e._v("confirm.js")]),e._v("，并将 "),t("code",[e._v("alert.vue")]),e._v(" 进一步封装，将 "),t("code",[e._v("notices")]),e._v(" 数组的循环体写为一个新的组件，通过配置来决定是渲染 Alert 还是 Confirm，这在可维护性上是友好的。")]),e._v(" "),t("li",[e._v("在 notification.js 的 new Vue 时，使用了 Render 函数来渲染 alert.vue，这是因为使用 template 在 runtime 的 Vue.js 版本下是会报错的。")]),e._v(" "),t("li",[e._v("本例的 content 只能是字符串，如果要显示自定义的内容，除了用 "),t("code",[e._v("v-html")]),e._v(" 指令，也能用 Functional Render（之后章节会介绍）。")])]),e._v(" "),t("h2",{attrs:{id:"结语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[e._v("#")]),e._v(" 结语")]),e._v(" "),t("p",[e._v("Vue.js 的精髓是组件，组件的精髓是 JavaScript。将 JavaScript 开发中的技巧结合 Vue.js 组件，就能玩出不一样的东西。")]),e._v(" "),t("p",[e._v("注：本节部分代码参考 "),t("a",{attrs:{href:"https://github.com/iview/iview/tree/2.0/src/components/base/notification",target:"_blank",rel:"noopener noreferrer"}},[e._v("iView"),t("OutboundLink")],1),e._v("。")])])}),[],!1,null,null,null);n.default=r.exports}}]);