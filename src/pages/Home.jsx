import { Container } from '@mui/material';
import ContactList from '../components/ContactList';
import Input from '../components/Input';

const Home = () => {
	return (
		<Container>
			<ContactList />
			<Input />
		</Container>
	);
};
export default Home;
