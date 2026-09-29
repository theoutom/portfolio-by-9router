const i18n={
id:{
'nav.about':'Tentang','nav.skills':'Skills','nav.projects':'Proyek','nav.contact':'Kontak',
'hero.badge':'SMK N 2 Surakarta — Siswa Aktif',
'hero.tag':'Tech dan AI Automation — teknologi untuk kesejahteraan umat manusia, mulai dari lingkup terkecil.',
'hero.cta1':'Lihat Proyek','hero.cta2':'Hubungi Saya',
'stat.p':'Proyek','stat.s':'Bidang Skill',
'about.title':'Teknologi demi manusia.',
'v1t':'Mulai dari yang kecil','v1p':'Otomasi tugas harian, bantu guru dan teman, lalu skala ke komunitas.',
'v2t':'Build in public','v2p':'Setiap proyek open, terdokumentasi, bisa dipelajari ulang.',
'v3t':'AI sebagai amplifier','v3p':'Vibe coding dan AI agents: berbuat lebih dengan sumber daya sedikit.',
'skills.title':'Empat mesin tempur.','proj.title':'Yang sudah saya bangun.','contact.title':'Mari berkolaborasi.','contact.sub':'Terbuka untuk magang, proyek komunitas, dan kolaborasi open-source.'
},
en:{
'nav.about':'About','nav.skills':'Skills','nav.projects':'Projects','nav.contact':'Contact',
'hero.badge':'SMK N 2 Surakarta — Active Student',
'hero.tag':'Tech & AI Automation — technology for human flourishing, starting from the smallest circle.',
'hero.cta1':'View Projects','hero.cta2':'Contact Me',
'stat.p':'Projects','stat.s':'Skill Areas',
'about.title':'Technology for people.',
'v1t':'Start small','v1p':'Automate daily tasks, help teachers & peers, then scale to community.',
'v2t':'Build in public','v2p':'Every project open, documented, reproducible.',
'v3t':'AI as amplifier','v3p':'Vibe coding & AI agents: do more with fewer resources.',
'skills.title':'Four engines.','proj.title':'What I have built.','contact.title':'Let’s collaborate.','contact.sub':'Open for internships, community projects, and open-source collabs.'
}
};
const about={
id:{p1:'Saya <b>Satrio Ernesto Utomo</b>, siswa <b>SMK N 2 Surakarta</b> yang menekuni <b>Tech dan AI Automation</b>. Saya percaya teknologi terbaik adalah yang melayani manusia — bukan sebaliknya.',p2:'Misi saya: memakai teknologi demi kesejahteraan umat, dimulai dari lingkup terkecil — membantu keluarga lewat otomasi, membantu sekolah lewat EduQuest dan Pemilos, melayani komunitas lewat portal Sahabat Misdinar Indonesia, hingga membangun infrastruktur mandiri (home server, Docker, Tailscale) agar masyarakat punya kedaulatan digital.'},
en:{p1:'I am <b>Satrio Ernesto Utomo</b>, a student at <b>SMK N 2 Surakarta</b> passionate about <b>Tech & AI Automation</b>. I believe the best technology serves people — not the other way around.',p2:'My mission: use technology for human wellbeing, starting from the smallest circle — helping family through automation, helping school through EduQuest & Pemilos, serving community via Sahabat Misdinar Indonesia portal, and building self-hosted infrastructure (home server, Docker, Tailscale) for digital sovereignty.'}
};
const skills=[
{id:'frontend-ui',categoryName:'Frontend & UI Engineering',badge:'INTERFACE_ENGINE',description:'Responsive user interfaces, design systems, and aesthetic desktop styling.',technologies:[{name:'HTML5 / CSS3',level:'Intermediate',note:'Semantic Architecture & Layouts'},{name:'Canva & Inkscape',level:'Intermediate',note:'Vector Design & Assets'},{name:'React.js',level:'Beginner',note:'SPA, Component Architecture, Hooks'},{name:'Tailwind CSS',level:'Beginner',note:'Custom Themes & Utility Styling'},{name:'FlatLaf (Java Swing)',level:'Beginner',note:'Modern Desktop Dark/Light UI Engine'},{name:'Android Studio',level:'Beginner',note:'Mobile App Development & Emulation'},{name:'Figma',level:'Beginner',note:'UI/UX Wireframing & Prototyping'}]},
{id:'backend-cloud',categoryName:'Backend & Cloud Infrastructure',badge:'INFRA_CLOUD',description:'Serverless datastores, edge databases, containerization, and home servers.',technologies:[{name:'Supabase',level:'Intermediate',note:'PostgreSQL, Auth & Realtime'},{name:'Linux Server (Ubuntu)',level:'Intermediate',note:'Terminal Administration, Services & Cron'},{name:'Vercel',level:'Intermediate',note:'Edge CDN & Web Deployments'},{name:'aaPanel & Tailscale',level:'Intermediate',note:'Host Ops & Mesh Networking'},{name:'Laravel',level:'Beginner',note:'PHP MVC Framework & REST APIs'},{name:'Apache Server',level:'Beginner',note:'Web Server Config & Virtual Hosts'},{name:'Nginx Server',level:'Beginner',note:'Reverse Proxy & Load Balancing'},{name:'Docker',level:'Beginner',note:'Containerized Self-Hosted Stacks'},{name:'Cloudflare',level:'Beginner',note:'DNS, CDN, Edge Security & D1'}]},
{id:'ai-automation',categoryName:'AI & Automation Tools',badge:'COGNITIVE_OPS',description:'Local LLM inference, autonomous AI engineering tools, and workflow engines.',technologies:[{name:'Vibe Code',level:'Advance',note:'AI-Accelerated Coding & Prompt-Driven Development'},{name:'OpenCode & Continue',level:'Intermediate',note:'IDE AI Assistants'},{name:'AI Agent Workflows',level:'Intermediate',note:'Prompt Chaining & Multi-Tool Agents'},{name:'Claude Code',level:'Beginner',note:'Terminal Agentic Coding Workflows'},{name:'Ollama',level:'Beginner',note:'Local LLM Orchestration & Inference'},{name:'n8n Workflow Automation',level:'Beginner',note:'Event-Driven Multi-Node Pipelines'}]},
{id:'hardware-iot',categoryName:'Hardware & IoT Prototyping',badge:'EMBEDDED_EDGE',description:'Microcontroller programming, sensor telemetry, and hardware integration.',technologies:[{name:'ESP32',level:'Beginner',note:'Wi-Fi/BLE IoT Node & Sensor Telemetry'},{name:'Arduino Microcontrollers',level:'Beginner',note:'C/C++ Embedded Control'},{name:'Edge AI Processing',level:'Beginner',note:'On-Device Inference & Logic'}]}
];
const projects=[
{id:'eduquest-v2',code:'HIST_01',period:'Mei — Juni 2026',title:'EduQuest v2',category:'Gamified Desktop App',description:'Gamified vocational education desktop app with Java Swing + FlatLaf modern themes. Maven pipeline, real-time quiz & progress sync to Cloudflare D1.',highlights:['Cloudflare D1 edge DB sync over HTTP/REST','FlatLaf zero-flicker double-buffered UI','Gamified quest engine: XP, badges, scoreboards'],techStack:['Java','Java Swing','FlatLaf','Maven','Cloudflare D1','SQLite']},
{id:'sigmaproject-kr',code:'HIST_02',period:'Juni 2026 — Sekarang',title:'SigmaProject (sigma-kr)',category:'Full-Stack Web Platform',description:'Reactive full-stack web app: React + Tailwind + Supabase backend. CI/CD to Vercel, role-based auth & realtime subscriptions.',highlights:['Supabase auth, RLS policies, realtime streams','Fluid responsive UI with Tailwind tokens','Continuous deployment on Vercel'],techStack:['React.js','Tailwind CSS','Supabase','PostgreSQL','Vercel']},
{id:'focusclock-app',code:'HIST_03',period:'Juni 2026 — Sekarang',title:'FocusClock',category:'Web Time Management Platform',description:'Intelligent time management platform for deep work: AI workflow setup, focus intervals, routine automation, productivity analytics.',highlights:['AI-assisted routine setup & auto tracking','Customizable focus intervals + session stats','Zero-distraction dark-mode UI'],techStack:['React.js','Next.js','Tailwind CSS','AI Setup','TypeScript']},
{id:'smi-website',code:'HIST_04',period:'Juli 2026 — Sekarang',title:'SMI Website',category:'Community Portal & Admin Management',description:'Organizational platform for Sahabat Misdinar Indonesia: public landing, member portal, admin control panel.',highlights:['Public landing with schedule & events','Member portal for profiles & resources','Admin dashboard for verification'],techStack:['React.js','Next.js','Tailwind CSS','Supabase','Role-Based Auth']},
{id:'pdf-security-suite',code:'HIST_05',period:'Agustus 2026',title:'PDF Security & Watermarking Suite',category:'Automation & Security Script',description:'Automated batch PDF security engine in Python (pypdf, PIL): transparent watermarks, permission encryption, SHA-256 verification logs.',highlights:['Batch watermarking with alpha opacity','SHA-256 integrity verification','Zero external binary, cross-platform CLI'],techStack:['Python','pypdf','PIL / Pillow','SHA-256','CLI']},
{id:'home-server-infra',code:'HIST_06',period:'Agustus 2026 — Sekarang',title:'Home Server Infrastructure',category:'Self-Hosted Cloud Infrastructure',description:'24/7 Ubuntu home server: Docker microservices, reverse proxy routing, Tailscale mesh VPN, n8n automation triggers.',highlights:['Docker Compose multi-service ecosystem','Encrypted remote access via Tailscale','n8n automation pipelines & secure gateway'],techStack:['Ubuntu Linux','Docker','aaPanel','Tailscale','n8n','Nginx']},
{id:'pemilos-smp19',code:'HIST_07',period:'2024',title:'Pemilos SMP 19',category:'E-Voting & Election Portal',description:'Digital student council election system for SMP 19: credential verification, auto ballot counting, live result telemetry.',highlights:['Realtime auto vote tabulation','Single-use auth tokens','Fast loading for on-site polling'],techStack:['PHP','MySQL','JavaScript','HTML5 / CSS3','Apache Server']},
{id:'employeesalary-studentscore',code:'HIST_08',period:'2023 — 2024',title:'EmployeeSalary & StudentScore',category:'Java Administrative Systems',description:'Java desktop utilities: dynamic array management, validation, statistical grading, tabular record rendering.',highlights:['Dynamic array growth reallocation','Sanitized input with error handling','Reporting tables: mean, variance, grade brackets'],techStack:['Java','Java Swing','Algorithms','Desktop UI']}
];

