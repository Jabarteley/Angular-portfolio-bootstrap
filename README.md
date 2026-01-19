# Angular Portfolio with Bootstrap and NgRx

This is a portfolio website built with Angular, styled with Bootstrap, and managed with NgRx for state management.

## Features

- Responsive design using Bootstrap
- State management with NgRx
- Modern Angular architecture
- Production-ready build configuration

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Run locally: `npm start`
4. Build for production: `ng build --base-href=/angular-portfolio-bootstrap/ --configuration=production --output-path=dist/angular-portfolio-bootstrap --output-mode=static`

## Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Push your code to GitHub
2. Create a `.github/workflows/gh-pages.yml` file with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: |
          npm run build -- --base-href=/angular-portfolio-bootstrap/ --configuration=production --output-path=dist/angular-portfolio-bootstrap --output-mode=static

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/angular-portfolio-bootstrap
```

### Option 2: Manual Deployment

1. Build the project: `ng build --base-href=/angular-portfolio-bootstrap/ --configuration=production --output-path=dist/angular-portfolio-bootstrap --output-mode=static`
2. Copy the contents of the `dist/angular-portfolio-bootstrap` folder
3. Create a `gh-pages` branch in your GitHub repository
4. Paste the build output in the root of the `gh-pages` branch
5. In your repository settings, under "Pages", select the `gh-pages` branch as the source

## Project Structure

- `src/app/`: Main application components
- `src/app/store/`: NgRx store implementation
- `src/app/services/`: Shared services
- `src/styles.css`: Global styles

## Technologies Used

- Angular 21+
- Bootstrap 5
- NgRx for state management
- RxJS for reactive programming

## Development

- Run `npm start` for development server
- Run `npm run build` for production build
- Run `npm test` for unit tests