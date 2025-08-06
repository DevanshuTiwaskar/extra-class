import React, { useContext } from 'react'
import { MyStore } from '../Context/Context'

const Search = () => {
       const {searchTerm, setSearchTerm ,filteredProducts} = useContext(MyStore)
    
  return (
    <div>
    <input
        type="text"
        placeholder="Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-[10px] w-[300px] mb-[20px]"
      />
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-contain mx-auto mb-4"
              />
              <h4 className="text-sm font-semibold text-gray-800 mb-2">
                {product.title.length > 50
                  ? product.title.slice(0, 50) + "..."
                  : product.title}
              </h4>
              <p className="text-blue-600 font-bold text-lg">
                ₹{product.price}
              </p>
            </div>
          ))
        ) : (
          <p className="text-red-500 text-lg font-semibold col-span-full">
            No products found
          </p>
        )}
      </div>
    </div>
  )
}

export default Search