let lang='id', activeSkill=skills[0].id, projFilter='All';
function t(k){return (i18n[lang]&&i18n[lang][k])||k}
function renderI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n'); el.textContent=t(k);});
  const ap=about[lang]; document.getElementById('aboutP1').innerHTML=ap.p1; document.getElementById('aboutP2').innerHTML=ap.p2;
  document.getElementById('langToggle').textContent= lang==='id'?'EN':'ID';
  document.documentElement.lang=lang;
}
function renderSkillTabs(){
  const c=document.getElementById('skillTabs'); c.innerHTML='';
  skills.forEach(s=>{
    const b=document.createElement('button'); b.textContent=s.categoryName; b.className= activeSkill===s.id?'active':''; b.onclick=()=>{activeSkill=s.id; renderSkillTabs(); renderSkillPanel();};
    c.appendChild(b);
  });
}
function renderSkillPanel(){
  const s=skills.find(x=>x.id===activeSkill); const p=document.getElementById('skillPanel');
  p.innerHTML=`<div class="sp-head"><div><h3>${s.categoryName}</h3><div class="sp-desc">${s.description}</div></div><span class="badge">${s.badge}</span></div><div class="techs">${s.technologies.map(t=>`<div class="tech"><strong>${t.name}</strong><em>${t.note}</em><div class="lv ${t.level}">${t.level.toUpperCase()}</div></div>`).join('')}</div>`;
}
function renderProjFilters(){
  const cats=['All',...new Set(projects.map(p=>p.category))]; const c=document.getElementById('projFilters'); c.innerHTML='';
  cats.forEach(cat=>{
    const b=document.createElement('button'); b.textContent=cat; b.className= projFilter===cat?'active':''; b.onclick=()=>{projFilter=cat; renderProjFilters(); renderProjects();};
    c.appendChild(b);
  });
}
function renderProjects(){
  const c=document.getElementById('projGrid'); const list= projFilter==='All'?projects:projects.filter(p=>p.category===projFilter);
  c.innerHTML=list.map(p=>`<div class="pcard" onclick="openModal('${p.id}')"><div class="meta">${p.code} • ${p.period} • ${p.category}</div><h3>${p.title}</h3><p>${p.description}</p><div class="stack">${p.techStack.map(s=>`<span>${s}</span>`).join('')}</div></div>`).join('');
}
window.openModal=(id)=>{
  const p=projects.find(x=>x.id===id);
  document.getElementById('modalCard').innerHTML=`<div class="meta" style="font-family:JetBrains Mono,monospace;color:#9aa3c2;font-size:11px;letter-spacing:.08em">${p.code} • ${p.period}</div><h3>${p.title}</h3><p style="color:#9aa3c2;font-size:13px">${p.category}</p><p style="margin-top:10px;color:#cbd5ff">${p.description}</p><ul>${p.highlights.map(h=>`<li>${h}</li>`).join('')}</ul><div class="stack" style="margin-top:10px">${p.techStack.map(s=>`<span>${s}</span>`).join('')}</div><button class="close" onclick="closeModal()">Tutup</button>`;
  document.getElementById('modal').classList.add('open');
};
window.closeModal=()=> document.getElementById('modal').classList.remove('open');
document.getElementById('modal').addEventListener('click',e=>{ if(e.target.id==='modal') closeModal(); });
document.getElementById('langToggle').addEventListener('click',()=>{ lang= lang==='id'?'en':'id'; renderI18n(); });
renderI18n(); renderSkillTabs(); renderSkillPanel(); renderProjFilters(); renderProjects();