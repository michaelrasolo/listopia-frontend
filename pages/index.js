import Home from "../components/Home";
import ItemCard from "../components/ItemCard";
import Kitty from "../components/Kitty";
import styles from "../styles/Index.module.css";
import CategoryButtons from "../components/CategoryButtons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItem } from "../reducers/item";
import { useRouter } from "next/router";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";

function Index() {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.item.value);
  const [category, setCategory] = useState("");
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);
  // FETCH ITEMS BY CATEGORY
  const fetchItems = () => {
    // Your fetch code to get items based on the selected category
    fetch(`https://listopia-backend.vercel.app/items/${category}`)
      .then((response) => response.json())
      .then((item) => {
        console.log("fetched data", item);
        setItemList(item.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchItems(); // Initial fetch when the component mounts

    const handleRouteChange = (url) => {
      // If navigation to the Index page
      if (url === router.asPath) {
        // Perform the re-fetch of items
        fetchItems();
      }
    };

    //
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [category]);

  // Select a category
  const handleCategory = (value) => {
    if (value === "Liste complète") {
      setCategory("");
    } else {
      setCategory(value);
    }
  };

  // Select article and set the reducer
  const handleCardPress = (item) => {
    dispatch(selectItem(item));
    console.log(("item in reducer:", selectedItem));
  };

  let itemDisplay = null;
  if (itemList.length > 0) {
    itemDisplay = itemList.map((item, i) => (
      <Link href="/article">
        <ItemCard
          key={i}
          price={item.price}
          itemName={item.itemName}
          booked={item.booked}
          image={item.image}
          onClick={() => handleCardPress(item)}
          dealer={item.dealer}
        />
      </Link>
    ));
  }

  return (
    <div className={styles.indexContainer}>
      <Home
        p1="Bonjour à tous !
        Bubulle se prépare à rencontrer ses parents, leur famille et leurs amis à partir du 26 septembre 2023.✨ "
        p2="Si vous souhaitez nous faire plaisir et nous aider à l'accueillir au mieux, vous trouverez une liste d'idées de cadeaux pour bébé, ainsi qu'une cagnotte."
        p3="Nous vous remercions pour vos belles attentions. 
        A très vite,"
        p4="Marie, Michaël et Bubulle."
      />
      <Kitty />
      <CategoryButtons
        onPress={handleCategory}
        categories={[
          "Liste complète",
          "Les indispensables",
          "Bain & Santé",
          "Chambre",
          "Repas",
          "Vêtements",
          "Jeux",
          "Sorties",
          "Mom & Dad"
        ]}
      />
      {loading ? (
        <div className={styles.indexContainer}>
          <CircularProgress style={{ color: "#335c67", margin: "3vh" }} />
          <p>Attends, ça arrive lourd !</p>
        </div>
      ) : (
        <main className={styles.itemsContainer}>{itemDisplay}</main>
      )}{" "}
    </div>
  );
}

export default Index;
