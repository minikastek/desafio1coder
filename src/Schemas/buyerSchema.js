import * as Yup from 'yup';

export const buyerSchema = Yup.object().shape({

  name: Yup.string().required('Nombres es un campo requerido'),
  lastName: Yup.string().required('Apellidos es un campo requerido'),
  dni: Yup.number().typeError("Debe ser un numero").required('DNI es un campo requerido'),
  province: Yup.string().required('Provincia es un campo requerido'),
  city: Yup.string().required('Localidad es un campo requerido'),
  postalCode: Yup.number().typeError("Debe ser un numero").required('Codigo Postal es requerido'),
  adress: Yup.string().required('Direccion es un campo requerido'),
  phone: Yup.number().typeError("Debe ser un numero").required('Teléfono es requerido'),
});