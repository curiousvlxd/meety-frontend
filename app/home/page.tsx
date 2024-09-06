import { getSession } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user } = getSession();

  return (
    <div>
      <h1>Home</h1>
      {user && <p>Welcome {user.name}!</p>}
    </div>
  );
}