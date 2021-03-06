/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Clara Shen",
    description: "UX Strategist and Designer",
    author: "Clara Shen",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
  {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
  },
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",    
  {      
    resolve: "gatsby-transformer-remark",      
    options: {        
      plugins: [          
        {            
          resolve: "gatsby-remark-images",            
          options: {              
            maxWidth: 800,              
            linkImagesToOriginal: false,            
          },          
        },        
      ],      
    },    
  },
]
}