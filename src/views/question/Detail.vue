<!-- 问答详情页 -->
<template>
  <div class="content-box container is-fullhd">
    <div class="container">
      <div class="columns">
        <div class="column comment-content-box is-two-thirds">
          <div class="question_top_info">
            <h1><a>本站评论系统是使用的第三方的吗？</a></h1>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <span class="tag is-warning">原创</span>
                </a>
                <ul class="question-type-tag level-item">
                  <li>
                    <a href=""
                      ><span class="tag is-success">javascript</span></a
                    >
                  </li>
                  <li>
                    <a href=""><span class="tag is-success">多线程</span></a>
                  </li>
                </ul>
                <span class="read-count">484次阅读</span>
                ·
                <span class="readed-needtime">读完需要20分钟</span>
              </div>
            </nav>
          </div>
          <div class="content article is-small">
            <div
              class="article fmt article__content"
              data-id="1190000018398599"
              data-license="cc"
            >
              <blockquote>
                远离浏览器卡顿，提高用户体验，提升代码运行效率，使用多线程编程方法。
              </blockquote>
              <p>
                浏览器端JavaScript是以单线程的方式执行的，也就是说JavaScript和UI渲染占用同一个主线程，那就意味着，如果JavaScript进行高负载的数据处理，UI渲染就很有可能被阻断，浏览器就会出现卡顿，降低了用户体验。
              </p>
              <p>
                为此，JavaScript提供了异步操作，比如定时器(setTimeout、setInterval)事件、Ajax请求、I/O回调等。我们可以把高负载的任务使用异步处理，它们将会被放入浏览器的事件任务队列（event
                loop）中去，等到JavaScript运行时执行线程空闲时候，事件队列才会按照先进先出的原则被一一执行。
              </p>
              <p><span class="img-wrap"></span></p>
              <p>
                通过类似定时器，回调函数等异步编程方式在平常的工作中已经足够，但是如果做复杂运算，这种方式的不足就逐渐体现出来，比如settimeout拿到的值并不正确，或者页面有复杂运算的时候很容易触发假死状态，异步代码会影响主线程的代码执行，异步终究还是单线程，不能从根本上解决问题。
              </p>
              <p>
                多线程（Web
                Worker）就应运而生，它是HTML5标准的一部分，这一规范定义了一套
                API，允许一段JavaScript程序运行在主线程之外的另外一个线程中。将一些任务分配给后者运行。在主线程运行的同时，Worker（子）线程在后台运行，两者互不干扰。等到
                Worker
                线程完成计算任务，再把结果返回给主线程。这样的好处是，一些计算密集型或高延迟的任务，被
                Worker 线程负担了，主线程（通常负责 UI
                交互）就会很流畅，不会被阻塞或拖慢。
              </p>
              <h2 id="articleHeader0">什么是web worker</h2>
              <p><span class="img-wrap"></span></p>
              <p>
                worker是window对象的一个方法，就是用它来创建多线程。可以通过以下方式来检测你的浏览器是否支持worker
              </p>
              <div class="widget-codetool" style="display:none;">
                <div class="widget-codetool--inner">
                  <span
                    class="selectCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="全选"
                  ></span>
                  <span
                    type="button"
                    class="copyCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-clipboard-text="if (window.Worker) {…… your code ……}"
                    title=""
                    data-original-title="复制"
                  ></span>
                </div>
              </div>
              <pre
                class="hljs typescript"
              ><code style="word-break: break-word; white-space: initial;"><span class="hljs-keyword">if</span> (<span class="hljs-built_in">window</span>.Worker) {…… your code ……}</code></pre>
              <p>
                一个worker是使用一个构造函数（Worker()）创建的一个对象，这个构造函数需要传入一个的JavaScript文件，这个文件包含将在工作线程中运行的代码。类似于这样：
              </p>
              <div class="widget-codetool" style="display:none;">
                <div class="widget-codetool--inner">
                  <span
                    class="selectCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="全选"
                  ></span>
                  <span
                    type="button"
                    class="copyCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-clipboard-text="let myWorker = new Worker('worker.js');"
                    title=""
                    data-original-title="复制"
                  ></span>
                </div>
              </div>
              <pre
                class="hljs typescript"
              ><code style="word-break: break-word; white-space: initial;"><span class="hljs-keyword">let</span> myWorker = <span class="hljs-keyword">new</span> Worker(<span class="hljs-string">'worker.js'</span>);</code></pre>
              <p>
                主线程和子线程的数据不是共享的，worker通过postMessage()
                方法和onmessage事件进行数据通信。主线程和子线程是双向的，都可以发送和监听事件。向一个worker发送消息需要这样做（main.js）：
              </p>
              <div class="widget-codetool" style="display:none;">
                <div class="widget-codetool--inner">
                  <span
                    class="selectCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="全选"
                  ></span>
                  <span
                    type="button"
                    class="copyCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-clipboard-text="myWorker.postMessage('hello, world'); // 发送
            worker.onmessage = function (event) { // 接收
                console.log('Received message ' + event.data);
                doSomething();
            }"
                    title=""
                    data-original-title="复制"
                  ></span>
                </div>
              </div>
              <pre
                class="hljs javascript"
              ><code>myWorker.postMessage(<span class="hljs-string">'hello, world'</span>); <span class="hljs-comment">// 发送</span>
            worker.onmessage = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) </span>{ <span class="hljs-comment">// 接收</span>
                <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Received message '</span> + event.data);
                doSomething();
            }</code></pre>
              <p>
                &nbsp;postMessage所传的数据都是拷贝传递（ArrayBuffer类型除外），所以子线程也是类似传递（worker.js）
              </p>
              <div class="widget-codetool" style="display:none;">
                <div class="widget-codetool--inner">
                  <span
                    class="selectCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="全选"
                  ></span>
                  <span
                    type="button"
                    class="copyCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-clipboard-text="addEventListener('message', function (e) {
                postMessage('You said: ' + e.data);
            }, false);"
                    title=""
                    data-original-title="复制"
                  ></span>
                </div>
              </div>
              <pre
                class="hljs lisp"
              ><code>addEventListener('message', function (<span class="hljs-name">e</span>) {
                postMessage('You said: ' + e.data)<span class="hljs-comment">;</span>
            }, false)<span class="hljs-comment">;</span></code></pre>
              <p>
                &nbsp;当子线程运行结束后，使用完毕，为了节省系统资源，可以手动关闭子线程。如果worker没有监听消息，那么当所有任务执行完毕（包括计数器）后，它就会自动关闭。
              </p>
              <div class="widget-codetool" style="display: none;">
                <div class="widget-codetool--inner">
                  <span
                    class="selectCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="全选"
                  ></span>
                  <span
                    type="button"
                    class="copyCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-clipboard-text="// 在主线程中关闭
            worker.terminate();
            // 在子线程里线程
            close();
            Worker也提供了错误处理机制，当出错时会触发error事件。
            // 监听 error 事件
            worker.addEventListener('error', function (e) {
              console.log('ERROR', e);
            });"
                    title=""
                    data-original-title="复制"
                  ></span>
                </div>
              </div>
              <pre class="hljs lua"><code>// 在主线程中关闭
            worker.terminate();
            // 在子线程里线程
            <span class="hljs-built_in">close</span>();
            Worker也提供了错误处理机制，当出错时会触发<span class="hljs-built_in">error</span>事件。
            // 监听 <span class="hljs-built_in">error</span> 事件
            worker.addEventListener(<span class="hljs-string">'error'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">(e)</span></span> {
              console.<span class="hljs-built_in">log</span>(<span class="hljs-string">'ERROR'</span>, e);
            });</code></pre>
              <p>web worker本身很简单，但是它的限制特别多。</p>
              <h2 id="articleHeader1">使用的问题</h2>
              <h3 id="articleHeader2">1、同源限制</h3>
              <p>
                分配给Worker
                线程运行的脚本文件（worker.js），必须与主线程的脚本文件(main.js)同源。这里的同源限制包括协议、域名和端口，不支持本地地址（file://）。这会带来一个问题，我们经常使用CDN来存储js文件，主线程的worker.js的域名指的是html文件所在的域，通过new
                Worker（url）加载的url属于CDN的域，会带来跨域的问题，实际开发中我们不会吧所有的代码都放在一个文件中让子线程加载，肯定会选择模块化开发。通过工具或库把代码合并到一个文件中，然后把子线程的代码生成一个文件url。<br />解决方法：<br />(1)将动态生成的脚本转换成Blob对象。<br />(2)然后给这个Blob对象创建一个URL。<br />(3)最后将这个创建好的URL作为地址传给Worker的构造函数。
              </p>
              <div class="widget-codetool" style="display:none;">
                <div class="widget-codetool--inner">
                  <span
                    class="selectCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="全选"
                  ></span>
                  <span
                    type="button"
                    class="copyCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-clipboard-text='let script = &apos;console.log("hello world!");&apos;
            let workerBlob = new Blob([script], { type: "text/javascript" });
            let url = URL.createObjectURL(workerBlob);
            let worker = new Worker(url);'
                    title=""
                    data-original-title="复制"
                  ></span>
                </div>
              </div>
              <pre
                class="hljs typescript"
              ><code><span class="hljs-keyword">let</span> script = <span class="hljs-string">'console.log("hello world!");'</span>
            <span class="hljs-keyword">let</span> workerBlob = <span class="hljs-keyword">new</span> Blob([script], { <span class="hljs-keyword">type</span>: <span class="hljs-string">"text/javascript"</span> });
            <span class="hljs-keyword">let</span> url = URL.createObjectURL(workerBlob);
            <span class="hljs-keyword">let</span> worker = <span class="hljs-keyword">new</span> Worker(url);</code></pre>
              <h3 id="articleHeader3">2、访问限制</h3>
              <p>
                Worker子线程所在的全局对象，与主线程不在同一个上下文环境，无法读取主线程所在网页的
                DOM
                对象，也无法使用document、window、parent这些对象，global对象的指向有变更，window需要改写成self，不能执行alert()方法和confirm()等方法，只能读取部分navigator对象内的数据。另外chrome的console.log()倒是可以使用，也支持debugger断点，增加调试的便利性。
              </p>
              <h3 id="articleHeader4">3、使用异步</h3>
              <p>
                Worker子线程中可以使用XMLHttpRequest 对象发出 AJAX
                请求，可以使用setTimeout()
                setInterval()方法，也可使用websocket进行持续链接。也可以通过importScripts(url)加载另外的脚本文件，但是仍然不能跨域。
              </p>
              <h2 id="articleHeader5">应用场景：</h2>
              <h3 id="articleHeader6">1、使用专用线程进行数学运算</h3>
              <p>
                Web
                Worke设计的初衷就是用来做计算耗时任务，大数据的处理，而这种计算放在worker中并不会中断前台用户的操作，避免代码卡顿带来不必要的用户体验。例如处理ajax返回的大批量数据，读取用户上传文件，计算MD5，canvas的位图的过滤，分析视频和声频文件等。worker中除了缺失了DOM和BOM操作能力以外，还是拥有非常强大的js逻辑运算处理的能力的，相当于nodejs一个级别的的运行环境。
              </p>
              <h3 id="articleHeader7">2、高频的用户交互</h3>
              <p>
                高频的用户交互适用于根据用户的输入习惯、历史记录以及缓存等信息来协助用户完成输入的纠错、校正功能等类似场景，用户频繁输入的响应处理同样可以考虑放在web
                worker中执行。例如，我们可以
                做一个像Word一样的应用：当用户打字时，后台立即在词典中进行查找，帮助用户自动纠错等等。
              </p>
              <h3 id="articleHeader8">3、数据的预取</h3>
              <p>
                对于一些有大量数据的前后台交互产品，可以新开一个线程专门用来进行数据的预取和缓冲数据，worker可以用在本地web数据库的行写入和更改，长时间持续的运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断，也有利于随时响应主线程的通信。也可以配合XMLHttpRequest和websocket进行不断开的通信，实现守卫进程。
              </p>
              <h2 id="articleHeader9">兼容性</h2>
              <p><span class="img-wrap"></span></p>
              <p>
                总体来说，兼容性还是不错的，
                移动端可以放心使用，桌面端要求不高的话，也可以使用。
              </p>
              <h2 id="articleHeader10">superWorker</h2>
              <p>
                为了更方便快捷的使用web
                worker，我们封装了一个工具，可以通过模块化的方式编写运行在web
                worker中的脚本，避免同源策略，减少服务端发送一个额外的url请求，无需了解web
                worker，就像使用setTimeout一样，快速使用superWorker，提升你的编码效率和运行效率，它有以下优点：<br />1、原生JS实现，无任何依赖库。<br />2、简单快速，摈弃繁琐的创建文件、绑定事件，实现无侵入、无感知运行新线程的代码。<br />3、返回Promise类型的数据，支持链式调用，清晰明了。<br />4、支持多种方式新建worker，包括匿名函数、函数列表、文本文件、html片段、url、类，方便快捷。<br />5、gzipped压缩后仅仅
                1.2kb。
              </p>
              <h3 id="articleHeader11">使用教程：</h3>
              <div class="widget-codetool" style="display:none;">
                <div class="widget-codetool--inner">
                  <span
                    class="selectCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="全选"
                  ></span>
                  <span
                    type="button"
                    class="copyCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-clipboard-text="import superWorker from 'superWorker'
            let worker = superWorker(function (a, b) {
                // 子线程中要运行的代码
                return a + b;
            });
            worker.start(1, 2).then((r)=>console.log(r)); // 3"
                    title=""
                    data-original-title="复制"
                  ></span>
                </div>
              </div>
              <pre
                class="hljs javascript"
              ><code><span class="hljs-keyword">import</span> superWorker <span class="hljs-keyword">from</span> <span class="hljs-string">'superWorker'</span>
            <span class="hljs-keyword">let</span> worker = superWorker(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">a, b</span>) </span>{
                <span class="hljs-comment">// 子线程中要运行的代码</span>
                <span class="hljs-keyword">return</span> a + b;
            });
            worker.start(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>).then(<span class="hljs-function">(<span class="hljs-params">r</span>)=&gt;</span><span class="hljs-built_in">console</span>.log(r)); <span class="hljs-comment">// 3</span></code></pre>
              <p>用法</p>
              <div class="widget-codetool" style="display:none;">
                <div class="widget-codetool--inner">
                  <span
                    class="selectCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="全选"
                  ></span>
                  <span
                    type="button"
                    class="copyCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-clipboard-text="superWorker（code， [type]）"
                    title=""
                    data-original-title="复制"
                  ></span>
                </div>
              </div>
              <pre
                class="hljs haskell"
              ><code style="word-break: break-word; white-space: initial;"><span class="hljs-title">superWorker</span>（code， [<span class="hljs-class"><span class="hljs-keyword">type</span>]）</span></code></pre>
              <p>参数</p>
              <div class="widget-codetool" style="display:none;">
                <div class="widget-codetool--inner">
                  <span
                    class="selectCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="全选"
                  ></span>
                  <span
                    type="button"
                    class="copyCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-clipboard-text="code：运行的代码， type（非必须）：代码类型，目前支持0、1、2、3、4。"
                    title=""
                    data-original-title="复制"
                  ></span>
                </div>
              </div>
              <pre
                class="hljs haskell"
              ><code style="word-break: break-word; white-space: initial;"><span class="hljs-title">code</span>：运行的代码， <span class="hljs-class"><span class="hljs-keyword">type</span>（非必须）：代码类型，目前支持0、1、2、3、4。</span></code></pre>
              <h3 id="articleHeader12">实现原理：</h3>
              <p>先进行源代码转文件：</p>
              <div class="widget-codetool" style="display:none;">
                <div class="widget-codetool--inner">
                  <span
                    class="selectCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="全选"
                  ></span>
                  <span
                    type="button"
                    class="copyCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-clipboard-text='let workerBlob = new Blob(code, { type: "text/javascript" });
            let url = URL.createObjectURL(workerBlob);'
                    title=""
                    data-original-title="复制"
                  ></span>
                </div>
              </div>
              <pre
                class="hljs typescript"
              ><code><span class="hljs-keyword">let</span> workerBlob = <span class="hljs-keyword">new</span> Blob(code, { <span class="hljs-keyword">type</span>: <span class="hljs-string">"text/javascript"</span> });
            <span class="hljs-keyword">let</span> url = URL.createObjectURL(workerBlob);</code></pre>
              <p>
                对类型拆分，code参数支持传入匿名函数、函数列表、文本文件、url、HTML内嵌标签、类等功能，首先对传入的代码进行分类匹配，字符串化，然后进行拼接运行
              </p>
              <div class="widget-codetool" style="display:none;">
                <div class="widget-codetool--inner">
                  <span
                    class="selectCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="全选"
                  ></span>
                  <span
                    type="button"
                    class="copyCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-clipboard-text="code = `(${Function.prototype.toString.call(code)})(${exportsObjName})`;"
                    title=""
                    data-original-title="复制"
                  ></span>
                </div>
              </div>
              <pre
                class="hljs ini"
              ><code style="word-break: break-word; white-space: initial;"><span class="hljs-attr">code</span> = `(<span class="hljs-variable">${Function.prototype.toString.call(code)}</span>)(<span class="hljs-variable">${exportsObjName}</span>)`;</code></pre>
              <p>
                &nbsp;对于传入的方法，分别在主线程中的exports对象进行标记，和worker子线程中的exportsObjName对象中进行赋值。对于ES6
                模块化的代码，进行过滤转译。
              </p>
              <div class="widget-codetool" style="display:none;">
                <div class="widget-codetool--inner">
                  <span
                    class="selectCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="全选"
                  ></span>
                  <span
                    type="button"
                    class="copyCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-clipboard-text="// 处理 \nexport default function xxx(){}  => exports.default = true; exportsObjName.default = function xx(){}
            code = code.replace(/^(\s*)export\s+default\s+/m, (s, before) => {
                exports.default = true;
                return `${before}${exportsObjName}.default=`;
            });"
                    title=""
                    data-original-title="复制"
                  ></span>
                </div>
              </div>
              <pre
                class="hljs haskell"
              ><code>// 处理 \nexport <span class="hljs-keyword">default</span> function xxx(){}  =&gt; exports.<span class="hljs-keyword">default</span> = true; exportsObjName.<span class="hljs-keyword">default</span> = function xx(){}
            <span class="hljs-title">code</span> = code.replace(/^(\s*)<span class="hljs-keyword">export</span>\s+<span class="hljs-keyword">default</span>\s+/m, (<span class="hljs-title">s</span>, <span class="hljs-title">before</span>) =&gt; {
                exports.<span class="hljs-keyword">default</span> = true;
                return `${before}${exportsObjName}.<span class="hljs-keyword">default</span>=`;
            });</code></pre>
              <p>
                &nbsp;形成主线程exports和子线程exportsObjName中的方法进行一一对应。
              </p>
              <p>
                worker主线程与主线程进行通讯则是仍然需要通过postMessage方法和onmessage回调事件来进行，这个我们统一进行了双向绑定，分别对主线程和子线程执行setup。
              </p>
              <div class="widget-codetool" style="display:none;">
                <div class="widget-codetool--inner">
                  <span
                    class="selectCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="全选"
                  ></span>
                  <span
                    type="button"
                    class="copyCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-clipboard-text="function setup(ctx, pmMethods, callbacks) {
                ctx.addEventListener('message', ({ data }) => {
                // ……
                })
            }"
                    title=""
                    data-original-title="复制"
                  ></span>
                </div>
              </div>
              <pre
                class="hljs typescript"
              ><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setup</span>(<span class="hljs-params">ctx, pmMethods, callbacks</span>) </span>{
                ctx.addEventListener(<span class="hljs-string">'message'</span>, <span class="hljs-function">(<span class="hljs-params">{ data }</span>) =&gt;</span> {
                <span class="hljs-comment">// ……</span>
                })
            }</code></pre>
              <p>
                &nbsp;在主线程中对worker封装了一些快捷的方法，比如关闭线程：
              </p>
              <div class="widget-codetool" style="display:none;">
                <div class="widget-codetool--inner">
                  <span
                    class="selectCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="全选"
                  ></span>
                  <span
                    type="button"
                    class="copyCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-clipboard-text="worker.terminate = () => {
                URL.revokeObjectURL(url);
                term.call(this);
            };"
                    title=""
                    data-original-title="复制"
                  ></span>
                </div>
              </div>
              <pre
                class="hljs coffeescript"
              ><code>worker.terminate = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                URL.revokeObjectURL(url);
                term.call(<span class="hljs-keyword">this</span>);
            };</code></pre>
              <p>
                &nbsp;并把子线程拥有的方法、属性，暴露出来，方便主线程通过传递参数调用。
              </p>
              <div class="widget-codetool" style="display:none;">
                <div class="widget-codetool--inner">
                  <span
                    class="selectCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="全选"
                  ></span>
                  <span
                    type="button"
                    class="copyCode code-tool"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-clipboard-text="worker.expose = methodName => {
                worker[i] = function () {
                    return worker['call'](methodName, [].slice.call(arguments));
                };
            };"
                    title=""
                    data-original-title="复制"
                  ></span>
                </div>
              </div>
              <pre
                class="hljs javascript"
              ><code>worker.expose = <span class="hljs-function"><span class="hljs-params">methodName</span> =&gt;</span> {
                worker[i] = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
                    <span class="hljs-keyword">return</span> worker[<span class="hljs-string">'call'</span>](methodName, [].slice.call(<span class="hljs-built_in">arguments</span>));
                };
            };</code></pre>
              <p>&nbsp;大致如下图：<br /><span class="img-wrap"></span></p>
              <p>欢迎小伙伴们使用以及批评指正。有问题多多反馈，多多交流。</p>
              <h2 id="articleHeader13">小结</h2>
              <p>
                对于web
                worker这项新技术，无论在PC还是在移动web，都很实用，腾讯新闻前端组进行了广泛的尝试，Web
                Worker 的实现为前端程序带来了后台计算的能力，实现了主 UI
                线程与复杂计运算线程的分离，从而极大减轻了因计算量大而造成 UI
                阻塞而出现的界面渲染卡、掉帧的情况，并且更大程度地利用了终端硬件的性能。superWorker能解决掉事件绑定，同源策略等繁琐的问题，它目前最大的问题在于不兼容IE9，在兼容性要求不是那么严格的地方，尽可能的使用吧！
              </p>
              <p><span class="img-wrap"></span></p>
            </div>

            <ul class="social-share-box">
              <li class="handle-share-facebook-error">
                <a href="#"> <Facebook scale="2" url=""/></a>
              </li>
              <li>
                <a href="#"> <Twitter scale="2" url=""/></a>
              </li>
              <li>
                <a href="#"> <Linkedin scale="2" url=""/></a>
              </li>
              <li>
                <a href="#"> <WhatsApp scale="2" url=""/></a>
              </li>
              <li>
                <a href="#"> <Google scale="2" url=""/></a>
              </li>
              <li>
                <a href="#"> <Email scale="2" url=""/></a>
              </li>
            </ul>

            <div class="question-toolbox">
              <ul>
                <li class="link-style">
                  <a href="">
                    <button class="button is-success">
                      <span id="mainLikeText">赞</span>&nbsp;&nbsp;
                      <span class="seprator">|</span>&nbsp;&nbsp;
                      <span id="mainLikeNum">28 </span>
                    </button>
                  </a>
                </li>
                <li>
                  <a href="">
                    <button class="button is-warning">
                      <span id="mainBookmarkText">收藏</span>&nbsp;&nbsp;
                      <span class="seprator">|</span>&nbsp;&nbsp;
                      <span id="mainBookmarkNum">19</span>
                    </button>
                  </a>
                </li>
              </ul>
              <div class="link-support">
                <a class="button is-danger is-fullwidth">打赏支持</a>
              </div>
              <div class="remark-text">
                <span>如果觉得我的文章对你有用，请随意赞赏</span>
              </div>
            </div>

            <article class="media">
              <figure class="media-left">
                <p class="image is-32x32">
                  <img
                    class="is-rounded"
                    src="https://bulma.io/images/placeholders/32x32.png"
                  />
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Barbara Middleton</strong>
                    <br />
                    性能优化没有穷尽啊
                    <br />
                    <small
                      ><a
                        ><i class="far fa-thumbs-up"
                          >赞 <i class="like-count">+1</i></i
                        ></a
                      >
                      · <a>回复</a> · 14 小时前</small
                    >
                  </p>
                </div>

                <article class="media">
                  <figure class="media-left">
                    <p class="image is-32x32">
                      <img
                        class="is-rounded"
                        src="https://bulma.io/images/placeholders/32x32.png"
                      />
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Sean Brown</strong>
                        <br />
                        努力每天都是新的开始！
                        <br />
                        <small
                          ><a><i class="far fa-thumbs-up">赞</i></a> ·
                          <a>回复</a> · 14 小时前</small
                        >
                      </p>
                    </div>
                  </div>
                </article>

                <article class="media">
                  <figure class="media-left">
                    <p class="image is-32x48">
                      <img
                        class="is-rounded"
                        src="https://bulma.io/images/placeholders/32x32.png"
                      />
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>jifengg</strong>
                        <br />
                        图像压缩确实是
                        一个非常值得学习的方向。至少在项目中也要学会使用，现在流量最贵，能省则省
                        <br />
                        <small
                          ><a><i class="far fa-thumbs-up">赞</i></a> ·
                          <a>回复</a> · 14 小时前</small
                        >
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </article>
            <article class="media">
              <figure class="media-left">
                <p class="image is-32x32">
                  <img
                    class="is-rounded"
                    src="https://bulma.io/images/placeholders/32x32.png"
                  />
                </p>
              </figure>
              <div class="media-content">
                <div class="field">
                  <p class="control">
                    <textarea
                      class="textarea"
                      placeholder="文明社会，理性评论"
                    ></textarea>
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <button class="button is-success">发表评论</button>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="sidebar-box column">
          <div class="columns">
            <div class="column sidebar is-three-quarters">
              <div class="card top-color responsive">
                <div class="content">
                  <div class="header">
                    <img
                      width="22"
                      height="22"
                      src="https://iocaffcdn.phphub.org//uploads/communities/WtC3cPLHzMbKRSZnagU9.png"
                    />
                    <span class="ml-2">Laravel</span>
                    知识社区
                  </div>
                </div>

                <div class="sidebar-content">
                  <div class="middle aligned">
                    <div class="sidebar-content-desc">
                      Laravel 是一套简洁、优雅的 PHP Web
                      开发框架。具有高效、简洁、富于表达力等优点。
                      <a
                        href="https://learnku.com/laravel/wikis/7227"
                        class="sidebar-content-desc-decoration"
                        >社区指南</a
                      >
                    </div>
                  </div>
                </div>

                <div class="extra-content">
                  <div class="eight wide column pr-1 pt-0">
                    <a class="button is-small is-primary">
                      <i class="fas fa-plus"></i>
                      <span class="state">加入社区</span>
                    </a>
                  </div>
                  <div class="eight wide column pr-1 pt-0">
                    <a class="button is-small is-success">
                      <i class="fas fa-edit"></i>
                      <span class="state">撰写发帖</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Facebook,
  Twitter,
  Linkedin,
  WhatsApp,
  Google,
  Email
} from "vue-socialmedia-share";
export default {
  data() {
    return {};
  },

  components: {
    Facebook,
    Twitter,
    Linkedin,
    WhatsApp,
    Google,
    Email
  }
};
</script>
<style lang="less" scoped>
.content-box {
  background-color: #f0f2f5;
  padding-top: 60px;
  padding-bottom: 60px;
}

