export default function Page({ props }) {
  return;
  <Layout>
    <h1>{props.title}</h1>;<p>{props.description}</p>
  </Layout>;
}

export async function getServerSideProps() {
  const posts = {
    title: "New post",
    description: "post data from vs server side",
  };
  return {
    props: posts,
  };
}
