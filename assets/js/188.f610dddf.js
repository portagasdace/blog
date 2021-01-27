(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{544:function(a,n,e){"use strict";e.r(n);var t=e(42),s=Object(t.a)({},(function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"第-16-节-数据分析师的好帮手-·-辅助线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-16-节-数据分析师的好帮手-·-辅助线"}},[a._v("#")]),a._v(" 第 16 节 数据分析师的好帮手 · 辅助线")]),a._v(" "),e("p",[a._v("经过了一系列的学习，我们已经掌握了多种日常开发中最常用的数据图表，并且可以对各种结构的数据集进行预处理。但是在我们进行可视化图表开发的时候经常会发现如果仅仅将数据使用数据系列展示在图表上的话，是没办法非常直观地展示所有数据信息的。")]),a._v(" "),e("p",[a._v("而这个时候，辅助线便成了帮助开发人员和分析人员更好地利用可视化图表的强有力工具。")]),a._v(" "),e("h2",{attrs:{id:"_16-1-为什么要使用辅助线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-1-为什么要使用辅助线"}},[a._v("#")]),a._v(" 16.1 为什么要使用辅助线")]),a._v(" "),e("p",[a._v("我们在第 5 节中学习了如何利用 JavaScript 对数据中的一些数学特征值进行计算，而这些数学特征值往往可以更好、更直观地将数据的基本状况表达出来。")]),a._v(" "),e("p",[a._v("但是这些数学特征值往往只是通过对一组数值进行计算过后得到的另一组数值，那么辅助线便是帮助开发者和数据分析人员更好地使用这些数学特征值的最好工具。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/26/166ae5b6d639c844?w=1600&h=960&f=png&s=94875",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"_16-2-辅助线基本操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-2-辅助线基本操作"}},[a._v("#")]),a._v(" 16.2 辅助线基本操作")]),a._v(" "),e("p",[a._v("在 ECharts 中辅助线并不是一种独立的数据类型，它需要依附在某一个数据系列上以表示其与该数据系列的关系。")]),a._v(" "),e("p",[a._v("假设我们有以下数据集，并将其绘制成一个简单的柱状图。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const chartEl = document.querySelector('#chart')\nconst myChart = echarts.init(chartEl)\n\nconst data = [ 50, 61, 56, 46, 72, 53 ]\n\nconst option = {\n  dataset: {\n    source: data.map((y, i) => ({\n      x: i + 1,\n      y\n    }))\n  },\n\n  xAxis: {\n    type: 'category'\n  },\n  yAxis: {\n    type: 'value'\n  },\n  \n  series: {\n    type: 'bar',\n    encode: {\n      x: 'x',\n      y: 'y'\n    }\n  }\n}\n\n")])])]),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/26/166ae5cdef22deb9?w=600&h=400&f=png&s=14755",alt:""}})]),a._v(" "),e("p",[a._v("然后接下来我们通过非常简单的计算，得出这一组数据的平均数。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const mean = data.reduce((left, right) => left + right) / data.length\nconsole.log(mean) //=> 56.333333333333336\n\n")])])]),e("p",[a._v("假如说需要将这个计算结果展示在图表上，那么根据目前所设定的坐标系可知我们需要添加一条横向的水平线，而这条水平线的纵向位置应该为 "),e("img",{attrs:{src:"https://juejin.im/equation?tex=y",alt:"y"}}),a._v(" 坐标轴上该数值所对应的位置。")]),a._v(" "),e("p",[a._v("那么在 ECharts 中便需要在对应的数据系列上添加一个 "),e("code",[a._v("markLine")]),a._v(" 配置，并在 "),e("code",[a._v("markLine.data")]),a._v(" 中添加一个 "),e("code",[a._v("yAxis")]),a._v(" 值为对应平均值的配置。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const option = {\n  // ...\n  \n  series: {\n    // ...\n    \n    markLine: {\n      data: [\n        {\n          name: '平均线',\n          yAxis: mean\n        }\n      ]\n    }\n  }\n}\n\n")])])]),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/26/166ae5d4b84c7618?w=600&h=400&f=png&s=16371",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"_16-2-1-echarts-的自带辅助线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-2-1-echarts-的自带辅助线"}},[a._v("#")]),a._v(" 16.2.1 ECharts 的自带辅助线")]),a._v(" "),e("p",[a._v("除了我们可以自行计算目标辅助线的数值以外，ECharts 自身也提供了一些比较常用的辅助线，除了前面我们自行计算的平均值外，还有最大值和最小值。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const option = {\n\n  // ...\n  \n  series: {\n    // ...\n    \n    markLine: {\n      data: [\n        { name: '平均值', type: 'average' },\n        { name: '最大值', type: 'max' },\n        { name: '最小值', type: 'min' }\n      ]\n    }\n  },\n\n}\n\n")])])]),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/26/166ae5eaf624325f?w=600&h=400&f=png&s=17787",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"_16-3-辅助线高级用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-3-辅助线高级用法"}},[a._v("#")]),a._v(" 16.3 辅助线高级用法")]),a._v(" "),e("p",[a._v("是否觉得前面的辅助线都太简单而没有挑战性了？恭喜你已经拥有了成为大牛的一个非常重要的优秀特点，那么我们接下来便需要向更复杂、更具有功能性的辅助线应用进发吧。")]),a._v(" "),e("h3",{attrs:{id:"_16-3-1-spc-控制图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-3-1-spc-控制图"}},[a._v("#")]),a._v(" 16.3.1 SPC 控制图")]),a._v(" "),e("p",[a._v("在传统的统计学领域中，有一种广泛用于工业生产的统计方法——质量管理。在工业生产领域中，企业为了能够稳定且长期地发展产品的质量和销量，必须要对产品生产过程中的各种数据进行监控和分析，比如生产原料、成本、产品特性、质量指标、销量等等。")]),a._v(" "),e("p",[a._v("而其中成本和质量指标直接关系到了企业的长期生存条件，所以对这些数据的监控和分析则显得尤为重要。其中有一种名为 SPC 控制图的数据可视化图表的应用非常广泛，它通过对数据进行计算并将计算结果作为辅助线绘制在图表上。这些辅助线可以帮助数据分析人员非常直观地看到数据中的总体状况和突发的异常情况等。")]),a._v(" "),e("p",[a._v("SPC 控制图事实上是多种控制图表的总称，但其核心都是相似的。SPC 控制图主要通过计算三个控制线：UCL（控制上限）、CL（中心线）和 LCL（控制下限）。在一些情况下还可以将控制图的上下限的中间区域分为 6 等份，并分别标记为控制 A 区、B 区以及 C 区，并通过记录数据点落在这三个控制区域的数量来对数据的稳定性进行直观的判定。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/26/166ae6040e8e262f?w=230&h=200&f=png&s=7682",alt:""}})]),a._v(" "),e("blockquote",[e("p",[a._v("注：图片来源 Wikipedia —— "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Western_Electric_rules",target:"_blank",rel:"noopener noreferrer"}},[a._v("Western Electric rules"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"_16-3-2-建立数据集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-3-2-建立数据集"}},[a._v("#")]),a._v(" 16.3.2 建立数据集")]),a._v(" "),e("p",[a._v("假设我们通过随机方法生成一组数值数据（参考第 11 节），并将其绘制到折线图上。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const X = [ 100 ]\nconst n = 50 - 1\nconst r = 0.1\n\nfunction randomCoefficient(r) {\n  const rand = Math.random()\n  const coefficient = (rand - 0.5) * 2 * r\n\n  return coefficient\n}\n\nfor (let i = 0; i < n; ++i) {\n  const coefficient = randomCoefficient(r)\n  const newValue = X[i] * (1 + coefficient)\n\n  X.push(newValue)\n}\n\nconsole.log(X) //=> [ 100, 95.23, ... ]\n\nconst data = X.map(function(x, i) {\n  return { time: i + 1, value: x }\n})\n\nconst option = {\n  dataset: {\n    source: data\n  },\n  xAxis: {\n    type: 'value',\n    name: 'i',\n    nameLocation: 'middle',\n    nameGap: 25\n  },\n  yAxis: {\n    type: 'value',\n    scale: true,\n    name: 'x',\n    nameLocation: 'end'\n  },\n  series: {\n    type: 'line',\n    encode: {\n      x: 'time',\n      y: 'value'\n    }\n  },\n}\n\n")])])]),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/26/166ae5fa40ead45b?w=600&h=400&f=png&s=35972",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"_16-3-3-计算-spc-控制图的必要数值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-3-3-计算-spc-控制图的必要数值"}},[a._v("#")]),a._v(" 16.3.3 计算 SPC 控制图的必要数值")]),a._v(" "),e("p",[a._v("SPC 控制图所使用的数据主要需要计算数据的平均值和标准差（Standard deviation，并非标准误 Standard error）。平均值的计算我们使用 Lodash 中的 "),e("code",[a._v("_.mean")]),a._v(" 即可，但 Lodash 并没有提供标准差 "),e("img",{attrs:{src:"https://juejin.im/equation?tex=%5Csigma",alt:"\\sigma"}}),a._v(" 的计算方法，所以我们这里也需要自行实现一下标准差的计算方法。"),e("img",{attrs:{src:"https://juejin.im/equation?tex=N",alt:"N"}}),a._v(" 为数组 "),e("img",{attrs:{src:"https://juejin.im/equation?tex=x",alt:"x"}}),a._v(" 的长度，"),e("img",{attrs:{src:"https://juejin.im/equation?tex=%5Coverline%7Bx%7D",alt:"\\overline{x}"}}),a._v(" 为数组 "),e("img",{attrs:{src:"https://juejin.im/equation?tex=x",alt:"x"}}),a._v(" 的平均值。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://juejin.im/equation?tex=%5Cbegin%7Balign*%7D%0A%5Coverline%7Bx%7D%20%26%3D%20%5Cfrac%7B%5Csum%5E%7BN%7D_%7Bi%3D1%7D%20x_i%7D%7BN%7D%20%5C%5C%0A%5Csigma%20%26%3D%20%5Csqrt%7B%5Cfrac%7B%5Csum%5E%7BN%7D_%7Bi%3D1%7D(x_i%20-%20%5Coverline%7Bx%7D)%5E2%7D%7BN%20-%201%7D%7D%0A%5Cend%7Balign*%7D",alt:"\\begin{align*}\\overline{x} &= \\frac{\\sum^{N}{i=1} x_i}{N} \\\\sigma &= \\sqrt{\\frac{\\sum^{N}{i=1}(x_i - \\overline{x})^2}{N - 1}}\\end{align*}"}})]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("function sd(array) {\n  const mean = _.mean(array)\n  \n  const top = array\n    .map(function(x) {\n      return Math.pow(x - mean, 2)\n    })\n    .reduce(function(left, right) {\n      return left + right\n    })\n  const bottom = array.length - 1\n  \n  return Math.sqrt(top / bottom)\n}\n\n")])])]),e("p",[a._v("计算所得数据的平均值和标准差后，便可以计算 SPC 控制图中的 UCL 和 LCL 控制值了。UCL 和 LCL 的值分别为以下：")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://juejin.im/equation?tex=UCL%20%3D%20%5Coverline%7Bx%7D%20%2B%203%20%5Ctimes%20%5Csigma%20%5C%5C%0ALCL%20%3D%20%5Coverline%7Bx%7D%20-%203%20%5Ctimes%20%5Csigma",alt:"UCL = \\overline{x} + 3 \\times \\sigma \\LCL = \\overline{x} - 3 \\times \\sigma"}})]),a._v(" "),e("p",[a._v("其中从上面的图中我们可以看到，SPC 控制图可以将从 LCL 到 UCL 中间的区域等分为 6 份，显然可以得出控制区域的区间为以下：")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://juejin.im/equation?tex=%5Cbegin%7Balign*%7D%0A%26%20A%20%3D%20%5Cleft%5C%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%5Cbegin%7Barray%7D%7Blr%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%5Coverline%7Bx%7D%20%2B%202%20*%20%5Csigma%2C%20%5Coverline%7Bx%7D%20%2B%203%20*%20%5Csigma%5D%2C%20%26%20%20%5C%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%5Coverline%7Bx%7D%20-%203%20*%20%5Csigma%2C%20%5Coverline%7Bx%7D%20-%202%20*%20%5Csigma%5D%20%26%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%5Cend%7Barray%7D%0A%5Cright.%20%5C%5C%0A%26%20B%20%3D%20%5Cleft%5C%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%5Cbegin%7Barray%7D%7Blr%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%5Coverline%7Bx%7D%20%2B%20%5Csigma%2C%20%5Coverline%7Bx%7D%20%2B%202%20*%20%5Csigma%5D%2C%20%26%20%20%5C%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%5Coverline%7Bx%7D%20-%202%20*%20%5Csigma%2C%20%5Coverline%7Bx%7D%20-%20%5Csigma%5D%20%26%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%5Cend%7Barray%7D%0A%5Cright.%20%5C%5C%0A%26%20C%20%3D%20%5B%5Coverline%7Bx%7D%20-%20%5Csigma%2C%20%5Coverline%7Bx%7D%20%2B%20%5Csigma%5D%0A%5Cend%7Balign*%7D",alt:"\\begin{align*}& A = \\left{\\begin{array}{lr}[\\overline{x} + 2 * \\sigma, \\overline{x} + 3 * \\sigma], &  \\[\\overline{x} - 3 * \\sigma, \\overline{x} - 2 * \\sigma] &\\end{array}\\right. \\& B = \\left{\\begin{array}{lr}[\\overline{x} + \\sigma, \\overline{x} + 2 * \\sigma], &  \\[\\overline{x} - 2 * \\sigma, \\overline{x} - \\sigma] &\\end{array}\\right. \\& C = [\\overline{x} - \\sigma, \\overline{x} + \\sigma]\\end{align*}"}})]),a._v(" "),e("p",[a._v("在 EChart 中，除了辅助线以外还提供了一个非常实用的工具 —— "),e("code",[a._v("visualMap")]),a._v("。它可以将图表中某一个区域内的元素统一为一种颜色，这正好可以应用到 SPC 控制图的三个控制区域上。")]),a._v(" "),e("p",[a._v("首先我们需要计算所需要的数据。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const mean_X = _.mean(X)\nconst sd_X = sd(X)\n\nconst ucl = mean_X + 3 * sd_X\nconst lcl = mean_X - 3 * sd_X\n\nconst areaA = [\n  [ mean_X + 2 * sd_X, mean_X + 3 * sd_X ],\n  [ mean_X - 3 * sd_X, mean_X - 2 * sd_X ]\n]\nconst areaB = [\n  [ mean_X + sd_X, mean_X + 2 * sd_X ],\n  [ mean_X - 2 * sd_X, mean_X - sd_X ]\n]\nconst areaC = [\n  [ mean_X - sd_X, mean_X + sd_X ]\n]\n\n")])])]),e("h3",{attrs:{id:"_16-3-4-绘制-spc-控制图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-3-4-绘制-spc-控制图"}},[a._v("#")]),a._v(" 16.3.4 绘制 SPC 控制图")]),a._v(" "),e("p",[a._v("首先我们将控制线通过 "),e("code",[a._v("markLine")]),a._v(" 组件绘制在图表上。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const option = {\n  // ...\n  \n  yAxis: {\n    type: 'value',\n    name: 'x',\n    nameLocation: 'end',\n    \n    max: Math.max(ucl + 5, Math.max(...X)),\n    min: Math.min(lcl - 5, Math.min(...X))\n  },\n  \n  series: {\n    // ...\n    \n    markLine: {\n      data: [\n        { name: 'UCL', yAxis: ucl },\n        { name: 'Area B', yAxis: areaB[0][1] },\n        { name: 'Area C', yAxis: areaC[0][1] },\n        { name: 'Mean', yAxis: mean_X },\n        { name: 'Area C', yAxis: areaC[0][0] },\n        { name: 'Area B', yAxis: areaB[1][0] },\n        { name: 'LCL', yAxis: lcl }\n      ]\n    }\n  }\n}\n\n")])])]),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/26/166ae602a9bf03e7?w=600&h=400&f=png&s=38657",alt:""}})]),a._v(" "),e("p",[a._v("然后结合 "),e("code",[a._v("visualMap")]),a._v(" 我们便可以将完整的 SPC 控制图绘制出来了。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const option = {\n  // ...\n  \n  visualMap: {\n    top: 10, right: 10, // visualMap 图例位置\n    pieces: [\n      /* Area A */ { gt: areaA[0][0], lte: areaA[0][1], color: '#cc0033' },\n      /* Area B */ { gt: areaB[0][0], lte: areaB[0][1], color: '#ffde33' },\n      /* Area C */ { gt: areaC[0][0], lte: areaC[0][1], color: '#096' },\n      /* Area B */ { gt: areaB[1][0], lte: areaB[1][1], color: '#ffde33' },\n      /* Area A */ { gt: areaA[1][0], lte: areaA[1][1], color: '#cc0033' }\n    ]\n  }\n}\n\n")])])]),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/26/166ae608250a756d?w=600&h=400&f=png&s=50239",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[a._v("#")]),a._v(" 小结")]),a._v(" "),e("p",[a._v("在我们进行数据分析的时候，如果只有独立的数据图表而没有加以辅助的工具，数据分析工作的效率就会大大降低。所以利用数学计算配合图形展示的方式为数据图表添加辅助线以及其他辅助工具（如标注区域等），可以为数据图表的使用者带来极大的便利性。")])])}),[],!1,null,null,null);n.default=s.exports}}]);