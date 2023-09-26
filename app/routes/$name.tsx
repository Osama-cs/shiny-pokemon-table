import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPokemon } from "~/models/pokemon.server";

type LoaderData = {
  pokemon: Awaited<ReturnType<typeof getPokemon>>;
};

export const loader: LoaderFunction = async ({ params }) => {
  return json({
    pokemon: await getPokemon(params.name),
  });
};

export default function PostSlug() {
  const { pokemon } = useLoaderData() as LoaderData;
  return (
    <body className="h-screen bg-zinc-100 py-48">
      <div className="text-center">
        <span className="text-3xl text-center text-black">This is shiny: </span>
        <span className="text-3xl text-center text-black"></span>
        <span className="text-3xl font-bold text-center text-sky-400">
          {pokemon.name?.charAt(0).toUpperCase()}
          {pokemon.name?.slice(1)}
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-md py-4 px-8 shadow-lg rounded-lg my-5 bg-white">
          <div>
            <div className="">
              <img className="mx-auto" src={pokemon.frontImg} />
              <img className="mx-auto" src={pokemon.backImg} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-sky-400 hover:bg-sky-500 shadow-lg transition-colors duration-150 text-black border rounded-full px-4 py-2">
          <Link to={"/"}> Home </Link>
        </button>
      </div>
    </body>
  );
}
