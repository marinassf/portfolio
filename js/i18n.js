/* =========================================================
   MARI DESIGN CO., i18n.js
   PT default. EN via JS. No duplicate HTML.
   Usage in markup:
     <span data-i18n="nav.projects">Projetos</span>
     <meta data-i18n-attr="content" data-i18n="meta.description">
     <a data-i18n-attr="aria-label" data-i18n="nav.projects">
   ========================================================= */

const translations = {
  pt: {
    meta: {
      homeTitle: "Mari Design Co. | Design gráfico",
      description:
        "Mari Design Co., o estúdio de design gráfico de Marina. Identidade, editorial e digital."
    },
    brand: {
      tag: "Estúdio Independente de Design"
    },
    nav: {
      projects: "Projetos",
      services: "Serviços",
      about: "Sobre",
      contact: "Contato"
    },
    services: {
      metaTitle: "Serviços e Pacotes | Mari Design Co.",
      title: "Serviços",
      intro: "Pacotes de identidade visual e serviços avulsos, do conceito à aplicação. Cada projeto é orçado conforme o escopo; os valores abaixo são pontos de partida.",
      identity: "Identidade Visual",
      other: "Outros Serviços",
      from: "A partir de",
      more: "Mais detalhes",
      quote: "Solicitar orçamento",
      othersIntro: "Serviços que podem ser contratados de forma independente ou combinados a um pacote de identidade.",
      catPrint: "Impressos",
      catDigital: "Digital",
      catEditorial: "Editorial",
      catArt: "Direção de Arte",
      closing: "Não encontrou o que procura? Podemos montar um pacote sob medida.",
      backHome: "Voltar ao início",
      backTop: "Voltar ao topo"
    },
    hero: {
      studio: "Design que fala baixo",
      discipline1: "por Marina",
      location: "Brasil / Worldwide",
      who: "Marina · Brasil",
      disciplines: "Identidade / Editorial / Digital",
      scroll: "Role para ver",
      idx: "Índice",
      since: "Desde 2026"
    },
    sections: {
      work: "Trabalhos Selecionados",
      workLeft: "Trabalhos",
      workRight: "Selecionados",
      about: "Sobre",
      contact: "Contato"
    },
    projects: {
      visualIdentity: "Identidade Visual"
    },
    about: {
      p1: "Sou a Marina, designer. Formada em Design e em Direito, com mestrado. Atuei na advocacia, mas escolhi o design.",
      p2: "Trabalhei alguns anos em agência e, em 2026, passei a trabalhar sozinha, cuidando de cada projeto do início ao fim. Nas horas vagas: música, viagens, shows e comida boa.",
      signature: "Marina, Mari Design Co."
    },
    footer: {
      prompt: "Tem um projeto em mente? Adoraria ouvir sua ideia.",
      emailLabel: "Email",
      instagramLabel: "Instagram",
      locationLabel: "Local",
      location: "Mato Grosso, Brasil",
      langLabel: "Idioma",
      tagline: "Amor pelo Design e Criatividade",
      backTop: "Voltar ao topo",
      rights: "© 2026 Mari Design Co. Todos os direitos reservados"
    },
    case: {
      projectType: "Tipo de projeto",
      role: "Papel",
      year: "Ano",
      context: "Contexto",
      concept: "Conceito",
      visualSystem: "Sistema visual",
      backToTop: "Voltar ao topo",
      otherProjects: "Outros projetos",
      nextProject: "Próximo projeto",
      index: "Projeto",
      backToWork: "Voltar aos trabalhos"
    },
    afora: {
      title: "Afora Arquitetura",
      role: "Direção Criativa e Design de Identidade",
      intro:
        "Identidade visual para um escritório de arquitetura. [TEXTO EDITÁVEL] Substitua por uma descrição introdutória curta do projeto, tom, objetivo e território da marca.",
      context:
        "[TEXTO EDITÁVEL, CONTEXTO] Descreva o ponto de partida do projeto: o cliente, o briefing e o desafio de posicionamento. Mantenha um parágrafo curto e preciso.",
      concept:
        "[TEXTO EDITÁVEL, CONCEITO] Explique a ideia central que guiou a identidade e como ela se traduz em decisões visuais.",
      system:
        "[TEXTO EDITÁVEL, SISTEMA VISUAL] Descreva o sistema: logotipo, tipografia, paleta, grid e como os elementos se comportam nas aplicações."
    },
    lilt: {
      title: "Lilt Cafeteria",
      role: "Direção Criativa e Design de Identidade",
      intro:
        "Identidade visual para uma cafeteria. [TEXTO EDITÁVEL] Substitua por uma descrição introdutória curta do projeto.",
      context:
        "[TEXTO EDITÁVEL, CONTEXTO] Descreva o ponto de partida do projeto para a cafeteria.",
      concept:
        "[TEXTO EDITÁVEL, CONCEITO] Explique a ideia central da identidade da Lilt.",
      system:
        "[TEXTO EDITÁVEL, SISTEMA VISUAL] Descreva o sistema aplicado a copos, embalagem, menu e papelaria."
    },
    helena: {
      title: "Helena Prado Psicóloga",
      role: "Direção Criativa e Design de Identidade",
      intro:
        "Identidade visual para consultório de psicologia. [TEXTO EDITÁVEL] Substitua por uma descrição introdutória curta do projeto.",
      context:
        "[TEXTO EDITÁVEL, CONTEXTO] Descreva o ponto de partida do projeto de identidade.",
      concept:
        "[TEXTO EDITÁVEL, CONCEITO] Explique a ideia central da identidade.",
      system:
        "[TEXTO EDITÁVEL, SISTEMA VISUAL] Descreva o sistema visual e suas aplicações institucionais e digitais."
    }
  },

  en: {
    meta: {
      homeTitle: "Mari Design Co. | Graphic design",
      description:
        "Mari Design Co., Marina's graphic design studio. Identity, editorial and digital."
    },
    brand: {
      tag: "Independent Design Studio"
    },
    nav: {
      projects: "Work",
      services: "Services",
      about: "About",
      contact: "Contact"
    },
    services: {
      metaTitle: "Services & Packages | Mari Design Co.",
      title: "Services",
      intro: "Visual identity packages and standalone services, from concept to application. Every project is quoted to scope; the figures below are starting points.",
      identity: "Visual Identity",
      other: "Other Services",
      from: "From",
      more: "More details",
      quote: "Request a quote",
      othersIntro: "Services that can be hired on their own or combined with an identity package.",
      catPrint: "Print",
      catDigital: "Digital",
      catEditorial: "Editorial",
      catArt: "Art Direction",
      closing: "Didn't find what you need? We can build a custom package.",
      backHome: "Back to home",
      backTop: "Back to top"
    },
    hero: {
      studio: "Design that speaks softly",
      discipline1: "by Marina",
      location: "Brazil / Worldwide",
      who: "Marina · Brazil",
      disciplines: "Identity / Editorial / Digital",
      scroll: "Scroll to view",
      idx: "Index",
      since: "Since 2026"
    },
    sections: {
      work: "Selected Work",
      workLeft: "Selected",
      workRight: "Work",
      about: "About",
      contact: "Contact"
    },
    projects: {
      visualIdentity: "Visual Identity"
    },
    about: {
      p1: "I'm Marina, a designer. I trained in Design and in Law, with a master's. I worked in law, but chose design.",
      p2: "I spent a few years at a studio and, in 2026, went solo, handling each project from start to finish. Off the clock: music, travel, live shows and good food.",
      signature: "Marina, Mari Design Co."
    },
    footer: {
      prompt: "Have a project in mind? I'd love to hear your idea.",
      emailLabel: "Email",
      instagramLabel: "Instagram",
      locationLabel: "Location",
      location: "Mato Grosso, Brazil",
      langLabel: "Language",
      tagline: "Love for Design and Creativity",
      backTop: "Back to top",
      rights: "© 2026 Mari Design Co. All rights reserved"
    },
    case: {
      projectType: "Project Type",
      role: "Role",
      year: "Year",
      context: "Context",
      concept: "Concept",
      visualSystem: "Visual System",
      backToTop: "Back to Top",
      otherProjects: "Other Projects",
      nextProject: "Next Project",
      index: "Project",
      backToWork: "Back to Work"
    },
    afora: {
      title: "Afora Arquitetura",
      role: "Creative Direction and Identity Design",
      intro:
        "Visual identity for an architecture practice. [EDITABLE TEXT] Replace with a short introductory description of the project, tone, purpose and brand territory.",
      context:
        "[EDITABLE TEXT, CONTEXT] Describe the starting point of the project: the client, the brief and the positioning challenge. Keep it a short, precise paragraph.",
      concept:
        "[EDITABLE TEXT, CONCEPT] Explain the central idea that guided the identity and how it translates into visual decisions.",
      system:
        "[EDITABLE TEXT, VISUAL SYSTEM] Describe the system: logotype, typography, palette, grid and how the elements behave across applications."
    },
    lilt: {
      title: "Lilt Cafeteria",
      role: "Creative Direction and Identity Design",
      intro:
        "Visual identity for a cafeteria. [EDITABLE TEXT] Replace with a short introductory description of the project.",
      context:
        "[EDITABLE TEXT, CONTEXT] Describe the starting point of the cafeteria project.",
      concept:
        "[EDITABLE TEXT, CONCEPT] Explain the central idea of Lilt's identity.",
      system:
        "[EDITABLE TEXT, VISUAL SYSTEM] Describe the system applied to cups, packaging, menu and stationery."
    },
    helena: {
      title: "Helena Prado Psicóloga",
      role: "Creative Direction and Identity Design",
      intro:
        "Visual identity for a psychology practice. [EDITABLE TEXT] Replace with a short introductory description of the project.",
      context:
        "[EDITABLE TEXT, CONTEXT] Describe the starting point of the identity project.",
      concept:
        "[EDITABLE TEXT, CONCEPT] Explain the central idea of the identity.",
      system:
        "[EDITABLE TEXT, VISUAL SYSTEM] Describe the visual system and its institutional and digital applications."
    }
  }
};

