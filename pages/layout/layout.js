import styles from "./layout.module.css";
import Head from "next/head";
export default function Layout({ children, home }) {
  return (
    <div className="{styles.container}">
      <Head>
        <title>Home</title>
      </Head>
      {/* <h3>Layout</h3> */}
      <header>
        {home ? <h1>home page header</h1> : <h1>other page header</h1>}
      </header>
      <main> {children}</main>
      <footer>footer</footer>
    </div>
  );
}
