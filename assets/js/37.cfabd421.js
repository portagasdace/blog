(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{393:function(v,a,_){"use strict";_.r(a);var s=_(42),t=Object(s.a)({},(function(){var v=this,a=v.$createElement,_=v._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"什么是-canvas"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-canvas"}},[v._v("#")]),v._v(" 什么是 Canvas")]),v._v(" "),_("p",[v._v("前一段学习了一个学知识的方法论，个人觉得很有用，推荐给大家，就是在学习一个概念的时候，先问一下"),_("strong",[v._v("这个知识的概念是什么")]),v._v("，然后再"),_("strong",[v._v("看一下这个知识它被提出来的目的是什么")]),v._v("，然后如果你能将其用一句话说清楚，那么你就理解了该知识点。")]),v._v(" "),_("p",[v._v("所以对于什么是 Canvas，我们也按照这个方法来分析。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/21/15fdd7ebe40358e5?w=1256&h=692&f=jpeg&s=92075",alt:"学习概念步骤"}})]),v._v(" "),_("h2",{attrs:{id:"什么是-canvas-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-canvas-2"}},[v._v("#")]),v._v(" 什么是 Canvas")]),v._v(" "),_("p",[v._v("在 "),_("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API",target:"_blank",rel:"noopener noreferrer"}},[v._v("MDN"),_("OutboundLink")],1),v._v(" 中是这样定义 "),_("code",[v._v("<canvas>")]),v._v(" 的：")]),v._v(" "),_("blockquote",[_("p",[_("code",[v._v("<canvas>")]),v._v(" 是 HTML5 新增的元素，可用于通过使用 JavaScript 中的脚本来绘制图形。例如，它可以用于绘制图形、制作照片、创建动画，甚至可以进行实时视频处理或渲染。")])]),v._v(" "),_("p",[v._v("这里需要划重点的是，"),_("code",[v._v("<canvas>")]),v._v(" 只是一个画布，本身并不具有绘图的能力，绘图必须使用 JavaScript 等脚本语言。")]),v._v(" "),_("p",[_("code",[v._v("<canvas>")]),v._v(" 标签允许脚本语言动态渲染位图像。"),_("code",[v._v("<canvas>")]),v._v(" 标签创建出了一个可绘制区域，JavaScript 代码可以通过一套完整的绘图功能类似于其他通用二维的 API 访问该区域，从而生成动态的图形。")]),v._v(" "),_("p",[v._v("我们可以认为 "),_("code",[v._v("<canvas>")]),v._v(" 标签只是一个矩形的画布。JavaScript 就是画笔，负责在画布上画画。")]),v._v(" "),_("p",[v._v("例如，我的"),_("a",{attrs:{href:"http://cherryblog.site/",target:"_blank",rel:"noopener noreferrer"}},[v._v("个人博客"),_("OutboundLink")],1),v._v("中的背景就是使用 Canvas 制作的。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/15/15fbdba8bc88ca28?w=960&h=640&f=gif&s=1283617",alt:"http://cherryblog.site/"}})]),v._v(" "),_("p",[v._v("我们审查元素可以看到整个背景就是一个 Canvas 元素，宽度和高度都是 100%。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/21/15fdd83572dd39a1?w=2878&h=1602&f=jpeg&s=500997",alt:"http://cherryblog.site/"}})]),v._v(" "),_("h2",{attrs:{id:"canvas-解决了什么问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#canvas-解决了什么问题"}},[v._v("#")]),v._v(" Canvas 解决了什么问题")]),v._v(" "),_("p",[v._v("我在 MSDN（《Microsoft Developer Network》是微软一个期刊产品，专门介绍各种编程技巧）上找到了 Canvas 出现的背景，来给大家简单介绍一下。")]),v._v(" "),_("p",[v._v("在互联网出现的早期，Web 只不过是静态文本和链接的集合。1993 年，有人提出了 "),_("code",[v._v("img")]),v._v(" 标签，它可以用来嵌入图像。")]),v._v(" "),_("p",[v._v("由于互联网的发展越来越迅猛，Web 应用已经从 Web 文档发展到 Web 应用程序。但是图像一直是静态的，人们越来越希望在其网站和应用程序中使用动态媒体（如音频、视频和交互式动画等），于是 Flash 就出现了。")]),v._v(" "),_("p",[v._v("但是随着 Web 应用的发展，出现了 HTML5，在 HTML5 中，浏览器中的媒体元素大受青睐。包括出现新的 "),_("code",[v._v("Audio")]),v._v(" 和 "),_("code",[v._v("Video")]),v._v(" 标签，可以直接将音频和视频资源放在 Web 上，而不需要其他第三方。")]),v._v(" "),_("p",[v._v("其次就是为了解决只能在 Web 页面中显示静态图片的问题，出现了 Canvas 标签。它是一个绘图表面，包含一组丰富的 JavaScript API，这些 API 使你能够动态创建和操作图像及动画。img 对静态图形内容起到了哪些作用，Canvas 就可能对可编写脚本的动态内容起到哪些作用。")]),v._v(" "),_("h2",{attrs:{id:"一句话总结-canvas-是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一句话总结-canvas-是什么"}},[v._v("#")]),v._v(" 一句话总结 Canvas 是什么")]),v._v(" "),_("p",[v._v("什么是 Canvas？Canvas 是为了解决 Web 页面中只能显示静态图片这个问题而提出的，一个可以使用 JavaScript 等脚本语言向其中绘制图像的 HTML 标签。")]),v._v(" "),_("h2",{attrs:{id:"浏览器支持情况"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器支持情况"}},[v._v("#")]),v._v(" 浏览器支持情况")]),v._v(" "),_("p",[v._v("Canvas 已经受到了主流浏览器的支持，并且支持情况良好，具体支持情况如下：")]),v._v(" "),_("p",[v._v("元素")]),v._v(" "),_("p",[v._v("Chrome")]),v._v(" "),_("p",[v._v("IE")]),v._v(" "),_("p",[v._v("Firefox")]),v._v(" "),_("p",[v._v("Safari")]),v._v(" "),_("p",[v._v("Opera")]),v._v(" "),_("p",[v._v("Canvas")]),v._v(" "),_("p",[v._v("4.0+")]),v._v(" "),_("p",[v._v("9.0+")]),v._v(" "),_("p",[v._v("2.0+")]),v._v(" "),_("p",[v._v("3.1+")]),v._v(" "),_("p",[v._v("9.0+")]),v._v(" "),_("h2",{attrs:{id:"怎么在网页上画一个圆"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#怎么在网页上画一个圆"}},[v._v("#")]),v._v(" 怎么在网页上画一个圆")]),v._v(" "),_("p",[v._v("通过上述的介绍，大家应该大体上明白了 "),_("code",[v._v("<canvas>")]),v._v(" 是可以在 Web 页面上绘制图形的 HTML 标签。那么为什么要使用这种技术而不是其他的呢？")]),v._v(" "),_("p",[v._v("这里我们就要分析一下 "),_("code",[v._v("canvas")]),v._v(" 和其他技术的区别了。")]),v._v(" "),_("p",[v._v("怎么在网页上画一个圆？这是笔者之前在面试的时候遇到的一个问题 (ಥ_ಥ)")]),v._v(" "),_("p",[v._v("我想到的方法有以下几种，当然，如果你有更（qí）好（jì）方（yín）式（qiǎo）也可以留言。")]),v._v(" "),_("ul",[_("li",[v._v("直接使用图片，如果需求只是显示一个圆形，那么可以直接使用图片。")]),v._v(" "),_("li",[v._v("使用 div + CSS3 的 "),_("code",[v._v("border")]),v._v(" + "),_("code",[v._v("border-radius")]),v._v(" 模拟一个圆。")]),v._v(" "),_("li",[v._v("使用 svg。可能对于很多前端来说，svg 和 png、jpg 等其他图片格式是一样的，但其实还是有一定的差别。下面我们会详细介绍 svg。")]),v._v(" "),_("li",[v._v("Canvas + JavaScript 动态画一个圆。")])]),v._v(" "),_("p",[v._v("那么我们来分析一下以上几种方式的优劣性：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("使用图片")]),v._v("可以说是以上几种方式中排名倒数第一的了，因为直接使用图片首先会增加一次请求（制作成精灵图另说），其次是不易更改，如果想换一种颜色就需要更换图片，代价太大。")]),v._v(" "),_("li",[_("strong",[v._v("使用 div + CSS3")]),v._v(" 的方式适用于单个的圆，实现起来比较简单，代价也比较小，但增加了一个没有意义的 DOM 节点，不符合语义化编程规范。")]),v._v(" "),_("li",[_("strong",[v._v("使用 svg 和 Canvas")]),v._v(" 都可以使用脚本语言来动态写入一个圆。")])]),v._v(" "),_("p",[v._v("那么，使用 svg 和 Canvas 又有什么区别呢？")]),v._v(" "),_("h2",{attrs:{id:"svg-和-canvas-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#svg-和-canvas-的区别"}},[v._v("#")]),v._v(" svg 和 Canvas 的区别")]),v._v(" "),_("h3",{attrs:{id:"什么是-svg"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-svg"}},[v._v("#")]),v._v(" 什么是 svg")]),v._v(" "),_("p",[v._v("刚刚我们介绍了 Canvas，那么什么是 svg 呢？")]),v._v(" "),_("blockquote",[_("p",[v._v("svg（Scalable Vector Graphics，可缩放矢量图形）是基于 XML（可扩展标记语言，标准通用标记语言的子集），用于描述二维矢量图形的一种图形格式。它由 W3C（万维网联盟）制定，是一个开放标准。")])]),v._v(" "),_("p",[v._v("简单的说就是，"),_("strong",[v._v("svg 可以用来定义 XML 格式的矢量图形")]),v._v("。")]),v._v(" "),_("p",[v._v("因为其本质是 XML 文件，所以 svg 是使用 XML 文档描述来绘图的。和 HTML 一样，如果我们需要修改 svg 文件，可以直接使用记事本打开修改。")]),v._v(" "),_("h3",{attrs:{id:"canvas-和-svg-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#canvas-和-svg-的区别"}},[v._v("#")]),v._v(" Canvas 和 svg 的区别")]),v._v(" "),_("p",[v._v("Canvas 和 svg都允许你在浏览器中创建图形，但是它们在根本上是不同的，那么 Canvas 和 svg 有什么根本区别呢？")]),v._v(" "),_("p",[v._v("就如刚刚介绍的那样，"),_("strong",[v._v("svg 本质上是一种使用 XML 描述 2D 图形的语言")]),v._v("。")]),v._v(" "),_("p",[v._v("svg 创建的每一个元素都是一个独立的 DOM 元素，既然是独立的 DOM 元素，那么我们就可以通过 css 和 JavaScript 来操控 dom。可以对每一个 DOM 元素进行监听。")]),v._v(" "),_("p",[v._v("并且因为每一个元素都是一个 DOM 元素，所以修改 svg 中的 DOM 元素，系统会自动进行 DOM 重绘。")]),v._v(" "),_("p",[_("strong",[v._v("Canvas 通过 JavaScript 来绘制 2D 图形")]),v._v("，Canvas 只是一个 HTML 元素，其中的图形不会单独创建 DOM 元素。因此我们不能通过 JavaScript 操控 Canvas 内单独的图形，不能对其中的具体图形进行监控。")]),v._v(" "),_("p",[v._v("在 Canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。")]),v._v(" "),_("blockquote",[_("p",[v._v("实际上 Canvas 是基于像素的即时模式图形系统，绘制完对象后不保存对象到内存中，当再次需要这个对象时，需要重新绘制；svg 是基于形状的保留模式图形系统，绘制完对象后会将其保存在内存中，当需要修改这个对象信息时，直接修改就可以了。这种根本的区别导致了很多应用场景的不同。")])]),v._v(" "),_("p",[v._v("Canvas")]),v._v(" "),_("p",[v._v("svg")]),v._v(" "),_("p",[v._v("依赖分辨率（位图）")]),v._v(" "),_("p",[v._v("不依赖分辨率（矢量图）")]),v._v(" "),_("p",[v._v("单个 HTML 元素")]),v._v(" "),_("p",[v._v("每一个图形都是一个 DOM 元素")]),v._v(" "),_("p",[v._v("只能通过脚本语言绘制图形")]),v._v(" "),_("p",[v._v("可以通过 CSS 也可以通过脚本语言绘制")]),v._v(" "),_("p",[v._v("不支持事件处理程序")]),v._v(" "),_("p",[v._v("支持事件处理程序")]),v._v(" "),_("p",[v._v("弱的文本渲染能力")]),v._v(" "),_("p",[v._v("最适合带有大型渲染区域的应用程序（比如谷歌地图）")]),v._v(" "),_("p",[v._v("图面较小，对象数量较大（"),_("code",[v._v(">10k")]),v._v("）时性能最佳")]),v._v(" "),_("p",[v._v("对象数量较小 ("),_("code",[v._v("<10k")]),v._v(")、图面更大时性能更佳")]),v._v(" "),_("p",[v._v("所以是选择 Canvas 还是 svg 还是需要看自己的需求。")]),v._v(" "),_("p",[v._v("本小册主要介绍 Canvas 的相关内容，对 svg 不做过多的介绍~")])])}),[],!1,null,null,null);a.default=t.exports}}]);