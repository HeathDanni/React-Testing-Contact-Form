import React from "react";
import { render, fireEvent, screen, getByRole, getByLabelText } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("render ContactForm", () => {
    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText("First Name*");
    const lastNameInput = screen.getByLabelText("Last Name*");
    const emailInput = screen.getByLabelText("Email*");
    const messageInput = screen.getByLabelText("Message");
    

});