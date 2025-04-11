"use client"

import useEmblaCarousel from 'embla-carousel-react'
import {
    CaretCircleDoubleLeft,
    CaretCircleDoubleRight
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import tutor1 from '../../../public/assets/images/tutor4.jpg'
import tutor2 from '../../../public/assets/images/tutor3.jpg'
import tutor3 from '../../../public/assets/images/tutor2.jpg'
import tutor4 from '../../../public/assets/images/tutor1.png'


const testimonials = [
    {
        content: "Desde que comecei a levar a Luna para banho e tosa, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
        author: "Marina Souza",
        role: "Tutora da Luna (Golden Retriever)",
        image: tutor1,
    },
    {
        content: "Levo meu gato, Thor, para cuidados regularmente e só tenho elogios! Ele sempre volta calmo, bem tratado e com o pelo brilhando. O carinho e atenção que a equipe dá aos pets é incrível!",
        author: "Roberta Mendes",
        role: "Tutora do Thor (Maine Coon)",
        image: tutor2,
    },
    {
        content: "A Mel tem medo de água, mas aqui ela se sente segura e sempre sai do banho feliz! A equipe tem uma paciência enorme e trata os bichinhos com muito amor. Não troco por nada!",
        author: "Fernando Lima",
        role: "Tutor da Mel (Labrador)",
        image: tutor3,
    },
    {
        content: "Depois de algumas experiências ruins em outros pet shops, finalmente encontrei um lugar que confio! Meu cãozinho Max sempre é tratado com carinho e o corte de pelo fica perfeito.",
        author: "Juliano Pereira",
        role: "Tutor do Max (Poodle)",
        image: tutor4,
    }
];


export function Testmonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-[#FFD449] py-16">
            <div className="container mx-auto px-4">

                <h2 data-aos="fade-up" className="text-4xl font-bold text-center italic mb-12">Clientes satisfeitos, pets felizes!</h2>

                <div data-aos="fade-up" data-aos-delay="300" className="relative max-w-4xl mx-auto">

                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {testimonials.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 px-3'>
                                    <article className='bg-[#334155] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex flex-col items-center text-center space-y-4'>
                                            <div className='relative w-24 h-24'>
                                                <Image
                                                    src={item.image}
                                                    alt={item.author}
                                                    quality={100}
                                                    fill
                                                    sizes='96px'
                                                    className='object-cover rounded-full'
                                                />
                                            </div>

                                            <p className='text-gray-200 italic'>"{item.content}"</p>

                                            <div>
                                                <p className='font-bold'>{item.author}</p>
                                                <p className='text-sm text-gray-400'>{item.role}</p>
                                            </div>

                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        className='bg-white hover:bg-gray-100 flex items-center justify-center rounded-full shadow-xl w-10 h-10 absolute left-2 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                    >
                        <CaretCircleDoubleLeft
                            className='w-6 h-6 text-gray-600'
                        />
                    </button>

                    <button
                        onClick={scrollNext}
                        className='bg-white hover:bg-gray-100 flex items-center justify-center rounded-full shadow-xl w-10 h-10 absolute -right-8 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                    >
                        <CaretCircleDoubleRight
                            className='w-6 h-6 text-gray-600'
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}
