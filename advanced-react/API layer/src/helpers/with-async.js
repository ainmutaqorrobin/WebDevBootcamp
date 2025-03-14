export async function withAsync(fn) {
  try {
    if (typeof fn !== "function") {
      throw new Error("The arguments must be a function");
    }

    const { data } = await fn();

    return {
      response: data,
      error: null,
    };
  } catch (err) {
    return {
      error: err,
      response: null,
    };
  }
}
