import { motion } from 'framer-motion'

export default function AnimatedGradientBorder({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl"
        style={{ background: 'conic-gradient(from 180deg at 50% 50%, #005EB8, #00ADEF, #6BD5FF, #00ADEF, #005EB8)' }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
      <div className="relative rounded-[14px] bg-white p-6">{children}</div>
    </div>
  )
}
