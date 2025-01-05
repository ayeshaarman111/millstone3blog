import React from 'react'



export default function Feature() {
  return (
    <div className='bg-[url(/bg3.avif)] '>
      <section className="py-8 bg-netural-50 mb-40">
        <h2
         className="text-center justify-center flex text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out 
         trnsform hover:translate-y[-5px] hover:text-black  text-yellow-900"
         >
              Enhance your childs cognitive skills
             
        </h2>
        
        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-yellow-400 animate-color-change">Engaging Childrens Activities
          </h1>
          
          <div  className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[ 
              "Treasure Hunt",
              
              "Arts and Crafts",
              "Science Experiments",
              "Cooking or Baking",
              "Music or Dance",
              "Story Time",
              "Yoga or Movement",
              "Outdoor Games",
              "Pet Care",
            
              
            ].map((different, index) => (
              <div key={index} 
              className="relative group py-6 bg-purple-700 rounded-lg shadow-lg hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-black">
                <p className="text-center text-lg font-semibold">{different}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg duration-300 ease-in-out "></div>
               </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}