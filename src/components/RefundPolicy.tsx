

const RefundPolicy = () => {
  return (
    <div className="m-12 p-10 bg-white-100 text-gray-900 shadow-2xl border border-gray-300">
      <h1 className="text-2xl font-bold mb-4 text-center">POLISI BAYARAN BALIK</h1>
      <p className="mb-8">
        Di Digital Qurban Sdn. Bhd. kami mahu pelanggan kami berpuas hati sepenuhnya 
        dengan pembelian mereka.
      </p>
      <p className="mb-8">
        Kami mengesyorkan anda membaca Polisi Pemulangan kami sebelum membuat 
        pembelian dari laman web kami, supaya anda mengetahui dasar kami tentang 
        bayaran balik dan hak dan remedi undang-undang.
      </p>
      <p className="mb-8">
        Kami tidak menawarkan sebarang soalan mengenai bayaran balik jika perkhidmatan 
        kami tidak memuaskan dan memenuhi jangkaan pelanggan.
      </p>
      <p className="mb-8">
        Jika anda mempunyai sebarang soalan tentang Polisi Bayaran Balik kami, sila 
        hubungi kami:
      </p>
      <ul className="list-disc list-inside mb-10">
        <li className="mb-3">Melalui e-mel: <a href="mailto:admin@dqurban.com" className="text-blue-500">admin@dqurban.com</a></li>
        <li className="mb-3">Melalui telefon: +6011-3584-0500</li>
        <li className="mb-3">Melalui Whatsapp: +6011-3584-0500</li>
      </ul>
      <h2 className="text-xl font-semibold mb-8">JANGKA MASA BAYARAN BALIK</h2>
      <p className="mb-2 font-semibold text-xl">WAKTU OPERASI</p>
      <p className="mb-8">
        Dokumen ini adalah untuk membimbing cara syarikat kami berurusan dengan bayaran 
        balik. Bayaran balik berlaku dalam pelbagai situasi iaitu apabila pelanggan tersilap 
        memindahkan/ membatalkan pendaftaran/ membayar terlebih bayaran sama ada 
        pendaftaran berlaku atau tidak.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-6">Polisi hendaklah dipatuhi seperti di bawah:</h2>
      <table className="w-full mb-6">
        <thead>
          <tr className="text-white">
            <th className="border border-black p-2  bg-[#09B1CB]">Kaedah Bayaran</th>
            <th className="border border-black p-2 bg-[#09B1CB]">Kaedah Pemulangan</th>
            <th className="border border-black p-2 bg-[#09B1CB]">Jangka masa proses dari Digital Qurban</th>
            <th className="border border-black p-2 bg-[#09B1CB]">Jangka masa proses dari bank</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black p-2">Kredit / Debit Kad</td>
            <td className="border border-black p-2">Kredit / Debit Kad / Perbankan Dalam Talian</td>
            <td className="border border-black p-2">2 ke 3 hari bekerja</td>
            <td className="border border-black p-2">5 ke 15 hari bekerja</td>
          </tr>
          <tr>
            <td className="border border-black p-2">Perbankan Dalam Talian</td>
            <td className="border border-black p-2">Perbankan Dalam Talian</td>
            <td className="border border-black p-2">2 ke 3 hari bekerja</td>
            <td className="border border-black p-2">5 ke 10 hari bekerja</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-xl font-semibold mb-4">CATATAN:</h2>
      <ul className="list-decimal list-inside mb-2">
        <li className="mb-2">TIADA PEMBATALAN boleh dilakukan dalam tempoh 7 hari bekerja SEBELUM Eidul Adha.</li>
        <li className="mb-2">Sila ambil perhatian bahawa masa pemprosesan kami akan berbeza daripada musim bekerja biasa kami di atas.</li>
        <li className="mb-2">Untuk musim RAMADHAN dan QURBAN, kami akan mengambil masa 7 hingga 14 hari bekerja untuk kami memproses bayaran balik.</li>
        <li className="mb-2">Sebarang pembayaran yang dibuat dengan Kad KREDIT dan DEBIT daripada pelanggan akan dikenakan Yuran Pentadbiran sebanyak 2%.</li>
        <li className="mb-2">Tiada bayaran balik akan dilayan selepas penyembelihan selesai.</li>
      </ul>
    </div>
  );
}

export default RefundPolicy;
