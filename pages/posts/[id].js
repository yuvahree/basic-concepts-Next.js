import { getAllPosts } from "../lib/helper";
//http://localhost:3000/posts/1
//http://localhost:3000/posts/2

export default function Post({ post }) {
  return (
    <article>
      {post.map((p) => {
        <div key={p.id}>
          <h1>{p.id}</h1>
          <h1>{p.title}</h1>
          <h1>{p.description}</h1>
        </div>;
      })}
    </article>
  );
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const post = getAllPosts();

  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString },
  }));

  return {
    paths,
    fallback: false,
  };
}
