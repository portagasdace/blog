(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{407:function(t,e,n){"use strict";n.r(e);var a=n(42),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"对供需进行量化分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对供需进行量化分析"}},[t._v("#")]),t._v(" 对供需进行量化分析")]),t._v(" "),n("p",[t._v("当然，除了这种面向整个行业和技术方向的定性分析，我们还可以通过工具来做定量分析。")]),t._v(" "),n("h2",{attrs:{id:"量化分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#量化分析"}},[t._v("#")]),t._v(" 量化分析")]),t._v(" "),n("p",[t._v("招聘网站的招聘启事中包含了大量的信息，只不过因为数据量较大，全部浏览下来往往会耗费大量时间。然而对于程序员来说，这都不叫事对吧。")]),t._v(" "),n("p",[t._v("这里我们以"),n("a",{attrs:{href:"https://www.lagou.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("拉勾网"),n("OutboundLink")],1),t._v("为数据源，来演示下如何通过数据来分析或者证实我们猜想。")]),t._v(" "),n("blockquote",[n("p",[t._v("拉勾网覆盖了20多万家互联网公司，在一二线城市的职位充足，算是不错的数据源。")])]),t._v(" "),n("p",[t._v("最近有一些培训机构推出了面向初学者的免费培训课程，这本来是好事，但它们忽悠说，只要花几周学会 HTML5 ，就能找到工作。那么我们就来看看，只会 HTML5 到底能不能找到工作。")]),t._v(" "),n("h3",{attrs:{id:"搜索结果在说话"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搜索结果在说话"}},[t._v("#")]),t._v(" 搜索结果在说话")]),t._v(" "),n("p",[t._v("在进行编码抓取数据之前，我们应该先确认下数据的量级，所以我们先搜索一把。先看看全国范围内，面向应届生的 HTML5 工作岗位，只有七个。")]),t._v(" "),n("blockquote",[n("p",[t._v("为什么要选择应届？因为培训完的同学也没有1~3年工作经验呀。")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/2/9d408faa07ded2ca3300ca02e08a1736",alt:""}})]),t._v(" "),n("p",[t._v("这也太少了，那么会不会是 HTML5 这个关键词的问题？我们再来试试 HTML 好了。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/2/ed3e466ace73b46a00056f3ec27cfdf7",alt:""}})]),t._v(" "),n("p",[t._v("一样，看来拉勾做过同义词合并了。再来看看实习岗位：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/2/75cc9ed877a504f219ad7d8b9ee940aa",alt:""}})]),t._v(" "),n("p",[t._v("更少一点，只有五个。这说明只会 HTML5 是找不到工作的，HTML5 只是前端岗位技能的一小部分，单是一个入门培训是完全不够的，如果要胜任前端岗位，我们还需要学习更多的东西。")]),t._v(" "),n("h3",{attrs:{id:"前端到底要会什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端到底要会什么"}},[t._v("#")]),t._v(" 前端到底要会什么？")]),t._v(" "),n("p",[t._v("那么，企业对应届的前端岗位的需求到底是什么？先搜一下。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/2/b850c80bf2c76f9cbe2acf0b7185f097",alt:""}})]),t._v(" "),n("p",[t._v("总共有160个岗位，还算不错。这时候我们就不一个个去浏览了，该使用我们的技能了。思路是，先把包含这些岗位的全部页面抓下来，然后把每个职位的信息提取并保存为 JSON 。最后按需要分析统计这些 JSON 数据，就能得出我们需要的最终数据。")]),t._v(" "),n("h4",{attrs:{id:"通过-chrome-devtools-查找数据源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过-chrome-devtools-查找数据源"}},[t._v("#")]),t._v(" 通过 Chrome DevTools 查找数据源")]),t._v(" "),n("p",[t._v("打开 Chrome 的 DevTools 面板，切换到 Network > XHR 选项下（这样可以过滤掉无关请求），然后对满足我们要求的搜索页面进行翻页。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/2/4f1545204e1648863f35db40be8f9148",alt:""}})]),t._v(" "),n("p",[t._v("我们可以发现，数据就存在于下边这个 URL 里边：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("https://www.lagou.com/jobs/positionAjax.json?px=default&gx=%E5%85%A8%E8%81%8C&needAddtionalResult=false&isSchoolJob=1\n")])])]),n("p",[t._v("仔细观察它的 Header 会发现参数是通过 POST 请求发送过去的：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/2/e03c6fcbf2440f3d7d9dd7a4c05b33fa",alt:""}})]),t._v(" "),n("p",[t._v("其中 pn 就是页数，我们这里总共有 11 页。")]),t._v(" "),n("h4",{attrs:{id:"通过构造请求抓取数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过构造请求抓取数据"}},[t._v("#")]),t._v(" 通过构造请求抓取数据")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/2/17063a94d9a434852ac3deb2e8d38e0c",alt:""}})]),t._v(" "),n("p",[t._v("在请求上点击右键，选择 Copy as cURL ，可以获得模拟请求的 cURL 命令参数。大概是下面这个样子。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("curl 'https://www.lagou.com/jobs/positionAjax.json?px=default&gx=%E5%85%A8%E8%81%8C&needAddtionalResult=false&isSchoolJob=1' -H 'Cookie: ...' -H 'Origin: https://www.lagou.com' -H 'X-Anit-Forge-Code: 0' -H 'Accept-Language: en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,ja;q=0.2,zh-TW;q=0.2' -H 'X-Requested-With: XMLHttpRequest' -H 'Accept-Encoding: gzip, deflate, br' -H 'Connection: keep-alive' -H 'Pragma: no-cache' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'Cache-Control: no-cache' -H 'Referer: https://www.lagou.com/jobs/list_%E5%89%8D%E7%AB%AF?px=default&gx=%E5%85%A8%E8%81%8C&gj=&isSchoolJob=1&city=%E5%85%A8%E5%9B%BD' -H 'X-Anit-Forge-Token: None' --data 'first=false&pn=1&kd=%E5%89%8D%E7%AB%AF' --compressed\n")])])]),n("p",[t._v("我们只需要将 pn 参数替换，然后请求11次，就可以获得全部的职位数据了。")]),t._v(" "),n("blockquote",[n("p",[t._v("以下的内容均使用 PHP 来实现，逻辑很简单，如果你是合格的程序员，应该很轻松就能将其改写成自己想要的语言实现。")])]),t._v(" "),n("p",[t._v("下边是实现的 PHP 代码（需要建立data目录，根目录要可写，PHP7.1 测试通过）：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<?php\n\nfor( $i = 1 ; $i <= 11 ; $i++ )\n{\n    $data = shell_exec(\"curl 'https://www.lagou.com/jobs/positionAjax.json?px=default&gx=%E5%85%A8%E8%81%8C&needAddtionalResult=false&isSchoolJob=1' -H 'Cookie:...' -H 'Origin: https://www.lagou.com' -H 'X-Anit-Forge-Code: 0' -H 'Accept-Language: en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,ja;q=0.2,zh-TW;q=0.2' -H 'X-Requested-With: XMLHttpRequest' -H 'Accept-Encoding: gzip, deflate, br' -H 'Connection: keep-alive' -H 'Pragma: no-cache' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'Cache-Control: no-cache' -H 'Referer: https://www.lagou.com/jobs/list_%E5%89%8D%E7%AB%AF?px=default&gx=%E5%85%A8%E8%81%8C&gj=&isSchoolJob=1&city=%E5%85%A8%E5%9B%BD' -H 'X-Anit-Forge-Token: None' --data 'first=false&pn=\" . $i . \"&kd=%E5%89%8D%E7%AB%AF' --compressed\");\n\n    $data_array[] = json_decode( $data ,  1 );\n    $fname = 'data/' . time() . '.txt';\n    file_put_contents( $fname ,  $data );\n\n    echo \"SAVED ...$i 😀 \\r\\n\";\n}\n\nfile_put_contents( 'all.json' ,  json_encode( $data_array , JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE ) );\necho \" DONE 🤠\";\n")])])]),n("p",[t._v("最终在 all.json 文件中，我们得到了所有职位的信息，但是这些信息里边只包括了薪资范围，并没有技能要求。于是我们需要进一步的去抓取职位页面的信息。")]),t._v(" "),n("p",[t._v("观察 all.json 中的数组，发现职位数组位于 "),n("code",[t._v("$item['content']['positionResult']['result']")]),t._v(" 部分，通过其属性 "),n("code",[t._v("positionId")]),t._v(" ，我们可以构建职位页面的 URL ： "),n("code",[t._v("https://www.lagou.com/jobs/${positionId}.html")]),t._v("。")]),t._v(" "),n("p",[t._v("于是我们可以遍历 all.json 中的职位，来抓取对应的页面：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<?php\n\n$data = json_decode( file_get_contents('all.json'), 1 );\n$result = [];\n\nforeach( $data as $item )\n{\n    if( $item['content']['positionResult']['result'] )\n        $result = array_merge( $result , $item['content']['positionResult']['result']);\n}\n\n$i = 1;\n$count = count($result);\nforeach( $result as $item )\n{\n    $page_content = get_page_content( $item['positionId']);\n    file_put_contents( 'pages/'.$item['positionId'].'.html' , $page_content );\n    echo  $i . \"/\" . $count . \" …… DONE \" . \" \\r\\n\";\n    $i++;\n    sleep(1);\n}\n\necho \"ALL DONE\";\n\nfunction get_page_content( $pid )\n{\n    return shell_exec(\"curl 'https://www.lagou.com/jobs/\" . $pid . \".html' -H 'Pragma: no-cache' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,ja;q=0.2,zh-TW;q=0.2' -H 'Upgrade-Insecure-Requests: 1' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8' -H 'Cache-Control: no-cache' -H 'Cookie:...' -H 'Connection: keep-alive' --compressed\");\n}\n")])])]),n("p",[t._v("最后再通过正则表达式来分析这些页面中的包含的技术关键词的词频。严格的讲，要统计词频需要进行分词，不过绝大部分技术关键词都是英文的，这里我们简单粗暴的把英文单词提取出来排序。")]),t._v(" "),n("blockquote",[n("p",[t._v("在这种并不是经常进行的、只给自己看的分析工作中，可以更灵活的选择性价比。")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<?php\nforeach( glob( 'pages/*.html') as $file )\n{\n    echo $file .\"\\r\\n\";\n    $content = file_get_contents(  $file );\n    if( $words = get_info( $content ))\n    {\n        foreach( $words as $word )\n        {\n            $word = strtolower( $word );\n\n            // 合并关键词\n            if( $word == 'js' ) $word = 'javascript';\n            if( $word == 'vuejs' ) $word = 'vue';\n            if( $word == 'angularjs' ) $word = 'angular';\n            if( $word == 'reactjs' ) $word = 'react';\n            if( $word == 'node' ) $word = 'nodejs';\n            if( $word == 'h5' ) $word = 'html5';\n            if( $word == 'css3' ) $word = 'css';\n            if( $word == 'css4' ) $word = 'css';\n\n            if( !isset( $count[$word] ) ) $count[$word] = 1;\n            else $count[$word] = intval($count[$word])+1;\n        }\n    }\n    //break;\n}\n\narsort( $count );\nprint_r( $count );\n\n\nfunction get_info( $content )\n{\n    $reg = '/<dd\\sclass=\"job_bt\">(.+?)<\\/dd>/is';\n    if( preg_match($reg, strtolower($content) , $out ))\n    {\n        $out[1] = str_replace( ['&nbsp;','&amp'], [' ',' '] , $out[1] );\n        $text = strip_tags($out[1]);\n        return $words = get_tech_words( $text );\n    }\n\n    return false;\n}\n\nfunction get_tech_words( $string )\n{\n    // 提取英文单词\n    $reg = \"/([A-Za-z][0-9A-Za-z]+)/i\";\n    if( preg_match_all($reg, $string , $out ))\n    {\n        $ret = array_unique($out[0]);\n        return $ret;\n    }\n}\n")])])]),n("p",[t._v("然后我们就得到了招聘前端应届生的公司的精确的需求，虽然里边混有一些非技术关键词，我们可以很容易识别，算是无伤大雅了。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("[javascript] => 152\n[css] => 134\n[web] => 101\n[html5] => 74\n[html] => 72\n[react] => 56\n[jquery] => 52\n[vue] => 50\n[nodejs] => 46\n[angular] => 39\n[ajax] => 35\n[java] => 30\n[php] => 30\n[pc] => 25\n[bootstrap] => 25\n[http] => 24\n[w3c] => 23\n[webpack] => 22\n[python] => 21\n[ui] => 18\n[app] => 17\n[gulp] => 17\n[git] => 16\n[es6] => 15\n[dom] => 14\n[json] => 14\n[xhtml] => 13\n[github] => 12\n[div] => 12\n[xml] => 11\n[mobile] => 11\n[android] => 10\n[native] => 10\n...\n")])])]),n("p",[t._v("可以看到 JavaScript 才是前端工程师的最大诉求；HTML/HTML5 加起来排名第二；然后是 CSS。接下来是几大框架：Vue 、React、jQuery、Angular；再然后是后端语言：Java、PHP、NodeJS。")]),t._v(" "),n("p",[t._v("这对应届生的指导意义非常明显：JS、HTML、CSS 三大块是核心，必须学完才能找到工作（在157个职位里边出现了超过150次）；主流框架也是要掌握的，Vue 和 React 目前正在风头、jQuery 也还没老（超过三分之一的职位要求会其中一种）；后端语言是加分项，NodeJS 和前端最为契合，其次是 Java 和 PHP（近五分之一的职位有提到）。")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://gist.github.com/easychen/adb5e364193f48d9db74a43a77b30a93",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整的列表我放到GitHub上了，可以点这里查看。"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("从上边的例子举一反三，可以很容易的知道诸如「北京地区前端应届生的薪资范围」、「重庆招聘 PHP 的公司都在使用什么技术栈」这些非常具体的问题，从而为自己量身定制对应的面试攻略。")]),t._v(" "),n("h2",{attrs:{id:"均值的意义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#均值的意义"}},[t._v("#")]),t._v(" 均值的意义")]),t._v(" "),n("p",[t._v("需要注意的是，平均值的参考价值非常有限，数据越多，它就离个体值越远。它就像股市的大盘，大盘涨了，你未必能挣钱，只有你买的股票涨了才行。所以应该尽可能具体的去分析数据。")]),t._v(" "),n("p",[t._v("每隔一段时间，也应该去其他公司面试下，面试谈下来的薪资，就是你这只股票的「交易价格」，是你能拿到手的真金白银。")])])}),[],!1,null,null,null);e.default=o.exports}}]);