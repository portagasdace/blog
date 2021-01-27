(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{462:function(e,t,l){"use strict";l.r(t);var r=l(42),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"flutter-可滚动widget-customscrollview"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#flutter-可滚动widget-customscrollview"}},[e._v("#")]),e._v(" Flutter 可滚动Widget -- CustomScrollView")]),e._v(" "),l("p",[l("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/CustomScrollView-class.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CustomScrollView"),l("OutboundLink")],1),e._v(" 是可以使用 slivers 来自定义滑动效果的可滚动Widget。")]),e._v(" "),l("h2",{attrs:{id:"代码所在位置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置"}},[e._v("#")]),e._v(" 代码所在位置")]),e._v(" "),l("p",[e._v("flutter_widget_demo/lib/customccrollview/CustomScrollViewWidget.dart")]),e._v(" "),l("h2",{attrs:{id:"customscrollview-的使用"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#customscrollview-的使用"}},[e._v("#")]),e._v(" CustomScrollView 的使用")]),e._v(" "),l("p",[e._v("CustomScrollView 里面可以添加多个 Widget，而且可以为 Widget 提供复杂的滑动效果，需要为其 slivers 参数赋值，而且 slivers 参数只能接受特定的 Widget，例如：")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("CustomScrollView(\n  slivers: <Widget>[\n    const SliverAppBar(\n      pinned: true,\n      expandedHeight: 250.0,\n      flexibleSpace: FlexibleSpaceBar(\n        title: Text('Demo'),\n      ),\n    ),\n    SliverGrid(\n      gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(\n        maxCrossAxisExtent: 200.0,\n        mainAxisSpacing: 10.0,\n        crossAxisSpacing: 10.0,\n        childAspectRatio: 4.0,\n      ),\n      delegate: SliverChildBuilderDelegate(\n        (BuildContext context, int index) {\n          return Container(\n            alignment: Alignment.center,\n            color: Colors.teal[100 * (index % 9)],\n            child: Text('grid item $index'),\n          );\n        },\n        childCount: 20,\n      ),\n    ),\n    SliverFixedExtentList(\n      itemExtent: 50.0,\n      delegate: SliverChildBuilderDelegate(\n        (BuildContext context, int index) {\n          return Container(\n            alignment: Alignment.center,\n            color: Colors.lightBlue[100 * (index % 9)],\n            child: Text('list item $index'),\n          );\n        },\n      ),\n    ),\n  ],\n)\n\n")])])]),l("p",[e._v("CustomScrollView 在一个页面使用的 Demo 为：")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("import 'package:flutter/material.dart';\n\nvoid main() => runApp(CustomScrollViewWidget());\n\nclass CustomScrollViewWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Test',\n      home: Scaffold(\n        appBar:\n            AppBar(title: new Text('Flutter 可滚动Widget -- CustomScrollView')),\n        body: CustomScrollView(\n          slivers: <Widget>[\n            const SliverAppBar(\n              pinned: true,\n              expandedHeight: 250.0,\n              flexibleSpace: FlexibleSpaceBar(\n                title: Text('Demo'),\n              ),\n            ),\n            SliverGrid(\n              gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(\n                maxCrossAxisExtent: 200.0,\n                mainAxisSpacing: 10.0,\n                crossAxisSpacing: 10.0,\n                childAspectRatio: 4.0,\n              ),\n              delegate: SliverChildBuilderDelegate(\n                (BuildContext context, int index) {\n                  return Container(\n                    alignment: Alignment.center,\n                    color: Colors.teal[100 * (index % 9)],\n                    child: Text('grid item $index'),\n                  );\n                },\n                childCount: 20,\n              ),\n            ),\n            SliverFixedExtentList(\n              itemExtent: 50.0,\n              delegate: SliverChildBuilderDelegate(\n                (BuildContext context, int index) {\n                  return Container(\n                    alignment: Alignment.center,\n                    color: Colors.lightBlue[100 * (index % 9)],\n                    child: Text('list item $index'),\n                  );\n                },\n              ),\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}\n\n")])])]),l("p",[e._v("运行后的效果为：")]),e._v(" "),l("p",[l("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a0032d73000327?w=428&h=768&f=png&s=80748",alt:""}})]),e._v(" "),l("h2",{attrs:{id:"customscrollview-的构造函数及参数说明"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#customscrollview-的构造函数及参数说明"}},[e._v("#")]),e._v(" CustomScrollView 的构造函数及参数说明")]),e._v(" "),l("p",[e._v("CustomScrollView 的构造函数为：")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("class CustomScrollView extends ScrollView {\n  const CustomScrollView({\n    Key key,\n    Axis scrollDirection = Axis.vertical,\n    bool reverse = false,\n    ScrollController controller,\n    bool primary,\n    ScrollPhysics physics,\n    bool shrinkWrap = false,\n    Key center,\n    double anchor = 0.0,\n    double cacheExtent,\n    this.slivers = const <Widget>[],\n    int semanticChildCount,\n    DragStartBehavior dragStartBehavior = DragStartBehavior.down,\n  })\n  ...\n}\n\n")])])]),l("p",[e._v("参数名字")]),e._v(" "),l("p",[e._v("参数类型")]),e._v(" "),l("p",[e._v("意义")]),e._v(" "),l("p",[e._v("必选 or 可选")]),e._v(" "),l("p",[e._v("key")]),e._v(" "),l("p",[e._v("Key")]),e._v(" "),l("p",[e._v("Widget 的标识")]),e._v(" "),l("p",[e._v("可选")]),e._v(" "),l("p",[e._v("scrollDirection")]),e._v(" "),l("p",[e._v("Axis")]),e._v(" "),l("p",[e._v("滑动的方向"),l("br"),e._v("\n默认为 Axis.vertical，垂直方向可滑动")]),e._v(" "),l("p",[e._v("可选")]),e._v(" "),l("p",[e._v("reverse")]),e._v(" "),l("p",[e._v("bool")]),e._v(" "),l("p",[e._v("控制 CustomScrollView 里列表项的排列顺序，是按照插入顺序排，还是按照插入顺序相反的方向排序。"),l("br"),e._v("\n默认为 false，就是按照插入顺序排序，第一个插入的在头部"),l("br"),e._v("\n，当 reverse 为 true 时，第一个插入的会在底部")]),e._v(" "),l("p",[e._v("可选")]),e._v(" "),l("p",[e._v("controller")]),e._v(" "),l("p",[e._v("ScrollController")]),e._v(" "),l("p",[e._v("可以控制 CustomScrollView 滚动的位置"),l("br"),e._v("\nScrollController 提供以下的几个功能："),l("br"),e._v("\n1.设置 CustomScrollView 滑动的初始位置"),l("br"),e._v("\n2.可以控制 CustomScrollView 是否存储和恢复滑动的位置"),l("br"),e._v("\n3.可以读取、设置当前滑动的位置"),l("br"),e._v("\n可以继承 ScrollController 实现自定义的功能"),l("br"),e._v("\n当 primary 为 true 时，controller 必须为 null")]),e._v(" "),l("p",[e._v("可选")]),e._v(" "),l("p",[e._v("primary")]),e._v(" "),l("p",[e._v("bool")]),e._v(" "),l("p",[e._v("是否是与父级关联的主滚动视图"),l("br"),e._v("\n当为 true 时，即使 CustomScrollView 里没有足够的内容也能滑动")]),e._v(" "),l("p",[e._v("可选")]),e._v(" "),l("p",[e._v("physics")]),e._v(" "),l("p",[e._v("ScrollPhysics")]),e._v(" "),l("p",[e._v("设置 CustomScrollView 的滚动效果"),l("br"),e._v("\n值必须为 ScrollPhysics 的子类，比如有如下的值："),l("br"),e._v("\nAlwaysScrollableScrollPhysics():可以让 CustomScrollView 里没有足够的内容也能滑动"),l("br"),e._v("\nScrollPhysics():CustomScrollView 在没有足够的内容的时候不能滑动")]),e._v(" "),l("p",[e._v("可选")]),e._v(" "),l("p",[e._v("shrinkWrap")]),e._v(" "),l("p",[e._v("bool")]),e._v(" "),l("p",[e._v("是否根据列表项的总长度来设置 CustomScrollView 的长度，默认值为 false。"),l("br"),e._v("\n当 shrinkWrap 为 false 时，CustomScrollView 会在滚动方向扩展到可占用的最大空间"),l("br"),e._v("\n当 shrinkWrap 为 true 时，CustomScrollView 在滚动方向占用的空间就是其列表项的总长度，但是这样会很耗性能，因为当其列表项发生变化时，CustomScrollView 的大小会重新计算")]),e._v(" "),l("p",[e._v("可选")]),e._v(" "),l("p",[e._v("center")]),e._v(" "),l("p",[e._v("Key")]),e._v(" "),l("p",[e._v("放在 CustomScrollView 中间的 子Widget 的 key")]),e._v(" "),l("p",[e._v("可选")]),e._v(" "),l("p",[e._v("anchor")]),e._v(" "),l("p",[e._v("double")]),e._v(" "),l("p",[e._v("CustomScrollView 开始滑动的偏移量"),l("br"),e._v("\n如果 anchor 为 0.0，则 CustomScrollView 的 子Widget 从头开始排列"),l("br"),e._v("\n如果 anchor 为 0.5，则 CustomScrollView 的 子Widget 从中间开始排列"),l("br"),e._v("\n如果 anchor 为 1.0，则 CustomScrollView 的 子Widget 从底部开始排列")]),e._v(" "),l("p",[e._v("可选")]),e._v(" "),l("p",[e._v("cacheExtent")]),e._v(" "),l("p",[e._v("double")]),e._v(" "),l("p",[e._v("CustomScrollView 可见部分的前面和后面的区域可以用来缓存列表项，"),l("br"),e._v("\n这部分区域的 item 即使不可见，也会加载出来，所以当滑动到这个区域的时候，缓存的区域就会变的可见，"),l("br"),e._v("\ncacheExtent 就表示缓存区域在可见部分的前面和后面有多少像素")]),e._v(" "),l("p",[e._v("可选")]),e._v(" "),l("p",[e._v("slivers")]),e._v(" "),l("p",[e._v("List"),l("Widget")],1),e._v(" "),l("p",[e._v("CustomScrollView 的列表项")]),e._v(" "),l("p",[e._v("可选")]),e._v(" "),l("p",[e._v("semanticChildCount")]),e._v(" "),l("p",[e._v("int")]),e._v(" "),l("p",[e._v("提供语义信息的列表项的数量"),l("br"),e._v("\n默认为 CustomScrollView 的 item 的数量")]),e._v(" "),l("p",[e._v("可选")]),e._v(" "),l("p",[e._v("dragStartBehavior")]),e._v(" "),l("p",[e._v("DragStartBehavior")]),e._v(" "),l("p",[e._v("确定处理拖动开始行为的方式。"),l("br"),e._v("\n如果设置为[DragStartBehavior.start]，则在检测到拖动手势时将开始滚动拖动行为"),l("br"),e._v("\n如果设置为[DragStartBehavior.down]，它将在首次检测到向下事件时开始")]),e._v(" "),l("p",[e._v("可选")]),e._v(" "),l("p",[e._v("CustomScrollView 的 slivers 属性的值，只能是以 Sliver 开头的一系列 Widget：")]),e._v(" "),l("ul",[l("li",[e._v("SliverList")]),e._v(" "),l("li",[e._v("SliverFixedExtentList")]),e._v(" "),l("li",[e._v("SliverGrid")]),e._v(" "),l("li",[e._v("SliverPadding")]),e._v(" "),l("li",[e._v("SliverAppBar")])])])}),[],!1,null,null,null);t.default=n.exports}}]);