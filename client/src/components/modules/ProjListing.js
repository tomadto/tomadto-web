const ProjListing = [
  {
    title: "Heirloom",
    date: "Feb 2022 - Apr 2023",
    text:
      "Mechanical Design Engineer at Heirloom, working on developing automated machines that help remove CO2 from the atmosphere.",
    link: [
      {
        external: true,
        linkName: "Website",
        linkPath: "https://heirloomcarbon.com",
        key: Math.random(),
      },
    ],
    bgClass: "b-heirloom",
    key: Math.random(),
  },
  {
    title: "TA for MIT 2.009: Product Engineering Processes",
    date: "Aug 2022 - Jan 2023",
    text:
      "Mentored teams in product design, engineering, and project management. Also produced 2D and 3D media and helped produce and maintain photo albums for each class event.",
    link: [
      {
        external: true,
        linkName: "Class Website",
        linkPath: "https://web.mit.edu/2.009/www/index.html",
        key: Math.random(),
      },
      {
        external: true,
        linkName: "Final Presentation Bokeh (made by me)",
        linkPath: "https://tomadto.s-ul.eu/cY8wbSNa",
        key: Math.random(),
      },
      {
        external: true,
        linkName: "Mind Map Graphic (made by me)",
        linkPath: "https://tomadto.s-ul.eu/lUhoOYqS",
        key: Math.random(),
      },
      {
        external: true,
        linkName: "Full Card BG Photo (took by me)",
        linkPath: "https://tomadto.s-ul.eu/izA5FbYw",
        key: Math.random(),
      },
    ],
    bgClass: "b-2009TA",
    key: Math.random(),
  },
  {
    title: "Creating Adaptable Devices for Learning Maker Skills",
    date: "May 2021",
    text:
      "UROP for HCI Engineering Lab at MIT CSAIL. An investigation into making a universal device that attaches onto a maker tool to allow users to teach themselves how to use a tool faster. In the semester, I produced a wireframe of useful metrics to track, and a physical mockup for sensing tool interaction.",
    link: [
      {
        external: true,
        linkName: "Video of Mockup",
        linkPath: "https://tomadto.s-ul.eu/content/bPjExdsV",
        key: Math.random(),
      },
      {
        external: true,
        linkName: "Presentation",
        linkPath: "https://tomadto.s-ul.eu/content/DZhiBHvd",
        key: Math.random(),
      },
      {
        external: true,
        linkName: "Figma Project Link",
        linkPath:
          "https://www.figma.com/file/OOQPwjYjf1uePEN74sRLE8/high-level-tool-evaluation?node-id=0%3A1",
        key: Math.random(),
      },
    ],
    bgClass: "b-maker",
    key: Math.random(),
  },
  {
    title: "Eternal Return Data Visualization",
    date: "May 2021",
    text:
      "Data visualization of player statistics in the game Eternal Return (free on steam!) Made in p5.js as a part of a class at MIT (4.032: Design Studio: Information and Visualization). I took what we learned in the class and developed a visualization of a raw spreadsheet of aggregated video game character statistics into a digestible and compelling data visualization.",
    link: [
      {
        external: true,
        linkName: "Website",
        linkPath: "https://erbs.tomadto.site",
        key: Math.random(),
      },
    ],
    bgClass: "b-erbs",
    key: Math.random(),
  },
  {
    title: "Spartan",
    date: "Dec 2020",
    text: `A boxing training device for intermediate-level boxers. Developed as a part of 2.s009, *Explorations in Product Design*. We decided on this product after 6 weeks of ideation, modeling, and user research & testing. I was a System Integrator and, along with engineering the product, I delegated tasks for each milestone among team members.`,
    link: [
      {
        external: true,
        linkName: "Product sheet",
        linkPath: "https://s009kindness.com/images/productSheets/red_spartan_product_sheet_sm.pdf",
        key: Math.random(),
      },
      {
        external: true,
        linkName: "2.s009 2020 website",
        linkPath: "https://s009kindness.com/",
        key: Math.random(),
      },
      {
        external: true,
        linkName: "additional info",
        linkPath: "https://tomadto.s-ul.eu/content/x5AlJQjG#page=2",
        key: Math.random(),
      },
    ],
    // more: {
    //   path: "/projects/spartan",
    // },
    story: {
      goal:
        "Working in a team of 16, to create and launch a user-centered product prototype in one semester.",
      role: "co-System Integrator",
      context:
        "for the class 2.s009 (Explorations in Product Design) at MIT (a condensed, COVID version of MIT 2.009)",
      longText:
        "My team developed Spartan, a boxing training device for people desiring to refine their defensive skills without the need of a training partner. We decided on this product after roughly 6 weeks of ideation, user research, and modeling. My role on the team was a System Integrator/”SI” (becoming a co-SI when the team merged halfway through the semester) and I worked to organize the team and delegate tasks to people for the next milestone. On the mechanical side, one notable problem was the type of mechanism we would use to actuate the arm that punches out. I worked on a solution that involved releasing a loaded spring to launch out a tethered ball quickly towards the user and powering a winch to retract the ball after. We created CAD models and laser cut out parts to test out this mechanism, but through various test models, we found that the other solution, a servo-powered 4 bar linkage, better met our predetermined specs, especially concerning the retraction speed of the arm. As we converged on the final product architecture, I helped design and fabricate parts on a waterjet and CNC mill and prepared renderings for our final presentation.",
    },
    bgClass: "b-spartan",
    key: Math.random(),
  },
  {
    title: "Wearemin",
    date: "Dec 2020",
    text: "Clothing that creates music from your movements and dance moves.",
    link: [
      {
        external: true,
        linkName: "Video",
        linkPath: "https://tomadto.s-ul.eu/content/ajSO5m3n",
        key: Math.random(),
      },
    ],
    bgClass: "b-wearemin",
    key: Math.random(),
  },
  {
    title: "study garden",
    date: "Jan 2020",
    text:
      "A study tracking website where plants grow as the user spends more time studying. Developed as a part of web.lab 2020. Personally did all of the back end and some of the front-end/UI, especially on the study page. Developed using React, node.js+express, and MongoDB+Mongoose.",
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
        linkPath: "https://github.com/tomadto/studygarden",
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
    title: "VCaR, a 2030 Museum Experience",
    date: "Dec 2019",
    text: `2.s972 (Making Virtual Reality and Immersive Experiences) project. Made in Unity/SteamVR.  
      *Combustion engines have moved from being on roads to being in museums. Our VR experience is a museum experience that we envision for 2030...*`,
    link: [
      {
        external: true,
        linkName: "Brochure",
        linkPath: "https://tomadto.s-ul.eu/content/emni5xLS",
        key: Math.random(),
      },
      {
        external: true,
        linkName: "Final Presentation",
        linkPath: "https://tomadto.s-ul.eu/content/9AJ8p5yw",
        key: Math.random(),
      },
      {
        external: true,
        linkName: "Final Video",
        linkPath: "https://tomadto.s-ul.eu/content/MGLHnAdn",
        key: Math.random(),
      },
    ],
    bgClass: "b-vcar",
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
    date: "Dec 2019",
    text: "4.500, *Design Computation*, final project. Designed in Rhino 6, rendered in 3DS Max",
    //link: [{ linkName: "coming soon", linkPath: "/projects", key: Math.random() }],
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
    date: "Aug 2019",
    text: "Undergraduate research in the Human Systems Lab in MIT AeroAstro.",
    //link: [{ linkName: "coming soon", linkPath: "/projects", key: Math.random() }],
    bgClass: "b-buttonbox",
    key: Math.random(),
  },
  {
    title: "Flipstream",
    date: "May 2019",
    text: "Final competition robot for MIT 2.007, *Design and Manufacturing I*.",
    link: [
      {
        external: true,
        linkName: "Robot overview",
        linkPath: "https://tomadto.s-ul.eu/content/SYaYkrmG",
        key: Math.random(),
      },
      {
        external: true,
        linkName: "read more",
        linkPath: "https://tomadto.s-ul.eu/content/x5AlJQjG#page=3",
        key: Math.random(),
      },
    ],
    bgClass: "b-2007",
    key: Math.random(),
  },

  {
    title: "MIT Motorsports",
    date: "Jun 2018",
    text: "Aero subteam member, worked on the diffuser/underbody aero",
    link: [
      {
        external: true,
        linkName: "read more",
        linkPath: "https://tomadto.s-ul.eu/content/x5AlJQjG#page=4",
        key: Math.random(),
      },
    ],
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
      {
        external: true,
        linkName: "read more",
        linkPath: "https://tomadto.s-ul.eu/content/x5AlJQjG#page=6",
        key: Math.random(),
      },
    ],
    bgClass: "b-200b",
    key: Math.random(),
  },
];

//TODO: put figma doodles in
export default ProjListing;
