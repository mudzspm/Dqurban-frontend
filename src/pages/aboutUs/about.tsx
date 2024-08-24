const AboutUs = () => {
    return (
      <>
        <div className='relative h-[405px]'
          style={{
            backgroundImage: 'linear-gradient(100deg, rgba(8, 64, 89, 0.82) 54.31%, #53AFBE 146.44%)',
          }}
        >
          <img
            src='header.png'
            alt='Aqiqah'
            className='absolute mix-blend-overlay bg-no-repeat bg-cover object-cover h-full w-full top-0'
          />
          <div className="absolute left-[387px] top-[206px]">
            <h2 className='text-[#FFFFFF] xl:text-[5rem] lg:text-6xl lg:ml-[2rem] md:text-5xl md:ml-[-8rem] ml-[-263px] sm:text-4xl text-2xl font-bold'>
            Tentang Kami
            </h2>
            <div className="mt-[1.938rem] text-[#FFF] text-4xl font-normal">
            </div>
          </div>
        </div>
  
        <div className="mx-auto max-w-screen-lg px-4"> {/* Added px-4 for horizontal padding */}
          <div className="grid grid-cols-1 gap-3 mt-[0.856rem]">
            <div className="text-center">
              <h3 className="text-[1.6rem] text-[#555] font-semibold">
                Binatang Korban :Kambing ialah <br />
                sesuai untuk berkorban
              </h3>
              <div className="mt-[1.541rem]">
                <img src='meat.png' alt='Meat' className="w-full" />
              </div>
              <p className="text-[#777] text-base text-start mt-[1.467rem]">
                Dalam banyak budaya dan agama di seluruh dunia, perbuatan mengorbankan haiwan mempunyai nilai
                keagamaan dan simbolik yang signifikan. Antara haiwan yang biasa dipilih untuk upacara ini, kambing 
                menonjol kerana beberapa sebab. Mari kita mendalami mengapa kambing dianggap sesuai untuk dikorbankan.
              </p>
              <h3 className="text-[1.6rem] text-[#555] font-semibold mt-[1.783rem]">
                Sunat Korban: Apa Yang Disyorkan <br/>
                Semasa Pengorbanan
              </h3>
              <div className="mt-[1.362rem]">
                <img src='meat--.png' alt='Meat' className="w-full" />
              </div>
              <p className="text-[#777] text-base text-start mt-[1.418rem]">
                Dalam konteks sunat korban, adalah penting untuk mengutamakan kesejahteraan dan keselamatan individu yang menjalani prosedur tersebut. Amalan yang disyorkan termasuk memastikan khatan dilakukan oleh pengamal terlatih dan berkelayakan menggunakan instrumen steril dan teknik aseptik untuk meminimumkan risiko jangkitan dan komplikasi. Di samping itu, langkah pengurusan kesakitan yang mencukupi harus digunakan untuk mengurangkan ketidakselesaan dan memastikan pengalaman yang lebih selesa untuk individu. Adalah penting untuk mematuhi garis panduan budaya dan agama di samping mengekalkan prinsip etika dan menghormati autonomi dan maruah orang yang menjalani prosedur itu. Pendidikan dan kesedaran tentang kepentingan dan implikasi sunat korban juga penting
                untuk menggalakkan pembuatan keputusan termaklum dan memastikan perlindungan hak dan kesihatan individu.
              </p>
              <h3 className="text-[1.6rem] text-[#555] font-semibold mt-[1.476rem]">
                Hukum Niat Korban Sebelum <br />
                Aidil Adha
              </h3>
              <div className="mt-[1.362rem]">
                <img src='meat---.png' alt='Meat' className="w-full" />
                <p className="text-[#777] text-base text-start mt-[1.418rem]">
                  Hukum berkorban terutama pada hari raya Aidiladha bergantung kepada keikhlasan niat. Sebelum upacara itu, umat Islam mesti berniat ("niyyah") yang jelas dan ikhlas untuk mempersembahkan korban semata-mata untuk keredhaan Allah dan menunaikan kewajipan agama. Niat ini melambangkan pengabdian dan penyerahan kepada perintah ilahi, menekankan kepentingan rohani perbuatan itu. Melalui niat yang ikhlas, orang yang beriman berusaha untuk menyelaraskan tindakan
                  mereka dengan ajaran Islam, memupuk hubungan yang lebih mendalam dengan iman dan komuniti mereka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default AboutUs;
  