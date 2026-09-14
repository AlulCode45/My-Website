export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  locationType: string;
  description: string;
  technologies: string[];
  responsibilities?: string[];
  systemsBuilt?: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  description: string;
  grades?: string[];
}

export interface ProjectCaseStudy {
  context: string;
  problem: string;
  constraints: string;
  thinking: string;
  architectureDetail: string;
  challenges: string;
  result: string;
  lessons: string;
}

export interface ProjectItem {
  id: number;
  specNumber: string;
  year: string;
  title: string;
  category: "Enterprise / ERP" | "Fullstack & APIs" | "Frontend Architecture" | "Web Application";
  image: string;
  description: string;
  technologies: string[];
  role: string;
  status: "Production / Active" | "Completed" | "Maintained";
  link?: string;
  featured?: boolean;
  scaleType?: "lead" | "dual" | "horizontal" | "compact";
  metrics?: { label: string; value: string }[];
  caseStudy?: ProjectCaseStudy;
}

export interface CertificateItem {
  id: number;
  title: string;
  issuer: string;
  category: "Kompetisi" | "Security" | "Pemerintah" | "Akademik";
  year: string;
  image: string;
  highlight: string;
  credentialNote?: string;
}

export interface ActivityItem {
  id: number;
  title: string;
  event: string;
  role: string;
  category: "Seminar" | "Workshop" | "Tech Talk" | "Kompetisi";
  date: string;
  location: string;
  image: string;
  description: string;
  tags: string[];
}

export interface StackLayer {
  layerId: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: {
    name: string;
    level: string;
    rationale: string;
    usedInProjects: string[];
  }[];
}

export const personalInfo = {
  name: "Muhammad Khoyron Ahlaqul Firdaus",
  nickname: "AlulCode",
  codeHandle: "AlulCode",
  role: "Project Lead Developer & Fullstack Software Engineer",
  location: "Malang, East Java, Indonesia [7.98° S, 112.63° E]",
  timezone: "Asia/Jakarta (UTC+7)",
  status: "Building Production Systems",
  email: "alulgans70@gmail.com",
  manifesto: "I design, engineer, and deploy software systems that survive contact with real-world production loads.",
  subtext: "Bridging interface precision with backend resilience, schema integrity, and infrastructure stability.",
  stats: [
    { label: "Engineering Experience", value: "5+ YRS" },
    { label: "Shipped Deployments", value: "15+ SYSTEMS" },
    { label: "Current Lead Role", value: "PT PAS" },
    { label: "Vulnerability Disclosures", value: "VERIFIED" },
  ],
  socials: {
    github: "https://github.com/AlulCode45",
    linkedin: "https://www.linkedin.com/in/muhammad-khoyron-ahlaqul-firdaus-b09544208/",
    linkedinProjects: "https://www.linkedin.com/in/muhammad-khoyron-ahlaqul-firdaus-b09544208/details/projects/",
    certificatesDrive: "https://drive.google.com/drive/u/0/folders/1BBULOyTmHyKtjz1F1RZEV9GMIEd6jdVP",
    email: "alulgans70@gmail.com",
    whatsapp: "https://wa.me/6285790403780",
  },
};

export const engineeringAxioms = [
  {
    id: "01",
    title: "Resilience Over Hype",
    subtitle: "STABILITY AS A PRIMARY ARCHITECTURAL METRIC",
    statement: "Frameworks come and go; data integrity and operational uptime are permanent requirements.",
    elaboration:
      "I prioritize proven stacks—strict relational schemas (PostgreSQL), predictable ORM & transactional boundaries (Laravel), isolated containers (Docker), and type-safe frontends (TypeScript). Coolness is irrelevant if a system corrupts state or crashes during peak concurrency.",
    tags: ["ACID Compliance", "Deterministic State", "Error Boundaries"],
  },
  {
    id: "02",
    title: "Full-Lifecycle Ownership",
    subtitle: "FROM CLICK TO DISK TO LINUX KERNEL",
    statement: "A true fullstack engineer understands every layer an HTTP request touches.",
    elaboration:
      "When a user clicks a button, the work does not end at CSS styling. It traverses React state reconcilers, network sockets, Nginx reverse proxies, application middleware, database query plan analyzers, and storage disks. Understanding all layers prevents blind finger-pointing when latency occurs.",
    tags: ["Nginx / Reverse Proxy", "DB Execution Plans", "Network Budgets"],
  },
  {
    id: "03",
    title: "Interface Fidelity & Performance",
    subtitle: "SPEED IS A CORE USER FEATURE",
    statement: "A beautiful UI that stutters or layout-shifts is a failed design.",
    elaboration:
      "Frontend engineering is systems engineering in the browser: managing client heap footprints, optimizing Cumulative Layout Shift (CLS), fine-tuning Largest Contentful Paint (LCP), and creating interfaces that feel instantaneous even on constrained network pipes.",
    tags: ["Zero Cumulative Layout Shift", "Frame Budgets", "Optimistic UI"],
  },
  {
    id: "04",
    title: "Pragmatic Security by Default",
    subtitle: "DEFENSIVE PROGRAMMING & THREAT AWARENESS",
    statement: "Security is not a plugin added before release; it is an architectural discipline.",
    elaboration:
      "Having performed responsible vulnerability disclosures, I engineer systems defensively: strict Role-Based Access Control (RBAC), parameterized queries by mandate, sanitized boundaries, rate limiting, and zero implicit trust of client-provided payloads.",
    tags: ["OWASP Top 10", "Zero-Trust Payloads", "RBAC Enforcement"],
  },
];

