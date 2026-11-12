const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const siteHeader = document.querySelector('.site-header');

const translations = {
  navAbout: 'About', navExperience: 'Experience', navProjects: 'Projects', navContact: 'Let’s talk',
  heroEyebrow: 'Portfolio · Web design & UI/UX', heroTop: 'Design with intent', heroEm: 'Experiences that<br>connect.',
  heroIntro: 'I’m Vinícius, a digital designer. I bring strategy, identity, and interface together to create clear, useful experiences made for people.',
  heroLink: 'Explore my work',
  '.gallery-index': 'Belo Horizonte, Brazil <span>·</span> Available for new projects',
  '.about .section-kicker span:nth-child(2)': 'About me', '.image-caption': 'Design with clarity, care, and purpose.',
  '#about-title': 'An attentive eye.<br><em>Design that makes sense.</em>',
  '.about-copy > p:nth-of-type(1)': 'I’m a web designer experienced in creating and implementing digital solutions. I work across UX, UI, visual identity, and web development, connecting people’s needs with business goals.',
  '.about-copy > p:nth-of-type(2)': 'Throughout my career, I’ve contributed to e-commerce, landing page, and digital communication projects, from research and prototyping to interface development.',
  '.about-facts div:nth-child(1) span': 'in digital design', '.about-facts div:nth-child(2) span': 'strategy and interface', '.about-facts div:nth-child(3) span': 'design and development',
  '.about-copy .text-link': 'Download resume <span aria-hidden="true">↗</span>',
  '.experience .section-kicker span:nth-child(2)': 'Career', '#experience-title': 'Professional <em>experience</em>',
  '.section-intro p': 'Where I worked and what I built at each stage.',
  '.timeline-item:nth-child(1) .timeline-description': 'Created content for Instagram, Telegram, and the website, including posts, stories, reels, banners, and pop-ups. Maintained visual identity consistency, proposed design improvements, and analyzed team data and metrics.',
  '.timeline-item:nth-child(2) .timeline-role h3': 'E-commerce Analyst', '.timeline-item:nth-child(2) .timeline-description': 'Built and launched Hipromed’s e-commerce experience end to end, from Figma prototyping to deployment, including catalog, payments, logistics, and purchase journey optimization.',
  '.timeline-item:nth-child(3) .timeline-description': 'Developed and optimized conversion-focused landing pages, supporting growth marketing and lead generation initiatives.',
  '.timeline-item:nth-child(4) .timeline-description': 'Created digital campaign and marketplace assets, as well as website projects focused on user experience and interface design.',
  '.practice .section-kicker span:nth-child(2)': 'Education & practice', '#practice-title': 'Areas of focus <em>and expertise.</em>',
  '.practice-lead': 'A strong visual foundation, curiosity about technology, and care at every step of the experience.',
  '.education > .eyebrow': 'Education', '.courses-panel > .eyebrow': 'Courses', '.skills-panel > .eyebrow': 'Areas of focus', '.tools-label': 'Tools',
  '.skill-list span:last-child': 'Artificial intelligence',
  '.projects .section-kicker span:nth-child(2)': 'Selected work', '#projects-title': 'Projects with <em>purpose.</em>',
  '.projects-heading p': 'A selection of work across digital experiences, e-commerce, and identity.',
  '.desktop-link': 'More projects on Behance <span aria-hidden="true">↗</span>', '.mobile-link': 'More projects on Behance <span aria-hidden="true">↗</span>',
  '.project-visual::after': 'View project',
  '.project-card:nth-child(1) .project-card-content p': 'Digital communication for Bullsbet and Jogão.',
  '.project-card:nth-child(2) .project-card-content p': 'A welcoming digital presence for a local café.',
  '.project-card:nth-child(3) .project-card-content p': 'A refreshed online shopping experience for medical products.',
  '.project-card:nth-child(4) .project-card-content p': 'A digital campaign for the Black Friday season.',
  '.project-card:nth-child(5) .project-card-content p': 'A showcase website for Zestly’s services.',
  '.project-card:nth-child(6) .project-card-content p': 'A landing page introducing the brand’s services.',
  '.project-card:nth-child(7) .project-card-content p': 'A digital presentation of Metropax plans and services.',
  '.contact-top > .eyebrow': '05 · Contact', '.availability': '<span class="availability-dot"></span> Open to good conversations',
  '#contact-title': 'Have a project<br>in mind? <em>Let’s talk.</em>',
  '.skip-link': 'Skip to content', '.about-facts div:nth-child(1) strong': '5 years',
  '.timeline-item:nth-child(1) .timeline-role h3': 'Graphic Designer',
  '.timeline-item:nth-child(1) .timeline-date': 'Apr 2026 — Nov 2026',
  '.timeline-item:nth-child(2) .timeline-date': 'Feb 2025 — Nov 2025',
  '.timeline-item:nth-child(4) .timeline-date': 'Apr 2021 — Mar 2022',
  '.education h3': 'Graphic Design',
  '.course-list li:nth-child(1) span': 'WordPress as a CMS',
  '.course-list li:nth-child(2) span': 'Front-End (HTML and CSS)',
  '.tools-list': 'UI/UX Design · Graphic Design · Web Design · Front-End',
  '.skill-list span:nth-child(5)': 'Adobe Photoshop',
  '.skill-list span:nth-child(6)': 'Adobe Illustrator',
  '.skill-list span:nth-child(7)': 'Adobe Premiere',
  '.timeline-item:nth-child(3) .timeline-role h3': 'Graphic Designer',
  '.timeline-item:nth-child(4) .timeline-role h3': 'Graphic Designer',
  '.project-card:nth-child(1) .project-meta span:first-child': 'Social media · Art direction',
  '.project-card:nth-child(2) .project-meta span:first-child': 'Web design · Front-end',
  '.project-card:nth-child(3) .project-meta span:first-child': 'E-commerce · UX/UI',
  '.project-card:nth-child(4) .project-meta span:first-child': 'Campaign · E-commerce',
  '.project-card:nth-child(5) .project-meta span:first-child': 'Landing page · Web',
  '.project-card:nth-child(6) .project-meta span:first-child': 'Landing page · Web',
  '.project-card:nth-child(7) .project-meta span:first-child': 'Landing page · Web',

  // Shared Case Study Keys
  skipLink: 'Skip to content',
  breadcrumbPortfolio: 'Portfolio',
  btnBackPortfolio: '← Back to portfolio',
  metaRole: 'Role',
  metaProjectType: 'Project type',
  metaPlatform: 'Platform',
  metaTechnologies: 'Technologies',
  metaTimeline: 'Timeline',
  metaBrands: 'Brands',
  metaScope: 'Scope',
  metaDeliverables: 'Deliverables',
  metaGoal: 'Goal',
  caseContactEyebrow: 'Contact',
  caseContactAvailability: '<span class="availability-dot"></span> Open to good conversations',
  caseContactTitle: 'Let’s talk<br><em>about your project.</em>',
  footerBackToTop: 'Back to top ↑',
  backToTopTitle: 'Back to top',
  backToTopAria: 'Back to top of project',
  lightboxClose: 'Close <span aria-hidden="true">×</span>',
  lightboxPrev: '← Previous',
  lightboxNext: 'Next →',

  // Case Study: Henrietta's Cafe
  henriettasHeroCat: 'Web Design',
  henriettasHeroDesc: 'A welcoming digital presence to introduce the café, highlight its products, and connect customers with online ordering options.',
  henriettasMetaRole: 'UI Designer & Web Designer',
  henriettasMetaType: 'Institutional website',
  henriettasS01Eyebrow: '01 · Overview',
  henriettasS01Heading: 'A local café, a new digital presence',
  henriettasS01P1: 'Henrietta’s Cafe needed to strengthen its online presence and create a digital channel bringing the café closer to its customers. The project brought together brand storytelling, menu highlights, and essential information into a warm, effortless browsing experience.',
  henriettasS01P2: 'Beyond showcasing the café, the website needed to make menu exploration and online ordering simple and accessible.',
  henriettasS02Eyebrow: '02 · The challenge',
  henriettasS02Heading: 'How to turn information into a welcoming experience?',
  henriettasS02Lead: 'The page needed to convey the café’s warm personality while structuring useful content for varied visitor goals: discovering the brand, exploring the menu, or ordering online.',
  henriettasChallenge1Title: 'Showcase the brand',
  henriettasChallenge1Desc: 'Communicate the café’s identity through a warm and visually cohesive experience.',
  henriettasChallenge2Title: 'Simplify information access',
  henriettasChallenge2Desc: 'Organize the menu, brand story, location, and opening hours into an intuitive layout.',
  henriettasChallenge3Title: 'Encourage online orders',
  henriettasChallenge3Desc: 'Spotlight clear calls to action and streamline access to available ordering options.',
  henriettasS03Eyebrow: '03 · Design process',
  henriettasS03Heading: 'From existing identity to digital experience',
  henriettasS03Lead: 'The work built upon business goals and the existing identity, translating the desired mood into interface and layout decisions.',
  henriettasStep1Cat: '01 · Context',
  henriettasStep1Title: 'Project discovery',
  henriettasStep1Desc: 'Understanding client needs and the feelings the website should convey: modernity, calm, and warmth.',
  henriettasStep2Cat: '02 · Identity',
  henriettasStep2Title: 'Visual refinement',
  henriettasStep2Desc: 'Refining the palette and adapting the visual identity for the digital realm while preserving brand essence.',
  henriettasStep3Cat: '03 · Interface',
  henriettasStep3Title: 'UI design',
  henriettasStep3Desc: 'Defining visual hierarchy, typographic pairing, and layout flow to balance branding, usability, and business goals.',
  henriettasStep4Cat: '04 · Implementation',
  henriettasStep4Title: 'Front-end development',
  henriettasStep4Desc: 'Building the page with HTML and SCSS, leveraging AI tools as a development assistant.',
  henriettasS04Eyebrow: '04 · Visual identity',
  henriettasS04Heading: 'A light, elegant, and welcoming visual language',
  henriettasS04Lead: 'Blue and turquoise hues add character to the interface, while typography blends editorial refinement with functional clarity.',
  henriettasPaletteTitle: 'Color palette',
  henriettasColor1: 'Light Gray',
  henriettasColor2: 'Slate Blue',
  henriettasColor3: 'White',
  henriettasColor4: 'Turquoise',
  henriettasColor5: 'Soft Light Blue',
  henriettasColor6: 'Teal Blue',
  henriettasColorNote1: '<strong>Light gray and white</strong> establish a clean foundation that supports readability.',
  henriettasColorNote2: '<strong>Blues and turquoise</strong> inject personality, contrast, and visual emphasis.',
  henriettasColorNote3: '<strong>Teal blue</strong> brings depth to the composition.',
  henriettasTypeTitle: 'Typography',
  henriettasType1Cat: 'Playfair Display · Headings & subheadings',
  henriettasType1Spec: 'A good day starts here.',
  henriettasType1Note: 'Serif, elegant, and editorial.',
  henriettasType2Cat: 'Montserrat · Body & buttons',
  henriettasType2Spec: 'Menu · Orders',
  henriettasType2Note: 'Contemporary, functional, and legible.',
  henriettasPrinciplesCat: 'Visual principles',
  henriettasPrinciple1: '<strong>Clarity</strong><span>Information and navigation that are easy to understand.</span>',
  henriettasPrinciple2: '<strong>Balance</strong><span>Functional composition without cluttering the interface.</span>',
  henriettasPrinciple3: '<strong>Contrast</strong><span>Clear hierarchy between headlines, body text, and calls to action.</span>',
  henriettasPrinciple4: '<strong>Warmth</strong><span>Welcoming atmosphere conveyed through colors, type, and layout.</span>',
  henriettasS05Eyebrow: '05 · Page structure',
  henriettasS05Heading: 'An experience to discover and order',
  henriettasS05Lead: 'The content structure guides visitors from discovering the café to practical information and ordering options.',
  henriettasScreen1Cat: 'Brand & first impression',
  henriettasScreen1Title: 'Welcome to Henrietta’s',
  henriettasScreen1Desc: 'The hero combines the café’s identity with quick access to the menu, online orders, and visiting details.',
  henriettasScreen2Cat: 'Products & categories',
  henriettasScreen2Title: 'An easy-to-explore menu',
  henriettasScreen2Desc: 'Bakery items, specialty coffee and drinks, and light bites are organized into visual categories to help visitors explore menu variety.',
  henriettasScreen3Cat: 'Orders & services',
  henriettasScreen3Title: 'Order online and skip the line',
  henriettasScreen3Desc: 'The section explains how to place pickup orders in advance and introduces catering for breakfasts and corporate events.',
  henriettasLiveLink: 'Visit Henrietta’s Cafe website',
  henriettasS06Eyebrow: '06 · Project deliverables',
  henriettasS06Heading: 'A digital foundation for the café',
  henriettasS06Lead: 'The project established a digital touchpoint bringing together brand presentation, product offerings, and useful customer information.',
  henriettasDeliv1Title: 'Digital presence',
  henriettasDeliv1Desc: 'Creation of a dedicated website for the café and communication with its community.',
  henriettasDeliv2Title: 'Refined identity',
  henriettasDeliv2Desc: 'Adapting the existing identity to the digital space and intended brand atmosphere.',
  henriettasDeliv3Title: 'Centralized information',
  henriettasDeliv3Desc: 'Menu, story, location, and hours organized into an integrated experience.',
  henriettasDeliv4Title: 'Direct ordering access',
  henriettasDeliv4Desc: 'Prominent calls to action to support easy access to online ordering channels.',
  henriettasS07Eyebrow: '07 · Key learnings',
  henriettasS07Heading: 'What I learned from this project',
  henriettasS07Lead: 'The project connected visual refinement and front-end implementation to meet the needs of a local business.',
  henriettasLearning1Title: 'Identity evolves in the digital space',
  henriettasLearning1Desc: 'Working with an existing brand requires understanding its essence and adapting its language to interface requirements.',
  henriettasLearning2Title: 'Aesthetics and usability go hand in hand',
  henriettasLearning2Desc: 'Color, typography, and hierarchy must express brand personality while facilitating navigation.',
  henriettasLearning3Title: 'Content supports business goals',
  henriettasLearning3Desc: 'Structured information and calls to action connect brand discovery to the customer’s next steps.',
  henriettasLearning4Title: 'AI as an enabling tool',
  henriettasLearning4Desc: 'AI tools supported implementation exploration and coding, keeping the focus squarely on interface craft and results.',

  // Case Study: Hipromed
  hipromedHeroCat: 'E-Commerce · Healthcare',
  hipromedHeroTitle: 'Hipromed<br>Medical Supplies',
  hipromedHeroDesc: 'Digital expansion of a B2B company into the B2C market — designing the purchase journey, visual identity, and online credibility from scratch for a new audience.',
  hipromedMetaType: 'B2C E-commerce',
  hipromedMetaTimeline: 'Feb – Nov 2025',
  hipromedChallengeEyebrow: 'The challenge',
  hipromedChallengeHeading: 'From wholesale to the digital storefront',
  hipromedChallengeDesc: 'Hipromed operated strictly as a B2B supplier — hospitals and clinics were its sole clients. The CEO wanted to expand into B2C: independent practitioners and individual patients. The challenge? Zero digital presence, zero online credibility, and no e-commerce infrastructure.',
  hipromedProb1Title: 'No digital presence',
  hipromedProb1Desc: 'The company had no website, online store, or any consumer-facing touchpoint.',
  hipromedProb2Title: 'Lack of online credibility',
  hipromedProb2Desc: 'No customer reviews, visible partners, or brand positioning tailored to individual buyers.',
  hipromedProb3Title: 'New audience, new journey',
  hipromedProb3Desc: 'Solo practitioners and patients have radically different needs from institutional procurement teams.',
  hipromedProcessEyebrow: 'Process',
  hipromedProcessHeading: 'How the project was built',
  hipromedStep1Desc: 'Stakeholder interviews with the company CEO to map goals, target audience, and business constraints.',
  hipromedStep2Desc: 'Analysis of domestic and international healthcare e-commerce to identify benchmarks and opportunities.',
  hipromedStep3Desc: 'Visual identity design featuring palette, typography, and UI components aligned with brand values.',
  hipromedStep4Title: 'UI & Delivery',
  hipromedStep4Desc: 'High-fidelity prototyping of key screens prioritizing conversion and credibility for the new B2C audience.',
  hipromedDsHeading: 'Visual identity & tokens',
  hipromedDsLead: 'Palette and typography chosen to convey trust, modernity, and clarity — essential values in healthcare products.',
  hipromedPaletteTitle: 'Color palette',
  hipromedColor1: 'Primary Teal',
  hipromedColor2: 'White',
  hipromedColor3: 'Gray',
  hipromedTypeTitle: 'Typography',
  hipromedType1: 'Poppins — Headings & UI',
  hipromedType2: 'Montserrat — Body & secondary',
  hipromedCompTitle: 'Components',
  hipromedBtnBuy: 'Buy now',
  hipromedBtnView: 'View more',
  hipromedBadgeOffer: 'Special offer',
  hipromedBadgeShipping: 'Fast shipping',
  hipromedProductTitle: '10-Lead ECG Cable',
  hipromedProductStock: 'R$ 349.00 · In stock',
  hipromedSpacingTitle: 'Spacing tokens',
  hipromedScreensEyebrow: 'Key screens',
  hipromedScreensHeading: 'B2C user journey',
  hipromedScreensLead: 'From product discovery to checkout — each screen crafted to foster trust and facilitate purchase decisions.',
  hipromedScreen1Title: 'Showcase & credibility',
  hipromedScreen1Desc: 'Showcasing products, categories, special offers, and trusted partners to build brand authority.',
  hipromedScreen2Cat: 'Catalog',
  hipromedScreen2Title: 'Organization & navigation',
  hipromedScreen2Desc: 'Facilitating product search and discovery through an intuitive category and filtering structure.',
  hipromedDisclosureSummary: 'Show full homepage <span aria-hidden="true">＋</span>',
  hipromedZoomHint: 'Click image to enlarge',
  hipromedHideFullHome: 'Hide full homepage',
  hipromedZoomAria: 'Enlarge image of Hipromed’s full homepage',
  hipromedLightboxAria: 'Enlarged image of Hipromed full homepage',
  hipromedResultsEyebrow: 'Results & impact',
  hipromedResultsHeading: 'What the project delivered',
  hipromedResultsLead: 'Beyond the interface, the project drove a tangible strategic shift in the business model.',
  hipromedRes1Title: 'Digital presence built from scratch',
  hipromedRes1Desc: 'The business evolved from zero online presence to an active e-commerce store with cohesive branding and an end-to-end shopping journey.',
  hipromedRes2Title: 'New sales channel unlocked',
  hipromedRes2Desc: 'The project enabled expansion into a completely new segment: individual consumers and autonomous healthcare professionals.',
  hipromedRes3Title: 'Credibility established',
  hipromedRes3Desc: 'Visible partners, testimonials, and consistent design built brand authority with the new audience.',
  hipromedRes4Title: 'Reduction in cart abandonment',
  hipromedRes4Desc: 'An optimized purchase journey and intuitive interface contributed to an estimated 15% drop in checkout drop-offs.',
  hipromedRes5Title: 'Enhanced self-service',
  hipromedRes5Desc: 'Implementation of automated customer support features that improved user experience and cut response time by ~40%.',
  hipromedRes6Title: 'Lead generation',
  hipromedRes6Desc: 'Implementation of lead capture strategies resulting in a 20% increase in qualified leads.',
  hipromedLearningsEyebrow: 'Key learnings',
  hipromedLearningsHeading: 'What I learned from this project',
  hipromedLearningsLead: 'A greenfield project with a single primary stakeholder requires both hands-on craft and strategic consulting.',
  hipromedLearn1Title: 'Design and business are inseparable',
  hipromedLearn1Desc: 'Understanding the company’s B2B model was essential to design a B2C interface that reflected credibility. Business context shaped every design choice.',
  hipromedLearn2Title: 'Trust is the primary asset in healthcare',
  hipromedLearn2Desc: 'Medical products demand clear credibility cues — verified partners, certifications, and a visual language conveying technical rigor.',
  hipromedLearn3Title: 'Metrics as strategy',
  hipromedLearn3Desc: 'I appreciated the value of tracking performance indicators to validate hypotheses and optimize user experience for business impact.',
  hipromedLearn4Title: 'The stakeholder as product partner',
  hipromedLearn4Desc: 'With a single key interlocutor, asking the right questions was essential to uncover requirements that weren’t always explicit.',

  // Case Study: SevenX Gaming
  sevenxHeroCat: 'Art direction · Social media · iGaming',
  sevenxHeroDesc: 'Visual communications for two entertainment brands — Bullsbet and Jogão — across social channels and on-platform touchpoints.',
  sevenxMetaRole: 'Graphic Designer',
  sevenxMetaScope: 'Social · Web · Campaigns',
  sevenxMetaDeliverables: 'Creatives · Banners · Pop-ups',
  sevenxS01Eyebrow: '01 · The project',
  sevenxS01Heading: 'Two brands, many conversations',
  sevenxS01P1: 'SevenX Gaming is a holding company managing the Bullsbet and Jogão brands. I created visual communications for Instagram and Telegram as well as internal website assets, adapting each message to the channel and brand voice.',
  sevenxS01P2: 'Beyond social media, I developed promotional banners and pop-ups to announce game features, mechanics, and campaigns on the platforms.',
  sevenxS02Eyebrow: '02 · My role',
  sevenxS02Heading: 'From concept to published asset',
  sevenxStep1Title: 'Daily communication',
  sevenxStep1Desc: 'Creating content for Instagram and Telegram, balancing campaigns, helpful information, and community engagement.',
  sevenxStep2Cat: '02 · Campaigns',
  sevenxStep2Title: 'Concept & rollouts',
  sevenxStep2Desc: 'Developing static assets and multi-slide carousels to introduce updates, explain game mechanics, and support promo actions.',
  sevenxStep3Title: 'On-platform presence',
  sevenxStep3Desc: 'Designing banners and pop-ups to highlight campaigns and platform updates on Bullsbet and Jogão.',
  sevenxBrandTabsAria: 'Select brand',
  sevenxBullsbetEyebrow: '03 · Brand 01',
  sevenxBullsbetDesc: 'Brand communication and campaigns for social channels and the web platform.',
  sevenxGrowthTitle: 'A growing community',
  sevenxBullsbetGrowthDesc: 'When I joined, the Instagram account had around 154k followers. Over a few months of collaboration with the team, the community exceeded 210k — over 36% growth during the period.',
  sevenxBullsSocialEyebrow: '03.1 · Social media',
  sevenxBullsSocialHeading: 'Content to stay close',
  sevenxBullsSocialLead: 'Assets for Instagram and Telegram focused on information, trust, entertainment, and player relationships.',
  sevenxArt1Cat: 'Feed · Responsible gaming',
  sevenxArt1Title: 'Stay calm, it’s part of the game',
  sevenxArt1Desc: 'A gentle reminder to bet responsibly and stay composed throughout the experience.',
  sevenxArt2Cat: 'Feed · Support',
  sevenxArt2Title: 'Need help? We’re right here',
  sevenxArt2Desc: 'Highlights 24/7 customer support, assuring players that a dedicated team is always ready to assist.',
  sevenxArt3Cat: 'Feed · Security',
  sevenxArt3Title: 'Your security comes first',
  sevenxArt3Desc: 'An institutional message emphasizing data privacy and player safety.',
  sevenxArt4Cat: 'Feed · Information',
  sevenxArt4Title: 'Play on a regulated platform',
  sevenxArt4Desc: 'Explains the importance of choosing a regulated, licensed platform for betting.',
  sevenxArt5Cat: 'Feed · Football',
  sevenxArt5Title: 'Super Odd · Brazil vs Australia',
  sevenxArt5Desc: 'Promotes special enhanced odds for the Brazil vs Australia fixture.',
  sevenxCarouselsEyebrow: '03.2 · Carousels',
  sevenxCarouselsHeading: 'A narrative that continues with every swipe',
  sevenxCarouselsLead: 'Screens are displayed in sequence to preserve visual flow and showcase the complete narrative.',
  sevenxCar1Cat: 'Carousel · 8 slides',
  sevenxCar1Desc: 'Bullspot mechanics: a sequence introducing how the in-game jackpot works on the site.',
  sevenxCar2Cat: 'Carousel · 6 slides',
  sevenxCar2Title: 'New store',
  sevenxCar2Desc: 'Unveils updates to the shop, guiding players through browsing, purchasing, and pricing details.',
  sevenxCar3Cat: 'Carousel · 6 slides',
  sevenxCar3Title: 'One chip a day',
  sevenxCar3Desc: 'Explains how to participate and claim free daily chips offered by the platform’s mechanics.',
  sevenxBannersEyebrow: '03.3 · Website banners',
  sevenxBannersHeading: 'Featured campaigns',
  sevenxBannersLead: 'Banners announcing updates, the brand’s relaunch, and an industry award campaign.',
  sevenxBan1Cat: 'Banner · Feature launch',
  sevenxBan1Desc: 'Introduces and highlights the new gameplay mechanic available on the site.',
  sevenxBan2Cat: 'Banner · Brand',
  sevenxBan2Title: 'We’re back',
  sevenxBan2Desc: 'Announces Bullsbet’s return after a period offline.',
  sevenxBan3Cat: 'Banner · Awards',
  sevenxBan3Title: 'RA 2026 Award',
  sevenxBan3Desc: 'Invites players to vote for Bullsbet in the Reclame Aqui 2026 Awards.',
  sevenxPopupsEyebrow: '03.4 · On-site pop-ups',
  sevenxPopupsHeading: 'Offers at the moment of discovery',
  sevenxPopupsLead: 'Promotional notices presenting bonuses and qualifying terms.',
  sevenxPop1Title: '100 flights on JetX',
  sevenxPop1Desc: 'Promotes a bonus flights offer for JetX tied to a qualifying wager amount.',
  sevenxPop2Title: '50 rounds on Mines',
  sevenxPop2Desc: 'Features a free rounds reward for Mines when wagering the specified amount.',
  sevenxPop3Cat: 'Pop-up · Lucky Monkey',
  sevenxPop3Title: '60 spins on Lucky Monkey',
  sevenxPop3Desc: 'Communicates a free spins bonus linked to a designated bet value.',
  sevenxJogaoEyebrow: '04 · Brand 02',
  sevenxJogaoDesc: 'Instagram content and banners conveying security, responsible gaming, updates, and platform campaigns.',
  sevenxJogaoGrowthDesc: 'When I started, Jogão had approximately 50k Instagram followers. Through ongoing creative work with the team, the community reached 84k — roughly a 68% increase.',
  sevenxJogaoSocialHeading: 'Content to inform and connect',
  sevenxJogaoSocialLead: 'Creatives to guide the audience, foster responsible practices, and showcase platform updates.',
  sevenxJogaoArt1Cat: 'Instagram · Security',
  sevenxJogaoArt1Title: 'Check before clicking',
  sevenxJogaoArt1Desc: 'Advises players to verify external links before clicking to protect against scams.',
  sevenxJogaoArt2Cat: 'Instagram · Responsible gaming',
  sevenxJogaoArt2Title: 'Taking a break is part of the game',
  sevenxJogaoArt2Desc: 'Encourages regular pauses and reinforces the importance of playing responsibly.',
  sevenxJogaoArt3Cat: 'Instagram · Sports',
  sevenxJogaoArt3Title: 'Golden substitute',
  sevenxJogaoArt3Desc: 'Introduces the feature where odds remain active for the player who replaces the chosen athlete.',
  sevenxJogaoArt4Cat: 'Instagram · Brand',
  sevenxJogaoArt4Title: 'We’re back!',
  sevenxJogaoArt4Desc: 'Communicates the platform’s return and reconnects with the Jogão community.',
  sevenxJogaoBannersEyebrow: '04.2 · Website banners',
  sevenxJogaoBannersHeading: 'Brand and live campaigns',
  sevenxJogaoBannersLead: 'Banners announcing platform availability and rallying player support for Jogão in the Reclame Aqui 2026 Awards.',
  sevenxJogaoBan1Cat: 'Banner · Comeback',
  sevenxJogaoBan1Title: 'Jogão is live',
  sevenxJogaoBan1Desc: 'Announces that the gaming platform is back online.',
  sevenxJogaoBan2Cat: 'Banner · Awards',
  sevenxJogaoBan2Title: 'RA 2026 Award',
  sevenxJogaoBan2Desc: 'Invites users to support and vote for Jogão in the Reclame Aqui 2026 Awards.',
  sevenxLightboxAria: 'Enlarged artwork preview',

  // Case Study: Zestly
  zestlyHeroCat: 'UX/UI Design · B2B Retail · Web',
  zestlyHeroTitle: 'Zestly<br>Retail Intelligence',
  zestlyHeroDesc: 'Turning retail data into smart decisions — a landing page crafted to present a data intelligence solution and generate business opportunities.',
  zestlyMetaType: 'B2B Retail',
  zestlyMetaGoal: 'Present the solution and generate leads',
  zestlyS01Eyebrow: '01 · Overview',
  zestlyS01Heading: 'Transforming retail data into smart decisions',
  zestlyS01P1: 'Zestly is a retail data intelligence solution helping retailers prepare for peak demand periods. The platform consolidates inventory, e-commerce, and warehouse data, turning fragmented information into clear, actionable insights.',
  zestlyS01P2: 'With this, teams can identify patterns, understand consumer demand, and make more strategic decisions during peak sales seasons.',
  zestlyS02Eyebrow: '02 · The challenge',
  zestlyS02Heading: 'How to communicate a complex solution simply?',
  zestlyS02Lead: 'Seasonal retail requires planning, organization, and swift decisions. The page needed to explain how Zestly transforms operational data into next steps without overwhelming visitors with technical jargon, while encouraging them to book a demo.',
  zestlyProb1Title: 'Communicate the value proposition',
  zestlyProb1Desc: 'Introduce a data-driven solution accessibly, highlighting its benefits for seasonal retail planning and management.',
  zestlyProb2Title: 'Structure the narrative',
  zestlyProb2Desc: 'Structure content progressively, linking audience challenges directly to platform capabilities and benefits.',
  zestlyProb3Title: 'Convert visitors into leads',
  zestlyProb3Desc: 'Design a clear user journey with persuasive calls to action that encourage booking a demo.',
  zestlyS03Eyebrow: '03 · Design process',
  zestlyS03Heading: 'From benchmark research to final interface',
  zestlyS03Lead: 'The process began by analyzing visual benchmarks and organizing the page structure. Then, I developed the interface, balancing clarity of information, visual identity, and a focus on conversion.',
  zestlyStep1Cat: '01 · Research',
  zestlyStep1Title: 'Visual benchmarks',
  zestlyStep1Desc: 'I analyzed websites from companies like Be Farm Ecological, BFarm, and With My Own Two Hands, studying content layout and solution presentation for the agricultural and retail spaces.',
  zestlyStep2Cat: '02 · Structure',
  zestlyStep2Title: 'Wireframe & architecture',
  zestlyStep2Desc: 'I organized information hierarchy, section distribution, UI showcase spaces, and calls to action. The structure evolved during prototyping.',
  zestlyStep3Cat: '03 · Identity',
  zestlyStep3Title: 'Visual direction',
  zestlyStep3Desc: 'I paired project references with autumn and harvest tones, weaving technology, retail, and seasonality together.',
  zestlyStep4Cat: '04 · Interface',
  zestlyStep4Title: 'High fidelity',
  zestlyStep4Desc: 'I designed a page that presents the core pitch, illustrates the platform, and explains its features and benefits, guiding visitors to book a demo.',
  zestlyDsHeading: 'Typography and colors as communication elements',
  zestlyDsLead: 'The visual identity pairs modern clarity with agricultural and seasonal cues. Colors and font families differentiate headlines, supporting copy, and UI controls.',
  zestlyPaletteTitle: 'Color palette',
  zestlyColor1: 'Amber Yellow',
  zestlyColor2: 'Green',
  zestlyColor3: 'Black',
  zestlyColor4: 'Harvest Orange',
  zestlyColor5: 'Red',
  zestlyColorNote1: '<strong>Amber yellow</strong> spotlights key elements and evokes the energy of harvests.',
  zestlyColorNote2: '<strong>Green</strong> connects the brand to agriculture, growth, and nature.',
  zestlyColorNote3: '<strong>Black</strong> provides sharp contrast for typography and primary information.',
  zestlyColorNote4: '<strong>Harvest orange and red</strong> broaden composition options and reinforce the seasonal reference.',
  zestlyTypeTitle: 'Typography',
  zestlyType1: 'Roboto · Body & reading',
  zestlyType2: 'Montserrat Alternates · Short copy',
  zestlyType3: 'Albert Sans · Headings',
  zestlyS05Eyebrow: '05 · Final interface',
  zestlyS05Heading: 'A landing page designed to showcase and convert',
  zestlyS05Lead: 'The page guides visitors from understanding the problem to discovering platform benefits. Visual hierarchy and targeted CTAs bridge solution awareness with demo bookings.',
  zestlyScreen1Cat: 'Seasonal planning',
  zestlyScreen1Title: 'Confidence for the peak season',
  zestlyScreen1Desc: 'An autumn campaign shows how Zestly’s insights help retailers anticipate demand and prepare inventory for peak periods.',
  zestlyScreen2Cat: 'Conversion & trust',
  zestlyScreen2Title: 'From discovery to the next step',
  zestlyScreen2Desc: 'The free trial form and customer testimonials reinforce product credibility and invite visitors to experience the platform.',
  zestlyLiveLink: 'Visit Zestly website',
  zestlyS06Eyebrow: '06 · Results & impact',
  zestlyS06Heading: 'A digital experience aligned with business goals',
  zestlyS06Lead: 'The project delivered an organized landing page with a distinct visual identity and a customer journey engineered to make the solution clear and encourage demo signups.',
  zestlyRes1Title: 'Clearer value proposition',
  zestlyRes1Desc: 'Structured information presenting the solution and its benefits to a B2B audience.',
  zestlyRes2Title: 'Consistent visual identity',
  zestlyRes2Desc: 'Color palette, typography, and graphic assets aligned with agricultural and tech contexts.',
  zestlyRes3Title: 'Conversion-driven architecture',
  zestlyRes3Desc: 'Content and calls to action distributed to guide users toward booking a demo.',
  zestlyRes4Title: 'Visual product demonstration',
  zestlyRes4Desc: 'Graphic elements bring the visitor closer to the platform and facilitate understanding.',
  zestlyS07Eyebrow: '07 · Key learnings',
  zestlyS07Heading: 'What I learned from this project',
  zestlyS07Lead: 'The process reinforced how strategy, wireframing, and visual design work together to make a solution clearer and more compelling.',
  zestlyLearn1Title: 'Benchmarks are a starting point',
  zestlyLearn1Desc: 'Analyzing other pages helped find visual directions; the challenge was building a coherent experience tailored to Zestly’s specific proposition.',
  zestlyLearn2Title: 'Information structure shapes experience',
  zestlyLearn2Desc: 'The wireframe structured information before the interface. Adaptations during prototyping reinforced the importance of iterating on layout throughout.',
  zestlyLearn3Title: 'Visual identity also communicates the business',
  zestlyLearn3Desc: 'Colors and typography helped strike a balance between technology, legibility, and agricultural cues.',
  zestlyLearn4Title: 'Design and conversion must work together',
  zestlyLearn4Desc: 'Organizing content and purposeful CTAs connects product storytelling directly to business pipeline growth.'
};

