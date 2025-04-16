import { Link } from "react-router-dom"

const CategoryGrid = () => {
  const categories = [
    { name: "WOMEN", image: "/image/icon-w.jpg", link: "/category/women" },
    { name: "MEN", image: "/image/icon-m.jpg", link: "/category/men" },
    ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link key={index} to={category.link} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-end p-3">
                  <span className="text-sm font-medium">{category.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid
