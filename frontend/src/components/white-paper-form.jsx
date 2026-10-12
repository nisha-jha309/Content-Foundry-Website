import { useEffect, useState } from "react";

const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000";

const WhitePaperForm = ({
    isOpenWhite,
    setIsOpenWhite,
}) => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [errors, setErrors] = useState({});
    const [emailPermission, setEmailPermission] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [downloadUrl, setDownloadUrl] = useState("");
    const [apiError, setApiError] = useState("");

    // IMPORTANT: false means the form shows first
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Lock body scroll while modal is open
    useEffect(() => {
        if (isOpenWhite) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpenWhite]);

    if (!isOpenWhite) {
        return null;
    }

    // Validation
    const validateForm = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required";
        } else if (
            name.trim().length < 2 ||
            name.trim().length > 80
        ) {
            newErrors.name =
                "Name must be between 2 and 80 characters";
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
            email.trim().length > 254 ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                email.trim()
            )
        ) {
            newErrors.email = "Enter a valid email address";
        }

        const cleanedPhone = phone
            .trim()
            .replace(/[\s()-]/g, "");

        const indianMobileRegex =
            /^(?:\+91|91)?[6-9]\d{9}$/;

        if (
            cleanedPhone &&
            !indianMobileRegex.test(cleanedPhone)
        ) {
            newErrors.phone =
                "Enter a valid Indian mobile number, e.g. 9876543210";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        setSuccessMessage("");
        setDownloadUrl("");
        setApiError("");

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(
                `${API_URL}/api/white-paper`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name.trim(),
                        company: company.trim(),
                        email: email.trim(),
                        phone: phone.trim(),
                        emailPermission,
                    }),
                }
            );

            const responseText = await response.text();
            let result = {};

            try {
                result = responseText
                    ? JSON.parse(responseText)
                    : {};
            } catch {
                throw new Error(
                    "Invalid response from server. Please try again."
                );
            }

            // Server error
            if (!response.ok || !result.success) {
                if (Array.isArray(result.errors)) {
                    const serverErrors = {};

                    result.errors.forEach(
                        ({ field, message }) => {
                            if (field) {
                                serverErrors[field] = message;
                            }
                        }
                    );

                    setErrors((previous) => ({
                        ...previous,
                        ...serverErrors,
                    }));
                }

                throw new Error(
                    result.message ||
                    "Unable to submit your request."
                );
            }

            // SUCCESS: switch from form to success box
            setSuccessMessage("Your white paper is ready.");
            setDownloadUrl(
                result?.data?.downloadUrl || ""
            );

            setIsSubmitted(true);

            // Clear form fields
            setName("");
            setCompany("");
            setPhone("");
            setEmail("");
            setEmailPermission(false);
            setErrors({});
        } catch (error) {
            setApiError(
                error.message ||
                "Unable to connect to the server. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const errorClass = "mt-1 text-xs text-red-400";

    const inputClass =
        "bg-[#323232] text-white p-2 rounded-lg text-sm w-full outline-none";

    // UI
    return (
        <div
            className="
                fixed inset-0
                z-[100000000]
                flex items-center justify-center
                overflow-y-auto
                bg-black/60
                p-3 sm:p-5
            "
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="white-paper-title"
                className="
                    relative
                    w-full max-w-xl
                    max-h-[90dvh]
                    overflow-y-auto
                    rounded-xl
                    bg-[#454545]
                    p-5 pt-14
                    sm:p-8 sm:pt-14
                    shadow-2xl
                "
            >
                {/* CLOSE BUTTON: available in both states */}
                <button
                    type="button"
                    onClick={() => setIsOpenWhite(false)}
                    aria-label="Close white paper dialog"
                    className="
                        absolute right-3 top-3
                        flex h-9 w-9
                        items-center justify-center
                        rounded-full
                        bg-white/20
                        text-white
                        transition
                        hover:bg-white/30
                    "
                >
                    ✕
                </button>

                {isSubmitted ? (
                    /* SUCCESS BOX — only after successful submission */
                    <div
                        className="
                            flex flex-col
                            items-center
                            justify-center
                            gap-5
                            py-4 sm:py-6
                            text-center
                        "
                    >
                        <div
                            className="
                                flex h-14 w-14
                                items-center justify-center
                                rounded-full
                                bg-white/10
                                text-3xl text-white
                            "
                        >
                            ✓
                        </div>

                        <div className="flex flex-col gap-3">
                            <h2
                                id="white-paper-title"
                                className="
                                    text-xl sm:text-2xl
                                    font-semibold
                                    text-white
                                "
                            >
                                Your White Paper Is Ready!
                            </h2>

                            <p className="text-sm leading-6 text-white/80">
                                {successMessage} It has been sent
                                to your email. You can also download
                                it directly below.
                            </p>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex w-full flex-col gap-3 pt-2">
                            {downloadUrl ? (
                                <a
                                    href={downloadUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        flex w-full
                                        items-center justify-center
                                        rounded-full
                                        bg-white
                                        px-4 py-3
                                        text-sm font-semibold
                                        text-black
                                        transition
                                        hover:bg-gray-200
                                    "
                                >
                                    Download PDF ↗
                                </a>
                            ) : (
                                <p className="text-sm text-white/70">
                                    Please check your email for
                                    the white paper.
                                </p>
                            )}

                            <a
                                href="/book-brand-story-session"
                                className="
                                    flex w-full
                                    items-center justify-center
                                    rounded-full
                                    border border-white/20
                                    bg-white/10
                                    px-4 py-3
                                    text-sm font-medium
                                    text-white/50
                                    transition
                                    hover:bg-white/20
                                    hover:text-white
                                "
                            >
                                Book a Brand Story Session ↗
                            </a>
                        </div>
                    </div>
                ) : (
                    /* FORM — initial state */
                    <form
                        noValidate
                        onSubmit={handleSubmit}
                        className="flex w-full flex-col gap-4"
                    >
                        <p className="pr-8 text-xl text-white">
                            Give your audience a reason to come back.
                        </p>

                        <p className="text-sm text-white">
                            Explore the business case for branded
                            micro-dramas, real brand examples,
                            distribution approaches and an
                            illustrative ROI framework.
                        </p>

                        {/* FORM FIELDS */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {/* NAME */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-xs uppercase text-white"
                                >
                                    Name{" "}
                                    <span className="text-red-300">*</span>
                                </label>

                                <input
                                    type="text"
                                    required
                                    maxLength={80}
                                    id="name"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                    placeholder="Full Name"
                                    className={inputClass}
                                />

                                {errors.name && (
                                    <p className={errorClass}>
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* COMPANY */}
                            <div>
                                <label
                                    htmlFor="company"
                                    className="mb-2 block text-xs uppercase text-white"
                                >
                                    Company{" "}
                                    <span className="text-red-300">*</span>
                                </label>

                                <input
                                    type="text"
                                    required
                                    maxLength={120}
                                    id="company"
                                    value={company}
                                    onChange={(e) =>
                                        setCompany(e.target.value)
                                    }
                                    placeholder="Company Name"
                                    className={inputClass}
                                />

                                {errors.company && (
                                    <p className={errorClass}>
                                        {errors.company}
                                    </p>
                                )}
                            </div>

                            {/* EMAIL */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-xs uppercase text-white"
                                >
                                    Email{" "}
                                    <span className="text-red-300">*</span>
                                </label>

                                <input
                                    type="email"
                                    required
                                    maxLength={254}
                                    id="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    placeholder="Email Address"
                                    className={inputClass}
                                />

                                {errors.email && (
                                    <p className={errorClass}>
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* PHONE */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-2 block text-xs uppercase text-white"
                                >
                                    Phone
                                </label>

                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) =>
                                        setPhone(e.target.value)
                                    }
                                    placeholder="Phone Number"
                                    className={inputClass}
                                />

                                {errors.phone && (
                                    <p className={errorClass}>
                                        {errors.phone}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* PRIVACY */}
                        <p className="text-xs text-white">
                            We’ll use your details to deliver the
                            white paper. Read our Privacy Policy.
                        </p>

                        {/* MARKETING CONSENT */}
                        <div
                            className="
                                flex items-start gap-3
                                rounded-xl
                                border border-white/10
                                bg-[#323232]/60
                                p-4
                                transition-colors
                                hover:border-white/25
                            "
                        >
                            <input
                                type="checkbox"
                                id="emailPermission"
                                name="emailPermission"
                                checked={emailPermission}
                                onChange={(e) =>
                                    setEmailPermission(
                                        e.target.checked
                                    )
                                }
                                className="
                                    mt-0.5 h-4 w-4
                                    shrink-0 cursor-pointer
                                    accent-white
                                "
                            />

                            <label
                                htmlFor="emailPermission"
                                className="
                                    cursor-pointer
                                    text-sm leading-5
                                    text-white/80
                                "
                            >
                                I’d also like to receive{" "}
                                <span className="font-medium text-white">
                                    Content Foundry insights and updates
                                </span>{" "}
                                by email.

                                <span className="mt-1 block text-xs leading-4 text-white/50">
                                    Optional. You can unsubscribe
                                    at any time.
                                </span>
                            </label>
                        </div>

                        {/* API ERROR */}
                        {apiError && (
                            <p
                                role="alert"
                                className="text-sm text-red-300"
                            >
                                {apiError}
                            </p>
                        )}

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="
                                w-fit max-w-full
                                rounded-full
                                bg-white
                                px-4 py-3
                                text-sm font-black
                                text-black
                                transition
                                hover:bg-gray-200
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                            "
                        >
                            {isSubmitting
                                ? "Submitting..."
                                : "Get the White Paper ↗"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default WhitePaperForm;