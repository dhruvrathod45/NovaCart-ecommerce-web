function Footer() {

  return (

    <footer
      className="
      bg-black
      text-white
      mt-24
      py-20
    "
    >

      <div
        className="
        max-w-[1500px]
        mx-auto
        px-8
        grid
        md:grid-cols-4
        gap-12
      "
      >

        <div>

          <h2
            className="
            text-4xl
            font-black
            tracking-[5px]
          "
          >
            NOVACART
          </h2>

          <p
            className="
            text-gray-400
            mt-4
          "
          >
            Premium Streetwear &
            Fashion Store
          </p>

        </div>

        <div>

          <h3 className="font-bold mb-4">
            SHOP
          </h3>

          <p>New Arrivals</p>
          <p>Collections</p>
          <p>Best Sellers</p>

        </div>

        <div>

          <h3 className="font-bold mb-4">
            SUPPORT
          </h3>

          <p>Contact</p>
          <p>Returns</p>
          <p>Shipping</p>

        </div>

        <div>

          <h3 className="font-bold mb-4">
            SOCIAL
          </h3>

          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>GitHub</p>

        </div>

      </div>

    </footer>

  );
}

export default Footer;