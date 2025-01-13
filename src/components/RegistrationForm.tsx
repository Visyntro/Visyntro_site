"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import registrationInput from "../../constant/registrationInput";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

interface Props {
  name: string;
  className: string;
}

const RegistrationForm = ({ name, className }: Props) => {
  const [formData, setFormData] = useState({
    organization: "",
    name: "",
    email: "",
    phone: "",
    business: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Email sent successfully!");
        setFormData({
          organization: "",
          name: "",
          email: "",
          phone: "",
          business: "",
        });
      } else {
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again.");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className={className}>{name}</Button>
        </DialogTrigger>
        <DialogContent className="p-4 w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-center text-xl mb-2">
              Contact Us
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit}>
                {registrationInput.map(
                  ({ id, label, type = "text", required }) => (
                    <div key={id}>
                      <label htmlFor={id} className="text-black">
                        {label}
                      </label>
                      <Input
                        type={type}
                        id={id}
                        placeholder={label}
                        required={required}
                        className="my-2"
                        value={formData[id as keyof typeof formData]}
                        onChange={handleChange}
                      />
                    </div>
                  )
                )}
                <Button
                  type="submit"
                  className="w-full mt-5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg py-5 sm:py-6 px-6 sm:px-8 rounded-full"
                >
                  Submit
                </Button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegistrationForm;
