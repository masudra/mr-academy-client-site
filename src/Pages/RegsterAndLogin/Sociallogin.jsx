import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContex } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Sociallogin = () => {
    const {googleLogIn}=useContext(AuthContex)
    const navagate = useNavigate()

    const handelGoogleLogin =()=>{
        googleLogIn()
        .then(result =>{
            const logUser = result.user 
            console.log(logUser);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Google Login SuccessFull',
                showConfirmButton: false,
                timer: 1500
            })
            navagate('/')
        })
        .catch(error =>{
            alert(error.message)
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center pb-4">
                <button onClick={handelGoogleLogin} className="btn btn-primary "><FaGoogle></FaGoogle>Login With Google</button>

            </div>
        </div>
    );
};

export default Sociallogin;