.sidebar-box {
  margin-left: 20px;
}

.comment-content-box {
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(101, 129, 156, 0.08);
}

.question_top_info {
  h1 {
    margin-bottom: 10px;
    a {
      font-size: 1.8rem;
      color: #333333;
      font-weight: 400;
    }
  }
}

.question-type-tag {
  li {
    margin-left: 5px;
  }
}

.read-count {
  margin-right: 5px;
  color: #999;
  font-size: 14px;
}

.readed-needtime {
  margin-left: 5px;
  color: #999;
  font-size: 14px;
}

.article {
  color: #333;
  font-size: 15px;
  margin-top: 60px;
  line-height: 1.8;
  word-wrap: break-word;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

.social-share-box {
  margin-left: -10px !important;
  margin-top: 0 !important;
  .handle-share-facebook-error {
    margin-top: 4px;
  }
  li {
    margin-left: 10px;
  }
  list-style: none;
  display: flex;
  justify-content: flex-start;
}

.question-toolbox {
  border-bottom: 1px solid #ccc;
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
  ul {
    margin-left: 180px;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    .link-style {
      margin-top: 4px;
      margin-right: 20px;
    }
  }
}

.link-support {
  width: 180px;
  margin-left: 190px;
}

.remark-text {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 140px;
  span {
    color: #999999;
  }
}

.content {
  p {
    strong {
      color: #009a61;
      &:hover {
        color: #004f31;
        text-decoration: underline;
      }
    }
  }
  a {
    color: #999;
    &:hover {
      color: #666;
    }
  }
}

.like-count {
  color: #009a61;
}

.top-color {
  border-top: 2px solid #f4645f;
  border-radius: 5px;
  margin-top: -0.8rem;
  .content {
    .header {
      line-height: 18px;
      font-size: 14px;
      font-weight: 400;
      margin-top: 10px;
      margin-left: 20px;
      margin-bottom: -15px;
      color: #777;
      img {
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
  }
}

.sidebar-content {
  border-bottom: 1px solid rgba(34, 36, 38, 0.1);
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  .middle {
    margin: 1rem 1rem;
    .sidebar-content-desc {
      line-height: 22px;
      color: #636b6f;
      font-size: 0.8rem;
      .sidebar-content-desc-decoration {
        transition: color 0.1s ease;
        cursor: pointer;
        text-decoration: underline;
        color: #a5a5a5 !important;
        font-size: 0.85714286rem !important;
        margin-left: 0.25rem !important;
        line-height: 22px;
        display: block;
      }
    }
  }
}

.extra-content {
  display: flex;
  justify-content: space-between;
}
</style>
