const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  try {
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

    const room = await prisma.room.upsert({
      where: { id: 'room-1' },
      update: {},
      create: {
        id: 'room-1',
        name: 'Luxury Westlands Suite',
        description: 'Beautiful one-bedroom apartment in Westlands with stunning views, 2.4 km from Sarit Centre.',
        capacity: 2,
        pricePerNight: 80,
        amenities: ['WiFi', 'AC', 'TV', 'Kitchen', 'Parking'],
        images: ['/images/room-1.jpg', '/images/room-2.jpg', '/images/room-3.jpg', '/images/room-4.jpg'],
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
