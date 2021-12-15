import React from 'react'
import styled from 'styled-components'


export default function Home() {
    return (
        <Container>
           Home Component 
        </Container>
    )
}

const Container = styled.main `
min-height: calc(100vh - 70px);

padding: 0 calc(3.5vw + 5px);
` 