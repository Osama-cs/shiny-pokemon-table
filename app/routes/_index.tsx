import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPokemons } from "~/models/pokemon.server";

type LoaderData = {
  data: Awaited<ReturnType<typeof getPokemons>>;
};

export const loader = async () => {
  return json<LoaderData>({
    data: await getPokemons(),
  });
};

export default function Index() {
  const { data } = useLoaderData() as LoaderData;
  return (
    <body className="h-full bg-zinc-100">
      <div>
        <br />
        <header>
          <h1 className="text-3xl font-bold underline text-center text-sky-400 font-serif">
            <span className="text-3xl font-bold underline text-center text-sky-400">
              Shiny
            </span>
            <span className="text-3xl font-bold underline text-center text-black">
              Dex
            </span>
          </h1>
        </header>
        <h2 className="text-center">
          Welcome to ShinyDex! A place that you can view all of the shiny
          pokemon from Generation 1.
        </h2>
        <h2 className="text-center">
          Click on the name of the shiny pokemon you want to see and you will be greeted with that shiny!
        </h2>
        <div className="flex justify-center items-center">
          <div className="max-w-md py-4 px-8 shadow-lg rounded-lg my-5 bg-white">
            <div>
              <div className="">
                <table className="table-fixed shadow-lg bg-white border-separate">
                  <thead>
                    <tr>
                      <th className=" bg-blue-100 border">Pokemon Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-black">
                        <ul className="mx-auto text-center divide-y divide-black">
                          {data.map((pokemon: any) => (
                            <li key={pokemon.name}>
                              <Link
                                to={pokemon.name}
                                className="underline hover:text-sky-400"
                              >
                                {pokemon.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
