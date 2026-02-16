'use client'

import React, { useEffect } from 'react'
import { cn } from '@/lib/utils'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  maxWidth = 'lg'
}) => {
  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className={cn(
            'relative w-full bg-white rounded-2xl shadow-2xl',
            'transform transition-all',
            'animate-slide-up',
            {
              'max-w-sm': maxWidth === 'sm',
              'max-w-md': maxWidth === 'md',
              'max-w-lg': maxWidth === 'lg',
              'max-w-xl': maxWidth === 'xl',
              'max-w-2xl': maxWidth === '2xl',
            }
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-nordic-snow transition-colors z-10"
            aria-label="Close modal"
          >
            <svg 
              className="w-6 h-6 text-nordic-slate/60 hover:text-nordic-slate" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Title */}
          {title && (
            <div className="px-8 pt-8 pb-4 border-b border-nordic-snow">
              <h2 className="text-h2 font-display text-nordic-pine">
                {title}
              </h2>
            </div>
          )}

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(100vh-8rem)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
