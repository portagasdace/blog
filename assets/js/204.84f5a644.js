(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{559:function(t,n,e){"use strict";e.r(n);var a=e(42),o=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"实现一个-storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现一个-storage"}},[t._v("#")]),t._v(" 实现一个 Storage")]),t._v(" "),e("h3",{attrs:{id:"描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),e("blockquote",[e("p",[t._v("实现Storage，使得该对象为单例，基于 localStorage 进行封装。实现方法 setItem(key,value) 和 getItem(key)。")])]),t._v(" "),e("h3",{attrs:{id:"思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),e("p",[t._v("拿到单例模式相关的面试题，大家首先要做的是回忆我们上个小节的“基本思路”部分——至少要记起来"),e("code",[t._v("getInstance")]),t._v("方法和"),e("code",[t._v("instance")]),t._v("这个变量是干啥的。")]),t._v(" "),e("p",[t._v("具体实现上，把判断逻辑写入静态方法或者构造函数里都没关系，最好能把闭包的版本也写出来，多多益善。")]),t._v(" "),e("p",[t._v("总之有了上节的基础，这个题简直是默写！")]),t._v(" "),e("blockquote",[e("p",[t._v("实现：静态方法版")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 定义Storage\nclass Storage {\n    static getInstance() {\n        // 判断是否已经new过1个实例\n        if (!Storage.instance) {\n            // 若这个唯一的实例不存在，那么先创建它\n            Storage.instance = new Storage()\n        }\n        // 如果这个唯一的实例已经存在，则直接返回\n        return Storage.instance\n    }\n    getItem (key) {\n        return localStorage.getItem(key)\n    }\n    setItem (key, value) {\n        return localStorage.setItem(key, value)\n    }\n}\n\nconst storage1 = Storage.getInstance()\nconst storage2 = Storage.getInstance()\n\nstorage1.setItem('name', '李雷')\n// 李雷\nstorage1.getItem('name')\n// 也是李雷\nstorage2.getItem('name')\n\n// 返回true\nstorage1 === storage2\n\n")])])]),e("blockquote",[e("p",[t._v("实现： 闭包版")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 先实现一个基础的StorageBase类，把getItem和setItem方法放在它的原型链上\nfunction StorageBase () {}\nStorageBase.prototype.getItem = function (key){\n    return localStorage.getItem(key)\n}\nStorageBase.prototype.setItem = function (key, value) {\n    return localStorage.setItem(key, value)\n}\n\n// 以闭包的形式创建一个引用自由变量的构造函数\nconst Storage = (function(){\n    let instance = null\n    return function(){\n        // 判断自由变量是否为null\n        if(!instance) {\n            // 如果为null则new出唯一实例\n            instance = new StorageBase()\n        }\n        return instance\n    }\n})()\n\n// 这里其实不用 new Storage 的形式调用，直接 Storage() 也会有一样的效果 \nconst storage1 = new Storage()\nconst storage2 = new Storage()\n\nstorage1.setItem('name', '李雷')\n// 李雷\nstorage1.getItem('name')\n// 也是李雷\nstorage2.getItem('name')\n\n// 返回true\nstorage1 === storage2\n\n")])])]),e("h2",{attrs:{id:"实现一个全局的模态框"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现一个全局的模态框"}},[t._v("#")]),t._v(" 实现一个全局的模态框")]),t._v(" "),e("h3",{attrs:{id:"描述-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述-2"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),e("blockquote",[e("p",[t._v("实现一个全局唯一的Modal弹框")])]),t._v(" "),e("h3",{attrs:{id:"思路-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思路-2"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),e("p",[t._v("这道题比较经典，基本上所有讲单例模式的文章都会以此为例，同时它也是早期单例模式在前端领域的最集中体现。")]),t._v(" "),e("p",[t._v("万变不离其踪，记住"),e("code",[t._v("getInstance")]),t._v("方法、记住"),e("code",[t._v("instance")]),t._v("变量、记住闭包和静态方法，这个题除了要多写点 HTML 和 CSS 之外，对大家来说完全不成问题。")]),t._v(" "),e("h3",{attrs:{id:"实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),e("p",[t._v("完整代码如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>单例模式弹框</title>\n</head>\n<style>\n    #modal {\n        height: 200px;\n        width: 200px;\n        line-height: 200px;\n        position: fixed;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        border: 1px solid black;\n        text-align: center;\n    }\n</style>\n<body>\n\t<button id='open'>打开弹框</button>\n\t<button id='close'>关闭弹框</button>\n</body>\n<script>\n    // 核心逻辑，这里采用了闭包思路来实现单例模式\n    const Modal = (function() {\n    \tlet modal = null\n    \treturn function() {\n            if(!modal) {\n            \tmodal = document.createElement('div')\n            \tmodal.innerHTML = '我是一个全局唯一的Modal'\n            \tmodal.id = 'modal'\n            \tmodal.style.display = 'none'\n            \tdocument.body.appendChild(modal)\n            }\n            return modal\n    \t}\n    })()\n    \n    // 点击打开按钮展示模态框\n    document.getElementById('open').addEventListener('click', function() {\n        // 未点击则不创建modal实例，避免不必要的内存占用;此处不用 new Modal 的形式调用也可以，和 Storage 同理\n    \tconst modal = new Modal()\n    \tmodal.style.display = 'block'\n    })\n    \n    // 点击关闭按钮隐藏模态框\n    document.getElementById('close').addEventListener('click', function() {\n    \tconst modal = new Modal()\n    \tif(modal) {\n    \t    modal.style.display = 'none'\n    \t}\n    })\n<\/script>\n</html>\n\n")])])]),e("p",[t._v("是不是发现又是熟悉的套路？又可以默写了？（ES6 版本的实现大家自己尝试默写一下，相信对现在的你来说已经非常简单了）。")]),t._v(" "),e("p",[t._v("这就是单例模式面试题的特点，准确地说，是所有设计模式相关面试题的特点——牢记核心思路，就能举一反三。所以说设计模式的学习是典型的一分耕耘一分收获，性价比极高。")]),t._v(" "),e("p",[t._v("（阅读过程中有任何想法或疑问，或者单纯希望和笔者交个朋友啥的，欢迎大家添加我的微信xyalinode与我交流哈~）")])])}),[],!1,null,null,null);n.default=o.exports}}]);