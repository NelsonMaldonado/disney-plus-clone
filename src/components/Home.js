import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'


export default function Home() {
    return (
        <Container>
            <ImageSlider/>
           Home Component 
        </Container>
    )
}

const Container = styled.main `
min-height: calc(100vh - 70px);

padding: 0 calc(3.5vw + 5px);
position: relative;
&: before {
    background-image: url("/images/home-background.png");
    background-repeat: no-repeat;
    background-position: center;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}
` 