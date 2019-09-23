import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        const navs = document.querySelectorAll('.navs');
        navs.forEach((nav) => {
            nav.classList.remove('selected-target');
        });
        document.getElementById('home').classList.add('selected-target');
    }

    render() {
        return(
            <div className="App">
                <div className="title" opacity="1">
                    Widowmaker Site
                </div>
                <div className="welcome">
                    <div className="welcome-message">
                        Welcome!
                    </div>
                </div>
                <div className="header row">
                    <iframe title="header-gif1" className="iframe-home" src="https://giphy.com/embed/UTFqlO4jOOUlwxNWrA" frameBorder="0" allowFullScreen></iframe>
                    <iframe title="header-gif2" className="iframe-home image2" src="https://giphy.com/embed/KbZZnkAzCqtBUQENgU" frameBorder="0" allowFullScreen></iframe>
                    <iframe title="header-gif3" className="iframe-home image3" src="https://giphy.com/embed/d7m3EvynxzlxYXHEUX" frameBorder="0" allowFullScreen></iframe>
                    <iframe title="header-gif4" className="iframe-home image4" src="https://giphy.com/embed/L000aUQlus786WI0sU" frameBorder="0" allowFullScreen></iframe>
                    <iframe title="header-gif5" className="iframe-home image5" src="https://giphy.com/embed/jUtzPjpbv8pjRtBMIi" frameBorder="0" allowFullScreen></iframe>
                    <iframe title="header-gif6" className="iframe-home image6" src="https://giphy.com/embed/VItyS8yMTuPrp5qEnP" frameBorder="0" allowFullScreen></iframe>
                    <iframe title="header-gif7" className="iframe-home image7" src="https://giphy.com/embed/co6s4KiWkwWsedQBoN" frameBorder="0" allowFullScreen></iframe>
                    <iframe title="header-gif8" className="iframe-home image8" src="https://giphy.com/embed/dXdCxaY6Wf4HMpGUr4" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="body row">
                    <div className="body-image"></div>
                </div>
            </div>
        )
    }
}

export default Home;