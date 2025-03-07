import { useEffect, useState } from "react";
import CardListSurah from "./components/CardListSurah";
import CardDetailSurah from "./components/CardDetailSurah";
import HeaderContent from "./components/HeaderContent";
import DropdownQori from "./components/DropdownQori";

function App() {
  const [surat, setSurat] = useState([]);
  const [nomor, setNomor] = useState(1);
  const [detailSurat, setDetailSurat] = useState([]);
  const [qori, setQori] = useState("01");
  
  

  useEffect(() => {
    fetch("https://equran.id/api/v2/surat")
      .then((response) => response.json())
      .then(({ data }) => setSurat(data));
  }, []);

  useEffect(() => {
    fetch(`https://equran.id/api/v2/surat/${nomor}`)
      .then((response) => response.json())
      .then(({ data }) => setDetailSurat(data))

    
  }, [nomor]);


  return (
    <div className="flex gap-0 lg:gap-12 bg-gray-200">
      <div className="h-screen overflow-y-scroll flex flex-col gap-4 p-2 bg-white w-2/5">
        {surat.map((surah) => (
          <CardListSurah key={surah.nomor} surah={surah} setNomor={setNomor} />
        ))}
      </div>
      <div className="w-full h-screen xl:w-full border-none bg-white -left-5 rounded-2xl p-4 relative">
        <HeaderContent detailSurat={detailSurat} />
        <DropdownQori setQori={setQori} surah={surat} setNomor={setNomor} />
        <main className="absolute lg:absolute top-62 lg:top-55 h-120 left-0 lg:left-0 overflow-y-scroll lg:h-115 lg:w-full border-none rounded-2xl bg-gray-200 p-3 mirza">
          {detailSurat.ayat?.map((ayat) => (
            <CardDetailSurah key={ayat.teksArab} ayat={ayat} qori={qori} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
