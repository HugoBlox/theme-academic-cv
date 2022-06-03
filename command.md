## Create a new element

```
hugo new --kind talk talk/2020-talk
```

```
hugo new --kind publication publication/devroey-2020
```

```
hugo new --kind project project/myproject
```

```
hugo new --kind post post/2020-10-08-ssbse20-bpa
```

## Import publications

```
academic import --bibtex imports.bib
```

## Test locally

```
hugo server
```

## Deploy
```
hugo
cd public
git add .
git commit -m "Build website"
git push origin master
```
