import { useForm } from "react-hook-form";
import ContactSocials from "./ContactSocials";
import { Helmet, HelmetProvider } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const formData = useRef(null); // Ensure formData is linked properly

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      textmessage: "",
    },
  });

  const sendEmail = (event) => {
    event.preventDefault(); // Prevent page reload

    if (!formData.current) {
      console.error("Form reference is not available.");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID, // Ensure this is correctly set in .env
        import.meta.env.VITE_TEMPLATE_ID,
        formData.current, // Form reference
        import.meta.env.VITE_EMAILJS_KEY
      )
      .then(
        (result) => {
          console.log("✅ Email sent successfully:", result.text);
          alert("Mail Sent! 🎉 Thank you for contacting.");
          reset(); // Clear form after submission
        },
        (error) => {
          console.error("❌ Error sending email:", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Livingston | Contact</title>
      </Helmet>
      <div className="flex flex-col xl:flex-row w-full gap-6 px-6 pt-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
        {/* Left Side - Socials */}
        <div className="xl:w-1/2">
          <ContactSocials />
        </div>

        {/* Right Side - Form */}
        <div className="xl:w-1/2 xl:pl-8 flex flex-col">
          <h2 className="text-2xl font-medium text-center xl:text-left">
            Contact Me
          </h2>
          <p className="mt-1 text-sm text-gray-400 text-center xl:text-left">
            Fill out the form below to get in touch.
          </p>

          <form
            ref={formData}
            className="mt-4 space-y-4"
            onSubmit={sendEmail} // Handle submit manually
          >
            {/* Input Fields */}
            {[{ label: "Name", name: "name", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Subject", name: "subject", type: "text" },
            ].map((field, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-sm font-medium" htmlFor={field.name}>
                  {field.label}
                </label>
                <input
                  className="mt-1 w-full p-2 text-sm bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-accentColor"
                  id={field.name}
                  name={field.name} // Add name attribute for EmailJS
                  type={field.type}
                  {...register(field.name, {
                    required: `${field.label} is required`,
                  })}
                />
                <p className="text-xs text-red-500 mt-1">{errors[field.name]?.message}</p>
              </div>
            ))}

            {/* Message Textarea */}
            <div className="flex flex-col">
              <label className="text-sm font-medium" htmlFor="textmessage">
                Message
              </label>
              <textarea
                className="mt-1 w-full p-2 text-sm bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-accentColor"
                id="textmessage"
                name="textmessage" // Add name attribute
                rows="4"
                {...register("textmessage", {
                  required: "Message is required",
                  minLength: { value: 5, message: "Should be at least 5 characters" },
                })}
              ></textarea>
              <p className="text-xs text-red-500 mt-1">{errors.textmessage?.message}</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-3 bg-accentColor text-black px-5 py-2 rounded-md text-sm font-medium transition hover:bg-opacity-80"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Contact;
