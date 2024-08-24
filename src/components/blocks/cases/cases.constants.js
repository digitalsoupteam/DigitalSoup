import KrakenTapV1Preview from '../../../assets/cases/kraken-tap-v1/preview.jpg';
import KrakenTapV1Intro from '../../../assets/cases/kraken-tap-v1/intro.jpg';
import KrakenTapV1Gallery1 from '../../../assets/cases/kraken-tap-v1/gallery-1.jpg';
import KrakenTapV1Gallery2 from '../../../assets/cases/kraken-tap-v1/gallery-2.png';
import KrakenTapV1Gallery3 from '../../../assets/cases/kraken-tap-v1/gallery-3.png';
import KrakenTapV1Gallery4 from '../../../assets/cases/kraken-tap-v1/gallery-4.png';

import KrakenStakingPreview from '../../../assets/cases/kraken-staking/preview.jpg';
import KrakenStakingIntro from '../../../assets/cases/kraken-staking/intro.jpg';
import KrakenGallery1 from '../../../assets/cases/kraken-staking/gallery-1.png';
import KrakenGallery2 from '../../../assets/cases/kraken-staking/gallery-2.png';
import KrakenGallery3 from '../../../assets/cases/kraken-staking/gallery-3.png';
import KrakenGallery4 from '../../../assets/cases/kraken-staking/gallery-4.png';

import KarratPreview from '../../../assets/cases/karrat/preview.jpg';
import KarratGallery1 from '../../../assets/cases/karrat/gallery-1.jpg';
import KarratGallery2 from '../../../assets/cases/karrat/gallery-2.jpg';
import KarratGallery3 from '../../../assets/cases/karrat/gallery-3.png';
import KarratGallery4 from '../../../assets/cases/karrat/gallery-4.png';

import ElectraPreview from '../../../assets/cases/electra/preview.png';
import ElectraIntro from '../../../assets/cases/electra/intro.png';
import ElectraGallery1 from '../../../assets/cases/electra/gallery-1.png';
import ElectraGallery2 from '../../../assets/cases/electra/gallery-2.png';
import ElectraGallery3 from '../../../assets/cases/electra/gallery-3.png';
import ElectraGallery4 from '../../../assets/cases/electra/gallery-4.png';
import ElectraGallery5 from '../../../assets/cases/electra/gallery-5.png';
import ElectraGallery6 from '../../../assets/cases/electra/gallery-6.png';

