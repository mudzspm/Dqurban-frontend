import processing_order  from '../icons/processing_order.svg';
import order_received  from '../icons/order_received.svg';
import  order_execution from '../icons/order_execution.svg';
import order_complete from '../icons/order_complete.svg';
import { formatDateWithTime } from '../../../lib/utils';

const images = [order_received, processing_order, order_execution, order_complete];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
const TimelineItem = ({ index,title, timestamp, isLast }) => (
  <div className='relative pb-8'>
    {!isLast && (
      <span
      className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-[#00ADB9]'
      aria-hidden='true'
      ></span>
    )}
    <div className='relative flex space-x-3'>
      <div>
        <div className='bg-[#00ADB9] rounded-[14px] w-10 h-10'>
          <img src={images[index]} alt="SVG"/>
        </div>
      </div>
      <div className='min-w-0 flex-1 pt-1.5 flex flex-col space-x-4'>
        <div>
          <p className='font-medium'>{title}</p>
          <p className='text-sm text-gray-500'>
            <time dateTime={formatDateWithTime(timestamp)}>{formatDateWithTime(timestamp)}</time>
          </p>
        </div>
      </div>
    </div>
  </div>
);

interface Iitems {
  items: { order_status: string; created_at: string;  }[];
}

const Timeline = ({ items }: Iitems) => {
  console.log(items);
  return (
    <div className='bg-white px-4 py-5 rounded-lg'>
      <div className='flow-root'>
        <ul className='-mb-8'>
          {items?.map(
            (
              item: { order_status: string; created_at: string },
              index: number | string,
            ) => (
              <TimelineItem
                key={index}
                index={index}
                title={item?.order_status}
                timestamp={item.created_at}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-expect-error
                isFirst={index === 0}
                isLast={index === items.length - 1}
              />
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

const App: React.FC<{ orderStatusHistory: any }> = ({ orderStatusHistory }) => {
  // const timelineData = [
  //   {
      
  //     order_status: 'Order Received',
  //     created_at: '03/03/2024 5:23 pm',
  //   },
  //   {
  //     order_status: 'Processing Order',
  //     created_at: '03/03/2024 5:23 pm',
  //   },
  //   {
  //     order_status: 'Order Execution',
  //     created_at: '03/03/2024 5:23 pm',
  //   },
  //   {
  //     order_status: 'Order Complete',
  //     created_at: '03/03/2024 5:23 pm',
  //   },
  // ];

  return (
    <div className='App'>
      <Timeline items={ orderStatusHistory } />
    </div>
  );
};

export default App;
