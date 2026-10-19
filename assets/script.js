const base = 'imagenes/';
const projects = [
  {title:'Weather Man', author:'Evgenia Arbugaeva', why:'Ciencia, rutina y atmósfera para acercarse a una persona y su entorno.', url:'https://www.icp.org/interviews/evgenia-arbugaeva', folder:"Evgenia Arbugaeva - Weathr Man", files:["Evgenia Arbugaeva14.jpg", "Evgenia Arbugaeva15.jpg", "Evgenia Arbugaeva16.jpg", "Evgenia Arbugaeva17.jpg", "Evgenia Arbugaeva18.jpg", "Evgenia Arbugaeva19.jpg"]},
  {title:'Country Doctor', author:'W. Eugene Smith', why:'Seguimiento cercano de un trabajo y construcción de una historia en secuencia.', url:'https://www.life.com/history/w-eugene-smiths-landmark-photo-essay-country-doctor/', folder:"Country Doctor • W. Eugene Smith • Magnum Photos", files:["Country Doctor • W. Eugene Smith • Magnum Photos14.webp", "Country Doctor • W. Eugene Smith • Magnum Photos15.jpg", "Country Doctor • W. Eugene Smith • Magnum Photos16.webp", "Country Doctor • W. Eugene Smith • Magnum Photos17.webp", "Country Doctor • W. Eugene Smith • Magnum Photos18.webp"]},
  {title:'The Glass Between Us', author:'Rebecca Norris Webb & Alex Webb', why:'Naturaleza, cautividad, distancia y las superficies que median nuestra mirada.', url:'https://webbnorriswebb.co/book/rebecca/the-glass-between-us', folder:"The Glass Between Us — Alex Webb & Rebecca Norris Webb", files:["The Glass Between Us — Alex Webb & Rebecca Norris Webb14.jpg", "The Glass Between Us — Alex Webb & Rebecca Norris Webb15.jpg", "The Glass Between Us — Alex Webb & Rebecca Norris Webb16.jpg", "The Glass Between Us — Alex Webb & Rebecca Norris Webb17.jpg", "The Glass Between Us — Alex Webb & Rebecca Norris Webb18.jpg", "The Glass Between Us — Alex Webb & Rebecca Norris Webb19.jpg", "The Glass Between Us — Alex Webb & Rebecca Norris Webb20.jpg", "The Glass Between Us — Alex Webb & Rebecca Norris Webb21.jpg"]},
  {title:'SOUP', author:'Mandy Barker', why:'Objetos, investigación y contaminación marina traducidos en imágenes directas.', url:'https://www.mandy-barker.com/soup-2', folder:"Soup — MANDY BARKER", files:["Soup — MANDY BARKER14.webp", "Soup — MANDY BARKER15.webp", "Soup — MANDY BARKER16.webp", "Soup — MANDY BARKER17.webp", "Soup — MANDY BARKER18.webp", "Soup — MANDY BARKER19.webp", "Soup — MANDY BARKER20.webp"]},
  {title:'Caspian: The Elements', author:'Chloe Dewe Mathews', why:'Las relaciones entre recursos, territorio y vida cotidiana alrededor de un mar.', url:'https://www.chloedewemathews.com/caspian/', folder:"Caspian _ Chloe Dewe Mathews", files:["imgi_8_CDM-006.webp", "imgi_11_CDM-010.webp", "imgi_16_CDM-015.webp", "imgi_25_CDM-031.webp", "imgi_28_CDM-037.webp", "imgi_31_CDM-034.webp", "imgi_33_CDM-042.webp", "imgi_34_CDM-044.webp"]},
  {title:'Water', author:'Mustafah Abdulaziz', why:'Personas, paisaje y usos humanos del agua a escala global.', url:'https://www.mustafahabdulaziz.com/photographs/water', folder:"Water — mustafah abdulaziz", files:["imgi_45_ma_water_p2_024.webp", "imgi_224_ma_water_024.webp", "imgi_273_ma_water_029.webp", "imgi_287_ma_water_031.webp", "imgi_343_ma_water_044.webp", "imgi_364_ma_water_047.webp", "imgi_371_ma_water_048.webp", "imgi_406_ma_water_p2_011.webp"]},
  {title:'Water', author:'Edward Burtynsky', why:'Infraestructura, extracción y transformación del paisaje por la actividad humana.', url:'https://www.edwardburtynsky.com/projects/photographs/water/', folder:"Photographs_ Water — Edward Burtynsky", files:["imgi_73_H2O_GULF_10_10_big.webp", "imgi_91_H2O_CHNA_DAM_XIL_01_12_big.webp", "imgi_98_H2O_PIV_YUM_01_11_big.webp", "imgi_111_H2O_FLA_01_12_big.webp", "imgi_113_H2O_SP_BEN_01_10_big.webp", "imgi_114_H2O_GBAY_01_09_big.webp", "imgi_115_H2O_IND_KUM_01_10_big.webp", "imgi_123_H2O_ICE_THJ_01_12_big.webp"]},
  {title:'Ocean of Enough', author:'Cristina Mittermeier', why:'Conservación y conexión emocional con la biodiversidad marina.', url:'https://www.cristinamittermeier.com/ocean-of-enough', folder:"Ocean of Enough _ Cristina Mittermeier 'Mitty'", files:["imgi_13_1b004f_50a88f2ec9e14f7dab3d42687e092612~mv2.webp", "imgi_17_1b004f_092910a8bb67482b8f8acad2a5e56edc~mv2.webp", "imgi_28_1b004f_46435382f1924711a5072c50b487fbab~mv2.webp", "imgi_29_1b004f_6c7650a13d36466fbb7dd5a8945e42c2~mv2.webp", "imgi_31_1b004f_cfb264c19d9f43db84f5ee1a31b4ae10~mv2.webp", "imgi_32_1b004f_ba749fcbbc444ddfbccc78503a424bbf~mv2.webp", "imgi_33_1b004f_be5f1db3a0cd48fc9902fe604fd4739d~mv2.webp"]},
  {title:'Niagara', author:'Alec Soth', why:'Paisaje, intimidad y detalles como estructura para un relato personal.', url:'https://www.alecsoth.com/photography/projects/niagara', folder:"Alec Soth _ NIAGARA", files:["imgi_2_2004_03zl0015_lj.webp", "imgi_5_2005_09zl0126_f.webp", "imgi_9_2004_04zl0058_f.webp", "imgi_21_2005_09zl0155_f.webp", "imgi_58_2005-13sl0005-f-1536x.jpg", "imgi_98_2005-02zl0002-f-1536x.webp", "imgi_103_2005-5zl0069-f-1536x.webp", "imgi_108_2004-04zl0033-f-1536x.webp", "imgi_117_2005-13sl0003-f-1280x.webp"]},
  {title:'Forgotten Seas', author:'Tanja Engelberts', why:'Industria offshore, archivo y memoria de los paisajes marinos transformados.', url:'https://www.tanjaengelberts.eu/work', folder:"Tanja Engelberts - Forgotten Seas", files:["0 1.jpg", "0 2.jpg", "0 3.jpg", "0 4.jpg", "0 5.jpg", "0 6.jpg", "0 7.jpg", "0 8.jpg", "0 9.jpg", "0.jpg"]},
  {title:'Pleine Mer', author:'Jean Gaumy', why:'Vida, esfuerzo y convivencia a bordo de barcos pesqueros.', url:'https://www.academiedesbeauxarts.fr/jean-gaumy', folder:"Pleine Mer_ Men at Sea • Jean Gaumy • Magnum Photos", files:["imgi_9_par212623-teaser-story-big.webp", "imgi_10_par212608-teaser-story-big.webp", "imgi_11_par212596-teaser-story-big.webp", "imgi_12_par140734-teaser-story-big.webp", "imgi_13_par13430-teaser-story-big.webp", "imgi_14_par159178-teaser-story-big.webp", "imgi_15_par140744-teaser-story-big.webp", "imgi_16_par140714-teaser-story-big.webp", "imgi_17_par13159-teaser-story-big.webp", "imgi_20_par13436-teaser-story-big.webp"]},
  {title:'Food', author:'Henk Wildschut', why:'Procesos industriales y contexto para cuestionar cómo interpretamos una imagen.', url:'https://henkwildschut.com/work/food/', folder:"Food - HENK WILDSCHUT", files:["imgi_6_wit-6-1024x805.webp", "imgi_7_wit-7-1024x805.webp", "imgi_11_wit-12-1024x805.webp", "imgi_12_wit-11-1024x805.webp", "imgi_14_wit-15-1024x805.webp"]},
  {title:'Big Fence / Pitcairn Island', author:'Rhiannon Adam', why:'Una comunidad insular y las tensiones que se esconden detrás de la idea de paraíso.', url:'https://www.rhiannonadam.com/big-fence-pitcairn-island', folder:"Big Fence _ Pitcairn Island — Rhiannon Adam", files:["imgi_22_20.+Tania'sRoom_BigFence.webp", "imgi_61_4.RealChristiansNeverDie_SeventhDayAdventistChurch.webp", "imgi_71_16.+Man_and_Baby.webp", "imgi_76_21.+Jesus_BigFence.webp", "imgi_77_22.+DavidBrown_MolassesShed.webp", "imgi_85_Bounty+Day-Found+Photograph.webp", "imgi_87_29.+CryingMan_Co-op_Store.webp", "imgi_94_8.+TheDevilMakesWorkForIdleHands.webp", "imgi_95_Brandon_ShipsLanding.webp"]},
  {title:'Plastiterranean', author:'Simone Boccaccio', why:'Una mirada cercana y crítica sobre los residuos y el Mediterráneo.', url:'https://www.simoneboccaccio.com/plastiterranean', folder:"Plastiterranean – Simone Boccaccio", files:["imgi_25_simone_boccaccio-5-3.webp", "imgi_52_simone_boccaccio-33-1536x1024.webp", "imgi_60_simone_boccaccio-26-1536x1024.webp", "imgi_68_simone_boccaccio-11-4-1536x1024.webp", "imgi_76_simone_boccaccio-13-1-1536x1024.webp", "imgi_80_simone_boccaccio-12-4-1536x1024.webp", "imgi_84_simone_boccaccio-15-1-1536x1024.webp", "imgi_104_simone_boccaccio-35-1-1536x1024.webp", "imgi_108_simone_boccaccio-18-1-1536x1024.webp", "imgi_112_simone_boccaccio-19-1-1536x1024.webp", "imgi_120_simone_boccaccio-2-4-1536x1024.webp", "imgi_124_simone_boccaccio-5-4-1536x1024.webp", "imgi_128_simone_boccaccio-6-4-1536x1031.webp", "imgi_140_simone_boccaccio-14-1-1536x1024.webp"]}
];

