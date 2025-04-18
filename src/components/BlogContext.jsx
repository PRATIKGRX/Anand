import React from 'react'

const BlogContext = ({pic,heading,paragraph}) => {
  return (
    <div className="grid grid-row-2 bg-[#eeeeee] rounded-lg overflow-hidden  transform hover:-translate-y-2 transition duration-300">
            <div>
                <img src={pic} className='h-full w-full object-center object-cover'/>
            </div>
            <div className="px-4 py-4 flex flex-col gap-4">
                <h5 className="text-center text-xl font-semibold hover:underline">{heading}</h5>
                <p className="text-[#4b4b4b]">{paragraph}</p>
                <div>
                <button className="border border-[#8E1616] px-2 py-1 hover:bg-[#8E1616] hover:text-white transition duration-300">Learn More</button>
                </div>
            </div>
        </div>
  )
}

export default BlogContext
