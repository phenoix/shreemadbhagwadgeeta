import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const remy = px => `${px / 16}rem`;

const Card = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  border: none;
 
  text-align: center;
  background-color: #ffb900;
  position: relative;
  border-radius: 20px;
  margin: 3px;
  width: 20%;
  padding: 20px;
  padding-right: ${remy(15)};
  padding-left: ${remy(15)};
  height:400px
  
  img {
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    width: 44%;
    height: 200px;
    font-size: 14px;

    h2 {
      font-size: 21px;
    }
    h3 {
      font-size: 20px;
    }
  }
`;


const VerseCard = (props) => {
    const  verse  = props.verse;

    return(
        <Card  >
            <div >
                <h2 >
                    <Link to={`/verses/${verse._id}`}>
                        { verse.verse_text }
                    </Link>
                </h2>
                <h3>{verse.verse_number}</h3>
                <p >{verse.verse_summary}</p>
            </div>
        </Card>
    )
};

export default VerseCard;