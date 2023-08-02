export default function Index() {
  return (
    <body className="h-screen bg-sky-500">
      <div>
        <h1 className="text-3xl font-bold underline text-center text-white">
          ShinyDex
        </h1>
        <div className="flex justify-center items-center">
          <div className="max-w-md py-4 px-8 shadow-lg rounded-lg my-20">
            <div>
              <h2 className=" flex items-center justify-center text-gray-800 text-3xl font-semibold text-center ">
                Design Tools
              </h2>
              <br/>
              <div className="">
              <table className="table-fixed border-separate border border-yellow-200">
                <thead>
                  <tr>
                    <th className="border border-yellow-200 w-1/3">Song</th>
                    <th className="border border-yellow-200 w-1/3">Artist</th>
                    <th className="border border-yellow-200 w-1/3">Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-yellow-200">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="border border-yellow-200">Malcolm Lockyer</td>
                    <td className="border border-yellow-200">1961</td>
                  </tr>
                  <tr>
                    <td className="border border-yellow-200">Witchy Woman</td>
                    <td className="border border-yellow-200">The Eagles</td>
                    <td className="border border-yellow-200">1972</td>
                  </tr>
                  <tr>
                    <td className="border border-yellow-200">Shining Star</td>
                    <td className="border border-yellow-200">Earth, Wind, and Fire</td>
                    <td className="border border-yellow-200">1975</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 ">
              <a href="#" className="text-xl font-medium text-indigo-500">
                John Doe
              </a>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

{
  /* <p className="mt-2 text-gray-600 flex items-center justify-center"></p> */
}
