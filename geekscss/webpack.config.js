const path = require("path")

module.exports = {
    mode: "production",
    entry: {
        button: "./src/Button.js",
        alert: "./src/Alert.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        library: "geekscss",
        libraryTarget: "umd",
        globalObject: "this",
    },
    externals:{
        react: "react",
        "react-dom": "react-dom"
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
          },
        ],
      },
}