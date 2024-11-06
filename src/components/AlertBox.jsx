import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import PropTypes from 'prop-types';

const AlertBox = () => {
  return (
    <Dialog>
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          color: 'error.main',
        }}>
        <ErrorIcon sx={{ color: 'error.main' }} />
        Faileure
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          This name is already in contact list. Please try something else.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button sx={{ color: 'black' }}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};
AlertBox.propTypes = {
  isOpen: PropTypes.bool,
  onAlertToggle: PropTypes.func.isRequired,
};
export default AlertBox;
