import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "./ProductCard";

function ProductGrid({ activeFilter }) {

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        setLoading(true);

        const res = await axios.get(
          "https://fakestoreapi.com/products"
        );

        let filtered = res.data;

        if (activeFilter === "mens") {

          filtered = res.data.filter(
            (item) =>
              item.category === "men's clothing"
          );

        }

        else if (activeFilter === "womens") {

          filtered = res.data.filter(
            (item) =>
              item.category === "women's clothing"
          );

        }

        else if (activeFilter === "electronics") {

          filtered = res.data.filter(
            (item) =>
              item.category === "electronics"
          );

        }

        else if (activeFilter === "jewelery") {

          filtered = res.data.filter(
            (item) =>
              item.category === "jewelery"
          );

        }

        setProducts(filtered);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

    fetchProducts();

  }, [activeFilter]);

  return (

    <section
      className="
      max-w-[1500px]
      mx-auto
      px-8
      pb-28
    "
    >

      {
        loading
        ? (

          <div
            className="
            text-center
            py-20
            text-gray-500
          "
          >
            Loading products...
          </div>

        )
        : (

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-10
          "
          >

            {
              products.map((product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              ))
            }

          </div>

        )
      }

    </section>
  );
}

export default ProductGrid;