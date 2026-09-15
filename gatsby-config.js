module.exports = {
  proxy: {
    prefix: '/api',
    url: 'http://localhost:8000',
  },
  siteMetadata: {
    title: 'neuromatch (archived)',
    description: 'Neuromatch is a 501c3 not-for-profit organization in the United States. We are an online community of computational neuroscientists whose mission is to foster inclusive global interactions for learning, mentorship, networking, and professional development.',
    siteUrl: 'https://old.neuromatch.io',
    image: 'https://old.neuromatch.io/neuromatch-og-img.png',
    logo: 'https://old.neuromatch.io/svgs/logos/Logo_mark_Bl.svg',
    type: 'website',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -75,
      },
    },
  ],
};
