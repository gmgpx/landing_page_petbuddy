import Image from 'next/image'
import about1 from '../../../public/assets/images/about-1.png'
import about2 from '../../../public/assets/images/about-2.png'
import { Check, MapPin, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

export function About() {
    return (
        <section className="bg-[#FDF6EC] py-16">
            <div className="container px-4 mx-auto">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items center'>

                    <div className='relative' data-aos="fade-up" data-aos-delay="400">
                        <div className='relative w-full h-[400px] rounded-3xl overflow-hidden'>
                            <Image
                                src={about1}
                                alt='Foto de cachorro 1'
                                className='object-cover hover:scale-110 duration-300'
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                        <div className='absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 border-white'>
                            <Image
                                src={about2}
                                alt='Foto de cachorro 2'
                                className='object-cover hover:scale-110 duration-300 rounded-sm'
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                    </div>


                    <div className='space-y-6 mt-10'>
                        <h2 data-aos="fade-up" className='text-4xl font-bold'>SOBRE</h2>
                        <p data-aos="fade-up">
                            Um espaço dedicado ao cuidado,
                            saúde e bem-estar dos pets,
                            oferecendo serviços como banho e tosa,
                            consultas veterinárias, vacinação,
                            hospedagem e uma loja completa com rações,
                            acessórios e produtos para higiene.
                            Com uma equipe apaixonada por animais e ambiente seguro,
                            garantimos um atendimento carinhoso e de qualidade,
                            proporcionando conforto e felicidade para o seu pet. 🐾❤️
                        </p>
                        <ul className='space-y-4'>
                            <li data-aos="fade-up" data-aos-delay="200" className='flex items-center gap-2'>
                                <Check className='text-red-500' />
                                Aberto desde 2006.
                            </li>
                            <li data-aos="fade-up" data-aos-delay="300" className='flex items-center gap-2'>
                                <Check className='text-red-500' />
                                Equipe com mais de 10 anos de experiência.
                            </li>
                            <li data-aos="fade-up" data-aos-delay="400" className='flex items-center gap-2'>
                                <Check className='text-red-500' />
                                O conforto do seu pet é nossa prioridade.
                            </li>
                        </ul>

                        <a
                            data-aos="fade-up" data-aos-delay="500"
                            href={`https://wa.me/5511999998888?text=${encodeURIComponent(`Gostaria de mais informações.`)}`}
                            target='_blank'
                            rel="noopener noreferrer"
                            className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:scale-105"
                        >
                            <WhatsappLogo className='w-6 h-6 text-white' />
                            Contato via WhatsApp
                        </a>

                        <a href="#"
                            data-aos="fade-up" data-aos-delay="600"
                            className="text-black hover:text-[#E84C3D] flex items-center justify-center w-fit gap-2 px-4 py-2 roudend-md"
                        >
                            <MapPin className='w-6 h-6' />
                            Endereço da loja
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}