import { Link } from "react-router-dom"

const PromoSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Discount Promo */}
          <div className="bg-white p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img src="/image/bg-3.jpg" alt="Model wearing discounted items" className="w-full h-auto" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-3xl font-bold mb-2 text-blue-600" >UP TO 30% DISCOUNT</h3>
              <p className="text-gray-600 mb-4">For all sale items. Limited time offer.</p>
              <div className="flex space-x-2">
                <Link to="/sale" className="btn btn-primary">
                  SHOP
                </Link>
                <Link to="/sale/new" className="btn btn-outline">
                  NEW
                </Link>
              </div>
            </div>
          </div>

          {/* Winter Collection Promo */}
          <div className="relative overflow-hidden">
            <img src="/image/bg-3.jpg" alt="Winter collection" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">WINTER IN</h3>
              <p className="mb-4">Discover our new winter collection</p>
              <Link to="/winter-collection" className="btn btn-primary self-start">
                SHOP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoSection
