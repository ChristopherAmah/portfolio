/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Christopher Amah",
  title: "Hi all, I'm Christopher",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Python / Django and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1EyKEmvNK_856fmwnUInt4ZV_6mgM8XIa/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ChristopherAmah",
  linkedin: "https://www.linkedin.com/in/christopher-amah/",
  gmail: "christopheramah1@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / OpenAI"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Babcock University",
      logo: require("./assets/images/babcock-university-logo.png"),
      subHeader: "Bsc Computer Science",
      duration: "September 2020 - July 2024",
      desc: "Participated in the research of a web based application for connecting service providers to users.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

// const techStack = {
//   viewSkillBars: true, //Set it to true to show Proficiency Section
//   experience: [
//     {
//       Stack: "Frontend/Design", //Insert stack or technology you have experience in
//       progressPercentage: "90%" //Insert relative proficiency in percentage
//     },
//     {
//       Stack: "Backend",
//       progressPercentage: "70%"
//     },
//     {
//       Stack: "Programming",
//       progressPercentage: "60%"
//     }
//   ],
//   displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
// };

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Foundation Intern",
      company: "Chevron Nigeria Limited",
      companylogo: require("./assets/images/chevronlogo.png"),
      date: "January 2023 – June 2023",
      desc: "As a Data Foundation Intern, I contributed to the development and maintenance of data pipelines and dashboards, enhancing data accessibility and visualization for stakeholders.",
      // descBullets: [
      //   "Facilitated agile processes as Scrum Master for a data-focused team, improving sprint coordination by 50%, enhancing visibility, and prioritizing tasks using Azure DevOps to ensure timely project delivery",
      //   "Applied SQL and Excel to support data migration and cleanup projects, boosting data accuracy by 15% and improving system efficiency, contributing to successful enterprise-level deployments."
      // ]
    },
    {
      role: "Lead Product Manager",
      company: "Google Developer Student Clubs",
      companylogo: require("./assets/images/gdsc.png"),
      date: "September 2023 – July 2024",
      desc: "Led a team of 20+ students in developing innovative solutions, resulting in a 30% increase in student engagement through the implementation of a mobile application.",
    },
    {
      role: "Software Developer",
      company: "CWG PLC",
      companylogo: require("./assets/images/cwglogo.jpg"),
      date: "Jun 2025 – Present",
      desc: "As a Backend Developer, I am responsible for designing and implementing robust backend systems, ensuring seamless integration with frontend applications, and optimizing database performance.",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/moodnotes.png"),
      projectName: "Mood Notes",
      projectDesc: "A mood tracking app that helps users monitor their emotional well-being and provides insights to improve mental health.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mood-note-front.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/kuleanpay.png"),
      projectName: "Kuleanpay",
      projectDesc: "A mobile app that helps with seamless daily transactions and effortless finance management",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://kuleanpay-eta.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/lascofed.png"),
      projectName: "Lascofed",
      projectDesc: "A website for a cooperative federation, the Lagos State Cooperative Federation",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lascofed.coop/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thecellarage.png"),
      projectName: "The Cellarage",
      projectDesc: "An e-commerce platform for wine enthusiasts, offering a curated selection of wines from around the world.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://thecellarage.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/studystats.png"),
      projectName: "StudyStats",
      projectDesc: "A web application designed to help students track their study habits and improve their academic performance through data analysis.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.GDSC.StudyStats&hl=en"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements and Certifications",

  achievementsCards: [
    {
      title: "Machine Learning",
      subtitle:
        "Completed Machine Learning course by Stanford University in collaboration with Coursera.",
      image: require("./assets/images/machine learning.png"),
      imageAlt: "Machine Learning",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1XoufXiynvsXYJfkcaFgABuL06JJHNV4l/view?usp=drive_link"
        },
        {
          name: "Supervised ML",
          url: "https://drive.google.com/file/d/1z6CdDzMf-myglJ0NO6bhHLxbks22_W9B/view?usp=drive_link"
        },
        {
          name: "Advanced Learning Algorithms",
          url: "https://drive.google.com/file/d/1_Bc8VQTgddiP749AuZqrijXrFfOaeDAd/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Google Developer Student Clubs",
      subtitle:
        "Served as Lead Product Manager for Google Developer Student Clubs, leading a team of 20+ students in developing innovative solutions.",
      image: require("./assets/images/Google Developer Student Clubs.png"),
      imageAlt: "Google Developer Student Clubs",
      footerLink: [
        {
          name: "Certificate of Service",
          url: "https://drive.google.com/file/d/1oXL4wvH0x7jxzm8Dfs2QFILB1psjF5qw/view?usp=drive_link"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section



// Talks Sections



// Podcast Section



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+234 810 593 8812",
  email_address: "christopheramah1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "kachiamah", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
