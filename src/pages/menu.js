import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MenuSection from "../components/MenuSection"
import ContactInfo from "../components/contactinfo"
import { useStaticQuery, graphql } from "gatsby"

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulMenuSections(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            title
            menuItems {
              name
              price
              description {
                description
              }
            }
            contentfulid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Menu" />
      <ContactInfo />
      {data.allContentfulMenuSections.edges.map(edge => (
        <MenuSection
          SectionTitle={edge.node.title}
          type={edge.node.contentfulid}
        />
      ))}
    </Layout>
  )
}

export default Menu
