import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";

import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import Menu from "../menu.component";

import Header from "../../header/header.component";
import MenuItem from "../../menu-item/menu-item.component";
import Help from "../../simple-list-help/simple-list-help.component";

import { propCount } from "../../../test.fixtures/objectComparison";

jest.mock("../../header/header.component");
jest.mock("../../menu-item/menu-item.component");
jest.mock("../../simple-list-help/simple-list-help.component");

Header.mockImplementation(() => <div>MockComponent</div>);
MenuItem.mockImplementation(() => <div>MockComponent</div>);
Help.mockImplementation(() => <div>MockComponent</div>);

const props = {
  options: [{ name: "option1", location: "option1" }],
  headerTitle: "HeaderTitle",
  title: "Title",
  helpText: "HelpText",
};

describe("Setup environment", () => {
  let utils;
  let startPath = "/some/unmatched/path";
  const history = createBrowserHistory();
  beforeEach(() => {
    history.location.pathname = startPath;
    jest.clearAllMocks();
    utils = render(
      <Router history={history}>
        <Menu {...props} />
      </Router>
    );
  });

  afterEach(cleanup);

  it("should render all components with correct props", async (done) => {
    expect(Header).toBeCalledTimes(1);
    const headerCall = Header.mock.calls[0][0];
    propCount(headerCall, 3);
    expect(headerCall.title).toBe(props.headerTitle);
    expect(headerCall.transaction).toBe(false);
    expect(headerCall.create).toBe(null);

    expect(MenuItem).toBeCalledTimes(1);
    const menuItemCall = MenuItem.mock.calls[0][0];
    propCount(menuItemCall, 3);
    expect(menuItemCall.name).toBe(props.options[0].name);
    expect(menuItemCall.location).toBe(props.options[0].location);
    expect(menuItemCall.choose).toBeInstanceOf(Function);

    expect(Help).toBeCalledTimes(1);
    const helpCall = Help.mock.calls[0][0];
    propCount(helpCall, 1);
    expect(helpCall.children).toBe(props.helpText);

    done();
  });

  it("clicking on option1, should change the page accordingly", async (done) => {
    expect(MenuItem).toBeCalledTimes(1);
    const choose = MenuItem.mock.calls[0][0].choose;
    const newPath = "/a/new/path";

    await waitFor(() => expect(history.location.pathname).toBe(startPath));

    act(() => choose(newPath));

    await waitFor(() => expect(history.location.pathname).toBe(newPath));

    done();
  });
});