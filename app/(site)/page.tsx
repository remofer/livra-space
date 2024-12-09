import { getHeroBanner, getServiceSection, getFaqSection } from '@/sanity/sanity-utils'

export default async function Home() {
  const [heroBanner, serviceSection, faqSection] = await Promise.all([
    getHeroBanner(),
    getServiceSection(),
    getFaqSection(),
  ])

  const renderHeroBanner = () => (
    <section id="hero-section" className="relative w-full h-auto py-4 px-0 grid grid-cols-1 grid-rows-[678px]">
  <div className="absolute inset-0 z-10 overflow-hidden bg-transparent transition-all duration-300 ease-in-out">
    {heroBanner.mediaType === 'video' ? (
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      >
        <source src={heroBanner.mediaUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ) : (
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${heroBanner.mediaUrl})` }}
      />
    )}
  </div>

  <div className="relative z-20 text-center text-white py-16 px-4">
    <h1 className="text-5xl font-extrabold">{heroBanner.title}</h1>
    <p className="mt-4 text-lg">{heroBanner.description}</p>
    <a
      href="/get-in-touch"
      className="mt-4 inline-block rounded-full border-2 border-white px-6 py-3 text-sm font-medium uppercase transition-colors duration-300 hover:bg-white hover:text-black"
    >
      Get in Touch
    </a>
  </div>

  {/* Overlay with a slight dark background */}
  <div className="absolute inset-0 bg-black opacity-40 z-10" />
</section>

  )

  const renderServiceSection = () => (
    <section className='service-section mt-24 text-center'>
      <h2 className='text-3xl font-bold'>{serviceSection.title}</h2>
      <p className='mt-4 text-xl text-gray-600'>{serviceSection.subtitle}</p>
      <p className='mt-4 text-xl text-gray-600'>{serviceSection.description}</p>
      <a
        href={serviceSection.ctaButton.url}
        className='mt-8 inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600'
      >
        {serviceSection.ctaButton.text}
      </a>
    </section>
  )

  const renderFaqSection = () => (
    <div className='relative w-full py-16 px-4 bg-gray-100 text-center'>
      {faqSection.mediaUrl && faqSection.mediaType === 'video' ? (
        <video
          autoPlay
          loop
          muted
          className='absolute inset-0 w-full h-full object-cover opacity-30'
        >
          <source src={faqSection.mediaUrl} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className='absolute inset-0 w-full h-full bg-cover bg-center opacity-30'
          style={{ backgroundImage: `url(${faqSection.mediaUrl})` }}
        />
      )}
      <div className='relative z-10'>
        <h2 className='text-4xl font-extrabold'>{faqSection.title}</h2>
        <p className='mt-4 text-xl'>{faqSection.description}</p>
        {faqSection.faqs?.length > 0 ? (
          faqSection.faqs.map((faq, index) => (
            <div key={index} className='faq-item mb-6'>
              <h3 className='text-xl font-semibold'>{faq.question}</h3>
              <p className='mt-2 text-lg'>{faq.answer}</p>
            </div>
          ))
        ) : (
          <p>No FAQs available.</p>
        )}
        <a
          href={faqSection.ctaButton.url}
          className='inline-block mt-4 rounded-full border-2 border-gray-500 px-6 py-2 text-sm font-medium text-gray-500 hover:bg-gray-500 hover:text-white'
        >
          {faqSection.ctaButton.text}
        </a>
      </div>
    </div>
  )

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
