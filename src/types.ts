export interface CMFSpec {
  colorName: string;
  colorValue: string; // hex code for display
  material: string;
  finish: string;
}

export interface DimensionSpec {
  width: string;
  height: string;
  depth: string;
  weight: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  brief: string;
  problem: string;
  solution: string;
  sketchUrl: string;
  renderUrl: string;
  sketchCaption: string;
  renderCaption: string;
  cmf: CMFSpec[];
  dimensions: DimensionSpec;
  features: string[];
  tags: string[];
  featured: boolean;
}

export interface DesignerProfile {
  name: string;
  title: string;
  bio: string;
  aboutText: string;
  skills: string[];
  tools: string[];
  experience: {
    role: string;
    company: string;
    period: string;
    description: string;
  }[];
}
