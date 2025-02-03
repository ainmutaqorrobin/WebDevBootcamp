import { useEffect } from "react";
import { useState } from "react";

function DataSourceRender({ render, getData = () => {} }) {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getData();
      setResource(response);
    })();
  }, [getData]);

  return render(resource);
}

export default DataSourceRender;