const list = document.querySelector('#reference-list');
if (list) projects.forEach(project => {
  const row = document.createElement('article');
  row.className = 'reference-row';
  const safe = (part) => `${base}${encodeURIComponent(project.folder)}/${encodeURIComponent(part)}`;
  row.innerHTML = `<p class="reference-meta"><a href="${project.url}" target="_blank" rel="noreferrer">${project.author}</a><span aria-hidden="true"> — </span><a href="${project.url}" target="_blank" rel="noreferrer">${project.title}</a><span> · ${project.why}</span></p><div class="reference-thumbs">${project.files.map((file,i)=>`<a href="${project.url}" target="_blank" rel="noreferrer" aria-label="Abrir ${project.title} de ${project.author}"><img loading="lazy" src="${safe(file)}" alt="${project.title}, fotografía ${i+1}"></a>`).join('')}</div>`;
  list.append(row);
});

const questions = [
  '1. ¿Qué proyectos están activos actualmente y qué intenta resolver cada uno?',
  '2. ¿En qué hábitat o lugar se desarrolla cada proyecto?',
  '3. ¿Qué especies y procesos ecológicos pueden estar implicados en general?',
  '4. ¿Qué va a ocurrir durante los próximos tres a seis meses?',
  '5. ¿Cómo se desarrolla un proyecto de principio a fin?',
  '6. ¿Qué podría observar durante el desarrollo de un proyecto de NextReef?',
  '7. ¿Cómo saben que una intervención está funcionando? ¿Qué se mide y quién realiza ese seguimiento?',
  '8. ¿Qué dificultades, límites o incertidumbres existen en un proyecto de restauración marina?',
  '9. ¿Qué momentos o imágenes del proceso suelen quedar fuera de la comunicación habitual, pero son importantes para entenderlo?',
  '10. ¿Qué fotografías creen que podrían sintetizar un proyecto o explicar lo que hacen?',
  '11. ¿Qué tareas son repetitivas o monótonas y cuáles son más dinámicas?',
  '12. ¿Quiénes participan en cada fase?',
  '13. ¿Hay alguna persona cuyo trabajo cotidiano sea especialmente representativo y a quien pudiera acompañar?',
  '14. ¿Qué tensiones aparecen entre la protección del ecosistema y los usos económicos del mar?',
  '15. ¿Hay voluntariado, educación ambiental o participación de comunidades locales?',
  '16. ¿Qué otro enfoque podría tener este tema? ¿Cómo podría expandirse más allá de NextReef?',
  '17. ¿Tienen contactos de personas, organizaciones o instituciones relacionadas con estos temas?',
  '18. ¿Qué espacios podría fotografiar?',
  '19. Sería útil contar con direcciones de espacios, personas e instituciones que puedan facilitarme.',
  '20. ¿Qué fechas conviene reservar desde ahora porque sucederá algo relevante?',
  '21. ¿Cómo suelen observar y documentar el trabajo submarino?',
  '22. ¿Hay protocolos, restricciones de imagen o información confidencial que deba conocer?',
  '23. Si hubiera salidas a alta mar, ¿qué permisos tendría que tramitar?',
  '24. ¿Qué gastos previsibles tendría el trabajo de campo y sería posible cubrir materiales o desplazamientos?'
];
const questionBlocks = [
  {title:'Proyectos, hábitats y calendario', start:0, end:5},
  {title:'Procesos, seguimiento e imágenes posibles', start:5, end:11},
  {title:'Personas, comunidad y otras miradas', start:11, end:17},
  {title:'Lugares, fechas y trabajo de campo', start:17, end:21},
  {title:'Permisos, condiciones y recursos', start:21, end:24}
];
document.querySelector('#mail-button')?.addEventListener('click', () => {
  const greeting = 'Hola Abril,\n\nComparto el cuestionario para conocer mejor los proyectos y posibles líneas de trabajo documental. Pueden responder en este mismo correo, entre varias personas si les resulta más práctico.\n\n';
  const body = greeting + questionBlocks.map(block => block.title.toUpperCase() + '\n\n' + questions.slice(block.start, block.end).map(q => `${q}\nRespuesta:\n`).join('\n')).join('\n\n') + '\nGracias por vuestro tiempo.\n\nRodrigo';
  window.location.href = `mailto:?subject=${encodeURIComponent('Cuestionario — proyecto documental Mediterráneo')}&body=${encodeURIComponent(body)}`;
});

