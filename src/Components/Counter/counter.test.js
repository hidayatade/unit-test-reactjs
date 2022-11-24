import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ReactDom from "react-dom";
import Counter from ".";

test("counter testing", () => {
  // const div = document.createElement('div');
  // document.body.append(div);
  const { container: div } = render(<Counter />);
  console.log(document.body.innerHTML);
  // render Counter
  ReactDom.render(<Counter />, div);

  // test count bernilai 0
  const message = div.firstChild.querySelector('p');

  // test button inc, dec
  // const [increment, decrement] = div.querySelectorAll('button');
  const decrement = screen.getByRole('button', {  name: /decrement/i});
  const increment = screen.getByRole('button', {  name: /increment/i})

  expect(message.textContent).toBe('0');
  fireEvent.click(increment);
  expect(message.textContent).toBe('1');
  fireEvent.click(decrement);
  expect(message.textContent).toBe('0');
  screen.debug();
  console.log(message.textContent);
  console.log(document.body.innerHTML);
});