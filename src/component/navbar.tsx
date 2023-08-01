import { Bell, Mail, Search, Settings, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [slide, setSlide] = useState("transaction");
  const [isDim, setIsDim] = useState(false);

  return (
    <>
      <nav className="sticky inset-0 bg-white p-4 flex gap-4 z-50  justify-between items-center border-b">
        <Link to="/" className="text-xl italic">
          Store.id
        </Link>
        <div className="bg-white border flex items-center rounded-md w-fulla p-1 flex-1 mx-10">
          <Search className="text-gray-300" />
          <input
            className="p-2 text-lg w-full border-none outline-none"
            placeholder="Cari di store.id"
          />
        </div>
        <div className="flex">
          <div
            onMouseEnter={() => setIsDim(true)}
            onMouseLeave={() => setIsDim(false)}
            className="relative group p-2 rounded-md hover:bg-gray-200 cursor-pointer"
          >
            <ShoppingCart />
            <div className="scale-y-0 group-hover:scale-y-100 nav-icon">
              <div className="p-4">
                <p className="font-bold">Wah, keranjang belanjamu kosong</p>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setIsDim(true)}
            onMouseLeave={() => setIsDim(false)}
            className="relative group p-2 rounded-md hover:bg-gray-200 cursor-pointer"
          >
            <Bell />
            <div className="scale-y-0 group-hover:scale-y-100 nav-icon">
              <div>
                <div className="flex justify-between bg-white shadow-lg p-4">
                  <p className="font-bold">Notification</p>
                  <Settings />
                </div>
                <div className="flex  justify-around">
                  <p
                    onClick={() => setSlide("transaction")}
                    className={`border-b-2 ${
                      slide === "transaction" && "font-bold border-black"
                    } transition-all duration-300 w-full p-2`}
                  >
                    Transaksi
                  </p>
                  <p
                    onClick={() => setSlide("notification")}
                    className={`border-b-2 ${
                      slide === "notification" && "font-bold border-b-black"
                    } transition-all duration-300  w-full p-2`}
                  >
                    Update
                  </p>
                </div>
                {slide === "transaction" ? (
                  <div>transaction</div>
                ) : (
                  <div>notification</div>
                )}
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setIsDim(true)}
            onMouseLeave={() => setIsDim(false)}
            className="relative group p-2 rounded-md hover:bg-gray-200 cursor-pointer"
          >
            <Mail />
            <div className="scale-y-0 group-hover:scale-y-100 nav-icon">
              <ul className="w-full p-4">
                <li className="text-start p-2 w-full hover:bg-gray-200 rounded ">
                  chat
                </li>
                <li className="text-start p-2 w-full hover:bg-gray-200 rounded ">
                  diskusi
                </li>
                <li className="text-start p-2 w-full hover:bg-gray-200 rounded ">
                  ulasan
                </li>
                <li className="text-start p-2 w-full hover:bg-gray-200 rounded ">
                  Pesan Bantuan
                </li>
                <li className="text-start p-2 w-full hover:bg-gray-200 rounded ">
                  pessan komplain
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative group flex gap-2 hover:bg-gray-100 p-2 py-4 rounded-md cursor-pointer">
          <User />
          <Link to="/user/1">Putu Mahendra</Link>
          <div className="absolute z-50 group-hover:block hidden  bg-white right-0 top-[60px] p-2 w-[400px] rounded-md shadow-lg">
            <div className="flex items-center gap-4 shadow-md p-2">
              <div className="w-[60px] h-[60px] rounded-full bg-gray-200"></div>
              <p className="text-xl">Putu mahendra</p>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed left-0 top-0 overflow-auto ${
          isDim && "w-full h-screen"
        } transition-all duration-500 bg-black/30 z-30`}
      />
    </>
  );
};

export default Navbar;
