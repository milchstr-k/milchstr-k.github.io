import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,a as t}from"./app-4effee44.js";const p="/assets/2023-08-03-13-44-45-32eb82d6.png",o="/assets/2023-08-03-13-45-11-23e70473.png",e="/assets/2023-08-03-13-45-27-7474a76b.png",c={},l=t('<h1 id="java对象" tabindex="-1"><a class="header-anchor" href="#java对象" aria-hidden="true">#</a> Java对象</h1><blockquote><p>📌 <strong>关键词：</strong> java、内存</p></blockquote><h2 id="对象构成" tabindex="-1"><a class="header-anchor" href="#对象构成" aria-hidden="true">#</a> 对象构成</h2><ul><li>对象头 <ul><li>Mark Word: 对象运行时数据，动态定义位数据。包含 HashCode、GC 分代年龄、锁状态标志、线程持有的锁、偏向线程 ID、偏向时间戳等。32 位和 64 位的 VM 里 Mark Word 的长度分别 32 bit 和 64 bit。</li><li>Class Pointer: 类型指针，存储一个地址，长度取决于系统位数.对象指向所属 class 的元数据的指针，32 位 VM 4 byte，64 位 VM 8 byte(-XX:+UseCompressedOops 压缩指针 4 byte)。非必需，取决 JVM 实现。</li><li>若为数组对象，包含长度信息，4 byte。</li></ul></li></ul><blockquote><p>非数组对象为2个机器码，数组对象为3个机器码</p></blockquote><ul><li>实例数据 <ul><li>1 bit: boolean</li><li>1 byte: byte</li><li>2 byte: short|char</li><li>4 byte: int|float|oops(Ordinary Object Pointers)</li><li>8 byte: long|double</li></ul></li><li>对齐填充 <ul><li>非必需，保证对象大小是 8 字节的整数倍进行填充的长度。</li><li>仅占位</li></ul></li></ul><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="对象头" tabindex="-1"><a class="header-anchor" href="#对象头" aria-hidden="true">#</a> 对象头</h2><h3 id="mark-word" tabindex="-1"><a class="header-anchor" href="#mark-word" aria-hidden="true">#</a> Mark Word</h3><ul><li>Mark Word <ul><li>锁信息</li><li>GC信息</li><li>hash码</li></ul></li></ul><p><img src="'+o+'" alt="" loading="lazy"><br><img src="'+e+`" alt="" loading="lazy"></p><p>在不同位数的JVM中长度不一样，但是基本组成内容是一致的。</p><ul><li>锁标志位（lock）：区分锁状态，11时表示对象待GC回收状态, 只有最后2位锁标识(11)有效。</li><li>biased_lock：是否偏向锁，由于无锁和偏向锁的锁标识都是 01，没办法区分，这里引入一位的偏向锁标识位。</li><li>分代年龄（age）：表示对象被GC的次数，当该次数到达阈值的时候，对象就会转移到老年代。</li><li>对象的hashcode（hash）：运行期间调用System.identityHashCode()来计算，延迟计算，并把结果赋值到这里。当对象加锁后，计算的结果31位不够表示，在偏向锁，轻量锁，重量锁，hashcode会被转移到Monitor中。</li><li>偏向锁的线程ID（JavaThread）：偏向模式的时候，当某个线程持有对象的时候，对象这里就会被置为该线程的ID。 在后面的操作中，就无需再进行尝试获取锁的动作。</li><li>epoch：偏向锁在CAS锁操作过程中，偏向性标识，表示对象更偏向哪个锁。</li><li>ptr_to_lock_record：轻量级锁状态下，指向栈中锁记录的指针。当锁获取是无竞争的时，JVM使用原子操作而不是OS互斥。这种技术称为轻量级锁定。在轻量级锁定的情况下，JVM通过CAS操作在对象的标题字中设置指向锁记录的指针。</li><li>ptr_to_heavyweight_monitor：重量级锁状态下，指向对象监视器Monitor的指针。如果两个不同的线程同时在同一个对象上竞争，则必须将轻量级锁定升级到Monitor以管理等待的线程。在重量级锁定的情况下，JVM在对象的ptr_to_heavyweight_monitor设置指向Monitor的指针。</li></ul><h3 id="class-pointer" tabindex="-1"><a class="header-anchor" href="#class-pointer" aria-hidden="true">#</a> Class Pointer</h3><p>类型指针，是对象指向它的类元数据的指针，虚拟机通过这个指针来确定这个对象是哪个类的实例。</p><h3 id="实例数据" tabindex="-1"><a class="header-anchor" href="#实例数据" aria-hidden="true">#</a> 实例数据</h3><p>对象有属性字段，则会有数据信息，无属性字段则无数据信息。</p><h2 id="数据对齐" tabindex="-1"><a class="header-anchor" href="#数据对齐" aria-hidden="true">#</a> 数据对齐</h2><p>数据对齐非必须。默认情况下，Java虚拟机堆中对象的起始地址需要对齐至8的倍数。如果一个对象用不到8N个字节则需要对其填充，以此来补齐对象头和实例数据占用内存之后剩余的空间大小。如果对象头和实例数据已经占满了JVM所分配的内存空间，那么就不用再进行对齐填充了。</p><h3 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h3><p>字段内存对齐其中的一个原因，是让字段只出现在同一CPU的缓存行中。如果字段不是对齐的，那么就有可能出现跨缓存行的字段。也就是说，该字段的读取可能需要替换两个缓存行，而该字段的存储也会同时污染两个缓存行。这两种情况对程序的执行效率而言都是不利的。对齐填充最终目的是为了计算机高效寻址。</p><h3 id="对象分析" tabindex="-1"><a class="header-anchor" href="#对象分析" aria-hidden="true">#</a> 对象分析</h3><h4 id="maven引入jol-core" tabindex="-1"><a class="header-anchor" href="#maven引入jol-core" aria-hidden="true">#</a> Maven引入jol-core</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
	<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 分析对象布局 <span class="token operator">--</span><span class="token operator">&gt;</span>
		<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
			<span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>openjdk<span class="token punctuation">.</span>jol<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
			<span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>jol<span class="token operator">-</span>core<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
			<span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">0.10</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;对象内部信息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">ClassLayout</span><span class="token punctuation">.</span><span class="token function">parseInstance</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toPrintable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">ClassLayout</span><span class="token punctuation">.</span><span class="token function">parseInstance</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token char">&#39;t&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;s&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;t&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toPrintable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;对象整体信息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">GraphLayout</span><span class="token punctuation">.</span><span class="token function">parseInstance</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toPrintable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">GraphLayout</span><span class="token punctuation">.</span><span class="token function">parseInstance</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token char">&#39;t&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;s&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;t&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toPrintable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;对象占用总空间&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">GraphLayout</span><span class="token punctuation">.</span><span class="token function">parseInstance</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">totalSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">GraphLayout</span><span class="token punctuation">.</span><span class="token function">parseInstance</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token char">&#39;t&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;s&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;t&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">totalSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jprofiler" tabindex="-1"><a class="header-anchor" href="#jprofiler" aria-hidden="true">#</a> JProfiler</h4><p>用于分析正在运行的JVM内部发生的情况。</p>`,28),i=[l];function u(r,k){return a(),s("div",null,i)}const m=n(c,[["render",u],["__file","Java对象内存分析.html.vue"]]);export{m as default};
