import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';


export default function IconButtons() {
  return (
    <Stack  direction="row" spacing={1}>
      <IconButton  aria-label="delete">
        <DeleteIcon  sx={{'&:hover':{color:'red'}}}/>
      </IconButton>
    </Stack>
  );
}
