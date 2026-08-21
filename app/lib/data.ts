import postgres from 'postgres';
import { Product } from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getLatestListings(){
    return sql<Product[]>`
    SELECT id, title, description, category, price, image_url    FROM products
    LIMIT 3;
  `;
}
