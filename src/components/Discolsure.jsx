import { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function CustomAccordion() {
  const [openIndices, setOpenIndices] = useState([])

  const items = [
    {
      title: "Over 40 Years of Expertise",
      description:
        "With decades of experience, we bring unmatched knowledge and precision to every project. Our long-standing presence in the industry reflects our commitment to excellence.",
    },
    {
      title: "Trusted in Nepal's Construction Industry",
      description:
        "Recognized as a reliable partner, Anand has earned the trust of builders, contractors, and homeowners across Nepal through consistent quality and service.",
    },
    {
      title: "Quality Materials Guaranteed",
      description:
        "We source only premium materials, ensuring durability and strength in every construction, so your projects stand the test of time.",
    },
    {
      title: "Commitment to Customer Satisfaction",
      description:
        "Your satisfaction is our priority. We work closely with clients to understand their needs and deliver solutions that exceed expectations.",
    },
    {
      title: "Innovative Solutions for Modern Construction",
      description:
        "Staying ahead with modern technology and design trends, we provide innovative solutions that blend functionality with aesthetics.",
    },
    {
      title: "Environmentally Responsible Practices",
      description:
        "We are committed to sustainable building practices, minimizing environmental impact while maintaining top-tier quality.",
    },
    {
      title: "Competitive Pricing",
      description:
        "We offer fair and competitive pricing without compromising on quality, giving you the best value for your investment.",
    },
  ];

  // Toggle the open/close state of each tab
  const toggleOpen = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full">
      <div className="w-full  divide-y divide-black/10 rounded-xl  shadow-md">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            description={item.description}
            isOpen={openIndices.includes(index)}
            onClick={() => toggleOpen(index)}
          />
        ))}
      </div>
    </div>
  )
}

function AccordionItem({ title, description, isOpen, onClick }) {
  const [displayed, setDisplayed] = useState('')
  const contentRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      let i = 0
      setDisplayed('')
      const interval = setInterval(() => {
        setDisplayed((prev) => prev + description.charAt(i))
        i++
        if (i >= description.length) clearInterval(interval)
      }, 10)
      return () => clearInterval(interval)
    } else {
      setDisplayed('')
    }
  }, [isOpen, description])

  return (
    <div className="p-6">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between text-left group"
      >
        <span className="text-xl font-bold text-black group-hover:text-black/80">
          {title}
        </span>
        <ChevronDownIcon
          className={`h-5 w-5 fill-black transform transition-transform duration-500 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        ref={contentRef}
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen
            ? 'grid-rows-[1fr] opacity-100 mt-2'
            : 'grid-rows-[0fr] opacity-0 mt-0'
        }`}
      >
        <div className="overflow-hidden text-lg text-black/60">
          {displayed}
        </div>
      </div>
    </div>
  )
}
