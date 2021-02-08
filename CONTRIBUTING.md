# Contributing 

## Making a release 

We follow Semver and use Conventional Commits to handle versioning and releasing new front-end packages. 

Prepend a commit message or pull request with `feat:` or `fix:` to create a new minor or patch version. When it's merged, a Github Action will increase the version, add a changelog, and publish the release on NPM. If there's a breaking change, prepend the commit with `!`. 

E.g: `fix: decreased spacing to prevent overlay`, or `!feat: renamed someProp to anotherProp`

- Learn more about [Design Op's package release process](https://nulogy.design/guides/packages)
- Learn more about [Conventional Commits](https://www.conventionalcommits.org/)
- Learn more about [SemVer](https://semver.org/)
