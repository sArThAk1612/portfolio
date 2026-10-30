import type { SiteContent } from "../types/content";

// All public site copy and project case studies live here. Keep factual updates in this file.
export const defaultContent: SiteContent = {
  home: {
    positioning: "An engineering student exploring the intersection of technology, data science, finance and business — interested in building products, solving problems and understanding how systems work.",
    education: "Engineering student at Veermata Jijabai Technological Institute, Mumbai, pursuing Textile Engineering with a minor in Data Science.",
    location: "Mumbai, India", portrait: "/images/profile/sarthak-gupta-homepage.png", selectedExperience: "Contributed to the development and deployment of internal software products as part of a four-member development team."
  },
  about: {
    portrait: "/images/profile/sarthak-gupta-profile.png",
    intro: "hello!\n\ni'm sarthak, a VJTI engineering student pursuing Textile Engineering with a minor in Data Science.\n\ni've always been interested in understanding how things work, whether that's a physical system, a piece of software, a financial market or the business behind a product. that curiosity has taken me across different spaces — from robotics and full-stack applications to machine learning, financial markets and industrial research.\n\ni enjoy working on problems that require me to learn something unfamiliar, connect ideas from different disciplines and turn concepts into something tangible. i'm still figuring out exactly where i want to specialise, but i like having the freedom to explore before deciding.",
    interestIntro: "Where technology, engineering, data and business intersect. Some areas I've explored through projects; others I'm still learning.",
    interests: [
      { category: "Technology", items: ["Software Development", "Full-Stack Applications", "System Design"] },
      { category: "Data & Intelligence", items: ["Machine Learning", "Data Science", "NLP", "Financial Modelling"] },
      { category: "Finance & Business", items: ["Financial Markets", "Investment Research", "Consulting", "Product Thinking"] },
      { category: "Engineering", items: ["Textile Engineering", "Materials", "Process Optimisation"] },
      { category: "Research & Innovation", items: ["Applied Research", "Problem Solving", "Emerging Technologies"] }
    ],
    tools: [
      { category: "Programming", items: ["Python", "C++", "SQL"] },
      { category: "Data & Machine Learning", items: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "FinBERT", "Matplotlib", "Seaborn"] },
      { category: "Development", items: ["React", "TypeScript", "FastAPI", "Tailwind CSS"] },
      { category: "Platforms & Tools", items: ["Git", "GitHub", "Supabase", "PostgreSQL", "SQLite", "Vite", "Vercel", "Excel", "PowerPoint", "Jupyter"] }
    ],
    beyond: {
      typing: { wpm: "123", accuracy: "98%", duration: "15 seconds", caption: "123 WPM. I type faster than I think. Sometimes it shows.", image: "/images/monkeytype/monkeytype-15s-123wpm-98-accuracy.png" },
      formula1: { supporter: "Ferrari", image: "", alt: "" },
      football: { supporter: "Manchester United", image: "", alt: "" }, sportingLine: "Supporting Ferrari and Manchester United. Apparently, I enjoy character development.",
      activities: "Usually doing something rather than sitting still.\nCycling, playing sports, getting a workout in or occasionally picking up a guitar.\nCricket is an easy way to lose track of an afternoon.\nThere's usually a match, race or something interesting happening somewhere.\nI tend to have more interests than free time, but I haven't quite decided to change that."
    }
  },
  projects: [
    {
      slug: "jalsetu", number: "01", title: "JalSetu", category: "Geospatial Technology / Sustainability / Full-Stack Development", context: "Smart India Hackathon · Problem statement #46", status: "In Development",
      description: "An intelligent rainwater-harvesting assessment platform that combines rooftop mapping, environmental data, recharge feasibility analysis and financial recommendations to help users make informed water-management decisions.",
      technologies: ["React 19", "TypeScript", "Supabase", "Leaflet", "Turf.js", "Open-Meteo", "SoilGrids"], href: "https://github.com/sArThAk1612/jalsetu",
      sections: [
        { title: "Overview", paragraphs: ["JalSetu is a web application designed to help households, institutions, property owners and farmers assess rooftop rainwater-harvesting potential and explore suitable water-management solutions.", "The platform brings together property mapping, environmental datasets, water calculations, financial analysis and government-scheme recommendations. It is currently in development."] },
        { title: "The problem", paragraphs: ["Potential users often lack accessible, property-specific information about rainfall, rooftop collection, soil suitability, groundwater recharge, storage requirements, implementation costs and relevant schemes."], bullets: ["Estimating rooftop collection and tank capacity", "Understanding soil and recharge suitability", "Comparing implementation costs, savings and payback", "Finding potentially relevant government programmes"] },
        { title: "Property assessment", paragraphs: ["The assessment flow combines property details with satellite mapping. Users can trace a rooftop polygon or enter an area manually; Turf.js calculates polygon area for downstream estimates."], bullets: ["Supabase authentication and protected dashboard", "Saved assessment history and property details", "City, state, pincode and coordinates", "Roof material selection and rooftop tracing"] },
        { title: "Environmental data & calculations", paragraphs: ["Open-Meteo historical rainfall and air-quality information, alongside SoilGrids / ISRIC soil information, provide environmental context. Snapshots keep assessment inputs together.", "Harvestable Water = Roof Area × Annual Rainfall × Runoff Coefficient × Collection Efficiency. Household size and per-capita consumption add a demand estimate."] },
        { title: "Recharge and financial screening", paragraphs: ["Available open space and soil suitability inform preliminary classifications: potentially suitable, caution, unsuitable or not assessed. These are screening recommendations, not engineering certifications.", "Storage and financial estimates cover tank capacity, filters, plumbing, storage and recharge structures, estimated savings and payback analysis. Values depend on available inputs and assumptions."] },
        { title: "Scheme advisor", paragraphs: ["A transparent profile-matching system compares state (30), district (20), urban/rural location (20), property type (10), user category (10) and existing infrastructure (10). It can surface Catch the Rain, Atal Bhujal Yojana, AMRUT 2.0, MGNREGA water-conservation works, PMKSY and Jalyukt Shivar.", "Recommendations are classified as most relevant, likely relevant or requiring verification. The experience does not claim definitive eligibility or a guaranteed subsidy."] },
        { title: "Ask JalSetu", paragraphs: ["A contextual assistant is designed to explain why a scheme was recommended, what documents may be needed, where to find an application process and which details still require confirmation. Answers must stay grounded in the scheme database and user profile."] },
        { title: "Engineering considerations", bullets: ["Turning rooftop polygons into useful area estimates", "Combining several environmental data sources", "Making assumptions and scheme matching transparent", "Separating preliminary feasibility screening from engineering certification", "Keeping mapping, calculations and scheme logic modular"] }
      ],
      diagram: { caption: "Conceptual system architecture · planned components", rows: [{ label: "Assessment", steps: ["User interface", "Property profile", "Map & rooftop polygon"] }, { label: "Analysis", steps: ["Environmental APIs", "Calculation engine", "Scheme matching"] }, { label: "Platform", steps: ["Supabase Auth", "PostgreSQL", "Assessment history"] }] },
      gallery: []
    },
    {
      slug: "shipsy-learning-hub", number: "02", title: "Shipsy Learning Hub", category: "Full-Stack Application / Learning Technology", context: "Shipsy · Four-member development team", status: "Successfully Deployed",
      description: "A full-stack internal Learning Management System developed to streamline employee onboarding and product enablement, featuring structured learning modules, backend-driven assessments, progress tracking, gamification and administrative analytics.",
      technologies: ["React", "TypeScript", "FastAPI", "SQLite", "Vite", "Vercel"],
      sections: [
        { title: "Overview", paragraphs: ["An internal learning platform for structured employee onboarding and product enablement. It contains ten logistics and product modules where employees can read training content, complete quizzes, track progress, earn badges and review learning history. Administrators can monitor learner performance.", "The application was developed collaboratively by a four-person team and successfully deployed. Shipsy content and employee information are confidential; this case study describes architecture without reproducing internal materials."] },
        { title: "Personal contribution", paragraphs: ["Worked across the full application as part of a four-member development team, contributing to frontend, backend, authentication, application functionality, testing and deployment.", "The official internship role was Business Operations Intern; development work was completed as a member of the full-stack team."] },
        { title: "Frontend experience", paragraphs: ["React, TypeScript, Vite, Tailwind CSS, React Router, Recharts and Lucide React support the dashboard, module reader, quiz, results, scorecard, badges, training library and admin dashboard. Protected routes, a typed API client and authentication context connect the interface to the backend."] },
        { title: "Backend and data model", paragraphs: ["A Python FastAPI backend with SQLAlchemy, Pydantic and SQLite serves module, quiz, progress, dashboard, scorecard, badge, training-resource and admin-analytics endpoints."], bullets: ["User and Module", "QuizQuestion and QuizAttempt", "UserProgress", "Badge and UserBadge"] },
        { title: "Authentication and request flow", paragraphs: ["Google OAuth 2.0 uses an authorisation-code flow through a Node-based Backend-for-Frontend integrated with the Vite server: browser → BFF → Google OAuth → BFF → React. API requests follow browser → BFF → FastAPI → SQLite.", "The implementation includes shipsy.io and shipsy.ai domain restriction, OpenID Connect user information, HTTP-only SameSite=Lax cookies, file-backed local sessions, signed stateless sessions for Vercel, a same-origin API proxy and HMAC-SHA256 request signing. FastAPI independently validates the signed method, path, identity and timestamp before using the identity for user-specific progress and scores."] },
        { title: "Role-based access", paragraphs: ["An ADMIN_EMAILS allow-list, admin session attribute and independent FastAPI authorization check protect administrative APIs. The backend returns HTTP 403 when the session lacks permission."] },
        { title: "Quiz and progress logic", paragraphs: ["Three tiers—Core Concepts, Operational Understanding, and Application & Decision Making—use easy, medium and hard questions. Correct answers stay on the server; the client submits option IDs, and FastAPI computes score, percentage and explanations.", "Each module has 80 quiz marks and 20 reading marks (100 total); ten modules total 1,000 marks. Retakes are allowed, best scores are preserved and each attempt is stored. A module is complete after required content is viewed and a quiz is submitted; the backend decides completion."] },
        { title: "Gamification, analytics & release", paragraphs: ["A server-side badge engine awards milestones such as First Step, Halfway There, LMS Graduate, Perfect Score and Knowledge Explorer. The admin dashboard supports learner search, filtering and sorting across quiz attempts, scores, completion, average score and completion rate.", "The product uses a Vite build, Vercel serverless functions, BFF routes, API proxy and FastAPI runtime. Test coverage addressed authentication, protected APIs, answer hiding, reading idempotency, scoring, best-score retention, user isolation, resources, admin access and attempt persistence."] }
      ],
      diagram: { caption: "Conceptual architecture · neutral overview, no internal data", rows: [{ label: "Learning", steps: ["React application", "Node / Vite BFF", "FastAPI service"] }, { label: "Identity", steps: ["Google OAuth", "Session boundary", "Role checks"] }, { label: "Platform", steps: ["SQLite", "Learning progress", "Vercel deployment"] }] },
      gallery: []
    },
    {
      slug: "financial-ml-stock-predictor", number: "03", title: "Financial ML Stock Predictor", category: "Machine Learning / Finance / NLP", context: "Independent project", status: "Project",
      description: "An end-to-end financial machine learning pipeline combining historical stock-market data with FinBERT-based news sentiment analysis to generate next-day stock price predictions and automated analysis reports.",
      technologies: ["Python", "yfinance", "FinBERT", "XGBoost", "Pandas"], href: "https://github.com/sArThAk1612/financial-ml-stock-predictor",
      sections: [
        { title: "Overview", paragraphs: ["The project explores how historical market data and financial news can be combined in a machine-learning pipeline for next-day stock-price prediction. The repository includes multiple stock datasets, including TSLA and META."] },
        { title: "Market and news inputs", paragraphs: ["Historical OHLCV data is collected with yfinance: date, open, high, low, close and volume. Financial headlines are collected using news APIs and/or web scraping; no single provider is assumed."] },
        { title: "Sentiment and modelling", paragraphs: ["FinBERT analyses financial-domain language and turns headlines into sentiment information that can be joined with numerical market data. Feature engineering combines the two streams without assuming a particular indicator or aggregation formula.", "XGBoost is used for next-day stock-price prediction. RMSE is the evaluation metric; a verified metric value is not available, so no performance result is claimed."] },
        { title: "Illustrative report output", paragraphs: ["Sample values shown below are illustrative only. They are not verified historical performance, a live forecast or investment advice."], bullets: ["TSLA · current $182.10 · predicted $185.40 · expected move +1.81%", "Illustrative confidence 0.67 · mostly positive news sentiment", "Example headline: Tesla expands AI self-driving program"] },
        { title: "Future scope", bullets: ["Backtesting and portfolio simulation", "BUY / SELL / HOLD signals", "LSTM and Transformer approaches", "A Streamlit dashboard"] }
      ],
      diagram: { caption: "Data pipeline", rows: [{ label: "Market stream", steps: ["yfinance", "OHLCV history", "Feature engineering"] }, { label: "News stream", steps: ["Headline collection", "FinBERT sentiment", "Feature engineering"] }, { label: "Output", steps: ["XGBoost", "Next-day estimate", "Analysis report"] }] },
      gallery: []
    },
    {
      slug: "fcc-industrials-research", number: "04", title: "Industrials Sector Research", category: "Financial Research / Macroeconomic Analysis", context: "Finance & Consulting Club, VJTI", status: "2025–2026 academic year",
      description: "Contributed to year-long industrials-sector research, tracking macroeconomic indicators, industry developments and investment themes through structured research reports and weekly publications.", technologies: ["Sector Research", "IIP", "PMI", "Credit Growth"],
      sections: [
        { title: "Overview", paragraphs: ["Worked with the Industrials research team across the 2025–2026 academic year, analysing sector developments, macroeconomic indicators, financial news and emerging trends."] },
        { title: "Research areas", bullets: ["Industrials news, company and sector developments, economic and policy changes", "IIP (Index of Industrial Production) as context for industrial output", "PMI (Purchasing Managers' Index) as context for manufacturing and business activity", "Credit growth and its relevance to industrial financing"] },
        { title: "Research workflow", paragraphs: ["Information gathering → indicator tracking → sector analysis → trend identification → research reports → presentation.", "Contributed to weekly structured research updates and presented findings to club leadership, connecting macroeconomic developments with sector-level implications."] },
        { title: "Publication context", paragraphs: ["A sample club publication is Issue #2, dated January 24, 2026, with Industrials research articles and research credit alongside Tanush Lokhande. This is one example of ongoing year-long research, not the entirety of the contribution."] }
      ],
      diagram: { caption: "Research workflow", rows: [{ label: "Inputs", steps: ["Sector news", "IIP · PMI", "Credit growth"] }, { label: "Analysis", steps: ["Indicator tracking", "Sector context", "Trend identification"] }, { label: "Outputs", steps: ["Weekly research", "Structured report", "Presentation"] }] },
      gallery: [
        { title: "FCC Newsline, Issue #3", caption: "February 21, 2026 · six-page issue", image: "/images/fcc/fcc-newsline-issue-3-february-2026.png", alt: "FCC Newsline cover page for issue 3, dated February 21, 2026" },
        { title: "India on the brink of a new industrial boom", caption: "Industrials research feature", image: "/images/fcc/industrials-india-industrial-boom-article.png", alt: "FCC Industrials page titled India on the brink of a new industrial boom" },
        { title: "Industrials sector overview", caption: "FCC sector overview", image: "/images/fcc/industrials-sector-overview.png", alt: "FCC research page introducing an industrials sector overview with article text and industrial site photograph" }
      ]
    },
    {
      slug: "wall-e", number: "05", title: "WALL-E — Self-Balancing Line-Following Robot", category: "Robotics / Embedded Systems / Control Systems", context: "Society of Robotics and Automation, VJTI · Team project", status: "Team Project",
      description: "A team-built self-balancing, line-following robot combining sensor-based path detection with dual PID control to maintain balance while navigating a marked path.", technologies: ["ESP32", "ESP-IDF", "Custom SRA PCB", "Light sensor array", "Dual PID", "Git"],
      sections: [
        { title: "Technical overview", paragraphs: ["WALL-E is a team-built robot from the Society of Robotics and Automation, VJTI, designed to balance upright while following a marked line. The work brings embedded control and sensor-based path tracking together in one mobile system."] },
        { title: "Hardware architecture", paragraphs: ["The hardware combines an ESP32 running ESP-IDF, a custom in-house SRA PCB, a light sensor array, two motors and a supporting chassis. The sensor array provides line information; the motor pair is shared by the balancing and line-following control loops."] },
        { title: "Control architecture", paragraphs: ["Loop 1 — Line following: the light sensor array detects the line position. The controller calculates position error, and a PID controller adjusts differential wheel speed so the motors correct the robot's path.", "Loop 2 — Balancing: balance and positional feedback provide the balance state. A separate PID controller calculates corrective motor action so the same pair of motors maintains the robot's upright position.", "Both loops act on the same pair of motors, so their control actions interact."] },
        { title: "Engineering challenge", paragraphs: ["The main challenge was tuning both PID loops so the robot could balance and follow the line simultaneously. Sensor input, feedback, error correction and the shared motor pair mean changes to one loop affect the other.", "The team reported that the robot balanced and followed lines reliably during testing. No numerical PID gains, motor models, accuracy figures or test metrics are claimed."] }
      ],
      diagram: { caption: "Two feedback loops share one pair of motors", rows: [{ label: "Line following · PID 1", steps: ["Light sensor array detects line", "Line position", "Position error", "PID controller", "Differential wheel speed", "Motors correct path"] }, { label: "Balancing · PID 2", steps: ["Balance / position feedback", "Balance error", "Separate PID controller", "Corrective motor action", "Motors hold upright"] }, { label: "Shared output", steps: ["Line correction", "Same pair of motors", "Upright balance"] }] },
      gallery: [{ title: "WALL-E robot electronics", caption: "The robot electronics board mounted between the drive wheels", image: "/images/wall-e/wall-e-robot-electronics-board.png", alt: "WALL-E robot electronics board mounted between the drive wheels" }]
    },
    {
      slug: "shipsy-logistics-tracking", number: "06", title: "Logistics Tracking Application", category: "Application Development / Logistics Technology", context: "Shipsy internship", status: "Supporting project", compact: true,
      description: "A supporting application developed during the Shipsy internship, focused on shipment status and location tracking.", technologies: [],
      sections: [{ title: "Overview", paragraphs: ["A supporting internship application focused on helping users follow shipment status and location. No internal screenshots, employee data or proprietary training material are included."] }, { title: "Purpose", bullets: ["Shipment status tracking", "Location tracking", "Developed in the context of the Shipsy internship"] }], gallery: []
    },
    {
      slug: "sixth-sense-robotics-workshop", number: "07", title: "6th Sense Robotics Workshop", category: "Workshop / Robotics / Technical Learning", context: "IIT Bombay Techfest · 2024", status: "Workshop participation", compact: true,
      description: "Participation in the 6th Sense Robotics Workshop at IIT Bombay Techfest 2024, exploring robotics, sensors, gesture recognition and human-machine interaction.", technologies: [],
      sections: [{ title: "Workshop", paragraphs: ["Explored robotics, sensors, gesture recognition and human-machine interaction at the 6th Sense Robotics Workshop during IIT Bombay Techfest 2024."], bullets: ["Gesture recognition", "Accelerometer and gyroscope sensors", "Microcontrollers and motor control", "Computer vision, image processing and sensor-based interaction"] }], gallery: [{ title: "6th Sense Robotics Workshop robot", caption: "Robotics workshop build", image: "/images/robotics-workshop/6th-sense-workshop-robot-chassis.png", alt: "Small wheeled robotics workshop chassis with a controller and motor driver on a table" }]
    }
  ],
  experience: [
    { organisation: "Shipsy", designation: "Business Operations Intern", dates: "June–July 2026", description: "Contributed to the development and deployment of internal software products as part of a four-member development team.", details: ["Collaborated on Shipsy's internal Learning Management System for employee onboarding and product enablement.", "Worked across React and TypeScript frontend, Python FastAPI backend, database and application functionality.", "Contributed to Google OAuth 2.0 authentication through a Node.js Backend-for-Frontend architecture.", "Worked on backend-driven assessments, quiz scoring, employee progress, gamification and administrative analytics.", "Contributed to testing, integration and successful Vercel deployment.", "Also contributed to a logistics tracking application."] },
    { organisation: "Finance & Consulting Club, VJTI", designation: "Research Team — Industrials Sector", dates: "2025–2026", description: "Year-long research on the Indian industrials sector, macroeconomic indicators and emerging themes.", details: ["Conducted year-long research on the Indian industrials sector, tracking major industry developments and emerging themes.", "Analysed macroeconomic indicators including IIP, PMI and credit growth to understand their implications for industrial activity.", "Produced structured weekly research updates, connecting current events with broader sector trends.", "Contributed to FCC's published research newsletter, including Industrials — Issue #3 (February 2026).", "Presented research findings to club leadership, translating economic developments into sector-level insights."], media: [{ src: "/images/fcc/fcc-newsline-issue-3-february-2026.png", alt: "FCC Newsline cover page for issue 3, dated February 21, 2026", caption: "FCC Newsline · Issue #3 · February 21, 2026" }] },
    { organisation: "Technovanza, VJTI", designation: "Sponsorship Head", dates: "2026–Present", description: "Leading sponsorship outreach, prospect identification, partnership development, proposal preparation, pitch strategy and sponsor communication for VJTI's annual technical festival.", details: ["Led sponsorship outreach and prospect identification for the annual technical festival.", "Prepared partnership proposals and pitches, and coordinated communication with prospective sponsors."] },
    { organisation: "VJTI Alumni Association", designation: "Department Head", dates: "", description: "Contributing to alumni engagement, departmental initiatives, communication and outreach.", details: ["Supported alumni engagement and departmental communication.", "Contributed to outreach and coordination for alumni initiatives."] }
  ],
  education: [
    { school: "Veermata Jijabai Technological Institute", qualification: "Bachelor of Technology — Textile Engineering · Minor in Data Science", dates: "Expected 2028", detail: "Mumbai, India" },
    { school: "PACE Junior Science College, Mumbai", qualification: "Higher Secondary Certificate", dates: "2024" },
    { school: "Reliance Foundation School, Koparkhairane", qualification: "CBSE · 91%", dates: "2022" }
  ],
  certifications: ["Excel Skills for Business — Coursera", "Financial Markets — Coursera"],
  recognition: ["Selected for the Harvard College Project for Asian and International Relations (HPAIR) Conference 2026."],
  contact: { email: "sarthakgupta1604@gmail.com", phone: "+91 83558 31147", github: "https://github.com/sArThAk1612", linkedin: "https://www.linkedin.com/in/sarthak-gupta-7a2107312/", resume: "/resume.pdf", intro: "Open to opportunities and conversations around technology, data science, finance and building interesting things." },
  footer: { sheet: "Portfolio", based: "Mumbai, India", revision: "2026.10", email: "sarthakgupta1604@gmail.com", linkedin: "https://www.linkedin.com/in/sarthak-gupta-7a2107312/", github: "https://github.com/sArThAk1612" }
};

