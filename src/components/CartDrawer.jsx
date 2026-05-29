import { useCart } from "../context/CartContext";

function CartDrawer({
  cartOpen,
  setCartOpen,
}) {

  const {
    cartItems,
    removeFromCart,
  } = useCart();

  return (

    <>

      {/* BACKDROP */}

      {
        cartOpen && (

          <div
            onClick={() =>
              setCartOpen(false)
            }

            className="
            fixed
            inset-0
            bg-black/40
            z-[998]
          "
          />

        )
      }

      {/* DRAWER */}

      <div
        className={`
        fixed
        top-0
        right-0
        h-full
        w-[420px]
        bg-white
        z-[999]
        shadow-2xl
        transition
        duration-500
        overflow-y-auto
        ${cartOpen
          ? "translate-x-0"
          : "translate-x-full"
        }
      `}
      >

        <div className="p-8">

          <div
            className="
            flex
            items-center
            justify-between
            mb-8
          "
          >

            <h2
              className="
              text-3xl
              font-black
            "
            >
              Your Cart
            </h2>

            <button

              onClick={() =>
                setCartOpen(false)
              }

              className="text-3xl"
            >
              ×
            </button>

          </div>

          <div className="space-y-5">

            {
              cartItems.map((item,index)=>(

                <div
                  key={index}

                  className="
                  flex
                  gap-4
                  border-b
                  pb-5
                "
                >

                  <img
                    src={item.image}

                    className="
                    w-24
                    h-24
                    object-cover
                    rounded-2xl
                  "
                  />

                  <div className="flex-1">

                    <h3
                      className="
                      text-sm
                      font-medium
                      mb-2
                      line-clamp-2
                    "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                      font-bold
                      mb-3
                    "
                    >
                      ₹{Math.floor(item.price * 85)}
                    </p>

                    <button

                      onClick={() =>
                        removeFromCart(index)
                      }

                      className="
                      text-red-500
                      text-sm
                      font-medium
                    "
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        </div>

      </div>

    </>
  );
}

export default CartDrawer;