const languageButtons = document.querySelectorAll('.language-option');
document.querySelectorAll('[data-i18n]').forEach((element) => { element.dataset.pt = element.innerHTML; });
Object.keys(translations).forEach((selector) => {
  if (!selector.startsWith('.site-') && !selector.startsWith('.project-visual::')) {
    document.querySelectorAll(selector).forEach((element) => { if (!element.dataset.pt) element.dataset.pt = element.innerHTML; });
  }
});
const setLanguage = (language, animate = true) => {
  const isEnglish = language === 'en';
  if (animate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('language-changing');
    window.setTimeout(() => document.body.classList.remove('language-changing'), 460);
  }
  document.documentElement.lang = isEnglish ? 'en' : 'pt-BR';
  const titleTag = document.querySelector('title');
  if (titleTag && (titleTag.dataset.titleEn || titleTag.dataset.titlePt)) {
    if (!titleTag.dataset.titlePt) titleTag.dataset.titlePt = document.title;
    document.title = isEnglish ? (titleTag.dataset.titleEn || document.title) : (titleTag.dataset.titlePt || document.title);
  } else {
    document.title = isEnglish ? 'Vinícius Azeredo — Digital & Interface Designer' : 'Vinícius Azeredo — Designer de interfaces';
  }
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    if (!description.dataset.descriptionPt) description.dataset.descriptionPt = description.content;
    description.content = (isEnglish ? description.dataset.descriptionEn : description.dataset.descriptionPt) || description.content;
  }
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    if (isEnglish && translations[element.dataset.i18n]) element.innerHTML = translations[element.dataset.i18n];
    else if (!isEnglish) element.innerHTML = element.dataset.pt || element.innerHTML;
  });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    if (!element.dataset.ptTitle) element.dataset.ptTitle = element.getAttribute('title') || '';
    element.setAttribute('title', isEnglish ? (translations[element.dataset.i18nTitle] || element.dataset.ptTitle) : element.dataset.ptTitle);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    if (!element.dataset.ptAria) element.dataset.ptAria = element.getAttribute('aria-label') || '';
    element.setAttribute('aria-label', isEnglish ? (translations[element.dataset.i18nAria] || element.dataset.ptAria) : element.dataset.ptAria);
  });
  Object.entries(translations).forEach(([selector, value]) => {
    if (!value || selector.startsWith('.site-')) return;
    document.querySelectorAll(selector).forEach((element) => {
      if (isEnglish) {
        if (!element.dataset.pt) element.dataset.pt = element.innerHTML;
        element.innerHTML = value;
      } else if (element.dataset.pt) element.innerHTML = element.dataset.pt;
    });
  });
  if (menuToggle) {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-label', isOpen ? (isEnglish ? 'Close menu' : 'Fechar menu') : (isEnglish ? 'Open menu' : 'Abrir menu'));
  }
  document.body.classList.toggle('is-english', isEnglish);
  languageButtons.forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  try { localStorage.setItem('portfolio-language', language); } catch {}
};

