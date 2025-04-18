import React from 'react'
import BlogTabs from './components/BlogTabs'
const Blog = () => {
  return (
    <div className='mt-[10vh]'>
        <main>
            <div className='text-center text-4xl px-10 py-15 font-bold bg-[#F8EEDF]'>
              <h5 className=''>Anand 
              </h5>
              <p>The BLOG</p>
            </div>
            <section className='px-10 py-10'>
              <div className='grid grid-cols-[40%_60%] gap-8'>
                <div className='flex justify-center items-center'>
                  <p className='text-center text-2xl font-semibold'>"Strength is not just in the steel we sell, but in the trust we build with every delivery." <br />
                - Anand</p>
                </div>
                <div>
                  <img src="https://c8.alamy.com/comp/2RNM71X/engineer-worker-woman-with-male-team-working-together-auditor-in-factory-looking-at-laptop-computer-happy-smile-2RNM71X.jpg" alt=""  className='w-full h-[250px] object-top object-cover'/>
                </div>
              </div>
            </section>
            <section className='px-10 py-10'>
              <h4 className='text-center text-3xl font-bold'>Topics</h4>
              <BlogTabs/>
            </section>
        </main>
      
    </div>
  )
}

export default Blog
