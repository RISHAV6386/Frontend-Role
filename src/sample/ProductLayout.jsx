import React from 'react'
import Rating from '../components/Rating';
import Badge from '../components/Badge';

// ProductLayout Component
// Props:
// - product: an object containing product details like image, brandName, rating, price, discount, badge etc.
const ProductLayout = ({ product }) => {
    return (
        <div className="w-120 h-150 bg-white mt-6 shadow-lg">
            {/* Product Image Section */}
            <div className="relative">
                <img
                    src={product.image}       // Product image URL
                    alt="Product"             // Alt text for accessibility
                    className="w-full h-110 object-fit" // Full width, fixed height, maintain aspect ratio
                />
                {/* Conditional Badge Display */}
                {product.badge ? <Badge /> : ""}  
            </div>

            {/* Product Details Section */}
            <div className="p-4 space-y-5">
                {/* Brand Name */}
                <h3 className="text-xl font-bold flex justify-center text-black-900">
                   {product.brandName} 
                </h3>

                {/* Rating Component */}
                <Rating rating={product.starRating}/>

                {/* Price Section */}
                <div className="flex items-center justify-center gap-2 mt-3">
                    {/* Discounted Price */}
                    <span className="text-2xl font-bold text-blue-400">
                        ${product.priceAfterOff}
                    </span>

                    {/* Original Price (strikethrough) */}
                    <span className="text-lg line-through m-2 text-gray-400">
                        ${product.price}
                    </span>

                    {/* Discount Percentage */}
                    <span className="text-lg font-bold text-red-500">
                        {product.offPercentage}% OFF
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductLayout;
