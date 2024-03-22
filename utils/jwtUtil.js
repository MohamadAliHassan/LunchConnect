import jwt from "jsonwebtoken";
import fs from "fs";
// import path, { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));

// const keysDir = path.join(__dirname, "../etc/secrets/");

// const privateKey = fs.readFileSync(keysDir + "private.pem");
// const publicKey = fs.readFileSync(keysDir + "public.pem");

const privateKey = process.env.PRIVATE_KEY.replace(/\\n/g, "\n");
const publicKey = process.env.PUBLIC_KEY.replace(/\\n/g, "\n");

export const createToken = (userid, res) => {
  console.log("signing token");
  const token = jwt.sign({ userid }, privateKey, {
    algorithm: "RS256",
    expiresIn: "15d",
  });
  console.log("token signed");

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
  });

  return token;
};

export const validateToken = (token) => {
  return jwt.verify(token, publicKey);
};
