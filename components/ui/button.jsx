import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'px-xl py-sm h-8xl md:h-10xl md:py-xl inline-flex items-center justify-between gap-md whitespace-nowrap text-xs md:text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-2xl md:[&_svg]:size-6xl [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-brand-yellowLight text-neutral-neutralDarker border border-neutral-neutralDarker hover:bg-neutral-neutralDarker hover:text-neutral-white',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-neutral-neutralDarker bg-background hover:bg-neutral-neutralDarker hover:text-neutral-white',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
