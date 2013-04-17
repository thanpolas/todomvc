({
    baseUrl: "./js",
    paths: {
      'ember': 'http://go.co/else',
      'text': 'empty:',
      'jQuery': 'empty:',
      'handlebars': 'empty:',
      'jquery': 'empty:'
    },
    name: "app",
    out: "main-built.js",
    exclude: ["ember", "text", "jQuery", "jquery", "handlebars"]
})