export const stackLayers: StackLayer[] = [
  {
    layerId: "interface",
    title: "Layer 01 — Interface & Client",
    subtitle: "ACCESSIBLE, TYPE-SAFE, ZERO-JANK RUNTIMES",
    description: "Component architecture, deterministic state models, fluid animations, and sub-second rendering pipelines.",
    technologies: [
      {
        name: "React.js / Next.js",
        level: "Advanced",
        rationale: "Server Components, App Router streaming, dynamic SSR, and hydration boundary control.",
        usedInProjects: ["ATraderTerminal", "Boostera AI", "Malang Alam Property"],
      },
      {
        name: "TypeScript",
        level: "Advanced",
        rationale: "End-to-end type contracts eliminating runtime null reference surprises across API boundaries.",
        usedInProjects: ["ATraderTerminal", "Boostera AI", "JagatByte Studio"],
      },
      {
        name: "Tailwind CSS",
        level: "Expert",
        rationale: "Predictable design-token compilation with zero runtime CSS-in-JS overhead.",
        usedInProjects: ["All Projects"],
      },
      {
        name: "Inertia.js / Vue.js",
        level: "Proficient",
        rationale: "Monolithic single-page application bridge binding Laravel directly to modern frontend components.",
        usedInProjects: ["Boostera Studio", "Client Portals"],
      },
    ],
  },
  {
    layerId: "backend",
    title: "Layer 02 — Backend Engine & Application Logic",
    subtitle: "DETERMINISTIC BUSINESS LOGIC, RBAC & API CONTRACTS",
    description: "Domain-driven architectural patterns, robust service layers, and predictable transaction execution.",
    technologies: [
      {
        name: "Laravel (PHP 8.2+)",
        level: "Advanced / Production-Hardened",
        rationale: "Clean service boundaries, eloquent relation caching, queued event listeners, and battle-tested auth.",
        usedInProjects: ["ATraderTerminal Backend", "Boostera AI", "JagatByte Studio"],
      },
      {
        name: "REST & WebSocket Streaming APIs",
        level: "Advanced",
        rationale: "Strict JSON payload contracts, OpenAPI specification discipline, and resilient error formats.",
        usedInProjects: ["Financial WebSockets", "AI Generation Services"],
      },
      {
        name: "Node.js / Express",
        level: "Proficient",
        rationale: "Asynchronous I/O pipelines, lightweight microservices, and serverless compute functions.",
        usedInProjects: ["Scraper Services", "Automation Scripts"],
      },
      {
        name: "Enterprise RBAC Architecture",
        level: "Advanced",
        rationale: "Granular permission hierarchies, multi-tenant tenancy guards, and audit trail generation.",
        usedInProjects: ["Boostera Studio", "JagatByte Platform"],
      },
    ],
  },
  {
    layerId: "storage",
    title: "Layer 03 — Data Persistence & State",
    subtitle: "ACID RELIABILITY, INDEXING & HIGH CONCURRENCY",
    description: "Relational database schema modeling, query execution plan optimization, and caching hierarchies.",
    technologies: [
      {
        name: "PostgreSQL",
        level: "Advanced",
        rationale: "Advanced indexing (B-Tree, GIN), JSONB document flexibility, and strict ACID compliance.",
        usedInProjects: ["ATraderTerminal", "Boostera AI", "Malang Alam Property"],
      },
      {
        name: "MySQL / MariaDB",
        level: "Advanced",
        rationale: "Clustered index strategies, replication reliability, and high-throughput transactional logging.",
        usedInProjects: ["JagatByte Studio", "Event Bookings"],
      },
      {
        name: "Redis",
        level: "Intermediate",
        rationale: "In-memory caching, atomic rate-limit counters, and low-latency session store offloading.",
        usedInProjects: ["ATraderTerminal Realtime", "Boostera Rate Limiter"],
      },
    ],
  },
  {
    layerId: "infrastructure",
    title: "Layer 04 — DevOps & Runtime Infrastructure",
    subtitle: "ISOLATION, CI/CD, SECURE HOSTING & MONITORING",
    description: "Containerized environments, automated deployment pipelines, reverse proxy tuning, and host security.",
    technologies: [
      {
        name: "Docker & Compose",
        level: "Advanced",
        rationale: "Immutable service definitions mirroring production environments locally with zero drift.",
        usedInProjects: ["ATraderTerminal Scrapers", "Self-Hosted Infrastructure"],
      },
      {
        name: "Linux (Ubuntu / Debian)",
        level: "Proficient",
        rationale: "POSIX environment management, systemd service daemon configurations, and log monitoring.",
        usedInProjects: ["VPS Hosting", "Production Deployments"],
      },
      {
        name: "Nginx",
        level: "Proficient",
        rationale: "Reverse proxying, SSL/TLS offloading, gzip/brotli compression, and upstream load routing.",
        usedInProjects: ["Production Servers"],
      },
      {
        name: "Application Security & Hardening",
        level: "Active Discipline",
        rationale: "Vulnerability analysis, CSRF/XSS defense, input sanitization, and security disclosure ethics.",
        usedInProjects: ["Security Assessments", "Bug Hunter Disclosures"],
      },
    ],
  },
];

