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
    <body className="h-full bg-sky-500">
      <div>
        <h1 className="text-3xl font-bold underline text-center text-white">
          ShinyDex
        </h1>
        <div className="flex justify-center items-center">
          <div className="max-w-md py-4 px-8 shadow-lg rounded-lg my-20">
            <div>
              <div className="">
                <table className="table-fixed border-separate border border-yellow-200">
                  <thead>
                    <tr>
                      <th className="border border-yellow-200 w-1/3">
                        Pokemon Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-yellow-200">
                        <ul className="mx-auto text-center">
                          {data.map((pokemon: any) => (
                            <li key={pokemon.name}>
                              <Link
                                to={pokemon.name}
                                className="text-blue-600 underline"
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
