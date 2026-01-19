import { createAction, props } from '@ngrx/store';
import { Project, Skill, Experience } from '../../services/portfolio.service';

// Load Projects
export const loadProjects = createAction('[Portfolio] Load Projects');
export const loadProjectsSuccess = createAction(
  '[Portfolio] Load Projects Success',
  props<{ projects: Project[] }>()
);
export const loadProjectsFailure = createAction(
  '[Portfolio] Load Projects Failure',
  props<{ error: string }>()
);

// Load Skills
export const loadSkills = createAction('[Portfolio] Load Skills');
export const loadSkillsSuccess = createAction(
  '[Portfolio] Load Skills Success',
  props<{ skills: Skill[] }>()
);
export const loadSkillsFailure = createAction(
  '[Portfolio] Load Skills Failure',
  props<{ error: string }>()
);

// Load Experiences
export const loadExperiences = createAction('[Portfolio] Load Experiences');
export const loadExperiencesSuccess = createAction(
  '[Portfolio] Load Experiences Success',
  props<{ experiences: Experience[] }>()
);
export const loadExperiencesFailure = createAction(
  '[Portfolio] Load Experiences Failure',
  props<{ error: string }>()
);

// Load Personal Info
export const loadPersonalInfo = createAction('[Portfolio] Load Personal Info');
export const loadPersonalInfoSuccess = createAction(
  '[Portfolio] Load Personal Info Success',
  props<{ personalInfo: any }>()
);
export const loadPersonalInfoFailure = createAction(
  '[Portfolio] Load Personal Info Failure',
  props<{ error: string }>()
);