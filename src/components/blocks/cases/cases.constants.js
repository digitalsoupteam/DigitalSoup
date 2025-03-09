import KrakenTapV1Preview from '../../../assets/cases/kraken-tap-v1/preview.jpg';
import KrakenTapV1Intro from '../../../assets/cases/kraken-tap-v1/intro.jpg';
import KrakenTapV1Gallery1 from '../../../assets/cases/kraken-tap-v1/gallery-1.jpg';
import KrakenTapV1Gallery2 from '../../../assets/cases/kraken-tap-v1/gallery-2.png';
import KrakenTapV1Gallery3 from '../../../assets/cases/kraken-tap-v1/gallery-3.jpg';
import KrakenTapV1Gallery4 from '../../../assets/cases/kraken-tap-v1/gallery-4.jpg';

// import KrakenStakingPreview from '../../../assets/cases/kraken-staking/preview.jpg';
// import KrakenStakingIntro from '../../../assets/cases/kraken-staking/intro.jpg';
// import KrakenGallery1 from '../../../assets/cases/kraken-staking/gallery-1.png';
// import KrakenGallery2 from '../../../assets/cases/kraken-staking/gallery-2.png';
// import KrakenGallery3 from '../../../assets/cases/kraken-staking/gallery-3.png';
// import KrakenGallery4 from '../../../assets/cases/kraken-staking/gallery-4.png';

import KarratPreview from '../../../assets/cases/karrat/preview.jpg';
import KarratIntro from '../../../assets/cases/karrat/intro.jpg';
import KarratGallery1 from '../../../assets/cases/karrat/gallery-1.png';
import KarratGallery2 from '../../../assets/cases/karrat/gallery-2.png';
import KarratGallery3 from '../../../assets/cases/karrat/gallery-3.jpg';
import KarratGallery4 from '../../../assets/cases/karrat/gallery-4.png';

import ElectraPreview from '../../../assets/cases/electra/preview.png';
import ElectraIntro from '../../../assets/cases/electra/intro.png';
import ElectraGallery1 from '../../../assets/cases/electra/gallery-1.png';
import ElectraGallery2 from '../../../assets/cases/electra/gallery-2.jpg';
import ElectraGallery3 from '../../../assets/cases/electra/gallery-3.jpg';
import ElectraGallery4 from '../../../assets/cases/electra/gallery-4.png';
import RWAPlatformPreview from '../../../assets/cases/rwa-platform/preview.jpg';
import RWAPlatformIntro from '../../../assets/cases/rwa-platform/intro.jpg';

const KARRAT = {
  id: 'karrat',
  title: 'Tokenization of Dubai property square ft for real estate company Karrat',
  preview_image: KarratPreview,
  tags: ['NFT', 'Solidity smart-contracts', 'Web3', 'Business', 'Tokenization'],
  short:
    'Establishing a sophisticated NFT-tokenisation system for real estate in the UAE. Buying, selling and profiting from ownership of property shares from anywhere in the world in crypto.',
  intro_image: KarratIntro,
  text_blocks: [
    {
      text: [
        'The RWA sector has been actively developing for several years now, the convenience of buying, managing and profiting, for example, from real estate makes this area a really profitable investment.',
        'For Karrat, which has been officially operating in UAE for many years now, we have developed a crypto tokenized real estate platform. On this platform, users can purchase NFT tokens that imply a certain area of a particular property.',
        'Then, depending on the property, users start receiving income from renting out the property, or receive a % of income when the property is sold at a higher price. The Karrath company receives the financial means with which people bought the area, with this money the company can buy new areas, or use those on which users spent money.',
        'Documentation and project files can be found at the bottom of the page',
      ],
    },
    {
      text: [
        'As a result, we prepared an architecture that fully satisfied the client. As part of the project, we developed a system to create NFTs for different types of properties: excavation, under construction and finished properties. Each new property can be easily divided by the customer into any number of NFTs (e.g. 1NFT = 1 square foot or 1NFT = 0.1 square foot).',
        'NFTs can fulfil their own roles. If it is an NFT of a finished property, such an NFT brings the owner a constant passive income when rented out, also NFT owners can participate in a vote if, for example, there is an idea to sell the property at a super favourable price. If such a vote is approved, all NFTs will be burnt, and the owners will get back their value, as well as the profit from the sale of the property.',
        'By the way, we\'ve created a special vault for the money that ensures that all NFT holders are paid, so they know exactly what they\'ll get from the square footage they have equivalent to in the form of NFTs.',
        'In addition, many other mechanics have been implemented: for example, NFT conversion, where, for example, a person has bought NFT square feet of excavation and the property has been completed to the finished property stage, and within that process there are a number of other complex economic mechanics that have also been implemented within the project.',
      ],
    },
  ],
  gallery: [
    [
      {
        src: KarratGallery1,
        title: 'Project contracts',
        description:
          "First of all, discussing the task with the customer, we started to outline the architecture of the future project. First, we had to understand how many and which contracts would serve the project logic.",
      },
      {
        src: KarratGallery2,
        title: 'Project Architecture',
        description:
          'The project contained many different entities, the next task was to describe them, labelling relationships and access levels. It was not possible to fit all Layers into the slide. Here you can only see: objects, vaults and pricers.',
      },
    ],
    [
      {
        src: KarratGallery3,
        title: 'Frontend',
        description: 'The frontend was designed and prepared for the project using TypeScript and web3 libraries. You can see the design in full at the link at the end of the page.',
      },
      {
        src: KarratGallery4,
        title: 'Administrator panel',
        description: 'For ease of use we have written a separate administrator panel. Project managers can manage the project in a small terminal using simple and clear commands without programming knowledge.',
      },
    ],
  ],
  ending_text: 'Below are links to current versions of the project files:',
  links: [
    {
      icon: 'figma',
      text: 'Web design',
      link: 'https://www.figma.com/design/PGTLZYPpwtn7j3xGUTf4IN/Karrat-NFT-(Work)?node-id=3205-1034&t=QcSlOJsX639peyos-1',
    },
    {
      icon: 'github',
      text: 'Smart-contracts',
      link: 'https://github.com/dashewski/ElectraNFTmarketplace',
    },
    {
      icon: 'gdrive',
      text: 'Project files',
      link: 'https://drive.google.com/drive/folders/1j-S3rTtFV9erKm_DOGmBByGt3DvZKbvt?usp=sharing',
    },
  ],
};

