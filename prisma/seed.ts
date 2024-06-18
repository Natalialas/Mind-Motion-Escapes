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

  const categoryWildlife = await prisma.category.create({
    data: {
      name: 'Wildlife Exploration',
    },
  });

  const categoryHeritage = await prisma.category.create({
    data: {
      name: 'Cultural Heritage',
    },
  });

  const categoryLuxury = await prisma.category.create({
    data: {
      name: 'Luxury Retreat',
    },
  });

  const toursData = [
    {
      name: 'Peak Pursuit',
      description:
        'Embark on a breathtaking journey to conquer the highest peaks of the Andes, where every step is a testament to your determination and the beauty of nature.',
      price: 3270,
      duration: 11,
      location: 'Andes Mountains, South America',
      photo: 'mountain_hiking.jpg',
      category: { connect: { id: categoryAdventure.id } },
      date: 'Jun 25 - Jul 05, 2025',
    },
    {
      name: 'Tropical Oasis Escape',
      description:
        'Immerse yourself in the serene beauty of a tropical paradise, where palm-fringed beaches meet crystal-clear waters, offering the perfect blend of relaxation and adventure.',
      price: 2895,
      duration: 5,
      location: 'Fiji Islands',
      photo: 'beach_relaxation.jpg',
      category: { connect: { id: categoryRelaxation.id } },
      date: 'Sep 20-24, 2025',
    },
    {
      name: 'Serengeti Wildlife Expedition',
      description:
        ' Dive into the heart of the Serengeti on an exhilarating safari expedition, immersing yourself in the mesmerizing diversity of wildlife and the untamed beauty of Africa iconic landscapes.',
      price: 1700,
      duration: 6,
      location: 'Serengeti National Park, Tanzania',
      photo: 'wildlife_safari.jpg',
      category: { connect: { id: categoryWildlife.id } },
      date: 'JUL 15-20, 2025',
    },
    {
      name: 'Eternal Rome',
      description:
        "Discover the timeless wonders of ancient Rome's historical landmarks, where every step echoes with rich cultural heritage and architectural marvels.",
      price: 1200,
      duration: 4,
      location: 'Rome, Italy',
      photo: 'historical_landmarks.jpg',
      category: { connect: { id: categoryHeritage.id } },
      date: 'OCT 21-24, 2024',
    },
    {
      name: 'Exclusive Island Getaway',
      description:
        'Indulge in unparalleled luxury on a secluded private island retreat amidst the turquoise waters of Bora Bora. Surrender to the allure of pristine beaches, lavish accommodations, and exquisite dining, where every moment is a celebration of opulence and tranquility.',
      price: 3200,
      duration: 5,
      location: 'Bora Bora, French Polynesia',
      photo: 'island_getaway.jpg',
      category: { connect: { id: categoryLuxury.id } },
      date: 'JUN 09-13, 2025',
    },
    {
      name: 'Surf Break',
      description:
        "Explore the surf culture of Waikiki Beach, Hawaii, with our 7-day surfing adventure. Learn to ride the waves on one of the world's most iconic beaches, surrounded by stunning natural beauty.",
      price: 1689,
      duration: 8,
      location: 'Hawaii, Waikiki Beach',
      photo: 'surf_break.jpg',
      category: { connect: { id: categoryAdventure.id } },
      date: 'JUN 09-16, 2025',
    },
    {
      name: 'Tropical Yoga',
      description:
        'Embark on a transformative journey with our Tropical Yoga Retreat on the serene shores of Seychelles. Reconnect with yourself through daily yoga sessions amidst stunning natural beauty.',
      price: 1359,
      duration: 4,
      location: 'Seychelles',
      photo: 'tropical_yoga.jpg',
      category: { connect: { id: categoryRelaxation.id } },
      date: 'JUN 09-12, 2025',
    },
    {
      name: 'Northern Lights Expedition',
      description:
        'Witness the magical phenomenon of the Northern Lights in the heart of Lapland. Traverse scenic landscapes and immerse yourself in Sami culture.',
      price: 1500,
      duration: 5,
      location: 'Lapland, Finland',
      photo: 'northern_lights.jpg',
      category: { connect: { id: categoryAdventure.id } },
      date: 'JAN 10-14, 2026',
    },
    {
      name: 'Amazon River Adventure',
      description:
        'Embark on an unforgettable journey into the Amazon rainforest. Explore rivers, encounter exotic wildlife, and learn from local guides.',
      price: 1800,
      duration: 8,
      location: 'Amazonia, Brazil',
      photo: 'amazon_river.jpg',
      category: { connect: { id: categoryWildlife.id } },
      date: 'MAR 15-22, 2026',
    },
    {
      name: 'Safari in Masai Mara',
      description:
        'Experience an exhilarating safari adventure in the heart of Masai Mara Reserve in Kenya. Witness vast herds of wildlife in their natural habitat.',
      price: 1379,
      duration: 9,
      location: 'Masai Mara, Kenya',
      photo: 'masai_mara_safari.jpg',
      category: { connect: { id: categoryWildlife.id } },
      date: 'FEB 20-28, 2026',
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
    { url: 'mountain_hiking.jpg', tourId: createdTours[0].id },
    { url: 'beach_relaxation.jpg', tourId: createdTours[1].id },
    { url: 'wildlife_safari.jpg', tourId: createdTours[2].id },
    { url: 'historical_landmarks.jpg', tourId: createdTours[3].id },
    { url: 'island_getaway.jpg', tourId: createdTours[4].id },
    { url: 'surf_break.jpg', tourId: createdTours[5].id },
    { url: 'tropical_yoga.jpg', tourId: createdTours[6].id },
    { url: 'northern_lights.jpg', tourId: createdTours[7].id },
    { url: 'amazon_river.jpg', tourId: createdTours[8].id },
    { url: 'masai_mara_safari.jpg', tourId: createdTours[9].id },
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

  await prisma.$disconnect();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
