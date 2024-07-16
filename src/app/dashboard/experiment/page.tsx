import * as React from 'react';
import List from "@/components/dashboard/list";

export default function Page(): React.JSX.Element {
  const goodsList = [
    {
      image: "",
      name: "good1",
    },
    {
      image: "",
      name: "good2",
    },
  ]
  return (
    <List items={goodsList} />
  );
}
