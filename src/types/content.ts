export type Section = { title: string; paragraphs?: string[]; bullets?: string[] };
export type Diagram = { caption: string; rows: { label: string; steps: string[] }[] };
export type MediaAsset = { src: string; alt: string; caption?: string };
export type Project = {
  slug: string; number: string; title: string; category: string; context: string; status: string;
  description: string; technologies: string[]; href?: string; compact?: boolean;
  sections: Section[]; diagram?: Diagram; gallery: { title: string; caption: string; image?: string; alt?: string }[];
};
export type Experience = { organisation: string; designation: string; dates: string; description: string; details: string[]; media?: MediaAsset[] };
export type SiteContent = {
  home: { positioning: string; education: string; location: string; portrait: string; selectedExperience: string };
  about: {
    intro: string; portrait: string; interestIntro: string; interests: { category: string; items: string[] }[]; tools: { category: string; items: string[] }[];
    beyond: {
      typing: { wpm: string; accuracy: string; duration: string; caption: string; image: string };
      formula1: { supporter: string; image: string; alt: string };
      football: { supporter: string; image: string; alt: string };
      sportingLine: string;
      activities: string;
    };
  };
  projects: Project[];
  experience: Experience[];
  education: { school: string; qualification: string; dates: string; detail?: string }[];
  certifications: string[]; recognition: string[];
  contact: { email: string; phone: string; github: string; linkedin: string; resume: string; intro: string };
  footer: { sheet: string; based: string; revision: string; email: string; linkedin: string; github: string };
};
