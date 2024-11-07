import { Add } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

const AddBtn = () => {
	return (
		<Box
			sx={{
				position: 'absolute',
				right: '-40px',
				bottom: '50%',
				transform: 'translateY(50%)',
				bgcolor: 'inherit',
			}}
		>
			<IconButton>
				<Add />
			</IconButton>
		</Box>
	);
};
export default AddBtn;
