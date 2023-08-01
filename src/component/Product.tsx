import { Pin, Star, Store } from "lucide-react";
const Product = () => {
  return (
    <div className="w-[188px] border rounded-md shadow-md group cursor-pointer">
      {/* <img src="" /> */}
      <div className="h-32 bg-gray-200"></div>
      <div className="p-2 flex flex-col gap-1">
        <p className="text-sm">Frame kacamata moscot bilik Grade original</p>
        <p className="font-bold">Rp. 270.000</p>
        <div className="relative overflow-hidden">
          <span className="text-sm flex items-center gap-2 text-gray-600 absolute top-0 left-0 group-hover:-top-6 transition-all  duration-300">
            <Pin size={15} />
            <p>Jakarta Pusat</p>
          </span>
          <p className="text-sm flex items-center gap-2 text-gray-600 relative top-6 left-0 group-hover:top-0 transition-all duration-300">
            <Store size={15} />
            <p>Hayu Kacamata</p>
          </p>
        </div>
        <div className="text-sm text-gray-600 flex gap-2">
          <span className="flex gap-2 items-center">
            <Star size={15} />
            <p>4.8</p>
          </span>
          <p>Terjual 20</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
