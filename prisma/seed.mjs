import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const districts = [
  'Quận 1',
  'Quận 2',
  'Quận 3',
  'Quận 4',
  'Quận 5',
  'Quận 6',
  'Quận 7',
  'Quận 8',
  'Quận 9',
  'Quận 10',
  'Quận 11',
  'Quận 12',
  'Quận Bình Thạnh',
  'Quận Thủ Đức',
  'Quận Gò Vấp',
  'Quận Phú Nhuận',
  'Quận Tân Bình',
  'Quận Tân Phú',
  'Quận Bình Tân',
  'Huyện Nhà Bè',
  'Huyện Hóc Môn',
  'Huyện Bình Chánh',
  'Huyện Củ Chi',
  'Huyện Cần Giờ',
].map((district) => ({ name: district }))

const doctors = [
  {
    fullname: 'Phạm Kiên Hữu',
    title: 'GS.TS.BS.',
    workPlace: 'Bệnh viện Đại học Y Dược',
    department: 'Tai Mũi Họng',
    phoneNumber: '0934024965',
    image:
      'https://cdn.bookingcare.vn/fr/w1200/2019/09/11/121012giao-su-pham-kien-huu.jpg',
  },
  {
    fullname: 'Trần Ngọc Ánh',
    title: 'TS.BS.',
    workPlace: 'Bệnh viện Da liễu Tp Hồ Chí Minh',
    department: 'Da liễu',
    phoneNumber: '0957829525',
    image:
      'https://vivita.vn/wp-content/uploads/2022/09/bs-tran-ngoc-anh-chuyen-khoa-da-lieu.jpg',
  },
]

const users = [
  {
    fullname: 'User 100',
    email: 'user_100@gmail.com',
    role: 'PATIENT',
    phoneNumber: '012345678',
    password: '12345678',
  },
]

// Generate User
async function generateUser() {
  console.log('Deleting Users...')
  await prisma.user.deleteMany()
  console.log('Deleted Users')
  console.log('Creating Users...')
  await prisma.user.createMany({
    data: users,
  })
  console.log('Created Users...')
}

// Generate District
async function createDistricts() {
  try {
    console.log('🔁 Deleting Districts...')
    await prisma.district.deleteMany()
    console.log('✅ Deleted Districts successfully')
    console.log('🔁 Creating Districts...')
    await prisma.district.createMany({
      data: districts,
    })
    console.log('✅ Created Districts successfully')
  } catch (error) {
    console.log(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}
// Generate Doctor
async function createDoctors() {
  try {
    const districtResult = await prisma.district.findMany()
    if (!districtResult) return
    const randomSupportAreas = (districtList) => {
      let startIdx = Math.round(Math.random() * districtList.length)
      let endIdx = Math.round(Math.random() * districtList.length)
      if (startIdx > endIdx) [startIdx, endIdx] = [endIdx, startIdx]
      if (endIdx - startIdx > 4) endIdx = startIdx + 4
      return districtList
        .map((item) => ({ id: item.id }))
        .slice(startIdx, endIdx + 1)
    }
    console.log('🔁 Deleting Doctors...')
    await prisma.doctor.deleteMany()
    console.log('✅ Deleted Doctors successfully')

    console.log('🔁 Creating Doctors...')
    const promiseDoctors = doctors.map((doctor) => {
      return prisma.doctor.create({
        data: {
          ...doctor,
          supportAreas: {
            connect: randomSupportAreas(districtResult),
          },
        },
      })
    })
    await Promise.all(promiseDoctors)
    console.log('✅ Created Doctors successfully')
  } catch (error) {
    console.log(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}



async function generateData() {
  await generateUser()
  await createDistricts()
  await createDoctors()
}

generateData()
