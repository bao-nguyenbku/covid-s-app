import DoctorCard from '@/components/doctor-card'
import DoctorFilter from '@/components/doctor-filter'
import { getDoctors } from '@/services/doctor'

export default async function DoctorPage() {
  const doctors = await getDoctors()
  if (!doctors) {
    return null
  }
  return (
    <section className='px-20 flex flex-col py-20'>
      <h1 className='text-3xl font-bold text-center'>Bác sĩ tư vấn</h1>
      <div className='ml-auto'>
        <DoctorFilter />
      </div>
      <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {doctors.map((doctor) => {
          return <DoctorCard data={doctor} key={doctor.id} />
        })}
      </div>
    </section>
  )
}
