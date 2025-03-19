import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import dogImg from '../../../public/assets/images/hero-dog.webp'
import Image from 'next/image'

export function Hero() {
    return (
        <section className="bg-[#E84C3D] text-white relative overflow-hidden">
            <div>
                <Image
                    src={dogImg}
                    alt='Foto do cachorro'
                    className='object-cover opacity-60 lg:hidden'
                    fill
                    sizes='100vw'
                    quality={100}
                    priority
                />
                <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
            </div>

            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                    <div className='space-y-6'>
                        <h1 data-aos="fade-down" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">Seu pet merece cuidado, carinho e atenção especial!</h1>
                        <p data-aos="fade-right" className="lg:text-lg">
                            Oferecemos os melhores serviços para garantir o bem-estar e a
                            felicidade do seu amigo de quatro patas.
                        </p>

                        <a
                            href={`https://wa.me/`}
                            target='_blank'
                            rel="noopener noreferrer"
                            data-aos="fade-right"
                            data-aos-delay="300"
                            className="bg-green-500 hover:bg-green-400 duration-300 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                        >
                            <WhatsappLogo className='w-6 h-6' />
                            Contato via WhatsApp
                        </a>

                        <div className="mt-8">
                            <p data-aos="fade-up" data-aos-delay="300" className="text-md mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra
                            </p>
                        </div>
                    </div>

                    <div className='hidden md:block h-full relative'>
                        <Image
                            src={dogImg}
                            alt='Foto do dog'
                            className='object-contain'
                            fill
                            sizes='(max-width) 0vw, 50vw'
                            quality={100}
                            priority
                        />
                    </div>

                </article>
            </div>

        </section>
    )
}