module.exports = {
  devServer: {
    static: "./",
  },
  // Nos módulos
  module: {
    // Aplique as seguintes regras
    rules: [
      {
        // Nos arquivos que terminam ($) com .css
        test: /\.css$/,
        // Use o seguinte
        use: ["style-loader", "css-loader"],
      },
      {
        // Nos arquivos que terminam ($) com .js
        test: /\.js$/, // Regex
        // Não procure nada em node_modules
        exclude: /node_modules/,
        // Use o seguinte
        use: {
          // Babel
          loader: "babel-loader",
          // Com as padrões para o React
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
};
