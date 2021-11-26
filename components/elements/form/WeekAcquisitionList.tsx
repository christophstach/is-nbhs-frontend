import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TableRow from '@mui/material/TableRow';
import { TableCell, TextField } from '@mui/material';
import Button from '@mui/material/Button';

export interface WeekAcquisitionListItem {
    name: { value: string; disabled: boolean; };
    monday: { value: number; disabled: boolean; };
    tuesday: { value: number; disabled: boolean; };
    wednesday: { value: number; disabled: boolean; };
    thursday: { value: number; disabled: boolean; };
    friday: { value: number; disabled: boolean; };
    saturday: { value: number; disabled: boolean; };
    sunday: { value: number; disabled: boolean; };
}

export interface WeekAcquisitionListProps {
    extendable: boolean;
    name: string;
    items: WeekAcquisitionListItem[];
}

const WeekAcquisitionList: FunctionComponent<WeekAcquisitionListProps> = (props) => {
    const [items, setItems] = useState<WeekAcquisitionListItem[]>(props.items);
    const {control, watch} = useFormContext();
    const watchFields = watch();


    function handleAddItem() {
        const newItem = {
            name: {value: '', disabled: false},
            monday: {value: 0, disabled: false},
            tuesday: {value: 0, disabled: false},
            wednesday: {value: 0, disabled: false},
            thursday: {value: 0, disabled: false},
            friday: {value: 0, disabled: false},
            saturday: {value: 0, disabled: false},
            sunday: {value: 0, disabled: false}
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
                                        defaultValue={item.name.value}
                                        render={({field}) => (
                                            <TextField {...field}
                                                       label="Name"
                                                       variant="filled"
                                                       size="small"
                                                       disabled={item.name.disabled}
                                                       sx={{width: '100%'}}/>
                                        )}/>

                        </TableCell>
                        <TableCell>
                            <Controller name={`${props.name}.${index}.monday`}
                                        control={control}
                                        defaultValue={item.monday.value}
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
                                                       disabled={item.monday.disabled}
                                                       sx={{width: '80px'}}/>
                                        )}/>
                        </TableCell>
                        <TableCell>
                            <Controller name={`${props.name}.${index}.tuesday`}
                                        control={control}
                                        defaultValue={item.tuesday.value}
                                        render={({field}) => (
                                            <TextField {...field}
                                                       label="Di"
                                                       variant="filled"
                                                       size="small"
                                                       onChange={(e) => field.onChange(parseInt(e.target.value), 10)}
                                                       InputProps={{inputProps: {min: 0, step: 1}}}
                                                       type="number"
                                                       disabled={item.tuesday.disabled}
                                                       sx={{width: '80px'}}/>
                                        )}/>
                        </TableCell>
                        <TableCell>
                            <Controller name={`${props.name}.${index}.wednesday`}
                                        control={control}
                                        defaultValue={item.wednesday.value}
                                        render={({field}) => (
                                            <TextField {...field}
                                                       label="Mi"
                                                       variant="filled"
                                                       size="small"
                                                       onChange={(e) => field.onChange(parseInt(e.target.value), 10)}
                                                       InputProps={{inputProps: {min: 0, step: 1}}}
                                                       type="number"
                                                       disabled={item.wednesday.disabled}
                                                       sx={{width: '80px'}}/>
                                        )}/>
                        </TableCell>
                        <TableCell>
                            <Controller name={`${props.name}.${index}.thursday`}
                                        control={control}
                                        defaultValue={item.thursday.value}
                                        render={({field}) => (
                                            <TextField {...field}
                                                       label="Do"
                                                       variant="filled"
                                                       size="small"
                                                       onChange={(e) => field.onChange(parseInt(e.target.value), 10)}
                                                       InputProps={{inputProps: {min: 0, step: 1}}}
                                                       type="number"
                                                       disabled={item.thursday.disabled}
                                                       sx={{width: '80px'}}/>
                                        )}/>
                        </TableCell>
                        <TableCell>
                            <Controller name={`${props.name}.${index}.friday`}
                                        control={control}
                                        defaultValue={item.friday.value}
                                        render={({field}) => (
                                            <TextField {...field}
                                                       label="fr"
                                                       variant="filled"
                                                       size="small"
                                                       onChange={(e) => field.onChange(parseInt(e.target.value), 10)}
                                                       InputProps={{inputProps: {min: 0, step: 1}}}
                                                       type="number"
                                                       disabled={item.friday.disabled}
                                                       sx={{width: '80px'}}/>
                                        )}/>
                        </TableCell>
                        <TableCell>
                            <Controller name={`${props.name}.${index}.saturday`}
                                        control={control}
                                        defaultValue={item.saturday.value}
                                        render={({field}) => (
                                            <TextField {...field}
                                                       label="Sa"
                                                       variant="filled"
                                                       size="small"
                                                       onChange={(e) => field.onChange(parseInt(e.target.value), 10)}
                                                       InputProps={{inputProps: {min: 0, step: 1}}}
                                                       type="number"
                                                       disabled={item.saturday.disabled}
                                                       sx={{width: '80px'}}/>
                                        )}/>
                        </TableCell>
                        <TableCell>
                            <Controller name={`${props.name}.${index}.sunday`}
                                        control={control}
                                        defaultValue={item.sunday.value}
                                        render={({field}) => (
                                            <TextField {...field}
                                                       label="So"
                                                       variant="filled"
                                                       size="small"
                                                       onChange={(e) => field.onChange(parseInt(e.target.value), 10)}
                                                       InputProps={{inputProps: {min: 0, step: 1}}}
                                                       type="number"
                                                       disabled={item.sunday.disabled}
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

export default WeekAcquisitionList;
