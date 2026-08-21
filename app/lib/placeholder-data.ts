// This file contains placeholder data used to seed the development database.

const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    nickname: 'autoparts',
    email: 'autoparts@example.com',
    password: '123456',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    nickname: 'garage',
    email: 'garage@example.com',
    password: '123456',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    nickname: 'motorstore',
    email: 'motorstore@example.com',
    password: '123456',
  },
];

const products = [
  {
    id: 'a1111111-1111-4111-8111-111111111111',
    user_id: users[0].id,
    title: 'Front Brake Pad Set',
    description:
      'Replacement front brake pads suitable for everyday passenger vehicles.',
    category: 'Brakes',
    price: 39.99,
    image_url: '/products/front-brake-pads.jpg',
  },
  {
    id: 'a2222222-2222-4222-8222-222222222222',
    user_id: users[0].id,
    title: 'Engine Oil Filter',
    description:
      'Replacement oil filter designed to remove contaminants from engine oil.',
    category: 'Filters',
    price: 8.99,
    image_url: '/products/oil-filter.jpg',
  },
  {
    id: 'a3333333-3333-4333-8333-333333333333',
    user_id: users[1].id,
    title: 'Air Filter',
    description:
      'Engine air filter for preventing dust and dirt from entering the intake system.',
    category: 'Filters',
    price: 14.99,
    image_url: '/products/air-filter.jpg',
  },
  {
    id: 'a4444444-4444-4444-8444-444444444444',
    user_id: users[1].id,
    title: 'Front Shock Absorber',
    description:
      'Replacement front shock absorber for improved suspension stability.',
    category: 'Suspension',
    price: 64.99,
    image_url: '/products/front-shock-absorber.jpg',
  },
  {
    id: 'a5555555-5555-4555-8555-555555555555',
    user_id: users[2].id,
    title: '12V Car Battery 70Ah',
    description:
      'Standard 12V 70Ah starter battery for passenger vehicles.',
    category: 'Electrical',
    price: 109.99,
    image_url: '/products/car-battery.jpg',
  },
  {
    id: 'a6666666-6666-4666-8666-666666666666',
    user_id: users[2].id,
    title: 'H7 Headlight Bulb',
    description:
      'Standard H7 halogen replacement bulb for vehicle headlights.',
    category: 'Lighting',
    price: 9.99,
    image_url: '/products/h7-bulb.jpg',
  },
];

export { users, products };