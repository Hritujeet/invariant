import React from "react";
import { AddDerivationsForm } from "@/components/site/add-derivations-form";

export default function NewDerivationPage() {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center md:text-4xl mb-8">
        Add a new <span className="text-primary">Derivation</span>
      </h1>
      <div className="max-w-4xl mx-auto px-6">
        <AddDerivationsForm />
      </div>
    </div>
  );
}
