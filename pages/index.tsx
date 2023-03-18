import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-green-300">
        Netflix Clone
      </h1>
      <button
        type="button"
        className="h-10 w-full bg-white"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </>
  );
}
