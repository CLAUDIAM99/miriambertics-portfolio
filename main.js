const projects = [
  {
    id: "chessvetica",
    title: "Chessvetica",
    subtitle: "The winning move in design",
    category: "Design 3D · Creative Direction",
    thumb: "page-06.png",
    images: ["page-06.png", "page-07.png"],
    description:
      "Progetto che fonde modellazione 3D e pubblicità creativa. Ogni pezzo nasce dal font “Chessvetica”, set di icone che unisce l’eleganza del design svizzero alla funzionalità del gioco tradizionale. Risultato: una rivisitazione moderna e minimalista del gioco, dove semplicità delle forme e chiarezza visiva creano un’esperienza raffinata e contemporanea.",
    video: "https://www.youtube.com/watch?v=zQUDG_k8DnY",
  },
  {
    id: "einaudi",
    title: "Einaudi",
    subtitle: "Un legame tra tradizione e innovazione",
    category: "Brand identity",
    thumb: "page-07.png",
    images: ["page-08.png", "page-09.png"],
    description:
      "Rebranding per modernizzare il brand alle tendenze contemporanee valorizzando l’identità storica. Soft restyling: il nuovo logo conserva l’iconico struzzo semplificato con linee essenziali in stile minimal, abbandonando l’approccio illustrativo per un design grafico accattivante e adattabile ai media attuali.",
  },
  {
    id: "rhythm",
    title: "Rhythm",
    subtitle: "Trova il tuo ritmo, ritrova la tua calma",
    category: "AI · UX/UI · Brand identity",
    thumb: "page-10.png",
    images: [ "page-10.png","page-11.png",  "page-12.png", "page-13.png", ],
    description:
      "Rhythm nasce da una rielaborazione del trend Calming Rhythms rilasciato da Adobe nel 2024: prototipo di app che offre ambienti virtuali creati in tempo reale dall’intelligenza artificiale, come rifugio dalla frenesia quotidiana. Il nome richiama il trend e il concetto di ritmo nella musica, nella natura e nella vita quotidiana. Il logo integra nella “R” forme da sole e onda. L’icona combina monogramma e sfondo generato dall’AI. La home propone meditazione, sonno, respirazione, yoga e concentrazione; dalla schermata prompt l’utente definisce stato d’animo, obiettivo e una breve descrizione per generare musica e immagini su misura, unite nell’output per un’esperienza multisensoriale.",
  },
  {
    id: "vivienne",
    title: "Vivienne Westwood × H&M",
    subtitle: "God save Vivienne Westwood",
    category: "Art direction · Fotografia · ADV",
    thumb: "page-14.png",
    images: ["page-14.png", "page-15.png"],
    description:
      "Campagna “God Save Vivienne Westwood” per H&M: omaggio alla libertà di espressione, moda fluida e audace che sfida convenzioni e invita a superare le barriere di genere. L’immagine promozionale incarna lo spirito ribelle e innovativo di Vivienne Westwood; la collezione propone capi che, prima ancora che di stile, sono dichiarazione di libertà e speranza.",
  },
  {
    id: "nca",
    title: "NCA",
    subtitle: "NABA Communication Awards — anti-estetica",
    category: "Visual identity",
    thumb: "page-16.png",
    images: ["page-16.png", "page-17.png"],
    description:
      "Progetto NABA Communication Awards sul concetto di anti-estetica. Il logo riflette la fluidità: un liquido senza forma fissa che cerca la configurazione a sé congeniale — metafora degli studenti NABA alla ricerca della propria identità creativa. I visual delle categorie usano tasselli ispirati al gioco del quindici: costruzione del sapere pezzo dopo pezzo.",
  },
  {
    id: "bose",
    title: "Bose",
    subtitle: "Only you, nothing else",
    category: "ADV",
    thumb: "page-18.png",
    images: ["page-18.png", "page-19.png"],
    description:
      "Campagna sul claim “Only you, nothing else”: l’ascolto come esperienza unica in un’epoca di distrazioni. Le cuffie Bose come via di fuga e momento di pace; connessione emotiva tra paesaggio naturale e ascolto immersivo.",
  },
];

const grid = document.getElementById("project-grid");
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalMeta = document.getElementById("modal-meta");
const modalDesc = document.getElementById("modal-desc");
const modalVideo = document.getElementById("modal-video");
const modalGallery = document.getElementById("modal-gallery");
const menuBtn = document.getElementById("menu-btn");
const navOverlay = document.getElementById("nav-overlay");
const navClose = document.getElementById("nav-close");
const yearEl = document.getElementById("year");

let galleryIndex = 0;
let activeProject = null;

function openNav() {
  navOverlay.hidden = false;
  menuBtn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeNav() {
  navOverlay.hidden = true;
  menuBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

menuBtn?.addEventListener("click", () => {
  if (navOverlay.hidden) openNav();
  else closeNav();
});

navClose?.addEventListener("click", closeNav);

navOverlay?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

function renderGallery() {
  if (!activeProject) return;
  const { images } = activeProject;
  modalGallery.innerHTML = "";
  const img = document.createElement("img");
  img.src = images[galleryIndex];
  img.alt = `${activeProject.title} — slide ${galleryIndex + 1}`;
  modalGallery.appendChild(img);
}

function openModal(project) {
  activeProject = project;
  galleryIndex = 0;
  modalTitle.textContent = project.title;
  modalMeta.textContent = `${project.category} · ${project.subtitle}`;
  modalDesc.textContent = project.description;
  if (project.video) {
    modalVideo.innerHTML = `<a href="${project.video}" target="_blank" rel="noopener noreferrer">Guarda il video del progetto →</a>`;
  } else {
    modalVideo.innerHTML = "";
  }
  renderGallery();
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  activeProject = null;
  document.body.style.overflow = "";
}

modal?.querySelectorAll("[data-modal-close]").forEach((el) => {
  el.addEventListener("click", closeModal);
});

document.getElementById("modal-prev")?.addEventListener("click", () => {
  if (!activeProject) return;
  galleryIndex = (galleryIndex - 1 + activeProject.images.length) % activeProject.images.length;
  renderGallery();
});

document.getElementById("modal-next")?.addEventListener("click", () => {
  if (!activeProject) return;
  galleryIndex = (galleryIndex + 1) % activeProject.images.length;
  renderGallery();
});

document.addEventListener("keydown", (e) => {
  if (modal.hidden) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") document.getElementById("modal-prev")?.click();
  if (e.key === "ArrowRight") document.getElementById("modal-next")?.click();
});

projects.forEach((p) => {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "project-card";
  btn.setAttribute("aria-label", `Apri progetto ${p.title}`);
  btn.innerHTML = `
    <div class="project-card__media">
      <img src="${p.thumb}" alt="" loading="lazy" width="600" height="750" />
    </div>
    <div class="project-card__body">
      <p class="project-card__cat">${p.category}</p>
      <h3 class="project-card__title">${p.title}</h3>
    </div>
  `;
  btn.addEventListener("click", () => openModal(p));
  li.appendChild(btn);
  grid.appendChild(li);
});

if (yearEl) yearEl.textContent = String(new Date().getFullYear());
