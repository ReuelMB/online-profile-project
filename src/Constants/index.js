export const socialMediaLinks = [
  { key:"linkedInLink", href: "https://www.linkedin.com/in/reuelmb/", label: "LinkedIn", icon: "/online-profile-project/social_media/linkedin.svg"},
  { key:"gitHubLink", href: "https://github.com/ReuelMB", label: "GitHub", icon: "/online-profile-project/social_media/github.svg"}, 
  { key:"facebookLink", href: "https://www.facebook.com/profile.php?id=100078761495917&sk=about", label: "Facebook", icon: "/online-profile-project/social_media/facebook.svg"},
  { key:"xLink", href: "https://twitter.com/reuelmb", label: "X", icon: "/online-profile-project/social_media/x.svg"},
  { key:"instagramLink", href: "https://www.instagram.com/reuelbigo/", label: "Instagram", icon: "/online-profile-project/social_media/instagram.svg"}, 
];

export const expiriences = [
  {
    companyName: "Infor PSSC, INC.",
    jobType: "Full-Time",
    description: "As a member of a Scrum team, my responsibilities include designing and implementing features, as well as maintaining a cross-platform mobile application developed with ReactJS, Flux, Cordova, NodeJS, Java, and SQLite/SQL Server. Throughout the entire development lifecycle, I collaborated closely with my team, fostering effective teamwork and ensuring seamless communication. One key lesson I have learned is the importance of thorough requirement reviews and technical analyses. By meticulously evaluating each feature, we can more accurately estimate the time and effort needed for implementation, which is crucial for meeting our commitments. For example, I was assigned a ticket that initially appeared straightforward but proved to be quite complex upon a deeper technical analysis. It affected multiple aspects of the mobile app. To tackle this, we segmented the ticket into several sub-tickets, which allowed us to handle the complexity in a more structured and effective manner. This experience reinforced my critical thinking skills and underscored the importance of clear communication within the team. It also highlighted the value of breaking down complex tasks into manageable components. Overall, my involvement in this project significantly contributed to my growth as a developer.",
    timeSpan : "2 yrs 7 mos",
    positions: [
      {
        jobTitle: "Software Engineer, Associate",
        from: "Aug 2021",
        to: "Feb 2024",
        timeSpan: "2 yrs 7 mos",
        description: "",
      }
    ]
  },
  {
    companyName: "Texas Instruments - RAJ. Technologies, INC.",
    jobType: "Full-Time",
    description: "Worked with a team to support and maintain web applications created primarily with Java(JSP), MySQL/PLSQL, and JQuery. Successfully addressed customer issues across multiple countries.",
    timeSpan: "2 yrs 3 mos",
    positions: [
      {
        jobTitle: "Software Engineer, Senior",
        from: "Jan 2021",
        to: "Jun 2021",
        timeSpan: "6 mos",
        description: "I provided guidance to my new teammates regarding support activities and led them through the transition of support responsibilities to a new contractor.",
      },
      {
        jobTitle: "Software Engineer, Junior",
        from: "Sep 2020",
        to: "Dec 2020",
        timeSpan: "4 mos",
        description: "I was assigned to assist in the development of a complex web application featuring interactive graphical functionality using HTML canvas. During this project, I honed my skills in debugging and resolving software bugs.",
      },
      {
        jobTitle: "Software Engineer, Associate",
        from: "Apr 2019",
        to: "Aug 2020",
        timeSpan: "1 yr 5 mos",
        description: "I began as an assistant to my teammates, helping them support their assigned applications. I quickly adapted to the tech stack and support processes, which led to me being assigned my own applications (created primarily with Java(JSP), MySQL/PLSQL, and JQuery) to maintain and support.",
      },
    ]
  },
]

export const tools = [
  {
    id: 1,
    label: "HTML",
    icon: "/online-profile-project/tech_tools/html5.svg"
  },
  {
    id: 2,
    label: "CSS",
    icon: "/online-profile-project/tech_tools/css3.svg"
  },
  {
    id: 3,
    label: "JavaScript",
    icon: "/online-profile-project/tech_tools/javascript.svg"
  },
  {
    id: 4,
    label: "React JS",
    icon: "/online-profile-project/tech_tools/react.svg"
  },
  {
    id: 5,
    label: "Tailwind CSS",
    icon: "/online-profile-project/tech_tools/tailwindcss.svg"
  },
  {
    id: 6,
    label: "Java",
    icon: "/online-profile-project/tech_tools/java.svg"
  },
  {
    id: 7,
    label: "SQL",
    icon: "/online-profile-project/tech_tools/sql.svg"
  },
  {
    id: 8,
    label: "PHP",
    icon: "/online-profile-project/tech_tools/php.svg"
  },
  {
    id: 9,  
    label: "GIT",
    icon: "/online-profile-project/tech_tools/git.svg"
  },
]

export const portfolioProjects = {
  PLATFORMS: ["ALL", "WEB", "MOBILE"],
  PROJECTS: [
      { key:"onlineProfile", platform: "WEB", href: "https://reuelmb.github.io/online-profile-project/", label: "Online Profile", image: "/online-profile-project/portfolio_screenshots/project_portfolio.png", text: "Crafted an online profile to highlight my expertise and abilities.", stack: [3,4,5]},
  ]
}