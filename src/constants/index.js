import {
    linkedin,
    instagram,
    github,
    libertymutual,
    solarialabs,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "about",
    },
    {
      id: "work",
      title: "experience",
    },
    {
      id: "contact",
      title: "contact",
    },
  ];
  
  const contacts = [
    {
      title: "GitHub",
      icon: github,
      url: "https://github.com/elizabethseto",
    },
    {
      title: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/elizabethseto",
    },
    {
      title: "Instagram",
      icon: instagram,
      url: "https://www.instagram.com/elizabethseto/",
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Liberty Mutual Insurance",
      icon: libertymutual,
      iconBg: "#FDD023",
      date: "Sept 2022 - PRESENT",
      points: [
      ],
    },
    {
      title: "TechStart Intern",
      company_name: "Liberty Mutual Insurance",
      icon: libertymutual,
      iconBg: "#FDD023",
      date: "Jun 2022 - Sept 2022",
      points: ["Implemented and debugged interactive agent in Microsoft Teams to serve as a help desk and provide cloud solutions to users using Azure Cognitive Services; Microsoft Bot Framework, Language Understanding Intelligent Service (LUIS) and QnA Maker.",
      " Created conversational dialogue and translate users’ input into well-defined intents for the trained Bot to provide curated cloud resources back to the users.",
      " Implemented and debugged Cloud Engineering and Services Team’s customer portal website using Angular framework; developed reusable user interface components for web application to improve experience and engagement for the users.",
      "Technologies Used: Amazon Web Services, Microsoft Azure, Angular, Python, TypeScript, Node.js, Jest",
      ],
    },
    {
      title: "Software Development Co-op",
      company_name: "Solaria Labs",
      icon: solarialabs,
      iconBg: "#FDD023",
      date: "Jan 2022 - Jun 2022",
      points: [" Implemented and debugged numerous UI features and components using Flutter framework; learned best coding practices for Dart, developed reusable widgets, wrote integration and golden tests for application to improve user experience and engagement.",
      "Implemented and debugged multiple backend features and components; added a variety of maintenance tasks to the database, and created internal reports for management of user data with Node.js and Express web server, Objection.js for database interaction, and React for frontend.",
      "Rotational Scrum Master: learned about Agile Methodologies and facilitated daily stand-ups and meetings, formulated detailed stories and acceptance criteria in Jira, managed backlog, and planned for sprints.",
      "Technologies Used: Flutter, React.js, Dart, JavaScript, Node.js, Express.js, MySQL, Amazon Web Services"
      ],
    },
  ];
  
  
  export { contacts, experiences};