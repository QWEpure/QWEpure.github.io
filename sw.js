/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/16/help/index.html","a02af22625ab38dc93d4b25b3c42815e"],["/2023/10/16/statement/index.html","2754583acf1e1e484a37e1a350eede71"],["/2023/10/16/test/index.html","d9d760b95114ac574935bab98b13847c"],["/2023/10/22/排序/index.html","0757c1ff4b05b755fd7bbddc0c6d5ff1"],["/2023/10/23/python语法/index.html","3e2bec3fac4f0b6a7aec039415989df0"],["/2023/10/26/关于python的链表/index.html","ff722751f37353f6be4fbac90388991e"],["/2023/11/16/动态规划/index.html","8fea143b05ca07c27890eea11754ecaf"],["/2023/11/17/text/index.html","ee2ffc5aead34c4f5d65de6614f670bc"],["/2023/12/20/正则表达式/index.html","2f9a23058f05ef462fb346debb6ab040"],["/2024/02/18/app/index.html","d2ab0a443958cc3c2990c6d34899fbc9"],["/2024/02/22/数论专题/index.html","bf004cae8e992acfba5f0dab9a44b131"],["/2024/03/04/python数据结构的定义/index.html","e7211872ba07949b66acd86a20a7ef12"],["/2024/03/17/Untitled 1/index.html","7f60e06e24783615ccdcd3beaa71edfb"],["/2024/03/21/前缀和与差分/index.html","6e0e8ba4199ba659a35eefabb353d2a0"],["/2024/03/25/高级数据结构/index.html","4804f0114bc1002f703c8395897d8f80"],["/2024/04/01/最小生成树/index.html","b43e6dfd206696dfcc3edf32f05f8c68"],["/2024/04/02/深度和广度搜索/index.html","74379dfa723fbcbb263b10547e2b4149"],["/2024/04/10/进制/index.html","ec29e82387bd64f0e6e5ebf865524d06"],["/2024/04/15/日期/index.html","0f141cd50c3b2be1e7d32d80c213095b"],["/2024/04/18/c++语法/index.html","dd15609a3a5a3cbbec846a4f411a9c73"],["/2024/04/18/java语法/index.html","ca6f56b335a503ed77fc3aa5a53c88ff"],["/2024/04/18/python坑点/index.html","132d4ae96c2a6f72f2988702ae497075"],["/2024/04/18/位运算/index.html","f6032713154fff73427f1fd15b6aa6d6"],["/2024/04/18/双指针和滑动窗口/index.html","b6eeac2c0aa241e4c2c90d106733ab5d"],["/2024/04/18/模拟/index.html","71d04a78d63caa1f9bef1920c47e9ca1"],["/2024/04/29/数据分析/index.html","25af678b3768e6c63157a7e3b056c8bb"],["/2024/05/05/Untitled 2/index.html","5e520be64e5b2a4ac8a0681d6eaab3e5"],["/2024/05/23/python爬虫/index.html","24a7d9388ae3e1e72c7274f414624df2"],["/2024/05/23/爬虫数据分析案例/index.html","b2dc90869561250b8036de04a02cae6a"],["/2024/05/25/Jupyter notebook快速上手/index.html","2a9f1c2a49ea40bcd4376edab40cbbde"],["/2024/06/13/Untitled 3/index.html","dffc9ac981225584e7a457d0bdce03c9"],["/2024/06/13/pyecharts/index.html","c229da96cd8f044e7ed3ec85a2281dea"],["/2024/06/23/爬虫/index.html","5da46c86694c85723d48f3d6ad4c81f4"],["/2024/08/09/踩过的坑/index.html","bf7804e47c747c6da05e184ae66b287a"],["/2024/09/01/刷题/index.html","9e5f8049b64bc82edd33712009caa786"],["/2024/11/22/java项目/index.html","6f3acd2d76efe78ec162043d71a7e745"],["/2024/12/07/记忆化递归/index.html","69c05928eb57e4b35b4e70b573b55fd9"],["/2025/02/02/比赛时好用的函数/index.html","faef742e0555e313f1bfc16f9cf96a4d"],["/2025/02/09/数据结构模板/index.html","ab1e152a3ab49f5c1113284d0be5bd5f"],["/2025/02/19/二分/index.html","95e61b9dc83e16ccc919a9708810e1e2"],["/2025/02/19/用来优化的算法/index.html","09a51dfcdfd78a8a31f430e6e6f450b0"],["/2025/03/16/矩阵快速幂/index.html","e0d545713d6eb8609120b61ada543325"],["/2025/04/06/python蓝桥真题/index.html","78d742c85d7a9d38b8ccccf7e3bbf7ac"],["/2026/01/04/c/index.html","2a03bc8b4eb904ed07edd765b0c07842"],["/2026/01/04/c语言局限性和实践/index.html","38b542df124567b572a633013dbb0c60"],["/404.html","51baa11b65db3c24d9226c8fce41480c"],["/about/index.html","d972b12e60ad19f01d24f7e6fa368ff8"],["/archives/2023/10/index.html","61b3887fbbbfd09f1a01f30db0345a63"],["/archives/2023/11/index.html","7ce1c1577d3ba99bf4e64e2a9ca8489b"],["/archives/2023/12/index.html","c666f0e664255c58db953e59e55210da"],["/archives/2023/index.html","19fdcc8eca75e9493beb26d821a8bae6"],["/archives/2024/02/index.html","b58501ff68befb5bb4e3be057875cc4b"],["/archives/2024/03/index.html","0bc6b6966c15486ee185bcddcadbc3fb"],["/archives/2024/04/index.html","f3d3c162015fa91b18c074ba41661a79"],["/archives/2024/04/page/2/index.html","b7bdd3009b166bceca61f77049956499"],["/archives/2024/05/index.html","63d17bf7f41861dcff913351f89fc838"],["/archives/2024/06/index.html","b2d34cdaff75bd1877deb41711e7f4ff"],["/archives/2024/08/index.html","9d92f346233c91bdc8acbcc56c68502e"],["/archives/2024/09/index.html","d1a5db04b79612a9e74dc7f643a74125"],["/archives/2024/11/index.html","0ab4beabe9643cf7d893b22a366c5d59"],["/archives/2024/12/index.html","4bbc318d16388caf0fbbc0c31abbaacc"],["/archives/2024/index.html","2bf967dac9fb8cfd12c334cbce6e4a9c"],["/archives/2024/page/2/index.html","1856305e87f3856ed0536462792ea47f"],["/archives/2024/page/3/index.html","86072416108144e01f1b1837a123e71c"],["/archives/2025/02/index.html","b43942f8b5289c9c99e49449a287ee91"],["/archives/2025/03/index.html","3cba5981b3ec6327bd5620562180561b"],["/archives/2025/04/index.html","3e01524c4a20188ea0bf4909e9042578"],["/archives/2025/index.html","cafebca310bace58b4d714562e44ec1d"],["/archives/2026/01/index.html","40e0b2475b1d0134b4a8fa472d9eca8b"],["/archives/2026/index.html","67bf30ad545f46b889babe4b2d0a2a97"],["/archives/index.html","251418b7fb6fb7b170081a1de1feb19f"],["/archives/page/2/index.html","4524059140737360d8ea35f3da9825e3"],["/archives/page/3/index.html","3d42a97365fb431ea612f5bd6859af78"],["/archives/page/4/index.html","2629fc124bb52982b7be2d20cf655a18"],["/archives/page/5/index.html","b421a25b5761db2a01873c5fb86c6869"],["/assets/build/styles.css","f9e278c312edf04a8ba87303c2579dc6"],["/assets/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/assets/odometer-theme-minimal.css","d50a198c326f1767cdaecdb7c67b392d"],["/categories/AC/index.html","734a2970b7dc126ff59c21ebe5b6e0d2"],["/categories/AC/page/2/index.html","6038244cedc0aa4101e8e3fcd6bc88d9"],["/categories/AC/题型/index.html","5b6cb7f03acc29d26093546f26004181"],["/categories/AC/题型/page/2/index.html","69e4f83dfe920724a8334bc6d5ec2157"],["/categories/c/index.html","fad478ed877e8e27bc116223bcbcd912"],["/categories/help/index.html","2af90fe1fb7dba6440cbf7cd20afc45c"],["/categories/index.html","aadea276cc611493942f642d99706b0f"],["/categories/python/index.html","2083bb2b322b58b041c7ef062e7a2654"],["/categories/开发/index.html","7d26b1aaa76c69eb4af79fc11cf01e1b"],["/categories/开发/java/index.html","472d3e5ae7b31626927fd35f6321a68c"],["/categories/数据结构/index.html","a79774eb21052a393b9b78bed8469b9f"],["/categories/数据结构/python/index.html","581233f2f59fe1570b7f1df70c69f5b5"],["/categories/数论/index.html","93d3b9bba778aefeb2be3d63a34ab787"],["/categories/知识点/index.html","688785b065717388d276176051e09fac"],["/categories/语法/index.html","17c402109432d6811405231315690ef6"],["/categories/语法/java/index.html","66e0d1f1e4258c8a104f3bbebba4cec6"],["/css/common/animated.css","b2aecba9b34c3593d241f2c118a98ae1"],["/css/common/basic.css","e812bd22eb0dd791a27407ddffa0cab9"],["/css/common/codeblock/code-block.css","641572522f017055b703ba651693e89b"],["/css/common/codeblock/code-theme.css","ea96f0c84aa9e83b81d4823fdb5d5ade"],["/css/common/codeblock/highlight.css","a308156514bc8e2f87b4353ff08a4402"],["/css/common/markdown.css","0f093295106a47da4a5bf33ed123c1a4"],["/css/common/redefine-theme.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/variables.css","df0593718af24731f5a339fe7ad46862"],["/css/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","a889e38beab70367d09999e7cb725a24"],["/css/layout/category-content.css","add737cc1862b5da5d542fdc249296a8"],["/css/layout/category-list.css","cd856dcc7f0daded2dad18b6ff213707"],["/css/layout/home-content.css","4c9d5e8b4c8d7ae90aa4acb4ad8e89bb"],["/css/layout/home-sidebar.css","f127276dc862d0a7b72110cb3147a107"],["/css/layout/page.css","a1c503e28a4915fe590503fc1ce5fa6d"],["/css/layout/tag-content.css","edcb378d49a86f68e60b7dd3e9af8a7f"],["/css/style.css","9192f0d51d64883c25d5beec62bb4f89"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/Chillax/Chillax-Variable.eot","f8ea7af333c768147f674ba526612248"],["/fonts/Chillax/Chillax-Variable.ttf","5f13274ffe3e1ee77b67324cb1a9cf7c"],["/fonts/Chillax/Chillax-Variable.woff","16fee1e0f2e5db01ad15ce4535ad39e2"],["/fonts/Chillax/Chillax-Variable.woff2","5940855d51d43257fe1bbd7b0dc6710d"],["/fonts/Chillax/chillax.css","0d2090517a2cb42f32bd86454b2bb1e0"],["/fonts/Satoshi/Satoshi-Variable.eot","f953920d265c265d55029a0044a7b122"],["/fonts/Satoshi/Satoshi-Variable.ttf","bc0207192e408b721fa14151690c6a66"],["/fonts/Satoshi/Satoshi-Variable.woff","bd7cac4b844318aa2b2f168b57b45c22"],["/fonts/Satoshi/Satoshi-Variable.woff2","70880e42f07b0386e261974cd14820a1"],["/fonts/Satoshi/Satoshi-VariableItalic.eot","9888965098b0fe3121439e5293e5f63d"],["/fonts/Satoshi/Satoshi-VariableItalic.ttf","db98db5c0d84369d2586aaf5eedc3376"],["/fonts/Satoshi/Satoshi-VariableItalic.woff","aa09c255fd899a8d89fc4636c0c9db4d"],["/fonts/Satoshi/Satoshi-VariableItalic.woff2","ed39abb752ab5d8f7d19f0a8d9523c7b"],["/fonts/Satoshi/satoshi.css","1baa156aca1baa1b570089def9ee55ec"],["/fonts/fonts.css","c96283423d2ff104322986b7338b3eba"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff","3575965a87411920b48f5bd97b38810d"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff2","d368363f7f4991eba59db4889aa5b8d1"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff","0ed89b72b63509b506025450c77bfe43"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff2","180f3c1052432d84ad10dad4521cbac0"],["/fonts/ubuntu-mono-v15-latin-regular.woff","86bd37776667f31cd9c6d0a2a9fa7ef5"],["/fonts/ubuntu-mono-v15-latin-regular.woff2","8d1b929856b2ef150dc86f2f38a5dc5b"],["/friends/index.html","f8d5d5cb8dff75063f619da875e333e2"],["/images/OIP-C.png","b1e36fb5b1e591c5fe85fce686b263e7"],["/images/head1.png","f29ce8b6067bbba624c6f6590649311b"],["/images/head2.png","6a878b3ae2f6f74600141ba1ee1c625d"],["/images/loading.svg","e1de41eda143447d3b338e77f7ace18f"],["/images/redefine-avatar.svg","fd210fedbfe357f35c570f61b943481b"],["/images/redefine-favicon.svg","badc8db1a4c3d1845db4e4ffec333d9e"],["/images/redefine-logo.svg","80a88fff4a3bb50559543e80477aa571"],["/index.html","fc4194d2e0e498d32beac6d018660acc"],["/js/layouts/categoryList.js","be8705c55bfaa476c5cf3fd995409305"],["/js/layouts/lazyload.js","728031a7240822da29d5bd927d1e1727"],["/js/layouts/navbarShrink.js","e18cdfa8f09238a478e34c0e8810cbab"],["/js/layouts/toc.js","cb98abb318dc0eda4bac6ec6d43faf10"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/libs/SwupPreloadPlugin.min.js","170c2637b152f61a7225171523b9e5f3"],["/js/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/libs/SwupScrollPlugin.min.js","85fe68c41c48170dd104ee4f29690798"],["/js/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/mermaid.min.js","07d4a62ba2e5b0e44077bd9b481fd75d"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/main.js","295801b1c2b4f7fd1d85f34fadc94805"],["/js/plugins/aplayer.js","13934c08bc9325eaad918b497d1216fd"],["/js/plugins/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/js/plugins/masonry.js","5a2fb5815ba12e2efb0323a526dc623f"],["/js/plugins/mermaid.js","929a9284ea999064bc6842d28bf9f102"],["/js/plugins/tabs.js","a6eca0aaba3fd4a5cb8539b129d742cf"],["/js/plugins/typed.js","b3456d138a26a01d00f06e4fcc0a0477"],["/js/tools/codeBlock.js","187983273eb159f9fab0f4bb8d4d02c3"],["/js/tools/imageViewer.js","c8a88531b2388bc965618f7c50a3e82f"],["/js/tools/lightDarkSwitch.js","ab6260f82f3916594294df5ff3e86c94"],["/js/tools/localSearch.js","d9ecf11b97c82251978084566e399426"],["/js/tools/runtime.js","87f27761db6f7a197f99739804ee0c1d"],["/js/tools/scrollTopBottom.js","d984b4612439ba4d47813e1dd1bf46f2"],["/js/tools/tocToggle.js","cd72e98af728161a67fa6b2df9b28d5a"],["/js/utils.js","0cb3343ba95bde5bb08690b6b49b6c5d"],["/lib/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/page/2/index.html","161260f0bc70cce500e00566f37516c7"],["/page/3/index.html","784dcb3cc54f4af0c0b799eb67eba33d"],["/page/4/index.html","3d921e72bae978c49dc334c4fbc6fa21"],["/sw-register.js","7cabe0552c9113dcdcec09f14968901a"],["/tags/AC/index.html","5cd6d5690da1b8f3be8bd733f0185195"],["/tags/KMP/index.html","0f5d194858042128b206a533a68eca78"],["/tags/app/index.html","64a9adeaba25a5805a64fb49bea770f8"],["/tags/c/index.html","6cf02c57d330fc48b6e5edfba6ae8776"],["/tags/index.html","c770a5116885e71ebad3641aa6e0dcad"],["/tags/jupyter-notebook/index.html","bf94a6d03eeb61560b56b1dbfd34169c"],["/tags/python爬虫/index.html","c43580d8ee63919f285d44114189ab14"],["/tags/statement/index.html","97c81374c6afb3f623b5816f8787fd4c"],["/tags/test/index.html","10423182ee6207629ce9bf2c5e1fe157"],["/tags/二分/index.html","23f31648ee9b7393538d9f8c45ffe548"],["/tags/位运算/index.html","1341aad529033ef5000932901bfdbbe5"],["/tags/例题/index.html","2dc23308f0249e3c8d689cff548cd554"],["/tags/前缀和/index.html","8e06ef8e3e66c6f84a2c6d873c66c61d"],["/tags/动态规划/index.html","5fdb4699401eeca069c6f1d381bc191f"],["/tags/双指针/index.html","ffabc968596f550714689114c7741528"],["/tags/差分/index.html","cf6a61d1d961ff9c4c643f250b2bd732"],["/tags/指针/index.html","954fcedf0b733fda71f39f7e23872175"],["/tags/排序/index.html","1221680004b0429430992514f0f6dfc6"],["/tags/数学/index.html","08baa86b622ad973896d943f1af6be63"],["/tags/数据分析/index.html","4e485aae9f3e9e3d5251c12724593502"],["/tags/数据结构/index.html","9f033693daeac811298cb9535313da75"],["/tags/日期/index.html","a23975f61e67f066bf422a6cd650d938"],["/tags/最小生成树/index.html","d3d0ccbac15cadf3e9b6632a3b11352f"],["/tags/模拟/index.html","84f280faddfc2fb04c9ba02839871c26"],["/tags/模板/index.html","63b4530136f76234f07abc039891e687"],["/tags/正则表达式/index.html","c77a72c9fc40e6266b4f492e50a39345"],["/tags/深度和广度搜索/index.html","ca3176e9d98c07f472a7b0b6f7cc192f"],["/tags/滑动窗口/index.html","5080001854b3151b1467dab6e8d403e4"],["/tags/知识点/index.html","723f37f73b90f44f97dcda314b984840"],["/tags/矩阵快速幂/index.html","9834dec31e7e3a5a4be0519ec0cf1c13"],["/tags/记忆化递归/index.html","277d7a9134948d26be3ac8d1bee54ac0"],["/tags/语法/index.html","d424573065bbf9545c60a7430f9f44e4"],["/tags/进制/index.html","1647febe70f16ef4f3e7673ca8820626"],["/tags/链表/index.html","d7b66a756d8cf0048eeaf62052357bdb"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
