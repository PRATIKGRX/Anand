import React from 'react'
import SearchTabs from './components/SearchTabs';
import { RiSearch2Line } from "react-icons/ri";

const Products = () => {
  return (
    <>
    <main>
        <section className='mt-[10vh] px-10 py-10'>
            <h5 className='text-center text-4xl font-bold italic'>Delivering Excellence, One Product at a Time. <br />
            -Anand</h5>
            <div className='py-10'>
            <div className='my-5 flex justify-center'>
                <div className='relative'>
                <input type="text" placeholder='Search...'  className=' border bg-gray-400 rounded-lg px-10 py-2 w-[600px] text-xl focus:outline-none'/>
                <p className='absolute  top-1/2 left-[20px] transform -translate-x-1/2 -translate-y-1/2 '>
                <RiSearch2Line />
                </p>
                </div>
                
            </div>
            <div>
                <SearchTabs/>
            </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default Products
