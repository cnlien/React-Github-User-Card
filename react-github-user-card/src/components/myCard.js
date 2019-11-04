// import React, { Component } from 'react';
import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, CardLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const MyCard = props => {
    return (
        <Card>
            <CardImg top width="100%" src={props.avatar_url} />
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardLink > {props.login}</CardLink>
                <CardText>{props.bio}</CardText>
            </CardBody>
        </Card>
    );
}

export default MyCard;