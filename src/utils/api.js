import axios from "axios";
const url = "http://127.0.0.1:8000";
const USER_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNmNiOGMwMDBjMTA4YjU1ZDZhY2UwZmY1NTU5YjM1YTA3MjRmYjhjNzJhYTk4ZTcyNDkzMTIzMWRjMTJjYTRlNzJlZWI5NGM3NmFiODY0ZTEiLCJpYXQiOjE2MzYwNjQ0MzYuMzIyNjY4LCJuYmYiOjE2MzYwNjQ0MzYuMzIyNjc1LCJleHAiOjE2Njc2MDA0MzYuMTQyMjgyLCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.R3lGTkUItR4nMFCLX1rOYbyEiMd3ZHJG0NZZXxiu-21IJ_RTPdhYuTzEqxZNH9Xb5sZOIRXNGKtyCrEnjciDAPILja7oxtyoQ97uXH-nSj0dTZR2hPdYr51FBjBgmTbHbSyEgQXbl1-QF3mRnNIl0Ae-h9gb3TL-M6Xe0aFA4PGB8hfYx1KuuxLnzaHsbyoL2AUmAqQv7vHqrf95Z9UgjdCtA2GG-C0uTxOm914AqyUW8BwOB7p1viJbQkFoCYplkblTI-10KsqaSQ7OwIMx7AVBYfGis7_mUetjwIwYyObfbBnmarHgp-bvdNlmxU9fQi4O_PEpz0UmOGMfkbwb73cn0gKINXQYFwnDu114kplH-3vhc4xboA-ebBJW2LSAaLlYAK1SojaTDyGKXkgrwzSR7YNuACa5l5Qm-Eq2-4rFg6wtyMAlb1FU7EyZEXKoZj3efFCITEURhS1ZSEUYUdthkJXOcGrrH7-s9h-6ugqNhRX_xv2I3ANDNLU47sAKRADBnxV65DJQIHc2Z9E-EkJ-7TPNVQomQm5ygK5ApoSe1OdbJ-F4rAKnt8-4KNtlpIeY9uBHnRODY7VckcMgXxy6HbxulqVfeiRllU1EBnSL9cfrIRzl0WfgjwfcHAldF1_PxT1LDc-OZQ5tdstJWhrzkFlGExQ_Cl3IiWGvHBw";

const data = {
  grant_type: "password",
  client_id: "2",
  client_secret: "uCtsSinazkTBfkU9L5Nf1HcxIaLIg9hje6p9qEIw",
  username: "kazouya25@gmail.com",
  password: "12345678",
};



export function Login(){
    return axios.post(`${url}/login`, {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          // Authorization: AuthStr,
        },
      });
}





const AuthStr = "Bearer ".concat(USER_TOKEN);

export function getUser() {
  return axios.get(`${url}/api/user`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: AuthStr,
    },
  });
}
export function getAllProducts() {
  return axios.get(`${url}/api/products`);
}
