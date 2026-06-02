/**
 * GeneralEnquiry - General contact form for all other enquiries
 */

'use client';

import { EnquiryForm } from './EnquiryForm';
import { fieldValidations } from '@/lib/formValidation';

export function GeneralEnquiry({ className = '' }) {
  const generalFields = [
    {
      name: 'fullName',
      label: 'Your Name',
      type: 'text',
      placeholder: 'Enter your full name',
      required: true
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your email address',
      required: true
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Enter your phone number',
      required: true
    },
    {
      name: 'enquiryType',
      label: 'Enquiry Type',
      type: 'select',
      placeholder: 'What can we help you with?',
      required: true,
      options: [
        { value: 'general-info', label: 'General Information' },
        { value: 'banquet', label: 'Banquet & Weddings' },
        { value: 'kitty', label: 'Kitty Parties' },
        { value: 'rooms', label: 'Room Booking' },
        { value: 'dining', label: 'Restaurant & Dining' },
        { value: 'corporate', label: 'Corporate Events' },
        { value: 'catering', label: 'Catering Services' },
        { value: 'details', label: 'Package Details' },
        { value: 'availability', label: 'Check Availability' },
        { value: 'feedback', label: 'Feedback' },
        { value: 'complaint', label: 'Complaint' },
        { value: 'collaboration', label: 'Business Collaboration' },
        { value: 'media', label: 'Media Enquiry' },
        { value: 'other', label: 'Other' }
      ]
    },
    {
      name: 'preferredDate',
      label: 'Preferred Date (if applicable)',
      type: 'date',
      placeholder: 'Select date if relevant to your enquiry',
      required: false
    },
    {
      name: 'priority',
      label: 'Priority Level',
      type: 'select',
      placeholder: 'How urgent is your enquiry?',
      required: false,
      options: [
        { value: 'normal', label: 'Normal (24-48 hours response)' },
        { value: 'high', label: 'High (Within 24 hours)' },
        { value: 'urgent', label: 'Urgent (Same day response)' }
      ]
    },
    {
      name: 'preferredContact',
      label: 'Preferred Contact Method',
      type: 'select',
      placeholder: 'How would you like us to respond?',
      required: false,
      options: [
        { value: 'phone', label: 'Phone Call' },
        { value: 'email', label: 'Email' },
        { value: 'whatsapp', label: 'WhatsApp' },
        { value: 'any', label: 'Any Method' }
      ]
    },
    {
      name: 'bestTime',
      label: 'Best Time to Contact',
      type: 'select',
      placeholder: 'When is the best time to reach you?',
      required: false,
      options: [
        { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
        { value: 'afternoon', label: 'Afternoon (12 PM - 5 PM)' },
        { value: 'evening', label: 'Evening (5 PM - 8 PM)' },
        { value: 'anytime', label: 'Anytime' }
      ]
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Please provide details about your enquiry. The more information you share, the better we can assist you...',
      required: true
    }
  ];

  const generalValidations = {
    fullName: fieldValidations.fullName,
    email: fieldValidations.email,
    phone: fieldValidations.phone,
    enquiryType: fieldValidations.eventType, // Reusing eventType validation for enquiryType
    message: [
      ...fieldValidations.message,
      (value) => {
        if (!value || value.trim() === '') {
          return 'Please provide details about your enquiry';
        }
        if (value.length < 10) {
          return 'Please provide more details (at least 10 characters)';
        }
        return null;
      }
    ]
  };

  const handleGeneralSubmit = async (formData) => {
    // TODO: Integrate with actual form submission service (Web3Forms, Resend, etc.)

    // For now, simulate API call
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  };

  return (
    <EnquiryForm
      type="general"
      title="Get in Touch"
      description="We're here to help with any questions or assistance you need"
      fields={generalFields}
      validations={generalValidations}
      onSubmit={handleGeneralSubmit}
      showContactActions={true}
      showBookingPlatforms={true}
      className={className}
    />
  );
}

export function QuickContactForm({ className = '' }) {
  const quickFields = [
    {
      name: 'fullName',
      label: 'Name',
      type: 'text',
      placeholder: 'Your name',
      required: true
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'tel',
      placeholder: 'Your phone number',
      required: true
    },
    {
      name: 'enquiryType',
      label: 'About',
      type: 'select',
      placeholder: 'What is this regarding?',
      required: true,
      options: [
        { value: 'banquet', label: 'Banquet/Wedding' },
        { value: 'kitty', label: 'Kitty Party' },
        { value: 'rooms', label: 'Room Booking' },
        { value: 'dining', label: 'Restaurant' },
        { value: 'other', label: 'Other' }
      ]
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Brief message about your enquiry...',
      required: true
    }
  ];

  const quickValidations = {
    fullName: fieldValidations.fullName,
    phone: fieldValidations.phone,
    enquiryType: fieldValidations.eventType,
    message: generalValidations.message
  };

  return (
    <EnquiryForm
      type="general"
      title="Quick Enquiry"
      description="Send us a message and we'll get back to you soon"
      fields={quickFields}
      validations={quickValidations}
      showContactActions={false}
      showBookingPlatforms={false}
      className={className}
    />
  );
}