export const projectsList: ProjectItem[] = [
  {
    id: 1,
    specNumber: "SPEC_01",
    year: "2025—2026",
    title: "ATraderTerminal — Financial Market Intelligence & Macro Analytics",
    category: "Fullstack & APIs",
    image: "/assets/projects/ATraderTerminal-Financial-Market-Intelligence-Analytics-09-14-2026_02_33_PM.png",
    description: "Platform analitik intelijen pasar finansial dan makro ekonomi institusional real-time dengan streaming quote langsung, mesin bias makro, kalender rilis ekonomi berdampak tinggi, integrasi Gemini AI Macro Strategist, dan kluster web scraper multi-sumber.",
    technologies: ["Next.js", "TypeScript", "WebSocket", "Tailwind CSS", "Gemini AI", "Financial APIs", "Python Scrapers"],
    role: "Lead Fullstack Architect",
    status: "Production / Active",
    featured: true,
    scaleType: "lead",
    metrics: [
      { label: "Feed Latency", value: "< 15ms WebSocket" },
      { label: "Intelligence Engine", value: "Gemini Macro AI" },
      { label: "Coverage", value: "XAU, FX, Crypto & Macro" },
    ],
    caseStudy: {
      context: "Pedagang pasar finansial dan analis makro institusional membutuhkan terminal analitik berkecepatan tinggi yang menyajikan likuiditas lintas aset (emas XAUUSD, valas Forex, kripto) bersamaan dengan sentimen berita global real-time.",
      problem: "Terminal finansial konvensional seringkali lambat, mengenakan biaya lisensi ribuan dolar, atau memiliki antarmuka kaku yang memisahkan kalender rilis ekonomi dari feeds streaming harga instan.",
      constraints: "Data streaming sub-detik tanpa re-render berlebih, sinkronisasi waktu multi-zona (WIB, UTC, NY), dan keandalan kluster scraper berita 24/7 tanpa throttling.",
      thinking: "Merancang Bloomberg-grade dark terminal dengan stream WebSocket berlatensi 12ms, composite state calculation untuk Macro Bias Engine (0-100 Bullish/Bearish), dan AI Macro Strategist berbasis LLM untuk mensintesis dampak rilis suku bunga bank sentral.",
      architectureDetail: "Next.js App Router dengan isolated Canvas/DOM stream widgets -> Direct Exchange WebSocket feeds -> Gemini AI inference pipeline untuk Macro Intelligence Note -> Python background scraper cluster (ForexLive, FXStreet, CoinTelegraph).",
      challenges: "Menghindari memory leaks dan layout thrashing di browser saat ribuan tick harga dan headline berita masuk secara simultan setiap menit.",
      result: "Menghasilkan terminal cerdas berkecepatan tinggi dengan latensi 12ms, 4/4 scraper aktif secara stabil, dan sintesis otomatis sentimen pasar yang akurat.",
      lessons: "Streaming data berkepadatan tinggi menuntut pemisahan ketat antara state ticker render buffer dan komponen UI utama.",
    },
  },
  {
    id: 2,
    specNumber: "SPEC_02",
    year: "2025—2026",
    title: "Boostera — AI Social Media Platform for Indonesian MSMEs",
    category: "Web Application",
    image: "/assets/projects/Boostera-—-AI-Social-Media-Platform-for-Indonesian-MSMEs-09-14-2026_02_33_PM.png",
    description: "Platform otomasi pemasaran dan asisten digital berbasis AI untuk UMKM Indonesia. Membantu merchant memproduksi kata promosi, gambar kampanye instan, integrasi toko WhatsApp, analitik tren produk lokal, dan penjadwalan konten multi-kanal.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI / LLM Integration", "PostgreSQL", "WhatsApp API"],
    role: "Fullstack Engineer & Product Architect",
    status: "Production / Active",
    featured: true,
    scaleType: "dual",
    metrics: [
      { label: "Efficiency Gain", value: "98% Waktu Hemat" },
      { label: "Total Reach", value: "248.5K+ Audiens" },
      { label: "Conversion", value: "1,420+ Klik WA / Web" },
    ],
    caseStudy: {
      context: "Jutaan pelaku UMKM di Indonesia kesulitan membuat materi copywriting iklan, visual promosi yang menarik, serta menjadwalkan posting media sosial secara konsisten setiap harinya.",
      problem: "UMKM tidak memiliki budget agensi atau keahlian desain grafis, sehingga promosi manual memakan waktu hingga puluhan jam per bulan dengan jangkauan audiens yang rendah.",
      constraints: "Antarmuka harus luar biasa ramah bagi pengguna awam, respons copywriting AI harus relevan dengan konteks bahasa lokal (tren kopi, diskon ongkir), dan terintegrasi mulus ke alur checkout WhatsApp.",
      thinking: "Membangun sistem studio terpadu: 'Tulis Kata Promosi' + 'Buat Gambar Promo' + 'Halaman Toko WA' yang dipadukan dengan rekomendasi waktu posting pintar ('Jadwalkan Promo Sabtu Jam 19:00 WIB') berbasis analitik jam aktif konsumen.",
      architectureDetail: "Next.js UI dengan Tailwind CSS design tokens -> Node LLM proxy untuk generation prompt kontekstual UMKM -> PostgreSQL untuk relasi toko, produk, dan riwayat posting -> WhatsApp Business API link generator.",
      challenges: "Menyesuaikan prompt AI agar tidak terdengar kaku atau robotik, melainkan hangat, persuasif, dan sangat akrab dengan kebiasaan belanja online masyarakat Indonesia.",
      result: "Menghemat lebih dari 30 jam kerja pemasaran per bulan per merchant, dengan rata-rata peningkatan jangkauan medsos sebesar +24.5% dan 12 post campaign terjadwal otomatis.",
      lessons: "AI yang paling berdampak bukanlah yang paling rumit, melainkan yang paling kontekstual dan langsung menyelesaikan masalah operasional harian pengguna.",
    },
  },
  {
    id: 3,
    specNumber: "SPEC_03",
    year: "2024—2025",
    title: "Malang Alam Property — Curated Real Estate & Living Discovery",
    category: "Frontend Architecture",
    image: "/assets/projects/Malang-Alam-Property-Find-Your-Place-in-Malang-09-14-2026_02_33_PM.png",
    description: "Platform penemuan properti dan hunian eksklusif di Malang dan sekitarnya. Mengusung konsep 'Where life meets the beauty of nature' dengan kurasi arsitektur premium, navigasi visual sinematik, integrasi peta geografis, dan alur konsultasi privat.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Interactive Maps", "PostgreSQL", "SEO Engine"],
    role: "Frontend Architect & UI Engineer",
    status: "Production / Active",
    featured: true,
    scaleType: "dual",
    metrics: [
      { label: "Design Aesthetic", value: "Luxury Editorial" },
      { label: "Performance", value: "99 Core Web Vitals" },
      { label: "Inquiry Flow", value: "Direct Consultant Match" },
    ],
    caseStudy: {
      context: "Pasar properti premium di kawasan Malang dan Jawa Timur membutuhkan media presentasi digital yang sepadan dengan nilai investasi properti bernilai tinggi.",
      problem: "Listing properti konvensional dipenuhi iklan berserakan, visual beresolusi rendah, dan alur navigasi yang lambat, merusak citra premium hunian arsitektural.",
      constraints: "Aset visual fotografi beresolusi tinggi harus dimuat secara instan tanpa menurunkan skor performa Core Web Vitals (LCP/CLS).",
      thinking: "Menerapkan estetika editorial mewah bergaya majalah arsitektur dengan tipografi serif elegan, transisi gambar halus, dan alur konversi konsultasi properti terintegrasi.",
      architectureDetail: "Next.js Static Generation dengan optimized responsive WebP/AVIF imagery -> Dynamic property filter query engine -> Mapbox / Leaflet custom styled geolocation coordinates -> Direct WhatsApp & CRM lead router.",
      challenges: "Menyeimbangkan ukuran file fotografi interior/eksterior beresolusi tinggi dengan kecepatan rendering halaman pertama (FCP di bawah 0.8s).",
      result: "Tingkat konversi lead konsultasi properti meningkat drastis berkat pengalaman visual imersif yang memposisikan Malang Alam Property sebagai standar kemewahan hunian di Malang.",
      lessons: "Hierarki visual dan tipografi yang tepat menciptakan trust instan bagi calon investor bernilai tinggi.",
    },
  },
  {
    id: 4,
    specNumber: "SPEC_04",
    year: "2025—2026",
    title: "JagatByte — Future-Ready Digital Product Studio & Engineering",
    category: "Web Application",
    image: "/assets/projects/JagatByte-—-We-Build-Future-Ready-Digital-Experiences-09-14-2026_03_25_PM.png",
    description: "Platform studio rekayasa produk digital modern dengan filosofi 'Make complex ideas move'. Menggabungkan product thinking dan engineering discipline untuk merekayasa produk digital berkinerja tinggi, terpercaya, dan siap bertumbuh.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Design Systems", "Product Analytics", "State Architecture"],
    role: "Lead Frontend & Product Engineer",
    status: "Production / Active",
    featured: true,
    scaleType: "horizontal",
    metrics: [
      { label: "Delivery Health", value: "98.7% Reliability" },
      { label: "Active Scale", value: "24.8K+ Daily Users" },
      { label: "UX Metric", value: "Sub-Second State Transitions" },
    ],
    caseStudy: {
      context: "JagatByte berkolaborasi dengan tim-tim ambisius dan perusahaan rintisan untuk merekayasa produk digital berstandar tinggi yang menuntut kejelasan arsitektur, momentum rilis cepat, dan ketahanan sistem.",
      problem: "Banyak tim teknologi menghadapi friksi antara desain visual dan implementasi teknis: interface lambat, navigasi membingungkan, serta kode yang sulit diskalakan seiring pertambahan pengguna.",
      constraints: "Memerlukan sistem desain yang sangat modular, arsitektur frontend dengan type contracts yang ketat, dan dashboard metrik pemantauan kesehatan delivery secara real-time.",
      thinking: "Menerapkan pendekatan 'Ship with clarity' melalui antarmuka modern yang bersih, tipografi dinamis, visualisasi metrik momentum produk, dan navigasi modular multi-tema.",
      architectureDetail: "Next.js App Router dengan atomic component tokens -> Type-safe state management -> Interactive analytics widgets & micro-interactions -> CDN edge caching untuk pemuatan instan global.",
      challenges: "Mendesain dashboard visualisasi metrik interaktif (Active Users, Delivery Health, Product Momentum) yang tetap ringan dan responsif di berbagai resolusi layar tanpa layout thrashing.",
      result: "Menghasilkan platform studio produk digital berkinerja tinggi dengan tingkat kesehatan delivery 98.7%, performa interaksi instan, dan sistem desain yang siap untuk ekspansi fitur berkelanjutan.",
      lessons: "Kombinasi disiplin rekayasa sistem dan empati desain produk menghasilkan pengalaman digital yang tidak hanya estetis, tetapi juga fungsional dan dipercaya pengguna.",
    },
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: "Apr 2025 — PRESENT",
    role: "Project Lead Developer",
    company: "PT Pusat Andalan Sukses Terpadu",
    locationType: "Remote / Full-time",
    description: "Memimpin perancangan teknis dan eksekusi arsitektur sistem digital perusahaan secara menyeluruh.",
    technologies: ["Next.js", "TypeScript", "Laravel", "PostgreSQL", "Docker", "System Architecture", "Leadership"],
    responsibilities: [
      "Menentukan arsitektur stack standar (Next.js + Laravel + PostgreSQL) untuk produk enterprise perusahaan.",
      "Menetapkan standar code-review, static analysis, dan branching workflow di seluruh tim engineering.",
      "Merancang skema database relasional kompleks dengan optimasi indexing dan pencegahan race conditions.",
      "Mengorkestrasi kolaborasi lintas disiplin antara Product, UI/UX, dan Quality Assurance.",
    ],
    systemsBuilt: ["Enterprise Management Portal", "Transactional Core API", "RBAC Security Gateways"],
  },
  {
    period: "Jan 2019 — PRESENT",
    role: "Independent Fullstack Engineer & Consultant",
    company: "AlulCode Technical Engagements",
    locationType: "Remote / Independent",
    description: "Menyediakan layanan konsultasi rekayasa perangkat lunak, perancangan sistem web custom, dan audit performa untuk berbagai klien bisnis dan organisasi nasional.",
    technologies: ["React", "Laravel", "Node.js", "Tailwind CSS", "MySQL", "PostgreSQL", "REST APIs"],
    responsibilities: [
      "Membangun portal nasional, platform e-commerce, dan sistem otomasi alur kerja end-to-end.",
      "Melakukan optimasi performa query database dan refactoring kode warisan (legacy code).",
      "Mengamankan API endpoints dan menerapkan standar defensive programming.",
    ],
    systemsBuilt: ["Sistem Direktori Nasional ASPIKOM", "E-Commerce Engines", "Custom Business Portals"],
  },
  {
    period: "Sep 2024 — Jan 2025",
    role: "Web Developer",
    company: "Black Wolf Tech Indonesia",
    locationType: "Part-time",
    description: "Membangun antarmuka aplikasi web modern berbasis kebutuhan spesifik klien dengan standar performa dan konsistensi desain yang ketat.",
    technologies: ["React", "JavaScript (ES6+)", "UI/UX Optimization", "Tailwind CSS"],
    responsibilities: [
      "Mengembangkan komponen frontend modular yang responsif di seluruh breakpoint layar.",
      "Mengoptimalkan Core Web Vitals (LCP, CLS, FID) pada proyek web klien.",
    ],
  },
  {
    period: "Agu 2024 — Jan 2025",
    role: "Web Developer Intern",
    company: "CV Hummasoft Komputindo",
    locationType: "On-site Internship",
    description: "Berkontribusi dalam tim rekayasa backend enterprise menggunakan Laravel dan ekosistem JavaScript industri.",
    technologies: ["Laravel", "PHP", "MySQL", "Internal ERP", "JavaScript"],
    responsibilities: [
      "Maintenance dan penambahan fitur core pada sistem internal perusahaan.",
      "Menganalisis dan memperbaiki bug pada modul pelaporan data berkala.",
    ],
  },
  {
    period: "Okt 2023 — Jun 2024",
    role: "Co-Founder & Technical Mentor",
    company: "iTmind Community Initiative",
    locationType: "Community Initiative",
    description: "Mendirikan dan mengelola komunitas edukasi teknologi yang berfokus pada pelatihan skill coding, logika algoritma, dan kesiapan karir industri.",
    technologies: ["Technical Mentorship", "Community Building", "Web Workshops"],
  },
  {
    period: "Agu 2021 — Mei 2024",
    role: "Web Developer",
    company: "EX-SCIENCE",
    locationType: "Contract",
    description: "Mengembangkan berbagai modul aplikasi internal dan eksternal menggunakan arsitektur Laravel, PHP, dan MySQL yang berfokus pada ketahanan sistem.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
  },
];

