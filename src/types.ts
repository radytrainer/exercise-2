/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Subject {
  id: number | string;
  subject: string;
  schoolName: string;
  year: string;
}

export interface FormData {
  subjects: Subject[];
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  address: string;
  isDisabled: boolean;
  disability: string;
  workingExperienceYear: string;
  workingExperienceField: string;
  interest: string;
  cvUrl: string;
}
