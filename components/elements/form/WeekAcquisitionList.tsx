import * as React from 'react';
import { FunctionComponent } from 'react';
import { Controller, useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import TableRow from '@mui/material/TableRow';
import { TableCell, TextField } from '@mui/material';
import Button from '@mui/material/Button';


export interface WeekAcquisitionListItemProps {
    name?: { defaultValue: string; disabled: boolean; };
    monday?: { defaultValue: number; disabled: boolean; };
    tuesday?: { defaultValue: number; disabled: boolean; };
    wednesday?: { defaultValue: number; disabled: boolean; };
    thursday?: { defaultValue: number; disabled: boolean; };
    friday?: { defaultValue: number; disabled: boolean; };
    saturday?: { defaultValue: number; disabled: boolean; };
    sunday?: { defaultValue: number; disabled: boolean; };
}

const WeekAcquisitionListItem: FunctionComponent<WeekAcquisitionListItemProps & { keyName: string; }> = (props) => {
    const {control} = useFormContext();

    const watchFields = {
        monday: useWatch({control, name: `${props.keyName}.monday`}),
        tuesday: useWatch({control, name: `${props.keyName}.tuesday`}),
        wednesday: useWatch({control, name: `${props.keyName}.wednesday`}),
        thursday: useWatch({control, name: `${props.keyName}.thursday`}),
        friday: useWatch({control, name: `${props.keyName}.friday`}),
        saturday: useWatch({control, name: `${props.keyName}.saturday`}),
        sunday: useWatch({control, name: `${props.keyName}.sunday`})
    };

    console.log(watchFields)

    return (
        <TableRow>
            <TableCell sx={{width: '100%'}}>
                <Controller name={`${props.keyName}.name`}
                            control={control}
                            defaultValue={props.name?.defaultValue ? props.name.defaultValue : ''}
                            render={({field}) => (
                                <TextField {...field}
                                           label="Name"
                                           variant="filled"
                                           size="small"
                                           required
                                           disabled={props.name?.disabled}
                                           sx={{width: '100%'}}/>
                            )}/>

            </TableCell>
            <TableCell>
                <Controller name={`${props.keyName}.monday`}
                            control={control}
                            defaultValue={props.monday?.defaultValue ? props.monday.defaultValue : 0}
                            render={({field}) => (
                                <TextField {...field}
                                           label="Mo"
                                           required
                                           variant="filled"
                                           size="small"
                                           onChange={(e) => {
                                               if (e.target.value === '') {
                                                   field.onChange(0);
                                               } else {
                                                   field.onChange(parseInt(e.target.value), 10);
                                               }
                                           }}
                                           InputProps={{inputProps: {min: 0, step: 1}}}
                                           type="number"
                                           disabled={props.monday?.disabled}
                                           sx={{width: '80px'}}/>
                            )}/>
            </TableCell>
            <TableCell>
                <Controller name={`${props.keyName}.tuesday`}
                            control={control}
                            defaultValue={props.tuesday?.defaultValue ? props.tuesday.defaultValue : 0}
                            render={({field}) => (
                                <TextField {...field}
                                           label="Di"
                                           required
                                           variant="filled"
                                           size="small"
                                           onChange={(e) => {
                                               if (e.target.value === '') {
                                                   field.onChange(0);
                                               } else {
                                                   field.onChange(parseInt(e.target.value), 10);
                                               }
                                           }}
                                           InputProps={{inputProps: {min: 0, step: 1}}}
                                           type="number"
                                           disabled={props.tuesday?.disabled}
                                           sx={{width: '80px'}}/>
                            )}/>
            </TableCell>
            <TableCell>
                <Controller name={`${props.keyName}.wednesday`}
                            control={control}
                            defaultValue={props.wednesday?.defaultValue ? props.wednesday.defaultValue : 0}
                            render={({field}) => (
                                <TextField {...field}
                                           label="Mi"
                                           required
                                           variant="filled"
                                           size="small"
                                           onChange={(e) => {
                                               if (e.target.value === '') {
                                                   field.onChange(0);
                                               } else {
                                                   field.onChange(parseInt(e.target.value), 10);
                                               }
                                           }}
                                           InputProps={{inputProps: {min: 0, step: 1}}}
                                           type="number"
                                           disabled={props.wednesday?.disabled}
                                           sx={{width: '80px'}}/>
                            )}/>
            </TableCell>
            <TableCell>
                <Controller name={`${props.keyName}.thursday`}
                            control={control}
                            defaultValue={props.thursday?.defaultValue ? props.thursday.defaultValue : 0}
                            render={({field}) => (
                                <TextField {...field}
                                           label="Do"
                                           required
                                           variant="filled"
                                           size="small"
                                           onChange={(e) => {
                                               if (e.target.value === '') {
                                                   field.onChange(0);
                                               } else {
                                                   field.onChange(parseInt(e.target.value), 10);
                                               }
                                           }}
                                           InputProps={{inputProps: {min: 0, step: 1}}}
                                           type="number"
                                           disabled={props.thursday?.disabled}
                                           sx={{width: '80px'}}/>
                            )}/>
            </TableCell>
            <TableCell>
                <Controller name={`${props.keyName}.friday`}
                            control={control}
                            defaultValue={props.friday?.defaultValue ? props.friday.defaultValue : 0}
                            render={({field}) => (
                                <TextField {...field}
                                           label="fr"
                                           required
                                           variant="filled"
                                           size="small"
                                           onChange={(e) => {
                                               if (e.target.value === '') {
                                                   field.onChange(0);
                                               } else {
                                                   field.onChange(parseInt(e.target.value), 10);
                                               }
                                           }}
                                           InputProps={{inputProps: {min: 0, step: 1}}}
                                           type="number"
                                           disabled={props.friday?.disabled}
                                           sx={{width: '80px'}}/>
                            )}/>
            </TableCell>
            <TableCell>
                <Controller name={`${props.keyName}.saturday`}
                            control={control}
                            defaultValue={props.saturday?.defaultValue ? props.saturday.defaultValue : 0}
                            render={({field}) => (
                                <TextField {...field}
                                           label="Sa"
                                           required
                                           variant="filled"
                                           size="small"
                                           onChange={(e) => {
                                               if (e.target.value === '') {
                                                   field.onChange(0);
                                               } else {
                                                   field.onChange(parseInt(e.target.value), 10);
                                               }
                                           }}
                                           InputProps={{inputProps: {min: 0, step: 1}}}
                                           type="number"
                                           disabled={props.saturday?.disabled}
                                           sx={{width: '80px'}}/>
                            )}/>
            </TableCell>
            <TableCell>
                <Controller name={`${props.keyName}.sunday`}
                            control={control}
                            defaultValue={props.sunday?.defaultValue ? props.sunday.defaultValue : 0}
                            render={({field}) => (
                                <TextField {...field}
                                           label="So"
                                           required
                                           variant="filled"
                                           size="small"
                                           onChange={(e) => {
                                               if (e.target.value === '') {
                                                   field.onChange(0);
                                               } else {
                                                   field.onChange(parseInt(e.target.value), 10);
                                               }
                                           }}
                                           InputProps={{inputProps: {min: 0, step: 1}}}
                                           type="number"
                                           disabled={props.sunday?.disabled}
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
                        watchFields ? (
                            <>{
                                (watchFields.monday ? watchFields.monday : 0) +
                                (watchFields.tuesday ? watchFields.tuesday : 0) +
                                (watchFields.wednesday ? watchFields.wednesday : 0) +
                                (watchFields.thursday ? watchFields.thursday : 0) +
                                (watchFields.friday ? watchFields.friday : 0) +
                                (watchFields.saturday ? watchFields.saturday : 0) +
                                (watchFields.sunday ? watchFields.sunday : 0)
                            }</>
                        ) : (
                            <>0</>
                        )
                    }
                </strong>
            </TableCell>
        </TableRow>
    );
}

export interface WeekAcquisitionListProps {
    extendable: boolean;
    name: string;
    items: WeekAcquisitionListItemProps[];
}


const WeekAcquisitionList: FunctionComponent<WeekAcquisitionListProps> = (props) => {
    const {control} = useFormContext();
    const {fields, append} = useFieldArray({
        control,
        name: props.name,
    });

    function handleAddItem() {
        append({
            name: '',
            monday: 0,
            tuesday: 0,
            wednesday: 0,
            thursday: 0,
            friday: 0,
            saturday: 0,
            sunday: 0
        });
    }


    return (
        <>
            {fields.map((field, index) => {
                const item = props.items[index];

                return (
                    <WeekAcquisitionListItem key={field.id}
                                             keyName={`${props.name}.${index}`}
                                             {...item} />
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
