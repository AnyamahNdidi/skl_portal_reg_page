import React, { useContext } from 'react'
import styled from "styled-components"
import { AppContext } from "../../GlobalContext/GlobalContext"
import pic from "../../img/1.jpg"

function Usecom() {
  const { data } = useContext(AppContext)

  return (
    <Container>
      <Wrapper>
        <ImgCon>
          <img src={data && data.avatar} />
        </ImgCon>
        <NameCon>
          <Text1>

          </Text1>
          <Text2>
            {data && data.firstname}
          </Text2>
        </NameCon>

      </Wrapper>

    </Container>
  )
}

export default Usecom

const NameCon = styled.div`
 
`

const Text1 = styled.div`
font-weight: bold;
`

const Text2 = styled.div`
color: white;
font-weight: bold;
font-size: 20px;
`

const ImgCon = styled.div`
height: 50px;
width: 50px;
border-radius: 100px;

img{
  height: 50px;
width: 50px;
border-radius: 50%;

object-fit: contain;
}

`

const Container = styled.div`
padding: 5px;
`

const Wrapper = styled.div`
display: flex;
height: 100px;

flex-direction: column;
margin-top: 20px;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
border-radius: 5px;

justify-content: space-around;
align-items: center;
`

