"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form";
import CustomForm from "./CustomForm";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
export enum FormFieldType {
    INPUT = 'input',
    SELECT = 'select',
    TEXTAREA= 'textarea',
    CHECKBOX = 'checkbox',
    PHONE_INPUT = 'phoneInput',
    DATE_PICKER = 'datePicker',
    SKELETON = 'skeleton'
}
import {UserFormValidation} from "../lib/validation";





const PatientForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    // 1. Define your form.
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
        // Do something with the form values.
        //  This will take inputs from the form
        // and create a user object to be stored in 
        // in the object
        setIsLoading(true);
        try{
            // Create a new user
            const user = {
                name,
                email,
                phone
            }
        }
        catch(error){
            console.log(error)
        }
    }
    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
            <section className="mb-12 space-y-4">
                <h1 className="header">Hello there ✌</h1>
                <p className="text-dark-700">Schedule your first appointment.</p>
            </section>
            {/* Reusables form fields */}

            {/* 1. form field for name */}
            <CustomForm 
            control={form.control}
            fieldType={FormFieldType.INPUT }
            name="name"
            label="full name"
            placeholder="jack black"
            iconSrc="assets/icons/user.svg"
            iconAlt="user"/>
            {/* 2. form field for email */}
            <CustomForm 
            control={form.control}
            fieldType={FormFieldType.INPUT }
            name="email"
            label="Email"
            placeholder="jack@gmail.com"
            iconSrc="assets/icons/email.svg"
            iconAlt="email"/>
            {/* 3. form field for phone number */}
            <CustomForm 
            control={form.control}
            fieldType={FormFieldType.PHONE_INPUT }
            name="phone"
            label="Phone-number"
            placeholder="(234) 333 444 78"
            iconSrc="assets/icons/email.svg"
            iconAlt="email"/>
            <SubmitButton isLoading={isLoading}>Start here</SubmitButton>
        </form>
    </Form>
    )
}

export default PatientForm
