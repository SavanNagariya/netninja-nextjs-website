import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
 
const Notfound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        },3000)
    }, )
    return ( 
        <div className="home">
            <h1>Oooop...</h1>
            <p>Page is not Found</p>
            <p>Go back to <Link href="/"><a className="navbar">Home</a></Link>
            </p>
        </div>
     );
}
 
export default Notfound;