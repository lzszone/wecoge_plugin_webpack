const installer = async (i, id, getPackages, getDeps) => {
  const devDeps = ['babel-loader', '@babel/preset-env', '@babel/core', 'webpack', 'webpack-cli'];
  return id(devDeps)
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

export default pkg;