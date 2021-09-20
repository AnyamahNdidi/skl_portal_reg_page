import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import img from "../img/1.jpg"
import img2 from "../img/pexels-caio-69970.jpg"
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import "../Dstyle.css";
import { Select } from 'antd';
import { Checkbox, Row, Col } from 'antd';
import { app } from "../base"
import Password from 'antd/lib/input/Password';
import { Link, useHistory } from "react-router-dom";

const useDate = app.firestore().collection("students")
function Studentlog() {

  const [password, setpassword] = useState("")
  const [email, setEmail] = useState("")
  const hist = useHistory();

  const { Option } = Select;


  const signInUser = async () => {
    await app.auth().signInWithEmailAndPassword(email, password)
    hist.push("/portal")
  }

  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  return (
    <Container>
      <Wrapper>
        <AllWrapper>
          <LeftCon>

          </LeftCon>
          <RightCon>

          </RightCon>


        </AllWrapper>
        <ConReg>
          <ConReg1>
            <ConHolder>
              <HolderLogo src={img2}>

              </HolderLogo>
              <span>
                Reserve School
              </span>
            </ConHolder>
          </ConReg1>
          <ConReg2>
            <RegWrapper>
              <span style={{ fontSize: "25px" }}>Student Portal Login</span>
              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <Input.Password placeholder="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value)
                }}
              />
              <Button

                onClick={
                  () => {
                    console.log(
                      signInUser()
                    )
                  }
                }
              >Log In</Button>

            </RegWrapper>
          </ConReg2>

        </ConReg>
      </Wrapper>
    </Container>
  )
}

export default Studentlog

const Label = styled.label`
      width: 200px;
      height: 30px;
      background-color: red;
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      cursor: pointer;
      `;

const InputImage = styled.input`
      width: 300px;
      height: 40px;
      display: none;
      `;

const DisplayCon = styled.img`
      height: 120px;
      width: 120px;
      background-color: white;
      border-radius: 50%;

      `

const RegWrapper = styled.div`
      width: 350px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 550px;
      height: 190px;
      color: white;
span{
  font-weight: bold;
  font-size: 15px;
}


 @media screen and (max-width:1024px){
        width:500px;

}

      @media screen and (max-width:768px){
        width:480px;
      top: 20px;
 
}

      @media screen and (max-width:425px){
        width:300px;

}

      @media screen and (max-width:375px){
        width:300px;
      top: 15px;
      left: 30px;
}

      @media screen and (max-width:320px){
        width:280px;

}
      `

const HolderLogo = styled.img`
      height: 100px;
      width: 100px;
      border-radius: 50%;

      `
const ConHolder = styled.div`
      background-color: white;
      height: 600px;
      opacity: 0.8;
      width:350px ;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      span{
        color: #194422;
      font-weight: bold;
}
      `

const ConReg2 = styled.div`
      width:500px ;
      background-color: #194422;
      display: flex;
      justify-content: center;
      align-items: center;


      @media screen and (max-width:1024px){
        background - color: #27c561;
      height: 500px;

}

      @media screen and (max-width:768px){
        background - color: #27c561;
      height: 500px;
 
}

      @media screen and (max-width:425px){
        background - color: #27c561;
      height: 500px;

}

      @media screen and (max-width:375px){
        background - color: #27c561;
      height: 500px;
}

      @media screen and (max-width:320px){
        background - color:#27c561;
      height: 500px;

}

      `

const ConReg1 = styled.div`

      width:350px ;
      background-image: url(${img});
      background-repeat: no-repeat;
      background-size: cover;

      @media screen and (max-width:768px){
        display: none;
}
      `

const ConReg = styled.div`

      width: 850px;
      height: 600px;
      display: flex;
      position: absolute;
      top: 40px;
      left: 250px;
      box-shadow: 0 8px 32px 0 rgba(1, 38, 15, 0.19);

      @media screen and (max-width:1024px){
        width:650px;
      top: 20px;
      left: 150px;
      height: 500px;
}

      @media screen and (max-width:768px){
        width:550px;
      top: 20px;
      left: 100px;
      height: 500px;
}

      @media screen and (max-width:425px){
        width:320px;
      top: 20px;
      left: 60px;
}

      @media screen and (max-width:375px){
        width:320px;
      top: 15px;
      left: 30px;
}

      @media screen and (max-width:320px){
        width:300px;
      top: 15px;
      left: 10px;
      height: auto;
}


      `

const RightCon = styled.div`
      height: 100%;
      min-height: 100vh;
      background-color: white;
      opacity: 0.8;
      flex: 1;

      `

const LeftCon = styled.div`
      background-color: #194422;
      width: 400px;
      height: 100%;
      min-height: 100vh;

      @media screen and (max-width:600px){
        width:300px;
        background-color:#27c561;

}
      `
const AllWrapper = styled.div`

      position: relative;
      display: flex;
      height: 100%;
      min-height: 100vh;
      
      `

const Container = styled.div``
const Wrapper = styled.div`
      height: 100%;
      min-height: 100vh;
      background-image: url(${img});
      background-repeat: no-repeat;
      background-size: cover;

      `