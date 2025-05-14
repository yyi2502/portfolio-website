"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";

export default function Content() {
  return (
    <section id="about" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-wrap w-full mb-20"
        >
          <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              yyi2502について
            </h2>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-2/3 w-full leading-relaxed text-gray-500">
            Web制作、ライティング、ディレクション業務を中心に、10年以上にわたりインターネット関連業務に従事してきました。
            <br />
            現在、フロントエンドエンジニアへのキャリアチェンジを目指し、プログラミングスクールに通いながら技術を習得中です。
          </p>
        </motion.div>
        <div className="flex flex-wrap -m-4 mt-10" id="works">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className=" bg-gray-100 p-6 rounded-lg relative"
            >
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/p01-make-maze.png"
                alt="content"
                width={400}
                height={160}
              />
              <div className="flex items-center gap-x-1 mt-2">
                <FaReact size={20} color="#e34c26" title="react" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font">
                迷路生成アプリ
              </h2>
              <p className="leading-relaxed text-base">
                子ども向けに、難易度を調整できて手軽に印刷できる迷路を作成しました。
              </p>
              <p className="font-lightfont-extralight mt-2">
                <a
                  href="https://github.com/yyi2502/react-make-maze/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <IoIosLink className="text-xl" />
                  GitHub
                </a>
              </p>
              <p className="font-lightfont-extralight">
                <a
                  href="https://react-make-maze.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <IoIosLink className="text-xl" />
                  Vercel デモページ
                </a>
              </p>
            </motion.div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1.2, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className=" bg-gray-100 p-6 rounded-lg relative"
            >
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/p02-todo-app.png"
                alt="content"
                width={400}
                height={160}
              />
              <div className="flex items-center gap-x-1 mt-2">
                <SiNextdotjs size={20} color="#000" title="Next.js" />
                <RiSupabaseLine size={20} color="#3fc48a" title="Supabase" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font">
                TODOチャレンジ
              </h2>
              <p className="leading-relaxed text-base">
                親子で楽しみながらタスクを管理できるToDoアプリです。
              </p>
              <p className="font-lightfont-extralight mt-2">
                <a
                  href="https://github.com/yyi2502/family-todo-app/blob/master/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <IoIosLink className="text-xl" />
                  GitHub
                </a>
              </p>
              <p className="font-lightfont-extralight">
                <a
                  href="https://family-todo-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <IoIosLink className="text-xl" />
                  Vercel デモページ
                </a>
                <br />
                <span className="text-xs">
                  (テスト用ログインアドレス&PW：test@test.com)
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
