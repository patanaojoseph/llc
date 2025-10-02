"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Heart } from "lucide-react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const result = await emailjs.send(
  //       "service_rpgvawx", // your Service ID
  //       "template_htrrj3g", // your Template ID
  //       {
  //         name: formData.name,
  //         email: formData.email,
  //         phone: formData.phone,
  //         message: formData.message,
  //       },
  //       "wDLXOUHWjn5DLy4so" // from Account > API Keys
  //     );

  //     if (result.status === 200) {
  //       alert("✅ Message sent successfully!");
  //       setFormData({ name: "", email: "", phone: "", message: "" });
  //     } else {
  //       alert("❌ Failed to send message. Try again.");
  //     }
  //   } catch (error) {
  //     console.error("EmailJS error:", error);
  //     alert("⚠️ Something went wrong. Please try again.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_rpgvawx",
        "template_htrrj3g",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "wDLXOUHWjn5DLy4so"
      );

      if (result.status === 200) {
        toast.success("✅ Message sent successfully!", {
          description: "Our team will get back to you soon.",
          duration: 3000,
        });

        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("❌ Failed to send message", {
          description: "Please try again later.",
        });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("⚠️ Something went wrong", {
        description: "Please check your network and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "281-512-6064",
      subInfo: "Available 24/7 for emergencies",
      color: "text-emerald-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "Cesgeriatricare@yahoo.com",
      subInfo: "We'll respond within 2 hours",
      color: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Houston, Texas",
      subInfo: "Serving the greater Houston area",
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Office Hours",
      info: "Mon-Fri: 9:00AM-5:00PM",
      subInfo: "Weekend consultations available",
      color: "text-orange-600",
    },
  ];

  return (
    // <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50'>
    //   <section className='max-w-7xl mx-auto px-6 py-16'>
    //     {/* Header Section */}
    //     <div className='text-center mb-16'>
    //       <div className='flex items-center justify-center mb-4'>
    //         <Heart className='w-8 h-8 text-rose-500 mr-3' />
    //         <span className='text-sm font-semibold text-emerald-700 bg-emerald-100 px-4 py-2 rounded-full'>
    //           Caring for Your Loved Ones
    //         </span>
    //       </div>
    //       <h1 className='text-5xl font-bold text-slate-800 mb-4'>
    //         Get In <span className='text-teal-800'>Touch</span>
    //       </h1>
    //       <p className='text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed'>
    //         We&apos;re here to provide compassionate care and support for you
    //         and your family. Reach out to discuss how we can help with your
    //         geriatric care needs.
    //       </p>
    //     </div>

    //     {/* Contact Info Cards */}
    //     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
    //       {contactInfo.map((item, index) => (
    //         <div
    //           key={index}
    //           className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group'
    //         >
    //           <div
    //             className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
    //           >
    //             <item.icon className='w-6 h-6' />
    //           </div>
    //           <h3 className='font-semibold text-slate-800 text-lg mb-2'>
    //             {item.title}
    //           </h3>
    //           <p className='font-medium text-slate-700 mb-1'>{item.info}</p>
    //           <p className='text-sm text-slate-500'>{item.subInfo}</p>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Main Content Grid */}
    //     <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-start'>
    //       {/* Contact Form */}
    //       <div className='lg:col-span-2'>
    //         <div className='bg-white rounded-3xl p-8 shadow-xl border border-slate-100'>
    //           <div className='mb-8'>
    //             <h2 className='text-3xl font-bold text-slate-800 mb-3'>
    //               Send Us a Message
    //             </h2>
    //             <p className='text-lg text-slate-600'>
    //               Fill out the form below and we&apos;ll get back to you within
    //               24 hours. For urgent matters, please call us directly.
    //             </p>
    //           </div>

    //           {/* ✅ Wrapped inputs + button in a <form> */}
    //           <form onSubmit={handleSubmit} className='space-y-6'>
    //             <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
    //               <div>
    //                 <label className='block text-slate-800 font-semibold mb-3 text-sm uppercase tracking-wider'>
    //                   Full Name *
    //                 </label>
    //                 <input
    //                   type='text'
    //                   name='name'
    //                   value={formData.name}
    //                   onChange={handleChange}
    //                   required
    //                   className='w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-300 text-slate-700 bg-slate-50 hover:bg-white'
    //                   placeholder='Enter your full name'
    //                 />
    //               </div>

    //               <div>
    //                 <label className='block text-slate-800 font-semibold mb-3 text-sm uppercase tracking-wider'>
    //                   Phone Number
    //                 </label>
    //                 <input
    //                   type='tel'
    //                   name='phone'
    //                   value={formData.phone}
    //                   onChange={handleChange}
    //                   className='w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-300 text-slate-700 bg-slate-50 hover:bg-white'
    //                   placeholder='(555) 123-4567'
    //                 />
    //               </div>
    //             </div>

    //             <div>
    //               <label className='block text-slate-800 font-semibold mb-3 text-sm uppercase tracking-wider'>
    //                 Email Address *
    //               </label>
    //               <input
    //                 type='email'
    //                 name='email'
    //                 value={formData.email}
    //                 onChange={handleChange}
    //                 required
    //                 className='w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-300 text-slate-700 bg-slate-50 hover:bg-white'
    //                 placeholder='your.email@example.com'
    //               />
    //             </div>

    //             <div>
    //               <label className='block text-slate-800 font-semibold mb-3 text-sm uppercase tracking-wider'>
    //                 How Can We Help? *
    //               </label>
    //               <textarea
    //                 name='message'
    //                 value={formData.message}
    //                 onChange={handleChange}
    //                 required
    //                 rows={5}
    //                 className='w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-300 text-slate-700 bg-slate-50 hover:bg-white resize-none'
    //                 placeholder='Tell us about your care needs, questions, or how we can assist you and your loved one...'
    //               />
    //             </div>

    //             <button
    //               type='submit'
    //               disabled={isSubmitting}
    //               className='w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3'
    //             >
    //               {isSubmitting ? (
    //                 <>
    //                   <div className='animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent'></div>
    //                   <span>Sending...</span>
    //                 </>
    //               ) : (
    //                 <>
    //                   <Send className='w-5 h-5' />
    //                   <span>Send Message</span>
    //                 </>
    //               )}
    //             </button>
    //           </form>

    //           <div className='mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200'>
    //             <p className='text-sm text-emerald-800 flex items-center'>
    //               <Heart className='w-4 h-4 mr-2 text-emerald-600' />
    //               We respect your privacy and will never share your information
    //               with third parties.
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Map and Additional Info */}
    //       <div className='space-y-8'>
    //         {/* Google Map */}
    //         <div className='bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100'>
    //           <div className='p-6 border-b border-slate-100'>
    //             <h3 className='text-xl font-bold text-slate-800 mb-2'>
    //               Our Location
    //             </h3>
    //             <p className='text-slate-600'>
    //               Proudly serving the Houston community
    //             </p>
    //           </div>
    //           <div className='h-64'>
    //             <iframe
    //               src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.1234567890!2d-95.3698!3d29.7604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640babc1234567%3A0xabcdef123456789!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1692301234567!5m2!1sen!2sus'
    //               width='100%'
    //               height='100%'
    //               style={{ border: 0 }}
    //               allowFullScreen={true}
    //               loading='lazy'
    //               referrerPolicy='no-referrer-when-downgrade'
    //             ></iframe>
    //           </div>
    //         </div>

    //         {/* Emergency Contact */}
    //         <div className='bg-gradient-to-br from-rose-500 to-rose-600 rounded-3xl p-6 text-white shadow-xl'>
    //           <div className='flex items-center mb-4'>
    //             <Phone className='w-6 h-6 mr-3' />
    //             <h3 className='text-xl font-bold'>Emergency Contact</h3>
    //           </div>
    //           <p className='text-rose-100 mb-4'>
    //             For urgent care needs outside of business hours
    //           </p>
    //           <a
    //             href='tel:5551234567'
    //             className='inline-flex items-center bg-white text-rose-600 px-6 py-3 rounded-xl font-bold hover:bg-rose-50 transition-colors duration-300'
    //           >
    //             <Phone className='w-4 h-4 mr-2' />
    //             Call Now: (555) 123-4567
    //           </a>
    //         </div>

    //         {/* Care Promise */}
    //         <div className='bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-6 text-white shadow-xl'>
    //           <div className='flex items-center mb-4'>
    //             <Heart className='w-6 h-6 mr-3' />
    //             <h3 className='text-xl font-bold'>Our Promise</h3>
    //           </div>
    //           <p className='text-emerald-100'>
    //             Compassionate, professional care tailored to each
    //             individual&apos;s unique needs. Your family&apos;s wellbeing is
    //             our highest priority.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    <section className='max-w-7xl mx-auto px-6 py-6'>
      {/* Header Section */}
      <div className='text-center mb-6'>
        <div className='flex items-center justify-center mb-6'>
          <Heart className='w-10 h-10 text-rose-600 mr-3 animate-pulse' />
          <span className='text-sm font-semibold text-emerald-800 bg-emerald-100 px-5 py-2 rounded-full shadow-sm'>
            Compassion & Care, Always
          </span>
        </div>
        <h1 className='text-4xl md:text-4xl lg:text-4xl font-bold tracking-tight text-slate-700 mb-6'>
          Get in{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-violet-400 to-violet-500'>
            Touch
          </span>
        </h1>
        <p className='text-md text-slate-600 max-w-2xl mx-auto leading-relaxed'>
          We’re here to listen and support. Whether you need help now or are
          planning ahead, our dedicated team will guide you every step of the
          way.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6'>
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group'
          >
            <div
              className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-50 ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              <item.icon className='w-7 h-7' />
            </div>
            <h3 className='font-semibold text-slate-800 text-lg mb-2'>
              {item.title}
            </h3>
            <p className='font-medium text-slate-700 mb-1'>{item.info}</p>
            <p className='text-sm text-slate-500'>{item.subInfo}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-14 items-start'>
        {/* Contact Form */}
        <div className='lg:col-span-2'>
          <div className='bg-white rounded-3xl p-10 shadow-xl border border-slate-100'>
            <div className='mb-10'>
              <h2 className='text-3xl font-bold text-slate-800 mb-3'>
                Send Us a Message
              </h2>
              <p className='text-md text-slate-600'>
                Fill out the form below and our care team will respond within 24
                hours. For urgent matters, please call us directly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-7'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-slate-800 font-semibold mb-3 text-sm uppercase tracking-wide'>
                    Full Name *
                  </label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-300 text-slate-700 bg-slate-50 hover:bg-white'
                    placeholder='Jane Doe'
                  />
                </div>

                <div>
                  <label className='block text-slate-800 font-semibold mb-3 text-sm uppercase tracking-wide'>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-300 text-slate-700 bg-slate-50 hover:bg-white'
                    placeholder='(555) 123-4567'
                  />
                </div>
              </div>

              <div>
                <label className='block text-slate-800 font-semibold mb-3 text-sm uppercase tracking-wide'>
                  Email Address *
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-300 text-slate-700 bg-slate-50 hover:bg-white'
                  placeholder='your.email@example.com'
                />
              </div>

              <div>
                <label className='block text-slate-800 font-semibold mb-3 text-sm uppercase tracking-wide'>
                  How Can We Help? *
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className='w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-300 text-slate-700 bg-slate-50 hover:bg-white resize-none'
                  placeholder='Tell us about your care needs...'
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gradient-to-r from-violet-200 via-violet-400 to-violet-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-violet-700 hover:to-violet-800 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3'
              >
                {isSubmitting ? (
                  <>
                    <div className='animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent'></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className='w-5 h-5' />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            <div className='mt-8 p-5 bg-emerald-50 rounded-xl border border-emerald-200'>
              <p className='text-sm text-emerald-800 flex items-center'>
                <Heart className='w-4 h-4 mr-2 text-emerald-600' />
                Your trust matters. We never share your personal information.
              </p>
            </div>
          </div>
        </div>

        {/* Map & Additional Info */}
        <div className='space-y-6'>
          {/* Map */}
          <div className='bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100'>
            <div className='p-6 border-b border-slate-100'>
              <h3 className='text-xl font-bold text-slate-800 mb-2'>
                Our Location
              </h3>
              <p className='text-slate-600'>
                Proudly serving the Houston community
              </p>
            </div>
            <div className='h-72'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.008377282369!2d-95.36980228491016!3d29.76042698199754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf3d4d2f7c77%3A0xe2f4b53c5bb1a2a5!2sHouston%20City%20Hall!5e0!3m2!1sen!2sus!4v1694123456789!5m2!1sen!2sus'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen={true}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>

          {/* Emergency Contact */}
          <div className='bg-gradient-to-br from-rose-500 to-rose-600 rounded-3xl p-6 text-white shadow-xl'>
            <div className='flex items-center mb-4'>
              <Phone className='w-6 h-6 mr-3' />
              <h3 className='text-xl font-bold'>Emergency Contact</h3>
            </div>
            <p className='text-rose-100 mb-4'>
              For urgent care needs outside of business hours
            </p>
            <div className='flex justify-center mb-2'>
              <a
                href='tel:2815126064'
                className='inline-flex items-center bg-white text-rose-600 px-6 py-3 rounded-xl font-bold hover:bg-rose-50 transition-colors duration-300'
              >
                <Phone className='w-4 h-4 mr-2' />
                Call Now: 281-512-6064
              </a>
            </div>
          </div>

          {/* Promise */}
          <div className='bg-gradient-to-br from-teal-700 to-teal-700 rounded-3xl p-6 text-white shadow-xl'>
            <div className='flex items-center mb-4'>
              <Heart className='w-6 h-6 mr-3' />
              <h3 className='text-xl font-bold'>Our Promise</h3>
            </div>
            <p className='text-emerald-100 leading-relaxed'>
              Compassionate, professional care tailored to each
              individual&apos;s unique needs. Your family&apos;s wellbeing is
              always our highest priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
