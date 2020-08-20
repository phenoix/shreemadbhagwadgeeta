import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ChapterCard from "./ChapterCard";

class Chapters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapters: []
    };
  }
  componentDidMount() {
    this.fetchChapters();
  }

  async fetchChapters() {
    await axios
    .get("/geeta/chapters")
    .then(res =>{
      this.setState({
        chapters:res.data
      })
    })
    .catch(err =>{
      console.log("Error fetching Chapter List");
    })
    
  }
  render() {
    const chapters=this.state.chapters;
    console.log(chapters);
    let chapterList;
    if(!chapters){
      chapterList="No Chapter Found";
    } else {
      chapterList=chapters.map((chapter, k) =>
        <ChapterCard chapter={chapter} key={k} />
      )
    }
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">अध्यायों की सूची </h2>
            </div>

            <div className="col-md-11">
            <Link to="/chapters/create" className="btn btn-outline-warning float-right">
                + नया अध्याय जोड़ें 
              </Link>
              
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {chapterList}
          </div>
        </div>
      </div>
    );
  }
}

export default Chapters;
