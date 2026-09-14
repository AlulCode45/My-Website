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
        usedInProjects: ["PT PAS Enterprise", "Hardware E-Commerce", "EduGeografi"],
      },
      {
        name: "TypeScript",
        level: "Advanced",
        rationale: "End-to-end type contracts eliminating runtime null reference surprises across API boundaries.",
        usedInProjects: ["PT PAS Enterprise", "Hardware E-Commerce", "Digital Showcase"],
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
        usedInProjects: ["ASPIKOM National", "Internal Operations"],
      },
    ],
  },
  {
    layerId: "application",
    title: "Layer 02 — Application Core & APIs",
    subtitle: "BUSINESS LOGIC, TRANSACTION INTEGRITY & SERVICES",
    description: "Robust service patterns, resilient queue workers, authentication flows, and contract-driven REST APIs.",
    technologies: [
      {
        name: "Laravel (PHP 8.2+)",
        level: "Advanced",
        rationale: "Eloquent ORM, robust queues, database migrations, security middleware, and battle-tested ecosystem.",
        usedInProjects: ["PT PAS Enterprise", "ASPIKOM National", "Regional Portal"],
      },
      {
        name: "Node.js / Express",
        level: "Intermediate",
        rationale: "Micro-service integrations, event-driven I/O, and real-time socket communication.",
        usedInProjects: ["Operational Dashboard", "API Bridges"],
      },
      {
        name: "RESTful Architecture",
        level: "Advanced",
        rationale: "Idempotent endpoints, hypermedia-ready error handling, and strict status code discipline.",
        usedInProjects: ["All Backend Work"],
      },
      {
        name: "Auth & RBAC (JWT/Sanctum)",
        level: "Advanced",
        rationale: "Granular multi-tenant permission gates, token rotation, and tamper-proof session states.",
        usedInProjects: ["PT PAS Enterprise", "ASPIKOM National", "Org Administration"],
      },
    ],
  },
  {
    layerId: "data",
    title: "Layer 03 — Data & Storage Topology",
    subtitle: "ACID RELIABILITY, INDEXING & HIGH CONCURRENCY",
    description: "Relational database schema modeling, query execution plan optimization, and caching hierarchies.",
    technologies: [
      {
        name: "PostgreSQL",
        level: "Advanced",
        rationale: "Advanced indexing (B-Tree, GIN), JSONB document flexibility, and strict ACID compliance.",
        usedInProjects: ["PT PAS Enterprise", "Org Administration"],
      },
      {
        name: "MySQL / MariaDB",
        level: "Advanced",
        rationale: "Clustered index strategies, replication reliability, and high-throughput transactional logging.",
        usedInProjects: ["ASPIKOM National", "EX-SCIENCE Modules"],
      },
      {
        name: "Redis",
        level: "Intermediate",
        rationale: "In-memory caching, atomic rate-limit counters, and low-latency session store offloading.",
        usedInProjects: ["PT PAS Enterprise", "Operational Dashboard"],
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
        usedInProjects: ["PT PAS Enterprise", "Self-Hosted Projects"],
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
    title: "PT Pusat Andalan Sukses — Core Enterprise System",
    category: "Enterprise / ERP",
    image: "/assets/Project6.jpg",
    description: "Sistem arsitektur enterprise terpadu yang menyatukan alur kerja bisnis, pemrosesan transaksi berkeamanan tinggi, otentikasi multi-peran, dan analitik operasional.",
    technologies: ["Next.js", "TypeScript", "Laravel", "PostgreSQL", "Docker", "Redis", "RBAC"],
    role: "Project Lead Developer",
    status: "Production / Active",
    featured: true,
    scaleType: "lead",
    metrics: [
      { label: "System Scope", value: "Multi-Module Enterprise" },
      { label: "Data Integrity", value: "ACID Guaranteed" },
      { label: "Lead Responsibilities", value: "Architecture & Code Standards" },
    ],
    caseStudy: {
      context: "PT Pusat Andalan Sukses Terpadu mengoperasikan beragam inisiatif produk digital internal dan klien bisnis yang membutuhkan sistem sentral tangguh.",
      problem: "Operasional sebelumnya terfragmentasi antar spreadsheet terpisah dan sistem lama dengan latensi kueri tinggi dan risiko inkonsistensi data.",
      constraints: "Data sensitif finansial/operasional menuntut audit trail ketat, isolasi peran tanpa celah, dan performa tinggi tanpa down-time saat migrasi.",
      thinking: "Saya memisahkan antarmuka interaktif menggunakan Next.js/TypeScript dengan backend inti berbasis Laravel dan PostgreSQL. Menggunakan Docker untuk menjamin keselarasan environment antar developer.",
      architectureDetail: "Client: Next.js App Router (SSR + Client state) -> API Gateway via Nginx -> Laravel Core API -> PostgreSQL dengan composite indexing -> Redis cache untuk session & rate limiting.",
      challenges: "Mengharmonisasikan migrasi schema tanpa merusak data historis, serta merancang permission matrix dinamis yang dapat dikonfigurasi langsung oleh superadmin.",
      result: "Menghasilkan platform operasional tunggal yang stabil, memangkas waktu proses pelaporan internal lebih dari 60%, dan memastikan audit trail tercatat 100%.",
      lessons: "Investasi pada database indexing dan type contracts sejak hari pertama memangkas bug regresi hingga lebih dari 80%.",
    },
  },
  {
    id: 2,
    specNumber: "SPEC_02",
    year: "2024—2025",
    title: "Sistem Registrasi & Direktori Nasional ASPIKOM",
    category: "Enterprise / ERP",
    image: "/assets/Project2.jpg",
    description: "Portal resmi keanggotaan Asosiasi Pendidikan Tinggi Ilmu Komunikasi se-Indonesia dengan alur pendaftaran terverifikasi, manajemen berkas institusi, dan penerbitan nomor anggota unik.",
    technologies: ["Laravel", "PHP 8", "MySQL", "Tailwind CSS", "PDF Engine", "RBAC"],
    role: "Fullstack Engineer",
    status: "Production / Active",
    featured: true,
    scaleType: "dual",
    metrics: [
      { label: "Scope", value: "Nasional (Seluruh PT di Indonesia)" },
      { label: "Verification", value: "Multi-tier Approval Flow" },
    ],
    caseStudy: {
      context: "ASPIKOM menaungi ratusan program studi dan ribuan akademisi ilmu komunikasi di seluruh universitas di Indonesia.",
      problem: "Proses registrasi manual via email menyebabkan penumpukan verifikasi, duplikasi nomor anggota, dan keterlambatan penerbitan surat keputusan resmi.",
      constraints: "Harus kompatibel dengan berbagai perangkat kampus dan mampu memproses unggahan dokumen resmi (SK Dikti, akreditasi) dengan aman.",
      thinking: "Membangun sistem alur verifikasi bertahap (Draft -> Verifikasi Wilayah -> Verifikasi Nasional -> Approval -> Penerbitan Sertifikat Otomatis).",
      architectureDetail: "Laravel 10 backend dengan automated PDF generation via headless renderer, storage hashing, dan audit logging pada setiap perubahan status anggota.",
      challenges: "Mencegah race condition saat penomoran seri anggota unik nasional berjalan paralel saat periode pendaftaran massal dibuka.",
      result: "Waktu siklus pendaftaran anggota baru berkurang dari mingguan menjadi hitungan jam setelah verifikasi dokumen terpenuhi.",
      lessons: "Pentingnya database transaction locking saat meng-generate serial sequential number di sistem berskala nasional.",
    },
  },
  {
    id: 3,
    specNumber: "SPEC_03",
    year: "2024",
    title: "Aplikasi Edukasi Geografi Berbasis Web",
    category: "Frontend Architecture",
    image: "/assets/Project1.jpg",
    description: "Platform media pembelajaran geografi interaktif dengan visualisasi data wilayah, modul pembelajaran materi kontekstual, dan evaluasi evaluasi siswa.",
    technologies: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Interactive Canvas/Maps"],
    role: "Frontend Lead",
    status: "Completed",
    featured: true,
    scaleType: "dual",
    metrics: [
      { label: "Target Audience", value: "Siswa & Edukator" },
      { label: "Interaction", value: "Real-time Map Exploration" },
    ],
    caseStudy: {
      context: "Kebutuhan materi ajar geografi modern yang tidak lagi statis berbasis buku cetak melainkan visual, interaktif, dan eksploratif.",
      problem: "Materi geografi konvensional sulit dipahami tanpa visualisasi spasial; siswa kehilangan minat akibat teks yang monoton.",
      constraints: "Aplikasi harus berjalan mulus di laptop sekolah dengan spesifikasi grafis entry-level.",
      thinking: "Mengembangkan antarmuka interaktif dengan SVG/Canvas data visualizer yang ringan tanpa membebani GPU/CPU klien.",
      architectureDetail: "React modular component tree dengan state management terisolasi per layer peta untuk menghindari re-render seluruh halaman.",
      challenges: "Mengoptimalkan kalkulasi geometri koordinat wilayah di sisi browser agar tetap berada dalam 60fps frame budget.",
      result: "Memenangkan penghargaan kompetisi inovasi digital dan diimplementasikan secara antusias di ruang kelas.",
      lessons: "Meminimalkan dependensi pustaka pihak ketiga yang berat untuk mencapai performa maksimal di perangkat hardware terbatas.",
    },
  },
  {
    id: 4,
    specNumber: "SPEC_04",
    year: "2024",
    title: "Platform Hardware & Digital E-Commerce",
    category: "Web Application",
    image: "/assets/Project4.jpg",
    description: "Website e-commerce katalog perangkat keras komputasi dengan keranjang belanja interaktif, filter spesifikasi instan, dan alur checkout terstruktur.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "State Management", "Checkout Flow"],
    role: "Frontend Engineer",
    status: "Completed",
    scaleType: "horizontal",
    metrics: [
      { label: "Filter Speed", value: "< 50ms Client Query" },
      { label: "UX Flow", value: "3-Step Streamlined Checkout" },
    ],
    caseStudy: {
      context: "Toko retail perangkat keras membutuhkan etalase online cepat dengan filter spesifikasi spesifik (socket, wattage, RAM type).",
      problem: "E-commerce umum memiliki filter kaku yang me-reload halaman dan menyulitkan pencocokan kompatibilitas komponen komputer.",
      constraints: "Harus sangat responsif di perangkat mobile dengan animasi keranjang yang jelas.",
      thinking: "Menerapkan client-side in-memory faceted search untuk filter instan, dipadu dengan optimistic updates pada cart state.",
      architectureDetail: "Next.js Static Generation untuk halaman detail produk demi SEO maksimal, dipadukan dengan client hydration untuk dynamic interactive filters.",
      challenges: "Sinkronisasi state keranjang antara localStorage dan session server tanpa layout thrashing saat page navigation.",
      result: "Etalase katalog yang instan tanpa loading spinner di antara filter spesifikasi.",
      lessons: "Optimistic UI secara dramatis meningkatkan persepsi kecepatan bagi pengguna.",
    },
  },
  {
    id: 5,
    specNumber: "SPEC_05",
    year: "2024",
    title: "Dashboard Metrik & Operasional Internal",
    category: "Fullstack & APIs",
    image: "/assets/Project7.jpg",
    description: "Dashboard pemantauan operasional internal dengan visualisasi grafik metrik transaksi, audit log aktivitas pengguna, dan panel konfigurasi sistem.",
    technologies: ["React", "Chart.js", "RESTful API", "Tailwind CSS", "Role-Based Access"],
    role: "Fullstack Developer",
    status: "Completed",
    scaleType: "compact",
    caseStudy: {
      context: "Monitoring beban sistem internal dan ringkasan transaksi berkala untuk tim manajemen.",
      problem: "Tidak adanya visibilitas visual terhadap spike aktivitas pengguna dan status layanan background.",
      constraints: "Data visual harus mudah dibaca oleh non-engineer tanpa mengurangi kedalaman log forensik.",
      thinking: "Membangun antarmuka modular bergaya dashboard monolitik dengan grafik agregasi berkala dan filtering rentang waktu.",
      architectureDetail: "React UI mengonsumsi aggregated API endpoints yang telah di-cache, mengurangi beban kueri langsung ke tabel raw log.",
      challenges: "Menjaga agar grafik visual tetap responsif saat me-render ribuan data points time-series.",
      result: "Menyediakan visibilitas real-time bagi para pemangku kepentingan tanpa perlu kueri manual ke database.",
      lessons: "Agregasi data di sisi server adalah kunci utama performa rendering visualisasi grafik.",
    },
  },
  {
    id: 6,
    specNumber: "SPEC_06",
    year: "2024",
    title: "Portal Keanggotaan & Korwil Regional ASPIKOM",
    category: "Enterprise / ERP",
    image: "/assets/Project3.jpg",
    description: "Sistem pendataan terdistribusi untuk struktur koordinator wilayah (Korwil) ASPIKOM, pelaporan kegiatan berkala, serta arsip data akademisi komunikasi.",
    technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "RBAC"],
    role: "Backend Engineer",
    status: "Completed",
    scaleType: "compact",
  },
  {
    id: 7,
    specNumber: "SPEC_07",
    year: "2024",
    title: "Sistem Administrasi Warga & Organisasi Terpadu",
    category: "Fullstack & APIs",
    image: "/assets/Project5.jpg",
    description: "Aplikasi administrasi pendataan anggota tersentralisasi dengan nomor registrasi unik, manajemen verifikasi multi-tingkat, dan validasi berkas terstruktur.",
    technologies: ["Laravel", "PostgreSQL", "Tailwind CSS", "Reporting Engine"],
    role: "Fullstack Engineer",
    status: "Completed",
    scaleType: "compact",
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
    issuer: "Security Assessment & Responsible Disclosure Recognition",
    category: "Security",
    year: "2024",
    image: "/assets/sertifikat/Sertifikat6.jpg",
    highlight: "Pelaporan Celah Keamanan Terverifikasi",
    credentialNote: "Pengakuan etis atas identifikasi dan pelaporan kerentanan keamanan web secara bertanggung jawab sesuai prinsip disclosure.",
  },
  {
    id: 2,
    title: "Penghargaan Siswa Berprestasi Dinas Pendidikan Jawa Timur",
    issuer: "Dinas Pendidikan Provinsi Jawa Timur",
    category: "Pemerintah",
    year: "2024",
    image: "/assets/sertifikat/Sertifikat1.jpg",
    highlight: "Apresiasi Resmi Pemprov Jatim",
    credentialNote: "Penghargaan tingkat provinsi atas prestasi konsisten dalam kejuruan Rekayasa Perangkat Lunak dan teknologi informasi.",
  },
  {
    id: 3,
    title: "Juara III Web Development Competition Tingkat Nasional",
    issuer: "National Web Dev Competition — Tim Kuat Iman",
    category: "Kompetisi",
    year: "2024",
    image: "/assets/sertifikat/Sertifikat2.jpg",
    highlight: "Juara 3 Tingkat Nasional",
    credentialNote: "Peringkat ketiga dalam kompetisi rekayasa web nasional yang menguji arsitektur, responsivitas, dan pemecahan masalah teknis.",
  },
  {
    id: 4,
    title: "Juara Lomba Web Development SMA/SMK — ICONFEST",
    issuer: "ICONFEST — HIMAFOR Informatics Study Club",
    category: "Kompetisi",
    year: "2023",
    image: "/assets/sertifikat/Sertifikat3.png",
    highlight: "Peringkat Terbaik Web Dev",
    credentialNote: "Penghargaan tertinggi atas inovasi produk digital dan kualitas kode antarmuka web.",
  },
  {
    id: 5,
    title: "Piagam Prestasi Bidang Keahlian Rekayasa Perangkat Lunak",
    issuer: "SMK Negeri 4 Bojonegoro",
    category: "Akademik",
    year: "2024",
    image: "/assets/sertifikat/Sertifikat5.jpg",
    highlight: "Siswa Berprestasi Jurusan RPL",
    credentialNote: "Predikat A mutlak pada Algoritma, Struktur Data, OOP, dan Pemrograman Web.",
  },
  {
    id: 6,
    title: "Sertifikat Schematics National Tech Competition",
    issuer: "Institut Teknologi Sepuluh Nopember (ITS)",
    category: "Kompetisi",
    year: "2023",
    image: "/assets/sertifikat/Sertifikat7.jpg",
    highlight: "Schematics ITS Surabaya",
    credentialNote: "Partisipasi dan seleksi kompetisi teknologi komputasi nasional bergengsi.",
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
    highlightProjects: ["PT PAS Enterprise System", "ASPIKOM National Registry", "Sistem Administrasi Warga"],
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
    highlightProjects: ["EduGeografi Interactive Geospatial", "Hardware E-Commerce Engine", "Dashboard Metrik Internal"],
  },
};


