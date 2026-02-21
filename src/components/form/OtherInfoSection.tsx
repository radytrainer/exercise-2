/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Info, CloudUpload } from 'lucide-react';
import { FormData } from '../../types.ts';
import { Label, Input } from '../ui/FormElements.tsx';

interface Props {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export const OtherInfoSection = ({ formData, handleInputChange, setFormData }: Props) => (
  <section>
    <div className="flex items-center gap-3 mb-8 border-b border-zinc-100 pb-4">
      <div className="p-2 bg-primary/10 rounded-lg">
        <Info className="text-primary w-5 h-5" />
      </div>
      <h2 className="text-2xl font-semibold text-zinc-800 tracking-tight">Other Information</h2>
    </div>
    <div className="space-y-8">
      <div>
        <Label>Interests</Label>
        <Input 
          name="interest"
          value={formData.interest}
          onChange={handleInputChange}
          type="text" 
          placeholder="e.g. Machine Learning, UI/UX Design, Strategy" 
          required
        />
      </div>
      <div>
        <Label>Upload CV / Resume</Label>
        <div className="group relative">
          <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-zinc-200 border-dashed rounded-2xl cursor-pointer bg-zinc-50/50 hover:bg-zinc-50 hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm mb-3 group-hover:scale-110 transition-transform duration-300">
                <CloudUpload className="w-6 h-6 text-primary" />
              </div>
              <p className="mb-1 text-sm text-zinc-600">
                <span className="font-bold text-zinc-900">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-zinc-500">PDF, DOCX or TXT (MAX. 5MB)</p>
            </div>
            <input 
              type="file" 
              className="hidden" 
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFormData(prev => ({ ...prev, cvUrl: e.target.files![0].name }));
                }
              }}
            />
          </label>
        </div>
      </div>
    </div>
  </section>
);
