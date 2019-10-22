import React, { Component } from 'react';
import data from '../data';
import widowmaker from '../widowmaker.png';
import sombra from '../sombra.png';
import ana from '../ana.png';
import junkrat from '../junkrat.png';
import pharah from '../pharah.png';
import torbjorn from '../torbjorn.png';

class Videos extends Component {
    constructor() {
        super();

        const herodata = data.filter(hero => hero.name.includes('Widowmaker'));
        this.state = {
            heroes: herodata[0].videos,
            selectedVideo: herodata[0].videos[0].embed,
            selectedComment: herodata[0].videos[0].comment,
            name: ''
        }
        this.clickHero = this.clickHero.bind(this);
        this.selectVideo = this.selectVideo.bind(this);
    }

    componentDidMount() {
      document.querySelector('.video-menu-ul').firstElementChild.classList.add('selected');
    }

    clickHero = (e, hero) => {
        const videoLis = document.querySelectorAll('.video-lis');
        const videoPortraits = document.querySelectorAll('.video-hero');
        videoLis.forEach((li) => {
          li.classList.remove('selected');
        });
        document.querySelector('.video-menu-ul').firstElementChild.classList.add('selected');
        videoPortraits.forEach((portrait) => {
          portrait.classList.remove('selected');
        });
        e.target.classList.add('selected');
        if (hero === 'Widowmaker') {
          document.getElementById('sidebar-image').style.backgroundImage = "url('https://i.pinimg.com/originals/c0/7e/91/c07e91f9e49a67fa4648503813847c40.jpg')";
        } else if (hero === 'Sombra') {
          document.getElementById('sidebar-image').style.backgroundImage = "url('https://i.pinimg.com/564x/9b/35/0c/9b350c02262c028b3269bc17551942c8.jpg')";
        } else if (hero === 'Ana') {
          document.getElementById('sidebar-image').style.backgroundImage = "url('https://i.imgur.com/70l4CM4.jpg')";
        } else if (hero === 'Junkrat') {
          document.getElementById('sidebar-image').style.backgroundImage = "url('https://i.pinimg.com/originals/84/51/90/84519048b449d09ef1bdfcefd1179d8a.jpg')";
        } else if (hero === 'Pharah') {
          document.getElementById('sidebar-image').style.backgroundImage = "url('https://i.pinimg.com/originals/a1/84/5e/a1845e76c0b76977eae1b1d74ce08011.jpg')";
        } else if (hero === 'Torbjörn') {
          document.getElementById('sidebar-image').style.backgroundImage = "url('https://i.pinimg.com/originals/bb/73/ee/bb73ee2cf588b33b9e303bcbe0ed95d3.jpg')";
        } else if ((hero === 'Orisa') || (hero === 'Reinhardt') || (hero === 'DV.a')) {
          document.getElementById('sidebar-image').style.backgroundImage = "url('https://i.imgur.com/qrewlPG.png')";
        }
        const newData = data.filter(newhero => newhero.name.includes(hero));
        this.setState({
            heroes: newData[0].videos,
            selectedVideo: newData[0].videos[0].embed,
            selectedComment: newData[0].videos[0].comment,
            name: hero
        })
    }

    selectVideo = (e, index) => {
      const videoLis = document.querySelectorAll('.video-lis');
      videoLis.forEach((li) => {
        li.classList.remove('selected');
      });
      e.target.classList.add('selected');
        this.setState({
            selectedVideo: this.state.heroes[index].embed,
            selectedComment: this.state.heroes[index].comment
        })
    }

