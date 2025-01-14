"use client";

import React, { useEffect, useState } from "react";
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

export const subscriptionForm = [
  {
    id: "name",
    label: "Name",
    type: "name",
    required: true,
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    required: true,
  },
];

const SubscriptionForm = ({ name, className }: Props) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Subscribe successfully!");
        setFormData({
          email: "",
          name: "",
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
              Subscribe Now
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit}>
                {subscriptionForm.map(
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
                  className="w-full mt-5 bg-yellow-500 hover:bg-yellow-400 text-white font-semibold text-lg py-5 sm:py-6 px-6 sm:px-8 rounded-full"
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

export default SubscriptionForm;
