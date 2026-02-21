/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Briefcase } from 'lucide-react';
import { FormData } from '../../types.ts';
import { Label, Input, Select } from '../ui/FormElements.tsx';

interface Props {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

export const ExperienceSection = ({ formData, handleInputChange }: Props) => (
  <section>
    <div className="flex items-center gap-3 mb-8 border-b border-zinc-100 pb-4">
      <div className="p-2 bg-primary/10 rounded-lg">
        <Briefcase className="text-primary w-5 h-5" />
      </div>
      <h2 className="text-2xl font-semibold text-zinc-800 tracking-tight">Working Experiences</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Label>Years of Experience</Label>
        <Select
          name="workingExperienceYear"
          value={formData.workingExperienceYear}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Experience</option>
          <option>0 - 1 Year</option>
          <option>1 - 3 Years</option>
          <option>3 - 5 Years</option>
          <option>5 - 10 Years</option>
          <option>10+ Years</option>
        </Select>
      </div>
      <div>
        <Label>Field / Sector</Label>
        <Input 
          name="workingExperienceField"
          value={formData.workingExperienceField}
          onChange={handleInputChange}
          type="text" 
          placeholder="e.g. Technology, Finance, Healthcare" 
          required
        />
      </div>
    </div>
  </section>
);
