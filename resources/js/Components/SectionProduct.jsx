import CardProduct from "./CardProduct";

const SectionProduct = ({ produk }) => {
    const limitedProduk = produk.slice(0, 5);
    return (
        <div className="py-6 px-8 flex flex-col md:flex-row gap-6 justify-center">
            <div className="hidden md:flex md:justify-center items-start">
                <img
                    src="/images/product/b1.jpeg"
                    alt=""
                    className="md:max-w-[200px] lg:max-w-[140px] rounded-md"
                />
            </div>
            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-6">
                {limitedProduk.map((item, i) => {
                    return (
                        <CardProduct
                            key={i}
                            namaProduct={item.nama_produk}
                            harga={item.harga}
                            kategori={item.kategori}
                            ukuran={item.ukuran}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default SectionProduct;
