require("dotenv").config({
  path: `../.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    author: `Oivaltamaan`,
    title: `Oivaltamaan`,
    description: `Oivaltamaan`,
    siteUrl: `https://oivaltamaan.nyxo.app`,
    social: {
      twitter: `Oivaltamaan`,
      linkedIn: `Oivaltamaan`,
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
