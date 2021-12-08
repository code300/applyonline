const port = process.env.port || process.env.npm_config_port || 8080 // 端口

module.exports = {
 // 部署生产环境和开发环境下的URL。
 // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
 publicPath: process.env.NODE_ENV === "production" ? "./" : "/", //默认'/'
 // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
 outputDir: 'dist', //目标输出路径
 // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
 assetsDir: 'static', //引用的静态资源目标输出文件
 // 是否开启eslint保存检测，有效值：ture | false | 'error'
 lintOnSave: process.env.NODE_ENV === 'development', //当开发环境时将警告输出到命令行
 // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
 productionSourceMap: false,
 // webpack-dev-server 相关配置
 devServer: {
 host: 'localhost',
 port: port, //设置启动端口号
 open: true, //设置自动打开浏览器
 proxy: {
 // detail: https://cli.vuejs.org/config/#devserver-proxy
 '/dev-api': {
 target: 'https://quota.rongxinvip.com', //目标主机地址
 changeOrigin: true, //需要虚拟主机站点
pathRewrite: {
 ['^' + '/dev-api']: '' //重写路径
 }
 }
 },
 disableHostCheck: true
},
}