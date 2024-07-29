import { useForm } from "react-hook-form"
import { Header } from "../../Header/Header"
import { Footer} from "../../Footer/Footer"
import { Link } from "react-router-dom"

const StylesError = "text-red-600"
const StylesDivForm = "flex flex-col  gap-1"
const StylesInput= "border border-gray-500 rounded-lg  p-1 focus:outline-blue-400"
const StylesLabel= "after:content-['*'] after:ml-0.5 after:text-red-500"



export const Signup = ()=>{
    const  {register,handleSubmit,formState:{errors}} = useForm()



    function onSubmit (data){
      
      
        
    }

    return (
    
    
    <>  
       <Header/>
    
    
        <div  className=" flex justify-center items-center  my-9 ">

            <form className="flex flex-col gap-3 bg-white rounded-lg shadow-md  lg:min-h-fit lg:w-[30rem] p-10 pt-11 " action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className={`${StylesDivForm}`}>
                            <label className={`${StylesLabel}`} htmlFor="Name" >Nome</label>
                            <input type="text" name="Name" id="Name"  className={`${StylesInput}`} {...register('Name',{required:"O nome é obrigatório",
                                pattern :{
                                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
                                    message:' O nome não pode conter numeros ou caracteres especiais'
                                },
                                validate: value =>value.trim() !== '' ||"O nome não pode ser apenas espaços em branco"

                                })} />
                                {errors.Name && <p className={`${StylesError}`} >{errors.Name.message}</p>}
                        </div>
                    
                    <div className={`${StylesDivForm}`}>
                        <label className={`${StylesLabel}`} htmlFor="">Email</label>
                            <input type="email" name="email" id="email" className={`${StylesInput}`} {...register('email',{
                                    required:"O email é obrigatório",
                                 

                                    validate: value =>value.trim() !== '' ||"O email não pode ser apenas espaços em branco"
                                })} />
                        {errors.email && <p className={`${StylesError}`} >{errors.email.message}</p>}
                    </div>
                            

                    <div className={`${StylesDivForm}`}>
                        <label className={`${StylesLabel}`} htmlFor="">Senha</label>
                            <input type="password" name="password" id="password" className={`${StylesInput}`} {...register('password',{
                                    required:"O password é obrigatório",
                                 

                                    validate: value =>value.trim() !== '' ||"O password não pode ser apenas espaços em branco"
                                })} />
                        {errors.password && <p className={`${StylesError}`} >{errors.password.message}</p>}
                    </div>

                    <div className={`${StylesDivForm}`}>
                        <label className={`${StylesLabel}`} htmlFor="">Confirmar senha</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" className={`${StylesInput}`} {...register('confirmPassword',{
                                    required:"O confirmPassword é obrigatório",
                                    pattern:{

                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "O e-mail deve estar no formato correto"
                                    },

                                    validate: value =>value.trim() !== '' ||"O confirmPassword não pode ser apenas espaços em branco"
                                })} />
                        {errors.confirmPassword && <p className={`${StylesError}`} >{errors.confirmPassword.message}</p>}
                    </div>
            
                    <div>
                        <span>Ja possui uma conta?</span>
                        <span>
                                <Link  className="text-blue-500 text-center" to={"/login"}>Logar</Link>
                        </span>
                    </div>
                   

                    <button type="submit" className="py-2 px-4 bg-blue-600  hover:bg-blue-600/85 active:bg-blue-600/50 rounded-xl font-medium text-white mt-4 ">SingUp</button>

                 
                    


            </form>

        </div>

        
        <Footer/>
    </>

       
    )
}