import React from 'react'
import styled from "styled-components"
import MennuCon from './MennuCon/MennuCon'
import Usecom from './UseCom/Usecom'
import { IconName, AiOutlineLogin } from "react-icons/ai";
import { app } from "../base"
import { useHistory } from "react-router-dom"

function SideAdmin({ onClickToggle, toggle }) {
  const hist = useHistory()

  const signOutUser = () => {
    app.auth().signOut();
    hist.push("/stu")
  }
  return (
    <Container onClickToggle={onClickToggle} toggle={toggle}>
      <Wrapper>
        <Usecom />
        <MennuCon />
        <LogOutCon>
          <DetailLog

            onClick={signOutUser}
          >


            Log Out
            <AiOutlineLogin style={{ color: "#004A1E", fontSize: "25px" }} />
          </DetailLog>
        </LogOutCon>

      </Wrapper>
    </Container>
  )
}

export default SideAdmin

const DetailLog = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
`

const LogOutCon = styled.div`
  height: 50px;
 color:#004A1E;
  display: flex;
  font-weight: bold;
  justify-content:center;
  align-items: center;
  background-color: #C0DE8A;

`

const Wrapper = styled.div`
background-color:  #004A1E;
width: 200px;
height: 100vh;
display: flex;
flex-direction: column;


`

const Container = styled.div`

display: ${({ toggle }) => (toggle ? "flex" : "none")};
`