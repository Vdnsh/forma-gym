// All artwork is inline SVG. Nothing is downloaded when an exercise opens.
const mondayExercises = [
  {id:'bench',name:'Dumbbell bench press',group:'CHEST · COMPOUND',sets:3,rest:'90–120 SEC',unit:'kg per dumbbell',view:'SIDE VIEW',headline:'Press smoothly.',accent:'Lower with control.',description:'Lie on the bench with feet planted. Press the dumbbells upward, then lower to a comfortable depth.',cues:['Keep wrists stacked over elbows.','Hold your shoulder blades steady.','Avoid bouncing at the bottom.']},
  {id:'shoulder',name:'Seated shoulder press',group:'SHOULDERS · COMPOUND',sets:2,rest:'90–120 SEC',unit:'kg per dumbbell',view:'FRONT VIEW',headline:'Press up tall.',accent:'Keep your ribs down.',description:'Sit against the bench with dumbbells near shoulder height. Press overhead without shrugging or arching your back.',cues:['Keep forearms nearly vertical.','Move both arms at an even pace.','Lower to a comfortable shoulder level.']},
  {id:'chest',name:'Cable chest press',group:'CHEST · CABLE',sets:2,rest:'60–90 SEC',unit:'kg on cable stack',view:'SIDE VIEW',headline:'Press straight ahead.',accent:'Return slowly.',description:'Set the pulleys around chest height and take a stable split stance. Press the handles forward, then return under control.',cues:['Keep your torso still.','Let elbows bend naturally on the return.','Use an even load on both sides.']},
  {id:'lateral',name:'Dumbbell lateral raise',group:'SHOULDERS · ISOLATION',sets:2,rest:'60–90 SEC',unit:'kg per dumbbell',view:'FRONT VIEW',headline:'Raise with control.',accent:'Lower even slower.',description:'Stand tall with soft elbows. Lift your arms out to the sides until the weights reach about shoulder height, then lower without swinging.',cues:['Lead with your elbows, not your wrists.','Keep shoulders relaxed and torso still.','Use light weights you can control.']},
  {id:'triceps',name:'Cable triceps pressdown',group:'TRICEPS · CABLE',sets:2,rest:'60–90 SEC',unit:'kg on cable stack',view:'SIDE VIEW',headline:'Elbows stay close.',accent:'Extend without swinging.',description:'Face a high pulley. Keep your elbows beside your torso while you press the handle down; let it return slowly.',cues:['Stand tall and keep shoulders quiet.','Straighten your elbows at the bottom.','Control the handle on the way up.']}
];