const ELECTRA = {
  id: 'electra',
  title: 'Tokenisation of revenue electric vehicles in the form of NFTs',
  preview_image: ElectraPreview,
  tags: ['NFT', 'Solidity smart-contracts', 'Business', 'Web3', 'SMM'],
  short:
    'The creation of a micro-investment platform, designed as an electric transport NFT marketplace, has been accompanied by the launch of its own token.',
  intro_image: ElectraIntro,
  ending_text: 'Below are links to current versions of the project files:',
  text_blocks: [
    {
      text: [
        'Electra is a real business in Europe and Cyprus. Electra provides e-vehicle rental services: from e-scooters to electric cars through a convenient iOS and Android application.',
        'It was on the basis of the existing business that the idea of tokenizing it in the form of NFT was born. Prior to that, the project had been expanding by attracting investment from large capital. After tokenization, the company opened the possibility for private crypto users to invest in the project and earn passive income.',
        'Anyone was able to buy an crypto analogue of vehicles in the form of NFT. With this money, Electra put a new vehicle into work, and the NFT owner received income from its lease in the form of tokens that could be exchanged for USDT (Dollar) on the project\'s website.',
        'Documentation and project files can be found at the bottom of the page.',
      ],
    },
    {
      text: [
        'So, we created smart contracts for the platform that allowed the user to buy NFT and stake it for 1/3/5 years, such a long term was necessary for Electra to put the e-vehicle to work and make a profit. The user could choose the format of staking and receive a fixed % per annum or 50% monthly of the income of the technique. After the chosen term, the NFT would be cancelled and the user would get back the invested funds. ',
      ],
    },
    {
      text: [
        'Eventually we started selling NFT and the project tokens themselves. After selling NFT for ~$50,000 the project found a buyer. Electra is now going through the sale procedure to a new owner of the business, including the sale includes web3 component, which was resold together with the main business bringing additional income of more than 130% of the development cost.',
      ],
    },
  ],
  gallery: [
    [
      {
        src: ElectraGallery1,
        title: 'Basic task',
        description:
          'At the very start we needed to develop a project implementation plan. Smart contracts included in it. It was decided to use the BSC network, due to the availability and popularity of the associated exchange Binance.',
      },
      {
        src: ElectraGallery2,
        title: 'Implementation options',
        description:
          'We proposed several implementation paths in which users were able to buy NFTs using different tokens of the BSC network, stake the NFTs in one of several protocols and get ELCT tokens based on that. ',
      },
    ],
    [
      {
        src: ElectraGallery3,
        title: 'Finalisation of work',
        description:
          'Within a month we completed all the code, covered it with autotests to identify various non-working usercases, fixed them. Next, the contracts were sent for audit. The auditing company found no critical or even medium level bugs. The full version of the audit is at the bottom of the page.',
      },
      {
        src: ElectraGallery4,
        title: 'Frontend',
        description:
          'After being audited by an audit company, we started making the frontend of the site and linking it to contracts. As usual, TypeScript and web3 libraries. The design of the project, we made at the stage of smart contracts development, you can see the full design file at the bottom of the page.',
      },
    ],
  ],
  links: [
    {
      icon: 'github',
      text: 'Website github',
      link: 'https://github.com/dashewski/ElectraNFTmarketplace',
    },
    {
      icon: 'figma',
      text: 'Web design',
      link: 'https://www.figma.com/file/KFYqtPB3rkuxsgvupWAPrH/Electra-NFT--Tilda-Sans-(Copy)?type=design&node-id=0%3A1&mode=design&t=VA8pt6NqtU9tD3NI-1',
    },
    {
      icon: 'github',
      text: 'Smart-contracts',
      link: 'https://github.com/digitalsoupteam/KarratRealEstateWeb3',
    },
    {
      icon: 'cyberscope',
      text: 'Security Audit',
      link: 'https://drive.google.com/drive/folders/1Bhwc1wCiSIzxcRGsl0F_BfM4DgbBt2X_',
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
  id: 'kraken-tap-v1',
  title: 'Tap-to-earn application\u00a0development',
  preview_image: KrakenTapV1Preview,
  tags: ['web3', 'Game dev', 'Mini apps', 'Game design'],
  short: 'Developing a tap-to-earn application with a point and referral system to engage audiences within the Kraken ecosystem on the Solana network.',
  intro_image: KrakenTapV1Intro,
  text_blocks: [
    {
      text: [
        'Working on the development of the Kraken ecosystem, we undertook the development of an application aimed at actively attracting the audience from both web3 and web2. This is a tap-to-earn application available both on the project website and in telegram (telegram mini App).',
        'The main task of the user was to log in to the game every day and tap the maximum number of times in a limited period of time, thereby earning points. Such mechanics stimulate strong involvement of people in the project due to gamification and belief in getting rewards.',
        'Documentation and project files can be found at the bottom of the page.',
      ],
    },
    {
      text: [
        'In tap-to-earn app we added a rating system that was updated every hour so as not to load the server too much and a referral system that would allow users to earn more points. This way users could watch their rating and earn more points by inviting friends.',
        'For an app, this kind of referral mechanics is one of the best marketing tools to expand the audience without additional financial costs.',
      ],
    },
    {
      text: [
        'In total, we have prepared an application available for scalability, capable of handling many simultaneous requests. We also worked with servers and configured the ability to automatically reboot and save the database in case of a server crash. The VDServer for the application was based in Singapore, with 16 efficient cores.',
      ],
    },
  ],
  gallery: [
    [
      {
        src: KrakenTapV1Gallery1,
        title: 'Backend',
        description:
          "We started work with planning, setting goals. The task was such that the backend could handle at least 100.000 dau (daily active users). Tarantool was chosen as a solution combining non-blocking Lua application server with NoSQL database.",
      },
      {
        src: KrakenTapV1Gallery2,
        title: 'Frontend',
        description:
          'We wrote the visual part of the application in TypeScript, using web3 libraries to connect tap-to-earn application to wallets on Solana network. We also added additional authorisation by Telegram ID, Email for web2 users, the wallet for them was generated automatically.',
      },
    ],
    [
      {
        src: KrakenTapV1Gallery3,
        title: 'Interface',
        description:
          "The visuals should also be intuitive, simple and practical. For the app we chose a nice colour scheme reflecting space, ocean and crypt. We made beautiful animated elements, and the taps themselves were accompanied by sounds and visual elements. You can tap from 5 fingers at the same time!",
      },
      {
        src: KrakenTapV1Gallery4,
        title: 'Load testing',
        description:
          'As part of the tests, an issue was discovered on the Tarantool solution side that was slowing down the application. After fixing it, it was possible to reach up to 4000 requests per second at the slowest point. That\'s over 14 million requests in an hour, exceeding the target of 100,000 dau. ',
      },
    ],
  ],
  ending_text: 'Below are links to current versions of the project files:',
  links: [
    {
      icon: 'github',
      text: 'GitHub Application',
      link: 'https://github.com/digitalsoupteam/Kraken-tap-to-earn-frontend',
    },
    {
      icon: 'figma',
      text: 'Project design',
      link: 'https://www.figma.com/design/1q746N6bAlTdCwRcqVGzOK/Kraken-(Copy)?node-id=396-23652',
    },
    {
      icon: 'github',
      text: 'Github Backend',
      link: 'https://github.com/digitalsoupteam/Kraken-tap-to-earn',
    },
  ],
};

const RWA_PLATFORM = {
  id: 'rwa-platform',
  title: 'RWA Platform',
  preview_image: RWAPlatformPreview,
  tags: ['web3', 'Design', 'Smart-Contracts', 'Backend', 'Frontend', 'Artificial intelligence'],
  short: 'Developing a platform for crowdfunding RWA projects and trading RWA assets',
  intro_image: RWAPlatformIntro,
  text_blocks: [
    {
      title: 'A platform where businesses from the real sector will be able to create their own tokens to raise investments.',
      text: [
        'The RWA market continues to develop, and new interesting projects appear along with it. We are developing one of such projects. The RWA Platform project is a convenient crowdfunding platform where any businessman can create ‘crypto shares’ of his future company and, through their sale, raise the funds needed to launch the business.',
        'Buyers of its ‘crypto shares’ - tokens are guaranteed to claim a return of their funds and a pre-determined in the protocol % of profit from investments in a future company. The protocol includes several degrees of security, token creators undergo various verifications, as well as evaluation by artificial intelligence. '
      ],
    },
  ],
  gallery: []
}

const CasesData = [RWA_PLATFORM, KRAKEN_TAP_V1, ELECTRA, KARRAT,];

export default CasesData;
