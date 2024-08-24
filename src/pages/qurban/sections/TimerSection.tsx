import Timer from '../../home/sections/timer';

function TimerSection() {
  return (
    <section
      style={{
        backgroundImage:
          'linear-gradient(101.6deg, rgba(8, 64, 89, 0.51) -0.81%, rgba(0, 173, 185, 0.51) -0.8%, rgba(255, 255, 255, 0.51) 114.32%)',
      }}
    >
      <div className='max-w-[75.5rem] mx-auto pt-12 pb-8'>
        <Timer 
        // countDownDays={4}
         />
      </div>
    </section>
  );
}

export default TimerSection;
