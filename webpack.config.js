// 4.配置下webpack
const path = path.require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',//设置打包后的文件名字
    path: path.resolve(__dirname,'dist'),//把打包好的文件放到dist中。
  }
};