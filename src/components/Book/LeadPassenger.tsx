import { Button, FormInputs, Input, SelectNotCreatable } from "$components";
import { DetailedHTMLProps, FC, FormHTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "shadcn/components/ui/select";

interface LeadPassengerProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}
interface LeadPassengerForm extends FormInputs {
  Email: string;
}

export const LeadPassenger: FC<LeadPassengerProps> = ({ ...rest }) => {
  const { register, formState, handleSubmit, control } = useForm<LeadPassengerForm>();
  const FormHandler = (data: LeadPassengerForm) => {
    console.log(data);
  };

  return (
    <form {...rest} className="space-y-8 px-4 md:space-y-4 " onSubmit={handleSubmit(FormHandler)}>
      <p className="my-10 text-2xl font-bold text-gray-800">Provide your Details </p>
      <div className="!flex  w-full items-center   gap-x-6">
        <SelectNotCreatable
          register={register("title", {
            required: { value: true, message: "title Name is required!" },
          })}
          label="Title"
          placeholder="Select Title"
          error={formState.errors.title}
          name="title"
          control={control}
          options={[
            {
              label: "Mr",
              value: "Mr",
            },
            {
              label: "Ms",
              value: "Ms",
            },
            {
              label: "Mrs",
              value: "Mrs",
            },
          ]}
        />

        <SelectNotCreatable
          register={register("PaxType", {
            required: { value: true, message: "PaxType Name is required!" },
          })}
          label="PaxType"
          placeholder="Select PaxType"
          error={formState.errors.PaxType}
          name="title"
          control={control}
          options={[
            {
              label: "Adult",
              value: "Adult",
            },
            {
              label: "Child",
              value: "Child",
            },
            {
              label: "Infant",
              value: "Infant",
            },
          ]}
        />
      </div>

      <div className="bookInputContainer">
        <Input
          register={register("FirstName", {
            required: { value: true, message: "First Name is required!" },
            minLength: { value: 6, message: "First Name must've 6 character long!" },
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
      </div>

      <div className="bookInputContainer">
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
            required: { value: true, message: "Passport Expiry Date is required!" },
          })}
          label="Passport ExpiryDate"
          placeholder="write your Passport Expiry Date"
          error={formState.errors.PassportExpiryDate}
        />

        <Input
          register={register("PassportNationality", {
            required: { value: true, message: "Passport Nationality is required!" },
            minLength: { value: 6, message: "Passport Nationality must've 6 character long!" },
          })}
          label="Passport Nationality"
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
          label="Country Code"
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
      </div>

      <div className="bookInputContainer ">
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
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