const map = document.querySelector('#concept-map');
if (map) {
const svg = document.querySelector('.map-lines');
const nodes = [...map.querySelectorAll('.map-node')];
const connections = [[0,4],[0,2],[2,6],[2,8],[4,5],[5,1],[1,9],[9,3],[3,7],[7,6],[5,7],[8,0]];
function place(node){node.style.left=`${node.dataset.x}%`;node.style.top=`${node.dataset.y}%`}
function drawLines(){
  const r=map.getBoundingClientRect();
  svg.setAttribute('viewBox',`0 0 ${r.width} ${r.height}`);
  svg.innerHTML=connections.map(([a,b],n)=>{const A=nodes[a].getBoundingClientRect(),B=nodes[b].getBoundingClientRect();const x1=A.left+A.width/2-r.left,y1=A.top+A.height/2-r.top,x2=B.left+B.width/2-r.left,y2=B.top+B.height/2-r.top;const bend=((n%2?1:-1)*Math.min(80,Math.abs(x2-x1)*.18));return `<path d="M ${x1} ${y1} C ${x1+bend} ${y1-45}, ${x2-bend} ${y2+45}, ${x2} ${y2}"/>`}).join('');
}
nodes.forEach(place);drawLines();addEventListener('resize',drawLines);
let active=null;
map.addEventListener('pointerdown',e=>{const node=e.target.closest('.map-node');if(!node)return;active=node;node.setPointerCapture(e.pointerId);});
map.addEventListener('pointermove',e=>{if(!active)return;const r=map.getBoundingClientRect();active.dataset.x=Math.max(4,Math.min(96,(e.clientX-r.left)/r.width*100));active.dataset.y=Math.max(5,Math.min(95,(e.clientY-r.top)/r.height*100));place(active);drawLines();});
map.addEventListener('pointerup',()=>active=null);

map.addEventListener("pointercancel",()=>active=null);

// Recompose the map as a loose constellation, avoiding a fixed two-column layout.
let animation = null;
function rearrange(){
  if (document.hidden || active || animation) return;
  const constellation = [
    {x:10,y:14},{x:37,y:8},{x:68,y:16},{x:88,y:31},{x:23,y:36},
    {x:53,y:42},{x:12,y:62},{x:41,y:68},{x:73,y:61},{x:31,y:86}
  ];
  const slots = constellation.map(slot => ({
    x:Math.max(7,Math.min(93,slot.x+(Math.random()-.5)*10)),
    y:Math.max(7,Math.min(93,slot.y+(Math.random()-.5)*12))
  }));
  for(let i=slots.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[slots[i],slots[j]]=[slots[j],slots[i]];}
  const from=nodes.map(n=>({x:Number(n.dataset.x),y:Number(n.dataset.y)}));
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const begun=performance.now();
  function frame(now){
    const t=reduced?1:Math.min(1,(now-begun)/1800),ease=t*t*(3-2*t);
    nodes.forEach((n,i)=>{n.dataset.x=from[i].x+(slots[i].x-from[i].x)*ease;n.dataset.y=from[i].y+(slots[i].y-from[i].y)*ease;place(n)});
    drawLines();animation=t<1?requestAnimationFrame(frame):null;
  }
  animation=requestAnimationFrame(frame);
}
map.addEventListener('pointerdown',()=>{if(animation){cancelAnimationFrame(animation);animation=null}});
setInterval(rearrange,15000);
}
// Preserve links to the sections from the original single-page version.
if(location.pathname.endsWith('/') || location.pathname.endsWith('/index.html')){
  const legacy={ '#referentes':'referentes.html', '#colaboradores':'colaboradores.html' };
  if(legacy[location.hash]) location.replace(legacy[location.hash]);
}

