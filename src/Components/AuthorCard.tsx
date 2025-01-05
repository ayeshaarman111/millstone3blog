import React from 'react'
import Image from 'next/image'
export default function AuthorCard () {
  return (
    <div className='bg-purple-400 shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>

        {/* IMage */}

  <Image
  className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500'
  src='/lady.jpg'    
  alt='Author image'
  width={900}
  height={500}
  />
  <div>
    <h3 className='text-xl font-bold'>Oprah Winfrey</h3>
    <p className='text-yellow-400'>
      {""}
      social worker|Author|literature
            {""}
            </p>  
    </div> 
      </div>  
      
   <p className='mt-4 text-black leading-relaxed'>
   Oprah Winfrey is a globally recognized media mogul, philanthropist, and advocate for various
    social causes, particularly those related to education and childrens welfare. Oprah created the
     Oprahs Angel Network in 1998 to raise funds and awareness for various charities. It helped raise millions 
     of dollars for causes, particularly those supporting at-risk children and families.
   </p>
<div className='mt-4 flex space-x-3'>
  <a
    href='a'
    className='px-4 py-2 text-white bg-yellow-400 rounded-2xl hover:bg-blue-800 transition duration-300'
    >
     Instagram
  </a>
  <a
    href='a'
    className='px-4 py-2 text-white bg-yellow-400 rounded-2xl hover:bg-blue-800 transition duration-300'
    >
     Linkedin
  </a>
  <a
    href='a'
    className='px-4 py-2 text-white bg-yellow-400 rounded-2xl hover:bg-blue-800 transition duration-300'
    >
     Facebook
  </a>

  </div>

   </div>
  );
}



 
