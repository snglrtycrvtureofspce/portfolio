import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import inDevelopment from '@/public/inDevelopment.png'
import gateway from '@/public/gateway.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Stack",
    hash: "#stack",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: ".NET Software Engineer",
    companyName: "Gexateq - Full Time",
    location: "Minsk, Belarus - Hybrid working format",
    description: "",
    tags: ["C#", ".NET Core", "ASP.NET Core"],
    icon: React.createElement(CgWorkAlt),
    date: "March 2025 - present time",
  },
  {
    title: "Belarusian State University of Informatics and Radioelectronics",
    companyName: "Bachelor of Engineering - BE, Software Engineering",
    location: "Minsk, Belarus - Сorrespondence education",
    description: "",
    tags: ["Computer Science"],
    icon: React.createElement(LuGraduationCap),
    date: "September 2024 - February 2028 · 4 years",
  },
  {
    title: ".NET Software Engineer",
    companyName: "Solid Expert - Full Time",
    location: "Minsk, Belarus - Remote work",
    description:
      "Worked in a managed team, two backend developers (including me) + 4 frontend developers + 1 incoming tester + BA + PM + Team Lead;\n• Sometimes intercepted dailies and helped with demos, distributed tasks to the front, and also helped the BA with the transformation of business requirements into specs. The main project in the company was the development of an internal CRM system, specifically in it I was engaged in the following:\n• Created various microservices from scratch, and also refactored existing ones before me;\n• Was engaged in the development of nuget packages for their future interaction in microservices;\n• Was engaged in writing NUnit tests;\n• Designed and administered databases;\n• Was involved in CI/CD automation.\nAt one point I had to switch to a new technology for myself, such as .NET MAUI. There I developed a file manager application, which was internally connected to the company's internal microservices, synchronized with files and folders on the computer/cloud (in simple terms, an analogue of iCloud, but for the CRM system).\nAnd also developed a small application - an XML editor for PM.",
    tags: ["C#", ".NET Core", "ASP.NET Core", "Entity Framework Core", "MediatR", "FluentValidation", "AutoMapper", "Refit", "Serilog", "JWT Auth", "NUnit", "AWS (Amazon S3, IAM)", "SonarQube", "RabbitMQ", "Hangfire", "SignalR", "Firebase", "Elasticsearch", "Docker", "Portainer", "SQL", "Microsoft SQL Server", "CI/CD", "Git"],
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - June 2024 · 1 year",
  },
  {
    title: "Trainee Software Engineer",
    companyName: "Renaissance Hotels - Professional Training",
    location: "Minsk, Belarus - Hybrid work format",
    description:
      "Completed industrial and technological and pre-graduation practice in the IT department. Developed a software tool for automating the work of a hotel administrator. Automated the following processes:\n• Keeping records of reservations, guests, rooms and employees, as well as providing additional services to hotel guests;\n• Hotel management and operation (including effective inventory management, resources, flexibility of staff work schedules and accounting of financial flows);\n• Infrastructure management, such as buildings, equipment, communications, maintenance and cleaning;\n• Creating reports on hotel occupancy, average booking cost, profitability for different periods and other key indicators;\n• Implementation of an analytics system for demand forecasting and tariff optimization based on data analysis;\n• Creating a module for managing guest feedback, including processing reviews, suggestions and complaints;\n• Developing a loyalty system for regular customers, including accrual of bonuses and provision of special offers.",
    tags: ["C#", ".NET Core", "Entity Framework Core", "ADO.NET", "Windows Forms", "WPF", "Docker", "Microsoft SQL Server", "SQL", "Git", "Microsoft Office"],
    icon: React.createElement(CgWorkAlt),
    date: "November 2023 - April 2024 · 6 months",
  },
  {
    title: "Secondary Special Education, Information technology software",
    companyName: "College of Business and Law",
    location: "Minsk, Belarus - Full-time education",
    description: "Mastered basic skills in a variety of languages and technologies.",
    tags: ["Computer Science", "C#", ".NET Core", "ASP.NET Core", "Entity Framework Core", "ADO.NET", "Windows Forms", "WPF", "Microsoft SQL Server", "PostgreSQL", "MySQL", "SQLite3", "SQL", "T-SQL", "Git", "Adobe", "Microsoft Office", "C++", "Java", "Python", "1C", "PHP", "Assembler (masm32)"],
    icon: React.createElement(LuGraduationCap),
    date: "September 2020 - July 2024 · 3 years 10 months",
  }
] as const;

export const projectsData = [
  {
    title: "Gateway API",
    description: "",
    tags: ["C#", "Ocelot", "ASP.NET Core", ".NET Core", "CI/CD (GitLab)"],
    imageUrl: gateway,
    link: 'https://api.snglrtycrvtureofspce.me/',
  },
  {
    title: "Other GitHub projects",
    description: "",
    tags: ["Git"],
    imageUrl: gateway,
    link: 'https://github.com/snglrtycrvtureofspce/',
  },
  {
    title: "Other GitLab projects",
    description: "",
    tags: ["Git"],
    imageUrl: gateway,
    link: 'https://gitlab.com/snglrtycrvtureofspce/',
  },
  {
    title: "In development...",
    description: "",
    tags: ["Git"],
    imageUrl: inDevelopment,
    link: 'https://github.com/snglrtycrvtureofspce/',
  },
] as const;

export const stackData = [
  "C#",
  ".NET Core",
  "ASP.NET Core",
  "Entity Framework Core",
  "MediatR",
  "FluentValidation",
  "AutoMapper",
  "Refit",
  "Serilog",
  "JWT Auth",
  "NUnit",
  "AWS (Amazon S3, IAM)",
  "SonarQube",
  "RabbitMQ",
  "Hangfire",
  "SignalR",
  "Firebase",
  "Elasticsearch",
  "Docker (Portainer)",
  "SQL",
  "DBMS (MS SQL Server, PostgreSQL)",
  "CI/CD",
  "DRY/KISS/SOLID/SDLC",
  "Git",
  "Angular (Basic), React (Basic)"
] as const;