# microfrontend-simple-app

1. Create products list.
    a.Create products folder
    b.Run npm init -y
    c. Install dependencies 
       "faker": "^5.1.0",
       "html-webpack-plugin": "^4.5.0",
       "nodemon": "^2.0.6",
       "webpack": "^5.3.2",
       "webpack-cli": "^4.1.0",
       "webpack-dev-server": "^3.11.0"
    d.Create template in public/index.html, add HtmlWebpackPlugin.
    e.Add commend `"start": "webpack serve"` to package.json
    f.Run `npm run start`.

2. Create Container same way, install ModuleFederationPlugin, add to webpack.config.js, change port to 8081, run `npm run start`.

3. Create Card same way, install ModuleFederationPlugin, add to webpack.config.js, change port to 8082, run `npm run start`.