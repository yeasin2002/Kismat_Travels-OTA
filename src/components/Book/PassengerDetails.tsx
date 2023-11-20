import { Button, Input, SelectNotCreatable } from "$components";
import { PassengersType } from "$interface";
import { optionsIndex, transform } from "$lib";
import { usePassengers } from "$store";

import { FC, useId } from "react";
import { useForm } from "react-hook-form";

interface ContactDetailsProps {
  index: number;
  paxType: "Adult" | "Child" | "Infant";
}

export const PassengerDetails: FC<ContactDetailsProps> = ({ index, paxType, ...rest }) => {
  const id = useId();
  const ps = usePassengers();

  const { register, formState, handleSubmit, control } = useForm<PassengersType>();
  const onSubmit = (data: PassengersType) => {
    const tsData = transform<PassengersType>(data);
    ps.addPassenger({
      ...tsData,
      IsLeadPassenger: false,
      id: `${paxType}${index}`,
    });
  };

  console.log("ps.passengers");
  console.log(ps.passengers);
  return (
    <form
      className="z-10 grid gap-4 px-[var(--gap-x)] py-[var(--gap-y)] sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4"
      onSubmit={handleSubmit(onSubmit)}
      key={id}
      {...rest}
    >
      <div className="[&>*]:w-full">
        <SelectNotCreatable
          register={register("Title", { required: "title Name is required!" })}
          label="Title*"
          placeholder="Select Title"
          error={formState.errors.Title}
          name="Title"
          control={control}
          options={optionsIndex(["Mr", "Ms", "Mrs"])}
        />
      </div>

      <Input
        label="First Name*"
        placeholder="write your first name"
        error={formState.errors.FirstName}
        register={register("FirstName", {
          required: "First Name is required!",
          minLength: { value: 2, message: "First Name must've 2 character long!" },
        })}
      />
      <Input
        label="Middle Name*"
        placeholder="Middle Name"
        error={formState.errors.MiddleName}
        register={register("MiddleName", {
          required: { value: true, message: "Middle Name is required!" },
        })}
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
          required: { value: true, message: "Passport Expiry Date is required!" },
        })}
        type="date"
        label="Passport ExpiryDate*"
        placeholder="write your Passport Expiry Date"
        error={formState.errors.PassportExpiryDate}
      />

      <Input
        register={register("PassportNationality", {
          required: { value: true, message: "Passport Nationality is required!" },
        })}
        label="Passport Nationality*"
        placeholder="Example: Bangladeshi"
        error={formState.errors.PassportNationality}
      />

      <Input
        register={register("Address1", {
          required: { value: true, message: "Address1 is required!" },
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

      <Input
        register={register("CountryCode", {
          required: { value: true, message: "Country Code is required!" },
          maxLength: { value: 2, message: "Country Code should be maximum 2 Character" },
        })}
        label="Country Code*"
        placeholder="write your Country Code"
        error={formState.errors.CountryCode}
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
  );
};