export const certificateList: CertificateItem[] = [
  {
    id: 1,
    title: "Penghargaan Responsible Vulnerability Disclosure (Bug Hunter)",
    issuer: "Amanah Solution — Security Assessment",
    category: "Security",
    year: "2024",
    image: "/assets/sertifikat/Sertifikat6.jpg",
    highlight: "Pelaporan Celah Keamanan Terverifikasi",
    credentialNote: "Apresiasi resmi atas identifikasi dan pelaporan celah keamanan secara etis dan bertanggung jawab.",
  },
  {
    id: 2,
    title: "Juara 1 Web Development Lomba Technifest 2022",
    issuer: "Fakultas Teknik Universitas Negeri Jakarta (UNJ)",
    category: "Kompetisi",
    year: "2022",
    image: "/assets/sertifikat/Sertifikat4.png",
    highlight: "Juara 1 Tingkat Nasional",
    credentialNote: "Juara 1 kompetisi rekayasa web yang diselenggarakan oleh BEM FT Universitas Negeri Jakarta.",
  },
  {
    id: 3,
    title: "Juara 1 Web Technology LKS SMK Tingkat Kabupaten",
    issuer: "Cabang Dinas Pendidikan Wilayah Bojonegoro",
    category: "Pemerintah",
    year: "2024",
    image: "/assets/sertifikat/Sertifikat5.jpg",
    highlight: "Juara 1 LKS Web Technology",
    credentialNote: "Predikat Juara 1 pada Lomba Kompetensi Siswa (LKS) SMK bidang Web Technology se-Kabupaten Bojonegoro.",
  },
  {
    id: 4,
    title: "Juara 1 Web Development SMA/SMK ICONFEST 1.0",
    issuer: "HIMAFOR Universitas Muhammadiyah Semarang",
    category: "Kompetisi",
    year: "2023",
    image: "/assets/sertifikat/Sertifikat3.png",
    highlight: "Juara 1 ICONFEST 1.0",
    credentialNote: "Penghargaan terbaik atas inovasi dan kualitas kode antarmuka pada Informatics Connection Festival.",
  },
  {
    id: 5,
    title: "Juara 3 Web Dev Competition Nasional IDN IT FEST",
    issuer: "SMK IDN Boarding School Jonggol — Tim Kuat Iman",
    category: "Kompetisi",
    year: "2023",
    image: "/assets/sertifikat/Sertifikat2.jpg",
    highlight: "Juara 3 Nasional IDN IT Fest",
    credentialNote: "Peringkat ketiga dalam kompetisi rekayasa web nasional yang menguji arsitektur dan responsivitas sistem.",
  },
  {
    id: 6,
    title: "Peserta LKS SMK Tingkat Provinsi Jawa Timur Ke-32",
    issuer: "Dinas Pendidikan Provinsi Jawa Timur",
    category: "Pemerintah",
    year: "2024",
    image: "/assets/sertifikat/Sertifikat1.jpg",
    highlight: "Finalis LKS Provinsi Jatim",
    credentialNote: "Delegasi resmi Kabupaten Bojonegoro pada ajang LKS SMK Tingkat Provinsi Jawa Timur bidang Web Technologies.",
  },
  {
    id: 7,
    title: "Finalis Schematics National Programming Contest Junior",
    issuer: "Departemen Teknik Informatika ITS Surabaya",
    category: "Kompetisi",
    year: "2023",
    image: "/assets/sertifikat/Sertifikat7.jpg",
    highlight: "Schematics ITS Surabaya",
    credentialNote: "Partisipasi dan seleksi kompetisi pemrograman nasional bergengsi HMTC Institut Teknologi Sepuluh Nopember.",
  },
];

