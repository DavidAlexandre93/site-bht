import { reportValue } from '@vercel/flags';
import { track } from '@vercel/analytics';

function validateFields(field: string, value: string) {

  reportValue('e-mail', false);
  track('E-mail', {}, { flags: ['Inscrever-se e-mail'] });

  if (value === "") {
    return { existError: true, message: "Campo obrigatório" }
  }

  if (field === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return { existError: !emailRegex.test(value), message: "Email inválido" }
  }

  return { existError: false, message: "" }
}


export default validateFields