import React from 'react'
import styled from "styled-components"
import AllSales from '../AllSales/AllSales'
import DispathCus from '../DispathCUS/DispathCus'
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin'
import RecentStatus from '../RecentStatus/RecentStatus'
import WeatherNew from '../WeatherNew/WeatherNew'
import Welcomw from '../Welcom/Welcomw'

function MiddleAdmin({ onClickToggle, toggle }) {
  return (
    <Container>
      <HeaderAdmin onClickToggle={onClickToggle} toggle={toggle} />
      <HeaderCon>
        <Welcomw />
        <WeatherNew />
        <AllSales />
        <RecentStatus />
        <DispathCus />

      </HeaderCon>



    </Container>
  )
}

export default MiddleAdmin


const Container = styled.div`

display: flex;
flex-direction: column;
flex: 1;
height: auto;
`
const HeaderCon = styled.div`
height: 90vh;
display: flex;
flex-direction: column;
overflow-y: scroll;


@media screen and (max-width: 600px) {
    height: 500px;
    
  }
`