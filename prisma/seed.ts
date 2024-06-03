import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Create categories
  const categoryAdventure = await prisma.category.create({
    data: {
      name: 'Adventure',
    },
  });

  const categoryRelaxation = await prisma.category.create({
    data: {
      name: 'Relaxation',
    },
  });

  // Create tours
  const tour1 = await prisma.tour.create({
    data: {
      name: 'Mountain Hiking',
      description: 'A thrilling hiking adventure in the mountains.',
      price: 500,
      duration: 7, // 7 days
      location: 'Rocky Mountains',
      photo: 'mountain_hiking.jpg',
      categoryId: categoryAdventure.id,
    },
  });

  const tour2 = await prisma.tour.create({
    data: {
      name: 'Beach Relaxation',
      description: 'Relax on the beautiful sandy beaches.',
      price: 300,
      duration: 5, // 5 days
      location: 'Maldives',
      photo: 'beach_relaxation.jpg',
      categoryId: categoryRelaxation.id,
    },
  });

  // Create photos
  await prisma.photo.createMany({
    data: [
      { url: 'mountain1.jpg', tourId: tour1.id },
      { url: 'mountain2.jpg', tourId: tour1.id },
      { url: 'beach1.jpg', tourId: tour2.id },
      { url: 'beach2.jpg', tourId: tour2.id },
    ],
  });

  // Create users
  const user1 = await prisma.user.create({
    data: {
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      phone: '123456789',
      country: 'USA',
      city: 'New York',
      role: 'USER',
      password: {
        create: {
          hashedPassword: 'hashed_password1',
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      name: 'Admin',
      surname: 'User',
      email: 'admin@example.com',
      phone: '987654321',
      country: 'USA',
      city: 'Los Angeles',
      role: 'ADMIN',
      password: {
        create: {
          hashedPassword: 'hashed_password2',
        },
      },
    },
  });

  // Create reviews
  await prisma.review.create({
    data: {
      rating: 5,
      comment: 'Amazing experience!',
      userId: user1.id,
      tourId: tour1.id,
    },
  });

  // Create bookings
  const booking1 = await prisma.booking.create({
    data: {
      tourId: tour1.id,
      userId: user1.id,
      status: 'Confirmed',
    },
  });

  // Create payments
  await prisma.payment.create({
    data: {
      amount: 500,
      method: 'Credit Card',
      status: 'Paid',
      bookingId: booking1.id,
    },
  });

  // Create orders
  await prisma.order.create({
    data: {
      clientName: 'Jane',
      clientSurname: 'Doe',
      email: 'jane.doe@example.com',
      phone: '123456789',
      address: '123 Main St, New York, NY',
      finalAmount: 800,
      tours: {
        connect: [{ id: tour1.id }, { id: tour2.id }],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
