interface CtaButton {
  url: string;
  text: string;
}

interface HeroBanner {
  mediaType: 'image' | 'video';
  mediaUrl: string;
  title: string;
  description: string;
}

interface ServiceSection {
  title: string;
  subtitle: string;
  description: string;
  ctaButton: CtaButton;
  items: string[];
}

interface Faq {
  question: string;
  answer: string;
}

interface FaqSection {
  mediaUrl: string;
  mediaType: 'image' | 'video';
  title: string;
  description: string;
  faqs: Faq[];
  ctaButton: CtaButton;
}

import { getHeroBanner, getServiceSection, getFaqSection } from '@/sanity/sanity-utils';
import Link from 'next/link';

export default async function Home() {
  const [heroBanner, serviceSection, faqSection]: [
    HeroBanner | null,
    ServiceSection | null,
    FaqSection | null
  ] = await Promise.all([
    getHeroBanner(),
    getServiceSection(),
    getFaqSection(),
  ])

  const renderHeroBanner = () => (
    <section id="hero-section" className="relative w-full h-auto py-4 px-0 grid grid-cols-1 grid-rows-[678px]">
      <div className="absolute inset-0 z-10 overflow-hidden bg-transparent transition-all duration-300 ease-in-out">
        {heroBanner?.mediaType === 'video' ? (
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={heroBanner?.mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50"
            style={{ backgroundImage: `url(${heroBanner?.mediaUrl})` }}
          />
        )}
      </div>

      <div className="relative z-20 grid grid-rows-[auto_auto_1fr] grid-cols-[1fr_auto] h-[678px] text-white py-16 px-16">
        <div className="row-start-1 col-start-1 flex flex-col items-start justify-start space-y-4">
          <h1 className="text-8xl font-extrabold">{heroBanner?.title}</h1>
          <p className="text-lg">{heroBanner?.description}</p>
        </div>
        <Link
          href="/get-in-touch"
          className="row-start-3 col-start-2 self-end justify-self-end rounded-full border-2 border-white px-6 py-3 text-sm font-medium uppercase transition-colors duration-300 hover:bg-white hover:text-black"
        >
          Get in Touch
        </Link>
      </div>

      <div className="absolute inset-0 bg-black opacity-40 z-10" />
    </section>
  )

  const renderServiceSection = () => (
    <section
      className="service-section py-20 px-20 text-center grid grid-cols-[1fr_1fr_1fr_1fr] gap-4"
    >
      <h2 className="text-[24px] font-bold text-left z-10 col-span-2 font-outfit">
        {serviceSection?.title}
      </h2>
  
      <p className="text-[48px] text-left z-20 col-start-3 col-span-3 font-outfit">
        {serviceSection?.subtitle}
      </p>
  
      <ul className="text-xl text-gray-600 text-left z-40 col-start-3 col-span-4 grid grid-cols-2 gap-2">
        {serviceSection?.items?.map((item, index) => (
          <li key={index} className="flex">{item}</li>
        ))}
      </ul>
  
      <Link
        href={serviceSection?.ctaButton.url || "#"}
        className="mt-8 inline-block transition-colors duration-300 hover:bg-black hover:text-white text-sm font-medium uppercase rounded-full border-2 border-black text-black py-3 px-6 col-start-5 text-right"
      >
        {serviceSection?.ctaButton.text}
      </Link>
    </section>
  );

  const renderFaqSection = () => (
    <div className="relative w-full h-auto py-4 px-0 grid grid-cols-1 grid-rows-[678px]">
      {faqSection?.mediaUrl && faqSection?.mediaType === 'video' ? (
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={faqSection?.mediaUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${faqSection?.mediaUrl})` }}
        />
      )}
      <div className="relative z-10 grid grid-rows-[auto_auto_1fr] grid-cols-[1fr_auto] h-[678px] text-white py-16 px-16">
        <h2 className="text-4xl font-extrabold">{faqSection?.title}</h2>
        <p className="mt-4 text-xl">{faqSection?.description}</p>
  
        {faqSection?.faqs?.length ? (
          faqSection.faqs.map((faq, index) => (
            <div key={index} className="faq-item mb-6">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="mt-2 text-lg">{faq.answer}</p>
            </div>
          ))
        ) : (
          <p>No FAQs available.</p>
        )}
        
        <Link
          href={faqSection?.ctaButton.url || "#"}
          className="row-start-3 col-start-2 self-end justify-self-end rounded-full border-2 border-white px-6 py-3 text-sm font-medium uppercase transition-colors duration-300 hover:bg-white hover:text-black"
          >
          {faqSection?.ctaButton.text}
        </Link>
      </div>
  
      <div className="absolute inset-0 bg-black opacity-40 z-10" />
    </div>
  );  

  return (
    <div>
      {heroBanner?.mediaUrl ? renderHeroBanner() : (
        <div className='w-full h-[500px] flex justify-center items-center text-center bg-gray-200'>
          <h1 className='text-4xl font-bold'>No Hero Banner Found</h1>
        </div>
      )}
      {renderServiceSection()}
      {renderFaqSection()}
    </div>
  )
}