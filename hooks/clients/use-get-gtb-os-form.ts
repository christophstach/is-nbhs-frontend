import useSWR from 'swr';
import { GetGtbOsFormResponse } from '../../types/get-gtb-os-form-response';


export function useGetGtbOsForm(id: number) {
    const {
        data,
        error
    } = useSWR<GetGtbOsFormResponse>(id ? `/data/get-gtb-os-form.json?id=${id}` : null, {
        refreshInterval: 0
    });

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}
