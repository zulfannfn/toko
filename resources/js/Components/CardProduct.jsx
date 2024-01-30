import React from "react";

const CardProduct = ({ namaProduct, kategori, ukuran, harga }) => {
    return (
        <div className="max-w-[140px] flex flex-col card border-solid border-2 border-gray-300 md:border-gray-300 hover:bg-black text-black hover:text-white p-2 rounded-md">
            <div className="w-[120px]">
                <img
                    src="/images/product/3.jpeg"
                    alt=""
                    className="rounded-md"
                />
            </div>
            <div className="mt-2">
                <h3 className="text-sm md:text-md font-semibold font-clash">
                    {`${kategori}  ${namaProduct}`}
                </h3>
                <div className="text-gray-600 flex flex-row justify-between">
                    <p>{`Rp ${harga}`}</p>
                    <p className="font-semibold">{`${ukuran}`}</p>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
