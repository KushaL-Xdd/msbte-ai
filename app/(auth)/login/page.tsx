import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative w-full max-w-md">

        <div className="mb-10 text-center">

          <h1 className="text-5xl font-black text-white">
            MSBTE AI
          </h1>

          <p className="mt-3 text-zinc-400">
            AI Powered Diploma Learning Platform
          </p>

        </div>

        <LoginForm />

      </div>

    </main>
  );
}