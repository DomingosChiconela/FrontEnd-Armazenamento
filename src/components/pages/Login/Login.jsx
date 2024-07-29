import { useForm } from "react-hook-form"
import { Header } from "../../Header/Header"
import { Link } from "react-router-dom"

const StylesError = "text-red-600"
const StylesDivForm = "flex flex-col  gap-1"
const StylesInput= "border border-gray-500 rounded-lg  p-1 focus:outline-blue-400"
const StylesLabel= "after:content-['*'] after:ml-0.5 after:text-red-500"

export const Login =  ()=>{
    const  {register,handleSubmit,formState:{errors}} = useForm()



    function onSubmit (data){
      
      
        
    }


    return (
        <>  
        <Header/>
    
    
        <div  className=" flex justify-center items-center  mt-28 ">

            <form className="flex flex-col gap-3 bg-white rounded-lg shadow-md lg:min-h-[16rem] lg:w-[30rem] p-10 pt-11 "   action="" onSubmit={handleSubmit(onSubmit)}>
                        
                    <div className={`${StylesDivForm}`}>
                        <label className={`${StylesLabel}`} htmlFor="">Email</label>
                            <input type="email" name="email" id="email" className={`${StylesInput}`} {...register('email',{
                                    required:"O email é obrigatório",
                                    pattern:{

                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "O e-mail deve estar no formato correto"
                                    },

                                    validate: value =>value.trim() !== '' ||"O email não pode ser apenas espaços em branco"
                                })} />
                        {errors.email && <p className={`${StylesError}`} >{errors.email.message}</p>}
                    </div>
                            

                    <div className={`${StylesDivForm}`}>
                        <label className={`${StylesLabel}`} htmlFor="">Senha</label>
                            <input type="password" name="password" id="password" className={`${StylesInput}`} {...register('password',{
                                    required:"A senha é obrigatória",
                                    pattern:{

                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "O e-mail deve estar no formato correto"
                                    },

                                    validate: value =>value.trim() !== '' ||"A senha não pode ser apenas espaços em branco"
                                })} />
                        {errors.password && <p className={`${StylesError}`} >{errors.password.message}</p>}
                    </div>
                    <div>
                        <span>Não possui uma conta?</span>
                        <span>
                                <Link  className="text-blue-500 text-center" to={"/signup"}>Registrar</Link>
                        </span>
                    </div>
                   
                    

                    <button type="submit" className="py-2 px-4 bg-blue-600  hover:bg-blue-600/85 active:bg-blue-600/50 rounded-xl font-medium text-white mt-2">Entrar</button>

     

                    


            </form>

        </div>
    
    </>
    )
}