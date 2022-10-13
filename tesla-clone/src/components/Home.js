import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            title="Model S"
            decription="2% Company Car Tax. Learn More"
            backgroundImg="model-s.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Explore Inventory"
        />
        <Section 
            title="Model Y"
            decription="2% Company Car Tax. Learn More"
            backgroundImg="model-y.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Explore Inventory"
        />
        <Section 
            title="Model 3"
            decription="2% Company Car Tax. Learn More"
            backgroundImg="model-3.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Explore Inventory"
        />
        <Section 
            title="Model X"
            decription="2% Company Car Tax. Learn More"
            backgroundImg="model-x.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Explore Inventory"
        />
    </Container>    
  )
}

export default Home

const Container = styled.div`
    height:100vh;


`