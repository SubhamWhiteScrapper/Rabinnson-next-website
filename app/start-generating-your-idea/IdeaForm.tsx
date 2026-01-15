"use client";

import React, { useState, useRef, useEffect } from "react";
import {
    Check, ChevronDown, User, Mail, Phone, MapPin,
    Layers, Briefcase, FileText, LayoutGrid, Monitor,
    Smartphone, Users, Calendar, Globe, Building, ArrowRight
} from "lucide-react";
import Typography from "@/components/typography";
import Input from "@/components/input";
import Button from "@/components/button";
import clsx from "clsx";

// --- Validation Helpers ---
export const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const isIndianMobileValid = (mobile: string) => /^[6-9]\d{9}$/.test(mobile);
export const isNotEmpty = (value: string) => value.trim().length > 0;

// --- Types ---
export interface IdeaFormData {
    fullName: string;
    email: string;
    mobileNumber: string;
    city: string;
    currentStage: string;
    isRegistered: boolean;
    industry: string;
    description: string;
    support: string[];
    preferredMode: string;
    preferredTimeSlot: string;
    consent: boolean;
}

export interface FormErrors {
    [key: string]: string;
}

// --- Validation Logic ---
export const validateIdeaForm = (data: IdeaFormData): FormErrors => {
    const errors: FormErrors = {};

    if (data.fullName.trim().length < 3) {
        errors.fullName = "Full name must be at least 3 characters";
    }

    if (!isEmailValid(data.email)) {
        errors.email = "Invalid email address";
    }

    if (!isIndianMobileValid(data.mobileNumber)) {
        errors.mobileNumber = "Invalid mobile number";
    }

    if (!data.currentStage) {
        errors.currentStage = "Please select current stage";
    }

    if (data.description.trim().length < 20) {
        errors.description = "Description must be at least 20 characters";
    }

    if (data.support.length === 0) {
        errors.support = "Select at least one support option";
    }

    if (!data.preferredMode) {
        errors.preferredMode = "Select preferred mode";
    }

    if (!data.preferredTimeSlot) {
        errors.preferredTimeSlot = "Select time slot";
    }

    if (!data.consent) {
        errors.consent = "Consent is required";
    }

    return errors;
};

// --- Custom Select Component ---
interface CustomSelectProps {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    options: string[];
    placeholder?: string;
    icon?: React.ElementType;
    required?: boolean;
    error?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    label, value, onChange, options, placeholder = "Select...", icon: Icon, required, error
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex flex-col gap-[6px] w-full group" ref={containerRef}>
            {label && (
                <Typography size={14} weight={600} className="text-slate-700 ml-1">
                    {label}
                    {required && <span className="text-rose-500"> *</span>}
                </Typography>
            )}
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={clsx(
                        "w-full flex items-center justify-between bg-[#F8F9FA] dark:bg-[#1D1D1D] rounded-[2px] px-[16px] py-[12px] text-left transition-all duration-300 border border-slate-200",
                        "hover:border-slate-300 hover:bg-slate-50",
                        isOpen ? "ring-2 ring-slate-900/5 border-slate-900 shadow-sm" : "",
                        !value ? "text-[#8D8D8D]" : "text-slate-900"
                    )}
                >
                    <div className="flex items-center gap-3 overflow-hidden">
                        {Icon && (
                            <Icon className={clsx(
                                "w-5 h-5 flex-shrink-0 transition-colors duration-300",
                                value || isOpen ? "text-slate-900" : "text-slate-400"
                            )} />
                        )}
                        <span className="truncate text-base font-medium">{value || placeholder}</span>
                    </div>
                    <ChevronDown className={clsx("w-5 h-5 text-slate-400 transition-transform duration-300", isOpen && "rotate-180")} />
                </button>

