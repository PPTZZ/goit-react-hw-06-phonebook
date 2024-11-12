import { Stack } from '@mui/material';
import Contact from './Contact';
import { useSelector } from 'react-redux';

const ContactList = () => {
	const contacts = useSelector((state) => state.contacts.value);
	const searchWord = useSelector((state) => state.search.value);
	const filteredContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(searchWord.toLowerCase())
	);

	return (
		<Stack spacing={2} mt={2}>
			{filteredContacts.map((contact) => {
				const { id, name, number } = contact;
				return <Contact key={id} name={name} number={number} id={id} />;
			})}
		</Stack>
	);
};
export default ContactList;
