import KrakenTapV1Preview from "../../../assets/cases/kraken-tap-v1/preview.jpg";
import KrakenTapV1Intro from "../../../assets/cases/kraken-tap-v1/intro.jpg";
import KrakenTapV1Gallery1 from "../../../assets/cases/kraken-tap-v1/gallery-1.jpg";
import KrakenTapV1Gallery2 from "../../../assets/cases/kraken-tap-v1/gallery-2.png";
import KrakenTapV1Gallery3 from "../../../assets/cases/kraken-tap-v1/gallery-3.jpg";
import KrakenTapV1Gallery4 from "../../../assets/cases/kraken-tap-v1/gallery-4.jpg";
import Krdesign from "../../../assets/cases/kraken-tap-v1/kr-design2.jpg";
import Krstake from "../../../assets/cases/kraken-tap-v1/kr-stake2.jpg";

// import KrakenStakingPreview from '../../../assets/cases/kraken-staking/preview.jpg';
// import KrakenStakingIntro from '../../../assets/cases/kraken-staking/intro.jpg';
// import KrakenGallery1 from '../../../assets/cases/kraken-staking/gallery-1.png';
// import KrakenGallery2 from '../../../assets/cases/kraken-staking/gallery-2.png';
// import KrakenGallery3 from '../../../assets/cases/kraken-staking/gallery-3.png';
// import KrakenGallery4 from '../../../assets/cases/kraken-staking/gallery-4.png';

import KarratPreview from "../../../assets/cases/karrat/preview.jpg";
import KarratIntro from "../../../assets/cases/karrat/intro.jpg";
import KarratGallery1 from "../../../assets/cases/karrat/gallery-1.png";
import KarratGallery2 from "../../../assets/cases/karrat/gallery-2.png";
import KarratGallery3 from "../../../assets/cases/karrat/gallery-3.jpg";
import KarratGallery4 from "../../../assets/cases/karrat/gallery-4.png";
import Karatdesign from "../../../assets/cases/karrat/karat-design2.jpg";

import ElectraPreview from "../../../assets/cases/electra/preview.png";
import ElectraIntro from "../../../assets/cases/electra/intro.png";
import ElectraGallery1 from "../../../assets/cases/electra/gallery-1.png";
import ElectraGallery2 from "../../../assets/cases/electra/gallery-2.jpg";
import ElectraGallery3 from "../../../assets/cases/electra/gallery-3.jpg";
import ElectraGallery4 from "../../../assets/cases/electra/gallery-4.png";
import ElectraDesign from "../../../assets/cases/electra/el-design.png";
import ElectraStaking from "../../../assets/cases/electra/el-stake2.jpg";

import RWAPlatformPreview from "../../../assets/cases/rwa-platform/preview.jpg";
import RWAPlatformIntro from "../../../assets/cases/rwa-platform/intro.jpg";
import RwaDesign from "../../../assets/cases/rwa-platform/rwa-design.png";
import RwaUx from "../../../assets/cases/rwa-platform/rwa-ux2.jpg";
import RwaOwner from "../../../assets/cases/rwa-platform/rwa-owner.png";
import RwaSellBuy from "../../../assets/cases/rwa-platform/rwa-buysell.png";

