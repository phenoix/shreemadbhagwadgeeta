import React, { Component } from 'react'

import { Link } from "react-router-dom";
import axios from "axios";

export class Verses extends Component {
    constructor(props) {
        super(props);
        this.state = {
          verses: []
        };
      }
      componentDidMount() {
        this.fetchChapterDetails();
      }
    
      async fetchChapterDetails() {
          
        var chapterid=this.props.match.params.id;
        await axios
        .get(`/geeta/chapter/${chapterid}`)
        .then(res =>{
          this.setState({
            verses:res.data
          })
        })
        .catch(err =>{
          console.log("Error fetching Chapter List");
        })
        
      }
    render() {
        const verses=this.state.verses;
    console.log(verses);
        return (
            <div>
                This is a Verse
                <h2>{this.props.match.params.id}</h2>
            </div>
        )
    }
}

export default Verses
