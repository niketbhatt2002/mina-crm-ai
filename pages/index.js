import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Image src="/logo.svg" width={96} height={96} alt="Mina CRM AI Logo" className="mb-6" priority />
      <h1 className="text-4xl font-bold text-primary mb-2">Mina CRM AI</h1>
      <p className="text-lg text-accent mb-4">Multi-tenant AI-powered CRM</p>
      <p className="text-gray-700 max-w-md text-center">
        Welcome to your next-gen CRM platform. Built with Next.js, Prisma, and Tailwind CSS.
      </p>
    </main>
  );
}