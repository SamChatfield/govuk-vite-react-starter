import React from "react";
import { Template } from "./components/govuk";

const heading = "GOV.UK Vite React Starter";

export default function App() {
  return (
    <Template serviceName={heading}>
      <h1 className="govuk-heading-l">{heading}</h1>
      <p className="govuk-body">Hello, World!</p>
    </Template>
  );
}
