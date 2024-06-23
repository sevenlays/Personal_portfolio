'use client';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { motion } from 'framer-motion';
import { Textarea } from './ui/textarea';
import sendEmail from '@/utils/sendEmail';

const clearTemplate = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    let successTimeout: NodeJS.Timeout;

    if (isSuccess) {
      successTimeout = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }

    return () => {
      clearTimeout(successTimeout);
    };
  }, [isSuccess]);

  const handleReset = () => {
    setFormData(clearTemplate);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataObject: Record<string, unknown> = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    try {
      setIsLoading(true);
      const response = await sendEmail(formDataObject);
      setIsSuccess(true);
      handleReset();
      console.log('Email sent successfully:', response);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      service: value,
    }));
  };

  return (
    <div className='xl:h-[54%] order-2 xl:order-none'>
      <form
        className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
        onSubmit={handleSubmit}
      >
        <h3 className='text-3xl md:text-4xl text-accent'>
          Let's work together
        </h3>
        <p className='text-white/60 text-ms'>
          This form is designed to allow you to send me an email regarding
          potential job opportunities. I am available for hire and am excited to
          explore new projects and collaborations. Please fill out the form with
          the necessary details, and I will get back to you as soon as possible.
        </p>
        {/* input */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <Input
            type='firstname'
            value={formData.firstname}
            placeholder='Firstname'
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, firstname: e.target.value }))
            }
            required
          />
          <Input
            type='lastname'
            value={formData.lastname}
            placeholder='Lastname'
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, lastname: e.target.value }))
            }
            required
          />
          <Input
            type='email'
            value={formData.email}
            placeholder='Email'
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            required
          />
          <Input
            type='phone'
            value={formData.phone}
            placeholder='Phone number'
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
            required
          />
        </div>
        {/* select */}
        <Select onValueChange={handleChange}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Select a service' />
          </SelectTrigger>
          <SelectContent onChange={(e) => console.log(e.target)}>
            <SelectGroup>
              <SelectLabel>Select a service</SelectLabel>
              <SelectItem value='fronent'>Frontend Development</SelectItem>
              <SelectItem value='backend'>Backend Development</SelectItem>
              <SelectItem value='fullstack'>Full-Stack Development</SelectItem>
              <SelectItem value='customapp'>Custom Web App</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* text-area */}
        <Textarea
          className='h-[200px]'
          value={formData.message}
          placeholder='Type your message here.'
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
        />

        {/* btn */}
        <Button size='md' className='max-w-40' type='submit'>
          {isLoading ? 'Wait for it...' : 'Send message'}
        </Button>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0, duration: 0.4, ease: 'easeIn' },
            }}
            exit={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: 'easeOut' },
            }}
            className='text-white/60 text-xs md:text-sm'
          >
            Message sent successfully!
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default Form;
