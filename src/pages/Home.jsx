import { useState } from 'react';
import { Container } from '@mui/material';
import ContactList from '../components/ContactList';
import Input from '../components/Input';
import AddBtn from '../components/AddBtn';

const Home = () => {
	const [open, setOpen] = useState(false);

	return (
		<Container>
			<ContactList />
			<Input open={open} />
			<AddBtn toggleSlide={setOpen} />
		</Container>
	);
};
export default Home;
