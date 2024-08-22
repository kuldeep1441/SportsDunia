import React, { useState, useEffect } from "react";
import data from "../data/collegeData";

const CollegeTable = () => {
  const [colleges, setColleges] = useState([]);
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState("ranking");
  const [sortOrder, setSortOrder] = useState("asc");
  const [visibleCount, setVisibleCount] = useState(11);

  useEffect(() => {
    const sortedData = [...data]
      .sort((a, b) => {
        if (sortOrder === "asc") {
          return a[sortKey] > b[sortKey] ? 1 : -1;
        } else {
          return a[sortKey] < b[sortKey] ? 1 : -1;
        }
      })
      .filter((college) =>
        college.name?.toLowerCase().includes(query.toLowerCase())
      );
    setColleges(sortedData.slice(0, visibleCount));
  }, [query, sortKey, sortOrder, visibleCount]);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && visibleCount < data.length) {
      setVisibleCount((prevCount) => prevCount + 10);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by college name..."
        className="p-2 border border-gray-300 mb-4 w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div
        onScroll={handleScroll}
        className="overflow-y-auto max-h-[400px] border border-gray-300 rounded-lg"
      >
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200 sticky top-0">
            <tr>
              <th
                onClick={() => setSortKey("ranking")}
                className="p-2 cursor-pointer"
              >
                Ranking
              </th>
              <th className="p-2">College</th>
              <th
                onClick={() => setSortKey("fees")}
                className="p-2 cursor-pointer"
              >
                Course Fees
              </th>
              <th
                onClick={() => setSortKey("placement")}
                className="p-2 cursor-pointer"
              >
                Placement
              </th>
              <th
                onClick={() => setSortKey("user_reviews")}
                className="p-2 cursor-pointer"
              >
                User Reviews
              </th>
            </tr>
          </thead>
          <tbody>
            {colleges.map((college) => (
              <tr
                key={college.id}
                className={`border-b ${college.featured ? "bg-yellow-50" : ""}`}
              >
                <td className="p-2">{college.ranking}</td>
                <td className="p-2">{college.name}</td>
                <td className="p-2">{college.fees}</td>
                <td className="p-2">{college.placement}</td>
                <td className="p-2">{college.user_reviews}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CollegeTable;

// import React, { useState, useEffect } from "react";
// import data from "../data/collegeData";

// const CollegeTable = () => {
//   const [colleges, setColleges] = useState([]);
//   const [query, setQuery] = useState("");
//   const [sortKey, setSortKey] = useState("ranking");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [visibleCount, setVisibleCount] = useState(11);

//   useEffect(() => {
//     const sortedData = [...data]
//       .sort((a, b) => {
//         if (sortOrder === "asc") {
//           return a[sortKey] > b[sortKey] ? 1 : -1;
//         } else {
//           return a[sortKey] < b[sortKey] ? 1 : -1;
//         }
//       })
//       .filter((college) =>
//         college.name.toLowerCase().includes(query.toLowerCase())
//       );
//     setColleges(sortedData.slice(0, visibleCount));
//   }, [query, sortKey, sortOrder, visibleCount]);

//   const handleScroll = (e) => {
//     if (
//       e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight &&
//       visibleCount < data.length
//     ) {
//       setVisibleCount((prevCount) => prevCount + 10);
//     }
//   };

//   return (
//     <div className="p-4">
//       <input
//         type="text"
//         placeholder="Search by college name..."
//         className="p-2 border border-gray-300 mb-4 w-full"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <div
//         onScroll={handleScroll}
//         className="overflow-y-auto max-h-[400px] border border-gray-300 rounded-lg"
//       >
//         <table className="min-w-full bg-white">
//           <thead className="bg-gray-200 sticky top-0">
//             <tr>
//               <th
//                 onClick={() => setSortKey("ranking")}
//                 className="p-2 cursor-pointer"
//               >
//                 Ranking
//               </th>
//               <th className="p-2">College</th>
//               <th
//                 onClick={() => setSortKey("fees")}
//                 className="p-2 cursor-pointer"
//               >
//                 Course Fees
//               </th>
//               <th
//                 onClick={() => setSortKey("placement")}
//                 className="p-2 cursor-pointer"
//               >
//                 Placement
//               </th>
//               <th
//                 onClick={() => setSortKey("user_reviews")}
//                 className="p-2 cursor-pointer"
//               >
//                 User Reviews
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {colleges.map((college) => (
//               <tr
//                 key={college.id}
//                 className={`border-b ${college.featured ? "bg-yellow-50" : ""}`}
//               >
//                 <td className="p-2">{college.ranking}</td>
//                 <td className="p-2">{college.name}</td>
//                 <td className="p-2">{college.fees}</td>
//                 <td className="p-2">{college.placement}</td>
//                 <td className="p-2">{college.user_reviews}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CollegeTable;
