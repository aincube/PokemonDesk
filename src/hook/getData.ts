import { useEffect, useState } from 'react';
import req from '../utils/request';

interface IuseData<T> {
  data: T;
  isLoading: boolean;
  isError?: boolean;
}

const useData = <T>(endpoint: string, query: object, deps: any[] = []): IuseData<T> => {
  const [data, setData] = useState<T>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const result = await req(endpoint, query);

        setData(result);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
