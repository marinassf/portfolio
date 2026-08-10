/* =========================================================
   MARI DESIGN CO. — projects.js
   Single source of truth for the three projects.
   Sequence defines "next project" order (loops).
   ========================================================= */

const projects = [
  {
    id: "afora",
    slug: "afora-arquitetura",
    year: "2026",
    title: {
      pt: "Afora Arquitetura",
      en: "Afora Arquitetura"
    },
    category: {
      pt: "Identidade Visual",
      en: "Visual Identity"
    },
    role: {
      pt: "Direção Criativa e Design de Identidade",
      en: "Creative Direction and Identity Design"
    }
  },
  {
    id: "lilt",
    slug: "lilt-cafeteria",
    year: "2026",
    title: {
      pt: "Lilt Cafeteria",
      en: "Lilt Cafeteria"
    },
    category: {
      pt: "Identidade Visual",
      en: "Visual Identity"
    },
    role: {
      pt: "Direção Criativa e Design de Identidade",
      en: "Creative Direction and Identity Design"
    }
  },
  {
    id: "helena",
    slug: "helena-prado-psicologa",
    year: "2026",
    title: {
      pt: "Helena Prado Psicóloga",
      en: "Helena Prado Psicóloga"
    },
    category: {
      pt: "Identidade Visual",
      en: "Visual Identity"
    },
    role: {
      pt: "Direção Criativa e Design de Identidade",
      en: "Creative Direction and Identity Design"
    }
  }
];

/* Return the project that follows the given id (loops to start). */
function getNextProject(id) {
  const index = projects.findIndex(function (p) {
    return p.id === id;
  });
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
}

/* Expose for non-module scripts */
window.MARI = window.MARI || {};
window.MARI.projects = projects;
window.MARI.getNextProject = getNextProject;
