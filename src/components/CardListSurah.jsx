import { convertToArabicNumeric } from "../helpers/global.helpers";

const CardListSurah = ({ surah, setNomor }) => {
    return (
      <div
        key={surah.nomor}
        className="hidden lg:flex gap-2 h-40 w-85 border-none cursor-pointer rounded-3xl p-4 bg-gray-200"
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
    );
}

export default CardListSurah;