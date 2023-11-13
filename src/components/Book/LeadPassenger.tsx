import { Button, Input, SelectNotCreatable } from "$components";
import { PassengersType } from "$interface/Passengers.interface";
import { usePassengers } from "$store";
import { DetailedHTMLProps, FC, FormHTMLAttributes } from "react";
import { useForm } from "react-hook-form";

interface LeadPassengerProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}
export const LeadPassenger: FC<LeadPassengerProps> = ({ ...rest }) => {
  const ps = usePassengers();

  const { register, formState, handleSubmit, control } = useForm<PassengersType>();

  const FormHandler = (data: PassengersType) => {
    ps.addPassenger({ ...data, IsLeadPassenger: true, id: `lead-0` });
  };

  return (
    <form
      {...rest}
      className="z-10 grid gap-4 px-[var(--gap-x)] py-[var(--gap-y)] sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4"
      onSubmit={handleSubmit(FormHandler)}
    >
      <p className="col-span-full text-2xl font-bold text-gray-800">Provide your Details</p>

      <SelectNotCreatable
        register={register("Title", {
          required: { value: true, message: "Title Name is required!" },
        })}
        label="Title"
        placeholder="Select Title"
        error={formState.errors.Title}
        name="Title"
        control={control}
        options={["Mr", "Ms", "Mrs"].map((value) => ({ value, label: value }))}
      />

      <SelectNotCreatable
        register={register("PaxType", {
          required: { value: true, message: "PaxType Name is required!" },
        })}
        label="PaxType"
        placeholder="Select PaxType"
        error={formState.errors.PaxType}
        name="PaxType"
        control={control}
        options={["Adult"].map((value) => ({ value, label: value }))}
      />

      <Input
        register={register("FirstName", {
          required: { value: true, message: "First Name is required!" },
          minLength: { value: 2, message: "First Name must've 2 character long!" },
        })}
        label="First Name"
        placeholder="write your first name"
        error={formState.errors.FirstName}
      />
      <Input
        register={register("MiddleName", {
          required: { value: true, message: "Middle Name is required!" },
        })}
        label="Middle Name"
        placeholder="example@gmail.com"
        error={formState.errors.MiddleName}
      />

      <Input
        register={register("LastName", {
          required: { value: true, message: "Last Name is required!" },
        })}
        label="Last Name"
        placeholder="write your last name"
        error={formState.errors.LastName}
      />

      <Input
        register={register("PassportNumber", {
          required: { value: true, message: "Passport Number is required!" },
        })}
        label="Passport Number"
        placeholder="write your last Passport Number"
        error={formState.errors.PassportNumber}
      />

      <Input
        register={register("PassportExpiryDate", {
          required: { value: true, message: "PassportExpiryDate is required!" },
        })}
        label="Passport Expiry Date"
        placeholder="write your Birth Date"
        error={formState.errors.PassportExpiryDate}
        type="date"
      />

      <Input
        register={register("PassportNationality", {
          required: { value: true, message: "Passport Nationality is required!" },
        })}
        label="Passport Nationality"
        placeholder="write your last name"
        error={formState.errors.PassportNationality}
      />

      <Input
        register={register("Address1", {
          required: { value: true, message: "Address1 is required!" },
          minLength: { value: 6, message: "Address1 must've 6 character long!" },
        })}
        label="Address1"
        placeholder="write your 1st  Address"
        error={formState.errors.Address1}
      />

      <Input
        register={register("Address2")}
        label="Address2"
        placeholder="write your 2nd Address"
        error={formState.errors.Address2}
      />

      <Input
        register={register("CountryCode", {
          required: { value: true, message: "Country Code is required!" },
          maxLength: { value: 2, message: "Country Code should be maximum 2 Character" },
        })}
        label="Country Code"
        placeholder="write your Country Code"
        error={formState.errors.CountryCode}
      />

      <Input
        register={register("Email", {
          required: { value: true, message: "Email is required!" },
          pattern: { value: /\S+@\S+\.\S+/, message: "Entered value does not match email format" },
        })}
        label="Email"
        placeholder="write your Country Code"
        error={formState.errors.Email}
        type="email"
      />

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

      <Input
        register={register("DateOfBirth", {
          required: { value: true, message: "Birth Date is required!" },
          minLength: { value: 6, message: "Birth Date must've 6 character long!" },
        })}
        label="Birth Date"
        placeholder="write your Birth Date"
        error={formState.errors.DateOfBirth}
        type="date"
      />

      <div className="col-span-full">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
