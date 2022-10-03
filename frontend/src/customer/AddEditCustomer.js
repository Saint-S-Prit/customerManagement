import React , { useEffect, useState }from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import CustomerService from './CustomerService';
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css'; 




const schema = yup.object({
    name: yup.string().required('Le nom ne droit pas être null')
    .min(3, "Le nom droit contenir minimum 3 caracteres")
    .max(30, "Le nom droit contenir maximum 30 caracteres"),

    email: yup.string().required("L'email ne droit pas être null")
    .email("l'email n'est pas valide"),

    phone: yup.string().required("")
    .matches("^(33|7[05-8])[0-9]{7}$", "le numéro n'est pas valide"),

    status: yup.string().required("Le statut ne droit pzs être null")
})

const AddEditCustomer = () => {

    const nav = useNavigate();

    const param = useParams();
    const id = param.id;

    const modeAdd= !id;


    const { register, handleSubmit, reset, formState: {errors} , setValue} = useForm({
        mode: 'onTouched',
        resolver: yupResolver(schema)
    });

    const [customer,  setCustomer] = useState([]);

    useEffect(()=>{
        if (!modeAdd) {

            CustomerService.getCustomerById(id).then(
                (customer)=> {
                    console.log(customer.data.customer);
                   const fields = ['name', 'email', 'phone', 'status'];
                   fields.forEach(
                    field => {
                        setValue(field, customer.data.customer[field])
                    }
                   );
                   setCustomer(customer);
                }

            )

            
        };
    },[]);


    const onSubmit = (data) => {
        return modeAdd ? addCustomer(data) : editCustomer(id, data);
    }


    const addCustomer = (data) => {
        CustomerService.postCustomer(data).then(
            (res) => {
                nav('/');
            }
        )
    };

    const editCustomer = (id, data) => {
        CustomerService.updateCustomerById(id, data).then(
            (res) => {
                nav('/');
            }
        )
    }

    return (
            <form  onSubmit={handleSubmit(onSubmit)} onReset={reset}>
                <ToastContainer /> 
                <div className="row justify-content-center mt-5">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card shadow">
                    <div className="card-title text-center border-bottom">

                        {
                            modeAdd
                            ? 
                                <h2 className="p-3">Ajouter</h2>
                            :
                            <h2 className="p-3">Modifier</h2>
                        }
                    </div>
                    <div className="card-body">
                        <div className="mb-4">
                            <label htmlFor="name" className="form-label">name</label>
                            <input type="text" {...register('name')} className="form-control" id="name" name="name" />
                            <span>{errors?.name?.message}</span>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">email</label>
                            <input type="text" {...register('email')} className="form-control" id="email" name="email" />
                            <span>{errors?.email?.message}</span>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="form-label">phone</label>
                            <input type="text" {...register('phone')} className="form-control" id="phone" name="phone" />
                            <span>{errors?.phone?.message}</span>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="status" className="form-label">status</label>
                            <input type="text" {...register('status')} className="form-control" id="status"  name="status" />
                            <span>{errors?.status?.message}</span>
                        </div>
                        
                        
                        <div className="d-grid">
                            {
                                modeAdd
                                ? 
                                <button className="btn text-light main-bg btn-success">ajouter</button>
                                :
                                <button  className="btn text-light main-bg btn-info">Mettre à jour</button>
                            }
                            
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </form>
    );
};

export default AddEditCustomer;