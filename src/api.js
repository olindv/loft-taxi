export const serverLogin = async (email, password) => {
  return fetch("https://loft-taxi.glitch.me/auth", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => [data.success, data.token]);
};

export const serverRegistration = async (name, surname, email, password) => {
  return fetch("https://loft-taxi.glitch.me/register", {
    method: "POST",
    body: JSON.stringify({ name, surname, email, password }),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => [data.success, data.token]);
};

export const serverPayment = async (
  cardNumber,
  expiryDate,
  userName,
  cvcNumber
) => {
  return fetch("https://loft-taxi.glitch.me/card", {
    method: "POST",
    body: JSON.stringify({ cardNumber, expiryDate, userName, cvcNumber }),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => data.success);
};
