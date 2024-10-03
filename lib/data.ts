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
    title: "Belarusian State University of Informatics and Radioelectronics",
    companyName: "Bachelor of Engineering - BE, Software Engineering",
    location: "",
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
      "• Working in a managed team using Agile methodology;\n• CRM system development;\n• Creating, maintaining and configuring services, writing NUnit tests;\n• Working with the cloud (Amazon S3, IAM);\n• Database design and administration;\n• CI/CD (BitBucket);\n• Developed a cloud-based file synchronization application with microservices on the .NET MAUI platform. As well as small applications like XML editor.",
    tags: ["C#", "ASP.NET Core", ".NET Core", "Entity Framework Core", "MediatR", "FluentValidation", "AutoMapper", "Refit", "JWT Auth", "NUnit", "Amazon Web Services (AWS)", "RabbitMQ", "Hangfire", "SignalR", "Firebase", "Elasticsearch", "Docker", "Portainer", "CI/CD", "Microsoft SQL Server", "SQL", "T-SQL", "Git"],
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - June 2024 · 1 year",
  },
  {
    title: "Trainee Software Engineer",
    companyName: "Renaissance Hotels - Professional Training",
    location: "Minsk, Belarus - Hybrid work format",
    description:
      "Completion of industrial-technological and pre-diploma practice. Developed a software tool to automate the work of a hotel administrator. Automated the following processes:\n• Keep records of reservations, guests, rooms and employees, as well as provide additional services to hotel guests;\n• Hotel management and operation (including effective inventory management, resources, flexibility in staff work schedules and accounting of financial flows);\n• Infrastructure management, such as buildings, equipment, communications, maintenance and cleaning;\n• Creating reports on hotel occupancy, average booking cost, profitability for different periods and other key indicators;\n• Implementation of an analytics system for demand forecasting and rate optimization based on data analysis;\n• Creation of a module for managing guest feedback, including processing reviews, suggestions and complaints;\n• Developing a loyalty system for regular customers, including accrual of bonuses and provision of special offers.",
    tags: ["C#", ".NET Core", "Entity Framework Core", "ADO.NET", "Windows Forms", "WPF", "Docker", "Microsoft SQL Server", "SQL", "T-SQL", "Git", "Microsoft Office"],
    icon: React.createElement(CgWorkAlt),
    date: "November 2023 - April 2024 · 6 months",
  },
  {
    title: "College of Business and Law",
    companyName: "Secondary Special Education, Information technology software",
    location: "",
    description: "Mastered basic skills in a variety of languages and technologies.",
    tags: ["Computer Science", "C#", "ASP.NET Core", ".NET Core", "Entity Framework Core", "ADO.NET", "Windows Forms", "WPF", "Microsoft SQL Server", "PostgreSQL", "MySQL", "SQLite3", "SQL", "T-SQL", "Git", "Adobe", "Microsoft Office", "C++", "Java", "Python", "1C", "PHP", "Assembler (masm32)"],
    icon: React.createElement(LuGraduationCap),
    date: "September 2020 - July 2024 · 3 years 10 months",
  }
] as const;

export const projectsData = [
  {
    title: "Gateway API",
    description: "",
    tags: ["Ocelot" ],
    imageUrl: gateway,
    link: 'https://api.snglrtycrvtureofspce.me/',
  },
  {
    title: "In development...",
    description: "",
    tags: ["Git" ],
    imageUrl: inDevelopment,
    link: 'https://github.com/snglrtycrvtureofspce/',
  },
] as const;

export const stackData = [
  "C#",
  "ASP.NET Core",
  ".NET Core",
  "Entity Framework Core",
  "MediatR",
  "FluentValidation",
  "AutoMapper",
  "Refit",
  "JWT Auth",
  "NUnit",
  "AWS (Amazon S3, IAM)",
  "RabbitMQ",
  "Hangfire",
  "SignalR",
  "Firebase",
  "Elasticsearch",
  "Docker (Portainer)",
  "CI/CD (GitLab, BitBucket)",
  "DBMS (MSSQL, PostgreSQL)",
  "Angular (Basic), React (Basic)"
] as const;