const KARRAT = {
  id: "karrat",
  title: "Karrat — Fractional Real Estate Ownership",
  preview_image: KarratPreview,
  tags: ["NFT", "Solidity smart-contracts", "Web3", "Business", "Tokenization"],
  short:
    "A modular NFT-based platform for investing in Dubai real estate, offering fractional ownership, automated revenue distribution, and decentralized governance via smart contracts.",
  intro_image: KarratIntro,
  text_blocks: [
    {
      title:
        "Overview: Karrat is a company with extensive experience in the UAE real estate market. The business faced a common challenge: high entry barriers and complex legal procedures limited the pool of private investors.",
      text: [
        "📈Business Objective: To remove existing barriers and create a platform that allows investors to acquire a share in Dubai real estate as easily as trading stocks. The goal was to attract global capital by offering a transparent and liquid investment instrument.",
        "Our Role: We developed a Web3 platform for tokenizing real-world assets (RWA), where each NFT represents a fractional ownership of a property, and all financial transactions are automated via smart contracts.",
        "✅Solution: A modular ecosystem for fractional real estate ownership. We designed a smart contract architecture that ensures transparency, security, and flexibility throughout the investment process.",
      ],
    },
    {
      text: [
        "Evolving NFT Lifecycle — From Groundbreaking to Completion. We implemented a unique staged development mechanic where each NFT evolves alongside the physical real estate asset — from the foundation stage to project completion. As construction progresses, the NFT’s metadata and yield parameters automatically update, reflecting the property’s current value and stage of readiness.",
        "This dynamic structure not only makes the investment process more transparent and engaging, but also allows investors to track the real-world growth of their digital assets in real time. The feature bridges the emotional and financial connection between virtual ownership and tangible progress, transforming traditional real estate investment into an interactive experience.",
        "👨🏼‍💻Decentralized Asset Governance (Governance & DAO). To strengthen investor involvement, we integrated a decentralized governance system that allows NFT holders to directly influence the fate of their assets. Through an on-chain voting mechanism — operating under the principle of 1 square foot = 1 vote — investors can collectively make key decisions, such as approving the sale, renovation, or reinvestment of a property. This governance layer empowers the community with real ownership rights and decision-making power, turning passive investors into active stakeholders within the ecosystem.",
      ],
    },
    {
      title:
        "✅ Result: A Comprehensive Business Solution. We delivered far more than just a website — we built a fully functional, ready-to-deploy investment platform that empowers Karrat to:",
      text: [
        "1) Attract global investors to real estate projects while minimizing legal overhead.",
        "2) Offer the market a unique product — liquid, tradable shares in real estate assets.",
        "3) Increase investor trust through complete on-chain transparency of all operations.",
        "4) Manage the entire ecosystem effortlessly via an intuitive admin dashboard, without the need for developer involvement.",
        "The result is a scalable, transparent, and investment-ready Web3 solution that bridges traditional real estate and blockchain innovation.",
      ],
    },
  ],
  gallery: [
    [
      {
        src: KarratGallery1,
        title: "NFTs as Digital Proof of Ownership (ERC-721)",
        description:
          "Each NFT represents a fractional share of a real estate asset, ranging from 0.1 to several hundred square feet. Unlike traditional ownership documents, every NFT contains all essential property details — from geolocation to construction stage — and can be freely traded on the secondary market at any time. Additionally, it automatically grants the holder rights to a proportional share of the property’s income, providing transparency and liquidity for investors.",
      },
      {
        src: KarratGallery2,
        title: "Automated Profit Distribution (Revenue Vault)",
        description:
          "A dedicated Revenue Vault smart contract was developed to automatically and proportionally distribute income generated from property rentals or sales among NFT holders. This automation removes the human factor, ensuring fair, timely, and fully transparent payouts, and establishes a trustless revenue-sharing system within the platform.",
      },
    ],
    [
      {
        src: Karatdesign,
        title: "User Experience & Design",
        description:
          "The platform features a clean, intuitive interface that simplifies complex real estate and Web3 interactions. Users can easily browse properties, track project stages, view earnings, and manage NFTs, all within a visually engaging and mobile-friendly design built for trust and clarity.",
      },
      {
        src: KarratGallery4,
        title: "Admin Dashboard for Project Owners",
        description:
          "For the project team, we developed a comprehensive admin panel that provides full control over property listings, NFT issuance, revenue tracking, and user activity. The dashboard streamlines daily operations, offering real-time analyticsand an effortless way to manage the entire ecosystem from a single interface.",
      },
    ],
  ],
  ending_text: "Below are links to current versions of the project files:",
  links: [
    {
      icon: "figma",
      text: "Web design",
      link: "https://www.figma.com/design/PGTLZYPpwtn7j3xGUTf4IN/Karrat-NFT-(Work)?node-id=3205-1034&t=QcSlOJsX639peyos-1",
    },
    {
      icon: "github",
      text: "Smart-contracts",
      link: "https://github.com/digitalsoupteam/KarratRealEstateWeb3",
    },
    {
      icon: "gdrive",
      text: "Project files",
      link: "https://drive.google.com/drive/folders/1j-S3rTtFV9erKm_DOGmBByGt3DvZKbvt?usp=sharing",
    },
  ],
};

