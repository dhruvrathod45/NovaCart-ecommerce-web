import { useState } from "react";

import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import CartDrawer from "../components/CartDrawer";
import AuthScreen from "../components/AuthScreen";

function Home() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [entered, setEntered] = useState(false);

  const [activeFilter, setActiveFilter] =
    useState("all");

  return (
    <div className="bg-[#f8f7f4] min-h-screen">

      {!entered && (
        <AuthScreen
          enterStore={() => setEntered(true)}
        />
      )}

      <Navbar
        setLoginOpen={setLoginOpen}
        setCartOpen={setCartOpen}
      />

      <LoginModal
        loginOpen={loginOpen}
        setLoginOpen={setLoginOpen}
      />

      <CartDrawer
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />

      {/* HERO */}

      <section className="pt-24">

        <div className="relative h-[90vh] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1800&auto=format&fit=crop"
            alt="fashion"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute bottom-24 left-12 text-white">

            <p className="uppercase tracking-[8px] text-sm mb-5">
              LUXURY STREETWEAR
            </p>

            <h1 className="text-7xl md:text-[140px] font-black leading-none">
              NOVACART
            </h1>

            <p className="text-xl mt-4 max-w-xl">
              Crafted for modern fashion lovers.
              Premium collections inspired by
              luxury, comfort and confidence.
            </p>

            <button
              className="
              mt-8
              px-10
              py-4
              rounded-full
              bg-white
              text-black
              font-semibold
              hover:scale-105
              transition
            "
            >
              SHOP COLLECTION
            </button>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div>
              <h2 className="text-5xl font-black">
                25K+
              </h2>
              <p className="text-gray-500 mt-3">
                Happy Customers
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-black">
                150+
              </h2>
              <p className="text-gray-500 mt-3">
                Premium Products
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-black">
                4.9★
              </h2>
              <p className="text-gray-500 mt-3">
                Average Rating
              </p>
            </div>

          </div>

        </div>

      </section>

      <Filters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <section className="px-10 pb-8">

        <h2 className="text-5xl font-black">
          TRENDING NOW
        </h2>

        <p className="text-gray-500 mt-3">
          Explore our premium collection.
        </p>

      </section>

      <ProductGrid
        activeFilter={activeFilter}
      />

      <Footer />

    </div>
  );
}

export default Home;