/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldErrors, useFieldArray, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

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
  age: number;
  dob: Date;
};

export const YouTubeForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "Batman",
      email: " ",
      channel: "",
      social: {
        facebook: "",
        twitter: "",
      },
      phoneNumbers: ["23424346", "3453465466", "3637894867"],
      phNumbers: [{ number: "23424346" }, { number: "3453465466" }],
      age: 0,
      dob: new Date(),
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
  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    reset,
  } = form;
  const {
    errors,
    touchedFields,
    dirtyFields,
    isSubmitSuccessful,
    isSubmitted,
    isSubmitting,
    submitCount,
    isDirty,
    isValid,
  } = formState;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "phNumbers",
  });

  const onsubmitForm = (data: FormValues) => {
    console.log("Form Submitted", data);
  };

  const onError = (errors: FieldErrors<FormValues>) => {
    console.log("Form Errors", errors);
  };

  const handleGetValues = () => {
    console.log("Values", getValues("social"));
    // console.log("Values", getValues());
  };

  const handleSetValues = () => {
    setValue("username", "", {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    // console.log("Values", getValues());
  };

  useEffect(() => {
    const sub = watch((value) => {
      console.log(value);
    });

    return () => {
      sub.unsubscribe();
    };
  }, [watch]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  // console.log({ dirtyFields, touchedFields, isDirty });

  return (
    <div>
      <h1>YouTube Form</h1>
      {/* <h2>Watched value: {JSON.stringify(watchUsername)}</h2> */}
      <form onSubmit={handleSubmit(onsubmitForm, onError)}>
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
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="channel"
            {...register("age", {
              valueAsNumber: true,
              required: {
                value: true,
                message: "age is required",
              },
            })}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input
            type="text"
            id="date"
            {...register("dob", {
              valueAsDate: true,
              required: {
                value: true,
                message: "date is required",
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
          <input
            type="text"
            id="social"
            {...register("social.twitter", {
              disabled: watch("channel") === "",
              // THis diables the validation and makes the value to be undefined
            })}
          />
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
        <button disabled={!isDirty || !isValid}>Submit</button>
        <button onClick={() => reset()}>Reset</button>
        <button onClick={handleGetValues}>Get Values</button>
        <button onClick={handleSetValues}>Set Values</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
