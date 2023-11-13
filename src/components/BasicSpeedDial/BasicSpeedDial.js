import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import AddIcon from '@mui/icons-material/Add';

export default function BasicSpeedDial({onClick}) {
  return (
    <Box sx={{ position: 'fixed', mt: 3, right:'0.1rem', bottom:'0.1rem'}} >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 3, right: 3 }}
        icon={<AddIcon onClick={onClick}/>}
      >
      </SpeedDial>
    </Box>
  );
}

