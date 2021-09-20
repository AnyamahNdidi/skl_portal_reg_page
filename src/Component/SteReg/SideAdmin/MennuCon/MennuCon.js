
import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { SideBarData } from "./SideBarData"
import "./SideStyle.css"

function MennuCon() {
  return (
    <Container>
      <Wrapper>
        <NavMenuItems>


          {/* <NavBarToggle>

          </NavBarToggle> */}
          {
            SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>
                      {item.title}
                    </span>
                  </Link>

                </li>
              )
            })

          }
        </NavMenuItems>
      </Wrapper>
    </Container>
  )
}

export default MennuCon

const ConVisite = styled.div`
color:white;
display:flex;
justify-content:center;
align-item:center;
font-weight:600w;
font-size:20px;
width:130px;
cursor:pointer;

a{
  color:white
}

`
const MenuBars = styled(Link)``

const NavBarToggle = styled.li``

const NavMenuItems = styled.ul`
margin-left: -20px;
`


const Container = styled.div``
const Wrapper = styled.div``
