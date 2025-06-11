import { Actor } from 'apify';
import fetch from 'node-fetch';

await Actor.init();

const input = await Actor.getInput();
const email = encodeURIComponent(input.email);
const token = input.token;

if (!email) {
  throw new Error('El campo "email" es obligatorio.');
}

if (!token) {
  throw new Error('El campo "token" es obligatorio.');
}

const apiUrl = `https://dashboard.verificaremails.com/myapi/email/validate/single?auth-token=${token}&term=${email}`;

const response = await fetch(apiUrl);
if (!response.ok) {
    throw new Error(`Error al llamar a la API externa: ${response.statusText}`);
}

const result = await response.json();

await Actor.pushData(result);
await Actor.exit();
