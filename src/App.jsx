import { useEffect, useRef, useState } from "react";

function App() {
  const [surat, setSurat] = useState([]);
  const [nomor, setNomor] = useState(1);
  const [detailSurat, setDetailSurat] = useState([]);
  

  useEffect(() => {
    fetch("https://equran.id/api/v2/surat")
      .then((response) => response.json())
      .then(({ data }) => setSurat(data));
  }, []);

  useEffect(() => {
    fetch(`https://equran.id/api/v2/surat/${nomor}`)
      .then((response) => response.json())
      .then(({ data }) => setDetailSurat(data))

      if (ayatRef.current) {
        ayatRef.current.scrollTop = 0;
      }
  }, [nomor]);

  const convertToArabicNumeric = (number) => {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return number
      .toString()
      .split("")
      .map((digit) => arabicNumbers[digit])
      .join("");
  };

  return (
    <div className="flex gap-12 bg-gray-200">
      <div className="h-screen overflow-y-scroll flex flex-col gap-4 p-4 bg-white">
        {surat.map((surah) => (
          <div
            key={surah.nomor}
            className="flex gap-2 h-40 w-85 border-none cursor-pointer rounded-3xl p-4 bg-gray-200"
            onClick={() => setNomor(surah.nomor)}
          >
            <h1 className="w-8 h-8 border text-center mt-3 rounded-4xl">
              {convertToArabicNumeric(surah.nomor)}
            </h1>
            <div>
              <h1 className="text-xl font-extrabold">{surah.namaLatin}</h1>
              <h2>
                {surah.arti} - <span>{surah.jumlahAyat} ayat</span>
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="w-2/3 border-none bg-white rounded-2xl p-4 ">
        <header className="p-4 border fixed w-[64.5%] h-30 rounded-4xl bg-linear-65 from-purple-500 to-pink-500 text-white mirza ">
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
        <main className="absolute top-40 h-110 w-[64.5%] overflow-y-scroll border-none rounded-2xl bg-gray-200 p-3 mirza" ref={ayatRef}>
          {detailSurat.ayat?.map((ayat) => (
            <div key={ayat.nomor}>
              <p className="text-right text-4xl/25">{ayat.teksArab} <span className="mr-3">{convertToArabicNumeric(ayat.nomorAyat)}</span></p>
              <p className="text-md font-mono text-red-600">{ayat.teksLatin}</p>
              <p className="text-md">{ayat.teksIndonesia}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
