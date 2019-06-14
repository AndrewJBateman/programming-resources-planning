# Publish to gh-pages

* [Medium article on publishing to gh-pages](https://medium.com/code-sketch/how-to-deploy-an-angular-7-app-to-github-pages-9427b609645f)

1. create build file, push to master branch, set up gh-pages on master branch in github.

2. `ng build --prod --base-href https://[username].github.io/[repo]/`

3. `ngh --dir=dist/[project-name]`
