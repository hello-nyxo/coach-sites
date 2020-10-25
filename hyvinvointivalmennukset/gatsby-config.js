require("dotenv").config({
  path: `../.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    author: `Hyvinvointivalmennukset`,
    title: `Hyvinvointivalmennukset`,
    description: `Hyvinvointivalmennukset`,
    siteUrl: `https://hyvinvointivalmennukset.nyxo.app`,
    social: {
      twitter: `Hyvinvointivalmennukset`,
      linkedIn: `Hyvinvointivalmennukset`,
    },
  },
  plugins: [
    {
      resolve: `@hello-nyxo/gatsby-theme-nyxo-coaching`,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-typescript",
  ],
};
