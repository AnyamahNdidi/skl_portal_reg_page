import React, { useState } from 'react'
import styled from "styled-components"
import MiddleAdmin from '../MiddleAdmin/MiddleAdmin'
import SideAdmin from '../SideAdmin/SideAdmin'
// import HearderAdmin from "../HeaderAdmin/HeaderAdmin"

function AdminPage() {

  const [toggle, setToggle] = useState(true)

  const onClickToggle = () => {
    setToggle(!toggle)
  }

  return (

    <Conatiner>
      <SideAdmin toggle={toggle} onClickToggle={onClickToggle} />
      <MiddleAdmin onClickToggle={onClickToggle} toggle={toggle} />
    </Conatiner>



  )
}

export default AdminPage

const Conatiner = styled.div`
display: flex;
`







