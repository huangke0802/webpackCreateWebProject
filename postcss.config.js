const autoprefixer = require('autoprefixer')

/* autoprefixer优化css：属性需要根据不同浏览器加不同的前缀，会自动帮我们加 */
module.exports = {
    plugins : [
        autoprefixer()
    ]
}