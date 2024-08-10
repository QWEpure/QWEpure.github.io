/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/16/help/index.html","aae009e3613de26253d64cd339d79f47"],["/2023/10/16/statement/index.html","5ab0e6e2b2fbd9d4b88bb7c627840647"],["/2023/10/16/test/index.html","1239568d6b2a144ab0dc3d62fc98fb4a"],["/2023/10/22/排序/index.html","50c2f73d089d0c5f4a72125914ca9399"],["/2023/10/23/python语法/index.html","1f08bec428a9a95f6b2e0ccc9176f2c5"],["/2023/10/26/关于python的链表/index.html","f8b6728f082840a717f4b2662baedf3c"],["/2023/11/16/动态规划/index.html","c96ecacb34f7065db10c7629530fb480"],["/2023/11/17/text/index.html","33ff020926094b66bb2496929bc855c0"],["/2023/12/20/正则表达式/index.html","3bb7f49bd824dc082e8e149acbd246ca"],["/2024/02/18/app/index.html","6df38d07fc45b87e65287f7fc4ca296d"],["/2024/02/22/数论专题/index.html","55b5a9ad08de7a4e1b0a727850dde001"],["/2024/03/04/python数据结构的定义/index.html","64abac61e95fc30fb80689a471ac2853"],["/2024/03/17/Untitled 1/index.html","76fa7c9981fb626420ae899ef7e88252"],["/2024/03/21/前缀和与差分/index.html","65a21e2580623ac9d2cf976fab5cdfef"],["/2024/03/25/数据结构/index.html","c705da8b787a53f156139e7fd5b3cf2c"],["/2024/04/01/最小生成树/index.html","ac85984e44434449f55d0c052fca010c"],["/2024/04/02/深度和广度搜索/index.html","51a02fe43a87e20bbf84df8d6db69632"],["/2024/04/10/进制/index.html","f4df393381a325913c7f16fbbea2ab2e"],["/2024/04/15/日期/index.html","5516d6627cb7e43e68bd9cfbadba20ad"],["/2024/04/18/c++语法/index.html","194bc11a2d48b8c7d11c2fb1e980577b"],["/2024/04/18/java语法/index.html","bc7bbd8abef9d7aa531ed15be3cc334e"],["/2024/04/18/python标准库在题目方面的知识点/index.html","3ef264f053fbdec73ff511bd6cfe1f72"],["/2024/04/18/位运算/index.html","7be80c5eab34fd052439c4c094446e67"],["/2024/04/18/双指针和滑动窗口/index.html","50031e1b66424bce54572e58a6ab819c"],["/2024/04/18/模拟/index.html","9bf62b9f050af11b6f5260e1b5afa226"],["/2024/04/29/数据分析/index.html","ea89fc3db9f9b1ea18a70589edbbbec1"],["/2024/05/05/Untitled 2/index.html","d58e44f08f9b1b48d953549321127a88"],["/2024/05/23/python爬虫/index.html","18db39d1cc719b967ffd0e7379b7607e"],["/2024/05/23/爬虫数据分析案例/index.html","3cd601f74b7f8ce64c55e6d30ed243b3"],["/2024/05/25/Jupyter notebook快速上手/index.html","6cb2076876f280af7f98143acae50e6d"],["/2024/06/13/Untitled 3/index.html","aabcf0724f2b2d4ebf9c61decc638367"],["/2024/06/13/pyecharts/index.html","1b779df017c0e508d9fd36e8c9dee329"],["/2024/06/23/爬虫/index.html","2ca0f228a481dea88dd2e394f7a73f19"],["/2024/08/09/踩过的坑/index.html","8e27a07f0642b7e688e78f937612cbee"],["/404.html","d7553e5535c13612fb4b563faa2d4234"],["/about/index.html","a7d07cc17c0af4a3145f95ae6f8363cb"],["/archives/2023/10/index.html","57cdd49423d703b820b5da8d85149fcb"],["/archives/2023/11/index.html","91502e5b40cff904ed91a0897047fa89"],["/archives/2023/12/index.html","781ebfa3f4eaf35494164c093e56692b"],["/archives/2023/index.html","6ea99387661de978f95f50d8d190b720"],["/archives/2024/02/index.html","6b069b36bce561fc766ebfc415ec7151"],["/archives/2024/03/index.html","a434d6b846b489f7c9cf59a657487993"],["/archives/2024/04/index.html","e33e3e39053a028143803ac4cbdcd162"],["/archives/2024/04/page/2/index.html","dfc581fc2327dfea06cc469608caeac7"],["/archives/2024/05/index.html","8123fde8f2980a88f04ea2b1b8f503d2"],["/archives/2024/06/index.html","4706f71953b70ad79816f90c2381dd18"],["/archives/2024/08/index.html","3aadae2d2b1b30ae48d4cc065b9fb948"],["/archives/2024/index.html","036c89537e9007d88f3e98b6afab2ade"],["/archives/2024/page/2/index.html","8c625e099fbd9790f3fe47f566eeefe6"],["/archives/2024/page/3/index.html","d6bf9306cd53b5cbf7b97ab7ea317064"],["/archives/index.html","73e0a2613ba89f00ca9bf22d652d98ab"],["/archives/page/2/index.html","7709aafdba8dc0fc3d3cf142c5ae34d1"],["/archives/page/3/index.html","bd81ac865021a751e7b36cf0c6ca5581"],["/archives/page/4/index.html","0d5fab1c69013bf512e905048f36283d"],["/assets/build/styles.css","f9e278c312edf04a8ba87303c2579dc6"],["/assets/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/assets/odometer-theme-minimal.css","d50a198c326f1767cdaecdb7c67b392d"],["/categories/AC/index.html","74ee477e0d69925d240218be145f8ee1"],["/categories/AC/page/2/index.html","194e04a1fc384aac68f24916b211dd51"],["/categories/AC/大纲/index.html","0e60213bb61447cc02276fda868f7349"],["/categories/c/index.html","ef0fd9eae0fded2464339f086d6447b3"],["/categories/help/index.html","e492c1644ba8f30cd05d3e26d7bf7adc"],["/categories/index.html","4c7f76fb7d88fea59e604f07bacee16e"],["/categories/python/index.html","595b79a949625c43f7f935ed3907746d"],["/categories/开发/index.html","12595ec1d4982035232b9a481d71cd76"],["/categories/数据结构/index.html","09818ec879df81e344cc71b50744e461"],["/categories/数据结构/python/index.html","d832737795a2e8e4f529531f11681817"],["/categories/数据结构/python/大纲/index.html","2980ff6102f4df1a1015eaa331f56ac6"],["/categories/数论/index.html","aa27af5dfb33b086b500815f5868a643"],["/categories/知识点/index.html","ccf5e34afd8b8221f92e807658650be7"],["/categories/语法/index.html","41e72824e8d9ba67cc09a408f57ddae1"],["/categories/语法/java/index.html","d8c86f924013d611f431bad2b1b758d5"],["/css/common/animated.css","b2aecba9b34c3593d241f2c118a98ae1"],["/css/common/basic.css","e812bd22eb0dd791a27407ddffa0cab9"],["/css/common/codeblock/code-block.css","641572522f017055b703ba651693e89b"],["/css/common/codeblock/code-theme.css","ea96f0c84aa9e83b81d4823fdb5d5ade"],["/css/common/codeblock/highlight.css","a308156514bc8e2f87b4353ff08a4402"],["/css/common/markdown.css","0f093295106a47da4a5bf33ed123c1a4"],["/css/common/redefine-theme.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/variables.css","df0593718af24731f5a339fe7ad46862"],["/css/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","a889e38beab70367d09999e7cb725a24"],["/css/layout/category-content.css","add737cc1862b5da5d542fdc249296a8"],["/css/layout/category-list.css","cd856dcc7f0daded2dad18b6ff213707"],["/css/layout/home-content.css","4c9d5e8b4c8d7ae90aa4acb4ad8e89bb"],["/css/layout/home-sidebar.css","f127276dc862d0a7b72110cb3147a107"],["/css/layout/page.css","a1c503e28a4915fe590503fc1ce5fa6d"],["/css/layout/tag-content.css","edcb378d49a86f68e60b7dd3e9af8a7f"],["/css/style.css","9192f0d51d64883c25d5beec62bb4f89"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/Chillax/Chillax-Variable.eot","f8ea7af333c768147f674ba526612248"],["/fonts/Chillax/Chillax-Variable.ttf","5f13274ffe3e1ee77b67324cb1a9cf7c"],["/fonts/Chillax/Chillax-Variable.woff","16fee1e0f2e5db01ad15ce4535ad39e2"],["/fonts/Chillax/Chillax-Variable.woff2","5940855d51d43257fe1bbd7b0dc6710d"],["/fonts/Chillax/chillax.css","0d2090517a2cb42f32bd86454b2bb1e0"],["/fonts/Satoshi/Satoshi-Variable.eot","f953920d265c265d55029a0044a7b122"],["/fonts/Satoshi/Satoshi-Variable.ttf","bc0207192e408b721fa14151690c6a66"],["/fonts/Satoshi/Satoshi-Variable.woff","bd7cac4b844318aa2b2f168b57b45c22"],["/fonts/Satoshi/Satoshi-Variable.woff2","70880e42f07b0386e261974cd14820a1"],["/fonts/Satoshi/Satoshi-VariableItalic.eot","9888965098b0fe3121439e5293e5f63d"],["/fonts/Satoshi/Satoshi-VariableItalic.ttf","db98db5c0d84369d2586aaf5eedc3376"],["/fonts/Satoshi/Satoshi-VariableItalic.woff","aa09c255fd899a8d89fc4636c0c9db4d"],["/fonts/Satoshi/Satoshi-VariableItalic.woff2","ed39abb752ab5d8f7d19f0a8d9523c7b"],["/fonts/Satoshi/satoshi.css","1baa156aca1baa1b570089def9ee55ec"],["/fonts/fonts.css","c96283423d2ff104322986b7338b3eba"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff","3575965a87411920b48f5bd97b38810d"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff2","d368363f7f4991eba59db4889aa5b8d1"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff","0ed89b72b63509b506025450c77bfe43"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff2","180f3c1052432d84ad10dad4521cbac0"],["/fonts/ubuntu-mono-v15-latin-regular.woff","86bd37776667f31cd9c6d0a2a9fa7ef5"],["/fonts/ubuntu-mono-v15-latin-regular.woff2","8d1b929856b2ef150dc86f2f38a5dc5b"],["/friends/index.html","cdb92fb227cd2e5d7b0800e9c72defec"],["/images/OIP-C.png","b1e36fb5b1e591c5fe85fce686b263e7"],["/images/head1.png","f29ce8b6067bbba624c6f6590649311b"],["/images/head2.png","6a878b3ae2f6f74600141ba1ee1c625d"],["/images/loading.svg","e1de41eda143447d3b338e77f7ace18f"],["/images/redefine-avatar.svg","fd210fedbfe357f35c570f61b943481b"],["/images/redefine-favicon.svg","badc8db1a4c3d1845db4e4ffec333d9e"],["/images/redefine-logo.svg","80a88fff4a3bb50559543e80477aa571"],["/index.html","9f10df65d766982694cfa000ed61c85d"],["/js/layouts/categoryList.js","be8705c55bfaa476c5cf3fd995409305"],["/js/layouts/lazyload.js","728031a7240822da29d5bd927d1e1727"],["/js/layouts/navbarShrink.js","e18cdfa8f09238a478e34c0e8810cbab"],["/js/layouts/toc.js","cb98abb318dc0eda4bac6ec6d43faf10"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/libs/SwupPreloadPlugin.min.js","170c2637b152f61a7225171523b9e5f3"],["/js/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/libs/SwupScrollPlugin.min.js","85fe68c41c48170dd104ee4f29690798"],["/js/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/mermaid.min.js","07d4a62ba2e5b0e44077bd9b481fd75d"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/main.js","295801b1c2b4f7fd1d85f34fadc94805"],["/js/plugins/aplayer.js","13934c08bc9325eaad918b497d1216fd"],["/js/plugins/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/js/plugins/masonry.js","5a2fb5815ba12e2efb0323a526dc623f"],["/js/plugins/mermaid.js","929a9284ea999064bc6842d28bf9f102"],["/js/plugins/tabs.js","a6eca0aaba3fd4a5cb8539b129d742cf"],["/js/plugins/typed.js","b3456d138a26a01d00f06e4fcc0a0477"],["/js/tools/codeBlock.js","187983273eb159f9fab0f4bb8d4d02c3"],["/js/tools/imageViewer.js","c8a88531b2388bc965618f7c50a3e82f"],["/js/tools/lightDarkSwitch.js","ab6260f82f3916594294df5ff3e86c94"],["/js/tools/localSearch.js","d9ecf11b97c82251978084566e399426"],["/js/tools/runtime.js","87f27761db6f7a197f99739804ee0c1d"],["/js/tools/scrollTopBottom.js","d984b4612439ba4d47813e1dd1bf46f2"],["/js/tools/tocToggle.js","cd72e98af728161a67fa6b2df9b28d5a"],["/js/utils.js","0cb3343ba95bde5bb08690b6b49b6c5d"],["/lib/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/page/2/index.html","f8c323c2a0b8990a3b0a04d8af10f477"],["/page/3/index.html","1c3df8c76a17d601f2f9f5fdd87e66fc"],["/sw-register.js","fc5913d85d59d9f1e12e56d6880d1a1f"],["/tags/app/index.html","7befdc09c9b150e328984081ec588dac"],["/tags/index.html","b278d154ff9286dd56737c5b6af33def"],["/tags/jupyter-notebook/index.html","4ee7a8a943814be9d7a672e5ffe1144e"],["/tags/python爬虫/index.html","be2a04a87b796407433c1574c8f3f0dc"],["/tags/statement/index.html","f65da4eb182a54c960a3c4af08c2ffce"],["/tags/test/index.html","0aba1cbefaa6dda5f62190c509f38f8e"],["/tags/位运算/index.html","364ec210d6cdf4714613a290b6c28b71"],["/tags/例题/index.html","a945c7b156e0c1f8b0c83ee899da865f"],["/tags/前缀和/index.html","af75dddd694367e6866be131915ceb0f"],["/tags/动态规划/index.html","58e6657849f480ac397985c1db5c580d"],["/tags/双指针/index.html","74de2090ca2048cd3a3900f61940878e"],["/tags/差分/index.html","5b60d345d442e7809b1e72cc1552143f"],["/tags/指针/index.html","5e7d9767480ddf0c9d2e9027699f12f3"],["/tags/排序/index.html","a40ffdae33f1ed958181a00877f996e8"],["/tags/数学/index.html","99ccca1729eee4234b9bad0a078eb199"],["/tags/数据分析/index.html","651758b2aaf93741081e469f42682ba5"],["/tags/数据结构/index.html","5dc9095d563a21728027b8c0059dcb5e"],["/tags/日期/index.html","88ad9c8e32e5d94f94f6a17b8d9223a0"],["/tags/最小生成树/index.html","0a9fe0d0f6aafc3eab3d65445ac2ac07"],["/tags/模拟/index.html","f4cd835e05446b0b2a265fdef48a2bb5"],["/tags/模板/index.html","f6e59c18d842ef5d68ac6348746838b7"],["/tags/正则表达式/index.html","59548b50f33a277cb521918091c6ee5e"],["/tags/深度和广度搜索/index.html","ae7144b283aa996c2e6cac2439d5e171"],["/tags/滑动窗口/index.html","838fd9de47f5a66116bf0ec2f8791e74"],["/tags/知识点/index.html","f023ea706e315e647e57919e69a09191"],["/tags/语法/index.html","baad5d9267f5b9c080c5d66cb3967fef"],["/tags/进制/index.html","e88f87b3339aca3a732c8eb8ff8a67ce"],["/tags/链表/index.html","ec0db4d00cda66bc0516d55866fbf1ed"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
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
