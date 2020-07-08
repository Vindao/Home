export type formValsT = Step1FormValsI | Step2FormValsI;

interface Step1FormValsI {
  name: string;
  email: string;
  company?: string;
  phone?: string;
}

interface Step2FormValsI {
  message: string;
}
