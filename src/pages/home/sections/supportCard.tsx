interface SupportCardProps {
  image: string;
}

const SupportCard = ({ image }: SupportCardProps) => {
  return (
    <div className='  rounded-[1.25rem] drop-shadow-lg'>
      <img
        src={image}
        alt='Animal'
        className='bg-cover object-cover max-h-full '
      />
    </div>
  );
};
export default SupportCard;
