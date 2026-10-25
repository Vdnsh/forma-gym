const days=[
  {slug:'monday',name:'Monday',focus:'Push day',muscles:'CHEST · SHOULDERS · TRICEPS',number:'01',exercises:[['bench','Dumbbell bench press'],['shoulder','Seated shoulder press'],['chest','Cable chest press'],['lateral','Dumbbell lateral raise'],['triceps','Cable triceps pressdown']]},
  {slug:'tuesday',name:'Tuesday',focus:'Pull day',muscles:'BACK · BICEPS',number:'02',exercises:[['lat-pulldown','Lat pulldown'],['seated-row','Seated cable row'],['one-arm-row','One-arm dumbbell row'],['face-pull','Cable face pull'],['dumbbell-curl','Dumbbell curl']]},
  {slug:'wednesday',name:'Wednesday',focus:'Lower body',muscles:'QUADS · HAMSTRINGS · GLUTES',number:'03',exercises:[['goblet-squat','Goblet squat'],['romanian-deadlift','Dumbbell Romanian deadlift'],['reverse-lunge','Dumbbell reverse lunge'],['glute-bridge','Floor glute bridge'],['calf-raise-a','Standing calf raise']]},
  {slug:'thursday',name:'Thursday',focus:'Push again',muscles:'CHEST · SHOULDERS · TRICEPS',number:'04',exercises:[['incline-press','Incline dumbbell press'],['cable-fly','Cable chest fly'],['neutral-press','Neutral-grip shoulder press'],['close-grip-pushup','Close-grip push-up'],['overhead-extension','Cable overhead triceps extension']]},
  {slug:'friday',name:'Friday',focus:'Pull again',muscles:'BACK · REAR DELTS · BICEPS',number:'05',exercises:[['underhand-pulldown','Underhand lat pulldown'],['chest-supported-row','Chest-supported dumbbell row'],['straight-arm-pulldown','Straight-arm cable pulldown'],['reverse-fly','Bent-over reverse fly'],['hammer-curl','Hammer curl']]},
  {slug:'saturday',name:'Saturday',focus:'Legs again',muscles:'QUADS · GLUTES · CALVES',number:'06',exercises:[['split-squat','Dumbbell split squat'],['sumo-squat','Dumbbell sumo squat'],['cable-pullthrough','Cable pull-through'],['step-up','Low step-up'],['calf-raise-b','Standing calf raise']]}
];
const currentDay=new Date().getDay();
const today=days[currentDay-1];
const card=day=>`<article class="day-card ${today?.slug===day.slug?'is-today':''}"><div class="day-card-main"><span class="day-index">${day.number} / 06</span><div class="day-card-content"><span class="day-name">${day.name.toUpperCase()} ${today?.slug===day.slug?'<span class="today-tag">TODAY</span>':''}</span><h3>${day.focus}</h3><p>${day.muscles}</p><span class="day-meta">75 MIN <i>·</i> 5 EXERCISES <i>·</i> 12+ REPS</span></div><a class="day-open" href="./${day.slug}.html" aria-label="Open ${day.name} workout"><span aria-hidden="true">↗</span></a></div><details class="day-exercises"><summary>See exercises <span aria-hidden="true">⌄</span></summary><ol>${day.exercises.map(([id,name],i)=>`<li><a href="./${day.slug}.html#${id}"><span>${String(i+1).padStart(2,'0')}</span>${name}<span aria-hidden="true">↗</span></a></li>`).join('')}</ol></details></article>`;
document.getElementById('week-grid').innerHTML=days.map(card).join('')+`<article class="day-card rest-card"><div class="day-card-main"><span class="day-index">07 / 07</span><div class="day-card-content"><span class="day-name">SUNDAY</span><h3>Rest & reset</h3><p>RECOVERY · EASY MOVEMENT</p><span class="day-meta">NO WORKOUT SCHEDULED</span></div><span class="rest-symbol" aria-hidden="true">◌</span></div></article>`;
const todayAction=document.getElementById('today-action');
if(today){todayAction.href=`./${today.slug}.html`;todayAction.innerHTML=`Open ${today.name}'s workout <span aria-hidden="true">↗</span>`;}
else{todayAction.textContent='Explore the week ↓';}
const search=document.getElementById('exercise-search');
const results=document.getElementById('search-results');
search.addEventListener('input',()=>{
  const query=search.value.trim().toLowerCase();
  if(!query){results.innerHTML='';return;}
  const matches=days.flatMap(day=>day.exercises.map(([id,name])=>({day,id,name}))).filter(item=>item.name.toLowerCase().includes(query));
  results.innerHTML=matches.length?matches.map(({day,id,name})=>`<a href="./${day.slug}.html#${id}"><span><strong>${name}</strong><small>${day.name} · ${day.focus}</small></span><span aria-hidden="true">↗</span></a>`).join(''):'<p>No matching exercise. Try another name.</p>';
});