export const activityGalleryList: ActivityItem[] = [
  {
    id: 1,
    title: "National Tech Seminar & Web Architecture Forum",
    event: "ICONFEST Informatics Symposium",
    role: "Speaker & Participant",
    category: "Seminar",
    date: "2024",
    location: "Semarang, Indonesia",
    image: "/assets/sertifikat/Sertifikat3.png",
    description: "Diskusi dan sesi pemaparan mengenai evolusi arsitektur web modern, integrasi REST API berbasis Laravel, dan optimasi runtime frontend.",
    tags: ["Web Architecture", "Frontend Systems", "API Contracts"],
  },
  {
    id: 2,
    title: "National Web Engineering Workshop & Competition",
    event: "Technifest BEM FT UNJ",
    role: "Juara 1 & Presenter Solusi",
    category: "Workshop",
    date: "2022",
    location: "Jakarta, Indonesia",
    image: "/assets/sertifikat/Sertifikat4.png",
    description: "Sesi workshop teknis dan presentasi produk rekayasa web mengenai performa aplikasi interaktif dan arsitektur data responsif.",
    tags: ["Fullstack Web", "UI Engineering", "Performance"],
  },
  {
    id: 3,
    title: "Responsible Vulnerability Disclosure Briefing",
    event: "Amanah Solution Security Audit Forum",
    role: "Security Researcher / Bug Hunter",
    category: "Tech Talk",
    date: "2024",
    location: "Indonesia",
    image: "/assets/sertifikat/Sertifikat6.jpg",
    description: "Dokumentasi pelaporan etis kerentanan sistem, analisis vektor ancaman web, dan langkah remediasi mitigasi celah keamanan aplikasi.",
    tags: ["AppSec", "Responsible Disclosure", "Security"],
  },
  {
    id: 4,
    title: "Lomba Kompetensi Siswa Web Technologies Championship",
    event: "LKS Provinsi Jawa Timur Ke-32",
    role: "Kontingen Web Technologies",
    category: "Kompetisi",
    date: "2024",
    location: "Surabaya, Jawa Timur",
    image: "/assets/sertifikat/Sertifikat1.jpg",
    description: "Dokumentasi kejuaraan rekayasa web tingkat provinsi yang menguji kecepatan implementasi fullstack, arsitektur database, dan kepatuhan standar web.",
    tags: ["Web Technologies", "Speed Coding", "Database Modeling"],
  },
  {
    id: 5,
    title: "National Programming Contest & IT Fest Gathering",
    event: "IDN IT FEST & Schematics ITS",
    role: "Juara 3 & Delegasi Teknis",
    category: "Kompetisi",
    date: "2023",
    location: "Surabaya & Jonggol",
    image: "/assets/sertifikat/Sertifikat2.jpg",
    description: "Forum bertukar wawasan teknis antar developer muda nasional, pemecahan masalah algoritma, dan arsitektur sistem berbasis cloud.",
    tags: ["Algorithms", "Problem Solving", "Collaboration"],
  },
];

