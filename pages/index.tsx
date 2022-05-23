import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Button from "../components/button";
import { ITodoItem } from "../models/ITodoItem";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);

  const pushTodoItem = () => {
    setTodoItems([
      ...todoItems,
      {
        item: "sample item",
        description: "sample description",
        isDone: false,
      },
    ]);
  };

  return (
    <>
      <Head>
        <title>Sample App</title>
        <meta name="description" content="This is a sample app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="text-3xl">TODO App</h1>

        {todoItems.map((item, i) => (
          <div key={i}>This is a sample TODO App</div>
        ))}

        <div>
          <Button
            title="Add item"
            onclick={(e) => {
              e.preventDefault();
              pushTodoItem();
            }}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
