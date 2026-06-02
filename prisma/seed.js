const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  try {
    // Create admin user
    const admin = await prisma.user.upsert({
      where: { email: 'emmanuelmulevu@yahoo.com' },
      update: {},
      create: {
        email: 'emmanuelmulevu@yahoo.com',
        name: 'Emmanuel Mulevu',
        password: await bcrypt.hash('admin123', 10),
        role: 'admin',
      },
    });

    console.log('Admin user created:', admin);

    // Create room with real images
    const room = await prisma.room.upsert({
      where: { id: 'room-1' },
      update: {},
      create: {
        id: 'room-1',
        name: 'Luxury Westlands Suite',
        description: 'Beautiful one-bedroom apartment in the heart of Westlands with stunning views, modern amenities, and premium comfort. Perfect for business travelers and couples. Located 2.4 km from Sarit Centre.',
        capacity: 2,
        pricePerNight: 80,
        amenities: [
          'Free WiFi',
          'Air Conditioning',
          'Smart TV',
          'Fully Equipped Kitchen',
          'Washing Machine',
          'En-suite Bathroom',
          'Balcony with City Views',
          'Work Desk',
          '24/7 Security',
          'Parking Available',
          'Hot Shower',
          'Premium Bedding',
        ],
        images: [
          '/images/room-1.jpg',
          '/images/room-2.jpg',
          '/images/room-3.jpg',
          '/images/room-4.jpg',
        ],
        isAvailable: true,
      },
    });

    console.log('Room created:', room);
    console.log('Seed completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
