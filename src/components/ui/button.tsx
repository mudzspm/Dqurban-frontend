import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'shadow-lg bg-[#E60000]  text-primary-foreground hover:bg-[#b60202] hover:text-white',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border-[1px] border-[#C1272D] text-[#C1272D] hover:bg-[#C1272D] hover:text-white',
        secondary:
          'bg-[#01ACBC] text-[#FFFFFF] ',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        login: 'text-sm text-[#FFFFFF] font-bold w-[360px] ',
        register: 'text-sm text-[#FFFFFF] font-bold w-[100%] ',
        progress: 'text-sm text-[#FFFFFF] font-semibold w-[367px]',
        message: 'bg-[#09B1CB] text-[#FFFFFF] text-sm'
      },
      size: {
        default: 'px-8 py-3.5',
        sm: 'px-5 py-2.5 rounded-[7px]',
        lg: 'h-11 rounded-[7px] py-4 w-[16.313rem] px-8',
        xl:'py-2.5 px-6 rounded-md',
        xxl: 'py-2.5 px-6 rounded-md',
        icon: 'h-10 w-10',
        md: 'rounded-[4px] w-[150px] h-[44px]'
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
