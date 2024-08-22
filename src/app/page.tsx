import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div>
        <SignOutButton />
      </div>
    </div>
  );
}
