// @ts-ignore
import html2pdf from 'html2pdf.js';
import { useLocation } from 'react-router-dom';

const FeedLotDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  return (
    <>
      {id === '1' && (
        <>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '36px', textDecoration: 'underline' }}>JOHOR MY-01-001</h1>

          <div className="invoice-header" style={{ marginBottom: '20px' }}>
            <br /><br />
            <div className="invoice-items overflow-x-auto lg:overflow-visible">
              <table style={{ width: '50%', borderCollapse: 'collapse', margin: '0 auto' }}>
                <thead>
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>No.</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>KAWASAN</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>QTY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>1</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Sekijang</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>2</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Ledang</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>3</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Ledang</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>4</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Air Hitam </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>5</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Batu Pahat</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>6</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Simpan Renggam </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>7</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Tebrau</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>8</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Pasir Gudang</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>9</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Johor Bahru </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>10</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Pulai</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>10</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Iskandar Puteri</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}></th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Jumlah Ruminan</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>165</th>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    {/* Uncomment and add details if needed */}
                    {/* <td colSpan="3" style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}>Total:</td> */}
                    {/* <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}><strong>RM {details.total.toFixed(2)}</strong></td> */}
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </>
      )}

{/* MY-02-001 */}

{id === '2' && (
        <>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '36px', textDecoration: 'underline' }}>KEDAH MY-02-001</h1>

          <div className="invoice-header" style={{ marginBottom: '20px' }}>
            <br /><br />
            <div className="invoice-items overflow-x-auto lg:overflow-visible">
              <table style={{ width: '50%', borderCollapse: 'collapse', margin: '0 auto' }}>
                <thead>
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>No.</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>KAWASAN</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>QTY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>1</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Pokok Sena</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>2</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Alor Setar</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>3</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Kuala Kedah </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>4</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Pendang </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>5</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Merbok</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>6</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Sungai Petani  </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>7</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Padang Serai</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>8</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>PKulim Bandar Bahru</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                   
                   
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}></th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Jumlah Ruminan</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>120</th>
                  </tr>
                </tbody>
                <tfoot>
                  
                </tfoot>
              </table>
            </div>
          </div>
        </>
      )}
{/* MY-03-001 */}
{id === '3' && (
        <>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '36px', textDecoration: 'underline' }}>KELANTAN MY-03-001</h1>

          <div className="invoice-header" style={{ marginBottom: '20px' }}>
            <br /><br />
            <div className="invoice-items overflow-x-auto lg:overflow-visible">
              <table style={{ width: '50%', borderCollapse: 'collapse', margin: '0 auto' }}>
                <thead>
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>No.</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>KAWASAN</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>QTY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>1</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Pengkalan Chepa</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>2</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Kota Bahru </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>3</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Pasir Mas  </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>4</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Rantau Panjang </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>5</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Kubang Kerian </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>6</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Bachok  </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>7</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Ketereh</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>8</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Tanah Merah</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                   
                   
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}></th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Jumlah Ruminan</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>120</th>
                  </tr>
                </tbody>
                <tfoot>
                  
                </tfoot>
              </table>
            </div>
          </div>
        </>
      )}

{/* MY-04-001 */}
{id === '4' && (
        <>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '36px', textDecoration: 'underline' }}>MELAKA MY-04-001</h1>

          <div className="invoice-header" style={{ marginBottom: '20px' }}>
            <br /><br />
            <div className="invoice-items overflow-x-auto lg:overflow-visible">
              <table style={{ width: '50%', borderCollapse: 'collapse', margin: '0 auto' }}>
                <thead>
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>No.</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>KAWASAN</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>QTY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>1</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>PMasjid Tanah</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>2</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Alor Gajah </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>3</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Tangga Batu </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>4</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Hang Tuah Jaya </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                   
                   
                   
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}></th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Jumlah Ruminan</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>60</th>
                  </tr>
                </tbody>
                <tfoot>
                  
                </tfoot>
              </table>
            </div>
          </div>
        </>
      )}

