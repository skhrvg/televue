import{e as d,r as u,f as h,o as r,c as p,a as n,b as D,t as g,g as o,w as y,d as c,u as l}from"./app.db47df70.js";import{_ as m}from"./chunks/ComponentDemo.ca8aff82.js";const F=d({__name:"ButtonShare",props:{url:{type:String,required:!0},comment:{type:String,default:""},hideText:{type:Boolean,default:!1},size:{type:String,default:"medium",validator:s=>["medium","large"].includes(s)}},setup(s){const e=s,a=u();return h(()=>{const t=document.createElement("script");t.async=!0,t.src="https://telegram.org/js/telegram-widget.js?19",t.setAttribute("data-size",e.size),t.setAttribute("data-telegram-share-url",e.url),t.setAttribute("data-comment",e.comment),e.hideText&&t.setAttribute("data-text","notext"),a.value.appendChild(t)}),(t,i)=>(r(),p("div",{ref_key:"button",ref:a},null,512))}}),_=n("p",null,[n("img",{src:"https://core.telegram.org/img/Widget_Share.svg",alt:"Sharing button"})],-1),f={id:"frontmatter-title",tabindex:"-1"},C=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),A=c('<p>A Telegram Sharing Button is an easy way to let users forward content from your website or app to their <strong>friends</strong>, <strong>Channels</strong> or <strong>Saved Messages</strong> on Telegram.</p><p>When a user presses the button, Telegram asks them to choose a chat, group or channel where your link will be shared. You can also add some text that describes the link \u2013 the user will be able to edit it before sending the message.</p><blockquote><p><a href="https://core.telegram.org/widgets/share" target="_blank" rel="noopener noreferrer">Official Telegram documentation</a></p></blockquote><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2>',4),b=c(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ButtonShare</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">televue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> pageUrl </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ButtonShare</span></span>
<span class="line"><span style="color:#89DDFF;">    :</span><span style="color:#C792EA;">url</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">pageUrl</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">large</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">comment</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Check this out!</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Options</th></tr></thead><tbody><tr><td>url</td><td>string</td><td><strong>Required prop</strong></td><td></td></tr><tr><td>size</td><td>string</td><td><code>&#39;medium&#39;</code></td><td><code>&#39;medium&#39;</code> or <code>&#39;large&#39;</code></td></tr><tr><td>comment</td><td>string</td><td><code>&#39;&#39;</code></td><td></td></tr><tr><td>hide-text</td><td>boolean</td><td><code>false</code></td><td></td></tr></tbody></table><blockquote><p><a href="https://core.telegram.org/widgets/share#widget-constructor" target="_blank" rel="noopener noreferrer">Try an official configurator to learn more about widget options</a></p></blockquote>`,5),k=JSON.parse('{"title":"Sharing Button","description":"","frontmatter":{"title":"Sharing Button","editLink":true},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"}],"relativePath":"widgets/share.md","lastUpdated":1660317441000}'),T={name:"widgets/share.md"},v=Object.assign(T,{setup(s){const e=location.href,a=document.title;return(t,i)=>(r(),p("div",null,[_,n("h1",f,[D(g(t.$frontmatter.title)+" ",1),C]),A,o(m,null,{default:y(()=>[o(F,{url:l(e),size:"large",comment:l(a)},null,8,["url","comment"])]),_:1}),b]))}});export{k as __pageData,v as default};
