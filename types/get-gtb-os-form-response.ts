import { TimeSpanProps } from '../components/elements/form/TimeSpan';
import { DividerProps } from '../components/elements/form/Divider';
import { CommentProps } from '../components/elements/form/Comment';
import { WeekAcquisitionListProps } from '../components/elements/form/WeekAcquisitionList';
import { NumberProps } from '../components/elements/form/Number';


interface TimeSpanStructure extends TimeSpanProps {
    type: 'timeSpan';
}

type TimeSpanValue = {
    from: string;
    to: number;
}

interface DividerStructure extends DividerProps {
    type: 'divider';
}


type DividerValue = void;


interface WeekAcquisitionListStructure extends WeekAcquisitionListProps {
    type: 'weekAcquisitionList';
}

type WeekAcquisitionListValue = {
    name: string;
    monday: number;
    tuesday: number;
    wednesday: number;
    thursday: number;
    friday: number;
    saturday: number;
    sunday: number;
}[];

interface CommentStructure extends CommentProps {
    type: 'comment';
}

type CommentValue = string;

export interface NumberStructure extends NumberProps {
    type: 'number';
}

type NumberValue = number;

export type GtbOsFormValues = Record<string, TimeSpanValue
    | DividerValue
    | WeekAcquisitionListValue
    | CommentValue
    | NumberValue>;

export type GtbOsFormStructure = (
    TimeSpanStructure
    | DividerStructure
    | WeekAcquisitionListStructure
    | NumberStructure
    | CommentStructure)[];

export interface GetGtbOsFormResponse {
    data: {
        values: GtbOsFormValues;
        structure: GtbOsFormStructure;
    };
    meta: {};
}

