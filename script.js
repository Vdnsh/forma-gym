// All artwork is inline SVG. Nothing is downloaded when an exercise opens.
const exercises = [
  {id:'bench',name:'Dumbbell bench press',group:'CHEST · COMPOUND',sets:3,rest:'90–120 SEC',unit:'kg per dumbbell',view:'SIDE VIEW',headline:'Press smoothly.',accent:'Lower with control.',description:'Lie on the bench with feet planted. Press the dumbbells upward, then lower to a comfortable depth.',cues:['Keep wrists stacked over elbows.','Hold your shoulder blades steady.','Avoid bouncing at the bottom.']},
  {id:'shoulder',name:'Seated shoulder press',group:'SHOULDERS · COMPOUND',sets:2,rest:'90–120 SEC',unit:'kg per dumbbell',view:'FRONT VIEW',headline:'Press up tall.',accent:'Keep your ribs down.',description:'Sit against the bench with dumbbells near shoulder height. Press overhead without shrugging or arching your back.',cues:['Keep forearms nearly vertical.','Move both arms at an even pace.','Lower to a comfortable shoulder level.']},
  {id:'chest',name:'Cable chest press',group:'CHEST · CABLE',sets:2,rest:'60–90 SEC',unit:'kg on cable stack',view:'SIDE VIEW',headline:'Press straight ahead.',accent:'Return slowly.',description:'Set the pulleys around chest height and take a stable split stance. Press the handles forward, then return under control.',cues:['Keep your torso still.','Let elbows bend naturally on the return.','Use an even load on both sides.']},
  {id:'lateral',name:'Dumbbell lateral raise',group:'SHOULDERS · ISOLATION',sets:2,rest:'60–90 SEC',unit:'kg per dumbbell',view:'FRONT VIEW',headline:'Raise with control.',accent:'Lower even slower.',description:'Stand tall with soft elbows. Lift your arms out to the sides until the weights reach about shoulder height, then lower without swinging.',cues:['Lead with your elbows, not your wrists.','Keep shoulders relaxed and torso still.','Use light weights you can control.']},
  {id:'triceps',name:'Cable triceps pressdown',group:'TRICEPS · CABLE',sets:2,rest:'60–90 SEC',unit:'kg on cable stack',view:'SIDE VIEW',headline:'Elbows stay close.',accent:'Extend without swinging.',description:'Face a high pulley. Keep your elbows beside your torso while you press the handle down; let it return slowly.',cues:['Stand tall and keep shoulders quiet.','Straighten your elbows at the bottom.','Control the handle on the way up.']}
];

