import React from 'react';
import { useForm } from 'react-hook-form';
//import { Input, Stack } from '@chakra-ui/react'


export const EditUserForm = (props) => {

  const {register, formState: { errors }, handleSubmit, setValue} = useForm(
      {
          defaultValues: props.currentUser
      }
  );

  setValue("name", props.currentUser.name)
  setValue("username", props.currentUser.username)
  
 //data viene del imput y el props.currentUser.id me lo da el button edit de la row que activo
  const onSubmit = (data, e) => {
      console.log( data);
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id,data)
      // limpiar campos
      e.target.reset();
  }
 

  return (
   

        <form onSubmit={handleSubmit(onSubmit)} className = "m-3">
    
            <input
                variant='filled'
                {...register('name', { required: true } )} 
            
                className="form-control my-2"
            />
            
        {errors.name && <span>This field is required</span>}

        
            <input
                variant='filled'
                {...register('username', { required: true })} 

                className="form-control my-2"
            />
                    
        {errors.apellido && <span>This field is required</span>}
        <div className = "m-5">
        <button 
            type="submit" 
            className="btn btn-primary "
            >
        Edit User
        </button>
        </div>
    </form>


    
  );
}
