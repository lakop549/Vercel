import React from "react";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useRouter } from "next/router";
import data from "../utils/data";

export default function Aroundmap() {
  // 인포윈도우 Open 여부를 저장하는 state 입니다.
  const [isOpen, setIsOpen] = useState(false);

  const { query } = useRouter();
  const { REFINE_ZIPNO } = query;
  const restaurant = data.restaurants.find(
    (x) => x.REFINE_ZIPNO === REFINE_ZIPNO
  );

  const CustomOverlay = () => (
    <a
      class="relative block overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${restaurant.IMG_URL})` }}
      onClick={() => setIsOpen(false)}
    >
      <div class="absolute inset-0 bg-black/25"></div>

      <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
        <div class="sm:pt-18 pt-12 text-white lg:pt-24">
          <p class="text-sm">{restaurant.SIGUN_NM}</p>
          <p class="text-xl font-bold">{restaurant.RESTRT_NM}</p>
        </div>

        <span class="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
          {restaurant.REFINE_ZIPNO}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-yellow-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg> */}
        </span>
      </div>
    </a>
  );

  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: restaurant.REFINE_WGS84_LAT,
        lng: restaurant.REFINE_WGS84_LOGT,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
      level={3} // 지도의 확대 레벨
    >
      <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
        position={{
          // 인포윈도우가 표시될 위치입니다
          lat: restaurant.REFINE_WGS84_LAT,
          lng: restaurant.REFINE_WGS84_LOGT,
        }}
        clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        // 마커에 마우스오버 이벤트를 등록합니다
        onClick={() => setIsOpen(true)}
      >
        {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
        {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
        {isOpen && <CustomOverlay />}
      </MapMarker>
    </Map>
  );
}