languageButtons.forEach((button) => button.addEventListener('click', () => {
  setLanguage(button.dataset.language);
  const isEn = button.dataset.language === 'en';
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', isEn ? 'Open menu' : 'Abrir menu');
  siteNav?.classList.remove('is-open');
}));
let initialLanguage = 'pt';
try { initialLanguage = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'pt'; } catch {}
setLanguage(initialLanguage, false);

if (siteHeader) {
  const updateHeaderOnScroll = () => {
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 0);
  };

  updateHeaderOnScroll();
  window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    const isEn = document.documentElement.lang === 'en';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? (isEn ? 'Open menu' : 'Abrir menu') : (isEn ? 'Close menu' : 'Fechar menu'));
    siteNav.classList.toggle('is-open', !isOpen);
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
      siteNav.classList.remove('is-open');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const fullHomeDialog = document.querySelector('.full-home-lightbox');
const fullHomeTrigger = document.querySelector('.full-home-zoom-trigger');
const fullHomeClose = document.querySelector('.full-home-lightbox-close');
const fullHomeHide = document.querySelector('.full-home-hide');

if (fullHomeHide) {
  fullHomeHide.addEventListener('click', () => {
    const disclosure = fullHomeHide.closest('.full-home-disclosure');
    if (!disclosure) return;

    disclosure.open = false;
    disclosure.querySelector('summary')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

if (fullHomeDialog && fullHomeTrigger && fullHomeClose) {
  fullHomeTrigger.addEventListener('click', () => fullHomeDialog.showModal());
  fullHomeClose.addEventListener('click', () => fullHomeDialog.close());
  fullHomeDialog.addEventListener('click', (event) => {
    if (event.target === fullHomeDialog) fullHomeDialog.close();
  });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const animatedSections = document.querySelectorAll('main > section, body > footer.contact');

if (!prefersReducedMotion && animatedSections.length) {
  const [heroSection, ...scrollSections] = animatedSections;
  document.body.classList.add('has-reveal');
  heroSection.classList.add('reveal-hero');

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -6% 0px' });

    scrollSections.forEach((section) => {
      section.classList.add('reveal-section');
      sectionObserver.observe(section);
    });
  } else {
    scrollSections.forEach((section) => section.classList.add('is-visible'));
  }
}

const particleCanvas = document.createElement('canvas');
particleCanvas.className = 'fluid-particles';
particleCanvas.setAttribute('aria-hidden', 'true');
document.body.prepend(particleCanvas);

const particleContext = particleCanvas.getContext('2d');
if (particleContext) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let particles = [];
  let viewportWidth = 0;
  let viewportHeight = 0;
  let pointerX = -1000;
  let pointerY = -1000;
  let pointerEnergy = 0;
  let pointerActive = false;
  let animationFrame = 0;
  let lastFrame = 0;

  const resizeParticleField = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    particleCanvas.width = Math.round(viewportWidth * dpr);
    particleCanvas.height = Math.round(viewportHeight * dpr);
    particleContext.setTransform(dpr, 0, 0, dpr, 0, 0);

    const spacing = Math.max(viewportWidth < 680 ? 58 : 48, Math.sqrt((viewportWidth * viewportHeight) / 680));
    const columns = Math.ceil(viewportWidth / spacing) + 1;
    const rows = Math.ceil(viewportHeight / spacing) + 1;
    particles = [];

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const offset = row % 2 ? spacing * 0.5 : 0;
        const x = column * spacing + offset - spacing * 0.5;
        const y = row * spacing - spacing * 0.5;
        particles.push({ x, y, baseX: x, baseY: y, vx: 0, vy: 0, phase: Math.random() * Math.PI * 2 });
      }
    }
  };

  const drawParticleField = (timestamp = 0) => {
    if (document.hidden) {
      animationFrame = 0;
      return;
    }
    if (!reducedMotion && timestamp - lastFrame < 30) {
      animationFrame = window.requestAnimationFrame(drawParticleField);
      return;
    }
    lastFrame = timestamp;
    particleContext.clearRect(0, 0, viewportWidth, viewportHeight);

    particles.forEach((particle) => {
      const drift = reducedMotion ? 0 : Math.sin(timestamp * 0.00045 + particle.phase) * 1.6;
      let forceX = (particle.baseX + drift - particle.x) * 0.012;
      let forceY = (particle.baseY + drift - particle.y) * 0.012;
      let influence = 0;

      if (!reducedMotion && pointerActive) {
        const dx = particle.x - pointerX;
        const dy = particle.y - pointerY;
        const distance = Math.max(1, Math.hypot(dx, dy));
        const falloff = Math.max(0, 1 - distance / 190);
        influence = falloff * falloff;
        const outwardPush = influence * (0.34 + pointerEnergy * 0.44);
        const fluidTurn = influence * (0.08 + pointerEnergy * 0.18);
        forceX += (dx / distance) * outwardPush - (dy / distance) * fluidTurn;
        forceY += (dy / distance) * outwardPush + (dx / distance) * fluidTurn;
      }

      particle.vx = (particle.vx + forceX) * 0.9;
      particle.vy = (particle.vy + forceY) * 0.9;
      particle.x += particle.vx;
      particle.y += particle.vy;

      const radius = 1 + influence * 1.15;
      const opacity = 0.16 + influence * 0.26;
      particleContext.beginPath();
      particleContext.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
      particleContext.fillStyle = `rgba(61, 90, 61, ${opacity})`;
      particleContext.fill();
    });

    pointerEnergy *= 0.94;
    if (!reducedMotion) animationFrame = window.requestAnimationFrame(drawParticleField);
  };

  const startParticleField = () => {
    if (!animationFrame) animationFrame = window.requestAnimationFrame(drawParticleField);
  };

  resizeParticleField();
  startParticleField();
  window.addEventListener('resize', resizeParticleField, { passive: true });
  window.addEventListener('pointermove', (event) => {
    const movement = Math.hypot(event.clientX - pointerX, event.clientY - pointerY);
    pointerX = event.clientX;
    pointerY = event.clientY;
    pointerEnergy = Math.min(1, movement / 34);
    pointerActive = true;
    if (reducedMotion) drawParticleField();
  }, { passive: true });
  window.addEventListener('pointerout', (event) => {
    if (!event.relatedTarget) pointerActive = false;
  }, { passive: true });
  document.addEventListener('visibilitychange', startParticleField);
}

