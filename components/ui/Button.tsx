import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'href'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
  loading?: boolean
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      className,
      fullWidth = false,
      loading = false,
      disabled,
      href,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      // Base styles
      'inline-flex items-center justify-center gap-2',
      'font-semibold',
      'transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      
      // Width
      fullWidth ? 'w-full' : 'w-auto',
      
      // Variants
      {
        // Primary - Nordic Pine
        'bg-nordic-pine text-white hover:bg-nordic-pine-dark active:bg-nordic-pine-dark focus:ring-nordic-pine':
          variant === 'primary',
        
        // Secondary - Fjord Blue
        'bg-nordic-fjord text-white hover:bg-nordic-fjord-dark active:bg-nordic-fjord-dark focus:ring-nordic-fjord':
          variant === 'secondary',
        
        // Outline
        'border-2 border-nordic-pine text-nordic-pine hover:bg-nordic-pine hover:text-white active:bg-nordic-pine-dark focus:ring-nordic-pine':
          variant === 'outline',
        
        // Ghost
        'text-nordic-pine hover:bg-nordic-pine/10 active:bg-nordic-pine/20 focus:ring-nordic-pine':
          variant === 'ghost',
        
        // Link
        'text-nordic-pine hover:underline underline-offset-4 focus:ring-nordic-pine':
          variant === 'link',
      },
      
      // Sizes
      {
        'px-3 py-1.5 text-sm': size === 'sm',
        'px-5 py-2.5 text-base': size === 'md',
        'px-6 py-3 text-lg': size === 'lg',
        'px-8 py-4 text-xl': size === 'xl',
      },
      
      className
    )

    // If href is provided, render as Link (for internal routes) or anchor (for external/hash links)
    if (href) {
      // Hash links (#contact, #services) use regular anchor
      if (href.startsWith('#')) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={baseStyles}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {children}
          </a>
        )
      }
      
      // External links use regular anchor
      if (href.startsWith('http')) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseStyles}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {children}
          </a>
        )
      }
      
      // Internal routes use Next.js Link
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseStyles}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </Link>
      )
    }

    // Otherwise render as button
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseStyles}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
