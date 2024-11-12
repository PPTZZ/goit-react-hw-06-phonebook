import { Add } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import PropTypes from 'prop-types';

const AddBtn = ({ toggleSlide }) => {
	return (
		<Box
			sx={{
				position: 'absolute',
				right: '40px',
				bottom: '30px',
				transform: 'translateY(50%)',
				bgcolor: 'inherit',
			}}
		>
			<IconButton onClick={() => toggleSlide((state) => (state = !state))}>
				<Add />
			</IconButton>
		</Box>
	);
};

AddBtn.propTypes = {
	toggleSlide: PropTypes.func,
};
export default AddBtn;
