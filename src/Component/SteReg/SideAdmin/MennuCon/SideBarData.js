import React from "react"
import { AiFillLayout } from "react-icons/ai";
import { BsFillArchiveFill } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsFillInboxesFill } from "react-icons/bs";
import { BsFillPuzzleFill } from "react-icons/bs";
import { AiFillSlackCircle, AiOutlineUser } from "react-icons/ai";


export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillLayout />,
    cName: "nav-text"
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <AiOutlineUser />,
    cName: "nav-text"
  },
  {
    title: "Check Result",
    path: "/result",
    icon: <BsFillPlusCircleFill />,
    cName: "nav-text"
  },
  {
    title: "Subject Scheme",
    path: "/subject",
    icon: <BsFillInboxesFill />,
    cName: "nav-text"
  },

]


