import useSWR from 'swr';
import { AreasAllocateResponse } from '../../pages/areas/areas-allocate';


export function useAreasAllocate() {
    const {
        data,
        error
    } = useSWR<AreasManageResponse>('/data/areas-allocate.json');

    return {
        data,
        isLoading: !error && !data,
        isError: error
    };
}
