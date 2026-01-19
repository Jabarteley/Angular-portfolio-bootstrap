import { createReducer, on } from '@ngrx/store';
import { PortfolioState, initialState } from './portfolio.state';
import { 
  loadProjectsSuccess, 
  loadProjectsFailure, 
  loadSkillsSuccess, 
  loadSkillsFailure,
  loadExperiencesSuccess,
  loadExperiencesFailure,
  loadPersonalInfoSuccess,
  loadPersonalInfoFailure,
  loadProjects
} from './portfolio.actions';

export const portfolioReducer = createReducer(
  initialState,
  
  on(loadProjects, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  
  on(loadProjectsSuccess, (state, { projects }) => ({
    ...state,
    projects,
    loading: false
  })),
  
  on(loadProjectsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  on(loadSkillsSuccess, (state, { skills }) => ({
    ...state,
    skills,
    loading: false
  })),
  
  on(loadSkillsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  on(loadExperiencesSuccess, (state, { experiences }) => ({
    ...state,
    experiences,
    loading: false
  })),
  
  on(loadExperiencesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  on(loadPersonalInfoSuccess, (state, { personalInfo }) => ({
    ...state,
    personalInfo,
    loading: false
  })),
  
  on(loadPersonalInfoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);