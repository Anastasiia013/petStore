import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CustomSpinner() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress size="50px" />
        </Box>
    );
}