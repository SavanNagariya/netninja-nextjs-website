import Head from "next/head";
import { SimpleGrid, Box, Center } from "@chakra-ui/react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { lists: data },
  };
};

const List = ({ lists }: any) => {
  console.log(lists);
  return (
    <>
      <Head>
        <title>Lists | list</title>
      </Head>
      <div className="list">
        <h1>List</h1>
        {lists.map((list) => (
          <SimpleGrid column={4} key={list.id}>
            <Center>
              <Box p={10} m={3} w={200} backgroundColor="cadetblue">
                {list.name}
              </Box>
            </Center>
          </SimpleGrid>
        ))}
      </div>
    </>
  );
};
export default List;
