import React from 'react';
import Navbar from '../components/Navbar';
import discordLogo from '../assets/discord-logo-trans.png';
import instagramLogo from '../assets/instagram-logo-trans.png';
import linkedinLogo from '../assets/linkedin-logo-trans.png';

export default function Socials() {
    const socialLinks = [
        {
            name: 'Join the Discord',
            subtitle: 'Connect & chat with our thriving community',
            url: 'https://discord.gg/sRmS5hKqqQ',
            bgColor: 'bg-[#ea3231] hover:opacity-90',
            hoverGlow: 'hover:shadow-[0_0_25px_rgba(234,50,49,0.4)]',
            logo: discordLogo,
            alt: 'Discord Logo',
        },
        {
            name: 'Follow Our Instagram',
            subtitle: 'Stay up to date with our activities',
            url: 'https://www.instagram.com/uwinbscs?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==',
            bgColor: 'bg-[#f1c200] hover:opacity-90',
            hoverGlow: 'hover:shadow-[0_0_25px_rgba(241,194,0,0.4)]',
            logo: instagramLogo,
            alt: 'Instagram Logo',
        },
        {
            name: 'Check out the LinkedIn',
            subtitle: 'Professional updates and networking',
            url: 'https://www.linkedin.com/company/uwindsor-bscs/posts/?feedView=all',
            bgColor: 'bg-[#216831] hover:opacity-90',
            hoverGlow: 'hover:shadow-[0_0_25px_rgba(33,104,49,0.4)]',
            logo: linkedinLogo,
            alt: 'LinkedIn Logo',
        },
    ];

    return (
        <div className='min-h-screen bg-[#0d1526] text-white flex flex-col selection:bg-white/20'>
            <Navbar />

            <main className='flex-1 flex flex-col items-center justify-center px-4 py-16'>
                <div className='text-center max-w-lg mb-10'>
                    <span className='inline-block py-1 px-3 rounded-full text-xd font-semibold tracking-wider uppercase bg-white/10 text-gray-300 mb-3 border border-white/10'>
                        We'll be doing great things. Connect with us!
                    </span>

                    <h1 className='text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'>
                        Follow Our Socials
                    </h1>
                </div>

                <div className='w-full max-w-xl p-6 sm:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-5'>
                    {socialLinks.map((item) => (
                        <a
                          key={item.name}
                          href={item.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className={'group relative w-full p-4 sm:p-5 rounded-xl flex items-center justify-between transition-all duration-300 ease-out transform hover:-translate-y-0.5 hover:translate-x-1 ${item.bgColor} ${item.hoverGlow}'}
                        >

                            <div className='flex items-center gap-4'>
                                <div className='w-12 h-12 rounded-lg bg-black/15 flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110 flex-shrink-0'>
                                    <img
                                      src={item.logo}
                                      alt={item.alt}
                                      className='w-full h-full object-contain'
                                    />
                                </div>

                                <div className='text-left'>
                                    <h2 className='text-lg sm:text-xl font-bold leading-snug'>
                                        {item.name}
                                    </h2>
                                    <p className='text-xd sm:text-sm opacity-90 font-normal'>
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>

                            <div className='opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 pr-1'>
                                <svg className='w-6 h-6 fill-none stroke-current stroke-2' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    );
}