export const educationList: EducationItem[] = [
  {
    period: "2025 — PRESENT",
    degree: "S1 Teknik Informatika (Undergraduate Computer Science)",
    institution: "Institut Asia Malang",
    description: "Mendalami studi sistem komputasi tingkat lanjut, algoritma komputasi terdistribusi, struktur data kompleks, dan rekayasa perangkat lunak enterprise sembari aktif memimpin proyek industri nyata.",
  },
  {
    period: "2022 — 2025",
    degree: "Rekayasa Perangkat Lunak (Software Engineering)",
    institution: "SMK Negeri 4 Bojonegoro",
    description: "Pendidikan kejuruan intensif dalam rekayasa perangkat lunak standar industri dengan pencapaian predikat akademis terbaik.",
    grades: [
      "Algoritma & Pemrograman: Predikat A",
      "Struktur Data: Predikat A",
      "Object-Oriented Programming (OOP): Predikat A",
      "Pemrograman Web & Basis Data: Predikat A",
    ],
  },
];

export const skillCategories = [
  {
    title: "Frontend Engineering",
    description: "Membangun antarmuka modern yang cepat, aksesibel, dan responsif dengan pengalaman interaksi mulus.",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js (App Router)", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate / Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Modern JavaScript (ES6+)", level: "Advanced" },
      { name: "HTML5 & Semantic SEO", level: "Advanced" },
    ],
  },
  {
    title: "Backend & System APIs",
    description: "Merancang arsitektur server-side yang tangguh, efisien, aman, dan mudah diskalakan.",
    skills: [
      { name: "Laravel (PHP)", level: "Advanced" },
      { name: "PHP 8+", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "RESTful API Architecture", level: "Advanced" },
      { name: "Auth (JWT, Sessions, RBAC)", level: "Advanced" },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Perancangan skema relasional, optimasi kueri data, dan integritas data transaksional.",
    skills: [
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MySQL", level: "Advanced" },
      { name: "MariaDB", level: "Advanced" },
      { name: "Database Schema Design", level: "Advanced" },
    ],
  },
  {
    title: "DevOps, Tools & Principles",
    description: "Perkakas kerja, kontrol versi, dan lingkungan pengembangan standar industri rekayasa perangkat lunak.",
    skills: [
      { name: "Git & GitHub Workflow", level: "Advanced" },
      { name: "Linux / POSIX Environments", level: "Proficient" },
      { name: "Figma to Code", level: "Proficient" },
      { name: "Vercel & Cloud Deployment", level: "Proficient" },
      { name: "Application Security Basics", level: "Active Focus" },
    ],
  },
];

