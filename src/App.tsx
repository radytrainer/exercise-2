/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Subject, FormData } from './types.ts';
import { PersonalSection } from './components/form/PersonalSection.tsx';
import { EducationSection } from './components/form/EducationSection.tsx';
import { ExperienceSection } from './components/form/ExperienceSection.tsx';
import { OtherInfoSection } from './components/form/OtherInfoSection.tsx';

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    subjects: [{ id: 1, subject: '', schoolName: '', year: '2024' }],
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    address: '',
    isDisabled: false,
    disability: '',
    workingExperienceYear: '',
    workingExperienceField: '',
    interest: '',
    cvUrl: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: val,
    }));
  };

  const handleSubjectChange = (id: number | string, field: keyof Subject, value: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.map(s => (s.id === id ? { ...s, [field]: value } : s)),
    }));
  };

  const addEducationRow = () => {
    setFormData(prev => ({
      ...prev,
      subjects: [...prev.subjects, { id: crypto.randomUUID(), subject: '', schoolName: '', year: '2024' }],
    }));
  };

  const removeEducationRow = (id: number | string) => {
    if (formData.subjects.length > 1) {
      setFormData(prev => ({
        ...prev,
        subjects: prev.subjects.filter(s => s.id !== id),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen py-12 px-4 font-sans selection:bg-primary/10 selection:text-primary">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-zinc-900 mb-3 tracking-tight">
            Create Your Profile
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Join our professional recruitment platform to find your next career opportunity.
          </motion.p>
        </header>

        {/* Main Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-2xl shadow-zinc-200/50 rounded-3xl p-8 md:p-12 border border-zinc-100 backdrop-blur-sm"
        >
          <form className="space-y-12" onSubmit={handleSubmit}>
            <PersonalSection formData={formData} handleInputChange={handleInputChange} />

            <EducationSection
              subjects={formData.subjects}
              handleSubjectChange={handleSubjectChange}
              addEducationRow={addEducationRow}
              removeEducationRow={removeEducationRow}
            />

            <ExperienceSection formData={formData} handleInputChange={handleInputChange} />

            <OtherInfoSection formData={formData} handleInputChange={handleInputChange} setFormData={setFormData} />

            {/* Footer Actions */}
            <div className="pt-10 border-t border-zinc-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-md">
                <p className="text-xs text-zinc-500 leading-relaxed">
                  By submitting this form, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and{' '}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>. We&apos;ll handle your data with the utmost care.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex items-center gap-2 text-emerald-600 font-bold text-sm"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      Application Submitted!
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.button
                  whileHover={{ scale: 1.02, translateY: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-10 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-lg"
                >
                  Submit Application
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>

        {/* Page Footer */}
        <footer className="mt-16 text-center text-zinc-500 text-sm">
          <p>&copy; 2024 TalentHub Recruitment. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
