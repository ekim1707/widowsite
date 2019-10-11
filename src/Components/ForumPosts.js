import React, { Component } from 'react';

class ForumPosts extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        const yyyy = this.props.data.date_posted.slice(0, 4);
        const MM = this.props.data.date_posted.slice(5, 7);
        const dd = this.props.data.date_posted.slice(8, 10);
        const newDateString = (MM + "/" + dd + "/" + yyyy);
        const hourCheck = this.props.data.time_posted.slice(0, 2);
        let newTimeString;
        if (hourCheck > 12) {
            const hh = ((hourCheck - 12) * .01).toString().slice(2);
            newTimeString = (hh + this.props.data.time_posted.slice(2) + 'PM EST');
        } else {
            newTimeString = (this.props.data.time_posted + 'AM EST');
        }
        return (
            <div className="forum-messageboard-row">
                <div className="forum-messageboard-message">
                    {this.props.data.post}
                </div>
                <div className="forum-messageboard-tag">
                    <div className="forum-messageboard-tagrow">
                        {this.props.data.tag}
                    </div>
                    <div className="forum-messageboard-timestamp">
                        {newDateString}<br/>{newTimeString}
                    </div>
                </div>
            </div>
        )
    }
}

export default ForumPosts;