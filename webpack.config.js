const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build",//打包后的文件存放的地方
    filename: "bundle-[hash].js"//打包后输出文件的文件名
  },
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    hot: true
  } ,
  module: {
      rules: [
          {
              test: /(\.jsx|\.js)$/,
              use: {
                  loader: "babel-loader"
              },
              exclude: /node_modules/
          },
          {
            test: /\.global\.css$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              }
            ]
          },
          {
            test: /^((?!\.global).)*\.css$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  sourceMap: true,
                  importLoaders: 1,
                  localIdentName: '[name]__[local]__[hash:base64:5]',
                }
              },
            ]
          },
         
        //   {
        //         test: /\.css$/,
        //         use: [
        //             {
        //                 loader: "style-loader"
        //             },
                    
        //              {
        //                 loader: "css-loader",
        //                 options: {
        //                     modules: true, // 指定启用css modules
        //                     localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
        //                 }

        //             },

        //             {
        //                 loader: "postcss-loader"
        //             }
        //         ]
        //     }

        {
            test: /\.global\.less$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'less-loader'
              }
            ]
          },
          // Add SASS support  - compile all other .scss files and pipe it to style.css
          {
            test: /^((?!\.global).)*\.less$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  sourceMap: true,
                  importLoaders: 1,
                  localIdentName: '[name]__[local]__[hash:base64:5]',
                }
              },
              {
                loader: 'less-loader'
              }
            ]
          }










      ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
          template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
    new webpack.HotModuleReplacementPlugin(),//热加载插件
    new CleanWebpackPlugin('build/*.*', {
      root: __dirname,
      verbose: true,
      dry: false
  })
  ]
}