const ELECTRA = {
  id: "electra",
  title: "Electra — Web3 Investment Platform for Real-World E-Mobility Assets",
  preview_image: ElectraPreview,
  tags: ["NFT", "Solidity smart-contracts", "Business", "Web3", "Design"],
  short:
    "A turnkey Web3 platform turning scooters and electric vehicles into revenue-generating NFT assets, with staking, tokenized rewards, and global investor access.",
  intro_image: ElectraIntro,
  ending_text: "Below are links to current versions of the project files:",
  text_blocks: [
    {
      title:
        "Overview: Electra is an established European e-mobility rental service with a well-developed infrastructure and mobile applications. Having previously attracted institutional investment, the business was ready to scale to a new level.",
      text: [
        "Business Objective: To open investment opportunities for the global crypto community, enabling private investors to allocate funds into real, revenue-generating assets — such as electric scooters and cars — while earning profits directly in cryptocurrency.",
        "Our Role: To develop a turnkey Web3 platform that transforms each vehicle into a revenue-producing NFT asset, ensuring a transparent, secure, and automated investment process.",
        "Solution: A transparent and profitable blockchain-based ecosystem that bridges traditional asset-backed investments with the Web3 economy.",
      ],
    },
    {
      title: "💻 Key Developed Modules",
      text: [
        "Digital Asset Representation (ERC-721 NFT Contract). Each NFT serves as a digital representation of a real-world vehicle, containing all critical data — from model and launch date to a unique GPS identifier. This ensures that investors own a stake in a specific, operational asset, providing transparency and trust in the investment process.",
        "💰 Revenue Generation Mechanism (Staking Contract). We developed a dedicated staking contract that allows investors to lock their NFTs for 1, 3, or 5 years to earn passive income.",
        "1) Investor Benefit: Guaranteed APR, automatically credited.",
        "2) Flexibility: Early withdrawal is possible with a predefined penalty, increasing investor confidence and platform trustworthiness.",
        "💸 Profit Conversion Module (ELCT Token & Liquidity Pool). To streamline the process of realizing profits, we implemented the following system:",
        "1) Earnings are paid out in the platform’s native token, ELCT.",
        "2) Users can easily convert ELCT into stablecoins (USDT) directly on the platform with just a few clicks.",
        "3) Outcome: A seamless path from investment to profit realization, making it simple and intuitive for users to see returns in their wallets.",
      ],
    },
    {
      text: [
        "✅ Results: We delivered a fully functional, production-ready Web3 platform that generated measurable business value for Electra. Approximately $50,000 was raised from private investors through the initial NFT sale.",
        "The platform itself became a valuable asset, and its eventual sale returned a profit exceeding 130% of the development costs, demonstrating both the economic impact and scalability of the solution.",
      ],
    },
  ],
  gallery: [
    [
      {
        src: ElectraGallery1,
        title: "",
        description:
          "The platform was built on BNB Smart Chain (BSC), chosen for its low transaction costs, EVM compatibility, and seamless integration with Binance’s centralized infrastructure. This setup enabled efficient NFT minting, smooth microtransactions, and a reliable bridge between real-world assets and blockchain-based investments, ensuring a scalable and cost-effective solution for a global user base.",
      },
      {
        src: ElectraGallery2,
        title: "",
        description:
          "To maximize flexibility and user engagement, we designed several implementation paths. Users could purchase NFTs using various BSC tokens, stake their NFTs across multiple protocols, and earn ELCT tokens as rewards. This approach created a dynamic investment ecosystem, allowing participants to interact with the platform in multiple ways while incentivizing long-term involvement and asset growth.",
      },
    ],
    [
      {
        src: ElectraDesign,
        title: "",
        description:
          "The platform was designed to be simple, intuitive, and accessible, making Web3 investment mechanics easy to understand for users of all experience levels. A clean interface allows users to browse assets, stake NFTs, and track earnings effortlessly.",
      },
      {
        src: ElectraStaking,
        title: "",
        description:
          "Interactive dashboards, progress indicators, and real-time profit updates create a sense of engagement and achievement, while mobile optimization ensures a seamless experience on both web and mobile devices, reinforcing transparency and user confidence.",
      },
    ],
  ],
  links: [
    {
      icon: "github",
      text: "Website github",
      link: "https://github.com/dashewski/ElectraNFTmarketplace",
    },
    {
      icon: "figma",
      text: "Web design",
      link: "https://www.figma.com/file/KFYqtPB3rkuxsgvupWAPrH/Electra-NFT--Tilda-Sans-(Copy)?type=design&node-id=0%3A1&mode=design&t=VA8pt6NqtU9tD3NI-1",
    },
    {
      icon: "github",
      text: "Smart-contracts",
      link: "https://github.com/digitalsoupteam/ElectraWeb3",
    },
    {
      icon: "cyberscope",
      text: "Security Audit",
      link: "https://drive.google.com/drive/folders/1Bhwc1wCiSIzxcRGsl0F_BfM4DgbBt2X_",
    },
  ],
};

