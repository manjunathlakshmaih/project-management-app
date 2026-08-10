const ProjectDetails = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce web application with product management, payment gateway integration, analytics dashboard, and order tracking.",

    priority: "High",
    status: "In Progress",
    progress: 75,
    progressColor: "#8B5CF6",

    startDate: "2026-06-12",
    dueDate: "2026-08-15",

    members: [
      {
        id: 1,
        name: "Manjunath",
        role: "Project Manager",
        designation: "role",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      {
        id: 2,
        name: "Priya Sharma",
        role: "Frontend Developer",
        designation: "Developer",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
      {
        id: 3,
        name: "Arun Kumar",
        role: "Backend Developer",
        designation: "Developer",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      {
        id: 4,
        name: "Sneha Reddy",
        role: "UI/UX Designer",
        designation: "Designer",
        avatar: "https://i.pravatar.cc/150?img=4",
      },
      {
        id: 5,
        name: "Rahul Verma",
        role: "QA Engineer",
        designation: "QA",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
    ],

    tasks: [
      {
        id: 1,
        title: "Design Product Listing Page",
        status: "In Progress",
        priority: "High",
        dueDate: "2026-07-05",
        assignedMembers: [
          {
            id: 2,
            name: "Priya Sharma",
            avatar: "https://i.pravatar.cc/150?img=2",
          },
          {
            id: 4,
            name: "Sneha Reddy",
            avatar: "https://i.pravatar.cc/150?img=4",
          },
        ],
      },

      {
        id: 2,
        title: "Implement Shopping Cart Functionality",
        status: "In Progress",
        priority: "Medium",
        dueDate: "2026-07-12",
        assignedMembers: [
          {
            id: 2,
            name: "Priya Sharma",
            avatar: "https://i.pravatar.cc/150?img=2",
          },
          {
            id: 3,
            name: "Arun Kumar",
            avatar: "https://i.pravatar.cc/150?img=3",
          },
          {
            id: 5,
            name: "Rahul Verma",
            avatar: "https://i.pravatar.cc/150?img=5",
          },
        ],
      },

      {
        id: 3,
        title: "Integrate Payment Gateway",
        status: "Review",
        priority: "Medium",
        dueDate: "2026-07-18",
        assignedMembers: [
          {
            id: 3,
            name: "Arun Kumar",
            avatar: "https://i.pravatar.cc/150?img=3",
          },
          {
            id: 4,
            name: "Sneha Reddy",
            avatar: "https://i.pravatar.cc/150?img=4",
          },
        ],
      },

      {
        id: 4,
        title: "Setup Admin Dashboard",
        status: "In Progress",
        priority: "Medium",
        dueDate: "2026-07-22",
        assignedMembers: [
          {
            id: 1,
            name: "Manjunath",
            avatar: "https://i.pravatar.cc/150?img=1",
          },
          {
            id: 2,
            name: "Priya Sharma",
            avatar: "https://i.pravatar.cc/150?img=2",
          },
          {
            id: 3,
            name: "Arun Kumar",
            avatar: "https://i.pravatar.cc/150?img=3",
          },
          {
            id: 5,
            name: "Rahul Verma",
            avatar: "https://i.pravatar.cc/150?img=5",
          },
        ],
      },

      {
        id: 5,
        title: "Write Checkout Test Cases",
        status: "To Do",
        priority: "Low",
        dueDate: "2026-07-28",
        assignedMembers: [
          {
            id: 5,
            name: "Rahul Verma",
            avatar: "https://i.pravatar.cc/150?img=5",
          },
        ],
      },
    ],
    activity: [
      {
        id: 1,
        type: "project_created",
        message: "Manjunath created the project",
        time: "2h ago",
      },
      {
        id: 2,
        type: "status_updated",
        message: "Priya updated project status to In Progress",
        time: "4h ago",
      },
      {
        id: 3,
        type: "task_added",
        message: 'Arun added a new task "Payment Integration"',
        time: "6h ago",
      },
      {
        id: 4,
        type: "file_uploaded",
        message: 'Sneha uploaded "Design_Assets.zip"',
        time: "1 day ago",
      },
      {
        id: 5,
        type: "member_joined",
        message: "Rahul joined the project",
        time: "2 days ago",
      },
    ],
    files: [
      {
        id: 1,
        name: "BRD.pdf",
        type: "pdf",
        size: "4.1 MB",
        uploadedAt: "1 day ago",
      },
      {
        id: 2,
        name: "DatabaseDesign.docx",
        type: "docx",
        size: "1.1 MB",
        uploadedAt: "2 days ago",
      },
    ],
  },

  {
    id: 2,
    title: "Mobile App Redesign",
    description:
      "Complete redesign of the mobile application focusing on user experience and modern UI patterns.",

    priority: "Medium",
    status: "In Progress",
    progress: 45,
    progressColor: "#F59E0B",

    startDate: "2026-07-01",
    dueDate: "2026-09-10",

    stats: {
      totalTasks: 12,
      completedTasks: 4,
      inProgressTasks: 5,
      reviewTasks: 2,
      totalMembers: 5,
      totalFiles: 3,
    },

    taskSummary: [
      { status: "To Do", count: 6 },
      { status: "In Progress", count: 5 },
      { status: "Review", count: 2 },
      { status: "Done", count: 4 },
    ],

    members: [
      {
        id: 1,
        name: "Neha",
        role: "UI Designer",
        designation: "Designer",
        avatar: "https://i.pravatar.cc/150?img=8",
      },
      {
        id: 2,
        name: "Amit",
        role: "Frontend Developer",
        designation: "Developer",
        avatar: "https://i.pravatar.cc/150?img=9",
      },
      {
        id: 3,
        name: "Suresh",
        role: "QA Engineer",
        designation: "QA",
        avatar: "https://i.pravatar.cc/150?img=10",
      },
    ],

    tasks: [
      {
        id: 1,
        title: "Wireframe Creation",
        status: "Done",
        priority: "Medium",
        assignedTo: 1,
        dueDate: "2026-07-15",
      },
      {
        id: 2,
        title: "Dashboard UI Design",
        status: "In Progress",
        priority: "High",
        assignedTo: 1,
        dueDate: "2026-07-28",
      },
      {
        id: 3,
        title: "Dark Theme Support",
        status: "Review",
        priority: "Medium",
        assignedTo: 2,
        dueDate: "2026-08-05",
      },
    ],

    files: [
      {
        id: 1,
        name: "Research.pdf",
        type: "pdf",
        size: "3.2 MB",
        uploadedAt: "1 day ago",
      },
      {
        id: 2,
        name: "Wireframes.fig",
        type: "fig",
        size: "5.4 MB",
        uploadedAt: "3 days ago",
      },
    ],

    activity: [
      {
        id: 1,
        type: "project_created",
        message: "Neha created the redesign project",
        time: "1 day ago",
      },
      {
        id: 2,
        type: "design_updated",
        message: "Amit reviewed latest design screens",
        time: "5h ago",
      },
    ],
  },

  {
    id: 3,
    title: "HR Management System",
    description:
      "Employee management system covering payroll, attendance, leave management, and reporting.",

    priority: "High",
    status: "Planning",
    progress: 20,
    progressColor: "#EF4444",

    startDate: "2026-08-01",
    dueDate: "2026-11-15",

    stats: {
      totalTasks: 10,
      completedTasks: 2,
      inProgressTasks: 2,
      reviewTasks: 1,
      totalMembers: 4,
      totalFiles: 2,
    },

    taskSummary: [
      { status: "To Do", count: 5 },
      { status: "In Progress", count: 2 },
      { status: "Review", count: 1 },
      { status: "Done", count: 2 },
    ],

    members: [
      {
        id: 1,
        name: "Naveen",
        role: "Project Manager",
        designation: "Owner",
        avatar: "https://i.pravatar.cc/150?img=11",
      },
      {
        id: 2,
        name: "Pooja",
        role: "Business Analyst",
        designation: "Manager",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      {
        id: 3,
        name: "Harish",
        role: "Backend Developer",
        designation: "Developer",
        avatar: "https://i.pravatar.cc/150?img=13",
      },
      {
        id: 4,
        name: "Kiran",
        role: "Frontend Developer",
        designation: "Developer",
        avatar: "https://i.pravatar.cc/150?img=14",
      },
    ],

    tasks: [
      {
        id: 1,
        title: "Requirement Gathering",
        status: "Done",
        priority: "High",
        assignedTo: 2,
        dueDate: "2026-08-07",
      },
      {
        id: 2,
        title: "Database Design",
        status: "In Progress",
        priority: "High",
        assignedTo: 3,
        dueDate: "2026-08-20",
      },
    ],

    files: [
      {
        id: 1,
        name: "BRD.pdf",
        type: "pdf",
        size: "4.1 MB",
        uploadedAt: "1 day ago",
      },
      {
        id: 2,
        name: "DatabaseDesign.docx",
        type: "docx",
        size: "1.1 MB",
        uploadedAt: "2 days ago",
      },
    ],

    activity: [
      {
        id: 1,
        type: "document_uploaded",
        message: "Pooja submitted requirement document",
        time: "3h ago",
      },
      {
        id: 2,
        type: "task_completed",
        message: "Harish completed database schema",
        time: "1 day ago",
      },
    ],
  },

  {
    id: 4,
    title: "Customer Support Portal",
    description: "Ticket management and customer self-service support system.",

    priority: "Low",
    status: "Completed",
    progress: 100,
    progressColor: "#22C55E",

    startDate: "2026-04-10",
    dueDate: "2026-07-15",

    stats: {
      totalTasks: 20,
      completedTasks: 20,
      inProgressTasks: 0,
      reviewTasks: 0,
      totalMembers: 3,
      totalFiles: 1,
    },

    taskSummary: [
      { status: "To Do", count: 0 },
      { status: "In Progress", count: 0 },
      { status: "Review", count: 0 },
      { status: "Done", count: 20 },
    ],

    members: [
      {
        id: 1,
        name: "Vijay",
        role: "Frontend Developer",
        designation: "Developer",
        avatar: "https://i.pravatar.cc/150?img=15",
      },
      {
        id: 2,
        name: "Anusha",
        role: "Backend Developer",
        designation: "Developer",
        avatar: "https://i.pravatar.cc/150?img=16",
      },
      {
        id: 3,
        name: "Deepak",
        role: "QA Engineer",
        designation: "QA",
        avatar: "https://i.pravatar.cc/150?img=17",
      },
    ],

    tasks: [
      {
        id: 1,
        title: "Ticket Workflow",
        status: "Done",
        priority: "Medium",
        assignedTo: 1,
        dueDate: "2026-05-10",
      },
      {
        id: 2,
        title: "Email Notifications",
        status: "Done",
        priority: "Low",
        assignedTo: 2,
        dueDate: "2026-06-18",
      },
    ],

    files: [
      {
        id: 1,
        name: "FinalReport.pdf",
        type: "pdf",
        size: "6.2 MB",
        uploadedAt: "2 weeks ago",
      },
    ],

    activity: [
      {
        id: 1,
        type: "project_completed",
        message: "Project marked as completed",
        time: "2 days ago",
      },
    ],
  },
];

export default ProjectDetails;
