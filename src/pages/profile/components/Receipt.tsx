// import React from 'react';
import { RootState } from '../../../store';
import { useSelector } from 'react-redux';
import { formatDate } from '../../../lib/utils.js';
//@ts-ignore
import html2pdf from 'html2pdf.js';

const Receipt = () => {
    const { TransactionsDetail } = useSelector((state: RootState) => state.transactionsByIdReducer);
    console.log(TransactionsDetail);

    const convertToPDF = () => {
        const element = document.getElementById('Receipt-container');
        html2pdf().from(element).set({ filename: 'Receipt.pdf' }).save();
    };

    return (
        <>
            <button
                onClick={convertToPDF}
                className="absolute top-20 lg:top-60 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Jana PDF Resit
            </button>

            <div id="Receipt-container" className="invoice-container" style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto' }}>
                <div className="company-info" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img
                        src={TransactionsDetail.packageType === 'WAQF' ? 'waqf.jpg' : 'logo.jpg'}
                        alt="Digital Qurban"
                        className="logo"
                        style={{ width: '23%', height: 'auto', textAlign: 'left', marginLeft: '-12px' }}
                    />
                    <div style={{ textAlign: 'right' }}>
                        <p>DIGITAL QURBAN SDN. BHD. (1356156-W)</p>
                        <p>No 10.2, 2nd Floor Jalan Rimbun, 50350,</p>
                        <p>Kuala Lumpur, Wilayah Persekutuan, Malaysia</p>
                        <p>E-mel: sales@dqurban.com | Telefon: +6011-3584-0500</p>
                    </div>
                </div>

                <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '36px', textDecoration: 'underline' }}>RESIT BAYARAN</h1>

                <div className="invoice-header" style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <p><strong>BILL KEPADA:</strong></p>
                            <p>{TransactionsDetail.customer?.name}</p>
                            <p>{TransactionsDetail.customer?.address}</p>
                        </div>
                        <div style={{ marginLeft: 'auto' }}>
                            <p style={{ marginLeft: '142px' }}><strong>NO:RESIT:</strong></p>
                            <p style={{ textAlign: 'end' }}>{TransactionsDetail.receiptNo}</p>
                        </div>
                    </div>
                </div>

                <div className="invoice-items overflow-x-auto lg:overflow-visible">
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Tarikh</th>
                                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Perkara</th>
                                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Harga</th>
                                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Admin Fee</th>
                                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Transaction Fee</th>
                                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Jumlah</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{formatDate(TransactionsDetail.paymentDetails?.paymentDate)}</td>
                                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{TransactionsDetail.transaction?.description}</td>
                                <td style={{ padding: '8px', border: '1px solid #ddd' }}>
  RM { TransactionsDetail?.price 
    ? parseFloat(TransactionsDetail.price.replace(/[^\d.-]/g, '')).toFixed(2)
    : "0.00"}
</td>
<td style={{ padding: '8px', border: '1px solid #ddd' }}>
  RM { TransactionsDetail?.totalAdminFee 
    ? parseFloat(TransactionsDetail.totalAdminFee.replace(/[^\d.-]/g, '')).toFixed(2)
    : "0.00"}
</td>

<td style={{ padding: '8px', border: '1px solid #ddd' }}>
  RM 1
</td>

                                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{TransactionsDetail.transaction?.total}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div style={{ display: 'flex', marginTop: '30px', justifyContent: 'end' }}>
                        <div>
                            <p><strong>Kaedah Pembayaran :</strong></p>
                            <p style={{ marginTop: '10px' }}><strong>Status :</strong></p>
                            <p style={{ marginTop: '10px' }}><strong>Jumlah Keseluruhan (RM) :</strong></p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <p><strong>{TransactionsDetail.paymentDetails?.method}</strong></p>
                            <p style={{ marginTop: '10px' }}><strong>{TransactionsDetail.paymentDetails?.status}</strong></p>
                            <p style={{ marginTop: '10px' }}><strong>{TransactionsDetail.total}</strong></p>
                        </div>
                    </div>

                    <p>Terima kasih kerana menyertai ibadah qurban bersama syarikat kami.</p>

                    <p style={{ textAlign: 'center' }}>Hubungi: sales@dqurban.com | Telefon: +6011-3584-0500</p>

                    <p style={{ color: 'gray' }}>Penghasilan oleh Komputer.</p>
                </div>
            </div>
        </>
    );
};

export default Receipt;
