import Link from 'next/link';
import { Flex } from "@chakra-ui/react";


const Navbar = ({}) => {
    return (
        
    <Flex className="navbar" justify="space-between"  py={2} px={100}>     
        <h2>Lists</h2>
        <Flex alignItems="center" >
            <div >
                <Link href="/">
                <a>Home</a>
                </Link>
            </div>
            <div >
                <Link href="/about">
                <a >About Us</a>
                </Link>
            </div>
            <div >
                <Link href="/list">
                <a>List</a>
                </Link>
            </div>
        </Flex>
    </Flex>
    )
}
export default Navbar;