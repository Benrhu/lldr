//https://github.com/vuejs/vitepress/tree/master/docs

module.exports = {
  title: "La Locura de Rubén",
  description:
    "Recursos y guías para Devs que quieren conseguir clientes como freelancers",
  base: "/docs/",
  lang: "es-ES",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    docsDir: "docs",
    // editLinks: true,
    editLinkText: "Edit this page on GitHub",

    lastUpdated: "Last Updated",
    // repo: 'vuejs/vitepress',
    displayAllHeaders: true, // Default: false
    activeHeaderLinks: false, // Default: true
    nav: [
      { text: "Home", link: "/" },
      { text: "Guides", link: "/guide/" },
      {
        text: "TikTok",
        link: "https://tiktok.com/@lalocuraderuben",
        target: "_blank",
        rel: false,
      },
    ],
    sidebar: {
      // sidebar: "auto",
      "/guide/": getGuideSidebar(),
      "/config/": getConfigSidebar(),
      "/": getGuideSidebar(),
      // we don't need to do anything to index
      // because the default sidebar is created via page headings
    },
  },
  head: [["link", { rel: "stylesheet", href: "./theme.css" }]],
  locales: {
    "/en/": {
      lang: "en-US",
      title: "lldr.info",
      description:
        "Resources and guides for Devs who want to get clients as freelancers",
    },
    "/es/": {
      lang: "es-ES",
      title: "lldr.info",
      description:
        "Recursos y guías para Devs que quieren conseguir clientes como freelancers",
    },
  },
};

function getGuideSidebar() {
  return [
    {
      text: "Introducción",
      children: [
        { text: "¡Empecemos!", link: "  /guide/index" },
        { text: "¿Qué lenguaje aprendo?", link: "#" },
        { text: "Ser freelancer", link: "#" },
      ],
    },
    {
      text: "Emprender",
      class: "disabled-sidebar-item",
      children: [
        { text: "¿Cómo se hace dinero?", link: "/guide/coomingsoon" },
        { text: "¿Por qué me van a pagar a mí?", link: "/guide/coomingsoon" },
        {
          text: "¿Necesito mucho dinero para empezar?",
          link: "/guide/coomingsoon",
        },
        { text: "¿Puedo emprender sólo?", link: "/guide/coomingsoon" },
      ],
    },
  ];
}

function getConfigSidebar() {
  return [
    {
      text: "App Config",
      children: [{ text: "Basics", link: "/config/basics" }],
    },
    {
      text: "Theme Config",
      children: [
        { text: "Homepage", link: "/config/homepage" },
        { text: "Algolia Search", link: "/config/algolia-search" },
        { text: "Carbon Ads", link: "/config/carbon-ads" },
      ],
    },
  ];
}
