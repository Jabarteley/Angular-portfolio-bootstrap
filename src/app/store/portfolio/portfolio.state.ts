import { Project, Skill, Experience } from '../../services/portfolio.service';

export interface PortfolioState {
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
  personalInfo: any;
  loading: boolean;
  error: string | null;
}

export const initialState: PortfolioState = {
  projects: [],
  skills: [],
  experiences: [],
  personalInfo: {},
  loading: false,
  error: null
};