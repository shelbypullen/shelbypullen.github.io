export const bio = [
  "I am a first year <strong>Ph.D. Student in the Department of Mechanical and Aerospace Engineering</strong> at the University of California, San Diego, \
  working under the supervision of <a href='https://kramer.ucsd.edu/index.html' target='_blank'>Prof. Boris Kramer</a>.",
  "My current research interests are in designing metamaterials for kinetic energy dissipation under unknown impact conditions. \
  I work collaboratively with the <a href='https://shape.ucsd.edu' target='_blank'>PSAAP SHAPE Center</a> at UCSD to perform the uncertainty quantification in the design process.",
  "In 2025, I obtained both my B.Sc. in Mechanical Engineering with a concentration in Aerospace Engineering and a minor in Mathematics \
  from <a href='https://www.gwu.edu' target='_blank'>The George Washington University</a>.",
  
];

// News: date and details only (e.g. paper accepted, award, etc.)
export const news = [
  {
    date: "August 2026",
    details: "I will be attending the workshop on High-Performance Computing and Data Science at the San Diego Supercomputer Center. I'm excited to learn about how to efficiently map computational problems onto HPC architectures."
  },
    {
      date: "September 2025",
      details: "I started my Ph.D. in Mechanical and Aerospace Engineering at UC San Diego after moving from Washington, DC.",
    },

];

// Events: date, title, link (optional), and details (workshops, conferences, etc.)
export const events = [
  {
    date: "August 2026",
    title: " HPC & Data Science Summer Institute",
    link: "https://na.eventscloud.com/website/92724/",
    details: "Hosted by San Diego Supercomputer Center in San Diego, CA. I will attend a full week of lectures and hands-on experience working with supercomputers.",
  },
  
];

// Publications: category, authors, year, title, status, links, tags. Optional citation: { heading, refs, bibtex } (same as software).
export const publications = [
  {
    category: "ucsd",
    authors: ["Under Dr. Boris Kramer"],
    title: "UC San Diego",
    tags: ["My current research focuses on performing Reliability-Based Design Optimization of metamaterials for kinetic energy dissipation under high impact scenarios. \
           My work uses a discrete chain of unit cells comprised of masses, nonlinear springs, and dampers to represent the metamaterial. This MATLAB-based discrete element model \
           simulates the material's dynamic response by solving a coupled system of ordinary differential equations derived from the equations of motion. I work collaboratively within \
           the <a href='https://shape.ucsd.edu' target='_blank'>PSAAP SHAPE Center</a> at UCSD to bring the designs to life for experimental testing."],
  },
  {
    category: "gwu",
    authors: ["Under Dr. Saniya LeBlanc"],
    title: "George Washington University",
    tags: ["My research at the <a href='https://www.leblanclab.com/' target='_blank'>LeBlanc Lab</a> focused on investigating biological mechanisms that reduce hydrodynamic noise \
           in varying animal species for <a href='https://conep.engineering.gwu.edu/' target='_blank'>naval applications</a>. I used stereolithography (SLA) 3D printing to replace \
           surface textures for experimental testing in a laminar flow water channel. While at GWU, I also conducted an independent data science project, looking into the electrical loads \
           for every zipcode in Washington, DC throughout a calendar year."],
  }
];

 
// Teaching: title (class name), date, text (description)
export const teaching = [
  {
    title: "Introduction to Engineering Computations (MAE 1117) - Learning Assistant",
    date: "Fall 2023",
    text: "<strong>Undegraduate</strong> course at the <strong>Department of Mechanical and Aerospace Engineering</strong>, <strong>George Washington University</strong>. \
    This course covers an overview of Python for engineering applications, including the libraries NumPy, SciPy, Pandas, and Matplotlib. \
      I hosted office hours and provided in-class assistance to the professor.",
  },
];
