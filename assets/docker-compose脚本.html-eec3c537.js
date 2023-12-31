import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c as d,b as e,d as i,e as o,a as n}from"./app-4effee44.js";const l={},c=n(`<h1 id="docker-compose脚本" tabindex="-1"><a class="header-anchor" href="#docker-compose脚本" aria-hidden="true">#</a> docker-compose脚本</h1><blockquote><p>📌 <strong>关键词：</strong> docker-compose、脚本</p></blockquote><h2 id="kafka3" tabindex="-1"><a class="header-anchor" href="#kafka3" aria-hidden="true">#</a> Kafka3</h2><p>Kafka3无需安装zookeeper</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &quot;3&quot;
services:
  kafka:
    image: bitnami/kafka:latest
    user: root
    ports:
      - 9092:9092
      - 9093:9093
    environment:
      - KAFKA_ENABLE_KRAFT=yes  # kraft模式
      - KAFKA_CFG_PROCESS_ROLES=broker,controller # 服务器在KRaft模式中同时充当Broker和Controller。
      - KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER
      - KAFKA_CFG_LISTENER=PLAINTEXT://:9092,CONTROLLER://:9093
      - KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,PLAINTEXT:PLAINTEXT
      - KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 #宿主机ip
      - KAFKA_BROKER_ID=1
      - KAFKA_KRAFT_CLUSTER_ID=7es-47FeQpCKpLfsN1uPxQ
      - KAFKA_CFG_CONTROLLER_QUORUM_VOYERS=1@localhost:9093
      - ALLOW_PLAINTEXT_LISTENER=yes  # 允许使用PLAINTEXT侦听器

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v={href:"https://github.com/apache/kafka/blob/trunk/config/kraft/server.properties",target:"_blank",rel:"noopener noreferrer"},m=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>进入kafka容器
docker exec -it kafka-kafka-1 bash
找到kafka提供的脚本
cd /opt/bitnami/kafka/bin
创建tioic
#解释：创建1个副本3个分区的topic,命名为mytest
./kafka-topics.sh --zookeeper master:2181 --create --topic mytest --replication-factor 1 --partitions 3
查看topic分区
./kafka-topics.sh --zookeeper master:2181 --describe --topic mytest
Topic:mytest  PartitionCount:3  ReplicationFactor:1 Configs:
  Topic: mytest Partition: 0  Leader: 0 Replicas: 0 Isr: 0
  Topic: mytest Partition: 1  Leader: 0 Replicas: 0 Isr: 0
  Topic: mytest Partition: 2  Leader: 0 Replicas: 0 Isr: 0

实验需要打开两个窗口,一个启动生产者一个启动消费者，方便观察
模拟创建一个生产者(producer)来生成消息，创建一个消费者(consumer)去消费消息
创建生产者
./kafka-console-producer.sh --broker-list kafka:9092 --topic mytest
#创建消费者
#解释：生产者会把消息丢进topic，我们在topic:mytest中创建一个命名为group_mytes的消费组来消费数据
./kafka-console-consumer.sh --bootstrap-server kafka:9092 --topic mytest --consumer-property group.id=group_mytes
#此时在生产者端输入消息，会在消费者端查看到对应消费内容。

#查看消息积压
./kafka-consumer-groups.sh --describe --bootstrap-server kafka:9092 --group group_mytes
Group           Topic                          Pid Offset          logSize         Lag             Owner
group_mytest    mytest                         0   3               3               0               none
group_mytest    mytest                         1   2               2               0               none
group_mytest    mytest                         2   3               3               0               none
#解释：logSize表示消息数量，Offset表示已经消费的消息，Lag代表积压的消息，消息出现积压可以同时调整分区数量和消费者数量来增加消费能力，其中分区数和消费者数量保持一致。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function u(b,p){const s=r("ExternalLinkIcon");return t(),d("div",null,[c,e("p",null,[i("配置参考："),e("a",v,[i("https://github.com/apache/kafka/blob/trunk/config/kraft/server.properties"),o(s)])]),m])}const f=a(l,[["render",u],["__file","docker-compose脚本.html.vue"]]);export{f as default};
