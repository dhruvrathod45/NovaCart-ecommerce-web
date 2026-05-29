import {
  FiSearch,
  FiUser,
  FiShoppingBag,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";

function Navbar({
  setCartOpen,
  setLoginOpen,
}) {

  const { cartItems } = useCart();

  return (
    <>

      {/* TOP BAR */}

      <div
        className="
        fixed
        top-0
        left-0
        w-full
        z-[60]
        bg-black
        text-white
        text-center
        py-2
        text-xs
        tracking-[4px]
      "
      >
        FREE SHIPPING ON ORDERS ABOVE ₹1999
      </div>

      {/* NAVBAR */}

      <header
        className="
        fixed
        top-8
        left-0
        w-full
        z-50
        bg-white/90
        backdrop-blur-xl
        border-b
        border-gray-200
      "
      >

        <div
          className="
          max-w-[1500px]
          mx-auto
          flex
          items-center
          justify-between
          px-8
          py-5
        "
        >

          {/* LEFT */}

          <div
            className="
            hidden
            lg:flex
            gap-8
            text-sm
            font-medium
          "
          >

            <button>
              Shop
            </button>

            <button>
              New Arrivals
            </button>

            <button>
              Collections
            </button>

            <button>
              Best Sellers
            </button>

          </div>

          {/* LOGO */}

          <div className="text-center">

            <h1
              className="
              text-4xl
              font-black
              tracking-[8px]
            "
            >
              NOVACART
            </h1>

            <p
              className="
              text-[10px]
              tracking-[5px]
              text-gray-500
            "
            >
              PREMIUM STREETWEAR
            </p>

          </div>

          {/* RIGHT */}

          <div
            className="
            flex
            items-center
            gap-6
            text-xl
          "
          >

            <FiSearch
              className="
              cursor-pointer
              hover:scale-110
              transition
            "
            />

            <FiUser

              onClick={() =>
                setLoginOpen(true)
              }

              className="
              cursor-pointer
              hover:scale-110
              transition
            "
            />

            <div

              onClick={() =>
                setCartOpen(true)
              }

              className="
              relative
              cursor-pointer
            "
            >

              <FiShoppingBag
                className="
                hover:scale-110
                transition
              "
              />

              <span
                className="
                absolute
                -top-2
                -right-2
                bg-black
                text-white
                text-[10px]
                w-5
                h-5
                rounded-full
                flex
                items-center
                justify-center
              "
              >
                {cartItems.length}
              </span>

            </div>

          </div>

        </div>

      </header>

    </>
  );
}

export default Navbar;