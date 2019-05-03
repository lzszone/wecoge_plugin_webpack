const installer = async (i, id, getPackages, getDeps) => {
  const devDeps = ['webpack', 'babel-loader', '@babel/preset-env', '@babel/core'];
  return id(['webpack-cli'])
    .then(() => id(devDeps))
}

const pkg = {
  config: {
    module: {
      rules: [
        {
          test: /\.(t|j)sx?/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ],
            }
          }
        },
      ]
    },
  },
  executor: installer
}

module.exports = pkg;