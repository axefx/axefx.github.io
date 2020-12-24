import React, { Component } from 'react'

export default class TechNotePreview extends Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <p>"this is a preview</p>
            </div>
        )
    }
}
