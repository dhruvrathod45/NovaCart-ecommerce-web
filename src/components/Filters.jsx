function Filters({

  activeFilter,
  setActiveFilter,

}) {

  const filters = [

    {
      name:"all",
      label:"All Products"
    },

    {
      name:"mens",
      label:"Menswear"
    },

    {
      name:"womens",
      label:"Womenswear"
    },

    {
      name:"electronics",
      label:"Tech"
    },

    {
      name:"jewelery",
      label:"Accessories"
    },

  ];

  return (

    <section className="max-w-[1500px] mx-auto px-8 py-16">

      <div className="mb-8">

        <p
          className="
          uppercase
          tracking-[5px]
          text-sm
          text-gray-500
          mb-3
        "
        >
          Browse Collections
        </p>

        <h2
          className="
          text-4xl
          md:text-5xl
          font-black
        "
        >
          Shop By Category
        </h2>

      </div>

      <div
        className="
        flex
        gap-4
        flex-wrap
      "
      >

        {
          filters.map((item,index)=>(

            <button

              key={index}

              onClick={() =>
                setActiveFilter(item.name)
              }

              className={`
                px-8
                py-4
                rounded-full
                text-sm
                font-semibold
                transition-all
                duration-300

                ${
                  activeFilter === item.name

                  ? "bg-black text-white shadow-lg"

                  : "bg-white border border-gray-300 hover:bg-black hover:text-white"
                }
              `}
            >
              {item.label}
            </button>

          ))
        }

      </div>

    </section>
  );
}

export default Filters;