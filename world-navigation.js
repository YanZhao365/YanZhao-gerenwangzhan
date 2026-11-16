const config=siteContent,links=document.querySelector('.world-links'),nav=document.querySelector('.reading-nav'),main=document.querySelector('#reading main');nav.innerHTML='<a href="#" id="back-world">返回世界主页 ↑</a>';const copy={intro:'使用AI 辅助创作，人工构思、独立判断。现读长江师范学院，2026级应用统计学专业。',abilities:'开展海报、宣传配图、封面、PPT 制作与美化及使用知识库进行资料整理。<br>3天内完成网站设计、制作与上线，呈现鲜明的个人视觉风格。<br>搭建个人知识库。<br>积极探索新领域ing~'};let busy=false,lastDestination=null,entryTimers=[],entryWithKeyboard=false;
let wheelTotal=0,lastWheel=-Infinity,wheelArmed=true,wheelUnlock=0,returnTimer=0;
let returning=false,returnTimers=[],upTotal=0,lastUp=-Infinity,returnWithKeyboard=false;
let disposeEntryTransition;
const entryCurtain=document.querySelector('.down-curtain');
const portalDuration = 1500;
let portalPrepared = false;
const mobileWorld = matchMedia('(max-width: 650px), (pointer: coarse)');
function preparePortalTransition() {
  const transition = document.querySelector('.reading-portal-transition');
  if (!transition || !window.mountReadingPortalTransition || portalPrepared || reduce.matches) return;
  portalPrepared = true;
  transition.classList.add('is-preparing');
  transition.hidden = false;
  window.mountReadingPortalTransition(transition);
  const deadline = performance.now() + 750;
  function parkWhenReady() {
    if (document.body.classList.contains('reading-portal-active')) return;
    const canvases = [...transition.querySelectorAll('canvas')];
    const sized = canvases.length === 2 && canvases.every(canvas => canvas.width !== 300 || canvas.height !== 150);
    if (!sized && performance.now() < deadline) {
      requestAnimationFrame(parkWhenReady);
      return;
    }
    transition.hidden = true;
    transition.classList.remove('is-preparing');
  }
  requestAnimationFrame(parkWhenReady);
}
function playPortalTransition() {
  const transition = document.querySelector('.reading-portal-transition');
  if (!transition || !window.mountReadingPortalTransition) return false;
  if (!portalPrepared) preparePortalTransition();
  transition.classList.remove('is-preparing');
  transition.hidden = false;
  document.body.classList.add('reading-portal-active');
  disposeEntryTransition = () => {
    transition.hidden = true;
    document.body.classList.remove('reading-portal-active');
  };
  return true;
}
function clearEntry(){
  entryTimers.forEach(clearTimeout);entryTimers=[];
  disposeEntryTransition?.();
  disposeEntryTransition = undefined;
  document.querySelector('.glitch-sweep')?.remove();
  entryCurtain.classList.remove('active');
  links.classList.remove('is-travelling');links.removeAttribute('aria-busy');
  links.querySelectorAll('a').forEach(a=>{a.classList.remove('is-departing','is-glitching');a.resetDeparture?.()});
  busy=false;
}
function show(id){
  document.body.classList.add('reading');
  document.querySelector('#reading').inert=false;links.inert=true;
  document.querySelector('#'+id).scrollIntoView({behavior:'instant'});
  history.replaceState(null,'','#'+id);
  const heading=document.querySelector('#'+id+' h2');
  if(entryWithKeyboard)heading.removeAttribute('data-pointer-focus');else heading.setAttribute('data-pointer-focus','');
  heading.focus({preventScroll:true});
}
function enter(id,keyboard=false,glitchLabel=false,throughPortal=false){
  if(busy||!config.tabs.some(t=>t.id===id))return;
  busy=true;lastDestination=id;entryWithKeyboard=keyboard;wheelTotal=0;clearTimeout(returnTimer);document.body.classList.remove('world-returning');
  if(reduce.matches){show(id);busy=false;return}
  links.classList.add('is-travelling');links.setAttribute('aria-busy','true');
  if (throughPortal && playPortalTransition()) {
    entryTimers.push(setTimeout(() => { show(id); clearEntry(); }, portalDuration));
    return;
  }
  const selected=links.querySelector('a[href="#'+id+'"]');
  if(glitchLabel){
    const bounds=selected.getBoundingClientRect();
    const crossing=(bounds.left+bounds.width/2)/innerWidth;
    const sweep=document.createElement('div');
    sweep.className='glitch-sweep';
    sweep.setAttribute('aria-hidden','true');
    sweep.style.top=`${bounds.top+bounds.height/2}px`;
    sweep.style.setProperty('--label-start', `${bounds.left-4}px`);
    sweep.style.setProperty('--label-end', `${bounds.right+4}px`);
    const leftEdge=Math.max(0,bounds.left-12);
    const rightEdge=Math.min(innerWidth,bounds.right+12);
    const leftWidth=Math.min(64,leftEdge*.54);
    const rightWidth=Math.min(88,(innerWidth-rightEdge)*.82);
    const leftStart=leftEdge*.55-leftWidth/2;
    const rightStart=rightEdge+((innerWidth-rightEdge)-rightWidth)/2;
    const points=[
      [0,48,1],[leftStart,48,1],[leftStart,48,3],[leftStart+leftWidth*.28,36,3],
      [leftStart+leftWidth*.68,60,3],[leftStart+leftWidth,48,3],[leftStart+leftWidth,48,1],
      [rightStart,48,1],[rightStart,48,3],[rightStart+rightWidth*.28,22,3],
      [rightStart+rightWidth*.68,72,3],[rightStart+rightWidth,48,3],
      [rightStart+rightWidth,48,1],[innerWidth,48,1]
    ];
    const top=points.map(([x,y])=>`${x}px ${y}%`);
    const bottom=points.reverse().map(([x,y,thickness])=>`${x}px ${y+thickness}%`);
    sweep.style.setProperty('--sweep-shape', `polygon(${[...top,...bottom].join(',')})`);
    const duration=800;
    sweep.style.setProperty('--sweep-duration', `${duration}ms`);
    document.body.append(sweep);
    entryTimers.push(setTimeout(()=>selected.classList.add('is-glitching'),duration*crossing));
    entryTimers.push(setTimeout(()=>{
      show(id);
      sweep.classList.add('is-fading');
      entryTimers.push(setTimeout(clearEntry,300));
    },duration));
    return;
  }
  selected.classList.add('is-departing');selected.startDeparture?.();
  entryTimers.push(setTimeout(()=>entryCurtain.classList.add('active'),720));
  entryTimers.push(setTimeout(()=>show(id),1060));
  entryTimers.push(setTimeout(clearEntry,1460));
}
function resumeWorldDraw(){
  if(reduce.matches)draw(0);
  else if(typeof scheduleWorldDraw==='function')scheduleWorldDraw();
  else requestAnimationFrame(draw);
}
function restoreHome(){
  document.body.classList.remove('reading');document.body.classList.add('world-returning');
  document.querySelector('#reading').inert=true;links.inert=true;
  links.querySelectorAll('a').forEach(a=>a.resetInteraction?.());
  links.querySelectorAll('.course-leg.is-active').forEach(p=>p.classList.remove('is-active'));
  scrollTo(0,0);history.replaceState(null,'',location.pathname+location.search);
  if(window.worldPaused){window.worldPaused=false;resumeWorldDraw()}
  if(reduce.matches)links.querySelectorAll('a').forEach(a=>a.resetDeparture?.());else (links.querySelector('a[href="#'+lastDestination+'"]')||links.querySelector('a')).startArrival?.();
}
function finishReturn(){
  returnTimers.forEach(clearTimeout);returnTimers=[];
  entryCurtain.classList.remove('surface-active');document.body.classList.remove('world-returning');
  returning=false;busy=false;links.inert=false;
  wheelTotal=upTotal=0;wheelArmed=false;wheelUnlock=performance.now()+900;lastWheel=performance.now();
  if(returnWithKeyboard)(links.querySelector('a[href="#'+lastDestination+'"]')||links.querySelector('a')).focus({preventScroll:true});
  else document.activeElement?.blur();
}
function returnToWorld(keyboard=false){
  if(returning||!document.body.classList.contains('reading'))return;
  clearEntry();clearTimeout(returnTimer);busy=true;returning=true;returnWithKeyboard=keyboard;
  if(reduce.matches){restoreHome();finishReturn();return}
  if (playPortalTransition()) {
    returnTimers.push(setTimeout(() => {
      clearEntry();
      restoreHome();
      finishReturn();
    }, portalDuration));
    return;
  }
  entryCurtain.classList.add('surface-active');
  returnTimers.push(setTimeout(restoreHome,360));
  returnTimers.push(setTimeout(finishReturn,1140));
}
reduce.addEventListener('change',()=>{
  if(reduce.matches&&returning){clearEntry();restoreHome();finishReturn()}else if(reduce.matches&&busy){const id=lastDestination;clearEntry();show(id)}
});
const useOrbit=links.classList.contains('world-orbit');
for(const t of config.tabs){const a=document.createElement('a');a.href='#'+t.id;a.setAttribute('aria-label',t.label);if(useOrbit)a.textContent=t.label;else createWorldWaypoint(a,t,config.tabs.indexOf(t));a.onclick=e=>{e.preventDefault();enter(t.id,e.detail===0,useOrbit)};links.append(a);nav.insertAdjacentHTML('beforeend','<a href="#'+t.id+'">'+t.label+'</a>');const section=document.createElement('section');section.className='chapter';section.id=t.id;section.innerHTML='<h2 tabindex="-1">'+t.label+'</h2>';if(copy[t.id])section.innerHTML+='<p>'+copy[t.id]+'</p>';if(t.id==='photography')section.insertAdjacentHTML('beforeend','<div id="photography-gallery" aria-label="摄影作品圆顶画廊"></div>');if(t.id==='work'&&document.querySelector('#reading-exhibition-template'))section.append(document.querySelector('#reading-exhibition-template').content.cloneNode(true));else if(t.id==='work')section.innerHTML+='<div class="work-grid">'+config.works.map((w,i)=>'<figure><a href="assets/work-'+(i+1)+'.png" target="_blank" rel="noopener"><img loading="lazy" src="assets/work-'+(i+1)+'.png" alt="'+w[0]+'"></a><figcaption>'+w[0]+'<br>'+w[1]+'</figcaption></figure>').join('')+'</div><h3>PPT 作品</h3>'+config.presentations.map(p=>'<p>'+p.title+' '+p.files.map(f=>'<a href="我的作品/'+f[1]+'" download>下载 '+f[0]+'</a>').join(' ')+'</p>').join('');if(t.id==='journey'&&typeof renderJourney==='function')renderJourney(section,config.journey);else if(t.id==='journey')section.innerHTML+=config.journey.map(j=>'<p><time>'+j.date+'</time> · '+j.title+'<br>'+j.description+'</p>').join('');if(t.id==='contact')section.innerHTML+='<p><a href="mailto:669094008@qq.com">669094008@qq.com</a></p>';main.append(section);if(t.id==="contact"&&typeof renderEmailFlap==="function")renderEmailFlap(section.querySelector("a"))}if(useOrbit)setupWorldOrbit(links);else setupWorldCourse();document.querySelector('#reading').inert=true;document.querySelector('#back-world').onclick=e=>{e.preventDefault();returnToWorld(e.detail===0)};document.addEventListener('visibilitychange',()=>{if(!document.hidden&&window.worldPaused&&!document.body.classList.contains('reading')){window.worldPaused=false;resumeWorldDraw()}});

