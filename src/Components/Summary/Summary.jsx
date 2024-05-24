const Summary = ({inc,bal,exp,sav}) => {
    return (
        <main className="bg-[url('https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-center main-box  pb-10 pt-5">
        <h2 className="main-box-head text-[30px] min-[600px]:text-[40px] text-center py-3 mx-auto font-bold text-white w-[100%] drop-shadow-2xl">
          Your Expense Summary
        </h2>
        <section className="summary-box grid grid-cols-1 min-[350px]:grid-cols-2 gap-5 min-[600px]:gap-10 px-5 min-[600px]:px-10 py-10 min-[600px]:py-20 text-white  w-[90%] min-[500px]:w-[70%] min-[768px]:w-[60%]  min-[1024px]:w-[50%]
         text-center mx-auto bg-[#2ac1f042] shadow-[0px_0px_12px_3px_white]">
          <div className="inc-display p-3 bg-[#000000a9]  shadow-[0px_0px_12px_3px_white]">
            <h3 className="text-[22px] min-[600px]:text-[25px] font-bold">Income</h3>
            <p className="text-[27px] min-[600px]:text-[32px] font-semibold">{inc}</p>
          </div>
          <div className="inc-display  p-3 bg-[#000000a9] shadow-[0px_0px_12px_3px_white]">
            <h3 className="text-[22px] min-[600px]:text-[25px] font-bold">Expense</h3>
            <p className=" text-[27px] min-[600px]:text-[30px] font-semibold">{exp}</p>
          </div>
          <div className="inc-display  p-3 bg-[#000000a9] shadow-[0px_0px_12px_3px_white]">
            <h3 className="text-[22px] min-[600px]:text-[25px] font-bold">Balance</h3>
            <p className=" text-[27px] min-[600px]:text-[30px] font-semibold">{bal}</p>
          </div>
          <div className="inc-display  p-3 bg-[#000000a9] shadow-[0px_0px_12px_3px_white]">
            <h3 className="text-[22px] min-[600px]:text-[25px] font-bold">Savings</h3>
            <p className=" text-[27px] min-[600px]:text-[30px] font-semibold">{sav}</p>
          </div>
        </section>
      </main>
    );
}

export default Summary;
