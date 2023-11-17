import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as l,a as e}from"./app-4effee44.js";const r={},h=e('<h1 id="综合知识" tabindex="-1"><a class="header-anchor" href="#综合知识" aria-hidden="true">#</a> 综合知识</h1><h1 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h1><h2 id="简要说明fast开发方法每个阶段主要任务" tabindex="-1"><a class="header-anchor" href="#简要说明fast开发方法每个阶段主要任务" aria-hidden="true">#</a> 简要说明Fast开发方法每个阶段主要任务</h2><ul><li>初始研究阶段 <ul><li>列出问题、机会和指示</li><li>协商项目的初步范围</li><li>评估项目价值</li><li>计划项目</li></ul></li><li>问题分析阶段 <ul><li>研究问题领域</li><li>分析问题和机会</li><li>分析业务过程</li><li>制定系统改进目标</li><li>修改项目计划</li><li>阶段确认</li></ul></li><li>需求分析阶段 <ul><li>定义需求</li><li>分析功能需求</li><li>跟踪和完善需求</li><li>排列需求的优先次序</li><li>修改项目计划</li></ul></li><li>决策分析阶段 <ul><li>确定候选方案</li><li>分析候选方案</li><li>比较候选方案</li><li>修改项目计划</li><li>推荐一个方案</li></ul></li></ul><h2 id="简要说明mqtt" tabindex="-1"><a class="header-anchor" href="#简要说明mqtt" aria-hidden="true">#</a> 简要说明MQTT</h2><p>MQTT是一个物联网传输协议，它被设计用于轻量级的发布/订阅式的消息传输。为低带宽和不稳定的网络环境中的物联网设备提供可靠的网络服务。<br> MQTT是专门针对物联网开发的轻量级传输协议，MQTT对低带宽网络、低计算能力的设备做了特殊优化，使得其能适应各种物联网应用场景。</p><h2 id="分析在传统云计算模型引入边缘计算模型优势" tabindex="-1"><a class="header-anchor" href="#分析在传统云计算模型引入边缘计算模型优势" aria-hidden="true">#</a> 分析在传统云计算模型引入边缘计算模型优势</h2><ul><li>速度<br> 使用边缘计算，物联网设备将在边缘数据中心或本地处理数据，数据无需传输回中央处理器，速度优势明显。</li><li>安全<br> 边缘计算将在不同的数据中心或设备之间分配数据处理工作，黑客无法通过攻击一台设备来影响整个网络。</li><li>可扩展性<br> 通过购买具有足够计算能力的设备来扩展边缘网络，企业无需为其数据需求建立自己的私有或集中式数据中心。</li><li>可靠性<br> 所有边缘设备中心和物联网设备都位于用户附近，网络中断的可能性非常小。</li></ul><h2 id="哈希算法和一致性哈希算法" tabindex="-1"><a class="header-anchor" href="#哈希算法和一致性哈希算法" aria-hidden="true">#</a> 哈希算法和一致性哈希算法</h2><ul><li>哈希算法<br> 哈希算法通过某种哈希算法散列得到一个值，按该值将数据分配到集群响应节点进行缓存。</li><li>一致性哈希算法<br> 一致性哈希算法将整个哈希值空间映射成一个按顺时针方向组织的虚拟圆环，使用哈希算法算出数据哈希值，<br> 根据哈希值的位置沿圆环顺时针查找，将数据分配到第一个遇到的集群节点进行缓存。</li><li>一致性哈希算法的优点 <ul><li>可扩展性：保证了增加或减少服务器时，数据存储的改变最少，相比传统哈希算法大大节省了数据移动的开销。</li><li>更好使用数据快速增长</li></ul></li></ul><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h1 id="论文" tabindex="-1"><a class="header-anchor" href="#论文" aria-hidden="true">#</a> 论文</h1><h2 id="摘要" tabindex="-1"><a class="header-anchor" href="#摘要" aria-hidden="true">#</a> 摘要</h2><p>2020年8月，我参与了“在线问诊平台”项目的建设工作，并担任系统架构师，负责系统架构工作。该系统主要以在线问诊为核心，分为用户信息管理、病历管理、推荐处方、药品配送等功能。本文以该项目为例，主要讨论微服务架构设计在项目中的具体应用。首先根据业务领域和技术实现不同，本着单一职责的原则将系统划分众多服务，解决业务模块高度耦合问题，其次拆分后的服务利用nacos进行服务治理来解决服务不好治理、配置文件分散问题，通过netflix实现服务熔断降级，防止服务异常从而导致雪崩效应，使整条服务链宕机。通过使用xx提高了软件设计质量和开发效率，最终项目成功上线，并获得了用户一致好评。</p><h2 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h2><p>在现今信息化时代，医疗服务领域新形态不断涌现，“互联网+医疗”作为其中突出的一种，在挂号结算、远程诊疗、咨询服务等方面进行了不少探索。根据“互联网+医疗健康”发展的意见推进医疗机构开展部分常见病、慢性病复诊等互联网医疗服务，在线问诊系统开始逐渐流行，出现了使用计算机训练模型辅助诊断的案例。这种模式的出现有效实现了线下患者的分流，将大城市医疗资源下沉进不发达城市，减轻当前中国医疗健康系统的负担。2020年8月，我司承接了某医院在线问诊平台项目，该项目主要以患者问诊，医生接诊为主要功能，凭借问诊效率高，无论身在何处都能为患者提供便捷的优质医疗资源的优势让业务快速扩张，用户量飞速增长从而也使需求更加快速变化，以前的单体项目显然已逐渐无法适应我司对软件的要求，微服务改造刻不容缓。本项目全体成员32人，我在项目中担任系统架构师职务，主要负责整体架构设计、技术选型、服务拆分等工作。</p><p>在现今信息化时代，医疗服务领域新形态不断涌现，“互联网+医疗”作为其中突出的一种，在挂号结算、远程诊疗、咨询服务等方面进行了不少探索。根据“互联网+医疗健康”发展的意见推进医疗机构开展部分常见病、慢性病复诊等互联网医疗服务，在线问诊系统开始逐渐流行，出现了使用计算机训练模型辅助诊断的案例。这种模式的出现有效实现了线下患者的分流，将大城市医疗资源下沉进不发达城市，减轻当前中国医疗健康系统的负担。2020年8月，我司承接了某医院在线问诊平台项目，该项目主要分为用户信息管理，病历管理，推荐处方，患者咨询，药品配送等模块。用户信息管理模块针对注册用户基本信息管理将对应病历及以往看诊记录绑定。病历管理模块显示该患者的以往病历信息供医生线上查看。推荐处方模块根据医生对患者问题情况的判断进行对应的处方推荐。患者咨询模块支持患者通过文字或视频的方式接受医疗诊疗。药品配送模块，负责线上医生对患者诊疗结束后开具的药物通过第三方快递公司送到患者所在地。在该项目中我担任软件架构设计师职务，主要负责软件的架构设计及中间件等技术的选型工作。</p><h2 id="问题回答" tabindex="-1"><a class="header-anchor" href="#问题回答" aria-hidden="true">#</a> 问题回答</h2><h2 id="结尾" tabindex="-1"><a class="header-anchor" href="#结尾" aria-hidden="true">#</a> 结尾</h2><p>项目从2020年8月启动到2021年10月历时14个月，圆满完成，顺利完成验收。当前该系统在全国多家大型医院提供稳定高效服务，在节省大量医疗成本的同时，让百姓得到了更好的就诊体验。<br> 根据以往项目经验，我们使用https协议，即在http的基础上通过传输加密和身份认证来保证信息传输过程的安全性。然而，院方指出这不满足其严格的要求标准，对此，我做了如下改进。对于注册登录系统，使用SpringSecurity和Token技术以增强用户身份验证，对于用户密码使用MD5并加盐，对于其他业务数据，采用DSA非对称加密算法，防止伪造身份进行非法请求和窃听消息等网络攻击。此外，我们将对院方数据库操作的服务部署在各院区内网，并添加网关服务，作为外网和院区服务的中介，通过在网关服务中添加用户和访问接口地址白名单，配合加密算法，保障了院方数据库的高安全性，同时也避免了客户端请求多个服务地址可能会出现的跨域问题。更进一步，我们将数字认证领域的龙头北京CA集成进系统，通过物理USB-Key和数字证书验证等方式，确保患者和医师在系统操作中的身份不可抵赖性，并具有法律效力。<br>   实践证明，合适的架构设计是项目成功的基础。在系统建设中，我也发现了自身的不足，接下来我将勤于总结问题，通过持续的回顾，反思和探究，学习新技术，不断地提升架构设计能力，以建设质量更高的项目。</p>',20),d=[h];function t(n,c){return a(),l("div",null,d)}const o=i(r,[["render",t],["__file","软考知识点.html.vue"]]);export{o as default};
