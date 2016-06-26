# React Webpack Boilerplate
Boilerplate to start your react project written in ES6 syntax using react, react-dom, react router, reactive js(rxjs) and web pack

> * The javascript build is split into bundles based routing and dynamically loaded for each route
> * Reactive JS is used to handle data stream in the example, alternatively you can swap it with Redux if you want to have simpler implementation
> * All the raw assets (images, fonts, scss, css) are structured in folder `src/assets`. Once built, they are copied into `build/assets` folder
> * All assets URLs are hashed so infinite caching can be enabled.

> Note: It's not production ready, you will need to add extra webpack packages such as minifier, compression etc
> The example given is for client app only, if you want also use server side loading, you will need to implememet your own logic 

## Usage

First, install NPM packages

```console
npm install
```

Then Build

```console
npm run build
```

Then run webpack dev server so all your on-the-fly changes are hot loaded into your browser (default port `8080`)

```console
npm start
```

## Change default port

Change the port number to the number you want via changing `var port = [port number]` in file webpack.server.js

## Serving static client via Apache

Alternatively you can use Apache to serve your static files if you don't want to use webpack dev server. Simply point your `DocumentRoot` to the `build` folder, make sure you have `AllowOverride` enable to use local `.htaccess` file.

Then run

```console
npm run build-watch
```
