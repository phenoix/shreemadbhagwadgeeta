import React, { Component } from 'react';
import axios from "axios";
import YouTube from 'react-youtube';

export class VerseDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verse:[],
        };
      }
      componentDidMount() {
        this.fetchChapterDetails();
      }
    
      async fetchChapterDetails() {
        var verseid = this.props.match.params.id;
        await axios
          .get(`/geeta/verse/${verseid}`)
          .then((res) => {
              this.setState({
                verse:res.data,
            });
            console.log("Verse test");
            console.log(res.data);
            console.log("Individual");
            console.log(this.state.verse);
          })
          .catch((err) => {
            console.log("Error fetching Verse Details");
            console.log(err);
          });
      }
    render() {
        const verse=this.state.verse;
        const opts = {
            height: '290',
            width: '350',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
        return (
            <div>
                <h2> <i> {verse.verse_text } </i></h2>
                <br/>
                <h3>  {verse.verse_text_meaning } </h3>
                <h4>  {verse.verse_summary } </h4>
                <YouTube videoId={verse.verse_image} opts={opts} onReady={this._onReady} />;
                
            </div>
        )
    }
}

export default VerseDetails
