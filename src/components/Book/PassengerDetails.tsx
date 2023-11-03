import { Input } from "$components";
import { DetailedHTMLProps, FC, FormHTMLAttributes } from "react";
import { useForm } from "react-hook-form";

interface ContactDetailsProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}
export interface FormInputs {
  title: "Mr" | "Ms" | "Mrs";
  FirstName: string;
  MiddleName?: string;
  LastName: string;
  PaxType: "Adult" | "Child" | "Infant";
  DateOfBirth: string;
  Gender: "Male" | "Female";
  PassportNumber?: string;
  PassportExpiryDate?: string;
  PassportNationality?: string;
  Address1: string;
  Address2?: string;
  CountryCode: string;
  Nationality: string;
  ContactNumber: string;
  Email: string;
  IsLeadPassenger?: boolean;
  FFAirline?: string;
  FFNumber?: number;
  Baggage?: string;
  BaggageID?: string;
}

export const PassengerDetails: FC<ContactDetailsProps> = ({ ...rest }) => {
  const { register, formState, handleSubmit } = useForm<FormInputs>();
  return (
    <form {...rest} className="space-y-8 md:space-y-4">
      <div className="bookInputContainer">
        <Input
          register={register("FirstName", {
            required: { value: true, message: "First Name is required!" },
            minLength: { value: 6, message: "First Name must've 6 character long!" },
          })}
          label="FirstName"
          placeholder="write your first name"
          error={formState.errors.FirstName}
        />
        <Input
          register={register("MiddleName", {
            required: { value: true, message: "Middle Name is required!" },
          })}
          label="MiddleName"
          placeholder="example@gmail.com"
          error={formState.errors.MiddleName}
        />

        <Input
          register={register("LastName", {
            required: { value: true, message: "Last Name is required!" },
          })}
          label="LastName"
          placeholder="write your last name"
          error={formState.errors.LastName}
        />
      </div>

      <div className="bookInputContainer">
        <Input
          register={register("PassportNumber", {
            required: { value: true, message: "Passport Number is required!" },
          })}
          label="PassportNumber"
          placeholder="write your last Passport Number"
          error={formState.errors.PassportNumber}
        />

        <Input
          register={register("PassportExpiryDate", {
            required: { value: true, message: "Passport Expiry Date is required!" },
          })}
          label="PassportExpiryDate"
          placeholder="write your Passport Expiry Date"
          error={formState.errors.PassportExpiryDate}
        />

        <Input
          register={register("PassportNationality", {
            required: { value: true, message: "Passport Nationality is required!" },
            minLength: { value: 6, message: "Passport Nationality must've 6 character long!" },
          })}
          label="PassportNationality"
          placeholder="write your last name"
          error={formState.errors.PassportNationality}
        />
      </div>

      <div className="bookInputContainer">
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
          label="CountryCode"
          placeholder="write your Country Code"
          error={formState.errors.CountryCode}
        />
      </div>

      <div className="bookInputContainer">
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
          label="FFAirline"
          placeholder="write your FFAirline"
          error={formState.errors.FFAirline}
        />

        <Input
          register={register("FFNumber")}
          label="FFNumber"
          placeholder="write your FFNumber"
          error={formState.errors.FFNumber}
        />
      </div>

      <div className="bookInputContainer">
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
      </div>
    </form>
  );
};
