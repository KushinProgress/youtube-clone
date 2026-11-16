export const CATEGORIES = [
  "All",
  "Gaming",
  "Music",
  "Live",
  "Mixes",
  "Podcasts",
  "Graphic Design",
  "Web Development",
  "Artificial Intelligence",
  "Smartphones",
  "Science",
  "Lofi Beats",
  "React",
  "Next.js",
  "Anime",
  "Recently uploaded"
];

export const MOCK_VIDEOS = [
  {
    id: "v1",
    title: "Building an Autonomous AI Agent with React 19 & Next.js 15 (Full Course)",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1280&q=80",
    channel: {
      name: "TechLead Pro",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      subscribers: "1.42M",
      verified: true
    },
    views: "842K views",
    rawViews: 842000,
    uploadedAt: "3 days ago",
    duration: "42:15",
    progress: 68,
    category: "Web Development",
    description: "Learn how to build production-ready autonomous AI agents using the latest React 19 hooks, Next.js 15 App Router, and modern LLM APIs. In this masterclass, we cover tool calling, memory management, and deployment.\n\nTimestamps:\n00:00 Intro & Architecture\n04:30 Setting up Next.js 15\n12:10 React 19 Actions & Optimistic UI\n25:40 Streaming responses with AI SDK\n38:20 Final Deployment",
    videoSampleUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    likes: "48K",
    commentsCount: "1,248",
    comments: [
      {
        id: "c1",
        author: "DevArchitect",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        text: "The explanation of streaming tool calls at 25:40 is the clearest tutorial I've seen all year. Subscribed!",
        time: "1 day ago",
        likes: 312
      },
      {
        id: "c2",
        author: "Sarah_Codes",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
        text: "React 19 Server Actions paired with this architecture is a complete game changer. Thank you!",
        time: "2 days ago",
        likes: 184
      }
    ]
  },
  {
    id: "v2",
    title: "M3 Max MacBook Pro — 1 Year Later Review: Is It Still the King?",
    thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1280&q=80",
    channel: {
      name: "Marcus Brownlee",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
      subscribers: "18.6M",
      verified: true
    },
    views: "2.1M views",
    rawViews: 2100000,
    uploadedAt: "1 week ago",
    duration: "18:42",
    progress: 0,
    category: "Smartphones",
    description: "So I've been using the M3 Max MacBook Pro as my daily driver for video editing, compiling code, and travel. Here is everything you need to know before buying, including battery degradation, thermal throttling, and real-world durability.",
    videoSampleUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    likes: "142K",
    commentsCount: "3,890",
    comments: [
      {
        id: "c3",
        author: "TechEnthusiast",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
        text: "18 minutes of pure, unbiased honest tech journalism. Still rocking my M1 but this temptation is real.",
        time: "5 days ago",
        likes: 954
      }
    ]
  },
  {
    id: "v3",
    title: "Relaxing Japanese Lofi Hip Hop Beats [chill vibes to study / relax / code to]",
    thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1280&q=80",
    channel: {
      name: "Lofi Tokyo Radio",
      avatar: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=120&q=80",
      subscribers: "5.1M",
      verified: true
    },
    views: "14M views",
    rawViews: 14000000,
    uploadedAt: "Streamed 2 weeks ago",
    duration: "1:24:00",
    progress: 45,
    category: "Lofi Beats",
    description: "Peaceful lofi hip hop mix with gentle rain sounds and ambient piano chords. Perfect background soundtrack for studying, late night programming, reading, or deep focus work.",
    videoSampleUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    likes: "680K",
    commentsCount: "14,520",
    comments: [
      {
        id: "c4",
        author: "MidnightCoder",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80",
        text: "Listening to this at 3:30 AM while fixing a critical production bug. This mix saved my sanity.",
        time: "6 days ago",
        likes: 1402
      }
    ]
  },
  {
    id: "v4",
    title: "Why Quantum Computers are Entering a New Era (1,000+ Logical Qubits)",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1280&q=80",
    channel: {
      name: "Veritas Science",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
      subscribers: "14.2M",
      verified: true
    },
    views: "3.4M views",
    rawViews: 3400000,
    uploadedAt: "4 days ago",
    duration: "24:50",
    progress: 0,
    category: "Science",
    description: "Quantum error correction just took a massive leap forward. In this video, we visit the laboratories building neutral-atom quantum processors and look inside dilution refrigerators running at 15 millikelvin.",
    videoSampleUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    likes: "210K",
    commentsCount: "5,120",
    comments: [
      {
        id: "c5",
        author: "PhysicsGeek",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80",
        text: "The visualization of surface codes and topological braiding made something so abstract actually intuitive.",
        time: "3 days ago",
        likes: 820
      }
    ]
  },
  {
    id: "v5",
    title: "GTA VI — Official Next-Gen Gameplay Breakdown & Hidden Details",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1280&q=80",
    channel: {
      name: "IGN Gaming Central",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=120&q=80",
      subscribers: "17.9M",
      verified: true
    },
    views: "5.8M views",
    rawViews: 5800000,
    uploadedAt: "5 days ago",
    duration: "16:04",
    progress: 85,
    category: "Gaming",
    description: "We analyze every single frame of the latest Vice City gameplay footage: dynamic volumetric clouds, NPC procedural AI routines, physics engine upgrades, and vehicle deformation physics.",
    videoSampleUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    likes: "410K",
    commentsCount: "8,940",
    comments: [
      {
        id: "c6",
        author: "GamerX99",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
        text: "The hair physics and water reflections at 07:15 are unreal. 2026 is going to be legendary.",
        time: "4 days ago",
        likes: 1205
      }
    ]
  },
  {
    id: "v6",
    title: "The Art of Modern UI/UX Design — Typography, Spacing & Visual Hierarchy",
    thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1280&q=80",
    channel: {
      name: "DesignCourse",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80",
      subscribers: "1.1M",
      verified: true
    },
    views: "390K views",
    rawViews: 390000,
    uploadedAt: "6 days ago",
    duration: "21:18",
    progress: 0,
    category: "Graphic Design",
    description: "Master modern product design with practical before-and-after redesigns of complex web dashboards and mobile layouts. Learn 8pt spacing grids, typography scale harmony, and subtle contrast calibration.",
    videoSampleUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    likes: "32K",
    commentsCount: "740",
    comments: [
      {
        id: "c7",
        author: "FigmaWizard",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
        text: "Gary's UI critiques always pinpoint the exact 4px margin that threw off the entire visual balance.",
        time: "2 days ago",
        likes: 310
      }
    ]
  },
  {
    id: "v7",
    title: "Joe Rogan Experience #2180 — Sam Altman on AGI, Humanoid Robotics & Energy",
    thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1280&q=80",
    channel: {
      name: "PowerfulJRE",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
      subscribers: "16.8M",
      verified: true
    },
    views: "7.2M views",
    rawViews: 7200000,
    uploadedAt: "1 week ago",
    duration: "2:54:12",
    progress: 30,
    category: "Podcasts",
    description: "Sam Altman joins Joe Rogan to discuss the path to Artificial General Intelligence, computing infrastructure, small modular nuclear reactors, and how society will adapt to intelligent machines.",
    videoSampleUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    likes: "385K",
    commentsCount: "19,400",
    comments: [
      {
        id: "c8",
        author: "FutureWatcher",
        avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=100&q=80",
        text: "The discussion around nuclear fission powering gigawatt data centers was eye opening.",
        time: "6 days ago",
        likes: 2190
      }
    ]
  },
  {
    id: "v8",
    title: "10 CSS Tricks You Probably Don't Know in 2026 (Subgrid, Anchor Positioning & More)",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1280&q=80",
    channel: {
      name: "Kevin Powell",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=120&q=80",
      subscribers: "980K",
      verified: true
    },
    views: "520K views",
    rawViews: 520000,
    uploadedAt: "2 weeks ago",
    duration: "15:47",
    progress: 0,
    category: "Web Development",
    description: "CSS has evolved dramatically! In this video, we explore native CSS Anchor Positioning, scroll-driven animations, View Transitions, :has() parent selector hacks, and color-mix() tricks.",
    videoSampleUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    likes: "49K",
    commentsCount: "920",
    comments: [
      {
        id: "c9",
        author: "FrontendNinja",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
        text: "Anchor positioning is literally saving me 50 lines of complex JavaScript popover math. Incredible video!",
        time: "10 days ago",
        likes: 670
      }
    ]
  },
  {
    id: "v9",
    title: "Hans Zimmer Live in Prague — Time & Interstellar Suite (4K Ultra HD 60FPS)",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1280&q=80",
    channel: {
      name: "Soundtrack Masters",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80",
      subscribers: "3.2M",
      verified: true
    },
    views: "18.9M views",
    rawViews: 18900000,
    uploadedAt: "1 month ago",
    duration: "14:10",
    progress: 100,
    category: "Music",
    description: "The definitive live orchestral performance of Hans Zimmer's legendary compositions for Inception and Interstellar, recorded live with a 72-piece symphonic orchestra and choir in Prague.",
    videoSampleUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    likes: "920K",
    commentsCount: "12,830",
    comments: [
      {
        id: "c10",
        author: "CinemaLover",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80",
        text: "When that pipe organ drops at 08:32, literal chills every single time without fail.",
        time: "3 weeks ago",
        likes: 4120
      }
    ]
  },
  {
    id: "v10",
    title: "Elden Ring: Shadow of the Erdtree — Complete Boss Guide & Hidden Lore",
    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1280&q=80",
    channel: {
      name: "VaatiVidya",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=120&q=80",
      subscribers: "3.1M",
      verified: true
    },
    views: "4.1M views",
    rawViews: 4100000,
    uploadedAt: "3 weeks ago",
    duration: "48:30",
    progress: 15,
    category: "Gaming",
    description: "The complete breakdown of the Land of Shadow, detailing the tragic history of Messmer the Impaler, Miquella's ascension, and the secrets buried in the Scadutree Chalice.",
    videoSampleUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    likes: "295K",
    commentsCount: "6,410",
    comments: [
      {
        id: "c11",
        author: "TarnishedOne",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
        text: "Vaati's voice could narrate the end of the world and make it feel like poetry.",
        time: "2 weeks ago",
        likes: 1890
      }
    ]
  },
  {
    id: "v11",
    title: "Designing the Ultimate Minimalist Productivity Desk Setup (2026 Edition)",
    thumbnail: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1280&q=80",
    channel: {
      name: "Matthew Encina",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      subscribers: "890K",
      verified: true
    },
    views: "980K views",
    rawViews: 980000,
    uploadedAt: "1 month ago",
    duration: "13:22",
    progress: 0,
    category: "Graphic Design",
    description: "Cable management zero-tolerance guide, custom walnut monitor risers, warm diffused bias lighting, and intentional everyday carry accessories to boost focus and reduce visual friction.",
    videoSampleUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    likes: "78K",
    commentsCount: "1,150",
    comments: [
      {
        id: "c12",
        author: "StudioWork",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
        text: "The magnetic under-desk cable raceway solution is genius. Replicating this immediately.",
        time: "3 weeks ago",
        likes: 540
      }
    ]
  },
  {
    id: "v12",
    title: "Deep Dive into React Server Components & Server Actions: How They Actually Work",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1280&q=80",
    channel: {
      name: "Jack Herrington",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
      subscribers: "420K",
      verified: true
    },
    views: "310K views",
    rawViews: 310000,
    uploadedAt: "3 weeks ago",
    duration: "26:40",
    progress: 50,
    category: "React",
    description: "No hype, just deep engineering. We inspect the React Flight client-server wire protocol, parse payload JSON chunks, examine boundary boundaries, and benchmark bundle sizes.",
    videoSampleUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    likes: "27K",
    commentsCount: "580",
    comments: [
      {
        id: "c13",
        author: "WebDevSam",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
        text: "Jack is one of the few creators who actually shows the raw network stream. Golden content.",
        time: "2 weeks ago",
        likes: 420
      }
    ]
  }
];

