import{_ as s,c as e,f as a,o as l}from"./app-C49nKLGn.js";const t="/img/2019/10/3379439183.png",n={};function p(h,i){return l(),e("div",null,i[0]||(i[0]=[a('<h3 id="isis中路由器的角色" tabindex="-1"><a class="header-anchor" href="#isis中路由器的角色"><span>ISIS中路由器的角色：</span></a></h3><ul><li>区域内路由器： <ul><li>level-1路由器、负责跟其他区域连通的路由器称为level-1-2路由器，</li><li>level-2路由器类似于骨干路由器，但是还会与其他的路由域连通。</li></ul></li></ul><h3 id="isis与ospf的比较" tabindex="-1"><a class="header-anchor" href="#isis与ospf的比较"><span>ISIS与OSPF的比较：</span></a></h3><ol><li><p>区域的设计：</p><ul><li>ISIS的区域分割点在链路上，骨干网是由所有的level-1-2路由器和level-2路由器组成的范围，</li><li>OSPF的区域分割点在设备上，骨干区域是区域0。</li></ul></li><li><p>相同点：</p></li></ol><ul><li>链路状态型路由协议，收敛速度快，支持网络/路由分级</li></ul><h3 id="isis协议原理" tabindex="-1"><a class="header-anchor" href="#isis协议原理"><span>ISIS协议原理：</span></a></h3><ul><li><p>OSI地址：采用NSAP地址格式</p><blockquote><p>可变长区域地址 : 系统ID（system id）: NSEL（1Byte）</p></blockquote></li><li><p>区域地址：长度可变，一般为1-13个字节system</p></li><li><p>id：系统ID，类似于OSPF中的Router ID，在一个路由域中唯一的标识一台路由器。</p></li><li><p>NSEL：服务类型选择符，00为TCP/IP</p></li></ul><h3 id="网络拓扑图" tabindex="-1"><a class="header-anchor" href="#网络拓扑图"><span>网络拓扑图</span></a></h3><p><img src="'+t+`" alt="isis.png"></p><h3 id="配置主要命令" tabindex="-1"><a class="header-anchor" href="#配置主要命令"><span>配置主要命令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">R1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">isis //启动isis</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">R1-isis-1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">network-en 10.0000.0000.0001.00 //该路由osi地址</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">R1-isis-1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">quit</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">R1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">int g0/0/0</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">R1-GigabitEthernet0/0/0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">isis enable //端口0开启服务</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">R1-GigabitEthernet0/0/0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">int g0/0/3  //切换端口</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">R1-GigabitEthernet0/0/3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">isis enable //端口3开启服务</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const d=s(n,[["render",p],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/cn_test/iuatvaxw/","title":"huawei-isis动态路由实验","lang":"zh-CN","frontmatter":{"title":"huawei-isis动态路由实验","createTime":"2019/10/12 22:05:25","permalink":"/cn_test/iuatvaxw/","description":"ISIS中路由器的角色： 区域内路由器： level-1路由器、负责跟其他区域连通的路由器称为level-1-2路由器， level-2路由器类似于骨干路由器，但是还会与其他的路由域连通。 ISIS与OSPF的比较： 区域的设计： ISIS的区域分割点在链路上，骨干网是由所有的level-1-2路由器和level-2路由器组成的范围， OSPF的区域分...","head":[["meta",{"property":"og:url","content":"https://wantofun.cn/cn_test/iuatvaxw/"}],["meta",{"property":"og:site_name","content":"Want to Fun"}],["meta",{"property":"og:title","content":"huawei-isis动态路由实验"}],["meta",{"property":"og:description","content":"ISIS中路由器的角色： 区域内路由器： level-1路由器、负责跟其他区域连通的路由器称为level-1-2路由器， level-2路由器类似于骨干路由器，但是还会与其他的路由域连通。 ISIS与OSPF的比较： 区域的设计： ISIS的区域分割点在链路上，骨干网是由所有的level-1-2路由器和level-2路由器组成的范围， OSPF的区域分..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-13T07:16:51.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-13T07:16:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"huawei-isis动态路由实验\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-13T07:16:51.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"ISIS中路由器的角色：","slug":"isis中路由器的角色","link":"#isis中路由器的角色","children":[]},{"level":3,"title":"ISIS与OSPF的比较：","slug":"isis与ospf的比较","link":"#isis与ospf的比较","children":[]},{"level":3,"title":"ISIS协议原理：","slug":"isis协议原理","link":"#isis协议原理","children":[]},{"level":3,"title":"网络拓扑图","slug":"网络拓扑图","link":"#网络拓扑图","children":[]},{"level":3,"title":"配置主要命令","slug":"配置主要命令","link":"#配置主要命令","children":[]}],"readingTime":{"minutes":1.12,"words":337},"git":{"createdTime":1731482211000,"updatedTime":1731482211000,"contributors":[{"name":"fan","email":"yswfgo@qq.com","commits":1}]},"autoDesc":true,"filePathRelative":"notes/计网实验/5.huawei-isis动态路由实验.md","bulletin":false}');export{d as comp,k as data};
