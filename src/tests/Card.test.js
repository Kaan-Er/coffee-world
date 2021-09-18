import React from "react";
import renderer from "react-test-renderer";
import Card from "../components/Card/Card";

it("Card renders correctly", () => {
  const coffee = {
    title: "Black",
    description:
      "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
    ingredients: ["Coffee"],
    category: "hot",
    id: 1,
  };
  const tree = renderer.create(<Card coffee={coffee} />).toJSON();
  expect(tree).toMatchSnapshot();
});
