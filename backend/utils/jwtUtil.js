import Jwt from "jsonwebtoken";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const keysDir = path.join(__dirname, "../config/keys/");

const privateKey = fs.readFileSync(keysDir + "private.pem");
const publicKey = fs.readFileSync(keysDir + "public.pem");

const createToken = (payload, res) => {
  const token = Jwt.sign(payload, privateKey, { algorithm: "RS256", expiresIn: "15d" });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
  })
}

const validateToken = (token) => {
  return Jwt.verify(token, publicKey);
}

export default { createToken, validateToken };
