import React from "react";
import renderer from "react-test-renderer";
import ConditionRender from ".";

// Test case 1: Render with condition=true and truth prop
it("renders truth component when condition is true", () => {
  const tree = renderer
    .create(
      <ConditionRender condition={true} truth={<div>Truth Component</div>} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// Test case 2: Render with condition=true and no truth prop
it("renders an empty fragment when condition is true and no truth prop", () => {
  const tree = renderer.create(<ConditionRender condition={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Test case 3: Render with condition=false and untruth prop
it("renders untruth component when condition is false", () => {
  const tree = renderer
    .create(
      <ConditionRender
        condition={false}
        untruth={<div>Untruth Component</div>}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// Test case 4: Render with condition=false and no untruth prop
it("renders an empty fragment when condition is false and no untruth prop", () => {
  const tree = renderer.create(<ConditionRender condition={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});
