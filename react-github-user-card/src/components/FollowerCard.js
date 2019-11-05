import React from 'react';
import { Card, CardImg, CardTitle, CardBody, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const FollowerCard = props => {
  return (
    <Card>
      <CardImg top width="100%" src={props.avatar_url} />

      <CardBody>
        <CardTitle>{props.login}</CardTitle>
        <Button href={props.html_url}>View Profile</Button>
      </CardBody>
    </Card>
  );
};

export default FollowerCard;

