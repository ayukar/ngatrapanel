import { signIn } from '@/auth'
import { isRedirectError } from 'next/dist/client/components/redirect'
import React from 'react'

type Props = {}

const SignIn = (props: Props) => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <div className="shadow-md rounded-md bg-white p-4">
            <form action={async ()=>{
                "use server"
                try {                    
                    await signIn("google", {redirectTo : "/panel/new"})
                } catch (error) {
                    if(isRedirectError(error)){
                        throw error
                    }
                }
            }}>
                <button type='submit'>Login With Google</button>
            </form>
        </div>
    </div>
  )
}

export default SignIn