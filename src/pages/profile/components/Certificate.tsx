// @ts-ignore
import html2pdf from 'html2pdf.js';
import { useParams } from 'react-router-dom';


const convertToPDF = () => {
    const element = document.getElementById('invoice-container');

    // html2pdf().from(element).save();
    html2pdf().from(element).set({ filename: 'invoice.pdf' }).save();
  };

  
  
  const Certificate = () => {
  const { familyid, organizationid } = useParams();
  console.log(familyid, organizationid);
    return (
        <>
         <button
  onClick={convertToPDF}
  className="absolute top-20 lg:top-60 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>
Jana PDF Sijil
</button>
      <div id="invoice-container" className="w-full h-[900px] flex justify-center items-center">
        <div className="relative w-[80%] h-[80%] max-w-[900px]">
          <img
            src="certificate.jpg"
            alt="Certificate"
            className="w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
            <img
              src="digi-qurban.svg"
              alt="Certificate Image"
              className="w-48 h-auto mb-5"
            />
  
            <h1 className="text-6xl font-semibold mb-5">Sijil Qurban</h1>
            <p className="mb-5 text-gray-400">dengan ini disahkan ibadah Qurban</p>
            <h1 className="text-[#09b1cb] text-3xl font-semibold mb-5">
              Name Peserta Bin Bapa Peserta
            </h1>
            <h2 className="text-lg font-medium mb-5">sebanyak 2 bahagian lembu</h2>
            <p className="mb-5 text-gray-400">telah dilaksanakan pada</p>
            <p className="mb-5 text-2xl">
              DD Month 2024 / DD Month 1445 di Setapak Khula Lumpur
            </p>
            <p className="mb-5">
              Semoga Ibadah Qurban anda diterima Allah SWT
            </p>
  
            <div className="flex px-10 justify-between w-full mt-10">
              <p className="text-sm text-gray-500">Certificate ID: 00000 000</p>
              <div className="text-center">
                <h1 className="text-md sm:text-lg">Name</h1>
                <p className="text-sm text-gray-500">Position</p>
              </div>
              <div className="text-center">
                <h1 className="text-md sm:text-lg">Name</h1>
                <p className="text-sm text-gray-500">Position</p>
              </div>
              <p className="text-sm text-gray-500">Issuing Date: DD/MM/YYYY</p>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default Certificate;
  