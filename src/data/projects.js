export const projects = [
  {
    id: "gymflow",
    title: "GymFlow",
    shortDescription: "A Smart Gym Occupancy Management System that enables gym members to monitor real-time occupancy status before visiting.",
    fullDescription: "GymFlow is an end-to-end smart gym management platform designed to optimize gym throughput, reduce overcrowding during peak hours, and empower fitness enthusiasts to make data-driven workout decisions. It features real-time capacity tracking, predictive peak hour analytics, automated check-in logging, and subscription membership control.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL"],
    bgClass: "project-gymflow",
    bgImage: "/assets/images/gymflow_bg.png",
    githubLink: "https://github.com/24CSB0B06/GymFlow",
    liveLink: "https://gymflow.demo.app",
    details: {
      category: "Full Stack Web Application",
      role: "Lead Developer & Architect",
      timeline: "3 Months",
      keyFeatures: [
        "Real-time sensor & check-in occupancy data synchronization",
        "Predictive crowding metrics based on historical traffic patterns",
        "Role-based access control for gym administrators & members",
        "Interactive member dashboard with live capacity visualizers"
      ],
      architecture: "Built with React frontend, Node.js/Express REST APIs, and PostgreSQL database with optimized queries for time-series attendance tracking."
    }
  },
  {
    id: "gatewise",
    title: "GateWise",
    shortDescription: "A Smart Railway Gate Monitoring Platform providing live gate status and scheduling updates to daily commuters.",
    fullDescription: "GateWise addresses daily transit bottlenecks caused by unannounced railway level crossing closures. By combining real-time railway schedule data, crowdsourced status updates, and automated alerts, GateWise helps commuters bypass blocked crossings, saving valuable transit time and preventing traffic congestion.",
    techStack: ["React", "Node.js", "Supabase", "REST API"],
    bgClass: "project-gatewise",
    bgImage: "/assets/images/gatewise_bg.png",
    githubLink: "https://github.com/24CSB0B06/GateWise",
    liveLink: "https://gatewise.demo.app",
    details: {
      category: "IoT & Web System",
      role: "Full Stack Engineer",
      timeline: "2 Months",
      keyFeatures: [
        "Live status indicators (Open / Closing Soon / Closed) for nearby level crossings",
        "Automated push notifications for scheduled train arrivals",
        "Community reporting mechanism for instant traffic updates",
        "Integrated map views displaying alternate detour routes"
      ],
      architecture: "Uses React with Supabase real-time subscriptions to broadcast status changes instantly across web and mobile clients."
    }
  },
  {
    id: "tourism-website",
    title: "Tourism Website",
    shortDescription: "An interactive web application showcasing popular travel destinations, custom travel itineraries, and responsive booking layouts.",
    fullDescription: "An immersive digital travel discovery platform designed to inspire travelers with curated destination guides, interactive travel planners, user ratings, and dynamic booking request forms. Designed with modern visual layouts, glassmorphism UI elements, and full mobile responsiveness.",
    techStack: ["HTML5", "CSS3", "JavaScript", "React"],
    bgClass: "project-tourism",
    bgImage: "/assets/images/tourism_bg.png",
    githubLink: "https://github.com/24CSB0B06/Tourism-Website",
    liveLink: "https://24csb0b06.github.io/Tourism-Website/",
    details: {
      category: "Interactive Web Portal",
      role: "Frontend Designer & Developer",
      timeline: "1 Month",
      keyFeatures: [
        "Interactive destination filters by region, budget, and travel style",
        "Custom itinerary builder with estimated cost calculators",
        "Fluid responsive design tailored for mobile, tablet, and desktop viewports",
        "Accessible forms with interactive date pickers & guest counts"
      ],
      architecture: "Engineered using clean, semantic HTML5, custom CSS design system, and modular JavaScript for client-side interactions."
    }
  }
];
