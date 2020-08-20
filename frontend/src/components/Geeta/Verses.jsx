import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import VerseCard from "./VerseCard";

export class Verses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapter: [],
      verses: [],
    };
  }
  componentDidMount() {
    this.fetchChapterDetails();
  }

  async fetchChapterDetails() {
    var chapterid = this.props.match.params.id;
    await axios
      .get(`/geeta/chapter/${chapterid}`)
      .then((res) => {
        this.setState({
          chapter: res.data.chapter,
          verses: res.data.chapter_verses,
        });
      })
      .catch((err) => {
        console.log("Error fetching Chapter List");
      });
  }
  render() {
    const verses = this.state.verses;
    const chapter = this.state.chapter;
    console.log(verses);
    let verseList;
    if (!verses) {
      verseList = "No Verse Found";
    } else {
      verseList = verses.map((verse, k) => <VerseCard verse={verse} key={k} />);
    }
    console.log(verses);
    return (
      <div>
        <div>
          <Link
            to="/verse/create"
            className="btn btn-outline-warning float-right"
          >
            + नया श्लोक जोड़ें
          </Link>
          <br />
        </div>
        <div className="Chapter details ">
          <h2> <i> {chapter.chapter_name} </i></h2>
          <h3> {chapter.chapter_number}</h3>
          <h4> {chapter.chapter_name_meaning}</h4>
          <h5> {chapter.chapter_summary} </h5>
        </div>
        <div className="list">{verseList}</div>
      </div>
    );
  }
}

export default Verses;
