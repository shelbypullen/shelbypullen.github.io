export const bio = [
  "I am a second year <strong>Ph.D. Student in the Department of Mechanical and Aerospace Engineering</strong> at the University of California, San Diego, \
  working under the supervision of <a href='https://kramer.ucsd.edu/index.html' target='_blank'>Prof. Boris Kramer</a>.",
  "My current research interests are in optimization algorithms in the field of model order reductions for complex models such as Partial \
  Differential Equations. Specifically, I am currently working on algorithms that recast PDEs into an specific form, namely quadratization and \
  polynomialization for PDEs, from symbolical models and from data.",
  "In 2024 I obtained both my B.Sc. in Computer Science Engineering and my M.Sc. in Computer Science \
  from <a href='https://uchile.cl/' target='_blank'>Universidad de Chile</a>.",
  
  // "I come from city called Coro, close to the coast in Venezuela. Thanks to my family's support, I was able to persue a carreer "
  // Talk about my internship in France
  // Talk about how passionate I am about teaching
];

// News: date and details only (e.g. paper accepted, award, etc.)
export const news = [
  {
    date: "February 2026",
    details: "The preprint of our paper <a href='https://arxiv.org/abs/2602.22371' target='_blank'>Quadratization of Autonomous Partial Differential Equations: Theory and Algorithms</a> is now available on arXiv! \
    In this collaboration with Prof. Gleb Pogudin at École Polytechnique, we developed theory and software for finding quadratic transformations of nonlinear PDEs to facilitate their analysis, control, and model reduction. It's been truly exciting to work on this and \
    bridge my background in computer science with my interest in mathematics and systems theory."
  },
  {
    date: "September-December 2025",
    details: "I really enyojed being the teaching assistant for the <em>Linear Systems Theory</em> (MAE 280A) course at UC San Diego. In this PhD level course, the students learned about linear algebra core concepts, and properties of linear dynamical systems.",
  },
  {
    date: "October 2025",
    details: "I have become the president of the <a href='https://sites.google.com/eng.ucsd.edu/mae-graduate-women' target='_blank'>UCSD MAE Graduate Women</a> group! Through our events, we aim to promote and encourage a sense of inclusive community \
    in the MAE department at UCSD."
  },
    {
      date: "September 2024",
      details: "I moved from Santiago, Chile to San Diego, CA to start my Ph.D. in Mechanical and Aerospace Engineering at UC San Diego!",
    },

];

// Events: date, title, link (optional), and details (workshops, conferences, etc.)
export const events = [
  {
    date: "May 2026",
    title: "Young Mathematicians in Model Order Reduction (YMMOR) conference",
    link: "https://seminar.math.vt.edu/ymmor/",
    details: "Hosted by Virginia Tech in Blacksburg, Virginia. I gave a <strong>talk</strong> on my work on quadratization for nonlinear PDEs. \
    It was a great experience to meet other early-career researchers in the field of model reduction and learn about their work!",
  },
  {
    date: "December 2025",
    title: "US Research Software Sustainability Institute (URSSI) workshop",
    link: "https://urssi.us/blog/2025/11/05/applications-now-open-for-the-2025-urssi-winter-school-in-research-software-engineering/",
    details: "Hosted by Oregon State University. Here, we learned and reviewed best practices for developing research software.",
  },
  {
    date: "October 2025",
    title: "46th Southern California Control Workshop",
    link: "https://sites.uci.edu/controlworkshop/",
    details: "Hosted by UC Irvine. There, I got to listen to technical presentations by local graduate students and postdoctoral researchers in the area of systems and control.",
  },
  {
    date: "June 2025",
    title: "Early graduate research in applied mathematics (EaGR) workshop",
    link: "https://aimath.org/workshops/upcoming/eagr-am/",
    details: "Here, I learned about computer programming, mathematical modeling, and data management.",
  },
  {
    date: "September 2024",
    title: "Model Reduction and Surrogate Modeling (MORe) Conference",
    link: "https://more2024.sciencesconf.org/",
    details: "Conference held in La Jolla, CA. Here, I had the opportunity to present my work on quadratization for PDEs through a <strong>poster</strong>. It was a great experience to meet other researchers in the field of model reduction and learn about their work and the state-of-the-art.",
  },
  {
    date: "December 2023",
    title: "Center for Biotechnology and Bioengineering (CeBiB) Workshop",
    link: "https://www.cebib-chile.com/workshop2023",
    details: "Held in Santiago, Chile, I gave a <strong>talk</strong> on my work on optimal and monomial quadratizations for PDEs and presented a <strong>poster</strong> on the same subject.",
  },
];


// Publications: category, authors, year, title, status, links, tags. Optional citation: { heading, refs, bibtex } (same as software).
export const publications = [
  {
    category: "preprints",
    authors: ["Olivieri A.", "Pogudin G.", "Kramer B."],
    year: "2026",
    title: "Quadratization of Autonomous Partial Differential Equations: Theory and Algorithms",
    status: "submitted",
    links: [{ label: "Preprint", url: "https://arxiv.org/abs/2602.22371" }],
    tags: ["Symbolic computation", "nonlinear dynamical systems", "partial differential equations",
      "combinatorial optimization", "model reduction"],
    citation: {
      heading: "Please cite this work as:",
      refs: [
        "Olivieri A., Pogudin G., Kramer B. (2026). Quadratization of Autonomous Partial Differential Equations: Theory and Algorithms. arXiv preprint: \
        <a href=\"https://arxiv.org/abs/2602.22371\" target=\"_blank\" rel=\"noopener\">arxiv:2602.22371</a>",
      ],
      bibtex: `@misc{olivieri2026quadratizationautonomouspartialdifferential,
      title={Quadratization of Autonomous Partial Differential Equations: Theory and Algorithms}, 
      author={Albani Olivieri and Gleb Pogudin and Boris Kramer},
      year={2026},
      eprint={2602.22371},
      archivePrefix={arXiv},
      primaryClass={cs.SC},
      url={https://arxiv.org/abs/2602.22371}, 
}`,
    },
  },
  {
    category: "thesis",
    authors: ["Olivieri A.", "Supervisors: Navarro, G., Pogudin, G."],
    year: "2024",
    title: "Monomial and Optimal Quadratization for PDEs",
    status: "",
    links: [],
    tags: ["Symbolic Computation", "PDEs", "Discrete optimization", "Branch and bound", "Incremental Nearest Neighbor"],
  },
];
