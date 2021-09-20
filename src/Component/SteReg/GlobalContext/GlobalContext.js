import react, { createContext, useState, useEffect } from "react"
import { app } from "../base"

export const AppContext = createContext()
const db = app.firestore().collection("students")

export const AppProvider = ({ children }) => {
  const [current, setCurrent] = useState(null)
  const [data, setdata] = useState(null)


  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrent(user);

      db.doc(user.uid).get().then((doc) => {
        setdata(doc.data())
      })
    })
  }, [])

  return (
    <AppContext.Provider value={{ current, data }}>
      {" "}
      {children}
      {" "}
    </AppContext.Provider>
  )
}
