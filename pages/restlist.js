import React, { useState } from "react";
import GourmetItem from "../components/GourmetItem";
import data from "../utils/data";
import Layout from "../components/Layout";
import Swal from "sweetalert2";

export default function page() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(data.restaurants);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleSearch = (e) => {
    e.preventDefault();
    const searchResults = !search
      ? data.restaurants
      : data.restaurants.filter((r) =>
          r.RESTRT_NM.toLowerCase().includes(search.toLowerCase())
        );
    if (searchResults.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "검색 결과가 존재하지 않습니다.",
        footer: '<a href="">다시 검색하기</a>',
      });
    } else {
      setResults(searchResults);
    }
  };

  const totalPages = Math.ceil(results.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = results.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout title="RestaurantList">
      <div>
        <section class="">
          <div class="p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="mx-auto max-w-lg text-center">
              <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                경기도 으뜸 맛집을 검색해 보세요!
              </h2>
            </div>

            <div class="mx-auto mt-8 max-w-xl">
              <form action="#" onSubmit={handleSearch} class="sm:flex sm:gap-4">
                <div class="sm:flex-1">
                  <input
                    type="text"
                    placeholder="검색하고 싶은 단어를 입력해주세요."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    class="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-md transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                  />
                </div>

                {/* <button
                  type="submit"
                  class="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-400 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                >
                  <span class="text-sm font-medium"> 검색하기 </span>

                  <svg
                    class="h-5 w-5 rtl:rotate-180"
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
                </button> */}
                <button
                  class="rounded-lg group relative inline-block text-sm font-medium text-blue-600 active:text-blue-500 focus:outline-none focus:ring focus:ring-coral-400 sm:mt-0 sm:w-auto"
                  type="submit"
                >
                  <span class="rounded-lg absolute inset-0 border border-current"></span>
                  <span class="rounded-lg block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                    검색하기
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>

        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            {currentItems.map((restaurant) => (
              <GourmetItem
                restaurant={restaurant}
                key={restaurant.REFINE_ZIPNO}
              />
            ))}
          </ul>
        </div>

        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <div class="flex justify-center">
            <nav class="flex items-center gap-2" aria-label="Pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  class={`px-4 py-2 rounded-md focus:outline-none focus:ring ${
                    currentPage === index + 1
                      ? "bg-blue-400 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
}
