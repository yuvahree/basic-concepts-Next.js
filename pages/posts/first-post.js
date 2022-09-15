import Head from "next/head";
// import Script from "next/script";
import Image from "next/image";
// import nextjs from "../../public/images/logo.png";
import Styles from "../../styles/sass/style.module.scss";
import Layout from "../layout/layout.js";

// export default function Firstpost() {
//   return <h1>first blog post</h1>;
// }

export default function Firstpost() {
  return (
    <Layout>
      <Head>
        <title>my first post</title>
        {/* <Script src ="" strategy ='lazyOnload' onLoad={()}></Script> */}
        {/* <script src="https://www.tutorialspoint.com/nextjs/nextjs_static_serving.htm"/> */}
      </Head>

      {/* <h1 className={Styles["topic"]}>first blog post</h1> */}
      <h1 className={Styles.topic}>first blog post</h1>

      {/* <Image src={nextjs} /> */}
      <Image src="/images/logo.png" width={300} height={300} />
      {/* <Image src="/images/logo.png" layout="fill" /> */}
    </Layout>
  );
}
