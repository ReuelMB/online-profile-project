import { FormField, Button } from "../Components";
import { FormProvider, useForm } from "react-hook-form";
import { ContactMeFields } from "./Constants/ContactMeFields";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { sendEmail } from "../Utils/Utils";

export default function ContactMeForm(props) {
  const methods = useForm({ mode: "onBlur" });
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const reCaptchaRef = useRef();
  const recapchaOnChange = () => {
    setFeedbackMsg(null);
  };
  const onSubmit = (data, e) => {
    e.preventDefault();
    const reCaptchaToken = reCaptchaRef.current.getValue();

    if (!reCaptchaToken) {
      console.log("CAPTCHA Missing!");
      setFeedbackMsg("Select 'I'm not a robot'");
      return;
    }
    const values = { "g-recaptcha-response": reCaptchaToken, ...data };
    sendEmail(values);
    reCaptchaRef.current.reset();
    methods.reset();
    if (props.callBack) {
      props.callBack();
    }
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
        autoComplete="off"
        className="container block p-4"
      >
        {ContactMeFields.map((field) => (
          <FormField {...field} key={field.name} />
        ))}
        <div className="flex flex-col justify-center items-center p-4">
          <ReCAPTCHA
            name="g-recaptcha-response"
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            ref={reCaptchaRef}
            onChange={recapchaOnChange}
          />
          {feedbackMsg && <p className="text-red-300">{feedbackMsg}</p>}
        </div>
        <div className="flex flex-row items-center justify-center">
          {props.callBack ? (
            <Button
              type="button"
              label="Cancel"
              variant="secondary"
              callBack={props.callBack}
            />
          ) : (
            <Button type="reset" label="Reset" variant="secondary" />
          )}
          <Button type="submit" label="Send" variant="primary" />
        </div>
      </form>
    </FormProvider>
  );
}
