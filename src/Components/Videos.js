import React, { Component } from 'react';
import data from '../data';

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
        const navs = document.querySelectorAll('.navs');
        navs.forEach((nav) => {
            nav.classList.remove('selected-target');
        });
        document.getElementById('videos').classList.add('selected-target');

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
            } else if (el.id === 'widow-portrait') {
              videoLis.forEach((li) => {
                li.classList.remove('selected');
              });
              document.getElementById('0').classList.add('selected');
              videoPortraits.forEach((portrait) => {
                portrait.classList.remove('selected');
              });
              document.getElementById('widow-portrait').classList.add('selected');
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://gamepedia.cursecdn.com/overwatch_gamepedia/4/4c/Widowmaker-portrait.png')";
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
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/c/c5/Sombra-portrait.png/350px-Sombra-portrait.png?version=661875cb5da293e8e78dd3ce4f72ba51')";
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
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/76/Ana.png/287px-Ana.png?version=b84dfa70be7bb27422e72a6e0584b2ed')";
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
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/9/99/Junkrat-Portrait.png/573px-Junkrat-Portrait.png?version=c23334dae852756b575df8a32ea34708')";
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
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/2/26/Pharah-portrait.png/535px-Pharah-portrait.png?version=a093b1b23791a2d362de36cc2e659943')";
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
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/600px-Overwatch_circle_logo.svg.png')";
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
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/c/c5/Torbjorn-portrait.png/700px-Torbjorn-portrait.png?version=73146334ff995247b1eff7699ceb509b')";
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
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/600px-Overwatch_circle_logo.svg.png')";
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
              document.getElementById('sidebar-image').style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/600px-Overwatch_circle_logo.svg.png')";
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
            }
            if (this.state.selected === i) {
                return <li className="video-lis selected" key={i} id={i}><span className="video-lis-names">{video.name}</span></li>
            }
            return <li className="video-lis" key={i} id={i}><span className="video-lis-names">{video.name}</span></li>
        });
        
        return(
            <div className="App">
                <div className="video-header">
                    <img src="https://www.jinx.com/content/responsive_themes/overwatch/ultimates/widowmaker/icon-portrait.png" width="10%" height="100%" alt="video-header" className="video-hero selected" id="widow-portrait" />
                    <img src="https://www.jinx.com/content/responsive_themes/overwatch/ultimates/sombra/icon-portrait.png" width="10%" height="100%" alt="video-header" className="video-hero" id="sombra-portrait" />
                    <img src="https://www.jinx.com/content/responsive_themes/overwatch/ultimates/ana/icon-portrait.png" width="10%" height="100%" alt="video-header" className="video-hero" id="ana-portrait" />
                    <img src="https://www.jinx.com/content/responsive_themes/overwatch/ultimates/junkrat/icon-portrait.png" width="10%" height="100%" alt="video-header" className="video-hero" id="junkrat-portrait" />
                    <img src="https://www.jinx.com/content/responsive_themes/overwatch/ultimates/pharah/icon-portrait.png" width="10%" height="100%" alt="video-header" className="video-hero" id="pharah-portrait" />
                    <img src="https://www.jinx.com/content/responsive_themes/overwatch/ultimates/torbjorn/icon-portrait.png" width="10%" height="100%" alt="video-header" className="video-hero" id="torbjorn-portrait" />
                    <img src="http://icons.iconarchive.com/icons/tribalmarkings/colorflow/256/miscellaneous-icon.png" width="10%" height="100%" alt="video-header" className="video-hero" id="all-portrait" />
                    <img src="https://www.fortnitehut.com/fortnite-font-generator-images/dD1Hb2xmIENsYXAmcz0xNzBweCZjPUExRDU0RCY.png" width="10%" height="100%" alt="video-header" className="video-hero" id="golf-clap" />
                    <img src="https://s3.amazonaws.com/gt7sp-prod/decal/40/12/40/6061845103291401240_1.png" width="10%" height="100%" alt="video-header" className="video-hero" id="kinda-funny" />
                    <a className="youtube-channel-link" href="https://www.youtube.com/channel/UCdijCKSJ9gNdCEQKlIO8lRA/playlists?view_as=subscriber" target="_blank" rel="noopener noreferrer" id="youtube-link"><span></span></a>
                </div>
                <div className="video-body">
                    <div className="video-menu-container">
                        <div className="sidebar-image" id="sidebar-image"></div>
                        <div className="video-menu">
                            <ul>
                                {featuredTitles}
                            </ul>
                        </div>
                    </div>
                    <div className="video-iframe-container">
                        <iframe title="mainFrame" className="video-iframe" width="100%" height="100%" src={this.state.selectedVideo} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
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