'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Placeholder for authentication logic
      // This will be replaced with your actual auth implementation
      console.log('Login attempt with:', { email, password });
      
      // Simulate auth delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // On successful login, redirect to trading dashboard
      router.push('/trade');
    } catch (err) {
      setError('Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold mb-6 block">
            <span className="text-primary">Elite</span>BlockMarket
          </Link>
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to access your trading account</p>
        </div>

        {/* Login Form */}
        <div className="bg-card/50 border border-border/50 rounded-lg p-8 backdrop-blur-sm">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/50 text-destructive text-sm">
                {error}
              </div>
            )}

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-border/50" />
                <span className="text-muted-foreground">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-primary hover:text-primary/80 transition-colors">
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/30" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card/50 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          {/* Social Login Placeholder */}
          <div className="space-y-3">
            <button className="w-full border border-border/50 py-2 rounded-lg text-foreground hover:bg-card/50 transition-colors font-medium text-sm">
              Google
            </button>
            <button className="w-full border border-border/50 py-2 rounded-lg text-foreground hover:bg-card/50 transition-colors font-medium text-sm">
              Apple
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <p className="text-center mt-6 text-muted-foreground text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-primary hover:text-primary/80 transition-colors font-semibold">
            Sign up now
          </Link>
        </p>

        {/* Back to Home */}
        <Link
          href="/"
          className="text-center block mt-4 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
