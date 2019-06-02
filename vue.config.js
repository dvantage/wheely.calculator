const path = require('path')

const host = 'wheely.d-vantage.com'
const port = 8080

module.exports = {
    parallel: true,
    lintOnSave: false,
    // baseUrl: `http://${host}:${port}/`,

    devServer: {
        //port,
        //host,
        //hotOnly: true,
        // disableHostCheck: true,
        // clientLogLevel: 'warning',
        public: 'wheely.d-vantage.com:8080',
        // inline: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        },
    },

    configureWebpack: {
        /*module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'typings-for-css-modules-loader',
                            options: {
                                modules: true,
                                namedExport: true,
                                camelCase: true
                            }
                        }
                    ]
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            'ts': 'ts-loader',
                            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                            // the "scss" and "sass" values for the lang attribute to the right configs here.
                            // other preprocessors should work out of the box, no loader config like this necessary.
                            'scss': '!vue-style-loader!css-loader!sass-loader',
                            'sass': '!vue-style-loader!css-loader!sass-loader?indentedSyntax',
                        },
                        esModule: true
                        // other vue-loader options go here
                    }
                },
            ]
        }*/
    }
}

/*module.exports = {

  devServer: {
	  port:8084,
	    proxy: 'http://localhost:4000'
  },

}*/