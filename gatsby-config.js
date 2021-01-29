/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Jacek Kolanowski",
    description: "Scientific leader and strategic research director.",
    author: "Jacek Kolanowski",
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
            maxWidth: 750,              
            linkImagesToOriginal: false,            
          },          
        },        
      ],      
    },    
  },
]
}