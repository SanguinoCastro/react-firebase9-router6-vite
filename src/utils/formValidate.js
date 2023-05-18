export const formValidate = () => { 
    return {
        required: {
            value: true,
            message: "Campo obligatorio",
          },
          patternEmail: {
            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
            message: "Formato de email incorrecto",
          },
          patternURL: {
            value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
            message: "Formato de url incorrecto",
          },
          minLength: {
            value: 6,
            message: "Mínimo 6 carácteres",
          },
          validateTrim: {
              trim: (v) => {
                  if (!v.trim()) {
                    return "La contraseña no acepta espacios";
                  }
                  return true;
                },
        },
        validateEquals(value) {
           return {
            equals: (v) =>
              v === value || "No coinciden las contraseñas",
           }
          },
              
    };
}; 