const KARRAT = {
  id: 'karrat',
  title: 'KARRAT',
  preview_image: KarratPreview,
  tags: ['NFT', 'Solidity smart-contracts', 'Web3', 'Business', 'Tokenization'],
  short:
    'Establishing a sophisticated NFT-tokenisation system for real estate in the UAE. Buying, selling and profiting from ownership of property shares from anywhere in the world in crypto.',
  intro_image: KarratPreview,
  text_blocks: [
    {
      title: 'Tokenization of square meters for real estate company from Dubai',
      text: [
        'Another project we have taken on is the Karrat Real Estate Company. It is an officially registered company authorized to provide services in buying, selling and valuation of real estate in the UAE.',
        'The main objective of the project is tokenization of square feet of area of various real estate properties in the Arab Emirates, both completed and under construction or in preparation for it. The client had only an idea, so the entire plan for the technical architecture and its implementation became our task.',
      ],
    },
    {
      title: 'So, what does the project look like?',
      text: [
        'In total, we prepared an architecture that fully satisfied the customer. As part of the project, we developed a system to produce NFTs for different types of real estate: excavation, under construction and finished real estate. Each new property can be easily divided by the customer into any number of NFTs (e.g. 1NFT = 1 square foot or 1NFT = 0.1 square foot).',
        'NFTs can fulfill their own roles. If it is an NFT of a finished object, this NFT brings a permanent passive income to the owner when rented out, also NFT owners can participate in voting if, for example, there is an idea to sell the property at a super-profitable price. If such a vote is approved, all NFTs will be burned, and the owners will get back their value, as well as their profit from the sale of real real estate.',
        'By the way, we have created a special vault for the money, which provides payments to all NFT holders, so they know exactly what they will get from the areas whose equivalent they have in the form of NFTs.',
        'In addition, many other mechanics have been implemented: for example, NFT conversion, when for example a person bought NFT of square feet of excavation, and the object was completed to the stage of a finished object, and within this process there is a number of other complex economic mechanics, which are also implemented within the project.',
      ],
    },
  ],
  gallery: [
    [
      {
        src: KarratGallery1,
        title: 'Process organization',
        description:
          "As usual, we organized convenient chats to discuss the project, made several calls. And gathered all the customer's ideas together.",
      },
      {
        src: KarratGallery2,
        title: 'Project architecture',
        description:
          'The next step was to design the architecture of the project. Gathering together all the project entities and their connections with each other. Link to project files at the end of the page.',
      },
    ],
    [
      {
        src: KarratGallery3,
        title: 'Project design',
        description: 'We made the design of the pages of the website of the future project.',
      },
      {
        src: KarratGallery4,
        title: 'Admin panel',
        description: 'And for convenient project management - we have made a separate intuitive admin panel',
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
  title: 'Electra',
  preview_image: ElectraPreview,
  tags: ['NFT', 'Solidity smart-contracts', 'Business', 'Web3', 'SMM'],
  short:
    'The creation of a micro-investment platform, designed as an electric transport NFT marketplace, has been accompanied by the launch of its own token.',
  intro_image: ElectraIntro,
  ending_text: 'Below are links to current versions of the project files:',
  text_blocks: [
    {
      title: 'Investment web3 project based on real business',
      text: [
        'The Electra company is engaged in the sharing of electric vehicles (from scooters to cars) through its own application. They install and maintain vehicles, as well as provide service support for the sharing application in many warm countries of the world.',
        'Before that, only large investors could invest in their project, but we came up with an excellent solution for them, which will allow them to collect investments from users, attracting more money to the company and giving these users the opportunity to earn with them by receiving crypto-income based on real business.',
        'Our idea was to allow users from all over the world to easily invest in the purchase of real vehicles of the Electra project by buying their NFT equivalent. And Electra would pay income from the operation of this technique to NFT holders. This is a convenient way for a company to receive investments in its project without unnecessary difficulties from any person, and for users to receive dividends in crypto from a real business.',
      ],
    },
    {
      title: 'From several ideas, we chose the best',
      text: [
        'Project allows the user to purchase Electra NFT (in any amount), NFT is the key to receive the staking reward. With the money raised from NFT, Electra puts real equipment into operation in one of the regions of stay.',
        'The user can choose one of two types of staking: stable (receiving a stable % of income for the purchase of NFT) and flex (receiving a part of the income from equipment purchased in the form of NFT every month).',
        'The main and most interesting type of staking is the more risky Flex, but the yield on flex can reach 60% per annum. For the company and for the user, this is an interesting mechanic. Income data is open and official, so the project cannot deceive users either.',
        'In addition to creating the main structure, sub-structures were prepared that are responsible for the details of interaction and other contracts.',
      ],
    },
    {
      title: 'What does the project look like now?',
      text: [
        'Now, users can select and change the type of rewards. NFTs have a lifetime equivalent to real vehicles, after which the used NFT can be returned to Electra for a fraction of the cost.',
        'Users have the option to exchange or sell their NFTs on the OTC market at any time. Alternatively, they can sell them back to Electra after two years of ownership.',
        'Users receive rewards in ELCT tokens, which they can easily buy or sell on the Electra marketplace website at any time. ELCT is available for exchange with USDT, USDC, BUSD, and BNB. Additionally, users can stake the received ELCT tokens at a small percentage to increase their own profits from the Electra project.',
      ],
    },
  ],
  gallery: [
    [
      {
        src: ElectraGallery1,
        title: 'Communication with our client',
        description:
          'To begin with, we always organize chat sessions with the customer. This allows us to not only hold Zoom conferences for code or task reviews but also to address questions, ask our own questions, and provide updates on the development stages 24/7.',
      },
      {
        src: ElectraGallery2,
        title: 'Planning the project',
        description:
          'The project consists of several parts: creating the project structure and writing the code, designing the project, and building the NFT platform. We started, of course, by drawing up the structure of the project.',
      },
    ],
    [
      {
        src: ElectraGallery3,
        title: 'Coding',
        description:
          'In just a few weeks, we‘ve created all the necessary smart contracts and covered them with tests, and also worked on the security of the project. We also made a contract for the tokens of the Electra project - ELCT.',
      },
      {
        src: ElectraGallery4,
        title: 'Types of staking',
        description:
          'After the tests, we finalized the logic of certain project elements and added new features. For instance, we introduced a feature that allows users to switch between the Flex and Stable staking formats at any time, enabling them to choose the most profitable format for their needs.',
      },
    ],
    [
      {
        src: ElectraGallery5,
        title: 'Website design',
        description:
          'For convenient user interaction with the project, we have developed a well-thought-out design. You can see it at the link at the bottom of the page on Figma.',
      },
      {
        src: ElectraGallery6,
        title: 'Project code',
        description:
          "Project code have been security audited and we don't have a single exploit or critical bug.",
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

const KRAKEN_STAKING = {
  id: 'kraken-staking',
  title: 'Kraken staking',
  preview_image: KrakenStakingPreview,
  tags: ['web3', 'Solana Smart contracts', 'Design', 'Staking'],
  short:
    'As part of our work with the project we needed to correct what had been done before us, as well as write staking for the ecosystem token.',
  intro_image: KrakenStakingIntro,
  text_blocks: [
    {
      text: [
        'Not so long ago we started to fully develop the Kraken ecosystem on the Solana network, which you can read about in other cases, the first task was to write Staking and add a web interface for it to the existing site. After studying the site, we realized that we should start by completely rewriting it, making the code modern and clean.',
      ],
    },
    {
      text: [
        'The proposal from our side was to develop a system with modern point mechanics, which at the time of development (summer 2024) was the most relevant. Users were offered to block tokens of the project by accumulating points, which were registered in the database. Many projects went in this way: Linea, Scroll, Elixir. In the future, ecosystem and partner rewards are expected for project points.',
      ],
    },
  ],
  gallery: [
    [
      {
        src: KrakenGallery1,
        title: 'Rework',
        description:
          "Webpage was written on a crooked react, we rewrote it completely on Next.js",
      },
      {
        src: KrakenGallery2,
        title: 'Engineering',
        description:
          'Then we agreed with the customer on the staking models, held several call-conversations',
      },
    ],
    [
      {
        src: KrakenGallery3,
        title: 'Designing',
        description:
          "For staking, we developed a unique design. Link to the design project at the end of this page",
      },
      {
        src: KrakenGallery4,
        title: 'Project presentation',
        description:
          'Additionally, we made a presentation of the project with all future ecosystem applications.  Link to full presentation at the end of this page',
      },
    ],
  ],
  ending_text: 'Below are links to current versions of the project files:',
  links: [
    {
      icon: 'github',
      text: 'Website github',
      link: 'https://github.com/digitalsoupteam/KrakenWebsite',
    },
    {
      icon: 'figma',
      text: 'Project design',
      link: 'https://www.figma.com/design/1q746N6bAlTdCwRcqVGzOK/Kraken-(Copy)?node-id=252-34231&t=l85B23kqO81VhKCZ-1',
    },
    {
      icon: 'github',
      text: 'Staking program',
      link: 'https://github.com/digitalsoupteam/KrakenStaking',
    },
    {
      icon: 'gdrive',
      text: 'Presentation',
      link: 'https://drive.google.com/file/d/1lXXl56cRD1xS6TwdvS58ltz_hUDjFqWk/view?usp=sharing',
    }
  ],
};

const KRAKEN_TAP_V1 = {
  id: 'kraken-tap-v1',
  title: 'Kraken tap-to-earn App',
  preview_image: KrakenTapV1Preview,
  tags: ['web3', 'Game dev', 'Mini apps', 'Game design'],
  short: 'Developing a tap-to-earn application with a point and referral system to engage audiences within the Kraken ecosystem on the Solana network.',
  intro_image: KrakenTapV1Intro,
  text_blocks: [
    {
      text: [
        'Working on the development of the Kraken ecosystem, we have taken into development an application aimed at actively attracting audiences from both web3 and web2. This is a tap-to-earn application available both on the project website and within telegram (telegram mini App). ',
      ],
    },
    {
      text: [
        'For ease of audience engagement, we decided to capture the connection methods available to web2 and web3: via telegram id, both via wallet address and email. The user can start tapping right away, and when it comes time to airdrop, web2 users will be forced to set up a wallet with the Solana network, the more they will be motivated by the rewards received.',
      ],
    },
    {
      text: [
        'For the application we made a backend that could be scaled by means of the protocol - a cluster, a user is bound to a specifically working instance of the service running on one of the servers. Such a solution would allow to handle millions of events per second.',
      ],
    },
  ],
  gallery: [
    [
      {
        src: KrakenTapV1Gallery1,
        title: 'Development',
        description:
          "Developed a backend system for scoring points and running the application, integrated into the project ecosystem",
      },
      {
        src: KrakenTapV1Gallery2,
        title: 'Accessibility',
        description:
          'We made it possible to connect to the application both from the Solana network, and through mail and Telegram',
      },
    ],
    [
      {
        src: KrakenTapV1Gallery3,
        title: 'User friendly',
        description:
          "In addition, we have developed a pleasant and clear interface for users of the web version and telegram mini App",
      },
      {
        src: KrakenTapV1Gallery4,
        title: 'Marketing tool',
        description:
          'For additional audience engagement, they created a referral system',
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

const CasesData = [KRAKEN_TAP_V1, KRAKEN_STAKING, KARRAT, ELECTRA,];

export default CasesData;
