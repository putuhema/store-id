import { DollarSign } from "lucide-react";
import Container from "../component/container";
import Navbar from "../component/navbar";
import Dropdown from "../component/dropdown";

const User = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="flex gap-4">
          <div className="w-[250px] h-[800px] rounded-lg shadow-md">
            <div className="flex items-center p-2">
              <div className="w-[60px] h-[60px] rounded-full bg-gray-400"></div>
              <div className="p-2">
                <p>Mahendra</p>
                <p className=" text-[.8rem] font-bold">tersambung ke gojek</p>
              </div>
            </div>
            <hr />
            <div>
              <div className="flex items-center justify-between p-2">
                <span className="flex items-center font-bold">
                  <DollarSign size={20} /> saldo
                </span>
                <span>Rp.1.089</span>
              </div>
            </div>
            <hr />
            <Dropdown
              title="Kotak Masuk"
              children={[
                "Chat",
                "Diskusi Produk",
                "Ulasan",
                "Pesan Bantuan",
                "Pesanan dikomplain",
                "Update",
              ]}
            />
            <hr />
            <Dropdown
              title="Pembelian"
              children={["Menunggu Bayaran", "Daftar Transaksi"]}
            />
            <hr />
            <Dropdown
              title="Profil Saya"
              children={["Whislist", "Toko Favorit", "Pengaturan"]}
            />
            <hr />
          </div>
          <div className="flex-1"></div>
        </div>
      </Container>
    </>
  );
};

export default User;
