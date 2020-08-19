import React, { Component } from "react";
import axios from "axios";

export default class CreateVerseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verse_text: "",
      verse_number: "",
      verse_text_meaning: "",
      verse_summary: "",
      verse_image: "",
      chapter:"",
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
      verse_text,
      verse_number,
      verse_text_meaning,
      verse_summary,
      verse_image,
      chapter,
    } = this.state;

    const body = {
        verse_text:verse_text,
        verse_number:verse_number,
        verse_text_meaning:verse_text_meaning,
        verse_summary:verse_summary,
        verse_image:verse_image,
        chapter:chapter,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.post("/geeta/verse/create", body, config);
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
            name="verse_text"
            placeholder="Enter Name"
            onChange={this.changeHandler}
            required
          />
          <input
            type="text"
            name="verse_number"
            placeholder="Number"
            onChange={this.changeHandler}
            required
          />
            <input
            type="text"
            name="verse_text_meaning"
            placeholder="Meaning"
            onChange={this.changeHandler}
            required
          />
            <input
            type="text"
            name="verse_summary"
            placeholder="Summary"
            onChange={this.changeHandler}
            required
          />
            <input
            type="text"
            name="verse_image"
            placeholder="Image"
            onChange={this.changeHandler}
            required
          />
          <input
          type="text"
          name="chapter"
          placeholder="Chapter"
          onChange={this.changeHandler}
          required
        />
          <input type="submit" />
        </form>
      </>
    );
  }
}
