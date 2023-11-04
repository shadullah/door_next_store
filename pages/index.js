import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/Components/Layout";
import Hero from "@/Components/Hero";
import data from "@/Utils/data";
import ProductItem from "@/Components/ProductItem";

export default function Home() {
  // console.log(data.products);
  return (
    <>
      <div>
        <Layout>
          <Hero
            headings="Shop Easily at Door Next Store"
            message="Daily shopping is painful. So, Order from Door Next"
          />
          {/* collection list here */}
          <h1 className="text-2xl md:text-4xl font-bold my-16 text-red-400">
            Our Collections
            <div className=" border-red-400 border-2 w-24 mt-5 mx-auto"></div>
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 m-6 md:m-16">
            {data.products.map((product) => (
              <ProductItem product={product} key={product.slug}></ProductItem>
            ))}
          </div>
        </Layout>
      </div>
    </>
  );
}
