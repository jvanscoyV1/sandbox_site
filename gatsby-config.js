
const path = require(`path`)
module.exports = {
    
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: path.join(__dirname, `src`, `assets`),
            },
        },
        `gatsby-plugin-typography`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
    ],
}
