import React from 'react';
import YouTube from 'react-youtube';

const Module1  = 'oxQxshZETWo';
const Module2  = 'Q60e5acfir8';
const Module3  = 'DY1SzcgVVow';
const Module4  = 'qEeksOkiutk';
const Module5  = 'XP9GkO1ri1Q';
const Module6  = '4SWKJOnwGX0';
const Module7  = 'OI0CfdiUbF8';
const Module8  = 'DwgjoF2gi10';
const Module9  = 'fjiGwIvznkQ';
const Module10 = 'TCGxsvbrOOs';


class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: Module1,
      player: null,
    };

    this.onReady = this.onReady.bind(this);
    this.onChangeVideo = this.onChangeVideo.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
  }

  onReady(event) {
    console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`); // eslint-disable-line
    this.setState({
      player: event.target,
    });
  }

  onPlayVideo() {
    this.state.player.playVideo();
  }

  onPauseVideo() {
    this.state.player.pauseVideo();
  }

  onChangeVideo() {
    this.setState({
      videoId: this.state.videoId === videoIdA ? videoIdB : videoIdA,
    });
  }

  render() {
    return (
      <div>
        <YouTube videoId={this.state.videoId} onReady={this.onReady} />
        <button onClick={this.onPlayVideo}>Play</button>
        <button onClick={this.onPauseVideo}>Pause</button>
        <button onClick={this.onChangeVideo}>Change Video</button>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));