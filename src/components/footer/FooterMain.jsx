import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const FooterMain = () => {
  const { t } = useTranslation();
  let footerLinks = [];

  if (t("experienceInfoType") == 'EN') {
    footerLinks = [
      {
        name: "About Me",
        section: "about",
      },
      {
        name: "Skills",
        section: "skills",
      },
      {
        name: "Experience",
        section: "experience",
      },
      {
        name: "Projects",
        section: "projects",
      },
    ]
  } else {
    footerLinks = [
      {
        name: "关于我",
        section: "about",
      },
      {
        name: "技术栈",
        section: "skills",
      },
      {
        name: "工作经历",
        section: "experience",
      },
      {
        name: "项目经验",
        section: "projects",
      },
    ]
  }
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-lightGrey ">Heath Zhang</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © 2024 Abdelrahman | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
