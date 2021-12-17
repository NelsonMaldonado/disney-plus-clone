import React from "react"
import styled from "styled-components"

const Movies = () => {
  return (
    <Container>
      <h4>Recomended for you</h4>
      <Content>
        <Wrap>
          <img src="/images/viewers-pixar.png" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-pixar.png" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-pixar.png" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-pixar.png" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-pixar.png" />
        </Wrap>
      </Content>
    </Container>
  )
}
export default Movies

const Container = styled.div``

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