/* --- 3D Perspective Tilt Card Effect (Desktop) --- */
const initTiltCards = () => {
  const cards = document.querySelectorAll('#projetos .project-card');
  if (!cards.length) return;

  const isEligible = () => {
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      window.innerWidth >= 769 &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  cards.forEach((card) => {
    let glare = card.querySelector('.project-card-glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'project-card-glare';
      glare.setAttribute('aria-hidden', 'true');
      card.appendChild(glare);
    }

    let isHovered = false;
    let rafId = null;
    let currentRotateX = 0;
    let currentRotateY = 0;
    let targetRotateX = 0;
    let targetRotateY = 0;
    let currentScale = 1;
    let targetScale = 1;
    let currentTranslateY = 0;
    let targetTranslateY = 0;

    const maxTilt = 8;
    const maxTranslateY = -6;
    const hoverScale = 1.02;

    const updateFrame = () => {
      const lerpFactor = isHovered ? 0.12 : 0.08;
      currentRotateX += (targetRotateX - currentRotateX) * lerpFactor;
      currentRotateY += (targetRotateY - currentRotateY) * lerpFactor;
      currentScale += (targetScale - currentScale) * lerpFactor;
      currentTranslateY += (targetTranslateY - currentTranslateY) * lerpFactor;

      if (!isHovered &&
          Math.abs(currentRotateX) < 0.02 &&
          Math.abs(currentRotateY) < 0.02 &&
          Math.abs(currentScale - 1) < 0.002 &&
          Math.abs(currentTranslateY) < 0.05) {
        card.style.transform = '';
        card.style.boxShadow = '';
        card.classList.remove('is-tilting');
        rafId = null;
        return;
      }

      card.style.transform = `perspective(1000px) rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg) translateY(${currentTranslateY.toFixed(2)}px) scale3d(${currentScale.toFixed(3)}, ${currentScale.toFixed(3)}, ${currentScale.toFixed(3)})`;

      const shadowX = (-currentRotateY * 1.4).toFixed(1);
      const shadowY = Math.max(10, 16 - currentRotateX * 1.2).toFixed(1);
      card.style.boxShadow = `${shadowX}px ${shadowY}px 32px rgba(32, 44, 35, 0.15), 0 2px 8px rgba(32, 44, 35, 0.05)`;

      rafId = window.requestAnimationFrame(updateFrame);
    };

    const onPointerEnter = (e) => {
      if (e.pointerType === 'touch' || !isEligible()) return;
      isHovered = true;
      targetScale = hoverScale;
      targetTranslateY = maxTranslateY;
      card.classList.add('is-tilting');

      if (!rafId) {
        rafId = window.requestAnimationFrame(updateFrame);
      }
    };

    const onPointerMove = (e) => {
      if (e.pointerType === 'touch' || !isEligible()) return;
      const rect = card.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      const normalizedX = Math.max(-1, Math.min(1, (relativeX / rect.width) * 2 - 1));
      const normalizedY = Math.max(-1, Math.min(1, (relativeY / rect.height) * 2 - 1));

      targetRotateX = -normalizedY * maxTilt;
      targetRotateY = normalizedX * maxTilt;

      const glareX = Math.round((relativeX / rect.width) * 100);
      const glareY = Math.round((relativeY / rect.height) * 100);
      card.style.setProperty('--glare-x', `${glareX}%`);
      card.style.setProperty('--glare-y', `${glareY}%`);

      if (!rafId) {
        isHovered = true;
        card.classList.add('is-tilting');
        rafId = window.requestAnimationFrame(updateFrame);
      }
    };

    const onPointerLeave = () => {
      isHovered = false;
      targetRotateX = 0;
      targetRotateY = 0;
      targetScale = 1;
      targetTranslateY = 0;

      if (!rafId) {
        rafId = window.requestAnimationFrame(updateFrame);
      }
    };

    card.addEventListener('pointerenter', onPointerEnter);
    card.addEventListener('pointermove', onPointerMove);
    card.addEventListener('pointerleave', onPointerLeave);
  });

  window.addEventListener('resize', () => {
    if (!isEligible()) {
      cards.forEach((card) => {
        card.style.transform = '';
        card.style.boxShadow = '';
        card.classList.remove('is-tilting');
      });
    }
  }, { passive: true });
};

initTiltCards();
