import useSWR from 'swr';
import { AreasManageResponse } from '../../pages/areas/areas-manage';


export function useAreasManage() {
    const {
        data,
        error
    } = useSWR<AreasManageResponse>('/data/areas-manage.json');

    return {
        data,
        isLoading: !error && !data,
        isError: error
    };
}
