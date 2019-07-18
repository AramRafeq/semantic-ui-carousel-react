import React from 'react';
import {Card,Transition, Button, Label} from 'semantic-ui-react'
import './carousel.css'
class Carousel extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentIndex: 0
    }
  }
  componentDidMount() {
    if(this.props.duration){

      this.interval = setInterval(() => {
        this.nextSlide()
        try{
          this.props.onSlideChange(this.state.currentIndex,this.props.elements[this.state.currentIndex])
        }catch(e){}        
      }, this.props.duration);
    }
  }
  
  componentWillUnmount() {
    if(this.props.duration){
      clearInterval(this.interval);
    }
  }
  nextSlide() {
    this.setState({
      currentIndex: (this.state.currentIndex+1)%this.props.elements.length
    })
  }
  prevSlide() {
    this.setState({
      currentIndex: ((this.state.currentIndex-1)%this.props.elements.length)<0 ? this.props.elements.length-1 :(this.state.currentIndex-1)%this.props.elements.length
    })
  }
  gotToSlide(index) {
    if(this.props.duration){
      clearInterval(this.interval);
    }
    this.setState({
      currentIndex: index
    })
  }
  nextClicked() {
    if(this.props.duration){
      clearInterval(this.interval);
    }
    this.nextSlide();
  }
  prevClicked() {
    if(this.props.duration){
      clearInterval(this.interval);
    }
    this.prevSlide();
  }
  render(){
    return (
      <Card fluid className='carousel-container'>
        <Card.Content className='carousel'>
          {
            (this.props.elements).map((element, index) => {
              if(this.state.currentIndex === index ){
                return (
                  <Transition key={`index_${+new Date()}`} transitionOnMount={true} visible={true} duration={1000} animation={this.props.animation}>
                    {this.props.elements[index].render()}
                  </Transition>
                )
              }
            })
          }    
          <div className='carousel-indicators'>
            {
              (this.props.showIndicators)
              ? (this.props.elements).map((elemnt, index)=>{
                  if(this.state.currentIndex === index ){
                    return (
                      <a>
                        <Label onClick = {()=> this.gotToSlide(index) } circular color='black' empty  />  
                      </a>
                    )
                  }else{
                    return (
                      <a>
                        <Label onClick = {()=> this.gotToSlide(index) } circular color='grey' empty  />  
                      </a>
                    )
                  }
                })
              :null
            }
          </div>  
          {
            (this.props.showNextPrev)?
              <Button className='prev' onClick = {()=>this.prevClicked()} icon='caret left' />
            :null
          }
          {
            (this.props.showNextPrev)?
            <Button className='next' onClick = {()=>this.nextClicked()} icon='caret right' />
            :null
          }
          
        </Card.Content>
      </Card>
    )
  }
}

export default Carousel;


