import Logo from "../Logo";

export default function HeaderLayout(){

    return(
        <header className="header">
        <p className="slogen">
          Building tomorrow's digital world, one line at a time
        </p>
        <Logo src="../src/assets/image/Logo.jpeg" />
      </header>

    )
}