import React from "react";
import ReactDOM from "react-dom";
import Carousel from './../src/carousel';
import './../src/carousel.css'
import "semantic-ui-css/semantic.min.css";
import { Image, Card, Icon, Item } from "semantic-ui-react";

const App = () => {
  let elements = [
    {
      render: () => {
        return (
          <Image src="https://i.pinimg.com/originals/09/6d/f0/096df0eb195b8f0d9475924f9a1e9425.jpg" />
        );
      }
    },
    {
      render: () => {
        return <Item.Group>
          <Item>
            <Item.Image size='tiny' src='https://react.semantic-ui.com//images/wireframe/image.png' />
      
            <Item.Content>
              <Item.Header as='a'>Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                <Image src='https://react.semantic-ui.com//images/wireframe/short-paragraph.png' />
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>
      
          <Item>
            <Item.Image size='tiny' src='https://react.semantic-ui.com//images/wireframe/image.png' />
      
            <Item.Content>
              <Item.Header as='a'>Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                <Image src='https://react.semantic-ui.com//images/wireframe/short-paragraph.png' />
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>;
      }
    },
    {
      render: () => {
        return (
          <Card>
            <Image src='https://react.semantic-ui.com//images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        );
      }
    },
  ];
  return (
    <div style={{ width: 500 }}>
      <Carousel
        elements={elements}
        duration={3000}
        animation="horizontal flip"
        showNextPrev={true}
        showIndicators={true}
      />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
