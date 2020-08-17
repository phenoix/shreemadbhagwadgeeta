import React, { Component } from "react";
import axios from "axios";

export default class CreateChapterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapter_name: "",
      chapter_number: "",
      chapter_name_meaning: "",
      chapter_summary: "",
      chapter_image: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async submitHandler(e) {
    e.preventDefault();
    const {
      chapter_name,
      chapter_number,
      chapter_name_meaning,
      chapter_summary,
      chapter_image,
    } = this.state;

    const body = {
        chapter_name:chapter_name,
        chapter_number:chapter_number,
        chapter_name_meaning:chapter_name_meaning,
        chapter_summary:chapter_summary,
        chapter_image:chapter_image,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.post("/geeta/chapter/create", body, config);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="chapter_name"
            placeholder="Enter Name"
            onChange={this.changeHandler}
            required
          />
          <input
            type="text"
            name="chapter_number"
            placeholder="Tweet"
            onChange={this.changeHandler}
            required
          />
            <input
            type="text"
            name="chapter_name_meaning"
            placeholder="Tweet"
            onChange={this.changeHandler}
            required
          />
            <input
            type="text"
            name="chapter_summary"
            placeholder="Tweet"
            onChange={this.changeHandler}
            required
          />
            <input
            type="text"
            name="chapter_image"
            placeholder="Tweet"
            onChange={this.changeHandler}
            required
          />
          <input type="submit" />
        </form>
      </>
    );
  }
}
