'use client';
import { Label } from "@/components/ui/label";
import { signInDefaultValues } from "@/lib/constants";

 
export default function CredentialsSignInForm() {

    return (
        <form>
            <div className="space-y-6 flex flex-col">
                    <Label htmlFor='email'>Email</Label>
                    <input 
                        id='email' 
                        name='email'
                        type='email'
                        required
                        autoComplete='email'
                        defaultValue={signInDefaultValues.email}
                    />
                    <Label htmlFor="password">Password</Label>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        required
                        autoComplete="password"
                        defaultValue={signInDefaultValues.password}
                    />
            </div>
        </form>
    );
};