// A/B rotation trains each major muscle group twice, with a rest day on Sunday.
const weeklyExercises = {
  monday: mondayExercises,
  tuesday: [
    {id:'lat-pulldown',name:'Lat pulldown',group:'BACK · VERTICAL PULL',sets:3,rest:'90–120 SEC',unit:'kg on cable stack',view:'FRONT VIEW',movement:'pulldown',headline:'Pull to your upper chest.',accent:'Rise with control.',description:'Sit tall with thighs secured. Pull the bar toward your upper chest, then let your arms extend slowly overhead.',cues:['Start by drawing your shoulders down.','Keep your torso mostly still.','Do not pull the bar behind your neck.']},
    {id:'seated-row',name:'Seated cable row',group:'BACK · HORIZONTAL PULL',sets:3,rest:'90 SEC',unit:'kg on cable stack',view:'SIDE VIEW',movement:'row',headline:'Drive elbows back.',accent:'Reach forward slowly.',description:'Sit tall with knees softly bent. Pull the handle toward your lower ribs, then reach forward without rounding sharply.',cues:['Keep your chest lifted.','Pause briefly with elbows back.','Avoid swinging your torso.']},
    {id:'one-arm-row',name:'One-arm dumbbell row',group:'BACK · DUMBBELL',sets:2,rest:'75 SEC',unit:'kg per dumbbell',view:'SIDE VIEW',movement:'bent-row',headline:'Pull toward your hip.',accent:'Keep your back steady.',description:'Support one hand on a bench. Pull the dumbbell toward your hip and lower it under control. Complete at least 12 reps on each side.',cues:['Keep hips level.','Lead the pull with your elbow.','Avoid twisting your torso.']},
    {id:'face-pull',name:'Cable face pull',group:'UPPER BACK · CABLE',sets:2,rest:'60–90 SEC',unit:'kg on cable stack',view:'SIDE VIEW',movement:'face-pull',headline:'Pull toward your face.',accent:'Open your elbows wide.',description:'Set the cable around face height. Pull the rope toward your forehead while your elbows move out, then return slowly.',cues:['Use a light load.','Keep shoulders down.','Separate the rope ends as you pull.']},
    {id:'dumbbell-curl',name:'Dumbbell curl',group:'BICEPS · DUMBBELL',sets:2,rest:'60 SEC',unit:'kg per dumbbell',view:'FRONT VIEW',movement:'curl',headline:'Curl without swinging.',accent:'Lower all the way.',description:'Stand tall with arms at your sides. Curl the dumbbells toward your shoulders and lower them with control.',cues:['Keep elbows beside your torso.','Keep wrists neutral.','Use a load you can move smoothly.']}
  ],
  wednesday: [
    {id:'goblet-squat',name:'Goblet squat',group:'QUADS · DUMBBELL',sets:3,rest:'90–120 SEC',unit:'kg dumbbell',view:'FRONT VIEW',movement:'squat',headline:'Sit down between your hips.',accent:'Stand up strong.',description:'Hold one dumbbell at chest height. Bend hips and knees to a comfortable depth, then stand tall.',cues:['Keep your whole foot planted.','Let knees track with your toes.','Keep the dumbbell close to your chest.']},
    {id:'romanian-deadlift',name:'Dumbbell Romanian deadlift',group:'HAMSTRINGS · DUMBBELL',sets:3,rest:'90–120 SEC',unit:'kg per dumbbell',view:'SIDE VIEW',movement:'hinge',headline:'Hinge at your hips.',accent:'Feel the stretch.',description:'Hold dumbbells close to your legs. Push hips back with soft knees, lower to a comfortable hamstring stretch, then stand.',cues:['Keep your back long and steady.','Keep weights close to your legs.','Stand by driving through your feet.']},
    {id:'reverse-lunge',name:'Dumbbell reverse lunge',group:'LEGS · SINGLE-LEG',sets:2,rest:'90 SEC',unit:'kg per dumbbell',view:'SIDE VIEW',movement:'lunge',headline:'Step back softly.',accent:'Push through the front foot.',description:'Step one foot back and lower both knees to a comfortable depth. Return to standing. Complete at least 12 reps per leg.',cues:['Keep your front foot flat.','Move straight down, not forward.','Hold dumbbells at your sides.']},
    {id:'glute-bridge',name:'Floor glute bridge',group:'GLUTES · FLOOR',sets:2,rest:'60 SEC',unit:'bodyweight or kg',view:'SIDE VIEW',movement:'bridge',headline:'Lift your hips.',accent:'Pause at the top.',description:'Lie on your back with knees bent and feet planted. Press through your feet to lift your hips, then lower slowly.',cues:['Keep ribs relaxed.','Squeeze your glutes at the top.','Avoid arching your lower back.']},
    {id:'calf-raise-a',name:'Standing calf raise',group:'CALVES · BODYWEIGHT',sets:2,rest:'60 SEC',unit:'bodyweight or kg',view:'SIDE VIEW',movement:'calf',headline:'Rise onto your toes.',accent:'Lower your heels slowly.',description:'Stand near a stable support. Lift your heels as high as comfortable, pause, and lower under control.',cues:['Keep knees softly straight.','Move through your full comfortable range.','Hold a dumbbell only when balanced.']}
  ],
  thursday: [
    {id:'incline-press',name:'Incline dumbbell press',group:'CHEST · DUMBBELL',sets:3,rest:'90–120 SEC',unit:'kg per dumbbell',view:'SIDE VIEW',movement:'incline-press',headline:'Press above your chest.',accent:'Lower with control.',description:'Set the bench to a low incline. Press dumbbells upward from chest level, then lower to a comfortable depth.',cues:['Keep feet planted.','Keep wrists over elbows.','Avoid flaring elbows straight out.']},
    {id:'cable-fly',name:'Cable chest fly',group:'CHEST · CABLE',sets:2,rest:'75 SEC',unit:'kg on cable stack',view:'FRONT VIEW',movement:'fly',headline:'Bring your hands together.',accent:'Open slowly.',description:'Set cables around chest height. With soft elbows, bring your hands together in front of your chest, then open under control.',cues:['Keep a gentle elbow bend.','Move from the shoulders.','Stop before your shoulders feel strained.']},
    {id:'neutral-press',name:'Neutral-grip shoulder press',group:'SHOULDERS · DUMBBELL',sets:3,rest:'90 SEC',unit:'kg per dumbbell',view:'FRONT VIEW',movement:'shoulder-press',headline:'Press overhead smoothly.',accent:'Keep palms facing in.',description:'Sit against a bench with palms facing each other. Press overhead and lower to a comfortable shoulder height.',cues:['Keep ribs stacked over hips.','Avoid shrugging at the top.','Move both arms evenly.']},
    {id:'close-grip-pushup',name:'Close-grip push-up',group:'CHEST · BODYWEIGHT',sets:2,rest:'75 SEC',unit:'bodyweight',view:'SIDE VIEW',movement:'pushup',headline:'Keep elbows near your sides.',accent:'Move as one line.',description:'Place hands just inside shoulder width. Lower your body in one line and press back up. Use a bench incline if needed for 12 clean reps.',cues:['Brace your abdomen.','Keep neck neutral.','Raise the hand position to make reps smoother.']},
    {id:'overhead-extension',name:'Cable overhead triceps extension',group:'TRICEPS · CABLE',sets:2,rest:'60–90 SEC',unit:'kg on cable stack',view:'SIDE VIEW',movement:'extension',headline:'Extend your elbows.',accent:'Keep upper arms quiet.',description:'Face away from a low cable with the rope behind your head. Extend your elbows, then return slowly.',cues:['Use a stable split stance.','Keep elbows pointing forward.','Use a light, controllable load.']}
  ],
  friday: [
    {id:'underhand-pulldown',name:'Underhand lat pulldown',group:'BACK · VERTICAL PULL',sets:3,rest:'90 SEC',unit:'kg on cable stack',view:'FRONT VIEW',movement:'pulldown',headline:'Pull elbows toward your sides.',accent:'Reach up slowly.',description:'Use an underhand grip around shoulder width. Pull the bar toward your upper chest, then let it rise slowly.',cues:['Keep chest lifted.','Avoid leaning far back.','Let shoulders move naturally at the top.']},
    {id:'chest-supported-row',name:'Chest-supported dumbbell row',group:'BACK · DUMBBELL',sets:3,rest:'90 SEC',unit:'kg per dumbbell',view:'SIDE VIEW',movement:'bent-row',headline:'Pull elbows behind you.',accent:'Lower slowly.',description:'Set a bench to a low incline and rest your chest on it. Row dumbbells toward your ribs, then lower completely.',cues:['Keep chest on the bench.','Avoid shrugging.','Let shoulder blades move naturally.']},
    {id:'straight-arm-pulldown',name:'Straight-arm cable pulldown',group:'LATS · CABLE',sets:2,rest:'75 SEC',unit:'kg on cable stack',view:'SIDE VIEW',movement:'straight-pull',headline:'Pull the bar to your thighs.',accent:'Keep elbows soft.',description:'Stand facing a high cable. With a slight elbow bend, pull the handle down toward your thighs, then return slowly.',cues:['Keep torso mostly still.','Move from your shoulders.','Do not jerk the cable.']},
    {id:'reverse-fly',name:'Bent-over reverse fly',group:'REAR DELTS · DUMBBELL',sets:2,rest:'60 SEC',unit:'kg per dumbbell',view:'FRONT VIEW',movement:'reverse-fly',headline:'Open your arms wide.',accent:'Use light weights.',description:'Hinge at the hips with a steady back. Raise the dumbbells out to your sides with soft elbows, then lower slowly.',cues:['Keep your neck relaxed.','Avoid swinging.','Stop around shoulder height.']},
    {id:'hammer-curl',name:'Hammer curl',group:'BICEPS · DUMBBELL',sets:2,rest:'60 SEC',unit:'kg per dumbbell',view:'FRONT VIEW',movement:'curl',headline:'Palms face inward.',accent:'Control the descent.',description:'Stand tall with palms facing one another. Curl dumbbells up without moving your upper arms, then lower slowly.',cues:['Keep wrists straight.','Avoid leaning back.','Move through a comfortable range.']}
  ],
  saturday: [
    {id:'split-squat',name:'Dumbbell split squat',group:'LEGS · SINGLE-LEG',sets:3,rest:'90 SEC',unit:'kg per dumbbell',view:'SIDE VIEW',movement:'lunge',headline:'Lower straight down.',accent:'Drive through the front foot.',description:'Take a long, stable stance. Lower until both knees bend comfortably, then rise. Complete at least 12 reps per leg.',cues:['Keep front foot flat.','Stay balanced over your stance.','Use a support if needed.']},
    {id:'sumo-squat',name:'Dumbbell sumo squat',group:'LEGS · DUMBBELL',sets:3,rest:'90 SEC',unit:'kg dumbbell',view:'FRONT VIEW',movement:'squat',headline:'Use a wide, stable stance.',accent:'Stand tall.',description:'Hold one dumbbell between your legs with feet wider than hips. Sit down to a comfortable depth, then stand.',cues:['Point toes slightly outward.','Let knees track with toes.','Keep your chest lifted.']},
    {id:'cable-pullthrough',name:'Cable pull-through',group:'GLUTES · CABLE',sets:2,rest:'75 SEC',unit:'kg on cable stack',view:'SIDE VIEW',movement:'hinge',headline:'Send your hips back.',accent:'Stand by squeezing glutes.',description:'Face away from a low cable with the rope between your legs. Hinge back with soft knees, then return to standing.',cues:['Keep your back steady.','Let the cable travel between your legs.','Avoid pulling with your arms.']},
    {id:'step-up',name:'Low step-up',group:'LEGS · PLATFORM',sets:2,rest:'75 SEC',unit:'bodyweight or kg',view:'SIDE VIEW',movement:'stepup',headline:'Step onto the platform.',accent:'Lower with control.',description:'Use a low, stable gym step. Step up through your lead foot, stand tall, then step down. Complete at least 12 reps per leg.',cues:['Keep the platform low enough for control.','Keep your front knee over your foot.','Avoid pushing hard from the trailing leg.']},
    {id:'calf-raise-b',name:'Standing calf raise',group:'CALVES · BODYWEIGHT',sets:2,rest:'60 SEC',unit:'bodyweight or kg',view:'SIDE VIEW',movement:'calf',headline:'Rise onto your toes.',accent:'Lower your heels slowly.',description:'Stand near a stable support. Lift your heels as high as comfortable, pause, and lower under control.',cues:['Keep knees softly straight.','Move through your full comfortable range.','Hold a dumbbell only when balanced.']}
  ]
};
const day=document.body.dataset.day || 'monday';
const exercises=weeklyExercises[day] || mondayExercises;

