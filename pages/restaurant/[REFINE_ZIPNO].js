import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import data from "../../utils/data";
import Roadmap from "../../components/Roadmap";
import Aroundmap from "../../components/Aroundmap";
import Layout from "../../components/Layout";

export default function restaurantDetail() {
  const { query } = useRouter();
  const { REFINE_ZIPNO } = query;
  const restaurant = data.restaurants.find(
    (x) => x.REFINE_ZIPNO === REFINE_ZIPNO
  );

  if (!restaurant) {
    return <div>NOT FOUND</div>;
  }
  return (
    <Layout title={restaurant.RESTRT_NM}>
      <div>
        <section>
          <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div class="max-w-3xl">
              <h2 class="text-3xl font-bold sm:text-4xl">
                {restaurant.RESTRT_NM}
              </h2>
            </div>

            <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">

                    <img src={restaurant.IMG_URL}
                    class="absolute inset-0 h-full w-full object-cover"
                    ></img>
              </div>

              <div class="lg:py-16">
                <article class="space-y-4 text-gray-600">
                  <div class="overflow-x-auto">
                    <table class="w-full h-full divide-y-2 divide-gray-200 text-sm break-normal">
                      <tbody class="divide-y divide-gray-200">
                        <tr>
                          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            지역
                          </td>
                          <td class=" px-4 py-2 text-gray-700">
                            {restaurant.SIGUN_NM}
                          </td>
                        </tr>

                        <tr>
                          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            음식점명
                          </td>
                          <td class=" px-4 py-2 text-gray-700">
                            {restaurant.RESTRT_NM}
                          </td>
                        </tr>

                        <tr>
                          <td class=" px-4 py-2 font-medium text-gray-900">
                            대표 음식
                          </td>
                          <td class=" px-4 py-2 text-gray-700">
                            {restaurant.REPRSNT_FOOD_NM}
                          </td>
                        </tr>

                        <tr>
                          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            음식점 전화번호
                          </td>
                          <td class=" px-4 py-2 text-gray-700">
                            {restaurant.TASTFDPLC_TELNO}
                          </td>
                        </tr>

                        <tr>
                          <td class=" px-4 py-2 font-medium text-gray-900">
                            도로명주소
                          </td>
                          <td class=" px-4 py-2 text-gray-700">
                            {restaurant.REFINE_ROADNM_ADDR}
                          </td>
                        </tr>

                        <tr>
                          <td class=" px-4 py-2 font-medium text-gray-900">
                            지번주소
                          </td>
                          <td class=" px-4 py-2 text-gray-700">
                            {restaurant.REFINE_LOTNO_ADDR}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-lg text-center px-2 py-8 sm:px-3 lg:px-4">
            <h1 class="text-2xl font-bold text-gray-900 md:text-3xl">
              {restaurant.RESTRT_NM} 로드맵
            </h1>
            <div class="flex items-center justify-center">
              <div class="w-96 p-4">
                <div class="h-2 bg-gradient-to-r from-blue-300 to-purple-700 relative  rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="p-2 border-4 border-blue-400 ring-2 ring-blue-400 rounded-lg">
            <Roadmap></Roadmap>
          </div>
        </div>

        <section>
          <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <div class="absolute inset-0 h-full w-full object-cover">
                  <Aroundmap></Aroundmap>
                </div>
              </div>

              <div class="lg:py-24">
                <h2 class="text-3xl font-bold sm:text-4xl">
                  {restaurant.RESTRT_NM}
                </h2>
                <Link
                  target="_blank"
                  href={`https://map.kakao.com/link/map/${restaurant.RESTRT_NM},${restaurant.REFINE_WGS84_LAT},${restaurant.REFINE_WGS84_LOGT}`}
                  class="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500
                hover:scale-110 hover:shadow-xl hover:-rotate-2"
                >
                  <span class="text-sm font-medium">카카오맵에서 보기</span>
                  <svg
                    class="ml-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
