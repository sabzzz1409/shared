import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

export default () => {

    let count = 0;
    const {
        register,
        handleSubmit,
        control,
        formState
    }: any = useForm({
        defaultValues: async () => {

            return {
                userName: "Sabari",
                eMail: "example@gmail.com"
            }
        }
    });
    const { errors } = formState;
    const validateForm = {
        "userName": {
            required: {
                value: true,
                message: "user name is required"
            }
        },
        "eMail": {
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Not A Valid Email"
            }
        },

    }

    count++;

    useEffect(
        () => {
            console.log(control);
            console.log(errors);
        },
        [errors]
    )

    const meSubmit = (data: any) => {
        console.log(data);
        console.log(errors);
    }


    return (
        <div className="border-2 m-2 rounded p-4">
            <h1 className="text-xl font-bold">Live Form using React Hook Form</h1>

            <p className="text-md">* npm install react-hook-form</p>

            <form
                onSubmit={handleSubmit((data: any) => { meSubmit(data) })}
                className="grid"
                noValidate
            >

                <h2 className='text-lg font-bold italic text-center'>Form({count})</h2>

                <label className='grid border-1 rounded p-4 m-2'>
                    <span className='text-md italic'>
                        UserName :
                    </span>
                    <input {...register("userName", validateForm.userName)}
                        className='w-full rounded p-4'
                        type="text"
                    />
                    <p>{errors["userName"]?.message}</p>
                </label>
                <label className='grid border-1 rounded p-4 m-2'>
                    <span className='text-md italic'>
                        E-Mail :
                    </span>
                    <input {...register("eMail", validateForm.eMail)}
                        className='w-full rounded p-4'
                        type="email"
                    />
                </label>
                <label className='grid border-1 rounded p-4 m-2'>
                    <span className='text-md italic'>
                        Password :
                    </span>
                    <input {...register("passWord")}
                        className='w-full rounded p-4'
                        type="password"
                    />
                </label>
                <button className="bg-blue-500 hover:bg-blue-700
                 text-white p-4 rounded w-[10%]
                  mx-auto cursor-pointer transition active:bg-blue-900" type='submit'>Submit</button>
            </form>

            <DevTool control={control} />

        </div>
    )

}