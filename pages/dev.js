import React from "react";
import Layout from "../components/Layout";
import { FaGithub, FaHome } from "react-icons/fa";

export default function dev() {
  return (
    <Layout title="Dev">
      <div className="container mx-auto h-screen bg-white font-baloo-paaji-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center h-full">
          <div className="card bg-gray-900 h-96 rounded-2xl flex flex-col items-center shadow-lg text-white">
            <img
              src="/images/DAP.jpg"
              alt="Person"
              className="card__image h-40 w-40 rounded-full border-8 border-indigo-800 mt-10 shadow-lg"
            />
            <p className="card__name mt-6 text-2xl">김다혁</p>
            <div className="grid-container grid grid-cols-2 text-lg mt-4">
              <div className="grid-child-posts">중부대학교</div>
              <div className="grid-child-followers">정보보호학과</div>
            </div>
            <div className="flex items-center">
              <button className="btn draw-border text-indigo-500 hover:text-yellow-500">
                <a
                  href="https://github.com/JBUkim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center">
                    <FaGithub className="mr-2" size={35} /> <span>GITHUB</span>
                  </span>
                </a>
              </button>
            </div>
            <button className="btn draw-border text-indigo-500 hover:text-yellow-500">
              <a
                href="https://web-blog-12103-tailwind.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center">
                  <FaHome className="mr-2" size={35} /> <span>HOMEPAGE</span>
                </span>
              </a>
            </button>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="card bg-gray-900 h-96 rounded-2xl flex flex-col items-center shadow-lg text-white">
              <img
                src="/images/Joo.jpg"
                alt="Person"
                className="card__image h-40 w-40 rounded-full border-8 border-indigo-800 mt-10 shadow-lg"
              />
              <p className="card__name mt-6 text-2xl">원주연</p>
              <div className="grid-container grid grid-cols-2 text-lg mt-4">
                <div className="grid-child-posts flex">중부대학교</div>
                <div className="grid-child-followers">정보보호학과</div>
              </div>
              <div className="flex items-center">
                <button className="btn draw-border text-indigo-500 hover:text-yellow-500">
                  <a
                    href="https://github.com/lakop549"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center">
                      <FaGithub className="mr-2" size={35} /> GITHUB
                    </span>
                  </a>
                </button>
              </div>
              <button className="btn draw-border text-indigo-500 hover:text-yellow-500">
                <a
                  href="https://main--musical-muffin-ba5f3a.netlify.app/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center">
                    <FaHome className="mr-2" size={35} /> <span>HOMEPAGE</span>
                  </span>
                </a>
              </button>
            </div>
            <div className="card bg-gray-900 h-96 rounded-2xl flex flex-col items-center shadow-lg text-white">
              <img
                src="/images/HSH.jpg"
                alt="Person"
                className="card__image h-40 w-40 rounded-full border-8 border-indigo-800 mt-10 shadow-lg"
              />
              <p className="card__name mt-6 text-2xl">홍승현</p>
              <div className="grid-container grid grid-cols-2 text-lg mt-4">
                <div className="grid-child-posts">중부대학교</div>
                <div className="grid-child-followers">정보보호학과</div>
              </div>
              <div className="flex items-center">
                <button className="btn draw-border text-indigo-500 hover:text-yellow-500">
                  <a
                    href="https://github.com/honk0128"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center">
                      <FaGithub className="mr-2" size={35} /> GITHUB
                    </span>
                  </a>
                </button>
              </div>
              <button className="btn draw-border text-indigo-500 hover:text-yellow-500">
                <a
                  href="https://fanciful-pie-66f4e7.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center">
                    <FaHome className="mr-2" size={35} /> <span>HOMEPAGE</span>
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
