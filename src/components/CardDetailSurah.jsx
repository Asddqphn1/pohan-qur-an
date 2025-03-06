import { convertToArabicNumeric } from "../helpers/global.helpers";

const CardDetailSurah = ({ ayat, qori }) => {
  return (
    <div key={ayat.nomor}>
      <p className="text-right text-4xl/25">
        {ayat.teksArab}{" "}
        <span className="mr-3">{convertToArabicNumeric(ayat.nomorAyat)}</span>
      </p>
      <p className="text-md font-mono text-red-600">{ayat.teksLatin}</p>
      <p className="text-md">{ayat.teksIndonesia}</p>
      <audio src={ayat.audio[qori]} controls></audio>
    </div>
  );
};

export default CardDetailSurah;