import React, { useEffect, useState } from "react";

function LazyLoader({ show = false, delay = 0 }) {
  const [showLoader, setShowLoader] = useState(show);

  useEffect(() => {
    let timeout;
    if (!show) {
      setShowLoader(false);
      return;
    }
    if (delay === 0) {
      setShowLoader(true);
    } else {
      timeout = setTimeout(() => setShowLoader(true), delay);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [show, delay]);

  return showLoader ? <h3>Loading...</h3> : null;
}

export default LazyLoader;
