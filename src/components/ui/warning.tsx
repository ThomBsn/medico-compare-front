import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'

export default function Warning() {
  
  const [tab, setTab] = useState<number>(1)
  const [isHovered, setIsHovered] = useState(false);

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  const handleHover = (hover : boolean) => {
    setIsHovered(hover);
  };

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative bg-gray-100 mb-7">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="text-xl mb-4 text-gray-800">Avertissement</h1>
            <p className="text-l text-gray-600">Toutes les indications que vous trouverez sur ce site internet ne doivent en aucun cas dispensé les conseils de vrai médecins. </p>
            <p className="text-l text-gray-600">En cas de doute, consultez un professionnel de santé.</p>
          </div>
          </div>
        </div>
    </section>
  )
}