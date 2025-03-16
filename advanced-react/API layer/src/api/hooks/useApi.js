import { useState } from "react";
import { useApiStatus } from "./useApiStatus";
import { ERROR, PENDING, SUCCESS } from "../../const/api-status";

export function useApi(fn, config = {}) {
  const { initialData } = config;

  const [data, setData] = useState();
  const [error, setError] = useState();
  const { status, setStatus, ...otherStatuses } = useApiStatus();

  const exec = async (...args) => {
    try {
      setStatus(PENDING);
      const data = await fn(...args);
      setData(data);
      setStatus(SUCCESS);

      return {
        data,
        error: null,
      };
    } catch (error) {
      setError(error);
      setStatus(ERROR);
      return {
        error,
        data: null,
      };
    }
  };

  return {
    data,
    setData,
    status,
    setStatus,
    exec,
    ...otherStatuses,
  };
}
