/**
 * Sets a value in the session storage.
 * @param key - The key to set the value under.
 * @param value - The value to be stored.
 */
export const setSessionStorage = (key: string, value: unknown): void => {
  if (typeof sessionStorage !== "undefined") {
    const serializedValue = JSON.stringify(value);
    sessionStorage.setItem(key, serializedValue);
  }
};

/**
 * Retrieves the value from session storage based on the provided key.
 * @param key - The key used to retrieve the value from session storage.
 * @returns The value retrieved from session storage, or null if the value is not found or cannot be parsed.
 */
export const getSessionStorage = (key: string): unknown | null => {
  if (typeof sessionStorage !== "undefined") {
    const serializedValue = sessionStorage.getItem(key);
    if (typeof serializedValue === "string") {
      return JSON.parse(serializedValue);
    }
  }
  return null;
};

/**
 * Removes an item from the session storage.
 * @param key - The key of the item to remove.
 */
export const removeSessionStorage = (key: string): void => {
  if (typeof sessionStorage !== "undefined") {
    sessionStorage.removeItem(key);
  }
};

export const setLocalStorage = (key: string, value: unknown) => {
  // check if local storage is available
  if (typeof localStorage !== "undefined") {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  }
};

export const getLocalStorage = (key: string): unknown | null => {
  if (typeof localStorage !== "undefined") {
    const serializedValue = localStorage.getItem(key);
    if (typeof serializedValue === "string") {
      return JSON.parse(serializedValue);
    }
  }
  return null;
};

export const removeLocalStorage = (key: string): void => {
  if (typeof localStorage !== "undefined") {
    localStorage.removeItem(key);
  }
};
