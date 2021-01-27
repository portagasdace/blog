(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{605:function(e,a,t){"use strict";t.r(a);var s=t(42),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"实战篇-3-表结构设计、迁移与数据填充-使用-sequelize-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实战篇-3-表结构设计、迁移与数据填充-使用-sequelize-cli"}},[e._v("#")]),e._v(" 实战篇 3：表结构设计、迁移与数据填充 —— 使用 Sequelize-cli")]),e._v(" "),t("p",[e._v("要实现小程序的店铺与商品列表信息展示的业务功能，离不开数据库的支持。数据库的连接创建、表结构的初始化、起始数据的填充都是需要解决的基础技术问题。")]),e._v(" "),t("h2",{attrs:{id:"业务数据表结构设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#业务数据表结构设计"}},[e._v("#")]),e._v(" 业务数据表结构设计")]),e._v(" "),t("h3",{attrs:{id:"表结构设计的话题背景约定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表结构设计的话题背景约定"}},[e._v("#")]),e._v(" 表结构设计的话题背景约定")]),e._v(" "),t("p",[e._v("考虑到本小册的篇幅所限，并且话题的重心在 Node.js 案例的整体技术架构的设计，数据库层面的表结构设计、细节字段数据类型的优化，不作为本小册的重点，读者朋友可以通过其他的教程资料，来更好地系统学习数据库表结构设计与优化的相关知识。")]),e._v(" "),t("h3",{attrs:{id:"设计店铺表和商品表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计店铺表和商品表"}},[e._v("#")]),e._v(" 设计店铺表和商品表")]),e._v(" "),t("p",[t("strong",[e._v("店铺表")]),e._v("：展示店铺名称、图标 URL。")]),e._v(" "),t("p",[e._v("字段")]),e._v(" "),t("p",[e._v("字段类型")]),e._v(" "),t("p",[e._v("字段说明")]),e._v(" "),t("p",[e._v("id")]),e._v(" "),t("p",[e._v("integer")]),e._v(" "),t("p",[e._v("店铺的 ID，自增")]),e._v(" "),t("p",[e._v("name")]),e._v(" "),t("p",[e._v("varchar(255)")]),e._v(" "),t("p",[e._v("店铺的名称")]),e._v(" "),t("p",[e._v("thumb_url")]),e._v(" "),t("p",[e._v("varchar(255)")]),e._v(" "),t("p",[e._v("店铺的图片")]),e._v(" "),t("p",[e._v("created_at")]),e._v(" "),t("p",[e._v("datetime")]),e._v(" "),t("p",[e._v("记录的创建时间")]),e._v(" "),t("p",[e._v("updated_at")]),e._v(" "),t("p",[e._v("datetime")]),e._v(" "),t("p",[e._v("记录的更新时间")]),e._v(" "),t("p",[t("strong",[e._v("商品表")]),e._v("：展示商品名称、图标 URL、商品单价。")]),e._v(" "),t("p",[e._v("字段")]),e._v(" "),t("p",[e._v("字段类型")]),e._v(" "),t("p",[e._v("字段说明")]),e._v(" "),t("p",[e._v("id")]),e._v(" "),t("p",[e._v("integer")]),e._v(" "),t("p",[e._v("商品的 ID，自增")]),e._v(" "),t("p",[e._v("name")]),e._v(" "),t("p",[e._v("varchar(255)")]),e._v(" "),t("p",[e._v("商品的名称")]),e._v(" "),t("p",[e._v("thumb_url")]),e._v(" "),t("p",[e._v("varchar(255)")]),e._v(" "),t("p",[e._v("商品的图片")]),e._v(" "),t("p",[e._v("shop_id")]),e._v(" "),t("p",[e._v("integer")]),e._v(" "),t("p",[e._v("店铺的 ID")]),e._v(" "),t("p",[e._v("created_at")]),e._v(" "),t("p",[e._v("datetime")]),e._v(" "),t("p",[e._v("记录的创建时间")]),e._v(" "),t("p",[e._v("updated_at")]),e._v(" "),t("p",[e._v("datetime")]),e._v(" "),t("p",[e._v("记录的更新时间")]),e._v(" "),t("h2",{attrs:{id:"mysql-与-sequelize"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-与-sequelize"}},[e._v("#")]),e._v(" MySQL 与 Sequelize")]),e._v(" "),t("p",[e._v("本小册的案例所使用的数据库为 MySQL 5.6。Sequelize 则是 Node.js 生态中一款知名的基于 promise 数据库 ORM 插件，提供了大量常用数据库增删改查的函数式 API，以帮助我们在实际开发中，大量减少书写冗长的基础数据库查询语句。")]),e._v(" "),t("p",[e._v("Sequelize 支持的数据库有：PostgreSQL，MySQL，MariaDB，SQLite 和 MSSQL。在使用不同的数据库时候，需要我们开发者额外安装不同的对应数据库连接驱动，比如我们小册中使用的 MySQL，则依赖于插件 MySQL2 。")]),e._v(" "),t("h2",{attrs:{id:"sequelize-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sequelize-cli"}},[e._v("#")]),e._v(" Sequelize-cli")]),e._v(" "),t("p",[e._v("Sequelize 插件的主要应用场景是实际应用开发过程中的代码逻辑层。与其相伴的还有一套 cli 工具，Sequelize-cli，提供了一系列好用的终端指令，来帮助我们完成一些常用的琐碎任务。")]),e._v(" "),t("h3",{attrs:{id:"_1-安装依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装依赖"}},[e._v("#")]),e._v(" 1.安装依赖")]),e._v(" "),t("p",[e._v("考虑到我们的系统案例使用 MySQL 作为基础数据库，安装如下依赖：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm i sequelize-cli -D\nnpm i sequelize\nnpm i mysql2\n\n")])])]),t("h3",{attrs:{id:"_2-sequelize-init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-sequelize-init"}},[e._v("#")]),e._v(" 2.sequelize init")]),e._v(" "),t("p",[e._v("通过 sequelize-cli 初始化 sequelize，我们将得到一个好用的初始化结构：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("node_modules/.bin/sequelize init\n\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("├── config                       # 项目配置目录\n|   ├── config.json              # 数据库连接的配置\n├── models                       # 数据库 model\n|   ├── index.js                 # 数据库连接的样板代码\n├── migrations                   # 数据迁移的目录\n├── seeders                      # 数据填充的目录\n\n")])])]),t("p",[t("strong",[e._v("config/config.json")])]),e._v(" "),t("p",[e._v("默认生成文件为一个 config.json 文件，文件里配置了开发、测试、生产三个默认的样板环境，我们可以按需再增加更多的环境配置。但考虑到前面的章节，我们所讨论的环境变量配置，用来更灵活地管理数据库的连接端口、用户名、密码等，sequelize-cli 也兼容脚本模式的 config.js 的形式，JavaScript 脚本可以方便我们在配置中加入更多的动态内容。")]),e._v(" "),t("p",[e._v("修改后的 config/config.js 如下，仅预留了 development（开发） 与 production（生产） 两个环境，开发环境与生产环境的配置参数可以分离在 .env 和 .env.prod 两个不同的文件里，通过环境变量参数 "),t("code",[e._v("process.env.NODE_ENV")]),e._v(" 来动态区分。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// config/config.js\nif (process.env.NODE_ENV === \'production\') {\n  require(\'env2\')(\'./.env.prod\');\n} else {\n  require(\'env2\')(\'./.env\');\n}\n\n\nconst { env } = process;\n\nmodule.exports = {\n  "development": {\n    "username": env.MYSQL_USERNAME,\n    "password": env.MYSQL_PASSWORD,\n    "database": env.MYSQL_DB_NAME,\n    "host": env.MYSQL_HOST,\n    "port": env.MYSQL_PORT,\n    "dialect": "mysql",\n    "operatorsAliases": false,  // 此参数为自行追加，解决高版本 sequelize 连接警告\n  },  \n  "production": {\n    "username": env.MYSQL_USERNAME,\n    "password": env.MYSQL_PASSWORD,\n    "database": env.MYSQL_DB_NAME,\n    "host": env.MYSQL_HOST,\n    "port": env.MYSQL_PORT,\n    "dialect": "mysql",\n    "operatorsAliases": false, // 此参数为自行追加，解决高版本 sequelize 连接警告\n  }\n}\n\n')])])]),t("blockquote",[t("p",[e._v("由于 sequelize-cli 自动生成的配置 config/config.js 中为了兼容老版本模式，并未显式将 operatorsAliases 的映射关系给关闭，所以，会收到一条运行警告 sequelize deprecated String based operators are now deprecated ...。官方明确指出 ne, not, in, notIn, gte, gt, lte, lt, like, ilike, $ilike, nlike, $notlike, notilike, .., between, !.., notbetween, nbetween, overlap, &&, @>, <@ 这些映射操作符，将在未来的版本被移除。 。如果希望遵循官方未来更倾向的操作符使用方式，则可以将之设为 false 。")])]),e._v(" "),t("p",[t("strong",[e._v("models 目录与 models/index.js")])]),e._v(" "),t("p",[e._v("用于定义数据库表结构对应关系的模块目录，sequelize-cli 会在 models 目录中自动生成一个 index.js，该模块会自动读取 config/config.js 中的数据库连接配置，并且动态加载未来在 models 目录中所增加的数据库表结构定义的模块，最终可以方便我们通过 models.tableName.operations 的形式来展开一系列的数据库表操作行为，具体的使用，我们放在下一章节细讲。")]),e._v(" "),t("p",[t("strong",[e._v("migrations 目录")])]),e._v(" "),t("p",[e._v("用于通过管理数据库表结构迁移的配置目录。初始化完成后目录中暂无内容。")]),e._v(" "),t("p",[t("strong",[e._v("seeders 目录")])]),e._v(" "),t("p",[e._v("用于在数据库完成 migrations 初始化后，填补一些打底数据的配置目录。初始化完成后目录中暂无内容。")]),e._v(" "),t("h3",{attrs:{id:"_3-sequelize-db-create"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-sequelize-db-create"}},[e._v("#")]),e._v(" 3.sequelize db:create")]),e._v(" "),t("p",[e._v("根据前文，我们配置了 config/config.js 中的数据库连接信息，分别有开发环境与生产环境两个。执行下面的命令，可以默认使用 development 下的配置，来创建项目数据库。增加例如 "),t("code",[e._v("--env production")]),e._v("，则使用 config/config.js 中的 production 项配置，来完成数据库的创建。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("node_modules/.bin/sequelize db:create\n\n# 通过 --env 参数，指定为生产环境创建项目数据库\n# node_modules/.bin/sequelize db:create --env production\n\n")])])]),t("h2",{attrs:{id:"migrate-数据迁移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrate-数据迁移"}},[e._v("#")]),e._v(" migrate 数据迁移")]),e._v(" "),t("h3",{attrs:{id:"_1-sequelize-migration-create"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-sequelize-migration-create"}},[e._v("#")]),e._v(" 1. sequelize migration:create")]),e._v(" "),t("p",[e._v("数据库被创建完成后，数据表的创建，初学者的时候，我们或许会借助于诸如 navicat 之类的 GUI 工具，通过图形化界面的引导，来完成一张一张的数据库表结构定义。这样的编辑手法能达成目的，但是对于一个持续迭代，长期维护的数据库而言，表结构的调整，字段的新增，回退，缺乏一种可追溯的程序化迁移管理，则会陷入各种潜在人为操作过程中的风险。")]),e._v(" "),t("p",[e._v("Migration 迁移的功能的出现，正是为了解决上述人为操作所不可追溯的管理痛点。Migration 就像我们使用 Git / SVN 来管理源代码的更改一样，来跟踪数据库表结构的更改。 通过 migration，我们可以将现有的数据库表结构迁移到另一个表结构定义，反之亦然。这些表结构的转换，将保存在数据库的迁移文件定义中，它们描述了如何进入新状态以及如何还原更改以恢复旧状态。")]),e._v(" "),t("p",[e._v("以"),t("strong",[e._v("店铺表 shops")]),e._v("的定义设计为例。我们需要为数据库创建一张 shops 新表，表结构如描述。")]),e._v(" "),t("p",[e._v("使用 "),t("code",[e._v("sequelize migration:create")]),e._v(" 来创建一个迁移文件 create-shops-table。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("node_modules/.bin/sequelize migration:create --name create-shops-table\n\n")])])]),t("p",[e._v("在 migrations 的目录中，会新增出一个 xxxxxxxxx-create-shops-table.js 的迁移文件，xxxxxxxxx 为迁移表文件创建的时间戳，用来备注标记表结构改变的时间顺序。自动生成的文件里，包涵有 "),t("code",[e._v("up")]),e._v(" 与 "),t("code",[e._v("down")]),e._v(" 两个空函数， "),t("code",[e._v("up")]),e._v(" 用于定义表结构正向改变的细节，"),t("code",[e._v("down")]),e._v(" 则用于定义表结构的回退逻辑。比如 "),t("code",[e._v("up")]),e._v(" 中有 "),t("code",[e._v("createTable")]),e._v(" 的建表行为，则 "),t("code",[e._v("down")]),e._v(" 中配套有一个对应的 "),t("code",[e._v("dropTable")]),e._v(" 删除表行为。")]),e._v(" "),t("p",[e._v("create-shops-table 表定义如下（由于笔者的项目用例代码中开启了 Airbnb 的 eslint 语法规范检查，所以，实际的用例代码，会与 sequelize-cli 生成的默认结构略有不同）：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// xxxxxxxxx-create-shops-table.js\nmodule.exports = {\n  up: (queryInterface, Sequelize) => queryInterface.createTable(\n    'shops',\n    {\n      id: {\n        type: Sequelize.INTEGER,\n        autoIncrement: true,\n        primaryKey: true,\n      },\n      name: {\n        type: Sequelize.STRING,\n        allowNull: false,\n      },\n      thumb_url: Sequelize.STRING,\n      created_at: Sequelize.DATE,\n      updated_at: Sequelize.DATE,\n    },\n  ),\n\n  down: queryInterface => queryInterface.dropTable('shops'),\n};\n\n\n")])])]),t("p",[e._v("同理创建商品 goods 的迁移文件:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("node_modules/.bin/sequelize migration:create --name create-goods-table\n\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// migrations/xxxxxxxxx-create-goods-table.js\n\nmodule.exports = {\n  up: (queryInterface, Sequelize) => queryInterface.createTable(\n    'goods',\n    {\n      id: {\n        type: Sequelize.INTEGER,\n        autoIncrement: true,\n        primaryKey: true,\n      },\n      shop_id: {\n        type: Sequelize.INTEGER,\n        allowNull: false,\n      },\n      name: {\n        type: Sequelize.STRING,\n        allowNull: false,\n      },\n      thumb_url: Sequelize.STRING,\n      created_at: Sequelize.DATE,\n      updated_at: Sequelize.DATE,\n    },\n  ),\n\n  down: queryInterface => queryInterface.dropTable('goods'),\n};\n\n\n")])])]),t("h3",{attrs:{id:"_2-sequelize-db-migrate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-sequelize-db-migrate"}},[e._v("#")]),e._v(" 2. sequelize db:migrate")]),e._v(" "),t("p",[t("code",[e._v("sequelize db:migrate")]),e._v(" 的命令，可以最终帮助我们将 migrations 目录下的迁移行为定义，按时间戳的顺序，逐个地执行迁移描述，最终完成数据库表结构的自动化创建。并且，在数据库中会默认创建一个名为 SequelizeMeta 的表，用于记录在当前数据库上所运行的迁移历史版本。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("node_modules/.bin/sequelize db:migrate\n\n")])])]),t("h3",{attrs:{id:"_3-sequelize-db-migrate-undo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-sequelize-db-migrate-undo"}},[e._v("#")]),e._v(" 3. sequelize db:migrate:undo")]),e._v(" "),t("p",[t("code",[e._v("sequelize db:migrate:undo")]),e._v(" 则可以帮助我们按照 "),t("code",[e._v("down")]),e._v(" 方法中所定义的规则，回退一个数据库表结构迁移的状态，读者朋友可以自行尝试。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("node_modules/.bin/sequelize db:migrate:undo\n\n")])])]),t("p",[e._v("通过使用 "),t("code",[e._v("sequelize db:migrate:undo:all")]),e._v(" 命令撤消所有迁移，可以恢复到初始状态。 我们还可以通过将其名称传递到 "),t("code",[e._v("--to")]),e._v(" 选项中来恢复到特定的迁移。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("node_modules/.bin/sequelize db:migrate:undo:all --to xxxxxxxxx-create-shops-table.js\n\n")])])]),t("h3",{attrs:{id:"_4-向表中追加字段-扩展阅读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-向表中追加字段-扩展阅读"}},[e._v("#")]),e._v(" 4. 向表中追加字段（扩展阅读）")]),e._v(" "),t("p",[e._v("并非所有的迁移场景都是创建新表，随着业务的不断深入展开，表结构的字段新增，也是常见的需求。比如店铺 shops 表中增加一列 "),t("code",[e._v("address")]),e._v(" 地址信息。")]),e._v(" "),t("p",[e._v("创建一个名叫 add-columns-to-shops-table 的迁移迁移文件：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("node_modules/.bin/sequelize migration:create --name add-columns-to-shops-table\n\n")])])]),t("p",[e._v("然后我们向该文件中添加如下代码：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("module.exports = {\n  up: (queryInterface, Sequelize) => Promise.all([\n    queryInterface.addColumn('shops', 'address', { type: Sequelize.STRING }),\n  ]),\n\n  down: queryInterface => Promise.all([\n    queryInterface.removeColumn('shops', 'address'),\n  ]),\n};\n\n")])])]),t("blockquote",[t("p",[t("strong",[e._v("GitHub 参考代码")]),e._v(" "),t("a",{attrs:{href:"https://github.com/yeshengfei/hapi-tutorial/tree/master/chapter7/hapi-tutorial-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("chapter7/hapi-tutorial-1"),t("OutboundLink")],1)])]),e._v(" "),t("blockquote",[t("p",[e._v("更多功能请查看 "),t("a",{attrs:{href:"http://docs.sequelizejs.com/class/lib/query-interface.js~QueryInterface.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QueryInterface API"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"seeders-种子数据填充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#seeders-种子数据填充"}},[e._v("#")]),e._v(" seeders 种子数据填充")]),e._v(" "),t("p",[e._v("数据库表结构初始化完，如果我们想要向表中初始化一些基础数据，我们可以使用 seeders 来完成，使用方式与数据库表结构迁移相似。")]),e._v(" "),t("h3",{attrs:{id:"_1-sequelize-seed-create"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-sequelize-seed-create"}},[e._v("#")]),e._v(" 1. sequelize seed:create")]),e._v(" "),t("p",[e._v("下面让我们 shops 表为例，为表中添加些基础数据：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("node_modules/.bin/sequelize seed:create --name init-shops\n\n")])])]),t("p",[e._v("这个命令将会在 "),t("code",[e._v("seeders")]),e._v(" 文件夹中创建一个种子文件。文件名看起来像是 "),t("code",[e._v("xxxxxxxxx-init-shops.js")]),e._v("，它遵循相同的 "),t("code",[e._v("up/down")]),e._v(" 语义，如迁移文件。")]),e._v(" "),t("p",[e._v("向该文件中添加如下内容：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// seeders/xxxxxxxxx-init-shops.js\n\nconst timestamps = {\n  created_at: new Date(),\n  updated_at: new Date(),\n};\n\nmodule.exports = {\n  up: queryInterface => queryInterface.bulkInsert(\n    'shops',\n    [\n      { id: 1, name: '店铺1', thumb_url: '1.png', ...timestamps },\n      { id: 2, name: '店铺2', thumb_url: '2.png', ...timestamps },\n      { id: 3, name: '店铺3', thumb_url: '3.png', ...timestamps },\n      { id: 4, name: '店铺4', thumb_url: '4.png', ...timestamps },\n    ],\n    {},\n  ),\n\n  down: (queryInterface, Sequelize) => {\n    const { Op } = Sequelize;\n    // 删除 shop 表 id 为 1，2，3，4 的记录\n    return queryInterface.bulkDelete('shops', { id: { [Op.in]: [1, 2, 3, 4] } }, {});\n  },\n};\n\n\n")])])]),t("h3",{attrs:{id:"_2-sequelize-db-seed-all"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-sequelize-db-seed-all"}},[e._v("#")]),e._v(" 2. sequelize db:seed:all")]),e._v(" "),t("p",[e._v("与 "),t("code",[e._v("db:migrate")]),e._v(" 相似，执行 "),t("code",[e._v("sequelize db:seed:all")]),e._v(" ，将向数据库填充 seeders 目录中所有 "),t("code",[e._v("up")]),e._v(" 方法所定义的数据。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("node_modules/.bin/sequelize db:seed:all\n\n")])])]),t("p",[e._v("注意: "),t("em",[e._v("seeders 的执行，不会将状态存储在 SequelizeMeta 表中。")])]),e._v(" "),t("p",[e._v("当然，我们也可以通过 "),t("code",[e._v("--seed")]),e._v(" 来制定特定的 seed 配置来做填充：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("node_modules/.bin/sequelize db:seed --seed xxxxxxxxx-init-shopsjs\n\n")])])]),t("h3",{attrs:{id:"_3-sequelize-db-seed-undo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-sequelize-db-seed-undo"}},[e._v("#")]),e._v(" 3. sequelize db:seed:undo")]),e._v(" "),t("p",[e._v("Seeders 所填充的数据，也与迁移的 "),t("code",[e._v("db:migrate:undo")]),e._v(" 相仿，只是不会进入 SequelizeMeta 记录。两个可用的命令如下，很简单，不再赘述：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n# 撤销所有的种子\nnode_modules/.bin/sequelize db:seed:undo:all\n\n# 撤销指定的种子\nnode_modules/.bin/sequelize db:seed:undo --seed XXXXXXXXXXXXXX-demo-user.js\n\n")])])]),t("p",[e._v("GitHub 参考代码 "),t("a",{attrs:{href:"https://github.com/yeshengfei/hapi-tutorial/tree/master/chapter7/hapi-tutorial-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("chapter7/hapi-tutorial-2"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("以上，我们利用 sequelize-cli 完成了数据库的创建、迁移、填充。")]),e._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),t("p",[e._v("关键词：sequelize-cli，migrate，seed")]),e._v(" "),t("p",[e._v("本小节我们学习了如何利用 sequelize-cli 通过程序脚本 migrate 自动创建既定数据结构的数据库，以及利用 seed 填充起始数据。这些方法有效地帮助我们保证了不同系统环境下，通过 migrate 与 seed 得到的数据库环境的一致性，并且最大化地降低了人为手动操作的意外风险。")]),e._v(" "),t("p",[t("strong",[e._v("本小节参考代码汇总")])]),e._v(" "),t("p",[e._v("migrate 数据迁移：GitHub 参考代码 "),t("a",{attrs:{href:"https://github.com/yeshengfei/hapi-tutorial/tree/master/chapter7/hapi-tutorial-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("chapter7/hapi-tutorial-1"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("更多功能 "),t("a",{attrs:{href:"http://docs.sequelizejs.com/class/lib/query-interface.js~QueryInterface.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QueryInterface API"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("seeders 种子数据填充：GitHub 参考代码 "),t("a",{attrs:{href:"https://github.com/yeshengfei/hapi-tutorial/tree/master/chapter7/hapi-tutorial-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("chapter7/hapi-tutorial-2"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);