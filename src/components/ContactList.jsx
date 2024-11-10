import { Stack } from '@mui/material';
import Contact from './Contact';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);

  return (
    <Stack spacing={2} mt={2}>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return <Contact key={id} name={name} number={number} id={id} />;
      })}
    </Stack>
  );
};
export default ContactList;
