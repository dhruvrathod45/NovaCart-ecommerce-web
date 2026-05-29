import { useCart } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useCart();

  return (

    <div
      className="
      group
      bg-white
      rounded-[28px]
      overflow-hidden
      shadow-sm
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-500
    "
    >

      {/* IMAGE */}

      <div className="relative overflow-hidden">

        <img
          src={product.image}
          alt={product.title}
          className="
          w-full
          h-[380px]
          object-contain
          bg-[#f8f8f8]
          p-8
          group-hover:scale-105
          transition
          duration-700
        "
        />

        {/* BADGE */}

        <div
          className="
          absolute
          top-4
          left-4
          bg-black
          text-white
          text-xs
          px-3
          py-1
          rounded-full
          tracking-wider
        "
        >
          BESTSELLER
        </div>

      </div>

      {/* CONTENT */}

      <div className="p-6">

        <p
          className="
          text-xs
          uppercase
          tracking-[3px]
          text-gray-400
          mb-3
        "
        >
          Premium Collection
        </p>

        <h3
          className="
          text-base
          font-semibold
          line-clamp-2
          min-h-[48px]
        "
        >
          {product.title}
        </h3>

        <div
          className="
          flex
          items-center
          gap-3
          mt-4
          mb-5
        "
        >

          <p className="font-black text-2xl">
            ₹{Math.floor(product.price * 85)}
          </p>

          <span className="text-gray-400 line-through">
            ₹{Math.floor(product.price * 100)}
          </span>

        </div>

        <button

          onClick={() =>
            addToCart(product)
          }

          className="
          w-full
          bg-black
          text-white
          py-3
          rounded-full
          font-semibold
          hover:bg-gray-900
          transition
        "
        >
          Add To Cart
        </button>

      </div>

    </div>

  );
}

export default ProductCard;