import { useState } from "react"
import { Form } from "react-bootstrap"
import Button from "./Button"
import Card from "./Card"
import ErrorModal from "./ErrorModal"

const User = (props) => {
  const [modalShow, setModalShow] = useState(false)
  const [message, setMessage] = useState("")
  const [user, setUser] = useState({
    name: "",
    age: "",
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.name.trim().length === 0 || user.age.trim().length === 0) {
      setModalShow(true)
      setMessage("Please enter a valid name and age (non-empty values)")
      return
    }
    if (+user.age < 1) {
      setModalShow(true)
      setMessage("age must be greater than 0")
      return
    }
    props.onGetUserInfo(user)
    setUser({
      name: "",
      age: "",
    })
  }
  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={user.name}
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, name: e.target.value }
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age(Years)</Form.Label>
          <Form.Control
            type="number"
            value={user.age}
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, age: e.target.value }
              })
            }
          />
        </Form.Group>
        <Button type="submit">Add user</Button>

        <ErrorModal
          message={message}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Form>
    </Card>
  )
}

export default User
