import { cookies } from "next/headers";

export const setCookie = (key: string, value: unknown): void => {
  if (typeof cookies !== "undefined") {
    const serializedValue = JSON.stringify(value);
    cookies().set(key, serializedValue, { path: "/" });
  }
};

export const getCookie = (key: string): unknown | null => {
  if (typeof cookies !== "undefined") {
    const serializedValue = cookies().get(key);
    if (typeof serializedValue === "string") {
      return JSON.parse(serializedValue);
    }
  }
  return null;
};

export const removeCookie = (key: string): void => {
  if (typeof cookies !== "undefined") {
    cookies().delete(key);
  }
};
