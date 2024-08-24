import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

type HelplineItemProps = {
    title: string;
    children: React.ReactNode
}

const HelpLineItem = ({ title, children }: HelplineItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-[#53AFBE] lg:w-[50%] rounded-[7px] h-auto overflow-hidden">
            <button
                className="flex justify-between items-center p-5 w-full text-left gap-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className='text-sm'>{title}</span>
                <span>{isOpen ? <ChevronUp color='#53AFBE' /> : <ChevronDown color='#53AFBE' />}</span>
            </button>
            <div className={`p-5 ${!isOpen && 'hidden'} text-sm`}>{children}</div>
        </div>
    );
};

export default HelpLineItem