import React from 'react'
interface Props {
  title : string;
  description : string;
}
const ServiceCard = ({title,description}:Props) => {
  return (
    <div className='service-card border border-t-red-700 p-2 w-48 hover:shadow cursor-pointer'>
      <h1 className='text-xl'>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default ServiceCard