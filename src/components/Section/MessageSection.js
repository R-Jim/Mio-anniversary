import React, { Component } from 'react'
import MioFa from '../Prop/MainStage/MioFa'
import MioFaWithMessage from '../Prop/MainStage/MioFaWithMessage'
import './MessageSection.css'

export class MessageSection extends Component {
    render() {
        const { message = "your_message", name = "name" } = this.props
        return (
            <div className="message-section-container">
                {/* 3x3 */}
                <MioFa />
                <MioFa />
                <MioFa />
                <MioFa />
                <MioFaWithMessage message={message} />
                <MioFa />
                <MioFa />
                <MioFa />
                <MioFaWithMessage message={name} />
            </div>
        )
    }
}

export default MessageSection