export const MOCK_SHORTS = [
  {
    id: "s1",
    title: "This hidden iOS 19 gesture will change how you use your phone! 📱✨",
    views: "18M views",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&h=1067&q=80",
    channel: "TechHacks Daily",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    likes: "1.2M",
    comments: "4.8K"
  },
  {
    id: "s2",
    title: "Can you spot the O(1) time complexity solution? Senior Dev Riddle 💻",
    views: "4.2M views",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=1067&q=80",
    channel: "CodeWithNeet",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    likes: "320K",
    comments: "2.1K"
  },
  {
    id: "s3",
    title: "Most satisfying 3D cloth physics simulation ever rendered 🔥",
    views: "29M views",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&h=1067&q=80",
    channel: "BlenderArtists",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80",
    likes: "2.4M",
    comments: "8.3K"
  },
  {
    id: "s4",
    title: "The legendary holy grail mechanical switch sound test ⌨️🤤",
    views: "9.6M views",
    thumbnail: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&h=1067&q=80",
    channel: "ThockyKeys",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
    likes: "890K",
    comments: "3.5K"
  },
  {
    id: "s5",
    title: "Unreal Engine 5.5 photorealism test: Real life or video game? 🤯",
    views: "14M views",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&h=1067&q=80",
    channel: "NextGenVisuals",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    likes: "1.1M",
    comments: "5.7K"
  },
  {
    id: "s6",
    title: "Making clean modern glassmorphism in CSS in 20 seconds ⚡",
    views: "6.8M views",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&h=1067&q=80",
    channel: "WebWizard",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80",
    likes: "450K",
    comments: "1.4K"
  }
];

