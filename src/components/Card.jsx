export default function Card({ user: { username, email } }) {
  return (
    <>
      <h1>{username}</h1>
      <h2>{email}</h2>
    </>
  );
}
