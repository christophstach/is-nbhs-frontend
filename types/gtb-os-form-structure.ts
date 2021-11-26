import { TimeSpanProps } from '../components/elements/form/TimeSpan';
import { SubFormProps } from '../components/elements/form/SubForm';
import { CommentProps } from '../components/elements/form/Comment';
import { WeekAcquisitionListProps } from '../components/elements/form/WeekAcquisitionList';


interface TimeSpanElement extends TimeSpanProps {
    type: 'timeSpan'
}

interface SubFormElement extends SubFormProps {
    type: 'subForm'
}

interface WeekAcquisitionMultipleElement extends WeekAcquisitionListProps {
    type: 'weekAcquisitionList'
}

interface CommentElement extends CommentProps {
    type: 'comment'
}

export interface GtbOsFormStructureResponse {
    data: {
        elements: (
            TimeSpanElement
            | SubFormElement
            | WeekAcquisitionMultipleElement
            | CommentElement)[];
    };
    meta: {};
}