{/* MY-04-001 */}
{id === '5' && (
        <>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '36px', textDecoration: 'underline' }}>NEGERI SEMBILAN MY-05-001</h1>

          <div className="invoice-header" style={{ marginBottom: '20px' }}>
            <br /><br />
            <div className="invoice-items overflow-x-auto lg:overflow-visible">
              <table style={{ width: '50%', borderCollapse: 'collapse', margin: '0 auto' }}>
                <thead>
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>No.</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>KAWASAN</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>QTY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>1</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Seremban</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>2</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Rembau </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>3</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Port Dickson</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                
                   
                   
                   
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}></th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Jumlah Ruminan</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>45</th>
                  </tr>
                </tbody>
                <tfoot>
                  
                </tfoot>
              </table>
            </div>
          </div>
        </>
      )}


{/* MY-06-001 */}
{id === '6' && (
        <>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '36px', textDecoration: 'underline' }}>NPAHANG MY-06-001</h1>

          <div className="invoice-header" style={{ marginBottom: '20px' }}>
            <br /><br />
            <div className="invoice-items overflow-x-auto lg:overflow-visible">
              <table style={{ width: '50%', borderCollapse: 'collapse', margin: '0 auto' }}>
                <thead>
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>No.</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>KAWASAN</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>QTY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>1</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Indera Mahkota </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>2</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Kuantan </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>3</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Paya Besar</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>4</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Pekan</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr> <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>5</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Maran</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr> <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>6</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Temerloh</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                   
                   
                   
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}></th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Jumlah Ruminan</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>90</th>
                  </tr>
                </tbody>
                <tfoot>
                  
                </tfoot>
              </table>
            </div>
          </div>
        </>
      )}




{/* MY-07-001 */}
{id === '7' && (
        <>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '36px', textDecoration: 'underline' }}>PULAU PINANG MY-07-001</h1>

          <div className="invoice-header" style={{ marginBottom: '20px' }}>
            <br /><br />
            <div className="invoice-items overflow-x-auto lg:overflow-visible">
              <table style={{ width: '50%', borderCollapse: 'collapse', margin: '0 auto' }}>
                <thead>
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>No.</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>KAWASAN</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>QTY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>1</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>IKepala Batas </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>2</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Tasik Gelugur  </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>3</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Permatang Pauh</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>4</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Bukit Mertajam</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr> <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>5</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Balik Pulau</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr> <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>6</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Nibong Tebal</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                   
                   
                   
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}></th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Jumlah Ruminan</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>90</th>
                  </tr>
                </tbody>
                <tfoot>
                  
                </tfoot>
              </table>
            </div>
          </div>
        </>
      )}

{/* MY-08-001 */}
{id === '8' && (
        <>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '36px', textDecoration: 'underline' }}>PERAK MY-08-001</h1>

          <div className="invoice-header" style={{ marginBottom: '20px' }}>
            <br /><br />
            <div className="invoice-items overflow-x-auto lg:overflow-visible">
              <table style={{ width: '50%', borderCollapse: 'collapse', margin: '0 auto' }}>
                <thead>
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>No.</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>KAWASAN</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>QTY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>1</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Parit Buntar  
   </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>2</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Bagan Serai  </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>3</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Padang Rengas</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>4</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Padang Rengas</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr> <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>5</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Tambun</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr> <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>6</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Kuala Kangsar</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                   
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>7</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Tapah</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr> <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>8</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Teluk Intan</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr> <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>9</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Tanjung Malim</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                   
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}></th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Jumlah Ruminan</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>135</th>
                  </tr>
                </tbody>
                <tfoot>
                  
                </tfoot>
              </table>
            </div>
          </div>
        </>
      )}

