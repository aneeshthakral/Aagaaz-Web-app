/**
 * EnquiryForm - Luxury base form component for Aagaaz enquiries
 * Implements sophisticated validation, animations, and success/error states
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  AlertCircle,
  Send,
  Loader2,
  Calendar,
  Users,
  Mail,
  Phone,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { validateForm, formatPhoneNumber, messages } from '@/lib/formValidation';
import { ContactActions } from './ContactActions';
import { BookingPlatforms } from './BookingPlatforms';

const formVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const fieldVariants = {
  initial: { opacity: 0, x: -20 },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

const successVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300
    }
  },
  exit: { scale: 0.8, opacity: 0 }
};

export function EnquiryForm({
  type = 'general',
  title = 'Send Enquiry',
  description = 'We would love to help plan your celebration',
  fields = [],
  validations = {},
  onSubmit = () => {},
  showContactActions = true,
  showBookingPlatforms = true,
  className = ''
}) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (field, value) => {
    const nextValue = field === 'phone' ? formatPhoneNumber(value) : value;

    setFormData(prev => ({ ...prev, [field]: nextValue }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitError('');

    // Validate form
    const { errors: validationErrors, isValid } = validateForm(formData, validations);

    if (!isValid) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      await Promise.resolve(onSubmit(formData));
      setSubmitStatus('success');
      setFormData({});
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
      setSubmitError(
        error instanceof Error && error.message
          ? error.message
          : messages.error.network
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldIcon = (fieldType) => {
    const iconMap = {
      fullName: User,
      email: Mail,
      phone: Phone,
      eventDate: Calendar,
      checkIn: Calendar,
      checkOut: Calendar,
      guestCount: Users,
      adultsCount: Users,
      childrenCount: Users
    };
    return iconMap[fieldType];
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        variants={successVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-8 text-center ${className}`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-xl font-bold text-green-900 mb-2">
          Enquiry Sent Successfully!
        </h3>
        <p className="text-green-700 mb-6">
          {messages.success[type] || messages.success.general}
        </p>

        {showContactActions && (
          <div className="border-t border-green-200 pt-6">
            <p className="text-sm text-green-700 mb-4">
              Need immediate assistance?
            </p>
            <ContactActions layout="horizontal" className="justify-center" />
          </div>
        )}

        <Button
          onClick={() => setSubmitStatus(null)}
          variant="outline"
          className="mt-4 border-green-300 text-green-700 hover:bg-green-50"
        >
          Send Another Enquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <div className={className}>
      <motion.div
        variants={formVariants}
        initial="initial"
        animate="animate"
        className="bg-surface border border-border rounded-lg shadow-lg overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-accent/10 to-secondary/10 px-8 py-6 border-b border-border">
          <h3 className="text-2xl font-bold text-text mb-2">{title}</h3>
          <p className="text-text-light">{description}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid gap-6">
            {fields.map((field, index) => {
              const Icon = getFieldIcon(field.name);
              const error = errors[field.name];

              return (
                <motion.div
                  key={field.name}
                  variants={fieldVariants}
                  custom={index}
                  initial="initial"
                  animate="animate"
                  className="space-y-2"
                >
                  <Label
                    htmlFor={field.name}
                    className="text-text font-medium flex items-center gap-2"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </Label>

                  {field.type === 'textarea' ? (
                    <Textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      required={field.required}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? `${field.name}-error` : undefined}
                      className={`min-h-[100px] resize-none transition-all duration-300 ${
                        error
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                          : 'focus:border-accent focus:ring-accent/20'
                      }`}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      id={field.name}
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      required={field.required}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? `${field.name}-error` : undefined}
                      className={`w-full px-3 py-2 border rounded-md bg-background text-text transition-all duration-300 ${
                        error
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-border focus:border-accent focus:ring-accent/20'
                      }`}
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <Input
                      id={field.name}
                      name={field.name}
                      type={field.type || 'text'}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      required={field.required}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? `${field.name}-error` : undefined}
                      className={`transition-all duration-300 ${
                        error
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                          : 'focus:border-accent focus:ring-accent/20'
                      }`}
                    />
                  )}

                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        id={`${field.name}-error`}
                        className="flex items-center gap-2 text-red-600 text-sm"
                      >
                        <AlertCircle className="h-4 w-4" />
                        {error}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: fields.length * 0.1 + 0.2 }}
            className="mt-8 pt-6 border-t border-border"
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full bg-accent hover:bg-accent-hover text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Sending Enquiry...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Enquiry
                </>
              )}
            </Button>

            <AnimatePresence>
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md"
                >
                  <div className="flex items-center gap-2 text-red-700">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm">
                      {submitError || messages.error.network}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </form>

        {/* Footer Actions */}
        <div className="px-8 pb-8 space-y-6">
          {showContactActions && (
            <div className="border-t border-border pt-6">
              <div className="text-center">
                <p className="text-sm text-text-light mb-4">
                  Prefer to speak directly?
                </p>
                <ContactActions layout="horizontal" className="justify-center" />
              </div>
            </div>
          )}

          {showBookingPlatforms && (
            <BookingPlatforms />
          )}
        </div>
      </motion.div>
    </div>
  );
}
