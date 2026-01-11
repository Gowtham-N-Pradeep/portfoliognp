export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: "Web" | "Security" | "Academic";
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  problem?: string;
  solution?: string;
  features: string[];
  outcome?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "Programming Languages" | "Cybersecurity" | "Tools & Frameworks" | "Soft Skills";
  icon?: string;
  description: string;
  proficiency?: number; // 1-100
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
  gpa?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: "Internship" | "Workshop" | "Full-time" | "Part-time";
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date?: string;
  category?: string;
}
