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
    <div className={styles.container}>
      <Head>
        <title>Sample App</title>
        <meta name="description" content="This is a sample app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="text-3xl">TODO App</h1>

        {todoItems.map((item, i) => (
          <div key={i}>item here</div>
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

      <footer className={styles.footer}>
        Powered by
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  );
};

export default Home;
