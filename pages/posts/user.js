export default function Users({ users }) {
  return (
    <article>
      {users.map((u) => (
        <div>
          <h1>{u.name}</h1>
        </div>
      ))}
    </article>
  );
}

export async function getStaticprops() {
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
