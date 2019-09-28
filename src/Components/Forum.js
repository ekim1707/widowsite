import React, { Component } from 'react';
import './forum.css';
import ForumPosts from './ForumPosts';
import forumData from '../dataForum';

class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: '',
            warn: 'input-tag',
            reveal: 'material-icons warn-icon',
            postHTML: '',
            warnTAG: 'forum-messageboard-tagrow',
            data: forumData
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        var dd = (new Date().getDate() < 10 ? '0' : '') + new Date().getDate();
        var MM = ((new Date().getMonth() + 1) < 10 ? '0' : '') + (new Date().getMonth() + 1);
        var yyyy = new Date().getFullYear();

        const currentDate = (MM + "/" + dd + "/" + yyyy);
        const currentTime = new Date().toLocaleTimeString('en-US');

        const newPost = {
            message: this.state.postHTML,
            tag: this.state.tag,
            date: currentDate,
            time: currentTime
        }
        forumData.push(newPost);
        document.getElementById('forum-textarea').value = '';

        this.setState({
            postHTML: '',
            tag: ''
        })
    }

    changePost = (e) => {
        this.setState({
            postHTML: e.target.value
        })
    }

    changeTag = (e) => {
        let warning;
        let reveal;
        let warnTAG;
        if (this.state.tag.length > 9) {
            warning = 'input-tag warning';
            reveal = 'material-icons warn-icon reveal';
            warnTAG = 'forum-messageboard-tagrow warning';
        } else {
            warning = 'input-tag';
            reveal = 'material-icons warn-icon';
            warnTAG = 'forum-messageboard-tagrow';
        }
        this.setState({
            tag: e.target.value,
            warn: warning,
            reveal: reveal,
            warnTAG: warnTAG
        })
    }

    render() {
        const posts = this.state.data.map((post, i) => {
            return <ForumPosts data={post} key={i} />
        })
        return(
            <div className="App">
                <div className="forum-flex-container">
                    <div className="forum-header">
                        <div className="forum-title-container">
                            AGORA
                        </div>
                        <div className="disclaimer-container">
                            <div className="disclaimer-image"></div>
                            <div className="disclaimer-message">
                                Disclaimer: This is not meant to be a very sophisticated forum with
                                a huge amount of threads and personal accounts and upvote competitions.
                                This is intended to be a simple, light message place where everyone is
                                welcome, as long as they are willing to keep it purely positive and
                                edifying. Please leave your choice of a temporary tag name after each comment.
                            </div>
                        </div>
                    </div>
                    <div className="forum-messageboard-container">
                        <form onSubmit={this.handleSubmit} className="forum-messageboard-post">
                            <textarea onChange={this.changePost} className="forum-post-container" rows="22" cols="83" id="forum-textarea"></textarea>
                            <div className="forum-post-row">
                                <div className="input-field-container">
                                    <div className="input-field forum">
                                        <i className="material-icons prefix">account_circle</i>
                                        <input onChange={this.changeTag} value={this.state.tag} className={this.state.warn} id="icon_prefix" type="text" />
                                        <label htmlFor="icon-prefix">Temporary Tag (10 char max)</label>
                                        <i className={this.state.reveal}>warning</i>
                                    </div>
                                </div>
                                <button className="btn-large xlarge" type="submit">Submit</button>
                            </div>
                        </form>
                        <div className="forum-messageboard">
                            {posts}
                            <div className="forum-messageboard-row">
                                <div className="forum-messageboard-message">
                                    {this.state.postHTML}
                                </div>
                                <div className="forum-messageboard-tag">
                                    <div className={this.state.warnTAG}>
                                        {this.state.tag}
                                    </div>
                                    <div className="forum-messageboard-timestamp">
                                        timestamp
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Forum;