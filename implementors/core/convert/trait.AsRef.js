(function() {var implementors = {};
implementors["darling_core"] = [{"text":"impl AsRef&lt;Ident&gt; for IdentString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for IdentString","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;T&gt; for SpannedValue&lt;T&gt;","synthetic":false,"types":[]}];
implementors["mime"] = [{"text":"impl AsRef&lt;str&gt; for Mime","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;str&gt; for Name&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["quick_xml"] = [{"text":"impl&lt;'a&gt; AsRef&lt;Event&lt;'a&gt;&gt; for Event&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for ArrayVec&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for TinyVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl AsRef&lt;str&gt; for Url","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()