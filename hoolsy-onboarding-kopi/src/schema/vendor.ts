import { z } from 'zod';


export const VendorSchemaPlaceholder = z.object({
  id: z.string().uuid(),
  tenant_id: z.string().uuid(),
  company_name: z.string().min(1),
  org_number: z.string(),
  country: z.string(),
  contact_email: z.string().email(),
  contact_name: z.string(),
  website: z.string().url().optional(),
  kyb_status: z.enum(['verified', 'manual', 'pending']),
  kyc_status: z.enum(['verified', 'manual', 'pending']),
  status: z.enum(['pending', 'pending_manual_review', 'active', 'rejected']),
});

export type VendorRecordPlaceholder = z.infer<typeof VendorSchemaPlaceholder>;

/** Business model options brukt i Company Information (onboarding UI) **/
export const BusinessModel = z.enum(['manufacturer', 'distributor', 'retailer', 'brand-owner']);

export type BusinessModelValue = z.infer<typeof BusinessModel>;

/**
 * Partial draft for company step – snake_case der det matcher oppgavens vendor-eksempel.
 * Utvides når felles skjema er endelig.
 */
export const VendorCompanyDraft = z.object({
  country: z.string().min(1).optional(),
  org_number: z.string().min(1).optional(),
  company_name: z.string().min(1).optional(),
  business_model: BusinessModel.optional(),
});

export type VendorCompanyDraftBody = z.infer<typeof VendorCompanyDraft>;
