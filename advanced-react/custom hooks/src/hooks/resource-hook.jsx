import { useEffect, useState } from "react";
import axios from "axios";

export function useResource(resourceUrl) {
  const [user, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  return user;
}
