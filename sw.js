/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/16/help/index.html","6edd005611d6668717d928796ce0610a"],["/2023/10/16/statement/index.html","f6257014e2a309755fd88cede168bfcf"],["/2023/10/16/test/index.html","f72abf8f80a913c81f3c33004877c85b"],["/2023/10/16/两整数之和/index.html","c7d8f736b7db500663e84f8e00e7d22f"],["/2023/10/16/位1的个数/index.html","0baef3b7e30400a3addb8446a7a7a4d0"],["/2023/10/16/爬楼梯/index.html","22260f644b59b80d127ad3100d1565c8"],["/2023/10/16/设计机械累加器/index.html","06c31cbd2ca8447bbf6de742e920c773"],["/2023/10/17/斐波那契数/index.html","2414cd08bf33e721ceb459f381ae67b9"],["/2023/10/17/第 N 个泰波那契数/index.html","ed4d45e3103177184dc5a748b4d08ef0"],["/2023/10/21/Untitled/index.html","13f67aa0b98c33b898ab40da4fac3f80"],["/2023/10/22/排序/index.html","5de606f5fe50487d033cf49b4c38db12"],["/2023/10/23/python语法/index.html","1a78ccad4bd86f042e8870006877f877"],["/2023/10/23/分隔链表/index.html","5d7d43c71c248d0404443f6b931b5949"],["/2023/10/26/交换链表中的节点/index.html","69a31190917794b31c5559f7661f8975"],["/2023/10/26/关于python的链表/index.html","6f0cec8603eef0984c428d3bcd209b26"],["/2023/10/26/图书整理/index.html","fb750b90827f07cb82914c284862183b"],["/2023/11/03/删掉一个元素以后全为 1 的最长子数组/index.html","06d95c32c2a68951b13bea834edaca79"],["/2023/11/05/子字符串的最优划分/index.html","013d9993b4f0e3128cc91d0c1f03f098"],["/2023/11/16/动态规划/index.html","2363d3d0283bf896b9f48eb2119e9281"],["/2023/11/16/打家劫舍/index.html","7b9af9d0e00c78b35dbd24f9c0c4b832"],["/2023/11/17/text/index.html","81ec375ce05b09041f6f60a26df0088c"],["/2023/12/20/正则表达式/index.html","c98ef2f3839802ad699d3d42f6be1cfc"],["/2024/02/22/数论专题/index.html","2584a83c19034541cdb604cda57bed65"],["/2024/02/22/最长连续因子/index.html","4c0d6137d4cd8e64b6bf63e3e9df33c8"],["/2024/03/04/python数据结构的定义/index.html","448ff7eb130794833b467216a4c631fc"],["/2024/03/15/矩阵中的最长递增路径/index.html","42aa46e2b87826ca9132fdb77fe0f4c0"],["/2024/03/17/Untitled 1/index.html","a271ed9ab74d863d65b38b0d0194176c"],["/2024/03/17/回文子串/index.html","6396e1d9b1733a7673f330a49cace4ec"],["/2024/03/18/截断数组/index.html","83eaa984cd06fa0e137a9354b0a814a3"],["/2024/03/21/前缀和与差分 (copy)/index.html","bbc5fcd203fc011b5b6a50960a645828"],["/2024/03/21/前缀和与差分/index.html","56333dd94749ec25b48ac8e5736d81c5"],["/404.html","59a021a6ae941e7f63e2e37f6d361b3a"],["/about/index.html","593527741ca455ecabfbdd85ebad557e"],["/archives/2023/10/index.html","311a4284439b89e66552e9c3ff515786"],["/archives/2023/10/page/2/index.html","9cf592b2e30f5d69755728779dfb8bbd"],["/archives/2023/11/index.html","5e4df2995f3029781af258d426c864fb"],["/archives/2023/12/index.html","1c9cb095a70f235f02d6a030e44016be"],["/archives/2023/index.html","de9907c2c7c8b72dd93ffbd0946ab2b8"],["/archives/2023/page/2/index.html","c7597cbbf73fbca3410c17713738b622"],["/archives/2023/page/3/index.html","86738ce0121f66d911a90d64bc751a0c"],["/archives/2024/02/index.html","24f5d5aaaede081cfff0704d6a3adcf8"],["/archives/2024/03/index.html","0bec9320782a5196b2fe7688d9537ced"],["/archives/2024/index.html","fa9a4577e30113c70f68ebeccf839f02"],["/archives/index.html","ed4d8653a34cfb162af72f1f582aba54"],["/archives/page/2/index.html","f93ea2b9d7644fefffd8abef71495048"],["/archives/page/3/index.html","860db90c2befe40d5ce5dd452e9f4555"],["/archives/page/4/index.html","7e2973e2dbd299a281c57ae8a475c4fb"],["/assets/build/styles.css","f9e278c312edf04a8ba87303c2579dc6"],["/assets/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/assets/odometer-theme-minimal.css","d50a198c326f1767cdaecdb7c67b392d"],["/categories/AC/help/index.html","3c4561a0d655ea16b9344ca41d175fce"],["/categories/AC/index.html","8c98e3d26fff8e9a3057f55276afc627"],["/categories/AC/leetcode/index.html","48112ab169388bb7932c88ac401ff6b2"],["/categories/AC/leetcode/page/2/index.html","d5322b0bacbb602463b98fbe5b3c1071"],["/categories/AC/leetcode/数据结构/index.html","bb816d64d387ce14a5c29ab05bd5f715"],["/categories/AC/leetcode/精选/index.html","e5819efbf277e23ca875aa5e4fe1bca3"],["/categories/AC/page/2/index.html","f83424c9bee15c9ea3f5907a075d0b98"],["/categories/AC/pta/index.html","63848af16bea75ca755740d18b9bc2b1"],["/categories/AC/动态规划/index.html","ba48e8dfa646657e4e30dcbcba659177"],["/categories/AC/排序/index.html","aeb1d5c89deabce652bb1657d602b538"],["/categories/AC/蓝桥/index.html","a47d9c7c7c0a42bf74a963e6428c5988"],["/categories/Aq/index.html","22ca6b2413132cbffb8587cfbb699e7d"],["/categories/help/index.html","0f9fb8789e7ac7f2707758ea63339924"],["/categories/index.html","feed76227713e0e3a152ba95576be6fc"],["/categories/python/index.html","48feb13428a76e1f4704d3bd845a6c74"],["/categories/study/index.html","68a6d9318785a748b5f8078659b7507a"],["/categories/数据结构/index.html","fba555f0067c08640b49c959bb3536e3"],["/categories/数据结构/python/index.html","d062a5f9348440c5ed10ebaf9a5ba3aa"],["/categories/数论/index.html","9940fb88e057a71269309ab398c1250f"],["/css/common/animated.css","b2aecba9b34c3593d241f2c118a98ae1"],["/css/common/basic.css","e812bd22eb0dd791a27407ddffa0cab9"],["/css/common/codeblock/code-block.css","641572522f017055b703ba651693e89b"],["/css/common/codeblock/code-theme.css","ea96f0c84aa9e83b81d4823fdb5d5ade"],["/css/common/codeblock/highlight.css","a308156514bc8e2f87b4353ff08a4402"],["/css/common/markdown.css","0f093295106a47da4a5bf33ed123c1a4"],["/css/common/redefine-theme.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/variables.css","df0593718af24731f5a339fe7ad46862"],["/css/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","a889e38beab70367d09999e7cb725a24"],["/css/layout/category-content.css","add737cc1862b5da5d542fdc249296a8"],["/css/layout/category-list.css","cd856dcc7f0daded2dad18b6ff213707"],["/css/layout/home-content.css","4c9d5e8b4c8d7ae90aa4acb4ad8e89bb"],["/css/layout/home-sidebar.css","f127276dc862d0a7b72110cb3147a107"],["/css/layout/page.css","a1c503e28a4915fe590503fc1ce5fa6d"],["/css/layout/tag-content.css","edcb378d49a86f68e60b7dd3e9af8a7f"],["/css/style.css","9192f0d51d64883c25d5beec62bb4f89"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/Chillax/Chillax-Variable.eot","f8ea7af333c768147f674ba526612248"],["/fonts/Chillax/Chillax-Variable.ttf","5f13274ffe3e1ee77b67324cb1a9cf7c"],["/fonts/Chillax/Chillax-Variable.woff","16fee1e0f2e5db01ad15ce4535ad39e2"],["/fonts/Chillax/Chillax-Variable.woff2","5940855d51d43257fe1bbd7b0dc6710d"],["/fonts/Chillax/chillax.css","0d2090517a2cb42f32bd86454b2bb1e0"],["/fonts/Satoshi/Satoshi-Variable.eot","f953920d265c265d55029a0044a7b122"],["/fonts/Satoshi/Satoshi-Variable.ttf","bc0207192e408b721fa14151690c6a66"],["/fonts/Satoshi/Satoshi-Variable.woff","bd7cac4b844318aa2b2f168b57b45c22"],["/fonts/Satoshi/Satoshi-Variable.woff2","70880e42f07b0386e261974cd14820a1"],["/fonts/Satoshi/Satoshi-VariableItalic.eot","9888965098b0fe3121439e5293e5f63d"],["/fonts/Satoshi/Satoshi-VariableItalic.ttf","db98db5c0d84369d2586aaf5eedc3376"],["/fonts/Satoshi/Satoshi-VariableItalic.woff","aa09c255fd899a8d89fc4636c0c9db4d"],["/fonts/Satoshi/Satoshi-VariableItalic.woff2","ed39abb752ab5d8f7d19f0a8d9523c7b"],["/fonts/Satoshi/satoshi.css","1baa156aca1baa1b570089def9ee55ec"],["/fonts/fonts.css","c96283423d2ff104322986b7338b3eba"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff","3575965a87411920b48f5bd97b38810d"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff2","d368363f7f4991eba59db4889aa5b8d1"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff","0ed89b72b63509b506025450c77bfe43"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff2","180f3c1052432d84ad10dad4521cbac0"],["/fonts/ubuntu-mono-v15-latin-regular.woff","86bd37776667f31cd9c6d0a2a9fa7ef5"],["/fonts/ubuntu-mono-v15-latin-regular.woff2","8d1b929856b2ef150dc86f2f38a5dc5b"],["/friends/index.html","d20a4462ef587270e1cb75eb99eca4a1"],["/images/OIP-C.png","b1e36fb5b1e591c5fe85fce686b263e7"],["/images/head1.png","f29ce8b6067bbba624c6f6590649311b"],["/images/head2.png","6a878b3ae2f6f74600141ba1ee1c625d"],["/images/loading.svg","e1de41eda143447d3b338e77f7ace18f"],["/images/redefine-avatar.svg","fd210fedbfe357f35c570f61b943481b"],["/images/redefine-favicon.svg","badc8db1a4c3d1845db4e4ffec333d9e"],["/images/redefine-logo.svg","80a88fff4a3bb50559543e80477aa571"],["/index.html","fe26af3e19819ca52dfbc5fe683849e3"],["/js/layouts/categoryList.js","be8705c55bfaa476c5cf3fd995409305"],["/js/layouts/lazyload.js","728031a7240822da29d5bd927d1e1727"],["/js/layouts/navbarShrink.js","e18cdfa8f09238a478e34c0e8810cbab"],["/js/layouts/toc.js","cb98abb318dc0eda4bac6ec6d43faf10"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/libs/SwupPreloadPlugin.min.js","170c2637b152f61a7225171523b9e5f3"],["/js/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/libs/SwupScrollPlugin.min.js","85fe68c41c48170dd104ee4f29690798"],["/js/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/mermaid.min.js","07d4a62ba2e5b0e44077bd9b481fd75d"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/main.js","295801b1c2b4f7fd1d85f34fadc94805"],["/js/plugins/aplayer.js","13934c08bc9325eaad918b497d1216fd"],["/js/plugins/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/js/plugins/masonry.js","5a2fb5815ba12e2efb0323a526dc623f"],["/js/plugins/mermaid.js","929a9284ea999064bc6842d28bf9f102"],["/js/plugins/tabs.js","a6eca0aaba3fd4a5cb8539b129d742cf"],["/js/plugins/typed.js","b3456d138a26a01d00f06e4fcc0a0477"],["/js/tools/codeBlock.js","187983273eb159f9fab0f4bb8d4d02c3"],["/js/tools/imageViewer.js","c8a88531b2388bc965618f7c50a3e82f"],["/js/tools/lightDarkSwitch.js","ab6260f82f3916594294df5ff3e86c94"],["/js/tools/localSearch.js","d9ecf11b97c82251978084566e399426"],["/js/tools/runtime.js","87f27761db6f7a197f99739804ee0c1d"],["/js/tools/scrollTopBottom.js","d984b4612439ba4d47813e1dd1bf46f2"],["/js/tools/tocToggle.js","cd72e98af728161a67fa6b2df9b28d5a"],["/js/utils.js","0cb3343ba95bde5bb08690b6b49b6c5d"],["/lib/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/page/2/index.html","d11b69622d64b34f34a449d6c5a088e3"],["/page/3/index.html","fb87028f6508a82810edeef20ab01b7f"],["/sw-register.js","9d7e25d75a33f161440526e82fe91436"],["/tags/dfs/index.html","6619311c2c8e0c79b22ce526f92f6974"],["/tags/index.html","778f6c69311eb35403c1c39d575ac762"],["/tags/statement/index.html","ebcc630edaac22510668f9e98738cf42"],["/tags/test/index.html","d53e93a1c6f2585fab2af54f06324672"],["/tags/位运算/index.html","720c7d535773b5c55c337ea796ff4bf5"],["/tags/前缀和/index.html","ee2959e2885cb007946bf727341616a7"],["/tags/动态规划/index.html","7ff7c5ea4cc4192791af3b55d538c17b"],["/tags/双指针/index.html","1e1e7151fb4eb3fed09b8d9419646904"],["/tags/差分/index.html","0bc8f077929ca03b4416b4b3f275b862"],["/tags/指针/index.html","62362b3955c1fd23d08d62f9dae857e8"],["/tags/排序/index.html","489f306f8dc8167f9f66c89eb9155dd4"],["/tags/数学/index.html","eece00fcb06fe5b80ef5ccd9c1ee8951"],["/tags/数据结构/index.html","4f4853991d40a3a7362c40867d839b43"],["/tags/斐波那契/index.html","38cdebad661d743133af5fa4bfce5e36"],["/tags/栈/index.html","dee062c7df86e3d8161937f1fb7e4e97"],["/tags/正则表达式/index.html","3485a68c047fc0c2fbe01248480506b6"],["/tags/移动窗口/index.html","50b726db07126f53ee71f54d2466944f"],["/tags/线性dp/index.html","a28825716a7d0ab6da55de8b26b56eaa"],["/tags/语法/index.html","28b08fcc0a8ee8baf3a02e6ec202807c"],["/tags/贪心/index.html","6abf9053e1e62294d55fe3f80bfe4abd"],["/tags/递归/index.html","0ab3020fbf1544063af5caecaaa1d4ae"],["/tags/链表/index.html","795002c883447ba6a2176a9ba9322af1"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
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
