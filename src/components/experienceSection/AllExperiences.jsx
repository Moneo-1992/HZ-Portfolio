import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useTranslation } from "react-i18next";

const experiencesCN = [
  {
    job: "前端开发工程师 (初级)",
    company: "上海YOP科技有限公司",
    date: "2016-2018",
    responsibilities: [
      "使用 HTML、CSS 和 JavaScript 实现响应式网页页面",
      "协助开发团队维护公司官网和移动端 H5 页面",
      "参与公司前端组件库的初步建设与维护",
      "配合后端进行接口联调，处理常见跨域与数据格式问题"
    ],
  },
  {
    job: "前端开发工程师 (中级)",
    company: "易见股份有限公司",
    date: "2019 - 2023",
    responsibilities: [
      "独立负责多个前端项目的开发与上线，包括后台管理系统与数据可视化平台",
      "使用 Vue.js / React / Uniapp 等主流框架开发业务组件，优化组件复用性与性能",
      "主导前端项目的构建优化（Webpack 配置优化、按需加载等）",
      "与产品、UI 和后端团队紧密协作，推进项目按时交付"
    ],
  },
  {
    job: "前端开发架构师 (高级)",
    company: "中国联合网络通信有限公司",
    date: "2023 - 至今",
    responsibilities: [
      "负责大型前端系统的架构设计与技术选型，推动前端技术演进",
      "主导微前端架构改造，提升多个业务模块的独立部署能力",
      "建立统一的前端开发规范、代码风格与 CI/CD 流程",
      "担任前端开发组长，带领团队进行技术攻坚与性能优化",
      "同时学习并引进 Node.js 相关技术后端服务的开发，提升全栈能力"
    ],
  },
];


const experiencesEN = [
  {
    job: "Frontend Developer (Junior)",
    company: "Shanghai YOP Technology Co., Ltd.",
    date: "2016 - 2018",
    responsibilities: [
      "Developed responsive web pages using HTML, CSS, and JavaScript",
      "Assisted in maintaining the company’s official website and mobile H5 pages",
      "Participated in the initial development and maintenance of the company’s internal component library",
      "Collaborated with backend developers for API integration, addressing common issues such as CORS and data formatting"
    ],
  },
  {
    job: "Frontend Developer (Mid-level)",
    company: "EasyVisible Co., Ltd.",
    date: "2019 - 2023",
    responsibilities: [
      "Independently developed and launched multiple frontend projects including admin dashboards and data visualization platforms",
      "Built and optimized reusable business components using Vue.js, React, and Uniapp",
      "Led frontend build optimization, including Webpack configuration and code splitting for performance improvements",
      "Worked closely with product managers, UI/UX designers, and backend engineers to ensure timely project delivery"
    ],
  },
  {
    job: "Frontend Architect (Senior)",
    company: "China Unicom",
    date: "2023 - Present",
    responsibilities: [
      "Responsible for architecture design and technology selection of large-scale frontend systems, driving technical evolution",
      "Led micro-frontend architecture transformation to enable independent deployment of multiple business modules",
      "Established unified frontend development standards, coding conventions, and CI/CD workflows",
      "Acted as frontend team lead, guiding technical problem-solving and performance optimization",
      "Explored and introduced Node.js to support backend service development, enhancing full-stack capabilities"
    ],
  },
];





const AllExperiences = () => {
  const { t } = useTranslation();
  let experiences = t("experienceInfoType") === "EN" ? experiencesEN : experiencesCN;
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <div key={index}>
            <SingleExperience  experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AllExperiences;
