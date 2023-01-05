module.exports = {
  siteMetadata: {
    title: "The Seating Studio",
    description: "Showroom for iconic design seats",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://van-der-zalm-seating.local/graphql",
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Questrial`,
            file: `https://fonts.googleapis.com/css2?family=Questrial&display=swap`,
          },
        ],
      },
    },
  ],
};
