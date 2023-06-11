import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import data from "../utils/data";
import { useRouter } from "next/router";
import Indexcontent from "../components/Indexcontent";

export default function Home() {
  const { query } = useRouter();
  const { REFINE_ZIPNO } = query;
  const restaurant = data.restaurants.find(
    (x) => x.REFINE_ZIPNO === REFINE_ZIPNO
  );

  const [randomSixRestaurants, setRandomSixRestaurants] = useState([]);

  const getRandomRestaurants = () => {
    return data.restaurants.sort(() => 0.5 - Math.random()).slice(0, 8);
  };

  useEffect(() => {
    setRandomSixRestaurants(getRandomRestaurants());
  }, []);

  return (
    <Layout title="Home">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <section>
          <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <div class="text-center">
              <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
                오늘의 추천 음식점 TOP8
              </h2>

              <p class="max-w-md mx-auto mt-4 text-gray-500">
                오늘은 이런음식은 어떠세요?
              </p>
            </div>

            <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
              {randomSixRestaurants.map((restaurant) => (
                <Indexcontent
                  restaurant={restaurant}
                  key={restaurant.REFINE_ZIPNO}
                ></Indexcontent>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}
