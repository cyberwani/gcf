import yup from "yup";

const fieldSchema = yup.object().shape({
  name: yup.string().required(),
  label: yup.string().required(),
  getBlockSettings: yup.mixed().required()
});

export function register(field) {
  if (!fieldSchema.isValidSync(field)) {
    fieldSchema.validate(field).catch(err => {
      console.error("Invalid field:", err.name, err.errors, field);
    });
    return;
  }

  return {
    type: "FIELDS_ADD",
    fields: [field]
  };
}