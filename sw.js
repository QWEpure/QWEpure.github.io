/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/16/help/index.html","0479e65a6079648d9b73e1acaa770944"],["/2023/10/16/statement/index.html","27d89abbf1ec9f46cfbb09adceab6c38"],["/2023/10/16/test/index.html","3a228d88c15dec32d92feb797e5a87c8"],["/2023/10/22/排序/index.html","78bcbdf52c2821a959a2192973c2e39e"],["/2023/10/23/python语法/index.html","a47400af305741c1dcf4f6cefe75bbf8"],["/2023/10/26/关于python的链表/index.html","3292380a70cee31ee8988bfc3b005508"],["/2023/11/16/动态规划/index.html","2fd7ebca8962e63b200d5fb7605d490a"],["/2023/11/17/text/index.html","4f13530265791a7f89c0c04edac19281"],["/2023/12/20/正则表达式/index.html","11580e4ac5e1da661f3569ec987f8c49"],["/2024/02/18/app/index.html","c68adc454d4a59b02000ac2df305a987"],["/2024/02/22/数论专题/index.html","4ce9135b660f4873e3a3457fa8aec482"],["/2024/03/04/python数据结构的定义/index.html","551fc3d368e6a78063c1624b16f26bcc"],["/2024/03/17/Untitled 1/index.html","882649b3e9f68f368c69166f8672540d"],["/2024/03/21/前缀和与差分/index.html","e8ebca99ab732716d47ebed6dfa4555a"],["/2024/03/25/数据结构/index.html","3ae7b1becbf671f7aa6f99cd63eaab0c"],["/2024/04/01/最小生成树/index.html","54716daa9a73987094f9da04d32fec4c"],["/2024/04/02/深度和广度搜索/index.html","e0d30de0bcad8f27960bfed8dc200296"],["/2024/04/10/进制/index.html","bcc83f5e2dea3b55430af756f137eb44"],["/2024/04/15/日期/index.html","f0279f718ce3dbc6772e595717c15192"],["/2024/04/18/c++语法/index.html","efc1180b25d409db94aa205447208073"],["/2024/04/18/java语法/index.html","890286dfe0eb9acb7f028883e7c8f9b2"],["/2024/04/18/python标准库在题目方面的知识点/index.html","03f03081925ff80dea6f586869870ab5"],["/2024/04/18/位运算/index.html","c9c05432fc74168f27362fdba6e996af"],["/2024/04/18/双指针和滑动窗口/index.html","caa2f0e2c6134ea084f7b1e59a9eaf42"],["/2024/04/18/模拟/index.html","d71a7c376bcb9ebb2e3f76a99551a7aa"],["/2024/04/29/数据分析/index.html","49088a44d705e920f0d3d094f98a5d8c"],["/2024/05/05/Untitled 2/index.html","a9f4f0cce70b1babaf0a7d49ee8e33d4"],["/2024/05/23/python爬虫/index.html","9a6cc58b48d70af01c56b699b540559c"],["/2024/05/23/爬虫数据分析案例/index.html","a474b5e87b9250613500c90bdfdb5e05"],["/2024/05/25/Jupyter notebook快速上手/index.html","d9c5bbab0a94423428b8713e41a6d844"],["/2024/06/13/Untitled 3/index.html","1f059ab14e3c71fc966825d6672c89c6"],["/2024/06/13/pyecharts/index.html","c3ad50e8ec886671b6b31624a6e7f6d2"],["/2024/06/23/爬虫/index.html","b0c3ec12d617b24705fc044b20bf8191"],["/2024/08/09/踩过的坑/index.html","c8a1de99556a153b57259e86e31f8ec0"],["/2024/09/01/刷题/index.html","22f4916dbd507cd0bed6587e52705bd1"],["/2024/11/22/java项目/index.html","dc3c5724a23bbc7d42e15e3f28b40a1d"],["/2024/12/07/记忆化递归/index.html","bf89891fac28f4f20675c283137c4221"],["/2025/02/02/比赛时好用的函数/index.html","0c5daeef982c9f4fb95a3ba1ee548ec1"],["/2025/02/09/数据结构模板/index.html","fa66bba1ec8dd70bc2fdfbe2896ad819"],["/2025/02/19/二分/index.html","3cb36e98e2b7089669e13fc1d8608ee1"],["/2025/02/19/用来优化的算法/index.html","25f9adbb11a15545736febb50cf459c3"],["/404.html","86ce6e3cc2e614b95c06d6a7326ab64e"],["/about/index.html","72c8315545a64af795341d0ae61dfcaa"],["/archives/2023/10/index.html","5adb4ff2ff0ebbabead1a8c384252ec4"],["/archives/2023/11/index.html","067609e1a1b3e24f2c48ad48a04d4513"],["/archives/2023/12/index.html","b04e938c7f5faeb89302da9d9efd4ff9"],["/archives/2023/index.html","79d5f03109e605c287eb87f746ec6755"],["/archives/2024/02/index.html","023c2e2ab3f17860c5df8733fc043462"],["/archives/2024/03/index.html","5d61a2d92fb4dd43fcc61667d2c3e338"],["/archives/2024/04/index.html","fe2c39dc1ff33d0c7521e55a02e326af"],["/archives/2024/04/page/2/index.html","8d0ed113923667f2816f0235c3961c66"],["/archives/2024/05/index.html","c7f40b458bebad99d89fcdaa4b5f31e5"],["/archives/2024/06/index.html","24f3fcb958699b6ce76bcdd4f01241e5"],["/archives/2024/08/index.html","fb4ce2349a9a627d077b4bac87b88c56"],["/archives/2024/09/index.html","01319b194dd2606bc2b97d624db33fa5"],["/archives/2024/11/index.html","130c4a4c45c82af53f64ef8fbceabbf3"],["/archives/2024/12/index.html","492c8809f509515c872a88a7058dbb7e"],["/archives/2024/index.html","679a810371c161259f6d8af944f184f5"],["/archives/2024/page/2/index.html","07502e6411227fd1705f82b871c0602e"],["/archives/2024/page/3/index.html","e507ea08c7c129e4606f3c281ca12787"],["/archives/2025/02/index.html","81760fc70b631af88bdbae5c8166a70a"],["/archives/2025/index.html","9b44187431ad51bced09083a8bb7d11b"],["/archives/index.html","526dbc2e944c1ca7055c5277cd7f381d"],["/archives/page/2/index.html","5cef941031007c7a9f5df0d7c911921b"],["/archives/page/3/index.html","2dd0c232e5bb443c1c8a4724d0fac314"],["/archives/page/4/index.html","07c27dbca50a1862bd5db44669d96ca1"],["/archives/page/5/index.html","5d28b4a16c59d343eabb38d66f030362"],["/assets/build/styles.css","f9e278c312edf04a8ba87303c2579dc6"],["/assets/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/assets/odometer-theme-minimal.css","d50a198c326f1767cdaecdb7c67b392d"],["/categories/AC/index.html","e311b1ebd636a11d7437fe50decaeab2"],["/categories/AC/page/2/index.html","24b5d989c968f3486ece1d13d2e2708b"],["/categories/AC/题型/index.html","0c1c5a0d3b2df45b155da931f77f7da4"],["/categories/AC/题型/page/2/index.html","af2bcacbfc21a778614aeb2a358a4dcc"],["/categories/c/index.html","5ea6edae5545de5a8d7632aa35bdbdd1"],["/categories/help/index.html","5a2a5f84153bd971c9a7dfbcfdd10496"],["/categories/index.html","faf15d77ff2e7362a0b410c7e581d189"],["/categories/python/index.html","1d90a30a92201ef9a8aca95d2d01d0d2"],["/categories/开发/index.html","40c1313ba481299db1397077138027d5"],["/categories/开发/java/index.html","2938fdd88323dae1f77b90f32e170c53"],["/categories/数据结构/index.html","9e3eeea9f549603478318b6b3e11dae4"],["/categories/数据结构/python/index.html","cc8d5474690089b53aa7461f7a14877a"],["/categories/数论/index.html","0902d84a6b761d68f653d8f54ba28e0b"],["/categories/知识点/index.html","d93a9a7db5ed321319d5b782531b9514"],["/categories/语法/index.html","11dffeeb708c132def9ba26965d20ac7"],["/categories/语法/java/index.html","f7af34a429721517ca3d79e9cee3f497"],["/css/common/animated.css","b2aecba9b34c3593d241f2c118a98ae1"],["/css/common/basic.css","e812bd22eb0dd791a27407ddffa0cab9"],["/css/common/codeblock/code-block.css","641572522f017055b703ba651693e89b"],["/css/common/codeblock/code-theme.css","ea96f0c84aa9e83b81d4823fdb5d5ade"],["/css/common/codeblock/highlight.css","a308156514bc8e2f87b4353ff08a4402"],["/css/common/markdown.css","0f093295106a47da4a5bf33ed123c1a4"],["/css/common/redefine-theme.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/variables.css","df0593718af24731f5a339fe7ad46862"],["/css/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","a889e38beab70367d09999e7cb725a24"],["/css/layout/category-content.css","add737cc1862b5da5d542fdc249296a8"],["/css/layout/category-list.css","cd856dcc7f0daded2dad18b6ff213707"],["/css/layout/home-content.css","4c9d5e8b4c8d7ae90aa4acb4ad8e89bb"],["/css/layout/home-sidebar.css","f127276dc862d0a7b72110cb3147a107"],["/css/layout/page.css","a1c503e28a4915fe590503fc1ce5fa6d"],["/css/layout/tag-content.css","edcb378d49a86f68e60b7dd3e9af8a7f"],["/css/style.css","9192f0d51d64883c25d5beec62bb4f89"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/Chillax/Chillax-Variable.eot","f8ea7af333c768147f674ba526612248"],["/fonts/Chillax/Chillax-Variable.ttf","5f13274ffe3e1ee77b67324cb1a9cf7c"],["/fonts/Chillax/Chillax-Variable.woff","16fee1e0f2e5db01ad15ce4535ad39e2"],["/fonts/Chillax/Chillax-Variable.woff2","5940855d51d43257fe1bbd7b0dc6710d"],["/fonts/Chillax/chillax.css","0d2090517a2cb42f32bd86454b2bb1e0"],["/fonts/Satoshi/Satoshi-Variable.eot","f953920d265c265d55029a0044a7b122"],["/fonts/Satoshi/Satoshi-Variable.ttf","bc0207192e408b721fa14151690c6a66"],["/fonts/Satoshi/Satoshi-Variable.woff","bd7cac4b844318aa2b2f168b57b45c22"],["/fonts/Satoshi/Satoshi-Variable.woff2","70880e42f07b0386e261974cd14820a1"],["/fonts/Satoshi/Satoshi-VariableItalic.eot","9888965098b0fe3121439e5293e5f63d"],["/fonts/Satoshi/Satoshi-VariableItalic.ttf","db98db5c0d84369d2586aaf5eedc3376"],["/fonts/Satoshi/Satoshi-VariableItalic.woff","aa09c255fd899a8d89fc4636c0c9db4d"],["/fonts/Satoshi/Satoshi-VariableItalic.woff2","ed39abb752ab5d8f7d19f0a8d9523c7b"],["/fonts/Satoshi/satoshi.css","1baa156aca1baa1b570089def9ee55ec"],["/fonts/fonts.css","c96283423d2ff104322986b7338b3eba"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff","3575965a87411920b48f5bd97b38810d"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff2","d368363f7f4991eba59db4889aa5b8d1"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff","0ed89b72b63509b506025450c77bfe43"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff2","180f3c1052432d84ad10dad4521cbac0"],["/fonts/ubuntu-mono-v15-latin-regular.woff","86bd37776667f31cd9c6d0a2a9fa7ef5"],["/fonts/ubuntu-mono-v15-latin-regular.woff2","8d1b929856b2ef150dc86f2f38a5dc5b"],["/friends/index.html","1caaa14f722042d160ac0684e309b33f"],["/images/OIP-C.png","b1e36fb5b1e591c5fe85fce686b263e7"],["/images/head1.png","f29ce8b6067bbba624c6f6590649311b"],["/images/head2.png","6a878b3ae2f6f74600141ba1ee1c625d"],["/images/loading.svg","e1de41eda143447d3b338e77f7ace18f"],["/images/redefine-avatar.svg","fd210fedbfe357f35c570f61b943481b"],["/images/redefine-favicon.svg","badc8db1a4c3d1845db4e4ffec333d9e"],["/images/redefine-logo.svg","80a88fff4a3bb50559543e80477aa571"],["/index.html","ad28c8c377b17e49b2f4010f4237246c"],["/js/layouts/categoryList.js","be8705c55bfaa476c5cf3fd995409305"],["/js/layouts/lazyload.js","728031a7240822da29d5bd927d1e1727"],["/js/layouts/navbarShrink.js","e18cdfa8f09238a478e34c0e8810cbab"],["/js/layouts/toc.js","cb98abb318dc0eda4bac6ec6d43faf10"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/libs/SwupPreloadPlugin.min.js","170c2637b152f61a7225171523b9e5f3"],["/js/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/libs/SwupScrollPlugin.min.js","85fe68c41c48170dd104ee4f29690798"],["/js/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/mermaid.min.js","07d4a62ba2e5b0e44077bd9b481fd75d"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/main.js","295801b1c2b4f7fd1d85f34fadc94805"],["/js/plugins/aplayer.js","13934c08bc9325eaad918b497d1216fd"],["/js/plugins/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/js/plugins/masonry.js","5a2fb5815ba12e2efb0323a526dc623f"],["/js/plugins/mermaid.js","929a9284ea999064bc6842d28bf9f102"],["/js/plugins/tabs.js","a6eca0aaba3fd4a5cb8539b129d742cf"],["/js/plugins/typed.js","b3456d138a26a01d00f06e4fcc0a0477"],["/js/tools/codeBlock.js","187983273eb159f9fab0f4bb8d4d02c3"],["/js/tools/imageViewer.js","c8a88531b2388bc965618f7c50a3e82f"],["/js/tools/lightDarkSwitch.js","ab6260f82f3916594294df5ff3e86c94"],["/js/tools/localSearch.js","d9ecf11b97c82251978084566e399426"],["/js/tools/runtime.js","87f27761db6f7a197f99739804ee0c1d"],["/js/tools/scrollTopBottom.js","d984b4612439ba4d47813e1dd1bf46f2"],["/js/tools/tocToggle.js","cd72e98af728161a67fa6b2df9b28d5a"],["/js/utils.js","0cb3343ba95bde5bb08690b6b49b6c5d"],["/lib/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/page/2/index.html","e0f380b4a0ec2a8c337869e5fad5eb32"],["/page/3/index.html","b754b33caac66990585c5f15f6bf7fe8"],["/page/4/index.html","d9fa879e34393c12a161422bed1537ee"],["/sw-register.js","2fb11a1380364bbf2c08ce3babf9d24e"],["/tags/AC/index.html","c0663891e1da757a3a9d447e54d694af"],["/tags/app/index.html","faabb4308f959ec6c981427bfce1826a"],["/tags/index.html","619efc6e865b560eb6e30caea16a0949"],["/tags/jupyter-notebook/index.html","d04078f89f812e3e95c2152a5e5dd5d3"],["/tags/python爬虫/index.html","4248922f7d7411666bc775d3990b91b7"],["/tags/statement/index.html","30d71b842329b1e5bc9df15db627c6eb"],["/tags/test/index.html","4d8b811b0dca9e21bf5e98db314019d1"],["/tags/位运算/index.html","5cf225744176c195589bdd7c802a80e3"],["/tags/例题/index.html","cd737d7b1815c9d88456d1384ab1d4cb"],["/tags/前缀和/index.html","cea5a0dfecdd191b32ba26aeb93dd630"],["/tags/动态规划/index.html","2bdf90e8a2035aad82b3d48482674f15"],["/tags/双指针/index.html","037e4f4c740ed989c8d2026f92cb53f3"],["/tags/差分/index.html","9f257802a37ace6da252c613fe46de77"],["/tags/指针/index.html","5038e12df0ef85fc8cbfe7368a0441c3"],["/tags/排序/index.html","f60387256bb07565d791747b33e9cea2"],["/tags/数学/index.html","9ac48ae83242b2445acb0b6bbd815eec"],["/tags/数据分析/index.html","1ebe098da6a1c3b2b4a57a9c5dd325f5"],["/tags/数据结构/index.html","b09c581a6a1a809115c0b55da520900f"],["/tags/日期/index.html","3001cf8fe3269ca01a5cc996cd8f4c9f"],["/tags/最小生成树/index.html","082a7fb42df5974b9bc46b890bf1613c"],["/tags/模拟/index.html","1f971305c5aac733861b140097cc3d40"],["/tags/模板/index.html","df6df891f5cc6f3c204bfb471677b68f"],["/tags/正则表达式/index.html","0f88c46f65ed059312b9d98474b4ad99"],["/tags/深度和广度搜索/index.html","bdb687219fdb16460982cd51ac9a8ac3"],["/tags/滑动窗口/index.html","352cf921eaff49b6b599891808e8b21f"],["/tags/知识点/index.html","426c10eccf3733b8dee6faa2115044a4"],["/tags/记忆化递归/index.html","d557dc378c1111dc04949f523bfa9654"],["/tags/语法/index.html","6907044198508cf9234b3580f06259ef"],["/tags/进制/index.html","a8957be88bb07fee0d0c5f930889b164"],["/tags/链表/index.html","28c94cffa4eb8117b67fa0f401d8d335"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
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
