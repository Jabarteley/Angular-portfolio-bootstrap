import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PortfolioState } from './portfolio.state';

export const selectPortfolioState = createFeatureSelector<PortfolioState>('portfolio');

export const selectProjects = createSelector(
  selectPortfolioState,
  (state: PortfolioState) => state.projects
);

export const selectSkills = createSelector(
  selectPortfolioState,
  (state: PortfolioState) => state.skills
);

export const selectExperiences = createSelector(
  selectPortfolioState,
  (state: PortfolioState) => state.experiences
);

export const selectPersonalInfo = createSelector(
  selectPortfolioState,
  (state: PortfolioState) => state.personalInfo
);

export const selectLoading = createSelector(
  selectPortfolioState,
  (state: PortfolioState) => state.loading
);

export const selectError = createSelector(
  selectPortfolioState,
  (state: PortfolioState) => state.error
);