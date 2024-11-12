import {
	Button,
	FormGroup,
	Paper,
	Slide,
	Stack,
	TextField,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addContact } from '../redux/slices/contactsSlice';
import PropTypes from 'prop-types';

const Input = ({ open }) => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleNumber = (e) => {
		setNumber(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const item = {
			name,
			number,
		};
		dispatch(addContact(item));
	};
	return (
		<Slide direction='right' in={open} mountOnEnter unmountOnExit>
			<Paper
				elevation={8}
				sx={{
					width: '25rem',
					position: 'absolute',
					left: '10px',
					top: '50%',
					transform: 'translateY(-50%)',
					p: '10px',
				}}
			>
				<form onSubmit={handleSubmit}>
					<FormGroup>
						<Stack spacing={2}>
							<TextField
								variant='outlined'
								label='Name'
								id='name-input'
								type='text'
								name='name'
								inputbasecomponentprops={{
									pattern:
										"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
								}}
								title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
								required
								onChange={handleName}
							/>
							<TextField
								variant='outlined'
								label='Phone'
								type='number'
								name='number'
								inputbasecomponentprops={{
									pattern:
										' +?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
								}}
								title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
								required
								onChange={handleNumber}
							/>
							<Button type='submit' variant='contained'>
								Add Contact
							</Button>
						</Stack>
					</FormGroup>
				</form>
			</Paper>
		</Slide>
	);
};

Input.propTypes = {
	open: PropTypes.bool,
};
export default Input;
