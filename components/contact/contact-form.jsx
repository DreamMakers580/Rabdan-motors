import Link from 'next/link';
import PropTypes from 'prop-types';
import { AiOutlineRight } from 'react-icons/ai';
import React , {useState} from 'react';

import emailjs from "@emailjs/browser";

function ContactForm({ contactItems }) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [loading, setLoading] = useState(false);
    
      const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
    
        setForm({
          ...form,
          [name]: value,
        });
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        //template_wioe6b3
        //service_1911pfs
        //vl2wpUTeAb3ihGhZb
        emailjs
          .send(
            "service_1911pfs",
            "template_wioe6b3",
            {
              from_name: form.name,
              to_name: "Rabdan Motors",
              from_email: form.email,
              to_email: "rabdanmotorsae@gmail.com",
              message: form.message,
            },
            "vl2wpUTeAb3ihGhZb"
          )
          .then(
            () => {
              setLoading(false);
              alert("Thank you. we will get back to you as soon as possible.");
    
              setForm({
                name: "",
                email: "",
                message: "",
              });
            },
            (error) => {
              setLoading(false);
              console.error(error);
    
              alert("Ahh, something went wrong. Please try again.");
            }
          );
      };
    

    return (
        <div className="contact-area md:pt-[145px] pt-[45px] border-[#595959] border-opacity-30 border-b md:pb-160 pb-[60px]">
            <div className="container">
                <div className="lg:grid lg:grid-cols-5">
                    <div className="contact-info lg:col-span-2 lg:pr-[15px]">
                        <h2 className="text-[48px] left-[58px] md:pb-[55px] pb-[35px]">
                            {contactItems[0]?.title}
                        </h2>
                        <h3
                            className="text-3xl leading-9 font-semibold"
                            dangerouslySetInnerHTML={{
                                __html: contactItems[0]?.subTitle,
                            }}
                        />
                        <ul className="text-[14px] leading-[27px] text-secondary pt-6">
                            <li className="pb-[15px] max-w-[270px]">
                                {contactItems[0]?.address}
                            </li>
                            <li className="pb-[15px]">
                                <Link
                                    href={`${contactItems[0]?.contactNumberPath}`}
                                >
                                    <a>{contactItems[0]?.contactNumber}</a>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`${contactItems[0]?.contactEmailPath}`}
                                >
                                    <a>{contactItems[0]?.contactEmail}</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="button-wrap pt-[95px]">
                            <Link href="https://www.google.com/maps/place/%D8%B1%D8%A8%D8%AF%D8%A7%D9%86+%D9%85%D9%88%D8%AA%D9%88%D8%B1%D8%B2+RABDAN+MOTORS+244%E2%80%AD/@25.3512307,55.4830861,18.06z/data=!4m14!1m7!3m6!1s0x3e5f58a4cdb4229d:0xf7eacc681a7378c8!2z2LPZiNmCINin2YTYrdix2KfYrCDZhNmE2LPZitin2LHYp9iqINin2YTYtNin2LHZgtip!8m2!3d25.3508302!4d55.4819618!16s%2Fg%2F11dz2dl_vn!3m5!1s0x3e5f590ef2b14c2b:0xb225cc48c397ee4e!8m2!3d25.3516169!4d55.4831735!16s%2Fg%2F11fs_25m3c?entry=ttu">
                                <a className="inline-flex items-center text-[14px] leading-[30px] p-[11px_32px] transition duration-[0.4s] border border-[#969696] uppercase hover:border-black hover:bg-black hover:text-white">
                                    {contactItems[0]?.infoButtonText}
                                    <div className="ml-[5px]">
                                        <AiOutlineRight />
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="contact-form lg:col-span-3 max-md:pt-[50px]">
                        <h2 className="text-[18px] leading-[22px] uppercase md:mb-[75px] mb-[35px]">
                            {contactItems[0]?.formTitle}
                        </h2>
                        <form
                          onSubmit={handleSubmit}
                        >
                            <div>
                                <div className="lm:flex">
                                    <input
                                        className="w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black py-[15px] lm:mr-[20px]"
                                        placeholder="Name"
                                        type="text"
                                        onChange={handleChange}
                                        value={form.name}
                                        id="name"
                                        name='name'
                                        required
                                    />
                                    <input
                                        className="w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black py-[15px]"
                                        placeholder="Email"
                                        type="email"
                                        onChange={handleChange}
                                        value={form.email}
                                        id="email"
                                        name='email'
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <textarea
                                    className="w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black py-[15px] mt-[35px]"
                                    placeholder="Here goes your message"
                                    id="message"
                                    onChange={handleChange}
                                    value={form.message}
                                    name='message'
                                    rows="6"
                                    required
                                />
                            </div>

                            <div className="mt-[55px]">
                                <button
                                    type="submit"
                                    className="boxed-btn text-[14px] leading-[30px]"
                                >
                                    {loading ? "Sending..." : "Send us a massage"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

ContactForm.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
};

export default ContactForm;
