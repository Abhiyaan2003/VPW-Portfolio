import { motion } from 'framer-motion'

/**
 * Wraps children in a motion.div that fades+slides up when scrolled into view.
 *
 * @param {string}  className  Extra classes applied to the wrapper div
 * @param {number}  delay      Stagger delay in seconds (e.g. 0.1, 0.2)
 * @param {string}  tag        HTML tag to render (default: 'div')
 * @param {string}  direction  Animation direction: 'up', 'down', 'left', 'right'
 */
export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  tag = 'div',
  direction = 'up',
  distance = 30
}) {
  const Tag = motion[tag] || motion.div

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // premium cubic-bezier
      }
    }
  }

  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={variants}
      className={className}
    >
      {children}
    </Tag>
  )
}

