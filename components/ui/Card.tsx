import React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered' | 'glass'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  hover?: boolean
  children: React.ReactNode
  className?: string
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      hover = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      // Base styles
      'rounded-lg',
      'transition-all duration-200',
      
      // Variants
      {
        // Default - subtle shadow
        'bg-white shadow-md': variant === 'default',
        
        // Elevated - stronger shadow
        'bg-white shadow-lg hover:shadow-xl': variant === 'elevated',
        
        // Bordered - no shadow, border instead
        'bg-white border-2 border-nordic-snow': variant === 'bordered',
        
        // Glass - semi-transparent with backdrop blur
        'bg-white/80 backdrop-blur-sm shadow-md': variant === 'glass',
      },
      
      // Padding
      {
        'p-0': padding === 'none',
        'p-4': padding === 'sm',
        'p-6': padding === 'md',
        'p-8': padding === 'lg',
        'p-12': padding === 'xl',
      },
      
      // Hover effect
      hover && 'hover:-translate-y-1 hover:shadow-xl cursor-pointer',
      
      className
    )

    return (
      <div ref={ref} className={baseStyles} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

// Card subcomponents
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  )
}

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h3 className={cn('text-h4 font-display text-nordic-slate', className)} {...props}>
      {children}
    </h3>
  )
}

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p className={cn('text-body-md text-nordic-slate/70 mt-2', className)} {...props}>
      {children}
    </p>
  )
}

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  )
}

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('mt-6 pt-6 border-t border-nordic-snow', className)} {...props}>
      {children}
    </div>
  )
}

export default Card
