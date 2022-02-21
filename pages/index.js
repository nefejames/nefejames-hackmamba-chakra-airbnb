import Head from "next/head";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "@components/Card";
import data from "data/index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chakra UI Airbnb Card</title>
      </Head>

      <Heading as="h1" mb="10">
        Chakra UI Airbnb
      </Heading>

      <SimpleGrid minChildWidth="300px" spacing="10" minH="full">
        {data.map((house, i) => (
          <Card
            key={i}
            name={house.name}
            img={house.img}
            distance={house.distance}
            date={house.date}
            price={house.price}
          />
        ))}
      </SimpleGrid>
    </div>
  );
}