const motion = (attr,a,b) => `<animate attributeName="${attr}" values="${a};${a};${b};${b};${a}" keyTimes="0;.12;.5;.66;1" dur="3.4s" repeatCount="indefinite"/>`;
const movingPath = (a,b,cls='moving-limb') => `<path class="${cls}" d="${a}">${motion('d',a,b)}</path>`;
const movingWeight = (x,y,xx,yy,w=30) => `<rect class="moving-weight" x="${x}" y="${y}" width="${w}" height="12" rx="3">${motion('x',x,xx)}${motion('y',y,yy)}</rect>`;
const head=(x=220,y=69)=>`<circle class="figure-head" cx="${x}" cy="${y}" r="21"/>`;
const stand=`${head()}<path class="figure-torso" d="M207 98 L195 122 L202 187 L220 198 L238 187 L245 122 L233 98 Z"/><path class="figure-body" d="M206 190 L195 252 M234 190 L245 252 M183 253 H207 M233 253 H258"/>`;
function otherIllustration(e){
  if(e.id==='sumo-squat')return `<g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 20;0 20;0 0" keyTimes="0;.12;.5;.66;1" dur="3.4s" repeatCount="indefinite"/>${head()}<path class="figure-torso" d="M207 98 L195 122 L202 187 L220 198 L238 187 L245 122 L233 98 Z"/>${movingPath('M198 123 L191 170 L208 209','M198 123 L185 185 L208 222')}${movingPath('M242 123 L249 170 L232 209','M242 123 L255 185 L232 222')}<rect class="moving-weight" x="207" y="205" width="26" height="18" rx="5"/></g>${movingPath('M204 187 L181 220 L161 253','M204 187 L160 215 L161 253','figure-body')}${movingPath('M236 187 L259 220 L279 253','M236 187 L280 215 L279 253','figure-body')}<path class="figure-body" d="M148 254 H174 M266 254 H292"/>`;
  if(e.id==='cable-pullthrough')return `<path class="equipment" d="M63 210 V253 M63 210 H82"/>${head()}${movingPath('M207 94 L198 190 L238 190 L233 94 Z','M207 94 L153 171 L177 195 L233 106 Z','figure-torso')}${movingPath('M206 190 L195 252 M234 190 L245 252','M177 195 L195 252 M234 190 L245 252','figure-body')}${movingPath('M63 210 L175 222','M63 210 L146 226','cable-line')}${movingPath('M199 121 L179 173 L175 222','M164 157 L143 190 L146 226')}<path class="figure-body" d="M183 253 H207 M233 253 H258"/>`;
  if(e.id==='chest-supported-row')return `<path class="equipment" d="M165 176 L271 120 M174 177 V253 M270 120 V253"/>${head(286,101)}<path class="figure-torso" d="M272 114 L242 121 L202 151 L212 165 L266 139 Z"/><path class="figure-body" d="M210 159 L238 212 L231 251 M250 149 L283 210 L291 251 M221 252 H245 M278 252 H306"/>${movingPath('M251 139 L267 172 L272 219','M251 139 L260 155 L269 173')}${movingWeight(257,212,254,167)}`;
  switch(e.movement){
    case 'pulldown': return `<path class="equipment" d="M102 33 H338 M220 33 V57 M165 198 H275 M180 198 V254 M260 198 V254"/>${head(220,98)}<path class="figure-torso" d="M205 126 L195 190 L245 190 L235 126 Z"/><path class="figure-body" d="M205 191 L188 224 L189 251 M235 191 L252 224 L251 251"/>${movingPath('M201 133 L160 98 L146 59','M201 133 L166 117 L146 119')}${movingPath('M239 133 L280 98 L294 59','M239 133 L274 117 L294 119')}${movingPath('M139 54 H301','M139 114 H301','equipment')}`;
    case 'row': return `<path class="equipment" d="M63 114 V254 M74 153 H122 M182 219 H288 M198 219 V253"/>${head(220,86)}<path class="figure-torso" d="M205 111 L194 183 L240 183 L237 112 Z"/><path class="figure-body" d="M202 184 L174 214 L148 222 M233 184 L255 216 L287 223"/>${movingPath('M205 125 L166 150 L120 151','M205 125 L191 151 L191 169')}${movingPath('M237 125 L189 151 L120 151','M237 125 L217 153 L191 169')}${movingPath('M65 153 H120','M65 153 H191','cable-line')}${movingWeight(109,145,178,162,22)}`;
    case 'bent-row': return `<path class="equipment" d="M105 170 H182 M119 170 V253 M169 170 V253"/>${head(269,92)}<path class="figure-torso" d="M255 109 L231 119 L194 151 L200 168 L247 145 Z"/><path class="figure-body" d="M201 162 L229 211 L222 252 M237 154 L274 207 L280 252 M211 253 H239 M267 253 H295 M197 148 L155 164"/>${movingPath('M236 140 L249 173 L250 216','M236 140 L254 158 L263 174')}${movingWeight(235,211,248,168)}`;
    case 'face-pull': return `<path class="equipment" d="M69 42 V252 M69 99 H92"/>${stand}${movingPath('M70 99 L154 100','M70 99 L183 98','cable-line')}${movingPath('M209 128 L175 129 L154 100','M209 128 L185 93 L183 98')}${movingWeight(143,92,175,90,23)}`;
    case 'curl': return `${stand}${movingPath('M201 126 L189 169 L185 220','M201 126 L189 169 L169 119')}${movingPath('M239 126 L251 169 L255 220','M239 126 L251 169 L271 119')}${movingWeight(168,214,152,113)}${movingWeight(239,214,255,113)}`;
    case 'squat': return `<g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 22;0 22;0 0" keyTimes="0;.12;.5;.66;1" dur="3.4s" repeatCount="indefinite"/>${head()}<path class="figure-torso" d="M207 98 L195 122 L202 187 L220 198 L238 187 L245 122 L233 98 Z"/><path class="moving-limb" d="M198 125 L185 152 L203 166 M242 125 L255 152 L237 166"/><rect class="moving-weight" x="201" y="143" width="38" height="18" rx="5"/></g>${movingPath('M205 190 L198 222 L192 253','M205 190 L170 222 L188 253','figure-body')}${movingPath('M235 190 L242 222 L248 253','M235 190 L270 222 L252 253','figure-body')}<path class="figure-body" d="M177 254 H201 M239 254 H263"/>`;
    case 'hinge': return `${head()}${movingPath('M207 94 L198 190 L238 190 L233 94 Z','M207 94 L153 171 L177 195 L233 106 Z','figure-torso')}${movingPath('M206 190 L195 252 M234 190 L245 252','M177 195 L195 252 M234 190 L245 252','figure-body')}${movingPath('M199 121 L179 173 L175 222','M164 157 L143 190 L145 230')}${movingWeight(159,216,129,224)}<path class="figure-body" d="M183 253 H207 M233 253 H258"/>`;
    case 'lunge': return `${head()}${movingPath('M205 93 L197 184 L234 184 L233 93 Z','M205 109 L197 200 L234 200 L233 109 Z','figure-torso')}${movingPath('M204 183 L184 218 L174 251 M230 183 L251 218 L272 251','M204 200 L176 223 L174 251 M230 200 L268 219 L272 251','figure-body')}<path class="figure-body" d="M161 252 H187 M259 252 H287"/>${movingPath('M201 123 L189 171 L185 225','M201 139 L189 187 L185 241')}${movingPath('M239 123 L251 171 L255 225','M239 139 L251 187 L255 241')}${movingWeight(169,219,169,235)}${movingWeight(239,219,239,235)}`;
    case 'bridge': return `<path class="equipment" d="M78 252 H358"/>${head(115,226)}${movingPath('M135 225 L187 221 L240 222 L284 228','M135 225 L187 182 L240 176 L284 228','figure-body')}<path class="figure-body" d="M284 228 L311 251 M145 230 L138 252 M308 252 H329"/>`;
    case 'calf': return `${head()}<path class="figure-torso" d="M207 98 L195 122 L202 187 L220 198 L238 187 L245 122 L233 98 Z"/><path class="figure-body" d="M198 126 L179 177 M242 126 L261 177"/>${movingPath('M206 190 L195 251 M234 190 L245 251','M206 190 L195 237 M234 190 L245 237','figure-body')}${movingPath('M181 253 H206 M234 253 H259','M190 239 L208 253 M250 239 L266 253','figure-body')}`;
    case 'incline-press': return `<path class="equipment" d="M124 218 L251 119 M123 219 V253 M249 121 V253"/>${head(135,192)}<path class="figure-body" d="M155 182 L258 119 L295 175 L298 249 M273 155 L242 250 M289 250 H313 M228 250 H253"/>${movingPath('M207 155 L217 118 L222 89','M207 155 L241 102 L261 62')}${movingWeight(206,80,247,53)}`;
    case 'fly': return `<path class="equipment" d="M63 75 V235 M377 75 V235"/>${stand}${movingPath('M66 132 L161 151','M66 132 L220 156','cable-line')}${movingPath('M374 132 L279 151','M374 132 L220 156','cable-line')}${movingPath('M200 123 L164 144 L161 151','M200 123 L209 151 L220 156')}${movingPath('M240 123 L276 144 L279 151','M240 123 L231 151 L220 156')}`;
    case 'shoulder-press': return `<path class="equipment" d="M182 100 V211 M175 211 H265 M190 211 V252 M250 211 V252"/>${head()}<path class="figure-torso" d="M207 98 L195 122 L202 187 L220 198 L238 187 L245 122 L233 98 Z"/><path class="figure-body" d="M205 197 L184 216 L184 252 M235 197 L256 216 L256 252 M171 253 H197 M243 253 H269"/>${movingPath('M199 122 L177 149 L174 105','M199 122 L196 77 L203 41')}${movingPath('M241 122 L263 149 L266 105','M241 122 L244 77 L237 41')}${movingWeight(157,98,187,35)}${movingWeight(249,98,223,35)}`;
    case 'pushup': return `<path class="equipment" d="M60 255 H370"/>${movingPath('M111 204 L212 185 L317 201','M111 226 L212 210 L317 201','figure-body')}${movingPath('M154 201 L144 252 M267 194 L276 252','M154 221 L144 252 M267 205 L276 252','figure-body')}<circle class="figure-head" cx="91" cy="206" r="19">${motion('cy',206,228)}</circle><path class="figure-body" d="M132 252 H156 M269 252 H288"/>`;
    case 'extension': return `<path class="equipment" d="M66 223 V252 M66 223 H90"/>${stand}${movingPath('M66 223 L182 106','M66 223 L211 54','cable-line')}${movingPath('M202 125 L187 83 L182 106','M202 125 L197 78 L211 54')}${movingWeight(168,97,196,45,25)}`;
    case 'straight-pull': return `<path class="equipment" d="M66 35 H156 M66 35 V252"/>${stand}${movingPath('M150 43 L172 77','M150 43 L174 208','cable-line')}${movingPath('M205 127 L180 90 L172 77','M205 127 L184 173 L174 208')}${movingWeight(160,69,160,201,25)}`;
    case 'reverse-fly': return `${head(220,83)}<path class="figure-torso" d="M207 105 L183 170 L220 190 L257 170 L233 105 Z"/><path class="figure-body" d="M204 186 L195 251 M236 186 L245 251 M184 252 H207 M233 252 H257"/>${movingPath('M197 135 L180 174 L165 211','M197 135 L160 139 L118 127')}${movingPath('M243 135 L260 174 L275 211','M243 135 L280 139 L322 127')}${movingWeight(149,205,102,121)}${movingWeight(259,205,306,121)}`;
    case 'stepup': return `<path class="equipment" d="M225 217 H348 V254 H225 M86 254 H354"/>${head(186,69)}<path class="figure-torso" d="M176 98 L165 188 L205 188 L198 98 Z"/><path class="figure-body" d="M169 127 L154 184 M202 127 L218 184"/>${movingPath('M178 186 L151 252 M198 186 L254 216','M178 186 L214 217 M198 186 L254 216','figure-body')}<path class="figure-body" d="M139 253 H164 M243 216 H270"/>`;
  }
  return stand;
}
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
      break;
    default:
      description=`A person demonstrates ${exercise.name.toLowerCase()} with a slow looping movement.`;
      body=otherIllustration(exercise);
  }
  return `<svg class="motion-figure" viewBox="0 0 440 300" role="img" aria-label="${exercise.name} demonstration. ${description}"><defs><radialGradient id="halo-${exercise.id}"><stop offset="0" stop-color="#a8d7bf" stop-opacity=".14"/><stop offset="1" stop-color="#a8d7bf" stop-opacity="0"/></radialGradient></defs><circle class="scene-halo" cx="220" cy="148" r="130" fill="url(#halo-${exercise.id})"/><path class="scene-floor" d="M74 259 H366"/>${body}</svg>`;
}

