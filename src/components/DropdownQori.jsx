const DropdownQori = ({ setQori, surah, setNomor }) => {
  return (
    <div className="fixed top-45 right-4 lg:top-35 lg:right-10 flex gap-5">
      <div className="ml-3">
        <label htmlFor="qari" className="block text-gray-700 font-medium mb-2">
          Qari
        </label>
        <select
          id="qari"
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setQori(e.target.value)}
        >
          <option value={"01"}>Abdullah-Al-Juhany</option>
          <option value={"02"}>Abdul-Muhsin-Al-Qasim</option>
          <option value={"03"}>Abdurrahman-as-Sudais</option>
          <option value={"04"}>Ibrahim-Al-Dossari</option>
          <option value={"05"}>Misyari-Rasyid-Al-Afasi</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="Surah"
          className="block lg:hidden text-gray-700 font-medium mb-2"
        >
          Surah
        </label>
        <select
          id="Surah"
          className="lg:hidden w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setNomor(e.target.value)}
        >
          {surah.map((surah) => (
            <option key={surah.nomor} value={surah.nomor}>
              {surah.namaLatin}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownQori;
