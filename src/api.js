export const serverLogin = async (email, password) => {
  return await fetch("https://loft-taxi.glitch.me/auth", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => [data.success, data.token]);
};

export const serverRegistration = async (name, surname, email, password) => {
  return await fetch("https://loft-taxi.glitch.me/register", {
    method: "POST",
    body: JSON.stringify({ name, surname, email, password }),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => [data.success, data.token]);
};

export const serverPayment = async (payload) => {
  return await fetch("https://loft-taxi.glitch.me/card", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => data.success);
};

export const serverGetCard = (token) => {
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
    method: "GET",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  }).then((response) => response.json());
};

export const serverGetAddressList = () => {
  return fetch("https://loft-taxi.glitch.me/addressList", {
    method: "GET",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  }).then((response) => response.json());
};

export const serverGetRoute = async (from, to) => {
  return await fetch(
    `https://loft-taxi.glitch.me/route?address1=${from}&address2=${to}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());
};
