
import React, { useState } from 'react';
import { Button, Input, Label, Card } from '../components/ui';
import { Eye, EyeOff, Github, Mail, Chrome } from 'lucide-react';

export const LoginPage = ({ onNavigate }: { onNavigate: (path: string) => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onNavigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-black px-6 transition-colors duration-300">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6 cursor-pointer" onClick={() => onNavigate('/')}>
            <img 
              src="/logo/logo-dark.svg" 
              alt="LexonIT" 
              className="h-12 block dark:hidden"
            />
            <img 
              src="/logo/logo-light.svg" 
              alt="LexonIT" 
              className="h-12 hidden dark:block"
            />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Welcome back</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Enter your email to sign in to your account</p>
        </div>

        <Card className="p-8 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-none">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="name@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  required 
                />
                <button 
                  type="button"
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-500 text-white" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                "Sign In with Email"
              )}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-slate-900 px-2 text-slate-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full" onClick={() => {}}>
              <Chrome className="mr-2 h-4 w-4" /> Google
            </Button>
            <Button variant="outline" className="w-full" onClick={() => {}}>
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
          </div>
        </Card>

        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
          Don't have an account?{" "}
          <button onClick={() => onNavigate('/contact')} className="font-semibold text-violet-600 hover:text-violet-500 dark:text-violet-400">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
