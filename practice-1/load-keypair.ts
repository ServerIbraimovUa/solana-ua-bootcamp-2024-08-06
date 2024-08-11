import "dotenv/config";
import { Keypair } from "@solana/web3.js";

if (!process.env["SECRET_KEY"]) {
  process.exit(1);
}

const secretKey = Uint8Array.from(JSON.parse(process.env["SECRET_KEY_TWO"]));
const keypair = Keypair.fromSecretKey(secretKey);

console.log(
  `✅ Loaded keypair securely! Public key is: ${keypair.publicKey.toBase58()}`
);
