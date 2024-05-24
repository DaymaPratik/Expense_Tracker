

const OutputTable = ({transDataArr,deleteItem}) => {
    return (
        <div
          id="your-transaction-display-history"
          className="mx-auto w-[90%] min-[550px]:w-[70%]  h-[450px] overflow-y-scroll min-[750px]:w-[50%] bg-[#2ac1f042]  text-center shadow-[0px_0px_12px_3px_black]"
        >
          <p className="w-[100%] text-[25px] min-[1000px]:text-[35px] font-bold ">
            Transaction History
          </p>
          <table
            id="transaction-table"
            className="w-[100%] text[15px] min-[1150px]:text-[25px] font-semibold border-2 border-black "
          >
            <thead>
              <th className="border-2 border-black text-center">Sr.No</th>
              <th className="border-2 border-black">Description</th>
              <th className="border-2 border-black">Amount</th>
              <th className="border-2 border-black">Type</th>
              <th className="border-2 border-black">Date</th>
              <th className="border-2 border-black">
                <button>Delete</button>
              </th>
            </thead>
            <tbody>
              {transDataArr.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td className="border-2 border-black text-center">{idx+1}</td>
                    <td className="border-2 border-black">{item.tittle}</td>
                    <td className="border-2 border-black">{item.amt}</td>
                    <td className="border-2 border-black">{item.aType}</td>
                    <td className="border-2 border-black">{item.dates}</td>
                    <td
                      className="border-2 border-black hover:bg-black transtition duration-200 ease-in hover:cursor-pointer"
                      onClick={() => deleteItem(idx)}
                    >
                      <button><img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="" className="w-[25px]" /></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
    );
}

export default OutputTable;
