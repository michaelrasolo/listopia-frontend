import ItemCard from "../components/ItemCard";
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
        const sortedItems = item.items.slice().sort((a, b) => {
          if (a.booked && !b.booked) {
            return 1; // a should come after b
          }
          if (!a.booked && b.booked) {
            return -1; // a should come before b
          }
          return 0; // no change in order
        });
        setItemList(sortedItems);
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
      // If navigation to the registry page
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
      <h2 className={styles.registryTitle}>La liste de naissance</h2>
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
          "Mom & Dad",
        ]}
      />
      {loading ? (
        <div className={styles.indexContainer}>
          <CircularProgress style={{ color: "#335c67", margin: "3vh" }} />
          <p>Attends, ça arrive lourd !</p>
        </div>
      ) : (
        // <></>
        <main className={styles.itemsContainer}>{itemDisplay}</main>
      )}{" "}
    </div>
  );
}

export default Index;
