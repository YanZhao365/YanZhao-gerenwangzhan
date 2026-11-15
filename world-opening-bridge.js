// This bridge is active only inside the integrated opening's world frame.
if (window.parent !== window && window.worldOpeningPending) {
  const openingParent=window.parent;
  const origin=location.protocol==='file:'?'null':location.origin;
  window.addEventListener('message',event=>{
    if(event.source!==openingParent||event.origin!==origin)return;
    if(event.data?.type==='ybr-world-activate'){
      if(!window.worldOpeningPending)return;
      window.worldOpeningPending=false;
      resize();
      if(!reduce.matches){
        if(typeof scheduleWorldDraw==='function')scheduleWorldDraw();
        else requestAnimationFrame(draw);
      }
    }
  });
  openingParent.postMessage({type:'ybr-world-ready'},origin==='null'?'*':origin);
}
