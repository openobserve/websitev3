import {
  CODE_ICON_1,
  CODE_ICON_2,
  FEATURE_IMG_1,
  FEATURE_IMG_2,
  FEATURE_IMG_3,
  FEATURE_IMG_4,
  FEATURE_IMG_5,
  FEATURE_IMG_6,
  TEAM_MEMBER_1,
  TEAM_MEMBER_2,
  TEAM_MEMBER_3,
  TEAM_MEMBER_4
} from "../assets/images";

export const ABSOLUTE_PATH = 'http://localhost:3000/src/';

// NAV PATHS
export const DEFAULT_PATH = '/';
export const ABOUT_US_PATH = '/about-us';
export const USE_CASES_PATH = '/use-cases';
export const CONTACT_US_PATH = '/contact-us';
export const CAREERS_PATH = '/careers';
export const BLOGS_PATH = '/blog';

// ZINC DOCS LINKS
export const ZINC_DOCS_LINK = 'https://docs.zincsearch.com/';
export const ZINC_DOCS_GET_STARTED_LINK = 'https://docs.zincsearch.com/getting-started/';
export const ZINC_DOCS_SERVER_LINK = 'https://docs.zincsearch.com/api/';

export const ZINC_CLOUD_BETA_LINK = 'https://cloud.zincsearch.com';

// GITHUB LINKS
export const GITHUB_REPO_LINK = 'https://github.com/zinclabs/zinc';
export const GITHUB_FORK_REPO_LINK = 'https://github.com/zinclabs/zinc/fork';

// SOCIAL LINKS
export const  LINKEDIN_LINK = 'https://www.linkedin.com/company/zinc-labs';
export const TWITTER_LINK = 'https://twitter.com/zincsearchHQ';

// LEGAL PATHS
export const PRIVACY_POLICY_PATH = '/legal/privacy-policy';
export const TERMS_OF_SERVICE_PATH = '/legal/terms-of-service';

// MENU_LISTS
export const MENU_LISTS = [
  {
    path: DEFAULT_PATH,
    id: "",
    name: 'Home'
  },
  {
    path: ABOUT_US_PATH,
    id: "about-us",
    name: 'About Us'
  },
  {
    path: USE_CASES_PATH,
    id: "use-cases",
    name: 'Use Cases'
  },
  {
    path: CONTACT_US_PATH,
    id: "contact-us",
    name: 'Contact Us'
  },
  {
    path: CAREERS_PATH,
    id: "careers",
    name: 'Careers'
  },
  {
    path: BLOGS_PATH,
    id: "blog",
    name: 'Blog'
  }
];

// NAV LISTS
export const NAV_LISTS = [
  ...MENU_LISTS,
  {
    path: ZINC_DOCS_LINK,
    name: 'Docs'
  }
];

// FEATURES
export const FEATURES_LIST = [
  {
    image: FEATURE_IMG_1,
    altText: "Feature 1",
    title: "Full Text Search",
    description: "You can index large amounts of text Zinc and search instantly."
  },
  {
    image: FEATURE_IMG_2,
    altText: "Feature 2",
    title: "Embedded Web UI",
    description: "Zinc is a batteries-included setup. Embedded UI provides an easy way to get started and interact with your data. No need to set up a separate GUI like Kibana."
  },
  {
    image: FEATURE_IMG_3,
    altText: "Feature 3",
    title: "Compatibility with Elasticsearch API",
    description: "Ingestion and search APIs are elasticsearch compatible, so you could easily migrate applications. Docs coming soon."
  },
  {
    image: FEATURE_IMG_4,
    altText: "Feature 4",
    title: "Schemaless Indexes",
    description: "No need to work hard to define schema ahead of time. ZincSearch automatically discovers schema, so you can focus on search and analysis."
  },
  {
    image: FEATURE_IMG_5,
    altText: "Feature 5",
    title: "S3 and MinIO for index storage (experimental)",
    description: "Store data in S3 and MinIO for low cost, virtually infinite durable storage without the hassle of managing storage."
  },
  {
    image: FEATURE_IMG_6,
    altText: "Feature 6",
    title: "Aggregations",
    description: "Perform a faceted search and analyze your data."
  }
];

