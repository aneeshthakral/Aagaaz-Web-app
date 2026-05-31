/**
 * RoomsEnquiry - Specialized form for room accommodation enquiries
 */

'use client';

import { EnquiryForm } from './EnquiryForm';
import { fieldValidations, validateDateRange } from '@/lib/formValidation';

export function RoomsEnquiry({ className = '' }) {
  const roomFields = [
    {
      name: 'fullName',
      label: 'Guest Name',
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
      name: 'checkIn',
      label: 'Check-in Date',
      type: 'date',
      placeholder: 'Select check-in date',
      required: true
    },
    {
      name: 'checkOut',
      label: 'Check-out Date',
      type: 'date',
      placeholder: 'Select check-out date',
      required: true
    },
    {
      name: 'adultsCount',
      label: 'Number of Adults',
      type: 'select',
      placeholder: 'Select number of adults',
      required: true,
      options: [
        { value: '1', label: '1 Adult' },
        { value: '2', label: '2 Adults' },
        { value: '3', label: '3 Adults' },
        { value: '4', label: '4 Adults' },
        { value: '5', label: '5 Adults' },
        { value: '6', label: '6 Adults' }
      ]
    },
    {
      name: 'childrenCount',
      label: 'Number of Children',
      type: 'select',
      placeholder: 'Select number of children (optional)',
      required: false,
      options: [
        { value: '0', label: 'No Children' },
        { value: '1', label: '1 Child' },
        { value: '2', label: '2 Children' },
        { value: '3', label: '3 Children' },
        { value: '4', label: '4 Children' }
      ]
    },
    {
      name: 'roomType',
      label: 'Room Preference',
      type: 'select',
      placeholder: 'Select room type preference',
      required: true,
      options: [
        { value: 'standard', label: 'Standard Room' },
        { value: 'deluxe', label: 'Deluxe Room' },
        { value: 'premium', label: 'Premium Room' },
        { value: 'suite', label: 'Suite' },
        { value: 'family', label: 'Family Room' },
        { value: 'any', label: 'Any Available Room' }
      ]
    },
    {
      name: 'bedPreference',
      label: 'Bed Configuration',
      type: 'select',
      placeholder: 'Select bed preference',
      required: false,
      options: [
        { value: 'king', label: 'King Size Bed' },
        { value: 'queen', label: 'Queen Size Bed' },
        { value: 'twin', label: 'Twin Beds' },
        { value: 'extra-bed', label: 'Extra Bed Required' },
        { value: 'no-preference', label: 'No Preference' }
      ]
    },
    {
      name: 'purpose',
      label: 'Purpose of Visit',
      type: 'select',
      placeholder: 'Select purpose of stay',
      required: false,
      options: [
        { value: 'business', label: 'Business Trip' },
        { value: 'leisure', label: 'Leisure/Vacation' },
        { value: 'wedding', label: 'Wedding Function' },
        { value: 'family', label: 'Family Visit' },
        { value: 'event', label: 'Attending Event' },
        { value: 'medical', label: 'Medical Purpose' },
        { value: 'other', label: 'Other' }
      ]
    },
    {
      name: 'mealPlan',
      label: 'Meal Plan',
      type: 'select',
      placeholder: 'Select meal preference',
      required: false,
      options: [
        { value: 'room-only', label: 'Room Only' },
        { value: 'breakfast', label: 'Room + Breakfast' },
        { value: 'half-board', label: 'Half Board (Breakfast + Dinner)' },
        { value: 'full-board', label: 'Full Board (All Meals)' },
        { value: 'discuss', label: 'Discuss Later' }
      ]
    },
    {
      name: 'specialRequests',
      label: 'Special Requests',
      type: 'textarea',
      placeholder: 'Any special requirements, accessibility needs, dietary preferences, or celebration arrangements...',
      required: false
    }
  ];

  const roomValidations = {
    fullName: fieldValidations.fullName,
    email: fieldValidations.email,
    phone: fieldValidations.phone,
    checkIn: fieldValidations.checkIn,
    checkOut: fieldValidations.checkOut,
    adultsCount: fieldValidations.adultsCount,
    childrenCount: fieldValidations.childrenCount,
    roomType: fieldValidations.roomType,
    specialRequests: fieldValidations.message
  };

  const handleRoomSubmit = async (formData) => {
    // Validate date range
    const dateRangeError = validateDateRange(formData.checkIn, formData.checkOut);
    if (dateRangeError) {
      throw new Error(dateRangeError);
    }

    // TODO: Integrate with actual form submission service (Web3Forms, Resend, etc.)

    // For now, simulate API call
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  };

  return (
    <EnquiryForm
      type="rooms"
      title="Book Your Stay"
      description="Experience comfort and hospitality across our 44 well-appointed rooms"
      fields={roomFields}
      validations={roomValidations}
      onSubmit={handleRoomSubmit}
      showContactActions={true}
      showBookingPlatforms={true}
      className={className}
    />
  );
}

export function RoomsEnquiryCompact({ className = '' }) {
  const compactFields = [
    {
      name: 'fullName',
      label: 'Guest Name',
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
      name: 'checkIn',
      label: 'Check-in',
      type: 'date',
      placeholder: 'Check-in date',
      required: true
    },
    {
      name: 'checkOut',
      label: 'Check-out',
      type: 'date',
      placeholder: 'Check-out date',
      required: true
    },
    {
      name: 'adultsCount',
      label: 'Adults',
      type: 'select',
      placeholder: 'Number of adults',
      required: true,
      options: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4+' }
      ]
    }
  ];

  const compactValidations = {
    fullName: fieldValidations.fullName,
    phone: fieldValidations.phone,
    checkIn: fieldValidations.checkIn,
    checkOut: fieldValidations.checkOut,
    adultsCount: fieldValidations.adultsCount
  };

  return (
    <EnquiryForm
      type="rooms"
      title="Quick Room Enquiry"
      description="Check availability for your stay"
      fields={compactFields}
      validations={compactValidations}
      showContactActions={false}
      showBookingPlatforms={false}
      className={className}
    />
  );
}