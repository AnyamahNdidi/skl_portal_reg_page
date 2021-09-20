import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import img from "./img/1.jpg"
import img2 from "./img/pexels-caio-69970.jpg"
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import "./Dstyle.css";
import { Select } from 'antd';
import { Checkbox, Row, Col } from 'antd';
import { app } from "./base"
import Password from 'antd/lib/input/Password';
import { Link, useHistory } from "react-router-dom";
const useDate = app.firestore().collection("students")
function Stel() {
  const [firstname, setFirstname] = useState("")
  const [secondname, setsecondname] = useState("")
  const [DateofBirth, setDateofBirth] = useState("")
  const [gender, setgender] = useState("")
  const [subject, setsubject] = useState("")
  const [password, setpassword] = useState("")
  const [email, setEmail] = useState("")
  const [fileUrl, setFileUrl] = useState(null);
  const [displayCover, setDisplayCover] = useState(null);
  const hist = useHistory();
  const dateFormat = 'YYYY/MM/DD';
  const { Option } = Select;

  const ImageUpload = async (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setDisplayCover(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    const File = e.target.files[0];
    const StorageRef = app.storage().ref();
    const fileRef = await StorageRef.child(File.name);
    await fileRef.put(File);
    setFileUrl(await fileRef.getDownloadURL());
  };
  const SignUpUser = async () => {
    const newUsers = await app.auth().createUserWithEmailAndPassword(email, password)

    useDate.doc(newUsers.uid).set({
      firstname,
      secondname,
      // DateofBirth,
      gender,
      subject,
      email,
      password,
      avatar: await fileUrl,

    })
    setFirstname("")
    setsecondname("")

    setgender("")
    setsubject("")
    setEmail("")
    setpassword("")
    setFileUrl("")
    setDisplayCover("")
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
              {displayCover ? (
                <DisplayCon src={displayCover} />
              ) : (
                <DisplayCon src={img2} />
              )}


              <InputImage
                type="file"
                id="picture"
                onChange={ImageUpload}
              />
              <Label htmlFor="picture">Upload Image</Label>
              <Input
                placeholder="Fisrtname"
                value={firstname}
                onChange={
                  (e) => {
                    setFirstname(e.target.value)
                  }
                }
              />
              <Input
                placeholder="Second Name"
                value={secondname}
                onChange={
                  (e) => {
                    setsecondname(e.target.value)
                  }
                }

              />

              <Select
                showSearch
                className="mystyle"
                placeholder="Gender"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
                value={gender}
                onChange={
                  data => setgender(data)
                }
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>


              </Select>
              <label>Select Subject</label>
              <Checkbox.Group style={{ width: '100%' }}
                value={subject}
                onChange={
                  data => setsubject(data)
                }>
                <Row>
                  <Col span={8}>
                    <Checkbox value="math">Math</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="english">English</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="biology">Biology</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="chemistry">Chemistry</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="futhermath">Futher Math</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
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
                      SignUpUser()
                    )
                  }
                }
              >Register</Button>

            </RegWrapper>
          </ConReg2>

        </ConReg>
      </Wrapper>
    </Container>
  )
}

export default Stel

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
      color: white;



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
      height: 550px;

}

@media screen and (max-width:768px){
        background - color: #27c561;
      height: 550px;
 
}

@media screen and (max-width:425px){
        background - color: #27c561;
      height: 550px;

}

 @media screen and (max-width:375px){
        background - color: #27c561;
      height: 550px;
}

  @media screen and (max-width:320px){
        background - color:#27c561;
      height: 550px;

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
        background-color: #27c561;

}
      `
const AllWrapper = styled.div`

      position: relative;
      display: flex;
      height: 100%;
      min-height: 100vh;
      @media screen and (max-width:600px){
        width:300px;
        background-color: #27c561;

}
      `

const Container = styled.div``
const Wrapper = styled.div`
      height: 100%;
      min-height: 100vh;
      background-image: url(${img});
      background-repeat: no-repeat;
      background-size: cover;

      `