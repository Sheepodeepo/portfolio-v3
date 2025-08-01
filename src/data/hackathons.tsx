interface hackathons_interface{
  title : string,
  hackathons_title: string,
  date : string,
  description : string,
  tech : string[], 
  github? : string, 
  image? : string, 
  demo? : string,
  website? : string,
}
export const hackathons: hackathons_interface[] = [
    {
      title: "Fit Check AI",
      hackathons_title: "FLUX.1 Kontext AI Hackathon with Black Forest Labs and Replicate.",
      date : "6/21/2025",
      description: "Full-stack application with React, Python FastAPI. Prompts image of given user and returns AI clothing recommendations based on body type and preferences. Includes text-to-speech to read out recommendations.",
      tech: ["React", "Python", "Fast API", "Replicate", "Kontext 1.1 Flux", "Chatterbox AI"],
      github: "https://github.com/Jeeevii/FitCheck",
      demo: "https://your-ecommerce-demo.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      title: "LangChain AI",
      hackathons_title: "MCP - AWS - Enterprise Agents Challenge",
      date : "7/25/2025",
      description: "Multi AI Agent Application that allows user to create different short-video ads for a given product. User can select the type of ad, location of ad, and language of the ad. The application uses Amazon Bedrock AgentCore to create and manage AI Agents that generate the ads.",
      tech: ["Amazon Bedrock AgentCore", "Python", "FastAPI", "MiniMax MCP", "Brightdata MCP"],
      // github: "https://github.com/Jeeevii/LangBridgeAI",
      demo: "https://your-taskmanager-demo.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
  ];