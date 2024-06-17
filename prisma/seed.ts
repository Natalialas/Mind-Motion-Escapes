import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
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

  const toursData = [
    {
      name: 'Mountain Hiking',
      description: 'A thrilling hiking adventure in the mountains.',
      price: 500,
      duration: 7,
      location: 'Rocky Mountains',
      photo: 'mountain_hiking.jpg',
      categoryId: categoryAdventure.id,
      date: new Date('2025-03-09'),
    },
    {
      name: 'Beach Relaxation',
      description: 'Relax on the beautiful sandy beaches.',
      price: 300,
      duration: 5,
      location: 'Maldives',
      photo: 'beach_relaxation.jpg',
      categoryId: categoryRelaxation.id,
      date: new Date('2024-10-21'),
    },
  ];

  const createdTours = [];
  for (const tourData of toursData) {
    const createdTour = await prisma.tour.create({
      data: tourData,
    });
    createdTours.push(createdTour);
  }

  const photosData = [
    { url: 'mountain1.jpg', tourId: createdTours[0].id },
    { url: 'mountain2.jpg', tourId: createdTours[0].id },
    { url: 'beach1.jpg', tourId: createdTours[1].id },
    { url: 'beach2.jpg', tourId: createdTours[1].id },
  ];
  await prisma.photo.createMany({
    data: photosData,
  });

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

  const user2 = await prisma.user.create({
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

  await prisma.review.create({
    data: {
      rating: 5,
      comment: 'Amazing experience!',
      userId: user1.id,
      tourId: createdTours[0].id,
    },
  });

  const cartItem1 = await prisma.cartItem.create({
    data: {
      userId: user1.id,
      tourId: createdTours[0].id,
      numberOfPeople: 2,
      price: createdTours[0].price * 2,
      comment: 'Looking forward to this trip!',
    },
  });

  const cartItem2 = await prisma.cartItem.create({
    data: {
      userId: user1.id,
      tourId: createdTours[1].id,
      numberOfPeople: 1,
      price: createdTours[1].price,
      comment: "Can't wait for the beach!",
    },
  });

  await prisma.order.create({
    data: {
      clientName: 'Jane',
      clientSurname: 'Doe',
      email: 'jane.doe@example.com',
      phone: '123456789',
      address: '123 Main St, New York, NY',
      finalAmount: 800,
      userId: user1.id,
      status: 'Pending',
      items: {
        connect: [{ id: cartItem1.id }, { id: cartItem2.id }],
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
