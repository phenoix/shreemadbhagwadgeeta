import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Card = styled.div`
  width: 250px;
  text-align: center;
  background-color: #ffb900;
  padding: 10px;
  
  img {
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    width: 150px;
    height: 180px;
    font-size: 14px;
  }
`;


const ChapterCard = (props) => {
    const  chapter  = props.chapter;

    return(
        <Card  >
            <div >
                <h2 >
                    <Link to={`/show-chapter/${chapter._id}`}>
                        { chapter.chapter_name }
                    </Link>
                </h2>
                <h3>{chapter.chapter_number}</h3>
                <p >{chapter.chapter_summary}</p>
            </div>
        </Card>
    )
};

export default ChapterCard;