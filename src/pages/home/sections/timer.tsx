import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// @ts-ignore
import { qurbanCalandarActions } from '../../../context/actions/qurbanCalandarActions';
import { formatDate } from '../../../lib/utils.js';

const Timer = () => {
  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(qurbanCalandarActions());
  }, [dispatch]);
  // @ts-ignore
  const { qurbandate } = useSelector((state) => state.qurbanCalandarReducer);
  console.log("qurbandate");
  console.log(qurbandate);
  // Function to calculate time left until targetDate
  const calculateTimeLeft = (targetDate :any) => {
    const currentDate = new Date();
    const difference = targetDate.getTime() - currentDate.getTime();

    let timeLeft = {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
        minutes: Math.floor((difference / (1000 * 60)) % 60).toString().padStart(2, '0'),
        seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [targetDate, setTargetDate] = useState(new Date('2025-06-10T11:52:05.636Z'));
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    if (qurbandate && qurbandate.length > 0 && qurbandate[0]?.date) {
      const newTargetDate = new Date(qurbandate[0]?.date);
      console.log("Setting target date to:", newTargetDate); // Debugging log
      setTargetDate(newTargetDate);
    }
  }, [qurbandate]);

  // Update timeLeft every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

//   // Fetch Qurban date from API when component mounts
//   useEffect(() => {
//     dispatch(qurbanCalandarActions());
//   }, [dispatch]);
// debugger;
//   // Set targetDate from API response or use a default value if qurbandate is not set
//   // const targetDate = qurbandate.length > 0 ? new Date(qurbandate[0]?.date) : new Date('2028-08-19T11:52:05.636Z');
//   const targetDate = qurbandate && qurbandate.length > 0 && qurbandate[0]?.date
//   ? new Date(qurbandate[0]?.date)
//   : new Date('2028-08-19T11:52:05.636Z');

//   // Function to calculate time left until targetDate
//   const calculateTimeLeft = () => {
//     const currentDate = new Date();
//     const difference = targetDate.getTime() - currentDate.getTime();

//     let timeLeft = {
//       days: '',
//       hours: ' ',
//       minutes: ' ',
//       seconds: ' ', // Initialize seconds
//     };

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
//         minutes: Math.floor((difference / (1000 * 60)) % 60).toString().padStart(2, '0'),
//         seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0'),
//       };
//     }
// debugger;
//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   // Update timeLeft every second
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

  return (
    <div className='text-center mx-auto max-w-screen-xl'>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 mt-8'>
        <div className='bg-[#00ADB9] rounded-lg flex justify-center items-center p-3 ml-1 w-90 lg:p-11 text-white shadow-md scroll-m-5'>
          <div className='flex flex-col items-center'>
            <p className='text-5xl mb-2'>{timeLeft.days}</p>
            <p className='text-xs mt-2 scroll-m-2'>Hari</p>
          </div>
          <p className='text-5xl mx-4'>:</p>
          <div className='flex flex-col items-center'>
            <p className='text-5xl mb-2'>{timeLeft.hours}</p>
            <p className='text-xs mt-2'>Jam</p>
          </div>
          <p className='text-5xl mx-4'>:</p>
          <div className='flex flex-col items-center'>
            <p className='text-5xl mb-2'>{timeLeft.minutes}</p>
            <p className='text-xs mt-2'>Minit</p>
          </div>
          <p className='text-5xl mx-4'>:</p>
          <div className='flex flex-col items-center'>
            <p className='text-5xl mb-2'>{timeLeft.seconds}</p>
            <p className='text-xs mt-2'>Saat</p>
          </div>
        </div>
        <div className='bg-[#00ADB9] rounded-lg flex flex-col justify-center items-center p-6 lg:p-9 text-white shadow-md'>
          <p className='text-xl mb-2 lg:text-l'>Qurban Tahun Ini</p>
          <p className='text-lg font-bold lg:text-xl mt-2'>{formatDate(qurbandate[0]?.date)} / <br />{qurbandate[0]?.remarks}</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
