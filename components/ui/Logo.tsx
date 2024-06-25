import Link from "next/link"

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
      
        <img src="./logo.png" alt="" width={60} height={60} className=" rounded-full transition hover:animate-spin" />
        </Link>
    </div>
  )
}

export default Logo