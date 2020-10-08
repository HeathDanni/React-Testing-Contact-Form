import React from "react";
import { render, fireEvent, screen, getByRole, getByLabelText } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("can submit ContactForm", () => {
    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText("First Name*");
    const lastNameInput = screen.getByLabelText("Last Name*");
    const emailInput = screen.getByLabelText("Email*");
    const messageInput = screen.getByLabelText("Message");
    
    fireEvent.change(firstNameInput, {target: {value: "heather"}});
    fireEvent.change(lastNameInput, {target: {value: "beckman"}});
    fireEvent.change(emailInput, {target: {value: "heather@gmail.com"}});
    fireEvent.change(messageInput, {target: {value: "this is a message"}});

    expect(firstNameInput).toHaveValue("heather");
    expect(lastNameInput).toHaveValue("beckman");
    expect(emailInput).toHaveValue("heather@gmail.com");
    expect(messageInput).toHaveValue("this is a message");

    const submitButton = screen.getByRole("button", {type: /submit/i});
    fireEvent.click(submitButton);

    const newUser = screen.findByText("\"heather\"");

});