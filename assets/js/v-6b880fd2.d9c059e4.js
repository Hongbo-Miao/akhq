"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[469],{9664:(e,i,a)=>{a.r(i),a.d(i,{data:()=>t});const t={key:"v-6b880fd2",path:"/docs/configuration/akhq.html",title:"AKHQ configuration",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Pagination",slug:"pagination",children:[]},{level:2,title:"Avro Serializer",slug:"avro-serializer",children:[]},{level:2,title:"Topic List",slug:"topic-list",children:[]},{level:2,title:"Topic creation default values",slug:"topic-creation-default-values",children:[]},{level:2,title:"Topic Data",slug:"topic-data",children:[]},{level:2,title:"Ui Settings",slug:"ui-settings",children:[{level:3,title:"Topics",slug:"topics",children:[]},{level:3,title:"Topic Data",slug:"topic-data-1",children:[]}]}],filePathRelative:"docs/configuration/akhq.md",git:{updatedTime:1639494951e3,contributors:[{name:"tchiotludo",email:"tchiot.ludo@gmail.com",commits:1}]}}},4537:(e,i,a)=>{a.r(i),a.d(i,{default:()=>l});const t=(0,a(6252).uE)('<h1 id="akhq-configuration" tabindex="-1"><a class="header-anchor" href="#akhq-configuration" aria-hidden="true">#</a> AKHQ configuration</h1><h2 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> Pagination</h2><ul><li><code>akhq.pagination.page-size</code> number of topics per page (default : 25)</li></ul><h2 id="avro-serializer" tabindex="-1"><a class="header-anchor" href="#avro-serializer" aria-hidden="true">#</a> Avro Serializer</h2><ul><li><code>akhq.avro-serializer.json.serialization.inclusions</code> is list of ObjectMapper serialization inclusions that is used for converting Avro message to more readable Json format in the UI. Supports Enums of JsonInclude.Include from Jackson library</li></ul><h2 id="topic-list" tabindex="-1"><a class="header-anchor" href="#topic-list" aria-hidden="true">#</a> Topic List</h2><ul><li><code>akhq.topic.internal-regexps</code> is list of regexp to be considered as internal (internal topic can&#39;t be deleted or updated)</li><li><code>akhq.topic.stream-regexps</code> is list of regexp to be considered as internal stream topic</li></ul><h2 id="topic-creation-default-values" tabindex="-1"><a class="header-anchor" href="#topic-creation-default-values" aria-hidden="true">#</a> Topic creation default values</h2><p>These parameters are the default values used in the topic creation page.</p><ul><li><code>akhq.topic.replication</code> Default number of replica to use</li><li><code>akhq.topic.partition</code> Default number of partition</li></ul><h2 id="topic-data" tabindex="-1"><a class="header-anchor" href="#topic-data" aria-hidden="true">#</a> Topic Data</h2><ul><li><code>akhq.topic-data.size</code>: max record per page (default: 50)</li><li><code>akhq.topic-data.poll-timeout</code>: The time, in milliseconds, spent waiting in poll if data is not available in the buffer (default: 1000).</li></ul><h2 id="ui-settings" tabindex="-1"><a class="header-anchor" href="#ui-settings" aria-hidden="true">#</a> Ui Settings</h2><h3 id="topics" tabindex="-1"><a class="header-anchor" href="#topics" aria-hidden="true">#</a> Topics</h3><ul><li><code>akhq.ui-options.topic.default-view</code> is default list view (ALL, HIDE_INTERNAL, HIDE_INTERNAL_STREAM, HIDE_STREAM) (default: HIDE_INTERNAL)</li><li><code>akhq.ui-options.topic.skip-consumer-groups</code> hide consumer groups columns on topic list</li><li><code>akhq.ui-options.topic.skip-last-record</code> hide the last records on topic list</li></ul><h3 id="topic-data-1" tabindex="-1"><a class="header-anchor" href="#topic-data-1" aria-hidden="true">#</a> Topic Data</h3><ul><li><code>akhq.ui-options.topic-data.sort</code>: default sort order (OLDEST, NEWEST) (default: OLDEST)</li></ul>',17),o={},l=(0,a(3744).Z)(o,[["render",function(e,i){return t}]])},3744:(e,i)=>{i.Z=(e,i)=>{for(const[a,t]of i)e[a]=t;return e}}}]);