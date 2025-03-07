const HeaderContent = ({detailSurat}) => {
    return (
      <header className="w-full p-4 border fixed lg:w-3/5 h-30 top-5 left-1/3 lg:top-5 lg:mx-auto rounded-4xl bg-linear-65 from-purple-500 to-pink-500 text-white mirza"> 
        <h1 className="text-2xl font-bold ">
          {detailSurat.nama} - <span>{detailSurat.namaLatin}</span>
        </h1>
        <h2 className="text-lg mt-4">
          {detailSurat.arti} - <span>{detailSurat.jumlahAyat} ayat</span> -{" "}
          <span>{detailSurat.tempatTurun}</span>
        </h2>
        <h2 className="text-lg font-semibold absolute top-8 right-10 border-2 border-dashed rounded-4xl p-2 box-border">
          {detailSurat.nomor}
        </h2>
      </header>
    );
}

export default HeaderContent