/* Resolve a dotted key path against an object. */
function resolveKey(obj, path) {
  return path.split(".").reduce(function (acc, part) {
    return acc && acc[part] !== undefined ? acc[part] : undefined;
  }, obj);
}

const LANG_KEY = "mari-lang";

function getStoredLang() {
  try {
    return localStorage.getItem(LANG_KEY);
  } catch (e) {
    return null;
  }
}

function storeLang(lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {
    /* storage unavailable, ignore */
  }
}

function setLanguage(lang) {
  if (lang !== "pt" && lang !== "en") lang = "pt";
  const dict = translations[lang];

  /* text nodes */
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    const value = resolveKey(dict, key);
    if (value === undefined) return;

    const attr = el.getAttribute("data-i18n-attr");
    if (attr) {
      el.setAttribute(attr, value);
    } else {
      el.textContent = value;
    }
  });

  /* document language + title */
  document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");

  const titleKey = document.documentElement.getAttribute("data-title-key");
  if (titleKey) {
    const t = resolveKey(dict, titleKey);
    if (t) document.title = t;
  }

  /* toggle state */
  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.setAttribute(
      "aria-pressed",
      btn.getAttribute("data-lang") === lang ? "true" : "false"
    );
  });

  storeLang(lang);

  /* let other scripts react (e.g. project listing re-render) */
  document.dispatchEvent(
    new CustomEvent("languagechange", { detail: { lang: lang } })
  );
}

function initI18n() {
  const initial = getStoredLang() || "pt";
  setLanguage(initial);

  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });
}

window.MARI = window.MARI || {};
window.MARI.setLanguage = setLanguage;
window.MARI.translations = translations;
window.MARI.getLang = function () {
  return getStoredLang() || "pt";
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}
