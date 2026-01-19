import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number; // 0-100 percentage
  icon: string;
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
      imageUrl: 'https://via.placeholder.com/600x400',
      demoUrl: 'https://web-portfolio-abduljabar.vercel.app/',
      githubUrl: 'https://github.com/Jabarteley'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks and projects',
      technologies: ['React', 'TypeScript', 'Firebase', 'Bootstrap'],
      imageUrl: 'https://via.placeholder.com/600x400',
      demoUrl: 'https://web-portfolio-abduljabar.vercel.app/',
      githubUrl: 'https://github.com/Jabarteley'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with forecasts and alerts',
      technologies: ['JavaScript', 'API Integration', 'Chart.js', 'Bootstrap'],
      imageUrl: 'https://via.placeholder.com/600x400',
      demoUrl: 'https://web-portfolio-abduljabar.vercel.app/',
      githubUrl: 'https://github.com/Jabarteley'
    },
    {
      id: 4,
      title: 'Fitness Tracker',
      description: 'Mobile-first application for tracking workouts and nutrition',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Redux'],
      imageUrl: 'https://via.placeholder.com/600x400',
      demoUrl: 'https://web-portfolio-abduljabar.vercel.app/',
      githubUrl: 'https://github.com/Jabarteley'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for managing social media accounts',
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'D3.js'],
      imageUrl: 'https://via.placeholder.com/600x400',
      demoUrl: 'https://web-portfolio-abduljabar.vercel.app/',
      githubUrl: 'https://github.com/Jabarteley'
    },
    {
      id: 6,
      title: 'Finance Tracker',
      description: 'Personal finance management application with budgeting tools',
      technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Stripe API'],
      imageUrl: 'https://via.placeholder.com/600x400',
      demoUrl: 'https://web-portfolio-abduljabar.vercel.app/',
      githubUrl: 'https://github.com/Jabarteley'
    }
  ];

  private skills: Skill[] = [
    { id: 1, name: 'JavaScript (ES6+)', level: 90, icon: '📝' },
    { id: 2, name: 'TypeScript', level: 85, icon: '📝' },
    { id: 3, name: 'React.js', level: 90, icon: '⚛️' },
    { id: 4, name: 'Angular', level: 85, icon: '⏭️' },
    { id: 5, name: 'Vue.js', level: 80, icon: '💚' },
    { id: 6, name: 'Node.js', level: 85, icon: '🟢' },
    { id: 7, name: 'Express.js', level: 85, icon: '⚡' },
    { id: 8, name: 'NestJS', level: 80, icon: 'nestjs' },
    { id: 9, name: 'Bootstrap', level: 90, icon: '🎨' },
    { id: 10, name: 'MongoDB', level: 80, icon: '🍃' },
    { id: 11, name: 'PostgreSQL', level: 75, icon: '🐘' },
    { id: 12, name: 'Git & GitHub', level: 90, icon: '🐙' }
  ];

  private experiences: Experience[] = [
    {
      id: 1,
      position: 'Frontend Development Intern',
      company: 'Flexisaf Edusoft LTD',
      period: '09/2025 – Present',
      description: 'Building and maintaining responsive UI components. Collaborating with backend teams to integrate APIs. Improving user experience through optimized UI design.',
      technologies: ['React.js', 'Bootstrap', 'API Integration', 'UI/UX Design']
    },
    {
      id: 2,
      position: 'Mobile App Intern',
      company: 'Bincom Dev Center',
      period: '12/2025 – Present',
      description: 'Developing mobile applications using React Native. Implementing navigation, state management, and API consumption. Participating in team sprints, code reviews, and product testing.',
      technologies: ['React Native', 'JavaScript', 'State Management', 'API Consumption']
    },
    {
      id: 3,
      position: 'Frontend Development Intern',
      company: 'Codeveda Technologies',
      period: '04/2025 – 08/2025',
      description: 'Designed reusable components using React and Bootstrap. Converted Figma designs into production-ready interfaces. Optimized application load time and improved UI responsiveness.',
      technologies: ['React', 'Bootstrap', 'Figma', 'Performance Optimization']
    },
    {
      id: 4,
      position: 'Software Development Intern',
      company: 'Federal University Wukari ICT Department',
      period: '05/2023 – Present',
      description: 'Contributed to school management systems and internal tools. Implemented authentication and improved database structure. Assisted in managing and deploying university web applications.',
      technologies: ['Node.js', 'Express.js', 'Authentication', 'Database Management']
    }
  ];

  private personalInfo = {
    name: 'Abduljabar Asaju',
    title: 'Full Stack Developer',
    email: 'zagajabar1@gmail.com',
    phone: '09045398005',
    location: 'Plot 9, Greenhill estate, Oko oba, Agege, Lagos, Nigeria',
    bio: 'Motivated and detail-oriented Full Stack Developer with strong skills in building responsive web applications using modern frontend and backend technologies. Passionate about creating efficient, scalable, and user-centric solutions. Seeking to contribute technical expertise, problem-solving abilities, and a commitment to continuous learning to a dynamic development team.',
    status: 'Single',
    nationality: 'Nigerian',
    gender: 'Male',
    portfolioUrl: 'https://web-portfolio-abduljabar.vercel.app/',
    linkedinUrl: 'https://www.linkedin.com/in/abduljabar-asaju-70b4a1389',
    githubUrl: 'https://github.com/Jabarteley'
  };

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectById(id: number): Observable<Project | undefined> {
    return of(this.projects.find(project => project.id === id));
  }

  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences);
  }

  getPersonalInfo(): Observable<any> {
    return of(this.personalInfo);
  }
}