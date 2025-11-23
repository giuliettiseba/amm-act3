import {useQuery} from "@tanstack/react-query";
import {API_BASE_URL} from "@/utils/constants";
import {useAlertWithHaptics} from "@/hooks/useAlertWithHaptics";
import axios from "axios";

function useApiClient<T>(route: string, keys: string[], paramQuery?: { key: string; value: string | string[]  }) {
    const {showAlert} = useAlertWithHaptics();

    let url = `${API_BASE_URL}${route}`;
    if (paramQuery) {
        url = url + "?" + paramQuery.key + '=' + paramQuery.value;
    }

    const {data, error, isPending} =  useQuery({
        queryKey: keys,
        queryFn: async () => {
            const response = await axios.get<T>(url);
            return response.data;
        },
    })

    if (error) {
        showAlert('Error', 'No se pudieron cargar los datos. Por favor, inténtalo de nuevo más tarde.', 'error');
    }

    return {
        data,
        error,
        isPending,
    }
}

export default useApiClient;