(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{399:function(t,e,a){"use strict";a.r(e);var v=a(42),n=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"手摸手带你入门-canvas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手摸手带你入门-canvas"}},[t._v("#")]),t._v(" 手摸手带你入门 Canvas")]),t._v(" "),a("h2",{attrs:{id:"创建-canvas-画布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-canvas-画布"}},[t._v("#")]),t._v(" 创建 Canvas 画布")]),t._v(" "),a("p",[t._v("当我只在页面上写一个 Canvas 标签时，将其背景颜色设置为黑色，会是什么效果呢？")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n    <style>\n        #canvas {\n            background: #000;\n        }\n    </style>\n</head>\n<body>\n    <canvas id="canvas"></canvas>\n</body>\n</html>\n\n')])])]),a("p",[t._v("我们打开浏览器来看一下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/21/15fddd0ac41789ce?w=1516&h=624&f=jpeg&s=67550",alt:"创建 Canvas 画布"}})]),t._v(" "),a("p",[t._v("在上面的例子中页面上只有一个 Canvas，没有设置宽高，那么会自动创建一个 300 * 150 的画布（单位默认为 "),a("code",[t._v("px")]),t._v("）。")]),t._v(" "),a("p",[t._v("那么我们怎么改变画布的大小呢，有三种方式")]),t._v(" "),a("ul",[a("li",[t._v("HTML 设置 "),a("code",[t._v("width")]),t._v("、"),a("code",[t._v("height")]),t._v("；")]),t._v(" "),a("li",[t._v("CSS 设置 "),a("code",[t._v("width")]),t._v("、"),a("code",[t._v("height")]),t._v("；")]),t._v(" "),a("li",[t._v("JS 动态设置 "),a("code",[t._v("width")]),t._v("、"),a("code",[t._v("height")]),t._v("。")])]),t._v(" "),a("p",[t._v("我们来试一下这三种方式。有的人会问了，这不是很简单的么，还有介绍的必要吗？这就和我们听数学课是一样的，那些很简单的知识点你就不注意听，然后 10 分钟过后，一脸懵逼的不知道老师在讲什么，或者说是遇到问题了不知道错在哪，往往也都是基础的问题没有仔细听~")]),t._v(" "),a("h3",{attrs:{id:"html-属性设置-width、height"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-属性设置-width、height"}},[t._v("#")]),t._v(" HTML 属性设置 "),a("code",[t._v("width")]),t._v("、"),a("code",[t._v("height")])]),t._v(" "),a("p",[t._v("我们先来看一下直接使用 HTML 属性来设置 "),a("code",[t._v("width")]),t._v("、"),a("code",[t._v("height")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n    <style>\n        #canvas {\n            background: #000;\n        }\n    </style>\n</head>\n<body>\n<canvas id="canvas" width="400" height="400">\n\n</canvas>\n<script>\n    var canvas = document.getElementById("canvas");\n    var context = canvas.getContext("2d");\n\n    context.beginPath();\n    context.arc(100, 100, 50, 0, Math.PI * 2, true);\n    context.closePath();\n    context.fillStyle = \'rgb(255,255,255)\';\n    context.fill();\n<\/script>\n</body>\n</html>\n\n')])])]),a("p",[t._v("我们设置 Canvas 画布的宽度为 400，高度为 400，背景颜色为黑色（在 HTML 属性中直接设置宽度和高度是可以不加单位的，默认单位是 "),a("code",[t._v("px")]),t._v("）。在 Canvas 上画了一个圆心坐标为 100px、100px，半径为 50px 的白色的圆。来看一下浏览器中的显示效果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/21/15fddf7f55e90c34?w=2876&h=984&f=jpeg&s=56453",alt:"HTML 属性设置宽度高度"}})]),t._v(" "),a("h3",{attrs:{id:"css-属性设置-width、height"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-属性设置-width、height"}},[t._v("#")]),t._v(" CSS 属性设置 "),a("code",[t._v("width")]),t._v("、"),a("code",[t._v("height")])]),t._v(" "),a("p",[t._v("还是上面那个例子，这次我们将宽度和高度使用 CSS 来设置：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n    <style>\n        #canvas {\n            background: #000;\n            width: 400px;\n            height: 400px;\n        }\n    </style>\n</head>\n<body>\n<canvas id="canvas">\n\n</canvas>\n<script>\n    var canvas = document.getElementById("canvas");\n    var context = canvas.getContext("2d");\n\n    context.beginPath();\n    context.arc(100, 100, 50, 0, Math.PI * 2, true);\n    context.closePath();\n    context.fillStyle = \'rgb(255,255,255)\';\n    context.fill();\n<\/script>\n</body>\n</html>\n\n')])])]),a("p",[t._v("我们来看下浏览器中的显示效果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/21/15fddfa24d991c6d?w=2878&h=868&f=jpeg&s=54176",alt:"CSS 属性设置宽高"}})]),t._v(" "),a("p",[t._v("OMG ヽ(；´Д｀)ﾉ，怎么会是这个样子，我明明是要画一个圆啊，怎么变成椭圆了，是不是我代码写的有问题？")]),t._v(" "),a("p",[t._v("检查下代码，没问题呀o((⊙﹏⊙))o.那么为什么会显示成这个样子呢？")]),t._v(" "),a("p",[t._v("原来是因为如果使用 CSS 来设置宽高的话，画布就会按照 "),a("code",[t._v("300 * 150")]),t._v(" 的比例进行缩放，也就是将 "),a("code",[t._v("300 * 150")]),t._v(" 的页面显示在 "),a("code",[t._v("400 * 400")]),t._v(" 的容器中。")]),t._v(" "),a("h3",{attrs:{id:"js-属性设置-width、height"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-属性设置-width、height"}},[t._v("#")]),t._v(" JS 属性设置 "),a("code",[t._v("width")]),t._v("、"),a("code",[t._v("height")])]),t._v(" "),a("p",[t._v("那我们再来看一下如果使用 JS 来设置宽高会是神马效果呢~")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n    <style>\n        #canvas {\n            background: #000;\n        }\n    </style>\n</head>\n<body>\n<canvas id="canvas">\n\n</canvas>\n<script>\n    var canvas = document.getElementById("canvas");\n    var context = canvas.getContext("2d");\n    var cx = canvas.width = 400;\n    var cy = canvas.height = 400;\n\n    context.beginPath();\n    context.arc(100, 100, 50, 0, Math.PI * 2, true);\n    context.closePath();\n    context.fillStyle = \'rgb(255,255,255)\';\n    context.fill();\n<\/script>\n</body>\n</html>\n\n')])])]),a("p",[t._v("在浏览器中的效果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/21/15fddf7f55e90c34?w=2876&h=984&f=jpeg&s=56453",alt:"JS动态设置宽度高度"}})]),t._v(" "),a("p",[t._v("这样就是正常的嘛~")]),t._v(" "),a("p",[t._v("所以我们尽量使用 HTML 的"),a("code",[t._v("width")]),t._v(" 和 "),a("code",[t._v("height")]),t._v(" 属性或者直接使用 JS 动态来设置宽高，不要使用 CSS 设置。")]),t._v(" "),a("h2",{attrs:{id:"获取-canvas-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取-canvas-对象"}},[t._v("#")]),t._v(" 获取 Canvas 对象")]),t._v(" "),a("p",[t._v("在前面的例子中，我们已经创建了一个 Canvas 画布，那么第二步要做的就是获取到 Canvas 的上下文环境，对应的语法为： "),a("code",[t._v("canvas.getContext(contextType, contextAttributes);")])]),t._v(" "),a("ul",[a("li",[t._v("上下文类型（contextType）：\n"),a("ul",[a("li",[t._v("2d（本小册所有的示例都是 2d 的）：代表一个二维渲染上下文")]),t._v(" "),a("li",[t._v('webgl（或"experimental-webgl"）：代表一个三维渲染上下文')]),t._v(" "),a("li",[t._v('webgl2（或"experimental-webgl2"）：代表一个三维渲染上下文；这种情况下只能在浏览器中实现 WebGL 版本2 (OpenGL ES 3.0)。')])])])]),t._v(" "),a("p",[t._v("第二个参数并不是经常用到，所以这里就不给大家介绍了，有兴趣的可以查阅 MDN 文档~")]),t._v(" "),a("p",[t._v("通常在创建好一个 Canvas 标签的时候，我们要做的第一步就是要先获取到这个 Canvas 的上下文对象：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    var canvas = document.getElementById("canvas");\n    var context = canvas.getContext("2d");\n\n')])])]),a("h2",{attrs:{id:"绘制路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制路径"}},[t._v("#")]),t._v(" 绘制路径")]),t._v(" "),a("p",[t._v("使用过 PS 的应该都会知道在 PS 中有路径的概念，在 Canvas 中也有路径的概念。只不过和 PS 中的路径不同的是，PS 中的路径是矢量的，而 Canvas 中的路径不是。下面我们来看一下有哪些创建路径的方法：")]),t._v(" "),a("p",[t._v("方法")]),t._v(" "),a("p",[t._v("描述")]),t._v(" "),a("p",[a("code",[t._v("fill()")])]),t._v(" "),a("p",[t._v("填充路径")]),t._v(" "),a("p",[a("code",[t._v("stroke()")])]),t._v(" "),a("p",[t._v("描边")]),t._v(" "),a("p",[a("code",[t._v("arc()")])]),t._v(" "),a("p",[t._v("创建圆弧")]),t._v(" "),a("p",[a("code",[t._v("rect()")])]),t._v(" "),a("p",[t._v("创建矩形")]),t._v(" "),a("p",[a("code",[t._v("fillRect()")])]),t._v(" "),a("p",[t._v("绘制矩形路径区域")]),t._v(" "),a("p",[a("code",[t._v("strokeRect()")])]),t._v(" "),a("p",[t._v("绘制矩形路径描边")]),t._v(" "),a("p",[a("code",[t._v("clearRect()")])]),t._v(" "),a("p",[t._v("在给定的矩形内清除指定的像素")]),t._v(" "),a("p",[a("code",[t._v("arcTo()")])]),t._v(" "),a("p",[t._v("创建两切线之间的弧/曲线")]),t._v(" "),a("p",[a("code",[t._v("beginPath()")])]),t._v(" "),a("p",[t._v("起始一条路径，或重置当前路径")]),t._v(" "),a("p",[a("code",[t._v("moveTo()")])]),t._v(" "),a("p",[t._v("把路径移动到画布中的指定点，不创建线条")]),t._v(" "),a("p",[a("code",[t._v("lineTo()")])]),t._v(" "),a("p",[t._v("添加一个新点，然后在画布中创建从该点到最后指定点的线条")]),t._v(" "),a("p",[a("code",[t._v("closePath()")])]),t._v(" "),a("p",[t._v("创建从当前点回到起始点的路径")]),t._v(" "),a("p",[a("code",[t._v("clip()")])]),t._v(" "),a("p",[t._v("从原始画布剪切任意形状和尺寸的区域")]),t._v(" "),a("p",[a("code",[t._v("quadraticCurveTo()")])]),t._v(" "),a("p",[t._v("创建二次方贝塞尔曲线")]),t._v(" "),a("p",[a("code",[t._v("bezierCurveTo()")])]),t._v(" "),a("p",[t._v("创建三次方贝塞尔曲线")]),t._v(" "),a("p",[a("code",[t._v("isPointInPath()")])]),t._v(" "),a("p",[t._v("如果指定的点位于当前路径中，则返回 true，否则返回 false")]),t._v(" "),a("p",[t._v("看完了上述方法你是不是有点不知所措，一下子这么多方法(╬￣皿￣)=○")]),t._v(" "),a("p",[t._v("你可以把上面的表格作为一个“字典”，在下面的代码中如果遇到不认识的方法可以查找一下，一回生，二回熟。")]),t._v(" "),a("p",[t._v("下面我将上面的方法分为以下几部分来给大家介绍下。")]),t._v(" "),a("h3",{attrs:{id:"使用-canvas-画一个点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-canvas-画一个点"}},[t._v("#")]),t._v(" 使用 Canvas 画一个点")]),t._v(" "),a("p",[t._v("我们先从最基本的开始，使用 Canvas 画一个点。其实画一个点也就相当于画一个半径为 1 的圆，那我们就可以改造这一节开始的例子，将半径由 50 变为 1。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n    <style>\n        #canvas {\n            background: #000;\n        }\n    </style>\n</head>\n<body>\n<canvas id="canvas">\n\n</canvas>\n<script>\n    var canvas = document.getElementById("canvas");\n    var context = canvas.getContext("2d");\n    var cx = canvas.width = 400;\n    var cy = canvas.height = 400;\n\n    context.beginPath();\n    context.arc(100, 100, 1, 0, Math.PI * 2, true);\n    context.closePath();\n    context.fillStyle = \'rgb(255,255,255)\';\n    context.fill();\n<\/script>\n</body>\n</html>\n\n')])])]),a("p",[t._v("让我们来看一下效果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/21/15fdef2b5e60b531?w=2876&h=840&f=jpeg&s=46319",alt:"使用 Canvas 画一个点"}})]),t._v(" "),a("p",[t._v("有没有看到左上部分有一个白色的点，没有看到？没有看到的同学点开大图看一下(／_＼)")]),t._v(" "),a("p",[t._v("细心的小伙伴可能会发现我们改动了哪里：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("context.arc(100, 100, 1, 0, Math.PI * 2, true);\n\n")])])]),a("p",[t._v("将第三个参数由 50 改为了 1，聪明的你一定可以猜出来 "),a("code",[t._v("arc()")]),t._v(" 这个方法的作用了。\\（￣︶￣）/，稍后我们再介绍 "),a("code",[t._v("arc()")]),t._v(" 函数。")]),t._v(" "),a("p",[t._v("先来看一下在获取完 Canvas 的上下文环境之后，我们又做了哪些操作：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("context.beginPath();       // 起始一条路径，或重置当前路径\ncontext.arc(100, 100, 1, 0, Math.PI * 2, true);  // 创建弧/曲线\ncontext.closePath();       // 创建从当前点回到起始点的路径\ncontext.fillStyle = 'rgb(255,255,255)'; // 设置或返回用于填充绘画的颜色、渐变或模式\ncontext.fill();            // 填充当前绘图（路径）\n\n")])])]),a("p",[t._v("我们可以总结出，使用 Canvas 绘制图像的步骤：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe148e8cf9d486?w=2330&h=482&f=jpeg&s=114987",alt:"使用 Canvas 绘制图像的步骤"}})]),t._v(" "),a("p",[t._v("通过使用 Canvas 绘制一个点，我们了解了在 Canvas 中绘图的大致步骤，下面我们来看一下刚刚提到的 "),a("code",[t._v("arc()")]),t._v(" 方法。")]),t._v(" "),a("h2",{attrs:{id:"绘制弧-曲线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制弧-曲线"}},[t._v("#")]),t._v(" 绘制弧/曲线")]),t._v(" "),a("p",[a("code",[t._v("arc()")]),t._v(" 方法创建弧/曲线（用于创建圆或部分圆）。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("context.arc(x,y,r,sAngle,eAngle,counterclockwise);\n\n")])])]),a("ul",[a("li",[t._v("x：圆心的 x 坐标")]),t._v(" "),a("li",[t._v("y：圆心的 y 坐标")]),t._v(" "),a("li",[t._v("r：圆的半径")]),t._v(" "),a("li",[t._v("sAngle：起始角，以弧度计（弧的圆形的三点钟位置是 0 度）")]),t._v(" "),a("li",[t._v("eAngle：结束角，以弧度计")]),t._v(" "),a("li",[t._v("counterclockwise：可选。规定应该逆时针还是顺时针绘图。false 为顺时针，true 为逆时针")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/21/15fdf0929fbe015f?w=204&h=210&f=gif&s=1857",alt:"图片来自 w3cschool"}})]),t._v(" "),a("p",[t._v("比如我们想画一个顺时针的四分之一圆，应该怎么写呢？")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    var canvas = document.getElementById("canvas");\n    var context = canvas.getContext("2d");\n    var cx = canvas.width = 400;\n    var cy = canvas.height = 400;\n\n    context.beginPath();\n    context.arc(100, 100, 50, 0, Math.PI * 0.5, false);\n    context.strokeStyle="white";\n    context.stroke();\n\n')])])]),a("p",[t._v("我们先来看一下浏览器中的效果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe41d14b171fe5?w=2878&h=834&f=jpeg&s=44174",alt:"画一个顺时针的四分之一圆"}})]),t._v(" "),a("p",[t._v("是不是你想要的效果呢(๑´ㅂ`๑)")]),t._v(" "),a("p",[t._v("其实只要找好起始角和结束角就成功一半了呢。")]),t._v(" "),a("p",[t._v("因为我们设置的起始角是 0，对照 w3cschool 上的截图可知弧度的 0 的位置是 3 点钟方向，然后结束角我们设置为 0.5 PI，也就是 6 点钟方向，然后我们再设置描边颜色并且进行描边，就得出上图的效果。")]),t._v(" "),a("p",[t._v("这里你可能会问，为什么这个不是闭合的图形呢？因为我只设置了 beginPath 并没有设置 closePath，所以这就不是一条闭合的路径。我们加上 cloasePath 看一下效果。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe4234b5e759a9?w=2878&h=838&f=jpeg&s=45006",alt:"闭合图形"}})]),t._v(" "),a("p",[t._v("如果跟着我一起写代码的话你就会发现，这个是空心的，并没有整个路径都被填充，这是怎么回事呢？")]),t._v(" "),a("p",[t._v("这是因为 "),a("code",[t._v("stroke()")]),t._v(" 和 "),a("code",[t._v("fill()")]),t._v(" 的区别，根据上面的两个例子，我们很容易看出这两个函数的区别：一个是描边，一个是填充。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("stroke()")]),t._v(" ：描边")]),t._v(" "),a("li",[a("code",[t._v("fill()")]),t._v(" ：填充")])]),t._v(" "),a("p",[t._v("我们可以通过 "),a("code",[t._v("strokeStyle")]),t._v("属性 和 "),a("code",[t._v("fillStyle")]),t._v("属性来设置描边和填充的颜色。这里不仅可以设置单一的颜色，还可以设置渐变。")]),t._v(" "),a("h3",{attrs:{id:"绘制直线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制直线"}},[t._v("#")]),t._v(" 绘制直线")]),t._v(" "),a("p",[t._v("下面我们来绘制一条线。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    var canvas = document.getElementById("canvas");\n    var context = canvas.getContext("2d");\n    var cx = canvas.width = 400;\n    var cy = canvas.height = 400;\n\n    context.beginPath();\n    context.moveTo(50,50);\n    context.lineTo(100,100);\n    context.strokeStyle = \'#fff\';\n    context.stroke();\n\n')])])]),a("p",[t._v("我们来看一下浏览器中的效果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe430d0904b0fd?w=2878&h=832&f=jpeg&s=46505",alt:"绘制直线"}})]),t._v(" "),a("p",[t._v("在绘制直线的例子中，我们使用了")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("moveTo(x,y)")]),t._v("：把路径移动到画布中的指定点，不创建线条")]),t._v(" "),a("li",[a("code",[t._v("lineTo(x,y)")]),t._v("：添加一个新点，然后在画布中创建从该点到最后指定点的线条")])]),t._v(" "),a("p",[t._v("这里需要注意以下几点：")]),t._v(" "),a("ul",[a("li",[t._v("如果没有 moveTo，那么第一次 lineTo 的就视为 moveTo")]),t._v(" "),a("li",[t._v("每次 lineTo 后如果没有 moveTo，那么下次 lineTo 的开始点为前一次 lineTo 的结束点。")])]),t._v(" "),a("p",[t._v("也就是这种情况：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    var canvas = document.getElementById("canvas");\n    var context = canvas.getContext("2d");\n    var cx = canvas.width = 400;\n    var cy = canvas.height = 400;\n\n    context.beginPath();\n    context.lineTo(200, 200);\n    context.lineTo(200, 100);\n    context.lineTo(100,50);\n    context.strokeStyle = \'#fff\';\n    context.stroke();\n\n')])])]),a("p",[t._v("我们没有设置 moveTo，而是设置了三个 lineTo，这也是可以的，将三个 lineTo 设置的点依次连接就好~")]),t._v(" "),a("p",[t._v("效果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe45033e25f58e?w=2878&h=836&f=jpeg&s=49033",alt:"绘制直线"}})]),t._v(" "),a("p",[t._v("在绘制了直线之后，我们来看一下怎么给绘制的直线添加样式：")]),t._v(" "),a("p",[t._v("样式")]),t._v(" "),a("p",[t._v("描述")]),t._v(" "),a("p",[a("code",[t._v("lineCap")])]),t._v(" "),a("p",[t._v("设置或返回线条的结束端点样式")]),t._v(" "),a("p",[a("code",[t._v("lineJoin")])]),t._v(" "),a("p",[t._v("设置或返回两条线相交时，所创建的拐角类型")]),t._v(" "),a("p",[a("code",[t._v("lineWidth")])]),t._v(" "),a("p",[t._v("设置或返回当前的线条宽度")]),t._v(" "),a("p",[a("code",[t._v("miterLimit")])]),t._v(" "),a("p",[t._v("设置或返回最大斜接长度")]),t._v(" "),a("p",[t._v("我们来看下这些 "),a("strong",[t._v("属性")]),t._v(" 是怎么使用的。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    var canvas = document.getElementById(\"canvas\");\n    var context = canvas.getContext(\"2d\");\n    var cx = canvas.width = 400;\n    var cy = canvas.height = 400;\n\n    context.beginPath();\n\n    context.moveTo(10,10);\n    context.lineTo(100,100);\n    context.lineWidth = 10;\n    context.lineCap = 'round';\n    context.strokeStyle = '#fff';\n    context.stroke()\n\n")])])]),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/23/15fe80fe5707d56d?w=2878&h=838&f=jpeg&s=46446",alt:"给直线添加属性"}})]),t._v(" "),a("p",[t._v("我绘制了一条由点 (10,10) 到点 (100,100) 的直线，然后将其宽度设置为 10，并且加上“圆角”的效果。")]),t._v(" "),a("p",[t._v("这里我们要注意区分哪些是方法哪些是属性，如果是方法，只需要在括号中传入参数就可以；如果是属性，那么我们就要使用等号给其赋值。有的时候你会奇怪，为什么我这么设置了但是却没有效果呢？很有可能是你将方法和属性搞混了哦 (●ﾟωﾟ●)")]),t._v(" "),a("h3",{attrs:{id:"绘制矩形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制矩形"}},[t._v("#")]),t._v(" 绘制矩形")]),t._v(" "),a("p",[t._v("在了解了最基本的绘制点、线的方法之后，我们来看一下如何绘制一个矩形。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    var canvas = document.getElementById(\"canvas\");\n    var context = canvas.getContext(\"2d\");\n    var cx = canvas.width = 400;\n    var cy = canvas.height = 400;\n\n    context.beginPath();\n    context.fillStyle = '#fff';\n    context.fillRect(10, 10, 100, 100);\n    context.strokeStyle = '#fff';\n    context.strokeRect(130, 10, 100, 100);\n\n")])])]),a("p",[t._v("这里我们使用下面的方法：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("fillRect(x,y,width,height)")]),t._v("：绘制一个实心矩形")]),t._v(" "),a("li",[a("code",[t._v("strokeRect(x,y,width,height)")]),t._v("：绘制一个空心矩形")])]),t._v(" "),a("p",[t._v("同样的，我们可以通过 "),a("code",[t._v("fillStyle()")]),t._v(" 和 "),a("code",[t._v("strokeStyle()")]),t._v(" 来设置填充的颜色和描边的颜色。")]),t._v(" "),a("h2",{attrs:{id:"颜色、样式和阴影"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#颜色、样式和阴影"}},[t._v("#")]),t._v(" 颜色、样式和阴影")]),t._v(" "),a("p",[t._v("上面几个函数教大家怎么绘制点、线、以及圆形和矩形，都是通过先创建路径，然后再使用 "),a("code",[t._v("fill()")]),t._v(" 或 "),a("code",[t._v("stroke()")]),t._v(" 进行填充或者描边。")]),t._v(" "),a("p",[t._v("下面我们再具体看一下都可以给路径设置哪些属性来改变其样式。")]),t._v(" "),a("p",[t._v("属性")]),t._v(" "),a("p",[t._v("描述")]),t._v(" "),a("p",[a("code",[t._v("fillStyle")])]),t._v(" "),a("p",[t._v("设置或返回用于填充绘画的颜色、渐变或模式")]),t._v(" "),a("p",[a("code",[t._v("strokeStyle")])]),t._v(" "),a("p",[t._v("设置或返回用于笔触的颜色、渐变或模式")]),t._v(" "),a("p",[a("code",[t._v("shadowColor")])]),t._v(" "),a("p",[t._v("设置或返回用于阴影的颜色")]),t._v(" "),a("p",[a("code",[t._v("shadowBlur")])]),t._v(" "),a("p",[t._v("设置或返回用于阴影的模糊级别")]),t._v(" "),a("p",[a("code",[t._v("shadowOffsetX")])]),t._v(" "),a("p",[t._v("设置或返回阴影距形状的水平距离")]),t._v(" "),a("p",[a("code",[t._v("shadowOffsetY")])]),t._v(" "),a("p",[t._v("设置或返回阴影距形状的垂直距离")]),t._v(" "),a("p",[a("code",[t._v("fillStyle")]),t._v(" 和 "),a("code",[t._v("strokeStyle")]),t._v(" 这两个属性我们一直在使用，所以对于它们我们不再作过多的介绍。")]),t._v(" "),a("h3",{attrs:{id:"设置阴影"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置阴影"}},[t._v("#")]),t._v(" 设置阴影")]),t._v(" "),a("p",[t._v("设置阴影我们用到的是 "),a("code",[t._v("shadowBlur")]),t._v(" 这个属性。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n    var canvas = document.getElementById(\"canvas\");\n    var context = canvas.getContext(\"2d\");\n    var cx = canvas.width = 400;\n    var cy = canvas.height = 400;\n\n    context.beginPath();\n    context.arc(100,100,50,0,2*Math.PI,false);\n    context.fillStyle = '#fff';\n    context.shadowBlur = 20;\n    context.shadowColor = '#fff';\n    context.fill()\n\n")])])]),a("p",[t._v("同样的方（tao）法（lu），我们只要在 "),a("code",[t._v("fill()")]),t._v(" 方法之前设置模糊指数（"),a("code",[t._v("shadowBlur")]),t._v("）和颜色（"),a("code",[t._v("shadowColor")]),t._v("）就可以了。让我们来看一下浏览器中的效果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/23/15fe859e34cf24d3?w=2876&h=820&f=jpeg&s=46979",alt:"设置阴影"}})]),t._v(" "),a("p",[t._v("在暗色背景中有一个亮色的圆并且加了阴影效果，是不是很像发光的月亮呢(●´∀｀●)ﾉ")]),t._v(" "),a("h3",{attrs:{id:"设置渐变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置渐变"}},[t._v("#")]),t._v(" 设置渐变")]),t._v(" "),a("p",[t._v("我们先来看一下怎么设置渐变：")]),t._v(" "),a("p",[t._v("方法")]),t._v(" "),a("p",[t._v("描述")]),t._v(" "),a("p",[a("code",[t._v("createLinearGradient()")])]),t._v(" "),a("p",[t._v("创建线性渐变（用在画布内容上）")]),t._v(" "),a("p",[a("code",[t._v("createPattern()")])]),t._v(" "),a("p",[t._v("在指定的方向上重复指定的元素")]),t._v(" "),a("p",[a("code",[t._v("createRadialGradient()")])]),t._v(" "),a("p",[t._v("创建放射状/环形的渐变（用在画布内容上）")]),t._v(" "),a("p",[a("code",[t._v("addColorStop()")])]),t._v(" "),a("p",[t._v("规定渐变对象中的颜色和停止位置")]),t._v(" "),a("p",[t._v("其中绘制渐变主要用到了 "),a("code",[t._v("createLinearGradient()")]),t._v(" 方法，我们来看一下这个方法： "),a("code",[t._v("context.createLinearGradient(x0,y0,x1,y1);")])]),t._v(" "),a("ul",[a("li",[t._v("x0：开始渐变的 x 坐标")]),t._v(" "),a("li",[t._v("y0：开始渐变的 y 坐标")]),t._v(" "),a("li",[t._v("x1：结束渐变的 x 坐标")]),t._v(" "),a("li",[t._v("y1：结束渐变的 y 坐标")])]),t._v(" "),a("p",[t._v("这是设置比如说我们下一个粉色到白色的由上向下的渐变：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    var canvas = document.getElementById(\"canvas\");\n    var context = canvas.getContext(\"2d\");\n    var cx = canvas.width = 400;\n    var cy = canvas.height = 400;\n\n    var grd = context.createLinearGradient(100,100,100,200);\n    grd.addColorStop(0,'pink');\n    grd.addColorStop(1,'white');\n\n    context.fillStyle = grd;\n    context.fillRect(100,100,200,200);\n\n")])])]),a("p",[t._v("我们看一下浏览器中的效果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/26/15ff82a119940d21?w=2874&h=836&f=jpeg&s=55739",alt:"设置渐变"}})]),t._v(" "),a("p",[t._v("可以看出，"),a("code",[t._v("createLinearGradient()")]),t._v(" 的参数是两个点的坐标，这两个点的连线实际上就是渐变的方向。我们可以使用 "),a("code",[t._v("addColorStop()")]),t._v(" 方法来设置渐变的颜色。")]),t._v(" "),a("p",[a("code",[t._v("gradient.addColorStop(stop,color);")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("stop")]),t._v("：介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置")]),t._v(" "),a("li",[a("code",[t._v("color")]),t._v("：在结束位置显示的 CSS 颜色值")])]),t._v(" "),a("p",[t._v("我们可以设置多个颜色断点，比如，要实现一个彩虹的效果，只需要多增加几个颜色断点就可以了~")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    var canvas = document.getElementById(\"canvas\");\n    var context = canvas.getContext(\"2d\");\n    var cx = canvas.width = 400;\n    var cy = canvas.height = 400;\n\n    var grd = context.createLinearGradient(0,0,0,400);\n    grd.addColorStop(0,'rgb(255, 0, 0)');\n    grd.addColorStop(0.2,'rgb(255, 165, 0)');\n    grd.addColorStop(0.3,'rgb(255, 255, 0)');\n    grd.addColorStop(0.5,'rgb(0, 255, 0)');\n    grd.addColorStop(0.7,'rgb(0, 127, 255)');\n    grd.addColorStop(0.9,'rgb(0, 0, 255)');\n    grd.addColorStop(1,'rgb(139, 0, 255)');\n\n    context.fillStyle = grd;\n    context.fillRect(0,0,400,400);\n\n")])])]),a("p",[t._v("效果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/26/15ff86ac19b66d3e?w=2878&h=838&f=jpeg&s=73835",alt:"彩虹渐变效果"}})]),t._v(" "),a("h2",{attrs:{id:"图形转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图形转换"}},[t._v("#")]),t._v(" 图形转换")]),t._v(" "),a("p",[t._v("在了解完了最基本的绘制路径和设置样式之后，我们来看一下怎么来进行图形的变换。")]),t._v(" "),a("p",[t._v("我们先来看一下图形转换都有哪些方法：")]),t._v(" "),a("p",[t._v("方法")]),t._v(" "),a("p",[t._v("描述")]),t._v(" "),a("p",[a("code",[t._v("scale()")])]),t._v(" "),a("p",[t._v("缩放当前绘图至更大或更小")]),t._v(" "),a("p",[a("code",[t._v("rotate()")])]),t._v(" "),a("p",[t._v("旋转当前绘图")]),t._v(" "),a("p",[a("code",[t._v("translate()")])]),t._v(" "),a("p",[t._v("重新映射画布上的 (0,0) 位置")]),t._v(" "),a("p",[a("code",[t._v("transform()")])]),t._v(" "),a("p",[t._v("替换绘图的当前转换矩阵")]),t._v(" "),a("p",[a("code",[t._v("setTransform()")])]),t._v(" "),a("p",[t._v("将当前转换重置为单位矩阵，然后运行 "),a("code",[t._v("transform()")])]),t._v(" "),a("h3",{attrs:{id:"缩放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缩放"}},[t._v("#")]),t._v(" 缩放")]),t._v(" "),a("p",[t._v("我们来看一下怎么使用 Canvas 实现缩放的功能，绘制一个矩形；放大到 200%，再次绘制矩形；放大到 200%，然后再次绘制矩形；放大到 200%，再次绘制矩形：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    var canvas = document.getElementById("canvas");\n    var context = canvas.getContext("2d");\n    var cx = canvas.width = 400;\n    var cy = canvas.height = 400;\n\n    context.strokeStyle = \'white\';\n    context.strokeRect(5,5,50,25);\n    context.scale(2,2);\n    context.strokeRect(5,5,50,25);\n    context.scale(2,2);\n    context.strokeRect(5,5,50,25);\n\n')])])]),a("p",[t._v("只是使用 "),a("code",[t._v("scale()")]),t._v(" 方法就可以实现缩放的效果，我们再来看一下浏览器中的显示情况：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/26/15ff8975e0c5a4e3?w=2878&h=830&f=jpeg&s=48668",alt:"实现缩放"}})]),t._v(" "),a("p",[t._v("可以看到，在设置 "),a("code",[t._v("scale()")]),t._v(" 方法之后再设置的矩形，无论是线条的宽度还是坐标的位置，都被放大了。并且 "),a("code",[t._v("scale()")]),t._v(" 的效果是可以叠加的，也就是说，我们在上面的例子中使用了两次 "),a("code",[t._v("scale(2,2)")]),t._v(" 那么，最后一个矩形相对于第一个矩形长和宽，以及坐标的位置就放大了 4 倍。")]),t._v(" "),a("h3",{attrs:{id:"旋转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#旋转"}},[t._v("#")]),t._v(" 旋转")]),t._v(" "),a("p",[t._v("其实在图形变换中，只要掌握了一种，其他的图形变换方式就会迎刃而解了。我们再来看一下旋转的例子吧。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    var canvas = document.getElementById("canvas");\n    var context = canvas.getContext("2d");\n    var cx = canvas.width = 400;\n    var cy = canvas.height = 400;\n\n    context.fillStyle = \'white\';\n    context.rotate(20*Math.PI/180);\n    context.fillRect(70,30,200,100);\n\n')])])]),a("p",[t._v("我们使用的是 "),a("code",[t._v("rotate()")]),t._v(" 方法 "),a("code",[t._v("context.rotate(angle);")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("angle")]),t._v(" : 旋转角度，以弧度计。 如需将角度转换为弧度，请使用 "),a("code",[t._v("degrees*Math.PI/180")]),t._v(" 公式进行计算。 举例：如需旋转 5 度，可规定下面的公式："),a("code",[t._v("5*Math.PI/180")]),t._v("。")])]),t._v(" "),a("p",[t._v("在刚刚的例子中，我们将画布旋转了 20°，然后再画了一个矩形。")]),t._v(" "),a("p",[t._v("通过上述两个例子，我们会发现一个特点，在进行图形变换的时候，我们需要画布旋转，然后再绘制图形。")]),t._v(" "),a("p",[t._v("这样的结果是，我们使用的图形变换的方法都是作用在画布上的，既然对画布进行了变换，那么在接下来绘制的图形都会变换。这点是需要注意的。")]),t._v(" "),a("p",[t._v("比如我对画布使用了 "),a("code",[t._v("rotate(20*Math.PI/180)")]),t._v(" 方法，就是将画布旋转了 20°，然后之后绘制的图形都会旋转 20°。")]),t._v(" "),a("h2",{attrs:{id:"图像绘制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图像绘制"}},[t._v("#")]),t._v(" 图像绘制")]),t._v(" "),a("p",[t._v("Canvas 还有一个经常用的方法是"),a("code",[t._v("drawImage()")]),t._v("。")]),t._v(" "),a("p",[t._v("方法")]),t._v(" "),a("p",[t._v("描述")]),t._v(" "),a("p",[a("code",[t._v("drawImage()")])]),t._v(" "),a("p",[t._v("向画布上绘制图像、画布或视频")]),t._v(" "),a("p",[a("code",[t._v("context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("img")]),t._v("：规定要使用的图像、画布或视频")]),t._v(" "),a("li",[a("code",[t._v("sx")]),t._v("：可选。开始剪切的 x 坐标位置")]),t._v(" "),a("li",[a("code",[t._v("sy")]),t._v("：可选。开始剪切的 y 坐标位置")]),t._v(" "),a("li",[a("code",[t._v("swidth")]),t._v("：可选。被剪切图像的宽度")]),t._v(" "),a("li",[a("code",[t._v("sheight")]),t._v("：可选。被剪切图像的高度")]),t._v(" "),a("li",[a("code",[t._v("x")]),t._v("：在画布上放置图像的 x 坐标位置")]),t._v(" "),a("li",[a("code",[t._v("y")]),t._v("：在画布上放置图像的 y 坐标位置")]),t._v(" "),a("li",[a("code",[t._v("width")]),t._v("：可选。要使用的图像的宽度（伸展或缩小图像）")]),t._v(" "),a("li",[a("code",[t._v("height")]),t._v("：可选。要使用的图像的高度（伸展或缩小图像）")])]),t._v(" "),a("p",[t._v("经过上面对 Canvas 常见方法的介绍，相信你也可以绘制一些基本的图形了，你看到的那些炫酷的效果都是由这些简单的图形构成的。在下一节我将会带大家分析怎么使用这些最基本的元素来组成炫酷的特效~~")]),t._v(" "),a("h2",{attrs:{id:"源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[t._v("#")]),t._v(" 源码")]),t._v(" "),a("p",[t._v("本小册中各种特效的源码地址："),a("a",{attrs:{href:"https://github.com/sunshine940326/canvas",target:"_blank",rel:"noopener noreferrer"}},[t._v("sunshine940326/canvas"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);