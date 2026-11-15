(() => {
const $=s=>document.querySelector(s),stage=$('#exhibition'),rail=$('#rail'),cat=$('#catalogue'),additional=stage?.closest('#reading') ? siteContent.additionalPosters : [],
      works=siteContent.works.concat(additional.map(piece => [piece.name, piece.category])),N=works.length,mq=matchMedia('(prefers-reduced-motion: reduce)');
let selected=8,active,expanded=false,immersed=false,busy=false,origin,placeholder,saved=0,savedRail=0,cycle=0,speed=0,frame=0,lastT=0,lastWheel=0,total=0,until=0,desired=0,hoverBook=null,hoverSince=0,pointer=null,detailReturn=null;
const selectedName = $('#selected-name'), counter = $('#counter'), imageDialog = $('#image-dialog');
const arrows = [$('#prev'), $('#next')].filter(Boolean);
additional.forEach((piece, index) => {
  const detail = additionalExhibitionDetails[piece.name];
  exhibitionPieces[siteContent.works.length + index] = {
    theme: detail ? (piece.category === '毛绒可爱风' ? 'plush' : 'glass') : 'additional',
    layout: detail?.layout,
    image: piece.image,
    title: detail?.title ?? [piece.name],
    subtitle: detail?.subtitle ?? '',
    category: piece.category,
    note: [],
    alt: detail?.title.join(' ') ?? piece.name,
    palette: [detail?.surface ?? '#10212c', '#fff5e8', detail?.accent ?? '#9fd4e6', '#d7d1cc']
  };
});
const all=[],notice=t=>$('#notice').textContent=t;
for(let copy=0;copy<7;copy++)works.forEach(([name],i)=>{const b=document.createElement('button');b.className='spine';b.dataset.work=i;b.dataset.copy=copy;b.tabIndex=copy===3?0:-1;b.setAttribute('aria-label',name);b.setAttribute('aria-pressed','false');const img=document.createElement('img');img.src=i<siteContent.works.length?`assets/work-${i+1}.png`:exhibitionPieces[i].image;if(i>=siteContent.works.length)img.loading="lazy";img.alt=name;img.draggable=false;const num=document.createElement('span');num.className='spine-number';num.textContent=String(i+1).padStart(2,'0');b.append(img,num);rail.append(b);all.push(b);b.onclick=()=>open(b);b.onfocus=()=>{if(!expanded&&!busy)select(b,false);};});
function stop(){desired=0;speed=0;hoverBook=null;pointer=null;cancelAnimationFrame(frame);frame=0;stage.classList.remove('edge-l','edge-r');}
function measure(){cycle=all[N].offsetLeft-all[0].offsetLeft;}
function wrap(){if(!cycle||expanded)return;const low=all[2*N].offsetLeft-cat.offsetLeft,high=low+cycle*2;let d=cat.scrollLeft<low?cycle*2:cat.scrollLeft>high?-cycle*2:0;if(d){cat.scrollLeft+=d;const i=all.indexOf(active)+Math.round(d/cycle)*N;active=all[i]||all[3*N+selected];}}
cat.addEventListener('scroll',wrap,{passive:true});
function select(b,center=true){active=b;selected=+b.dataset.work;all.forEach(x=>x.setAttribute('aria-pressed',String(+x.dataset.work===selected)));if(selectedName)selectedName.textContent=works[selected][0];if(counter)counter.textContent=`${String(selected+1).padStart(2,'0')} / ${N}`;if(center)cat.scrollTo({left:b.offsetLeft-cat.offsetLeft-cat.clientWidth/2+b.clientWidth/2,behavior:'instant'});notice('');}
function nearest(i){const x=cat.getBoundingClientRect().left+cat.clientWidth/2;return all.filter(b=>+b.dataset.work===i).sort((a,b)=>Math.abs(a.getBoundingClientRect().left+a.clientWidth/2-x)-Math.abs(b.getBoundingClientRect().left+b.clientWidth/2-x))[0];}
const immersionSwitch = $('#immersive-switch');
function syncImmersionSwitch() {
  if (!immersionSwitch) return;
  const thumb = immersionSwitch.querySelector('.squish-switch__thumb');
  const position = getComputedStyle(thumb).transform;
  immersionSwitch.setAttribute('aria-checked', String(immersed));
  const action = immersed ? '点击回退长页界面' : '点击进入沉浸式界面';
  immersionSwitch.title = action;
  $('#immersive-switch-text').textContent = action;
  if (mq.matches) return;
  thumb.getAnimations().forEach(animation => animation.cancel());
  const from = position === 'none' ? 4 : new DOMMatrixReadOnly(position).m41;
  const to = immersed ? 42 : 4;
  const offset = Math.sign(to - from);
  thumb.animate([
    { transform: 'translateX(' + from + 'px)' },
    { transform: 'translateX(' + (from + (to - from) * .55) + 'px) scale(1.14,.88)', offset: .42 },
    { transform: 'translateX(' + (to + offset * 1.5) + 'px) scale(.91,1.07)', offset: .75 },
    { transform: 'translateX(' + to + 'px)' }
  ], { duration: 320, easing: 'ease-out' });
}
function hint(){$('#hint').textContent=immersed?(expanded?'向上滚动收起':'向下滚动展开 · 左右半屏浏览 · Esc 返回长页'):'鼠标左/右半屏浏览 · 点击进入作品';}
function clearMotion(){document.querySelectorAll('[data-exhibit-motion]').forEach(n=>{n.getAnimations().forEach(a=>a.cancel());n.remove();});}
function artworkRect(){const r=$('#original img').getBoundingClientRect(),preview=active.querySelector('img'),ratio=preview.naturalWidth/preview.naturalHeight||1;const w=Math.min(r.width,r.height*ratio),h=w/ratio;return{left:r.left+(r.width-w)/2,top:r.top+(r.height-h)/2,width:w,height:h};}
function fadeTitle(){if(mq.matches)return;const node=$('.feature-type'),r=node.getBoundingClientRect(),clone=node.cloneNode(true),src=[node,...node.querySelectorAll('*')],dst=[clone,...clone.querySelectorAll('*')];src.forEach((n,i)=>{const c=getComputedStyle(n);['fontFamily','fontSize','fontWeight','fontStyle','lineHeight','letterSpacing','color','display','margin','padding','textAlign','boxSizing'].forEach(p=>dst[i].style[p]=c[p]);});clone.dataset.exhibitMotion='title';Object.assign(clone.style,{position:'fixed',left:r.left+'px',top:r.top+'px',width:r.width+'px',height:r.height+'px',zIndex:39,pointerEvents:'none'});document.body.append(clone);clone.animate([{opacity:1,transform:'none'},{opacity:0,transform:'translateY(-20px)'}],{duration:330,easing:'cubic-bezier(.4,0,1,1)'}).finished.catch(()=>{}).finally(()=>clone.remove());}
function morph(from,to,opening){if(mq.matches||!from.width||!to.width)return;const c=document.createElement('img');c.src=exhibitionPieces[selected].image;c.alt='';c.dataset.exhibitMotion='image';Object.assign(c.style,{position:'fixed',left:to.left+'px',top:to.top+'px',width:to.width+'px',height:to.height+'px',objectFit:'cover',zIndex:40,pointerEvents:'none'});document.body.append(c);const image=$('#original img');if(opening)image.style.visibility='hidden';c.animate([{left:from.left+'px',top:from.top+'px',width:from.width+'px',height:from.height+'px',opacity:1},{left:to.left+'px',top:to.top+'px',width:to.width+'px',height:to.height+'px',opacity:1}],{duration:650,easing:'cubic-bezier(.16,1,.3,1)'}).finished.catch(()=>{}).finally(()=>{c.remove();if(!document.querySelector('[data-exhibit-motion="image"]'))image.style.visibility='';});}
function expand(value,animate=true){if(busy||value===expanded)return;if(value&&!exhibitionPieces[selected]){notice('此作品详情暂未就绪。');return;}stop();clearMotion();if(value){renderPiece();detailReturn={book:active,scroll:cat.scrollLeft};}const from=value?active.getBoundingClientRect():artworkRect();if(!value)fadeTitle();expanded=value;stage.classList.toggle('expanded',value);$('#feature').hidden=!value;cat.hidden=value;if($('#collapse'))$('#collapse').hidden=!value;arrows.forEach(button => { button.disabled = value; });hint();until=performance.now()+(mq.matches?150:750);if(!value){select(detailReturn?.book||nearest(selected),false);cat.scrollTo({left:detailReturn?.scroll??cat.scrollLeft,behavior:"instant"});active.focus({preventScroll:true});stage.classList.remove('opening');stage.classList.add('closing');setTimeout(()=>stage.classList.remove('closing'),650);}else{stage.classList.add('opening');stage.classList.remove('closing');setTimeout(()=>stage.classList.remove('opening'),750);}if(animate)morph(from,value?artworkRect():active.getBoundingClientRect(),value);}
function renderPiece(){
const piece=exhibitionPieces[selected];stage.dataset.piece=piece.theme;stage.dataset.layout=piece.layout||"portrait";["--surface","--paper","--gold","--muted"].forEach((key,i)=>stage.style.setProperty(key,piece.palette[i]));
$('.feature-type>p').textContent=piece.subtitle;const title=$('.feature h2');title.replaceChildren();piece.title.forEach((line,index)=>{const span=document.createElement('span');span.textContent=piece.layout==='stacked'&&index?' '+line:line;title.append(span);});
const captions=document.querySelectorAll('.feature-caption span');captions[0].textContent=works[selected][0];captions[1].textContent=piece.category;
const hero=$('#original img');hero.src=piece.image;hero.alt=piece.alt;if(imageDialog)$('#original').setAttribute('aria-label','查看'+works[selected][0]+'完整原图');
if(imageDialog){const full=imageDialog.querySelector('img');full.src=piece.image;full.alt=works[selected][0]+'完整海报';}const note=$('.feature-note');note.replaceChildren();piece.note.forEach((line,i)=>{if(i)note.append(document.createElement('br'));note.append(document.createTextNode(line));});
}
function enter(){if(immersed)return;stop();saved=scrollY;savedRail=cat.scrollLeft;origin=active;const r=stage.getBoundingClientRect();placeholder=document.createElement('div');placeholder.style.height=stage.offsetHeight+'px';placeholder.style.margin=getComputedStyle(stage).margin;placeholder.setAttribute('aria-hidden','true');stage.before(placeholder);document.body.style.position='fixed';document.body.style.top=`-${saved}px`;document.body.style.width='100%';immersed=true;stage.classList.add('immersed');stage.setAttribute('role','dialog');stage.setAttribute('aria-modal','true');if($('#exit'))$('#exit').hidden=false;syncImmersionSwitch();(immersionSwitch||$('#exit'))?.focus({preventScroll:true});$('#poster-tab').disabled=true;$('#ppt-tab').disabled=true;lastWheel=performance.now();total=0;if(!mq.matches)stage.animate([{clipPath:`inset(${Math.max(0,r.top)}px ${Math.max(0,innerWidth-r.right)}px ${Math.max(0,innerHeight-r.bottom)}px ${Math.max(0,r.left)}px)`},{clipPath:'inset(0px)'}],{duration:650,easing:'cubic-bezier(.16,1,.3,1)'});hint();}
function open(b){if(busy||(expanded&&performance.now()<until))return;stop();select(b,false);if(!exhibitionPieces[selected]){notice('此作品详情暂未就绪。');return;}renderPiece();const from=b.getBoundingClientRect();enter();expand(true,false);morph(from,artworkRect(),true);}
async function exit(){
if(!immersed||busy)return;stop();clearMotion();busy=true;const r=placeholder.getBoundingClientRect();
if (!mq.matches) {
  const animations = [stage.animate([
    {transform:'none',transformOrigin:'0 0'},
    {transform:'translate('+r.left+'px,'+r.top+'px) scale('+r.width/innerWidth+','+r.height/innerHeight+')',transformOrigin:'0 0'}
  ], {duration:650,easing:'cubic-bezier(.65,0,.35,1)'})];
  const feature = $('#feature');
  if (!feature.hidden) animations.push(feature.animate(
    [{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(20px)'}],
    {duration:350,fill:'forwards'}
  ));
  await Promise.allSettled(animations.map(animation=>animation.finished));
  animations.forEach(animation=>animation.cancel());
}
expanded=false;immersed=false;stage.classList.remove('immersed','expanded','opening','closing');stage.removeAttribute('role');stage.removeAttribute('aria-modal');$('#feature').hidden=true;cat.hidden=false;if($('#collapse'))$('#collapse').hidden=true;if($('#exit'))$('#exit').hidden=true;syncImmersionSwitch();arrows.forEach(button => { button.disabled = false; });$('#poster-tab').disabled=false;$('#ppt-tab').disabled=false;placeholder.remove();placeholder=null;document.body.style.position='';document.body.style.top='';document.body.style.width='';scrollTo({top:saved,behavior:'instant'});select(origin?.isConnected?origin:nearest(selected),false);cat.scrollTo({left:savedRail,behavior:'instant'});active.focus({preventScroll:true});notice('');hint();busy=false;
}
$('#prev')?.addEventListener('click',()=>select(nearest((selected+N-1)%N)));$('#next')?.addEventListener('click',()=>select(nearest((selected+1)%N)));$('#collapse')?.addEventListener('click',()=>expand(false));$('#exit')?.addEventListener('click',exit);
immersionSwitch?.addEventListener('click',()=>{ if (busy) return; if (immersed) exit(); else { if (!$('#ppt-panel').hidden) tab(0); enter(); } });
function animate(t){const dt=Math.min(40,t-lastT||16);lastT=t;
if(pointer){const hit=document.elementFromPoint(pointer.x,pointer.y)?.closest('.spine');if(hit!==hoverBook){hoverBook=hit;hoverSince=t;}}
const target=desired*(hoverBook?Math.max(0,1-(t-hoverSince)/320)*.22:1);speed+=(target-speed)*(1-Math.exp(-dt/95));
cat.scrollLeft+=speed*dt/16.67;wrap();if(Math.abs(speed)>.015||Math.abs(target)>.015)frame=requestAnimationFrame(animate);else{speed=0;frame=0;}}
window.addEventListener('pointermove',e=>{const r=cat.getBoundingClientRect();if(e.pointerType!=='mouse'||expanded||busy||$('#poster-panel').hidden||r.bottom<=0||r.top>=innerHeight){stop();return;}pointer={x:e.clientX,y:e.clientY};const off=Math.max(-1,Math.min(1,(e.clientX-innerWidth/2)/(innerWidth/2)));desired=Math.sign(off)*Math.pow(Math.abs(off),1.35)*9;stage.classList.toggle('edge-l',desired<0);stage.classList.toggle('edge-r',desired>0);if(desired&&!frame){lastT=performance.now();frame=requestAnimationFrame(animate);}if(!desired)stop();});
cat.addEventListener('pointerdown',e=>{if(e.target.closest('.spine'))stop();});
document.documentElement.addEventListener('pointerleave',stop);window.addEventListener('blur',stop);document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});window.addEventListener('scroll',()=>{const r=cat.getBoundingClientRect();if(r.bottom<=0||r.top>=innerHeight)stop();},{passive:true});
stage.addEventListener('wheel',e=>{if(!immersed||e.ctrlKey||e.metaKey||imageDialog?.open)return;e.preventDefault();if(busy)return;const now=performance.now(),gap=now-lastWheel;lastWheel=now;if(gap>220)total=0;if(now<until||Math.abs(e.deltaX)>Math.abs(e.deltaY))return;const d=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?innerHeight:1);if(Math.sign(d)!==Math.sign(total))total=0;total+=d;if(Math.abs(total)<55)return;const v=total>0;total=0;expand(v);},{passive:false});
stage.addEventListener('keydown',e=>{if(e.key==='Escape'&&immersed&&!imageDialog?.open){e.preventDefault();exit();}if(!expanded&&!busy&&$('#ppt-panel').hidden&&['ArrowLeft','ArrowRight'].includes(e.key)&&!e.target.matches('[role=tab]')){e.preventDefault();select(nearest((selected+N+(e.key==='ArrowLeft'?-1:1))%N));active.focus({preventScroll:true});}if(immersed&&e.key==='Tab'){const nodes=[...stage.querySelectorAll('button,a')].filter(n=>!n.disabled&&n.tabIndex>=0&&n.getClientRects().length);const first=nodes[0],last=nodes.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
const tabs=[$('#poster-tab'),$('#ppt-tab')];function tab(i){if(immersed)return;stop();tabs.forEach((b,j)=>{b.setAttribute('aria-selected',String(i===j));b.tabIndex=i===j?0:-1;});$('#poster-panel').hidden=i!==0;$('#ppt-panel').hidden=i!==1;notice('');if(!i){measure();select(nearest(selected));}}
tabs.forEach((b,i)=>{b.onclick=()=>tab(i);b.onkeydown=e=>{if(['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();tab(1-i);tabs[1-i].focus();}};});
siteContent.presentations.forEach(p=>{const a=document.createElement('a');a.textContent=p.title+' · 下载';a.href='我的作品/'+p.files[0][1];a.download='';$('#ppt-links').append(a);});
if(imageDialog){$('#original').onclick=()=>imageDialog.showModal();$('#close-image').onclick=()=>imageDialog.close();imageDialog.addEventListener('close',()=>$('#original').focus({preventScroll:true}));}
window.addEventListener('resize',()=>{measure();if(!expanded)select(all[3*N+selected]);});const initialLayout = new ResizeObserver(() => {
  if (!cat.clientWidth) return;
  initialLayout.disconnect();
  measure();
  select(all[3 * N + 8]);
  hint();
});
initialLayout.observe(cat);
})();
