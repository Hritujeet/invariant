"use client";

import React, { useState } from "react";
import { Field, FieldGroup, FieldSet } from "../ui/field";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export const AddDerivationsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <FieldSet>
        <FieldGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field>
              <Label htmlFor="title">Title</Label>
              <Input type="text" placeholder="e.g. Lagrangian Mechanics" id="title" name="title" required />
            </Field>

            <Field>
              <Label htmlFor="slug">Slug URL</Label>
              <Input type="text" placeholder="e.g. lagrangian-mechanics" id="slug" name="slug" required />
            </Field>
          </div>

          <Field>
            <Label htmlFor="expression">Expression (LaTeX)</Label>
            <Input type="text" className="font-mono text-sm" placeholder="e.g. \mathcal{L} = T - V" id="expression" name="expression" required />
          </Field>

          <Field>
            <Label htmlFor="description">Short Description</Label>
            <Textarea placeholder="A brief summary for the cards..." id="description" name="description" className="resize-none" rows={3} required />
          </Field>

          <Field>
            <Label htmlFor="content">Full Content</Label>
            <Textarea placeholder="Detailed write-up..." id="content" name="content" className="min-h-[150px]" required />
          </Field>

          <Field className="bg-muted/30 p-4 rounded-lg border border-dashed border-border/60">
            <Label htmlFor="pdf" className="cursor-pointer">Upload PDF Document</Label>
            <Input type="file" accept=".pdf" id="pdf" name="pdf" className="cursor-pointer file:text-primary file:font-semibold file:bg-primary/10 file:border-0 hover:file:bg-primary/20 file:rounded-md file:px-2 file:-ml-2 file:mr-4 file:transition-colors bg-transparent border-0 shadow-none px-0 h-auto" />
            <p className="text-[11px] text-muted-foreground mt-1 text-left">Upload the handwritten scan or derived notes.</p>
          </Field>
        </FieldGroup>
        
        <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-border/40">
          <Button type="button" variant="outline" className="px-6">Cancel</Button>
          <Button type="submit" disabled={isSubmitting} className="px-6">
            {isSubmitting ? "Saving..." : "Save Derivation"}
          </Button>
        </div>
      </FieldSet>
    </form>
  );
};
