import logo from "../../../assets/images/logo.svg";

interface LogoProps {
  href?: string;
}

function Logo({ href = "/" }: LogoProps) {
  return (
    <a
      href={href}
      className="flex items-center justify-center w-14 h-13 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950 rounded"
      aria-label="Go to homepage"
    >
      <img src={logo} alt="Company logo" className="w-14 h-13" />
    </a>
  );
}

export default Logo;
