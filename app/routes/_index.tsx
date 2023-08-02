export default function Index() {
  return (
    <body className="h-screen bg-sky-500">
      <div>
        <h1 className="text-3xl font-bold underline text-center text-white">
          ShinyDex
        </h1>
        <div className="flex justify-center items-center">
          <div className="max-w-md py-4 px-8 bg-sky-500 shadow-lg rounded-lg my-20">
            <div>
              <h2 className=" flex items-center justify-center text-gray-800 text-3xl font-semibold text-center ">
                Design Tools
              </h2>
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                  </tr>
                  <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                  </tr>
                  <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                  </tr>
                </tbody>
              </table>
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
