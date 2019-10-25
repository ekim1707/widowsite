import React, { Component } from 'react';
import './forum.css';
import ForumPosts from './ForumPosts';
import axios from 'axios';
import base64 from 'react-native-base64';

class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            post: '',
            postb64: '',
            tag: '',
            tagb64: '',
            warn: 'input-tag',
            reveal: '',
            account_circle: 'account_circle',
            warnTAG: 'forum-messageboard-tagrow'
        }
    }

    getData() {
        const apiURL = `https://still-falls-16479.herokuapp.com/react-project-forum`;
        const res = axios.get(apiURL);
        return res;
    }

    componentDidMount() {
        const res = this.getData();
        res.then((response) => {
            console.log(response.data);
            this.setState({
                data: response.data
            })
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        var dd = (new Date().getDate() < 10 ? '0' : '') + new Date().getDate();
        var MM = ((new Date().getMonth() + 1) < 10 ? '0' : '') + (new Date().getMonth() + 1);
        var yyyy = new Date().getFullYear();

        const currentDate = (yyyy + "/" + MM + "/" + dd);
        console.log(currentDate);
        const currentTime = new Date().toLocaleTimeString('en-US');

        const postData = {
            postb64: this.state.postb64,
            tagb64: this.state.tagb64,
            dateb64: base64.encode(currentDate),
            timeb64: base64.encode(currentTime)
        }
        const apiURL = `https://still-falls-16479.herokuapp.com/react-project-forum`;
        const res = axios.post(apiURL, postData);
        res.then((response) => {
            this.setState({
                data: response.data,
                post: '',
                tag: ''
            })
        });
    }

    changePost = (e) => {
        this.setState({
            post: e.target.value,
            postb64: base64.encode(e.target.value)
        })
    }

    changeTag = (e) => {
        let warning;
        let reveal;
        let warnTAG;
        let account_circle;
        if (this.state.tag.length > 9) {
            warning = 'input-tag warning';
            reveal = 'warning';
            account_circle = 'warning';
            warnTAG = 'forum-messageboard-tagrow warning';
        } else {
            warning = 'input-tag';
            reveal = '';
            account_circle = 'account_circle';
            warnTAG = 'forum-messageboard-tagrow';
        }
        this.setState({
            tag: e.target.value,
            tagb64: base64.encode(e.target.value),
            warn: warning,
            reveal: reveal,
            account_circle: account_circle,
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
                            <textarea onChange={this.changePost} value={this.state.post} className="forum-post-container" rows="22" cols="83" id="forum-textarea"></textarea>
                            <div className="forum-post-row">
                                <div className="input-field-container">
                                    <div className="input-field forum">
                                        <i className={`material-icons prefix ${this.state.reveal}`}>{this.state.account_circle}</i>
                                        <input onChange={this.changeTag} value={this.state.tag} className={this.state.warn} id="icon_prefix" type="text" />
                                        <label htmlFor="icon-prefix">Temporary Tag (10 char max)</label>
                                    </div>
                                </div>
                                <button className="btn-large xlarge" type="submit">Submit</button>
                            </div>
                        </form>
                        <div className="forum-messageboard">
                            {posts}
                            <div className="forum-messageboard-row">
                                <div className="forum-messageboard-message">
                                    {this.state.post}
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