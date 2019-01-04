
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"top { background-color: #FF3333; height: ",[0,300],"; }\n.",[1],"user_head { height: ",[0,100],"; width: ",[0,100],"; border: ",[0,2]," solid #C0C0C0; border-radius: 50%; }\n",],undefined,{path:"./pages/my/index.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/my/index.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      