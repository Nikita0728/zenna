import React from 'react'
import Image from 'next/image'
import background from '@/assets/background.png'

const page = () => {
  return (
    <>
   <div className='h-64 w-full bg-fixed' style={{backgroundImage:`url(${background.src})`}}>
   <div className='flex justify-center items-center h-64'>
    <h1 className='font-bold mb-4 lg:text-3xl text-2xl '>ABOUT US</h1></div>
   </div>
   
<p className='text-xl font-bold my-4 flex justify-center '>ABOUT OUR SHOP </p>
<div className='mx-20  text-justify'>
    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quasi. Voluptatibus natus sed quibusdam adipisci voluptatum rerum ducimus sapiente eveniet esse, quam impedit facere sit necessitatibus deleniti a suscipit. Voluptas quae, minima neque esse accusantium, nam nemo nulla modi necessitatibus illo itaque repudiandae cum. Cumque perspiciatis reprehenderit, corrupti architecto ullam et neque ex aliquid dolores, laudantium, ipsam ut molestias sed culpa vitae fugit iure.</p>
    <p className='mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nam odio voluptatum, dolor quos, possimus obcaecati voluptates consectetur tempora in illum, ex amet perspiciatis dignissimos repellat corporis itaque rerum et impedit quam dolorum. Incidunt laboriosam optio omnis repellat architecto fugit quae tenetur, veritatis rem pariatur sequi impedit! Neque, nulla dolores nihil quo ipsam sequi, eligendi vitae eaque minus nemo quasi consequuntur sapiente voluptas porro in? Dignissimos cupiditate iste numquam corporis ad necessitatibus saepe quas, pariatur placeat consequatur nisi perspiciatis, fugiat explicabo, ducimus eligendi laudantium recusandae? Itaque soluta at, impedit inventore, reprehenderit accusamus voluptas voluptate molestiae ex natus nobis nulla quas.</p></div>
    </>
  )
}

export default page