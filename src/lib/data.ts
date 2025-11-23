import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico con Next.js, Stripe y PostgreSQL',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/imbubb4/Lab14_DAWA.git',
    featured: true,
  },
  {
    slug: 'task-manager',
    title: 'Task Manager App',
    description: 'Aplicación de gestión de tareas con autenticación y tiempo real',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    demoUrl: 'https://tasks.example.com',
    githubUrl: 'https://github.com/imbubb4/Lab14_DAWA.git',
    featured: true,
  },
  {
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Dashboard interactivo del clima con gráficos y pronósticos',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Next.js', 'Chart.js', 'OpenWeather API'],
    githubUrl: 'https://github.com/imbubb4/Lab14_DAWA.git',
    featured: false,
  },
];

export const personalInfo = {
  name: 'Adrian Heredia Sovero',
  title: 'Full Stack Developer',
  description: 'Desarrollador apasionado por crear experiencias web excepcionales y escalables. Especializado en Next.js y tecnologías modernas.',
  email: 'adrian.heredia@tecsup.edu.pe',
  github: 'https://github.com/imbubb4',
  linkedin: 'https://linkedin.com/in/tuusuario',
  siteUrl: 'https://tuportafolio.com',
  avatar: '/Foto_adrian.png',
};
