// import Layout from "../layout/layout.js";

// export default function Page({ posts }) {
//   return;
//   <Layout>
//     <h1>{posts.title}</h1>;<p>{posts.description}</p>
//   </Layout>;
// }

// export async function getStaticProps() {
//   const posts = { title: "New post", description: "post data from vs" };
//   return {
//     props: {
//       posts,
//     },
//   };
// }

// export const getStaticProps = async()=> {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await res.json();

//   return{
//     props:{ninjas:data}
//   }
// }

// const Ninjas =({ninjas})=>{
//   return(
//     <div>
//       <h1>all data fetched</h1>
//       {ninjas.map(ninja => (
//         <div key={ninja.id}>
//           <a>
//             <h3>{ninja.name}</h3>
//           </a>
//       ))}
//     </div>
//   );
// }

// export default Ninjas;
