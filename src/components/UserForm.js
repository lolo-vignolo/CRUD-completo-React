import React from 'react';
import { useForm } from 'react-hook-form';
//import { Input, Stack } from '@chakra-ui/react'


export const UserForm = (props) => {

  const {register, formState: { errors }, handleSubmit} = useForm();

 
  const onSubmit = (data, e) => {
      console.log(data);
        props.addUser(data , e) 
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
        Agregar
        </button>
        </div>
    </form>


    
  );
}


