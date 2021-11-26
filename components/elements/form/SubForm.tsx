import * as React from 'react';
import { FunctionComponent } from 'react';
import TableRow from '@mui/material/TableRow';
import { TableCell } from '@mui/material';

export interface SubFormProps {
    label: string;
}

const SubForm: FunctionComponent<SubFormProps> = (props) => {
    return (
        <TableRow>
            <TableCell colSpan={9} sx={{backgroundColor: '#EEEEEE'}}>
                <h3>{props.label}</h3>
            </TableCell>
        </TableRow>
    );
}

export default SubForm;

