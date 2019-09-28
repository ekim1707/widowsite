import React, { Component } from 'react';

class ForumPosts extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="forum-messageboard-row">
                <div className="forum-messageboard-message">
                    {this.props.data.message}
                </div>
                <div className="forum-messageboard-tag">
                    <div className="forum-messageboard-tagrow">
                        {this.props.data.tag}
                    </div>
                    <div className="forum-messageboard-timestamp">
                        {this.props.data.date}<br/>{this.props.data.time}
                    </div>
                </div>
            </div>
        )
    }
}

export default ForumPosts;