// const KRAKEN_STAKING = {
//   id: 'kraken-staking',
//   title: 'Kraken staking',
//   preview_image: KrakenStakingPreview,
//   tags: ['web3', 'Solana Smart contracts', 'Design', 'Staking'],
//   short:
//     'As part of our work with the project we needed to correct what had been done before us, as well as write staking for the ecosystem token.',
//   intro_image: KrakenStakingIntro,
//   text_blocks: [
//     {
//       text: [
//         'Not so long ago we started to fully develop the Kraken ecosystem on the Solana network, which you can read about in other cases, the first task was to write Staking and add a web interface for it to the existing site. After studying the site, we realized that we should start by completely rewriting it, making the code modern and clean.',
//       ],
//     },
//     {
//       text: [
//         'The proposal from our side was to develop a system with modern point mechanics, which at the time of development (summer 2024) was the most relevant. Users were offered to block tokens of the project by accumulating points, which were registered in the database. Many projects went in this way: Linea, Scroll, Elixir. In the future, ecosystem and partner rewards are expected for project points.',
//       ],
//     },
//   ],
//   gallery: [
//     [
//       {
//         src: KrakenGallery1,
//         title: 'Rework',
//         description:
//           "Webpage was written on a crooked react, we rewrote it completely on Next.js",
//       },
//       {
//         src: KrakenGallery2,
//         title: 'Engineering',
//         description:
//           'Then we agreed with the customer on the staking models, held several call-conversations',
//       },
//     ],
//     [
//       {
//         src: KrakenGallery3,
//         title: 'Designing',
//         description:
//           "For staking, we developed a unique design. Link to the design project at the end of this page",
//       },
//       {
//         src: KrakenGallery4,
//         title: 'Project presentation',
//         description:
//           'Additionally, we made a presentation of the project with all future ecosystem applications.  Link to full presentation at the end of this page',
//       },
//     ],
//   ],
//   ending_text: 'Below are links to current versions of the project files:',
//   links: [
//     {
//       icon: 'github',
//       text: 'Website github',
//       link: 'https://github.com/digitalsoupteam/KrakenWebsite',
//     },
//     {
//       icon: 'figma',
//       text: 'Project design',
//       link: 'https://www.figma.com/design/1q746N6bAlTdCwRcqVGzOK/Kraken-(Copy)?node-id=252-34231&t=l85B23kqO81VhKCZ-1',
//     },
//     {
//       icon: 'github',
//       text: 'Staking program',
//       link: 'https://github.com/digitalsoupteam/KrakenStaking',
//     },
//     {
//       icon: 'gdrive',
//       text: 'Presentation',
//       link: 'https://drive.google.com/file/d/1lXXl56cRD1xS6TwdvS58ltz_hUDjFqWk/view?usp=sharing',
//     }
//   ],
// };