{/* MY-09-001 */}
{id === '9' && (
        <>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '36px', textDecoration: 'underline' }}>PERLIS MY-09-001</h1>

          <div className="invoice-header" style={{ marginBottom: '20px' }}>
            <br /><br />
            <div className="invoice-items overflow-x-auto lg:overflow-visible">
              <table style={{ width: '50%', borderCollapse: 'collapse', margin: '0 auto' }}>
                <thead>
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>No.</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>KAWASAN</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>QTY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>1</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Padang Besar 
   </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>2</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Kangar  </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>3</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Arau</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                    
                   
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}></th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Jumlah Ruminan</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>45</th>
                  </tr>
                </tbody>
                <tfoot>
                  
                </tfoot>
              </table>
            </div>
          </div>
        </>
      )}



{/* MY-10-001 */}
{id === '10' && (
        <>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '36px', textDecoration: 'underline' }}>SELANGOR MY-10-001</h1>

          <div className="invoice-header" style={{ marginBottom: '20px' }}>
            <br /><br />
            <div className="invoice-items overflow-x-auto lg:overflow-visible">
              <table style={{ width: '50%', borderCollapse: 'collapse', margin: '0 auto' }}>
                <thead>
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>No.</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>KAWASAN</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>QTY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>1</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Klang  
 
   </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>2</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Kuala Langat </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>3</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Kuala Selangor</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>4</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Sabak Bernam </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr> <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>5</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Hulu Langat</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr> <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>6</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Hulu Selangor</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                   
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>7</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Petaling</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr> <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>8</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Gombak</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr> <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>9</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Sepang</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                   
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}></th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Jumlah Ruminan</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>135</th>
                  </tr>
                </tbody>
                <tfoot>
                  
                </tfoot>
              </table>
            </div>
          </div>
        </>
      )}
{/* MY-11-001 */}
{id === '11' && (
        <>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '36px', textDecoration: 'underline' }}>TERENGGANU MY-11-001</h1>

          <div className="invoice-header" style={{ marginBottom: '20px' }}>
            <br /><br />
            <div className="invoice-items overflow-x-auto lg:overflow-visible">
              <table style={{ width: '50%', borderCollapse: 'collapse', margin: '0 auto' }}>
                <thead>
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>No.</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>KAWASAN</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>QTY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>1</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Setiu  
 
   </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>2</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Kuala Terengganu  </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>3</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Marang</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>4</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Kemaman </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr> <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>5</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Dungun</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
                  </tr> 
                   
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}></th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Jumlah Ruminan</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>75</th>
                  </tr>
                </tbody>
                <tfoot>
                  
                </tfoot>
              </table>
            </div>
          </div>
        </>
      )}

{/* MY-14-001 */}
{id === '14' && (
        <>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '36px', textDecoration: 'underline' }}>WP KUALA LUMPUR MY-14-001</h1>

          <div className="invoice-header" style={{ marginBottom: '20px' }}>
            <br /><br />
            <div className="invoice-items overflow-x-auto lg:overflow-visible">
              <table style={{ width: '50%', borderCollapse: 'collapse', margin: '0 auto' }}>
                <thead>
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>No.</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>KAWASAN</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>QTY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>1</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Batu  
 
   </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>10</td>
                  </tr>



                 
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>2</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Wangsa Maju </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>10</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>3</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Segambut</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>10</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>4</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Setiawangsa </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>10</td>
                  </tr> <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>5</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Titiwangsa</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>10</td>
                  </tr> 
                   
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>6</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Lembah Pantai </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>10</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>7</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Bukit Bintang</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>10</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>8</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Seputeh </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>10</td>
                  </tr>
                   <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>9</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Cheras</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>10</td>
                  </tr> 
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>10</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Kepong </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>10</td>
                  </tr>
                   <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>11</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Bandar Tun Razak</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>10</td>
                  </tr> 
                 
                  <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}></th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Jumlah Ruminan</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>110</th>
                  </tr>
                </tbody>
                <tfoot>
                  
                </tfoot>
              </table>
            </div>
          </div>
        </>
      )}

    </>
  );
}

export default FeedLotDetails;
