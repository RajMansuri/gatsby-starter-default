import * as React from "react"
// import PropTypes from "prop-types"
import "../Styles/global.css";
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer.js";
import Header from "./Header.js";
export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allContentfulHomePage(filter: {slug: {eq: "/"}}) {
      nodes {
        topHeader {
          contactLinks {
            id
            link
            logo
            text
          }
          socialLinks {
            id
            link
            logo
          }
        }
        navbar {
          brandLogoDark {
            file {
              url
            }
          }
          brandLogoLight {
            file {
              url
            }
          }
          menuLinks {
            isMulti
            label
            id
            redirectTo
            options {
              isMulti
              label
              id
              redirectTo
            }
          }
        }
        slug
      }
    }
  }
  `)
  console.log(data.allContentfulHomePage.nodes, 'nodes');
  return (
    <div className='layout-container' >
      <Header header={data.allContentfulHomePage.nodes[0]} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }
