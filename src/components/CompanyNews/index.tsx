import React from 'react';
import { ListGroup, ListGroupItem} from 'reactstrap';
import { useMessages } from './useMessage';

export const CompanyNews = () => {
  const messages = useMessages();

  return (
    <ListGroup className="company__news">
      {messages.map((mess, i) => <ListGroupItem key={i}>{mess}</ListGroupItem>)}
    </ListGroup>
  )
}