const questionList=document.querySelector('#question-list');
if(questionList) questionBlocks.forEach((block,index)=>{
  const section=document.createElement('section');
  section.className='question-block';
  const heading=document.createElement('h3');
  heading.id=`question-block-${index+1}`;
  heading.textContent=block.title;
  section.setAttribute('aria-labelledby',heading.id);
  const list=document.createElement('ol');
  list.start=block.start+1;
  questions.slice(block.start,block.end).forEach(q=>{
    const li=document.createElement('li');li.textContent=q.replace(/^\d+\.\s*/,'');list.append(li);
  });
  section.append(heading,list);questionList.append(section);
});


// VISOR_DE_IMAGENES
(() => {
  const galleryImages = [...document.querySelectorAll('.detail-gallery img')];
  if (!galleryImages.length) return;

  const viewer = document.createElement('div');
  viewer.className = 'image-lightbox';
  viewer.setAttribute('role', 'dialog');
  viewer.setAttribute('aria-modal', 'true');
  viewer.setAttribute('aria-label', 'Visor de imágenes');
  viewer.innerHTML = `
    <button class="image-lightbox__close" type="button" aria-label="Cerrar visor">Cerrar</button>
    <button class="image-lightbox__prev" type="button" aria-label="Imagen anterior">Anterior</button>
    <figure class="image-lightbox__figure">
      <img class="image-lightbox__image" alt="">
      <figcaption class="image-lightbox__caption"></figcaption>
    </figure>
    <button class="image-lightbox__next" type="button" aria-label="Imagen siguiente">Siguiente</button>
    <span class="image-lightbox__count" aria-live="polite"></span>`;
  document.body.appendChild(viewer);

  const fullImage = viewer.querySelector('.image-lightbox__image');
  const caption = viewer.querySelector('.image-lightbox__caption');
  const count = viewer.querySelector('.image-lightbox__count');
  const closeButton = viewer.querySelector('.image-lightbox__close');
  let current = 0;
  let trigger = null;

  function show(index) {
    current = (index + galleryImages.length) % galleryImages.length;
    const image = galleryImages[current];
    const text = image.closest('figure')?.querySelector('figcaption')?.textContent?.trim() || image.alt;
    fullImage.src = image.currentSrc || image.src;
    fullImage.alt = image.alt;
    caption.textContent = text;
    caption.hidden = !text;
    count.textContent = `${current + 1} / ${galleryImages.length}`;
  }

  function open(index, image) {
    trigger = image;
    show(index);
    viewer.classList.add('is-open');
    document.body.classList.add('lightbox-open');
    closeButton.focus();
  }

  function close() {
    viewer.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
    trigger?.focus();
  }

  galleryImages.forEach((image, index) => {
    image.tabIndex = 0;
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `Ampliar imagen ${index + 1} de ${galleryImages.length}`);
    image.addEventListener('click', () => open(index, image));
    image.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open(index, image);
      }
    });
  });

  closeButton.addEventListener('click', close);
  viewer.querySelector('.image-lightbox__prev').addEventListener('click', () => show(current - 1));
  viewer.querySelector('.image-lightbox__next').addEventListener('click', () => show(current + 1));
  viewer.addEventListener('click', event => { if (event.target === viewer) close(); });
  document.addEventListener('keydown', event => {
    if (!viewer.classList.contains('is-open')) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });
})();


