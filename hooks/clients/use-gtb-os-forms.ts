import useSWR from 'swr';
import { GtbOsFormsResponse } from '../../pages/forms/gtb-os';


export function useGtbOsForms() {
    const {
        data,
        error
    } = useSWR<GtbOsFormsResponse>('/data/gtb-os-forms.json');

    return {
        data,
        isLoading: !error && !data,
        isError: error
    };
}
