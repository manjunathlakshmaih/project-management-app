const ProjectDetails = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "This project aims to build a full-featured e-commerce platform with product management, payment processing, and analytics dashboard.",

    priority: "High",
    status: "In Progress",
    progress: 75,
    progressColor: "#7C3AED",
    startDate: "2026-06-12",
    dueDate: "2026-08-15",

    taskSummary: [
      { status: "To do", totalMembers: 8},
      { status: "inProgress", totalMembers: 5},
      { status: "review", totalMembers: 3},
      { status: "done", totalMembers: 12},
    ],

    members: [
      {
        id: 1,
        name: "Manjunath",
        role: "Frontend Developer",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      {
        id: 2,
        name: "Krishna",
        role: "Backend Developer",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
      {
        id: 3,
        name: "Rahul",
        role: "UI Designer",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      {
        id: 4,
        name: "Priya",
        role: "QA Engineer",
        avatar: "https://i.pravatar.cc/150?img=4",
      },
      {
        id: 5,
        name: "Arun",
        role: "DevOps",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
    ],

    tasks: [
      {
        id: 1,
        title: "Authentication Module",
        status: "Done",
        priority: "High",
      },
      {
        id: 2,
        title: "Product Management",
        status: "In Progress",
        priority: "High",
      },
      { id: 3, title: "Payment Gateway", status: "Review", priority: "Medium" },
    ],

    files: [
      { id: 1, name: "Requirements.pdf", size: "2.4 MB" },
      { id: 2, name: "UI-Design.fig", size: "8.1 MB" },
    ],

    activity: [
      { id: 1, message: "Manjunath created the project", time: "2h ago" },
      { id: 2, message: "Priya updated project status", time: "4h ago" },
      { id: 3, message: "Arun added Payment Integration task", time: "6h ago" },
    ],
  },

  {
    id: 2,
    title: "Mobile App Redesign",
    description:
      "Complete UI/UX redesign of the mobile application with modern user flows.",

    priority: "Medium",
    status: "In Progress",
    progress: 45,
    progressColor: "#F59E0B",

    startDate: "2026-07-01",
    dueDate: "2026-09-10",

    taskSummary: {
      todo: 12,
      inProgress: 7,
      review: 2,
      done: 5,
    },

    members: [
      {
        id: 1,
        name: "Neha",
        role: "UI Designer",
        avatar: "https://i.pravatar.cc/150?img=6",
      },
      {
        id: 2,
        name: "Amit",
        role: "Frontend Developer",
        avatar: "https://i.pravatar.cc/150?img=7",
      },
      {
        id: 3,
        name: "Suresh",
        role: "QA Engineer",
        avatar: "https://i.pravatar.cc/150?img=8",
      },
    ],

    tasks: [
      { id: 1, title: "Wireframe Design", status: "Done", priority: "Medium" },
      {
        id: 2,
        title: "Dashboard Screen",
        status: "In Progress",
        priority: "High",
      },
    ],

    files: [
      { id: 1, name: "Research.pdf", size: "3.2 MB" },
      { id: 2, name: "Wireframes.fig", size: "5.4 MB" },
    ],

    activity: [
      { id: 1, message: "Amit updated homepage UI", time: "1h ago" },
      { id: 2, message: "Neha uploaded wireframes", time: "5h ago" },
    ],
  },

  {
    id: 3,
    title: "HR Management System",
    description:
      "Employee management system covering payroll, attendance, and leave management.",

    priority: "High",
    status: "Planning",
    progress: 20,
    progressColor: "#EF4444",

    startDate: "2026-08-01",
    dueDate: "2026-11-15",

    taskSummary: {
      todo: 15,
      inProgress: 3,
      review: 1,
      done: 2,
    },

    members: [
      {
        id: 1,
        name: "Naveen",
        role: "Project Manager",
        avatar: "https://i.pravatar.cc/150?img=9",
      },
      {
        id: 2,
        name: "Pooja",
        role: "Business Analyst",
        avatar: "https://i.pravatar.cc/150?img=10",
      },
      {
        id: 3,
        name: "Harish",
        role: "Backend Developer",
        avatar: "https://i.pravatar.cc/150?img=11",
      },
      {
        id: 4,
        name: "Kiran",
        role: "Frontend Developer",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
    ],

    tasks: [
      {
        id: 1,
        title: "Requirement Gathering",
        status: "Done",
        priority: "High",
      },
      {
        id: 2,
        title: "Database Design",
        status: "In Progress",
        priority: "High",
      },
    ],

    files: [
      { id: 1, name: "BRD.pdf", size: "4.1 MB" },
      { id: 2, name: "DatabaseDesign.docx", size: "1.1 MB" },
    ],

    activity: [
      {
        id: 1,
        message: "Pooja submitted requirement document",
        time: "3h ago",
      },
      { id: 2, message: "Harish completed database schema", time: "1 day ago" },
    ],
  },

  {
    id: 4,
    title: "Customer Support Portal",
    description: "Ticket management and customer self-service support portal.",

    priority: "Low",
    status: "Completed",
    progress: 100,
    progressColor: "#22C55E",

    startDate: "2026-04-10",
    dueDate: "2026-07-15",

    taskSummary: {
      todo: 0,
      inProgress: 0,
      review: 0,
      done: 25,
    },

    members: [
      {
        id: 1,
        name: "Vijay",
        role: "Frontend Developer",
        avatar: "https://i.pravatar.cc/150?img=13",
      },
      {
        id: 2,
        name: "Anusha",
        role: "Backend Developer",
        avatar: "https://i.pravatar.cc/150?img=14",
      },
      {
        id: 3,
        name: "Deepak",
        role: "Tester",
        avatar: "https://i.pravatar.cc/150?img=15",
      },
    ],

    tasks: [
      { id: 1, title: "Ticket Workflow", status: "Done", priority: "Medium" },
      { id: 2, title: "Email Notification", status: "Done", priority: "Low" },
    ],

    files: [{ id: 1, name: "FinalReport.pdf", size: "6.2 MB" }],

    activity: [
      { id: 1, message: "Project marked as completed", time: "2 days ago" },
    ],
  },
];

export default ProjectDetails;
