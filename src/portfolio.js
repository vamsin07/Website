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
  username: "Vamsin",
  title: "Hi all, I'm Shivam",
  subTitle: emoji(
    "A Grad Student and engineer 🚀 on a journey to solve real world problems using a pinch of code. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1GWT0RRc0O_0v_mdrd_DRh4tSfYQExEko/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vamsin07",
  linkedin: "https://www.linkedin.com/in/shivam-singh-772704189/",
  gmail: "shs046@ucsd.edu",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I AM A GRAD STUDENT AT UCSD PURSUING AN M.S. IN MACHINE LEARNING & DATA SCIENCE",
  skills: [
    emoji(
      "⚡ Being an engineer I try to solve real world problems using Machine Learning"
    ),
    emoji("⚡ I try to work on projects that makes our lives convenient using ML"),
    emoji(
      "⚡ In the long term, I see myself as Generative AI researcher in the industry"
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
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
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
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
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-C"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California San Diego",
      logo: require("./assets/images/UCSDlogo.png"),
      subHeader: "Master of Science in Machine Learning and Data Science",
      duration: "September 2023 - June 2025",
      desc: "Pursuing Master of Science in Electrical and Computer Engineering with a concentration in Machine Learning and Data Science.",
      descBullets: [
        "Relevant Courses: Image Processing, Probability and Statistics in Data Science, Programming for Data Analysis"
      ]
    },
    {
      schoolName: "Manipal University Jaipur, India",
      logo: require("./assets/images/MUJlogo.png"),
      subHeader: "Bachelor of Science in Computer Science & Engineering",
      duration: "Jul 2019 - Jul 2023",
      desc: "IAESTE INDIA, BLOCKCHAIN@MANIPAL",
      descBullets: ["Relevant Courses: Software Engineering, Operating Systems, Computer Architecture, Engieering Mathematics, Data Science, Artificial Intelligence, Data Structures, Database Management Systems, Design and Analysis of Algorithms"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud Infrastructure", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "MERN Stack",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Undergraduate Intern",
      company: "Dell Technologies",
      companylogo: require("./assets/images/dell.png"),
      date: "Jan 2023 – Jul 2023",
      desc: "Part of the Infrastructure Storage Group(ISG) at Dell Technologies, Bengaluru, India",
      descBullets: [
        "Orchestrated the development of the AI/ML engine inside Dell's storage products wit collaboration with the ML team and a focus on performance and capacity monitoring.",
        "Understanding the client infrastructure in terms of storage requirements, and then designing solutions pertaining to their requirements."
      ]
    },
    {
      role: "Project Intern",
      company: "Tata Communications",
      companylogo: require("./assets/images/tata.png"),
      date: "Jun 2021 – Aug 2021",
      desc: "Part of the Developing Telecom Tools in Python team based in New Delhi, India",
      descBullets: [
        "Developed an analytics model to analyze projects in JIRA. Implemented by building an ETL(Extract Transform Pipeline) using PostgreSQL as the RDBMS and Tableau for data visualization.",
        " Deploying models to collect data for low resource metrics in the telecom industry like uncertainty in bandwidth and tower setup metadata."
      ]
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
  title: "Relevant Projects",
  subtitle: "Research/Application Based Projects that I have worked on",
  projects: [
    {
      image: require("./assets/images/download.jpg"),
      projectName: "Classifying Artworks/Paintings Using Deep Learning Techniques",
      projectDesc: "Guided research in the domain of computational aesthetics, and employed the dataset from WikiArt which contained around 8500 paintings. Developed a model using Convolutional Neural Networks for predicting the associated genre of the painting.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://link.springer.com/chapter/10.1007/978-981-99-2602-2_3"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/UCSDlogo.png"),
      projectName: "A Wearable Cardiac Ultrasound Imager@UCSD",
      projectDesc: "Implemented image segmentation of the Myocardium(heart tissue) in the Parasternal Short Axis View(PSAX) using the nnU-net model and performed strain analysis using Resnet-50 model under Professor Sheng Xu’s research lab.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.nature.com/articles/s41586-022-05498-z"
        }
      ]
    },
    {
      image: require("./assets/images/metamask.png"),
      projectName: "Full Stack NFT Marketplace",
      projectDesc: "Implemented building an NFT marketplace which allowed users to to upload their NFT's and bid for the existing ones, eventually buying them if the bid stays the highest, authentication was ensured with the help of Metamask.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/vamsin07/NFT-Marketplace-SE"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "DeepLearning.AI Professional Certificate",
      image: require("./assets/images/DL.jpg"),
      imageAlt: "DeepLearning.AI Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/13RZbi_CfiJ9rxNH9_3BIjxXGE9OhDA09/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Star Scholar for 4 Consecutive Years",
      subtitle:
        "Star Scholar at DPS R.K. Puram for 4 consecutive years, and was awarded the Blue Blazer",
      image: require("./assets/images/DPSRKP.png"),
      imageAlt: "DPS Logo",
      footerLink: [
        {
          name: "View link",
          url: "https://drive.google.com/file/d/1wEp1Q3W7a6K1rsnzq0XG1DYG0Yojk-IE/view?usp=drive_link"
        }
      ]
    },

    {
      title: "IAESTE India Exchange Delegate",
      subtitle: "Represented IAESTE India at AGC-2022, Vienna, Austria",
      image: require("./assets/images/iaeste.png"),
      imageAlt: "IAESTE Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Participation Certificate",
          url: "https://drive.google.com/file/d/1tJGYI3mePL3Z7d2iSXvjEh6kXrPSci5J/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};





// Talks Sections




const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 551-375-7714",
  email_address: "shs046@ucsd.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable
};
