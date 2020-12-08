module.exports = {
  siteTitle: 'Kamil Kula | Web Developer | Chicago, IL',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Kamil Kula',
  twitterUsername: '_kamilkula',
  githubUsername: 'kuladesign',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `A creative Information Technology professional with a record of increased responsibility. Proficient in prioritizing and completing tasks in a timely manner, yet flexible to multitask when necessary. Results oriented and initiative-taking with a passion for clean, modern, and reusable code.`,
  skills: [
    {
      name: 'HTML',
      level: 100
    },
    {
      name: 'CSS',
      level: 100
    },
    {
      name: 'Javascript',
      level: 75
    },
    {
      name: 'Vue',
      level: 60
    },
    {
      name: 'React',
      level: 60
    },
    {
      name: 'Git',
      level: 70
    },
  ],
  jobs: [
    {
      company: "IFCJ",
      begin: {
        month: 'Nov',
        year: '2019'
      },
      duration: '3 mos(Contract)',
      occupation: "Full Stack Developer",
      description: "Developed the Rabbi Eckstein Memorial Website in Vue.js. Working in an Agile Environment, providing flexibility, and satisfying the customer through early and continuous delivery of valuable software. "
  
    },  {
      company: "QuadWTech",
      begin: {
        month: 'May',
        year: '2019'
      },
      duration: '6 mos',
      occupation: "Frontend developer",
      description: "Developed, enhanced and maintained websites using HTML, CSS, JavaScript, PHP, Bootstrap WordPress, and Vue.js. Gained expertise with creating custom post types, taxonomies, categories, custom fields, and custom themes for high-traffic WordPress websites."
  
    }, {
      company: "Darpet",
      begin: {
        month: 'March',
        year: '2018'
      },
      duration: '1 yr 2 mos',
      occupation: "Ecommerce Developer",
      description: "Liaison for partnership with Amazon Vendor Central. Developed a dynamic and interactive website that ensured high traffic, page views, user experience, resulting in a 25% increase in Conversion rate."
    },
  ],
  portifolio: [
    {
      image: "/images/rabbie.jpg",
      description: "Rabbi Eckstein Memorial Website",
      url: "https://www.rabbieckstein.org/"
    },
    {
      image: "/images/darpet.jpg",
      description: "Darpet Doors Ecommerce pw = darpet",
      url: "https://impressadoors.com/"
    },
    {
      image: "/images/cretevalleyfarms.png",
      description: "Crete Valley Farms CBD Website",
      url: "https://cretevalleyfarms.com/"
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/kamilkula815",
    github: "https://github.com/kuladesign",
    email: "kamilkula@zoho.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}