/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GraduationCap, Trash2, PlusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Subject } from '../../types.ts';
import { Label, Input, Select } from '../ui/FormElements.tsx';

interface Props {
  subjects: Subject[];
  handleSubjectChange: (id: number | string, field: keyof Subject, value: string) => void;
  addEducationRow: () => void;
  removeEducationRow: (id: number | string) => void;
}

export const EducationSection = ({ subjects, handleSubjectChange, addEducationRow, removeEducationRow }: Props) => (
  <section>
    <div className="flex items-center gap-3 mb-8 border-b border-zinc-100 pb-4">
      <div className="p-2 bg-primary/10 rounded-lg">
        <GraduationCap className="text-primary w-5 h-5" />
      </div>
      <h2 className="text-2xl font-semibold text-zinc-800 tracking-tight">Education Information</h2>
    </div>
    
    <div className="space-y-6">
      <AnimatePresence initial={false}>
        {subjects.map((row) => (
          <motion.div 
            key={row.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end bg-zinc-50/50 p-6 rounded-2xl border border-zinc-100 relative group transition-all hover:bg-zinc-50"
          >
            <div className="md:col-span-4">
              <Label>Subject / Degree</Label>
              <Input 
                value={row.subject}
                onChange={(e) => handleSubjectChange(row.id, 'subject', e.target.value)}
                type="text" 
                placeholder="e.g. Computer Science" 
                required
              />
            </div>
            <div className="md:col-span-4">
              <Label>School Name</Label>
              <Input 
                value={row.schoolName}
                onChange={(e) => handleSubjectChange(row.id, 'schoolName', e.target.value)}
                type="text" 
                placeholder="e.g. Stanford University" 
                required
              />
            </div>
            <div className="md:col-span-3">
              <Label>Graduation Year</Label>
              <Select
                value={row.year}
                onChange={(e) => handleSubjectChange(row.id, 'year', e.target.value)}
                required
              >
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
              </Select>
            </div>
            <div className="md:col-span-1 flex justify-center pb-1">
              {subjects.length > 1 && (
                <button 
                  type="button"
                  onClick={() => removeEducationRow(row.id)}
                  className="p-2.5 text-zinc-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                  title="Remove row"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
    
    <button 
      type="button"
      onClick={addEducationRow}
      className="mt-6 flex items-center gap-2 text-primary hover:text-blue-700 text-sm font-bold transition-all group px-4 py-2 rounded-xl hover:bg-primary/5"
    >
      <PlusCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
      Add Another Education Row
    </button>
  </section>
);
