const ProjListing = [
  {
    title: "Spartan",
    date: "Dec 2020",
    text: `A boxing training device for intermediate-level boxers. Developed as a part of 2.s009, *Explorations in Product Design*.`,
    link: [
      {
        external: true,
        linkName: "Spartan product sheet",
        linkPath: "https://s009kindness.com/images/productSheets/red_spartan_product_sheet_sm.pdf",
        key: Math.random(),
      },
      {
        external: true,
        linkName: "2s009 website",
        linkPath: "https://s009kindness.com/",
        key: Math.random(),
      },
    ],
    bgClass: "b-spartan",
    key: Math.random(),
  },
  {
    title: "study garden",
    date: "Jan 2020",
    text:
      "A study tracking website where plants grow as the user spends more time studying. Developed as a part of web.lab 2020.",
    link: [
      {
        external: true,
        linkName: "Website",
        linkPath: "https://study-garden.herokuapp.com",
        key: Math.random(),
      },
      {
        external: true,
        linkName: "GitHub",
        linkPath: "https://github.com/weblab-class/studygarden",
        key: Math.random(),
      },
      {
        external: true,
        linkName: "web.lab website",
        linkPath: "https://weblab.mit.edu",
        key: Math.random(),
      },
    ],
    bgClass: "b-studygarden",
    key: Math.random(),
  },
  {
    title: "Analyzing Player Improvement in Rhythm Games",
    date: "Dec 2019",
    text: "2.671 (Measurement and Instrumentation) “Go Forth and Measure” research project.",
    link: [
      {
        external: true,
        linkName: "Final Paper",
        linkPath: "https://tomadto.s-ul.eu/osu-paper/1kNA1Y7Y",
        key: Math.random(),
      },
      {
        external: true,
        linkName: "Final Poster",
        linkPath: "https://tomadto.s-ul.eu/osu-paper/mfsMpV7e",
        key: Math.random(),
      },
    ],
    bgClass: "b-osu",
    key: Math.random(),
  },
  {
    title: "Custom Chair",
    Date: "Dec 2019",
    text: "4.500, *Design Computation*, final project. Designed in Rhino 6, rendered in 3DS Max",
    link: [{ linkName: "coming soon", linkPath: "/projects", key: Math.random() }],
    bgClass: "b-4500",
    key: Math.random(),
  },
  {
    title: "Eames Dining Chair Model",
    date: "Sep 2019",
    text:
      "Model of the Eames Dining Chair originally by Charles and Ray Eames. For 4.500, *Design Computation*. Designed in Rhino 6. Rendered in 3DS Max.",
    bgClass: "b-eames",
    key: Math.random(),
  },
  {
    title: "Developing trials for testing spacesuit IVA gloves",
    date: "Sep 2019",
    text: "*description coming soon*",
    link: [{ linkName: "coming soon", linkPath: "/projects", key: Math.random() }],
    bgClass: "b-buttonbox",
    key: Math.random(),
  },
  {
    title: "Flipstream",
    date: "May 2019",
    text: "Final Robot for MIT 2.007, *Design and Manufacturing I*.",
    link: [{ linkName: "coming soon", linkPath: "/projects", key: Math.random() }],
    bgClass: "b-2007",
    key: Math.random(),
  },

  {
    title: "MIT Motorsports",
    date: "Jun 2018",
    text: "Aero subteam member, worked on the diffuser/underbody aero",
    link: [{ linkName: "coming soon", linkPath: "/projects", key: Math.random() }],
    bgClass: "b-fsae",
    key: Math.random(),
  },
  {
    title: "Astro Adventure",
    date: "May 2018",
    text: "MIT 2.00B, *Toy Product Design*, final project as a part of team Moose.",
    link: [
      {
        external: true,
        linkName: "2.00b website",
        linkPath: "http://web.mit.edu/2.00b/www/index.html",
        key: Math.random(),
      },
      {
        external: true,
        linkName: "Presentation!",
        linkPath: "https://vimeo.com/271887194",
        key: Math.random(),
      },
    ],
    bgClass: "b-200b",
    key: Math.random(),
  },
];

//TODO: put figma doodles in
export default ProjListing;
