'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [alert, setAlert] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setAlert(null)

    // Validation for empty fields
    if (!formData.name || !formData.email || !formData.message) {
      setAlert({ type: 'error', message: 'Please fill in all fields.' })
      setIsSubmitting(false)
      return
    }

    // Email format validation
    if (!validateEmail(formData.email)) {
      setAlert({ type: 'error', message: 'Please enter a valid email address.' })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, to: 'wahaj0574@gmail.com' }),
      })

      const result = await response.json()

      if (response.ok) {
        setAlert({ type: 'success', message: 'Message sent successfully!' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setAlert({ type: 'error', message: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-purple-800 to-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Me</h2>
        <AnimatePresence>
          {alert && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`p-3 rounded-md mb-4 ${
                alert.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
            >
              {alert.message}
            </motion.div>
          )}
        </AnimatePresence>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </motion.div>
    </div>
  )
}

export default ContactPage
