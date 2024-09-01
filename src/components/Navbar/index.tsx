import { ModeToggle } from "../ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
      <ModeToggle />
    </nav>
  );
}
