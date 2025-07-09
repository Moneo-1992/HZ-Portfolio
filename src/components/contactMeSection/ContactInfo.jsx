import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";
import {useTranslation} from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text={t('contact.email')} Image={HiOutlineMail} />
      <SingleInfo text={t('contact.phone')} Image={FiPhone} />
      <SingleInfo text={t('contact.location')} Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
