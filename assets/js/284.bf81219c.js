(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{639:function(s,a,t){"use strict";t.r(a);var e=t(42),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"scrapyd-常用功能与-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scrapyd-常用功能与-api"}},[s._v("#")]),s._v(" Scrapyd 常用功能与 API")]),s._v(" "),t("p",[s._v("上一个小节中，我们学会了如何将项目打包并部署，这一节我们来熟悉 Scrapyd 的常用功能以及学习如何通过 Scrapyd 提供的 API 对爬虫发起指令。")]),s._v(" "),t("h2",{attrs:{id:"scrapyd-web"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scrapyd-web"}},[s._v("#")]),s._v(" Scrapyd-web")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://scrapyd.readthedocs.io/en/latest/overview.html#web-interface",target:"_blank",rel:"noopener noreferrer"}},[s._v("Scrapyd 官方文档"),t("OutboundLink")],1),s._v("中有介绍，Scrapyd 为使用者提供了 Web 与 JSON 两种访问方式，其中"),t("code",[s._v("web")]),s._v("用于监视运行进程和爬虫日志、"),t("code",[s._v("json")]),s._v("用于向爬虫发送操作指令。")]),s._v(" "),t("p",[s._v("Web 中有首页、Jobs、Logs 三个主要页面：")]),s._v(" "),t("ul",[t("li",[s._v("首页：服务入口，展示已部署的项目名称")]),s._v(" "),t("li",[s._v("Jobs：爬虫运行状态及运行记录的主要观察页面")]),s._v(" "),t("li",[s._v("Logs：爬虫运行日志文本文件资源目录")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/4/1663e7be42536a70?w=818&h=275&f=png&s=28786",alt:"Jobs"}})]),s._v(" "),t("p",[s._v("由上图可以看到，Jobs 页面中包含了爬虫与运行记录、项目名称、爬虫名称、jobID、进程 ID、启动时间、运行时长、结束时间以及日志链接。根据以上信息，我们可以对爬虫的状态做个大致的了解。")]),s._v(" "),t("h2",{attrs:{id:"scrapyd-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scrapyd-json"}},[s._v("#")]),s._v(" Scrapyd-json")]),s._v(" "),t("p",[s._v("Scrapyd 为使用者提供了很多的 API，在文档中称为"),t("a",{attrs:{href:"https://scrapyd.readthedocs.io/en/latest/api.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("资源"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/17/1667f9017da8b68f",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"api-的作用介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-的作用介绍"}},[s._v("#")]),s._v(" API 的作用介绍")]),s._v(" "),t("p",[s._v("API 的具体内容、用法和返回信息在官方文档中都有详尽的介绍，这里我做个归纳：")]),s._v(" "),t("ul",[t("li",[s._v("daemonstatus.json - 用以检查 Scrapyd 服务的爬虫状态及对应数量。")]),s._v(" "),t("li",[s._v("addversion.json - 用以为项目添加版本，如果项目不存在则创建项目。")]),s._v(" "),t("li",[s._v("schedule.json - 用以启动指定的爬虫。")]),s._v(" "),t("li",[s._v("cancel.json - 用以取消指定的爬虫。")]),s._v(" "),t("li",[s._v("listprojects.json - 用以查看当前已部署的项目名称。")]),s._v(" "),t("li",[s._v("listversions.json - 用以查看指定项目的版本号。")]),s._v(" "),t("li",[s._v("listspiders.json - 用以查看指定项目的爬虫名称。")]),s._v(" "),t("li",[s._v("listjobs.json - 用以查看指定项目下爬虫的运行状态。")]),s._v(" "),t("li",[s._v("delversion.json - 用以删除指定项目的指定版本，如版本不存在则将项目删除。")]),s._v(" "),t("li",[s._v("delproject.json - 用以删除指定项目及其已上传的所有版本。")])]),s._v(" "),t("h3",{attrs:{id:"api-的使用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-的使用示例"}},[s._v("#")]),s._v(" API 的使用示例")]),s._v(" "),t("p",[s._v("官方示例中以 cURL 作为请求工具，向服务的 API 发起请求")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/17/1667f9337e0da9b3?w=1097&h=823&f=png&s=109035",alt:""}})]),s._v(" "),t("p",[s._v("如启动指定爬虫：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ curl http://localhost:6800/schedule.json -d project=myproject -d spider=somespider\n\n")])])]),t("p",[s._v("当然，如果你想在启动的时候传递指定的参数，也可以这么写：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ curl http://localhost:6800/schedule.json -d project=myproject -d spider=somespider  -d arg1=val1\n\n")])])]),t("p",[s._v("官方返回示例为：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{"status": "ok", "jobid": "6487ec79947edab326d6db28a2d86511e8247444"}\n\n')])])]),t("p",[s._v("cURL 动图演示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/17/1667f9e001830626?w=1062&h=720&f=gif&s=197829",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"使用-postman-工具启动爬虫"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-postman-工具启动爬虫"}},[s._v("#")]),s._v(" 使用 Postman 工具启动爬虫")]),s._v(" "),t("p",[s._v("当然，除了官方推荐的 cURL，我们还可以使用 Postman 来作为我们的请求工具，同样是启动指定的爬虫，Postman 的设置如下所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/11/166610fcded013fc?w=1326&h=898&f=gif&s=184718",alt:""}})]),s._v(" "),t("p",[s._v("设置好请求地址和对应的参数后，点击 Send 发送请求，我们就会得到 Scrapyd 中 Schedule 视图类提供的返回结果：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n    "node_name": "node-name",\n    "status": "ok",\n    "jobid": "ede04d0ac7be11e8b70d00e070785d37"\n}\n\n')])])]),t("p",[s._v("代表此次请求发送成功且能够启动对应的爬虫。")]),s._v(" "),t("h2",{attrs:{id:"使用-python-代码启动爬虫"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-python-代码启动爬虫"}},[s._v("#")]),s._v(" 使用 Python 代码启动爬虫")]),s._v(" "),t("p",[s._v("既然它是通过网络请求来发送指令，那我们就可以使用 requests 来模拟请求的发起，新建 "),t("code",[s._v("sendapi.py")]),s._v(" 文件并敲写代码：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('import requests\n\n\nurl = "http://localhost:6800/schedule.json"\nparams = {"project": "arts", "spider": "tips"}\nresp = requests.post(url, data=params)\nprint(resp.text)\n\n')])])]),t("p",[s._v("通过命令"),t("code",[s._v("python sendapi.py")]),s._v("运行得到返回结果：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{"node_name": "gannicus-PC", "status": "ok", "jobid": "51bdd2bad1ac11e89ed954ee75c0e204"}\n\n')])])]),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/17/1667fa6946262fff?w=1200&h=684&f=gif&s=518627",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"scrapyd-日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scrapyd-日志"}},[s._v("#")]),s._v(" Scrapyd 日志")]),s._v(" "),t("p",[s._v("爬虫的运行信息都会记录在日志文件当中，在 Jobs 页面，可以找到爬虫任务对应的日志，也可以通过 Logs 查看某个项目或某个爬虫的日志，日志内容如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/11/16661123eaa867ce?w=1106&h=1017&f=gif&s=206900",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("本小节结合 Scrapyd 文档与示例代码，我们了解到 Scrapyd API 的用法，并且通过网络请求工具 Postman 发起请求，最后使用 Python 代码向 Scrapyd 服务发起请求，成功启动指定爬虫，完成了从文档到实践的跳跃。")])])}),[],!1,null,null,null);a.default=r.exports}}]);