export interface LabItem {
  id: string;
  title: string;
  domain: string;
  summary: string;
  tech: string[];
  status: "ACTIVE EXPLORATION" | "SHIPPED EXPERIMENT" | "BENCHMARK";
}

export const labExperiments: LabItem[] = [
  {
    id: "LAB_01",
    title: "Zero-CLS Dynamic Faceted Search Engine",
    domain: "CLIENT RUNTIME & STATE",
    summary: "In-memory client query execution engine that filters across 5,000+ SKU hardware items without layout shift or UI stutter.",
    tech: ["TypeScript", "Web Workers", "Bitmask Filtering"],
    status: "SHIPPED EXPERIMENT",
  },
  {
    id: "LAB_02",
    title: "PostgreSQL B-Tree vs GIN Index Benchmarking",
    domain: "STORAGE & PERSISTENCE",
    summary: "Empirical query plan comparison under 1,000,000 synthetic JSONB document records evaluating memory footprint versus latency.",
    tech: ["PostgreSQL 16", "EXPLAIN ANALYZE", "Docker"],
    status: "BENCHMARK",
  },
  {
    id: "LAB_03",
    title: "Idempotent Queue Worker Pipeline",
    domain: "BACKEND RELIABILITY",
    summary: "Distributed task orchestrator with Redis atomic locks ensuring zero duplicate executions across concurrent job workers.",
    tech: ["Laravel Queues", "Redis", "Distributed Locking"],
    status: "ACTIVE EXPLORATION",
  },
  {
    id: "LAB_04",
    title: "Sub-Second Automated Document Renderer",
    domain: "INFRASTRUCTURE & MEDIA",
    summary: "Headless Chromium daemon wrapper in Docker generating high-fidelity official membership PDFs under 450ms.",
    tech: ["Node.js", "Docker", "Puppeteer Core"],
    status: "SHIPPED EXPERIMENT",
  },
];

