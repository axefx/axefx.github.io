import React, { Component } from 'react'
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import TechNotesListing from "../components/TechNotesListing/TechNotesListing";

export default class TechNotes extends Component {
    render() {
        let techNotesEdges = this.props.data.allFile.edges
        return (
            <div className="tech-notes-container">
                <Helmet>
                    <title>{config.siteTitle}</title>
                    <link rel="canonical" href={`${config.siteUrl}`} />
                </Helmet>
                <TechNotesListing techNotesEdges={techNotesEdges}/>
            </div>
        )
    }
}

export const techNotesQuery = graphql`
    query TechNotesQuery {
        allFile(filter: {sourceInstanceName: {eq: "tech-notes"}}) {
            edges {
              node {
                id
                childMarkdownRemark {
                  frontmatter {
                    title
                    cover
                    date
                    category
                    parent
                  }
                  html
                  fields {
                    slug
                    
                  }
                }
              }
            }
          }
    }

`