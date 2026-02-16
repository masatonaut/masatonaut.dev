export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'AI / ML',
    skills: ['Claude API', 'RAG', 'LangChain', 'Dify', 'Prompt Engineering'],
  },
  {
    name: 'Frontend',
    skills: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'Backend',
    skills: ['Python', 'Node.js', 'PostgreSQL', 'Supabase', 'Stripe'],
  },
  {
    name: 'Infrastructure',
    skills: ['Vercel', 'Docker', 'GitHub Actions', 'Cloudflare'],
  },
];
