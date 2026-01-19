import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PortfolioService, Skill } from '../services/portfolio.service';
import { loadPersonalInfo, loadSkills } from '../store/portfolio/portfolio.actions';
import { selectPersonalInfo, selectSkills } from '../store/portfolio/portfolio.selectors';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <section class="hero bg-primary text-white py-5">
      <div class="container text-center">
        <h1 class="display-4 fw-bold mb-3">Welcome to My Portfolio</h1>
        <p class="lead mb-4">Hi, I'm {{ (personalInfo$ | async)?.name }} - A passionate {{ (personalInfo$ | async)?.title }}</p>
        <a routerLink="/projects" class="btn btn-light btn-lg">
          View My Work
        </a>
      </div>
    </section>

    <section class="about-preview py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4 mb-4 mb-md-0">
            <img src="https://via.placeholder.com/300x300" alt="Profile" class="img-fluid rounded-circle border border-light">
          </div>
          <div class="col-md-8">
            <h2 class="display-6 fw-bold mb-4">About Me</h2>
            <p class="fs-5 mb-3">
              {{ (personalInfo$ | async)?.bio }}
            </p>
            <p class="fs-5">
              My passion lies in creating clean, efficient, and user-friendly solutions that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="skills py-5 bg-light">
      <div class="container">
        <h2 class="display-6 text-center fw-bold mb-5">My Skills</h2>
        <div class="row g-4">
          @for (skill of skills$ | async; track skill.id) {
            <div class="col-md-3 col-sm-6">
              <div class="card h-100 text-center p-4">
                <div class="skill-icon fs-1 mb-3">{{ skill.icon }}</div>
                <h3 class="h5 fw-semibold">{{ skill.name }}</h3>
                <p class="text-muted mt-2">{{ skill.level }}%</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  personalInfo$!: Observable<any>;
  skills$!: Observable<Skill[]>;

  constructor(private store: Store, private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.personalInfo$ = this.store.select(selectPersonalInfo);
    this.skills$ = this.store.select(selectSkills);
    this.store.dispatch(loadPersonalInfo());
    this.store.dispatch(loadSkills());
  }
}