// Homepage wheel input is a deliberate entry gesture, never a reading scroll trap.
function handleWorldWheel(e){
  if(e.defaultPrevented||document.hidden||e.ctrlKey||e.metaKey||e.shiftKey||Math.abs(e.deltaX||0)>Math.abs(e.deltaY))return;
  if(document.body.classList.contains('reading')){
    if(busy){e.preventDefault();return}
    if(scrollY>2||e.deltaY>=0){upTotal=0;return}
    e.preventDefault();
    const now=performance.now();if(now-lastUp>200)upTotal=0;lastUp=now;
    upTotal+=-e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?innerHeight:1);
    if(upTotal>=100){upTotal=0;returnToWorld()}
    return;
  }
  e.preventDefault();
  const now=performance.now(),gap=now-lastWheel;lastWheel=now;
  if(busy)return;
  if(!wheelArmed){
    if(now<wheelUnlock||gap<220)return;
    wheelArmed=true;
  }
  if(e.deltaY<=0){wheelTotal=0;return}
  if(gap>200)wheelTotal=0;
  const pixels=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?innerHeight:1);
  wheelTotal+=pixels;
  if(wheelTotal>=90){wheelTotal=0;enter('intro',false,false,true)}
}
window.addEventListener('wheel',handleWorldWheel,{passive:false});