const motion = (attr,a,b) => `<animate attributeName="${attr}" values="${a};${a};${b};${b};${a}" keyTimes="0;.12;.5;.66;1" dur="3.4s" repeatCount="indefinite"/>`;
const movingPath = (a,b,cls='moving-limb') => `<path class="${cls}" d="${a}">${motion('d',a,b)}</path>`;
const movingWeight = (x,y,xx,yy,w=30) => `<rect class="moving-weight" x="${x}" y="${y}" width="${w}" height="12" rx="3">${motion('x',x,xx)}${motion('y',y,yy)}</rect>`;
function illustration(exercise) {
  let body = '';
  let description = '';
  switch(exercise.id) {
    case 'bench':
      description='A person lying on a bench presses a dumbbell upward and lowers it.';
      body=`<path class="equipment" d="M105 178 H335 M120 178 V248 M320 178 V248"/><circle class="figure-head" cx="91" cy="139" r="20"/><path class="figure-body" d="M116 139 H306 M306 139 L346 171 L347 245 M301 139 L288 177 L288 245 M338 245 H360 M279 245 H299"/><path class="ghost" d="M204 139 L205 55"/>${movingPath('M204 139 L185 111 L193 88','M204 139 L205 91 L205 55')}${movingWeight(178,79,190,46)}`;
      break;
    case 'shoulder':
      description='A seated person presses two dumbbells overhead and lowers them to shoulder height.';
      body=`<path class="equipment" d="M211 104 V205 M180 205 H260 M190 205 V250 M250 205 V250"/><circle class="figure-head" cx="220" cy="69" r="21"/><path class="figure-torso" d="M202 100 L191 120 L201 190 L220 202 L239 190 L249 120 L238 100 Z"/><path class="figure-body" d="M207 203 L187 222 L187 250 M233 203 L253 222 L253 250 M175 251 H200 M241 251 H265"/>${movingPath('M194 120 L168 146 L166 103','M194 120 L193 76 L202 47')}${movingPath('M246 120 L272 146 L274 103','M246 120 L247 76 L238 47')}${movingWeight(151,94,187,37)}${movingWeight(259,94,223,37)}`;
      break;
    case 'chest':
      description='A standing person presses a cable handle forward from chest height and returns it.';
      body=`<path class="equipment" d="M70 35 V232 M70 118 H86"/><circle class="figure-head" cx="222" cy="68" r="21"/><path class="figure-torso" d="M212 97 L201 121 L207 191 L237 192 L243 121 L232 98 Z"/><path class="figure-body" d="M212 190 L171 246 M234 190 L266 246 M157 247 H184 M253 247 H279"/>${movingPath('M70 118 L190 119','M70 118 L331 119','cable-line')}${movingPath('M214 122 L197 147 L190 119','M214 122 L264 121 L331 119')}${movingWeight(177,111,318,111,26)}`;
      break;
    case 'lateral':
      description='A standing person raises dumbbells out to shoulder height and lowers them.';
      body=`<path class="ghost" d="M196 119 L108 119 M244 119 L332 119"/><circle class="figure-head" cx="220" cy="69" r="22"/><path class="figure-torso" d="M206 96 L195 117 L201 180 L220 193 L239 180 L245 117 L234 96 Z"/><path class="figure-body" d="M205 188 L192 254 M235 188 L248 254 M186 255 H199 M241 255 H254"/><g class="arm arm-left"><path d="M196 118 L179 168 L164 216"/><rect x="149" y="210" width="30" height="12" rx="3"/></g><g class="arm arm-right"><path d="M244 118 L261 168 L276 216"/><rect x="261" y="210" width="30" height="12" rx="3"/></g><circle class="shoulder-joint" cx="196" cy="119" r="5"/><circle class="shoulder-joint" cx="244" cy="119" r="5"/>`;
      break;
    case 'triceps':
      description='A standing person keeps the elbow close to the body and pushes a cable handle down.';
      body=`<path class="equipment" d="M130 29 H215 M215 29 V55"/><circle class="figure-head" cx="230" cy="75" r="21"/><path class="figure-torso" d="M216 101 L205 124 L209 191 L240 191 L246 124 L236 101 Z"/><path class="figure-body" d="M214 190 L204 248 M236 190 L250 248 M190 249 H216 M239 249 H264"/>${movingPath('M215 55 L216 110','M215 55 L219 182','cable-line')}${movingPath('M209 122 L216 143 L216 110','M209 122 L216 143 L219 182')}${movingWeight(199,102,203,174,34)}`;
  }
  return `<svg class="motion-figure" viewBox="0 0 440 300" role="img" aria-label="${exercise.name} demonstration. ${description}"><defs><radialGradient id="halo-${exercise.id}"><stop offset="0" stop-color="#a8d7bf" stop-opacity=".14"/><stop offset="1" stop-color="#a8d7bf" stop-opacity="0"/></radialGradient></defs><circle class="scene-halo" cx="220" cy="148" r="130" fill="url(#halo-${exercise.id})"/><path class="scene-floor" d="M74 259 H366"/>${body}</svg>`;
}

