import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <SignIn routing="path" path="/sign-in" redirectUrl="/dashboard/customer" />
    </div>
  );
}