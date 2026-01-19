import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PortfolioService } from '../services/portfolio.service';
import { loadPersonalInfo } from '../store/portfolio/portfolio.actions';
import { selectPersonalInfo } from '../store/portfolio/portfolio.selectors';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  template: `
    <section class="contact-section py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h1 class="display-4 fw-bold mb-3">Get In Touch</h1>
          <p class="lead text-muted">Have a project in mind? Let's work together!</p>
          <hr class="w-25 mx-auto border-primary border-3 opacity-75">
        </div>

        <div class="row">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
              <div class="mb-4">
                <label for="name" class="form-label fw-bold">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  [(ngModel)]="formData.name"
                  class="form-control"
                  placeholder="Your Name"
                  required>
              </div>

              <div class="mb-4">
                <label for="email" class="form-label fw-bold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  [(ngModel)]="formData.email"
                  class="form-control"
                  placeholder="Your Email"
                  required>
              </div>

              <div class="mb-4">
                <label for="subject" class="form-label fw-bold">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  [(ngModel)]="formData.subject"
                  class="form-control"
                  placeholder="Subject"
                  required>
              </div>

              <div class="mb-4">
                <label for="message" class="form-label fw-bold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  [(ngModel)]="formData.message"
                  rows="5"
                  class="form-control"
                  placeholder="Your Message"
                  required></textarea>
              </div>

              <button
                type="submit"
                [disabled]="!contactForm.form.valid"
                class="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>

          <div class="col-lg-6">
            <div class="card p-4 bg-light">
              <h2 class="h4 fw-bold mb-4">Contact Information</h2>

              <div class="d-flex align-items-start mb-4">
                <div class="p-2 bg-primary bg-opacity-10 rounded-circle me-3">
                  <i class="bi bi-telephone text-primary"></i>
                </div>
                <div>
                  <h3 class="h6 fw-semibold">Phone</h3>
                  <p class="text-muted">{{ (contactInfo$ | async)?.phone }}</p>
                </div>
              </div>

              <div class="d-flex align-items-start mb-4">
                <div class="p-2 bg-primary bg-opacity-10 rounded-circle me-3">
                  <i class="bi bi-envelope text-primary"></i>
                </div>
                <div>
                  <h3 class="h6 fw-semibold">Email</h3>
                  <p class="text-muted">{{ (contactInfo$ | async)?.email }}</p>
                </div>
              </div>

              <div class="d-flex align-items-start mb-4">
                <div class="p-2 bg-primary bg-opacity-10 rounded-circle me-3">
                  <i class="bi bi-geo-alt text-primary"></i>
                </div>
                <div>
                  <h3 class="h6 fw-semibold">Location</h3>
                  <p class="text-muted">{{ (contactInfo$ | async)?.location }}</p>
                </div>
              </div>

              <div class="mt-4">
                <h3 class="h6 fw-semibold mb-3">Connect with me</h3>
                <div class="d-flex gap-3">
                  <a [href]="(contactInfo$ | async)?.portfolioUrl" target="_blank" class="btn btn-outline-primary">
                    <i class="bi bi-link-45deg"></i>
                  </a>
                  <a [href]="(contactInfo$ | async)?.linkedinUrl" target="_blank" class="btn btn-outline-primary">
                    <i class="bi bi-linkedin"></i>
                  </a>
                  <a [href]="(contactInfo$ | async)?.githubUrl" target="_blank" class="btn btn-outline-dark">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactInfo$!: Observable<any>;

  constructor(private store: Store, private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.contactInfo$ = this.store.select(selectPersonalInfo);
    this.store.dispatch(loadPersonalInfo());
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted:', this.formData);
      alert('Thank you for your message! I will get back to you soon.');
      form.resetForm();
    }
  }
}