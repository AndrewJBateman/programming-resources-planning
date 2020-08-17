# Publish to gh-pages

* [Medium article on publishing to gh-pages](https://medium.com/code-sketch/how-to-deploy-an-angular-7-app-to-github-pages-9427b609645f)

1. create build file, push to master branch, set up gh-pages on master branch in github.

2. `ng build --prod --base-href https://[username].github.io/[repo]/`

3. `ngh --dir=dist/[project-name]`

## Publish using angular-cli-ghpages

1. In `angular.json` change "outputPath": "docs"

2. Create build file: ng build --prod --base-href="https://AndrewJBateman.github.io/angular-material-nav/"

3. In build file docs folder: copy index.html to 404.html

4. add, changes, commit and push to Github as usual

5. In Github repo: settings - change Source master branch to master branch/docs folder

## Publish website to GCP Console

* [How to Deploy Angular 8 app on Google Cloud Platform ( GCP ) ?](https://medium.com/@karthiksagar/how-to-deploy-angular-8-app-on-google-cloud-platform-gcp-cdd79e5cc5cf)
