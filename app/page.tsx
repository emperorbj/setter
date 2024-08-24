import PatientForm from "@/components/PatientForm";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex h-screen 
    max-h-screen">
      {/*OTP Verification OR PassKey-Modal  */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
          height={1000}
          width={1000}
          className="mb-12 h-10 w-fit"
          src="/assets/icons/logo-full.svg" alt="logo"
          />

          <PatientForm/>

          <div className="text-14-regular mt-20 flex justify-between
          ">
            <p className="flex justify-items-end
            text-dark-600 xl:text-left">
              copyright 2024
            </p>
            <Link href="/admin=true" className="text-green-500
            ">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
      src="/assets/images/onboarding-img.png" 
      alt=""
      height={1000}
      width={1000}
      className="side-img max-w-[50%]"/>
    </div>
  );
}
