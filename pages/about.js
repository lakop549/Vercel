import React from 'react'
import Layout from '../components/Layout'
import { BsGithub, BsFillHouseDoorFill } from 'react-icons/bs'
import Link from 'next/link'

export default function developers() {
  return (
    <Layout title="About">
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 bg-white">
        <div class="">
          <section class="w-full flex flex-col items-center px-3">
            <article class="flex flex-col my-4 p-4">
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <iframe
                  src="https://www.youtube.com/embed/u6MLVSaQ9rc"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    width: '500%',
                    maxWidth: '1000px',
                    height: '475px',
                    border: 'none',
                    marginLeft: '-50%',
                    marginRight: '-50%',
                  }}
                ></iframe>
              </div>

              <div class="bg-white flex flex-col justify-start p-6">
                <a class="text-3xl font-bold hover:text-green-700 pb-4 text-center">
                  경기도 맛집 소개 프로젝트
                </a>
                <p class="text-sm pb-8 text-right">
                  By&nbsp;
                  <a class="font-semibold hover:text-gray-800 text-right">
                    GameMeeple
                  </a>
                  ,&nbsp;Published on 2023
                </p>
              </div>
            </article>

            <div class="p-8">
              <h1 class="text-4xl font-bold p-3 text-center">프로젝트 소개</h1>
              <div class="w-full p-4">
                <div class="h-1 bg-gradient-to-r from-lime-200 to-green-800 relative  rounded-full"></div>
              </div>
              <p class="pb-3 font-bold text-lg text-center">
                <br /> 이 프로젝트는 맛집 중에서도 경기도에 위치한 맛집들을
                소개하는 사이트로 만들어졌습니다.
                <br />
                <br />이 웹사이트를 통해 여러분은 경기도 내에서 다양한 요리
                스타일에 따른 정보를 찾으실 수 있습니다. <br />
                Open API와 카카오의 지도 API 기능을 만들었기에 <br /> 경기도의
                맛집 정보를 시각적으로 쉽게 확인하고, 해당 맛집에 대한 자세한
                정보를 얻으실 수 있습니다.
                <br />
                이를 통해 경기도를 더욱 다채롭게 경험하고, 저희와 함께 경기도
                맛집 여행을 떠나보세요.
              </p>
            </div>

            <div class="p-8">
              <h1 class="text-4xl font-bold p-3 text-center">주요 기술</h1>
              <div class="w-full p-4">
                <div class="h-1 bg-gradient-to-r from-lime-200 to-green-800 relative  rounded-full"></div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-12 p-4">
                <div class="flex flex-col text-center shadow-lg rounded-lg bg-white p-6">
                  <h1 class="text-3xl font-bold pb-3 text-center">KaKao Map</h1>
                  <img
                    src="https://play-lh.googleusercontent.com/Nvrf8Z89_3S8H6YnOLgyAbe-PSSeCZnJDA8zv7LY04hEvi8atTgp_fmQ5RZ591Qpxh5G"
                    class="rounded-full shadow-lg h-32 w-32 mx-auto mb-4"
                  />
                </div>
                <div class="flex flex-col text-center shadow-lg rounded-lg bg-white p-6">
                  <h1 class="text-3xl font-bold pb-3 text-center">Next JS</h1>
                  <img
                    src="https://blog.kakaocdn.net/dn/cfEwgI/btrQuI2bdJN/vJvxWToVIMfNGsm18ojAAk/img.png"
                    class="rounded-full shadow-lg h-32 w-32 mx-auto mb-4"
                  />
                </div>

                <div class="flex flex-col text-center shadow-lg rounded-lg bg-white p-6">
                  <h1 class="text-3xl font-bold pb-3 text-center">
                    Java Script
                  </h1>
                  <img
                    src="https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow-thumbnail.png"
                    class="rounded-full shadow-lg h-32 w-32 mx-auto mb-4"
                  />
                </div>

                <div class="flex flex-col text-center shadow-lg rounded-lg bg-white p-6">
                  <h1 class="text-3xl font-bold pb-3 text-center">Tailwind</h1>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                    class="rounded-full shadow-lg h-32 w-32 mx-auto mb-4"
                  />
                </div>

                <div class="flex flex-col text-center shadow-lg rounded-lg bg-white p-6">
                  <h1 class="text-3xl font-bold pb-3 text-center">Open API</h1>
                  <img
                    src="https://blog.kakaocdn.net/dn/b2CouG/btrLih2X0Of/MsJDwkIehiKakAGbr7UI3k/img.png"
                    class="rounded-full shadow-lg h-32 w-32 mx-auto mb-4"
                  />
                </div>

                <div class="flex flex-col text-center shadow-lg rounded-lg bg-white p-6">
                  <h1 class="text-3xl font-bold pb-3 text-center">HTML</h1>
                  <img
                    src="https://blog.kakaocdn.net/dn/9ZCsE/btqFp43DyIM/c7KHGrjY8OI3bYZvyQeej0/img.png"
                    class="rounded-full shadow-lg h-32 w-32 mx-auto mb-4"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}