export const SUBSCRIPTIONS = [
  {
    id: "sub1",
    name: "Marcus Brownlee",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    isLive: false,
    unread: true
  },
  {
    id: "sub2",
    name: "Lofi Tokyo Radio",
    avatar: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=100&q=80",
    isLive: true,
    unread: false
  },
  {
    id: "sub3",
    name: "Veritas Science",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    isLive: false,
    unread: true
  },
  {
    id: "sub4",
    name: "IGN Gaming Central",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=100&q=80",
    isLive: false,
    unread: false
  },
  {
    id: "sub5",
    name: "DesignCourse",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80",
    isLive: false,
    unread: true
  },
  {
    id: "sub6",
    name: "PowerfulJRE",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    isLive: false,
    unread: false
  },
  {
    id: "sub7",
    name: "Kevin Powell",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80",
    isLive: false,
    unread: true
  }
];

export const NOTIFICATIONS = [
  {
    id: "n1",
    channel: "Marcus Brownlee",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    text: "uploaded: M3 Max MacBook Pro — 1 Year Later Review: Is It Still the King?",
    time: "3 hours ago",
    thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=200&q=80",
    unread: true
  },
  {
    id: "n2",
    channel: "TechLead Pro",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    text: "uploaded: Building an Autonomous AI Agent with React 19 & Next.js 15",
    time: "1 day ago",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80",
    unread: true
  },
  {
    id: "n3",
    channel: "Lofi Tokyo Radio",
    avatar: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=100&q=80",
    text: "is live: Relaxing Japanese Lofi Hip Hop Beats [study / chill / code]",
    time: "Stream started 2 hours ago",
    thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80",
    unread: false
  },
  {
    id: "n4",
    channel: "DesignCourse",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80",
    text: "replied to your comment: 'Thanks! Glad the 8pt grid breakdown helped!'",
    time: "2 days ago",
    thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=200&q=80",
    unread: false
  }
];

export const SEARCH_SUGGESTIONS = [
  { text: "react 19 full course", type: "history" },
  { text: "next js 15 tutorial 2026", type: "history" },
  { text: "lofi hip hop radio live", type: "trending" },
  { text: "macbook pro m3 max review", type: "trending" },
  { text: "gta 6 gameplay trailer", type: "trending" },
  { text: "quantum computing explained simply", type: "trending" },
  { text: "modern css tricks 2026", type: "trending" },
  { text: "elden ring shadow of the erdtree lore", type: "trending" }
];

