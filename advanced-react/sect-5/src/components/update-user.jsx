import axios from "axios";
import { useEffect, useState } from "react";

function updateUser(Component, userId) {
  return (props) => {
    const [initialUser, setInitialUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setInitialUser(response.data);
        setUser(response.data);
      })();
    }, []);

    function onChangeUser(updates) {
      setUser({ ...user, ...updates });
    }

    async function onSaveUser() {
      const response = await axios.post(`/users/${userId}`, { user });
      setInitialUser(response.data);
      setUser(response.data);
    }

    function onResetUser() {
      setUser(initialUser);
    }

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    );
  };
}

export default updateUser;
