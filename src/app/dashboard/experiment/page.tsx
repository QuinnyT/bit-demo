import * as React from 'react';
import List from "@/components/dashboard/list";

export default function Page(): React.JSX.Element {
  const goodsList = [
    {
      image: "",
      name: "good1",
      name_ch: "物品 1"
    },
    {
      image: "",
      name: "good2",
      name_ch: "物品 2"
    },
  ]
  return (
    <List items={goodsList} />
  );
}
