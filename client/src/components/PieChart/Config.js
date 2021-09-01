// import axios from "axios";
// import { getPlayers } from "../../utils/dataUtils";
// import { useState, useEffect } from "react";

// export default Config = ({ pName, pUse, setData, chart }) => {
//   const [data, setData] = useState([]);
//   const [playerUse, setPlayerUse] = useState([]);
//   const [playerName, setPlayerName] = useState([]);

//   const chart = () => {
//     let pUse = [];
//     let pName = [];
//     getPlayers()
//       .then((res) => {
//         console.log(res.data);
//         for (const dataObj of res.data) {
//           pName.push(dataObj.name);
//           pUse.push(dataObj.eUSG);
//         }
//         setData([
//           {
//             id: pName,
//             label: pName,
//             value: pUse,
//             color: "hsl(295, 70%, 50%)",
//           },
//           {
//             id: "Team",
//             label: "Team",
//             value: 100 - pUse,
//             color: "hsl(260, 70%, 50%)",
//           },
//         ]);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//     console.log(pUse, pName);
//   };

//   useEffect(() => {
//     chart();
//   }, []);
// };
