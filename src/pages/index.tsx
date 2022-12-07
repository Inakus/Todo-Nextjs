import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import Main from "../components/main";
import Footer from "../components/footer";
import { ApiGet, IApi } from "../common/fetchApi";

const Home: NextPage = () => {
  useEffect(() => {
    ApiGet(process.env.NEXT_PUBLIC_API_URL!).then((res: IApi) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default Home;
