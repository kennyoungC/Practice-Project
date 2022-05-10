import Card from "./Card"

const UserList = (props) => {
  return (
    <>
      {props.users.map((el) => (
        <Card key={el.name}>
          <li className="border list-unstyled ps-2">
            {el.name} ({el.age} years old)
          </li>
        </Card>
      ))}
    </>
  )
}

export default UserList
