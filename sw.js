/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/16/help/index.html","5fb5a7c862d81970754d3ab5c57736ed"],["/2023/10/16/statement/index.html","4f5c9aa31af3ed4df55d367245a1ce9a"],["/2023/10/16/test/index.html","9c1ece8bcb418f67e2f3d73545f46ee3"],["/2023/10/22/排序/index.html","154b83dc664eef936a8a57edde00a39c"],["/2023/10/23/python语法/index.html","164fcad2d8d53651ff89af11c6718d4c"],["/2023/10/26/关于python的链表/index.html","e6915eeb709be5ab98d4dbe0194e8e4c"],["/2023/11/16/动态规划/index.html","62250bb930a935769db086552387fbb3"],["/2023/11/17/text/index.html","6cb86912993b39a1219578e0f995b452"],["/2023/12/20/正则表达式/index.html","a0d89665efadebd58ff7906348080c07"],["/2024/02/18/app/index.html","3c907274318be0fae97a3a839827dd93"],["/2024/02/22/数论专题/index.html","2cbf307ea340cbe17b9111f92a70e863"],["/2024/03/04/python数据结构的定义/index.html","0175457ff865fdddb45c8897171534a4"],["/2024/03/17/Untitled 1/index.html","daf37cfd7f9a7305a05385fa5b1b18ef"],["/2024/03/21/前缀和与差分/index.html","250f78bd2a20544cf96f58e5dfbf468e"],["/2024/03/25/数据结构/index.html","af31c72192e1b5ed2bfa18417449c2fb"],["/2024/04/01/最小生成树/index.html","d04e78438a5a92aafa1740554c6c9798"],["/2024/04/02/深度和广度搜索/index.html","2e720671e55368765d34deb09fcd4b92"],["/2024/04/10/进制/index.html","6cae5192ee04a8a808d066817e280b69"],["/2024/04/15/日期/index.html","549db89bc0ca0bc93cfe6bd347263dad"],["/2024/04/18/c++语法/index.html","9bd9989a75bef90bcf661d2360c92fdc"],["/2024/04/18/java语法/index.html","84f6bf6d40b3510061350c917bfe5ef4"],["/2024/04/18/python标准库在题目方面的知识点/index.html","f999af19789585958af5fb25ecae9902"],["/2024/04/18/位运算/index.html","94075c67d197d9844d28b2f16d91484b"],["/2024/04/18/双指针和滑动窗口/index.html","7f99f24f2c843f464732be033f9753a2"],["/2024/04/18/模拟/index.html","672c4d2f6436e93a61a5a41f4a92c8cd"],["/2024/04/29/数据分析/index.html","f7776e1e3faecc6700fb39abcc7f0edc"],["/2024/05/05/Untitled 2/index.html","91bcc753946d79bed981d3204ba7be15"],["/2024/05/23/python爬虫/index.html","15f69987db5a3fdc9d9b431a647a59d7"],["/2024/05/23/爬虫数据分析案例/index.html","15b67159fbdae6ec8a5a3af17af433b9"],["/2024/05/25/Jupyter notebook快速上手/index.html","e3a065eb7c755913c57bebb1cda9ad75"],["/2024/06/13/Untitled 3/index.html","9f42e568cd418314ae76b8c7c893f831"],["/2024/06/13/pyecharts/index.html","0f7878ac2f664db2ce5c928f4f07818c"],["/2024/06/23/爬虫/index.html","ea7ca36fea02dbd890d32a62646f8058"],["/2024/08/09/踩过的坑/index.html","035c72de19ec1a54cdae4cee6af844e4"],["/404.html","59a021a6ae941e7f63e2e37f6d361b3a"],["/about/index.html","593527741ca455ecabfbdd85ebad557e"],["/archives/2023/10/index.html","45ccbdbab26dab30d6d3e13d14454856"],["/archives/2023/11/index.html","96a13f62c6953afe0a2836fc29db91ed"],["/archives/2023/12/index.html","5ad5c5f8e6531e977073f40e0b03a377"],["/archives/2023/index.html","c86443cb4f66daf72891ae7da5a53ab1"],["/archives/2024/02/index.html","ee5bcfdde5b9195b260bf3f9faa2bea0"],["/archives/2024/03/index.html","03f7711e5e8ebd419771831288cde3a5"],["/archives/2024/04/index.html","288f736cebc4c1175380bbdc8c8adb25"],["/archives/2024/04/page/2/index.html","94b5dcd6ee95ceac0c3959b4410821d5"],["/archives/2024/05/index.html","a466dcf64a23013e9f7965682b8e4092"],["/archives/2024/06/index.html","4453e1f748a8f65de221850109719a47"],["/archives/2024/08/index.html","e68c6adbce66d7b561aca871c8a593f0"],["/archives/2024/index.html","d8b52bfbb5bb654805c8feef68d2fe9e"],["/archives/2024/page/2/index.html","ad2adffbbce354e0fbd9a372808ff7c4"],["/archives/2024/page/3/index.html","c66e13362671389b1867be9876b112e1"],["/archives/index.html","2e6496eaa762c67f9968c628dcf8a762"],["/archives/page/2/index.html","2edb0c156f4cfd3cbec270ae884b4538"],["/archives/page/3/index.html","318c130f4b33ec2d55651b8394db6297"],["/archives/page/4/index.html","6575eec1239b3327301e3b3af7be0473"],["/assets/build/styles.css","f9e278c312edf04a8ba87303c2579dc6"],["/assets/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/assets/odometer-theme-minimal.css","d50a198c326f1767cdaecdb7c67b392d"],["/categories/AC/index.html","6fcb1f29d495d352b4d4dc48005d4b72"],["/categories/AC/page/2/index.html","f3e6e1e47a122476b864908b3152e087"],["/categories/AC/大纲/index.html","01433f27baec0f9a2b0607c3b41a0f27"],["/categories/c/index.html","76d671360ae3beb3903644904728f132"],["/categories/help/index.html","76e1f87dffa3577761dd3a0c10317f57"],["/categories/index.html","e920aa17a017890774aede110fbfef7a"],["/categories/python/index.html","49a62badd3c074ad62e8f1757238a4d5"],["/categories/开发/index.html","00c2f8e123c52eb1b90386549e7c3593"],["/categories/数据结构/index.html","f48be14020614bc765177f3d47f89596"],["/categories/数据结构/python/index.html","d062a5f9348440c5ed10ebaf9a5ba3aa"],["/categories/数据结构/python/大纲/index.html","8a15d757367819cff8c7e0e82b2e9bfd"],["/categories/数论/index.html","9940fb88e057a71269309ab398c1250f"],["/categories/知识点/index.html","6bf380513f40756b404a11e47d1689a9"],["/categories/语法/index.html","90be2ea07b3e831c1e8b8d2aae9eaf56"],["/categories/语法/java/index.html","34d4f5ec91c7d16e8e2732699a805dfc"],["/css/common/animated.css","b2aecba9b34c3593d241f2c118a98ae1"],["/css/common/basic.css","e812bd22eb0dd791a27407ddffa0cab9"],["/css/common/codeblock/code-block.css","641572522f017055b703ba651693e89b"],["/css/common/codeblock/code-theme.css","ea96f0c84aa9e83b81d4823fdb5d5ade"],["/css/common/codeblock/highlight.css","a308156514bc8e2f87b4353ff08a4402"],["/css/common/markdown.css","0f093295106a47da4a5bf33ed123c1a4"],["/css/common/redefine-theme.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/variables.css","df0593718af24731f5a339fe7ad46862"],["/css/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","a889e38beab70367d09999e7cb725a24"],["/css/layout/category-content.css","add737cc1862b5da5d542fdc249296a8"],["/css/layout/category-list.css","cd856dcc7f0daded2dad18b6ff213707"],["/css/layout/home-content.css","4c9d5e8b4c8d7ae90aa4acb4ad8e89bb"],["/css/layout/home-sidebar.css","f127276dc862d0a7b72110cb3147a107"],["/css/layout/page.css","a1c503e28a4915fe590503fc1ce5fa6d"],["/css/layout/tag-content.css","edcb378d49a86f68e60b7dd3e9af8a7f"],["/css/style.css","9192f0d51d64883c25d5beec62bb4f89"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/Chillax/Chillax-Variable.eot","f8ea7af333c768147f674ba526612248"],["/fonts/Chillax/Chillax-Variable.ttf","5f13274ffe3e1ee77b67324cb1a9cf7c"],["/fonts/Chillax/Chillax-Variable.woff","16fee1e0f2e5db01ad15ce4535ad39e2"],["/fonts/Chillax/Chillax-Variable.woff2","5940855d51d43257fe1bbd7b0dc6710d"],["/fonts/Chillax/chillax.css","0d2090517a2cb42f32bd86454b2bb1e0"],["/fonts/Satoshi/Satoshi-Variable.eot","f953920d265c265d55029a0044a7b122"],["/fonts/Satoshi/Satoshi-Variable.ttf","bc0207192e408b721fa14151690c6a66"],["/fonts/Satoshi/Satoshi-Variable.woff","bd7cac4b844318aa2b2f168b57b45c22"],["/fonts/Satoshi/Satoshi-Variable.woff2","70880e42f07b0386e261974cd14820a1"],["/fonts/Satoshi/Satoshi-VariableItalic.eot","9888965098b0fe3121439e5293e5f63d"],["/fonts/Satoshi/Satoshi-VariableItalic.ttf","db98db5c0d84369d2586aaf5eedc3376"],["/fonts/Satoshi/Satoshi-VariableItalic.woff","aa09c255fd899a8d89fc4636c0c9db4d"],["/fonts/Satoshi/Satoshi-VariableItalic.woff2","ed39abb752ab5d8f7d19f0a8d9523c7b"],["/fonts/Satoshi/satoshi.css","1baa156aca1baa1b570089def9ee55ec"],["/fonts/fonts.css","c96283423d2ff104322986b7338b3eba"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff","3575965a87411920b48f5bd97b38810d"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff2","d368363f7f4991eba59db4889aa5b8d1"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff","0ed89b72b63509b506025450c77bfe43"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff2","180f3c1052432d84ad10dad4521cbac0"],["/fonts/ubuntu-mono-v15-latin-regular.woff","86bd37776667f31cd9c6d0a2a9fa7ef5"],["/fonts/ubuntu-mono-v15-latin-regular.woff2","8d1b929856b2ef150dc86f2f38a5dc5b"],["/friends/index.html","d20a4462ef587270e1cb75eb99eca4a1"],["/images/OIP-C.png","b1e36fb5b1e591c5fe85fce686b263e7"],["/images/head1.png","f29ce8b6067bbba624c6f6590649311b"],["/images/head2.png","6a878b3ae2f6f74600141ba1ee1c625d"],["/images/loading.svg","e1de41eda143447d3b338e77f7ace18f"],["/images/redefine-avatar.svg","fd210fedbfe357f35c570f61b943481b"],["/images/redefine-favicon.svg","badc8db1a4c3d1845db4e4ffec333d9e"],["/images/redefine-logo.svg","80a88fff4a3bb50559543e80477aa571"],["/index.html","14c96bf113b9f19e2c8484b0b5545393"],["/js/layouts/categoryList.js","be8705c55bfaa476c5cf3fd995409305"],["/js/layouts/lazyload.js","728031a7240822da29d5bd927d1e1727"],["/js/layouts/navbarShrink.js","e18cdfa8f09238a478e34c0e8810cbab"],["/js/layouts/toc.js","cb98abb318dc0eda4bac6ec6d43faf10"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/libs/SwupPreloadPlugin.min.js","170c2637b152f61a7225171523b9e5f3"],["/js/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/libs/SwupScrollPlugin.min.js","85fe68c41c48170dd104ee4f29690798"],["/js/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/mermaid.min.js","07d4a62ba2e5b0e44077bd9b481fd75d"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/main.js","295801b1c2b4f7fd1d85f34fadc94805"],["/js/plugins/aplayer.js","13934c08bc9325eaad918b497d1216fd"],["/js/plugins/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/js/plugins/masonry.js","5a2fb5815ba12e2efb0323a526dc623f"],["/js/plugins/mermaid.js","929a9284ea999064bc6842d28bf9f102"],["/js/plugins/tabs.js","a6eca0aaba3fd4a5cb8539b129d742cf"],["/js/plugins/typed.js","b3456d138a26a01d00f06e4fcc0a0477"],["/js/tools/codeBlock.js","187983273eb159f9fab0f4bb8d4d02c3"],["/js/tools/imageViewer.js","c8a88531b2388bc965618f7c50a3e82f"],["/js/tools/lightDarkSwitch.js","ab6260f82f3916594294df5ff3e86c94"],["/js/tools/localSearch.js","d9ecf11b97c82251978084566e399426"],["/js/tools/runtime.js","87f27761db6f7a197f99739804ee0c1d"],["/js/tools/scrollTopBottom.js","d984b4612439ba4d47813e1dd1bf46f2"],["/js/tools/tocToggle.js","cd72e98af728161a67fa6b2df9b28d5a"],["/js/utils.js","0cb3343ba95bde5bb08690b6b49b6c5d"],["/lib/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/page/2/index.html","833ecebd5d3849324591916f634d8518"],["/page/3/index.html","024ced383090f3dcacb78cfcfd6e2802"],["/sw-register.js","6d8814a28b1a2c154a36ee3313c96f4d"],["/tags/app/index.html","867a435db509b59e636f627acd8a8ffd"],["/tags/index.html","3cabf8a83ed87d037d4f82a7f854a55d"],["/tags/jupyter-notebook/index.html","d179adc49711fd36109f92c50e407db3"],["/tags/python爬虫/index.html","00797b22242d4d661978876614273e19"],["/tags/statement/index.html","ebcc630edaac22510668f9e98738cf42"],["/tags/test/index.html","d53e93a1c6f2585fab2af54f06324672"],["/tags/位运算/index.html","015616c0fc9d3b3d9fb0e2ec690ce67a"],["/tags/例题/index.html","4edcafe53819a3f11acf2c767e9e515d"],["/tags/前缀和/index.html","f09eb0149ae2d4b6c53ebe7bb04f072d"],["/tags/动态规划/index.html","14437f6fcbdb255e2ba4df4fb27fa9b2"],["/tags/双指针/index.html","c691c313f6502891cb5d05e99caa4a2d"],["/tags/差分/index.html","0bc8f077929ca03b4416b4b3f275b862"],["/tags/指针/index.html","6c67881534325937c2ece4e662372a06"],["/tags/排序/index.html","489f306f8dc8167f9f66c89eb9155dd4"],["/tags/数学/index.html","eece00fcb06fe5b80ef5ccd9c1ee8951"],["/tags/数据分析/index.html","a1975cd4353f65fd6f30aaf7cba643b3"],["/tags/数据结构/index.html","2406e8c9d4c03996759758a5dc97f30d"],["/tags/日期/index.html","ccc7a3857cffa39a3e4dc6c98bfd7f1d"],["/tags/最小生成树/index.html","fe9247e6cd3cb204acea8f102915bf07"],["/tags/模拟/index.html","f8ecfa5eb2f99a6a832da28f260fdc35"],["/tags/模板/index.html","60657a0f7a4fe370d2b5f42d9a0da728"],["/tags/正则表达式/index.html","3485a68c047fc0c2fbe01248480506b6"],["/tags/深度和广度搜索/index.html","5b1d3880b1b1090090ed6130c426e688"],["/tags/滑动窗口/index.html","2b43909954d7ffb86026e8827ff523c1"],["/tags/知识点/index.html","eda0fd48888c24c1e6eaa3c2faf6555e"],["/tags/语法/index.html","624c92adccab4805c57d87681ee0b59b"],["/tags/进制/index.html","d7815c9895c11ad92bce40c293b3e6c3"],["/tags/链表/index.html","9c722863927165686575b188e6a7d72f"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
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
