import Link from "next/link"
export default function (){
  return( <div>
    <ul className="flex gap-10 bg-blue-900">
      <li><Link href={"/"}>Home</Link></li>
      <li><Link href={"/about"}>About</Link></li>
      <li><Link href={"/contact-us"}>Contact</Link></li>
    </ul>
    <img src="https://media.licdn.com/dms/image/D4D12AQFJWfUQaQ1qPg/article-cover_image-shrink_600_2000/0/1675674296261?e=2147483647&v=beta&t=zcfSqc5__VRvgFu6e6Ll8vL4xNP_PYnbQYG4YpL9ysE"alt="sorry"/>
  /</div>)
  
}