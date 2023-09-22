import Image from "next/image";
import SignInButton from "./SignInButton";
import ExploreButton from "./ExploreButton";

export default function Hero() {
  return (
    <div>
      <div className="flex xl:flex-row relative z-10 max-w-[1600px] mx-auto pt-3 px-16 pr-6">
        <Image src="/logo.svg" alt="logo" width={180} height={180} />
          <SignInButton />
      </div>
      <div className="hero">
        <div className="flex-1 pt-20 padding-x">
          <h1 className="hero__title">
            Streamlined Car Rentals: Discover, Reserve, and Go!
          </h1>
          <p className="hero__subtitle">
            Simplify Your Car Rental: Effortless Booking Made Easy!
          </p>
          <ExploreButton title="Explore Cars" />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
          </div>
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
}
