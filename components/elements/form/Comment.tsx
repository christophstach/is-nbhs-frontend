import * as React from 'react';
import { FunctionComponent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TableRow from '@mui/material/TableRow';
import { TableCell, TextField } from '@mui/material';


export interface CommentProps {
    defaultValue: string;
    label: string;
    value: string;
    disabled: boolean;
}

const Comment: FunctionComponent<CommentProps> = (props) => {
    const {control} = useFormContext();

    return (
        <TableRow>
            <TableCell colSpan={9}>
                <Controller name={props.defaultValue} control={control} defaultValue={props.value} render={({field}) => (
                    <TextField {...field}
                               label={props.label}
                               disabled={props.disabled}
                               variant="filled"
                               size="small"
                               rows={6}
                               multiline
                               fullWidth/>
                )}/>
            </TableCell>
        </TableRow>
    )
}


export default Comment;
