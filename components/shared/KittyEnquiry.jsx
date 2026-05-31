/**
 * KittyEnquiry - Specialized form for kitty party enquiries
 */

'use client';

import { EnquiryForm } from './EnquiryForm';
import { fieldValidations } from '@/lib/formValidation';

export function KittyEnquiry({ className = '' }) {
  const kittyFields = [
    {
      name: 'fullName',
      label: 'Organizer Name',
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
      label: 'Kitty Party Date',
      type: 'date',
      placeholder: 'Select your preferred date',
      required: true
    },
    {
      name: 'kittyTheme',
      label: 'Preferred Theme',
      type: 'select',
      placeholder: 'Select kitty party theme',
      required: true,
      options: [
        { value: 'bollywood', label: 'Bollywood Night' },
        { value: 'retro', label: 'Retro Evening' },
        { value: 'traditional', label: 'Traditional Indian' },
        { value: 'western', label: 'Western Party' },
        { value: 'ethnic', label: 'Ethnic Wear' },
        { value: 'casual', label: 'Casual Get-together' },
        { value: 'formal', label: 'Formal Dinner' },
        { value: 'festival', label: 'Festival Special' },
        { value: 'seasonal', label: 'Seasonal Theme' },
        { value: 'custom', label: 'Custom Theme' }
      ]
    },
    {
      name: 'guestCount',
      label: 'Number of Ladies',
      type: 'number',
      placeholder: 'Expected attendees',
      required: true
    },
    {
      name: 'hallPreference',
      label: 'Hall Preference',
      type: 'select',
      placeholder: 'Select preferred hall',
      required: false,
      options: [
        { value: 'ba-dastoorr', label: 'Ba-Dastoorr Hall' },
        { value: 'shafaq', label: 'Shafaq Hall' },
        { value: 'any', label: 'Any Available' }
      ]
    },
    {
      name: 'timeSlot',
      label: 'Preferred Time',
      type: 'select',
      placeholder: 'Select time slot',
      required: false,
      options: [
        { value: 'morning', label: 'Morning (10:00 AM - 2:00 PM)' },
        { value: 'afternoon', label: 'Afternoon (2:00 PM - 6:00 PM)' },
        { value: 'evening', label: 'Evening (6:00 PM - 10:00 PM)' }
      ]
    },
    {
      name: 'menuType',
      label: 'Menu Preference',
      type: 'select',
      placeholder: 'Select menu type',
      required: false,
      options: [
        { value: 'hi-tea', label: 'Hi-Tea & Snacks' },
        { value: 'lunch', label: 'Full Lunch' },
        { value: 'dinner', label: 'Dinner' },
        { value: 'mixed', label: 'Mixed Menu' },
        { value: 'custom', label: 'Custom Menu' }
      ]
    },
    {
      name: 'entertainment',
      label: 'Entertainment Requirements',
      type: 'select',
      placeholder: 'Select entertainment options',
      required: false,
      options: [
        { value: 'dj', label: 'DJ & Music' },
        { value: 'games', label: 'Party Games' },
        { value: 'dance', label: 'Dance Floor' },
        { value: 'karaoke', label: 'Karaoke' },
        { value: 'prizes', label: 'Prize Distribution' },
        { value: 'photography', label: 'Photography' },
        { value: 'none', label: 'No Entertainment' },
        { value: 'custom', label: 'Custom Entertainment' }
      ]
    },
    {
      name: 'decorationStyle',
      label: 'Decoration Style',
      type: 'select',
      placeholder: 'Select decoration preference',
      required: false,
      options: [
        { value: 'elegant', label: 'Elegant & Classy' },
        { value: 'colorful', label: 'Colorful & Vibrant' },
        { value: 'minimalist', label: 'Simple & Minimalist' },
        { value: 'theme-based', label: 'Theme-based' },
        { value: 'flowers', label: 'Fresh Flowers' },
        { value: 'own', label: 'Own Decorator' },
        { value: 'none', label: 'No Decoration' }
      ]
    },
    {
      name: 'specialRequests',
      label: 'Special Requests',
      type: 'textarea',
      placeholder: 'Any special arrangements, dietary requirements, or preferences for your kitty party...',
      required: false
    }
  ];

  const kittyValidations = {
    fullName: fieldValidations.fullName,
    email: fieldValidations.email,
    phone: fieldValidations.phone,
    eventDate: fieldValidations.eventDate,
    kittyTheme: fieldValidations.kittyTheme,
    guestCount: fieldValidations.guestCount,
    specialRequests: fieldValidations.message
  };

  const handleKittySubmit = async (formData) => {
    // TODO: Integrate with actual form submission service (Web3Forms, Resend, etc.)

    // For now, simulate API call
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  };

  return (
    <EnquiryForm
      type="kitty"
      title="Plan Your Kitty Party"
      description="Let's create a memorable gathering at Ba-Dastoorr or Shafaq Hall"
      fields={kittyFields}
      validations={kittyValidations}
      onSubmit={handleKittySubmit}
      showContactActions={true}
      showBookingPlatforms={true}
      className={className}
    />
  );
}

export function KittyEnquiryCompact({ className = '' }) {
  const compactFields = [
    {
      name: 'fullName',
      label: 'Organizer Name',
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
      label: 'Party Date',
      type: 'date',
      placeholder: 'Preferred date',
      required: true
    },
    {
      name: 'guestCount',
      label: 'Ladies',
      type: 'number',
      placeholder: 'Number of attendees',
      required: true
    },
    {
      name: 'kittyTheme',
      label: 'Theme',
      type: 'select',
      placeholder: 'Preferred theme',
      required: true,
      options: [
        { value: 'bollywood', label: 'Bollywood' },
        { value: 'retro', label: 'Retro' },
        { value: 'traditional', label: 'Traditional' },
        { value: 'western', label: 'Western' },
        { value: 'casual', label: 'Casual' },
        { value: 'custom', label: 'Custom' }
      ]
    }
  ];

  const compactValidations = {
    fullName: fieldValidations.fullName,
    phone: fieldValidations.phone,
    eventDate: fieldValidations.eventDate,
    guestCount: fieldValidations.guestCount,
    kittyTheme: fieldValidations.kittyTheme
  };

  return (
    <EnquiryForm
      type="kitty"
      title="Quick Kitty Enquiry"
      description="Share your details and we'll plan the perfect party"
      fields={compactFields}
      validations={compactValidations}
      showContactActions={false}
      showBookingPlatforms={false}
      className={className}
    />
  );
}