const now=new Date();
const dateKey=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
const storageKey=`forma-monday-sets-${dateKey}`;
let log={};
try { log=JSON.parse(localStorage.getItem(storageKey)||'{}')||{}; } catch { log={}; }
function entry(e,i){
  const saved=log[e.id]?.[i]||{};
  const reps=Number(saved.reps),weight=Number(saved.weight);
  const validReps=Number.isInteger(reps)&&reps>=12;
  const validWeight=saved.weight!==''&&Number.isFinite(weight)&&weight>0;
  return {reps:validReps?String(reps):'12',weight:validWeight?String(weight):'',done:!!saved.done&&validReps&&validWeight};
}
function save(){try{localStorage.setItem(storageKey,JSON.stringify(log));}catch{/* Storage may be disabled. */}}
function setRows(e){
  return Array.from({length:e.sets},(_,i)=>{
    const v=entry(e,i);
    return `<div class="set-row" data-set="${i}"><span class="set-number">SET ${String(i+1).padStart(2,'0')}</span><label class="set-field"><span>REPS</span><input class="reps-input" type="number" inputmode="numeric" min="12" step="1" value="${v.reps}" aria-label="${e.name} set ${i+1} reps"></label><label class="set-field"><span>WEIGHT <small>KG</small></span><input class="weight-input" type="number" inputmode="decimal" min="0.1" step="0.1" placeholder="—" value="${v.weight}" aria-label="${e.name} set ${i+1} weight in kilograms"></label><label class="set-check"><input type="checkbox" ${v.done?'checked':''} aria-label="Complete ${e.name} set ${i+1}"><span aria-hidden="true">✓</span></label></div>`;
  }).join('');
}
function card(e,i){
  const open=e.id==='lateral';
  return `<article class="exercise-card ${open?'featured is-open':''}" data-id="${e.id}"><div class="exercise-main"><span class="exercise-status" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="m4 10 4 4 8-8"/></svg></span><button class="exercise-open" type="button" aria-expanded="${open}" aria-controls="detail-${e.id}"><span class="exercise-number">${String(i+1).padStart(2,'0')}</span><span class="exercise-title-wrap"><strong>${e.name}</strong><small>${e.group}</small></span><span class="exercise-prescription">${e.sets} <i>×</i> 12–15</span><span class="chevron" aria-hidden="true"></span></button></div><div class="exercise-detail" id="detail-${e.id}" ${open?'':'hidden'}><div class="demo"><div class="demo-stage"><div class="demo-topline"><span><span class="live-dot"></span> MOVEMENT STUDY</span><span>${e.view}</span></div>${illustration(e)}<div class="stage-labels"><span>START</span><span>MOVE WITH CONTROL</span><span>RETURN</span></div></div><div class="demo-copy"><div class="demo-copy-top"><span class="tag">FORM GUIDE</span><span class="loop-label">AUTO LOOP</span></div><h3>${e.headline}<br><em>${e.accent}</em></h3><p>${e.description}</p><ul class="cue-list">${e.cues.map((cue,j)=>`<li><span>${String(j+1).padStart(2,'0')}</span>${cue}</li>`).join('')}</ul><div class="detail-footer"><span>REST ${e.rest}</span><span>${e.sets} SETS · 12+ REPS</span></div></div></div><div class="set-log"><div class="set-log-heading"><div><span class="section-kicker">TODAY'S RECORD</span><h4>Log each set</h4></div><span class="weight-note">${e.unit}</span></div><div class="set-list">${setRows(e)}</div><p class="set-help">Enter the weight you used, then tick the set when you finish at least 12 reps.</p><p class="set-error" role="status" hidden></p></div></div></article>`;
}
document.getElementById('exercise-list').innerHTML=exercises.map(card).join('');
const cards=[...document.querySelectorAll('.exercise-card')];
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
function syncMotion(card){
  const svg=card.querySelector('.motion-figure');
  if(!svg?.pauseAnimations)return;
  if(card.classList.contains('is-open')&&!reducedMotion.matches)svg.unpauseAnimations();
  else svg.pauseAnimations();
}
function updateProgress(){
  let count=0;
  for(const card of cards){
    const e=exercises.find(item=>item.id===card.dataset.id);
    const done=Array.from({length:e.sets},(_,i)=>entry(e,i)).every(v=>v.done);
    card.classList.toggle('is-complete',done);
    if(done)count++;
  }
  document.getElementById('progress-count').textContent=`${count} of ${cards.length} complete`;
  document.getElementById('progress-fill').style.width=`${100*count/cards.length}%`;
}
for(const cardElement of cards){
  const e=exercises.find(item=>item.id===cardElement.dataset.id);
  const openButton=cardElement.querySelector('.exercise-open');
  const detail=cardElement.querySelector('.exercise-detail');
  const error=cardElement.querySelector('.set-error');
  openButton.addEventListener('click',()=>{
    const open=openButton.getAttribute('aria-expanded')!=='true';
    if(open){
      for(const other of cards){
        if(other===cardElement)continue;
        other.querySelector('.exercise-open').setAttribute('aria-expanded','false');
        other.querySelector('.exercise-detail').hidden=true;
        other.classList.remove('is-open','featured');
        syncMotion(other);
      }
    }
    openButton.setAttribute('aria-expanded',String(open));
    detail.hidden=!open;
    cardElement.classList.toggle('is-open',open);
    cardElement.classList.toggle('featured',open);
    syncMotion(cardElement);
  });
  cardElement.querySelectorAll('.set-row').forEach(row=>{
    const i=Number(row.dataset.set);
    const reps=row.querySelector('.reps-input');
    const weight=row.querySelector('.weight-input');
    const check=row.querySelector('input[type="checkbox"]');
    function store(){
      const valid=Number.isInteger(Number(reps.value))&&Number(reps.value)>=12&&Number(weight.value)>0;
      if(check.checked&&!valid)check.checked=false;
      log[e.id]||=[];
      log[e.id][i]={reps:reps.value,weight:weight.value,done:check.checked};
      save();updateProgress();
      if(valid)error.hidden=true;
      return valid;
    }
    reps.addEventListener('input',store);
    weight.addEventListener('input',store);
    check.addEventListener('change',()=>{
      if(check.checked&&!store()){
        error.textContent='Enter at least 12 reps and a weight above 0 kg before completing this set.';
        error.hidden=false;
      }else store();
    });
  });
  syncMotion(cardElement);
}
reducedMotion.addEventListener('change',()=>cards.forEach(syncMotion));
updateProgress();
