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
      <div className="h-screen overflow-y-scroll flex flex-col gap-4 p-4 bg-white">
        {surat.map((surah) => (
          <CardListSurah key={surah.nomor} surah={surah} setNomor={setNomor} />
        ))}
      </div>
      <div className="w-full h-screen lg:w-2/3 border-none bg-white rounded-2xl p-4  ">
        <HeaderContent detailSurat={detailSurat}/>
        <DropdownQori setQori={setQori} surah={surat} setNomor={setNomor} />
        <main className="fixed lg:absolute top-68 lg:top-55 h-120 left-0 lg:left-114 overflow-y-scroll lg:h-100 lg:w-[64.5%]  border-none rounded-2xl bg-gray-200 p-3 mirza">
          {detailSurat.ayat?.map((ayat) => (
            <CardDetailSurah key={ayat.teksArab} ayat={ayat} qori={qori} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
