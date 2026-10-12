import { useEffect, useState } from "react";

const StartProjectForm = ({ isOpen, setIsOpen }) => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [service, setService] = useState("AI Video");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted,setIsSubmitted] =useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [submitError, setSubmitError] = useState("");

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const validateForm = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required";
        } else if (
            name.trim().length < 2 ||
            name.trim().length > 80
        ) {
            newErrors.name = "Name must be between 2 and 80 characters";
        }

        if (!company.trim()) {
            newErrors.company = "Company name is required";
        } else if (
            company.trim().length < 2 ||
            company.trim().length > 120
        ) {
            newErrors.company =
                "Company name must be between 2 and 120 characters";
        }

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
        ) {
            newErrors.email = "Enter a valid email address";
        }

        const cleanedPhone = phone.trim().replace(/[\s()-]/g, "");
        const indianMobileRegex = /^(?:\+91|91)?[6-9]\d{9}$/;

        if (!cleanedPhone) {
            newErrors.phone = "Phone number is required";
        } else if (!indianMobileRegex.test(cleanedPhone)) {
            newErrors.phone =
                "Enter a valid Indian mobile number, e.g. 9876543210";
        }

        if (!service) {
            newErrors.service = "Please select a service";
        }

        if (message.trim().length > 1000) {
            newErrors.message = "Message cannot exceed 1,000 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        setSuccessMessage("");
        setSubmitError("");

        if (!validateForm()) return;

        setIsSubmitting(true);

        const formData = {
            name: name.trim(),
            company: company.trim(),
            email: email.trim(),
            phone: phone.trim(),
            service,
            message: message.trim(),
        };

        try {
            const apiUrl = import.meta.env.VITE_API_URL ||
    "http://localhost:5000";

            if (!apiUrl) {
                throw new Error(
                    "apiUrl is missing from your frontend .env file."
                );
            }

            const response = await fetch(
                `${apiUrl.replace(/\/+$/, "")}/api/project-enquiries`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            // Safely handle empty or non-JSON responses.
            const responseText = await response.text();
            let result = {};

            try {
                result = responseText ? JSON.parse(responseText) : {};
            } catch {
                throw new Error(
                    `Invalid server response (${response.status}). Check your backend terminal.`
                );
            }

            // if (!response.ok) {
            //     if (Array.isArray(result.errors)) {
            //         const backendErrors = {};

            //         result.errors.forEach(({ field, message }) => {
            //             if (field) {
            //                 backendErrors[field] = message;
            //             }
            //         });

            //         setErrors((prev) => ({
            //             ...prev,
            //             ...backendErrors,
            //         }));
            //     }

            //     throw new Error(
            //         result.message || "Failed to submit enquiry."
            //     );
            // }

            if (!response.ok) {
    if (Array.isArray(result.errors)) {
        const backendErrors = {};

        result.errors.forEach(({ field, message }) => {
            if (field) {
                backendErrors[field] = message;
            }
        });

        setErrors((prev) => ({
            ...prev,
            ...backendErrors,
        }));
    }

    throw new Error(
        result.message || "Failed to submit enquiry."
    );
}

setSuccessMessage(
    result.message || "Your enquiry has been submitted successfully."
);

setIsSubmitted(true);

// Clear form
setName("");
setCompany("");
setPhone("");
setEmail("");
setService("AI Video");
setMessage("");
setErrors({});

// CLOSE FORM
setTimeout(() => {
    setIsSubmitted(false);
   setIsOpen(false); 
   setSuccessMessage("")
}, 2000);

          
        } catch (error) {
            console.error("Project enquiry submission failed:", error);

            setSubmitError(
                error instanceof TypeError
                    ? "Unable to connect to the server. Check your backend and try again."
                    : error.message || "Something went wrong. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const errorClass = "mt-1 text-xs text-red-400";

    return (
        <div className="fixed inset-0 bg-black/50 w-full h-screen flex justify-center items-center z-100000000 overflow-y-auto">

           {isSubmitted ? (
            <div className="flex items-center justify-center bg-white font-black  text-base p-8 rounded-xl min-w-[100px]">
            <p>Form submitted successfully!</p>
            </div>
    ) :
            
             


          (
          <>
             {/* Form Content */} 
          <form
                noValidate
                onSubmit={handleSubmit}
                className="w-full my-auto bg-[#454545] p-6 rounded-xl flex flex-col gap-4 relative max-w-xl"
            >

                {/* Exit Button */}
                <button
                    type="button"
                    aria-label="Close form"
                    onClick={() => setIsOpen(false)}
                    className="w-5 h-5 p-3 text-xs flex items-center justify-center rounded-full bg-white/30 absolute right-3 top-3 text-sm uppercase tracking-widest text-black/70 transition hover:text-white"
                >
                    ✕
                </button>

                <p className="text-white text-xl">
                    Work with Content Foundry
                </p>

                <p className="text-white md:w-[60%]">
                    Tell us a little about your brand. We’ll take the conversation from there.
                </p>

                {submitError && (
                    <p role="alert" className="text-red-300 text-sm">
                        {submitError}
                    </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="uppercase text-white text-xs mb-3"
                        >
                            Name <span className="text-red-300">*</span>
                        </label>
                        <br />
                        <input
                            type="text"
                            required
                            className="bg-[#323232] text-white p-2 rounded-lg text-sm w-full outline-none"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name"
                            aria-invalid={!!errors.name}
                        />
                        {errors.name && (
                            <p className={errorClass}>{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="company"
                            className="uppercase text-white text-xs mb-3"
                        >
                            Company <span className="text-red-300">*</span>
                        </label>
                        <br />
                        <input
                            type="text"
                            required
                            className="bg-[#323232] text-white p-2 rounded-lg text-sm w-full outline-none"
                            id="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Company Name"
                            aria-invalid={!!errors.company}
                        />
                        {errors.company && (
                            <p className={errorClass}>{errors.company}</p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="uppercase text-white text-xs mb-3"
                        >
                            Email <span className="text-red-300">*</span>
                        </label>
                        <br />
                        <input
                            type="email"
                            required
                            className="bg-[#323232] text-white p-2 rounded-lg text-sm w-full outline-none"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                            <p className={errorClass}>{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="phone"
                            className="uppercase text-white text-xs mb-3"
                        >
                            Phone <span className="text-red-300">*</span>
                        </label>
                        <br />
                        <input
                            type="tel"
                            required
                            className="bg-[#323232] text-white p-2 rounded-lg text-sm w-full outline-none"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone Number"
                            aria-invalid={!!errors.phone}
                        />
                        {errors.phone && (
                            <p className={errorClass}>{errors.phone}</p>
                        )}
                    </div>
                </div>

                <div>
                    <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        aria-invalid={!!errors.service}
                        className="bg-[#323232] rounded-lg text-sm outline-none p-2 text-white w-full"
                    >
                        <option value="AI Video">AI Video</option>
                        <option value="Brand Films">Brand Films</option>
                        <option value="Orignal Shoot">Orignal Shoot</option>
                    </select>

                    {errors.service && (
                        <p className={errorClass}>{errors.service}</p>
                    )}
                </div>

                <div>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        maxLength={1000}
                        aria-invalid={!!errors.message}
                        className="bg-[#323232] h-[100px] w-full resize-none text-white rounded-lg p-3 outline-none"
                        placeholder="Type your message here"
                    />

                    {errors.message && (
                        <p className={errorClass}>{errors.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="md:w-fit rounded-4xl bg-white font-black px-3 py-2 hover:bg-violet hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Submitting..." : "Submit Query"}
                </button>
            </form>
            </>
          )}
        </div>
    );
};

export default StartProjectForm;
