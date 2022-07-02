import { Button } from '@mui/material';
import { useFormik } from 'formik';
import React, { useContext } from 'react';
import * as Yup from 'yup';
import AddIcon from '@mui/icons-material/Add';
import { TaskContext } from '../../hooks/taskContext';
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
    const {  createTask } = useContext(TaskContext)

   const formik = useFormik({
    initialValues,
    validationSchema: createFormSchema,
    onSubmit: values => {
        createTask(values)
    }
   })
 
    return (
    <div className="form_create">
        <h4>Crear tarea</h4>
        <form onSubmit={formik.handleSubmit}
        >
        <label htmlFor="name">Nombre tarea</label>
        <input type="text" id="name" name="name"  placeholder="nombre"  onChange={formik.handleChange} value={formik.values.name} />
        {formik.errors.name ? error(formik.errors.name) : null}
        <label htmlFor="comment">Comentario</label>
        <input type="text" id="comment" name="comment" placeholder='comentario'  onChange={formik.handleChange} value={formik.values.comment}/>
        {formik.errors.comment ? error(formik.errors.comment) : null}
        <Button variant="contained" type="submit"><AddIcon/> crear tarea</Button>
        </form>
    </div>
  )
}
