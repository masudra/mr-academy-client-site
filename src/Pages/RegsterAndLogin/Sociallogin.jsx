import { FaGoogle } from 'react-icons/fa';

const Sociallogin = () => {
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center pb-4">
                <button className="btn btn-primary "><FaGoogle></FaGoogle>Login With Google</button>

            </div>
        </div>
    );
};

export default Sociallogin;