// Keep fields added by later site updates present when older Supabase JSON is loaded.
export function mergeContent(value: Partial<SiteContent> | null | undefined): SiteContent {
  const incoming=value??{};
  const about=incoming.about;
  const beyond=about?.beyond;
  return {
    ...defaultContent,...incoming,
    home:{...defaultContent.home,...incoming.home},
    about:{...defaultContent.about,...about,
      interests:about?.interests??defaultContent.about.interests,
      tools:about?.tools??defaultContent.about.tools,
      beyond:{...defaultContent.about.beyond,...beyond,
        typing:{...defaultContent.about.beyond.typing,...beyond?.typing},
        formula1:{...defaultContent.about.beyond.formula1,...beyond?.formula1},
        football:{...defaultContent.about.beyond.football,...beyond?.football}},
    },
    projects:(incoming.projects??defaultContent.projects).map(project=>({...project,gallery:project.gallery??[]})),
    experience:(incoming.experience??defaultContent.experience).map(entry=>({...entry,media:entry.media??[]})),
    education:incoming.education??defaultContent.education,
    certifications:incoming.certifications??defaultContent.certifications,
    recognition:incoming.recognition??defaultContent.recognition,
    contact:{...defaultContent.contact,...incoming.contact},
    footer:{...defaultContent.footer,...incoming.footer},
  };
}



