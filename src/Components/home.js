import React, {Component} from 'react'
import '../CSS/home.css'


class Login extends Component {
 constructor(props) {
   super(props);


 }

   move()
   {

       window.location='/#/register'
   }






 render() {
   return (
       <div className='form-inline'>
         <img
             id ='logo'
             src={require('../Images/Citibank-logo.png')} />
       <h2> Welcome back to our platform. Please choose a course</h2>
       <div style={{display: 'flex', justifyContent: 'center'}}>
         <img
             id ='img'
             src={require('../Images/react_360.png')}
             onClick={() => this.move()}

         />
         <img
             id ='img'
             src={require('../Images/node_360.png')} />
         <img
             id ='img'
             src={require('../Images/django_360.png')} />
         <img
             id ='img'
             src={require('../Images/ruby1_360.png')} />

      </div>
       </div>






   );
 }
}
export default Login;

