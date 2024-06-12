function validateFields(field: string, value: string) {
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