const KRAKEN_TAP_V1 = {
  id: "kraken-tap-v1",
  title: "Kraken Ecosystem — Viral Tap-to-Earn Game on Solana",
  preview_image: KrakenTapV1Preview,
  tags: ["web3", "Game dev", "Mini apps", "Game design", "Solana"],
  short:
    "A high-performance blockchain game on Solana designed to attract and engage users from Web2 and Web3, combining viral mechanics, rewards, and seamless crypto integration.",
  intro_image: KrakenTapV1Intro,
  text_blocks: [
    {
      title:
        "📈 Goal: The Kraken ecosystem aimed to attract and engage a large new audience from both Web3 and Web2 segments. The challenge was to create a viral product with strong user retention potential and seamless scalability.",
      text: [
        "Task: Develop a high-performance tap-to-earn game integrated with the Solana blockchain, capable of handling hundreds of thousands of concurrent players.",
        "Solution: We built a scalable gaming platform with viral mechanics designed for massive user engagement.",
        "📊 Performance Challenge: One of the key challenges was ensuring stable performance and instant responsiveness for more than 100,000 daily active users (DAU).",
      ],
    },
    {
      title:
        "The product was designed with a strong focus on organic growth and habit formation among users.",
      text: [
        "Simple Game Mechanics: At its core, the gameplay revolves around a simple yet engaging action — tapping the screen to earn points. This mechanic encourages players to return to the app daily, reinforcing consistent user activity.",
        "Competitive Element: We introduced an hourly updated leaderboard, which maintained a healthy sense of competition while minimizing the load on the database.",
        "Viral Growth: A referral system was implemented, rewarding users for inviting friends. This became a powerful and cost-efficient tool for audience expansion and community growth.",
      ],
    },
    {
      title: "Infrastructure Reliability & Data Security",
      text: [
        "The application was deployed on high-performance virtual servers in Singapore (16 vCPU), supported by a comprehensive system ensuring operational stability.",
        "⏮️Fault Tolerance: Automated backup and hot-restart mechanisms were configured to guarantee uninterrupted service in case of system failures.",
        "🧿Monitoring: Graylog and Prometheus were implemented for real-time logging and monitoring, providing full visibility into system performance and health.",
        "📀Data Integrity: Off-chain backup mechanisms were introduced, including Redis snapshots and Tarantool dumps, to ensure the preservation of user data and prevent information loss.",
        "✅ Result: A Scalable, Production-Ready Product",
        "We delivered a stable and high-performance platform fully prepared for explosive growth. The architecture confidently handles loads exceeding the target of 100,000 daily active users, while the combination of well-designed gamificationand viral mechanics created a product ready for large-scale marketing campaigns and new audience acquisitionwithin the client’s ecosystem.",
      ],
    },
  ],
  gallery: [
    [
      {
        src: KrakenTapV1Gallery1,
        title: "Technical Approach:",
        description:
          "To achieve this, we designed a system architecture based on Tarantool — a high-speed, in-memory platform that functions both as a database and an application server. This solution allowed the platform to process up to 4,000 requests per second, maintaining zero latency even during peak loads.",
      },
      {
        src: Krdesign,
        title: "User Experience & Accessibility:",
        description:
          "We placed particular emphasis on accessibility and ease of use. The game was developed both as a web application and a Telegram Mini App. Web3 integration enables users to connect crypto wallets on the Solana network. Telegram ID and Email login options were implemented for users new to crypto, ensuring a frictionless onboarding experience.",
      },
    ],
    [
      {
        src: Krstake,
        title: "Token Staking & Rewards:",
        description:
          "To enhance user engagement and long-term interest, we integrated a staking system for the project’s native token. Users could stake their tokens directly within the app and receive rewards in return, fostering deeper participation and loyalty within the ecosystem.",
      },
      {
        src: KrakenTapV1Gallery4,
        title: "📊 Performance Optimization:",
        description:
          "During stress testing, we identified a latency issue in Tarantool related to request pool configuration. After targeted optimizations, the system achieved a throughput of up to 4,000 requests per second (RPS). This performance comfortably exceeded the target metric of 100,000 daily active users (DAU).",
      },
    ],
  ],
  ending_text: "Below are links to current versions of the project files:",
  links: [
    {
      icon: "github",
      text: "GitHub Application",
      link: "https://github.com/digitalsoupteam/Kraken-tap-to-earn-frontend",
    },
    {
      icon: "figma",
      text: "Project design",
      link: "https://www.figma.com/design/1q746N6bAlTdCwRcqVGzOK/Kraken-(Copy)?node-id=396-23652",
    },
    {
      icon: "github",
      text: "Github Backend",
      link: "https://github.com/digitalsoupteam/Kraken-tap-to-earn",
    },
  ],
};

