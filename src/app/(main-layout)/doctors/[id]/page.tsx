type Props = {
  params: {
    id: string
  }
}

export default function DoctorDetail({ params }: Props) {
  return <div>Doctor Details {params.id}</div>
}
