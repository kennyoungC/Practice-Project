import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import User from "./Components/User"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import UserList from "./Components/UserList"
import { useState } from "react"
function App() {
  const [userInfo, setUserInfo] = useState([])
  const getUsersInfo = (user) => {
    setUserInfo((prevUser) => {
      return [...prevUser, user]
    })
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={4}>
          <User onGetUserInfo={getUsersInfo} />
          <ul className="p-0">{userInfo && <UserList users={userInfo} />}</ul>
        </Col>
      </Row>
    </Container>
  )
}

export default App
