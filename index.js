
if(window.foneme == undefined){
    window.foneme = {
        injected: false,
        src: `<div id="foneme" style="flex-direction: column;justify-content: center; color: white;display: flex; position: absolute; top: 0px; right: 0px; width: 100px; height: max-content; border: 1px solid red;background-color: rgba(0,0,0,0.8); z-index: 999999;">    <button>copy enable</button>    <button onclick="window.foneme.action(this);">click2copy</button>    <button onclick="window.foneme.action(this);">background</button>    <button onclick="window.foneme.action(this);">designMode</button>    <button onclick="window.foneme.action(this);">editEnable</button>    <button onclick="window.foneme.action(this);">decodeB64</button>    <button onclick="window.foneme.action(this);">click2del</button>    <button onclick="window.foneme.action(this);">mkReadable</button>    <button onclick="window.foneme.action(this);">rmvAllBlur</button>    <button onclick="window.foneme.action(this);">lsVidSrcs</button>    <button onclick="window.foneme.action(this);">lsIfrSrcs</button>    <button onclick="window.foneme.action(this);">rmvAllImg</button>    <button onclick="window.foneme.action(this);">rmvAllVid</button>    <button onclick="window.foneme.action(this);">loopFocus</button>    <button onclick="window.foneme.action(this);">loopClick</button>    <button onclick="window.foneme.action(this);">wrtTxtCtnt</button>    <button onclick="window.foneme.action(this);">setTitle</button>        <div>        <input type="checkbox">        <label>loop|prdf</label>        <input type="checkbox">    </div>    <input type="text"></div>`,
        action: function(c){
            let t = c.textContent;
            window.foneme.actions[t]();
        },
        actions: {
            "click2copy": function(){
                console.log("fn");
                document.body.addEventListener("click", function(e){
                    if(e.target.parentElement.id == "foneme") return;
                    console.log("called ", e.target);
                    document.getElementById("foneme").getElementsByTagName("input")[2].value = e.target.innerText;
                    if(!document.getElementById("foneme").getElementsByTagName("input")[0].checked) document.body.removeEventListener("click", arguments.callee);
                    if(document.getElementById("foneme").getElementsByTagName("input")[1].checked) e.preventDefault();
                });
            },
            "background": function(){
                document.body.addEventListener("click", function(e){
                    if(e.target.parentElement.id == "foneme") return;
                    document.getElementById("foneme").getElementsByTagName("input")[2].value = e.target.style["background-image"];
                    if(!document.getElementById("foneme").getElementsByTagName("input")[0].checked) document.body.removeEventListener("click", arguments.callee);
                    if(document.getElementById("foneme").getElementsByTagName("input")[1].checked) e.preventDefault();
                });
            },
            "designMode": function(){
                if(document.designMode == "off"){
                    document.designMode = "on";
                } else {
                    document.designMode = "off";
                }
            },
            "editEnable": function(){
                if(document.body.contentEditable == "false"){
                    document.body.contentEditable = "true";
                } else {
                    document.body.contentEditable = "false";
                }
            },
            "decodeB64": function(){
                document.body.addEventListener("click", function(e){
                    if(e.target.parentElement.id == "foneme") return;
                    document.getElementById("foneme").getElementsByTagName("input")[2].value = atob(e.target.textContent);
                    if(!document.getElementById("foneme").getElementsByTagName("input")[0].checked) document.body.removeEventListener("click", arguments.callee);
                    if(document.getElementById("foneme").getElementsByTagName("input")[1].checked) e.preventDefault();
                });
            },
            "click2del": function(){
                document.body.addEventListener("click", function(e){
                    if(e.target.parentElement.id == "foneme") return;
                    e.target.parentElement.removeChild(e.target);
                    if(!document.getElementById("foneme").getElementsByTagName("input")[0].checked) document.body.removeEventListener("click", arguments.callee);
                    if(document.getElementById("foneme").getElementsByTagName("input")[1].checked) e.preventDefault();
                });
            },
            "mkReadable": function(){
                let ns = document.createElement("style");
                document.head.appendChild(ns);
                ns.sheet.insertRule("*{color:black !important;background-color:white !important;}");
            },
            "rmvAllBlur":function(){
                let ns = document.createElement("style");
                document.head.appendChild(ns);
                ns.sheet.insertRule("*{blur: 0px !important;}");
            },
            "lsIfrSrcs": function(){
                let x = [];
                let frm = document.getElementsByTagName("iframe");
                for(let i=0;i<frm.length;i++){
                    x.push(frm[i].src);
                }
                document.getElementById("foneme").getElementsByTagName("input")[2].value = x.join(", ");
            },
            "lsVidSrcs": function(){
                let x = [];
                let frm = document.getElementsByTagName("video");
                for(let i=0;i<frm.length;i++){
                    x.push(frm[i].src);
                }
                document.getElementById("foneme").getElementsByTagName("input")[2].value = x.join(", ");
            },
            "rmvAllImg": function(){
                let x = [];
                let frm = document.getElementsByTagName("img");
                for(let i=0;i<frm.length;i++){
                    frm[i].parentElement.removeChild(frm[i]);
                }
            },
            "rmvAllVid": function(){
                let x = [];
                let frm = document.getElementsByTagName("video");
                for(let i=0;i<frm.length;i++){
                    frm[i].parentElement.removeChild(frm[i]);
                }
            },
            "loopFocus": function(){
                document.body.addEventListener("click", function(e){
                    if(e.target.parentElement.id == "foneme") return;
                    let intv = parseInt(document.getElementById("foneme").getElementsByTagName("input")[2].value);
                    if(intv == NaN || intv == 0) return;
                    setInterval(function(gurt){
                        gurt.focus();
                    }.bind(null, e.target), intv);
                    if(!document.getElementById("foneme").getElementsByTagName("input")[0].checked) document.body.removeEventListener("click", arguments.callee);
                    if(document.getElementById("foneme").getElementsByTagName("input")[1].checked) e.preventDefault();
                });
            },
            "loopClick": function(){
                document.body.addEventListener("click", function(e){
                    if(e.target.parentElement.id == "foneme") return;
                    let intv = parseInt(document.getElementById("foneme").getElementsByTagName("input")[2].value);
                    if(intv == NaN || intv == 0) return;
                    setInterval(function(gurt){
                        gurt.click();
                    }.bind(null, e.target), intv);
                    if(!document.getElementById("foneme").getElementsByTagName("input")[0].checked) document.body.removeEventListener("click", arguments.callee);
                    if(document.getElementById("foneme").getElementsByTagName("input")[1].checked) e.preventDefault();
                });
            },
            "wrtTxtCtnt": function(){
                let nt = window.open();
                nt.document.write(document.body.textContent);
            },
            "setTitle": function(){
                document.title = document.getElementById("foneme").getElementsByTagName("input")[2].value;
            }
        }
    }
}
if(!window.foneme.injected){
    let dibv = document.createElement('div');
    dibv.innerHTML = window.foneme.src;
    document.body.appendChild(dibv.children[0]);
    console.log(dibv.children[0]);
    window.foneme.injected = true;
    dibv.remove();
    dibv = null;
}
