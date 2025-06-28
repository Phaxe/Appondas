import React from 'react';
import Image from 'next/image';

const Products = () => {
  const products = [
    { title: 'Chat Bot', description: 'Intelligent conversational AI solutions', image: '/bot.png' },
    { title: 'Billing Tracking', description: 'Comprehensive billing and payment management', image: '/bills.png' },
    { title: 'Inventory Trading', description: 'Advanced inventory and trading systems', image: '/inventory.png' },
    { title: 'Custom', description: 'Tailored solutions for your specific needs', image: '/custome.png' }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0077B3] mb-4">Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive suite of solutions designed to streamline your business operations
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="text-center flex flex-col items-center">
                <Image src={product.image} alt={product.title} width={64} height={64} className="mb-3" />
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-700 via-yellow-600 to-orange-600 bg-clip-text text-transparent mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
