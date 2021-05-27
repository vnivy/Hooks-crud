import React, { useState, useEffect } from 'react'
import { Form,Button,FormLabel,FormControl } from 'react-bootstrap';
const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <Form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" name="name" value={user.name} onChange={handleInputChange} /><br></br>
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" name="username" value={user.username} onChange={handleInputChange} />
      <br></br>
      <Button className="mr-1">Update user</Button>
      <Button onClick={() => props.setEditing(false)} className="button muted-button ">
        Cancel
      </Button>
    </Form>
  )
}

export default EditUserForm