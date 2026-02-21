/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FormData } from '../../types.ts';
import { Label, Input, Select, TextArea } from '../ui/FormElements.tsx';

interface Props {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

export const PersonalSection = ({ formData, handleInputChange }: Props) => (
  <section>
    <div className="flex items-center gap-3 mb-8 border-b border-zinc-100 pb-4">
      <div className="p-2 bg-primary/10 rounded-lg">
        <User className="text-primary w-5 h-5" />
      </div>
      <h2 className="text-2xl font-semibold text-zinc-800 tracking-tight">Personal Information</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      <div>
        <Label>First Name</Label>
        <Input 
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          type="text" 
          placeholder="John" 
          required
        />
      </div>
      <div>
        <Label>Last Name</Label>
        <Input 
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          type="text" 
          placeholder="Doe" 
          required
        />
      </div>
      <div>
        <Label>Gender</Label>
        <Select 
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </Select>
      </div>
      <div>
        <Label>Date of Birth</Label>
        <Input 
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          type="date" 
          required
        />
      </div>
      <div>
        <Label>Phone Number</Label>
        <Input 
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          type="tel" 
          placeholder="+1 (555) 000-0000" 
          required
        />
      </div>
      <div>
        <Label>Email Address</Label>
        <Input 
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          type="email" 
          placeholder="john.doe@example.com" 
          required
        />
      </div>
      <div className="md:col-span-2">
        <Label>Home Address</Label>
        <Input 
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          type="text" 
          placeholder="123 Career Street, Professional City, 90210" 
          required
        />
      </div>
    </div>
    
    <div className="mt-8 p-6 bg-zinc-50 rounded-2xl border border-zinc-100 transition-colors">
      <div className="flex items-center gap-3">
        <input 
          id="disability_toggle"
          name="isDisabled"
          type="checkbox" 
          checked={formData.isDisabled}
          onChange={handleInputChange}
          className="h-5 w-5 text-primary focus:ring-primary/20 border-zinc-300 rounded cursor-pointer transition-all"
        />
        <label htmlFor="disability_toggle" className="text-sm font-medium text-zinc-700 cursor-pointer select-none">
          I have a physical or mental disability
        </label>
      </div>
      <AnimatePresence>
        {formData.isDisabled && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-5">
              <Label>Please provide details (optional)</Label>
              <TextArea 
                name="disability"
                value={formData.disability}
                onChange={handleInputChange}
                rows={3}
                placeholder="Tell us how we can best support you during the application process..."
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </section>
);
