import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, of } from 'rxjs';
import { PortfolioService } from '../../services/portfolio.service';
import { 
  loadProjects, 
  loadProjectsSuccess, 
  loadProjectsFailure,
  loadSkills,
  loadSkillsSuccess,
  loadSkillsFailure,
  loadExperiences,
  loadExperiencesSuccess,
  loadExperiencesFailure,
  loadPersonalInfo,
  loadPersonalInfoSuccess,
  loadPersonalInfoFailure
} from './portfolio.actions';

@Injectable()
export class PortfolioEffects {
  loadProjects$;
  loadSkills$;
  loadExperiences$;
  loadPersonalInfo$;

  constructor(
    private actions$: Actions,
    private portfolioService: PortfolioService
  ) {
    this.loadProjects$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadProjects),
        concatMap(() =>
          this.portfolioService.getProjects().pipe(
            map(projects => loadProjectsSuccess({ projects })),
            catchError(error => of(loadProjectsFailure({ error: error.message })))
          )
        )
      )
    );

    this.loadSkills$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadSkills),
        concatMap(() =>
          this.portfolioService.getSkills().pipe(
            map(skills => loadSkillsSuccess({ skills })),
            catchError(error => of(loadSkillsFailure({ error: error.message })))
          )
        )
      )
    );

    this.loadExperiences$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadExperiences),
        concatMap(() =>
          this.portfolioService.getExperiences().pipe(
            map(experiences => loadExperiencesSuccess({ experiences })),
            catchError(error => of(loadExperiencesFailure({ error: error.message })))
          )
        )
      )
    );

    this.loadPersonalInfo$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadPersonalInfo),
        concatMap(() =>
          this.portfolioService.getPersonalInfo().pipe(
            map(personalInfo => loadPersonalInfoSuccess({ personalInfo })),
            catchError(error => of(loadPersonalInfoFailure({ error: error.message })))
          )
        )
      )
    );
  }
}