import { Button, Paper, Stack, TextField } from '@mui/material';
import AddBtn from './AddBtn';

const Input = () => {
	return (
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
			<form>
				<Stack spacing={2}>
					<TextField variant='outlined'></TextField>
					<TextField variant='outlined'></TextField>
					<Button type='submit' variant='contained'>
						Add Contact
					</Button>
				</Stack>
			</form>
			<AddBtn />
		</Paper>
	);
};
export default Input;
