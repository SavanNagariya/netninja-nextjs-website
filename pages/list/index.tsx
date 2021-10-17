import Head from "next/head";
import { SimpleGrid, Box, Center } from "@chakra-ui/react";
import Link from "next/dist/client/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { lists: data },
  };
};

type Item = {
  id;
  name: string;
};

const List = ({ lists }: { lists: Item[] }) => {
  return (
    <>
      <Head>
        <title>Lists | list</title>
      </Head>
      <div className="list">
        <h1>List</h1>
        {lists.map((list) => (
          <Link href={"/list/" + list.id} key={list.id}>
            <Center>
              <Box p={10} m={3} w={200} backgroundColor="cadetblue">
                {list.name}
              </Box>
            </Center>
          </Link>
        ))}
      </div>
    </>
  );
};
export default List;
