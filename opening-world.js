// Prepare the accepted night-sea page while keeping both scenes isolated.
(() => {
  const frame=document.getElementById('world-frame');
  const origin=location.protocol==='file:'?'null':location.origin;
  const enter=document.getElementById('enter');
  let pending,resolveReady,rejectReady,timeout,failed=false;
  window.openingWorldIsReady=false;
  enter.disabled=true;
  window.addEventListener('message',event=>{
    if(event.source!==frame.contentWindow||event.origin!==origin||event.data?.type!=='ybr-world-ready')return;
    clearTimeout(timeout);failed=false;window.openingWorldIsReady=true;
    enter.disabled=false;resolveReady?.();
  });
  window.prepareOpeningWorld=()=>{
    if(pending&&!failed)return pending;
    failed=false;window.openingWorldIsReady=false;enter.disabled=true;
    pending=new Promise((resolve,reject)=>{resolveReady=resolve;rejectReady=reject});
    pending.catch(()=>{});
    timeout=setTimeout(()=>{failed=true;rejectReady(Error('Night sea readiness timeout'))},20000);
    frame.src='world-integrated-preview.html?embedded=1';
    return pending;
  };
  window.activateOpeningWorld=()=>{
    if(!window.openingWorldIsReady)return false;
    frame.contentWindow.postMessage({type:'ybr-world-activate'},origin==='null'?'*':origin);
    return true;
  };
})();
