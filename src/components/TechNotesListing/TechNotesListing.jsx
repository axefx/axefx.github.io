import React, {Component} from "react";
import TechNotePreview from "../TechNotePreview/TechNotePreview";
import { ExpansionList, ExpansionPanel } from 'react-md'
class TechNote {
    constructor(node){
        this.id = node.id
        this.slug = node.childMarkdownRemark.fields.slug
        this.category = node.childMarkdownRemark.frontmatter.category
        this.cover = node.childMarkdownRemark.frontmatter.cover
        this.date = node.childMarkdownRemark.frontmatter.date
        this.parent = node.childMarkdownRemark.frontmatter.parent
        this.title = node.childMarkdownRemark.frontmatter.title
        this.html = node.childMarkdownRemark.html
    }
    Title(){
        return (
            <ExpansionPanel label={this.title} footer={null}>
                <div dangerouslySetInnerHTML={{ __html: this.html }} />
            </ExpansionPanel>
        ) 
    }
}

class TechNotesListing extends Component {
    getTechNotesList(){
        let techNotesList = this.props.techNotesEdges.map(edges => {
            console.log(edges.node)
            return new TechNote(edges.node)
        })
        return techNotesList
    }
    render() {
        const techNotesList = this.getTechNotesList();
        console.log(techNotesList)
        return (
            <ExpansionList>
                {techNotesList.map(techNote => techNote.Title())}
            </ExpansionList>
        )
    }
}

export default TechNotesListing;
