import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import VerseCard from "./VerseCard";

const ChapterDetails = styled.div`
  font-family: "Eczar", serif;
  text-align: center;
  h1 {
    font-family: "Amita", cursive;
    color: #f76707;
  }
`;

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
          <br /> <br /> <br />
        </div>
        <ChapterDetails className="Chapter details ">
          <h1>{chapter.chapter_name}</h1>
          <h3> {chapter.chapter_number}</h3>
          <h5> {chapter.chapter_name_meaning}</h5>
          <h6> {chapter.chapter_summary} </h6>
        </ChapterDetails>
        <div className="list">{verseList}</div>
      </div>
    );
  }
}

export default Verses;
