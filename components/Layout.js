import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut, useSession } from "next-auth/react";
import { Menu } from "@headlessui/react";
import Cookies from "js-cookie";
import { ArrowUturnRightIcon, Cog6ToothIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    signOut({ callbackUrl: "/signin" });
  };

  return (
    <>
      <Head>
        <title>
          {title ? title + " - GyeonggiGourmet" : "GyeonggiGourmet"}
        </title>
        <meta name="description" content="Nextjs" />
        <link rel="icon" href="/head.png" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />

      <div>
        <div class="w-full py-4 bg-blue-800 shadow">
          <div class="w-full container mx-auto flex flex-wrap items-center justify-between"></div>
        </div>

        <div class="w-full container mx-auto">
          <div class="flex flex-col items-center py-12">
            <Image
              class="py-2"
              src="/gourmet.png"
              width={50}
              height={50}
              alt="Gourmet"
            />
            <Link
              class="py-2 font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
              href="/"
            >
              Gyeonggi Gourmet
            </Link>

            <p class="py-2 text-lg text-gray-600">경기도 으뜸 맛집 소개</p>
          </div>
        </div>

        <nav class="w-full py-4 border-t border-b bg-gray-100">
          <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
            <div class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
              <Link
                href="/restlist"
                class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
              >
                음식점 정보
              </Link>
              <Link
                href="/about"
                class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
              >
                사이트 소개
              </Link>
              <Link
                href="/dev"
                class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
              >
                개발자 소개
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <main className="">{children}</main>
      <footer class="bg-gray-50">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex justify-center text-teal-600 sm:justify-start">
              <Image
                class="py-2"
                src="/gourmet.png"
                width={50}
                height={50}
                alt="Gourmet"
              />
            </div>

            <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2023 Team - GameMeeple.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
