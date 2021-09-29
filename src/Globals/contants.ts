import mattress_saatva from "../assets/images/mattress_saatva.jpeg";
import mattress_loom from "../assets/images/mattress_loom.jpeg";
import mattress_zen from "../assets/images/mattress_zen.jpeg";

interface Mattress {
  image: string;
  name: string;
  price: string;
}
const Matresses: Mattress[] = [
  {
    image: mattress_saatva,
    name: "Saatva Classic",
    price: "$2,299",
  },
  {
    image: mattress_loom,
    name: "Loom & Leaf",
    price: "$1,299",
  },
  {
    image: mattress_zen,
    name: "Zenhaven",
    price: "$3,299",
  },
];

export { Matresses };
export type { Mattress };
