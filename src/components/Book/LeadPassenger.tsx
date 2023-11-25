import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "shadcn/components/ui/accordion";

import { Button, Input, SelectNotCreatable } from "$components";
import { useAuth } from "$hooks";
import { PassengersType } from "$interface/Passengers.interface";
import { optionsIndex, transform } from "$lib";
import { usePassengers } from "$store";
import { DetailedHTMLProps, FC, FormHTMLAttributes, Fragment } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface LeadPassengerProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}
export const LeadPassenger: FC<LeadPassengerProps> = ({ ...rest }) => {
  const ps = usePassengers();
  const { currentUser } = useAuth();

  const { register, formState, handleSubmit, control } = useForm<PassengersType>({
    defaultValues: {
      Email: currentUser?.email,
    },
  });

  const FormHandler = (data: PassengersType) => {
    const tsData = transform<PassengersType>(data);
    ps.addPassenger({ ...tsData, IsLeadPassenger: true, id: `lead-0` });
    toast.success("Your Information Added");
  };

  return (
    <Fragment>
      <Accordion
        type="single"
        collapsible
        defaultValue="LeadPassenger"
        className=" my-2 rounded-lg bg-gray-50 px-[var(--gap-x)] py-[var(--gap-y)] shadow-sm
        data-[state=open]:pb-0 
        "
      >
        <AccordionItem value="LeadPassenger">
          <AccordionTrigger className=" ">
            <p className="  text-xl font-bold text-gray-800">Provide your Details</p>
          </AccordionTrigger>
          <AccordionContent>
            <form
              {...rest}
              className="z-10 grid gap-4 px-[var(--gap-x)] py-[var(--gap-y)] sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4"
              onSubmit={handleSubmit(FormHandler)}
            >
              <SelectNotCreatable
                register={register("Title", {
                  required: { value: true, message: "Title Name is required!" },
                })}
                label="Title*"
                placeholder="Select Title"
                error={formState.errors.Title}
                name="Title"
                control={control}
                options={optionsIndex(["Mr", "Ms", "Mrs"])}
              />
              <SelectNotCreatable
                register={register("PaxType", {
                  required: { value: true, message: "PaxType Name is required!" },
                })}
                label="PaxType*"
                placeholder="Select PaxType"
                error={formState.errors.PaxType}
                name="PaxType"
                control={control}
                options={optionsIndex(["Adult"])}
              />
              <Input
                register={register("FirstName", {
                  required: { value: true, message: "First Name is required!" },
                  minLength: { value: 2, message: "First Name must've 2 character long!" },
                })}
                label="First Name*"
                placeholder="write your first name"
                error={formState.errors.FirstName}
              />
              <Input
                register={register("MiddleName", {
                  required: { value: true, message: "Middle Name is required!" },
                })}
                label="Middle Name*"
                placeholder="Middle  Name"
                error={formState.errors.MiddleName}
              />
              <Input
                register={register("LastName", {
                  required: { value: true, message: "Last Name is required!" },
                })}
                label="Last Name*"
                placeholder="write your last name"
                error={formState.errors.LastName}
              />
              <Input
                register={register("PassportNumber", {
                  required: { value: true, message: "Passport Number is required!" },
                })}
                label="Passport Number*"
                placeholder="write your last Passport Number"
                error={formState.errors.PassportNumber}
              />
              <Input
                register={register("PassportExpiryDate", {
                  required: { value: true, message: "PassportExpiryDate is required!" },
                })}
                label="Passport Expiry Date"
                placeholder="write your Birth Date*"
                error={formState.errors.PassportExpiryDate}
                type="date"
              />
              <Input
                register={register("PassportNationality", {
                  required: { value: true, message: "Passport Nationality is required!" },
                })}
                label="Passport Nationality*"
                placeholder="write your  Nationality"
                error={formState.errors.PassportNationality}
              />
              <Input
                register={register("Address1", {
                  required: { value: true, message: "Address1 is required!" },
                  minLength: { value: 6, message: "Address1 must've 6 character long!" },
                })}
                label="Address1*"
                placeholder="write your 1st  Address"
                error={formState.errors.Address1}
              />
              <Input
                register={register("Address2")}
                label="Address2*"
                placeholder="write your 2nd Address"
                error={formState.errors.Address2}
              />
              {/* <Input
                register={register("CountryCode", {
                  required: { value: true, message: "Country Code is required!" },
                  maxLength: { value: 2, message: "Country Code should be maximum 2 Character" },
                })}
                type="text"
                label="Country Code*"
                placeholder="write your Country Code"
                error={formState.errors.CountryCode}
              /> */}

              <SelectNotCreatable
                register={register("CountryCode", {
                  required: { value: true, message: "CountryCode is required!" },
                })}
                label="CountryCode*"
                placeholder=" Select Country Code"
                error={formState.errors.Title}
                name="CountryCode"
                control={control}
                options={optionsIndex(["BD", "IND", "PN"])}
              />
              <Input
                register={register("Email", {
                  required: { value: true, message: "Email is required!" },
                  pattern: { value: /\S+@\S+\.\S+/, message: "Entered value does not match email format" },
                })}
                label="Email*"
                placeholder="write your Email"
                error={formState.errors.Email}
                type="email"
              />

              <Input
                register={register("DateOfBirth", {
                  required: { value: true, message: "Birth Date is required!" },
                  minLength: { value: 6, message: "Birth Date must've 6 character long!" },
                })}
                label="Birth Date*"
                placeholder="write your Birth Date"
                error={formState.errors.DateOfBirth}
                type="date"
              />
              <SelectNotCreatable
                register={register("Gender", {
                  required: { value: true, message: "Gender  is required!" },
                })}
                label="Gender*"
                placeholder="Select Gender"
                error={formState.errors.Gender}
                name="Gender"
                control={control}
                options={optionsIndex(["Male", "Female"])}
              />
              <Input
                register={register("Nationality", {
                  required: { value: true, message: "Nationality is required!" },
                })}
                label="Nationality*"
                placeholder="write your Nationality"
                error={formState.errors.DateOfBirth}
                type="text"
              />
              <Input
                register={register("ContactNumber", {
                  required: { value: true, message: "Contact Number is required!" },
                  minLength: { value: 6, message: "Contact Number must've 6 character long!" },
                })}
                label="ContactNumber*"
                placeholder="write your Contact Number"
                error={formState.errors.DateOfBirth}
                type="text"
              />
              {/* 
                   //! Optional Fields
              */}
              <Input
                register={register("FFAirline", {})}
                label="FF Airline"
                placeholder="write your FFAirline"
                error={formState.errors.FFAirline}
              />
              <Input
                register={register("FFNumber")}
                label="FF Number"
                placeholder="write your FFNumber"
                error={formState.errors.FFNumber}
              />
              <Input
                register={register("Baggage")}
                label="Baggage"
                placeholder="write your Baggage"
                error={formState.errors.Baggage}
              />
              <Input
                register={register("BaggageID")}
                label="BaggageID"
                placeholder="write your Baggage ID"
                error={formState.errors.BaggageID}
              />

              <div className="col-span-full">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Fragment>
  );
};
