import { useEffect, useState } from "react";
import axios from "axios";

export function useCurrentUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);

  return user;
}

