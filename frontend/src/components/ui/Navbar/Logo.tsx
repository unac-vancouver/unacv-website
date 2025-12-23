import logo from "../../../assets/images/logo.svg";

interface LogoProps {
  href?: string;
}

function Logo({ href = "/" }: LogoProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950 rounded"
    >
      <img src={logo} alt="Company logo, go to homepage" className="w-14 h-13" />
      
      {/* Text appears at tablet (md) and up */}
      <span className="hidden md:block leading-tight text-left text-white">
        <span className="block font-semibold text-sm">United Nations</span>
        <span className="block font-normal text-sm">Association of Vancouver</span>
      </span>
    </a>
  );
}

export default Logo;