document.querySelector('.scroll-world').addEventListener('click', event => {
  enter('intro', event.detail === 0, false, mobileWorld.matches);
});

let worldTouchStart;
window.addEventListener('touchstart', event => {
  worldTouchStart = mobileWorld.matches && !document.body.classList.contains('reading')
    && event.touches.length === 1 ? event.touches[0] : undefined;
}, {passive:true});
window.addEventListener('touchcancel', () => { worldTouchStart = undefined; }, {passive:true});
window.addEventListener('touchend', event => {
  const start = worldTouchStart;
  worldTouchStart = undefined;
  if (!start || event.touches.length || document.body.classList.contains('reading')) return;
  const end = Array.from(event.changedTouches).find(touch => touch.identifier === start.identifier);
  if (!end) return;
  const rise = start.clientY - end.clientY;
  if (rise > 65 && rise > Math.abs(start.clientX - end.clientX) * 1.5) {
    enter('intro', false, false, true);
  }
}, {passive:true});

function schedulePortalPreparation() {
  if (window.requestIdleCallback) requestIdleCallback(preparePortalTransition, { timeout: 900 });
  else setTimeout(preparePortalTransition, 180);
}
if (!window.worldOpeningPending) window.addEventListener('load', schedulePortalPreparation, { once: true });
else window.addEventListener('message', event => {
  if (event.source === window.parent && event.origin === (location.protocol === 'file:' ? 'null' : location.origin) && event.data?.type === 'ybr-world-activate') schedulePortalPreparation();
});
