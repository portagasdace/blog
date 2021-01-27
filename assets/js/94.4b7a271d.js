(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{450:function(e,t,a){"use strict";a.r(t);var r=a(42),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"flutter-手势识别-widget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter-手势识别-widget"}},[e._v("#")]),e._v(" Flutter 手势识别 Widget")]),e._v(" "),a("h2",{attrs:{id:"flutter-通过-widget-来处理手势事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter-通过-widget-来处理手势事件"}},[e._v("#")]),e._v(" Flutter 通过 Widget 来处理手势事件")]),e._v(" "),a("p",[e._v("在前面讲 按钮 的时候，你会发现按钮有 onPressed 来响应点击事件，但是如果我让你去监听 Text 的点击事件，你会发现 Text 根本没有类似按钮的 onPressed 属性，那么如何去监听一个 Text 的点击事件呢？")]),e._v(" "),a("p",[e._v("那就需要使用专门处理手势事件的 Widget 来嵌套 Text，在 Flutter 中，手势事件识别也是通过 Widget 来实现的，通过这个，你也能更加明白 Everything is a Widget。")]),e._v(" "),a("h2",{attrs:{id:"flutter-手势事件的分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter-手势事件的分类"}},[e._v("#")]),e._v(" Flutter 手势事件的分类")]),e._v(" "),a("p",[e._v("手势事件在 Flutter 中分为两层：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("第一层是原始的 pointer events(指针事件)")]),e._v(" "),a("p",[e._v("它描述了屏幕上指针（例如，触摸，鼠标和触控笔）的位置和移动。例如：PointerDownEvent、PointerUpEvent 、PointerMoveEvent 、PointerCancelEvent 等。")]),e._v(" "),a("p",[e._v("为了监听 pointer events，请使用 Listener Widget，但一般建议使用 GestureDetector Widget，就是下面要介绍的。")])]),e._v(" "),a("li",[a("p",[e._v("第二层是可以对原始的事件识别成不同的手势")]),e._v(" "),a("p",[e._v("第二层是对第一层原始 pointer event 事件进行识别后的手势，例如：单击、双击、长按、拖动等。")]),e._v(" "),a("p",[e._v("为了识别不同的手势，请使用 GestureDetector Widget。")])])]),e._v(" "),a("p",[e._v("下来介绍 GestureDetector 的使用。")]),e._v(" "),a("h2",{attrs:{id:"flutter-手势识别的-widget-gesturedetector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter-手势识别的-widget-gesturedetector"}},[e._v("#")]),e._v(" Flutter 手势识别的 Widget —— GestureDetector")]),e._v(" "),a("p",[e._v("GestureDetector 是用于检测手势的 Widget。")]),e._v(" "),a("h2",{attrs:{id:"代码所在位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置"}},[e._v("#")]),e._v(" 代码所在位置")]),e._v(" "),a("p",[e._v("flutter_widget_demo/lib/gesture/GestureDetectorWidget.dart")]),e._v(" "),a("h2",{attrs:{id:"gesturedetector-快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gesturedetector-快速上手"}},[e._v("#")]),e._v(" GestureDetector 快速上手")]),e._v(" "),a("p",[e._v("GestureDetector 的使用很简单，只要用 GestureDetector 嵌套要检测手势的 Widget 就行，然后在 GestureDetector 里实现想要监听的手势的方法就行。")]),e._v(" "),a("p",[e._v("例如，想要检测 Text 的点击事件，就可以这么用：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("GestureDetector(\n    child: Text('Hello Flutter'),\n    onTap: (){\n        print('tab Text');\n    },\n)\n\n")])])]),a("p",[e._v("GestureDetector 在一个页面使用的完整 Demo 为：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import 'package:flutter/cupertino.dart';\nimport 'package:flutter/material.dart';\n\nvoid main() => runApp(GestureDetectorWidget());\n\nclass GestureDetectorWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \"Flutter Demo\",\n      theme: ThemeData(\n        primaryColor: Colors.blue,\n      ),\n      home: Scaffold(\n        appBar: AppBar(title: Text(\"Flutter 手势识别Widget\")),\n        body: GestureDetector(\n          child: Text('手势识别'),\n          onTap: (){\n            print('点击');\n          },\n          onDoubleTap: (){\n            print('双击');\n          },\n          onLongPress:  (){\n            print('长按');\n          },\n          onHorizontalDragStart: (DragStartDetails details){\n            print('水平滑动');\n          },\n        ),\n      ),\n    );\n  }\n}\n\n")])])]),a("h2",{attrs:{id:"gesturedetector-的构造函数及参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gesturedetector-的构造函数及参数说明"}},[e._v("#")]),e._v(" GestureDetector 的构造函数及参数说明")]),e._v(" "),a("p",[e._v("为了知道 GestureDetector 支持哪些手势，我们可以看一下 GestureDetector 的构造函数：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class GestureDetector extends StatelessWidget {\n  GestureDetector({\n    Key key,\n    this.child,\n    this.onTapDown,\n    this.onTapUp,\n    this.onTap,\n    this.onTapCancel,\n    this.onDoubleTap,\n    this.onLongPress,\n    this.onLongPressUp,\n    this.onLongPressDragStart,\n    this.onLongPressDragUpdate,\n    this.onLongPressDragUp,\n    this.onVerticalDragDown,\n    this.onVerticalDragStart,\n    this.onVerticalDragUpdate,\n    this.onVerticalDragEnd,\n    this.onVerticalDragCancel,\n    this.onHorizontalDragDown,\n    this.onHorizontalDragStart,\n    this.onHorizontalDragUpdate,\n    this.onHorizontalDragEnd,\n    this.onHorizontalDragCancel,\n    this.onForcePressStart,\n    this.onForcePressPeak,\n    this.onForcePressUpdate,\n    this.onForcePressEnd,\n    this.onPanDown,\n    this.onPanStart,\n    this.onPanUpdate,\n    this.onPanEnd,\n    this.onPanCancel,\n    this.onScaleStart,\n    this.onScaleUpdate,\n    this.onScaleEnd,\n    this.behavior,\n    this.excludeFromSemantics = false,\n    this.dragStartBehavior = DragStartBehavior.down,\n  })\n  ...\n}\n\n")])])]),a("p",[e._v("通过看 GestureDetector 构造函数的参数，就可以知道 GestureDetector 支持哪些手势。")]),e._v(" "),a("p",[e._v("参数名字")]),e._v(" "),a("p",[e._v("参数类型")]),e._v(" "),a("p",[e._v("意义")]),e._v(" "),a("p",[e._v("必选 or 可选")]),e._v(" "),a("p",[e._v("key")]),e._v(" "),a("p",[e._v("Key")]),e._v(" "),a("p",[e._v("Widget 的标识")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("child")]),e._v(" "),a("p",[e._v("Widget")]),e._v(" "),a("p",[e._v("要检测手势事件的 Widget")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onTapDown")]),e._v(" "),a("p",[e._v("GestureTapDownCallback")]),e._v(" "),a("p",[e._v("手指触摸屏幕时产生 onTapDown 事件")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onTapUp")]),e._v(" "),a("p",[e._v("GestureTapDownCallback")]),e._v(" "),a("p",[e._v("手指离开屏幕时产生 onTapUp 事件，之后便会触发 onTap 事件")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onTap")]),e._v(" "),a("p",[e._v("GestureTapCallback")]),e._v(" "),a("p",[e._v("点击事件")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onTapCancel")]),e._v(" "),a("p",[e._v("GestureTapCancelCallback")]),e._v(" "),a("p",[e._v("当触发 onTapDown 之后，取消点击，则会触发 onTapCancel，后面的 onTapDown 和 onTapUp 都不会在触发")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onDoubleTap")]),e._v(" "),a("p",[e._v("GestureTapCallback")]),e._v(" "),a("p",[e._v("双击事件")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onLongPress")]),e._v(" "),a("p",[e._v("GestureLongPressCallback")]),e._v(" "),a("p",[e._v("长按屏幕时触发，当监听了 onLongPress 事件时，则不能监听 onLongPressDragStart、onLongPressDragUpdate、onLongPressDragUp")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onLongPressUp")]),e._v(" "),a("p",[e._v("GestureLongPressUpCallback")]),e._v(" "),a("p",[e._v("长按屏幕，手指离开屏幕时触发，当监听了 onLongPressUp 事件时，则不能监听 onLongPressDragStart、onLongPressDragUpdate、onLongPressDragUp")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onLongPressDragStart")]),e._v(" "),a("p",[e._v("GestureLongPressDragStartCallback")]),e._v(" "),a("p",[e._v("长按屏幕，并准备开始拖动时触发，当监听了 onLongPressDragStart 事件时，则不能监听 onLongPress、onLongPressUp")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onLongPressDragUpdate")]),e._v(" "),a("p",[e._v("GestureLongPressDragUpdateCallback")]),e._v(" "),a("p",[e._v("长按屏幕后并拖动时触发，当监听了 onLongPressDragUpdate 事件时，则不能监听 onLongPress、onLongPressUp")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onLongPressDragUp")]),e._v(" "),a("p",[e._v("GestureLongPressDragUpCallback")]),e._v(" "),a("p",[e._v("长按屏幕拖动，手指离开屏幕时触发，当监听了 onLongPressDragUp 事件时，则不能监听 onLongPress、onLongPressUp")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onVerticalDragDown")]),e._v(" "),a("p",[e._v("GestureDragDownCallback")]),e._v(" "),a("p",[e._v("手指接触屏幕，并且可能会开始垂直移动时触发")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onVerticalDragStart")]),e._v(" "),a("p",[e._v("GestureDragStartCallback")]),e._v(" "),a("p",[e._v("手指接触屏幕，并且已经开始垂直移动时触发")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onVerticalDragUpdate")]),e._v(" "),a("p",[e._v("GestureDragUpdateCallback")]),e._v(" "),a("p",[e._v("手指接触屏幕，并且垂直移动时触发")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onVerticalDragEnd")]),e._v(" "),a("p",[e._v("GestureDragEndCallback")]),e._v(" "),a("p",[e._v("手指接触屏幕垂直移动，然后手指离开屏幕时触发")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onVerticalDragCancel")]),e._v(" "),a("p",[e._v("GestureDragCancelCallback")]),e._v(" "),a("p",[e._v("当 onVerticalDragDown 没有完成时就会触发 onVerticalDragCancel")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onHorizontalDragDown")]),e._v(" "),a("p",[e._v("GestureDragDownCallback")]),e._v(" "),a("p",[e._v("手指接触屏幕，并且可能会开始水平移动时触发")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onHorizontalDragStart")]),e._v(" "),a("p",[e._v("GestureDragStartCallback")]),e._v(" "),a("p",[e._v("手指接触屏幕，并且已经开始水平移动时触发")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onHorizontalDragUpdate")]),e._v(" "),a("p",[e._v("GestureDragUpdateCallback")]),e._v(" "),a("p",[e._v("手指接触屏幕，并且水平移动时触发")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onHorizontalDragEnd")]),e._v(" "),a("p",[e._v("GestureDragEndCallback")]),e._v(" "),a("p",[e._v("手指接触屏幕水平移动，然后手指离开屏幕时触发")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onHorizontalDragCancel")]),e._v(" "),a("p",[e._v("GestureDragCancelCallback")]),e._v(" "),a("p",[e._v("当 onHorizontalDragDown 没有完成时就会触发 onHorizontalDragCancel")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onForcePressStart")]),e._v(" "),a("p",[e._v("GestureForcePressStartCallback")]),e._v(" "),a("p",[e._v("手指与屏幕接触，并且当有足够的压力时才会触发"),a("br"),e._v("\n注意，这个事件仅在具有压力检测屏幕的设备上触发。")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onForcePressPeak")]),e._v(" "),a("p",[e._v("GestureForcePressPeakCallback")]),e._v(" "),a("p",[e._v("手指与屏幕接触，并且当有压力达到最大时触发"),a("br"),e._v("\n注意，这个事件仅在具有压力检测屏幕的设备上触发。")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onForcePressUpdate")]),e._v(" "),a("p",[e._v("GestureForcePressUpdateCallback")]),e._v(" "),a("p",[e._v("手指与屏幕接触，有足够的压力并在屏幕上移动时触发"),a("br"),e._v("\n注意，这个事件仅在具有压力检测屏幕的设备上触发。")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onForcePressEnd")]),e._v(" "),a("p",[e._v("GestureForcePressEndCallback")]),e._v(" "),a("p",[e._v("手指与屏幕分开时触发"),a("br"),e._v("\n注意，这个事件仅在具有压力检测屏幕的设备上触发。")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onPanDown")]),e._v(" "),a("p",[e._v("GestureDragDownCallback")]),e._v(" "),a("p",[e._v("手指与屏幕接触，并且可能开始移动时触发")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onPanStart")]),e._v(" "),a("p",[e._v("GestureDragStartCallback")]),e._v(" "),a("p",[e._v("手指与屏幕接触，并且开始移动时触发")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onPanUpdate")]),e._v(" "),a("p",[e._v("GestureDragUpdateCallback")]),e._v(" "),a("p",[e._v("手指在屏幕上移动时触发")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onPanEnd")]),e._v(" "),a("p",[e._v("GestureDragEndCallback")]),e._v(" "),a("p",[e._v("手指离开屏幕时触发")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onPanCancel")]),e._v(" "),a("p",[e._v("GestureDragCancelCallback")]),e._v(" "),a("p",[e._v("当 onPanDown 没有完成时触发 onPanCancel")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onScaleStart")]),e._v(" "),a("p",[e._v("GestureTapDownCallback")]),e._v(" "),a("p",[e._v("手指与屏幕接触，并且即将有缩放操作时触发，初始值为 1.0")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onScaleUpdate")]),e._v(" "),a("p",[e._v("GestureTapDownCallback")]),e._v(" "),a("p",[e._v("手指与屏幕接触，并且有缩放操作时触发")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("onScaleEnd")]),e._v(" "),a("p",[e._v("GestureTapDownCallback")]),e._v(" "),a("p",[e._v("onScaleStart 之后，手指离开屏幕时触发")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("behavior")]),e._v(" "),a("p",[e._v("HitTestBehavior")]),e._v(" "),a("p",[e._v("在命中测试期间，此手势检测器应如何表现。")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("excludeFromSemantics")]),e._v(" "),a("p",[e._v("bool")]),e._v(" "),a("p",[e._v("是否从语义树中排除这些手势。因为 Widget")]),e._v(" "),a("p",[e._v("可选")]),e._v(" "),a("p",[e._v("dragStartBehavior")]),e._v(" "),a("p",[e._v("DragStartBehavior")]),e._v(" "),a("p",[e._v("确定处理拖动开始行为的方式。")]),e._v(" "),a("p",[e._v("可选")])])}),[],!1,null,null,null);t.default=v.exports}}]);