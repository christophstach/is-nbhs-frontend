import * as React from 'react';
import { FunctionComponent } from 'react';
import TableRow from '@mui/material/TableRow';
import { TableCell, TextField } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import { Controller, useFormContext } from 'react-hook-form';

export interface TimeSpanProps {
    name: string;
    label: string;
    from: { value: string, disabled: boolean };
    to: { value: string, disabled: boolean };
}

const TimeSpan: FunctionComponent<TimeSpanProps> = (props) => {
    const {control, setValue} = useFormContext();

    return (
        <TableRow>
            <TableCell>
                <strong>{props.label}</strong>
            </TableCell>
            <TableCell colSpan={4}>
                <Controller name={`${props.name}.from`}
                            control={control}
                            defaultValue={new Date(props.from.value)}
                            render={({field}) => (
                                <DatePicker
                                    mask="__.__.____"
                                    label="Von"
                                    disabled={props.from.disabled}
                                    {...field}
                                    onChange={(date) => {
                                        setValue(`${props.name}.from`, date);
                                    }}
                                    renderInput={(params: any) => {
                                        return (
                                            <TextField {...params}
                                                       required
                                                       sx={{width: '100%'}}
                                                       variant="filled"
                                                       size="small"
                                            />
                                        );
                                    }}
                                />
                            )}/>
            </TableCell>
            <TableCell colSpan={4}>
                <Controller name={`${props.name}.to`}
                            control={control}
                            defaultValue={new Date(props.to.value)}
                            render={({field}) => (
                                <DatePicker
                                    mask="__.__.____"
                                    label="Bis"
                                    disabled={props.to.disabled}
                                    {...field}
                                    onChange={(date) => {
                                        setValue(`${props.name}.to`, date);
                                    }}
                                    renderInput={(params: any) => {
                                        return (
                                            <TextField {...params}
                                                       required
                                                       sx={{width: '100%'}}
                                                       variant="filled"
                                                       size="small"
                                            />
                                        );
                                    }}
                                />
                            )}/>
            </TableCell>
        </TableRow>
    );
}


export default TimeSpan;
