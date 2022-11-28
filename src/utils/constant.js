import { CODE_ICON_1, CODE_ICON_2, FEATURE_IMG_1, FEATURE_IMG_2, FEATURE_IMG_3, FEATURE_IMG_4, FEATURE_IMG_5, FEATURE_IMG_6 } from "../assets/images";

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
export const ZINC_DOCS_GET_STARTED_LINK = 'https://docs.zincsearch.com/02_getting-started/';
export const ZINC_DOCS_SERVER_LINK = 'https://docs.zincsearch.com/API%20Reference/';

// LEGAL PATHS
export const PRIVACY_POLICY_PATH = '/legal/privacy-policy';
export const TERMS_OF_SERVICE_PATH = '/legal/terms-of-service';

// GITHUB LINKS
export const GITHUB_REPO_LINK = 'https://github.com/zinclabs/zinc';
export const GITHUB_FORK_REPO_LINK = 'https://github.com/zinclabs/zinc/fork';

// SOCIAL LINKS
export const  LINKEDIN_LINK = 'https://www.linkedin.com/company/zinc-labs';

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
    description: "You can index large amounts of text Zinc and search instantly"
  },
  {
    image: FEATURE_IMG_2,
    altText: "Feature 2",
    title: "Embedded Web UI",
    description: "Zinc is a batteries-included setup. Embedded UI provides an easy way to get started and interact with your data. No need to set up a separate GUI like kibana."
  },
  {
    image: FEATURE_IMG_3,
    altText: "Feature 3",
    title: "Compatibility with Elasticsearch API",
    description: "Ingestion and Search APIs are elasticsearch compatible so you could easily migrate applications. Docs coming soon."
  },
  {
    image: FEATURE_IMG_4,
    altText: "Feature 4",
    title: "Schemaless Indexes",
    description: "No need to work hard to define schema ahead of time. ZincSearch automatically discovers schema so you can focus on search and analysis."
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
    description: "Do faceted search and analyze your data."
  }
];

// CODE SECTION
export const CODE_SECTION_LIST = [
  {
    image: CODE_ICON_1,
    altText: "Code Icon 1",
    title: "Easy to Setup & Operate",
    description: "ZincSearch provides the easiest way to get started with log capture, search and analysis. It has simple APIs to interact and integrates with leading log forwarders allowing you to get operational in minutes."
  },
  {
    image: CODE_ICON_2,
    altText: "Code Icon 2",
    title: "Low resource requirements",
    description: "It uses far less CPU and RAM compared to alternatives allowing for lower cost to run. Developers can even run it on their laptops without ever noticing its resource utilization."
  }
];

// FAQs
export const FAQ_LIST = [
  {
    class: "faq__one",
    title: "What can I use ZincSearch for?",
    description: "ZincSearch is a search engine that can be used for indexing any kind of textual data. It can be used for logs, metrics, events, and more. It allows you to do full text search among other things. e.g. Send server logs to ZincSearch and search for them, or you can push your application data and provide full text search in your app."
  },
  {
    class: "faq__two",
    title: "Can I replace Elasticsearch with ZincSearch?",
    description: "ZincSearch provides Elasticsearch compatible ingestion APIs. So you can change the configuration (URL and authentication data) of your existing tools (fluent bit, vector, syslog-ng, etc) that are sending data to Elasticsearch and it will start working right away. To view the data you will have to use either ZincSearch UI or ZincSearch APIs. ZincSearch currently does not provide an Elasticsearch compatible query API, however we are working towards making it compatible."
  },
  {
    class: "faq__three",
    title: "Can ZincSearch be deployed in HA(Highly Available / Cluster) mode?",
    description: "Currently, No. We are working towards making ZincSearch Highly Available."
  },
  {
    class: "faq__four",
    title: "Can I store index data in S3 or MinIO?",
    description: "Yes. ZincSearch supports S3 and MinIO for index storage. Metadata is still stored on local disk though at this time.",
  },
  {
    class: "faq__five",
    title: "Are there any performance benchmarks available for ZincSearch?",
    description: " Currently, No. We will soon publish benchmarks."
  },
  {
    class: "faq__six",
    title: "Do we have SDK's available for ZincSearch?",
    description: "Currently No. We are working towards making the SDKs available. You are recommended to use ZincSearch REST APIs for now."
  }
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