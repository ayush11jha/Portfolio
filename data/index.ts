  export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  export const gridItems = [
    {
      id: 1,
      title: "",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Accounts",
      description: "Social ",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Stack",
      description: "Tech",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Code Quotient",
      description: "Last worked for",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Rizzup-BOT",
    //   description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "lg:p-5",
    //   img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Diabetes-Prediction-System",
      des: "It is a machine learning-based application that analyzes patient data to predict the likelihood of diabetes using medical parameters.",
      img: "/project_1.png",
      iconLists: ["/python.svg","/ai.svg"],
      href: "https://github.com/ayush11jha/Diabetes-Prediction-System",
    },
    {
      id: 2,
      title: "Pharma AI",
      des: "It is an AI-powered system that leverages machine learning and data analytics to optimize drug discovery, predict disease outcomes, and enhance pharmaceutical research.",
      img: "/project_2.jpg",
      iconLists: ["/python.svg", "/stream.svg", "/ai.svg"],
      href: "https://github.com/rishabhpandey106/galeech-api",
    },
    {
      id: 3,
      title: "Predicting-life-insurance-based-on-his-age ",
      des: "This System uses machine learning to assess an individual's age and other factors to predict their insurance eligibility, premium, and risk category.",
      img: "/project3.gif",
      iconLists: ["/python.svg", "/ts.svg", "/ai.svg", ],
      href: "https://github.com/ayush11jha/Predicting-life-insurance-based-on-his-age",
    },
    {
      id: 4,
      title: "Expense-Tracker ",
      des: "It is a smart financial management system that helps users track, categorize, and analyze their expenses for better budgeting and savings.",
      img: "/project4.gif",
      iconLists: ["/javascript.svg","/nodejs.svg", ],
      href: "https://github.com/ayush11jha/Expense-Tracker",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "ReactJS",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "AI/ML",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "HTML",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Javascript",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
    {
      id: 5,
      title: "MongoDB",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 6,
      title: "PostgreSQL",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 7,
      title: "CSS",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
   
    {
      id: 8,
      title: "Flask",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
    {
      id: 9,
      title: "Streamlit",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
    {
      id: 10,
      title: "NodeJS",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
    {
      id: 11,
      title: "Vercel",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/ayush11jha",
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://twitter.com/@AyushJha22371",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/ayush-jha-9b3519202/",
    },
  ];

  export const social = [
    { id: 1, name: "GitHub", link: "https://github.com/ayush11jha", img: "" },
    { id: 2, name: "Twitter", link: "https://twitter.com/@AyushJha22371", img: "" },
    { id: 3, name: "LinkedIn", link: "https://www.linkedin.com/in/ayush-jha-9b3519202/", img: "" },
    { id: 4, name: "LeetCode", link: "https://leetcode.com/u/ajha88274/", img: "" },
    // { id: 5, name: "Medium", link: "https://medium.com/@rishabhpandey230", img: "" },
    { id: 5, name: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/user/ajha88274/", img: "" },
    // Add +--more social media links as needed
  ]