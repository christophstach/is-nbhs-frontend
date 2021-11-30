import * as React from 'react';
import { FunctionComponent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TableRow from '@mui/material/TableRow';
import { TableCell, TextField } from '@mui/material';

export interface NumberProps {
    name: string;
    label: string;
    defaultValue: number;
    disabled: boolean;
    min?: number;
    max?: number;
    step?: number;
}

const Number: FunctionComponent<NumberProps> = (props) => {
    const {control} = useFormContext();

    return (
        <TableRow>
            <TableCell>
                <strong>{props.label}</strong>
            </TableCell>
            <TableCell colSpan={8}>
                <Controller name={props.name} control={control} defaultValue={props.defaultValue} render={({field}) => (
                    <TextField {...field}
                               label={props.label}
                               disabled={props.disabled}
                               required
                               variant="filled"
                               size="small"
                               onChange={(e) => {
                                   if (e.target.value === '') {
                                       field.onChange(0);
                                   } else {
                                       field.onChange(parseFloat(e.target.value), 10);
                                   }
                               }}
                               InputProps={
                                   {
                                       inputProps: {
                                           min: props.min,
                                           max: props.max,
                                           step: props.step
                                       }
                                   }
                               }
                               type="number"
                               fullWidth/>
                )}/>
            </TableCell>
        </TableRow>
    );
}

export default Number;
