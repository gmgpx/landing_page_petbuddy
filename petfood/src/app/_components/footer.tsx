import { FacebookLogo, InstagramLogo, TiktokLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import royal from '../../../public/assets/images/royal.png'
import golden from '../../../public/assets/images/golden.png'
import premier from '../../../public/assets/images/primier.png'
import natural from '../../../public/assets/images/natural.png'
import whiskas from '../../../public/assets/images/whiskas.png'

const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: premier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden },
]

export function Footer() {
    return (
        <section className='bg-[#E84C3D] py-16 text-white'>
            <div className='container mx-auto px-4'>
                <div className='border-b border-white/20 pb-8'>

                    <h4 className='text-3xl font-semibold mb-8 text-center'>Nossos parceiros</h4>

                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                        {brands.map((item, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                    }}
                                    className='object-contain'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <footer className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 mt-6'>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>PetBuddy</h3>
                        <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação.</p>
                        <a
                            href={`https://wa.me/`}
                            className="bg-green-500 hover:bg-green-400 hover:-translate-y-2 transition-transform duration-300 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <WhatsappLogo className='w-6 h-6' />
                            Contato via WhatsApp
                        </a>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Contato</h3>
                        <p>exemplo@gmail.com</p>
                        <p>(XX) 99999 - 9999</p>
                        <p>Rua X, Centro, Sorocaba - SP</p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
                        <div className='flex gap-4'>
                            <a
                                href="#"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <FacebookLogo className='w-8 h-8 hover:text-gray-100/60' weight="bold" />
                            </a>
                            <a
                                href="#"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <InstagramLogo className='w-8 h-8 hover:text-gray-100/60' weight="bold" />
                            </a>
                            <a
                                href="#"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <TiktokLogo className='w-8 h-8 hover:text-gray-100/60' weight="bold" />
                            </a>
                        </div>
                    </div>

                </footer>
            </div>
        </section>
    );
}