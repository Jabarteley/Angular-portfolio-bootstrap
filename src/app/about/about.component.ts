import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PortfolioService, Experience } from '../services/portfolio.service';
import { loadPersonalInfo, loadExperiences } from '../store/portfolio/portfolio.actions';
import { selectPersonalInfo, selectExperiences } from '../store/portfolio/portfolio.selectors';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <section class="about-section py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h1 class="display-4 fw-bold mb-4">About Me</h1>
          <hr class="w-25 mx-auto border-primary border-3 opacity-75">
        </div>

        <div class="row align-items-center">
          <div class="col-md-4 mb-4 mb-md-0">
            <img src="https://via.placeholder.com/400x400" alt="Profile Picture" class="img-fluid rounded shadow">
          </div>

          <div class="col-md-8 ps-md-5">
            <h2 class="h3 fw-bold mb-4">Hi, I'm {{ (personalInfo$ | async)?.name }}</h2>
            <p class="fs-5 mb-4">
              {{ (personalInfo$ | async)?.bio }}
            </p>

            <div class="mb-4">
              <h3 class="h5 fw-semibold mb-3">Personal Information</h3>
              <ul class="list-unstyled">
                <li><strong>Status:</strong> {{ (personalInfo$ | async)?.status }}</li>
                <li><strong>Nationality:</strong> {{ (personalInfo$ | async)?.nationality }}</li>
                <li><strong>Gender:</strong> {{ (personalInfo$ | async)?.gender }}</li>
              </ul>
            </div>

            <div class="mb-4">
              <h3 class="h5 fw-semibold mb-3">Education</h3>
              <ul class="list-unstyled">
                <li><strong>Bachelor of Science (Computer Science)</strong> - Federal University Wukari (Expected 2026)</li>
                <li><strong>Secondary School Certificate</strong> - Ifako International Schools (2016-2022)</li>
              </ul>
            </div>

            <div>
              <h3 class="h5 fw-semibold mb-3">Interests</h3>
              <div class="d-flex flex-wrap gap-2">
                <span class="badge bg-primary">Web Development</span>
                <span class="badge bg-success">Mobile Development</span>
                <span class="badge bg-info">UI/UX Design</span>
                <span class="badge bg-warning text-dark">Cloud Computing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="experience py-5 bg-light">
      <div class="container">
        <h2 class="display-4 text-center fw-bold mb-5">My Experience</h2>

        <div class="mx-auto" style="max-width: 768px;">
          @for (exp of experiences$ | async; track exp.id) {
            <div class="card mb-4">
              <div class="card-body">
                <div class="text-primary fw-bold mb-2">{{ exp.period }}</div>
                <h3 class="h5 fw-semibold mb-1">{{ exp.position }}</h3>
                <h4 class="text-muted mb-3">{{ exp.company }}</h4>
                <p>{{ exp.description }}</p>
                <div class="mt-3">
                  <span class="fw-semibold">Technologies:</span>
                  @for (tech of exp.technologies; track tech) {
                    <span class="badge bg-secondary ms-2">{{ tech }}</span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  personalInfo$!: Observable<any>;
  experiences$!: Observable<Experience[]>;

  constructor(private store: Store, private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.personalInfo$ = this.store.select(selectPersonalInfo);
    this.experiences$ = this.store.select(selectExperiences);
    this.store.dispatch(loadPersonalInfo());
    this.store.dispatch(loadExperiences());
  }
}