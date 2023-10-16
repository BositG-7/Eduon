import { FunctionComponent } from "react";
import { useAuth } from "modules/auth/context";

interface TeacherResetPasswordProps {
    
}
 
const TeacherResetPassword: FunctionComponent<TeacherResetPasswordProps> = () => {
    const { user }=useAuth()
    
    return (  
             <h1>Reset Password</h1>
            );
}
 
export default TeacherResetPassword;