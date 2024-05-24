import { useEffect, useState } from "react";
import OutputTable from "../OutputTable/OutputTable";
import Summary from "../Summary/Summary";


const Home = () => {
  let initialDataArr = JSON.parse(localStorage.getItem("list"));
  let [inc, setInc] = useState(JSON.parse(localStorage.getItem("income")));
  let [exp, setExp] = useState(JSON.parse(localStorage.getItem("expense")));
  let [bal, setBal] = useState(JSON.parse(localStorage.getItem("balance")));
  let [sav, setSav] = useState(JSON.parse(localStorage.getItem("saving")));
  let [tittle, setTittle] = useState("");
  let [amt, setAmt] = useState();
  let [aType, setAType] = useState("");
  let [dates, setDates] = useState("");

  let [transDataArr, setTransDataArr] = useState(initialDataArr || []);
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(transDataArr));
    localStorage.setItem("income", JSON.stringify(inc));
    localStorage.setItem("expense", JSON.stringify(exp));
    localStorage.setItem("saving", JSON.stringify(sav));
    localStorage.setItem("balance", JSON.stringify(bal));
  }, [transDataArr, inc, bal, sav, exp]);

  let transObj = {
    tittle,
    amt,
    aType,
    dates,
  };

  function addTransaction(e) {
    e.preventDefault();
    setTransDataArr([...transDataArr, transObj]);
    displayTansaction();
  }

  function displayTansaction() {
    amt = Number(amt);
    if (aType === "Income") {
      setInc(inc + amt);
      setBal(bal + amt);
    } else if (aType === "Expenditure") {
      setExp(exp + amt);
      setBal(bal - amt);
    } else if (aType === "Savings") {
      setSav(sav + amt);
      setBal(bal - amt);
    }
  }

  function deleteItem(idx) {
    let deletedItem = transDataArr[idx];
    deletedItem.amt = Number(deletedItem.amt);
    if (deletedItem.aType === "Income") {
      setInc(inc - deletedItem.amt);
      setBal(bal - deletedItem.amt);
    } else if (deletedItem.aType === "Expenditure") {
      setExp(exp - deletedItem.amt);
      setBal(bal + deletedItem.amt);
    } else if (deletedItem.aType === "Savings") {
      setSav(sav - deletedItem.amt);
      setBal(bal + deletedItem.amt);
    }
    let filteredArr = transDataArr.filter((item, i) => {
      return i != idx;
    });
    setTransDataArr(filteredArr);
  }
  return (
    <main className="">
     
     <Summary inc={inc} bal={bal} exp={exp} sav={sav} />

      <section
        id="your-tanscations-section-entry"
        className="py-10 h-fit w-full  min-[750px]:flex items-center justify-evenly bg-[url('https://images.unsplash.com/photo-1617203441790-5723a811b7fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-center "
      >
        <div
          id="your-transcation-box"
          className=" mx-auto w-[90%] min-[550px]:w-[70%] min-[750px]:w-[40%] p-[7px] min-[300px]:p-[15px] min-[1150px]:p-[25px]   min-[750px]:h-[80%] max-[750px]:my-[20px] text-black bg-[#2ac1f042] shadow-[0px_0px_12px_3px_black]"
        >
          <p className="text-[20px] min-[350px]:text-[25px] min-[1000px]:text-[35px] font-bold mb-[20px]">
            Please Add Your Transaction:-
          </p>
          <form
            action=""
            className="flex flex-col "
            onSubmit={(e) => addTransaction(e)}
          >
            <div className=" flex align-center mb-[20px]">
              <label
                htmlFor="trans-description"
                className=" text-[15px] min-[350px]:text-[20px] min-[1000px]:text-[30px] font-bold "
              >
                Description:-
              </label>
              <input
                type="text"
                id="trans-description"
                placeholder="Description"
                className="border-2 border-black text-[20px] p-[5px] inline-block w-[100%] text-black"
                value={tittle}
                onChange={(e) => {
                  setTittle(e.target.value);
                }}
              />
            </div>

            <div className=" flex align-center mb-[20px]">
              <label
                htmlFor="trans-amount"
                className=" text-[15px] min-[350px]:text-[20px] min-[1000px]:text-[30px] font-bold"
              >
                Amount:-
              </label>
              <input
                type="number"
                id="trans-amount"
                placeholder="Amount"
                className="border-2 border-black text-[20px] p-[5px] inline-block w-[100%] text-black"
                value={amt}
                onChange={(e) => {
                  setAmt(e.target.value);
                }}
              />
            </div>

            <div className=" flex align-center mb-[20px]">
              <label
                htmlFor="trans-date"
                className=" text-[15px] min-[350px]:text-[20px] min-[1000px]:text-[30px] font-bold"
              >
                Date:-
              </label>
              <input
                type="date"
                id="trans-date"
                placeholder=""
                className="border-2 border-black text-[20px] p-[5px] inline-block w-[100%] text-black "
                value={dates}
                onChange={(e) => {
                  setDates(e.target.value);
                }}
              />
            </div>

            <div className=" flex align-center mb-[20px]">
              <label
                htmlFor="types-of-trans"
                className=" text-[15px] min-[350px]:text-[20px] min-[1000px]:text-[30px] font-bold"
              >
                Type:-
              </label>
              <select
                name="types"
                id="trans-type"
                className="border-2 border-black text-[20px] p-[5px] inline-block w-[100%] text-black "
                value={aType}
                onChange={(e) => {
                  setAType(e.target.value);
                }}
              >
                <option value="#">Click Me</option>
                <option value="Income">Income</option>
                <option value="Expenditure">Expenditure</option>
                <option value="Savings">Savings</option>
              </select>
            </div>
            <button
              id="complete-trans"
              className="border-2 border-black hover:bg-[black] transition ease-in duration-300 hover:text-white  text-[15px] 
              min-[350px]:text-[20px] min-[1000px]:text-[30px] p-[7px]  mx-auto"
            >
              Add Transaction
            </button>
          </form>
        </div>

        <OutputTable transDataArr={transDataArr} deleteItem={deleteItem} />
      </section>
      
    </main>
  );
};

export default Home;
