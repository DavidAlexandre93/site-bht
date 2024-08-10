import { track } from '@vercel/analytics';

function validateFields(field: string, value: string) {
  track('Newsletter');

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