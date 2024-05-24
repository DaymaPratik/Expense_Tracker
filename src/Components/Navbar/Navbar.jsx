const Navbar = () => {
    return (
        <nav className="navbar flex p-4 bg-[#000000d6] justify-between items-center min-[600px]:px-10 text-white">
            <h1 className="text-[25px] min-[600px]:text-[30px] font-semibold border-b-2 border-[#2ac1f0]">Expense Tracker</h1>
            <ul className="flex gap-5 items-center text-[20px]  min-[600px]:text-[25px]">
                <li className="max-[600px]:hidden border-b-2 border-[#2ac2f0]">Home</li>
                <li className="max-[600px]:hidden border-b-2 border-[#2ac1f0]">About</li>
                <li className="max-[600px]:hidden border-b-2 border-[#2ac1f0]">Contact</li>
                <li className="min-[600px]:hidden"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlrM_gPuWI1eV2W8gV053gI9fl_rFe9Tb5x1hMf08rA&s" alt="" className="h-[25px] "/></li>
            </ul>
        </nav>
    );
}

export default Navbar;
