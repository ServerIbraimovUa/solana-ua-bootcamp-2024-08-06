import { Keypair } from '@solana/web3.js';

function generateVanityAddress(prefix: string): { keypair: Keypair, attempts: number } {
    let attempts = 0;

    while (true) {
        const keypair = Keypair.generate();
        const publicKey = keypair.publicKey.toBase58();
        attempts++;

        if (publicKey.includes(prefix)) {
            return { keypair, attempts };
        }
    }
}

const desiredPrefix = 'anza';
console.log(`Генерация адреса с префиксом: ${desiredPrefix}`);

const { keypair, attempts } = generateVanityAddress(desiredPrefix);

console.log(`Найденный адрес: ${keypair.publicKey.toBase58()}`);
console.log(`Закрытый ключ: ${keypair.secretKey.toString()}`);
console.log(`Количество попыток: ${attempts}`);
