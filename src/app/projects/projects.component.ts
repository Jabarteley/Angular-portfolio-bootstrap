import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PortfolioService, Project } from '../services/portfolio.service';
import { loadProjects } from '../store/portfolio/portfolio.actions';
import { selectProjects } from '../store/portfolio/portfolio.selectors';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <section class="projects-section py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h1 class="display-4 fw-bold mb-3">My Projects</h1>
          <p class="lead text-muted">Check out some of my recent work</p>
          <hr class="w-25 mx-auto border-primary border-3 opacity-75">
        </div>

        <div class="row g-4">
          @for (project of projects$ | async; track project.id) {
            <div class="col-lg-4 col-md-6">
              <div class="card h-100 shadow-sm">
                <img [src]="project.imageUrl" [alt]="project.title" class="card-img-top" style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                  <h3 class="card-title fw-bold">{{ project.title }}</h3>
                  <p class="card-text text-muted flex-grow-1">{{ project.description }}</p>
                  <div class="tags d-flex flex-wrap gap-2 mb-3">
                    @for (tech of project.technologies; track tech) {
                      <span class="badge bg-primary">{{ tech }}</span>
                    }
                  </div>
                  <div class="mt-auto project-actions">
                    <a [href]="project.demoUrl" class="btn btn-primary me-2">View Demo</a>
                    <a [href]="project.githubUrl" class="btn btn-outline-primary">Source Code</a>
                  </div>
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
export class ProjectsComponent implements OnInit {
  projects$!: Observable<Project[]>;

  constructor(private store: Store, private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.projects$ = this.store.select(selectProjects);
    this.store.dispatch(loadProjects());
  }
}