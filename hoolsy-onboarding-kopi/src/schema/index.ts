// Primitives — delte API-responser for suksess/feil
export { SuccessResponse, ErrorResponse, type ErrorReply } from './primitives';

// Auth — kontrakter for login-forespørsel/respons
export {
  LoginRequest,
  type LoginBody,
  LoginResponse,
  LoginUserPreview,
  type LoginReply,
} from './auth';

// Vendor onboarding — illustrativ placeholder + kladd-former 
export {
  VendorSchemaPlaceholder,
  type VendorRecordPlaceholder,
  BusinessModel,
  VendorCompanyDraft,
  type BusinessModelValue,
  type VendorCompanyDraftBody,
} from './vendor';
