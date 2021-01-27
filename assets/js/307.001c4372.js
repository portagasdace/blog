(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{663:function(t,n,e){"use strict";e.r(n);var a=e(42),r=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("本节代码对应 GitHub 分支: chapter6")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/sanyuan0704/react-cloud-music/tree/chapter5",target:"_blank",rel:"noopener noreferrer"}},[t._v("仓库传送门"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"构建路由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建路由"}},[t._v("#")]),t._v(" 构建路由")]),t._v(" "),e("p",[t._v("榜单详情页面在这里我们需要构建一个专门的路由，目前我们就以推荐歌单的数据来完成详情页开发。")]),t._v(" "),e("p",[t._v("首先在 routes/index.js 中，")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import Album from \'../application/Album\';\n\n// 在 /recommend 后面加上子路由\n{\n  path: "/recommend",\n  component: Recommend,\n  routes: [\n    {\n      path: "/recommend/:id",\n      component: Album\n    }\n  ]\n},\n\n')])])]),e("p",[t._v("然后在 component/list/index.js 中设置跳转：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const enterDetail = (id) => {\n  props.history.push (`/recommend/${id}`)\n}\n// 加入事件绑定逻辑\n<ListItem key={item.id} onClick={() => enterDetail (item.id)}>\n//...\n\n")])])]),e("p",[t._v("注意，这里 List 组件作为 Recommend 的子组件，并不能从 props 拿到 history 变量，无法跳转路由。有两种解决方法：")]),t._v(" "),e("ol",[e("li",[t._v("将 Recommend 组件中 props 对象中的 history 属性传给 List 组件")]),t._v(" "),e("li",[t._v("将 List 组件用 withRouter 包裹")])]),t._v(" "),e("p",[t._v("这里我们用第二种方式:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//List/index.js\nimport { withRouter } from 'react-router-dom';\n\n// 省略组件代码\n\n// 包裹\nexport default React.memo (withRouter (RecommendList));\n\n")])])]),e("p",[t._v("这样，现在就能拿到 history 变量，顺利进行路由跳转了。")]),t._v(" "),e("p",[t._v("但是，Album 组件现在并没有编写。简单来写一下:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//src/application/Album/index.js\nimport React from 'react';\nimport {Container} from './style';\n\nfunction Album (props) {\n  return (\n    <Container>\n    </Container>\n  )\n}\n\nexport default Album;\n\n")])])]),e("p",[t._v("在同目录下的 style.js：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import styled from'styled-components';\nimport style from '../../assets/global-style';\n\nexport const Container = styled.div`\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n  background: #fff;\n`\n\n")])])]),e("p",[t._v("现在你点击一个歌单，url 地址确实变化了，但页面却没有任何改变，这是什么原因呢？这里我卖个关子，给大家提供一个解决问题的思路。 第一反应是层叠上下文的问题吗？结果改变了 z-index 值，页面还是一样。说明并不是这个问题。")]),t._v(" "),e("p",[t._v("接着，这个组件究竟渲染了没？在 Album/index.js 的组件函数中，输出一些内容，到页面中，跳转后这些内容并未输出。此时，可以断定是组件没有渲染的问题。但是路由都改变了，配置也没错，怎么会出现这个问题呢？在这个时候，就考验我们对路由配置原理的理解了，具体来说就是 renderRoutes 方法。这个方法中传入参数为路由配置数组，我们在组件中调用这个方法后只能渲染一层路由，再深层的路由就无法渲染。")]),t._v(" "),e("p",[t._v("因此，我们现在在 Recommend 组件中加入这些逻辑即可:")]),t._v(" "),e("blockquote",[e("p",[t._v("有人说下面的props.route.routes有问题，是因为之前的子路由名称写成了 children 而不是 routes，这里默认配置项的子路由名字都是 routes")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import { renderRoutes } from 'react-router-config';\n\n// 返回的 JSX\n<Content>\n  // 其他代码\n  // 将目前所在路由的下一层子路由加以渲染\n  { renderRoutes (props.route.routes) }\n</Content>\n\n")])])]),e("p",[t._v("现在就有跳转效果了。")]),t._v(" "),e("h2",{attrs:{id:"动画实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动画实现"}},[t._v("#")]),t._v(" 动画实现")]),t._v(" "),e("p",[t._v("本项目所有的过渡动画采用成熟的第三方库 react-transition-group。首先安装:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install react-transition-group --save\n\n")])])]),e("p",[t._v("接下来我们来初步地使用:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//Album/index.js\nimport React, {useState} from 'react';\nimport {Container} from './style';\nimport { CSSTransition } from 'react-transition-group';\n\nfunction Album (props) {\n  const [showStatus, setShowStatus] = useState (true);\n\n  return (\n    <CSSTransition\n      in={showStatus}  \n      timeout={300} \n      classNames=\"fly\" \n      appear={true} \n      unmountOnExit\n      onExited={props.history.goBack}\n    >\n      <Container>\n      </Container>\n    </CSSTransition>\n  )\n}\n\nexport default React.memo (Album);\n\n")])])]),e("p",[t._v("然后在相应的 style.js 中，")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import styled from'styled-components';\nimport style from '../../assets/global-style';\n\nexport const Container = styled.div`\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  background: ${style [\"background-color\"]};\n  transform-origin: right bottom;\n  &.fly-enter, &.fly-appear {\n    transform: translate3d (100%, 0, 0);\n  }\n  &.fly-enter-active, &.fly-appear-active {\n    transition: transform .3s;\n    transform: translate3d (0, 0, 0);\n  }\n  &.fly-exit {\n    transform: translate3d (0, 0, 0);\n  }\n  &.fly-exit-active {\n    transition: transform .3s;\n    transform: translate3d (100%, 0, 0);\n  }\n`\n\n")])])]),e("p",[t._v("现在你回到首页，然后点击一个歌单，你会看到一个滑入的动画。但是作为一个精致的项目，这个效果还不够，完整版的项目里面呈现的是一个切入的效果，那这个如何来实现？")]),t._v(" "),e("p",[t._v("也算是一个经验吧，这里直接分享给大家。需要把握两点:")]),t._v(" "),e("ol",[e("li",[t._v("设定 transfrom 的固定点，接下来的动画都是绕这个点旋转或平移")]),t._v(" "),e("li",[t._v("设置 rotateZ 的值，让整个页面能够拥有 Z 坐标方向的矢量")])]),t._v(" "),e("p",[t._v("修改后如下:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  // 动画样式代码\n  transform-origin: right bottom;\n  &.fly-enter, &.fly-appear {\n    transform: rotateZ (30deg) translate3d (100%, 0, 0);\n  }\n  &.fly-enter-active, &.fly-appear-active {\n    transition: transform .3s;\n    transform: rotateZ (0deg) translate3d (0, 0, 0);\n  }\n  &.fly-exit {\n    transform: rotateZ (0deg) translate3d (0, 0, 0);\n  }\n  &.fly-exit-active {\n    transition: transform .3s;\n    transform: rotateZ (30deg) translate3d (100%, 0, 0);\n  }\n\n")])])]),e("p",[t._v("这个切入的动画就完成了。同样离开页面的时候，也有切出的动画。要检验整个效果，我们先来准备好路由的跳转。")]),t._v(" "),e("h2",{attrs:{id:"header-基础组件开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#header-基础组件开发"}},[t._v("#")]),t._v(" Header 基础组件开发")]),t._v(" "),e("p",[t._v("由于比较简单，就直接贴上 Header 组件的代码了。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//baseUI/header/index.js\nimport React from \'react\';\nimport styled from\'styled-components\';\nimport style from \'../../assets/global-style\';\nimport PropTypes from "prop-types";\n\nconst HeaderContainer = styled.div`\n  position: fixed;\n  padding: 5px 10px;\n  padding-top: 0;\n  height: 40px;\n  width: 100%;\n  z-index: 100;\n  display: flex;\n  line-height: 40px;\n  color: ${style ["font-color-light"]};\n  .back {\n    margin-right: 5px;\n    font-size: 20px;\n    width: 20px;\n  }\n  >h1 {\n    font-size: ${style ["font-size-l"]};\n    font-weight: 700;\n  }\n`\n// 处理函数组件拿不到 ref 的问题，所以用 forwardRef\nconst Header = React.forwardRef ((props, ref) => {\n  const { handleClick, title} = props;\n  return (\n    <HeaderContainer ref={ref}>\n      <i className="iconfont back"  onClick={handleClick}>&#xe655;</i>\n      <h1>{title}</h1>\n    </HeaderContainer>\n  )\n})\n\nHeader.defaultProps = {\n  handleClick: () => {},\n  title: "标题",\n};\n\nHeader.propTypes = {\n  handleClick: PropTypes.func,\n  title: PropTypes.string,\n};\n\nexport default React.memo (Header);\n\n')])])]),e("p",[t._v("现在在 Album 组件中直接使用:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 先引入\nimport  Header  from './../../baseUI/header/index';\n\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('const handleBack = () => {\n  setShowStatus (false);\n};\n\n//Container 组件下声明 Header\n// 前面代码省略\n<Header title={"返回"} handleClick={handleBack}></Header>\n\n')])])]),e("p",[t._v("现在你就能看到返回的箭头和文字啦，虽然颜色比较淡，但点击能够正常的跳转并显示切出动画。那看到这里你不禁要问了，我们只是通过 setShowStatus 把状态置为了 false，让退出的动画执行一次，为什么会有路由跳转呢？")]),t._v(" "),e("p",[t._v("你可能忘了，在写 CSSTransition 的时候，我特意加上了这一句:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("onExited={props.history.goBack}\n\n")])])]),e("p",[t._v("什么意思？在退出动画执行结束时跳转路由。")]),t._v(" "),e("p",[t._v("那你可能会说，为什么不是直接在 handleBack 里面直接跳转路由呢？这里就是我踩过的一个坑，大家可以试试把 CSSTransition 中的 onExited 钩子删去，然后在 handleBack 中跳转路由。你会发现，动画根本就没有出现！")]),t._v(" "),e("p",[t._v("让我来给你解释一下这是为什么，当你点击后，执行路由跳转逻辑，这个时候路由变化，当前的组件会被立即卸载，相关的动画当然也就不复存在了。最后我的解决方案就是，先让页面切出动画执行一次，然后在动画执行完的瞬间跳转路由，这就达到我们的预期了，这也就是现在呈现给大家的方案。")]),t._v(" "),e("p",[t._v("OK，关于切页动画就分享到这里了，接下来我们开始核心页面的布局。")])])}),[],!1,null,null,null);n.default=r.exports}}]);