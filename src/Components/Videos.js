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

        document.getElementById('0').classList.add('selected');

        const controlClick = (e) => {

            const el = e.target;
            const videoLis = document.querySelectorAll('.video-lis');
            const videoPortraits = document.querySelectorAll('.video-hero');
      
            if (el.id === '0') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('0').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '1') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('1').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '2') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('2').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '3') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('3').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '4') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('4').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '5') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('5').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '6') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('6').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '7') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('7').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '8') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('8').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '9') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('9').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '10') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('10').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '11') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('11').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '12') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('12').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '13') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('13').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '14') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('14').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '15') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('15').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '16') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('16').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '17') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('17').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '18') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('18').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '19') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('19').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '20') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('20').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === '21') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('21').classList.add('selected');
              this.selectVideo(el.id);
            } else if (el.id === 'widow-portrait') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('0').classList.add('selected');
              videoPortraits.forEach((portrait) => {
                portrait.classList.remove('selected');
              });
              document.getElementById('widow-portrait').classList.add('selected');
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://i.pinimg.com/originals/c0/7e/91/c07e91f9e49a67fa4648503813847c40.jpg')";
              this.clickHero('Widowmaker');
            } else if (el.id === 'sombra-portrait') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('0').classList.add('selected');
              videoPortraits.forEach((portrait) => {
                portrait.classList.remove('selected');
              });
              document.getElementById('sombra-portrait').classList.add('selected');
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://i.pinimg.com/564x/9b/35/0c/9b350c02262c028b3269bc17551942c8.jpg')";
              this.clickHero('Sombra');
            } else if (el.id === 'ana-portrait') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('0').classList.add('selected');
              videoPortraits.forEach((portrait) => {
                portrait.classList.remove('selected');
              });
              document.getElementById('ana-portrait').classList.add('selected');
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://i.imgur.com/70l4CM4.jpg')";
              this.clickHero('Ana');
            } else if (el.id === 'junkrat-portrait') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('0').classList.add('selected');
              videoPortraits.forEach((portrait) => {
                portrait.classList.remove('selected');
              });
              document.getElementById('junkrat-portrait').classList.add('selected');
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://i.pinimg.com/originals/84/51/90/84519048b449d09ef1bdfcefd1179d8a.jpg')";
              this.clickHero('Junkrat');
            } else if (el.id === 'pharah-portrait') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('0').classList.add('selected');
              videoPortraits.forEach((portrait) => {
                portrait.classList.remove('selected');
              });
              document.getElementById('pharah-portrait').classList.add('selected');
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://i.pinimg.com/originals/a1/84/5e/a1845e76c0b76977eae1b1d74ce08011.jpg')";
              this.clickHero('Pharah');
            } else if (el.id === 'golf-clap') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('0').classList.add('selected');
              videoPortraits.forEach((portrait) => {
                portrait.classList.remove('selected');
              });
              document.getElementById('golf-clap').classList.add('selected');
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://i.imgur.com/qrewlPG.png')";
              this.clickHero('Orisa');
            } else if (el.id === 'torbjorn-portrait') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('0').classList.add('selected');
              videoPortraits.forEach((portrait) => {
                portrait.classList.remove('selected');
              });
              document.getElementById('torbjorn-portrait').classList.add('selected');
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://i.pinimg.com/originals/bb/73/ee/bb73ee2cf588b33b9e303bcbe0ed95d3.jpg')";
              this.clickHero('Torbjörn');
            } else if (el.id === 'kinda-funny') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('0').classList.add('selected');
              videoPortraits.forEach((portrait) => {
                portrait.classList.remove('selected');
              });
              document.getElementById('kinda-funny').classList.add('selected');
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://i.imgur.com/qrewlPG.png')";
              this.clickHero('Reinhardt');
            } else if (el.id === 'all-portrait') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('0').classList.add('selected');
              videoPortraits.forEach((portrait) => {
                portrait.classList.remove('selected');
              });
              document.getElementById('all-portrait').classList.add('selected');
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://i.imgur.com/qrewlPG.png')";
              this.clickHero('DV.a');
            }
        }
      
        window.addEventListener('click', controlClick);

    }

    clickHero = (hero) => {
        const newData = data.filter(newhero => newhero.name.includes(hero));
        this.setState({
            heroes: newData[0].videos,
            selectedVideo: newData[0].videos[0].embed,
            selectedComment: newData[0].videos[0].comment,
            name: hero
        })
    }

    selectVideo = (index) => {
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
                    return <li className="video-lis toggle-size selected" key={i} id={i}><img className="video-lis-images" src={video.image} alt="misc" /><span className="video-lis-names">{video.name}</span></li>
                }
                return <li className="video-lis toggle-size" key={i} id={i}><img className="video-lis-images" src={video.image} alt="misc" /><span className="video-lis-names">{video.name}</span></li>
            } else if ((video.name[1] === 'Chabco')) {
                if (this.state.selected === i) {
                    return <li className="video-lis selected" key={i} id={i}><img className="video-lis-images" src={video.image} alt="misc" /><span className="video-lis-names">{video.name[0]}</span></li>
                }
                return <li className="video-lis" key={i} id={i}><img className="video-lis-images" src={video.image} alt="misc" /><span className="video-lis-names">{video.name[0]}</span></li>
            }
            if (this.state.selected === i) {
                return <li className="video-lis selected" key={i} id={i}><span className="video-lis-names">{video.name}</span></li>
            }
            return <li className="video-lis" key={i} id={i}><span className="video-lis-names">{video.name}</span></li>
        });
        
        return(
            <div className="App">
                <div className="video-header">
                    <img src={widowmaker} width="10%" height="100%" alt="video-header" className="video-hero selected" id="widow-portrait" />
                    <img src={sombra} width="10%" height="100%" alt="video-header" className="video-hero" id="sombra-portrait" />
                    <img src={ana} width="10%" height="100%" alt="video-header" className="video-hero" id="ana-portrait" />
                    <img src={junkrat} width="10%" height="100%" alt="video-header" className="video-hero" id="junkrat-portrait" />
                    <img src={pharah} width="10%" height="100%" alt="video-header" className="video-hero" id="pharah-portrait" />
                    <img src={torbjorn} width="10%" height="100%" alt="video-header" className="video-hero" id="torbjorn-portrait" />
                    <img src="http://icons.iconarchive.com/icons/tribalmarkings/colorflow/256/miscellaneous-icon.png" width="10%" height="100%" alt="video-header" className="video-hero" id="all-portrait" />
                    <img src="https://www.fortnitehut.com/fortnite-font-generator-images/dD1Hb2xmIENsYXAmcz0xNzBweCZjPUExRDU0RCY.png" width="10%" height="100%" alt="video-header" className="video-hero" id="golf-clap" />
                    <img src="https://www.pngkey.com/png/full/809-8095773_website-web-product-kinda-funny-joomla-design-clipart.png" width="10%" height="100%" alt="video-header" className="video-hero" id="kinda-funny" />
                    <a className="youtube-channel-link" href="https://www.youtube.com/channel/UCdijCKSJ9gNdCEQKlIO8lRA/playlists?view_as=subscriber" target="_blank" rel="noopener noreferrer" id="youtube-link"><span></span></a>
                </div>
                <div className="video-body">
                    <div className="video-menu-container">
                        <div className="video-menu">
                            <ul>
                                {featuredTitles}
                            </ul>
                        </div>
                        <div className="sidebar-image" id="sidebar-image"></div>
                    </div>
                    <iframe title="mainFrame" className="video-iframe" src={this.state.selectedVideo} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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