import { IconClock, IconHeadset, IconHelp, IconMapPin, IconMessages, IconPhoneCall } from '@tabler/icons-react';
import { RegisterProps, FeaturesProps } from '@/shared/types';
import { HeroProps } from '@/shared/types';

// Hero data on Register page *******************
export const heroRegister: HeroProps = {
  title: 'Get in touch with us',
  subtitle: (
    <>
      <span className="hidden md:inline">{`Thank you for considering us for your project! We're excited to hear from you.`}</span>{' '}
      {`Our team can assist you in building your dream website.`}
    </>
  ),
  tagline: 'Demo Register Page',
};

// Register data on Register page *******************
export const Register2Register: RegisterProps = {
  id: 'RegisterTwo-on-Register',
  hasBackground: true,
  header: {
    title: 'Create a new Account',
    subtitle: (
      <>
        Please take a moment to fill out this form.{' '}
        <span className="hidden md:inline">{`So we can better understand your needs and get the process started smoothly.`}</span>
      </>
    ),
  },

  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'First name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        autocomplete: 'off',
        placeholder: 'Last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Email address',
      },
    ],



    btn: {
      title: 'Create Account',
      type: 'submit',
    },
  },
};


