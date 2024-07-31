
export const itemsList: {
  image: string,
  name: string
}[] = [
    {
      image: "/images/1_Screwdriver.jpg",
      name: "Screwdriver",
    },
    {
      image: "/images/2_Wrench.jpg",
      name: "Wrench",
    },
    {
      image: "/images/3_Shovel.jpg",
      name: "Shovel",
    },
    {
      image: "/images/4_Hammer.jpg",
      name: "Hammer",
    },
    {
      image: "/images/5_Pliers.jpg",
      name: "Pliers",
    }
  ]



  
   const nameMap = new Map<string, string>();
  nameMap.set("store1", "舱段 1");
  nameMap.set("store2", "舱段 2");
  nameMap.set("store3", "舱段 3");
  nameMap.set("store4", "舱段 4");
  export { nameMap };