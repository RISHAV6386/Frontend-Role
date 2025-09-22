import React from 'react'
import ProductLayout from '../sample/ProductLayout'
import FilterPanel from '../components/FilterPanel'
import Pagination from './Pagination'
import sampledata from "../sample/sampleData"

const ProductCards = () => {

  // Store all products in state (initially loaded from sample data)
  const [products, setProducts] = React.useState(sampledata)

  // Track the current active page
  const [currentPage, setCurrentPage] = React.useState(1)

  // How many cards to display per page
  const [cardPerPage, setCardPerPage] = React.useState(6)

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / cardPerPage)

  // Calculate indices for pagination
  const lastIndex = currentPage * cardPerPage   // last item index of current page
  const firstIndex = lastIndex - cardPerPage    // first item index of current page

  // Slice the product list to show only items for the current page
  const pageData = products.slice(firstIndex, lastIndex)

  return (
    <div>
      {/* Top Banner Image */}
      <img 
        className='w-full h-100' 
        src='https://www.bing.com/th/id/OIP.V_D4G6wM3Zc1QPsBsrRA1AHaEK?w=248&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
        alt="Banner"
      />

      {/* Filter panel section */}
      <FilterPanel className="m-2"/>

      {/* Product cards grid */}
      <div className="flex flex-wrap gap-50 p-20">
        {pageData.map((product, index) => (
          <ProductLayout key={index} product={product} />
        ))}
      </div>

      {/* Pagination component */}
      <div>
        <Pagination 
          totalPages={totalPages} 
          setCurrentPage={setCurrentPage} 
          currentPage={currentPage} 
        />
      </div>
    </div>
  )
}

export default ProductCards
