
export const itemsList: {
  image: string,
  name: string,
  name_ch: string
}[] = [
    {
      image: "/images/1_Screwdriver.jpg",
      name: "Screwdriver",
      name_ch: "螺丝刀"
    },
    {
      image: "/images/2_Wrench.jpg",
      name: "Wrench",
      name_ch: "扳手"
    },
    {
      image: "/images/3_Shovel.jpg",
      name: "Shovel",
      name_ch: "铲子"
    },
    {
      image: "/images/4_Hammer.jpg",
      name: "Hammer",
      name_ch: "锤子"
    },
    {
      image: "/images/5_Pliers.jpg",
      name: "Pliers",
      name_ch: "钳子"
    }
  ]



  
   const nameMap = new Map<string, string>();
  nameMap.set("store1", "舱段 1");
  nameMap.set("store2", "舱段 2");
  nameMap.set("store3", "舱段 3");
  nameMap.set("store4", "舱段 4");
  export { nameMap };