export interface FieldNoteItem {
  id: string;
  inquiry: string;
  observation: string;
  category: "PERFORMANCE" | "ARCHITECTURE" | "STATE" | "INFRA";
}

export const fieldNotes: FieldNoteItem[] = [
  {
    id: "FN_01",
    inquiry: "Why does this API endpoint need 400ms when the payload is under 12KB?",
    observation: "90% of latency is often hidden in un-eager loaded database N+1 relationships, un-indexed foreign keys, or redundant middleware authentication checks.",
    category: "PERFORMANCE",
  },
  {
    id: "FN_02",
    inquiry: "What happens when the client network drops mid-transaction?",
    observation: "A production interface must never leave the user wondering if a purchase or submission succeeded. Idempotency keys and optimistic reconciliation are non-negotiable.",
    category: "STATE",
  },
  {
    id: "FN_03",
    inquiry: "Is this third-party dependency actually paying for its weight?",
    observation: "Importing a 150KB library for a three-line date utility or micro-animation wastes client bandwidth. Native browser APIs and typed utilities usually suffice.",
    category: "ARCHITECTURE",
  },
  {
    id: "FN_04",
    inquiry: "Can this administrative workflow be reduced to two deterministic steps?",
    observation: "Enterprise friction isn't just aesthetic; each unnecessary modal and confirmation dialog costs real human operational hours every business quarter.",
    category: "ARCHITECTURE",
  },
];

export const intersectionData = {
  aSide: {
    letter: "A",
    title: "ARCHITECTURE & APPLICATION",
    role: "BACKEND & SYSTEMS",
    tagline: "Resilience, Schema Integrity, Infrastructure Uptime",
    points: [
      "Strict Relational Modeling (PostgreSQL, MySQL, MariaDB)",
      "Transactional Boundaries & ACID Consistency",
      "Robust API Gateways, REST Contracts & Role-Based Auth",
      "Containerized Production Parity (Docker, Nginx, Linux VPS)",
      "Responsible Security Assessment & Vulnerability Hardening",
    ],
    highlightProjects: ["ATraderTerminal Macro Intelligence", "Boostera AI Platform", "Real-Time Exchange Feeds"],
  },
  cSide: {
    letter: "C",
    title: "CODE & CREATIVE",
    role: "FRONTEND & INTERFACE",
    tagline: "Typographic Discipline, Zero-Jank UX, Modern Runtimes",
    points: [
      "Type-Safe Component Architecture (React, Next.js, TypeScript)",
      "Instantaneous Interactions with Sub-Second Perceived Speed",
      "Zero Cumulative Layout Shift & Strict Frame Budgets",
      "Tailwind Token Systems & Accessible Semantic Markup",
      "Controlled Micro-Interactions & Physical Easing Transitions",
    ],
    highlightProjects: ["Malang Alam Property Living", "JagatByte Product Studio", "ATraderTerminal Terminal UI"],
  },
};


