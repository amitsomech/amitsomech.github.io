// ============================================
// SITE DATA - Edit this file to update content
// ============================================

const SITE_DATA = {
  // ----------------
  // PROFILE
  // ----------------
  profile: {
    name: "Amit Somech",
    title: "Senior Lecturer (Assistant Professor)",
    department: "Computer Science Department",
    university: "Bar-Ilan University",
    photo: "img/profile.jpg",
    emailEncoded: "c29tZWNoYUBiaXUuYWMuaWw=",
    office: "Building 503, Room 203",
    links: {
      scholar: "https://scholar.google.com/citations?user=GFIUo14AAAAJ&hl=en",
      dblp: "https://dblp.org/pid/147/1212.html",
      github: "https://github.com/analysis-bots"
    }
  },

  // ----------------
  // ABOUT
  // ----------------
  about: `Hi! I am a Senior Lecturer at the <a href="https://cs.biu.ac.il/" target="_blank" class="text-primary-600 hover:underline">Computer Science Department</a> at <a href="https://www.biu.ac.il/" target="_blank" class="text-primary-600 hover:underline">Bar-Ilan University</a>. <br><br> My research focuses on building autonomous analytical agents for exploring, analyzing, and explaining structured data. I am particularly interested in studying the capabilities and limitations of large language models in the context of tabular data, and in developing principled methods that bridge statistical analysis, data management, and AI.
  <br><br>
  Prior to joining BIU, I completed my PhD at <a href="https://www.tau.ac.il/" target="_blank" class="text-primary-600 hover:underline">Tel Aviv University</a> under the supervision of <a href="https://www.cs.tau.ac.il/~milo/" target="_blank" class="text-primary-600 hover:underline">Prof. Tova Milo</a>. Before that, I completed a BSc with a double major in Middle Eastern Studies and Computer Science at <a href="https://www.haifa.ac.il/" target="_blank" class="text-primary-600 hover:underline">Haifa University</a>, as part of the Havatzalot program.`,

  // ----------------
  // RESEARCH INTERESTS
  // ----------------
  researchInterests: [
    "Agentic Analytics & Automated Data Science",
    "Reasoning over Tabular Data with LLMs",
    "Explainability for Data Exploration & Mining"
  ],

  // ----------------
  // RESEARCH PROJECTS
  // ----------------
  researchProjects: [
    {
      title: "LLMs for Tabular Data",
      subtitle: "Joint research with Oren Glickman",
      description: "Analyzing the ability of large language models to generate and process structured, tabular data. We focus on generating on-demand data tables from LLMs and tabular data verification.",
      papers: ["Generating Tables (KnowledgeNLP 2025)"],
      links: [
        { label: "WikiTabGen", url: "https://github.com/analysis-bots/WikiTabGen" }
      ],
      isNew: true
    },
    {
      title: "Explainability for Rule-Based Data Insights",
      subtitle: "Joint research with Susan B. Davidson",
      description: "Developing a scientific framework for analyzing and explaining rule-based insights, including models for measuring contribution of data elements and notions of explainability and provenance of rules.",
      papers: ["SHARQ (SIGMOD 2025)", "PY-SHARQ Demo (SIGMOD 2025)"],
      links: [
        { label: "SHARQ", url: "https://github.com/analysis-bots/SHARQ" }
      ],
      isNew: true
    },
    {
      title: "Agentic Data Exploration & Analysis",
      description: "Building autonomous agents that explore datasets, refine queries, and generate personalized analytical notebooks. Our systems use combinations of Deep RL and LLMs.",
      papers: ["LINX (EDBT 2025)", "OmniTune (SIGMOD 2025)", "ATENA-PRO (SIGMOD 2023)", "ATENA (SIGMOD 2021)"],
      links: [
        { label: "LINX", url: "https://github.com/analysis-bots/LINX" },
        { label: "OmniTune", url: "https://github.com/analysis-bots/OmniTune" },
        { label: "ATENA", url: "https://github.com/TAU-DB/ATENA-A-EDA" }
      ],
      isNew: true
    },
    {
      title: "Explainability for Analytical Queries",
      description: "Developing frameworks that explain users' analytical steps and highlight what makes query results interesting. We further built PD-EXPLAIN—a Python library that wraps Pandas DataFrames with automatic explanations.",
      papers: ["FEDEX (VLDB 2022)", "PD-Explain (VLDB 2024)", "ExplainED Demo (SIGMOD 2022)"],
      links: [
        { label: "PD-EXPLAIN GitHub", url: "https://github.com/analysis-bots/pd-explain" },
        { label: "PyPI", url: "https://pypi.org/project/pd-explain/" }
      ]
    },
    {
      title: "Explainability for Unsupervised Learning",
      description: "Building explainability frameworks for unsupervised ML pipelines. Our work covers explaining clustering results (Cluster-Explorer), multivariate time-series classification (EFFECTS), and anomaly detection systems.",
      papers: ["Cluster-Explorer (VLDB 2025)", "Cluster-Explorer Demo (CIKM 2023)", "EFFECTS Demo (CIKM 2023)"],
      links: [
        { label: "Cluster-Explorer", url: "https://github.com/analysis-bots/cluster-explorer" },
        { label: "EFFECTS", url: "https://github.com/analysis-bots/EFFECTS" }
      ]
    },
    {
      title: "REACT: Recommendations for Data Analysis",
      description: "A recommender system for interactive data analysis platforms, providing personalized next-action suggestions based on previous analyst sessions.",
      papers: ["REACT (KDD 2018)", "REACT Demo (SIGMOD 2016)"]
    }
  ],

  // ----------------
  // PUBLICATIONS
  // ----------------
  publications: [
    // 2025
    {
      title: "Explaining Black-Box Clustering Pipelines With Cluster-Explorer",
      authors: "Sariel Ofek, Amit Somech",
      venue: "VLDB",
      year: 2025,
      type: "full",
      link: "https://www.vldb.org/pvldb/vol18/p1495-somech.pdf"
    },
    {
      title: "LINX: A Language Driven Generative System for Goal-Oriented Automated Data Exploration",
      authors: "Tavor Lipman, Tova Milo, Amit Somech, Tomer Wolfson, Oz Zafar",
      venue: "EDBT",
      year: 2025,
      type: "full",
      link: "https://doi.org/10.48786/edbt.2025.22"
    },
    {
      title: "SHARQ: Explainability Framework for Association Rules on Relational Data",
      authors: "Hadar Ben-Efraim, Susan B. Davidson, Amit Somech",
      venue: "SIGMOD",
      year: 2025,
      type: "full",
      link: "https://dl.acm.org/doi/abs/10.1145/3709726"
    },
    {
      title: "PY-SHARQ: A Holistic Python Library for Explaining Association Rules on Relational Data",
      authors: "Hadar Ben-Efraim, Susan B. Davidson, Amit Somech",
      venue: "SIGMOD",
      year: 2025,
      type: "demo",
      link: "https://doi.org/10.1145/3722212.3725125"
    },
    {
      title: "OmniTune: A Universal Framework for Query Refinement via LLMs",
      authors: "Eldar Hacohen, Yuval Moskovitch, Amit Somech",
      venue: "SIGMOD",
      year: 2025,
      type: "demo",
      link: "https://doi.org/10.1145/3722212.3725121"
    },
    {
      title: "Generating Tables from the Parametric Knowledge of Language Models",
      authors: "Yevgeni Berkovitch, Oren Glickman, Amit Somech, Tomer Wolfson",
      venue: "KnowledgeNLP Workshop",
      year: 2025,
      type: "workshop",
      link: "https://aclanthology.org/2025.knowledgenlp-1.4/"
    },
    // 2024
    {
      title: "PD-Explain: A Unified Python-native Framework for Query Explanations Over DataFrames",
      authors: "Itay Elyashiv, Amir Gilad, Edna Isakov, Tal Tikochinsky, Amit Somech",
      venue: "VLDB",
      year: 2024,
      type: "demo",
      link: "https://www.vldb.org/pvldb/vol17/p4473-gilad.pdf"
    },
  
    // 2023
    {
      title: "EFFECTS: Explorable and Explainable Feature Extraction Framework for Multivariate Time-Series Classification",
      authors: "Ido Ikar, Amit Somech",
      venue: "CIKM",
      year: 2023,
      type: "demo",
      pdf: "pdf/effects-demo.pdf",
      video: "https://drive.google.com/file/d/1lMxNrdWD1o2DKZw1NfdoEhXt-D9Y8ron/view"
    },
    {
      title: "Cluster-Explorer: Explaining Black-Box Clustering Results",
      authors: "Sariel Ofek, Amit Somech",
      venue: "CIKM",
      year: 2023,
      type: "demo",
      pdf: "pdf/clusterexplorer-demo.pdf",
      video: "https://drive.google.com/file/d/1vgHYsf1TbHnHf3DfQ5je4TrBaiiqIB0v/view"
    },
    {
      title: "ATENA-PRO: Generating Personalized Exploration Notebooks with Constrained Reinforcement Learning",
      authors: "Tavor Lipman, Tova Milo, Amit Somech",
      venue: "SIGMOD",
      year: 2023,
      type: "demo",
      pdf: "pdf/atenapro-demo.pdf",
      video: "https://drive.google.com/file/d/1LVsPWkxHMc7SCDJTjqmfaKIdeOMfM4Cg/view"
    },
    // 2022
    {
      title: "SubStrat: A Subset-Based Strategy for Faster AutoML",
      authors: "Teddy Lazebnik, Amit Somech",
      venue: "VLDB",
      year: 2022,
      type: "full",
      pdf: "pdf/substrat-full.pdf",
      links: [
        { label: "Demo", url: "pdf/substrat-demo.pdf" },
        { label: "GitHub", url: "https://github.com/analysis-bots/substrat" }
      ]
    },
    {
      title: "SubTab: Data Exploration with Informative Sub-Tables",
      authors: "Kathy Razmadze, Yael Amsterdamer, Amit Somech, Susan B. Davidson, Tova Milo",
      venue: "SIGMOD",
      year: 2022,
      type: "demo",
      link: "https://doi.org/10.1145/3514221.3520154"
    },
    {
      title: "FEDEX: An Explainability Framework for Data Exploration Steps",
      authors: "Ori Bar El, Tova Milo, Amit Somech",
      venue: "VLDB",
      year: 2022,
      type: "full",
      pdf: "pdf/fedex-full.pdf"
    },
    {
      title: "ExplainED: Explanations for EDA Notebooks",
      authors: "Ori Bar El, Tova Milo, Amit Somech",
      venue: "SIGMOD",
      year: 2022,
      type: "demo",
      pdf: "pdf/ExplainED_demo.pdf"
    },
    // 2021
    {
      title: "Automatically Generating Data Exploration Sessions Using Deep Reinforcement Learning",
      authors: "Ori Bar El, Tova Milo, Amit Somech",
      venue: "SIGMOD",
      year: 2021,
      type: "full",
      pdf: "pdf/atena_sigmod.pdf"
    },
    {
      title: "Towards Autonomous, Hands-Free Data Exploration",
      authors: "Tova Milo, Amit Somech",
      venue: "CIDR",
      year: 2021,
      type: "full",
      pdf: "pdf/HFE-VISION.PDF"
    },
    // 2019
    {
      title: "Predicting 'What is Interesting' by Mining Interactive-Data-Analysis Session Logs",
      authors: "Tova Milo, Chai Ozeri, Amit Somech",
      venue: "EDBT",
      year: 2019,
      type: "full",
      pdf: "pdf/Interestingness_edbt.pdf"
    },
    {
      title: "Boosting SimRank with Semantics",
      authors: "Tova Milo, Amit Somech, Brit Youngmann",
      venue: "EDBT",
      year: 2019,
      type: "full",
      pdf: "pdf/semsim_full.pdf"
    },
    {
      title: "SimMeme: A Search Engine for Internet Memes",
      authors: "Tova Milo, Amit Somech, Brit Youngmann",
      venue: "ICDE",
      year: 2019,
      type: "full",
      link: "https://ieeexplore.ieee.org/abstract/document/8731489"
    },
    // 2018
    {
      title: "Next-step Suggestions for Modern Interactive Data Analysis Platforms",
      authors: "Tova Milo, Amit Somech",
      venue: "KDD",
      year: 2018,
      type: "full",
      pdf: "pdf/react.pdf",
      video: "https://www.youtube.com/watch?v=9XxNrmeBt_I"
    },
    // 2016
    {
      title: "December: A Declarative Tool for Crowd Member Selection",
      authors: "Yael Amsterdamer, Tova Milo, Amit Somech, Brit Youngmann",
      venue: "VLDB",
      year: 2016,
      type: "demo",
      pdf: "pdf/december_demo.pdf"
    },
    {
      title: "REACT: Context-Sensitive Recommendations for Data Analysis",
      authors: "Tova Milo, Amit Somech",
      venue: "SIGMOD",
      year: 2016,
      type: "demo",
      pdf: "pdf/react_demo.pdf"
    },
    // 2015
    {
      title: "Managing General and Individual Knowledge in Crowd Mining Applications",
      authors: "Yael Amsterdamer, Susan B. Davidson, Anna Kukliansky, Tova Milo, Slava Novgorodov, Amit Somech",
      venue: "CIDR",
      year: 2015,
      type: "full",
      pdf: "pdf/CIDR_Crowd-mining.pdf"
    },
    // 2014
    {
      title: "OASSIS: Query Driven Crowd Mining",
      authors: "Yael Amsterdamer, Susan B. Davidson, Tova Milo, Slava Novgorodov, Amit Somech",
      venue: "SIGMOD",
      year: 2014,
      type: "full",
      pdf: "pdf/oassis_fullpaper.pdf"
    },
    {
      title: "Ontology Assisted Crowd Mining",
      authors: "Yael Amsterdamer, Susan B. Davidson, Tova Milo, Slava Novgorodov, Amit Somech",
      venue: "VLDB",
      year: 2014,
      type: "demo",
      pdf: "pdf/oassis_demo.pdf"
    }
  ],

  // ----------------
  // TEACHING
  // ----------------
  teaching: {
    current: [
      {
        name: "Database Systems",
        years: "2022 - Present",
        url: "https://shoham.biu.ac.il/BiuCoursesViewer/CourseDetails.aspx?lid=768348",
        description: "Principles of using, designing, and maintaining database systems including effective querying, schema planning, and handling large-scale data."
      },
      {
        name: "Tabular Data Science",
        years: "2021 - Present",
        url: "https://shoham.biu.ac.il/BiuCoursesViewer/CourseDetails.aspx?lid=766725",
        description: "In-depth review of the data scientific pipeline from a data-centric perspective, covering data cleaning, visualization, pattern mining, and model explainability."
      },
      {
        name: "Seminar: Automation and ML in Tabular Data Analytics",
        years: "2021 - Present",
        url: "https://shoham.biu.ac.il/BiuCoursesViewer/CourseDetails.aspx?lid=766766",
        description: "Advanced seminar focusing on automated solutions for data analysis, science, and mining."
      }
    ]
  },

  // ----------------
  // RECRUITING
  // ----------------
  recruiting: {
    intro: "Our lab is always looking for bright and motivated people. We have several open positions for MSc and PhD candidates, as well as postdoctoral research positions.",
    details: "We are working on various research topics revolving around better utilizing and understanding data. We also seek undergrads and project-track MSc students with strong engineering skills to help build open-source implementations of our research frameworks.",
    projects: [
      { name: "LINX", url: "https://github.com/analysis-bots/LINX" },
      { name: "OmniTune", url: "https://github.com/analysis-bots/OmniTune" },
      { name: "PD-EXPLAIN", url: "https://github.com/analysis-bots/pd-explain" }
    ],
    cta: "If this sounds interesting, review the Research section and Publications, then send me an email to schedule a talk!"
  }
};
