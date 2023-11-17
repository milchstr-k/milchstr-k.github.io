import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,a as i}from"./app-4effee44.js";const o={},c=i(`<h1 id="linux安装docker-compose" tabindex="-1"><a class="header-anchor" href="#linux安装docker-compose" aria-hidden="true">#</a> linux安装docker-compose</h1><blockquote><p>📌 <strong>关键词：</strong> docker-compose、centOs8</p></blockquote><h2 id="下载路径" tabindex="-1"><a class="header-anchor" href="#下载路径" aria-hidden="true">#</a> 下载路径</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 下载版本
sudo curl -L &quot;https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)&quot; -o /usr/local/bin/docker-compose


# 执行权限
chmod +x /usr/local/bin/docker-compose

# 创建软连接
sudo ln -s /usr/local/bin/docker-compose ~/app/docker-compose

# 查看是否安装成功
ll /usr/local/bin

# 查看版本
docker-compose --version

# 卸载
rm /usr/local/bin/docker-compose 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[c];function l(r,a){return n(),s("div",null,d)}const t=e(o,[["render",l],["__file","centos8安装docker-compose.html.vue"]]);export{t as default};