                {isOpen && (
                    <div className="absolute z-50 top-full left-0 right-0 mt-1.5 bg-white dark:bg-[#1D1D1D] rounded-[2px] shadow-xl border border-slate-100 max-h-[250px] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
                        {options.map((option) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => {
                                    onChange(option);
                                    setIsOpen(false);
                                }}
                                className={clsx(
                                    "w-full text-left px-[16px] py-[12px] text-sm hover:bg-slate-50 transition-colors flex items-center gap-3",
                                    value === option ? "text-slate-900 font-semibold bg-slate-50" : "text-slate-600"
                                )}
                            >
                                {value === option && <Check className="w-4 h-4 text-slate-900" />}
                                <span className={clsx(value === option ? "" : "pl-7")}>{option}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
            {error && <p className="text-xs text-rose-500 font-medium ml-1">{error}</p>}
        </div>
    );
};

// --- Main Idea Form ---
const IdeaForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobileNumber: "",
        city: "",
        currentStage: "",
        isRegistered: false,
        industry: "",
        description: "",
        support: [] as string[],
        preferredMode: "",
        preferredTimeSlot: "",
        consent: false,
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [serverError, setServerError] = useState<string | null>(null);

    const stages = ["Just an idea", "Validating the idea", "MVP / Prototype ready"];
    const industries = ["Technology / IT", "E-commerce", "Healthcare", "Education", "Manufacturing", "Other"];
    const supportOptions = [
        { label: "Idea validation", icon: LayoutGrid },
        { label: "Business model", icon: Briefcase },
        { label: "Market research", icon: Globe },
        { label: "Registration", icon: Building },
        { label: "Funding", icon: Layers },
        { label: "Mentorship", icon: Users },
        { label: "Guidance", icon: Check }
    ];
    const modes = [
        { id: "Online", label: "Online", icon: Monitor },
        { id: "Phone", label: "Phone", icon: Phone },
        { id: "InPerson", label: "In-p.", icon: Users }
    ];
    const timeSlots = ["Morning (10-1)", "Afternoon (1-5)", "Evening (5-8)"];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const handleSupportChange = (option: string) => {
        setFormData(prev => {
            const newSupport = prev.support.includes(option) ? prev.support.filter(s => s !== option) : [...prev.support, option];
            return { ...prev, support: newSupport };
        });
        if (errors.support) {
            setErrors(prev => ({ ...prev, support: "" }));
        }
    };

    const resetForm = () => {
        setFormData({
            fullName: "",
            email: "",
            mobileNumber: "",
            city: "",
            currentStage: "",
            isRegistered: false,
            industry: "",
            description: "",
            support: [] as string[],
            preferredMode: "",
            preferredTimeSlot: "",
            consent: false,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setServerError(null);
        setSuccessMessage(null);

        const newErrors = validateIdeaForm(formData as IdeaFormData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            // validation errors on client — show them
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await fetch('/api/send-idea', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const json = await res.json();
            if (!res.ok) {
                if (res.status === 400 && json.errors) {
                    setErrors(json.errors);
                    setServerError('Please correct the highlighted fields.');
                } else {
                    setServerError(json.error || 'Server error sending submission.');
                }
                return;
            }

            setSuccessMessage('Thanks — your idea has been submitted. We will contact you shortly.');
            resetForm();
        } catch (err) {
            console.error('submit error', err);
            setServerError('Network error — please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };



    const renderInput = (
        label: string,
        name: string,
        icon: React.ElementType,
        placeholder: string,
        type: "text" | "email" | "textarea" = "text",
        required = false,
        error?: string
    ) => {
        const Icon = icon;
        return (
            <div className="flex flex-col gap-[6px] w-full group">
                <Typography size={14} weight={600} className="text-slate-700 ml-1">
                    {label}
                    {required && <span className="text-rose-500"> *</span>}
                </Typography>
                <div className="relative">
                    <Icon className={clsx(
                        "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none z-10 transition-colors duration-300 group-focus-within:text-slate-900",
                        type === "textarea" && "!top-4 !translate-y-0" // Align to top for textarea
                    )} />
                    <Input
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        value={(formData as any)[name]}
                        onChange={handleChange}
                        isRequired={required}
                        // NO LABEL prop here to avoid double label rendering and allow custom wrapper control
                        className={clsx(
                            "!rounded-[2px] !pl-[3.25rem] !py-3.5 !text-base bg-[#F8F9FA] dark:bg-[#1D1D1D] border border-slate-200 focus:border-slate-900 transition-all duration-300 placeholder:text-[#8D8D8D] focus:bg-white focus:shadow-sm",
                            type === "textarea" && "!pt-3.5 min-h-[100px]",
                            error && "!border-rose-500 focus:!border-rose-500"
                        )}
                    />
                </div>
                {error && <p className="text-xs text-rose-500 font-medium ml-1">{error}</p>}
            </div>
        );
    };

    return (
        // Increased max-width to max-w-5xl
        <div className="w-full max-w-5xl mx-auto p-8 sm:p-12 bg-white rounded-[2px] shadow-2xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-10">
                {successMessage && (
                    <div className="p-3 bg-emerald-50 text-emerald-800 rounded border border-emerald-100">{successMessage}</div>
                )}
                {serverError && (
                    <div className="p-3 bg-rose-50 text-rose-800 rounded border border-rose-100">{serverError}</div>
                )}

                {/* Section 1: Personal Details */}
                <section className="space-y-5">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-2">
                        <div className="w-8 h-8 rounded-[2px] bg-slate-900 flex items-center justify-center shadow-md">
                            <User className="w-4 h-4 text-white" />
                        </div>
                        <Typography size={20} weight={600} className="text-slate-900">Personal Details</Typography>
                    </div>

                    <div className="grid grid-cols-1 gap-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {renderInput("Full Name", "fullName", User, "John Doe", "text", true, errors.fullName)}
                            {renderInput("Email Address", "email", Mail, "john@example.com", "email", true, errors.email)}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {renderInput("Mobile Number", "mobileNumber", Smartphone, "+91...", "text", true, errors.mobileNumber)}
                            {renderInput("City / Location", "city", MapPin, "Bangalore", "text", false, errors.city)}
                        </div>
                    </div>
                </section>

                {/* Section 2: Startup Info */}
                <section className="space-y-5">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-2">
                        <div className="w-8 h-8 rounded-[2px] bg-slate-900 flex items-center justify-center shadow-md">
                            <Briefcase className="w-4 h-4 text-white" />
                        </div>
                        <Typography size={20} weight={600} className="text-slate-900">Startup Info</Typography>
                    </div>

                    <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <CustomSelect label="Current Stage" value={formData.currentStage} onChange={(v) => { setFormData(d => ({ ...d, currentStage: v })); if (errors.currentStage) setErrors(e => ({ ...e, currentStage: '' })) }} options={stages} icon={Layers} required error={errors.currentStage} />
                            <CustomSelect label="Industry" value={formData.industry} onChange={(v) => setFormData(d => ({ ...d, industry: v }))} options={industries} icon={Building} />
                        </div>

                        {renderInput("Idea Description", "description", FileText, "What are you building?", "textarea", true, errors.description)}

                        <label className="flex items-center gap-3 cursor-pointer group p-3 rounded-[2px] border border-transparent hover:bg-slate-50 transition-colors -mt-2">
                            <div className="relative flex items-center justify-center">
                                <input type="checkbox" name="isRegistered" checked={formData.isRegistered} onChange={(e) => setFormData(d => ({ ...d, isRegistered: e.target.checked }))} className="peer sr-only" />
                                <div className="w-5 h-5 border-2 border-slate-300 bg-white peer-checked:bg-slate-900 peer-checked:border-slate-900 rounded-[2px] transition-all" />
                                <Check className="w-3.5 h-3.5 text-white absolute opacity-0 peer-checked:opacity-100 transition-opacity" />
                            </div>
                            <span className="text-sm font-medium text-slate-700">I have a registered business entity</span>
                        </label>
                    </div>
                </section>

                {/* Section 3: Support & Preferences */}
                <section className="space-y-5">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-2">
                        <div className="w-8 h-8 rounded-[2px] bg-slate-900 flex items-center justify-center shadow-md">
                            <LayoutGrid className="w-4 h-4 text-white" />
                        </div>
                        <Typography size={20} weight={600} className="text-slate-900">Support & Preferences</Typography>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <Typography size={14} weight={600} className="text-slate-700 ml-1">
                                Assistance Needed <span className="text-rose-500">*</span>
                            </Typography>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                                {supportOptions.map((opt) => (
                                    <label key={opt.label} className={clsx(
                                        "flex items-center gap-3 p-3 rounded-[2px] border cursor-pointer transition-all hover:bg-slate-50 hover:shadow-sm",
                                        formData.support.includes(opt.label) ? "border-slate-900 bg-slate-50 ring-1 ring-slate-900/10" : "border-slate-200"
                                    )}>
                                        <input type="checkbox" className="sr-only" checked={formData.support.includes(opt.label)} onChange={() => handleSupportChange(opt.label)} />
                                        <opt.icon className={clsx("w-4 h-4", formData.support.includes(opt.label) ? "text-slate-900" : "text-slate-400")} />
                                        <span className={clsx("text-xs font-semibold", formData.support.includes(opt.label) ? "text-slate-900" : "text-slate-600")}>{opt.label}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.support && <p className="text-xs text-rose-500 font-medium ml-1">{errors.support}</p>}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <Typography size={14} weight={600} className="text-slate-700 ml-1">
                                    Preferred Mode <span className="text-rose-500">*</span>
                                </Typography>
                                <div className="flex gap-3 h-[52px]"> {/* Fixed height matching input */}
                                    {modes.map((m) => (
                                        <label key={m.id} className={clsx(
                                            "flex-1 flex items-center justify-center gap-2 p-2 rounded-[2px] border cursor-pointer transition-all hover:bg-slate-50 hover:shadow-sm",
                                            formData.preferredMode === m.label ? "border-slate-900 bg-slate-50 ring-1 ring-slate-900/10" : "border-slate-200"
                                        )}>
                                            <input type="radio" name="preferredMode" value={m.label} checked={formData.preferredMode === m.label} onChange={handleChange} className="sr-only" />
                                            <m.icon className={clsx("w-5 h-5", formData.preferredMode === m.label ? "text-slate-900" : "text-slate-400")} />
                                            <span className={clsx("text-xs font-bold uppercase", formData.preferredMode === m.label ? "text-slate-900" : "text-slate-500")}>{m.label}</span>
                                        </label>
                                    ))}
                                </div>
                                {errors.preferredMode && <p className="text-xs text-rose-500 font-medium ml-1">{errors.preferredMode}</p>}
                            </div>
                            <CustomSelect label="Preferred Time" value={formData.preferredTimeSlot} onChange={(v) => { setFormData(d => ({ ...d, preferredTimeSlot: v })); if (errors.preferredTimeSlot) setErrors(e => ({ ...e, preferredTimeSlot: '' })) }} options={timeSlots} icon={Calendar} required error={errors.preferredTimeSlot} />
                        </div>
                    </div>
                </section>

                {/* Consent & Submit */}
                <div className="pt-6 border-t border-slate-100 space-y-6">
                    <label className="flex items-start gap-3 cursor-pointer group p-2 hover:bg-slate-50 rounded-[2px] transition-colors">
                        <div className="relative flex items-center justify-center mt-0.5">
                            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required className="peer sr-only" />
                            <div className="w-5 h-5 border-2 border-slate-300 bg-white peer-checked:bg-slate-900 peer-checked:border-slate-900 rounded-[2px] transition-all" />
                            <Check className="w-3.5 h-3.5 text-white absolute opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-sm text-slate-500">I agree to be contacted by the team and accept the <span className="text-slate-900 hover:underline font-semibold">Terms & Privacy Policy</span>.</span>
                    </label>
                    {errors.consent && <p className="text-xs text-rose-500 font-medium ml-2 -mt-4">{errors.consent}</p>}

                    <Button type="submit" variant="form" disabled={isSubmitting} aria-busy={isSubmitting} className={clsx("w-full py-4 text-lg font-bold !rounded-[2px] shadow-lg transition-all bg-slate-900 text-white flex items-center justify-center gap-3", isSubmitting ? "opacity-70 pointer-events-none" : "hover:shadow-xl hover:translate-y-[-2px]") }>
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                </svg>
                                <span>Submitting...</span>
                            </>
                        ) : (
                            <>Submit Application <ArrowRight className="w-5 h-5" /></>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default IdeaForm;
