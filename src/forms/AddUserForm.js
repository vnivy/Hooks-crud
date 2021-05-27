import React, { useState } from 'react'
import { Form,Button,FormLabel,FormControl } from 'react-bootstrap';

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<Form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<Form.Label>Name</Form.Label>
			<Form.Control type="text" name="name" value={user.name} onChange={handleInputChange} /><br></br>
			<Form.Label>Username</Form.Label>
			<Form.Control type="text" name="username" value={user.username} onChange={handleInputChange} />
			<br></br>
			<Button>Add new user</Button>
		</Form>
	)
}

export default AddUserForm

