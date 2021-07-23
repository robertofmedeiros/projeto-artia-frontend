import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Data(props) {

  
  return (
    <TextField
        id={props.id}
        type="date"
        defaultValue={props.dataDefault}
        className={props.className}
        required
        fullWidth
        label={props.label} 
        variant="outlined"
        onChange={props.atualizarValor}
        InputLabelProps={{
            shrink: true,
        }}
    />
  );
}