// CALENDARIO_MENSUAL
(() => {
  const grid = document.querySelector('#month-grid');
  if (!grid) return;
  const title = document.querySelector('#month-title');
  const events = [
    {date:'2026-10-16',time:'09:00',title:'Plogging Congress',href:'plogging.html',kind:'past'},
    {date:'2026-10-17',time:'10:00',title:'Recogida Nova Icària',href:'anellides.html',kind:'past'},
    {date:'2026-10-19',time:'Por confirmar',title:'Reunión NextReef',href:'nextreef.html',kind:'task'},
    {date:'2026-10-19',time:'Tarea',title:'Pedir acceso OPP-91',href:'palamos.html',kind:'task'},
    {date:'2026-10-20',time:'10:00',title:'Jordi · Gremio',href:'gremio.html'},
    {date:'2026-10-20',time:'Último día',title:'Exposición Thalassa',href:'thalassa.html'},
    {date:'2026-10-29',time:'09–12 h',title:'Caballitos de mar',href:'anellides.html'},
    {date:'2026-10-31',time:'10–12 h',title:'Limpieza Anèl·lides',href:'anellides.html'},
    {date:'2026-11-26',time:'09–12 h',title:'Caballitos de mar',href:'anellides.html'},
    {date:'2026-12-30',time:'09–12 h',title:'Caballitos de mar',href:'anellides.html'}
  ];
  const names = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  let shown = new Date(2026, 9, 1);
  const key = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  function render(){
    title.textContent = `${names[shown.getMonth()]} ${shown.getFullYear()}`;
    grid.innerHTML = '';
    const first = new Date(shown.getFullYear(), shown.getMonth(), 1);
    const offset = (first.getDay()+6)%7;
    const start = new Date(first); start.setDate(1-offset);
    for(let i=0;i<42;i++){
      const d = new Date(start); d.setDate(start.getDate()+i);
      const cell = document.createElement('div');
      cell.className = 'month-day' + (d.getMonth()!==shown.getMonth() ? ' month-day--outside' : '');
      cell.innerHTML = `<span class="month-day__number">${d.getDate()}</span>`;
      events.filter(e=>e.date===key(d)).forEach(e=>{
        const a=document.createElement('a'); a.href=e.href; a.className='month-event'+(e.kind?` month-event--${e.kind}`:'');
        a.innerHTML=`<time>${e.time}</time>${e.title}`; cell.appendChild(a);
      });
      grid.appendChild(cell);
    }
  }
  document.querySelector('#prev-month').addEventListener('click',()=>{shown=new Date(shown.getFullYear(),shown.getMonth()-1,1);render()});
  document.querySelector('#next-month').addEventListener('click',()=>{shown=new Date(shown.getFullYear(),shown.getMonth()+1,1);render()});
  render();
})();
