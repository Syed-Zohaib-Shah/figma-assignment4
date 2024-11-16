import Link from "next/link";

interface HeaderProps {
  font: {
    className: string;
  }
}


// HEADER //
export function Header({font}:HeaderProps) {
    return (
     <>
     <div className= {`${font.className} links-parent`}>
      <ul className="links">
        <li className="link"><Link href="">Works</Link></li>
        <li className="link"><Link href="">Blog</Link></li>
        <li className="link"><Link href="">Contact</Link></li>
      </ul>
     </div>
     
     </>
    );
  }