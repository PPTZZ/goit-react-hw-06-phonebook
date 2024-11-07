import { Delete, Edit } from '@mui/icons-material';
import { IconButton, Paper, Stack, Typography } from '@mui/material';

const Contact = () => {
	return (
		<Paper elevation={2}>
			<Stack
				direction={'row'}
				alignItems={'center'}
				sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}
				p={1}
			>
				<Stack spacing={2}>
					<Typography>Name</Typography>
					<Typography>Number</Typography>
				</Stack>
				<Stack>
					<IconButton>
						<Delete />
					</IconButton>
					<IconButton>
						<Edit />
					</IconButton>
				</Stack>
			</Stack>
		</Paper>
	);
};
export default Contact;
