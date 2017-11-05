### Commands
```
docker build . -t react-cli
```

If you want to build using create-react-app, then you may use these commands...

If Linux/Mac
```
docker run -v ${PWD}:/app \
  react-cli create-react-app app \
  --scripts-version=react-scripts-ts
```
If windows
```
docker run -v %cd%:/app react-cli create-react-app app --scripts-version=react-scripts-ts
```
