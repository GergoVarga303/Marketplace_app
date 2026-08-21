import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { users, products } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: 'require',
});

async function seedUsers() {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      nickname VARCHAR(255) NOT NULL UNIQUE,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);

      return sql`
        INSERT INTO users (
          id,
          nickname,
          email,
          password
        )
        VALUES (
          ${user.id},
          ${user.nickname},
          ${user.email},
          ${hashedPassword}
        )
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedProducts() {
  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

      user_id UUID NOT NULL
        REFERENCES users(id),

      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      category VARCHAR(255) NOT NULL,
      price NUMERIC(10, 2) NOT NULL,
      image_url TEXT NOT NULL
    );
  `;

  const insertedProducts = await Promise.all(
    products.map(
      (product) => sql`
        INSERT INTO products (
          id,
          user_id,
          title,
          description,
          category,
          price,
          image_url
        )
        VALUES (
          ${product.id},
          ${product.user_id},
          ${product.title},
          ${product.description},
          ${product.category},
          ${product.price},
          ${product.image_url}
        )
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedProducts;
}

export async function GET() {
  try {
    await seedUsers();
    await seedProducts();

    return Response.json({
      message: 'Database seeded successfully',
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: 'Failed to seed database',
      },
      {
        status: 500,
      },
    );
  }
}