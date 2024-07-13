import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.review.deleteMany({});
  await prisma.order.deleteMany({});

  await prisma.photo.deleteMany({});
  await prisma.tour.deleteMany({});
  await prisma.category.deleteMany({});

  await prisma.user.deleteMany({});
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
      dat: 'Jun 25 - Jul 05, 2025',
      photos: {
        create: [
          { url: 'Amazon River Adventure/amazon1.jpg' },
          { url: 'Amazon River Adventure/amazon2.jpg' },
          { url: 'Amazon River Adventure/amazon3.jpg' },
          { url: 'Amazon River Adventure/amazon4.jpg' },
          { url: 'Amazon River Adventure/amazon5.jpg' },
        ],
      },
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
      dat: 'Sep 20-24, 2025',
      photos: {
        create: [
          { url: 'Tropical Oasis Escape/oasis1.jpg' },
          { url: 'Tropical Oasis Escape/oasis2.jpg' },
          { url: 'Tropical Oasis Escape/oasis3.jpg' },
          { url: 'Tropical Oasis Escape/oasis4.jpg' },
          { url: 'Tropical Oasis Escape/oasis5.jpg' },
        ],
      },
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
      dat: 'Jul 15-20, 2025',
      photos: {
        create: [
          { url: 'Serengeti Wildlife Expedition/wildlife1.jpg' },
          { url: 'Serengeti Wildlife Expedition/wildlife2.jpg' },
          { url: 'Serengeti Wildlife Expedition/wildlife3.jpg' },
          { url: 'Serengeti Wildlife Expedition/wildlife4.jpg' },
          { url: 'Serengeti Wildlife Expedition/wildlife5.jpg' },
        ],
      },
    },
    {
      name: 'Eternal Rome',
      description:
        "Discover the timeless wonders of ancient Rome's historical landmarks, where every step echoes with rich cultural heritage and architectural marvels.",
      price: 1200,
      duration: 4,
      location: ' ',
      photo: 'historical_landmarks.jpg',
      category: { connect: { id: categoryHeritage.id } },
      dat: 'Oct 21-24, 2024',
      photos: {
        create: [
          { url: 'Eternal Rome/rome1.jpg' },
          { url: 'Eternal Rome/rome2.jpg' },
          { url: 'Eternal Rome/rome3.jpg' },
          { url: 'Eternal Rome/rome4.jpg' },
          { url: 'Eternal Rome/rome5.jpg' },
        ],
      },
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
      dat: 'Jun 09-13, 2025',
      photos: {
        create: [
          { url: 'Exclusive Island Getaway/island1.jpg' },
          { url: 'Exclusive Island Getaway/island2.jpg' },
          { url: 'Exclusive Island Getaway/island3.jpg' },
          { url: 'Exclusive Island Getaway/island4.jpg' },
          { url: 'Exclusive Island Getaway/island5.jpg' },
        ],
      },
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
      dat: 'Jun 09-16, 2025',
      photos: {
        create: [
          { url: 'Surf Break/surf1.jpg' },
          { url: 'Surf Break/surf2.jpg' },
          { url: 'Surf Break/surf3.jpg' },
          { url: 'Surf Break/surf4.jpg' },
          { url: 'Surf Break/surf5.jpg' },
        ],
      },
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
      dat: 'Jun 09-12, 2025',
      photos: {
        create: [
          { url: 'Tropical Yoga/yoga1.jpg' },
          { url: 'Tropical Yoga/yoga2.jpg' },
          { url: 'Tropical Yoga/yoga3.jpg' },
          { url: 'Tropical Yoga/yoga4.jpg' },
          { url: 'Tropical Yoga/yoga5.jpg' },
        ],
      },
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
      dat: 'Jan 10-14, 2026',
      photos: {
        create: [
          { url: 'Northern Lights Expedition/lights1.jpg' },
          { url: 'Northern Lights Expedition/lights2.jpg' },
          { url: 'Northern Lights Expedition/lights3.jpg' },
          { url: 'Northern Lights Expedition/lights4.jpg' },
          { url: 'Northern Lights Expedition/lights5.jpg' },
        ],
      },
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
      dat: 'Mar 15-22, 2026',
      photos: {
        create: [
          { url: 'Amazon River Adventure/amazon1.jpg' },
          { url: 'Amazon River Adventure/amazon2.jpg' },
          { url: 'Amazon River Adventure/amazon3.jpg' },
          { url: 'Amazon River Adventure/amazon4.jpg' },
          { url: 'Amazon River Adventure/amazon5.jpg' },
        ],
      },
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
      dat: 'Feb 20-28, 2026',
      photos: {
        create: [
          { url: 'Safari in Masai Mara/safari1.jpg' },
          { url: 'Safari in Masai Mara/safari2.jpg' },
          { url: 'Safari in Masai Mara/safari3.jpg' },
          { url: 'Safari in Masai Mara/safari4.jpg' },
          { url: 'Safari in Masai Mara/safari5.jpg' },
        ],
      },
    },
  ];

  for (const tourData of toursData) {
    await prisma.tour.create({
      data: {
        ...tourData,
      },
    });
  }

  const user1 = await prisma.user.create({
    data: {
      name: 'John',
      surname: 'Doe',
      email: 'jon.doe@example.com',
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
      comment: "Can't wait for the beach!",
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
