import React from 'react'
import { logo } from '../assets'
import { colors } from '../constants/colors'

function Login() {
  return (
    <div className='login'>
        <div className='logo' style={{backgroundColor: colors.primary}}>
            <img src={logo} className='logo-image' />
        </div>
        <div className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
            <div className="d-flex flex-column-fluid flex-center">
                <div className="login-form login-signin">
                    <form className="form">
                        <input type="hidden" name="_token" value="t40CHeW2AdmI2YFiTUfcatNwjXXWHbMOTYCHgUMz" />
                        <div className="pb-13 pt-lg-0 pt-5">
                            <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Welcome to Reperform</h3>
                                <span className="text-muted font-weight-bold font-size-h4">New Here?
                                    <a href="https://test.reperform.com.au/register" className="text-primary font-weight-bolder">
                                        Create an Account
                                    </a>
                                </span>
                        </div>
                        <div className="form-group">
                            <label className="font-size-h6 font-weight-bolder text-dark">Email</label>
                            <input value="" type="text" name="email" autocomplete="off" required="required" autofocus="autofocus" className="form-control form-control-solid h-auto py-6 px-6 rounded-lg" />
                        </div>
                        <div className="form-group">
                            <div className="d-flex justify-content-between mt-n5">
                                <label className="font-size-h6 font-weight-bolder text-dark pt-5">Password</label>
                                <a href="https://test.reperform.com.au/password/reset" className="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5">
                                    Forgot Password ?</a>
                            </div>
                            <input type="password" name="password" autocomplete="off" className="form-control form-control-solid h-auto py-6 px-6 rounded-lg" />
                        </div>
                        <div className="pb-lg-0 pb-5">
                            <button type="submit" className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="d-flex justify-content-lg-center justify-content-center align-items-end py-7 py-lg-0">
                <div className="text-dark-50 font-size-lg font-weight-bolder mr-10">
                    <span className="mr-1">2024 ©</span>
                    <a href="http://keenthemes.com/metronic" target="_blank" className="text-dark-75 text-hover-primary">Reperform</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login



// import React from 'react'
// import { logo } from '../assets'
// import { colors } from '../constants/colors'

// function Login() {
//   return (
//     <div className='login'>
//         <div className='logo' style={{backgroundColor: colors.primary}}>
//             <img src={logo} className='logo-image' />
//         </div>
//         <div className='login-form-wrapper'>
//             <form className='login-form'>
//                 <div>
//                     <h2 className='login-form-header'>Welcome to Reperform</h2>
//                     <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
//                         <p className='login-form-text'>New Here?</p>
//                         <a className='login-form-button'>Create an Account</a>
//                     </div>
//                 </div>
//                 <div className='login-form-input-wrapper'>
//                     <label htmlFor='email' aria-label='Email'>Email</label>
//                     <input type='text' name='email' />
//                 </div>
//                 <div className='login-form-input-wrapper'>
//                     <label htmlFor='password' aria-label='Password'>Password</label>
//                     <input type='password' name='password' />
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login