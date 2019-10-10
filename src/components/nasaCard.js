import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
export const MakeCard = (props)=>{
    return (
    <div className = "subby">
        <Card>
        <CardTitle><big>{props.title}</big></CardTitle>
        <CardSubtitle className = "text-info">Date: {props.date}</CardSubtitle>
          <CardBody className = "cardyB">
            <CardImg top width="100%" src={props.img} alt="Card image cap" />
            {
                props.copyright ?
                    <CardSubtitle> Artist: {props.copyright}</CardSubtitle>
                    :
                    <CardSubtitle>Artist not available</CardSubtitle>
            }
            <CardText>{props.explanation}</CardText>
          </CardBody>
        </Card>
    </div>
    );
}