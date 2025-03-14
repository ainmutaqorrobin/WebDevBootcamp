import axios from "axios";
import { useEffect, useState } from "react";

function toCapital(str) {
  return str[0].toUpperCase() + str.slice(1);
}
//Higher Order Components
export default function updateResource(Component, resourceUrl, resourceName) {
  return (props) => {
    const [initialResource, setinitialResource] = useState(null);
    const [resource, setResource] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourceUrl);
        setinitialResource(response.data);
        setResource(response.data);
      })();
    }, []);

    function onChange(updates) {
      setResource({ ...resource, ...updates });
    }

    async function onSave() {
      const response = await axios.post(resourceUrl, {
        [resourceName]: resource,
      });
      setinitialResource(response.data);
      setResource(response.data);
    }

    function onReset() {
      setResource(initialResource);
    }

    const resourceProps = {
      [resourceName]: resource,
      [`onChange${toCapital(resourceName)}`]: onChange,
      [`onSave${toCapital(resourceName)}`]: onSave,
      [`onReset${toCapital(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
}
