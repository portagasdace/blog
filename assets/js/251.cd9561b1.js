(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{606:function(e,t,a){"use strict";a.r(t);var s=a(42),v=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"实战篇-5-身份验证设计-使用-jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实战篇-5-身份验证设计-使用-jwt"}},[e._v("#")]),e._v(" 实战篇 5 ：身份验证设计 —— 使用 JWT")]),e._v(" "),a("p",[e._v("在进入店铺，获取到商品列表信息后，从业务的角度，我们将要开始实现用户购物车添加后的订单创建行为。店铺列表、商品列表的数据，任何一个用户的访问，都是一模一样的公共数据。而订单数据则相对显得特殊，它是跟着每一个不同的用户而存在的，并且不允许简单地以接口参数的方式指明某用户的 ID，然后获取该用户的订单信息，或是为该用户创建订单。否则，一旦接口被黑客利用，后果不堪设想。")]),e._v(" "),a("p",[e._v("所以我们需要先学习一下身份验证的设计概念，它是从事后端服务开发所必须掌握的基础知识内容。不同的身份验证实现方法，会伴随有不同的系统安全问题要去了解与注意。")]),e._v(" "),a("p",[e._v("由于身份验证的设计重要性，本小册的内容设计上一共安排了三个小节，来比较细致耐心地介绍用户验证的相关实现方法。")]),e._v(" "),a("h2",{attrs:{id:"为什么需要身份验证-http-协议的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要身份验证-http-协议的特性"}},[e._v("#")]),e._v(" 为什么需要身份验证—— HTTP 协议的特性")]),e._v(" "),a("p",[e._v("HTTP 协议本身是不储存状态（stateless） 的，当我们通过帐号密码验证完登录状态后，当下一个 request 请求时，先前一次请求的状态已经无法获取。然后我们的程序就不知道当前请求的用户是谁，系统就无法为指定的用户提供对应的服务。比如我们本书应用场景中的商品购买订单的创建，就无法获悉订单归属于哪位客户，后续的订单支付亦无从谈起。")]),e._v(" "),a("h2",{attrs:{id:"传统身份验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传统身份验证"}},[e._v("#")]),e._v(" 传统身份验证")]),e._v(" "),a("h3",{attrs:{id:"web-前端所熟悉的传统用户身份验证方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-前端所熟悉的传统用户身份验证方案"}},[e._v("#")]),e._v(" Web 前端所熟悉的传统用户身份验证方案")]),e._v(" "),a("p",[e._v("前端登录，后端根据用户信息生成一个 token，并保存这个 token 和对应的用户 ID 到数据库或 session 中，接着把 token 传给用户，存入浏览器 Cookie，之后浏览器请求带上这个 Cookie，后端根据 Cookie 中的 session 信息来查询用户，验证是否过期。")]),e._v(" "),a("p",[e._v("基于 Cookie 的解决方案，在安全角度考虑，会对 token 加以 HttpOnly 处理，以防止前端客户端直接获取 token，能有效地避免 XSS 攻击。")]),e._v(" "),a("p",[e._v("我们还可以通过设置 secure，来强制要求 Cookie 只允许通过 HTTPS 传输，进一步提高安全级别。但基于 Cookie 的解决方案中，CSRF （跨站请求伪造）的攻击，又成了另一种重灾区，因为当浏览器开着当前站点 "),a("code",[e._v("a.com")]),e._v(" 页面的时候，另一个页面 "),a("code",[e._v("b.com")]),e._v(" 跨站请求 "),a("code",[e._v("a.com")]),e._v(" 的时候，Cookie 会被默认一并发出，从而引发一些不必要的安全漏洞隐患。")]),e._v(" "),a("p",[e._v("常用的解决方案，会配套向页面种入一个 CSRF-TOKEN 来作为一个双重验证。具体的技术细节，不在本小册的侧重范围之内，可以另行查阅资料系统学习。")]),e._v(" "),a("h3",{attrs:{id:"基于传统用户身份验证的设计局限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于传统用户身份验证的设计局限"}},[e._v("#")]),e._v(" 基于传统用户身份验证的设计局限")]),e._v(" "),a("p",[a("strong",[e._v("数据库查询开销增加")])]),e._v(" "),a("p",[e._v("如果将验证信息保存在数据库中，那么每次获取用户标识，就需要根据 token 去数据库反查用户，变相增加数据库开销")]),e._v(" "),a("p",[a("strong",[e._v("服务端内存占用高")])]),e._v(" "),a("p",[e._v("服务端通过 session 方式存储用户的 ID，会占用大量服务器内存，对于业务复杂的应用可能有更多的需要记录保持，一般还需借助 NoSQL 和缓存机制来实现 session 的存储，如果是分布式应用还需 session 共享。增加了不小的整体架构实施复杂度。")]),e._v(" "),a("p",[a("strong",[e._v("兼容问题")])]),e._v(" "),a("p",[e._v("基于 Cookie 的方式，最好的生存土壤是在 Web 浏览器服务环境之中，而对于像小程序、移动客户端的应用，则自身不支持 Cookie，坊间虽有骚套路，可以通过原生代码将登录完后的 Cookie 信息，作客户端本地保持，在后续的每次数据请求时悄悄补上，以实现一种类似 Web 应用的数据通信方式。但其中也或许会变相引起新的安全漏洞问题。")]),e._v(" "),a("h2",{attrs:{id:"基于-jwt-的身份验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-jwt-的身份验证"}},[e._v("#")]),e._v(" 基于 JWT 的身份验证")]),e._v(" "),a("h3",{attrs:{id:"什么是-jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-jwt"}},[e._v("#")]),e._v(" 什么是 JWT")]),e._v(" "),a("p",[e._v("JWT 全称 JSON Web Token，是为了方便在各系统之间安全地传送 JSON 对象格式的信息，而采用的一个开发标准，基于 RFC 7519 定义。服务器在接收到 JWT 之后，可以验证它的合法性，用户登录与否的身份验证便是 JWT 的使用场景之一。")]),e._v(" "),a("p",[e._v("JWT 具有「紧凑」与「自包含」的两大特点:")]),e._v(" "),a("ul",[a("li",[e._v("紧凑（compact）")])]),e._v(" "),a("p",[e._v("由于 JWT 自身体积较小，可以通过 HTTP 请求的 header 中（身份验证时一般放在 "),a("code",[e._v("Authorization")]),e._v(" 字段里）传递，或者通过 URL 传递（少数情况的一次性 JWT 等）。较小的体积也带来了较好的网络传输速度。")]),e._v(" "),a("ul",[a("li",[e._v("自包含（self-contained）")])]),e._v(" "),a("p",[e._v("JWT 的 payload 中能够包含系统所需要的非敏感性关键业务数据，比如用户 ID，避免数据库的查询的次数。")]),e._v(" "),a("h3",{attrs:{id:"jwt-的构成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt-的构成"}},[e._v("#")]),e._v(" JWT 的构成")]),e._v(" "),a("p",[e._v("JSON Web Token 由 header、payload、signature 三部分组成，使用点号 . 分隔，下面是一段典型的 JWT 串:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# header\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.\n# payload\neyJ1c2VySWQiOjEsImV4cCI6MTUzNTMyMjc0NSwiaWF0IjoxNTM0NzE3OTQ1fQ.\n# signature\n6tOdn2R82bxJbXjAnwU5g4g9EKqGNe-qo4qCo6UZnQ4\n\n")])])]),a("p",[a("strong",[e._v("header")])]),e._v(" "),a("p",[e._v("JWT 第一部分 header 指定了该 JWT 使用的签名算法：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{ "alg": "HS256", "typ":"JWT" }\n\n')])])]),a("p",[a("strong",[e._v("payload")])]),e._v(" "),a("p",[e._v("JWT 的第二部分 payload 包含了该 JWT 的签发内容信息。以如上述 JWT 串为例，被解码之后，可以得到如下信息，包涵有用户 ID，JWT 过期时间 exp，JWT 签发时间 "),a("code",[e._v("iat")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "userId": 1,\n  "exp": 1535322745,\n  "iat": 1534717945\n}\n\n')])])]),a("p",[e._v("其中 JWT 的规范有一套预设的标准注册声明，非必要项，在业务场景需要的时候加入：")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("iss")]),e._v("(issuer)：JWT 的签发者")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("sub")]),e._v("(subject)：JWT 所面向的用户")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("aud")]),e._v("(audience)：接收 JWT 的一方")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("exp")]),e._v("(expiresIn)：JWT 的过期时间，这个时间必须大于签发时间")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("nbf")]),e._v("(notBefore)：定义在什么时间之前，该 JWT 都是不可用的")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("iat")]),e._v("(issuedAt)：JWT 的签发时间")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("jti")]),e._v("(jwtid)：JWT 的唯一身份标识，主要用来作为一次性 token，从而避免重放攻击")])])]),e._v(" "),a("p",[e._v("其他的信息数据，可以在 payload 中额外追加，避免与预设保留字冲突就好。")]),e._v(" "),a("p",[e._v("注意 ："),a("em",[e._v("对于已签发的 JWT, 尽管信息是可以受到下文 signature 的签名防篡改保护，但 payload 部分的内容，依旧任何人都可以 decode 解码阅读。故而不要在 payload 中存放诸如密码密秘类的安全敏感数据。")])]),e._v(" "),a("p",[a("strong",[e._v("signature")])]),e._v(" "),a("p",[e._v("JWT 的第三部分 signature 用来验证签发数据的合法性，是否存在第三方篡改伪造行为。由 header + payload + 签发 secret 组合而成。有心的读者可以发现，其中的参数条件 header 和 payload 皆为 base64 的编码内容，base64 是一种可双向的编码算法，所以不具备数据安全性。唯有 secret 的参数条件，在 JWT 最终的生成串中并不公开，所以在服务端保管好 secret 的签发字符串的私密性尤为重要，随意地将其提交进 git 的代码版本库，是一种极度不严谨行为。 以 HS256 算法为例，signature 的签发算法如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)\n\n')])])]),a("p",[e._v("任何不知道 Secret 秘钥的 JWT 伪造方，虽然可以构造相似的 header 和 payload，却无法签出正确的 signature，最终都会在应用服务器端校验 signature 合法性的时候被拒绝。也正是这样的机制，确保了 JWT 可以作为用户身份验证的技术解决方案之一。")]),e._v(" "),a("p",[e._v("Secret 的秘钥签发，可以通过一些在线的 AES 加密工具来生成一串长度 32 或 64 的随机字符串。比如： "),a("a",{attrs:{href:"http://tool.oschina.net/encrypt/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://tool.oschina.net/encrypt/"),a("OutboundLink")],1),e._v(" 。太长的字符串会一定程度上影响 jwt 验证的计算效率，所以找寻一个平衡点为宜。")]),e._v(" "),a("h3",{attrs:{id:"基于-jwt-的身份验证的好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-jwt-的身份验证的好处"}},[e._v("#")]),e._v(" 基于 JWT 的身份验证的好处")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("跨语言性")]),e._v("：payload 数据结构基于 JSON，可以被任何主流语言支持。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("免疫 CSRF")]),e._v("：对 Cookie 的不依赖性，决定了天然免疫 CSRF 攻击。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("可跨域性")]),e._v("：同样是对 Cookie 的不依赖性，决定了更好的跨域支持与独立服务化属性。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("多端适配")]),e._v("：iOS， Android，微信小程序等非网页客户端，Cookie 是不被支持的，JWT 的认证机制则会简单很多。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("去耦可扩展性")]),e._v("：JWT 可以在任何拥有正确 secret 私钥的 API 服务环境被身份验证和使用，便于微服务拆分。")])])]),e._v(" "),a("h3",{attrs:{id:"基于-jwt-身份验证的注意项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-jwt-身份验证的注意项"}},[e._v("#")]),e._v(" 基于 JWT 身份验证的注意项")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("不要在 JWT 的 payload 中签入敏感信息")])]),e._v(" "),a("li",[a("p",[e._v("保护好 secret 秘钥")])]),e._v(" "),a("li",[a("p",[e._v("使用 HTTPS 传输 JWT")])]),e._v(" "),a("li",[a("p",[e._v("设置较短的 JWT 失效时间，并结合一个失效较长的 JWT RefreshToken 组合为宜。因为 JWT 无法轻易失效已签发的合法 JWT")])])]),e._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),a("p",[e._v("关键词：Cookie-session，XSS 攻击，CSRF 攻击，JWT")]),e._v(" "),a("p",[e._v("本小节的内容比较晦涩，涉及的话题内容比较抽象，之前没有接触过这一块知识点的同学可能会产生阅读晕眩感。不用担心，先有一个大致内容浏览的概念，在完成下一节的编码实战之后，来回顾一下本小节中提到的 JWT 技术特点，会得到更好的认知理解。")])])}),[],!1,null,null,null);t.default=v.exports}}]);