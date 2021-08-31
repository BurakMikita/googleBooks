
import React from 'react';
import {Field, Form, Formik} from 'formik';
import  s from './FormSearch.module.css'


const usersSearchFormValidate = (values) => {
    const errors = {}
    return errors
}



const FormSearch = (props) => {

const submit = (values, {setSubmitting}) => {
    const filter = {
        name: values.name ,
        number: values.number,
        friend: values.friend
    }
   props.onClickBody(filter)
    setSubmitting(false)
}


return <div className='main-image' style={{display:'flex',justifyContent:"center",flexDirection:'column',alignItems:'center'}}>
    <div className='filter'></div>
    <h1
        className='display-2 text-center text-white mb-3'
        style={{ zIndex: 2 }}>
        Search for books
    </h1>
    <Formik
        initialValues={{name: '', number: 40, friend:'relevance'}}
        validate={usersSearchFormValidate}
        onSubmit={submit}
    >
        {({isSubmitting}) => (
            <div style={{  zIndex: 2   }}>
            <Form>


                <Field className={s.input}  type="text" name="name"/>
                 <button style={{marginLeft:'10px'}} type="submit" disabled={isSubmitting}>
                            Find
                  </button>
                <th/>

               <b style={{color: 'white'}}>
                   Number of books</b> <Field type="number" name="number" className={s.inputTwo}/>

                <b className={s.b} style={{color: 'white'}}> sorting by: </b>
                <Field style={{margin: '5px'}} name="friend" as="select">
                <option value="relevance ">relevance </option>
                <option value="newest">newest</option>

            </Field>





            </Form>
            </div>
        )}
    </Formik>
</div>

};


export default FormSearch