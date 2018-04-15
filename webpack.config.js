/* webpack用来打包前端的文件的 */

const path = require("path");
module.exports = {
  //申明入口:__dirname代表文件所在的目录的地址，即根目录, path.join将两个路径拼接，以保证路径的正确
  entry: path.join(__dirname, "src/index.js"),
  //打包的文件输出的地址
  output: {
    filename: "bundle.js", //输出的文件名称
    path: path.join(__dirname, "dist") //输出路径
  },
  module: {
    rules: [
      //制定规则
      {
        test: /\.vue$/, //检测以.vue结尾的文件
        loader: "vue-loader" //使用vue-loader解析.vue文件
      },
      {
        test: /\.css$/, //检测以.css结尾的文件
        /* loader: "css-loader" //使用css-loader解析.css文件 */
        use : [
            'style-loader',
            'css-loader'
        ]
      },
      {
          //css预处理器 styl
          test : /\.styl$/,
          use : [
              'style-loader',
              'css-loader',
              'stylus-loader'
          ]
      },
      {
          test : /\.(gif|jpg|png|svg)$/ ,
          use : [
              {
                  loader : 'url-loader', //将图片解析成bit64写进js代码里面
                  options : {
                      limit : 1024, //限制大小
                      name : '[name]-aaa.[ext]'  //最终输出的名字ext是扩展名
                  }
              }
          ]
      }
    ]
  }
};