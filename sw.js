/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/16/help/index.html","a6fea9a269b3a5de85e37ff88c940eff"],["/2023/10/16/statement/index.html","f08470c30b1aa39ef3a47a7e730c8099"],["/2023/10/16/test/index.html","bee6914c3d1fd060f479a12898c11b8c"],["/2023/10/22/排序/index.html","33d5f00ed82633ce3d4076671cbed9a8"],["/2023/10/23/python语法/index.html","886d0de41952d737cb612c8106fa767d"],["/2023/10/26/关于python的链表/index.html","4d74cae9c3b0b41fb1236764e9b9f18e"],["/2023/11/16/动态规划/index.html","f539d7cbf376a625b128bb06fdeb04a2"],["/2023/11/17/text/index.html","1282cd3cde2a579757b0b1c8a6a99510"],["/2023/12/20/正则表达式/index.html","db1f72bc9be5b8ce2c9d69291ee354ba"],["/2024/02/18/app/index.html","e8471350fc63a6ed8b808715a4655285"],["/2024/02/22/数论专题/index.html","ea82e993fa2b7d5c4be5f8ffda23a225"],["/2024/03/04/python数据结构的定义/index.html","96d59c70dd6e9c4a0adb4f43faa10623"],["/2024/03/17/Untitled 1/index.html","87077861d1c7c025b841a94c679eee8d"],["/2024/03/21/前缀和与差分/index.html","0a637d4cbea41f253380c5a392540c29"],["/2024/03/25/数据结构/index.html","4ed4fd9c461bad7cc28886ff2fadf3fa"],["/2024/04/01/最小生成树/index.html","93351d9062544370e4d8b1e40aec591d"],["/2024/04/02/深度和广度搜索/index.html","54ab507264b0f4832c90106cbf1a4011"],["/2024/04/10/进制/index.html","b77319144f2a879892a47d2fd0e22d89"],["/2024/04/15/日期/index.html","530b9a6f4359b3b1906d885208b97e21"],["/2024/04/18/c++语法/index.html","8c41e5ce8cadae8327834e9851fc3260"],["/2024/04/18/java语法/index.html","2a7db6141919c38986574c762ac081fa"],["/2024/04/18/python标准库在题目方面的知识点/index.html","b21ed78baba4cef6db1b71c1b24c4a27"],["/2024/04/18/位运算/index.html","0da0722e963327cfab77dde4fc67b297"],["/2024/04/18/双指针和滑动窗口/index.html","c452b9ae36d2770727770f719b1e73bc"],["/2024/04/18/模拟/index.html","449973429b242f325f1af1cccfd7f984"],["/2024/04/29/数据分析/index.html","7989e610e51e1524d48329a757d5be19"],["/2024/05/05/Untitled 2/index.html","ffac98ff4486a10970342437e6294fb4"],["/2024/05/23/python爬虫/index.html","9d881d4222405b7917e808dcfff58b39"],["/2024/05/23/爬虫数据分析案例/index.html","8529d992deb62632aa4e2c759a1e9054"],["/2024/05/25/Jupyter notebook快速上手/index.html","55d6c2cf1ae71c0d782513160333c52c"],["/2024/06/13/Untitled 3/index.html","d4b9782e04c9058c788cc2f57e33d0b0"],["/2024/06/13/pyecharts/index.html","7caf4bb6a0ea352359bad1f63ff217b3"],["/2024/06/23/爬虫/index.html","4c79066278350ddb9907e596b4577213"],["/2024/08/09/踩过的坑/index.html","6406c3c838473f506000d29d61908678"],["/2024/09/01/刷题/index.html","8f16229f53607be4b88393c3bcc81957"],["/2024/11/22/java项目/index.html","120939df481f0c071cdd271aff9b2788"],["/2024/12/07/记忆化递归/index.html","3d7fd46b841fb2170045c5ad552c2fbe"],["/2025/02/02/比赛时好用的函数/index.html","c6d70284673d2b3a24260323941576ef"],["/2025/02/09/数据结构模板/index.html","13e29a3f530e93a3bd1ca43db2c95f72"],["/2025/02/19/二分/index.html","7e273c335c01721c24a14e4e7c5717db"],["/2025/02/19/用来优化的算法/index.html","16af517d52c843605b55ca97a12a9987"],["/404.html","a4393b69272f510d49b00806124e1d5b"],["/about/index.html","5be384ffb9ecbec50eb4c5d2a8faf965"],["/archives/2023/10/index.html","7ceaa5cad7858edb14f29d918ddaeb08"],["/archives/2023/11/index.html","5efdaa5e3e0133fbf0ab14d3cf595396"],["/archives/2023/12/index.html","7e603b0e82f96fb6e489b03504dcb221"],["/archives/2023/index.html","f5fd216b258256997f69c1b455b73e74"],["/archives/2024/02/index.html","48f74047ae957fcc8d603a235060bd1a"],["/archives/2024/03/index.html","d8b4665dc8563f6d197c2cc967adfec1"],["/archives/2024/04/index.html","a79fddc18dd9ec55af7b6f297a7dfb15"],["/archives/2024/04/page/2/index.html","dbddcba192b0fd79f519a92507ef0c73"],["/archives/2024/05/index.html","c411faaa4382611ca56be96c640c5904"],["/archives/2024/06/index.html","b390744c84dfa44f6ec82c83f6a5ce1b"],["/archives/2024/08/index.html","b8820816abd86fdab05d6f0cd08210e9"],["/archives/2024/09/index.html","596f5dd8dabe9c768158ce2cc34c8a9b"],["/archives/2024/11/index.html","cb6f688fc094955cb7d48f8b0417ca87"],["/archives/2024/12/index.html","516169c4020926719cb9c37cf795e3d8"],["/archives/2024/index.html","3e52c031e3972c180c9cf901f3654875"],["/archives/2024/page/2/index.html","bb3df2f1972e079ad91fa537394c2d9e"],["/archives/2024/page/3/index.html","706539b212ab8e4ca0b0eb2d4ea69999"],["/archives/2025/02/index.html","0002055a362095d8a376761438efbe10"],["/archives/2025/index.html","6cbe9b3bc05814f90d20e1617235219b"],["/archives/index.html","6616283c0d66ac9fe6aaea42b5f4b2fa"],["/archives/page/2/index.html","e0db7cf45de61fb3b01ee1a51eb830a5"],["/archives/page/3/index.html","df898ef9a0f8eb1e2a7b294daf2fd2d0"],["/archives/page/4/index.html","d4389280ebb98248c9b15dcd794308fb"],["/archives/page/5/index.html","3ddfa35099a6700cadcb3008d9836737"],["/assets/build/styles.css","f9e278c312edf04a8ba87303c2579dc6"],["/assets/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/assets/odometer-theme-minimal.css","d50a198c326f1767cdaecdb7c67b392d"],["/categories/AC/index.html","86fa283dcfab456cdaf919452ad0bca1"],["/categories/AC/page/2/index.html","2bb43567b1be550c7f4e90d6061f1289"],["/categories/AC/题型/index.html","954c0d7f6e1b125b12c84b0f6b467c5a"],["/categories/AC/题型/page/2/index.html","adb07e1efb6ed9b438e56dfb8fb03621"],["/categories/c/index.html","69cecfb6b834cee5ae4cf101738a8878"],["/categories/help/index.html","ab95f2a16c514826cb8dd35479db972d"],["/categories/index.html","8b32aa85d9b30689c3a4a25644974a24"],["/categories/python/index.html","7f2faf959bb5c6215e014fc09a5ebdc6"],["/categories/开发/index.html","ca3ca64ea39097862e9f193d451f3e43"],["/categories/开发/java/index.html","b3df89d99348da82652ae978817a9ae4"],["/categories/数据结构/index.html","fddb0a813a5853e0a5b3643ddfcf69aa"],["/categories/数据结构/python/index.html","3d4f70ce6acfe545a9ced8df27f27740"],["/categories/数论/index.html","403aa06dc5572423db5b98825177aa3c"],["/categories/知识点/index.html","a87bc84136b8be9fb511d66df5a38a6b"],["/categories/语法/index.html","6decea3b764b005ad82264341bfe0f0f"],["/categories/语法/java/index.html","e028487bb78720cd264b7223fbfb3e1a"],["/css/common/animated.css","b2aecba9b34c3593d241f2c118a98ae1"],["/css/common/basic.css","e812bd22eb0dd791a27407ddffa0cab9"],["/css/common/codeblock/code-block.css","641572522f017055b703ba651693e89b"],["/css/common/codeblock/code-theme.css","ea96f0c84aa9e83b81d4823fdb5d5ade"],["/css/common/codeblock/highlight.css","a308156514bc8e2f87b4353ff08a4402"],["/css/common/markdown.css","0f093295106a47da4a5bf33ed123c1a4"],["/css/common/redefine-theme.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/variables.css","df0593718af24731f5a339fe7ad46862"],["/css/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","a889e38beab70367d09999e7cb725a24"],["/css/layout/category-content.css","add737cc1862b5da5d542fdc249296a8"],["/css/layout/category-list.css","cd856dcc7f0daded2dad18b6ff213707"],["/css/layout/home-content.css","4c9d5e8b4c8d7ae90aa4acb4ad8e89bb"],["/css/layout/home-sidebar.css","f127276dc862d0a7b72110cb3147a107"],["/css/layout/page.css","a1c503e28a4915fe590503fc1ce5fa6d"],["/css/layout/tag-content.css","edcb378d49a86f68e60b7dd3e9af8a7f"],["/css/style.css","9192f0d51d64883c25d5beec62bb4f89"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/Chillax/Chillax-Variable.eot","f8ea7af333c768147f674ba526612248"],["/fonts/Chillax/Chillax-Variable.ttf","5f13274ffe3e1ee77b67324cb1a9cf7c"],["/fonts/Chillax/Chillax-Variable.woff","16fee1e0f2e5db01ad15ce4535ad39e2"],["/fonts/Chillax/Chillax-Variable.woff2","5940855d51d43257fe1bbd7b0dc6710d"],["/fonts/Chillax/chillax.css","0d2090517a2cb42f32bd86454b2bb1e0"],["/fonts/Satoshi/Satoshi-Variable.eot","f953920d265c265d55029a0044a7b122"],["/fonts/Satoshi/Satoshi-Variable.ttf","bc0207192e408b721fa14151690c6a66"],["/fonts/Satoshi/Satoshi-Variable.woff","bd7cac4b844318aa2b2f168b57b45c22"],["/fonts/Satoshi/Satoshi-Variable.woff2","70880e42f07b0386e261974cd14820a1"],["/fonts/Satoshi/Satoshi-VariableItalic.eot","9888965098b0fe3121439e5293e5f63d"],["/fonts/Satoshi/Satoshi-VariableItalic.ttf","db98db5c0d84369d2586aaf5eedc3376"],["/fonts/Satoshi/Satoshi-VariableItalic.woff","aa09c255fd899a8d89fc4636c0c9db4d"],["/fonts/Satoshi/Satoshi-VariableItalic.woff2","ed39abb752ab5d8f7d19f0a8d9523c7b"],["/fonts/Satoshi/satoshi.css","1baa156aca1baa1b570089def9ee55ec"],["/fonts/fonts.css","c96283423d2ff104322986b7338b3eba"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff","3575965a87411920b48f5bd97b38810d"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff2","d368363f7f4991eba59db4889aa5b8d1"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff","0ed89b72b63509b506025450c77bfe43"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff2","180f3c1052432d84ad10dad4521cbac0"],["/fonts/ubuntu-mono-v15-latin-regular.woff","86bd37776667f31cd9c6d0a2a9fa7ef5"],["/fonts/ubuntu-mono-v15-latin-regular.woff2","8d1b929856b2ef150dc86f2f38a5dc5b"],["/friends/index.html","bfd8e2c51ebac6e43bc0ec2567f364d5"],["/images/OIP-C.png","b1e36fb5b1e591c5fe85fce686b263e7"],["/images/head1.png","f29ce8b6067bbba624c6f6590649311b"],["/images/head2.png","6a878b3ae2f6f74600141ba1ee1c625d"],["/images/loading.svg","e1de41eda143447d3b338e77f7ace18f"],["/images/redefine-avatar.svg","fd210fedbfe357f35c570f61b943481b"],["/images/redefine-favicon.svg","badc8db1a4c3d1845db4e4ffec333d9e"],["/images/redefine-logo.svg","80a88fff4a3bb50559543e80477aa571"],["/index.html","79bf1508ab4e1e0f5549da31ff0bf90e"],["/js/layouts/categoryList.js","be8705c55bfaa476c5cf3fd995409305"],["/js/layouts/lazyload.js","728031a7240822da29d5bd927d1e1727"],["/js/layouts/navbarShrink.js","e18cdfa8f09238a478e34c0e8810cbab"],["/js/layouts/toc.js","cb98abb318dc0eda4bac6ec6d43faf10"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/libs/SwupPreloadPlugin.min.js","170c2637b152f61a7225171523b9e5f3"],["/js/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/libs/SwupScrollPlugin.min.js","85fe68c41c48170dd104ee4f29690798"],["/js/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/mermaid.min.js","07d4a62ba2e5b0e44077bd9b481fd75d"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/main.js","295801b1c2b4f7fd1d85f34fadc94805"],["/js/plugins/aplayer.js","13934c08bc9325eaad918b497d1216fd"],["/js/plugins/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/js/plugins/masonry.js","5a2fb5815ba12e2efb0323a526dc623f"],["/js/plugins/mermaid.js","929a9284ea999064bc6842d28bf9f102"],["/js/plugins/tabs.js","a6eca0aaba3fd4a5cb8539b129d742cf"],["/js/plugins/typed.js","b3456d138a26a01d00f06e4fcc0a0477"],["/js/tools/codeBlock.js","187983273eb159f9fab0f4bb8d4d02c3"],["/js/tools/imageViewer.js","c8a88531b2388bc965618f7c50a3e82f"],["/js/tools/lightDarkSwitch.js","ab6260f82f3916594294df5ff3e86c94"],["/js/tools/localSearch.js","d9ecf11b97c82251978084566e399426"],["/js/tools/runtime.js","87f27761db6f7a197f99739804ee0c1d"],["/js/tools/scrollTopBottom.js","d984b4612439ba4d47813e1dd1bf46f2"],["/js/tools/tocToggle.js","cd72e98af728161a67fa6b2df9b28d5a"],["/js/utils.js","0cb3343ba95bde5bb08690b6b49b6c5d"],["/lib/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/page/2/index.html","4c1ac566fb35db0c1bdfcdb8657760e7"],["/page/3/index.html","83d0481243152a9e76cb5e2b1df7b91d"],["/page/4/index.html","1e341f207f70cb9aacca9acfa8734fbe"],["/sw-register.js","df6ef4670b1e0a9139fccda66f1650d2"],["/tags/AC/index.html","af3becfd610b121aa87dc203180be82c"],["/tags/app/index.html","24014be96515a541e80e6b97a6605418"],["/tags/index.html","31dd792996d7ae34ee4f4b00e59bbc68"],["/tags/jupyter-notebook/index.html","0530bf94003c1e05eb062d2232905b11"],["/tags/python爬虫/index.html","5faa15dafd5709d19a22f901030e3720"],["/tags/statement/index.html","03bd4365661a568d586f48ba8cd2014b"],["/tags/test/index.html","8abdab284cc2878852d6717687cfa130"],["/tags/位运算/index.html","765f58c151969b35a246466978fb4816"],["/tags/例题/index.html","d7a9d3554156d0cbb2dbc70258b77f96"],["/tags/前缀和/index.html","773ad5bcedd8c613fe34980b8d4f144b"],["/tags/动态规划/index.html","17437c15cade9c2d0901cf2d54084b3a"],["/tags/双指针/index.html","a47aebf34c82da2094b69b8c8607bf91"],["/tags/差分/index.html","472b21ded1caafa754d591aa2b841386"],["/tags/指针/index.html","3fa5de08077cdddbee77a6d545d17267"],["/tags/排序/index.html","a0a4030c342b01c3ac35fec0c47062d4"],["/tags/数学/index.html","a362bd4dcba1c8c8de24ec65af666567"],["/tags/数据分析/index.html","61e9e17865c0d81ecbb5d1a7d3fd81fe"],["/tags/数据结构/index.html","d38031ca6cc3b8c6b8e6c99679a988ce"],["/tags/日期/index.html","3f836e1030c0f5a6204575366e15a6fd"],["/tags/最小生成树/index.html","a30e92ce75545eeed3612abb97f5c7c0"],["/tags/模拟/index.html","9abb8035baf986443b1454411ddec256"],["/tags/模板/index.html","166d4e4a5af2960295b9a299e594c18f"],["/tags/正则表达式/index.html","e9ab373a50a6e1ca243f68b35c8237ad"],["/tags/深度和广度搜索/index.html","9bdfd9c8fea46d628b4e4aeec2b50b8f"],["/tags/滑动窗口/index.html","af8de60fb9e4a26f508f4cab1dd682cb"],["/tags/知识点/index.html","854cc375e2d28bf197e0c4d46469f9ef"],["/tags/记忆化递归/index.html","b45ca067a5430fa9d70aa14f072eda3c"],["/tags/语法/index.html","780ea85c7f0f65bdcacb68c66b7f80fd"],["/tags/进制/index.html","6e676a3bc5d42ff00b8feaab983860ab"],["/tags/链表/index.html","64a0c0305dbc6b136922e2cd7e1b160f"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
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
