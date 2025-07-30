import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'

const ResidentialPage = () => {
  const residentialServices = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Regular House Cleaning",
      description: "Maintain a consistently clean home with our flexible scheduling options.",
      features: [
        "Weekly, bi-weekly, or monthly service",
        "Customizable cleaning checklist",
        "Same reliable team",
        "All supplies included"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Deep Cleaning",
      description: "Comprehensive top-to-bottom cleaning for a fresh start or special occasions.",
      features: [
        "Detailed cleaning of all surfaces",
        "Inside appliances and cabinets",
        "Baseboards and light fixtures",
        "Perfect for spring cleaning"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      title: "Move In/Out Cleaning",
      description: "Make your transition smooth with our specialized moving cleaning services.",
      features: [
        "Empty home deep cleaning",
        "Refrigerator and oven cleaning",
        "Cabinet and drawer sanitization",
        "Flexible scheduling for move dates"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Post-Construction Cleaning",
      description: "Specialized cleaning to remove construction dust and debris safely.",
      features: [
        "Construction dust removal",
        "Paint and adhesive cleanup",
        "Window and surface polishing",
        "Safe debris disposal"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      title: "Carpet & Upholstery Cleaning",
      description: "Professional deep cleaning to extend the life of your carpets and furniture.",
      features: [
        "Hot water extraction method",
        "Stain and odor removal",
        "Furniture and upholstery cleaning",
        "Fast drying techniques"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Window Cleaning",
      description: "Crystal clear windows inside and out for maximum natural light.",
      features: [
        "Interior and exterior cleaning",
        "Screen cleaning included",
        "Streak-free guarantee",
        "High windows safely accessed"
      ]
    }
  ]

  return (
    <div 
      className="min-h-screen relative bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('/residential.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-500/80 to-primary-700/80 text-white py-16 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Residential Cleaning Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Keep your home spotless with our comprehensive residential cleaning services tailored to your lifestyle.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            Get Free Quote
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Residential Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From regular maintenance to deep cleaning, we offer comprehensive solutions for every home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Simple Process
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Online</h3>
              <p className="text-gray-600">Schedule your cleaning service online or give us a call. Choose your preferred date and time.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">We Clean</h3>
              <p className="text-gray-600">Our professional team arrives with all supplies and cleans your home to perfection.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enjoy</h3>
              <p className="text-gray-600">Relax and enjoy your sparkling clean home. We guarantee your satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

        {/* Pricing Note */}
        <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Transparent, Fair Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our pricing is based on the size of your home, frequency of cleaning, and specific services requested. 
            We provide free, no-obligation quotes for all residential cleaning services.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Regular Cleaning</h3>
              <p className="text-gray-600">Starting at $80 for a 2-bedroom home</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Deep Cleaning</h3>
              <p className="text-gray-600">Starting at $150 for a 2-bedroom home</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Move In/Out</h3>
              <p className="text-gray-600">Starting at $200 for a 2-bedroom home</p>
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Spotless Home?
          </h2>
          <p className="text-xl text-white mb-8">
            Contact us today for a free quote and experience the difference professional cleaning makes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            Schedule Your Cleaning
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
        </section>
      </div>
    </div>
  )
}

export default ResidentialPage