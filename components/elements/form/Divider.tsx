import * as React from 'react';
import { FunctionComponent } from 'react';
import TableRow from '@mui/material/TableRow';
import { TableCell } from '@mui/material';

export interface DividerProps {
    label: string;
}

const Divider: FunctionComponent<DividerProps> = (props) => {
    return (
        <TableRow>
            <TableCell colSpan={9} sx={{backgroundColor: '#EEEEEE'}}>
                <h3>{props.label}</h3>
            </TableCell>
        </TableRow>
    );
}

export default Divider;

