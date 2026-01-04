/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/16/help/index.html","55451f364cc03516567c88fd95ae0490"],["/2023/10/16/statement/index.html","0f21145fd6f457213b7df29e0e71d39d"],["/2023/10/16/test/index.html","1a97f43de326c3e3cab663ea1d66bc37"],["/2023/10/22/排序/index.html","27248051a1e4dffe75461064a4db14cd"],["/2023/10/23/python语法/index.html","f18fc1e526d7f3de4ab2bdce91181231"],["/2023/10/26/关于python的链表/index.html","876ec7409148ed8313aad3b669fcb53f"],["/2023/11/16/动态规划/index.html","fcb8cd2fe54b738aac6db9f35b3d44ea"],["/2023/11/17/text/index.html","62bd731613c67c72769baf769e1019c4"],["/2023/12/20/正则表达式/index.html","fcf87f96a420894251de4ad37055e605"],["/2024/02/18/app/index.html","486f9b764c46dc87d6edf51ca8f95d61"],["/2024/02/22/数论专题/index.html","f80796a5f4b78ee09937fc5fb9872b5b"],["/2024/03/04/python数据结构的定义/index.html","b7630b07bbb77de43f6635d989ea4f96"],["/2024/03/17/Untitled 1/index.html","81ab2afd4066ab48c7138798df9260b9"],["/2024/03/21/前缀和与差分/index.html","259097643cb91c063ba5040d309cab5e"],["/2024/03/25/高级数据结构/index.html","0f21dc27561fea02d5778e10067b4bef"],["/2024/04/01/最小生成树/index.html","8cb197e0293e267683706fb48c152139"],["/2024/04/02/深度和广度搜索/index.html","e90382997f8cebd414788f7cf611694c"],["/2024/04/10/进制/index.html","4ae4e588fee2a09bdf6560b1b2f0a364"],["/2024/04/15/日期/index.html","39ede7bcb9a3213208083ee162781f78"],["/2024/04/18/c++语法/index.html","a0790ddc181ca9790b76a6bd9d269587"],["/2024/04/18/java语法/index.html","6de23b5c8fae132b31066480156b615b"],["/2024/04/18/python坑点/index.html","3c4247e292a04fd8688d510417ac48a4"],["/2024/04/18/位运算/index.html","d198eeb454fc5a63e8059bda52c2ae9e"],["/2024/04/18/双指针和滑动窗口/index.html","c6a77db564da00a1b6001303b7f4f7d4"],["/2024/04/18/模拟/index.html","ceaaed8463749c7ff30836c32f480a86"],["/2024/04/29/数据分析/index.html","06b6478d2dde6c24259537d13019c5be"],["/2024/05/05/Untitled 2/index.html","1ab9a0278290a73c81e652257b032c93"],["/2024/05/23/python爬虫/index.html","f2c0004344de8f5419d8b0459ad72b70"],["/2024/05/23/爬虫数据分析案例/index.html","1005b4503810c2ab34452f6fcfff1a77"],["/2024/05/25/Jupyter notebook快速上手/index.html","a5c80c8361f3f9721bac1d85d92608d6"],["/2024/06/13/Untitled 3/index.html","e5dfcd2fac0bb6e8f3e9560bcfff2e28"],["/2024/06/13/pyecharts/index.html","3595199b1153217f18f4170931bb442f"],["/2024/06/23/爬虫/index.html","3279348a07438ac3d243ad0ebc6a4cde"],["/2024/08/09/踩过的坑/index.html","75dcc8a71f67666220238effeb17ef96"],["/2024/09/01/刷题/index.html","b3752d87939ddf8dc4941bf47c177c52"],["/2024/11/22/java项目/index.html","18211a0d932750f46441d830d0e6a11b"],["/2024/12/07/记忆化递归/index.html","fa2b77b0b7d5ba5fdffb82e89939ac07"],["/2025/02/02/比赛时好用的函数/index.html","064aee3a68d00ca33828934453e2ad80"],["/2025/02/09/数据结构模板/index.html","4e67c0829b5b56204c8cfc4acef20099"],["/2025/02/19/二分/index.html","77cd738c8f6f068a2f5db91d7a81d836"],["/2025/02/19/用来优化的算法/index.html","5dd59a0ce236663ca6b106b435986fd0"],["/2025/03/16/矩阵快速幂/index.html","ec9e6dc585bfbfa55e9deb23d77173ac"],["/2025/04/06/python蓝桥真题/index.html","2f7bbe3c1b20d5944d5af861b97b526a"],["/2026/01/04/c/index.html","ff042981d731052aef78469332ca2f1c"],["/2026/01/04/c语言局限性和实践/index.html","dd2f38bd3e462836f59474fb42c32f42"],["/404.html","433c4ca4c17f028990ee42225392bccf"],["/about/index.html","d48c7fb2f2f780145a102ea2f307be0a"],["/archives/2023/10/index.html","86ac0aadbf3aae3bde8ff85cbbbac9c3"],["/archives/2023/11/index.html","6f8b5811f6685931373aa30df5be7e09"],["/archives/2023/12/index.html","95253db7256e825378d191d6e2432382"],["/archives/2023/index.html","077332c14565674bc3bd54fe25885b3a"],["/archives/2024/02/index.html","0c9f8ad7c75b72cb64a1a455927f734b"],["/archives/2024/03/index.html","15c4c10de513130f9f3a7c20a9cfdf13"],["/archives/2024/04/index.html","844558af7a4bcacaa784c223379f0f20"],["/archives/2024/04/page/2/index.html","4b861d9469bc1d70c25a0cc3b7c49591"],["/archives/2024/05/index.html","12c0951acc26a3cb02edb5c1573ba873"],["/archives/2024/06/index.html","b11f8151e1df73438f7efd803106b44e"],["/archives/2024/08/index.html","861601c0125d36c337f8652f512eeafe"],["/archives/2024/09/index.html","1ce0d62e23900c265b2780adce6cabb0"],["/archives/2024/11/index.html","525019ae5bb9f3da149380e77a249148"],["/archives/2024/12/index.html","3ed749823696d7ba0b9d8cda313aedc5"],["/archives/2024/index.html","f5ae02161891abfbbdefaca619969650"],["/archives/2024/page/2/index.html","84014b021f57bba4870bf13295c36b64"],["/archives/2024/page/3/index.html","5a243a06f327009fd24a99a822c4428b"],["/archives/2025/02/index.html","521a1dd57c26b483881419ca41f4bf39"],["/archives/2025/03/index.html","dbe1f1c6a58895a39abf2a6313cd5029"],["/archives/2025/04/index.html","8425c7b99d351a21a21935795b53ed69"],["/archives/2025/index.html","611dcd21e15153a3c1b50fc03874cd37"],["/archives/2026/01/index.html","fe310a81ed4d20ea8c41c05a081d470e"],["/archives/2026/index.html","d344f305ca75809d375e16f219e08084"],["/archives/index.html","c50726fc8dbfcef726318a6e39e72600"],["/archives/page/2/index.html","e83e9fa490dcd61875c4d133eba848fe"],["/archives/page/3/index.html","9f4bcc6d0fd779d15a499b938e0234c1"],["/archives/page/4/index.html","17dd31047a860ba835c067b0ffe6a641"],["/archives/page/5/index.html","6cfb202f78cb049ae2ec9ba018ef42bf"],["/assets/build/styles.css","f9e278c312edf04a8ba87303c2579dc6"],["/assets/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/assets/odometer-theme-minimal.css","d50a198c326f1767cdaecdb7c67b392d"],["/categories/AC/index.html","fee839a09f3380a15d6e68362531f870"],["/categories/AC/page/2/index.html","924c74b18629cd8967478231cee29b98"],["/categories/AC/题型/index.html","ef06ce8af60b285b15965d69af7800e9"],["/categories/AC/题型/page/2/index.html","3e021c4368849ee1bcafcfa0caaf9bee"],["/categories/c/index.html","09369c805f795274f7cf9879692db660"],["/categories/help/index.html","9ac14ce47fb5c1124bc34e8ec7d8f042"],["/categories/index.html","173b58b2a4641193a88d25466ba629cd"],["/categories/python/index.html","7136309621caa71c79a0db88479604ea"],["/categories/开发/index.html","f98e4abe0c60cc6f12c8aaa470b4fcf1"],["/categories/开发/java/index.html","b196b75af4271e51de55135671e0954a"],["/categories/数据结构/index.html","94b71692b15a3793c4d2076165365635"],["/categories/数据结构/python/index.html","f946bd873037b04ff34ca01e737b4107"],["/categories/数论/index.html","c332b6c14edd78174399ea955d47776e"],["/categories/知识点/index.html","75a75a70a027f1217b5e7fd0c2135232"],["/categories/语法/index.html","2dd32012c4a9a67eaa61d7c55716e501"],["/categories/语法/java/index.html","5231c0193524b59e8996a9a38deff3d4"],["/css/common/animated.css","b2aecba9b34c3593d241f2c118a98ae1"],["/css/common/basic.css","e812bd22eb0dd791a27407ddffa0cab9"],["/css/common/codeblock/code-block.css","641572522f017055b703ba651693e89b"],["/css/common/codeblock/code-theme.css","ea96f0c84aa9e83b81d4823fdb5d5ade"],["/css/common/codeblock/highlight.css","a308156514bc8e2f87b4353ff08a4402"],["/css/common/markdown.css","0f093295106a47da4a5bf33ed123c1a4"],["/css/common/redefine-theme.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/variables.css","df0593718af24731f5a339fe7ad46862"],["/css/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","a889e38beab70367d09999e7cb725a24"],["/css/layout/category-content.css","add737cc1862b5da5d542fdc249296a8"],["/css/layout/category-list.css","cd856dcc7f0daded2dad18b6ff213707"],["/css/layout/home-content.css","4c9d5e8b4c8d7ae90aa4acb4ad8e89bb"],["/css/layout/home-sidebar.css","f127276dc862d0a7b72110cb3147a107"],["/css/layout/page.css","a1c503e28a4915fe590503fc1ce5fa6d"],["/css/layout/tag-content.css","edcb378d49a86f68e60b7dd3e9af8a7f"],["/css/style.css","9192f0d51d64883c25d5beec62bb4f89"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/Chillax/Chillax-Variable.eot","f8ea7af333c768147f674ba526612248"],["/fonts/Chillax/Chillax-Variable.ttf","5f13274ffe3e1ee77b67324cb1a9cf7c"],["/fonts/Chillax/Chillax-Variable.woff","16fee1e0f2e5db01ad15ce4535ad39e2"],["/fonts/Chillax/Chillax-Variable.woff2","5940855d51d43257fe1bbd7b0dc6710d"],["/fonts/Chillax/chillax.css","0d2090517a2cb42f32bd86454b2bb1e0"],["/fonts/Satoshi/Satoshi-Variable.eot","f953920d265c265d55029a0044a7b122"],["/fonts/Satoshi/Satoshi-Variable.ttf","bc0207192e408b721fa14151690c6a66"],["/fonts/Satoshi/Satoshi-Variable.woff","bd7cac4b844318aa2b2f168b57b45c22"],["/fonts/Satoshi/Satoshi-Variable.woff2","70880e42f07b0386e261974cd14820a1"],["/fonts/Satoshi/Satoshi-VariableItalic.eot","9888965098b0fe3121439e5293e5f63d"],["/fonts/Satoshi/Satoshi-VariableItalic.ttf","db98db5c0d84369d2586aaf5eedc3376"],["/fonts/Satoshi/Satoshi-VariableItalic.woff","aa09c255fd899a8d89fc4636c0c9db4d"],["/fonts/Satoshi/Satoshi-VariableItalic.woff2","ed39abb752ab5d8f7d19f0a8d9523c7b"],["/fonts/Satoshi/satoshi.css","1baa156aca1baa1b570089def9ee55ec"],["/fonts/fonts.css","c96283423d2ff104322986b7338b3eba"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff","3575965a87411920b48f5bd97b38810d"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff2","d368363f7f4991eba59db4889aa5b8d1"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff","0ed89b72b63509b506025450c77bfe43"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff2","180f3c1052432d84ad10dad4521cbac0"],["/fonts/ubuntu-mono-v15-latin-regular.woff","86bd37776667f31cd9c6d0a2a9fa7ef5"],["/fonts/ubuntu-mono-v15-latin-regular.woff2","8d1b929856b2ef150dc86f2f38a5dc5b"],["/friends/index.html","13df9253b4a8a7673ffb1b22c48fb621"],["/images/OIP-C.png","b1e36fb5b1e591c5fe85fce686b263e7"],["/images/head1.png","f29ce8b6067bbba624c6f6590649311b"],["/images/head2.png","6a878b3ae2f6f74600141ba1ee1c625d"],["/images/loading.svg","e1de41eda143447d3b338e77f7ace18f"],["/images/redefine-avatar.svg","fd210fedbfe357f35c570f61b943481b"],["/images/redefine-favicon.svg","badc8db1a4c3d1845db4e4ffec333d9e"],["/images/redefine-logo.svg","80a88fff4a3bb50559543e80477aa571"],["/index.html","bdf6eb3427a24103191274b9f78a39bc"],["/js/layouts/categoryList.js","be8705c55bfaa476c5cf3fd995409305"],["/js/layouts/lazyload.js","728031a7240822da29d5bd927d1e1727"],["/js/layouts/navbarShrink.js","e18cdfa8f09238a478e34c0e8810cbab"],["/js/layouts/toc.js","cb98abb318dc0eda4bac6ec6d43faf10"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/libs/SwupPreloadPlugin.min.js","170c2637b152f61a7225171523b9e5f3"],["/js/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/libs/SwupScrollPlugin.min.js","85fe68c41c48170dd104ee4f29690798"],["/js/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/mermaid.min.js","07d4a62ba2e5b0e44077bd9b481fd75d"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/main.js","295801b1c2b4f7fd1d85f34fadc94805"],["/js/plugins/aplayer.js","13934c08bc9325eaad918b497d1216fd"],["/js/plugins/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/js/plugins/masonry.js","5a2fb5815ba12e2efb0323a526dc623f"],["/js/plugins/mermaid.js","929a9284ea999064bc6842d28bf9f102"],["/js/plugins/tabs.js","a6eca0aaba3fd4a5cb8539b129d742cf"],["/js/plugins/typed.js","b3456d138a26a01d00f06e4fcc0a0477"],["/js/tools/codeBlock.js","187983273eb159f9fab0f4bb8d4d02c3"],["/js/tools/imageViewer.js","c8a88531b2388bc965618f7c50a3e82f"],["/js/tools/lightDarkSwitch.js","ab6260f82f3916594294df5ff3e86c94"],["/js/tools/localSearch.js","d9ecf11b97c82251978084566e399426"],["/js/tools/runtime.js","87f27761db6f7a197f99739804ee0c1d"],["/js/tools/scrollTopBottom.js","d984b4612439ba4d47813e1dd1bf46f2"],["/js/tools/tocToggle.js","cd72e98af728161a67fa6b2df9b28d5a"],["/js/utils.js","0cb3343ba95bde5bb08690b6b49b6c5d"],["/lib/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/page/2/index.html","a553de10892e1df3bd7a591315bed654"],["/page/3/index.html","18984e35b256df8bd29dfec7bde14ffe"],["/page/4/index.html","63081bc82f985946e03770f403fe116b"],["/sw-register.js","d370576fac2d38dae6cf231dd47baa82"],["/tags/AC/index.html","120e1985bd792dbad8dd28df33212ca2"],["/tags/KMP/index.html","05e7d1ee1f25de8f63713b3dc4cdb9a7"],["/tags/app/index.html","51fe0861b2c1ce8a876419d9c1f9af8c"],["/tags/c/index.html","b738c4afbd1fdd7e973144dd92511160"],["/tags/index.html","beceee65d93b0ed970259ad9219e4ab1"],["/tags/jupyter-notebook/index.html","1c17bb4b8e9bd3621685bd2b5f128d05"],["/tags/python爬虫/index.html","e98a8eb99878d9227190d268448478dc"],["/tags/statement/index.html","218f1ba6606c1db4c53945179dcf3ade"],["/tags/test/index.html","9cc93bc206b078bea67af319f2784e8d"],["/tags/二分/index.html","c646ec351d25a75553bb6d0271dfb6e0"],["/tags/位运算/index.html","484f06a2163e63b8a78d50f266bd1ca3"],["/tags/例题/index.html","ae470f4c24a542d55ddd018a687f3e19"],["/tags/前缀和/index.html","45eca3d701fbee432665dd2fa2b08fe6"],["/tags/动态规划/index.html","fdecb4e333f9e41e079472ed5c0cba88"],["/tags/双指针/index.html","06a01d34b6248b0d96ed5ecc4e5d3f24"],["/tags/差分/index.html","0d4222eff401159581c82ba4c4297a80"],["/tags/指针/index.html","4a7c42ffae608424f884a4ceb4c431d0"],["/tags/排序/index.html","58d603a49a39fd8f9f8c2f8fcdfb780b"],["/tags/数学/index.html","c52f10a0c2478cb0e4cf936f0acf113b"],["/tags/数据分析/index.html","41117a74edd3382826ca2d4dbc22e305"],["/tags/数据结构/index.html","b3fd04a7ea7b546c29f07512b1f07074"],["/tags/日期/index.html","c6064a14fc718e9f0f852116b1b237c1"],["/tags/最小生成树/index.html","c2dad248a99d93947264024cce7dae07"],["/tags/模拟/index.html","2f1822eaa0ab1c14aedb89506e47e616"],["/tags/模板/index.html","c96f264245c333c9a5d3ee81f157fb58"],["/tags/正则表达式/index.html","a0cf5bed0eab19456b999d5d0998382e"],["/tags/深度和广度搜索/index.html","9fae501ef098070be3fd2042c9b5d1bf"],["/tags/滑动窗口/index.html","27b88010bf76f6e37198a827a996f26b"],["/tags/知识点/index.html","b185b74c9068578a344feaed626ae1b8"],["/tags/矩阵快速幂/index.html","daa5670efb6025909f4ecde00e40e0da"],["/tags/记忆化递归/index.html","ecbb01d1194d03e32955522989aee899"],["/tags/语法/index.html","d8839a8b53c531e26bce810c961bc7c8"],["/tags/进制/index.html","28b06f5dbb8a4eab89c89df55ff3d13c"],["/tags/链表/index.html","876e8085c6174aafd87f170972f73dab"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
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
