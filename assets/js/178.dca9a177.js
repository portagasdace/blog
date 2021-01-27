(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{534:function(t,e,a){"use strict";a.r(e);var n=a(42),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第-3-节-基本数据处理-·-对象字面量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-3-节-基本数据处理-·-对象字面量"}},[t._v("#")]),t._v(" 第 3 节 基本数据处理 · 对象字面量")]),t._v(" "),a("blockquote",[a("p",[t._v("“都这么大了，还找不到对象吗？”"),a("br"),t._v("\n“不用找，我可以 new 一个。”")])]),t._v(" "),a("p",[t._v("对象是 JavaScript 中的基础，它可以用于表达具象的事物，可以表达抽象的事物，也可以将具象事物抽象表达，反之亦然。")]),t._v(" "),a("h2",{attrs:{id:"_3-1-描述万物的对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-描述万物的对象"}},[t._v("#")]),t._v(" 3.1 描述万物的对象")]),t._v(" "),a("blockquote",[a("p",[t._v("我是小问，多领域开发者，主要为 Web 开发与大数据、机器学习领域。")])]),t._v(" "),a("p",[t._v("若要根据这段个人介绍，将笔者使用 JavaScript 进行抽象化表达，便可以使用对象字面量来实现。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const author = {\n  name: '小问',\n  title: '多领域开发者',\n  domains: [ 'Web 开发', '大数据', '机器学习' ]\n}\n\nconst someone = {\n  name: 'Ben',\n  age: 25,\n  title: 'Web Developer',\n  skills: [ 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'MobX' ]\n}\n\n")])])]),a("p",[t._v("对象字面量可以将一个具象的事物在计算机程序中抽象化表达，但同时也可以将一个抽象的事物变得更为具象，就好比这一篇文章原本是一个抽象的事物，而在程序中却可以将其具象化表达。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const post = {\n  title: '基本数据处理 · 对象字面量',\n  serialNo: 2,\n  parentBook: {\n    title: '基于 JavaScript 开发灵活的数据应用',\n    author: {\n      name: '小问',\n      title: '多领域开发者',\n      domains: [ 'Web 开发', '大数据', '机器学习' ]\n    }\n  },\n  \n  content: '......'\n}\n\n")])])]),a("p",[t._v("当然对象的属性键（Key）也并非只能用这样的方式定义，如果说需要为一个数值定义一些数学特征值，包括底数为 2 的对数、底数为自然对数 "),a("img",{attrs:{src:"https://juejin.im/equation?tex=e",alt:"e"}}),t._v(" 的对数以及底数为 10 的对数。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const x = 1024\n\nfunction getBaseLog(base, x) {\n  return Math.log(x) / Math.log(base)\n}\n\nconst baseLog = {\n  2: getBaseLog(2, x),\n  e: getBaseLog(Math.E, x),\n  10: getBaseLog(10, x)\n}\n\nconsole.log(baseLog) //=> {2: 10, 10: 3.0102999566398116, e: 6.931471805599453}\n\n")])])]),a("p",[t._v("当需要描述的事物更加抽象时，可能连属性键都会是动态生成的，那么这时候就需要更高级的语法来实现这样的需求了。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const prefix = 'MK'\nconst sourceVersion = 1\nconst latestVersion = 47\n\nconst ironMan = {\n  [prefix + sourceVersion]: '2008',\n  [prefix + latestVersion]: '2017'\n}\n\nconsole.log(ironMan.MK47) //=> 2017\n\n")])])]),a("p",[t._v("在 "),a("code",[t._v("{ [<expression>]: value }")]),t._v(" 中的 "),a("code",[t._v("expression")]),t._v(" 为一个表达式，即可以计算出结果的代码，如上面一段代码的 "),a("code",[t._v("prefix + sourceVersion")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_3-2-对象内容操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-对象内容操作"}},[t._v("#")]),t._v(" 3.2 对象内容操作")]),t._v(" "),a("p",[t._v("对象被定义以后，自然就是对其的使用，而最直接的便是对对象内容的读取和写入。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-1-对象内容读取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-对象内容读取"}},[t._v("#")]),t._v(" 3.2.1 对象内容读取")]),t._v(" "),a("p",[t._v("JavaScript 中对象内容读取十分的简单，如果属性键为字符串，且该字符串中只包含英文字母和下划线的话，可以直接用 "),a("code",[t._v("<obj>.<key>")]),t._v(" 来读取属性值。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const post = {\n  title: '基本数据处理 · 对象字面量',\n  serialNo: 2,\n  parentBook: {\n    title: '基于 JavaScript 开发灵活的数据应用',\n    author: {\n      name: '小问',\n      title: '多领域开发者',\n      domains: [ 'Web 开发', '大数据', '机器学习' ]\n    }\n  },\n  \n  content: '......'\n}\n\nconsole.log(post.title) //=> 基本数据处理 · 对象字面量\nconsole.log(post.parentBook.author.name) //=> 小问\n\n")])])]),a("p",[t._v("而当对象中所需要读取的目标属性键为数字、包含英文字母和下划线以外的字符串甚至是 "),a("code",[t._v("Symbol")]),t._v(" 对象的时候，就需要使用 "),a("code",[t._v("obj[key]")]),t._v(" 的形式来读取属性值了。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const obj = {\n  1: 2,\n  'a b c': 'd e f',\n  [Symbol.for('foo')]: 'bar'\n}\n\nconsole.log(obj[1]) //=> 2\nconsole.log(obj['a b c']) //=> d e f\nconsole.log(obj[Symbol.for('foo')]) //=> bar\n\n")])])]),a("h3",{attrs:{id:"_3-2-2-修改对象内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-修改对象内容"}},[t._v("#")]),t._v(" 3.2.2 修改对象内容")]),t._v(" "),a("p",[t._v("虽然使用 "),a("code",[t._v("const")]),t._v(" 语句所定义的对象是不能直接被替换的，但是其中的内容依然能被修改。")]),t._v(" "),a("blockquote",[a("p",[t._v("关于 "),a("code",[t._v("const")]),t._v("、"),a("code",[t._v("let")]),t._v(" 和 "),a("code",[t._v("var")]),t._v(" 的故事，可以自行搜索，也可以参考笔者的"),a("a",{attrs:{href:"https://item.jd.com/11995765.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《实战 ES2015》"),a("OutboundLink")],1),t._v("，其中有很详细的讲解。")])]),t._v(" "),a("p",[t._v("在 JavaScript 中存在着“引用”和“值”的概念区别，当然这同样不是本书的讨论范围。简单地解释，就是对对象内容进行修改跟进行读取类似，只是在读取语句后面加上 "),a("code",[t._v("= <new value>")]),t._v(" 即可。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const obj = {\n  foo: 'bar',\n  1: 2,\n  'a b c': 'd e f',\n  [Symbol.for('foo')]: 'bar'\n}\n\nobj.foo = 'rab'\nobj[1] = 3\nconsole.log(obj.foo) //=> rab\nconsole.log(obj[1]) //=> 3\n\n")])])]),a("p",[t._v("当然，当你需要为一个对象添加新的属性时，也是通过同样的方式添加属性。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const obj = {}\n\nobj.foo = 'bar'\nobj[1] = 2\n\n")])])]),a("p",[t._v("但要非常注意的是，在"),a("strong",[t._v("一般情况")]),t._v("下，无论是对对象进行添加、读取还是修改属性，都遵循着嵌套链完整的原则，具体如下例所示。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const outer = {\n  inner: {}\n}\n\nouter.inner.foo = 'bar' // OK\nouter.something.bar = 1 // Error!\n\n")])])]),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("对象可以说是在 JavaScript 编程开发中最最重要的概念，懂得如何在最基础的知识上学会灵活使用，在后面的学习和开发中你会变得事半功倍。")]),t._v(" "),a("h3",{attrs:{id:"习题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#习题"}},[t._v("#")]),t._v(" 习题")]),t._v(" "),a("p",[t._v("请用对象字面量描述自己，尽可能多地丰富对象属性内容，并注意其中的层级嵌套关系。")])])}),[],!1,null,null,null);e.default=s.exports}}]);