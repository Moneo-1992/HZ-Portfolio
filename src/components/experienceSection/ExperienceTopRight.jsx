import { useTranslation } from "react-i18next";


const ExperienceTopRight = () => {
  const { t } = useTranslation();
  if ( t("experienceInfoType") === "EN" ) {
    return (
      <div className="xl:w-[25%] lg:w-[30%] border border-lightBrown p-4 rounded-xl">
        <p className="text-lg text-center text-lightGrey">
          I specialize in{" "}
          <span className="font-bold text-white">
            React, Vue, TypeScript, and Node.js
          </span>
          , using best practices to build scalable and maintainable web applications.<br />
          Over 9 years, I’ve worked at companies across {" "}
          <span className="font-bold text-white">various industries</span>，
          contributing to  {" "} <span className="font-bold text-white">30+ projects</span>—
          from startup websites to {" "} <span className="font-bold text-white">complex front-end systems</span>
          —with solid experience in development, debugging, and issue resolution, always delivering clean code and seamless user experiences.
        </p>
      </div>
    );
  } else {
    return (
      <div className="xl:w-[25%] lg:w-[30%] border border-lightBrown p-4 rounded-xl">
        <p className="text-lg text-center text-lightGrey">
          我专注于{" "}
          <span className="font-bold text-white">
            React、Vue、TypeScript 和 Node.js
          </span>
          ，遵循最佳实践构建可扩展、易维护的 Web 应用。<br />
          过去9年，我曾服务于多个 不同行业的公司，参与了{" "}
          <span className="font-bold text-white">30 多个项目</span>——从初创网站到{" "}
          <span className="font-bold text-white">复杂的前端系统</span>——
          积累了丰富的 开发、调试与问题修复经验，始终追求简洁代码与流畅体验。
        </p>
      </div>
    );
  }
  
};

export default ExperienceTopRight;
