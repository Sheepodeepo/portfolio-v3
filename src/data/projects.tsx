interface Projects{
  title : string,
  hackathon : boolean,
  description : string,
  tech : string[], 
  github? : string, 
  image? : string, 
  demo? : string,
  website? : string,
}

export const projects:Projects[] = [
    {
      title: "LangBridge AI",
      // hackathons_title: "MCP - AWS - Enterprise Agents Challenge",
      // date : "7/25/2025",
      hackathon : true,
      description: "Multi AI Agent Application that allows user to create different short-video ads for a given product. User can select the type of ad, location of ad, and language of the ad. The application uses Amazon Bedrock AgentCore to create and manage AI Agents that generate the ads.",
      tech: ["Amazon Bedrock AgentCore", "Python", "FastAPI", "MiniMax MCP", "Brightdata MCP"],
      github: "https://github.com/Jeeevii/LangBridgeAI",
      demo: "https://www.youtube.com/watch?v=sQS5CLRmQZY",
      image: "/images/langbridgeAI.png"
    },
    {
      title: "Fit Check AI",
      hackathon: true,
      // hackathons_title: "FLUX.1 Kontext AI Hackathon with Black Forest Labs and Replicate.",
      // date : "6/21/2025",
      description: "Full-stack application with React, Python FastAPI. Integrates and uses AI to edits user inputted images to improve user's clothing/fits. Returns AI clothing recommendations based on body type and preferences. Includes text-to-speech.",
      tech: ["React", "Python", "Fast API", "Gemini", "Replicate", "Kontext 1.1 Flux", "Chatterbox AI"],
      github: "https://github.com/Jeeevii/FitCheck",
      demo: "https://www.youtube.com/watch?v=Melo3dYctjM",
      image: "/images/fitcheck.png",
    },
    {
      title: "Recipe Application",
      hackathon: false,
      description: "Full-stack application integrating with AI with React, Node.js, and PostgreSQL deployed using Docker and AWS. Features include user authentication and recipe management.",
      tech: ["React", "Java", "SpringBoot", "PostgreSQL", "Docker", "Gemini", "JWT"],
      github: "https://github.com/sheepodeepo/pantrypal",
      image: "/images/pantrypal.png",
      website: "https://pantrypal.live"
    },
    {
      title: "Article Management System",
      hackathon: false,
      description: "Full Stack Application for Peer Review Articles. Features include user authentication, article creation/management, user roles, with a focus on performance and scalability.",
      tech: ["React", "Springboot", "PostgreSQL", "Docker", "Apache PDFBox", "JWT"],
      github: "https://github.com/sheepodeepo/trendsight",
      image: "/images/trendsight-bg.png",
    },
    {
      title: "League of Legends Analytics Website",
      hackathon: false,
      description: "Data visualization platform for fetching and presenting data about given user; presenting insights on user performance in video games.",
      tech: ["HTML/CSS", "Node.js", "Express.js", "Firebase"],
      github: "https://github.com/Jeeevii/RiotStatsChecker",
      image: "/images/wpgg.png",
      website: "https://wpgg-6f4e2.web.app/",
    }
  ];