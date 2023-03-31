import React, { Component } from 'react';

import RichTextEditor from 'react-rte';
import 'react-rte/lib/RichTextEditor.css';

class RichText extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: RichTextEditor.createEmptyValue()
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(content) {
        this.setState({
            content
        });
        const event = {
            target: {
                name: this.props.name,
                value: content.toString('html')
            }
        }
        this.props.onContentChange(event);
    }

    render() {
        const toolbarConfig = {
            
            display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS'],
            INLINE_STYLE_BUTTONS: [
                { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
                { label: 'Italic', style: 'ITALIC' },
                { label: 'Underline', style: 'UNDERLINE' }
            ],

            BLOCK_TYPE_BUTTONS: [
                { label: 'UL', style: 'unordered-list-item' },
                { label: 'OL', style: 'ordered-list-item' }
            ]
        };
        return (
            <RichTextEditor
                className="rich-text"
                value={this.state.content}
                onChange={this.handleChange}
                toolbarConfig={toolbarConfig}
            />
        );
    }
}

export default RichText;