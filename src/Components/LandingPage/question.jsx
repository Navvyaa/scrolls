import React from 'react'
import arrow from '../Assets/arrowDown.svg'
import Accordion from 'react-bootstrap/Accordion';
function Question(props) {
  return (
    <Accordion>
      <Accordion.Item style={{border:"1px solid black"}} eventKey="0">
        <Accordion.Header>{props.question}</Accordion.Header>
        <Accordion.Body style={{fontWeight:'500'}}>
          {props.ans}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  )
}

export default Question