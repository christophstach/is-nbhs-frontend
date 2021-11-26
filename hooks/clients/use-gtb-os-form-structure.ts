import useSWR from 'swr';
import { GtbOsFormStructureResponse } from '../../types/gtb-os-form-structure';


export function useGtbOsFormStructure(id: number) {
    const {
        data,
        error
    } = useSWR<GtbOsFormStructureResponse>(id ? `/data/gtb-os-form-structure.json?id=${id}` : null, {
        refreshInterval: 0
    });

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}
