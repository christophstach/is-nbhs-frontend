import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import TableRow from '@mui/material/TableRow';
import { TableCell, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Controller, useFormContext } from "react-hook-form";

export interface TimeSpanProps {
    name: string;
    label: string;
}

export const TimeSpan: FunctionComponent<TimeSpanProps> = (props) => {
    return (
        <TableRow>
            <TableCell>{props.label}</TableCell>
            <TableCell colSpan={8}>Test</TableCell>
        </TableRow>

    )
}

export interface SubFormProps {
    label: string;
}

export const SubForm: FunctionComponent<SubFormProps> = (props) => {
    return (
        <TableRow>
            <TableCell colSpan={9} sx={{backgroundColor: '#EEEEEE'}}>
                <h3>{props.label}</h3>
            </TableCell>
        </TableRow>
    );
}

export interface WeekAcquisitionItem {
    name: string;
    monday: number;
    tuesday: number;
    wednesday: number;
    thursday: number;
    friday: number;
    saturday: number;
    sunday: number;
}

export interface WeekAcquisitionMultipleProps {
    extendable: boolean;
    name: string;
    items: WeekAcquisitionItem[];
}

export const WeekAcquisitionMultiple: FunctionComponent<WeekAcquisitionMultipleProps> = (props) => {
    const [items, setItems] = useState<WeekAcquisitionItem[]>(props.items);
    const {control, watch} = useFormContext();
    const watchFields = watch();


    function handleAddItem() {
        const newItem = {
            name: '',
            monday: 0,
            tuesday: 0,
            wednesday: 0,
            thursday: 0,
            friday: 0,
            saturday: 0,
            sunday: 0
        };

        setItems([
            ...items,
            newItem
        ]);
    }


    return (
        <>
            {items.map((item, index) => {
                return (
                    <TableRow key={index}>
                        <TableCell sx={{width: '100%'}}>
                            <Controller name={`${props.name}.${index}.name`}
                                        control={control}
                                        defaultValue={item.name}
                                        render={({field}) => (
                                            <TextField {...field}
                                                       label="Name"
                                                       variant="filled"
                                                       size="small"
                                                       sx={{width: '100%'}}/>
                                        )}/>

                        </TableCell>
                        <TableCell>
                            <Controller name={`${props.name}.${index}.monday`}
                                        control={control}
                                        defaultValue={0}
                                        render={({field}) => (
                                            <TextField {...field}
                                                       label="Mo"
                                                       variant="filled"
                                                       size="small"
                                                       onChange={(e) => {
                                                           field.onChange(parseInt(e.target.value), 10);
                                                       }}
                                                       InputProps={{inputProps: {min: 0, step: 1}}}
                                                       type="number"
                                                       sx={{width: '80px'}}/>
                                        )}/>
                        </TableCell>
                        <TableCell>
                            <Controller name={`${props.name}.${index}.tuesday`}
                                        control={control}
                                        defaultValue={0}
                                        render={({field}) => (
                                            <TextField {...field}
                                                       label="Di"
                                                       variant="filled"
                                                       size="small"
                                                       onChange={(e) => field.onChange(parseInt(e.target.value), 10)}
                                                       InputProps={{inputProps: {min: 0, step: 1}}}
                                                       type="number"
                                                       sx={{width: '80px'}}/>
                                        )}/>
                        </TableCell>
                        <TableCell>
                            <Controller name={`${props.name}.${index}.wednesday`}
                                        control={control}
                                        defaultValue={0}
                                        render={({field}) => (
                                            <TextField {...field}
                                                       label="Mi"
                                                       variant="filled"
                                                       size="small"
                                                       onChange={(e) => field.onChange(parseInt(e.target.value), 10)}
                                                       InputProps={{inputProps: {min: 0, step: 1}}}
                                                       type="number"
                                                       sx={{width: '80px'}}/>
                                        )}/>
                        </TableCell>
                        <TableCell>
                            <Controller name={`${props.name}.${index}.thursday`}
                                        control={control}
                                        defaultValue={0}
                                        render={({field}) => (
                                            <TextField {...field}
                                                       label="Do"
                                                       variant="filled"
                                                       size="small"
                                                       onChange={(e) => field.onChange(parseInt(e.target.value), 10)}
                                                       InputProps={{inputProps: {min: 0, step: 1}}}
                                                       type="number"
                                                       sx={{width: '80px'}}/>
                                        )}/>
                        </TableCell>
                        <TableCell>
                            <Controller name={`${props.name}.${index}.friday`}
                                        control={control}
                                        defaultValue={0}
                                        render={({field}) => (
                                            <TextField {...field}
                                                       label="fr"
                                                       variant="filled"
                                                       size="small"
                                                       onChange={(e) => field.onChange(parseInt(e.target.value), 10)}
                                                       InputProps={{inputProps: {min: 0, step: 1}}}
                                                       type="number"
                                                       sx={{width: '80px'}}/>
                                        )}/>
                        </TableCell>
                        <TableCell>
                            <Controller name={`${props.name}.${index}.saturday`}
                                        control={control}
                                        defaultValue={0}
                                        render={({field}) => (
                                            <TextField {...field}
                                                       label="Sa"
                                                       variant="filled"
                                                       size="small"
                                                       onChange={(e) => field.onChange(parseInt(e.target.value), 10)}
                                                       InputProps={{inputProps: {min: 0, step: 1}}}
                                                       type="number"
                                                       sx={{width: '80px'}}/>
                                        )}/>
                        </TableCell>
                        <TableCell>
                            <Controller name={`${props.name}.${index}.sunday`}
                                        control={control}
                                        defaultValue={0}
                                        render={({field}) => (
                                            <TextField {...field}
                                                       label="So"
                                                       variant="filled"
                                                       size="small"
                                                       onChange={(e) => field.onChange(parseInt(e.target.value), 10)}
                                                       InputProps={{inputProps: {min: 0, step: 1}}}
                                                       type="number"
                                                       sx={{width: '80px'}}/>
                                        )}/>
                        </TableCell>
                        <TableCell
                            sx={{verticalAlign: 'bottom'}}>
                            <strong style={{
                                display: 'block',
                                fontSize: '16px',
                                width: '80px',
                                padding: '21px 12px 3px 12px',
                                backgroundColor: '#EEEEEE',
                                textAlign: 'center',
                                borderRadius: '4px 4px 0 0',
                                borderBottom: '1px solid rgba(0, 0, 0, 0.42)'
                            }}>
                                {
                                    watchFields[props.name] && watchFields[props.name][index] ? (
                                        <>{
                                            watchFields[props.name][index].monday +
                                            watchFields[props.name][index].tuesday +
                                            watchFields[props.name][index].wednesday +
                                            watchFields[props.name][index].thursday +
                                            watchFields[props.name][index].friday +
                                            watchFields[props.name][index].saturday +
                                            watchFields[props.name][index].sunday
                                        }</>
                                    ) : (
                                        <>0</>
                                    )
                                }
                            </strong>
                        </TableCell>
                    </TableRow>
                );
            })}
            {props.extendable ? (
                <TableRow>
                    <TableCell colSpan={9}>
                        <Button color="primary" variant="contained" onClick={handleAddItem}>Eintrag hinzufügen</Button>
                    </TableCell>
                </TableRow>
            ) : (
                <></>
            )}
        </>
    );
}


export interface OneTimeAcquisitionProps {

}


export interface CommentProps {
    name: string;
    label: string;
}

export const Comment: FunctionComponent<CommentProps> = (props) => {
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
