/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/16/help/index.html","1dfc56ba453ce9ccb1c27ce0f212e1e6"],["/2023/10/16/statement/index.html","ef12ec47f9483cc2d39dc9d0591f7eca"],["/2023/10/16/test/index.html","38a913ef2043b13e2d6d69178a4fe7b7"],["/2023/10/22/排序/index.html","a45139604b310cfa96629150cc6dea5d"],["/2023/10/23/python语法/index.html","106f16740dda20017791aca8b94480e9"],["/2023/10/26/关于python的链表/index.html","decc41936d1d3879c4b73b7c9dfd8980"],["/2023/11/16/动态规划/index.html","a26f1a9e7adedf38e7a8c63255bab683"],["/2023/11/17/text/index.html","3f5cd3eaf93ff7eb37bda8bd7644c1df"],["/2023/12/20/正则表达式/index.html","f35c2d615eb1f0ee52d7b8c7ede64ef5"],["/2024/02/18/app/index.html","0d5030b296046afd732a263657c7d1fd"],["/2024/02/22/数论专题/index.html","64c2cd55e6ef414c821bdbcbb4bc6fea"],["/2024/03/04/python数据结构的定义/index.html","81bd3c0f025bd69568f4f1bef8abcc59"],["/2024/03/17/Untitled 1/index.html","ad37440f9e05154352be3c3635e4cbd0"],["/2024/03/21/前缀和与差分/index.html","c470951e4c0c258a41d1f003185af2fd"],["/2024/03/25/高级数据结构/index.html","52448bfa2ed0d75b9081bd1324cf68b4"],["/2024/04/01/最小生成树/index.html","0c36634df9fc3d985a8fcce5690031a0"],["/2024/04/02/深度和广度搜索/index.html","dccee5884788cbeb49e44849e0fb55ed"],["/2024/04/10/进制/index.html","e83c80c6a93fcac27b98153ad3ddc7d4"],["/2024/04/15/日期/index.html","70eb2e700a427ca3e7f03ef1c6fe7f29"],["/2024/04/18/c++语法/index.html","b50aa0346fe0246effc5102ec3e0f14b"],["/2024/04/18/java语法/index.html","73e2cf93a1f359aa9340f744025b354c"],["/2024/04/18/python坑点/index.html","9c9da5154c2ba6b5bc4703e44aa1f820"],["/2024/04/18/位运算/index.html","7e2c94e11bb4a3ca63611a0bc070a543"],["/2024/04/18/双指针和滑动窗口/index.html","f6e2476b66ee7319f16661d29274e240"],["/2024/04/18/模拟/index.html","5a2912bbf66f2acfdb2078de0fc86aee"],["/2024/04/29/数据分析/index.html","3e346d173447f3a4c730672c384ab05a"],["/2024/05/05/Untitled 2/index.html","5956db96721dab2c01671dd79eae17af"],["/2024/05/23/python爬虫/index.html","676bf93d64d7d8454aaf5ed4f88b585d"],["/2024/05/23/爬虫数据分析案例/index.html","f93e046513c5e4aa08de556e32368fd4"],["/2024/05/25/Jupyter notebook快速上手/index.html","a02f03987580456bb6df4bed6f518cbe"],["/2024/06/13/Untitled 3/index.html","6d14e55ba0ad1c66f90c02be0bb56bf3"],["/2024/06/13/pyecharts/index.html","e94bb34a7856fb78ec119657ff559fc1"],["/2024/06/23/爬虫/index.html","3ccad2ca3cc5cdd79c3893155a5f4deb"],["/2024/08/09/踩过的坑/index.html","8c2291a4ddda031d58aaabe3374af4c5"],["/2024/09/01/刷题/index.html","d6f953edbba69af65f4afb1fd47ed15b"],["/2024/11/22/java项目/index.html","108848691e4215bf3c3a10f3259ba379"],["/2024/12/07/记忆化递归/index.html","7028dd2e4ac87db671ee62ca98148af7"],["/2025/02/02/比赛时好用的函数/index.html","b4c47110439cdc954c0d5ec068247e90"],["/2025/02/09/数据结构模板/index.html","7d72d095a8bcab434ede7f8263b1d679"],["/2025/02/19/二分/index.html","8a8e53664815e715b58f51f4f8ea3a5c"],["/2025/02/19/用来优化的算法/index.html","f6728bc041a38f034c936789f0964058"],["/2025/03/16/矩阵快速幂/index.html","1970f61c9d2d8ddd7d1d48a77b0ef1b4"],["/2025/04/06/python蓝桥真题/index.html","a4cd6c4c950a0f3577f54f2c3b575f9f"],["/2026/01/04/c/index.html","355f73f94c733cd298004d00d6b854f2"],["/2026/01/04/c语言局限性和实践/index.html","2a0c35848841b706ca0a74f04f55aec2"],["/404.html","165bdd01c3ffb733432317539642599c"],["/about/index.html","effa3fd869c81ac10a1ac87f10818d66"],["/archives/2023/10/index.html","be325606b66dc6c4a6231e8efd380592"],["/archives/2023/11/index.html","4cffa62ae7f43ebe7a132d3cc69ead02"],["/archives/2023/12/index.html","1555212bf98650e865f04dce9826fa05"],["/archives/2023/index.html","eda58cdb6cac95005db2243ce11fc4dd"],["/archives/2024/02/index.html","4af36fa34e2c85a7feaf672b15e9ae14"],["/archives/2024/03/index.html","27d0538a9fa89213b9986f3819d0ad40"],["/archives/2024/04/index.html","f0bc30ce688fed88bc2831c30f214b0c"],["/archives/2024/04/page/2/index.html","768e629a019c6ba88c6ba87e1843c6a5"],["/archives/2024/05/index.html","745950b58acc331e62010834ac003167"],["/archives/2024/06/index.html","009533fdb721fc2d8a92505a59934b42"],["/archives/2024/08/index.html","b311c38023a2c7259fcb0c823c41e826"],["/archives/2024/09/index.html","11db2ffc89c26e868cba81695a363f77"],["/archives/2024/11/index.html","b44a259c671bc1dbc80a2abdf7312b29"],["/archives/2024/12/index.html","a9e70c8bbabc4524d9ebf43cc43f2a47"],["/archives/2024/index.html","671c1db00fd045c29169b1c65e2e51ed"],["/archives/2024/page/2/index.html","2caccd07cb46233decae36c784f2b3ae"],["/archives/2024/page/3/index.html","8bafd6b4ec79aafe8a1bece330c5834f"],["/archives/2025/02/index.html","c3ec5501ed17309cd6cb7adf2002bc81"],["/archives/2025/03/index.html","40efd418f643eac2fe2358cfc7f0979e"],["/archives/2025/04/index.html","caeea950c1b0eab7a0e0ad040b655181"],["/archives/2025/index.html","ed8a94e99994a668cd9f1909947b7538"],["/archives/2026/01/index.html","f2a115dbd9b433b66f598c3a19b28a7c"],["/archives/2026/index.html","3d446b79d1f2ba6f954130491ac8d479"],["/archives/index.html","bef3ab2c0de91ef27e118ad8179601ca"],["/archives/page/2/index.html","b2133e8d32c6728b36669bbd9e6ca9c3"],["/archives/page/3/index.html","1cedda2fbd491f6a7161c3d58a3a8907"],["/archives/page/4/index.html","41d088efa9ac105b3647dd2c14ad0d02"],["/archives/page/5/index.html","686ee715c0a566eb2ac9550a112ea874"],["/assets/build/styles.css","f9e278c312edf04a8ba87303c2579dc6"],["/assets/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/assets/odometer-theme-minimal.css","d50a198c326f1767cdaecdb7c67b392d"],["/categories/AC/index.html","5408fe11f8a5b230fbf6ea01d08e96e3"],["/categories/AC/page/2/index.html","718c3f9ae3cea9aea8eec3bd7bc6016e"],["/categories/AC/题型/index.html","5f5d5842632e481bc9a47f7c05e8205d"],["/categories/AC/题型/page/2/index.html","7a8978c26f5c4490792055d2c643857b"],["/categories/c/index.html","da339aeabfe3fa70de8f3e6720afccc8"],["/categories/help/index.html","0d3a9de0a3789ee601d2a1c9469952d9"],["/categories/index.html","a1cb2e0c6f6c97f01197d35825cef501"],["/categories/java/index.html","40e3f003c640e42e1415a9e0b2032ccd"],["/categories/java/开发/index.html","1938ef36fe0c57848daeb7054b652078"],["/categories/python/index.html","9a28690af82ca6f903a01a2e594c25c7"],["/categories/开发/index.html","87bf065f99f236675af1a749fc9e4654"],["/categories/数据结构/index.html","8817b6d3570fe2ecf520a9c691123841"],["/categories/数据结构/python/index.html","87369c4aebd93705542d8626b64bacfe"],["/categories/数论/index.html","ba2f3a40986c32867b673e932b88e692"],["/categories/知识点/index.html","01efc2da2acdf76ecc232a7c11342a82"],["/css/common/animated.css","b2aecba9b34c3593d241f2c118a98ae1"],["/css/common/basic.css","e812bd22eb0dd791a27407ddffa0cab9"],["/css/common/codeblock/code-block.css","641572522f017055b703ba651693e89b"],["/css/common/codeblock/code-theme.css","ea96f0c84aa9e83b81d4823fdb5d5ade"],["/css/common/codeblock/highlight.css","a308156514bc8e2f87b4353ff08a4402"],["/css/common/markdown.css","0f093295106a47da4a5bf33ed123c1a4"],["/css/common/redefine-theme.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/variables.css","df0593718af24731f5a339fe7ad46862"],["/css/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","a889e38beab70367d09999e7cb725a24"],["/css/layout/category-content.css","add737cc1862b5da5d542fdc249296a8"],["/css/layout/category-list.css","cd856dcc7f0daded2dad18b6ff213707"],["/css/layout/home-content.css","4c9d5e8b4c8d7ae90aa4acb4ad8e89bb"],["/css/layout/home-sidebar.css","f127276dc862d0a7b72110cb3147a107"],["/css/layout/page.css","a1c503e28a4915fe590503fc1ce5fa6d"],["/css/layout/tag-content.css","edcb378d49a86f68e60b7dd3e9af8a7f"],["/css/style.css","9192f0d51d64883c25d5beec62bb4f89"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/Chillax/Chillax-Variable.eot","f8ea7af333c768147f674ba526612248"],["/fonts/Chillax/Chillax-Variable.ttf","5f13274ffe3e1ee77b67324cb1a9cf7c"],["/fonts/Chillax/Chillax-Variable.woff","16fee1e0f2e5db01ad15ce4535ad39e2"],["/fonts/Chillax/Chillax-Variable.woff2","5940855d51d43257fe1bbd7b0dc6710d"],["/fonts/Chillax/chillax.css","0d2090517a2cb42f32bd86454b2bb1e0"],["/fonts/Satoshi/Satoshi-Variable.eot","f953920d265c265d55029a0044a7b122"],["/fonts/Satoshi/Satoshi-Variable.ttf","bc0207192e408b721fa14151690c6a66"],["/fonts/Satoshi/Satoshi-Variable.woff","bd7cac4b844318aa2b2f168b57b45c22"],["/fonts/Satoshi/Satoshi-Variable.woff2","70880e42f07b0386e261974cd14820a1"],["/fonts/Satoshi/Satoshi-VariableItalic.eot","9888965098b0fe3121439e5293e5f63d"],["/fonts/Satoshi/Satoshi-VariableItalic.ttf","db98db5c0d84369d2586aaf5eedc3376"],["/fonts/Satoshi/Satoshi-VariableItalic.woff","aa09c255fd899a8d89fc4636c0c9db4d"],["/fonts/Satoshi/Satoshi-VariableItalic.woff2","ed39abb752ab5d8f7d19f0a8d9523c7b"],["/fonts/Satoshi/satoshi.css","1baa156aca1baa1b570089def9ee55ec"],["/fonts/fonts.css","c96283423d2ff104322986b7338b3eba"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff","3575965a87411920b48f5bd97b38810d"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff2","d368363f7f4991eba59db4889aa5b8d1"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff","0ed89b72b63509b506025450c77bfe43"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff2","180f3c1052432d84ad10dad4521cbac0"],["/fonts/ubuntu-mono-v15-latin-regular.woff","86bd37776667f31cd9c6d0a2a9fa7ef5"],["/fonts/ubuntu-mono-v15-latin-regular.woff2","8d1b929856b2ef150dc86f2f38a5dc5b"],["/friends/index.html","3fd5d2ee4d3a4fb79823a4ced9444137"],["/images/OIP-C.png","b1e36fb5b1e591c5fe85fce686b263e7"],["/images/head1.png","f29ce8b6067bbba624c6f6590649311b"],["/images/head2.png","6a878b3ae2f6f74600141ba1ee1c625d"],["/images/loading.svg","e1de41eda143447d3b338e77f7ace18f"],["/images/redefine-avatar.svg","fd210fedbfe357f35c570f61b943481b"],["/images/redefine-favicon.svg","badc8db1a4c3d1845db4e4ffec333d9e"],["/images/redefine-logo.svg","80a88fff4a3bb50559543e80477aa571"],["/index.html","7b2d143c861732904fc8bde5b017222f"],["/js/layouts/categoryList.js","be8705c55bfaa476c5cf3fd995409305"],["/js/layouts/lazyload.js","728031a7240822da29d5bd927d1e1727"],["/js/layouts/navbarShrink.js","e18cdfa8f09238a478e34c0e8810cbab"],["/js/layouts/toc.js","cb98abb318dc0eda4bac6ec6d43faf10"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/libs/SwupPreloadPlugin.min.js","170c2637b152f61a7225171523b9e5f3"],["/js/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/libs/SwupScrollPlugin.min.js","85fe68c41c48170dd104ee4f29690798"],["/js/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/mermaid.min.js","07d4a62ba2e5b0e44077bd9b481fd75d"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/main.js","295801b1c2b4f7fd1d85f34fadc94805"],["/js/plugins/aplayer.js","13934c08bc9325eaad918b497d1216fd"],["/js/plugins/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/js/plugins/masonry.js","5a2fb5815ba12e2efb0323a526dc623f"],["/js/plugins/mermaid.js","929a9284ea999064bc6842d28bf9f102"],["/js/plugins/tabs.js","a6eca0aaba3fd4a5cb8539b129d742cf"],["/js/plugins/typed.js","b3456d138a26a01d00f06e4fcc0a0477"],["/js/tools/codeBlock.js","187983273eb159f9fab0f4bb8d4d02c3"],["/js/tools/imageViewer.js","c8a88531b2388bc965618f7c50a3e82f"],["/js/tools/lightDarkSwitch.js","ab6260f82f3916594294df5ff3e86c94"],["/js/tools/localSearch.js","d9ecf11b97c82251978084566e399426"],["/js/tools/runtime.js","87f27761db6f7a197f99739804ee0c1d"],["/js/tools/scrollTopBottom.js","d984b4612439ba4d47813e1dd1bf46f2"],["/js/tools/tocToggle.js","cd72e98af728161a67fa6b2df9b28d5a"],["/js/utils.js","0cb3343ba95bde5bb08690b6b49b6c5d"],["/lib/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/page/2/index.html","e44b9dccf16b2ce78c9fe8f89fe8edd9"],["/page/3/index.html","f2b9e75cf6b12528cf4de277590a7312"],["/page/4/index.html","03cb0389c62c557b473dc3c9255b4637"],["/sw-register.js","1af6ea218f54b1b5091c42d39378a5ca"],["/tags/AC/index.html","a654c320bb8e50f13622f7686bbe5358"],["/tags/KMP/index.html","bbffbc182473c773150e9c7331f68ecc"],["/tags/app/index.html","b6ba23be8f6b9f7be5d5109d4885c068"],["/tags/c/index.html","971e6086520e7129e8358154293bc7a3"],["/tags/index.html","7db3f0ccb5abbbb25ab6b9c820902b4b"],["/tags/jupyter-notebook/index.html","011be84a107aabbc6e53577e5b37f7c4"],["/tags/python爬虫/index.html","6fb1ae63fff5194557490e2480a2a7e9"],["/tags/statement/index.html","6e9937951227c1376fd368557b41b51d"],["/tags/test/index.html","168a42ac7620e9ae1da73f3ec42a81f4"],["/tags/二分/index.html","e2d2151c2939aee49bbb24e28658c2f4"],["/tags/位运算/index.html","e5d234e1a55c17aa657ca97dc63e1d6e"],["/tags/例题/index.html","d1967daf8aaaba4d365a45ea2f6036b6"],["/tags/前缀和/index.html","74dee8a51b1b489e1b5a6da109bb2f23"],["/tags/动态规划/index.html","56dcc3c92affe1be384801e8498a9821"],["/tags/双指针/index.html","a8a996a2fd8d9cd06bfe082dba4bb4c8"],["/tags/差分/index.html","227c4ce6c51419ea8ccf65327dd4ca45"],["/tags/指针/index.html","a16911ab230c402aabea7fedfe38bfdc"],["/tags/排序/index.html","16ce398f7cae4c45c78ce75e1d5ea5ba"],["/tags/数学/index.html","ac83a47bc0ebe1005de5c7fc512110a1"],["/tags/数据分析/index.html","0a60ec5717291972e69c34b76622a496"],["/tags/数据结构/index.html","2d08e87c6c1d9fbdb3a31726f53cd7d4"],["/tags/日期/index.html","23315f82476228d3089ea22c2565108b"],["/tags/最小生成树/index.html","89e627cee29e8254a480ee182ce3f13a"],["/tags/模拟/index.html","dbdcdc4a80b3fe3c0f43edb6b126ed4c"],["/tags/模板/index.html","e58a9f8b7fbc62cb181f229ef8f91578"],["/tags/正则表达式/index.html","1456decea2d05804ddcc0b5aa1d21a03"],["/tags/深度和广度搜索/index.html","398e0e065b676a0ebcd13fde76721243"],["/tags/滑动窗口/index.html","fed82d99535aec91a1f7b7db720a60aa"],["/tags/知识点/index.html","adb4a0fd58c9e684697c0fcdc76830fe"],["/tags/矩阵快速幂/index.html","05ea70a5cf0be27fe28d051bee9deac6"],["/tags/记忆化递归/index.html","eb790447b2963d34ce99f1a257051411"],["/tags/语法/index.html","e6ab4dede30967e3fd1d9904ed37578f"],["/tags/进制/index.html","8f22f0f71c9c98c8023f0451036323e0"],["/tags/链表/index.html","119990982c09f9d18b7ba2f596dba444"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
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
