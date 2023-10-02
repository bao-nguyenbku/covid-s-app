import SingleCard from './single-card'

export default function ReceiveInfo() {
  return (
    <div className='flex gap-2 overflow-x-auto'>
      {[1, 2, 3, 4, 5, 6, 7].map((num) => {
        return <SingleCard key={num} />
      })}
    </div>
  )
}
