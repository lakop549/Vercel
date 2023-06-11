import React from "react";
import Link from "next/link";

export default function GourmetItem({ restaurant }) {
  return (
    <li>
      <Link
        href={`/restaurant/${restaurant.REFINE_ZIPNO}`}
        class="relative block group"
      >
        <img
          src={restaurant.IMG_URL}
          class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-80 rounded-lg"
        />
        <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
          <h3 class="text-xl font-semibold text-white">
            {restaurant.REPRSNT_FOOD_NM}
          </h3>

          <span class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
            {restaurant.RESTRT_NM}
          </span>
        </div>
      </Link>
    </li>
  );
}
