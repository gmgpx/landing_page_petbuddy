"use client"

import useEmblaCarousel from 'embla-carousel-react'
import {
    CaretCircleDoubleLeft,
    CaretCircleDoubleRight,
    Clock,
    Scissors,
    Syringe,
    Taxi,
    Bed,
    WhatsappLogo,
    Stethoscope,
    PawPrint,
    Dog,
    FirstAid
} from '@phosphor-icons/react/dist/ssr'

const services = [
    {
        title: "Banho & Tosa",
        description: "Inclui banho com produtos de qualidade para tipo de pelagem e pele do animal, corte de unhas, limpeza de orelhas e tosa personalizada (higiênica ou estilizada).",
        duration: "1h",
        price: "R$ 50",
        icon: <Scissors />,
        linkText: "Olá, vi no site sobre banho e tosa e gostaria de mais informações."
    },
    {
        title: "Vacinação",
        description: "Aplicação de vacinas essenciais para a saúde do seu pet, prevenindo doenças contagiosas e garantindo bem-estar.",
        duration: "30min",
        price: "R$ 80",
        icon: <Syringe />,
        linkText: "Olá, vi no site sobre vacinação e gostaria de mais informações."
    },
    {
        title: "Táxi Pet",
        description: "Serviço de transporte seguro e confortável para seu pet, seja para consultas, banho e tosa ou qualquer outro compromisso.",
        duration: "Variável",
        price: "A partir de R$ 30",
        icon: <Taxi />,
        linkText: "Olá, vi no site sobre táxi pet e gostaria de mais informações."
    },
    {
        title: "Hospedagem",
        description: "Ambiente seguro e aconchegante para o seu pet, com acompanhamento 24h, alimentação e brincadeiras.",
        duration: "Diária",
        price: "R$ 100",
        icon: <Bed />,
        linkText: "Olá, vi no site sobre hospedagem e gostaria de mais informações."
    },
    {
        title: "Consulta Veterinária",
        description: "Atendimento especializado para avaliar a saúde do seu pet, com exames clínicos e orientações personalizadas.",
        duration: "45min",
        price: "R$ 120",
        icon: <Stethoscope />,
        linkText: "Olá, vi no site sobre consulta veterinária e gostaria de mais informações."
    },
    {
        title: "Adestramento",
        description: "Treinamento positivo para corrigir comportamentos indesejados e ensinar comandos básicos ao seu pet.",
        duration: "1h",
        price: "R$ 150",
        icon: <PawPrint />,
        linkText: "Olá, vi no site sobre adestramento e gostaria de mais informações."
    },
    {
        title: "Emergência Veterinária",
        description: "Atendimento emergencial para casos graves, com suporte especializado e rápido para seu pet.",
        duration: "Urgente",
        price: "Sob consulta",
        icon: <FirstAid />,
        linkText: "Olá, vi no site sobre emergência veterinária e gostaria de mais informações."
    },
    {
        title: "Creche para Pets",
        description: "Seu pet se diverte e socializa em um ambiente seguro enquanto você está ocupado.",
        duration: "Período integral ou meio período",
        price: "A partir de R$ 70",
        icon: <Dog />,
        linkText: "Olá, vi no site sobre creche para pets e gostaria de mais informações."
    }
]

export function Service() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 760px)": { slidesToScroll: 3 }
        }
    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                <h2 data-aos="fade-up" className="text-4xl font-bold mb-12">Serviços</h2>

                <div data-aos="fade-up" data-aos-delay="300" className="relative">
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
                                    <article className='bg-[#1E293B] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex-1 flex items-start justify-between'>
                                            <div>
                                                <span className='text-3xl'>{item.icon}</span>
                                                <div>
                                                    <h3 className='font-bold text-xl my-1 select-none'>{item.title}</h3>
                                                    <p className='text-gray-400 text-sm select-none'>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='border-t border-gray-700 pt-4 felx items-center justify-between'>
                                            <div className='flex items-center gap-2 text-sm select-none pb-2'>
                                                <Clock className='w-5 h-5' />
                                                <span>{item.duration}</span>
                                            </div>

                                            <a
                                                href={`https://wa.me/text=Sobre ${item.title}`}
                                                target='_blank'
                                                rel="noopener noreferrer"
                                                className='flex items-center justify-center gap-2 hover:bg-blue-600 px-4 py-2 rounded-md duration-300'
                                            >
                                                <WhatsappLogo className='w-6 h-6' />
                                                Entrar em contato
                                            </a>

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