const RWA_PLATFORM = {
  id: "rwa-platform",
  title: "Global Web3 RWA Investment Ecosystem",
  preview_image: RWAPlatformPreview,
  tags: [
    "web3",
    "Design",
    "Smart-Contracts",
    "Backend",
    "Frontend",
    "Artificial intelligence",
  ],
  short:
    "A full-scale investment RWA platform connecting entrepreneurs with global investors, featuring AI risk assessment, AMM trading, DAO governance, and transparent tokenized business ownership.",
  intro_image: RWAPlatformIntro,
  text_blocks: [
    {
      title:
        "We developed a comprehensive blockchain-based platform that enables any promising business — from local manufacturing companies to IT startups — to raise global investment capital seamlessly and transparently.",
      text: [
        "Under the hood lies a complex, production-grade infrastructure that merges multiple layers of Web3 technology into a single ecosystem. The platform empowers investors to participate in the real economy, earn yield, and freely trade their equity tokens on a built-in secondary market.",
        "Buyers of its ‘crypto shares’ - tokens are guaranteed to claim a return of their funds and a pre-determined in the protocol % of profit from investments in a future company. The protocol includes several degrees of security, token creators undergo various verifications, as well as evaluation by artificial intelligence.",
        "🤖 The system integrates:",
        "1) Crowdfunding mechanics with built-in guarantees of return and capital safety;",
        "2) Automated token trading through a native AMM marketplace;",
        "3) An AI-powered risk assessment engine that analyzes project metrics and investment performance;",
        "4) A DAO governance model enabling community-driven control over the entire platform.",
        "This solution gives entrepreneurs a powerful fundraising infrastructure and investors a transparent, liquid, and decentralized investment environment — fully backed by robust smart contracts, scalable architecture, and enterprise-level security.",
      ],
    },
    {
      title: "Key Value-Generating Modules",
      text: [
        "🤖 AI-Powered Risk Assessment. An integrated artificial intelligence assistant evaluates business plans and financial documents, generating an objective risk score for each project. This enables investors to make well-informed, data-driven decisions, improving confidence and reducing exposure to high-risk ventures.",
        "📈 Integrated AMM Marketplace for Free Trading. We developed a custom AMM engine that allows investors to trade project tokens instantly, without waiting for dividend payouts. This creates a dynamic secondary market, providing liquidity and attracting a broader range of participants.",
        "📊 DAO for Decentralized Governance. The platform is governed by its community through a Decentralized Autonomous Organization (DAO). Token holders vote on key system parameters and upgrades, ensuring maximum transparency and promoting organic demand for the native token.",
        "💾 Technology Stack & Architecture. To ensure stable, scalable performance, the platform leverages a modern tech stack: Core: Bun.js and Elysia.js with TypeScript. Databases: MongoDB for flexible data storage and Redis for high-speed caching. Microservices & Messaging Queues: RabbitMQ and BullMQ for asynchronous processing of thousands of concurrent operations. Infrastructure: Docker containerization, Nginx and Cloudflare for security and proxying, with Prometheus and Grafana for monitoring.",
        "🔒 Smart Contract Security. All smart contracts are designed for secure upgradability using UUPS proxies and include emergency stop mechanisms. Before deployment, every contract undergoes a mandatory external audit, ensuring robustness, reliability, and safety for users.",
      ],
    },
    {
      title: "✅ Results & Impact",
      text: [
        "We delivered a fully functional, production-ready Web3 investment platform that bridges real-world businesses with a global investor community. Entrepreneurs can now raise funds transparently, while investors gain liquid, tradeable equity tokens backed by tangible assets.",
        "The platform’s combination of AI-driven risk assessment, AMM liquidity, DAO governance, and robust infrastructure ensures security, transparency, and scalability. By providing an intuitive UX and modern design, the system attracts and retains users across different experience levels, creating a dynamic, self-sustaining ecosystem that adds measurable value to all stakeholders.",
      ],
    },
  ],
  gallery: [
    [
      {
        src: RwaOwner,
        title: " How It Works — From Idea to Launch",
        description:
          "For entrepreneurs, the process begins with creating a project, completing identity and business verification, and issuing their own business tokens directly through the platform. Once approved, they can launch a fundraising campaign and attract investment from a global audience in just a few steps — all through automated smart contracts that ensure transparency and compliance.",
      },
      {
        src: RwaSellBuy,
        title: " From Investment to Profit",
        description:
          "For investors, participation is simple: they can purchase project tokens, gaining fractional ownership and rights to future dividends. Once fundraising is complete, tokens become freely tradable on the platform’s AMM marketplace, providing instant liquidity and creating continuous trading opportunities. This model turns traditional venture funding into a dynamic, transparent, and self-sustaining digital economy.",
      },
    ],
    [
      {
        src: RwaDesign,
        title: "Design",
        description:
          "The platform features a clean, modern, and visually engaging interface, ensuring that complex investment processes feel accessible and trustworthy. Thoughtful visual cues and consistent design elements guide users through every step, from browsing projects to tracking earnings and managing tokens.",
      },
      {
        src: RwaUx,
        title: "User Experience (UX)",
        description:
          "The UX is optimized for simplicity and efficiency, allowing users to invest, stake, and trade tokens seamlessly on both web and mobile devices. Interactive dashboards, real-time updates, and intuitive workflows make the platform easy to navigate, even for users new to blockchain and Web3 technologies.",
      },
    ],
  ],
  ending_text: "Below are links to current versions of the project files:",
  links: [
    {
      icon: "github",
      text: "GitHub Backend",
      link: "https://github.com/digitalsoupteam/rwa-platform-backend",
    },
    {
      icon: "github",
      text: "GitHub Contracts",
      link: "https://github.com/digitalsoupteam/rwa-platform",
    },
    {
      icon: "github",
      text: "GitHub Frontend",
      link: "https://github.com/digitalsoupteam/rwa-platform-frontend",
    },
  ],
};
const CasesData = [RWA_PLATFORM, KRAKEN_TAP_V1, ELECTRA, KARRAT];

export default CasesData;
