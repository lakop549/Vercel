import React from "react";

export default function Indexcontent({ restaurant }) {
  return (
    // <blockquote class="rounded-lg bg-gray-100 p-8">
    //   <div class="flex items-center gap-4">
    //     <img
    //       alt="Food_img"
    //       src={restaurant.IMG_URL}
    //       class="h-16 w-16 rounded-full object-cover"
    //     />

    //     <div>
    //       <div class="flex justify-center gap-0.5 text-green-500">
    //         {restaurant.REFINE_ZIPNO}
    //       </div>

    //       <p class="flex justify-center mt-1 text-lg font-medium text-gray-700">
    //         {restaurant.RESTRT_NM}
    //       </p>
    //     </div>
    //   </div>

    //   <p class="flex justify-center line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
    //     {restaurant.REPRSNT_FOOD_NM}
    //   </p>
    // </blockquote>

    <li>
      <a
        href={`/restaurant/${restaurant.REFINE_ZIPNO}`}
        class="block overflow-hidden group"
      >
        <img
          alt="Food_img"
          src={restaurant.IMG_URL}
          class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />

        <div class="relative pt-3 bg-white">
          <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {restaurant.REPRSNT_FOOD_NM}
          </h3>

          <p class="mt-2">
            <span class="sr-only"> Regular Price </span>

            <span class="tracking-wider text-gray-900">
              {restaurant.RESTRT_NM}
            </span>
          </p>
        </div>
      </a>
    </li>
  );
}
