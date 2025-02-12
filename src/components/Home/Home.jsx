import React from 'react'

const Home = () => {
  return (
    <>
    <section id='Home' className='text-[#204051] min-h-screen  flex items-center mt-4'>

       {/* // left section  */}

        <div className='container mx-auto max-w-screen-lg  flex flex-col-reverse md:flex-row items-center  px-8 md:px-16 '>
           <div className=" md:w-1/2 text-center md:text-left space-y-4">
            <h1 className='text-4xl font-bold pt-2'>Hi! Mohd Shadab</h1>
            <h3 className='text-2xl font-semibold text-teal-500'>I am Mern Stack Developer</h3>
            <p className='text-black-200 text-lg'>I am React developer and here is my portfolio website. Hero you'll learn about my journey as a software developer.</p>
            <button className="mt-4 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg shadow-md transition">
              Hire Me
            </button>
           </div>

           {/* right section */}
           <div className="md:w-1/2 flex justify-center">
            <img className='w-60 md:w-80  rounded-full border-4 border-teal-400 shadow-lg' src="/public/profile.jpg" alt="" />
           </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Home