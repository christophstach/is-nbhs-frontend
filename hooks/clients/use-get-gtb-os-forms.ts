import useSWR from 'swr';
import { GetGtbOsFormsResponse } from '../../pages/forms/gtb-os';


export function useGetGtbOsForms() {
    const {
        data,
        error
    } = useSWR<GetGtbOsFormsResponse>('/data/get-gtb-os-forms.json');

    return {
        data,
        isLoading: !error && !data,
        isError: error
    };
}
