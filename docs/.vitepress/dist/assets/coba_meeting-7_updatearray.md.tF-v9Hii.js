import{_ as a,c as s,o as i,U as t}from"./chunks/framework.EUmXWpxD.js";const g=JSON.parse('{"title":"Static Array - Update Array","description":"","frontmatter":{"layout":"doc","title":"Static Array - Update Array","prev":{"text":"Show the Value in Array","link":"./showarrayvalue"},"next":{"text":"Multidimensional Array","link":"./multiarray"}},"headers":[],"relativePath":"coba/meeting-7/updatearray.md","filePath":"coba/meeting-7/updatearray.md"}'),e={name:"coba/meeting-7/updatearray.md"},n=t(`<h1 id="update-array" tabindex="-1">Update Array <a class="header-anchor" href="#update-array" aria-label="Permalink to &quot;Update Array&quot;">​</a></h1><h2 id="general-syntax" tabindex="-1">General Syntax <a class="header-anchor" href="#general-syntax" aria-label="Permalink to &quot;General Syntax&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>arrayName[index] = newValue;</span></span></code></pre></div><ul><li><strong>arrayName:</strong> The name of the array.</li><li><strong>index:</strong> The position (index) within the array where you want to update the element. Indices typically start at 0.</li><li><strong>newValue:</strong> The new value you want to assign to the element at the specified index.</li></ul><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">numbers[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Updating the third element (index 2) to 10</p><div class="info custom-block"><p class="custom-block-title"><strong>Case</strong></p><p>You&#39;re working on a program that manages a student database using an array. Let’s initialize the array to store the names of 5 students and update the information of a student from the array.</p><ul><li><strong>Initialization</strong> To initialize the array to store names of 5 students in C++, you can declare an array of strings with a size of 5, like this:</li></ul><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> numOfStudents </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> studentNames[numOfStudents] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Charlie&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;David&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Emily&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><strong>Update</strong> To update the information for a specific student (let&#39;s say student at index 2), you can directly assign a new name to that index in the array:</li></ul><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">studentNames[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Charles&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div></div>`,8),l=[n];function h(r,p,o,d,k,c){return i(),s("div",null,l)}const y=a(e,[["render",h]]);export{g as __pageData,y as default};