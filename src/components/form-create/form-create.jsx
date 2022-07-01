import { Formik, useFormik, useFormikContext } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const createFormSchema = Yup.object().shape(
    {
     name: Yup.string().required(),
     comment: Yup.string().max(200).required()
    }
)
const initialValues = {
    name: '',
    comment: ''
}
const error = (error) => {
    return <div>error</div>
}
export default function FormCreate() {
   const formik = useFormik({
    initialValues,
    validationSchema: createFormSchema,
    onSubmit: values => {
        console.log('VALUES FORMIK',values)     
    }
   })
 
    return (
    <div>
        <h4>Crear tarea</h4>
        <form onSubmit={formik.handleSubmit}
        >
        <label htmlFor="name">Nombre tarea</label>
        <input type="text" id="name" name="name"  placeholder="nombre"  onChange={formik.handleChange} value={formik.values.name} />
        {formik.errors.name ? error(formik.errors.name) : null}
        <label htmlFor="comment">Comentario</label>
        <input type="text" id="comment" name="comment" placeholder='comment'  onChange={formik.handleChange} value={formik.values.comment}/>
        {formik.errors.comment ? error(formik.errors.comment) : null}
        <button type="submit">crear tarea</button>
        </form>
    </div>
  )
}
