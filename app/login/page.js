'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formError, setFormError] = useState('');
  const { login, googleLogin, loading, error } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    // Basic validation
    if (!formData.email || !formData.password) {
      setFormError('Email and password are required');
      return;
    }

    try {
      await login(formData);
      router.push('/');
    } catch (error) {
      setFormError(error.message || 'Login failed. Please try again.');
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    setFormError('');
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      
      // Extract user data from decoded token
      const userData = {
        name: decoded.name,
        email: decoded.email,
        googleId: decoded.sub,
        profileImage: decoded.picture,
      };
      
      // Call the googleLogin function from AuthContext
      await googleLogin(credentialResponse.credential, userData);
      router.push('/');
    } catch (error) {
      setFormError(error.message || 'Google login failed. Please try again.');
    }
  };

  const handleGoogleError = () => {
    setFormError('Google login failed. Please try again.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-amber-900">Login / लॉगिन</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          {(formError || error) && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{formError || error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email / ईमेल</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password / पासवर्ड</Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-amber-900 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-amber-900 hover:bg-amber-800"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login / लॉगिन करें'}
            </Button>
            
            <div className="relative my-4">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-2 text-sm text-gray-500">OR</span>
              </div>
            </div>
            
            <div className="flex justify-center my-4">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                text="signin_with"
                shape="rectangular"
                locale="en"
                theme="outline"
                size="large"
              />
              <p className="ml-2 text-sm text-gray-600">Google से लॉगिन करें</p>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/register" className="text-amber-900 hover:underline">
              Register / रजिस्टर करें
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}