const now=new Date();
const dateKey=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
const storageKey=`forma-${day}-sets-${dateKey}`;
let log={};
try { log=JSON.parse(localStorage.getItem(storageKey)||'{}')||{}; } catch { log={}; }
function entry(e,i){
  const saved=log[e.id]?.[i]||{};
  const reps=Number(saved.reps),weight=Number(saved.weight);
  const validReps=Number.isInteger(reps)&&reps>=12;
  const bodyweight=e.unit.includes('bodyweight');
  const validWeight=saved.weight!==''&&Number.isFinite(weight)&&(bodyweight?weight>=0:weight>0);
  return {reps:validReps?String(reps):'12',weight:validWeight?String(weight):(bodyweight?'0':''),done:!!saved.done&&validReps&&validWeight};
}
function save(){try{localStorage.setItem(storageKey,JSON.stringify(log));}catch{/* Storage may be disabled. */}}
function setRows(e){
  return Array.from({length:e.sets},(_,i)=>{
    const v=entry(e,i);
    return `<div class="set-row" data-set="${i}"><span class="set-number">SET ${String(i+1).padStart(2,'0')}</span><label class="set-field"><span>REPS</span><input class="reps-input" type="number" inputmode="numeric" min="12" step="1" value="${v.reps}" aria-label="${e.name} set ${i+1} reps"></label><label class="set-field"><span>WEIGHT <small>KG</small></span><input class="weight-input" type="number" inputmode="decimal" min="${e.unit.includes('bodyweight')?'0':'0.1'}" step="0.1" placeholder="—" value="${v.weight}" aria-label="${e.name} set ${i+1} weight in kilograms"></label><label class="set-check"><input type="checkbox" ${v.done?'checked':''} aria-label="Complete ${e.name} set ${i+1}"><span aria-hidden="true">✓</span></label></div>`;
  }).join('');
}
function card(e,i){
  const target=decodeURIComponent(location.hash.slice(1));
  const open=target?e.id===target:(day==='monday'?e.id==='lateral':i===0);
  return `<article class="exercise-card ${open?'featured is-open':''}" id="${e.id}" data-id="${e.id}"><div class="exercise-main"><span class="exercise-status" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="m4 10 4 4 8-8"/></svg></span><button class="exercise-open" type="button" aria-expanded="${open}" aria-controls="detail-${e.id}"><span class="exercise-number">${String(i+1).padStart(2,'0')}</span><span class="exercise-title-wrap"><strong>${e.name}</strong><small>${e.group}</small></span><span class="exercise-prescription">${e.sets} <i>×</i> 12–15</span><span class="chevron" aria-hidden="true"></span></button></div><div class="exercise-detail" id="detail-${e.id}" ${open?'':'hidden'}><div class="demo"><div class="demo-stage"><div class="demo-topline"><span><span class="live-dot"></span> MOVEMENT STUDY</span><span>${e.view}</span></div>${illustration(e)}<div class="stage-labels"><span>START</span><span>MOVE WITH CONTROL</span><span>RETURN</span></div></div><div class="demo-copy"><div class="demo-copy-top"><span class="tag">FORM GUIDE</span><span class="loop-label">AUTO LOOP</span></div><h3>${e.headline}<br><em>${e.accent}</em></h3><p>${e.description}</p><ul class="cue-list">${e.cues.map((cue,j)=>`<li><span>${String(j+1).padStart(2,'0')}</span>${cue}</li>`).join('')}</ul><div class="detail-footer"><span>REST ${e.rest}</span><span>${e.sets} SETS · 12+ REPS</span></div></div></div><div class="set-log"><div class="set-log-heading"><div><span class="section-kicker">TODAY'S RECORD</span><h4>Log each set</h4></div><span class="weight-note">${e.unit}</span></div><div class="set-list">${setRows(e)}</div><p class="set-help">${e.unit.includes('bodyweight')?'Use 0 kg for bodyweight or enter an added load, then tick the set after at least 12 reps.':'Enter the weight you used, then tick the set after at least 12 reps.'}</p><p class="set-error" role="status" hidden></p></div></div></article>`;
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
      const valid=Number.isInteger(Number(reps.value))&&Number(reps.value)>=12&&weight.value!==''&&(e.unit.includes('bodyweight')?Number(weight.value)>=0:Number(weight.value)>0);
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
        error.textContent=e.unit.includes('bodyweight')?'Enter at least 12 reps and 0 kg for bodyweight (or your added load).':'Enter at least 12 reps and a weight above 0 kg before completing this set.';
        error.hidden=false;
      }else store();
    });
  });
  syncMotion(cardElement);
}
reducedMotion.addEventListener('change',()=>cards.forEach(syncMotion));
updateProgress();
function revealHash(){
  const id=decodeURIComponent(location.hash.slice(1));
  const target=cards.find(card=>card.dataset.id===id);
  if(!target)return;
  if(!target.classList.contains('is-open'))target.querySelector('.exercise-open').click();
  target.scrollIntoView({behavior:'smooth',block:'start'});
}
if(location.hash)requestAnimationFrame(revealHash);
window.addEventListener('hashchange',revealHash);
