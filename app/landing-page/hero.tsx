import { Button } from "@/components/ui/button";
import {
  SignUpButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'
import Link from "next/link";
import { LogIn, Github } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="grow">
      <div className="container mx-auto px-4 mb-24 mt-4 flex flex-col md:flex-row justify-center">
        <div className="flex flex-col max-w-sm justify-center">
          <div className="mb-8">
            <h1 className="mb-5 text-5xl font-extrabold leading-tight text-[var(--foreground)]">
              Collect feedback seamlessly
            </h1>
            <p className="text-[var(--muted-foreground)] text-lg">
              Easily integrate Reactform and start collecting feedback today.
            </p>
          </div>
          <div>
            <SignedOut>
              <SignUpButton>
                <div className="flex gap-3">
                  <Button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--primary-foreground)]">
                    <LogIn className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                  <Button variant="secondary" asChild className="bg-[var(--accent)] hover:bg-[var(--accent)] text-[var(--accent-foreground)]">
                    <Link href="https://github.com">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                </div>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Button asChild className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--primary-foreground)]">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </SignedIn>
          </div>
        </div>
        <div className="flex-1 max-w-lg">
          <Image src={'/demo.gif'} alt="demo" layout={'responsive'} width={155} height={155} unoptimized={true} />
        </div>
      </div>
    </section>
  )
}

export default Hero;