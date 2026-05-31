/**
 * Form validation utilities for Aagaaz enquiry forms
 */

// Validation rules
export const validationRules = {
  required: (value) => {
    if (!value || value.trim() === '') {
      return 'This field is required';
    }
    return null;
  },

  email: (value) => {
    if (!value) return null; // Don't validate empty values here, let required handle it
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return null;
  },

  phone: (value) => {
    if (!value) return null;
    // Remove all non-digit characters for validation
    const digitsOnly = value.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      return 'Please enter a valid phone number';
    }
    return null;
  },

  minLength: (min) => (value) => {
    if (!value) return null;
    if (value.length < min) {
      return `Must be at least ${min} characters`;
    }
    return null;
  },

  maxLength: (max) => (value) => {
    if (!value) return null;
    if (value.length > max) {
      return `Must be no more than ${max} characters`;
    }
    return null;
  },

  guestCount: (value) => {
    if (!value) return null;
    const num = parseInt(value);
    if (isNaN(num) || num < 1 || num > 1000) {
      return 'Please enter a valid number of guests (1-1000)';
    }
    return null;
  },

  dateNotPast: (value) => {
    if (!value) return null;
    const selectedDate = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to compare dates only

    if (selectedDate < today) {
      return 'Event date cannot be in the past';
    }
    return null;
  }
};

// Combine multiple validation rules for a field
export const validateField = (value, rules) => {
  if (!Array.isArray(rules)) {
    rules = [rules];
  }

  for (const rule of rules) {
    const error = rule(value);
    if (error) {
      return error;
    }
  }
  return null;
};

// Validate entire form object
export const validateForm = (formData, fieldValidations) => {
  const errors = {};
  let hasErrors = false;

  for (const [fieldName, rules] of Object.entries(fieldValidations)) {
    const fieldValue = formData[fieldName] || '';
    const error = validateField(fieldValue, rules);
    if (error) {
      errors[fieldName] = error;
      hasErrors = true;
    }
  }

  return {
    errors,
    isValid: !hasErrors
  };
};

// Format phone number for display
export const formatPhoneNumber = (value) => {
  const digits = value.replace(/\D/g, '');
  if (digits.length <= 10) {
    return digits.replace(/(\d{5})(\d{5})/, '$1-$2');
  }
  return digits;
};

// Common field validation configurations
export const fieldValidations = {
  // Basic contact fields
  fullName: [
    validationRules.required,
    validationRules.minLength(2),
    validationRules.maxLength(50)
  ],

  email: [
    validationRules.required,
    validationRules.email
  ],

  phone: [
    validationRules.required,
    validationRules.phone
  ],

  // Event specific fields
  eventDate: [
    validationRules.required,
    validationRules.dateNotPast
  ],

  guestCount: [
    validationRules.required,
    validationRules.guestCount
  ],

  // Optional fields
  message: [
    validationRules.maxLength(500)
  ],

  eventType: [
    validationRules.required
  ],

  // Check-in/out dates for rooms
  checkIn: [
    validationRules.required,
    validationRules.dateNotPast
  ],

  checkOut: [
    validationRules.required
  ],

  // Kitty party specific
  kittyTheme: [
    validationRules.required
  ],

  // Room specific
  roomType: [
    validationRules.required
  ],

  adultsCount: [
    validationRules.required,
    (value) => {
      const num = parseInt(value);
      if (isNaN(num) || num < 1 || num > 10) {
        return 'Please select 1-10 adults';
      }
      return null;
    }
  ],

  childrenCount: [
    (value) => {
      if (!value) return null; // Children count is optional
      const num = parseInt(value);
      if (isNaN(num) || num < 0 || num > 10) {
        return 'Please select 0-10 children';
      }
      return null;
    }
  ]
};

// Validate check-out date is after check-in
export const validateDateRange = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return null;

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  if (checkOutDate <= checkInDate) {
    return 'Check-out date must be after check-in date';
  }

  return null;
};

// Success and error message templates
export const messages = {
  success: {
    banquet: 'Thank you for your banquet enquiry! We will contact you within 24 hours to discuss your celebration.',
    kitty: 'Thank you for your kitty party enquiry! We will contact you within 24 hours to plan your special gathering.',
    rooms: 'Thank you for your accommodation enquiry! We will contact you within 24 hours to confirm availability.',
    general: 'Thank you for contacting Aagaaz! We will respond to your enquiry within 24 hours.'
  },

  error: {
    network: 'Unable to send your enquiry. Please try again or contact us directly.',
    validation: 'Please correct the errors below and try again.',
    server: 'There was an error processing your enquiry. Please try again later.'
  }
};