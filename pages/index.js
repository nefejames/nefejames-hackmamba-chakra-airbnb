import Head from "next/head";
import { SimpleGrid } from "@chakra-ui/react";
import Card from "@components/Card";
import data from "data/index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chakra UI Airbnb Card</title>
      </Head>

      <SimpleGrid minChildWidth="300px" spacing="2em" minH="full">
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
