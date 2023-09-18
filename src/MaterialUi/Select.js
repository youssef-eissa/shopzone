import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [positions, setPositions] = React.useState('');

  const handleChange = (event) => {
    setPositions(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{  minWidth: '100%' }}>
        <InputLabel  id="demo-simple-select-autowidth-label">Positions</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={positions}
          onChange={handleChange}
          autoWidth
          label="positions"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'sales'}>In-store Sales</MenuItem>
          <MenuItem value={'leadership'}>Store Leadership</MenuItem>
          <MenuItem value={'operations'}>In-store Operations</MenuItem>
          <MenuItem value={'logistics'}>Wearhouse & Logistics</MenuItem>
          <MenuItem value={'ecommerce'}>E-commerce</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}