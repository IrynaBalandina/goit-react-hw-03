import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const INITIAL_VALUES = {
  id:"",
  name:"",
  number:"",
 
};

const phoneNumberRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
const AddContactSchema = Yup.object ({
 name: Yup.string().required("Name is required").min(3, "Name must be at least 3 characters"), 
number: Yup.string().required("Number is required").matches(phoneNumberRegex, "Invalid phone number"), 

 });


const ContactForm = ({onAddContact}) => {



  const handleSubmit = (values, actions) => {
    onAddContact({
      id: nanoid(),
      ...values,
    });
    actions.resetForm();
  };

  const nameId = useId();
  const phoneId = useId();

  return (
    <Formik
    initialValues={INITIAL_VALUES}
    validationSchema={AddContactSchema}
     onSubmit={handleSubmit}>
			<Form>

<label  htmlFor={nameId}>Name</label>
<Field 
type="text" 
name="name" 
placeholder="Jane Dow" 
id={nameId}
/>
<ErrorMessage name="name" component="span" />

<label htmlFor={phoneId}>Number</label>
<Field 
type="text" 
name="number" 
placeholder="+38xxxxxxxxxx" 
id = {phoneId}/>
<ErrorMessage name="number" component="span" />


<button type="submit">Add Contact</button>
			</Form>
    </Formik>
  );
};

export default ContactForm;