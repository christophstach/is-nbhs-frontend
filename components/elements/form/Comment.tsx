import * as React from 'react';
import { FunctionComponent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TableRow from '@mui/material/TableRow';
import { TableCell, TextField } from '@mui/material';


export interface CommentProps {
    name: string;
    label: string;
    disabled: boolean;
}

const Comment: FunctionComponent<CommentProps> = (props) => {
    const {control} = useFormContext();

    return (
        <>
            <TableRow>
                <TableCell colSpan={9}>
                    <Controller name={props.name} control={control} defaultValue="" render={({field}) => (
                        <TextField {...field}
                                   label={props.label}
                                   variant="filled"
                                   size="small"
                                   rows={6}
                                   multiline
                                   fullWidth/>
                    )}/>
                </TableCell>
            </TableRow>
        </>
    )
}


export default Comment;
