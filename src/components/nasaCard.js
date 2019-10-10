import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
export const MakeCard = (props)=>{
    return (
    <div>
        <CardTitle className = "text-warning"><big>{props.title}</big></CardTitle>
        <CardSubtitle className = "text-warning"><big>Date: {props.date}</big></CardSubtitle>
          <CardBody className = "cardyB">
            <CardImg top width="100%" src={props.img} alt="Card image cap" />
            {
                props.copyright ?
                    <CardSubtitle><big>Artist: {props.copyright}</big></CardSubtitle>
                    :
                    <CardSubtitle><big>Artist not available</big></CardSubtitle>
            }
            <CardText>{props.explanation}</CardText>
          </CardBody>
    </div>
    );
}