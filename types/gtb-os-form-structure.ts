import { TimeSpanProps } from '../components/elements/form/TimeSpan';
import { DividerProps } from '../components/elements/form/Divider';
import { CommentProps } from '../components/elements/form/Comment';
import { WeekAcquisitionListProps } from '../components/elements/form/WeekAcquisitionList';
import { NumberProps } from '../components/elements/form/Number';


interface TimeSpanElement extends TimeSpanProps {
    type: 'timeSpan';
}

interface DividerElement extends DividerProps {
    type: 'divider';
}

interface WeekAcquisitionMultipleElement extends WeekAcquisitionListProps {
    type: 'weekAcquisitionList';
}

interface CommentElement extends CommentProps {
    type: 'comment';
}

export interface NumberElement extends NumberProps {
    type: 'number';
}

export interface GtbOsFormStructureResponse {
    data: {
        elements: (
            TimeSpanElement
            | DividerElement
            | WeekAcquisitionMultipleElement
            | NumberElement
            | CommentElement)[];
    };
    meta: {};
}

