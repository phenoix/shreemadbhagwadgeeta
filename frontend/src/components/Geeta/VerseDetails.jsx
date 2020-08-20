import React, { Component } from 'react';
import axios from "axios";

export class VerseDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verse_text: '',
            verse_text_meaning: '',
            verse_summary: '',
            verse_image: '',
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
              let verse=res.data;
              console.log("Verse");
              console.log(verse);
              console.log(verse.verse_text);
            this.setState({
                verse_text: verse.verse_text,
                verse_text_meaning: verse.verse_text_meaning,
                verse_summary:verse.verse_summary,
                verse_image:verse.verse_image,
            });
            console.log("Verse test");
            console.log(res.data);
            console.log("Individual");
            console.log(this.verse_text);
          })
          .catch((err) => {
            console.log("Error fetching Verse Details");
            console.log(err);
          });
      }
    render() {
        return (
            <div>
                This is Verse Details Modified
                <h2> <i> {this.verse_text} </i></h2>
                 <h3> {this.verse_text_meaning}</h3>
               <h4> {this.cverse_summary}</h4>
                <h5> {this.verse_image} </h5>
            </div>
        )
    }
}

export default VerseDetails
