module.exports = {
  siteMetadata: {
    title: "van der Zalm Seating",
    description: "Showroom for iconic design seats",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://van-der-zalm-seating.local/graphql",
      },
    },
  ],
};
