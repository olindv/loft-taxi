const url = "https://loft-taxi.glitch.me";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const serverLogin = async (email, password) => {
  return await fetch(`${url}/auth`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers,
  })
    .then((response) => response.json())
    .then((data) => [data.success, data.token]);
};

export const serverRegistration = async (name, surname, email, password) => {
  return await fetch(`${url}/register`, {
    method: "POST",
    body: JSON.stringify({ name, surname, email, password }),
    headers,
  })
    .then((response) => response.json())
    .then((data) => [data.success, data.token]);
};

export const serverPayment = async (payload) => {
  return await fetch(`${url}/card`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers,
  })
    .then((response) => response.json())
    .then((data) => data.success);
};

export const serverGetCard = (token) => {
  return fetch(`${url}/card?token=${token}`, {
    method: "GET",
    headers,
  }).then((response) => response.json());
};

export const serverGetAddressList = () => {
  return fetch(`${url}/addressList`, {
    method: "GET",
    headers,
  }).then((response) => response.json());
};

export const serverGetRoute = async (from, to) => {
  return await fetch(`${url}/route?address1=${from}&address2=${to}`, {
    method: "GET",
    headers,
  }).then((response) => response.json());
};
