import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const products = [
    {
      id: "1",
      name: "Ray-Ban Aviator Classic",
      description:
        "The iconic Ray-Ban Aviator sunglasses were originally designed for U.S. aviators in 1937. Featuring classic gold frames and crystal green lenses, they are a timeless fashion statement.",
      price: 154.99,
      image_url:
        "https://india.ray-ban.com/media/catalog/product//0/r/0rb3025_001_58_030a_new.png",
      category: "sunglasses",
      stock: 15,
      gender: "unisex",
      isAdded: true,
      frame_style: "aviator",
    },
    {
      id: "2",
      name: "Oakley Holbrook",
      description:
        "A timeless classic that echoes the screen heroes from the 1940s, '50s and '60s, this design epitomizes the spirit of exploration and adventure.",
      price: 189.99,
      image_url:
        "https://image4.cdnsbg.com/1/441/460387_side_1_1682123589780.jpg?width=640&height=320",
      category: "sunglasses",
      stock: 10,
      gender: "unisex",
      isAdded: false,
      frame_style: "square",
    },
    {
      id: "3",
      name: "Tom Ford Blue Light Glasses",
      description:
        "Sophisticated blue light blocking glasses with premium acetate frames. Perfect for long hours in front of digital screens.",
      price: 249.99,
      image_url:
        "https://m.media-amazon.com/images/I/615dQCpcehL._AC_UY1100_.jpg",
      category: "optical",
      stock: 8,
      gender: "unisex",
      isAdded: false,
      frame_style: "rectangle",
    },
    {
      id: "4",
      name: "Gucci GG0061S",
      description:
        "These bold sunglasses from Gucci feature oversized frames and distinctive gold detailing for a luxury look. Designed for fashion-forward individuals.",
      price: 359.99,
      image_url:
        "https://assets2.sunglasshut.com/cdn-record-files-pi/7784a70f-07fe-46e2-85a1-a6ff00221403/d36fb308-c95b-4710-94f6-a74a01183b86/0GC000994__2300L1_030A.png?impolicy=SGH_bgtransparent&width=3072",
      category: "sunglasses",
      stock: 5,
      gender: "unisex",
      isAdded: false,
      frame_style: "oversized",
    },
    {
      id: "6",
      name: "Prada PR 08SS",
      description:
        "Elevate your style with the Prada PR 08SS sunglasses. Featuring a sleek metal frame and dark lenses, these sunglasses are perfect for modern, sophisticated looks.",
      price: 280,
      image_url:
        "https://images.eyeglasses.com/product/xlarge/pr-08ss-black-with-grey-gradient-lenses.jpg",
      category: "sunglasses",
      stock: 7,
      gender: "women",
      isAdded: true,
      frame_style: "metal",
    },
    {
      id: "7",
      name: "Maui Jim Banyans",
      description:
        "These sporty sunglasses from Maui Jim feature polarized lenses and a lightweight frame, ideal for outdoor activities like hiking, fishing, and cycling.",
      price: 229.99,
      image_url:
        "https://images.mauijim.com/sunglasses/412/412-02_front.jpg?imwidth=900",
      category: "sunglasses",
      stock: 14,
      gender: "men",
      isAdded: false,
      frame_style: "sport",
    },
    {
      id: "8",
      name: "Oakley Split Shot",
      description:
        "The Oakley Split Shot sunglasses are designed for adventure seekers. Featuring a detachable leash and premium lenses, they are built for those who love to explore the outdoors.",
      price: 199.99,
      image_url:
        "https://atttpgdeen.cloudimg.io/cdn/n/n/_v1Product_/oakley/oakley_0oo9416_941602_matte_carbon.jpg",
      category: "sunglasses",
      stock: 9,
      gender: "unisex",
      isAdded: true,
      frame_style: "sport",
    },
    {
      id: "10",
      name: "Versace VE4361",
      description:
        "The Versace VE4361 sunglasses blend luxury and fashion with bold design and signature gold Medusa logo detailing, creating a strong and glamorous statement.",
      price: 320,
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCHtx_6nJMBmnAhGleSCZaHj8zpJAL7MBxQ&s",
      category: "sunglasses",
      stock: 4,
      gender: "women",
      isAdded: true,
      frame_style: "oversized",
    },
    {
      id: "11",
      name: "Warby Parker Percey",
      description:
        "These optical glasses feature a timeless design with acetate frames in a variety of colors. Perfect for daily wear, they offer both style and functionality.",
      price: 145,
      image_url:
        "https://i.warbycdn.com/s/c/d31bb40c9e98247914e6bd84123146f111ae3961",
      category: "optical",
      stock: 15,
      gender: "unisex",
      isAdded: true,
      frame_style: "rectangle",
    },
    {
      id: "12",
      name: "Oliver Peoples Gregory Peck",
      description:
        "A sophisticated, high-end optical frame that embodies classic style. Made from high-quality acetate, perfect for those looking for an understated yet elegant look.",
      price: 400,
      image_url:
        "https://assets2.oliverpeoples.com/cdn-record-files-pi/827df1a8-1767-463d-95fb-a35a00dbfbd6/add805ce-5d13-439c-967b-af8d0118f311/0OV5186__1005__P21__shad__qt.png?bgcolor=%23f8f8fb&impolicy=OV_parameters&wid=470&cropwest=33&cropeast=37",
      category: "optical",
      stock: 6,
      gender: "men",
      isAdded: false,
      frame_style: "square",
    },
    {
      id: "13",
      name: "Miu Miu MU 13RS",
      description:
        "A stylish addition to any wardrobe, Miu Miu MU 13RS sunglasses feature a sleek metal frame with large, round lenses, exuding a bold, luxurious vibe.",
      price: 295,
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QmbNmWElv7jGIvrhW7cJ_vJiJV-M68h0gg&s",
      category: "sunglasses",
      stock: 3,
      gender: "women",
      isAdded: false,
      frame_style: "round",
    },
    {
      id: "14",
      name: "Prada PR 01OS",
      description:
        "These stylish sunglasses from Prada feature a bold acetate frame with sleek details and high-quality lenses. Perfect for adding sophistication to any look.",
      price: 250,
      image_url: "https://image4.cdnsbg.com/1/13/543801_1620014200248.jpg",
      category: "sunglasses",
      stock: 10,
      gender: "unisex",
      isAdded: false,
      frame_style: "cat-eye",
    },
    {
      id: "17",
      name: "Carrera 1001/S",
      description:
        "The Carrera 1001/S sunglasses offer a sleek, sporty look with wraparound frames and polarized lenses that provide excellent protection from the sun.",
      price: 249,
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpqMiuSdBa3iQMxELTHBlYMdezAxEWgCTpww&s",
      category: "sunglasses",
      stock: 5,
      gender: "unisex",
      isAdded: false,
      frame_style: "wraparound",
    },
    {
      id: "19",
      name: "Fendi FF 0357/S",
      description:
        "Luxury Fendi FF 0357/S sunglasses feature bold, geometric frames with oversized lenses, giving them a modern, high-fashion edge.",
      price: 380,
      image_url:
        "https://m.media-amazon.com/images/I/61tKp8XUDjL._AC_UY1000_.jpg",
      category: "sunglasses",
      stock: 3,
      gender: "women",
      isAdded: true,
      frame_style: "oversized",
    },
    {
      id: "20",
      name: "Ray-Ban RB2132 New Wayfarer",
      description:
        "The Ray-Ban RB2132 New Wayfarer features a slightly smaller frame than the classic Wayfarer, offering a more contemporary look with the same iconic style.",
      price: 169.99,
      image_url:
        "https://image4.cdnsbg.com/1/14/601796_1681200020822.jpg?width=640&height=320",
      category: "sunglasses",
      stock: 11,
      gender: "unisex",
      isAdded: false,
      frame_style: "wayfarer",
    },
    {
      id: "22",
      name: "Michael Kors MK1035",
      description:
        "Michael Kors MK1035 sunglasses offer a modern, fashionable look with bold, rectangular frames and UV-protective lenses.",
      price: 250,
      image_url:
        "https://images-cdn.ubuy.co.in/65b04445c3ad0a2d0b01f36b-michael-kors-women-39-s-st-lucia.jpg",
      category: "sunglasses",
      stock: 6,
      gender: "women",
      isAdded: true,
      frame_style: "rectangular",
    },
    {
      id: "24",
      name: "Ray-Ban RB3447",
      description:
        "The classic round design is brought to life with Ray-Ban's RB3447, featuring thin metal frames and crystal lenses for a retro-inspired look.",
      price: 159.99,
      image_url:
        "https://lawrenceandmayo.com/wp-content/uploads/RayBan-RB3447-919931-Black-Angle.jpg",
      category: "sunglasses",
      stock: 8,
      gender: "unisex",
      isAdded: true,
      frame_style: "round",
    },
    {
      id: "25",
      name: "Ray-Ban RB3548N Hexagonal Lens",
      description:
        "A modern twist on the classic hexagonal shape, featuring flat lenses and a lightweight frame for a bold, contemporary look.",
      price: 169.99,
      image_url:
        "https://india.ray-ban.com/media/catalog/product//0/r/0rb3548n_001_030a_1.png",
      category: "sunglasses",
      stock: 10,
      gender: "unisex",
      isAdded: false,
      frame_style: "hexagonal",
    },
    {
      id: "5b96",
      name: "Lenskart Hustlr ",
      description: " Size: Medium • Hustlr ACE-Graphite",
      price: "84",
      image_url:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-lh-e16985-w-c4-eyeglasses_img_9727_11_01_2024.jpg",
      category: "unisex",
      stock: "6",
      gender: "male",
      frame_style: "rounded",
    },
    {
      id: "2186",
      name: "Vincent Chase",
      description: "  Size: Medium • Livewire",
      price: "122",
      image_url:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Silver-Maroon-Full-Rim-Geometric-Vincent-Chase-LIVEWIRE-VC-S14506-C5-Polarized-Sunglasses_G_7229.jpg",
      category: "sunglasses",
      stock: "100",
      gender: "male",
      frame_style: "sqare",
    },
    // {
    //   id: "ebf7",
    //   name: "John Jacobs",
    //   description: "  Size: Wide • JJ X Sobhita",
    //   price: "211",
    //   image_url:
    //     "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/john-jacobs-jj-s16897-c4-sunglasses_img_3197_18_jan24.jpg",
    //   category: "glasses",
    //   stock: "232",
    //   gender: "male",
    //   frame_style: "cat-eye",
    // },
  ];
  const fetures = [
    {
      id: "101",
      name: "Torchy's Sunglasses",
      price: 370.0,
      image_url:
        "https://cdn11.bigcommerce.com/s-vexwbg4upx/images/stencil/1200x1200/products/119/401/torchys-angled__56838.1650579895.jpg?c=1",
      category: "sunglasses",
      stock: 5,
    },
    {
      id: "102",
      name: "Ray-Ban RB3447",
      price: 159.99,
      image_url:
        "https://cdn11.bigcommerce.com/s-vexwbg4upx/images/stencil/1200x1200/products/111/377/aviator-angled__21181.1650566032.jpg?c=1",
      category: "sunglasses",
      stock: 8,
    },
    {
      id: "103",
      name: "Zilker Park Sunglasses",
      price: 169.99,
      image_url:
        "https://cdn11.bigcommerce.com/s-vexwbg4upx/images/stencil/1200x1200/products/140/440/moontower-glasses-angled__78299.1650904034.jpg?c=1",
      category: "sunglasses",
      stock: 10,
    },
    {
      id: "104",
      name: "Moontower Sunglasses",
      price: 169.99,
      image_url:
        "https://cdn11.bigcommerce.com/s-vexwbg4upx/images/stencil/1200x1200/products/147/450/pennybacker-red-angled__62899.1650905104.jpg?c=1",
      category: "sunglasses",
      stock: 10,
    },
  ];

  const [data, setData] = useState(products);
  const [feturedata, setFeturedata] = useState(fetures);
  const [cart, setCart] = useState([]);

  const toggleCartItem = (id) => {
    setCart((prevCart) => {
      if (prevCart.includes(id)) {
        return prevCart.filter((itemId) => itemId !== id); // Remove item
      }
      return [...prevCart, id]; // Add item
    });
  };

  return (
    <DataContext.Provider
      value={{ data, setData, feturedata, setFeturedata, cart, toggleCartItem }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;

export const useData = () => {
  return useContext(DataContext);
};