    render() {
        const featured = this.state.heroes;
        const featuredTitles = featured.map((video, i) => {
            if ((this.state.name === 'DV.a') || (this.state.name === 'Orisa') || (this.state.name === 'Reinhardt')) {
                if (this.state.selected === i) {
                    return <li onClick={(e) => this.selectVideo(e, i)} className="video-lis toggle-size selected" key={i}><img className="video-lis-images" src={video.image} alt="misc" /><span className="video-lis-names">{video.name}</span></li>
                }
                return <li onClick={(e) => this.selectVideo(e, i)} className="video-lis toggle-size" key={i}><img className="video-lis-images" src={video.image} alt="misc" /><span className="video-lis-names">{video.name}</span></li>
            } else if ((video.name[1] === 'Chabco')) {
                if (this.state.selected === i) {
                    return <li onClick={(e) => this.selectVideo(e, i)} className="video-lis selected" key={i}><img className="video-lis-images" src={video.image} alt="misc" /><span className="video-lis-names">{video.name[0]}</span></li>
                }
                return <li onClick={(e) => this.selectVideo(e, i)} className="video-lis" key={i}><img className="video-lis-images" src={video.image} alt="misc" /><span className="video-lis-names">{video.name[0]}</span></li>
            }
            if (this.state.selected === i) {
                return <li onClick={(e) => this.selectVideo(e, i)} className="video-lis selected" key={i}><span className="video-lis-names">{video.name}</span></li>
            }
            return <li onClick={(e) => this.selectVideo(e, i)} className="video-lis" key={i}><span className="video-lis-names">{video.name}</span></li>
        });
        
        return(
            <div className="App">
                <div className="video-header">
                    <img onClick={(e) => this.clickHero(e, 'Widowmaker')} src={widowmaker} width="10%" height="100%" alt="video-header" className="video-hero selected" id="widow-portrait" />
                    <img onClick={(e) => this.clickHero(e, 'Sombra')} src={sombra} width="10%" height="100%" alt="video-header" className="video-hero" id="sombra-portrait" />
                    <img onClick={(e) => this.clickHero(e, 'Ana')} src={ana} width="10%" height="100%" alt="video-header" className="video-hero" id="ana-portrait" />
                    <img onClick={(e) => this.clickHero(e, 'Junkrat')} src={junkrat} width="10%" height="100%" alt="video-header" className="video-hero" id="junkrat-portrait" />
                    <img onClick={(e) => this.clickHero(e, 'Pharah')} src={pharah} width="10%" height="100%" alt="video-header" className="video-hero" id="pharah-portrait" />
                    <img onClick={(e) => this.clickHero(e, 'Torbjörn')} src={torbjorn} width="10%" height="100%" alt="video-header" className="video-hero" id="torbjorn-portrait" />
                    <img onClick={(e) => this.clickHero(e, 'DV.a')} src="http://icons.iconarchive.com/icons/tribalmarkings/colorflow/256/miscellaneous-icon.png" width="10%" height="100%" alt="video-header" className="video-hero" id="all-portrait" />
                    <img onClick={(e) => this.clickHero(e, 'Orisa')} src="https://www.fortnitehut.com/fortnite-font-generator-images/dD1Hb2xmIENsYXAmcz0xNzBweCZjPUExRDU0RCY.png" width="10%" height="100%" alt="video-header" className="video-hero" id="golf-clap" />
                    <img onClick={(e) => this.clickHero(e, 'Reinhardt')} src="https://www.pngkey.com/png/full/809-8095773_website-web-product-kinda-funny-joomla-design-clipart.png" width="10%" height="100%" alt="video-header" className="video-hero" id="kinda-funny" />
                    <a className="youtube-channel-link" href="https://www.youtube.com/channel/UCdijCKSJ9gNdCEQKlIO8lRA/playlists?view_as=subscriber" target="_blank" rel="noopener noreferrer" id="youtube-link"><span></span></a>
                </div>
                <div className="video-body">
                    <div className="video-menu-container">
                        <div className="video-menu">
                            <ul className="video-menu-ul">
                                {featuredTitles}
                            </ul>
                        </div>
                        <div className="sidebar-image" id="sidebar-image"></div>
                    </div>
                    <iframe title="mainFrame" className="video-iframe" src={this.state.selectedVideo} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <div className="video-comment-right selected">
                        Commentary
                        <div className="video-menu commentary selected">
                            {this.state.selectedComment}
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

export default Videos;