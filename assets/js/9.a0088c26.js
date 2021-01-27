(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{365:function(t,n,e){"use strict";e.r(n);var r=e(42),s=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"快慢指针与多指针"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快慢指针与多指针"}},[t._v("#")]),t._v(" 快慢指针与多指针")]),t._v(" "),e("p",[t._v("链表题目中，有一类会涉及到"),e("strong",[t._v("反复的遍历")]),t._v("。涉及反复遍历的题目，题目本身虽然不会直接跟你说“你好，我是一道需要反复遍历的题目”，但只要你尝试用常规的思路分析它，你会发现它一定涉及反复遍历；同时，涉及反复遍历的题目，还有一个更明显的特征，就是它们往往会涉及"),e("strong",[t._v("相对复杂的链表操作")]),t._v("，比如反转、指定位置的删除等等。")]),t._v(" "),e("p",[t._v("解决这类问题，我们用到的是双指针中的“快慢指针”。快慢指针指的是两个一前一后的指针，两个指针往同一个方向走，只是一个快一个慢。快慢指针严格来说只能有俩，不过实际做题中，可能会出现一前、一中、一后的三个指针，这种超过两个指针的解题方法也叫“多指针法”。")]),t._v(" "),e("p",[t._v("快慢指针+多指针，双管齐下，可以帮助我们解决链表中的大部分复杂操作问题。")]),t._v(" "),e("h2",{attrs:{id:"快慢指针-删除链表的倒数第-n-个结点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快慢指针-删除链表的倒数第-n-个结点"}},[t._v("#")]),t._v(" 快慢指针——删除链表的倒数第 N 个结点")]),t._v(" "),e("blockquote",[e("p",[t._v("真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。")])]),t._v(" "),e("blockquote",[e("p",[t._v("示例： 给定一个链表: 1->2->3->4->5, 和 n = 2."),e("br"),t._v("\n当删除了倒数第二个结点后，链表变为 1->2->3->5."),e("br"),t._v("\n说明： 给定的 n 保证是有效的。")])]),t._v(" "),e("h3",{attrs:{id:"思路分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[t._v("#")]),t._v(" 思路分析")]),t._v(" "),e("h4",{attrs:{id:"小贴士-dummy-结点的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小贴士-dummy-结点的使用"}},[t._v("#")]),t._v(" 小贴士：dummy 结点的使用")]),t._v(" "),e("p",[t._v("上一节我给大家介绍了 "),e("code",[t._v("dummy")]),t._v(" 结点：它可以帮我们处理掉头结点为空的边界问题，帮助我们简化解题过程。因此涉及链表操作、尤其是涉及结点删除的题目（对前驱结点的存在性要求比较高），我都建议大家写代码的时候直接把 "),e("code",[t._v("dummy")]),t._v(" 给用起来，建立好的编程习惯：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const dummy = new ListNode()\n// 这里的 head 是链表原有的第一个结点\ndummy.next = head\n\n")])])]),e("h4",{attrs:{id:"倒数-变-正数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#倒数-变-正数"}},[t._v("#")]),t._v(" “倒数”变“正数”")]),t._v(" "),e("p",[t._v("链表的删除我们上节已经讲过，相信都难不倒大家。这道题的难点实际在于这个“倒数第 N 个”如何定位。")]),t._v(" "),e("p",[t._v("考虑到咱们的遍历不可能从后往前走，因此这个“倒数第 N 个” 咱们完全可以转换为“正数第 "),e("code",[t._v("len - n + 1")]),t._v('"个。这里这个 '),e("code",[t._v("len")]),t._v(" 代表链表的总长度，比如说咱们链表长为 7，那么倒数第 1 个就是正数第 7 个。按照这个思路往下分析，如果走直接遍历这条路，那么这个 "),e("code",[t._v("len")]),t._v(" 就非常关键了。")]),t._v(" "),e("p",[t._v("我们可以直接遍历两趟：第一趟，设置一个变量 "),e("code",[t._v("count = 0")]),t._v("，每遍历到一个不为空的结点，"),e("code",[t._v("count")]),t._v(" 就加 1，一直遍历到链表结束为止，得出链表的总长度 "),e("code",[t._v("len")]),t._v("；根据这个总长度，咱们就可以算出倒数第 "),e("code",[t._v("n")]),t._v(" 个到底是正数第几个了（"),e("code",[t._v("M = len - n + 1")]),t._v("），那么我们遍历到第"),e("code",[t._v("M - 1")]),t._v("（也就是 "),e("code",[t._v("len - n")]),t._v("） 个结点的时候就可以停下来，执行删除操作（想一想，为什么是第 "),e("code",[t._v("M-1")]),t._v(" 个，而不是第 "),e("code",[t._v("M")]),t._v(" 个？如果你认真读了我们前面的章节，心中一定会有一个清晰的答案^_^）")]),t._v(" "),e("p",[t._v("不过这种超过一次的遍历必然需要引起我们的注意，我们应该主动去思考，“如果一次遍历来解决这个问题，我可以怎么做？”，这时候，就要请双指针法来帮忙了。")]),t._v(" "),e("h4",{attrs:{id:"快慢指针登场"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快慢指针登场"}},[t._v("#")]),t._v(" 快慢指针登场")]),t._v(" "),e("p",[t._v("按照我们已经预告过的思路，首先两个指针 "),e("code",[t._v("slow")]),t._v(" 和 "),e("code",[t._v("fast")]),t._v("，全部指向链表的起始位——"),e("code",[t._v("dummy")]),t._v(" 结点：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/29/17125fa8d6f683e0?w=1278&h=436&f=png&s=33032",alt:""}})]),t._v(" "),e("p",[t._v("快指针先出发！闷头走上 "),e("code",[t._v("n")]),t._v(" 步，在第 "),e("code",[t._v("n")]),t._v(" 个结点处打住，这里 "),e("code",[t._v("n=2")]),t._v("：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/29/17125fb3593dc39d?w=1208&h=436&f=png&s=32178",alt:""}})]),t._v(" "),e("p",[t._v("然后，快慢指针一起前进，当快指针前进到最后一个结点处时，两个指针再一起停下来：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/29/17125fbcda4d42eb?w=1262&h=480&f=png&s=34196",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/29/17125fc2466dd8b0?w=1266&h=462&f=png&s=33756",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/29/17125fcbaff12b8a?w=1244&h=404&f=png&s=31858",alt:""}})]),t._v(" "),e("p",[t._v("此时，慢指针所指的位置，就是倒数第 "),e("code",[t._v("n")]),t._v(" 个结点的前一个结点：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/14/17177b91579ddc7a?w=1294&h=422&f=png&s=40943",alt:""}})]),t._v(" "),e("p",[t._v("我们基于这个结点来做删除，可以说是手到擒来：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/14/17177b88bdf6fe0e?w=1282&h=500&f=png&s=48510",alt:""}})]),t._v(" "),e("p",[t._v("到这里，我们总结一下："),e("br"),t._v("\n链表删除问题中，若走两次遍历，我们做了两件事："),e("br"),t._v("\n1.求长度"),e("br"),t._v("\n2.做减法，找定位。")]),t._v(" "),e("p",[t._v("若用快慢指针，我们其实是把做减法和找定位这个过程给融合了。通过快指针先行一步、接着快慢指针一起前进这个操作，巧妙地把两个指针之间的差值保持在了“"),e("code",[t._v("n")]),t._v("”上（"),e("strong",[t._v("用空间换时间，本质上其实就是对关键信息进行提前记忆，这里咱们相当于用两个指针对差值实现了记忆")]),t._v("），这样当快指针走到链表末尾（第 "),e("code",[t._v("len")]),t._v(" 个）时，慢指针刚好就在 "),e("code",[t._v("len - n")]),t._v(" 这个地方稳稳落地。")]),t._v(" "),e("h3",{attrs:{id:"编码实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编码实现"}},[t._v("#")]),t._v(" 编码实现")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/**\n * @param {ListNode} head\n * @param {number} n\n * @return {ListNode}\n */\nconst removeNthFromEnd = function(head, n) {\n    // 初始化 dummy 结点\n    const dummy = new ListNode()\n    // dummy指向头结点\n    dummy.next = head\n    // 初始化快慢指针，均指向dummy\n    let fast = dummy\n    let slow = dummy\n\n    // 快指针闷头走 n 步\n    while(n!==0){\n        fast = fast.next\n        n--\n    }\n    \n    // 快慢指针一起走\n    while(fast.next){\n        fast = fast.next\n        slow = slow.next\n    }\n    \n    // 慢指针删除自己的后继结点\n    slow.next = slow.next.next\n    // 返回头结点\n    return dummy.next\n};\n\n\n")])])]),e("h2",{attrs:{id:"多指针法-链表的反转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多指针法-链表的反转"}},[t._v("#")]),t._v(" 多指针法——链表的反转")]),t._v(" "),e("h3",{attrs:{id:"完全反转一个链表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完全反转一个链表"}},[t._v("#")]),t._v(" 完全反转一个链表")]),t._v(" "),e("blockquote",[e("p",[t._v("真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。")])]),t._v(" "),e("blockquote",[e("p",[t._v("示例:"),e("br"),t._v("\n输入: 1->2->3->4->5->NULL"),e("br"),t._v("\n输出: 5->4->3->2->1->NULL")])]),t._v(" "),e("h3",{attrs:{id:"思路解读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思路解读"}},[t._v("#")]),t._v(" 思路解读")]),t._v(" "),e("p",[t._v("这道题虽然是一道新题，但你要说你完全没思路，我真的哭了orz。老哥，我真想把这句话刻你显示器上——"),e("strong",[t._v("处理链表的本质，是处理链表结点之间的指针关系")]),t._v("。"),e("br"),t._v("\n我啥也不说，就给你一张链表的结构图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/29/171260bdb3250b83?w=1182&h=294&f=png&s=21722",alt:""}})]),t._v(" "),e("p",[t._v("来，你告诉我，我如何把这货颠倒个顺序呢？"),e("br"),t._v("\n是不是想办法把每个结点 next 指针的指向给反过来就行了：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/29/171260d3c16a73ec?w=1150&h=368&f=png&s=27586",alt:""}})]),t._v(" "),e("p",[t._v("你只要能想到这一步，就说明你对链表操作类题目已经有了最关键的感知，给你双击666~")]),t._v(" "),e("p",[t._v("接下来我们需要琢磨的是如何去反转指针的指向，这里我们需要用到三个指针，它们分别指向目标结点（cur）、目标结点的前驱结点（pre）、目标结点的后继结点（next）。这里咱们随便找个结点来开刀：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/29/1712613307139215?w=1254&h=472&f=png&s=31216",alt:""}})]),t._v(" "),e("p",[t._v("这里我只需要一个简单的"),e("code",[t._v("cur.next = pre")]),t._v("，就做到了 next 指针的反转：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/29/17126177a6f049a5?w=1276&h=466&f=png&s=36856",alt:""}})]),t._v(" "),e("p",[t._v("有同学会说：那 "),e("code",[t._v("next")]),t._v(" 不是完全没用到吗？"),e("br"),t._v("\n当然有用，你瞅瞅，咱们反转完链表变成啥样了：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/29/17126184d0d41e31?w=1142&h=524&f=png&s=34704",alt:""}})]),t._v(" "),e("p",[t._v("这会儿我要是不用 next 给你指着 cur 原本的后继结点，你上哪去定位下一个结点呢？遍历都没法继续了嗷。")]),t._v(" "),e("p",[t._v("咱们从第一个结点开始，每个结点都给它进行一次 next 指针的反转。到最后一个结点时，整个链表就已经被我们彻底反转掉了。")]),t._v(" "),e("h3",{attrs:{id:"编码实现-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编码实现-2"}},[t._v("#")]),t._v(" 编码实现")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nconst reverseList = function(head) {\n    // 初始化前驱结点为 null\n    let pre = null;\n    // 初始化目标结点为头结点\n    let cur = head;\n    // 只要目标结点不为 null，遍历就得继续\n    while (cur !== null) {\n        // 记录一下 next 结点\n        let next = cur.next;\n        // 反转指针\n        cur.next = pre;\n        // pre 往前走一步\n        pre = cur;\n        // cur往前走一步\n        cur = next;\n    }\n    // 反转结束后，pre 就会变成新链表的头结点\n    return pre\n};\n\n")])])]),e("h3",{attrs:{id:"局部反转一个链表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#局部反转一个链表"}},[t._v("#")]),t._v(" 局部反转一个链表")]),t._v(" "),e("p",[t._v("反转链表真是座金矿，反转完整体反转局部，反转完局部还能每 k 个一组花式反转（最后这个略难，我们会放在真题训练环节来做）。虽然难度依次进阶，但只要把握住核心思想就没问题，下面咱们来看看如何反转局部：")]),t._v(" "),e("blockquote",[e("p",[t._v("真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。")])]),t._v(" "),e("blockquote",[e("p",[t._v("说明: 1 ≤ m ≤ n ≤ 链表长度。")])]),t._v(" "),e("blockquote",[e("p",[t._v("示例:"),e("br"),t._v("\n输入: 1->2->3->4->5->NULL, m = 2, n = 4"),e("br"),t._v("\n输出: 1->4->3->2->5->NULL")])]),t._v(" "),e("h3",{attrs:{id:"思路解读-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思路解读-2"}},[t._v("#")]),t._v(" 思路解读")]),t._v(" "),e("p",[t._v("我们仍然是从指针反转来入手：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/29/171260bdb3250b83?w=1182&h=294&f=png&s=21722",alt:""}})]),t._v(" "),e("p",[t._v("按照题中的示例，假如我们需要反转的是链表的第 2-4 之间的结点，那么对应的指针逆序后会是这个样子：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/29/171262f560bc0f5e?w=1160&h=348&f=png&s=27174",alt:""}})]),t._v(" "),e("p",[t._v("4指3，3指2，这都没问题，关键在于，如何让1指向4、让2指向5呢？这就要求我们在单纯的重复“逆序”这个动作之外，还需要对被逆序的区间前后的两个结点做额外的处理：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/29/1712631ee4da721e?w=1242&h=368&f=png&s=26040",alt:""}})]),t._v(" "),e("p",[t._v("由于我们遍历链表的顺序是从前往后遍历，那么为了避免结点1和结点2随着遍历向后推进被遗失，我们需要提前把1结点缓存下来。而结点5就没有这么麻烦了：随着遍历的进行，当我们完成了结点4的指针反转后，此时 cur 指针就恰好指在结点5上：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/29/171263684ef03dd0?w=1196&h=520&f=png&s=38102",alt:""}})]),t._v(" "),e("p",[t._v("此时我们直接将结点2的 next 指针指向 cur、将结点1的 next 指针指向 pre 即可。")]),t._v(" "),e("h3",{attrs:{id:"编码实现-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编码实现-3"}},[t._v("#")]),t._v(" 编码实现")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/**\n * @param {ListNode} head\n * @param {number} m\n * @param {number} n\n * @return {ListNode}\n */\n// 入参是头结点、m、n\nconst reverseBetween = function(head, m, n) {\n    // 定义pre、cur，用leftHead来承接整个区间的前驱结点\n    let pre,cur,leftHead\n    // 别忘了用 dummy 嗷\n    const dummy = new ListNode()  \n    // dummy后继结点是头结点\n    dummy.next = head\n    // p是一个游标，用于遍历，最初指向 dummy\n    let p = dummy  \n    // p往前走 m-1 步，走到整个区间的前驱结点处\n    for(let i=0;i<m-1;i++){\n        p = p.next\n    }\n    // 缓存这个前驱结点到 leftHead 里\n    leftHead = p\n    // start 是反转区间的第一个结点\n    let start = leftHead.next  \n    // pre 指向start\n    pre = start\n    // cur 指向 start 的下一个结点\n    cur = pre.next\n    // 开始重复反转动作\n    for(let i=m;i<n;i++){\n        let next =c ur.next\n        cur.next = pre\n        pre = cur\n        cur = next\n    }\n    //  leftHead 的后继结点此时为反转后的区间的第一个结点\n    leftHead.next = pre\n    // 将区间内反转后的最后一个结点 next 指向 cur\n    start.next=cur\n    // dummy.next 永远指向链表头结点\n    return dummy.next\n};\n\n")])])]),e("p",[t._v("小贴士：楼上的两道反转题目，都可以用递归来实现，你试试？")]),t._v(" "),e("p",[t._v("（阅读过程中有任何想法或疑问，或者单纯希望和笔者交个朋友啥的，欢迎大家添加我的微信xyalinode与我交流哈~）")])])}),[],!1,null,null,null);n.default=s.exports}}]);