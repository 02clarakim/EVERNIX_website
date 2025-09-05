import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Thank you! Your message was sent.");
        setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error submitting form.");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* First Row */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-[22px]">
        <div className="flex-1">
          <label className="block text-black text-[18px] font-inter mb-3">
            First Name <span className="text-[#036]">*</span>
          </label>
          <div className="bg-white rounded-[10px] h-[42px] px-[21px] flex items-center">
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Jenny"
              className="w-full text-[#8E8E93] text-[16px] font-inter bg-transparent border-none outline-none"
              required
            />
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-black text-[18px] font-inter mb-3">
            Last Name <span className="text-[#036]">*</span>
          </label>
          <div className="bg-white rounded-[10px] h-[42px] px-[21px] flex items-center">
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Kim"
              className="w-full text-[#8E8E93] text-[16px] font-inter bg-transparent border-none outline-none"
              required
            />
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-[22px]">
        <div className="flex-1">
          <label className="block text-black text-[18px] font-inter mb-3">
            Email address <span className="text-[#036]">*</span>
          </label>
          <div className="bg-white rounded-[10px] h-[42px] px-[21px] flex items-center">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="evernix.ai@google.com"
              className="w-full text-[#8E8E93] text-[16px] font-inter bg-transparent border-none outline-none"
              required
            />
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-black text-[18px] font-inter mb-3">
            Phone number
          </label>
          <div className="bg-white rounded-[10px] h-[42px] px-[21px] flex items-center">
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 (510) 123-4560"
              className="w-full text-[#8E8E93] text-[16px] font-inter bg-transparent border-none outline-none"
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-black text-[18px] font-inter mb-3">Message</label>
        <div className="bg-white rounded-[10px] h-[136px] p-[21px]">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="I have a question regarding..."
            className="w-full h-full text-[#8E8E93] text-[16px] font-inter bg-transparent border-none outline-none resize-none"
            required
          />
        </div>
      </div>

      {/* Submit */}
      <div className="flex flex-col items-center gap-2">
        <button
          type="submit"
          className="bg-[#001F3F] rounded-[30px] px-[20px] py-[10px] text-white font-bold text-[16px] font-inter min-w-[154px]"
        >
          Submit
        </button>
        {status && <p className="text-sm text-gray-700 mt-2">{status}</p>}
      </div>
    </form>
  );
}
