import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-zinc-900 text-white">
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/youthware-logo.png"
                alt="Youth Ware Logo"
                width={100}
                height={28}
                className="h-16 w-auto"
              />
            </Link>

            {/* Teks & Tombol Sosial */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="text-lg font-medium"><i>#foryoumyservices</i></p>
            </div>
          </div>

          {/* Garis pemisah */}
          <div className="h-px w-full bg-zinc-700 my-12"></div>

          {/* Navigasi Footer */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 font-bold">Product</h3>
              <ul className="space-y-4 text-zinc-400">
                <li><Link href="#">Overview</Link></li>
                <li><Link href="#">Pricing</Link></li>
                <li><Link href="#">Marketplace</Link></li>
                <li><Link href="#">Features</Link></li>
                <li><Link href="#">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Company</h3>
              <ul className="space-y-4 text-zinc-400">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Team</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Resources</h3>
              <ul className="space-y-4 text-zinc-400">
                <li><Link href="#">Help</Link></li>
                <li><Link href="#">Sales</Link></li>
                <li><Link href="#">Advertise</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Legal</h3>
              <ul className="space-y-4 text-zinc-400">
                <li><Link href="#">Terms of Service</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
              </ul>
              <h3 className="mb-4 mt-8 font-bold">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#"><Image src="/images/icons/twitter.svg" alt="Twitter" width={24} height={24} /></Link>
                <Link href="#"><Image src="/images/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} /></Link>
                <Link href="#"><Image src="/images/icons/facebook.svg" alt="Facebook" width={24} height={24} /></Link>
              </div>
            </div>
          </div>

          {/* Garis pemisah */}
          <div className="h-px w-full bg-zinc-700 my-12"></div>

          {/* Copyright */}
          <p className="text-sm text-center text-zinc-400">© 2024 YouthWare Labs. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
}