// CODE SECTION
export const CODE_SECTION_LIST = [
  {
    image: CODE_ICON_1,
    altText: "Code Icon 1",
    title: "Easy to Set Up & Operate",
    description: "ZincSearch provides the easiest way to get started with log capture, search, and analysis. It has simple APIs to interact and integrates with leading log forwarders, allowing you to get operational in minutes."
  },
  {
    image: CODE_ICON_2,
    altText: "Code Icon 2",
    title: "Low Resource Requirements",
    description: "It uses far less CPU and RAM than alternatives, allowing for a lower cost to run. Developers can even run it on their laptops without ever noticing its resource utilization."
  }
];

// FAQs
export const FAQ_LIST = [
  {
    class: "faq__one",
    title: "What can I use ZincSearch for?",
    description: "ZincSearch is a search engine that can index textual data for logs, metrics, events, and more. It allows you to do full-text searches, among other things, including sending server logs to ZincSearch, searching for them, pushing your application data, or providing full-text search in your app."
  },
  {
    class: "faq__two",
    title: "Can I replace Elasticsearch with ZincSearch?",
    description: "ZincSearch provides Elasticsearch compatible ingestion APIs. So you can change the configuration (URL and authentication data) of your existing tools (fluent bit, vector, syslog-ng, etc.) that are sending data to Elasticsearch, and it will start working right away. You will have to use either ZincSearch UI or ZincSearch APIs to view the data. ZincSearch currently does not provide an Elasticsearch compatible query API. However, we are working towards making it compatible."
  },
  {
    class: "faq__three",
    title: "Can ZincSearch be deployed in HA(Highly Available / Cluster) mode?",
    description: "Currently, no. We are working toward making ZincSearch highly available."
  },
  {
    class: "faq__four",
    title: "Can I store index data in S3 or MinIO?",
    description: "Yes. ZincSearch supports S3 and MinIO for index storage. Metadata is still stored on the local disk, though, at this time.",
  },
  {
    class: "faq__five",
    title: "Are there any performance benchmarks available for ZincSearch?",
    description: " Currently, no. We will soon publish benchmarks."
  },
  {
    class: "faq__six",
    title: "Do we have SDK's available for ZincSearch?",
    description: "Currently no. We are working toward making the SDKs available and recommended using ZincSearch REST APIs for now."
  }
];

// About Us Team Section
export const TEAM_LIST = [
	{
		image: TEAM_MEMBER_1,
		linkedInURL: 'https://www.linkedin.com/in/hiprabhat',
		name: 'Prabhat Sharma',
		designation: 'Founder & CEO',
		description: 'Prabhat Sharma founded ZincSearch based on his learnings from years of his work at AWS, working with hundreds of startups, ISVs, and substantial customers who faced the challenge of searching logs and other application data.',
	},
	{
		image: TEAM_MEMBER_2,
		linkedInURL: 'https://www.linkedin.com/in/hengfeiyang',
		name: 'Hengfei Yang',
		designation: 'Founding Engineer',
		description: 'Hengfei Yang is a full-stack engineer with rich experience in distributed system development. He is passionate about open source and has built and led many technical teams in the past ten years.',
	},
	{
		image: TEAM_MEMBER_3,
		linkedInURL: 'https://www.linkedin.com/in/ashish-kolhe-10605b33',
		name: 'Ashish Kolhe',
		designation: 'Software Engineer',
		description: 'Ashish Kolhe is a software professional with experience in architecting & building enterprise softwares for last 17 years. He is passionate about big data & data semantics.',
	},
	{
		image: TEAM_MEMBER_4,
		linkedInURL: 'https://www.linkedin.com/in/bjp232004/',
		name: 'Bhargav Patel',
		designation: 'Software Engineer',
		description: 'Bhargav Patel is a software professional with proven skills in spearheading cloud technology, front-end technologies, release automation process and application development in IT projects. He has lead technical deliveries for past 15 years.',
	},
];

// BLOGS CATEGORIES
export const BLOG_CATEGORIES = [
  {
    name: "Business",
    type: "business"
  },
  {
    name: "Consulting",
    type: "consulting"
  }
];
