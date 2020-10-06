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

export const serverPayment = async (
  cardNumber,
  expiryDate,
  userName,
  cvcNumber
) => {
  return await fetch("https://loft-taxi.glitch.me/card", {
    method: "POST",
    body: JSON.stringify({ cardNumber, expiryDate, userName, cvcNumber }),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => data.success);
};

export const serverGetCard = async (
  cardNumber,
  expiryDate,
  userName,
  cvcNumber,
  token
) => {
  return await fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
    method: "GET",
    body: JSON.stringify({
      cardNumber,
      expiryDate,
      userName,
      cvcNumber,
      token,
    }),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => data.success);
};

export const serverGetAddressList = async () => {
  return await fetch("https://loft-taxi.glitch.me/addressList", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => data.success);
};

export const serverGetRoute = async (from, to) => {
  return await fetch(
    `https://loft-taxi.glitch.me/route?address1=${from}&address2=${to}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => data.success);
};
