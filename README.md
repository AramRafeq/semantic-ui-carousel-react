# Semantic-ui-carousel-react
Carousel component for semantic ui react 

**install**

    npm i semantic-ui-carousel-react
   

**props**
	
- ***elemnts[Array]*** : a n array of json objects each with render keyword which is a function that return a valid JSX 
	
- ***duration[Number]*** : a number that indicates the auto scrolling speed if this prop is absent then auto scrolling will get disabled 

- ***animation[String]*** : a text that specifies sliding animation which should be valid value for **Transition** component for semantic-ui-react so avilable options are `browse` `browse right` `drop` `fade` `fade up` `fade down` `fade left` `fade right` `fly up` `fly down` `fly left` `fly right` `horizontal flip` `vertical flip` `scale` `slide up` `slide down` `slide left` `slide right` `swing up` `swing down` `swing left` `swing right` `zoom` `jiggle` `flash` `shake` `pulse` `tada` `bounce` `glow`

- ***showNextPrev[Boolean]*** : decides that if the carousel should display next an previous buttons on the slider

- ***showIndicators[Boolean]*** : decides that if the carousel should display indicators for slides which is also a navigation option like next an previous buttons

- ***onSlideChange(index, element)[function]*** : callback function called everytime a slide changes 

[See also the live example](https://codesandbox.io/embed/blue-currying-dkvk0)
**usage example** 

    
    import  React  from  'react';
	import  Carousel  from  'semantic-ui-carousel-react';
	import { Image, Button } from  'semantic-ui-react'
	const  App  = () => {
		let  elements  = [
			{
				render:()=>{
					return <Button  fluid>1111111</Button>
				}
			},
			{
				render:()=>{
					return <Button  fluid>2222222</Button>
				}
		    },
		]
		return (
			<div>
				<Carousel
					elements  =  {  elements  }
					duration  ={3000}
					animation  ='slide left'
					showNextPrev  =  {false}
					showIndicators  ={true}
				/>
			</div>
		)

	}
	export  default  App;



