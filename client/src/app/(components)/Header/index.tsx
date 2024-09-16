import { ClassNames } from "@emotion/react";

type HeaderProps = {
    name: string;
  };
  
  const Header = ({ name }: HeaderProps) => {
    return <h1 ClassNames="text-2xl font-semibold text-gray-700">{name}</h1>;
  };
  
  export default Header;