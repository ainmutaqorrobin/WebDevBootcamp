import { useMemo, useState } from "react";
import { defaultApiStatus, IDLE } from "../../const/api-status";

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const prepareStatuses = (currentStatus) => {
  const statuses = {};
  for (const status of defaultApiStatus) {
    const normalisedStatus = capitalize(status.toLowerCase());
    const normalisedStatusKey = `is${normalisedStatus}`;

    statuses[normalisedStatusKey] = status === currentStatus;
  }
  return statuses;
};

export const useApiStatus = (currentStatus = IDLE) => {
  const [status, setStatus] = useState(currentStatus);
  const statuses = useMemo(() => prepareStatuses(status), [status]);

  return {
    status,
    setStatus,
    ...statuses,
  };
};
