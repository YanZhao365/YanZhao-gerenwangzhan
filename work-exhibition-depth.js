/* Local interpretation of the archived Aristide depth curve.
 * Project a segmented image mesh with Canvas2D affine triangles. No remote
 * textures or WebGL file:// texture permissions are needed for this sample.
 */
(() => {
  const stage=document.querySelector('#exhibition'),cat=document.querySelector('#catalogue'),space=document.querySelector('.art-space');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)'),canvas=document.createElement('canvas');
  canvas.className='depth-canvas';canvas.setAttribute('aria-hidden','true');space.append(canvas);
  const ctx=canvas.getContext('2d');if(!ctx)return;
  const books=[...cat.querySelectorAll('.spine')],cache=new Map();
  let raf=0,last=cat.scrollLeft,velocity=0,impulse=0,lastTime=0,previousWidth=0,previousHeight=0;
  function schedule(){if(!raf&&!document.hidden)raf=requestAnimationFrame(draw);}
  function reset(){velocity=0;impulse=0;last=cat.scrollLeft;if(stage.classList.contains('depth-active'))stage.classList.remove('depth-active');ctx.clearRect(0,0,canvas.width,canvas.height);canvas.dataset.strength='0';}
  function texture(book,w,h){
    const img=book.querySelector('img');if(w<=0||h<=0||!img.complete||!img.naturalWidth)return null;
    const key=img.src+'|'+Math.round(w)+'|'+Math.round(h),old=cache.get(key);if(old)return old;
    const color=document.createElement('canvas'),grey=document.createElement('canvas'),ratio=1.5;
    color.width=grey.width=Math.ceil(w*ratio);color.height=grey.height=Math.ceil(h*ratio);
    const scale=Math.max(color.width/img.naturalWidth,color.height/img.naturalHeight),sw=img.naturalWidth*scale,sh=img.naturalHeight*scale;
    color.getContext('2d').drawImage(img,(color.width-sw)/2,(color.height-sh)/2,sw,sh);
    const g=grey.getContext('2d');g.filter='grayscale(1) brightness(.6)';g.drawImage(color,0,0);
    const value={color,grey};cache.set(key,value);return value;
  }
  // Affine map one source triangle to one projected destination triangle.
  function triangle(image,s,d){
    const [p,q,r]=s,[a,b,c]=d,den=(q.x-p.x)*(r.y-p.y)-(r.x-p.x)*(q.y-p.y);if(Math.abs(den)<.001)return;
    const A=((b.x-a.x)*(r.y-p.y)-(c.x-a.x)*(q.y-p.y))/den;
    const C=((c.x-a.x)*(q.x-p.x)-(b.x-a.x)*(r.x-p.x))/den;
    const B=((b.y-a.y)*(r.y-p.y)-(c.y-a.y)*(q.y-p.y))/den;
    const D=((c.y-a.y)*(q.x-p.x)-(b.y-a.y)*(r.x-p.x))/den;
    const mx=(a.x+b.x+c.x)/3,my=(a.y+b.y+c.y)/3;const pad=p=>{const dx=p.x-mx,dy=p.y-my,len=Math.hypot(dx,dy)||1;return{x:p.x+Math.sign(dx)*.6,y:p.y+Math.sign(dy)*.6}};const aa=pad(a),bb=pad(b),cc=pad(c);ctx.save();ctx.beginPath();ctx.moveTo(aa.x,aa.y);ctx.lineTo(bb.x,bb.y);ctx.lineTo(cc.x,cc.y);ctx.closePath();ctx.clip();ctx.transform(A,B,C,D,a.x-A*p.x-C*p.y,a.y-B*p.x-D*p.y);ctx.drawImage(image,0,0);ctx.restore();
  }
  function draw(t){
    raf=0;if(reduced.matches||cat.hidden||document.querySelector('#poster-panel').hidden||document.hidden){reset();return;}
    const area=space.getBoundingClientRect();if(!area.width||!area.height||area.bottom<0||area.top>innerHeight){reset();return;}
    const w=area.width,h=area.height,dpr=Math.min(devicePixelRatio||1,1.5);
    if(previousWidth!==w||previousHeight!==h){canvas.width=Math.ceil(w*dpr);canvas.height=Math.ceil(h*dpr);previousWidth=w;previousHeight=h;cache.clear();}
    const dt=Math.min(40,Math.max(8,t-lastTime||16.67));lastTime=t;
    const k=1-Math.exp(-dt/105);velocity+=(impulse-velocity)*k;impulse=0;
    const amount=Math.min(1,Math.abs(velocity)/5),bend=amount*235;
    canvas.dataset.strength=amount.toFixed(3);canvas.dataset.velocity=velocity.toFixed(3);
    ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
    const ease=n=>n<.5?2*n*n:-1+(4-2*n)*n;
    function point(x,y,center){const distance=Math.min(1,Math.abs(x-w/2)/(w*.66));const z=(1-ease(distance))*bend+(x-center)*velocity*.018;const f=1300/(1300-z);return{x:w/2+(x-w/2)*f,y:h/2+(y-h/2)*f-z*.07};}
    let ready=true,visible=0;
    for(const book of books){
      const r=book.getBoundingClientRect();if(r.right<area.left-100||r.left>area.right+100)continue;
      const tex=texture(book,r.width,r.height);if(!tex){ready=false;continue;}visible++;
      const img=book.matches(':hover,:focus-visible')||book.getAttribute('aria-pressed')==='true'?tex.color:tex.grey;
      const x=r.left-area.left,y=r.top-area.top,center=x+r.width/2,segments=12;
      for(let j=0;j<segments;j++){
        const u=j/segments,v=(j+1)/segments,x0=x+u*r.width,x1=x+v*r.width;
        const a=point(x0,y,center),b=point(x1,y,center),c=point(x1,y+r.height,center),d=point(x0,y+r.height,center);
        const s0={x:u*img.width,y:0},s1={x:v*img.width,y:0},s2={x:v*img.width,y:img.height},s3={x:u*img.width,y:img.height};
        triangle(img,[s0,s1,s2],[a,b,c]);triangle(img,[s0,s2,s3],[a,c,d]);
      }
    }
    stage.classList.toggle('depth-active',ready&&visible>0);
    if(Math.abs(velocity)>.005||Math.abs(impulse)>.005)schedule();
  }
  cat.addEventListener('scroll',()=>{let delta=cat.scrollLeft-last;last=cat.scrollLeft;const unit=books[11].offsetLeft-books[0].offsetLeft;if(unit)delta-=Math.round(delta/unit)*unit;if(Math.abs(delta)<100)impulse=Math.max(-12,Math.min(12,delta));schedule();},{passive:true});
  new MutationObserver(()=>{if(cat.hidden)reset();else{last=cat.scrollLeft;schedule();}}).observe(stage,{attributes:true,attributeFilter:['class']});
  cat.addEventListener('pointerover',schedule);cat.addEventListener('pointerout',schedule);cat.addEventListener('focusin',schedule);
  new ResizeObserver(schedule).observe(space);window.addEventListener('scroll',schedule,{passive:true});
  reduced.addEventListener('change',()=>{reset();schedule();});document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;reset();}else schedule();});
  books.forEach(b=>b.querySelector('img').addEventListener('load',schedule,{once:true}));schedule();
})();

