/**
 * BanquetEnquiry - Specialized form for wedding and banquet enquiries
 */

'use client';

import { EnquiryForm } from './EnquiryForm';
import { fieldValidations } from '@/lib/formValidation';

export function BanquetEnquiry({ className = '' }) {
  const banquetFields = [
    {
      name: 'fullName',
      label: 'Full Name',
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
      name: 'eventDate',
      label: 'Event Date',
      type: 'date',
      placeholder: 'Select your event date',
      required: true
    },
    {
      name: 'eventType',
      label: 'Event Type',
      type: 'select',
      placeholder: 'Select event type',
      required: true,
      options: [
        { value: 'wedding', label: 'Wedding' },
        { value: 'engagement', label: 'Engagement' },
        { value: 'reception', label: 'Reception' },
        { value: 'anniversary', label: 'Anniversary' },
        { value: 'birthday', label: 'Birthday Celebration' },
        { value: 'religious', label: 'Religious Ceremony' },
        { value: 'corporate', label: 'Corporate Event' },
        { value: 'other', label: 'Other Celebration' }
      ]
    },
    {
      name: 'guestCount',
      label: 'Expected Guests',
      type: 'number',
      placeholder: 'Number of guests (50-180)',
      required: true
    },
    {
      name: 'eventTime',
      label: 'Preferred Time',
      type: 'select',
      placeholder: 'Select preferred time',
      required: false,
      options: [
        { value: 'morning', label: 'Morning (8:00 AM - 12:00 PM)' },
        { value: 'afternoon', label: 'Afternoon (12:00 PM - 5:00 PM)' },
        { value: 'evening', label: 'Evening (5:00 PM - 10:00 PM)' },
        { value: 'full-day', label: 'Full Day Event' }
      ]
    },
    {
      name: 'menuPreference',
      label: 'Menu Preference',
      type: 'select',
      placeholder: 'Select menu type',
      required: false,
      options: [
        { value: 'vegetarian', label: 'Vegetarian' },
        { value: 'non-vegetarian', label: 'Non-Vegetarian' },
        { value: 'mixed', label: 'Mixed (Veg & Non-Veg)' },
        { value: 'custom', label: 'Custom Menu' }
      ]
    },
    {
      name: 'decorationRequirement',
      label: 'Decoration Requirements',
      type: 'select',
      placeholder: 'Select decoration preference',
      required: false,
      options: [
        { value: 'basic', label: 'Basic Decoration' },
        { value: 'premium', label: 'Premium Decoration' },
        { value: 'custom', label: 'Custom Theme' },
        { value: 'own', label: 'Own Decorator' },
        { value: 'none', label: 'No Decoration' }
      ]
    },
    {
      name: 'budgetRange',
      label: 'Budget Range',
      type: 'select',
      placeholder: 'Select budget range (optional)',
      required: false,
      options: [
        { value: 'under-2l', label: 'Under ₹2 Lakhs' },
        { value: '2l-5l', label: '₹2-5 Lakhs' },
        { value: '5l-10l', label: '₹5-10 Lakhs' },
        { value: '10l-plus', label: '₹10+ Lakhs' },
        { value: 'discuss', label: 'Prefer to Discuss' }
      ]
    },
    {
      name: 'message',
      label: 'Special Requirements',
      type: 'textarea',
      placeholder: 'Tell us about any special requirements, themes, or preferences for your celebration...',
      required: false
    }
  ];

  const banquetValidations = {
    fullName: fieldValidations.fullName,
    email: fieldValidations.email,
    phone: fieldValidations.phone,
    eventDate: fieldValidations.eventDate,
    eventType: fieldValidations.eventType,
    guestCount: fieldValidations.guestCount,
    message: fieldValidations.message
  };

  const handleBanquetSubmit = async (formData) => {
    console.log('Banquet enquiry submitted:', formData);
    // TODO: Integrate with actual form submission service (Web3Forms, Resend, etc.)

    // For now, simulate API call
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  };

  return (
    <EnquiryForm
      type="banquet"
      title="Plan Your Celebration"
      description="Let us help make your special day unforgettable at Nawaazissh Hall"
      fields={banquetFields}
      validations={banquetValidations}
      onSubmit={handleBanquetSubmit}
      showContactActions={true}
      showBookingPlatforms={true}
      className={className}
    />
  );
}

export function BanquetEnquiryCompact({ className = '' }) {
  const compactFields = [
    {
      name: 'fullName',
      label: 'Full Name',
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
      name: 'eventDate',
      label: 'Event Date',
      type: 'date',
      placeholder: 'Event date',
      required: true
    },
    {
      name: 'guestCount',
      label: 'Guests',
      type: 'number',
      placeholder: 'Number of guests',
      required: true
    }
  ];

  const compactValidations = {
    fullName: fieldValidations.fullName,
    phone: fieldValidations.phone,
    eventDate: fieldValidations.eventDate,
    guestCount: fieldValidations.guestCount
  };

  return (
    <EnquiryForm
      type="banquet"
      title="Quick Banquet Enquiry"
      description="Share your details and we'll call you back"
      fields={compactFields}
      validations={compactValidations}
      showContactActions={false}
      showBookingPlatforms={false}
      className={className}
    />
  );
}