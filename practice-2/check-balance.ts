
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
console.log(`⚡️ Connected to devnet`);

const publicKey = new PublicKey("7jdq2a1CNp3MaM6q7Nxq9izQiTDYvC6CUdJ4vrNHanza");
const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 The balance for the wallet at address ${publicKey} is: ${balanceInSOL}`
);
