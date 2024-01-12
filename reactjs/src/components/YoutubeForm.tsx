/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFieldArray, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  phNumbers: { number: string }[];
};

export const YouTubeForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
      social: {
        facebook: "",
        twitter: "",
      },
      phoneNumbers: ["23424346", "3453465466", "3637894867"],
      phNumbers: [{ number: "23424346" }, { number: "3453465466" }],
    },
    // defaultValues: async () => {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/users/1"
    //   );
    //   const data = await response.json();
    //   return {
    //     username: "Batman",
    //     email: data.email,
    //     channel: "",
    //   };
    // },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "phNumbers",
  });

  const onsubmitForm = (data: FormValues) => {
    console.log("Form Submitted", data);
  };

  return (
    <div>
      <h1>YouTube Form</h1>

      <form onSubmit={handleSubmit(onsubmitForm)}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "email is required",
              },

              validate: (fieldValue) => {
                return (
                  fieldValue !== "admin@example.com" ||
                  "Enter a different email address"
                );
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              validate: {
                notValidUsername: (field) => {
                  return field !== "username" || "Enter a valid username";
                },
                blacklistedUsername: (field) => {
                  return (
                    !field.endsWith("name") || "Must not have a 'name' in it"
                  );
                },
              },
            })}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>

        <div className="form-control">
          <div className="form-control">
            <label htmlFor="primary-phone">primary Phone number</label>
            <input
              type="text"
              id="primary-phone"
              {...register("phoneNumbers.0", {
                validate: {
                  badNumber: (field) => {
                    return (
                      !field.endsWith(String(4)) || "End with a good number"
                    );
                  },
                },
              })}
            />
            <p className="error">{errors.phoneNumbers?.[0]?.message}</p>
          </div>

          <div className="form-control">
            <label htmlFor="secondary-phone">Secondary Phone number</label>
            <input
              type="text"
              id="secondary-phone"
              {...register("phoneNumbers.1", {
                required: {
                  value: true,
                  message: "number is required",
                },
              })}
            />
            <p className="error">{errors.phoneNumbers?.[0]?.message}</p>
          </div>
          <label htmlFor="social">Twitter</label>
          <input type="text" id="social" {...register("social.twitter")} />
          <p className="error">{errors.social?.twitter?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="social">Facebook</label>
          <input type="text" id="social" {...register("social.facebook")} />
          <p className="error">{errors.social?.facebook?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="primary-phone">primary Phone number</label>
          <input
            type="text"
            id="primary-phone"
            {...register("phoneNumbers.0", {
              validate: {
                badNumber: (field) => {
                  return !field.endsWith(String(4)) || "End with a good number";
                },
              },
            })}
          />
          <p className="error">{errors.phoneNumbers?.[0]?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="secondary-phone">Secondary Phone number</label>
          <input
            type="text"
            id="secondary-phone"
            {...register("phoneNumbers.1", {
              required: {
                value: true,
                message: "number is required",
              },
            })}
          />
          <p className="error">{errors.phoneNumbers?.[1]?.message}</p>
        </div>

        <div>
          <label>List of phone numbers</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div key={field.id} className="form-control">
                  <input
                    type="text"
                    {...register(`phNumbers.${index}.number` as const)}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      Delete
                    </button>
                  )}
                </div>
              );
            })}
            <button type="button" onClick={() => append({ number: "" })}>
              Add phone number
            </button>
          </div>
        </div>
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
