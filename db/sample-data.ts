import { hashSync } from 'bcrypt-ts-edge';

const sampleData = {
  users: [
    {
      "id": "ckxyz123456789abcdef",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "emailVerified": "2024-02-06T12:30:45.123Z",
      "image": "https://example.com/images/john-doe.jpg",
      "password": hashSync('123456', 10),
      "role": "admin",
      "address": {
        "street": "123 Main St",
        "city": "New York",
        "state": "NY",
        "zip": "10001",
        "country": "USA"
      },
      "paymentMethod": "Visa **** 4242",
      "createdAt": "2024-02-01T08:15:30.456Z",
      "updatedAt": "2024-02-06T10:45:30.789Z"
    },
    {
      "id": "ckxyz987654321abcdefg",
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "emailVerified": null,
      "image": "https://example.com/images/jane-smith.jpg",
      "password": hashSync('123456', 10),
      "role": "user",
      "address": {
        "street": "456 Elm St",
        "city": "Los Angeles",
        "state": "CA",
        "zip": "90001",
        "country": "USA"
      },
      "paymentMethod": "MasterCard **** 1234",
      "createdAt": "2024-01-20T14:20:10.654Z",
      "updatedAt": "2024-02-06T11:25:30.123Z"
    },
    {
      "id": "ckxyz567890abcdef1234",
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "emailVerified": "2024-02-03T09:50:25.789Z",
      "image": "https://example.com/images/alice-johnson.jpg",
      "password": hashSync('123456', 10),
      "role": "moderator",
      "address": {
        "street": "789 Oak St",
        "city": "Chicago",
        "state": "IL",
        "zip": "60601",
        "country": "USA"
      },
      "paymentMethod": "PayPal",
      "createdAt": "2024-01-15T10:10:50.987Z",
      "updatedAt": "2024-02-06T12:00:45.456Z"
    }
  ]
  ,
  products: [
    {
      name: 'Polo Sporting Stretch Shirt',
      slug: 'polo-sporting-stretch-shirt',
      category: "Men's Dress Shirts",
      description: 'Classic Polo style with modern comfort',
      images: [
        '/assets/images/sample-products/p1-1.jpg',
        '/assets/images/sample-products/p1-2.jpg',
      ],
      price: 59.99,
      brand: 'Polo',
      rating: 4.5,
      numReviews: 10,
      stock: 5,
      isFeatured: true,
      banner: 'banner-1.jpg',
    },
    {
      name: 'Brooks Brothers Long Sleeved Shirt',
      slug: 'brooks-brothers-long-sleeved-shirt',
      category: "Men's Dress Shirts",
      description: 'Timeless style and premium comfort',
      images: [
        '/assets/images/sample-products/p2-1.jpg',
        '/assets/images/sample-products/p2-2.jpg',
      ],
      price: 85.9,
      brand: 'Brooks Brothers',
      rating: 4.2,
      numReviews: 8,
      stock: 10,
      isFeatured: true,
      banner: 'banner-2.jpg',
    },
    {
      name: 'Tommy Hilfiger Classic Fit Dress Shirt',
      slug: 'tommy-hilfiger-classic-fit-dress-shirt',
      category: "Men's Dress Shirts",
      description: 'A perfect blend of sophistication and comfort',
      images: [
        '/assets/images/sample-products/p3-1.jpg',
        '/assets/images/sample-products/p3-2.jpg',
      ],
      price: 99.95,
      brand: 'Tommy Hilfiger',
      rating: 4.9,
      numReviews: 3,
      stock: 0,
      isFeatured: false,
      banner: null,
    },
    {
      name: 'Calvin Klein Slim Fit Stretch Shirt',
      slug: 'calvin-klein-slim-fit-stretch-shirt',
      category: "Men's Dress Shirts",
      description: 'Streamlined design with flexible stretch fabric',
      images: [
        '/assets/images/sample-products/p4-1.jpg',
        '/assets/images/sample-products/p4-2.jpg',
      ],
      price: 39.95,
      brand: 'Calvin Klein',
      rating: 3.6,
      numReviews: 5,
      stock: 10,
      isFeatured: false,
      banner: null,
    },
    {
      name: 'Polo Ralph Lauren Oxford Shirt',
      slug: 'polo-ralph-lauren-oxford-shirt',
      category: "Men's Dress Shirts",
      description: 'Iconic Polo design with refined oxford fabric',
      images: [
        '/assets/images/sample-products/p5-1.jpg',
        '/assets/images/sample-products/p5-2.jpg',
      ],
      price: 79.99,
      brand: 'Polo',
      rating: 4.7,
      numReviews: 18,
      stock: 6,
      isFeatured: false,
      banner: null,
    },
    {
      name: 'Polo Classic Pink Hoodie',
      slug: 'polo-classic-pink-hoodie',
      category: "Men's Sweatshirts",
      description: 'Soft, stylish, and perfect for laid-back days',
      images: [
        '/assets/images/sample-products/p6-1.jpg',
        '/assets/images/sample-products/p6-2.jpg',
      ],
      price: 99.99,
      brand: 'Polo',
      rating: 4.6,
      numReviews: 12,
      stock: 8,
      isFeatured: true,
      banner: null,
    },
  ],
};

export default sampleData;
