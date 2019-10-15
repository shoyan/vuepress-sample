module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  plugins: {
    sitemap: { hostname: "http://localhost:8080" },
    feed: { canonical_base: "http://locahost:8080" },
    "@vuepress/blog": {
        directories: [
          {
            // Unique ID of current classification
            id: "post",
            // Target directory
            dirname: "_posts",
            // Path of the `entry page` (or `list page`)
            path: "/"
          }
        ]
      }
  }
};
